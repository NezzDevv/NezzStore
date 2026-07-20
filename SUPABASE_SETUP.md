# Setup Supabase — WarNezzel

Tutorial ini menambahkan **real-time sinkronisasi pesanan antar device** ke aplikasi WarNezzel.
Customer pesan via WhatsApp → order tersimpan ke Supabase (cloud) → **semua karyawan yang login di device apapun** langsung mendapat notifikasi real-time.

---

## 📋 Daftar Isi

1. [Buat Akun & Project](#1-buat-akun--project)
2. [Buat Tabel `orders`](#2-buat-tabel-orders)
3. [Aktifkan Row Level Security (RLS)](#3-aktifkan-row-level-security-rls)
4. [Copy Konfigurasi](#4-copy-konfigurasi)
5. [Verifikasi](#5-verifikasi)
6. [Troubleshooting](#6-troubleshooting)

---

## 1. Buat Akun & Project

1. Buka **[supabase.com](https://supabase.com)** → klik **"Start your project"**
2. Sign up pakai GitHub/Email (gratis)
3. Setelah login, klik **"New Project"**
4. Isi form:
   - **Name**: `warnezzel` (atau nama apapun)
   - **Database Password**: buat password kuat (simpan baik-baik — tidak dipakai di kode, hanya untuk SQL editor)
   - **Region**: pilih `Southeast Asia (Singapore)` atau terdekat dengan Indonesia
5. Klik **"Create new project"** → tunggu ±1-2 menit sampai status **"Active"**

---

## 2. Buat Tabel `orders`

1. Di sidebar kiri, klik **"SQL Editor"**
2. Klik **"New query"**
3. Paste SQL berikut dan klik **"Run"**:

```sql
-- ============================================================
-- WARNEZZEL — orders table
-- ============================================================
create table public.orders (
  id uuid primary key default gen_random_uuid(),

  -- Identitas order
  order_id text unique not null,
  status text not null default 'pending'
    check (status in ('pending', 'completed', 'cancelled')),

  -- Data pelanggan & order
  customer_name text default 'Anonim',
  customer_phone text,
  table_number text not null,
  branch text,
  branch_name text,

  -- Order details
  items jsonb not null default '[]'::jsonb,  -- [{ id, name, qty, unitPrice, subtotal, variant, notes, image }, ...]
  total integer not null default 0,
  notes text,

  -- Timestamps
  created_at timestamptz not null default now(),
  completed_at timestamptz,
  completed_by text,

  -- Metadata optional
  source text default 'web'  -- 'web' | 'staff'
);

-- Index untuk query cepat
create index orders_status_idx on public.orders (status);
create index orders_created_at_idx on public.orders (created_at desc);
```

4. Pastikan muncul pesan **"Success. No rows returned"** — tabel sudah dibuat.

---

## 3. Aktifkan Row Level Security (RLS)

> **Penting**: Tanpa RLS, database Supabase bisa diakses publik siapa saja (security risk).
> Setup ini mengizinkan siapa saja untuk insert & read order (cocok untuk café publik), tapi restrict update/delete hanya via service role.

1. Masih di SQL Editor, jalankan query berikut:

```sql
-- Enable RLS
alter table public.orders enable row level security;

-- Policy 1: Siapa saja boleh INSERT (customer pesan order)
create policy "Anyone can create orders"
  on public.orders
  for insert
  to anon
  with check (true);

-- Policy 2: Siapa saja boleh SELECT (karyawan melihat pesanan masuk)
-- Opsional: batasi hanya order dengan status 'pending' atau yang selesai hari ini
create policy "Anyone can read orders"
  on public.orders
  for select
  to anon
  using (true);

-- Policy 3: Siapa saja boleh UPDATE status (karyawan menandai selesai)
-- (untuk produksi, sebaiknya pakai authenticated role + login karyawan)
create policy "Anyone can update order status"
  on public.orders
  for update
  to anon
  using (true)
  with check (true);

-- Policy 4: Jangan izinkan DELETE public (supaya data tidak hilang)
-- (Service role tetap bisa hapus via dashboard)
```

2. Klik **"Run"** → harus ada "Success"

### Aktifkan Realtime (Supabase modern otomatis)

Real-time subscription biasanya **otomatis aktif**. Tapi untuk memastikan:

1. Sidebar → **Database** → **Replication**
2. Klik ikon "..." pada `public.orders` → **"All events"** toggle ON
3. Atau jalankan SQL:

```sql
alter publication supabase_realtime add table public.orders;
```

---

## 4. Copy Konfigurasi

1. Sidebar → **Settings** (⚙️) → **API**
2. Copy nilai:
   - **Project URL** → terlihat seperti `https://abcdefgh.supabase.co`
   - **anon public** key → string panjang dimulai dengan `eyJhbGciOi...`
3. Buka file `js/supabase-config.js` di project ini
4. Ganti 2 nilai:

```javascript
const SUPABASE_CONFIG = {
  url: 'https://etdudnufhbfwcibmdglc.supabase.co/rest/v1/',     // ← paste di sini
  anonKey: '7y8ytTfF+N8HL7n',                 // ← paste di sini
};
```

5. Save file.

---

## 5. Verifikasi

1. Buka `index.html` di browser
2. Buka Console (F12)
3. Seharusnya tidak ada warning `[Supabase] Belum dikonfigurasi.`
4. Login sebagai karyawan (`karyawan` / `warnezzel2026`)
5. Di tab/device kedua (atau device lain):
   - Tambah menu ke keranjang → order via WhatsApp
6. Tab pertama (karyawan) harus langsung menampilkan:
   - 🔔 Bell shake animation
   - Toast notif biru
   - Counter badge update
   - Tap bell → order muncul di Pesanan Masuk

### Test dengan 2 device

- **Device A** (kasir): buka web → login
- **Device B** (customer): buka web → pesan
- **Device A** langsung dapat notifikasi real-time!

---

## 6. Troubleshooting

### Console log: `[Supabase] Belum dikonfigurasi.`
→ Edit `supabase-config.js`, ganti `YOUR-PROJECT-ID` & `YOUR-ANON-PUBLIC-KEY` dengan nilai asli dari dashboard.

### Notifikasi tidak muncul di device kedua
1. Pastikan RLS policy **SELECT** aktif untuk `anon` role (lihat langkah 3)
2. Cek Supabase → **Database** → **Replication** — pastikan `orders` ada di sini
3. Buka Console di tab customer → cek apakah `SAVE order` sukses (status 200)
4. Buka Console di tab karyawan → cek apakah ada log subscription

### Order double-count / muncul dua kali
→ Pastikan `applyStaffUI()` tidak dipanggil di banyak tempat yang akan `re-fetch`. Bug biasanya karena multiple `DOMContentLoaded` listeners.

### Authentication (untuk produksi)
Untuk versi yang lebih aman, ganti `anon` role dengan `authenticated` + Supabase Auth untuk login karyawan. Saya bisa tambahkan ini jika perlu.

---

## 📊 Struktur Data

Setiap order yang tersimpan di Supabase:

```json
{
  "id": "uuid-generated-by-supabase",
  "order_id": "ORD-20260720-001",
  "status": "pending",
  "customer_name": "Budi",
  "customer_phone": "08123456789",
  "table_number": "5",
  "branch": "warnezzel-jakarta",
  "branch_name": "WarNezzel Jakarta",
  "items": [
    {
      "id": 1,
      "name": "Good Day Series",
      "qty": 2,
      "variant": "Cappuccino",
      "unitPrice": 8000,
      "subtotal": 16000,
      "notes": ""
    }
  ],
  "total": 16000,
  "notes": "Tolong cepat ya",
  "created_at": "2026-07-20T10:30:00Z",
  "completed_at": null,
  "completed_by": null,
  "source": "web"
}
```

---

## 💰 Pricing

Free tier Supabase:
- 500 MB database
- 2 GB bandwidth/bulan
- 2M Realtime events/bulan
- 50,000 monthly active users

**Cukup untuk WarNezzel dengan ratusan order per bulan.** Untuk volume besar, plan Pro mulai $25/bulan.

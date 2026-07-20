// ============================================================
// SUPABASE CONFIGURATION
// ------------------------------------------------------------
// INSTRUKSI SETUP:
// 1. Buka https://supabase.com dan buat akun gratis
// 2. Buat project baru (beri nama "warnezzel" atau apapun)
//    - Pilih region terdekat (mis. Singapore untuk Indonesia)
//    - Simpan database password yang dibuat (tidak dibutuhkan di sini, hanya untuk akses langsung via SQL)
// 3. Tunggu project selesai dibuat (±1-2 menit)
// 4. Di sidebar kiri, klik "Settings" → "API"
// 5. Copy nilai berikut:
//    - "Project URL"             → masukkan ke SUPABASE_URL
//    - "anon public" key         → masukkan ke SUPABASE_ANON_KEY
// 6. (Opsional) Aktifkan Realtime: database → replication → klik "orders" table → aktifkan
//    Catatan: Realtime otomatis aktif di Supabase modern, tidak perlu setup tambahan
// 7. Lihat file SUPABASE_SETUP.md untuk schema SQL tabel
// ============================================================

const SUPABASE_CONFIG = {
  // GANTI dengan URL & key Anda dari dashboard Supabase
  url: 'https://YOUR-PROJECT-ID.supabase.co',
  anonKey: 'YOUR-ANON-PUBLIC-KEY',

  // Optional: override di sini jika deploy ke environment berbeda
  // (mis. staging vs production)
};

// ============================================================
// Helpers — dipakai oleh script.js
// ============================================================
function getSupabaseClient() {
  if (!window.supabase) {
    console.warn('[Supabase] SDK belum dimuat.');
    return null;
  }
  // Cek apakah URL/key masih placeholder
  if (SUPABASE_CONFIG.url.includes('YOUR-PROJECT-ID') ||
      SUPABASE_CONFIG.anonKey.includes('YOUR-ANON')) {
    console.warn('[Supabase] Belum dikonfigurasi. Lihat supabase-config.js untuk setup.');
    return null;
  }
  // Pakai singleton agar tidak double-init
  if (!window.__supabaseClient) {
    window.__supabaseClient = window.supabase.createClient(
      SUPABASE_CONFIG.url,
      SUPABASE_CONFIG.anonKey
    );
  }
  return window.__supabaseClient;
}

function isSupabaseConfigured() {
  return !SUPABASE_CONFIG.url.includes('YOUR-PROJECT-ID') &&
         !SUPABASE_CONFIG.anonKey.includes('YOUR-ANON');
}

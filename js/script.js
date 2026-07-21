// ============================================================
  // BRAND LOGO — used in receipt header (replaces ☕ emoji)
  // ============================================================
  const WARNEZZEL_LOGO_URL = 'https://i.ibb.co.com/Nd7rJ45S/Chat-GPT-Image-Jul-3-2026-11-46-13-AM.png';

  // ============================================================
  // DATA: Minuman (merged coffe + non-coffe), Bundle, Makanan
  // ============================================================
  const menuData = {
    minuman: [
      // === Kopi Hitam Instan ===
      { id: 10, name: "Kopi Kapal Api", price: 5000, image: "https://down-id.img.susercontent.com/file/id-11134275-7rbk0-m9zlq05kvz0te4@resize_w450_nl.webp", description: "Kopi hitam klasik Kapal Api.", variants: ["Hot", "Ice"], sugar: true, badge: "best-seller", category: "minuman", type: "drink" },
      { id: 11, name: "Kapal Api Mantap", price: 6000, image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/100/MTA-114383494/no-brand_kopi-kapal-api-mantap-25gr_full01.jpg", description: "Kapal Api Special blend kopi pilihan.", variants: ["Hot", "Ice"], sugar: true, category: "minuman", type: "drink" },
      { id: 12, name: "ABC Susu", price: 5000, image: "https://down-id.img.susercontent.com/file/sg-11134201-823oy-mpdedwtmek99a5@resize_w450_nl.webp", description: "Kopi ABC hitam dengan rasa khas.", variants: ["Hot", "Ice"], sugar: true, badge: "signature", category: "minuman", type: "drink" },
      { id: 13, name: "Indocafe Mix", price: 5000, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpfD6G-0FXmkmhyANkt6JyyyiqOn_JqsLRC3AVgniC4HSW6zC6y4vM6Msh5jkUNrfsyGniNeGwJ2uajIERnEQfKPoBlTs6Pw", description: "Kopi Indocafe hitam aroma mantap.", variants: ["Hot", "Ice"], sugar: true, category: "minuman", type: "drink" },
      { id: 14, name: "Luwak White Koffie", price: 8000, image: "https://down-id.img.susercontent.com/file/id-11134201-7qukw-ljpckm341obr35@resize_w450_nl.webp", description: "Kopi Luwak instan premium khas nusantara.", variants: ["Hot", "Ice"], sugar: true, badge: "signature", category: "minuman", type: "drink" },
      { id: 15, name: "Nescafe Ice Roast", price: 6000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYnbzOchYVoHM-ufHOnun6-zc3JDMvSx1Hh-isBqbilmDa1npGqQbIYKb&s=10", description: "Nescafe Ice Roast kopi instan favorit dunia.", variants: ["Hot", "Ice"], sugar: true, category: "minuman", type: "drink" },
      { id: 16, name: "Nescafe Classic", price: 8000, image: "https://ptmku.com/wp-content/uploads/2022/04/Nescafe-Classic-Sachet.jpg", description: "Nescafe Classic premium blend halus.", variants: ["Hot", "Ice"], sugar: true, badge: "best-seller", category: "minuman", type: "drink" },
      { id: 17, name: "Kopi ABC Klepon", price: 5000, image: "https://image.astronauts.cloud/product-images/2025/9/ABCIcedKleponBagisi5x25gr_eead708a-82dd-42c6-9a2a-509932b0d1e0_900x900.jpg", description: "Kopi ABC Klepon kopi instan praktis.", variants: ["Hot", "Ice"], sugar: true, category: "minuman", type: "drink" },

      // === Good Day Series ===
      { id: 1, name: "Good Day Series", price: 8000, image: "https://i.ibb.co.com/5gzvy2y1/a655ccc8-a292-4d70-bab7-84da50760155-1.png", description: "Pilih varian rasa Good Day favoritmu!", variants: ["Cappuccino", "Moccacino", "Caramello", "Hazelnut", "Chocolate", "Vanilla Latte", "Irish Cream", "Korean Black", "Mango Delight"], badge: "best-seller", category: "minuman", type: "drink" },

      // === Torabika ===
      { id: 18, name: "Torabika Cappucino", price: 6000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrmDs107KPEdKWJYK-y2F1cqrjMthu8PlK_Yf6VrKunj3p1PWIP223kc&s=10", description: "Indocafe Coffeemix kopi susu praktis.", variants: ["Hot", "Ice"], sugar: false, category: "minuman", type: "drink" },
      { id: 19, name: "Torabika CreamyLatte", price: 5000, image: "https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/b81e2d73b3b24cea9e10c4a3d70f78e0~.jpeg.webp", description: "Kapal Api 3 in 1 kopi susu original.", variants: ["Hot", "Ice"], sugar: false, category: "minuman", type: "drink" },
      { id: 20, name: "Kapal Api 3 in 1 Creamy", price: 6000, image: "https://images.unsplash.com/photo-1461023058943-07fcbeb03ce8?auto=format&fit=crop&w=400&q=80", description: "Kapal Api 3 in 1 rasa creamy lembut.", variants: ["Hot", "Ice"], sugar: false, category: "minuman", type: "drink" },

      // === Teh & Susu ===
      { id: 26, name: "Teh Tarik Susu", price: 7000, image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=400&q=80", description: "Teh Tarik Susu khas nusantara.", variants: ["Hot", "Ice"], sugar: true, badge: "best-seller", category: "minuman", type: "drink" },
      { id: 27, name: "Max Tea", price: 5000, image: "https://images.unsplash.com/photo-1597318236899-a1f78f9d8b41?auto=format&fit=crop&w=400&q=80", description: "Max Tea teh manis segar.", variants: ["Hot", "Ice"], sugar: false, category: "minuman", type: "drink" },
      { id: 28, name: "Nutrisari Teh Susu", price: 6000, image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=400&q=80", description: "Nutrisari Teh Susu sachet praktis.", variants: ["Hot", "Ice"], sugar: false, category: "minuman", type: "drink" },
      { id: 29, name: "Good Day Japanese Milk Tea", price: 8000, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80", description: "Good Day Japanese Milk Tea.", variants: ["Hot", "Ice"], sugar: true, badge: "signature", category: "minuman", type: "drink" },

      // === Jus & Minuman Rasa Buah ===
      { id: 30, name: "Nutrisari Jeruk", price: 5000, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=400&q=80", description: "Nutrisari Jeruk segar.", variants: ["Ice"], sugar: false, category: "minuman", type: "drink" },
      { id: 31, name: "Nutrisari Mangga", price: 5000, image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=400&q=80", description: "Nutrisari Mangga manis.", variants: ["Ice"], sugar: false, category: "minuman", type: "drink" },
      { id: 32, name: "Nutrisari Stroberi", price: 5000, image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=400&q=80", description: "Nutrisari Stroberi.", variants: ["Ice"], sugar: false, category: "minuman", type: "drink" },
      { id: 33, name: "Nutrisari Leci", price: 5000, image: "https://images.unsplash.com/photo-1597427263555-1a2d9f35d2d6?auto=format&fit=crop&w=400&q=80", description: "Nutrisari Leci.", variants: ["Ice"], sugar: false, category: "minuman", type: "drink" },
      { id: 34, name: "Nutrisari Jambu", price: 5000, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80", description: "Nutrisari Jambu.", variants: ["Ice"], sugar: false, category: "minuman", type: "drink" },
      { id: 35, name: "Nutrisari Sirsak", price: 5000, image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=400&q=80", description: "Nutrisari Sirsak.", variants: ["Ice"], sugar: false, category: "minuman", type: "drink" },
      { id: 36, name: "Hemaviton Jreng", price: 7000, image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=400&q=80", description: "Hemaviton Jreng penambah stamina.", variants: ["Ice"], sugar: false, category: "minuman", type: "drink" },
      { id: 37, name: "Extra Joss", price: 6000, image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=400&q=80", description: "Extra Joss pereda capek.", variants: ["Ice"], sugar: false, category: "minuman", type: "drink" },

      // === Cokelat & Malt ===
      { id: 38, name: "Milo", price: 7000, image: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=400&q=80", description: "Milo cokelat malt khas.", variants: ["Hot", "Ice"], sugar: true, badge: "best-seller", category: "minuman", type: "drink" },
      { id: 39, name: "Milo Nutrisari", price: 6000, image: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=400&q=80", description: "Milo Nutrisari sachet.", variants: ["Hot", "Ice"], sugar: false, category: "minuman", type: "drink" },
      { id: 40, name: "Ovaltine", price: 7000, image: "https://images.unsplash.com/photo-1542990253-0d0f5e516b44?auto=format&fit=crop&w=400&q=80", description: "Ovaltine malt cokelat klasik.", variants: ["Hot", "Ice"], sugar: true, category: "minuman", type: "drink" },
      { id: 41, name: "Beng-Beng Drink", price: 7000, image: "https://images.unsplash.com/photo-1542990253-0d0f5e516b44?auto=format&fit=crop&w=400&q=80", description: "Beng-Beng Drink rasa cokelat karamel.", variants: ["Hot", "Ice"], sugar: false, category: "minuman", type: "drink" },
      { id: 42, name: "Good Day Chocolate", price: 8000, image: "https://images.unsplash.com/photo-1542990253-0d0f5e516b44?auto=format&fit=crop&w=400&q=80", description: "Good Day Chocolate cokelat premium.", variants: ["Hot", "Ice"], sugar: true, badge: "signature", category: "minuman", type: "drink" }
    ],
    bundle: [
      {
        id: 101, name: "Paket Sarapan Hemat", price: 12000, originalPrice: 15000,
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80",
        description: "Kopi + Roti Bakar — sarapan sempurna di WarNezzel!",
        items: ["1x Kopi Hitam / Kapal Api Mantap", "1x Roti Bakar Cokelat/Keju"],
        variants: ["Hot", "Ice"], sugar: true,
        category: "bundle", type: "bundle"
      },
      {
        id: 102, name: "Paket Nongkrong Asik", price: 18000, originalPrice: 22000,
        image: "https://images.unsplash.com/photo-157308049-9b4608fce8a8?auto=format&fit=crop&w=600&q=80",
        description: "Double drink + snack — cocok buat nongkrong berdua!",
        items: ["2x Minuman (pilih sendiri)", "1x Kentang Goreng Reguler"],
        variants: ["Hot + Hot", "Ice + Ice", "Hot + Ice"], sugar: true,
        category: "bundle", type: "bundle"
      },
      {
        id: 103, name: "Paket Best Friend", price: 25000, originalPrice: 31000,
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80",
        description: "Combo lengkap untuk 2 orang — minum + ngemil puas!",
        items: ["2x Kopi / Teh / Milo / Good Day (pilih sendiri)", "2x Camilan (Kentang Goreng / Pisang Goreng / Roti Bakar)", "Bonus: 1x Extra Jreng"],
        variants: ["Hot", "Ice"], sugar: true, badge: "best-seller",
        category: "bundle", type: "bundle"
      },
      {
        id: 104, name: "Paket Good Day Collection", price: 20000, originalPrice: 24000,
        image: "https://i.ibb.co.com/5gzvy2y1/a655ccc8-a292-4d70-bab7-84da50760155-1.png",
        description: "Coba semua varian rasa Good Day Series dalam satu paket!",
        items: ["3x Good Day Series (pilih 3 varian)", "1x Roti Bakar Keju"],
        variants: ["Hot", "Ice"], sugar: true, badge: "signature",
        category: "bundle", type: "bundle"
      },
      {
        id: 105, name: "Paket Meja 4", price: 45000, originalPrice: 55000,
        image: "https://images.unsplash.com/photo-1495474393277-6174b90526f3?auto=format&fit=crop&w=600&q=80",
        description: "Paket hemat buat rame-rame di meja — 4 orang puas!",
        items: ["4x Minuman (campur)", "2x Camilan (campur)", "Bonus: 1x Beng-Beng Drink"],
        variants: ["Hot", "Ice"], sugar: true,
        category: "bundle", type: "bundle"
      }
    ],
    makanan: [
      { id: 43, name: "Kentang Goreng", price: 10000, image: "https://images.unsplash.com/photo-157308049-9b4608fce8a8?auto=format&fit=crop&w=400&q=80", description: "Kentang goreng crispy dengan saus.", variants: ["Reguler", "Large"], badge: "best-seller", category: "makanan", type: "food", spice: true },
      { id: 44, name: "Roti Bakar", price: 12000, image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=400&q=80", description: "Roti bakar dengan topping pilihan.", variants: ["Cokelat", "Keju", "Srikaya"], category: "makanan", type: "food" },
      { id: 45, name: "Pisang Goreng", price: 10000, image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=400&q=80", description: "Pisang goreng hangat dengan keju dan cokelat.", variants: ["Original", "Keju", "Cokelat"], badge: "signature", category: "makanan", type: "food" },
      { id: 46, name: "Tahu Krispi", price: 10000, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=400&q=80", description: "Tahu krispi dengan bumbu pedas.", variants: ["Original", "Pedas"], category: "makanan", type: "food", spice: true },
      { id: 47, name: "Tempe Mendoan", price: 10000, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=400&q=80", description: "Tempe mendoan khas Purwokerto.", variants: ["Original", "Pedas"], category: "makanan", type: "food", spice: true },
      { id: 48, name: "Singkong Goreng", price: 10000, image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=400&q=80", description: "Singkong goreng renyah dengan keju.", variants: ["Original", "Keju", "Balado"], category: "makanan", type: "food", spice: true },
      { id: 49, name: "Pancake Mini", price: 12000, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "Pancake mini dengan maple syrup.", variants: ["Madu", "Cokelat", "Keju"], category: "makanan", type: "food" },
      { id: 50, name: "Donat Gula", price: 6000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "Donat lembut taburan gula halus.", variants: ["Gula", "Cokelat"], category: "makanan", type: "food" }
    ]
  };

  // ============================================================
  // STATE
  // ============================================================
  let cart = [];
  let currentSection = "minuman";
  let currentProduct = null;
  let currentVariant = "";
  let paymentConfirmed = false;

  // Category title lookup
  const CATEGORY_TITLES = {
    minuman: '☕ Minuman',
    makanan: '🍟 Makanan',
    bundle: '🎁 Paket & Bundle',
  };
  let currentQty = 1;
  let currentNotes = '';
  let orderContext = { table: null, branch: null, branchName: null };
  let isAdminMode = false;

  // ============================================================
  // STAFF AUTH (local-only, multi-account via localStorage)
  // ============================================================
  // Accounts are stored in localStorage under 'warnezzel_staff_accounts'.
  // Passwords are base64-encoded (obfuscation only — not real security).
  // In production, replace with proper backend auth.
  const STAFF_ACCOUNTS_KEY = 'warnezzel_staff_accounts';
  const STAFF_SESSION_KEY = 'warnezzel_staff_session';

  // Seed default account if storage empty (first run / cleared storage)
  function seedDefaultStaff() {
    const list = loadStaffAccounts();
    if (list.length === 0) {
      const defaults = [
        { username: 'karyawan', password: 'warnezzel2026', name: 'Karyawan WarNezzel' }
      ];
      saveStaffAccounts(defaults);
      return defaults;
    }
    return list;
  }

  // Generate short clerk ID (e.g. "C-A4F2") for staff identification
  function makeClerkId() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // skip ambiguous chars (0/O, 1/I/L)
    let id = 'C-';
    for (let i = 0; i < 4; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  // Ensure every loaded account has a clerkId (backfill for legacy data)
  function ensureClerkIds(list) {
    let mutated = false;
    list.forEach(a => {
      if (!a.clerkId) {
        a.clerkId = makeClerkId();
        mutated = true;
      }
    });
    if (mutated) saveStaffAccounts(list);
    return list;
  }

  function loadStaffAccounts() {
    try {
      const raw = localStorage.getItem(STAFF_ACCOUNTS_KEY);
      if (!raw) return [];
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr)) return [];
      // Normalize: ensure each has username/password/name/clerkId
      const normalized = arr
        .filter(a => a && typeof a.username === 'string' && a.username.trim())
        .map(a => ({
          username: a.username,
          password: a.password || '',
          name: (a.name && a.name.trim()) ? a.name : a.username,
          clerkId: a.clerkId || null
        }));
      return ensureClerkIds(normalized);
    } catch (e) { return []; }
  }

  function saveStaffAccounts(list) {
    try { localStorage.setItem(STAFF_ACCOUNTS_KEY, JSON.stringify(list)); }
    catch (e) { console.warn('saveStaffAccounts failed', e); }
  }

  // Obfuscation (NOT real security — local-only auth)
  function encodeStaffPassword(plain) {
    try { return btoa(unescape(encodeURIComponent(plain))); }
    catch (e) { return plain; }
  }
  function decodeStaffPassword(encoded) {
    try { return decodeURIComponent(escape(atob(encoded))); }
    catch (e) { return encoded; }
  }

  // Backwards-compatible getter used by login flow
  function getStaffCredentials() {
    // Ensure at least the default account exists
    const list = localStorage.getItem(STAFF_ACCOUNTS_KEY) ? loadStaffAccounts() : seedDefaultStaff();
    // For login matching, return accounts with decoded passwords
    return list.map(a => ({
      username: a.username,
      password: decodeStaffPassword(a.password),
      name: a.name
    }));
  }

  function getStaffSession() {
    try {
      return JSON.parse(sessionStorage.getItem(STAFF_SESSION_KEY) || 'null');
    } catch (e) { return null; }
  }

  function setStaffSession(staff) {
    sessionStorage.setItem(STAFF_SESSION_KEY, JSON.stringify(staff));
  }

  function clearStaffSession() {
    sessionStorage.removeItem(STAFF_SESSION_KEY);
  }

  function isStaffLoggedIn() {
    return !!getStaffSession();
  }

  function getCurrentStaff() {
    const session = getStaffSession();
    if (!session) return null;
    // Re-attach latest clerkId & name from account list (in case they were updated)
    const account = loadStaffAccounts().find(a => a.username === session.username);
    if (account) {
      return {
        username: account.username,
        name: account.name,
        clerkId: account.clerkId || null
      };
    }
    return session;
  }

  function applyStaffUI() {
    const session = getStaffSession();
    const badge = document.getElementById('headerStaffBadge');
    const nameEl = document.getElementById('headerStaffName');
    const staffRequired = document.getElementById('cartStaffRequired');
    const waBtn = document.getElementById('waOrderBtn');
    const bell = document.getElementById('staffOrderBell');
    const posPanel = document.getElementById('posQuickPanel');
    const receiptSizeForm = document.getElementById('receiptSizeForm');
    const cartTitle = document.getElementById('cartHeaderTitle');
    // POS header & stats strip elements
    const posHeader = document.getElementById('posHeader');
    const posStats = document.getElementById('posStats');
    const posHeaderStaffName = document.getElementById('posHeaderStaffName');

    if (session) {
      if (badge) badge.style.display = 'inline-flex';
      if (nameEl) nameEl.textContent = session.name;
      if (staffRequired) staffRequired.style.display = 'none';
      // When staff is logged in, hide WhatsApp (staff uses print receipt)
      if (waBtn) waBtn.style.display = 'none';
      // Show POS quick panel & receipt size selector
      if (posPanel) posPanel.style.display = '';
      // Show POS header & stats strip (khusus mode kasir)
      if (posHeader) posHeader.style.display = 'flex';
      if (posStats) posStats.style.display = 'grid';
      if (posHeaderStaffName) posHeaderStaffName.textContent = session.name;
      // Show clerk ID badge ("🆔 C-A4F2") — also re-attached from account list if missing
      const clerkIdEl = document.getElementById('posHeaderClerkId');
      const clerkId = (typeof getCurrentStaff === 'function' && getCurrentStaff()) ? getCurrentStaff().clerkId : null;
      if (clerkIdEl) {
        if (clerkId) {
          clerkIdEl.textContent = '· 🆔 ' + clerkId;
          clerkIdEl.style.display = '';
        } else {
          clerkIdEl.textContent = '';
          clerkIdEl.style.display = 'none';
        }
      }
      // Sync radio buttons with persisted size
      const savedSize = (typeof getStrukSize === 'function') ? getStrukSize() : '58';
      const radios = document.querySelectorAll('input[name="strukSize"]');
      radios.forEach(r => { r.checked = (r.value === savedSize); });
      if (receiptSizeForm) receiptSizeForm.style.display = '';
      if (cartTitle) cartTitle.textContent = 'Pesanan — Mode Kasir';
      document.body.classList.add('pos-mode');
      // Kolom kanan selalu tampil; toggle tombol cetak vs hint WA
      const colRight = document.getElementById('cartColRight');
      if (colRight) colRight.style.display = '';
      const printBtn = document.getElementById('cartPrintBtn');
      if (printBtn) printBtn.style.display = '';
      const waHint = document.getElementById('cartWaHint');
      if (waHint) waHint.style.display = 'none';
      // Tampilkan form terpisah mode kasir (table/name/phone)
      ['tableFormPos','nameFormPos','phoneFormPos'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = '';
      });
      // Sinkronkan nilai awal dari form customer ke form kasir
      const sync = (from, to) => {
        const f = document.getElementById(from);
        const t = document.getElementById(to);
        if (f && t) t.value = f.value;
      };
      sync('miniCustomerName','miniCustomerNamePos');
      sync('miniCustomerPhone','miniCustomerPhonePos');
      sync('miniTableNumber','miniTableNumberPos');
      // Start POS real-time clock & stats refresh
      startPosClock();
      updatePosStats();
      updatePaymentUI();
      document.body.classList.add('cart-open');
    } else {
      if (badge) badge.style.display = 'none';
      if (staffRequired) staffRequired.style.display = '';
      if (waBtn) waBtn.style.display = '';
      if (bell) bell.style.display = 'none';  // hide bell when logged out
      // Hide POS-specific UI when staff logs out
      if (posPanel) posPanel.style.display = 'none';
      if (receiptSizeForm) receiptSizeForm.style.display = 'none';
      // Hide POS header & stats strip
      if (posHeader) posHeader.style.display = 'none';
      if (posStats) posStats.style.display = 'none';
      stopPosClock();
      // Kolom kanan selalu tampil; sembunyikan tombol cetak, tampilkan hint WA
      const colRight = document.getElementById('cartColRight');
      if (colRight) colRight.style.display = '';
      const printBtn = document.getElementById('cartPrintBtn');
      if (printBtn) printBtn.style.display = 'none';
      const waHint = document.getElementById('cartWaHint');
      if (waHint) waHint.style.display = '';
      // Hide split form fields for kasir
      ['tableFormPos','nameFormPos','phoneFormPos'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
      });
      // Sinkronkan nilai dari form kasir balik ke form customer
      const syncBack = (from, to) => {
        const f = document.getElementById(from);
        const t = document.getElementById(to);
        if (f && t) t.value = f.value;
      };
      syncBack('miniCustomerNamePos','miniCustomerName');
      syncBack('miniCustomerPhonePos','miniCustomerPhone');
      syncBack('miniTableNumberPos','miniTableNumber');
      if (cartTitle) cartTitle.textContent = 'Pesanan Anda';
      document.body.classList.remove('pos-mode');
      document.body.classList.remove('cart-open');
      document.body.classList.remove('pos-cart-visible');
      paymentConfirmed = false;
      updateCartBadge(); // sync cart print button enabled state
    }
    // Always refresh bell count (whether logged in or out — but bell is hidden anyway when out)
    updateStaffNotificationBell();
  }

  // ============================================================
  // POS CLOCK & STATS — Real-time info untuk mode kasir
  // ============================================================

  // Tentukan shift berdasarkan jam: Pagi/Siang/Malam
  function getCurrentShift() {
    const h = new Date().getHours();
    if (h >= 6  && h < 11) return 'Pagi';
    if (h >= 11 && h < 15) return 'Siang';
    if (h >= 15 && h < 19) return 'Sore';
    return 'Malam';
  }

  // Format tanggal Indonesia (contoh: Minggu, 19 Juli 2026)
  function formatTanggalID(d) {
    const hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    const bulan = ['Januari','Februari','Maret','April','Mei','Juni',
                   'Juli','Agustus','September','Oktober','November','Desember'];
    return hari[d.getDay()] + ', ' + d.getDate() + ' ' + bulan[d.getMonth()] + ' ' + d.getFullYear();
  }

  // Update jam real-time di header POS
  function updatePosClock() {
    const timeEl = document.getElementById('posClockTime');
    const dateEl = document.getElementById('posClockDate');
    const shiftEl = document.getElementById('posShiftName');
    if (!timeEl || !dateEl) return;
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    timeEl.textContent = hh + ':' + mm + ':' + ss;
    dateEl.textContent = formatTanggalID(now);
    if (shiftEl) shiftEl.textContent = getCurrentShift();
  }

  let _posClockTimer = null;
  function startPosClock() {
    if (_posClockTimer) return; // already running
    updatePosClock(); // immediate first tick
    _posClockTimer = setInterval(updatePosClock, 1000);
    // Also refresh stats every 5s so pesanan masuk updates live
    _posStatsTimer = setInterval(updatePosStats, 5000);
  }
  function stopPosClock() {
    if (_posClockTimer) { clearInterval(_posClockTimer); _posClockTimer = null; }
    if (_posStatsTimer) { clearInterval(_posStatsTimer); _posStatsTimer = null; }
  }
  let _posStatsTimer = null;

  // Update 4 stat strip POS: pesanan masuk / item cart / estimasi total / shift
  function updatePosStats() {
    if (!document.body.classList.contains('pos-mode')) return;
    const incomingEl = document.getElementById('posStatIncoming');
    const cartEl = document.getElementById('posStatCart');
    const totalEl = document.getElementById('posStatTotal');
    const shiftEl = document.getElementById('posStatShift');
    if (incomingEl) {
      const pending = (typeof getPendingOrders === 'function') ? getPendingOrders().length : 0;
      incomingEl.textContent = pending;
    }
    if (cartEl) {
      const count = (typeof cart !== 'undefined' && Array.isArray(cart))
        ? cart.reduce((sum, item) => sum + item.qty, 0) : 0;
      cartEl.textContent = count;
    }
    if (totalEl) {
      const total = (typeof cart !== 'undefined' && Array.isArray(cart))
        ? cart.reduce((t, i) => t + i.subtotal, 0) : 0;
      totalEl.textContent = (typeof formatRupiah === 'function')
        ? formatRupiah(total) : ('Rp ' + total);
    }
    if (shiftEl) shiftEl.textContent = getCurrentShift();
    // Sync bell count POS header juga
    const bellCountEl = document.getElementById('posHeaderBellCount');
    const headerBell  = document.getElementById('posHeaderBell');
    if (bellCountEl && headerBell) {
      const pending = (typeof getPendingOrders === 'function') ? getPendingOrders().length : 0;
      if (pending > 0) {
        bellCountEl.textContent = pending > 99 ? '99+' : pending;
        bellCountEl.style.display = 'inline-flex';
      } else {
        bellCountEl.style.display = 'none';
      }
    }
  }

  function openStaffLogin() {
    if (isStaffLoggedIn()) {
      const session = getCurrentStaff();
      if (confirm(session.name + ' sudah login. Logout sekarang?')) {
        logoutStaff();
      }
      return;
    }
    const overlay = document.getElementById('staffLoginOverlay');
    const backdrop = document.getElementById('staffLoginBackdrop');
    const errEl = document.getElementById('staffLoginError');
    if (errEl) errEl.textContent = '';
    const u = document.getElementById('staffUsername');
    const p = document.getElementById('staffPassword');
    if (u) u.value = '';
    if (p) p.value = '';
    if (overlay) overlay.classList.add('open');
    if (backdrop) backdrop.classList.add('visible');
    setTimeout(() => { if (u) u.focus(); }, 50);
  }

  function closeStaffLogin() {
    const overlay = document.getElementById('staffLoginOverlay');
    const backdrop = document.getElementById('staffLoginBackdrop');
    if (overlay) overlay.classList.remove('open');
    if (backdrop) backdrop.classList.remove('visible');
  }

  function submitStaffLogin() {
    const u = (document.getElementById('staffUsername').value || '').trim();
    const p = (document.getElementById('staffPassword').value || '');
    const errEl = document.getElementById('staffLoginError');
    const match = getStaffCredentials().find(c => c.username === u && c.password === p);
    if (match) {
      // Pull clerkId from the full account list (login matching uses decoded passwords, no clerkId)
      const account = loadStaffAccounts().find(a => a.username === match.username);
      const clerkId = account && account.clerkId ? account.clerkId : makeClerkId();
      setStaffSession({ username: match.username, name: match.name, clerkId });
      if (errEl) errEl.textContent = '';
      closeStaffLogin();
      applyStaffUI();
      showToast('Login berhasil. Selamat bertugas, ' + match.name + '! [' + clerkId + ']');
    } else {
      if (errEl) { errEl.textContent = 'Username atau password salah.'; errEl.style.color = '#e74c3c'; }
    }
  }

  function logoutStaff() {
    clearStaffSession();
    paymentConfirmed = false;
    applyStaffUI();
    showToast('Logout berhasil.');
  }

  // ============================================================
  // STAFF MANAGEMENT PANEL — CRUD akun & ubah nama tampilan
  // ============================================================
  function openStaffMgmt() {
    if (!isStaffLoggedIn()) {
      showToast('Login karyawan dulu.', true);
      openStaffLogin();
      return;
    }
    const overlay = document.getElementById('staffMgmtOverlay');
    const backdrop = document.getElementById('staffMgmtBackdrop');
    if (!overlay || !backdrop) return;
    // Prefill profil sendiri
    const me = getCurrentStaff();
    const usernameEl = document.getElementById('staffSelfUsername');
    const nameEl = document.getElementById('staffSelfName');
    const pwEl = document.getElementById('staffSelfPassword');
    if (usernameEl) usernameEl.value = me ? me.username : '';
    if (nameEl) nameEl.value = me ? me.name : '';
    if (pwEl) pwEl.value = '';
    // Clear error
    const errEl = document.getElementById('staffMgmtError');
    if (errEl) errEl.textContent = '';
    renderStaffMgmtList();
    overlay.classList.add('open');
    backdrop.classList.add('visible');
  }

  function closeStaffMgmt() {
    const overlay = document.getElementById('staffMgmtOverlay');
    const backdrop = document.getElementById('staffMgmtBackdrop');
    if (overlay) overlay.classList.remove('open');
    if (backdrop) backdrop.classList.remove('visible');
  }

  function renderStaffMgmtList() {
    const listEl = document.getElementById('staffMgmtList');
    if (!listEl) return;
    const accounts = loadStaffAccounts();
    if (accounts.length === 0) {
      listEl.innerHTML = '<div class="staff-mgmt-empty">Belum ada akun.</div>';
      return;
    }
    const me = getCurrentStaff();
    listEl.innerHTML = accounts.map((a, i) => {
      const isMe = me && me.username === a.username;
      const safeName = escapeHtml(a.name);
      const safeUser = escapeHtml(a.username);
      const safeClerkId = escapeHtml(a.clerkId || '—');
      return '<div class="staff-mgmt-item' + (isMe ? ' is-me' : '') + '">' +
               '<div class="staff-mgmt-item-icon">' + (isMe ? '⭐' : '👤') + '</div>' +
               '<div class="staff-mgmt-item-info">' +
                 '<div class="staff-mgmt-item-name">' + safeName + (isMe ? ' <span class="staff-mgmt-item-you">(Anda)</span>' : '') + '</div>' +
                 '<div class="staff-mgmt-item-user">@' + safeUser + ' · <span class="staff-mgmt-item-clerk" title="Clerk ID">🆔 ' + safeClerkId + '</span></div>' +
               '</div>' +
               '<div class="staff-mgmt-item-actions">' +
                 '<button class="staff-mgmt-item-btn" onclick="editStaffAccount(' + i + ')" title="Edit nama">✏️</button>' +
                 (isMe ? '' : '<button class="staff-mgmt-item-btn danger" onclick="deleteStaffAccount(' + i + ')" title="Hapus akun">🗑️</button>') +
               '</div>' +
             '</div>';
    }).join('');
  }

  function setStaffMgmtError(msg, color) {
    const errEl = document.getElementById('staffMgmtError');
    if (errEl) {
      errEl.textContent = msg || '';
      errEl.style.color = color || '#e74c3c';
    }
  }

  // Tambah akun baru
  function addStaffAccount() {
    const uEl = document.getElementById('staffNewUsername');
    const nEl = document.getElementById('staffNewName');
    const pEl = document.getElementById('staffNewPassword');
    if (!uEl || !nEl || !pEl) return;
    const username = uEl.value.trim();
    const name = nEl.value.trim();
    const password = pEl.value;

    // Validasi
    if (!username) { setStaffMgmtError('Username wajib diisi.'); uEl.focus(); return; }
    if (!/^[A-Za-z0-9._-]{2,20}$/.test(username)) {
      setStaffMgmtError('Username hanya huruf/angka/./_/- (2-20 karakter).');
      uEl.focus();
      return;
    }
    if (password.length < 4) { setStaffMgmtError('Password minimal 4 karakter.'); pEl.focus(); return; }
    if (!name) { setStaffMgmtError('Nama tampilan wajib diisi.'); nEl.focus(); return; }

    const accounts = loadStaffAccounts();
    if (accounts.some(a => a.username.toLowerCase() === username.toLowerCase())) {
      setStaffMgmtError('Username "' + username + '" sudah dipakai.');
      uEl.focus();
      return;
    }

    accounts.push({
      username: username,
      name: name,
      password: encodeStaffPassword(password),
      clerkId: makeClerkId()
    });
    saveStaffAccounts(accounts);
    setStaffMgmtError('Akun "' + username + '" berhasil ditambahkan.', '#2e7d32');
    // Reset form
    uEl.value = '';
    nEl.value = '';
    pEl.value = '';
    renderStaffMgmtList();
    showToast('Akun baru ditambahkan: ' + name);
  }

  // Edit nama akun (prompt)
  function editStaffAccount(idx) {
    const accounts = loadStaffAccounts();
    const a = accounts[idx];
    if (!a) return;
    const newName = prompt('Nama tampilan baru untuk @' + a.username + ' :', a.name);
    if (newName === null) return;
    const trimmed = newName.trim();
    if (!trimmed) { setStaffMgmtError('Nama tidak boleh kosong.'); return; }
    accounts[idx] = Object.assign({}, a, { name: trimmed });
    saveStaffAccounts(accounts);
    // Sync session kalau yg diedit akun sendiri
    const me = getCurrentStaff();
    if (me && me.username === a.username) {
      setStaffSession({ username: me.username, name: trimmed });
      applyStaffUI();
    }
    renderStaffMgmtList();
    showToast('Nama akun diperbarui.');
  }

  // Hapus akun
  function deleteStaffAccount(idx) {
    const accounts = loadStaffAccounts();
    const a = accounts[idx];
    if (!a) return;
    const me = getCurrentStaff();
    if (me && me.username === a.username) {
      setStaffMgmtError('Tidak bisa menghapus akun yang sedang login. Logout dulu.');
      return;
    }
    if (accounts.length <= 1) {
      setStaffMgmtError('Minimal harus ada 1 akun kasir.');
      return;
    }
    if (!confirm('Hapus akun @' + a.username + ' (' + a.name + ')? Tindakan ini tidak bisa dibatalkan.')) {
      return;
    }
    accounts.splice(idx, 1);
    saveStaffAccounts(accounts);
    setStaffMgmtError('Akun dihapus.', '#2e7d32');
    renderStaffMgmtList();
    showToast('Akun dihapus.');
  }

  // Simpan profil sendiri (nama & password)
  function saveStaffSelf() {
    const me = getCurrentStaff();
    if (!me) { setStaffMgmtError('Belum login.'); return; }
    const nameEl = document.getElementById('staffSelfName');
    const pwEl = document.getElementById('staffSelfPassword');
    if (!nameEl) return;
    const newName = nameEl.value.trim();
    const newPw = pwEl ? pwEl.value : '';

    if (!newName) { setStaffMgmtError('Nama tampilan tidak boleh kosong.'); nameEl.focus(); return; }
    if (newPw && newPw.length < 4) { setStaffMgmtError('Password baru minimal 4 karakter.'); pwEl.focus(); return; }

    const accounts = loadStaffAccounts();
    const idx = accounts.findIndex(a => a.username === me.username);
    if (idx === -1) { setStaffMgmtError('Akun tidak ditemukan di storage.'); return; }

    accounts[idx] = Object.assign({}, accounts[idx], {
      name: newName,
      password: newPw ? encodeStaffPassword(newPw) : accounts[idx].password
    });
    saveStaffAccounts(accounts);

    // Update session aktif
    setStaffSession({ username: me.username, name: newName });
    applyStaffUI();

    setStaffMgmtError('Profil disimpan.', '#2e7d32');
    if (pwEl) pwEl.value = '';
    renderStaffMgmtList();
    showToast('Profil disimpan.');
  }

  // Reset semua akun ke default
  function resetStaffAccounts() {
    if (!confirm('Reset semua akun ke default? Akun tambahan akan dihapus permanen.')) return;
    localStorage.removeItem(STAFF_ACCOUNTS_KEY);
    seedDefaultStaff();
    renderStaffMgmtList();
    showToast('Akun direset ke default.');
  }

  // ============================================================
  // ORDER NOTIFICATIONS — BroadcastChannel between customer & staff tabs
  // Works only across tabs of the SAME origin (same browser/device).
  // Fallback: localStorage 'storage' event when BroadcastChannel absent.
  // ============================================================
  const ORDER_CHANNEL = 'warnezzel_orders';
  let _orderChannel = null;

  function getOrderChannel() {
    if (_orderChannel) return _orderChannel;
    if (typeof BroadcastChannel === 'function') {
      _orderChannel = new BroadcastChannel(ORDER_CHANNEL);
    }
    return _orderChannel;
  }

  function broadcastNewOrder(order) {
    // Prefer BroadcastChannel (same-origin tabs)
    const ch = getOrderChannel();
    if (ch) {
      ch.postMessage({ type: 'new-order', order });
      return;
    }
    // Fallback: write to localStorage with a marker key (storage event fires in OTHER tabs)
    try {
      localStorage.setItem('warnezzel_order_ping', JSON.stringify({ t: Date.now(), order }));
    } catch (e) {}
  }

  // Notify any open staff tab — uses Notification API if permitted, otherwise just dispatch
  function notifyStaffOfOrder(order) {
    updateStaffNotificationBell();

    // Shake the bell to draw attention
    const bell = document.getElementById('staffOrderBell');
    if (bell) {
      bell.classList.remove('shake');
      void bell.offsetWidth;  // restart animation
      bell.classList.add('shake');
    }

    // Toast in the staff tab (large blue accent so it's distinct from success/error)
    showOrderToast(order);

    // Try Web Notification (if granted)
    try {
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('☕ Pesanan Masuk — WarNezzel', {
          body: `Meja ${order.table || '?'} • ${order.items.length} item • ${formatRupiah(order.total)}`,
          tag: order.orderId,
          requireInteraction: true
        });
      }
    } catch (e) {}

    // Subtle beep via WebAudio (optional, no asset needed)
    try { beepOrder(); } catch (e) {}
  }

  let _audioCtx = null;
  function beepOrder() {
    try {
      if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const ctx = _audioCtx;
      const now = ctx.currentTime;
      [0, 0.18].forEach((t) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now + t);
        gain.gain.setValueAtTime(0.0001, now + t);
        gain.gain.exponentialRampToValueAtTime(0.18, now + t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + t + 0.15);
        osc.connect(gain).connect(ctx.destination);
        osc.start(now + t);
        osc.stop(now + t + 0.18);
      });
    } catch (e) {}
  }

  // Pending orders (status='pending') — used by the staff notification panel
  function getPendingOrders() {
    const orders = getOrderHistory().filter(o => o.status === 'pending');
    // Only show TODAY's pending orders (older ones stay in history but don't clutter the bell)
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    return orders.filter(o => new Date(o.timestamp) >= todayStart);
  }

  function getCompletedOrdersToday() {
    const orders = getOrderHistory().filter(o => o.status === 'completed');
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    return orders.filter(o => new Date(o.timestamp) >= todayStart);
  }

  function updateStaffNotificationBell() {
    const bell = document.getElementById('staffOrderBell');
    const countEl = document.getElementById('staffOrderBellCount');
    if (!bell || !countEl) return;
    const pending = getPendingOrders().length;
    if (pending > 0) {
      bell.style.display = 'inline-flex';
      countEl.textContent = pending > 99 ? '99+' : pending;
      countEl.style.display = 'inline-flex';
    } else {
      bell.style.display = 'none';
      countEl.style.display = 'none';
    }
    // Sync bell count ke POS header (khusus mode kasir)
    const posBellCount = document.getElementById('posHeaderBellCount');
    if (posBellCount) {
      if (pending > 0) {
        posBellCount.textContent = pending > 99 ? '99+' : pending;
        posBellCount.style.display = 'inline-flex';
      } else {
        posBellCount.style.display = 'none';
      }
    }
  }

  function showOrderToast(order) {
    // Reuse toast element but with a distinct "order" style
    const toast = document.getElementById('toast');
    if (!toast) return;
    const items = order.items.map(i => `${i.name} x${i.qty}`).slice(0, 2).join(', ');
    const more = order.items.length > 2 ? `, +${order.items.length - 2} lainnya` : '';
    toast.innerHTML = `<b>📥 Pesanan Masuk!</b><br>Meja ${escapeHtml(order.table || '?')} · ${escapeHtml(items)}${escapeHtml(more)}`;
    toast.classList.remove('success', 'error', 'order');
    toast.classList.add('order');
    toast.classList.add('show');
    clearTimeout(window.__toastT);
    window.__toastT = setTimeout(() => toast.classList.remove('show'), 4500);
  }

  // ============================================================
  // STAFF ORDER PANEL — pending orders list with tap-to-print
  // ============================================================
  function openStaffOrderPanel() {
    if (!isStaffLoggedIn()) { openStaffLogin(); return; }
    const overlay = document.getElementById('staffOrderPanel');
    const backdrop = document.getElementById('staffOrderBackdrop');
    if (overlay) overlay.classList.add('open');
    if (backdrop) backdrop.classList.add('visible');
    renderStaffOrderList();
  }

  function closeStaffOrderPanel() {
    const overlay = document.getElementById('staffOrderPanel');
    const backdrop = document.getElementById('staffOrderBackdrop');
    if (overlay) overlay.classList.remove('open');
    if (backdrop) backdrop.classList.remove('visible');
    updateStaffNotificationBell();
  }

  function renderStaffOrderList() {
    const listEl = document.getElementById('staffOrderList');
    if (!listEl) return;
    const pending = getPendingOrders();

    if (pending.length === 0) {
      listEl.innerHTML = `
        <div class="staff-order-empty">
          <div class="staff-order-empty-icon">📭</div>
          <h3>Tidak ada pesanan masuk</h3>
          <p>Pesanan yang masuk dari pelanggan akan muncul di sini secara real-time.</p>
        </div>
      `;
      return;
    }

    let html = '';
    pending.forEach(order => {
      const date = new Date(order.timestamp);
      const dateStr = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
      const itemsHtml = order.items.map(it =>
        `<div class="sol-item"><span>${escapeHtml(it.name)}${it.variant ? ' <i>(' + escapeHtml(it.variant) + ')</i>' : ''} <b>x${it.qty}</b></span><span>${formatRupiah(it.subtotal)}</span></div>`
      ).join('');

      html += `
        <div class="staff-order-card" id="sol-${escapeHtml(order.orderId)}">
          <div class="sol-header">
            <div>
              <div class="sol-id">${escapeHtml(order.orderId)}</div>
              <div class="sol-meta">🕒 ${escapeHtml(dateStr)}${order.customer && order.customer.name !== 'Anonim' ? ' · 👤 ' + escapeHtml(order.customer.name) : ''}${order.clerkId ? ' · 🆔 ' + escapeHtml(order.clerkId) : ''}</div>
            </div>
            <div class="sol-meja">Meja <b>${escapeHtml(order.table || '?')}</b></div>
          </div>
          <div class="sol-body">${itemsHtml}</div>
          ${order.notes ? `<div class="sol-notes">📝 ${escapeHtml(order.notes)}</div>` : ''}
          <div class="sol-footer">
            <div class="sol-total">💰 ${formatRupiah(order.total)}</div>
            <button class="sol-print-btn" onclick="autoFillPrintFromOrder('${escapeHtml(order.orderId)}')">
              🖨 Cetak Struk
            </button>
            <button class="sol-dismiss-btn" onclick="dismissOrder('${escapeHtml(order.orderId)}')">
              ✓ Selesai
            </button>
          </div>
        </div>
      `;
    });
    listEl.innerHTML = html;
  }

  function dismissOrder(orderId) {
    const orders = getOrderHistory();
    const idx = orders.findIndex(o => o.orderId === orderId);
    if (idx >= 0) {
      // Mark as completed (not deleted — keeps audit trail)
      const staff = getCurrentStaff();
      orders[idx].status = 'completed';
      orders[idx].completedAt = new Date().toISOString();
      orders[idx].completedBy = staff ? staff.name : null;
      orders[idx].completedByClerk = staff ? staff.clerkId : null;
      saveOrderHistory(orders);
      renderStaffOrderList();
      updateStaffNotificationBell();
      showToast('Pesanan ditandai selesai.');
    }
  }

  // Tap "Cetak Struk" on a pending order: prefill cart and print immediately.
  function autoFillPrintFromOrder(orderId) {
    const orders = getOrderHistory();
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;

    // Replace cart contents with this order's items (so #pdAddBtn flow works)
    cart = order.items.map(it => ({
      id: it.id,
      name: it.name,
      image: it.image,
      basePrice: it.basePrice || it.unitPrice || 0,
      variant: it.variant || '',
      notes: it.notes || '',
      qty: it.qty,
      unitPrice: it.unitPrice || it.basePrice || 0,
      subtotal: it.subtotal,
      category: it.category
    }));
    updateCartBadge();

    // Close staff panel & open cart so prefill is visible
    closeStaffOrderPanel();
    viewCart();

    // Prefill the customer details
    const nameEl = document.getElementById('miniCustomerName');
    const phoneEl = document.getElementById('miniCustomerPhone');
    const tableEl = document.getElementById('miniTableNumber');
    const notesEl = document.getElementById('orderNotes');
    if (order.customer && nameEl && order.customer.name && order.customer.name !== 'Anonim') nameEl.value = order.customer.name;
    if (order.customer && phoneEl && order.customer.phone) phoneEl.value = order.customer.phone;
    if (tableEl && order.table) tableEl.value = order.table;
    if (notesEl && order.notes) notesEl.value = order.notes;

    // Auto-trigger print (the user will still see the print preview window)
    setTimeout(() => printOrder(), 100);
  }

  // Re-broadcast when another tab is opened (in case it missed the live event)
  function rebroadcastPendingToStaff() {
    if (!isStaffLoggedIn()) return;
    updateStaffNotificationBell();
  }

  // ============================================================
  // Wire up listeners — must run after DOMContentLoaded
  // ============================================================
  function attachStaffListeners() {
    // Same-device (BroadcastChannel) for instant cross-tab sync
    const ch = getOrderChannel();
    if (ch) {
      ch.addEventListener('message', (e) => {
        if (!isStaffLoggedIn()) return;
        if (e.data && e.data.type === 'new-order' && e.data.order) {
          notifyStaffOfOrder(e.data.order);
          // If the panel is open, refresh it
          const panel = document.getElementById('staffOrderPanel');
          if (panel && panel.classList.contains('open')) renderStaffOrderList();
          // Refresh POS stats strip (pesanan masuk counter)
          if (typeof updatePosStats === 'function') updatePosStats();
        }
      });
    } else {
      // Fallback: storage event fires in OTHER tabs (not the current tab that wrote)
      window.addEventListener('storage', (e) => {
        if (e.key === 'warnezzel_order_ping' && isStaffLoggedIn()) {
          try {
            const payload = JSON.parse(e.newValue || 'null');
            if (payload && payload.order) notifyStaffOfOrder(payload.order);
          } catch (err) {}
          // Refresh POS stats strip
          if (typeof updatePosStats === 'function') updatePosStats();
        }
      });
    }

    // Cross-device sync disabled — Supabase removed. App is local-only.

    // Request notification permission lazily — first time staff opens the panel
    const bell = document.getElementById('staffOrderBell');
    if (bell) {
      bell.addEventListener('click', () => {
        if ('Notification' in window && Notification.permission === 'default') {
          Notification.requestPermission().catch(() => {});
        }
        openStaffOrderPanel();
      });
    }

    // Always refresh bell on load (in case orders came in while tab was closed)
    updateStaffNotificationBell();
  }

  // ============================================================
  // URL PARAMETER DETECTION — QR code integration
  // ============================================================
  function detectContext() {
    const params = new URLSearchParams(window.location.search);
    orderContext.table = params.get('table') || null;
    orderContext.branch = params.get('branch') || null;
    orderContext.branchName = getBranchName(orderContext.branch);
    isAdminMode = params.get('admin') === 'true';

    renderTableBanner();
    if (isAdminMode) {
      renderAdminPanel();
    }
  }

  function getBranchName(code) {
    const branches = {
      'warnezzel-jakarta': 'WarNezzel Jakarta',
      'warnezzel-bandung': 'WarNezzel Bandung',
      'warnezzel-surabaya': 'WarNezzel Surabaya',
      'warnezzel-purwokerto': 'WarNezzel Purwokerto',
      'warnezzel-jogja': 'WarNezzel Yogyakarta'
    };
    return branches[code] || (code ? `WarNezzel ${code}` : null);
  }

  function renderTableBanner() {
    const banner = document.getElementById('tableBanner');
    if (!banner) return;
    if (orderContext.table || orderContext.branchName) {
      let html = '<div class="table-banner-content">';
      html += '<span class="table-banner-icon">📍</span>';
      if (orderContext.table) {
        html += `<span class="table-banner-text"><b>Meja ${escapeHtml(orderContext.table)}</b>`;
        if (orderContext.branchName) html += ` &mdash; ${escapeHtml(orderContext.branchName)}`;
        html += '</span>';
      } else if (orderContext.branchName) {
        html += `<span class="table-banner-text"><b>${escapeHtml(orderContext.branchName)}</b></span>`;
      }
      html += '</div>';
      banner.innerHTML = html;
      banner.style.display = 'block';
    } else {
      banner.style.display = 'none';
    }
  }

  // ============================================================
  // UTILS
  // ============================================================
  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function badgeHTML(product) {
    if (!product.badge) return '';
    const cls = product.badge === 'best-seller' ? 'best-seller' : 'signature';
    const label = product.badge === 'best-seller' ? 'BEST SELLER' : 'SIGNATURE';
    return `<span class="card-tag ${cls}">${label}</span>`;
  }

  function formatRupiah(n) {
    return 'Rp ' + Number(n).toLocaleString('id-ID');
  }

  // Calculate unit price — simple (no size/toppings addons)
  function calculateUnitPrice(product) {
    return product.price;
  }

  // ============================================================
  // ORDER HISTORY (localStorage)
  // ============================================================
  const ORDER_HISTORY_KEY = 'warnezzel_order_history';

  function getOrderHistory() {
    try {
      return JSON.parse(localStorage.getItem(ORDER_HISTORY_KEY) || '[]');
    } catch (e) {
      return [];
    }
  }

  function saveOrderHistory(orders) {
    localStorage.setItem(ORDER_HISTORY_KEY, JSON.stringify(orders));
  }

  function addOrderToHistory(order) {
    const orders = getOrderHistory();
    orders.unshift(order); // newest first
    saveOrderHistory(orders);
  }

  function generateOrderId() {
    const d = new Date();
    const date = `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`;
    const orders = getOrderHistory();
    const todayCount = orders.filter(o => o.orderId && o.orderId.includes(date)).length;
    return `ORD-${date}-${String(todayCount + 1).padStart(3,'0')}`;
  }

  // ============================================================
  // RENDER MENU
  // ============================================================
  function renderMenu(filter = '') {
    const q = (filter || '').toLowerCase().trim();
    const container = document.getElementById(currentSection);
    if (!container) return;

    // Only allow valid customer-facing sections
    const allowedSections = ['minuman', 'bundle', 'makanan'];
    if (!allowedSections.includes(currentSection)) {
      currentSection = 'minuman';
    }

    let products;
    let usingGlobalSearch = q.length > 0;

    if (usingGlobalSearch) {
      products = [];
      ['minuman', 'makanan', 'bundle'].forEach(sec => {
        (menuData[sec] || []).forEach(p => {
          if (p.name.toLowerCase().includes(q)) {
            products.push({ ...p, _section: sec, _idx: menuData[sec].indexOf(p) });
          }
        });
      });
    } else {
      products = (menuData[currentSection] || []).map((p, i) => ({ ...p, _section: currentSection, _idx: i }));
    }

    if (usingGlobalSearch && products.length === 0) {
      container.innerHTML = `<div class="search-empty">🔍 Tidak ada menu yang cocok dengan "<strong>${escapeHtml(filter)}</strong>"</div>`;
      return;
    }

    if (currentSection === 'bundle') {
      let html = '';
      if (!usingGlobalSearch) {
        html += `<h2 class="section-title">${CATEGORY_TITLES.bundle}</h2>`;
      }
      html += '<div class="menu-grid">';
      html += products.map(p => {
        const origPrice = p.originalPrice ? `<span class="bundle-original">${formatRupiah(p.originalPrice)}</span>` : '';
        const saveTag = p.originalPrice ? `<span class="bundle-save-tag">Hemat ${formatRupiah(p.originalPrice - p.price)}</span>` : '';
        return `
          <div class="bundle-card" onclick="openProductDetail(${p._idx}, '${p._section}', ${p.id})">
            ${badgeHTML(p)}
            <div class="bundle-img-wrapper">
              ${saveTag}
              <img class="bundle-img" src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect fill=%22%23fbf5ec%22 width=%22400%22 height=%22300%22/><text fill=%22%235d4037%22 font-size=%2214%22 x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22>${encodeURIComponent(p.name)}</text></svg>'">
            </div>
            <div class="bundle-info">
              <div class="bundle-name">${escapeHtml(p.name)}</div>
              <div class="bundle-items">${p.items.map(i => '✓ ' + escapeHtml(i)).join('<br>')}</div>
              <div class="bundle-price-wrap">
                <div class="bundle-prices">
                  ${origPrice}
                  <span class="bundle-current">${formatRupiah(p.price)}</span>
                </div>
                <button class="bundle-add-btn" onclick="event.stopPropagation();quickAdd(${p.id}, '${p._section}')">+ Tambah</button>
              </div>
            </div>
          </div>
        `;
      }).join('');
      html += '</div>';
      container.innerHTML = html;
      return;
    }

    let html = '';
    if (!usingGlobalSearch) {
      html += `<h2 class="section-title">${CATEGORY_TITLES[currentSection] || ''}</h2>`;
    }
    html += '<div class="menu-grid">';
    html += products.map(p => `
      <div class="menu-card" onclick="openProductDetail(${p._idx}, '${p._section}', ${p.id})">
        ${badgeHTML(p)}
        <div class="menu-card-wrapper">
          <img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect fill=%22%23fbf5ec%22 width=%22400%22 height=%22300%22/><text fill=%22%235d4037%22 font-size=%2214%22 x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22>${encodeURIComponent(p.name)}</text></svg>'">
        </div>
        <div class="menu-card-info">
          <div class="menu-name">${escapeHtml(p.name)}</div>
          <div class="menu-price">${formatRupiah(p.price)}</div>
        </div>
        <button class="menu-add-btn" onclick="event.stopPropagation();quickAdd(${p.id}, '${p._section}')" aria-label="Tambah ${escapeHtml(p.name)}">+</button>
      </div>
    `).join('') + '</div>';

    container.innerHTML = html;
  }

  // ============================================================
  // getStatusInfo (kept for compatibility — admin panel still uses statuses)
  // ============================================================
  function getStatusInfo(status) {
    const map = {
      'menunggu': { label: 'Menunggu', cls: 'menunggu' },
      'dikonfirmasi': { label: 'Dikonfirmasi', cls: 'dikonfirmasi' },
      'diproses': { label: 'Diproses', cls: 'diproses' },
      'dibuat': { label: 'Dibuat', cls: 'dibuat' },
      'siap': { label: 'Siap', cls: 'siap' },
      'selesai': { label: 'Selesai', cls: 'selesai' },
      'dibatalkan': { label: 'Dibatalkan', cls: 'dibatalkan' }
    };
    return map[status] || { label: status, cls: status };
  }

  // ============================================================
  // PRODUCT DETAIL — Extended Customizations
  // ============================================================
  function quickAdd(id, section) {
    let product = null;
    ['minuman', 'bundle', 'makanan'].forEach(sec => {
      if (product) return;
      const arr = menuData[sec];
      if (arr) {
        product = arr.find(p => p.id === id);
      }
    });
    if (!product) return;
    openProductDetail(0, section, id);
  }

  function openProductDetail(idx, section, id) {
    let product = null;
    if (menuData[section]) {
      product = menuData[section].find(p => p.id === id);
    }
    if (!product) {
      ['minuman', 'bundle', 'makanan'].forEach(sec => {
        if (product) return;
        if (menuData[sec]) product = menuData[sec].find(p => p.id === id);
      });
    }
    if (!product) return;

    currentProduct = product;
    currentVariant = product.variants ? product.variants[0] : '';
    currentQty = 1;
    currentNotes = '';

    document.getElementById('pdImage').src = product.image;
    document.getElementById('pdTitle').textContent = product.name;
    let descHTML = product.description || '';
    if (product.items && product.items.length) {
      descHTML += '<br><br><b style="color:var(--gold);">Isi Paket:</b><br>' + product.items.map(escapeHtml).join('<br>');
    }
    document.getElementById('pdDesc').innerHTML = descHTML;
    document.getElementById('pdPrice').innerHTML = formatRupiah(product.price);

    // Variant (Hot/Ice or flavor variants)
    const variantRow = document.getElementById('pdVariant');
    if (product.variants && product.variants.length) {
      variantRow.innerHTML = product.variants.map((v, i) =>
        `<label><input type="radio" name="variant" value="${escapeHtml(v)}" ${i===0?'checked':''}> ${escapeHtml(v)}</label>`
      ).join('');
      variantRow.style.display = 'flex';
    } else {
      variantRow.innerHTML = '';
      variantRow.style.display = 'none';
    }

    // Notes (all products)
    const notesRow = document.getElementById('pdNotes');
    notesRow.innerHTML = `
      <div class="pd-section-label">📝 Catatan (opsional)</div>
      <textarea id="pdNotesField" placeholder="Contoh: Tidak terlalu manis, tanpa sedotan, dll." rows="2"></textarea>
    `;
    notesRow.style.display = 'block';

    document.getElementById('productDetailOverlay').classList.add('open');
  }

  function closeProductDetail() {
    document.getElementById('productDetailOverlay').classList.remove('open');
  }

  // Variant change handler
  document.addEventListener('change', (e) => {
    if (!currentProduct) return;
    const t = e.target;
    if (t.name === 'variant') currentVariant = t.value;
  });

  document.addEventListener('input', (e) => {
    if (e.target && e.target.id === 'pdNotesField') {
      currentNotes = e.target.value;
    }
  });

  // ============================================================
  // ADD TO CART
  // ============================================================
  document.getElementById('pdAddBtn').addEventListener('click', () => {
    if (!currentProduct) return;

    const unitPrice = calculateUnitPrice(currentProduct);
    const subtotal = unitPrice * currentQty;

    const item = {
      id: currentProduct.id,
      name: currentProduct.name,
      image: currentProduct.image,
      basePrice: currentProduct.price,
      variant: currentProduct.variants ? currentVariant : '',
      notes: currentNotes || '',
      qty: currentQty,
      unitPrice,
      subtotal,
      category: currentProduct.category || currentSection
    };

    // Find existing match: same product id + same customizations
    const matchKey = (it) => JSON.stringify({
      i: it.id, v: it.variant, n: it.notes
    });
    const key = matchKey(item);
    const existingIdx = cart.findIndex(it => matchKey(it) === key);

    if (existingIdx >= 0) {
      cart[existingIdx].qty += currentQty;
      cart[existingIdx].subtotal = cart[existingIdx].unitPrice * cart[existingIdx].qty;
    } else {
      cart.push(item);
    }

    updateCartBadge();
    renderCartItems();
    updatePaymentUI();
    closeProductDetail();
    const isPos = document.body.classList.contains('pos-mode');
    if (!isPos) {
      showToast('Ditambahkan ke keranjang');
      pulseHeaderCart();
    } else {
      // POS mode: feedback visual di sidebar kanan (Daftar Pesanan)
      pulsePosOrderList();
    }
  });

  function pulseHeaderCart() {
    const headerBtn = document.querySelector('.header-cart-btn');
    if (!headerBtn) return;
    headerBtn.classList.remove('pulse');
    void headerBtn.offsetWidth;
    headerBtn.classList.add('pulse');
    setTimeout(() => headerBtn.classList.remove('pulse'), 600);

    const ring = document.createElement('span');
    ring.className = 'ripple-ring';
    headerBtn.appendChild(ring);
    setTimeout(() => ring.remove(), 700);
  }

  // POS mode: feedback visual di sidebar pesanan saat item ditambah
  function pulsePosOrderList() {
    const cartOverlay = document.getElementById('cartOverlay');
    if (!cartOverlay) return;
    cartOverlay.classList.remove('item-added-pulse');
    void cartOverlay.offsetWidth;
    cartOverlay.classList.add('item-added-pulse');
    setTimeout(() => cartOverlay.classList.remove('item-added-pulse'), 700);
    const list = document.getElementById('cartItemList');
    if (list) {
      list.classList.remove('item-added-pulse-inner');
      void list.offsetWidth;
      list.classList.add('item-added-pulse-inner');
      setTimeout(() => list.classList.remove('item-added-pulse-inner'), 600);
    }
  }

  // ============================================================
  // CART BADGE / VIEW / CLOSE / REMOVE
  // ============================================================
  function updateCartBadge() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const badge = document.getElementById('headerCartCount');
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    }
    // Sync POS quick panel: enable "Cetak Struk" when cart has items
    const posCount = document.getElementById('posQuickCount');
    const posPrint = document.getElementById('posQuickPrintBtn');
    if (posCount) posCount.textContent = count;
    if (posPrint) {
      posPrint.disabled = count === 0;
      posPrint.style.opacity = count === 0 ? '0.5' : '1';
      posPrint.style.cursor = count === 0 ? 'not-allowed' : 'pointer';
      posPrint.style.display = 'none';
    }
    // Sync POS header cart button (always visible when staff is logged in)
    const posHeaderCartCount = document.getElementById('posHeaderCartCount');
    const posHeaderCart = document.getElementById('posHeaderCart');
    if (posHeaderCartCount) {
      posHeaderCartCount.textContent = count;
      posHeaderCartCount.style.display = count > 0 ? 'inline-flex' : 'none';
    }
    if (posHeaderCart) {
      // Add a subtle pulse when there are items
      if (count > 0) posHeaderCart.classList.add('has-items');
      else posHeaderCart.classList.remove('has-items');
    }
    // Sync cart print button (enabled when cart has items)
    const cartBtn = document.getElementById('cartPrintBtn');
    const cartBtnCount = document.getElementById('cartPrintBtnCount');
    if (cartBtn) {
      cartBtn.disabled = count === 0;
      cartBtn.style.opacity = count === 0 ? '0.5' : '1';
      cartBtn.style.cursor = count === 0 ? 'not-allowed' : 'pointer';
    }
    if (cartBtnCount) cartBtnCount.textContent = count;
    // Sync POS mobile FAB cart badge
    const toggleBadge = document.getElementById('posCartToggleBadge');
    if (toggleBadge) {
      toggleBadge.textContent = count;
      toggleBadge.style.display = count > 0 ? 'flex' : 'none';
    }
    // Refresh POS payment + print gating (POS mode only — harmless in customer mode)
    if (document.body.classList.contains('pos-mode')) updatePaymentUI();
    // Sync POS stats strip (item count + estimasi total)
    if (typeof updatePosStats === 'function') updatePosStats();
  }

  // ============================================================
  // POS PAYMENT CONFIRMATION + PRINT GATING
  // ============================================================

  function canConfirmPayment() {
    if (!isStaffLoggedIn()) return false;
    if (cart.length === 0) return false;
    // Sync POS table field to main field for validation (already mirrored at viewCart,
    // but staff may have edited it after).
    if (document.body.classList.contains('pos-mode')) {
      const syncPos = (from, to) => {
        const f = document.getElementById(from);
        const t = document.getElementById(to);
        if (f && t) t.value = f.value;
      };
      syncPos('miniTableNumberPos', 'miniTableNumber');
      // Jika nomor meja kosong di POS mode, generate otomatis (meja sementara)
      const tableInput = document.getElementById('miniTableNumber');
      if (!tableInput || !tableInput.value.trim()) {
        tableInput.value = 'POS-' + Date.now().toString(36).toUpperCase();
      }
      return true; // di POS mode, nomor meja dijamin ada (auto-generated jika kosong)
    }
    const tableInput = document.getElementById('miniTableNumber');
    const table = tableInput ? tableInput.value.trim() : '';
    return !!table;
  }

  function confirmPayment() {
    if (!isStaffLoggedIn()) {
      showToast('Login karyawan dulu.', true);
      return;
    }
    if (cart.length === 0) {
      showToast('Keranjang kosong!', true);
      return;
    }
    if (!canConfirmPayment()) {
      showCartFieldError('Isi nomor meja dulu sebelum konfirmasi pembayaran.');
      focusRequiredField();
      return;
    }

    // Set flag lunas — TIDAK reset keranjang, TIDAK auto print
    paymentConfirmed = true;
    updatePaymentUI();
    showToast('✓ Pembayaran dikonfirmasi. Keranjang aman.');
  }

  function resetPayment() {
    paymentConfirmed = false;
    updatePaymentUI();
    showToast('Konfirmasi pembayaran dibatalkan.');
  }

  function manualResetCart() {
    if (cart.length === 0 && !paymentConfirmed) return;
    if (!confirm('Reset keranjang? Pesanan yang belum di-cetak akan hilang.')) return;
    cart = [];
    paymentConfirmed = false;
    updateCartBadge();
    renderCartItems();
    updatePaymentUI();
    document.getElementById('miniCustomerName').value = '';
    document.getElementById('miniCustomerNamePos').value = '';
    document.getElementById('miniTableNumber').value = '';
    document.getElementById('miniTableNumberPos').value = '';
    document.getElementById('orderNotes').value = '';
    showToast('Keranjang direset.');
  }

  function updatePaymentUI() {
    const confirmBtn = document.getElementById('cartConfirmPayBtn');
    const statusEl = document.getElementById('cartPaymentStatus');
    const printBtn = document.getElementById('cartPrintBtn');
    const resetBtn = document.getElementById('cartResetBtn');
    const cartHasItems = cart.length > 0;
    const isPos = document.body.classList.contains('pos-mode');

    if (confirmBtn) {
      const canConfirm = isPos && canConfirmPayment();
      confirmBtn.disabled = !canConfirm || paymentConfirmed;
      confirmBtn.style.opacity = (canConfirm && !paymentConfirmed) ? '1' : '0.5';
      confirmBtn.style.cursor = (!canConfirm || paymentConfirmed) ? 'not-allowed' : 'pointer';
      confirmBtn.style.display = isPos ? '' : 'none';
    }
    if (statusEl) statusEl.style.display = (isPos && paymentConfirmed) ? '' : 'none';
    if (printBtn) {
      const canPrint = cartHasItems && (isPos ? paymentConfirmed : true);
      printBtn.disabled = !canPrint;
      printBtn.style.opacity = canPrint ? '1' : '0.5';
      printBtn.style.cursor = canPrint ? 'pointer' : 'not-allowed';
    }
    if (resetBtn) {
      const canReset = isPos && (cartHasItems || paymentConfirmed);
      resetBtn.disabled = !canReset;
      resetBtn.style.opacity = canReset ? '1' : '0.5';
      resetBtn.style.cursor = canReset ? 'pointer' : 'not-allowed';
    }
  }

  function togglePosCart() {
    document.body.classList.toggle('pos-cart-visible');
  }

  function viewCart() {
    const isPos = document.body.classList.contains('pos-mode');

    if (!isPos) {
      const cartOverlay = document.getElementById('cartOverlay');
      const backdrop = document.getElementById('cartBackdrop');
      cartOverlay.classList.add('open');
      backdrop.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }
    // POS mode: sidebar selalu terlihat, tidak perlu buka/tutup

    // Auto-fill table from QR context
    if (orderContext.table) {
      const tableInput = document.getElementById('miniTableNumber');
      if (tableInput && !tableInput.value) tableInput.value = orderContext.table;
      if (isPos) {
        const tableInputPos = document.getElementById('miniTableNumberPos');
        if (tableInputPos && !tableInputPos.value) tableInputPos.value = orderContext.table;
      }
    }

    // Refresh staff-gated buttons (in case staff logged in/out elsewhere)
    applyStaffUI();

    renderCartItems();
    updatePaymentUI();
  }

  function renderCartItems() {
    const cartListEl = document.getElementById('cartItemList');
    const totalEl = document.getElementById('cartTotal');
    const cartListCust = document.getElementById('cartItemListCustomer');
    const totalCust = document.getElementById('cartTotalCustomer');

    if (cart.length === 0) {
      const emptyHTML = '<div class="cart-empty">&#129392;<br>Keranjang masih kosong</div>';
      cartListEl.innerHTML = emptyHTML;
      if (cartListCust) cartListCust.innerHTML = emptyHTML;
      totalEl.textContent = 'Rp 0';
      if (totalCust) totalCust.textContent = 'Rp 0';
      return;
    }

    let html = '';
    cart.forEach((item, i) => {
      const tags = [];
      if (item.variant) tags.push(`<span class="cart-tag">${escapeHtml(item.variant)}</span>`);
      const tagsHtml = tags.length ? `<div class="cart-tags-row">${tags.join('')}</div>` : '';
      const notesHtml = item.notes ? `<div class="cart-item-notes">📝 ${escapeHtml(item.notes)}</div>` : '';

      html += `
        <div class="cart-item-row">
          <div class="cart-item-info">
            <div class="cart-item-name">${escapeHtml(item.name)}</div>
            ${tagsHtml}
            ${notesHtml}
            <div class="cart-item-sub">${formatRupiah(item.unitPrice)} × ${item.qty} = <b>${formatRupiah(item.subtotal)}</b></div>
          </div>
          <button class="cart-remove-btn" onclick="removeCartItem(${i})" aria-label="Hapus">&times;</button>
        </div>
      `;
    });
    cartListEl.innerHTML = html;
    if (cartListCust) cartListCust.innerHTML = html;
    const total = cart.reduce((t, i) => t + i.subtotal, 0);
    const totalStr = formatRupiah(total);
    totalEl.textContent = totalStr;
    if (totalCust) totalCust.textContent = totalStr;
    // renderStrukPreview() — preview section removed
  }

  // ============================================================
  // SYNC CART FIELD (sync POS fields → main cart fields)
  // ============================================================

  // Called after payment is confirmed / reset

  function closeCart() {
    const isPos = document.body.classList.contains('pos-mode');
    if (!isPos) {
      const cartOverlay = document.getElementById('cartOverlay');
      const backdrop = document.getElementById('cartBackdrop');
      cartOverlay.classList.remove('open');
      backdrop.classList.remove('visible');
      document.body.style.overflow = '';
    }
    // POS mode: sidebar selalu terlihat, tidak perlu ditutup
  }
  // Tampilkan notif error untuk field wajib (di kolom kiri)
  function showCartFieldError(message) {
    const errorEl = document.getElementById('cartFieldError');
    if (errorEl) {
      errorEl.innerHTML = '&#9888; ' + message;
      errorEl.style.display = '';
      // Auto re-trigger animasi
      errorEl.style.animation = 'none';
      void errorEl.offsetWidth;
      errorEl.style.animation = 'errorFadeIn 0.3s ease';
      // Auto hide setelah 4 detik
      clearTimeout(showCartFieldError._t);
      showCartFieldError._t = setTimeout(() => {
        errorEl.style.display = 'none';
        clearFieldErrors();
      }, 4000);
    }
  }

  // Highlight input wajib yang kosong dengan border merah & shake animasi
  function focusRequiredField() {
    // Mode kasir: cek field Pos; mode customer: cek field utama
    const posMode = document.body.classList.contains('pos-mode');
    const tableEl = document.getElementById(posMode ? 'miniTableNumberPos' : 'miniTableNumber');
    if (tableEl) {
      tableEl.classList.add('input-error');
      // Scroll kolom kiri agar field terlihat
      const col = document.querySelector('.cart-col-left');
      if (col) col.scrollTop = 0;
      setTimeout(() => tableEl.focus(), 50);
      setTimeout(() => tableEl.classList.remove('input-error'), 2000);
    }
  }

  function clearFieldErrors() {
    document.querySelectorAll('.cart-form input.input-error').forEach(el => el.classList.remove('input-error'));
  }

  // Reset error saat user mulai mengetik
  document.addEventListener('input', (e) => {
    if (e.target.matches('.cart-form input[data-required="true"]')) {
      e.target.classList.remove('input-error');
      const errorEl = document.getElementById('cartFieldError');
      if (errorEl) errorEl.style.display = 'none';
    }
    // Live update preview struk saat user mengetik di kolom kiri (mode kasir)
    if (document.body.classList.contains('pos-mode') &&
        (e.target.id === 'miniTableNumberPos' ||
         e.target.id === 'miniCustomerNamePos' ||
         e.target.id === 'miniCustomerPhonePos' ||
         e.target.id === 'miniTableNumber' ||
         e.target.id === 'miniCustomerName' ||
         e.target.id === 'miniCustomerPhone')) {
      // renderStrukPreview() — preview section removed
    }
  });

  function removeCartItem(index) {
    cart.splice(index, 1);
    updateCartBadge();
    renderCartItems();
    // Reset payment state when cart becomes empty
    if (cart.length === 0) {
      paymentConfirmed = false;
      updatePaymentUI();
    }
  }

  // Show/hide e-wallet sub-options
  document.addEventListener('change', (e) => {
    if (e.target && e.target.name === 'paymentMethod') {
      // Payment method listener — kept for legacy orders
    }
  });

  // ============================================================
  // CHECKOUT — Order Submission
  // ============================================================
  function orderViaWhatsApp() {
    // Staff-only flow: staff uses printOrder (already handles verified payment stamp).
    // Customer flow: orders via WhatsApp.
    const staff = getCurrentStaff();

    // Mode kasir: sinkronkan nilai dari field Pos ke field utama sebelum baca
    if (document.body.classList.contains('pos-mode')) {
      const syncPos = (from, to) => {
        const f = document.getElementById(from);
        const t = document.getElementById(to);
        if (f && t) t.value = f.value;
      };
      syncPos('miniCustomerNamePos', 'miniCustomerName');
      syncPos('miniCustomerPhonePos', 'miniCustomerPhone');
      syncPos('miniTableNumberPos', 'miniTableNumber');
    }

    const customerNameEl = document.getElementById('miniCustomerName');
    const customerPhoneEl = document.getElementById('miniCustomerPhone');
    const tableNumberEl = document.getElementById('miniTableNumber');
    const customerName = customerNameEl ? customerNameEl.value.trim() : '';
    const customerPhone = customerPhoneEl ? customerPhoneEl.value.trim() : '';
    const tableNumber = tableNumberEl ? tableNumberEl.value.trim() : '';
    const orderNotesEl = document.getElementById('orderNotes');
    const orderNotes = orderNotesEl ? orderNotesEl.value.trim() : '';

    if (cart.length === 0) {
      showToast('Keranjang kosong!', true);
      return;
    }
    if (!tableNumber) {
      showCartFieldError('Nomor meja wajib diisi!');
      focusRequiredField();
      return;
    }

    const orderId = generateOrderId();
    const total = cart.reduce((t, i) => t + i.subtotal, 0);
    const order = {
      orderId,
      timestamp: new Date().toISOString(),
      customer: { name: customerName || 'Anonim', phone: customerPhone },
      table: tableNumber,
      branch: orderContext.branch,
      branchName: orderContext.branchName,
      items: cart.map(item => ({ ...item })),
      total,
      status: 'pending',  // pending | completed | cancelled
      notes: orderNotes,
      // Clerk attribution — siapa handle pesanan ini (null untuk customer self-order via WA)
      clerkId: staff ? staff.clerkId : null,
      clerkName: staff ? staff.name : null
    };

    addOrderToHistory(order);

    // Broadcast to any open staff tab on this device (instant cross-tab sync)
    broadcastNewOrder(order);

    // Build WhatsApp message
    const waPhone = '6289684943741';
    let msg = `*☕ ORDER WARNezzeL*\n`;
    msg += `_Order ID: ${orderId}_\n\n`;
    msg += `📍 *Meja:* ${tableNumber}\n`;
    if (orderContext.branchName) msg += `🏪 *Cabang:* ${orderContext.branchName}\n`;
    if (customerName) msg += `👤 *Pemesan:* ${customerName}\n`;
    if (customerPhone) msg += `📱 *WhatsApp:* ${customerPhone}\n`;
    msg += `\n━━━━━━━━━━━━━━\n`;
    msg += `*ITEMS:*\n`;

    cart.forEach((item, i) => {
      msg += `\n*${i + 1}. ${item.name}* x${item.qty}\n`;
      if (item.variant) msg += `   • Varian: ${item.variant}\n`;
      if (item.notes) msg += `   • Catatan: ${item.notes}\n`;
      msg += `   • Subtotal: *${formatRupiah(item.subtotal)}*\n`;
    });

    msg += `\n━━━━━━━━━━━━━━\n`;
    msg += `*💰 TOTAL: ${formatRupiah(total)}*\n`;
    if (orderNotes) msg += `*📝 Catatan:* ${orderNotes}\n`;
    msg += `\n_Mohon diproses, terima kasih! 🙏_`;

    window.open(`https://wa.me/${waPhone}?text=${encodeURIComponent(msg)}`, '_blank');

    // Clear cart
    cart = [];
    paymentConfirmed = false;
    updateCartBadge();
    updatePaymentUI();
    closeCart();
    showToast('Pesanan dikirim! Cek WhatsApp untuk konfirmasi.');
  }

  // ============================================================
  // PRINT ORDER — compact mini-printer receipt (58mm)
  // Staff-only. Includes "✓ Pembayaran Berhasil" stamp + staff name.
  // ============================================================
  // Persisted receipt width — '58' (default) or '80' mm
  function getStrukSize() {
    try {
      const v = localStorage.getItem('warnezzel_struk_size');
      return (v === '58' || v === '80') ? v : '58';
    } catch (e) { return '58'; }
  }
  function setStrukSize(size) {
    if (size !== '58' && size !== '80') return;
    try { localStorage.setItem('warnezzel_struk_size', size); } catch (e) {}
    showToast('Ukuran struk: ' + size + ' mm');
  }

  function printOrder() {
    // Gate: staff must be logged in
    if (!isStaffLoggedIn()) {
      showToast('Login karyawan dulu untuk mencetak struk.', true);
      openStaffLogin();
      return;
    }
    // Gate: in POS mode, payment must be confirmed first
    if (document.body.classList.contains('pos-mode') && !paymentConfirmed) {
      showToast('Konfirmasi pembayaran dulu sebelum cetak struk.', true);
      const btn = document.getElementById('cartConfirmPayBtn');
      if (btn) {
        btn.classList.add('pulse-attention');
        setTimeout(() => btn.classList.remove('pulse-attention'), 1200);
      }
      return;
    }

    const customerName = document.getElementById('miniCustomerName').value.trim();
    let tableNumber = document.getElementById('miniTableNumber').value.trim();
    // POS mode: jika nomor meja kosong, pakai default agar struk tetap bisa dicetak
    if (!tableNumber && document.body.classList.contains('pos-mode')) {
      tableNumber = 'POS-' + Date.now().toString(36).toUpperCase();
      document.getElementById('miniTableNumber').value = tableNumber;
    }
    const orderNotesEl = document.getElementById('orderNotes');
    const orderNotes = orderNotesEl ? orderNotesEl.value.trim() : '';

    if (cart.length === 0) {
      showToast('Keranjang kosong!', true);
      return;
    }
    if (!tableNumber) {
      showCartFieldError('Nomor meja wajib diisi!');
      focusRequiredField();
      return;
    }

    const orderId = generateOrderId();
    const total = cart.reduce((t, i) => t + i.subtotal, 0);
    const now = new Date();
    const dateTimeStr = now.toLocaleString('id-ID', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
    const staff = getCurrentStaff();
    const isPos = document.body.classList.contains('pos-mode');

    // POS mode: simpan data untuk finalize (print + reset + catat pemasukan)
    if (isPos) {
      finalizeData = {
        orderId,
        timestamp: now.toISOString(),
        dateTimeStr,
        tableNumber,
        customerName,
        cart: JSON.parse(JSON.stringify(cart)),
        orderNotes,
        total,
        staffName: staff ? staff.name : '-'
      };
    }

    // Item rows
    const itemsHTML = cart.map((item, i) => {
      const parts = [];
      if (item.variant) parts.push(item.variant);
      if (item.notes) parts.push('Cat: ' + item.notes);
      const subLine = parts.length
        ? '<div class="struk-item-sub">&nbsp;&nbsp;' + parts.join(' · ') + '</div>'
        : '';
      return '<div class="struk-item">' +
        '<div class="struk-row"><span>' + (i + 1) + '. ' + escapeHtml(item.name) + ' ×' + item.qty + '</span><span>' + formatRupiah(item.subtotal) + '</span></div>' +
        subLine +
      '</div>';
    }).join('');

    const notesHTML = orderNotes
      ? '<div class="struk-note"><i>📝 Catatan: ' + escapeHtml(orderNotes) + '</i></div>'
      : '';

    const metaRows = [
      { label: 'Meja', value: '#' + escapeHtml(tableNumber) },
      { label: 'Kasir', value: escapeHtml(staff ? staff.name : '-') + (staff && staff.clerkId ? ' [' + escapeHtml(staff.clerkId) + ']' : '') }
    ];
    if (orderContext.branchName) metaRows.push({ label: 'Cabang', value: escapeHtml(orderContext.branchName) });
    if (customerName) metaRows.push({ label: 'Pemesan', value: escapeHtml(customerName) });
    const metaHTML = metaRows.map(r =>
      '<div class="struk-row"><span class="struk-bold">' + r.label + ':</span><span>' + r.value + '</span></div>'
    ).join('');

    const strukSize = getStrukSize(); // '58' or '80'

    const strukHTML =
      '<div class="struk-thermal ' + (strukSize === '80' ? 'struk-80' : '') + '">' +
        // Header dengan border dekoratif
        '<div class="struk-deco-top">★ ★ ★</div>' +
        '<img src="' + WARNEZZEL_LOGO_URL + '" alt="WarNezzel" class="struk-logo" onerror="this.style.display=\'none\'">' +
        '<div class="struk-center struk-bold struk-title">WARNEZZEL</div>' +
        '<div class="struk-center struk-tagline">— Coffee & Eatery —</div>' +
        '<div class="struk-center struk-orderno">#' + escapeHtml(orderId) + '</div>' +
        '<div class="struk-center struk-datetime">' + escapeHtml(dateTimeStr) + '</div>' +
        '<div class="struk-divider-double"></div>' +
        '<div class="struk-meta">' + metaHTML + '</div>' +
        '<div class="struk-divider"></div>' +
        // Daftar item
        '<div class="struk-items">' + itemsHTML + '</div>' +
        '<div class="struk-divider"></div>' +
        '<div class="struk-row struk-total"><span>TOTAL</span><span>' + formatRupiah(total) + '</span></div>' +
        (notesHTML ? '<div class="struk-notes">' + notesHTML + '</div><div class="struk-divider-dotted"></div>' : '') +
        // Stamp LUNAS
        '<div class="struk-stamp">✓ LUNAS</div>' +
        '<div class="struk-stamp-sub">— Pembayaran Dikonfirmasi Kasir —</div>' +
        '<div class="struk-divider-double"></div>' +
        // Footer
        '<div class="struk-footer-thanks">❤ Terima Kasih ❤</div>' +
        '<div class="struk-footer-sub">Tunjukkan struk ini ke kasir</div>' +
        '<div class="struk-footer-sub">Simpan struk sebagai bukti pembayaran</div>' +
        '<div class="struk-deco-bottom">— ☕ —</div>' +
      '</div>';

    // Buat strukContainer (sibling langsung di body) agar selalu tampil di print
    let printContainer = document.getElementById('strukContainer');
    if (!printContainer) {
      printContainer = document.createElement('div');
      printContainer.id = 'strukContainer';
      printContainer.style.cssText = 'display:none;';
      document.body.appendChild(printContainer);
    }
    printContainer.innerHTML = strukHTML;

    // Render preview modal — close existing if any
    const existing = document.getElementById('strukPreviewOverlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'strukPreviewOverlay';
    overlay.classList.add('struk-preview-overlay');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:14px;';
    overlay.innerHTML =
      '<div style="background:#fff;border-radius:8px;padding:6px;max-height:90vh;overflow:auto;">' +
        strukHTML +
      '</div>' +
      '<div class="no-print" style="margin-top:12px;display:flex;gap:8px;">' +
        '<button id="strukPrintBtn" style="background:#2e1a0f;color:#fff;border:none;padding:10px 18px;border-radius:8px;font-weight:700;cursor:pointer;font-size:13px;">🖨 Cetak</button>' +
        '<button id="strukCloseBtn" style="background:#ddd;color:#333;border:none;padding:10px 18px;border-radius:8px;font-weight:700;cursor:pointer;font-size:13px;">✕ Tutup</button>' +
      '</div>';

    document.body.appendChild(overlay);
    document.getElementById('strukPrintBtn').onclick = () => {
      if (isPos) {
        finalizePrintAndClear();
      } else {
        window.print();
      }
    };
    document.getElementById('strukCloseBtn').onclick = () => overlay.remove();
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });
  }

  // ============================================================
  // QUANTITY CONTROLS
  // ============================================================
  function changeQty(delta) {
    currentQty = Math.max(1, Math.min(99, currentQty + delta));
    document.getElementById('qtyDisplay').textContent = currentQty;
  }

  // ============================================================
  // PRINT FINALIZATION (POS mode: simpan saja, JANGAN auto reset)
  // ============================================================
  let finalizeData = {};
  let finalizeOrderData = null; // simpan untuk callback afterprint
  function finalizePrintAndClear() {
    // 1. Simpan data order ke variabel (JANGAN hapus struk dari DOM)
    finalizeOrderData = {
      orderId: finalizeData.orderId,
      timestamp: finalizeData.timestamp,
      dateTimeStr: finalizeData.dateTimeStr,
      table: finalizeData.tableNumber,
      customer: { name: finalizeData.customerName },
      items: JSON.parse(JSON.stringify(finalizeData.cart)),
      notes: finalizeData.orderNotes,
      total: finalizeData.total,
      status: 'selesai',
      staff: finalizeData.staffName
    };

    // 2. Catat order & pemasukan sebelum print
    addOrderToHistory(finalizeOrderData);
    recordIncome(finalizeOrderData);

    // 3. Tutup preview overlay setelah print selesai
    const afterHandler = () => {
      window.removeEventListener('afterprint', afterHandler);
      const preview = document.getElementById('strukPreviewOverlay');
      if (preview) preview.remove();
      const container = document.getElementById('strukContainer');
      if (container) container.innerHTML = '';
      finalizeData = {};
      showToast('Pesanan dicetak dan disimpan.');
      if (isPos) {
        const adminPanel = document.getElementById('adminPanel');
        if (adminPanel && adminPanel.style.display === 'block') {
          renderAdminStats();
          renderAdminOrders();
          if (typeof renderIncomeStats === 'function') renderIncomeStats();
        }
      }
    };

    window.addEventListener('afterprint', afterHandler);

    // Cetak struk
    window.print();
  }

  // ============================================================
  // INCOME RECORDS (pemasukan)
  // ============================================================
  function getIncomeRecords() {
    try {
      return JSON.parse(localStorage.getItem('warnezzel_income_records') || '[]');
    } catch (e) {
      return [];
    }
  }
  function saveIncomeRecords(records) {
    try {
      localStorage.setItem('warnezzel_income_records', JSON.stringify(records));
    } catch (e) {
      console.warn('Gagal menyimpan data pemasukan', e);
    }
  }
  function recordIncome(order) {
    const records = getIncomeRecords();
    records.unshift({
      orderId: order.orderId,
      timestamp: order.timestamp,
      dateTimeStr: order.dateTimeStr,
      total: order.total,
      itemCount: order.items.reduce((s, i) => s + i.qty, 0),
      staff: order.staff || '-',
      table: order.table || '-',
      customer: (order.customer && order.customer.name) || '-',
      source: 'pos'
    });
    saveIncomeRecords(records);
  }

  // ============================================================
  // TOAST
  // ============================================================
  let toastTimeout;
  function showToast(msg = 'Ditambahkan ke keranjang!', isError = false) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.remove('success', 'error');
    if (isError) {
      toast.classList.add('error');
      toast.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
      toast.style.color = '#fff';
    } else {
      toast.classList.add('success');
      toast.style.background = '';
      toast.style.color = '';
    }
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  // ============================================================
  // NAVIGATION TABS
  // ============================================================
  function switchSection(sectionName) {
    document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    const matchingTab = document.querySelector(`.tab-btn[data-section="${sectionName}"]`);
    if (matchingTab) matchingTab.classList.add('active');
    currentSection = sectionName;

    const sec = document.getElementById(sectionName);
    if (sec) {
      sec.style.display = 'block';
      sec.style.animation = 'fadeInUp 0.5s var(--ease-smooth)';
      // Clear search when switching tabs
      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
        searchInput.value = '';
        handleSearch('');
      }
      renderMenu('');
    }
  }

  document.querySelectorAll('.tab-btn').forEach(tab => {
    tab.addEventListener('click', () => {
      switchSection(tab.dataset.section);
    });
  });

  function handleSearch(value) {
    const wrap = document.getElementById('kategoriSearch');
    if (wrap) wrap.classList.toggle('has-value', value.length > 0);
    renderMenu(value.trim());
  }

  function clearSearch() {
    const input = document.getElementById('searchInput');
    input.value = '';
    handleSearch('');
    input.focus();
  }

  // ============================================================
  // WELCOME HUB (pengganti banner)
  // ============================================================
  function updateWelcomeHub() {
    // Status Buka/Tutup berdasarkan jam (08.00 — 22.00)
    const statusEl = document.getElementById('welcomeStatus');
    const statusTextEl = statusEl ? statusEl.querySelector('.status-text') : null;
    const dotEl = statusEl ? statusEl.querySelector('.status-dot') : null;
    const now = new Date();
    const hour = now.getHours();
    const isOpen = hour >= 8 && hour < 22;
    if (statusTextEl) statusTextEl.textContent = isOpen ? 'Buka' : 'Tutup';
    if (statusEl) statusEl.classList.toggle('is-closed', !isOpen);
    if (dotEl) dotEl.style.background = isOpen ? '#2e8b57' : '#c0392b';

    // Lokasi dari QR context
    const locEl = document.getElementById('welcomeLocation');
    if (locEl) locEl.textContent = orderContext.branchName || 'Semua Cabang';

    // Meja dari QR context
    const tableEl = document.getElementById('welcomeTable');
    if (tableEl) tableEl.textContent = orderContext.table ? '#' + orderContext.table : '—';
  }

  // ============================================================
  // ADMIN PANEL
  // ============================================================
  function renderAdminPanel() {
    document.querySelector('.banner-section').style.display = 'none';
    document.getElementById('navTabs').style.display = 'none';
    document.getElementById('tableBanner').style.display = 'none';
    document.querySelector('.header-cart-btn').style.display = 'none';
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById('adminPanel').style.display = 'block';

    renderAdminStats();
    renderAdminOrders();

    // Admin tab clicks
    document.querySelectorAll('.admin-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.admin-content').forEach(c => c.style.display = 'none');
        const target = tab.dataset.adminTab;
        const content = document.getElementById('admin-' + target);
        if (content) content.style.display = 'block';

        if (target === 'menu-mgmt') renderAdminMenu();
        if (target === 'tables') renderAdminTables();
        if (target === 'income') renderIncomeRecords();
      });
    });
  }

  function renderAdminStats() {
    const orders = getOrderHistory();
    const today = new Date().toDateString();
    const todayOrders = orders.filter(o => new Date(o.timestamp).toDateString() === today);
    const revenue = todayOrders.reduce((s, o) => s + o.total, 0);
    const processing = orders.filter(o => ['menunggu', 'dikonfirmasi', 'diproses', 'dibuat'].includes(o.status)).length;

    // Top product
    const productCounts = {};
    todayOrders.forEach(o => o.items.forEach(it => {
      productCounts[it.name] = (productCounts[it.name] || 0) + it.qty;
    }));
    const topProduct = Object.entries(productCounts).sort((a, b) => b[1] - a[1])[0];

    document.getElementById('statTotalOrders').textContent = todayOrders.length;
    document.getElementById('statRevenue').textContent = formatRupiah(revenue);
    document.getElementById('statProcessing').textContent = processing;
    document.getElementById('statTopProduct').textContent = topProduct ? topProduct[0] : '-';
  }

  function renderAdminOrders() {
    const filter = document.getElementById('orderStatusFilter').value;
    const orders = getOrderHistory();
    const filtered = filter === 'all' ? orders : orders.filter(o => o.status === filter);

    const list = document.getElementById('adminOrdersList');
    if (filtered.length === 0) {
      list.innerHTML = '<div class="empty-state">📭<br><h3>Belum ada pesanan</h3><p>Pesanan dari pelanggan akan muncul di sini.</p></div>';
      return;
    }

    let html = '';
    filtered.forEach(order => {
      const statusInfo = getStatusInfo(order.status);
      const date = new Date(order.timestamp);
      const dateStr = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
      const itemsPreview = order.items.map(it => `${escapeHtml(it.name)} x${it.qty}`).join(', ');

      html += `
        <div class="admin-order-card">
          <div class="admin-order-header">
            <div>
              <div class="admin-order-id">${escapeHtml(order.orderId)}</div>
              <div class="admin-order-meta">${escapeHtml(dateStr)} &middot; Meja ${escapeHtml(order.table)} &middot; ${escapeHtml(order.customer.name)}</div>
            </div>
            <div class="history-status status-${order.status}">${statusInfo.label}</div>
          </div>
          <div class="admin-order-items">${escapeHtml(itemsPreview)}</div>
          <div class="admin-order-footer">
            <span class="admin-order-total">${formatRupiah(order.total)}</span>
            <select class="admin-status-select" onchange="updateOrderStatus('${escapeHtml(order.orderId)}', this.value)">
              ${['menunggu', 'dikonfirmasi', 'diproses', 'dibuat', 'siap', 'selesai', 'dibatalkan'].map(s =>
                `<option value="${s}" ${s === order.status ? 'selected' : ''}>${getStatusInfo(s).label}</option>`
              ).join('')}
            </select>
          </div>
          <button class="admin-toggle-detail" onclick="toggleOrderDetail('${escapeHtml(order.orderId)}')">Lihat Detail</button>
          <div class="admin-order-detail" id="order-detail-${escapeHtml(order.orderId)}" style="display:none;">
            ${order.items.map(it => `
              <div class="admin-detail-row">
                <span>${escapeHtml(it.name)} (${escapeHtml(it.variant || '-')}) x${it.qty}</span>
                <span>${formatRupiah(it.subtotal)}</span>
              </div>
            `).join('')}
            ${order.notes ? `<div class="admin-detail-row"><span>📝 ${escapeHtml(order.notes)}</span></div>` : ''}
          </div>
        </div>
      `;
    });
    list.innerHTML = html;
  }

  function updateOrderStatus(orderId, newStatus) {
    const orders = getOrderHistory();
    const idx = orders.findIndex(o => o.orderId === orderId);
    if (idx >= 0) {
      orders[idx].status = newStatus;
      saveOrderHistory(orders);
      renderAdminStats();
      renderAdminOrders();
      showToast(`Status diubah ke ${getStatusInfo(newStatus).label}`);
    }
  }

  function renderIncomeRecords() {
    const records = getIncomeRecords();
    const filterEl = document.getElementById('incomeMonthFilter');

    // Populate month filter (preserve current selection)
    const currentFilter = filterEl.value || 'all';
    const months = new Set();
    records.forEach(r => {
      const d = new Date(r.timestamp);
      const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
      const label = d.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
      months.add(JSON.stringify({ key, label }));
    });
    const monthList = Array.from(months).map(s => JSON.parse(s)).sort((a, b) => b.key.localeCompare(a.key));
    filterEl.innerHTML = '<option value="all">Semua Waktu</option>' +
      monthList.map(m => `<option value="${m.key}">${m.label}</option>`).join('');
    filterEl.value = currentFilter;

    // Filter
    const filter = filterEl.value;
    const filtered = filter === 'all'
      ? records
      : records.filter(r => {
          const d = new Date(r.timestamp);
          const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
          return key === filter;
        });

    // Stats
    const total = filtered.reduce((s, r) => s + r.total, 0);
    const today = new Date().toDateString();
    const todayRecords = records.filter(r => new Date(r.timestamp).toDateString() === today);
    const todayTotal = todayRecords.reduce((s, r) => s + r.total, 0);
    document.getElementById('incomeTotal').textContent = formatRupiah(total);
    document.getElementById('incomeToday').textContent = formatRupiah(todayTotal);
    document.getElementById('incomeOrders').textContent = filtered.length;

    // List
    const list = document.getElementById('incomeRecordsList');
    if (filtered.length === 0) {
      list.innerHTML = '<div class="empty-state">📭<br><h3>Belum ada pemasukan</h3><p>Transaksi yang sudah dicetak akan muncul di sini.</p></div>';
      return;
    }

    list.innerHTML = filtered.map(r => {
      const date = new Date(r.timestamp);
      const dateStr = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
      return `
        <div class="admin-order-card">
          <div class="admin-order-header">
            <div>
              <div class="admin-order-id">${escapeHtml(r.orderId || '-')}</div>
              <div class="admin-order-meta">${escapeHtml(dateStr)} &middot; Kasir: ${escapeHtml(r.staff || '-')} &middot; Meja ${escapeHtml(r.table || '-')}</div>
            </div>
            <div class="history-status" style="background:#1a8a3a;color:#fff;">+ ${formatRupiah(r.total)}</div>
          </div>
          <div class="admin-order-meta">Pemesan: ${escapeHtml(r.customer || '-')} &middot; ${r.itemCount || 0} item</div>
        </div>
      `;
    }).join('');
  }

  function renderIncomeStats() {
    const records = getIncomeRecords();
    const today = new Date().toDateString();
    const todayRecords = records.filter(r => new Date(r.timestamp).toDateString() === today);
    const todayTotal = todayRecords.reduce((s, r) => s + r.total, 0);
    const incomeTodayEl = document.getElementById('incomeToday');
    const incomeTotalEl = document.getElementById('incomeTotal');
    const incomeOrdersEl = document.getElementById('incomeOrders');
    if (incomeTodayEl) incomeTodayEl.textContent = formatRupiah(todayTotal);
    if (incomeTotalEl) incomeTotalEl.textContent = formatRupiah(records.reduce((s, r) => s + r.total, 0));
    if (incomeOrdersEl) incomeOrdersEl.textContent = records.length;
  }

  function toggleOrderDetail(orderId) {
    const el = document.getElementById('order-detail-' + orderId);
    if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }

  function renderAdminMenu() {
    const list = document.getElementById('adminMenuList');
    let html = '';
    ['minuman', 'makanan', 'bundle'].forEach(cat => {
      html += `<h3 class="admin-cat-title">${cat === 'minuman' ? '☕ Minuman' : cat === 'makanan' ? '🍟 Makanan' : '🎁 Paket'}</h3>`;
      html += '<div class="admin-menu-grid">';
      (menuData[cat] || []).forEach(p => {
        html += `
          <div class="admin-menu-card">
            <img src="${p.image}" alt="${escapeHtml(p.name)}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%23fbf5ec%22 width=%22100%22 height=%22100%22/></svg>'">
            <div class="admin-menu-info">
              <div class="admin-menu-name">${escapeHtml(p.name)}</div>
              <div class="admin-menu-price">${formatRupiah(p.price)}</div>
              <button class="admin-menu-toggle" onclick="toggleMenuAvailability(${p.id}, '${cat}')">${p.available === false ? '❌ Habis' : '✅ Tersedia'}</button>
            </div>
          </div>
        `;
      });
      html += '</div>';
    });
    list.innerHTML = html;
  }

  function toggleMenuAvailability(id, cat) {
    const product = menuData[cat].find(p => p.id === id);
    if (product) {
      product.available = product.available === false ? true : false;
      renderAdminMenu();
      showToast(`${product.name}: ${product.available === false ? 'Habis' : 'Tersedia'}`);
    }
  }

  function renderAdminTables() {
    const grid = document.getElementById('adminTableGrid');
    const baseUrl = window.location.origin + window.location.pathname;
    let html = '';
    for (let i = 1; i <= 12; i++) {
      const url = `${baseUrl}?table=${i}`;
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}`;
      html += `
        <div class="admin-table-card">
          <div class="admin-table-name">Meja ${i}</div>
          <img class="admin-table-qr" src="${qrUrl}" alt="QR Meja ${i}">
          <div class="admin-table-url">${url}</div>
          <button class="admin-table-print" onclick="printTableQR(${i}, '${url}')">🖨 Cetak</button>
        </div>
      `;
    }
    grid.innerHTML = html;
  }

  function printTableQR(tableNum, url) {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}`;
    const w = window.open('', '_blank');
    w.document.write(`
      <html><head><title>QR Meja ${tableNum} - WarNezzel</title>
      <style>
        body { font-family: sans-serif; text-align: center; padding: 30px; }
        img { max-width: 300px; }
        h1 { margin-bottom: 8px; }
        p { color: #666; }
      </style>
      </head><body>
        <h1>☕ WarNezzel</h1>
        <h2>Meja ${tableNum}</h2>
        <img src="${qrUrl}" alt="QR Code">
        <p>Scan untuk pesan langsung dari meja</p>
        <p style="font-size:11px;">${url}</p>
        <script>window.print();</script>
      </body></html>
    `);
  }

  // ============================================================
  // INIT
  // ============================================================
  document.addEventListener('DOMContentLoaded', () => {
    detectContext();
    seedDefaultStaff(); // Pastikan akun default ada di localStorage
    applyStaffUI();
    attachStaffListeners();
    if (!isAdminMode) {
      renderMenu();
      updateWelcomeHub();
      updateCartBadge();
    }
  });

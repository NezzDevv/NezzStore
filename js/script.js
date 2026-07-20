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
  // STAFF AUTH (local-only)
  // ============================================================
  // Single shared account. In production, replace with proper backend auth.
  const STAFF_CREDENTIALS = [
    { username: 'karyawan', password: 'warnezzel2026', name: 'Karyawan WarNezzel' }
  ];
  const STAFF_SESSION_KEY = 'warnezzel_staff_session';

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
    return getStaffSession();
  }

  function applyStaffUI() {
    const session = getStaffSession();
    const badge = document.getElementById('headerStaffBadge');
    const nameEl = document.getElementById('headerStaffName');
    const printBtn = document.getElementById('printOrderBtn');
    const staffRequired = document.getElementById('cartStaffRequired');
    const waBtn = document.getElementById('waOrderBtn');
    const bell = document.getElementById('staffOrderBell');

    if (session) {
      if (badge) badge.style.display = 'inline-flex';
      if (nameEl) nameEl.textContent = session.name;
      if (printBtn) printBtn.style.display = '';
      if (staffRequired) staffRequired.style.display = 'none';
      // When staff is logged in, hide WhatsApp (staff uses print receipt)
      if (waBtn) waBtn.style.display = 'none';
    } else {
      if (badge) badge.style.display = 'none';
      if (printBtn) printBtn.style.display = 'none';
      if (staffRequired) staffRequired.style.display = '';
      if (waBtn) waBtn.style.display = '';
      if (bell) bell.style.display = 'none';  // hide bell when logged out
    }
    // Always refresh bell count (whether logged in or out — but bell is hidden anyway when out)
    updateStaffNotificationBell();
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
    const match = STAFF_CREDENTIALS.find(c => c.username === u && c.password === p);
    if (match) {
      setStaffSession({ username: match.username, name: match.name });
      if (errEl) errEl.textContent = '';
      closeStaffLogin();
      applyStaffUI();
      showToast('Login berhasil. Selamat bertugas, ' + match.name + '!');

      // When staff logs in, fetch existing cloud orders and start realtime subscription
      // (idempotent — safe to call multiple times)
      syncOrdersFromCloud().then(() => {
        updateStaffNotificationBell();
      });
      if (getSupabaseStatus() === 'ready' && !_ordersSubscription) {
        subscribeToOrderUpdates();
      }
    } else {
      if (errEl) { errEl.textContent = 'Username atau password salah.'; errEl.style.color = '#e74c3c'; }
    }
  }

  function logoutStaff() {
    clearStaffSession();
    applyStaffUI();
    showToast('Logout berhasil.');
  }

  // ============================================================
  // SUPABASE — cloud sync & real-time subscriptions
  // Falls back gracefully if Supabase isn't configured.
  // ============================================================
  const ORDERS_TABLE = 'orders';
  let _ordersSubscription = null;

  function getSupabaseStatus() {
    if (!window.supabase) return 'sdk-missing';
    if (!isSupabaseConfigured()) return 'not-configured';
    return 'ready';
  }

  async function saveOrderToCloud(order) {
    if (getSupabaseStatus() !== 'ready') return { ok: false, reason: 'not-configured' };
    const client = getSupabaseClient();
    if (!client) return { ok: false, reason: 'no-client' };
    try {
      const row = {
        order_id: order.orderId,
        status: order.status,
        customer_name: order.customer ? (order.customer.name || 'Anonim') : 'Anonim',
        customer_phone: order.customer ? (order.customer.phone || null) : null,
        table_number: order.table,
        branch: order.branch || null,
        branch_name: order.branchName || null,
        items: order.items || [],
        total: order.total || 0,
        notes: order.notes || null,
        source: 'web'
      };
      const { data, error } = await client
        .from(ORDERS_TABLE)
        .insert(row)
        .select();
      if (error) {
        console.warn('[Supabase] Insert error:', error.message);
        return { ok: false, reason: error.message };
      }
      return { ok: true, data };
    } catch (e) {
      console.warn('[Supabase] Insert exception:', e);
      return { ok: false, reason: String(e) };
    }
  }

  async function updateOrderStatusInCloud(orderId, newStatus, completedBy) {
    if (getSupabaseStatus() !== 'ready') return { ok: false, reason: 'not-configured' };
    const client = getSupabaseClient();
    if (!client) return { ok: false, reason: 'no-client' };
    try {
      const update = { status: newStatus };
      if (newStatus === 'completed') {
        update.completed_at = new Date().toISOString();
        if (completedBy) update.completed_by = completedBy;
      }
      const { data, error } = await client
        .from(ORDERS_TABLE)
        .update(update)
        .eq('order_id', orderId)
        .select();
      if (error) return { ok: false, reason: error.message };
      return { ok: true, data };
    } catch (e) {
      return { ok: false, reason: String(e) };
    }
  }

  // Fetch orders from cloud and merge into local history (cloud is the source of truth)
  async function syncOrdersFromCloud() {
    if (getSupabaseStatus() !== 'ready') return;
    const client = getSupabaseClient();
    if (!client) return;
    try {
      const todayStart = new Date();
      todayStart.setHours(0, 0, 0, 0);
      const { data, error } = await client
        .from(ORDERS_TABLE)
        .select('*')
        .gte('created_at', todayStart.toISOString())
        .order('created_at', { ascending: false })
        .limit(200);
      if (error) {
        console.warn('[Supabase] Fetch error:', error.message);
        return;
      }
      if (!data || data.length === 0) return;

      // Convert cloud rows → local order format & merge into history
      const existingByOrderId = {};
      getOrderHistory().forEach(o => { if (o.orderId) existingByOrderId[o.orderId] = o; });

      data.forEach(row => {
        const localOrder = {
          orderId: row.order_id,
          timestamp: row.created_at,
          customer: {
            name: row.customer_name || 'Anonim',
            phone: row.customer_phone || ''
          },
          table: row.table_number,
          branch: row.branch,
          branchName: row.branch_name,
          items: row.items || [],
          total: row.total,
          status: row.status,
          notes: row.notes || '',
          completedAt: row.completed_at,
          completedBy: row.completed_by,
          fromCloud: true
        };
        existingByOrderId[row.order_id] = localOrder;
      });

      const merged = Object.values(existingByOrderId)
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      saveOrderHistory(merged);
    } catch (e) {
      console.warn('[Supabase] Sync exception:', e);
    }
  }

  // Subscribe to realtime updates — fired whenever a new order is inserted or status changes
  function subscribeToOrderUpdates() {
    if (getSupabaseStatus() !== 'ready') return;
    const client = getSupabaseClient();
    if (!client) return;

    // Tear down any existing subscription first (avoid duplicates)
    if (_ordersSubscription) {
      try { _ordersSubscription.unsubscribe(); } catch (e) {}
      _ordersSubscription = null;
    }

    _ordersSubscription = client
      .channel('public:orders')
      .on('postgres_changes',
        { event: 'INSERT', schema: 'public', table: ORDERS_TABLE },
        (payload) => {
          const row = payload.new;
          if (!row) return;
          const order = {
            orderId: row.order_id,
            timestamp: row.created_at,
            customer: { name: row.customer_name || 'Anonim', phone: row.customer_phone || '' },
            table: row.table_number,
            branch: row.branch,
            branchName: row.branch_name,
            items: row.items || [],
            total: row.total,
            status: row.status,
            notes: row.notes || '',
            completedAt: row.completed_at,
            completedBy: row.completed_by,
            fromCloud: true
          };
          // Merge into local history
          const orders = getOrderHistory().filter(o => o.orderId !== order.orderId);
          orders.unshift(order);
          saveOrderHistory(orders);

          // If staff is logged in, fire the notification
          if (isStaffLoggedIn()) {
            notifyStaffOfOrder(order);
            const panel = document.getElementById('staffOrderPanel');
            if (panel && panel.classList.contains('open')) renderStaffOrderList();
          }
        }
      )
      .on('postgres_changes',
        { event: 'UPDATE', schema: 'public', table: ORDERS_TABLE },
        (payload) => {
          const row = payload.new;
          if (!row || !row.order_id) return;
          // Sync local history with the updated status
          const orders = getOrderHistory();
          const idx = orders.findIndex(o => o.orderId === row.order_id);
          if (idx >= 0) {
            orders[idx].status = row.status;
            if (row.completed_at) orders[idx].completedAt = row.completed_at;
            if (row.completed_by) orders[idx].completedBy = row.completed_by;
            saveOrderHistory(orders);
            if (isStaffLoggedIn()) {
              updateStaffNotificationBell();
              const panel = document.getElementById('staffOrderPanel');
              if (panel && panel.classList.contains('open')) renderStaffOrderList();
            }
          }
        }
      )
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          console.log('[Supabase] Realtime subscribed ✓');
        } else if (status === 'CHANNEL_ERROR') {
          console.warn('[Supabase] Channel error. Coba cek RLS/replication setup.');
        }
      });
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
              <div class="sol-meta">🕒 ${escapeHtml(dateStr)}${order.customer && order.customer.name !== 'Anonim' ? ' · 👤 ' + escapeHtml(order.customer.name) : ''}</div>
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
      saveOrderHistory(orders);
      renderStaffOrderList();
      updateStaffNotificationBell();
      showToast('Pesanan ditandai selesai.');

      // Sync to cloud too (so other devices stop showing it as pending)
      updateOrderStatusInCloud(orderId, 'completed', staff ? staff.name : null).then((res) => {
        if (!res.ok && res.reason !== 'not-configured' && res.reason !== 'sdk-missing') {
          console.warn('[Supabase] Update gagal:', res.reason);
        }
      });
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
        }
      });
    }

    // Cross-device (Supabase Realtime) — fires for staff on ANY device
    if (getSupabaseStatus() === 'ready') {
      // Pull existing orders so the bell reflects reality even when this tab just opened
      syncOrdersFromCloud().then(() => {
        updateStaffNotificationBell();
        if (isStaffLoggedIn()) {
          const panel = document.getElementById('staffOrderPanel');
          if (panel && panel.classList.contains('open')) renderStaffOrderList();
        }
      });
      subscribeToOrderUpdates();
    } else {
      console.log('[Supabase] Tidak dikonfigurasi. Aktifkan Supabase untuk notifikasi cross-device. Lihat SUPABASE_SETUP.md.');
    }

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
    closeProductDetail();
    showToast('Ditambahkan ke keranjang');
    pulseHeaderCart();
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
  }

  function viewCart() {
    const cartOverlay = document.getElementById('cartOverlay');
    const backdrop = document.getElementById('cartBackdrop');
    cartOverlay.classList.add('open');
    backdrop.classList.add('visible');
    document.body.style.overflow = 'hidden';

    // Auto-fill table from QR context
    if (orderContext.table) {
      const tableInput = document.getElementById('miniTableNumber');
      if (tableInput && !tableInput.value) tableInput.value = orderContext.table;
    }

    // Refresh staff-gated buttons (in case staff logged in/out elsewhere)
    applyStaffUI();

    renderCartItems();
  }

  function renderCartItems() {
    const cartListEl = document.getElementById('cartItemList');
    const totalEl = document.getElementById('cartTotal');

    if (cart.length === 0) {
      cartListEl.innerHTML = '<div class="cart-empty">&#129392;<br>Keranjang masih kosong</div>';
      totalEl.textContent = 'Rp 0';
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
    const total = cart.reduce((t, i) => t + i.subtotal, 0);
    totalEl.textContent = formatRupiah(total);
  }

  function closeCart() {
    const cartOverlay = document.getElementById('cartOverlay');
    const backdrop = document.getElementById('cartBackdrop');
    cartOverlay.classList.remove('open');
    backdrop.classList.remove('visible');
    document.body.style.overflow = '';
  }

  function removeCartItem(index) {
    cart.splice(index, 1);
    updateCartBadge();
    renderCartItems();
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

    const customerName = document.getElementById('miniCustomerName').value.trim();
    const customerPhone = document.getElementById('miniCustomerPhone').value.trim();
    const tableNumber = document.getElementById('miniTableNumber').value.trim();
    const orderNotesEl = document.getElementById('orderNotes');
    const orderNotes = orderNotesEl ? orderNotesEl.value.trim() : '';

    if (cart.length === 0) {
      showToast('Keranjang kosong!', true);
      return;
    }
    if (!tableNumber) {
      showToast('Nomor meja wajib diisi!', true);
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
      notes: orderNotes
    };

    addOrderToHistory(order);

    // Broadcast to any open staff tab on this device (instant cross-tab sync)
    broadcastNewOrder(order);

    // Save to cloud (Supabase) — delivers to staff on OTHER devices & persists for audit
    saveOrderToCloud(order).then((res) => {
      if (res.ok) {
        console.log('[Order] Tersimpan ke Supabase ✓', orderId);
      } else if (res.reason === 'not-configured' || res.reason === 'sdk-missing') {
        // Silent: app still works in local-only mode
      } else {
        // Real failure — surface to user but don't block
        showToast('Sinkron cloud gagal: ' + res.reason, true);
      }
    });

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
    updateCartBadge();
    closeCart();
    showToast('Pesanan dikirim! Cek WhatsApp untuk konfirmasi.');
  }

  // ============================================================
  // PRINT ORDER — compact mini-printer receipt (58mm)
  // Staff-only. Includes "✓ Pembayaran Berhasil" stamp + staff name.
  // ============================================================
  function printOrder() {
    // Gate: staff must be logged in
    if (!isStaffLoggedIn()) {
      showToast('Login karyawan dulu untuk mencetak struk.', true);
      openStaffLogin();
      return;
    }

    const customerName = document.getElementById('miniCustomerName').value.trim();
    const tableNumber = document.getElementById('miniTableNumber').value.trim();
    const orderNotesEl = document.getElementById('orderNotes');
    const orderNotes = orderNotesEl ? orderNotesEl.value.trim() : '';

    if (cart.length === 0) {
      showToast('Keranjang kosong!', true);
      return;
    }
    if (!tableNumber) {
      showToast('Nomor meja wajib diisi!', true);
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

    // Pad helpers for monospace column alignment on thermal paper
    function padR(str, len) {
      str = String(str);
      while (str.length < len) str += ' ';
      return str;
    }
    function padL(str, len) {
      str = String(str);
      while (str.length < len) str = ' ' + str;
      return str;
    }

    // Meta info rows (Meja, Cabang, Pemesan, Kasir)
    const metaRows = [
      { label: 'Meja', value: '#' + tableNumber },
      { label: 'Kasir', value: staff ? staff.name : '-' }
    ];
    if (orderContext.branchName) metaRows.push({ label: 'Cabang', value: orderContext.branchName });
    if (customerName) metaRows.push({ label: 'Pemesan', value: customerName });
    const metaHTML = metaRows.map(r =>
      '<tr><td style="padding:0 0 1px;"><b>' + padR(r.label + ':', 9) + '</b></td><td style="padding:0 0 1px;">' + escapeHtml(r.value) + '</td></tr>'
    ).join('');

    // Item rows — single line each: " 1. Nescafe Classic x1      Rp 8.000"
    // Variant on sub-line if non-empty, with thinner font
    const itemsHTML = cart.map((item, i) => {
      const num = padL(String(i + 1), 2);
      const name = item.name.substring(0, 18);
      const qty = 'x' + item.qty;
      const priceCol = padR(formatRupiah(item.subtotal), 12);
      const line1 = num + '. ' + padR(name + ' ' + qty, 28) + priceCol;
      let subLine = '';
      const parts = [];
      if (item.variant) parts.push(item.variant);
      if (item.notes) parts.push('Cat:' + item.notes);
      if (parts.length) {
        subLine = '<span style="font-weight:normal;opacity:0.8;">   ' + parts.join('  ·  ') + '</span>';
      }
      return '<tr><td style="padding:0 0 1px;line-height:1.15;color:#000;font-weight:bold;">' + line1 + '</td></tr>' +
        (subLine ? '<tr><td style="padding:0 0 2px;"><span style="font-weight:normal;font-size:1px;">&zwnj;</span>' + subLine + '</td></tr>' : '');
    }).join('');

    const notesHtml = orderNotes
      ? '<tr><td style="padding:2px 0;font-weight:normal;font-size:1px;">&zwnj;</td></tr><tr><td style="padding:0 0 2px;font-weight:normal;opacity:0.7;"><i>Cat: ' + escapeHtml(orderNotes) + '</i></td></tr>'
      : '';

    const brandFontSize = window.matchMedia('print').matches ? '14px' : '16px';
    const brandLetterSpacing = window.matchMedia('print').matches ? '2px' : '3px';

    const printHTML = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Struk WarNezzel</title>' +
      '<style>' +
      '@page { size: 58mm auto; margin: 3mm; }' +
      '* { margin: 0; padding: 0; box-sizing: border-box; }' +
      'body {' +
      '  font-family: "Courier New", "Lucida Console", "Consolas", monospace;' +
      '  font-size: 9px;' +
      '  color: #000;' +
      '  background: #fff;' +
      '  line-height: 1.2;' +
      '  max-width: 300px;' +
      '  margin: 0 auto;' +
      '  padding: 4px;' +
      '}' +
      '.brand {' +
      '  text-align: center;' +
      '  margin-bottom: 2px;' +
      '}' +
      '.brand h1 {' +
      '  font-size: ' + brandFontSize + ';' +
      '  letter-spacing: ' + brandLetterSpacing + ';' +
      '  font-weight: 900;' +
      '  margin: 0;' +
      '}' +
      '.brand-sub {' +
      '  font-size: 8px;' +
      '  color: #333;' +
      '  margin: 1px 0 0;' +
      '}' +
      '.order-id {' +
      '  font-size: 7px;' +
      '  color: #666;' +
      '  margin-top: 1px;' +
      '}' +
      'hr {' +
      '  border: none;' +
      '  border-top: 1px solid #000;' +
      '  margin: 3px 0;' +
      '}' +
      'table.meta { width: 100%; font-size: 9px; }' +
      'table.items { width: 100%; }' +
      'table.items td { color: #000; font-weight: bold; }' +
      '.total-row {' +
      '  display: flex;' +
      '  justify-content: space-between;' +
      '  align-items: baseline;' +
      '  font-size: 11px;' +
      '  font-weight: 900;' +
      '  margin: 3px 0 2px;' +
      '  padding: 2px 0;' +
      '  border-top: 1px solid #000;' +
      '}' +
      '.total-row .total-label { font-size: 10px; font-weight: 900; }' +
      '.total-row .total-value { font-size: 12px; font-weight: 900; letter-spacing: 0.5px; }' +
      '.footer {' +
      '  text-align: center;' +
      '  margin-top: 6px;' +
      '  font-size: 8px;' +
      '  color: #555;' +
      '  line-height: 1.5;' +
      '}' +
      '.footer .tagline { font-size: 9px; color: #000; font-weight: 900; }' +
      '.paid-stamp {' +
      '  display: block;' +
      '  width: 130px;' +
      '  margin: 6px auto 4px;' +
      '  padding: 4px 0;' +
      '  border: 2px solid #1a8a3a;' +
      '  border-radius: 6px;' +
      '  color: #1a8a3a;' +
      '  font-weight: 900;' +
      '  font-size: 12px;' +
      '  text-align: center;' +
      '  letter-spacing: 1px;' +
      '  transform: rotate(-3deg);' +
      '  background: rgba(26, 138, 58, 0.06);' +
      '}' +
      '.paid-stamp::before { content: "\\2713  "; font-size: 13px; }' +
      '.paid-sub {' +
      '  text-align: center;' +
      '  font-size: 7px;' +
      '  color: #1a8a3a;' +
      '  margin: 1px 0 4px;' +
      '  font-style: italic;' +
      '}' +
      '.no-print { text-align: center; margin-bottom: 6px; }' +
      '.no-print button {' +
      '  padding: 6px 16px;' +
      '  font-size: 12px;' +
      '  cursor: pointer;' +
      '  border: none;' +
      '  border-radius: 3px;' +
      '  margin: 0 3px;' +
      '  font-weight: bold;' +
      '}' +
      '.btn-print { background: #2e1a0f; color: #fff; }' +
      '.btn-close { background: #ddd; color: #333; }' +
      '@media print {' +
      '  body { max-width: none; padding: 0; margin: 0; font-size: 9px; }' +
      '  .no-print { display: none !important; }' +
      '  hr { border-top: 0.5px solid #000; margin: 2px 0; }' +
      '  .total-row { border-top: 0.5px solid #000; margin: 2px 0; }' +
      '}' +
      '</style></head><body>' +
      '<div class="no-print">' +
      '<button class="btn-print" onclick="window.print()">&#128424; Cetak</button>' +
      '<button class="btn-close" onclick="window.close()">&#10005; Tutup</button>' +
      '</div>' +
      '<div class="brand">' +
      '<h1>&#9749; WARNEZZEL</h1>' +
      '<div class="brand-sub">T A N D A &nbsp; P E S A N A N</div>' +
      '<div class="order-id">' + escapeHtml(orderId) + ' &bull; ' + escapeHtml(dateTimeStr) + '</div>' +
      '</div>' +
      '<hr>' +
      '<table class="meta">' + metaHTML + '</table>' +
      '<hr>' +
      '<table class="items">' + itemsHTML + '</table>' +
      '<hr>' +
      '<div class="total-row">' +
      '<span class="total-label">TOTAL</span>' +
      '<span class="total-value">' + formatRupiah(total) + '</span>' +
      '</div>' +
      (notesHtml ? '<table class="items">' + notesHtml + '</table>' : '') +
      '<hr>' +
      '<div class="paid-stamp">PEMBAYARAN BERHASIL</div>' +
      '<div class="paid-sub">Pembayaran telah dikonfirmasi oleh kasir</div>' +
      '<hr>' +
      '<div class="footer">' +
      '<div class="tagline">&#10084;&#65039; Terima kasih!</div>' +
      'Tunjukkan struk ini ke kasir.' +
      '</div>' +
      '</body></html>';

    const w = window.open('', '_blank', 'width=360,height=500');
    w.document.write(printHTML);
    w.document.close();
    w.focus();
  }

  // ============================================================
  // QUANTITY CONTROLS
  // ============================================================
  function changeQty(delta) {
    currentQty = Math.max(1, Math.min(99, currentQty + delta));
    document.getElementById('qtyDisplay').textContent = currentQty;
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
  // BANNER SLIDER (unchanged)
  // ============================================================
  let bannerTimer = null;
  function startBannerSlider() {
    const slides = document.querySelectorAll('.banner-slide');
    const dotsContainer = document.getElementById('bannerDots');
    if (!slides.length) return;

    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Slide ' + (i + 1));
        dot.onclick = (e) => { e.stopPropagation(); goToBannerSlide(i); };
        dotsContainer.appendChild(dot);
      });
    }

    const hero = document.getElementById('bannerSlider');
    if (hero) {
      let startX = 0, startY = 0;
      hero.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }, { passive: true });
      hero.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const dx = endX - startX, dy = endY - startY;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
          changeBannerSlide(dx < 0 ? 1 : -1);
        }
      }, { passive: true });
      hero.addEventListener('mouseenter', stopBannerAutoPlay);
      hero.addEventListener('mouseleave', startBannerAutoPlay);
    }

    startBannerAutoPlay();
  }

  function startBannerAutoPlay() {
    stopBannerAutoPlay();
    const progress = document.getElementById('bannerProgress');
    if (progress) {
      progress.classList.remove('running');
      void progress.offsetWidth;
      progress.classList.add('running');
    }
    bannerTimer = setInterval(() => changeBannerSlide(1), 5000);
  }

  function stopBannerAutoPlay() {
    if (bannerTimer) {
      clearInterval(bannerTimer);
      bannerTimer = null;
    }
    const progress = document.getElementById('bannerProgress');
    if (progress) progress.classList.remove('running');
  }

  function changeBannerSlide(delta) {
    const slides = document.querySelectorAll('.banner-slide');
    if (!slides.length) return;
    const currentIdx = Array.from(slides).findIndex(s => s.classList.contains('active'));
    const nextIdx = (currentIdx + delta + slides.length) % slides.length;
    goToBannerSlide(nextIdx);
    startBannerAutoPlay();
  }

  function goToBannerSlide(idx) {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dots .dot');
    if (!slides.length || idx < 0 || idx >= slides.length) return;
    const current = document.querySelector('.banner-slide.active');
    if (current) {
      current.classList.add('exiting');
      setTimeout(() => current.classList.remove('exiting'), 900);
    }
    slides.forEach(s => {
      s.classList.remove('active');
      const card = s.querySelector('.banner-content-card');
      if (card) {
        card.style.animation = 'none';
        void card.offsetWidth;
        card.style.animation = '';
      }
    });
    dots.forEach(d => d.classList.remove('active'));
    setTimeout(() => {
      slides[idx].classList.add('active');
      if (dots[idx]) dots[idx].classList.add('active');
    }, 80);
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
    applyStaffUI();
    attachStaffListeners();
    if (!isAdminMode) {
      renderMenu();
      startBannerSlider();
      updateCartBadge();
    }
  });
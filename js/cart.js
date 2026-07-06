const CART_KEY = 'gadgetzone_cart';

// Ambil cart dari localStorage
function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

// Simpan cart ke localStorage
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

// Tambah produk ke cart
function addToCart(productId, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty = Math.min(existing.qty + qty, product.stock);
  } else {
    cart.push({ id: productId, qty: Math.min(qty, product.stock) });
  }

  saveCart(cart);
  showToast(`${product.name} ditambahkan ke keranjang`, 'success');
}

// Hapus produk dari cart
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
}

// Update kuantitas
function updateQty(productId, newQty) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let cart = getCart();
  const item = cart.find(i => i.id === productId);

  if (item) {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    item.qty = Math.min(newQty, product.stock);
    saveCart(cart);
  }
}

// Hitung total harga
function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

// Hitung total item
function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

// Update badge di navbar
function updateCartBadge() {
  const count = getCartCount();
  const badge = document.getElementById('cartBadge');
  const mobileCount = document.getElementById('mobileCartCount');

  if (badge) {
    badge.textContent = count;
    if (count > 0) {
      badge.classList.add('visible');
      badge.classList.remove('bounce');
      // Trigger reflow untuk animasi ulang
      void badge.offsetWidth;
      badge.classList.add('bounce');
    } else {
      badge.classList.remove('visible');
    }
  }

  if (mobileCount) {
    mobileCount.textContent = count;
  }
}

// Kosongkan cart
function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

// ═══════════════════════════════════════════
// Toast Notification
// ═══════════════════════════════════════════
function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) return;

  const icons = {
    success: 'fas fa-check-circle',
    error: 'fas fa-exclamation-circle',
    info: 'fas fa-info-circle'
  };

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `<i class="${icons[type] || icons.info}"></i><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
}

// Inisialisasi badge saat halaman dimuat
document.addEventListener('DOMContentLoaded', updateCartBadge);
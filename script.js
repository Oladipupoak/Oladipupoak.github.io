function toggleDrawer(forceState) {
  var drawer = document.getElementById('mobile-drawer');
  var backdrop = document.getElementById('drawer-backdrop');
  if (!drawer || !backdrop) return;

  var isOpen = typeof forceState === 'boolean' ? forceState : !drawer.classList.contains('open');
  if (isOpen) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
  } else {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
  }
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    toggleDrawer(false);
  }
});


(function () {
  function setIcon(btn, theme) {
    btn.textContent = theme === 'dark' ? '☾' : '☀';
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    setIcon(btn, current);

    btn.addEventListener('click', function () {
      current = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', current);
      try { localStorage.setItem('theme', current); } catch (e) {}
      setIcon(btn, current);
    });
  });
})();

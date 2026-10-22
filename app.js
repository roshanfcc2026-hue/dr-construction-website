const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
navigation.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    navigation.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open menu');
    menu.focus();
  }
});
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open menu');
}));
const planner = document.querySelector('#planner');
function makeBrief() {
  const data = new FormData(planner);
  return `Hello D & R Construction,\n\nI would like to discuss a free estimate.\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nLocation: ${data.get('location')}\nProject: ${data.get('type')}\n\nMy vision:\n${data.get('vision')}\n`;
}
planner.addEventListener('submit', event => {
  event.preventDefault();
  window.location.href = 'mailto:Cantu.sass89@icloud.com?subject=' + encodeURIComponent('Project estimate request') + '&body=' + encodeURIComponent(makeBrief());
  document.querySelector('#form-status').textContent = 'Your email app should open with a draft. Review and send it there. If it does not open, call 419-388-5240 or email Cantu.sass89@icloud.com directly.';
});
document.querySelector('#year').textContent = new Date().getFullYear();

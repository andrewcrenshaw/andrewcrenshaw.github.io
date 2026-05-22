/* Persistent deep-ocean banner for deep-dive presentations:
   name + back link to the portfolio + contact links. Self-contained. */
(function () {
  var css = [
    '.ac-topbar{position:fixed;top:0;left:0;right:0;z-index:400;height:42px;',
    'display:flex;align-items:center;justify-content:space-between;',
    'padding:0 clamp(1rem,4vw,2.5rem);background:rgba(6,32,43,0.82);',
    '-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);',
    'border-bottom:1px solid rgba(120,200,220,0.18);}',
    '.ac-topbar .ac-name{font-family:"Cormorant Garamond",Georgia,serif;font-size:1.1rem;',
    'font-weight:600;color:#dce9ed;text-decoration:none;display:inline-flex;align-items:center;gap:0.4rem;}',
    '.ac-topbar .ac-name:hover{color:#fff;}',
    '.ac-topbar .ac-links{display:flex;gap:1rem;align-items:center;}',
    '.ac-topbar .ac-links a{font-family:"Outfit",system-ui,sans-serif;font-size:0.74rem;',
    'letter-spacing:0.05em;color:#58c5d8;text-decoration:none;transition:color 0.2s ease;}',
    '.ac-topbar .ac-links a:hover{color:#aee6f0;}',
    '@media(max-width:480px){.ac-topbar{height:40px;}.ac-topbar .ac-links{gap:0.8rem;}.ac-topbar .ac-links a{font-size:0.7rem;}.ac-topbar .ac-name{font-size:1rem;}}'
  ].join('');
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var bar = document.createElement('div');
  bar.className = 'ac-topbar';
  bar.innerHTML =
    '<a class="ac-name" href="../index.html#deep-dives">← Andrew Crenshaw</a>' +
    '<nav class="ac-links">' +
      '<a href="https://www.linkedin.com/in/andrewcrenshaw/" target="_blank" rel="noopener">LinkedIn</a>' +
      '<a href="mailto:andrewcrenshaw123@gmail.com">Email</a>' +
      '<a href="https://github.com/andrewcrenshaw" target="_blank" rel="noopener">GitHub</a>' +
    '</nav>';
  document.body.insertBefore(bar, document.body.firstChild);
})();

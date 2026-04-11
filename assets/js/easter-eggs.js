(function () {
  'use strict';

  var THEMES = [
    {
      id: 'new-year',
      match: { month: 1, day: 1 },
      palette: {
        '--primary': '#1B5E20',
        '--secondary': '#00C853',
        '--accent': '#FFEB3B'
      },
      banner: { emoji: '\uD83C\uDF86', text: '\u00A1Feliz A\u00F1o Nuevo!' },
      priority: 10
    },
    {
      id: 'anniversary',
      match: { month: 1, startDay: 28, endDay: 31 },
      palette: {
        '--primary': '#880E4F',
        '--secondary': '#E91E63',
        '--accent': '#FF80AB'
      },
      banner: { emoji: '\uD83D\uDC95', text: 'Probablemente no te conteste porque \u00A1Estoy de aniversario de Matrimonio!' },
      priority: 5
    },
    {
      id: 'anniversary-feb',
      match: { month: 2, startDay: 1, endDay: 3 },
      palette: {
        '--primary': '#880E4F',
        '--secondary': '#E91E63',
        '--accent': '#FF80AB'
      },
      banner: { emoji: '\uD83D\uDC95', text: 'Probablemente no te conteste porque \u00A1Estoy de aniversario de Matrimonio!' },
      priority: 5
    },
    {
      id: 'pi-day',
      match: { month: 3, day: 14 },
      palette: {
        '--primary': '#1A237E',
        '--secondary': '#3F51B5',
        '--accent': '#FF8F00'
      },
      banner: { emoji: '\uD83E\uDD67', text: '\u00A1Feliz D\u00EDa del Pi! me refiero a 3.141592653589793238462643383...' },
      priority: 10
    },
    {
      id: 'st-patricks',
      match: { month: 3, day: 17 },
      palette: {
        '--primary': '#1B5E20',
        '--secondary': '#4CAF50',
        '--accent': '#FFD700'
      },
      banner: { emoji: '\u2618\uFE0F', text: 'Feliz San Patricio, si me necesitas estoy tomando Guinness \uD83C\uDF7A' },
      priority: 10
    },
    {
      id: 'star-wars',
      match: { month: 5, day: 4 },
      palette: {
        '--primary': '#1a1a2e',
        '--secondary': '#16213e',
        '--accent': '#FFD600'
      },
      banner: { emoji: '\u2B50', text: 'May the 4th be with you!' },
      priority: 10
    },
    {
      id: 'revenge-5th',
      match: { month: 5, day: 5 },
      palette: {
        '--primary': '#B71C1C',
        '--secondary': '#1a1a2e',
        '--accent': '#FF1744'
      },
      banner: { emoji: '\uD83D\uDC7F', text: 'Revenge of the 5th!' },
      priority: 10
    },
    {
      id: 'fiestas-patrias',
      match: { month: 9, startDay: 1, endDay: 30 },
      palette: {
        '--primary': '#0039A6',
        '--secondary': '#D52B1E',
        '--accent': '#FFFFFF',
        '--bg-light': '#F0F3F8',
        '--text-light': '#FFFFFF'
      },
      customGradient: 'linear-gradient(135deg, #0039A6 0%, #0039A6 30%, #FFFFFF 50%, #D52B1E 70%, #D52B1E 100%)',
      banner: { emoji: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="24" height="16" style="vertical-align:middle;display:inline-block"><rect width="30" height="10" fill="#fff"/><rect y="10" width="30" height="10" fill="#D52B1E"/><rect width="10" height="10" fill="#0039A6"/><polygon points="5,2 5.9,4.5 8.5,4.5 6.3,6 7.2,8.5 5,7 2.8,8.5 3.7,6 1.5,4.5 4.1,4.5" fill="#fff"/></svg>', text: 'Conversemoslo despues de las \u00A1Fiestas Patrias!', isHTML: true },
      priority: 5
    },
    {
      id: 'halloween',
      match: { month: 10, day: 31 },
      palette: {
        '--primary': '#4A0E4E',
        '--secondary': '#FF6F00',
        '--accent': '#FFD600'
      },
      banner: { emoji: '\uD83C\uDF83', text: '\u00A1Feliz Halloween!' },
      priority: 10
    },
    {
      id: 'christmas',
      match: { month: 12, startDay: 24, endDay: 25 },
      palette: {
        '--primary': '#B71C1C',
        '--secondary': '#1B5E20',
        '--accent': '#FFD700'
      },
      banner: { emoji: '\uD83C\uDF84', text: '\u00A1Feliz Navidad!' },
      priority: 10
    },
    {
      id: 'new-years-eve',
      match: { month: 12, day: 31 },
      palette: {
        '--primary': '#1A237E',
        '--secondary': '#FFD700',
        '--accent': '#FFFFFF'
      },
      banner: { emoji: '\uD83E\uDD42', text: '\u00A1Feliz A\u00F1o Nuevo!' },
      priority: 10
    }
  ];

  function matchesDate(match, today) {
    if (match.month !== today.getMonth() + 1) return false;
    var d = today.getDate();
    if (match.day) return d === match.day;
    return d >= match.startDay && d <= match.endDay;
  }

  function applyPalette(palette) {
    var root = document.documentElement;
    for (var key in palette) {
      root.style.setProperty(key, palette[key]);
    }
  }

  function removePalette(originals) {
    var root = document.documentElement;
    for (var key in originals) {
      root.style.setProperty(key, originals[key]);
    }
  }

  function getOriginals(palette) {
    var computed = getComputedStyle(document.documentElement);
    var originals = {};
    for (var key in palette) {
      originals[key] = computed.getPropertyValue(key).trim();
    }
    return originals;
  }

  function applyCustomGradient(gradient) {
    var elements = document.querySelectorAll('header, .easter-banner, .project-visual');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.background = gradient;
      elements[i].style.textShadow = '0 1px 3px rgba(0,0,0,0.4)';
    }
  }

  function removeCustomGradient() {
    var elements = document.querySelectorAll('header, .project-visual');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.background = '';
      elements[i].style.textShadow = '';
    }
  }

  function createBanner(theme, originals) {
    var banner = document.createElement('div');
    banner.className = 'easter-banner';
    banner.innerHTML =
      '<span class="easter-banner__emoji">' + theme.banner.emoji + '</span> ' +
      theme.banner.text +
      ' <button class="easter-banner__close" aria-label="Cerrar">&times;</button>';
    document.body.insertBefore(banner, document.body.firstChild);

    if (theme.customGradient) {
      applyCustomGradient(theme.customGradient);
    }

    banner.querySelector('.easter-banner__close').addEventListener('click', function () {
      banner.remove();
      removePalette(originals);
      if (theme.customGradient) removeCustomGradient();
      var year = new Date().getFullYear();
      try {
        localStorage.setItem('easter-egg-dismissed-' + theme.id + '-' + year, '1');
      } catch (e) { /* localStorage not available */ }
    });

    return banner;
  }

  // Sort by priority descending
  THEMES.sort(function (a, b) { return (b.priority || 0) - (a.priority || 0); });

  // Expose for preview page
  window.__easterEggs = {
    themes: THEMES,
    applyPalette: applyPalette,
    removePalette: removePalette,
    getOriginals: getOriginals,
    createBanner: createBanner,
    removeCustomGradient: removeCustomGradient,
    matchesDate: matchesDate
  };

  // Auto-activate based on current date
  var today = new Date();
  var activeTheme = null;
  for (var i = 0; i < THEMES.length; i++) {
    if (matchesDate(THEMES[i].match, today)) {
      activeTheme = THEMES[i];
      break;
    }
  }

  if (!activeTheme) return;

  var year = today.getFullYear();
  var dismissKey = 'easter-egg-dismissed-' + activeTheme.id + '-' + year;
  try {
    if (localStorage.getItem(dismissKey)) return;
  } catch (e) { /* localStorage not available */ }

  var originals = getOriginals(activeTheme.palette);
  applyPalette(activeTheme.palette);
  createBanner(activeTheme, originals);
})();

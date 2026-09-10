/* ═══════════════════════════════════════════════════════════════════════
   PINIT — PREBACIVANJE JEZIKA (bosanski ⇄ engleski)

   Platforma i radnička aplikacija imaju stotine tekstova razasutih po HTML-u
   i po JavaScript šablonima. Prepravljati svaki od njih značilo bi dirati
   nekoliko stotina mjesta i riskirati da se nešto usput pokvari.

   Umjesto toga ovaj fajl prevodi GOTOV EKRAN: prođe kroz tekst koji je već
   iscrtan i zamijeni ga engleskim. Radi i nad onim što se iscrta kasnije
   (nove prijave, tabele), jer prati promjene na stranici.

   Kako se koristi:
     • dugme BS / EN gore desno
     • ili .../platforma?lang=en u adresi
   Izbor se pamti, pa ostaje i kad se stranica osvježi.

   Ako neki tekst nije preveden, ostaje na bosanskom — ništa se ne lomi.
   Novi prijevod se dodaje kao jedan red u RJECNIK ispod.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var RJECNIK = {

    /* ── dopuna nakon provjere kroz pregledač ── */
    'Kod radnika': 'Worker code', 'Moja lokacija': 'My location',
    'Nema mreže — sačuvano na telefonu, poslat ću čim se vrati signal.':
      'No connection — saved on your phone, will send when the signal returns.',
    'Nemaš kod? Dispecer te dodaje u Platformi:':
      'No code? The dispatcher adds you in the Platform:',
    'Radnici → Dodaj radnika. Tada dobiješ kod i PIN.':
      'Workers → Add worker. You then get a code and PIN.',
    'Pošalji dispečeru': 'Send to dispatcher', 'Prijavi': 'Report',
    'Prijavi problem s terena': 'Report a problem from the field',
    'Tražim GPS…': 'Getting GPS…', 'Tražim tvoju lokaciju…': 'Getting your location…',
    'Tvoji riješeni zadaci': 'Your resolved tasks', 'Šta si zatekao': 'What you found',
    'Otvoren zadatak': 'Open task', 'Prikaži sve': 'Show all',
    'Nema ilustrativnih vrijednosti u online modu.': 'No sample values in online mode.',
    'Ovaj ekran se popunjava iz stvarnih prijava i ocjena građana kroz vrijeme.':
      'This screen fills up from real reports and citizen ratings over time.',
    'Sedmični raspored': 'Weekly schedule',
    '— (nema SLA istorije)': '— (no SLA history)',
    'čeka': 'waiting', 'Sve službe': 'All services',

    /* kategorije kvarova */
    'Rupa / oštećenje': 'Pothole / damage', 'Curenje / cijev': 'Leak / pipe',
    'Nema rasvjete': 'No street light', 'Otpad / smeće': 'Waste / litter',
    'Predmet na putu': 'Object on road', 'Predmeti / ostalo': 'Objects / other',
    'Rasvjeta': 'Street lighting', 'Otpad': 'Waste', 'Ostalo': 'Other',
    'Poplava': 'Flooding', 'Staklo': 'Broken glass', 'Voda': 'Water',

    /* dani u sedmici */
    'Pon': 'Mon', 'Uto': 'Tue', 'Sri': 'Wed', 'Čet': 'Thu',
    'Pet': 'Fri', 'Sub': 'Sat', 'Ned': 'Sun',

    /* ── navigacija i ekrani ── */
    'Pregled': 'Overview', 'Zadaci': 'Tasks', 'SLA alarmi': 'SLA alerts',
    'Radnici uživo': 'Workers live', 'Smjene': 'Shifts',
    'Učinak radnika': 'Worker performance', 'Analitika kvarova': 'Fault analytics',
    'Izvršni pregled': 'Executive overview', 'Pravednost': 'Equity',
    'Prognoze': 'Forecasts', 'Zadovoljstvo': 'Satisfaction',
    'Učinak službi': 'Service performance', 'Registar dokaza': 'Evidence register',
    'Dispečer': 'Dispatcher', 'Grad': 'City', 'Platforma': 'Platform',
    'Drive — ceste': 'Drive — roads', 'Drive — stanje cesta': 'Drive — road condition',
    'Pregled (KPI)': 'Overview (KPI)', 'Mapa stanja mreže': 'Network condition map',
    'Trend IRI': 'IRI trend', 'Žarišta udara': 'Impact hotspots',
    'Prioritetne dionice': 'Priority sections', 'Analiza vožnji': 'Drive analysis',
    'Budžet i sanacija': 'Budget and repair',

    /* ── službe ── */
    'Putevi': 'Roads', 'Vodovod': 'Water', 'Elektro': 'Electrical',
    'Čistoća': 'Sanitation', 'Služba': 'Service', 'JKP Putevi': 'Roads Dept.',
    'Dispečer · uživo': 'Dispatcher · live', 'JKP Putevi · uživo': 'Roads Dept. · live',

    /* ── zadaci ── */
    'Novi zadatak': 'New task', 'Novi zadaci': 'New tasks',
    'Red novih zadataka': 'New task queue', 'Nema novih zadataka': 'No new tasks',
    'čeka raspodjelu': 'awaiting assignment', 'aktivnih intervencija': 'active jobs',
    'SLA rizik': 'SLA risk', 'Slobodni radnici': 'Available workers',
    'spremni za zadatak': 'ready for a task', 'sve u roku': 'all on time',
    'Dodijeli': 'Assign', 'Dodijeli radnika': 'Assign worker',
    'Dodijeli zadatak': 'Assign task', 'Dodijeli najbliži zadatak': 'Assign nearest task',
    'Detalji': 'Details', 'Račun': 'Invoice', 'Završi': 'Complete',
    'Oznaci riješeno': 'Mark resolved', 'Označi riješeno': 'Mark resolved',
    'Proslijedi službi': 'Forward to service',
    'Proslijedi drugoj službi': 'Forward to another service',
    'Kreiraj zadatak': 'Create task', 'Kategorija': 'Category',
    'U toku': 'In progress', 'Riješeno': 'Resolved', 'riješeno': 'resolved',
    'Novo': 'New', 'Status': 'Status', 'Lokacija': 'Location',
    'Adresa:': 'Address:', 'Radnik:': 'Worker:', 'Trošak:': 'Cost:',
    'rok istekao': 'deadline passed', 'Zadnji': 'Last',
    'Hitno (4h)': 'Urgent (4h)', 'Srednje (24h)': 'Medium (24h)', 'Nisko (72h)': 'Low (72h)',
    'Hitno': 'Urgent', 'Srednje': 'Medium', 'Nisko': 'Low',
    'Prioritet': 'Priority', 'Rok': 'Deadline',

    /* ── radnici ── */
    'Radnici': 'Workers', 'Radnik': 'Worker', 'Uloga': 'Role',
    'Dodaj radnika': 'Add worker', 'Dodaj prvog pa mu dodijeli ovaj zadatak.':
      'Add the first one, then assign this task.',
    'Još nema radnika u ovom odjelu.': 'No workers in this department yet.',
    'U odjelu': 'In department', 'još nema nijednog radnika.': 'there are no workers yet.',
    'Nalozi radnika': 'Worker accounts', 'Na zadatku': 'On a task',
    'Slobodan': 'Available', 'Dostupno': 'Available', 'Aktivnih': 'Active',
    'Baza': 'Base', 'na terenu': 'in the field', 'uživo': 'live',
    'Promijeni PIN': 'Change PIN', 'Resetuj PIN': 'Reset PIN',
    'Riješeni zadaci (mjesec)': 'Resolved tasks (month)',
    'SLA poštovanje po radniku': 'SLA compliance per worker',
    'Detaljni učinak': 'Detailed performance',
    'Planiranje kapaciteta': 'Capacity planning',
    'Predviđanje kršenja roka': 'Deadline breach forecast',
    'Svi zadaci su unutar roka': 'All tasks are within deadline',
    'Lokacije uživo': 'Live locations',

    /* ── fotografije ── */
    'Pregled fotografija': 'Photo review', 'Slike za pregled': 'Photos to review',
    'Odobri': 'Approve', 'Odbij i briši': 'Reject and delete',
    'Nema slika koje čekaju pregled.': 'No photos awaiting review.',
    'Prijavi neprimjerenu sliku': 'Report inappropriate image',

    /* ── analitika ── */
    'Kvarova (6 mj.)': 'Faults (6 mo.)', 'Prosj. mjesečno': 'Avg. monthly',
    'Crne tačke': 'Black spots', 'Vršni mjesec': 'Peak month',
    'Učestalost kvarova kroz vrijeme': 'Fault frequency over time',
    'Po danu u sedmici': 'By day of week',
    'Crne tačke — ponovljeni kvarovi': 'Black spots — repeat faults',
    'Šta crne tačke znače': 'What black spots mean',
    'Broj kvarova': 'Fault count', 'Prosj. razmak': 'Avg. interval',
    'Po zoni': 'By zone', 'Po kategoriji': 'By category',
    'Nedovoljno podataka': 'Not enough data',
    'Još nema lokacije s ponovljenim kvarovima.': 'No repeat-fault locations yet.',
    'Ukupno prijava': 'Total reports', 'Prijave': 'Reports', 'prijava': 'reports',
    'SLA poštovanje': 'SLA compliance', 'SLA poštovanje po službi': 'SLA compliance by service',
    'Prijave i rješavanje po mjesecu': 'Reports and resolution by month',
    'CityScore — danas': 'CityScore — today', '1.00 = sve na cilju': '1.00 = all on target',
    'Najopterećenije zone': 'Busiest zones', 'Kako čitati zone': 'How to read zones',
    'Zona': 'Zone', 'Stanovnika': 'Population', 'Očekivano': 'Expected',
    'Odstupanje': 'Deviation', 'Vrijeme': 'Time', 'Broj': 'Count',
    'Najbrža zona': 'Fastest zone', 'Najsporija zona': 'Slowest zone',
    'Razlika u rješavanju': 'Resolution gap',
    'Prijave po 1.000 stanovnika': 'Reports per 1,000 residents',
    'Prosj. vrijeme rješavanja po zoni': 'Avg. resolution time by zone',
    'Detalji po zoni': 'Zone details', 'Zašto je ovo važno': 'Why this matters',
    'Prognoza ukupnih prijava': 'Total reports forecast',
    'Sezonska kretanja po kategoriji': 'Seasonal trends by category',
    'Detekcija anomalija': 'Anomaly detection', 'Ocjena': 'Rating',
    'Preporuka': 'Recommendation', 'Karta': 'Map', 'Historija': 'History',
    'Ovaj mjesec': 'This month', 'Zadnja 3 mjeseca': 'Last 3 months',
    'Ova godina': 'This year', '6 mjeseci': '6 months', 'dana': 'days',
    'prije': 'ago', 'Vratilo se': 'Recurred', 'Proaktivno': 'Proactive',

    /* ── računi ── */
    'Račun — cijena rješavanja': 'Invoice — resolution cost',
    'IZNOS (KM)': 'AMOUNT (KM)', 'Sačuvaj račun': 'Save invoice',
    'Obriši račun': 'Delete invoice', 'račun nije upisan': 'no invoice entered',

    /* ── opšte ── */
    'Odustani': 'Cancel', 'Zatvori': 'Close', 'Ukloni': 'Remove',
    'Sačuvaj': 'Save', 'Snimi': 'Save', 'Otkaži': 'Cancel', 'Nazad': 'Back',
    'Dalje': 'Next', 'Potvrdi': 'Confirm', 'Obriši': 'Delete',
    'Odjavi se': 'Sign out', 'Prijavi se': 'Sign in', 'Osvježi': 'Refresh',
    'Traži': 'Search', 'Sve': 'All', 'Off': 'Off',
    'ravnomjerno': 'evenly', 'iz stvarnih prijava': 'from real reports',

    /* ── radnička aplikacija ── */
    'PINIT Radnik': 'PINIT Worker', 'KOD RADNIKA': 'WORKER CODE',
    'Upiši svoj kod i PIN. Dobio si ih od dispečera kad te dodao u sistem.':
      'Enter your code and PIN. You got them from the dispatcher when you were added.',
    'Nemaš kod? Dispečer te dodaje u Platformi: Radnici → Dodaj radnika. Tada dobiješ kod i PIN.':
      'No code? The dispatcher adds you in the Platform: Workers → Add worker. You then get a code and PIN.',
    'Moji zadaci': 'My tasks', 'Nema zadataka': 'No tasks',
    'Nemaš dodijeljenih zadataka.': 'You have no assigned tasks.',
    'Preuzmi': 'Take', 'Započni': 'Start', 'Završi zadatak': 'Finish task',
    'Fotografija prije': 'Photo before', 'Fotografija poslije': 'Photo after',
    'Snimi ili odaberi': 'Take or choose', 'Izvještaj': 'Report',
    'Opis rada': 'Work description', 'Pošalji izvještaj': 'Send report',
    'Profil': 'Profile', 'Moj profil': 'My profile', 'Telefon': 'Phone',
    'Vozilo': 'Vehicle', 'Smjena': 'Shift', 'Ime': 'Name',
    'Nema interneta — sačuvano, poslat će se kasnije':
      'No connection — saved, will be sent later',
    'Nema interneta': 'No connection', 'Povezan': 'Connected'
  };

  var KLJUCEVI = Object.keys(RJECNIK).sort(function (a, b) { return b.length - a.length; });

  function jezik() {
    try { return localStorage.getItem('pinit_lang') || 'bs'; } catch (e) { return 'bs'; }
  }
  function postaviJezik(j) {
    try { localStorage.setItem('pinit_lang', j); } catch (e) {}
    location.reload();
  }

  /* Prevodi jedan komad teksta. Prvo traži cijeli tekst u rječniku (najčešći
     slučaj), pa tek onda dijelove — tako "Novi zadatak" ne postane
     "New Zadatak" zato što je "Novi" prevedeno zasebno. */
  function prevediTekst(t) {
    var trim = t.trim();
    if (!trim) return t;

    /* SAMO CIJELI NATPIS, nikad dio rečenice.
       Zamjena pojedinih riječi unutar teksta izgleda primamljivo, ali kvari
       rečenice: "Obriši PINIT_NO_AUTH prije nego pustiš stranicu" postane
       "Delete PINIT_NO_AUTH ago nego pustiš stranicu" — pola engleski, pola
       bosanski, i besmisleno. Zato prevodimo natpis samo ako se cijeli
       poklapa s rječnikom. Što nije u rječniku ostaje na bosanskom, čitljivo. */
    if (RJECNIK[trim]) return t.replace(trim, RJECNIK[trim]);

    /* Primjeri u poljima za unos: "npr. PUT-4821" → "e.g. PUT-4821". */
    if (/^npr\.\s/.test(trim)) return t.replace(/^(\s*)npr\.\s/, '$1e.g. ');

    /* Natpis s brojem na kraju ("Zadaci 3") — prevedi riječ, zadrži broj. */
    var m = trim.match(/^(.+?)\s+(\d[\d.,%]*)$/);
    if (m && RJECNIK[m[1]]) return t.replace(trim, RJECNIK[m[1]] + ' ' + m[2]);

    /* Broj pa riječ ("2 čeka"). */
    m = trim.match(/^(\d[\d.,%]*)\s+(.+)$/);
    if (m && RJECNIK[m[2]]) return t.replace(trim, m[1] + ' ' + RJECNIK[m[2]]);

    /* Natpis koji završava razdjelnikom jer je podatak u susjednom elementu:
       "Rupa / oštećenje ·" */
    m = trim.match(/^(.+?)(\s*[·—–]\s*)$/);
    if (m && RJECNIK[m[1]]) return t.replace(trim, RJECNIK[m[1]] + m[2]);

    /* Obrnuto: prvi dio je korisnički podatak koji se NE prevodi (zanimanje,
       ime), a drugi je naš natpis — "Asfalter · Baza" → "Asfalter · Base". */
    m = trim.match(/^(.+?\s+[·—–]\s+)(.+)$/);
    if (m && !RJECNIK[m[1].replace(/\s*[·—–]\s*$/, '')] && RJECNIK[m[2]])
      return t.replace(trim, m[1] + RJECNIK[m[2]]);

    /* Natpis s podatkom iza razdjelnika: "Rupa / oštećenje · R-1788…" ili
       "Sedmični raspored — JKP Putevi". Prevede se poznati dio, ostatak
       (broj prijave, ime) ostaje netaknut jer se ne prevodi. */
    m = trim.match(/^(.+?)(\s+[·—–-]\s+.*)$/);
    if (m && RJECNIK[m[1]]) {
      var rep = m[2];
      var iza = rep.match(/^(\s+[·—–-]\s+)(.+)$/);
      if (iza && RJECNIK[iza[2].trim()]) rep = iza[1] + RJECNIK[iza[2].trim()];
      return t.replace(trim, RJECNIK[m[1]] + rep);
    }

    return t;
  }

  var PRESKOCI = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, CANVAS: 1, SVG: 1 };

  function prevediGrananje(korijen) {
    if (!korijen) return;
    /* tekst */
    var hod = document.createTreeWalker(korijen, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentNode;
        if (!p || PRESKOCI[p.nodeName]) return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest('[data-bez-prijevoda]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n, lista = [];
    while ((n = hod.nextNode())) lista.push(n);
    lista.forEach(function (t) {
      var novi = prevediTekst(t.nodeValue);
      if (novi !== t.nodeValue) t.nodeValue = novi;
    });
    /* atributi koje korisnik vidi */
    var el = korijen.querySelectorAll ? korijen.querySelectorAll('[placeholder],[title],[aria-label]') : [];
    Array.prototype.forEach.call(el, function (e) {
      ['placeholder', 'title', 'aria-label'].forEach(function (a) {
        var v = e.getAttribute(a);
        if (!v) return;
        var novi = prevediTekst(v);
        if (novi !== v) e.setAttribute(a, novi);
      });
    });
  }

  function ugradiDugme() {
    if (document.getElementById('pinitLang')) return;
    var b = document.createElement('button');
    b.id = 'pinitLang';
    b.setAttribute('data-bez-prijevoda', '1');
    b.textContent = jezik() === 'en' ? 'BS' : 'EN';
    b.title = jezik() === 'en' ? 'Prebaci na bosanski' : 'Switch to English';
    b.style.cssText =
      'position:fixed;top:10px;right:12px;z-index:2147483000;' +
      'padding:6px 12px;border-radius:9px;border:1px solid rgba(0,0,0,.15);' +
      'background:#fff;color:#14532d;font:700 12px/1 system-ui,sans-serif;' +
      'cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.14)';
    b.onclick = function () { postaviJezik(jezik() === 'en' ? 'bs' : 'en'); };
    document.body.appendChild(b);
  }

  function kreni() {
    /* ?lang=en u adresi ima prednost i pamti se */
    try {
      var m = location.search.match(/[?&]lang=(en|bs)\b/);
      if (m) localStorage.setItem('pinit_lang', m[1]);
    } catch (e) {}

    ugradiDugme();
    if (jezik() !== 'en') return;

    document.documentElement.setAttribute('lang', 'en');
    prevediGrananje(document.body);

    /* Platforma stalno iscrtava nove ekrane. Umjesto da pogađamo kada,
       pratimo promjene i prevodimo ono što se pojavi. Kratka odgoda spaja
       više promjena u jedan prolaz da se stranica ne uspori. */
    var cekanje = null, nasla = [];
    var posmatrac = new MutationObserver(function (zapisi) {
      zapisi.forEach(function (z) {
        Array.prototype.forEach.call(z.addedNodes, function (n) {
          if (n.nodeType === 1) nasla.push(n);
          else if (n.nodeType === 3 && n.parentNode) nasla.push(n.parentNode);
        });
      });
      if (cekanje) return;
      cekanje = setTimeout(function () {
        cekanje = null;
        var q = nasla; nasla = [];
        posmatrac.disconnect();
        q.forEach(prevediGrananje);
        posmatrac.observe(document.body, { childList: true, subtree: true });
      }, 90);
    });
    posmatrac.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', kreni);
  else kreni();
})();

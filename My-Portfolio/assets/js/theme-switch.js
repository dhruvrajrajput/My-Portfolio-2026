/* Dark/Light bulb switch. Pull the cord down and release; string wobbles, click sound plays.
   Optional real sound: put your own file at assets/sound/click.mp3 (falls back to a built-in click). */
(function () {
  var root = document.documentElement, KEY = "theme";
  var sw = document.querySelector(".bulbsw"); if (!sw) return;
  var svg = sw.querySelector("svg"), hit = sw.querySelector(".hit"), cord = sw.querySelector(".cord"), knob = sw.querySelector(".knob");
  var X = 98.7, Y0 = 240.5, Y1 = 380.5;
  var px = X, py = Y1, vx = 0, vy = 0, dragging = false, sx = 0, sy = 0, raf = 0, actx = null;

  function draw() {
    var h = py - Y0, s = px - X;
    cord.setAttribute("d", "M" + X + " " + Y0 + " C" + (X + s * 1.5) + " " + (Y0 + h * .33) + " " + (X - s * .8) + " " + (Y0 + h * .66) + " " + px + " " + py);
    knob.setAttribute("cx", px); knob.setAttribute("cy", py); hit.setAttribute("cx", px); hit.setAttribute("cy", py);
  }
  function setTheme(t, save) {
    root.setAttribute("data-theme", t); sw.setAttribute("aria-checked", t === "light");
    var m = document.querySelector('meta[name="theme-color"]'); if (m) m.content = t === "light" ? "#eef1f7" : "#0d1017";
    if (save) { try { localStorage.setItem(KEY, t); } catch (e) {} }
  }
  function ctx() { try { var A = window.AudioContext || window.webkitAudioContext; if (!actx) actx = new A(); if (actx.state === "suspended") actx.resume(); } catch (e) {} return actx; }
  function synth() { // pull-chain "tick-tack"
    var c = ctx(); if (!c) return;
    [0, .075].forEach(function (d, i) {
      var n = c.sampleRate * .05, b = c.createBuffer(1, n, c.sampleRate), a = b.getChannelData(0);
      for (var k = 0; k < n; k++) a[k] = (Math.random() * 2 - 1) * Math.pow(1 - k / n, 3);
      var s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
      s.buffer = b; f.type = "bandpass"; f.frequency.value = i ? 1700 : 2600; f.Q.value = 1.2; g.gain.value = i ? .9 : 1.2;
      s.connect(f); f.connect(g); g.connect(c.destination); s.start(c.currentTime + d);
    });
  }
  function sound() {
    try { var a = new Audio("click.mp3"); var p = a.play(); if (p && p.catch) p.catch(synth); a.onerror = synth; } catch (e) { synth(); }
  }
  function toggle() { sound(); setTheme(root.getAttribute("data-theme") === "light" ? "dark" : "light", true); }
  function wobble() { // damped spring back to rest, sways left/right
    cancelAnimationFrame(raf);
    (function step() {
      vx = (vx + (X - px) * .12) * .86; vy = (vy + (Y1 - py) * .16) * .8; px += vx; py += vy; draw();
      if (Math.abs(px - X) > .15 || Math.abs(py - Y1) > .15 || Math.abs(vx) > .15 || Math.abs(vy) > .15) raf = requestAnimationFrame(step);
      else { px = X; py = Y1; draw(); }
    })();
  }
  function pt(e) { var r = svg.getBoundingClientRect(), k = svg.viewBox.baseVal.height / r.height; return { x: (e.clientX - r.left) * k, y: (e.clientY - r.top) * k }; }
  hit.addEventListener("pointerdown", function (e) { ctx(); dragging = true; var p = pt(e); sx = p.x - px; sy = p.y - py; hit.setPointerCapture(e.pointerId); cancelAnimationFrame(raf); vx = vy = 0; e.preventDefault(); });
  hit.addEventListener("pointermove", function (e) {
    if (!dragging) return; var p = pt(e);
    px = Math.max(X - 45, Math.min(X + 45, p.x - sx)); py = Math.max(Y1 - 20, Math.min(Y1 + 90, p.y - sy)); draw();
  });
  function end() { if (!dragging) return; dragging = false; if (py - Y1 > 28) { toggle(); vy = 6; vx = (px - X) * .15 + 4; } wobble(); }
  hit.addEventListener("pointerup", end); hit.addEventListener("pointercancel", end);
  sw.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); ctx(); toggle(); py = Y1 + 45; px = X + 8; wobble(); } });
  hit.addEventListener("dblclick", function () { toggle(); py = Y1 + 45; px = X + 8; wobble(); });
  setTheme(root.getAttribute("data-theme") || "dark", false); draw();
  if (window.matchMedia) matchMedia("(prefers-color-scheme: light)").addEventListener("change", function (e) { var s; try { s = localStorage.getItem(KEY); } catch (x) {} if (!s) setTheme(e.matches ? "light" : "dark", false); });
})();
document.addEventListener("DOMContentLoaded", () => {

/* ═══════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════ */
const OBJECTS = [
  {
    name: "Earth",
    cat: "Terrestrial Planet",
    desc: "The only confirmed harbor of life — a thin blue film of ocean and atmosphere clinging to a spinning rock 150 million kilometres from an average star. Its geology is relentlessly restless, shaped by plate tectonics and liquid water.",
    color: "#3a8cd5",      // FIX 1: was #000000 — name would be invisible
    glow:  "#3a8cd5",
    surface: "earth",
    rings: false,
    stats: [
      { l: "Diameter",   v: "12,742 km" },
      { l: "Day Length", v: "23h 56m"   },
      { l: "Distance",   v: "1.0 AU"    },
      { l: "Moons",      v: "1"         }
    ],
    nasa: "Earth from space blue marble"
  },
  {
    name: "Mars",
    cat: "Terrestrial Planet",
    desc: "The rust-red fourth planet bears the scars of a violent past — the largest volcano and deepest canyon system in the solar system. Ancient riverbeds hint at a wetter, warmer era billions of years ago.",
    color: "#d4502a",
    glow:  "#c1440e",
    surface: "mars",
    rings: false,
    stats: [
      { l: "Diameter",   v: "6,779 km" },
      { l: "Day Length", v: "24h 37m"  },
      { l: "Distance",   v: "1.52 AU"  },
      { l: "Moons",      v: "2"        }
    ],
    nasa: "Mars surface red planet"
  },
  {
    name: "Jupiter",
    cat: "Gas Giant",
    desc: "A colossus — more than twice the mass of all other planets combined. Jupiter's Great Red Spot is a storm older than recorded history, and its magnetic field is the strongest of any planet in the solar system.",
    color: "#c88b3a",
    glow:  "#c88b3a",
    surface: "jupiter",
    rings: true,
    bigRings: false,
    stats: [
      { l: "Diameter",   v: "139,820 km" },
      { l: "Day Length", v: "9h 56m"     },
      { l: "Distance",   v: "5.2 AU"     },
      { l: "Moons",      v: "95"         }
    ],
    nasa: "Jupiter great red spot Hubble"
  },
  {
    name: "Saturn",
    cat: "Gas Giant",
    desc: "Saturn's rings are its signature — billions of ice fragments spanning 282,000 km yet barely 10 metres thick in places. The planet itself is so low-density it would float on water.",
    color: "#e8c96d",
    glow:  "#d4b048",
    surface: "saturn",
    rings: true,
    bigRings: true,
    stats: [
      { l: "Diameter",   v: "116,460 km" },
      { l: "Day Length", v: "10h 33m"    },
      { l: "Distance",   v: "9.58 AU"    },
      { l: "Moons",      v: "146"        }
    ],
    nasa: "Saturn rings Cassini spacecraft"
  },
  {
    name: "Orion Nebula",
    cat: "Emission Nebula",
    desc: "A stellar nursery 1,344 light-years away — one of the most studied objects in the sky. Within its glowing clouds, stars are being forged right now from collapsing pillars of ionized hydrogen and dust.",
    color: "#ff7a9a",
    glow:  "#ff6b8a",
    surface: "nebula",
    cols: ["#ff6b8a", "#ff9f5a", "#7eb4ff"],
    rings: false,
    stats: [
      { l: "Distance",    v: "1,344 ly"  },
      { l: "Diameter",    v: "~24 ly"    },
      { l: "Temperature", v: "~10,000 K" },
      { l: "Age",         v: "~3M yr"    }
    ],
    nasa: "Orion Nebula Hubble infrared"
  },
  {
    name: "Sagittarius A*",
    cat: "Supermassive Black Hole",
    desc: "At the dead centre of the Milky Way, 26,000 light-years away, lurks a gravitational abyss four million times the mass of the Sun. In 2022 the Event Horizon Telescope captured its first image.",
    color: "#aa88ff",
    glow:  "#8866ff",
    surface: "blackhole",
    rings: false,
    stats: [
      { l: "Mass",         v: "4.1M M☉"    },
      { l: "Schw. radius", v: "~12M km"    },
      { l: "Distance",     v: "~26,000 ly" },
      { l: "EHT Image",    v: "2022"       }
    ],
    nasa: "Milky Way galactic center Sagittarius"
  },
  {
    name: "Crab Nebula",
    cat: "Supernova Remnant",
    desc: "Chinese astronomers recorded a brilliant new star in 1054 AD. That explosion left behind this expanding cloud of filaments — and a pulsar at its heart spinning 30 times per second, beaming energy across the galaxy.",
    color: "#5ae4c8",
    glow:  "#30c8a8",
    surface: "nebula",
    cols: ["#5ae4c8", "#7eb4ff", "#ff9f5a"],
    rings: false,
    stats: [
      { l: "Distance",    v: "6,500 ly"   },
      { l: "Diameter",    v: "~11 ly"     },
      { l: "Expansion",   v: "1,500 km/s" },
      { l: "Pulsar spin", v: "30 Hz"      }
    ],
    nasa: "Crab Nebula M1 supernova remnant"
  },
  {
    name: "Andromeda",
    cat: "Spiral Galaxy",
    desc: "Our nearest large galactic neighbour, 2.537 million light-years away and approaching at 110 km/s. In roughly 4.5 billion years, Andromeda and the Milky Way will collide and merge into an elliptical galaxy.",
    color: "#a0c8ff",
    glow:  "#80a8f0",
    surface: "galaxy",
    cols: ["#a0c8ff", "#ffffff", "#7eb4ff"],
    rings: false,
    stats: [
      { l: "Distance",  v: "2.537M ly"   },
      { l: "Diameter",  v: "~220,000 ly" },
      { l: "Stars",     v: "~1 trillion" },
      { l: "Collision", v: "~4.5B yr"    }
    ],
    nasa: "Andromeda galaxy M31 spiral"
  },
  {
    name: "Kepler-22b",
    cat: "Exoplanet",
    desc: "Discovered in 2011, Kepler-22b orbits comfortably within its star's habitable zone — 600 light-years from Earth. With a radius roughly 2.4 times that of Earth, it may be a water world with a deep global ocean, though its true composition remains unknown.",
    color: "#5bc8a8",
    glow:  "#3aaa88",
    surface: "kepler22b",   // FIX 2: was "kepler 22b" — space caused the draw case to never match
    rings: false,
    stats: [
      { l: "Radius",   v: "2.4× Earth" },
      { l: "Orbit",    v: "290 days"   },
      { l: "Distance", v: "~600 ly"    },
      { l: "Zone",     v: "Habitable"  }
    ],
    nasa: "Kepler 22b exoplanet habitable zone"
  },
];

/* ═══════════════════════════════════════════════════
   STARFIELD
   ═══════════════════════════════════════════════════ */
const SC   = document.getElementById("starfield");
const sctx = SC.getContext("2d");
let stars = [], SW, SH, scrollY = 0;

function initStars() {
  SW = SC.width  = window.innerWidth;
  SH = SC.height = window.innerHeight;
  stars = Array.from({ length: 350 }, () => ({
    x:     Math.random() * SW,
    baseY: Math.random() * SH,
    r:     Math.random() * 1.5 + 0.2,
    depth: Math.random() * 0.8 + 0.1,
    tw:    Math.random() * Math.PI * 2,
    ts:    Math.random() * 0.02 + 0.004,
    warm:  Math.random() > 0.88,
  }));
}

function animStars() {
  sctx.clearRect(0, 0, SW, SH);
  stars.forEach(s => {
    s.tw += s.ts;
    const alpha = 0.35 + Math.sin(s.tw) * 0.38;
    const y = ((s.baseY - scrollY * s.depth * 0.5) % SH + SH) % SH;
    sctx.beginPath();
    sctx.arc(s.x, y, s.r, 0, Math.PI * 2);
    sctx.fillStyle = s.warm
      ? `rgba(255,230,180,${alpha})`
      : `rgba(200,220,255,${alpha})`;
    sctx.fill();
  });
  requestAnimationFrame(animStars);
}

window.addEventListener("resize", initStars);
window.addEventListener("scroll", () => { scrollY = window.scrollY; });
initStars();
requestAnimationFrame(animStars);

/* ═══════════════════════════════════════════════════
   CURSOR
   ═══════════════════════════════════════════════════ */
const cur  = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");
let mx = -100, my = -100, rx = -100, ry = -100;

document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; });

(function animateCursor() {
  rx += (mx - rx) * 0.14;
  ry += (my - ry) * 0.14;
  cur.style.transform  = `translate(${mx - 4}px, ${my - 4}px)`;
  ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
  requestAnimationFrame(animateCursor);
})();

/* ═══════════════════════════════════════════════════
   PLANET DRAWING
   ═══════════════════════════════════════════════════ */
function drawPlanet(canvas, obj, sz) {
  const c    = canvas.getContext("2d");
  canvas.width = canvas.height = sz;
  const r    = sz / 2;
  const t    = obj.surface;
  const cols = obj.cols || [];
  c.clearRect(0, 0, sz, sz);

  /* ── Earth ── */
  if (t === "earth") {
    let g = c.createRadialGradient(r*.65, r*.55, 0, r, r, r);
    g.addColorStop(0, "#1a72c0"); g.addColorStop(0.5, "#0d4f8a"); g.addColorStop(1, "#061e3a");
    _circle(c, r, r, r, g);
    c.fillStyle = "#2a8a4a";
    [[r*.5,r*.42,r*.23],[r*.8,r*.65,r*.19],[r*.32,r*.72,r*.16],[r*1.1,r*.44,r*.2],[r*.9,r*.88,r*.13]]
      .forEach(([bx,by,br]) => { c.beginPath(); c.ellipse(bx,by,br,br*.7,Math.random()*.6,0,Math.PI*2); c.fill(); });
    c.fillStyle = "rgba(255,255,255,0.28)";
    [[r*.5,r*.32,r*.28],[r*.85,r*.52,r*.2],[r*.28,r*.8,r*.22],[r*1.0,r*.74,r*.19]]
      .forEach(([bx,by,br]) => { c.beginPath(); c.ellipse(bx,by,br,br*.33,.3,0,Math.PI*2); c.fill(); });

  /* ── Mars ── */
  } else if (t === "mars") {
    let g = c.createRadialGradient(r*.6, r*.5, 0, r, r, r);
    g.addColorStop(0, "#d8562e"); g.addColorStop(0.55, "#a83c1c"); g.addColorStop(1, "#6a2010");
    _circle(c, r, r, r, g);
    c.fillStyle = "rgba(185,72,32,0.55)";
    [[r*.4,r*.5,r*.28],[r*.75,r*.35,r*.2],[r*.6,r*.82,r*.18],[r*1.1,r*.6,r*.24]]
      .forEach(([bx,by,br]) => { c.beginPath(); c.ellipse(bx,by,br,br*.65,.5,0,Math.PI*2); c.fill(); });
    c.fillStyle = "rgba(255,255,255,0.65)";
    c.beginPath(); c.ellipse(r, r*.1, r*.28, r*.11, 0, 0, Math.PI*2); c.fill();
    c.strokeStyle = "rgba(100,30,10,0.55)"; c.lineWidth = 3;
    c.beginPath(); c.moveTo(r*.35, r*.58); c.bezierCurveTo(r*.68,r*.62,r*1.0,r*.53,r*1.3,r*.59); c.stroke();

  /* ── Jupiter ── */
  } else if (t === "jupiter") {
    ["#d49040","#eec880","#d87840","#caa870","#b86030","#e0b078","#c07040","#eac888","#d88040","#c8a050"]
      .forEach((col, i, arr) => {
        c.fillStyle = col;
        c.fillRect(0, sz*(i/arr.length), sz, sz*(1.02/arr.length)+1);
      });
    _clipCircle(c, r);
    c.fillStyle = "rgba(180,58,28,0.82)";
    c.beginPath(); c.ellipse(r*.78,r*1.14,r*.23,r*.13,-.08,0,Math.PI*2); c.fill();
    c.fillStyle = "rgba(215,100,58,0.48)";
    c.beginPath(); c.ellipse(r*.78,r*1.14,r*.16,r*.08,-.08,0,Math.PI*2); c.fill();

  /* ── Saturn ── */
  } else if (t === "saturn") {
    ["#ead494","#d4bc64","#c8a840","#dcca72","#e0ca7a","#ccb252"]
      .forEach((col, i, arr) => {
        c.fillStyle = col;
        c.fillRect(0, sz*(i/arr.length), sz, sz*(1.02/arr.length)+1);
      });
    _clipCircle(c, r);

  /* ── Black Hole ── */
  } else if (t === "blackhole") {
    _circle(c, r, r, r, "#000005");
    let ag = c.createRadialGradient(r,r,r*.26,r,r,r);
    ag.addColorStop(0,"transparent"); ag.addColorStop(.27,"rgba(255,130,20,0.92)");
    ag.addColorStop(.4,"rgba(255,70,10,0.65)"); ag.addColorStop(.58,"rgba(160,50,200,0.28)"); ag.addColorStop(1,"transparent");
    _circle(c,r,r,r,ag);
    let bg = c.createRadialGradient(r*.9,r*.86,0,r,r,r*.3);
    bg.addColorStop(0,"#18082a"); bg.addColorStop(1,"#000000");
    _circle(c,r,r,r*.3,bg);
    c.strokeStyle="rgba(255,155,35,0.45)"; c.lineWidth=2.5;
    c.beginPath(); c.arc(r,r,r*.32,0,Math.PI*2); c.stroke();
    c.strokeStyle="rgba(255,155,35,0.18)"; c.lineWidth=1;
    c.beginPath(); c.arc(r,r,r*.35,0,Math.PI*2); c.stroke();

  /* ── Nebula ── */
  } else if (t === "nebula") {
    const [c1,c2,c3] = cols.length ? cols : ["#ff6b8a","#ff9f5a","#7eb4ff"];
    let bg = c.createRadialGradient(r,r,0,r,r,r);
    bg.addColorStop(0,_hex2rgba(c1,.85)); bg.addColorStop(.5,_hex2rgba(c2,.55)); bg.addColorStop(1,_hex2rgba(c3,.3));
    _circle(c,r,r,r,bg);
    for (let i=0; i<14; i++) {
      const bx=r*.25+Math.random()*r*1.5, by=r*.25+Math.random()*r*1.5;
      if (Math.hypot(bx-r,by-r)>r*.95) continue;
      const br=r*.14+Math.random()*r*.28, col=[c1,c2,c3][i%3];
      let ng=c.createRadialGradient(bx,by,0,bx,by,br);
      ng.addColorStop(0,_hex2rgba(col,.7)); ng.addColorStop(1,"transparent");
      c.beginPath(); c.arc(bx,by,br,0,Math.PI*2); c.fillStyle=ng; c.fill();
    }
    for (let i=0; i<50; i++) {
      const sx=Math.random()*sz, sy=Math.random()*sz;
      if (Math.hypot(sx-r,sy-r)>r) continue;
      c.beginPath(); c.arc(sx,sy,Math.random()*1.4,0,Math.PI*2);
      c.fillStyle=`rgba(255,255,255,${.3+Math.random()*.6})`; c.fill();
    }

  /* ── Galaxy ── */
  } else if (t === "galaxy") {
    const [c1] = cols.length ? cols : ["#a0c8ff"];
    _circle(c,r,r,r,"#010112");
    for (let i=0; i<120; i++) {
      const sx=Math.random()*sz, sy=Math.random()*sz;
      if (Math.hypot(sx-r,sy-r)>r*.96) continue;
      c.beginPath(); c.arc(sx,sy,Math.random()*1.1,0,Math.PI*2);
      c.fillStyle=`rgba(180,210,255,${.25+Math.random()*.45})`; c.fill();
    }
    let cg=c.createRadialGradient(r,r,0,r,r,r*.45);
    cg.addColorStop(0,"rgba(255,255,245,0.95)"); cg.addColorStop(.35,_hex2rgba(c1,.7)); cg.addColorStop(1,"transparent");
    c.beginPath(); c.arc(r,r,r*.45,0,Math.PI*2); c.fillStyle=cg; c.fill();
    c.save(); c.translate(r,r);
    for (let arm=0; arm<3; arm++) {
      c.rotate((Math.PI*2)/3);
      for (let i=0; i<65; i++) {
        const ang=i*0.13, dist2=r*.07+i*(r*.013);
        const x=Math.cos(ang)*dist2, y=Math.sin(ang)*dist2*.4;
        const sr=2.8-i*.038;
        if (sr<.25) break;
        c.beginPath(); c.arc(x,y,Math.max(.25,sr),0,Math.PI*2);
        c.fillStyle=`rgba(170,205,255,${.55-i*.008})`; c.fill();
      }
    }
    c.restore();

  /* ── Kepler-22b ── */
  // FIX 2: surface key is "kepler22b" (no space) — now matches the data object above
  } else if (t === "kepler22b") {
    let g = c.createRadialGradient(r*.6, r*.5, 0, r, r, r);
    g.addColorStop(0, "#2ab8d0"); g.addColorStop(0.45, "#0e6e88"); g.addColorStop(1, "#042838");
    _circle(c, r, r, r, g);
    // Ocean shimmer bands
    c.fillStyle = "rgba(100,220,240,0.18)";
    [[r*.3,r*.4,r*.5],[r*.7,r*.65,r*.4],[r*.5,r*.85,r*.45]].forEach(([bx,by,br]) => {
      c.beginPath(); c.ellipse(bx,by,br,br*.3,.4,0,Math.PI*2); c.fill();
    });
    // Land mass hints
    c.fillStyle = "rgba(60,140,80,0.55)";
    [[r*.55,r*.45,r*.14],[r*.78,r*.72,r*.1]].forEach(([bx,by,br]) => {
      c.beginPath(); c.ellipse(bx,by,br,br*.75,.3,0,Math.PI*2); c.fill();
    });
    // Cloud layer
    c.fillStyle = "rgba(255,255,255,0.22)";
    [[r*.45,r*.28,r*.32],[r*.8,r*.5,r*.24],[r*.25,r*.75,r*.26],[r*1.0,r*.72,r*.22]].forEach(([bx,by,br]) => {
      c.beginPath(); c.ellipse(bx,by,br,br*.36,.25,0,Math.PI*2); c.fill();
    });
    // Atmospheric haze
    let haze = c.createRadialGradient(r,r,r*.78,r,r,r);
    haze.addColorStop(0,"transparent");
    haze.addColorStop(0.8,"rgba(80,200,220,0.08)");
    haze.addColorStop(1,"rgba(80,200,220,0.28)");
    _circle(c, r, r, r, haze);
    // FIX 3: removed duplicate ocean shimmer block that appeared here

  /* ── Neptune-like exoplanet (search results) ── */
  } else if (t === "neptune_like_draw") {
    let g = c.createRadialGradient(r*.6,r*.5,0,r,r,r);
    g.addColorStop(0,"#6090e8"); g.addColorStop(.5,"#3060b0"); g.addColorStop(1,"#102050");
    _circle(c,r,r,r,g);
    ["rgba(100,150,230,0.35)","rgba(80,120,200,0.25)","rgba(120,160,240,0.2)"].forEach((col,i) => {
      c.fillStyle=col; c.beginPath(); c.ellipse(r,r*.3+i*r*.4,r*.9,r*.12,0,0,Math.PI*2); c.fill();
    });
    c.fillStyle="rgba(255,255,255,0.15)";
    [[r*.4,r*.3,r*.25],[r*.75,r*.6,r*.18]].forEach(([bx,by,br]) => {
      c.beginPath(); c.ellipse(bx,by,br,br*.3,.2,0,Math.PI*2); c.fill();
    });

  /* ── Rocky exoplanet (search results) ── */
  } else if (t === "rocky_exo_draw") {
    let g = c.createRadialGradient(r*.6,r*.5,0,r,r,r);
    g.addColorStop(0,"#c09878"); g.addColorStop(.5,"#906050"); g.addColorStop(1,"#3a2010");
    _circle(c,r,r,r,g);
    c.fillStyle="rgba(160,120,80,0.5)";
    [[r*.45,r*.5,r*.25],[r*.72,r*.38,r*.18],[r*.58,r*.8,r*.2]].forEach(([bx,by,br]) => {
      c.beginPath(); c.ellipse(bx,by,br,br*.72,.4,0,Math.PI*2); c.fill();
    });
    c.strokeStyle="rgba(80,50,30,0.4)"; c.lineWidth=1.5;
    [[r*.55,r*.45,r*.08],[r*.75,r*.7,r*.06],[r*.35,r*.65,r*.05]].forEach(([bx,by,br]) => {
      c.beginPath(); c.arc(bx,by,br,0,Math.PI*2); c.stroke();
    });
  }

  /* ── Shared: sphere shadow + specular + clip ── */
  _clipCircle(c, r);
  let sh = c.createRadialGradient(r*1.55,r*.38,0,r,r,r*1.2);
  sh.addColorStop(0,"transparent"); sh.addColorStop(.5,"transparent"); sh.addColorStop(1,"rgba(0,0,0,0.8)");
  _circle(c,r,r,r,sh);
  let sp = c.createRadialGradient(r*.6,r*.36,0,r*.6,r*.36,r*.52);
  sp.addColorStop(0,"rgba(255,255,255,0.2)"); sp.addColorStop(1,"transparent");
  _circle(c,r,r,r,sp);
  c.globalCompositeOperation = "destination-in";
  _circle(c,r,r,r,"#fff");
  c.globalCompositeOperation = "source-over";
}

/* ── Canvas helpers ── */
function _circle(c,x,y,r,fill) { c.beginPath(); c.arc(x,y,r,0,Math.PI*2); c.fillStyle=fill; c.fill(); }
function _clipCircle(c,r) { c.save(); c.beginPath(); c.arc(r,r,r,0,Math.PI*2); c.clip(); }
function _hex2rgba(hex,a) {
  const rv=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
  return `rgba(${rv},${g},${b},${a})`;
}

/* ═══════════════════════════════════════════════════
   NASA IMAGE FETCH
   ═══════════════════════════════════════════════════ */
async function nasaFetch(query) {
  try {
    const res  = await fetch(`https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image&page_size=12`);
    if (!res.ok) return null;
    const data = await res.json();
    const items = data.collection?.items || [];
    for (const item of items) {
      const href = item?.links?.[0]?.href;
      if (href && !href.includes("thumb")) return href;
    }
    return items[0]?.links?.[0]?.href || null;
  } catch { return null; }
}

/* ═══════════════════════════════════════════════════
   BUILD PAGE
   ═══════════════════════════════════════════════════ */
const main       = document.getElementById("main");
const planetSize = Math.min(Math.max(window.innerWidth * .38, 200), 440);

OBJECTS.forEach((obj, idx) => {
  const sec = document.createElement("section");
  sec.className = "cosmos-section" + (idx % 2 === 1 ? " even" : "");

  const ringHTML = obj.rings ? `
    <div class="ring-wrap">
      <div class="ring" style="width:${planetSize*(obj.bigRings?2.3:1.65)}px;height:${planetSize*(obj.bigRings?2.3:1.65)}px;"></div>
      <div class="ring ring-outer" style="width:${planetSize*(obj.bigRings?2.7:1.95)}px;height:${planetSize*(obj.bigRings?2.7:1.95)}px;"></div>
    </div>` : "";

  sec.innerHTML = `
    <div class="planet-scene" style="width:${planetSize}px;height:${planetSize}px;">
      <div class="planet-glow" style="background:${obj.glow};"></div>
      ${ringHTML}
      <canvas class="planet-canvas" id="pc-${idx}" width="${planetSize}" height="${planetSize}"
              style="width:${planetSize}px;height:${planetSize}px;"></canvas>
    </div>
    <div class="info-panel">
      <div class="obj-number">${String(idx+1).padStart(2,"0")} / ${String(OBJECTS.length).padStart(2,"0")}</div>
      <h2 style="color:${obj.color};">${obj.name}</h2>
      <div class="obj-category">${obj.cat}</div>
      <p class="obj-desc">${obj.desc}</p>
      <div class="stats-grid">
        ${obj.stats.map(s=>`<div class="stat-cell"><div class="stat-label">${s.l}</div><div class="stat-value">${s.v}</div></div>`).join("")}
      </div>
      <div class="nasa-block" id="nb-${idx}">
        <div class="nasa-status" id="ns-${idx}">QUERYING NASA ARCHIVE&hellip;</div>
        <img id="ni-${idx}" alt="${obj.name} — NASA image"/>
        <div class="nasa-caption">NASA IMAGE LIBRARY</div>
      </div>
    </div>`;

  main.appendChild(sec);
  if (idx < OBJECTS.length - 1) {
    const dv = document.createElement("div"); dv.className = "divider"; main.appendChild(dv);
  }

  requestAnimationFrame(() => { drawPlanet(document.getElementById(`pc-${idx}`), obj, planetSize); });

  nasaFetch(obj.nasa).then(url => {
    const stat = document.getElementById(`ns-${idx}`);
    const img  = document.getElementById(`ni-${idx}`);
    if (url && img) {
      img.src = url;
      img.onload  = () => { img.classList.add("loaded"); if (stat) stat.style.opacity = "0"; };
      img.onerror = () => { if (stat) stat.textContent = "IMAGE UNAVAILABLE"; };
    } else { if (stat) stat.textContent = "IMAGE UNAVAILABLE"; }
  });
});

/* ═══════════════════════════════════════════════════
   SCROLL REVEAL + GLOW PULSE
   FIX 4: obs declared here (inside DOMContentLoaded) so
   the search engine below can reference it directly
   ═══════════════════════════════════════════════════ */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in-view"); });
}, { threshold: 0.12 });
document.querySelectorAll(".cosmos-section").forEach(s => obs.observe(s));

(function pulse() {
  const t = Date.now() * .001;
  document.querySelectorAll(".planet-glow").forEach((g, i) => {
    if (!g.parentElement.matches(":hover"))
      g.style.opacity = (0.06 + 0.05 * Math.sin(t*.7 + i*1.3)).toFixed(3);
  });
  requestAnimationFrame(pulse);
})();

/* ═══════════════════════════════════════════════════
   SEARCH ENGINE
   FIX 4: moved inside DOMContentLoaded so it can access
   drawPlanet, nasaFetch, planetSize, obs, _circle, etc.
   ═══════════════════════════════════════════════════ */
const searchInput   = document.getElementById("search-input");
const searchBtn     = document.getElementById("search-btn");
const searchStatus  = document.getElementById("search-status");
const searchResults = document.getElementById("search-results");

const addedObjects = new Set(OBJECTS.map(o => o.name.toLowerCase()));

function setStatus(msg, type = "") {
  searchStatus.textContent = msg;
  searchStatus.className   = type;
}

async function handleSearch() {
  const raw = searchInput.value.trim();
  if (!raw) return;
  searchBtn.disabled = true;
  searchResults.innerHTML = "";
  setStatus("SCANNING DATABASES…");
  try {
    const [exoResults, nasaResults] = await Promise.all([
      fetchExoplanetArchive(raw),
      fetchNASACatalog(raw),
    ]);
    const seen = new Set(), merged = [];
    [...exoResults, ...nasaResults].forEach(r => {
      const key = r.name.toLowerCase();
      if (!seen.has(key)) { seen.add(key); merged.push(r); }
    });
    if (merged.length === 0) {
      setStatus("NO OBJECTS FOUND — TRY A DIFFERENT QUERY", "error");
    } else {
      setStatus(`${merged.length} OBJECT${merged.length > 1 ? "S" : ""} FOUND`, "success");
      renderResultCards(merged);
    }
  } catch { setStatus("CONNECTION ERROR — CHECK NETWORK", "error"); }
  searchBtn.disabled = false;
}

async function fetchExoplanetArchive(query) {
  try {
    const tap = `https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=`
      + encodeURIComponent(
          `SELECT pl_name,hostname,pl_rade,pl_bmasse,pl_orbper,pl_eqt,sy_dist,disc_year,pl_type `
        + `FROM ps WHERE pl_name LIKE '%${query}%' OR hostname LIKE '%${query}%' `
        + `ORDER BY disc_year DESC LIMIT 8`)
      + `&format=json`;
    const res = await fetch(tap);
    if (!res.ok) return [];
    const data = await res.json();
    return (data || []).map(row => ({
      name: row.pl_name || row.hostname, type: "Exoplanet",
      meta: buildExoMeta(row), raw: row, source: "exoplanet",
    }));
  } catch { return []; }
}

function buildExoMeta(row) {
  const parts = [];
  if (row.sy_dist)   parts.push(`~${Math.round(row.sy_dist)} ly`);
  if (row.pl_orbper) parts.push(`Orbit: ${parseFloat(row.pl_orbper).toFixed(1)}d`);
  if (row.pl_rade)   parts.push(`${parseFloat(row.pl_rade).toFixed(2)}× Earth`);
  if (row.disc_year) parts.push(`Disc. ${row.disc_year}`);
  return parts.join("  ·  ") || "Exoplanet";
}

async function fetchNASACatalog(query) {
  try {
    const res  = await fetch(`https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image&page_size=6`);
    if (!res.ok) return [];
    const data  = await res.json();
    const items = data.collection?.items || [];
    return items.slice(0, 5).map(item => {
      const d = item.data?.[0] || {};
      return {
        name: d.title || query, type: d.keywords?.[0] || "Space Object",
        meta: d.center ? `NASA ${d.center}  ·  ${d.year_start||""}` : "NASA Archive",
        raw: d, source: "nasa-images", imgHref: item.links?.[0]?.href || null,
      };
    });
  } catch { return []; }
}

function renderResultCards(results) {
  searchResults.innerHTML = "";
  results.forEach(r => {
    const already = addedObjects.has(r.name.toLowerCase());
    const card    = document.createElement("div");
    card.className = "result-card";
    card.innerHTML = `
      <div>
        <div class="result-card-name">${r.name}</div>
        <div class="result-card-meta">${r.type.toUpperCase()}  ·  ${r.meta}</div>
      </div>
      <button class="result-card-add" ${already ? "disabled" : ""}>
        ${already ? "ADDED ✓" : "+ ADD TO PAGE"}
      </button>`;
    card.querySelector(".result-card-add").addEventListener("click", function() {
      if (this.disabled) return;
      this.disabled = true; this.textContent = "ADDING…";
      addObjectToPage(r).then(() => {
        this.textContent = "ADDED ✓";
        addedObjects.add(r.name.toLowerCase());
      });
    });
    searchResults.appendChild(card);
  });
}

async function addObjectToPage(result) {
  const obj    = await buildObjFromResult(result);
  const isEven = document.querySelectorAll(".cosmos-section").length % 2 === 1;
  const secId  = `dyn-${Date.now()}`;

  const dv = document.createElement("div"); dv.className = "divider";
  main.appendChild(dv);

  const sec = document.createElement("section");
  sec.className = "cosmos-section searched" + (isEven ? " even" : "");

  const ringHTML = obj.rings ? `
    <div class="ring-wrap">
      <div class="ring" style="width:${planetSize*(obj.bigRings?2.3:1.65)}px;height:${planetSize*(obj.bigRings?2.3:1.65)}px;"></div>
      <div class="ring ring-outer" style="width:${planetSize*(obj.bigRings?2.7:1.95)}px;height:${planetSize*(obj.bigRings?2.7:1.95)}px;"></div>
    </div>` : "";

  // Build stat string for Claude prompt
  const statSummary = obj.stats
    .filter(s => s.l !== "—")
    .map(s => `${s.l}: ${s.v}`)
    .join(", ");

  sec.innerHTML = `
    <div class="planet-scene" style="width:${planetSize}px;height:${planetSize}px;">
      <div class="planet-glow" style="background:${obj.glow};"></div>
      ${ringHTML}
      <canvas class="planet-canvas" id="pc-${secId}" width="${planetSize}" height="${planetSize}"
              style="width:${planetSize}px;height:${planetSize}px;"></canvas>
    </div>
    <div class="info-panel">
      <div class="obj-number">SEARCHED OBJECT</div>
      <h2 style="color:${obj.color};">${obj.name}</h2>
      <div class="obj-category">${obj.cat}</div>
      <p class="obj-desc" id="desc-${secId}"><span class="desc-cursor">▍</span></p>
      <div class="stats-grid">
        ${obj.stats.map(s=>`<div class="stat-cell"><div class="stat-label">${s.l}</div><div class="stat-value">${s.v}</div></div>`).join("")}
      </div>
      <div class="nasa-block" id="nb-${secId}">
        <div class="nasa-status" id="ns-${secId}">QUERYING NASA ARCHIVE…</div>
        <img id="ni-${secId}" alt="${obj.name} — NASA image"/>
        <div class="nasa-caption">NASA IMAGE LIBRARY</div>
      </div>
    </div>`;

  main.appendChild(sec);
  obs.observe(sec);
  requestAnimationFrame(() => { drawPlanet(document.getElementById(`pc-${secId}`), obj, planetSize); });
  setTimeout(() => { sec.scrollIntoView({ behavior: "smooth", block: "center" }); }, 100);

  // Stream Claude description in parallel with NASA image fetch
  streamDescription(secId, obj.name, obj.cat, statSummary);

  const imgUrl = result.imgHref || await nasaFetch(obj.name);
  const stat   = document.getElementById(`ns-${secId}`);
  const img    = document.getElementById(`ni-${secId}`);
  if (imgUrl && img) {
    img.src = imgUrl;
    img.onload  = () => { img.classList.add("loaded"); if (stat) stat.style.opacity = "0"; };
    img.onerror = () => { if (stat) stat.textContent = "IMAGE UNAVAILABLE"; };
  } else { if (stat) stat.textContent = "IMAGE UNAVAILABLE"; }
}

/* ── Stream a rich description from Claude API ── */
async function streamDescription(secId, name, cat, stats) {
  const descEl = document.getElementById(`desc-${secId}`);
  if (!descEl) return;

  const prompt =
    `Write a rich, engaging description of ${name}, a ${cat}. `
  + `Known data: ${stats || "limited data available"}. `
  + `Write 3 sentences. Cover: what makes it scientifically fascinating, `
  + `what its physical conditions might be like, and its significance in our understanding of the universe. `
  + `Write in an evocative, poetic but factual tone — like a high-quality astronomy documentary. `
  + `No bullet points, no headers, no markdown. Plain prose only.`;

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        stream: true,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!res.ok) {
      descEl.textContent = buildDescFallback(name, cat, stats);
      return;
    }

    const reader  = res.body.getReader();
    const decoder = new TextDecoder();
    let   text    = "";
    descEl.innerHTML = '<span class="desc-cursor">▍</span>';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      for (const line of chunk.split("\n")) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6).trim();
        if (data === "[DONE]") break;
        try {
          const parsed = JSON.parse(data);
          const delta  = parsed?.delta?.text || parsed?.content_block?.text || "";
          if (delta) {
            text += delta;
            descEl.innerHTML = text + '<span class="desc-cursor">▍</span>';
          }
        } catch { /* skip malformed chunks */ }
      }
    }

    // Remove cursor when done
    descEl.textContent = text;

  } catch {
    descEl.textContent = buildDescFallback(name, cat, stats);
  }
}

/* ── Fallback if API unavailable ── */
function buildDescFallback(name, cat, stats) {
  return `${name} is a ${(cat||"space object").toLowerCase()} catalogued in NASA's archive. `
    + `${stats ? `Known measurements include: ${stats}. ` : ""}`
    + `Detailed observational data continues to be gathered as telescope technology advances.`;
}

async function buildObjFromResult(result) {
  const row   = result.raw;
  const name  = result.name;
  const lower = name.toLowerCase() + " " + (result.type || "").toLowerCase();
  let surface = "rocky_exo_draw", color = "#a0b0c8", glow = "#8090b0", cols = [];

  if      (/nebula|cloud|remnant/.test(lower))          { surface="nebula";          color="#ff7a9a"; glow="#ff6b8a"; cols=["#ff9f5a","#7eb4ff","#ff6b8a"]; }
  else if (/black.?hole|singularity|quasar/.test(lower)){ surface="blackhole";       color="#aa88ff"; glow="#8866ff"; }
  else if (/galaxy|andromeda|milky/.test(lower))        { surface="galaxy";          color="#a0c8ff"; glow="#80a8f0"; cols=["#a0c8ff","#ffffff","#7eb4ff"]; }
  else if (/saturn/.test(lower))                        { surface="saturn";          color="#e8c96d"; glow="#d4b048"; }
  else if (/jupiter/.test(lower))                       { surface="jupiter";         color="#c88b3a"; glow="#c88b3a"; }
  else if (/mars/.test(lower))                          { surface="mars";            color="#d4502a"; glow="#c1440e"; }
  else if (/earth/.test(lower))                         { surface="earth";           color="#3a8cd5"; glow="#3a8cd5"; }
  else {
    const rade = parseFloat(row.pl_rade) || 1;
    if      (rade > 6)   { surface="jupiter";         color="#c8a050"; glow="#a08030"; }
    else if (rade > 1.7) { surface="neptune_like_draw"; color="#5888d8"; glow="#4070c0"; }
    else                 { surface="rocky_exo_draw";  color="#c09070"; glow="#a07050"; }
  }

  const stats = [];
  if (row.pl_rade)   stats.push({ l:"Radius",    v:`${parseFloat(row.pl_rade).toFixed(2)}× Earth` });
  if (row.pl_bmasse) stats.push({ l:"Mass",       v:`${parseFloat(row.pl_bmasse).toFixed(1)} M⊕`  });
  if (row.pl_orbper) stats.push({ l:"Orbit",      v:`${parseFloat(row.pl_orbper).toFixed(1)} days`});
  if (row.pl_eqt)    stats.push({ l:"Eq. Temp",   v:`${Math.round(row.pl_eqt)} K`                });
  if (row.sy_dist)   stats.push({ l:"Distance",   v:`~${Math.round(row.sy_dist)} ly`             });
  if (row.hostname)  stats.push({ l:"Host Star",  v:row.hostname                                 });
  if (row.disc_year) stats.push({ l:"Discovered", v:row.disc_year.toString()                     });
  if (row.center)    stats.push({ l:"Source",     v:`NASA ${row.center}`                         });
  while (stats.length < 4) stats.push({ l:"—", v:"—" });

  const desc = buildDesc(name, row, result.type);
  return { name, cat: result.type||"Space Object", desc, color, glow, surface, cols, rings:false, stats:stats.slice(0,6), nasa:name };
}

function buildDesc() { return ""; } // Claude streams the real description via streamDescription()













searchInput.addEventListener("keydown", e => { if (e.key === "Enter") handleSearch(); });
searchBtn.addEventListener("click", handleSearch);

}); // end DOMContentLoaded
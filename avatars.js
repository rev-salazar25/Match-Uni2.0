/* Avatares y banners originales de UniMatch (dibujados en SVG, sin imágenes externas) */
const AVATAR_OPCIONES = [
  { id: "a1",  piel: "#F2CBA7", pelo: "#2A2330", estilo: "corto",  ropa: "#E06D1B", fondo: "#FFE3CC", gafas: false },
  { id: "a2",  piel: "#E7B88F", pelo: "#7A3B1E", estilo: "largo",  ropa: "#141417", fondo: "#FCE7F3", gafas: false },
  { id: "a3",  piel: "#C98E62", pelo: "#1E1B26", estilo: "rizado", ropa: "#7A1F2B", fondo: "#FFF0E3", gafas: false },
  { id: "a4",  piel: "#F2CBA7", pelo: "#C28A00", estilo: "mono",   ropa: "#0F6B57", fondo: "#DCFCE7", gafas: false },
  { id: "a5",  piel: "#8D5A3B", pelo: "#141417", estilo: "corto",  ropa: "#F97316", fondo: "#E9E7E0", gafas: true  },
  { id: "a6",  piel: "#E7B88F", pelo: "#2A2330", estilo: "largo",  ropa: "#52525B", fondo: "#FFE3CC", gafas: true  },
  { id: "a7",  piel: "#F2CBA7", pelo: "#A8553F", estilo: "rizado", ropa: "#B84E09", fondo: "#FCE7F3", gafas: false },
  { id: "a8",  piel: "#C98E62", pelo: "#7A3B1E", estilo: "corto",  ropa: "#1E293B", fondo: "#DCFCE7", gafas: true  },
  { id: "a9",  piel: "#8D5A3B", pelo: "#1E1B26", estilo: "mono",   ropa: "#E06D1B", fondo: "#FFF0E3", gafas: false },
  { id: "a10", piel: "#F2CBA7", pelo: "#141417", estilo: "gorro",  ropa: "#7A1F2B", fondo: "#E9E7E0", gafas: false },
  { id: "a11", piel: "#E7B88F", pelo: "#C28A00", estilo: "largo",  ropa: "#0F6B57", fondo: "#FFE3CC", gafas: false },
  { id: "a12", piel: "#C98E62", pelo: "#2A2330", estilo: "gorro",  ropa: "#F97316", fondo: "#FCE7F3", gafas: true  }
];

const BANNER_OPCIONES = [
  { id: "b1", nombre: "Atardecer",   c1: "#F97316", c2: "#B84E09", c3: "#FCE7F3" },
  { id: "b2", nombre: "Noche UNI",   c1: "#1E293B", c2: "#7A1F2B", c3: "#F97316" },
  { id: "b3", nombre: "Bosque",      c1: "#0F6B57", c2: "#134E4A", c3: "#DCFCE7" },
  { id: "b4", nombre: "Algodón",     c1: "#FBCFE8", c2: "#FDBA74", c3: "#FFFFFF" },
  { id: "b5", nombre: "Océano",      c1: "#1D4ED8", c2: "#0F766E", c3: "#BAE6FD" },
  { id: "b6", nombre: "Carbón",      c1: "#27272A", c2: "#52525B", c3: "#F97316" }
];

const BANNER_POR_CATEGORIA = { Estudio: "b2", Actividades: "b1", Networking: "b5" };

function avatarSvg(op) {
  const o = op || AVATAR_OPCIONES[0];
  const ojos = `<ellipse cx="42" cy="50" rx="2.6" ry="3.4" fill="#2A2330"/><ellipse cx="58" cy="50" rx="2.6" ry="3.4" fill="#2A2330"/>
    <circle cx="42.9" cy="48.8" r="0.9" fill="#fff"/><circle cx="58.9" cy="48.8" r="0.9" fill="#fff"/>`;
  const boca = `<path d="M44 60 Q50 65 56 60" stroke="#A8553F" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  const mejillas = `<ellipse cx="36" cy="57" rx="4" ry="2.4" fill="#F09595" opacity=".5"/><ellipse cx="64" cy="57" rx="4" ry="2.4" fill="#F09595" opacity=".5"/>`;
  const gafas = o.gafas ? `<rect x="35" y="44" width="13" height="10" rx="3" fill="none" stroke="#141417" stroke-width="1.8"/><rect x="52" y="44" width="13" height="10" rx="3" fill="none" stroke="#141417" stroke-width="1.8"/><path d="M48 49 H52" stroke="#141417" stroke-width="1.8"/>` : "";
  let peloAtras = "", peloFrente = "";
  if (o.estilo === "largo") {
    peloAtras = `<path d="M26 52 C22 80 30 90 38 92 L62 92 C70 90 78 80 74 52 Z" fill="${o.pelo}"/>`;
    peloFrente = `<path d="M30 48 C28 26 42 20 52 20 C66 20 74 30 70 48 C66 38 58 34 50 34 C42 34 34 38 30 48Z" fill="${o.pelo}"/>`;
  } else if (o.estilo === "rizado") {
    peloAtras = `<g fill="${o.pelo}"><circle cx="30" cy="40" r="10"/><circle cx="40" cy="28" r="11"/><circle cx="52" cy="25" r="11"/><circle cx="64" cy="30" r="11"/><circle cx="71" cy="42" r="9"/></g>`;
    peloFrente = `<path d="M31 46 C34 36 44 33 52 33 C60 33 67 37 69 46 C62 41 56 40 50 40 C44 40 37 41 31 46Z" fill="${o.pelo}"/>`;
  } else if (o.estilo === "mono") {
    peloAtras = `<circle cx="50" cy="16" r="9" fill="${o.pelo}"/>`;
    peloFrente = `<path d="M30 48 C28 28 40 22 51 22 C64 22 73 30 70 48 C66 38 58 34 50 34 C42 34 34 38 30 48Z" fill="${o.pelo}"/>`;
  } else if (o.estilo === "gorro") {
    peloFrente = `<path d="M29 40 C29 20 40 14 50 14 C62 14 72 22 71 40 Z" fill="${o.ropa}"/><rect x="26" y="37" width="48" height="8" rx="4" fill="#fff" opacity=".9"/>
      <path d="M30 50 C30 44 36 42 50 42 C64 42 70 44 70 50 C64 46 56 45 50 45 C44 45 36 46 30 50Z" fill="${o.pelo}"/>`;
  } else {
    peloFrente = `<path d="M30 48 C28 26 42 18 52 18 C66 18 74 28 70 48 C67 36 60 32 52 32 C42 32 34 36 30 48Z" fill="${o.pelo}"/>`;
  }
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Avatar">
    <rect width="100" height="100" fill="${o.fondo}"/>
    ${peloAtras}
    <path d="M12 100 C12 80 30 74 50 74 C70 74 88 80 88 100 Z" fill="${o.ropa}"/>
    <path d="M42 74 L50 86 L58 74 Z" fill="#F7E7D8"/>
    <rect x="43" y="64" width="14" height="14" rx="5" fill="${o.piel}"/>
    <ellipse cx="50" cy="48" rx="21" ry="23" fill="${o.piel}"/>
    ${peloFrente}${ojos}${gafas}${mejillas}${boca}
  </svg>`;
}

function obtenerAvatarCuenta(cuenta) {
  const id = cuenta && cuenta.avatar;
  const hallado = AVATAR_OPCIONES.find((a) => a.id === id);
  if (hallado) return hallado;
  const n = Math.abs(Number(cuenta && cuenta.id) || 0);
  return AVATAR_OPCIONES[n % AVATAR_OPCIONES.length];
}

function obtenerBannerCuenta(cuenta) {
  const id = (cuenta && cuenta.banner) || BANNER_POR_CATEGORIA[(cuenta && cuenta.categoria) || "Estudio"] || "b2";
  return BANNER_OPCIONES.find((b) => b.id === id) || BANNER_OPCIONES[0];
}

function estiloBanner(b) {
  return `--b1:${b.c1};--b2:${b.c2};--b3:${b.c3};`;
}

function avatarHTML(cuenta, tam, extra) {
  const op = obtenerAvatarCuenta(cuenta);
  return `<div class="avatar-vivo ${extra || ""}" style="width:${tam}px;height:${tam}px;" title="Toca para animar">${avatarSvg(op)}</div>`;
}

function formasBannerHTML() {
  return `<span class="forma f1"></span><span class="forma f2"></span><span class="forma f3"></span>`;
}

/* Interacción: el banner sigue el dedo/mouse y el avatar rebota al tocarlo */
(function interaccionesVisuales() {
  function mover(e) {
    const b = e.target.closest && e.target.closest(".banner-vivo");
    if (!b) return;
    const r = b.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    b.style.setProperty("--mx", x.toFixed(3));
    b.style.setProperty("--my", y.toFixed(3));
  }
  function soltar(e) {
    const b = e.target.closest && e.target.closest(".banner-vivo");
    if (!b) return;
    b.style.setProperty("--mx", 0);
    b.style.setProperty("--my", 0);
  }
  document.addEventListener("pointermove", mover);
  document.addEventListener("pointerup", soltar);
  document.addEventListener("pointerleave", soltar, true);
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest(".avatar-vivo");
    if (!a) return;
    a.classList.remove("pop");
    void a.offsetWidth;
    a.classList.add("pop");
  });
})();

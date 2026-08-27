import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";



const facadeAsset = { url: "/media/facade.jpg" };
const entranceAsset = { url: "/media/entrance.jpg" };
const interiorAsset = { url: "/media/interior.jpg" };
const interiorZoomAsset = { url: "/media/interior-zoom.jpg" };
const mezzanineAsset = { url: "/media/mezzanine.jpg" };
const kitchenAsset = { url: "/media/kitchen.jpg" };
const balconyAsset = { url: "/media/balcony.jpg" };
const montaplatosAsset = { url: "/media/montaplatos.jpg" };
const patioFondoAsset = { url: "/media/patio-fondo.jpg" };
const heroMobileAsset = { url: "/media/hero-mobile.jpg" };
const logoPortal = { url: "/media/logo-portal.png" };
const logoPortalAllWhite = { url: "/media/portal_allwhite.png" };
const logoPortalGreen = { url: "/media/portal_green.png" };
const logoRocchio = { url: "/media/rocchio.png" };
const logoMancini = { url: "/media/mancini.png" };
const fachadaPlanos = { url: "/media/fachada-planos.jpg" };
const planoGeneral = { url: "/media/plano-general.jpg" };
const planoLocal1 = { url: "/media/plano-local-1.jpg" };
const planoLocal2 = { url: "/media/plano-local-2.jpg" };
const planoLocal3 = { url: "/media/plano-local-3.jpg" };
const planoLocal4 = { url: "/media/plano-local-4.jpg" };
const planoLocal5 = { url: "/media/plano-local-5.jpg" };

const SITE_URL = "https://portal-witcomb.lovable.app";

export const Route = createFileRoute("/")({
  component: PortalWitcomb,
  head: () => ({
    meta: [
      { title: "Portal Witcomb - Villa Ballester" },
      {
        name: "description",
        content:
          "Cinco locales gastronómicos de doble altura en Villa Ballester Centro. Comercializa Rocchio Propiedades.",
      },
      { property: "og:title", content: "Portal Witcomb - Villa Ballester" },
      {
        property: "og:description",
        content:
          "Cinco locales gastronómicos de doble altura en Villa Ballester Centro. Comercializa Rocchio Propiedades.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}/media/facade.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/media/facade.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          name: "Portal Witcomb",
          description:
            "Cinco locales gastronómicos de doble altura en Villa Ballester Centro.",
          url: `${SITE_URL}/`,
          image: `${SITE_URL}/media/facade.jpg`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Witcomb 2632",
            addressLocality: "Villa Ballester",
            addressRegion: "Buenos Aires",
            addressCountry: "AR",
          },
        }),
      },
    ],
  }),
});

const WHATSAPP_URL =
  "https://wa.me/5491134630034?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20Portal%20Witcomb%20%E1%91%8E%20por%20favor%21";

const VIDEO_URL = "/media/portal-witcomb-en-movimiento.mp4";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.83 9.83 0 0 0 4.69 1.19h.01c5.43 0 9.85-4.42 9.85-9.86A9.79 9.79 0 0 0 12.04 2Zm0 17.94a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.17.83.85-3.09-.2-.32a8.13 8.13 0 0 1-1.25-4.35c0-4.52 3.68-8.19 8.24-8.19 2.2 0 4.27.86 5.83 2.41a8.13 8.13 0 0 1 2.41 5.79c0 4.52-3.68 8.24-8.24 8.24Z" />
    </svg>
  );
}


/* Reveal on scroll */
function useReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, shown };
}

function PortalWitcomb() {
  return (
    <main className="bg-cream text-graphite">
      <Nav />
      <Hero />
      <Intro />
      <Journey />
      <VideoSection />
      <Planos />


      <Value />
      <Specs />
      <Location />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ---------- Navigation ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-cream/85 backdrop-blur-md border-b border-line/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex sm:justify-between sm:px-8 sm:py-5">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <img
            src={logoPortal.url}
            alt="Portal Witcomb"
            className={`h-7 w-auto shrink-0 transition-opacity duration-700 sm:h-8 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
          className={`btn-capsule shrink-0 px-4 py-2 text-[0.8rem] md:hidden ${
            scrolled
              ? "bg-forest text-cream"
              : "border border-cream/60 bg-cream/10 text-cream backdrop-blur-sm"
          }`}
        >
          Consultar
        </a>
        <nav className="hidden items-center gap-8 text-sm text-graphite/80 md:flex">
          <a href="#proyecto" className="hover:text-forest">Proyecto</a>
          <a href="#recorrido" className="hover:text-forest">Recorrido</a>
          <a href="#video" className="hover:text-forest">Video</a>
          <a href="#planos" className="hover:text-forest">Planos</a>
          <a href="#tecnica" className="hover:text-forest">Técnica</a>
          <a href="#ubicacion" className="hover:text-forest">Ubicación</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-capsule bg-forest text-cream hover:bg-forest-deep"
          >
            Consultar
          </a>
        </nav>
      </div>

    </header>
  );
}

/* ---------- Hero (sticky facade + logo reveal) ---------- */
function Hero() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [p, setP] = useState(0); // 0 → 1 progress

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        setP(total > 0 ? scrolled / total : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const overlay = Math.min(0.72, p * 0.9);
  const logoOpacity = Math.min(1, Math.max(0, (p - 0.15) / 0.35));
  const logoTranslate = 60 - Math.min(60, p * 120); // 60 → 0 px
  const textOpacity = Math.min(1, Math.max(0, (p - 0.45) / 0.35));

  const [colorPlay, setColorPlay] = useState(false);
  useEffect(() => {
    if (logoOpacity > 0.9) setColorPlay(true);
  }, [logoOpacity]);

  return (
    <section id="top" ref={wrapRef} className="relative h-[120vh] sm:h-[220vh]">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-graphite sm:h-screen">
        <picture>
          <source media="(max-width: 639px)" srcSet={heroMobileAsset.url} />
          <img
            src={facadeAsset.url}
            alt="Fachada de Portal Witcomb en Villa Ballester"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[55%_62%] sm:object-center"
            style={{ transform: `scale(${1 + p * 0.04})`, transition: "transform 200ms linear" }}
          />
        </picture>

        <div
          className="absolute inset-0 bg-graphite"
          style={{ opacity: overlay }}
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center sm:px-6">
          <div
            className="relative w-[min(88vw,560px)] select-none"
            style={{ opacity: logoOpacity, transform: `translateY(${logoTranslate}px)` }}
          >
            <img
              src={logoPortalAllWhite.url}
              alt="Portal Witcomb"
              className="block w-full"
              draggable={false}
            />
            {/* Same three letters that are green in the original identity */}
            <img
              src={logoPortalGreen.url}
              alt=""
              aria-hidden
              className={`logo-green-layer absolute inset-0 block h-full w-full ${
                colorPlay ? "logo-green-play" : ""
              }`}
              draggable={false}
            />

          </div>

          <div
            className="mt-7 w-full max-w-xl space-y-6 sm:mt-8"
            style={{ opacity: textOpacity, transform: `translateY(${(1 - textOpacity) * 20}px)` }}
          >
            <p className="mx-auto max-w-sm text-balance font-display text-base text-cream/90 sm:max-w-none sm:text-xl">
              Arquitectura gastronómica con carácter y visión de negocio.
            </p>
            <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
              <a
                href="#proyecto"
                className="btn-capsule justify-center bg-cream text-graphite hover:bg-bone"
              >
                Descubrir el proyecto
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-capsule justify-center border border-cream/60 text-cream hover:bg-cream/10"
              >
                Consultar disponibilidad

              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] uppercase tracking-[0.3em] text-cream/70"
          style={{ opacity: 1 - p * 2 }}
        >
          Desplazar
        </div>
      </div>
    </section>
  );
}

/* ---------- Intro ---------- */
function Intro() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section id="proyecto" className="relative bg-cream py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`max-w-3xl transition-all duration-1000 ${
            shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="eyebrow">Portal Witcomb</p>
          <h2 className="mt-4 font-display text-[clamp(1.5rem,7.4vw,2.05rem)] leading-[1.08] sm:text-5xl md:text-6xl">
            Cinco locales, cinco arcos, cinco experiencias.
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base text-graphite/70 sm:text-lg">
            Exclusivos locales gastronómicos en doble altura, donde la
            arquitectura, la operación y la identidad se integran para dar vida a
            propuestas con carácter y alma propia, transformando cada espacio en
            una experiencia memorable.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-5 sm:mt-16 sm:px-8">
        <div className="curve-divider" />
        <dl className="grid grid-cols-2 gap-y-10 py-10 sm:grid-cols-4 sm:gap-x-8">
          {[
            ["5", "locales"],
            ["Doble", "altura"],
            ["185", "m² cubiertos"],
            ["50", "m² exteriores"],
          ].map(([big, small]) => (
            <div key={small} className="text-center">
              <div className="font-display text-5xl leading-none text-graphite sm:text-6xl">
                {big}
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.22em] text-graphite/60">
                {small}
              </div>
            </div>
          ))}
        </dl>
        <div className="curve-divider" />
      </div>
    </section>
  );
}

function FullBleedImage({
  src,
  alt,
  focus = "50% 50%",
}: {
  src: string;
  alt: string;
  focus?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      className={`mx-auto w-[min(100%,1600px)] px-4 transition-all duration-[1200ms] sm:px-6 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="overflow-hidden rounded-[8px] sm:rounded-[16px]">
        <img
          src={src}
          alt={alt}
          style={{ objectPosition: focus }}
          className="block aspect-[5/4] w-full object-cover sm:aspect-auto sm:h-[80vh]"
          loading="lazy"
        />
      </div>
    </div>
  );
}


/* ---------- Journey ---------- */
const JOURNEY = [
  {
    src: facadeAsset.url,
    tag: "01 · Fachada",
    title: "Una presencia que transforma la zona",
    body:
      "Frente curvo en curtain wall.",
  },
  {
    src: entranceAsset.url,
    tag: "02 · Espacio exterior",
    title: "La experiencia comienza antes de entrar",
    body:
      "El retiro de frente extiende la experiencia hacia el exterior y crea un primer espacio de encuentro desde la acera.",
  },
  {
    src: interiorZoomAsset.url,
    tag: "03 · Planta baja",
    title: "Pensada para recibir",
    body:
      "Un espacio amplio y luminoso que integra salón, barra, circulación y salida al patio exterior, e incorpora baño para discapacitados.",
  },
  {
    src: interiorAsset.url,
    tag: "04 · Planta baja",
    title: "Conexión entre niveles",
    body:
      "La doble altura vincula el salón principal con el entrepiso y acompaña el recorrido hacia el patio exterior.",
  },
  {
    src: kitchenAsset.url,
    tag: "05 · Cocina",
    title: "Preparado para operar",
    body:
      "Infraestructura pensada para acompañar las exigencias reales de una cocina gastronómica profesional.",
  },
  {
    src: mezzanineAsset.url,
    tag: "06 · Entrepiso",
    title: "Más capacidad, mejor conexión",
    body:
      "Un nivel que amplía el salón e integra balcón, montaplatos y toilettes, manteniendo una relación visual constante con la planta baja.",
  },
  {
    src: balconyAsset.url,
    tag: "07 · Balcón",
    title: "Una pausa en altura",
    body:
      "El doble nivel se abre hacia el balcón, extendiendo la experiencia y creando nuevos momentos de encuentro.",
  },
  {
    src: montaplatosAsset.url,
    tag: "08 · Conducto para montaplatos",
    title: "Conexión directa con la cocina",
    body:
      "Conducto para montaplatos que agiliza el servicio entre niveles y mejora la operación sin interferir en la experiencia del salón.",
  },
  {
    src: patioFondoAsset.url,
    tag: "09 · Patio exterior",
    title: "Espacio al aire libre",
    body:
      "Cada local cuenta con un patio privado que garantiza privacidad y autonomía entre las distintas propuestas.",
  },
];

function Journey() {
  return (
    <section id="recorrido" className="bg-cream-warm py-14 sm:py-24">
      <div className="mx-auto mb-8 max-w-6xl px-5 sm:mb-14 sm:px-8">
        <p className="eyebrow">Recorrido</p>
        <h2 className="mt-4 max-w-3xl font-display text-[2.05rem] leading-[1.08] sm:text-5xl md:text-6xl">
          Un recorrido por Portal Witcomb.
        </h2>
      </div>
      <div className="space-y-12 sm:space-y-20">
        {JOURNEY.map((j, i) => (
          <JourneyImage key={j.tag} data={j} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function JourneyImage({
  data,
  flip,
}: {
  data: (typeof JOURNEY)[number];
  flip: boolean;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.15);
  return (
    <article
      ref={ref}
      className={`mx-auto w-[min(100%,1600px)] px-4 sm:px-6 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-[1100ms]`}
    >
      <figure className="group relative overflow-hidden rounded-[8px] sm:rounded-[18px]">
        <img
          src={data.src}
          alt={data.title}
          loading="lazy"
          style={{ objectPosition: FOCUS[data.src] ?? "50% 50%" }}
          className="block aspect-[5/4] w-full object-cover transition-transform duration-[1400ms] ease-out sm:aspect-auto sm:h-[88vh] sm:group-hover:scale-[1.03]"
        />

        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 bottom-0 hidden h-1/2 bg-gradient-to-t from-graphite/70 via-graphite/20 to-transparent transition-opacity duration-700 sm:block ${
            shown ? "opacity-100" : "opacity-0"
          }`}
        />
        <figcaption
          className={`mt-5 max-w-md transition-all duration-[900ms] sm:absolute sm:bottom-5 sm:mt-0 ${
            flip ? "sm:right-10" : "sm:left-10"
          } sm:rounded-2xl sm:bg-cream/78 sm:p-7 sm:backdrop-blur-[3px] ${
            shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: shown ? "400ms" : "0ms" }}
        >
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-forest">
            {data.tag}
          </p>
          <h3 className="mt-3 font-display text-2xl leading-tight text-graphite sm:text-3xl">
            {data.title}
          </h3>
          <p className="mt-3 text-sm text-graphite/70 sm:text-base">{data.body}</p>
        </figcaption>
      </figure>
    </article>

  );
}

/* ---------- Foco individual por imagen (recorte en mobile) ---------- */
const FOCUS: Record<string, string> = {
  [facadeAsset.url]: "50% 62%",
  [entranceAsset.url]: "50% 55%",
  [interiorAsset.url]: "50% 45%",
  [interiorZoomAsset.url]: "50% 50%",
  [kitchenAsset.url]: "50% 50%",
  [mezzanineAsset.url]: "50% 42%",
  [balconyAsset.url]: "50% 48%",
  [montaplatosAsset.url]: "58% 50%",
  [patioFondoAsset.url]: "50% 52%",
};

/* ---------- Planos ---------- */
const PLANOS = [planoLocal1.url, planoLocal2.url, planoLocal3.url, planoLocal4.url, planoLocal5.url];

/* Geometría de la fachada (porcentajes sobre el ancho del dibujo) */
const BAY_LEFT = 4.06;
const BAY_W = 18.38;

/* Recorte lateral del PNG (márgenes blancos a izquierda y derecha) */
const CROP = 3.87; // % del ancho original recortado por lado
const CROP_SCALE = 100 / (100 - CROP * 2); // ancho de la imagen sobre el contenedor
const toCrop = (pct: number) => (pct - CROP) * CROP_SCALE;

function Planos() {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState<null | { src: string; title: string }>(null);
  const { ref, shown } = useReveal<HTMLDivElement>(0.1);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoom(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  return (
    <section id="planos" className="bg-cream py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">Planos</p>
        <h2 className="mt-4 font-display text-[clamp(1.5rem,7.4vw,2.05rem)] leading-[1.08] sm:text-5xl md:text-6xl">
          Explorá cada unidad
        </h2>
        <p className="mt-4 text-sm text-graphite/70 sm:text-base">
          Seleccioná un local para ver sus plantas y evaluar una posible unificación.
        </p>

        {/* Selector sobre la fachada */}
        <div
          ref={ref}
          className={`mt-7 transition-all duration-[900ms] sm:mt-10 ${
            shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="relative overflow-hidden">
              <img
                src={fachadaPlanos.url}
                alt="Fachada de Portal Witcomb con los cinco locales"
                className="block max-w-none select-none"
                style={{
                  width: `${CROP_SCALE * 100}%`,
                  marginLeft: `-${CROP * CROP_SCALE}%`,
                }}
                draggable={false}
              />
              {PLANOS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-pressed={active === i}
                  aria-label={`Local ${i + 1}`}
                  onClick={() => setActive(i)}
                  className="group absolute top-[0.5%] h-[93.5%] cursor-pointer rounded-[6px] transition-colors duration-[400ms]"
                  style={{
                    left: `${toCrop(BAY_LEFT + i * BAY_W)}%`,
                    width: `${BAY_W * CROP_SCALE}%`,
                  }}
                >
                  <span
                    aria-hidden
                    className={`absolute inset-0 rounded-[6px] transition-all duration-[400ms] ${
                      active === i
                        ? "bg-forest/35 ring-1 ring-forest/60"
                        : "bg-forest/0 group-hover:bg-forest/12"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>


          {/* Controles secundarios */}
          <div className="mt-5 grid w-full grid-cols-5 items-center gap-x-1 sm:flex sm:w-auto sm:flex-wrap sm:gap-x-5">
            {PLANOS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-pressed={active === i}
                onClick={() => setActive(i)}
                className={`whitespace-nowrap py-1 text-center text-[0.58rem] uppercase tracking-[0.1em] transition-colors duration-300 sm:text-[0.72rem] sm:tracking-[0.22em] ${
                  active === i
                    ? "text-forest"
                    : "text-graphite/45 hover:text-graphite/80"
                }`}
              >
                Local {i + 1}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              setZoom({ src: planoGeneral.url, title: "Planta general" })
            }
            className="mt-4 text-sm text-graphite/60 underline decoration-graphite/25 underline-offset-4 transition-colors duration-300 hover:text-forest"
          >
            Ver planta general
          </button>
        </div>

        {/* Plano individual */}
        <div className="mt-8 sm:mt-12">
          <div className="overflow-hidden rounded-[8px] bg-bone">
            <img
              key={active}
              src={PLANOS[active]}
              alt={`Planos del Local ${active + 1}`}
              loading="lazy"
              className="mx-auto block w-full animate-[planoFade_500ms_ease-out] object-contain"
            />
          </div>
          <button
            type="button"
            onClick={() =>
              setZoom({ src: PLANOS[active], title: `Local ${active + 1}` })
            }
            className="mt-4 text-sm text-graphite/60 underline decoration-graphite/25 underline-offset-4 transition-colors duration-300 hover:text-forest"
          >
            Ver plano ampliado
          </button>
        </div>
      </div>

      {zoom && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={zoom.title}
          className="fixed inset-0 z-[100] bg-graphite/90 backdrop-blur-sm"
          onClick={() => setZoom(null)}
        >
          <div
            className="h-full w-full overflow-auto p-4 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={zoom.src}
              alt={`Plano ampliado — ${zoom.title}`}
              className="mx-auto block w-full max-w-[1400px] rounded-[8px] bg-cream"
            />
          </div>
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => setZoom(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-cream/90 text-graphite transition-transform duration-300 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.6">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}

/* ---------- Video ---------- */

function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { ref, shown } = useReveal<HTMLDivElement>(0.1);

  return (
    <section id="video" className="bg-cream py-14 sm:py-24">
      <div className="mx-auto mb-6 max-w-6xl px-5 sm:mb-10 sm:px-8">
        <p className="eyebrow">Recorrido audiovisual</p>
        <h2 className="mt-4 max-w-3xl font-display text-[2.05rem] leading-[1.08] sm:text-5xl md:text-6xl">
          Portal Witcomb
          <br />
          en movimiento.
        </h2>
      </div>
      <div
        ref={ref}
        className={`mx-auto w-[min(100%,1600px)] px-4 transition-all duration-[1200ms] sm:px-6 ${
          shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative overflow-hidden rounded-[8px] bg-graphite sm:rounded-[16px]">
          <video
            ref={videoRef}
            className="block aspect-[4/3] w-full object-contain"
            src={VIDEO_URL}
                        controls={playing}
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
          />
          {!playing && (
            <button
              type="button"
              aria-label="Reproducir el video de Portal Witcomb"
              onClick={() => {
                setPlaying(true);
                videoRef.current?.play();
              }}
              className="absolute inset-0 grid place-items-center bg-graphite/25 transition-colors duration-500 hover:bg-graphite/35"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full border border-cream/70 bg-cream/15 backdrop-blur-md transition-transform duration-500 hover:scale-105 sm:h-20 sm:w-20">
                <svg viewBox="0 0 24 24" aria-hidden className="ml-1 h-7 w-7 fill-cream sm:h-8 sm:w-8">
                  <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Value ---------- */
function Value() {
  const items = [
    ["01", "Mayor visibilidad", "Una fachada que permite reconocer cada marca desde el exterior."],
    ["02", "Experiencia memorable", "Espacios pensados para generar conexión y favorecer el regreso."],
    ["03", "Operación eficiente", "Recorridos que mejoran la dinámica entre cocina, barra y salón."],
    ["04", "Flexibilidad gastronómica", "Una base adaptable a diferentes conceptos e identidades."],
  ];
  return (
    <section className="bg-cream py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Arquitectura + negocio</p>
          <h2 className="mt-4 font-display text-[clamp(1.5rem,7.4vw,2.05rem)] leading-[1.08] sm:text-5xl md:text-6xl">
            Un espacio que también trabaja para tu marca.
          </h2>
          <p className="mt-4 max-w-xl text-base text-graphite/70 sm:text-lg">
            Diseño, visibilidad y operación se integran para potenciar la
            experiencia y el posicionamiento de cada propuesta.
          </p>
        </div>

        <ol className="mt-10 divide-y divide-line/70 border-y border-line/70">
          {items.map(([num, title, body]) => (
            <li
              key={num}
              className="grid grid-cols-[auto_1fr] items-baseline gap-x-8 gap-y-2 py-8 sm:grid-cols-[80px_1fr_2fr] sm:gap-x-12 sm:py-12"
            >
              <span className="font-display text-3xl text-forest sm:text-4xl">{num}</span>
              <h3 className="font-display text-2xl leading-tight text-graphite sm:text-3xl">
                {title}
              </h3>
              <p className="col-span-2 max-w-lg text-sm text-graphite/70 sm:col-span-1 sm:text-base">
                {body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Specs ---------- */
function Specs() {
  const groups = [
    {
      title: "Arquitectura y eficiencia",
      items: [
        "Curtain wall curvo",
        "Módulos full vision",
        "Doble acristalamiento",
        "Iluminación LED inteligente",
        "Preinstalación de climatización A/C",
      ],
    },
    {
      title: "Seguridad",
      items: [
        "Control de acceso",
        "CCTV",
        "Detectores de humo",
        "Sprinklers",
        "Sistema de tanque y bomba",
      ],
    },
    {
      title: "Operación",
      items: [
        "Salida de humos a los cuatro vientos",
        "Circuito para UPS",
        "Preinstalación para grupo electrógeno",
      ],
    },
  ];
  return (
    <section id="tecnica" className="bg-bone py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Infraestructura</p>
          <h2 className="mt-4 font-display text-[clamp(1.5rem,7.4vw,2.05rem)] leading-[1.08] sm:text-5xl md:text-6xl">
            Infraestructura preparada.
          </h2>
          <p className="mt-4 max-w-xl text-base text-graphite/70 sm:text-lg">
            Soluciones técnicas orientadas a la eficiencia, la seguridad y la
            operación gastronómica.
          </p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-flow-col md:grid-rows-[auto_1fr] md:grid-cols-3 md:gap-x-10 md:gap-y-2">
          {groups.map((g) => (
            <div key={g.title} className="contents">
              <h3 className="font-display text-xl font-medium tracking-tight text-graphite sm:text-2xl">
                {g.title}
              </h3>
              <ul className="space-y-3 text-[15px] text-graphite/75">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="mt-[10px] inline-block h-[6px] w-[6px] shrink-0 rounded-full bg-forest/60" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Location ---------- */
function Location() {
  return (
    <section id="ubicacion" className="bg-cream py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Ubicación</p>
            <h2 className="mt-4 font-display text-[clamp(1.5rem,7.4vw,2.05rem)] leading-[1.08] sm:text-5xl md:text-6xl">
              <span className="block whitespace-nowrap">En el corazón</span>
              <span className="block whitespace-nowrap">de Villa Ballester.</span>
            </h2>
            <p className="mt-4 text-base text-graphite/70 sm:text-lg">
              Witcomb 2632, Villa Ballester Centro.
              <br />
              Una ubicación integrada al movimiento comercial.
            </p>

          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://maps.app.goo.gl/HL2aHAMFKSyhqV3H6"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-capsule bg-forest text-cream hover:bg-forest-deep"
            >
              Cómo llegar
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-capsule border border-graphite/25 text-graphite hover:bg-graphite/5"
            >
              Coordinar una visita
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 w-[min(100%,1600px)] px-3 sm:px-6">
        <div className="overflow-hidden rounded-[10px] sm:rounded-[18px]">
          <iframe
            title="Portal Witcomb — Witcomb 2632, Villa Ballester"
            src="https://www.google.com/maps?q=Witcomb+2632%2C+Villa+Ballester&output=embed"
            className="h-[46vh] w-full border-0 sm:h-[70vh]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  ["¿Qué propuestas pueden instalarse?", "Cafeterías, restaurantes, bares, heladerías, panaderías y modelos de comida al paso o take away."],
  ["¿Cómo se organiza cada local?", "Planta baja, cocina, baño para discapacitados, entrepiso con balcón, toilettes y espacios exteriores."],
  ["¿Qué aporta la doble altura?", "Mayor amplitud, conexión entre niveles y una experiencia espacial con identidad propia."],
  ["¿Cuenta con espacios al aire libre?", "Sí. El proyecto incorpora retiros, patios y balcones destinados a ampliar la experiencia gastronómica."],
  ["¿Qué infraestructura está prevista?", "Climatización, extracción de humos, sistemas contra incendios, CCTV, energía estabilizada e iluminación inteligente."],
  ["¿Cómo solicito planos o una visita?", "Contactá a Rocchio Propiedades por WhatsApp para consultar disponibilidad, financiación y visitas."],
] as const;

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-cream-warm py-14 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <p className="eyebrow">Preguntas</p>
        <h2 className="mt-4 font-display text-[clamp(1.5rem,7.4vw,2.05rem)] leading-[1.08] sm:text-5xl md:text-6xl">
          Consultas frecuentes.
        </h2>
        <ul className="mt-10 divide-y divide-line/70 border-y border-line/70">
          {FAQS.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <li key={q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="grid w-full grid-cols-[1fr_auto] items-center gap-6 py-6 text-left transition-colors hover:text-forest sm:py-7"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-graphite sm:text-xl">{q}</span>
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                      isOpen
                        ? "border-forest bg-forest text-cream"
                        : "border-graphite/25 text-graphite"
                    }`}
                    aria-hidden
                  >
                    <span className="text-xl leading-none">{isOpen ? "−" : "+"}</span>
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-700 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <p className="pb-7 pr-14 text-[15px] text-graphite/75 sm:text-base">{a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-16 text-cream sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-forest/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-terracotta/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.32em] text-cream/70">
          Portal Witcomb
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl text-balance font-display text-[1.65rem] leading-[1.16] sm:text-4xl md:text-5xl">
          En Portal Witcomb un negocio gastronómico no solo debe verse estético,
          debe contar una historia y hacer que los clientes quieran volver
          siempre.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-cream/75 sm:text-lg">
          ¿Querés conocer más sobre Portal Witcomb?
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Consultar por WhatsApp a Portal Witcomb"
          className="btn-capsule mt-8 justify-center bg-[#25D366] px-7 py-4 text-base text-graphite hover:bg-[#1ebe5a]"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Contactarnos por WhatsApp
        </a>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 items-center gap-x-6 gap-y-4 border-t border-cream/15 pt-12 sm:mt-16 sm:gap-x-8">
          <p className="text-center text-sm text-cream/65">Desarrolla:</p>
          <p className="text-center text-sm text-cream/65">Comercializa:</p>
          <div className="flex justify-center">
            <img
              src={logoMancini.url}
              alt="Mancini y Asociados"
              className="h-16 w-auto max-w-[160px] object-contain sm:h-[72px] sm:max-w-[200px]"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={logoRocchio.url}
              alt="Rocchio Propiedades"
              className="h-20 w-auto max-w-[180px] object-contain sm:h-[86px] sm:max-w-[300px]"
            />
          </div>
        </div>


      </div>

    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-cream-warm py-6 text-graphite sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center sm:px-8">
        <img
          src={logoPortal.url}
          alt="Portal Witcomb"
          className="h-12 w-auto max-w-[260px] object-contain sm:h-14"
        />
        <p className="text-[0.85rem] text-graphite/70 sm:text-sm">
          Witcomb 2632, Villa Ballester Centro
        </p>
      </div>
    </footer>
  );
}

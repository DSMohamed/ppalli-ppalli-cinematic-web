import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";

import heroImg from "../assets/BIBIMBAP.webp";
import bibimbapImg from "../assets/BIBIMBAP.webp";
import seafoodSoupImg from "../assets/mixed-seafood-soup.webp";
import gyozaImg from "../assets/yaki-gyoza.webp";
import kimbapImg from "../assets/KIMBAP.webp";
import noodlesImg from "../assets/stir-fry-chicken-noodles.webp";
import sweetSourImg from "../assets/sweet-and-sour.webp";

export const Route = createFileRoute("/")({
  component: Index,
});

const TALABAT_URL = "https://www.talabat.com/egypt/restaurant/717198/ppalli-ppalli?aid=7882";
const WHATSAPP_URL =
  "https://wa.me/201000353389?text=" +
  encodeURIComponent("Hi Ppalli Ppalli! I'd like to reserve a table.");
const PHONE = "010 0035 3389";
const ADDRESS_EN = "5 Street 264, New Maadi (Takseem El Mesaha), Cairo";
const ADDRESS_AR = "٥ شارع ٢٦٤، المعادي الجديدة (تقسيم المساحة)، القاهرة";
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.326214897175!2d31.27615007698098!3d29.97005362208909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458390018fcd593%3A0xe56a6991981bc654!2sPpalli%20Ppalli%20Restaurant!5e0!3m2!1sen!2sus!4v1784373927580!5m2!1sen!2sus";

type Lang = "en" | "ar";

type Copy = {
  dir: "ltr" | "rtl";
  [k: string]: any;
};
const T: { en: Copy; ar: Copy } = {
  en: {
    dir: "ltr" as const,
    nav: { story: "The Name", dishes: "Dishes", owners: "Owners", visit: "Visit" },
    orderCta: "Order Delivery",
    reserveCta: "Reserve a Table",
    langSwitch: "العربية",
    heroKicker: "빨리빨리 · Maadi, Cairo",
    heroTitle1: "Hurry, hurry.",
    heroTitle2: "It's not just our name —",
    heroTitle3: "it's how we cook.",
    heroSub:
      "Owner-cooked Korean food that turns first-timers into regulars. Bibimbap, gyoza, seafood soup — ready when you are.",
    trust1: "4.5★ from 1,600+ orders",
    trust2: "Cooked & served by the owners",
    trust3: "Maadi's go-to Korean kitchen",
    storyKicker: "The name, explained",
    storyTitle: "빨리빨리",
    storyLead:
      "Ppalli ppalli. Korean for “hurry, hurry.”",
    storyBody:
      "It's the phrase that rebuilt a nation on speed and heart — the mindset behind Korea's famous hospitality, the reason food arrives hot, fast, and full of care. We didn't borrow the name. We cook by it. Every single order.",
    dishesKicker: "Signature dishes",
    dishesTitle: "The ones people come back for.",
    dishesLead:
      "Every dish on this page is named in our reviews — the food regulars order by heart.",
    menuCta: "View Full Menu",
    dishes: [
      {
        img: bibimbapImg,
        name: "Bibimbap",
        ko: "비빔밥",
        desc: "A sizzling stone bowl with beef, vegetables, and a fried egg — mix it all together and dig in.",
      },
      {
        img: seafoodSoupImg,
        name: "Mixed Seafood Soup",
        ko: "해물탕",
        desc: "Spicy, fragrant broth loaded with fresh seafood and greens — the one Suraya called the best meal of the night.",
      },
      {
        img: gyozaImg,
        name: "Yaki Gyoza",
        ko: "야키교자",
        desc: "Pan-fried dumplings with a crisp bottom and juicy filling, served with fresh slaw.",
      },
      {
        img: kimbapImg,
        name: "Kimbap",
        ko: "김밥",
        desc: "Korean seaweed rice rolls packed with colorful fillings — perfect for sharing or takeaway.",
      },
      {
        img: noodlesImg,
        name: "Stir Fry Chicken Noodles",
        ko: "볶음면",
        desc: "Wok-tossed noodles with chicken, peppers, and a savory spiced sauce — no shortcuts.",
      },
      {
        img: sweetSourImg,
        name: "Sweet & Sour Chicken",
        ko: "탕수육",
        desc: "Crispy chicken in a tangy glaze with peppers — a crowd-pleaser every time.",
      },
    ],
    ownersKicker: "Meet the owners",
    ownersTitle: "The two people who welcome you also cook your food.",
    ownersBody:
      "No middle managers. No shift cooks who've never met a regular. The same two hands that greet you at the door plate your bulgogi and stir your stew. That's why the food tastes like someone cared — because someone did.",
    uspTitle: "Why people keep coming back.",
    usps: [
      {
        n: "01",
        t: "Cooked by the owners, every time",
        d: "The same two people who welcome you also cook and serve your food.",
      },
      {
        n: "02",
        t: "Even skeptics become regulars",
        d: "Most first-timers say they'd never liked Korean food until this place.",
      },
      {
        n: "03",
        t: "Fast without cutting corners",
        d: "빨리빨리 means quick, not rushed. Ready for Iftar, ready for takeout, ready when you are.",
      },
      {
        n: "04",
        t: "Authentic enough for Korean guests",
        d: "Reviewed and loved by Korean diners, not just curious newcomers.",
      },
      {
        n: "05",
        t: "A genuine neighborhood favorite",
        d: "Regulars in the same building order week after week.",
      },
    ],
    testimonialsKicker: "What regulars say",
    testimonials: [
      {
        q: "I'd never liked Korean food before this place. Now I'm a regular.",
        a: "Heba M.",
        role: "Local Guide",
      },
      {
        q: "The owners cook and serve you themselves. Best food, best people — they deserve all the success.",
        a: "Ahmed M.S.",
        role: "Google review",
      },
      {
        q: "I live in the same building and still order constantly. The food is always flawless.",
        a: "Hazem K.",
        role: "Local Guide",
      },
      {
        q: "Found it when everywhere else was full. Turned out to be the best meal of the night — especially the seafood soup.",
        a: "Suraya S.",
        role: "Google review",
      },
      {
        q: "Great portions, genuinely authentic Korean taste. Loved it.",
        a: "Alaa K.",
        role: "Local Guide",
      },
    ],
    visitKicker: "Visit us",
    visitTitle: "Come sit down. We're right here.",
    addressLabel: "Address",
    address: ADDRESS_EN,
    hoursLabel: "Hours",
    hours: "12:00 PM – 11:00 PM, daily",
    phoneLabel: "Phone / WhatsApp",
    footerNote: "Owner-run Korean kitchen. Made with 빨리빨리.",
  },
  ar: {
    dir: "rtl" as const,
    nav: { story: "الاسم", dishes: "الأطباق", owners: "الأصحاب", visit: "زورونا" },
    orderCta: "اطلب دليفري",
    reserveCta: "احجز طاولة",
    langSwitch: "English",
    heroKicker: "빨리빨리 · المعادي، القاهرة",
    heroTitle1: "بسرعة، بسرعة.",
    heroTitle2: "مش بس اسمنا —",
    heroTitle3: "ده أسلوبنا في الطبخ.",
    heroSub:
      "أكل كوري بتطبخه إيدين أصحاب المطعم بنفسهم. بيبيمباب، جيوزا، شوربة المأكولات البحرية — جاهز لما تكون جاهز.",
    trust1: "٤٫٥ نجمة من أكتر من ١٦٠٠ طلب",
    trust2: "الأصحاب هم اللي بيطبخوا ويقدّموا",
    trust3: "المطبخ الكوري المفضل في المعادي",
    storyKicker: "الاسم، ببساطة",
    storyTitle: "빨리빨리",
    storyLead: "بالي بالي. بالكوري يعني «بسرعة، بسرعة».",
    storyBody:
      "الجملة اللي بنت كوريا كلها على السرعة والقلب — روح الضيافة الكورية، السبب إن الأكل بيوصلك سخن، سريع، ومصنوع بحب. مش اسم اتحطلنا. ده أسلوبنا في كل طلب.",
    dishesKicker: "أطباقنا المميزة",
    dishesTitle: "الأطباق اللي الناس بترجعلها.",
    dishesLead: "كل طبق هنا اتذكر في ريفيوهاتنا — الأكل اللي زباينا الدايمين بيطلبوه من غير قايمة.",
    menuCta: "شوف القايمة كاملة",
    dishes: [
      {
        img: bibimbapImg,
        name: "بيبيمباب",
        ko: "비빔밥",
        desc: "طبق أرز في وعاء حجري ساخن مع لحم وخضار وبيضة — اخلطه كله واستمتع.",
      },
      {
        img: seafoodSoupImg,
        name: "شوربة المأكولات البحرية",
        ko: "해물탕",
        desc: "مرق حار وعطري مليان مأكولات بحرية طازة وخضار — اللي سُريا قالت إنها أحسن أكلة في الليلة.",
      },
      {
        img: gyozaImg,
        name: "ياكي جيوزا",
        ko: "야키교자",
        desc: "زلابية مقلية بقاعدة مقرمشة وحشوة عصيرة، مع سلطة طازة.",
      },
      {
        img: kimbapImg,
        name: "كيمباب",
        ko: "김밥",
        desc: "لفائف أرز كورية بالأعشاب البحرية وحشوات ملونة — مثالية للمشاركة أو التيك أواي.",
      },
      {
        img: noodlesImg,
        name: "نودلز دجاج مقلي",
        ko: "볶음면",
        desc: "نودلز مقلي في المقلاة مع دجاج وفلفل وصلصة متبلة لذيذة.",
      },
      {
        img: sweetSourImg,
        name: "دجاج حلو وحامض",
        ko: "탕수육",
        desc: "دجاج مقرمش بصلصة حلوة وحامضة مع فلفل — محبوب عند الجميع.",
      },
    ],
    ownersKicker: "اتعرّف على الأصحاب",
    ownersTitle: "نفس اللي بيرحّبوا بيك، هم اللي بيطبخوا أكلك.",
    ownersBody:
      "مفيش مدراء ولا شيفات مش عارفين الزباين. نفس الإيدين اللي بتقابلك عند الباب هي اللي بتحطلك البولجوجي وبتحرّك الشوربة. عشان كده الأكل بيبقى ليه طعم إن حد اهتم — لأن فعلًا حد اهتم.",
    uspTitle: "ليه الناس بترجعلنا؟",
    usps: [
      { n: "٠١", t: "الأصحاب بيطبخوا كل مرة", d: "نفس الاتنين اللي بيرحّبوا بيك هم اللي بيطبخوا ويقدّموا." },
      { n: "٠٢", t: "حتى اللي مش بيحبوا الأكل الكوري بيحبونا", d: "أغلب اللي بيجربونا لأول مرة بيقولوا إنهم ما كانوش بيحبوا الأكل الكوري قبل كده." },
      { n: "٠٣", t: "بسرعة، من غير أي تنازل", d: "빨리빨리 معناها سريع، مش مستعجل. جاهزين للفطار، جاهزين للتيك أواي، جاهزين لما تكون جاهز." },
      { n: "٠٤", t: "أصلي حتى للزبائن الكوريين", d: "بيتقيّم ويتحب من الزبائن الكوريين نفسهم." },
      { n: "٠٥", t: "من المطاعم المفضلة في الحي", d: "زباين ساكنين في نفس العمارة بيطلبوا كل أسبوع." },
    ],
    testimonialsKicker: "الزباين بيقولوا",
    testimonials: [
      { q: "ما كنتش بحب الأكل الكوري قبل المكان ده. دلوقتي أنا من الزباين الدايمين.", a: "هبة م.", role: "Local Guide" },
      { q: "الأصحاب بيطبخوا ويقدّموا بنفسهم. أحسن أكل، أحسن ناس — يستاهلوا كل خير.", a: "أحمد م.س.", role: "ريفيو جوجل" },
      { q: "ساكن في نفس العمارة وبطلب باستمرار. الأكل دايمًا ممتاز.", a: "حازم ك.", role: "Local Guide" },
      { q: "لقيته لما كل حاجة كانت مليانة. طلع أحسن أكلة في الليلة — خصوصًا شوربة المأكولات البحرية.", a: "سُريا س.", role: "ريفيو جوجل" },
      { q: "بورشن كبير، وطعم كوري أصلي فعلًا. حبيته جدًا.", a: "علاء ك.", role: "Local Guide" },
    ],
    visitKicker: "زورونا",
    visitTitle: "تعالى اقعد معانا. إحنا هنا.",
    addressLabel: "العنوان",
    address: ADDRESS_AR,
    hoursLabel: "المواعيد",
    hours: "من الساعة 12:00 ظهرًا إلى الساعة 11:00 مساءً يوميًا",
    phoneLabel: "تليفون / واتساب",
    footerNote: "مطبخ كوري بيديره أصحابه. مصنوع بروح 빨리빨리.",
  },
};

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const t = T[lang];
  const isRtl = t.dir === "rtl";

  useEffect(() => {
    document.documentElement.setAttribute("dir", t.dir);
    document.documentElement.setAttribute("lang", lang);
  }, [lang, t.dir]);

  useReveal();

  return (
    <div className="min-h-screen bg-[color:var(--color-rice-bone)] text-[color:var(--color-ink)]">
      <Nav lang={lang} setLang={setLang} t={t} />
      <Hero t={t} isRtl={isRtl} />
      <TrustBar t={t} />
      <StorySection t={t} />
      <DishesSection t={t} />
      <OwnersSection t={t} />
      <UspSection t={t} />
      <Testimonials t={t} isRtl={isRtl} />
      <VisitSection t={t} />
      <Footer t={t} />
      <StickyBar t={t} isRtl={isRtl} />
    </div>
  );
}

function Nav({ lang, setLang, t }: { lang: Lang; setLang: (l: Lang) => void; t: typeof T.en }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--color-char-black)]/85 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="font-display text-xl font-extrabold text-[color:var(--color-warm-white)]">
          <span className="text-[color:var(--color-ember-amber)]">빨리</span>Ppalli
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {(["story", "dishes", "owners", "visit"] as const).map((k) => (
            <a
              key={k}
              href={`#${k}`}
              className="text-sm font-medium text-[color:var(--color-warm-white)]/80 transition hover:text-[color:var(--color-ember-amber)]"
            >
              {t.nav[k]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="rounded-full border border-[color:var(--color-warm-white)]/25 px-3 py-1.5 text-xs font-medium text-[color:var(--color-warm-white)] transition hover:border-[color:var(--color-ember-amber)] hover:text-[color:var(--color-ember-amber)]"
          >
            {t.langSwitch}
          </button>
          <a
            href={TALABAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[color:var(--color-ember-amber)] px-4 py-2 text-xs font-semibold text-[color:var(--color-char-black)] transition hover:bg-[color:var(--color-ember-amber-glow)] sm:inline-block"
          >
            {t.orderCta}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ t, isRtl }: { t: typeof T.en; isRtl: boolean }) {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-[color:var(--color-char-black)]">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sizzling bibimbap in a hot stone bowl with beef, vegetables, and a fried egg"
          className="h-full w-full animate-slow-zoom object-cover opacity-70"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-char-black)]/60 via-[color:var(--color-char-black)]/40 to-[color:var(--color-char-black)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-char-black)]/80 via-transparent to-transparent" />
      </div>

      {/* Steam wisps */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-full -translate-x-1/2">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="animate-steam absolute bottom-0 h-32 w-32 rounded-full bg-white/10 blur-2xl"
            style={{
              left: `${15 + i * 17}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${5 + i * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Ember glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 animate-flicker rounded-full bg-[color:var(--color-ember-amber)]/25 blur-[120px]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-32 sm:px-8 sm:pb-28 md:justify-center md:pb-20">
        <div className={`max-w-3xl ${isRtl ? "text-right" : "text-left"}`}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-ember-amber)]/40 bg-[color:var(--color-char-black)]/40 px-4 py-1.5 text-xs font-medium tracking-wider text-[color:var(--color-ember-amber)] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-flicker rounded-full bg-[color:var(--color-ember-amber)]" />
            {t.heroKicker}
          </div>
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] text-[color:var(--color-warm-white)] sm:text-7xl md:text-[5.5rem]">
            <span className="block text-[color:var(--color-ember-amber)]">빨리빨리.</span>
            <span className="block">{t.heroTitle1}</span>
            <span className="block text-[color:var(--color-warm-white)]/70">{t.heroTitle2}</span>
            <span className="block">{t.heroTitle3}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-warm-white)]/80 sm:text-lg">
            {t.heroSub}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={TALABAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ember-glow group inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ember-amber)] px-7 py-4 text-sm font-semibold text-[color:var(--color-char-black)] transition hover:bg-[color:var(--color-ember-amber-glow)]"
            >
              {t.orderCta}
              <span className={`transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180" : ""}`}>→</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-warm-white)]/30 px-7 py-4 text-sm font-semibold text-[color:var(--color-warm-white)] transition hover:border-[color:var(--color-ember-amber)] hover:text-[color:var(--color-ember-amber)]"
            >
              {t.reserveCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar({ t }: { t: typeof T.en }) {
  return (
    <section className="border-y border-[color:var(--color-ember-amber)]/20 bg-[color:var(--color-char-black)] py-6 text-[color:var(--color-warm-white)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 text-center text-sm font-medium sm:grid-cols-3 sm:px-8">
        <div className="flex items-center justify-center gap-2">
          <span className="text-[color:var(--color-ember-amber)]">★</span>
          {t.trust1}
        </div>
        <div className="flex items-center justify-center gap-2 border-y border-[color:var(--color-warm-white)]/10 py-3 sm:border-x sm:border-y-0 sm:py-0">
          {t.trust2}
        </div>
        <div className="flex items-center justify-center gap-2">{t.trust3}</div>
      </div>
    </section>
  );
}

function StorySection({ t }: { t: typeof T.en }) {
  return (
    <section id="story" className="relative overflow-hidden bg-[color:var(--color-char-black)] py-24 sm:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-flicker rounded-full bg-[color:var(--color-ember-amber)]/8 blur-[140px]" />
      </div>
      <div className="reveal relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--color-ember-amber)]">
          {t.storyKicker}
        </p>
        <h2 className="font-display text-7xl font-extrabold text-[color:var(--color-warm-white)] sm:text-9xl">
          {t.storyTitle}
        </h2>
        <p className="mt-8 font-display text-2xl text-[color:var(--color-ember-amber)] sm:text-3xl">
          {t.storyLead}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--color-warm-white)]/75 sm:text-lg">
          {t.storyBody}
        </p>
      </div>
    </section>
  );
}

function DishesSection({ t }: { t: typeof T.en }) {
  return (
    <section id="dishes" className="bg-[color:var(--color-rice-bone)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--color-soju-green)]">
            {t.dishesKicker}
          </p>
          <h2 className="font-display text-4xl font-extrabold leading-tight text-[color:var(--color-ink)] sm:text-6xl">
            {t.dishesTitle}
          </h2>
          <p className="mt-5 text-base text-[color:var(--color-ink)]/70 sm:text-lg">{t.dishesLead}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.dishes.map((d: any, i: number) => (
            <article
              key={d.name}
              className={`reveal group relative overflow-hidden rounded-2xl bg-[color:var(--color-char-black)] ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[4/5] lg:aspect-auto lg:h-full" : "aspect-[4/5]"}`}>
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-char-black)] via-[color:var(--color-char-black)]/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <div className="mb-2 font-display text-sm text-[color:var(--color-ember-amber)]">{d.ko}</div>
                <h3 className="font-display text-2xl font-bold text-[color:var(--color-warm-white)] sm:text-3xl">
                  {d.name}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--color-warm-white)]/75">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href="https://drive.google.com/file/d/1EsN1fvzinrR1pm851KazNZwZP2bnEIWG/view?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-soju-green)]/40 bg-[color:var(--color-soju-green)]/10 px-7 py-3 text-sm font-semibold text-[color:var(--color-soju-green)] transition-colors hover:bg-[color:var(--color-soju-green)]/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0l-4-4m4 4l4-4M6 20h12" />
            </svg>
            {t.menuCta}
          </a>
        </div>
      </div>
    </section>
  );
}

function OwnersSection({ t }: { t: typeof T.en }) {
  return (
    <section id="owners" className="bg-[color:var(--color-soju-green)] py-24 text-[color:var(--color-warm-white)] sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="reveal relative overflow-hidden rounded-2xl">
          <img
            src={gyozaImg}
            alt="Owners presenting freshly pan-fried yaki gyoza"
            loading="lazy"
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>
        <div className="reveal">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--color-ember-amber)]">
            {t.ownersKicker}
          </p>
          <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            {t.ownersTitle}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--color-warm-white)]/85 sm:text-lg">
            {t.ownersBody}
          </p>
        </div>
      </div>
    </section>
  );
}

function UspSection({ t }: { t: typeof T.en }) {
  return (
    <section className="bg-[color:var(--color-rice-bone)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="reveal mb-14 max-w-2xl font-display text-4xl font-extrabold leading-tight text-[color:var(--color-ink)] sm:text-5xl">
          {t.uspTitle}
        </h2>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-[color:var(--color-ink)]/10 sm:grid-cols-2 lg:grid-cols-3">
          {t.usps.map((u: any, i: number) => (
            <div
              key={u.n}
              className="reveal bg-[color:var(--color-rice-bone)] p-8 transition hover:bg-[color:var(--color-warm-white)] sm:p-10"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="font-display text-sm text-[color:var(--color-ember-amber)]">{u.n}</div>
              <h3 className="mt-4 font-display text-xl font-bold text-[color:var(--color-ink)] sm:text-2xl">
                {u.t}
              </h3>
              <p className="mt-3 text-sm text-[color:var(--color-ink)]/70 sm:text-base">{u.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ t, isRtl }: { t: typeof T.en; isRtl: boolean }) {
  return (
    <section className="bg-[color:var(--color-char-black)] py-24 text-[color:var(--color-warm-white)] sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="reveal mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--color-ember-amber)]">
          {t.testimonialsKicker}
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.testimonials.map((r: any, i: number) => (
            <figure
              key={i}
              className="reveal rounded-2xl border border-[color:var(--color-warm-white)]/10 bg-[color:var(--color-char-black-2)] p-7"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className={`font-display text-4xl leading-none text-[color:var(--color-ember-amber)] ${isRtl ? "text-right" : ""}`}>
                “
              </div>
              <blockquote className="mt-2 text-base leading-relaxed text-[color:var(--color-warm-white)]/90">
                {r.q}
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <div className="font-semibold text-[color:var(--color-warm-white)]">{r.a}</div>
                <div className="text-[color:var(--color-warm-white)]/50">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisitSection({ t }: { t: typeof T.en }) {
  return (
    <section id="visit" className="bg-[color:var(--color-rice-bone)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--color-soju-green)]">
            {t.visitKicker}
          </p>
          <h2 className="font-display text-4xl font-extrabold leading-tight text-[color:var(--color-ink)] sm:text-6xl">
            {t.visitTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="reveal space-y-8 lg:col-span-2">
            <InfoRow label={t.addressLabel} value={t.address} />
            <InfoRow label={t.hoursLabel} value={t.hours} />
            <InfoRow label={t.phoneLabel} value={PHONE} href={`tel:+201000353389`} />
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={TALABAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ember-glow rounded-full bg-[color:var(--color-ember-amber)] px-6 py-3 text-sm font-semibold text-[color:var(--color-char-black)] transition hover:bg-[color:var(--color-ember-amber-glow)]"
              >
                {t.orderCta}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[color:var(--color-soju-green)] px-6 py-3 text-sm font-semibold text-[color:var(--color-soju-green)] transition hover:bg-[color:var(--color-soju-green)] hover:text-[color:var(--color-warm-white)]"
              >
                {t.reserveCta}
              </a>
            </div>
          </div>
          <div className="reveal overflow-hidden rounded-2xl border border-[color:var(--color-ink)]/10 lg:col-span-3">
            <iframe
              title="Ppalli Ppalli location"
              src={MAP_EMBED}
              width="100%"
              height="440"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, display: "block", filter: "grayscale(0.15) contrast(1.05)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <>
      <div className="text-xs font-medium uppercase tracking-widest text-[color:var(--color-soju-green)]">
        {label}
      </div>
      <div className="mt-2 font-display text-xl font-bold text-[color:var(--color-ink)] sm:text-2xl">
        {value}
      </div>
    </>
  );
  return (
    <div className="border-l-2 border-[color:var(--color-ember-amber)] pl-5">
      {href ? <a href={href} className="block hover:opacity-80">{content}</a> : content}
    </div>
  );
}

function Footer({ t }: { t: typeof T.en }) {
  return (
    <footer className="border-t border-[color:var(--color-warm-white)]/10 bg-[color:var(--color-char-black)] py-10 text-sm text-[color:var(--color-warm-white)]/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <div className="font-display text-lg text-[color:var(--color-warm-white)]">
          <span className="text-[color:var(--color-ember-amber)]">빨리빨리</span> · Ppalli Ppalli
        </div>
        <div className="text-center">{t.footerNote}</div>
        <div>© {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}

function StickyBar({ t, isRtl }: { t: typeof T.en; isRtl: boolean }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[color:var(--color-ember-amber)]/30 bg-[color:var(--color-char-black)]/95 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={TALABAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[color:var(--color-ember-amber)] py-3 text-center text-sm font-semibold text-[color:var(--color-char-black)]"
        >
          {t.orderCta}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[color:var(--color-warm-white)]/30 py-3 text-center text-sm font-semibold text-[color:var(--color-warm-white)]"
        >
          {t.reserveCta}
        </a>
      </div>
    </div>
  );
}

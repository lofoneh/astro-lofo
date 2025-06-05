import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, r as renderTemplate, f as renderScript, g as renderComponent, h as renderSlot, i as renderHead } from '../chunks/astro/server_CqXWJe0h.mjs';
import 'kleur/colors';
import 'clsx';
import '../chunks/index_CCxZAn8N.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_C3YyeP9w.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const SITE_CONFIG = {
  title: "Jeffery Lofoneh Asamani — Software Engineer",
  author: "Jeffery Lofoneh Asamani",
  description: "Software Engineer based in Kumasi, Ghana. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Resume", href: "/resume.pdf", isExternal: true }
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/lofoneh" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/jeffery-asamani/" },
    { text: "Github", href: "https://github.com/lofoneh" }
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app"
};
const SITE_CONTENT = {
  hero: {
    name: "Jeffery Asamani",
    specialty: "Software Engineer",
    summary: "Software engineer based in Kumasi, Ghana. I specialize in web application development, designing and building backend systems and DevOps practices.",
    email: "jefferyasamani7@gmail.com"
  },
  experience: [
    {
      company: "Adaptive Computer Solutions",
      position: "DevOps Engineer",
      startDate: "Aug 2024",
      endDate: "Present",
      summary: [
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention."
      ]
    },
    {
      company: "Adaptive Computer Solutions",
      position: "DevOps Engineer - Intern",
      startDate: "Feb 2024",
      endDate: "Aug 2024",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts."
      ]
    },
    {
      company: "Self-Employed",
      position: "Freelance Developer",
      startDate: "Nov 2023",
      endDate: "Mar 2024",
      summary: "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%."
    }
  ],
  skills: [
    /*{
      name: "Android Development",
      icon: "/android.svg",
      description:
        "Proficient in building Android applications using Kotlin and Java, with a focus on performance and user experience.",
    },
    {
      name: "iOS Development",
      icon: "/apple.svg",
      description:
        "Experienced in developing iOS applications using Swift, ensuring high performance and seamless integration with Apple services.",
    },*/
    {
      name: "Web Development",
      icon: "/web-development.svg",
      description: "Skilled in front-end technologies like React, Next.js, and back-end frameworks such as Node.js and Django."
    },
    {
      name: "DevOps Practices",
      icon: "/devops.svg",
      description: "Knowledgeable in CI/CD pipelines, containerization with Docker, and cloud services like AWS and Azure."
    }
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png"
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png"
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png"
    }
  ],
  about: {
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg"
  }
};

const $$Astro$8 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Hero;
  const { name, specialty, summary, email } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 md:py-32" id="#hero"> <h1 class="mb-1.5 font-serif text-7xl font-bold tracking-tightest text-white sm:text-8xl md:mb-0 md:text-9xl"> ${name} </h1> <p class="mb-9 font-serif text-4xl leading-[46px] font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl"> ${specialty} </p> <p class="mb-16 text-base font-normal text-neutral md:text-lg"> ${summary} </p> <a class="inline-block rounded-full bg-primary px-8 py-5 text-sm leading-5 font-medium text-[#fff]"${addAttribute(`mailto:${email}`, "href")}>Get in Touch</a> </section>`;
}, "C:/Users/jeffe/Downloads/projects/astro-lofo/src/components/Hero.astro", void 0);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6S500.538 128 486.4 128H153.6c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128H25.6C11.462 230.4 0 241.863 0 256c0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6H256c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z" fill="currentColor" opacity="1" data-original="#000000"></path></g></svg>`;
}, "C:/Users/jeffe/Downloads/projects/astro-lofo/src/icons/Menu.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" type="button" class="rounded-lg p-2.5 text-sm text-neutral transition-colors hover:bg-neutral/10 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Toggle theme"> <!-- Sun icon for light mode --> <svg id="theme-toggle-light-icon" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path> </svg> <!-- Moon icon for dark mode --> <svg id="theme-toggle-dark-icon" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> </button> ${renderScript($$result, "C:/Users/jeffe/Downloads/projects/astro-lofo/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jeffe/Downloads/projects/astro-lofo/src/components/ThemeToggle.astro", void 0);

const $$Astro$7 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  const { siteLogo, navLinks } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 mx-auto flex max-w-5xl animate-slide-in justify-between bg-black px-5 py-6" data-astro-cid-3ef6ksr2> <a href="/" aria-label="Home link" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-full", "src": siteLogo, "width": "45", "height": "45", "alt": "website logo", "data-astro-cid-3ef6ksr2": true })} </a> <div class="flex items-center gap-4" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} <button type="button" id="menu-button" class="px-1.5 text-neutral sm:hidden" aria-expanded="false" aria-controls="main-menu" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Menu", $$Menu, { "data-astro-cid-3ef6ksr2": true })} </button> <nav class="absolute top-20 right-5 hidden rounded-xl border border-neutral/40 bg-black px-4 py-5 text-neutral sm:static sm:block sm:border-0 sm:bg-transparent sm:p-0" id="main-menu" data-astro-cid-3ef6ksr2> <ul class="gap-2 sm:flex" data-astro-cid-3ef6ksr2> ${navLinks.map((link) => renderTemplate`<li class="relative" data-astro-cid-3ef6ksr2> <a${addAttribute(`nav-item relative block p-2 text-sm font-medium transition-all duration-500 after:absolute after:bottom-0 after:left-2/4 after:h-2 after:w-1 after:-translate-x-2/4 after:text-primary after:opacity-0 after:content-['\u2022'] hover:text-white`, "class")}${addAttribute(link.href, "href")} data-astro-cid-3ef6ksr2> ${link.text} </a> </li>`)} </ul> </nav> </div> </header> ${renderScript($$result, "C:/Users/jeffe/Downloads/projects/astro-lofo/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/jeffe/Downloads/projects/astro-lofo/src/components/Header.astro", void 0);

const $$Astro$6 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Footer;
  const { author, socialLinks } = Astro2.props;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="w-full border-t border-neutral/20 px-5 pt-5 pb-8 text-center text-white"> <ul class="mb-5 flex flex-wrap justify-center gap-x-5 text-xs"> ${socialLinks.map(({ text, href }) => renderTemplate`<li> <a${addAttribute(href, "href")} target="_blank" class="inline-block px-4 py-3 after:relative after:bottom-[-4px] after:content-[url(/external.svg)] hover:text-primary"> ${text} </a> </li>`)} </ul> <p class="text-xs"> ${author} © ${currentYear}. All rights reserved.
</p> </footer>`;
}, "C:/Users/jeffe/Downloads/projects/astro-lofo/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    siteLogo,
    navLinks,
    lang,
    author,
    socialLinks,
    socialImage,
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site).href
  } = SITE_CONFIG;
  const ogImgUrl = canonicalURL + socialImage;
  return renderTemplate(_a || (_a = __template(["<html", ' class="scroll-pt-16 scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="author"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', "><!-- Prevent flash of unstyled content (FOUC) --><script>\n      // Theme initialization - must run before page renders\n      (function() {\n        function getStoredTheme() {\n          if (typeof localStorage !== 'undefined') {\n            return localStorage.getItem('theme');\n          }\n          return null;\n        }\n        \n        function getPreferredTheme() {\n          const storedTheme = getStoredTheme();\n          if (storedTheme) {\n            return storedTheme;\n          }\n          \n          // Default to dark theme (matching your original design)\n          return 'dark';\n        }\n        \n        const theme = getPreferredTheme();\n        if (theme === 'dark') {\n          document.documentElement.classList.add('dark');\n        } else {\n          document.documentElement.classList.remove('dark');\n        }\n      })();\n    <\/script>", '</head> <body class="bg-black font-sans"> ', ' <main class="mx-auto max-w-3xl px-5"> ', " </main> ", " </body></html>"])), addAttribute(lang, "lang"), addAttribute(description, "content"), addAttribute(author, "content"), addAttribute(Astro2.generator, "content"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "content"), addAttribute(ogImgUrl, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImgUrl, "content"), renderHead(), renderComponent($$result, "Header", $$Header, { "siteLogo": siteLogo, "navLinks": navLinks }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "author": author, "socialLinks": socialLinks }));
}, "C:/Users/jeffe/Downloads/projects/astro-lofo/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Section;
  const { text, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(href, "id")} class="py-24"> <h2 class="mb-14 font-serif text-4xl font-bold tracking-tighter text-white md:text-5xl"> ${text} </h2> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/jeffe/Downloads/projects/astro-lofo/src/components/Section.astro", void 0);

const $$Astro$3 = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Skills;
  const { skills } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "Skills", "href": "skills" }, { "default": ($$result2) => renderTemplate`${skills.map(({ name, icon, description }) => renderTemplate`${maybeRenderHead()}<div class="mb-10"> <h3 class="mb-1.5 font-serif text-2xl font-semibold text-white"> ${name} </h3> <div class="flex items-center gap-4 pb-5"> <img${addAttribute(icon, "src")}${addAttribute(`${name} icon`, "alt")} class="w-8 h-8"> <p class="text-base text-neutral">${description}</p> </div> </div>`)}` })}`;
}, "C:/Users/jeffe/Downloads/projects/astro-lofo/src/components/Skills.astro", void 0);

const $$Astro$2 = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Experience;
  const { experience } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "Work Experience", "href": "experience" }, { "default": ($$result2) => renderTemplate`${experience.map(({ company, position, startDate, endDate, summary }) => renderTemplate`${maybeRenderHead()}<div class="mb-10"> <h3 class="mb-1.5 font-serif text-2xl font-semibold text-white"> ${company} </h3> <div class="flex flex-col items-start pb-5"> <h4 class="mb-0.5 font-serif text-2xl font-medium text-primary"> ${position} </h4> <span class="pb-[2px] text-sm text-white/70"> ${startDate} — ${endDate} </span> </div> ${Array.isArray(summary) ? renderTemplate`<ul class="list-none"> ${summary.map((log) => renderTemplate`<li class="relative mb-3 pl-8 text-base text-neutral before:absolute before:top-1 before:left-0 before:content-[url(/check.svg)]"> ${log} </li>`)} </ul>` : renderTemplate`<p class="text-base text-neutral">${summary}</p>`} </div>`)}` })}`;
}, "C:/Users/jeffe/Downloads/projects/astro-lofo/src/components/Experience.astro", void 0);

const $$Astro$1 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  const { projects } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "Featured Projects", "href": "projects" }, { "default": ($$result2) => renderTemplate`${projects.map(({ name, summary, image, linkPreview, linkSource }, index) => {
    const top = 98 + index * 40;
    return renderTemplate`${maybeRenderHead()}<div${addAttribute(`top: ${top}px;`, "style")} class="sticky mb-12 rounded-2xl border border-neutral/20 bg-black"> <div class="bg-difu relative z-[1] grid h-[580px] w-full grid-rows-2 rounded-2xl bg-[#1c232d]/85 before:absolute before:inset-0 before:z-[-1] before:rounded-2xl before:bg-[url(/raja.png)] before:bg-[length:128px] before:bg-repeat before:opacity-[5%] before:content-[''] sm:grid-cols-2 sm:grid-rows-1 md:h-96"> <div class="px-6 pt-12"> <h3 class="mb-5 font-serif text-3xl font-medium text-primary"> ${name} </h3> <p class="text-base text-neutral">${summary}</p> <div class="flex gap-5 pt-10 text-white"> <a${addAttribute(linkSource, "href")} target="_blank" class="after:relative after:bottom-[-5px] after:content-[url(/external.svg)] hover:underline">
Source
</a> <a${addAttribute(linkPreview, "href")} target="_blank" class="after:relative after:bottom-[-5px] after:content-[url(/external.svg)] hover:underline">
Read more
</a> </div> </div> <div class="flex items-end justify-end overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "class": "h-full w-[95%] rounded-ss-xl rounded-ee-2xl object-none object-left-top sm:h-[85%] sm:w-full", "src": image, "alt": name, "width": "736", "height": "483" })} </div> </div> </div>`;
  })}` })}`;
}, "C:/Users/jeffe/Downloads/projects/astro-lofo/src/components/Projects.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { description, image, name } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "About Me", "href": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center gap-12 md:flex-row md:gap-8"> <p class="w-auto text-base text-neutral md:pr-5">${description}</p> <div class="h-80 w-64 flex-shrink-0 rotate-[5deg] bg-white p-4 md:rotate-[7deg]"> ${renderComponent($$result2, "Image", $$Image, { "class": "object-cover", "src": image, "width": "260", "height": "260", "alt": name })} </div> </div> ` })}`;
}, "C:/Users/jeffe/Downloads/projects/astro-lofo/src/components/About.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { ...SITE_CONTENT.hero })} ${renderComponent($$result2, "Skills", $$Skills, { "skills": SITE_CONTENT.skills })} ${renderComponent($$result2, "Experience", $$Experience, { "experience": SITE_CONTENT.experience })} ${renderComponent($$result2, "Projects", $$Projects, { "projects": SITE_CONTENT.projects })} ${renderComponent($$result2, "About", $$About, { ...SITE_CONTENT.about, "name": SITE_CONTENT.hero.name })} ` })}`;
}, "C:/Users/jeffe/Downloads/projects/astro-lofo/src/pages/index.astro", void 0);

const $$file = "C:/Users/jeffe/Downloads/projects/astro-lofo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_CqXWJe0h.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DhZLB8Mt.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/jeffe/Downloads/projects/astro-lofo/","cacheDir":"file:///C:/Users/jeffe/Downloads/projects/astro-lofo/node_modules/.astro/","outDir":"file:///C:/Users/jeffe/Downloads/projects/astro-lofo/dist/","srcDir":"file:///C:/Users/jeffe/Downloads/projects/astro-lofo/src/","publicDir":"file:///C:/Users/jeffe/Downloads/projects/astro-lofo/public/","buildClientDir":"file:///C:/Users/jeffe/Downloads/projects/astro-lofo/dist/client/","buildServerDir":"file:///C:/Users/jeffe/Downloads/projects/astro-lofo/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.8.1_@types+node@22.15.29_jiti@2.4.2_lightningcss@1.29.2_rollup@4.39.0_typescript@5.6.2_yaml@2.5.1/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.DSriC3re.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/jeffe/Downloads/projects/astro-lofo/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.8.1_@types+node@22.15.29_jiti@2.4.2_lightningcss@1.29.2_rollup@4.39.0_typescript@5.6.2_yaml@2.5.1/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:/Users/jeffe/Downloads/projects/astro-lofo/node_modules/.pnpm/astro@5.8.1_@types+node@22.15.29_jiti@2.4.2_lightningcss@1.29.2_rollup@4.39.0_typescript@5.6.2_yaml@2.5.1/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_xIQ8v_OI.mjs","\u0000@astrojs-manifest":"manifest_BVYHAP5e.mjs","C:/Users/jeffe/Downloads/projects/astro-lofo/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BHULAeOy.js","C:/Users/jeffe/Downloads/projects/astro-lofo/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeToggle.astro_astro_type_script_index_0_lang.Bud_AhOc.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/jeffe/Downloads/projects/astro-lofo/src/components/Header.astro?astro&type=script&index=0&lang.ts","const o=document.querySelector(\"#menu-button\"),i=document.querySelector(\"#main-menu\"),s=document.querySelectorAll(\"#main-menu > ul > li > a\"),r=()=>{i?.classList.toggle(\"hidden\");const e=i?.classList.contains(\"hidden\");o?.setAttribute(\"aria-expanded\",`${!e}`)};o?.addEventListener(\"click\",r);s.forEach(e=>{e?.addEventListener(\"click\",r)});const n=new IntersectionObserver(e=>{e.forEach(c=>{c.isIntersecting&&s.forEach(t=>{t.getAttribute(\"href\")===`#${c.target.id}`?t.classList.add(\"text-white\",\"md:after:opacity-100\"):t.classList.remove(\"text-white\",\"md:after:opacity-100\")})})},{threshold:.5});document.querySelectorAll(\"section\").forEach(e=>{n.observe(e)});document.onvisibilitychange=()=>{document.visibilityState===\"hidden\"?n.disconnect():document.querySelectorAll(\"section\").forEach(e=>{n.observe(e)})};"],["C:/Users/jeffe/Downloads/projects/astro-lofo/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"theme-toggle\"),t=document.getElementById(\"theme-toggle-light-icon\"),n=document.getElementById(\"theme-toggle-dark-icon\"),c=()=>typeof localStorage<\"u\"?localStorage.getItem(\"theme\"):null,r=()=>{const e=c();return e||\"dark\"},d=e=>{e===\"dark\"?(document.documentElement.classList.add(\"dark\"),t?.classList.remove(\"hidden\"),n?.classList.add(\"hidden\")):(document.documentElement.classList.remove(\"dark\"),t?.classList.add(\"hidden\"),n?.classList.remove(\"hidden\")),typeof localStorage<\"u\"&&localStorage.setItem(\"theme\",e)},l=r();d(l);s?.addEventListener(\"click\",()=>{const o=document.documentElement.classList.contains(\"dark\")?\"light\":\"dark\";d(o)});"]],"assets":["/_astro/gabarito-latin-ext-wght-normal.C3dQQfBQ.woff2","/_astro/gabarito-latin-wght-normal.DfmSH0O8.woff2","/_astro/be-vietnam-pro-vietnamese-400-normal.zlEY3-7j.woff2","/_astro/be-vietnam-pro-latin-400-normal.b8ymZRaE.woff2","/_astro/be-vietnam-pro-latin-ext-400-normal.0slToPcK.woff2","/_astro/be-vietnam-pro-vietnamese-400-normal.BdPyuduI.woff","/_astro/be-vietnam-pro-latin-400-normal.yim3LC58.woff","/_astro/be-vietnam-pro-latin-ext-400-normal.CAV9EJEJ.woff","/_astro/index.DSriC3re.css","/alejandro-big.jpg","/alejandro-small.jpg","/check.svg","/clone-ig.png","/external.svg","/favicon.svg","/menu.svg","/raja.png","/shopify-clon.png","/spotifu.png","/web-development.svg","/zen-og.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"JqLtV4MemW2ow3Fy8G4lZdzXTwfjrqkKvmREP3Y/nGg="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

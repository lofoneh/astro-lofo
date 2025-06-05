import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_j59ILNgv.mjs';
import { manifest } from './manifest_BVYHAP5e.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.8.1_@types+node@22.15.29_jiti@2.4.2_lightningcss@1.29.2_rollup@4.39.0_typescript@5.6.2_yaml@2.5.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7f09a11c-2462-4b8f-885b-f5da9054bd0c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

import {
  createHotContext
} from "/build/_shared/chunk-ZNHMATV6.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1689457887000";
}
var meta = () => {
  return [{
    title: "New Remix App"
  }, {
    name: "description",
    content: "Welcome to Remix!"
  }];
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    style: {
      fontFamily: "system-ui, sans-serif",
      lineHeight: "1.8"
    },
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
      children: "Welcome to Remix"
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
          target: "_blank",
          href: "https://remix.run/tutorials/blog",
          rel: "noreferrer",
          children: "15m Quickstart Blog Tutorial"
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
          target: "_blank",
          href: "https://remix.run/tutorials/jokes",
          rel: "noreferrer",
          children: "Deep Dive Jokes App Tutorial"
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
          target: "_blank",
          href: "https://remix.run/docs",
          rel: "noreferrer",
          children: "Remix Docs"
        })
      })]
    })]
  });
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-NZFZBNQD.js.map

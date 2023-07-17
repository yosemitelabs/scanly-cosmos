import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZNHMATV6.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/cosmos.tsx
var import_react2 = __toESM(require_react());

// components/Card/Card.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Card = ({}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "i'm a card" }, void 0, false, {
    fileName: "components/Card/Card.tsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
};
Card.displayName = "Card";
var Card_default = Card;

// components/Card/Card.fixture.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var Card_fixture_default = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, {}, void 0, false, {
  fileName: "components/Card/Card.fixture.tsx",
  lineNumber: 3,
  columnNumber: 22
}, this);

// components/Header/Header.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var Header = () => {
  const [newValue, setNewValue] = import_react.default.useState("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "todos" }, void 0, false, {
      fileName: "components/Header/Header.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "input",
      {
        className: "new-todo",
        placeholder: "What needs to be done?",
        value: newValue,
        onChange: (e) => setNewValue(e.target.value)
      },
      void 0,
      false,
      {
        fileName: "components/Header/Header.tsx",
        lineNumber: 9,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "components/Header/Header.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
};
Header.displayName = "Header";
var Header_default = Header;

// components/Header/Header.fixture.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var Header_fixture_default = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "todoapp", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header_default, {}, void 0, false, {
  fileName: "components/Header/Header.fixture.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "components/Header/Header.fixture.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);

// app/cosmos.userdeps.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/cosmos.userdeps.js"
  );
  import.meta.hot.lastModified = "1689625180713.497";
}
var rendererConfig = {
  "port": 5e3
};
var fixtures = {
  "components/Card/Card.fixture.tsx": { module: { default: Card_fixture_default } },
  "components/Header/Header.fixture.tsx": { module: { default: Header_fixture_default } }
};
var decorators = {};

// app/routes/cosmos.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/cosmos.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/cosmos.tsx"
  );
  import.meta.hot.lastModified = "1689624559203.9302";
}
var shouldLoadCosmos = typeof window !== "undefined" && true;
function Cosmos() {
  _s();
  const [cosmosLoaded, setCosmosLoaded] = (0, import_react2.useState)(false);
  const loadRenderer = (0, import_react2.useCallback)(async () => {
    const {
      mountDomRenderer
    } = (await import("/build/_shared/dom-EZXZCIGC.js")).default;
    mountDomRenderer({
      decorators,
      fixtures,
      rendererConfig
    });
  }, []);
  (0, import_react2.useEffect)(() => {
    if (shouldLoadCosmos && !cosmosLoaded) {
      loadRenderer();
      setCosmosLoaded(true);
    }
  }, []);
  return null;
}
_s(Cosmos, "BwhbU7IHLhA1p11M3T0y5D8voEI=");
_c = Cosmos;
var _c;
$RefreshReg$(_c, "Cosmos");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Cosmos as default
};
//# sourceMappingURL=/build/routes/cosmos-V7XDUX6R.js.map

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"khPp1":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "45c88298f9a5cb92";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aIpi7":[function(require,module,exports) {
var _headerJs = require("../HEADER/Header.js");
var _statusJs = require("../STATUS/Status.js");
var _detailsJs = require("../DETAILS/details.js");
const app = document.getElementById("app");
const pages = [
    (0, _detailsJs.PersonalDetail),
    (0, _detailsJs.VehicleDetails),
    (0, _detailsJs.BankDetails),
    (0, _detailsJs.ClientDetails),
    (0, _detailsJs.Document)
];
let currentPageIndex = 0;
const statusElement = new (0, _statusJs.Status)();
function renderPage() {
    app.innerHTML = "";
    console.log("Rendering Page...");
    const pageContainer = document.createElement("div");
    const headerElement = new (0, _headerJs.RenderHeader)();
    pageContainer.innerHTML += headerElement.render();
    statusElement.setCurrentStep(currentPageIndex + 1);
    pageContainer.innerHTML += statusElement.render();
    const PageComponent = pages[currentPageIndex];
    const pageInstance = new PageComponent();
    pageContainer.innerHTML += pageInstance.render();
    app.appendChild(pageContainer);
    pageInstance.addEventListeners(nextPage);
}
function nextPage() {
    currentPageIndex++;
    if (currentPageIndex < pages.length) renderPage();
    else alert("You have completed all pages!");
}
renderPage();

},{"../HEADER/Header.js":"hE7Vp","../STATUS/Status.js":"kOwAI","../DETAILS/details.js":"dg4s7"}],"hE7Vp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RenderHeader", ()=>RenderHeader);
var _ellipse122XPng = require("../../ASSETS/IMAGES/ellipse-12@2x.png");
var _ellipse122XPngDefault = parcelHelpers.interopDefault(_ellipse122XPng);
var _path352XPng = require("../../ASSETS/IMAGES/path-35@2x.png");
var _path352XPngDefault = parcelHelpers.interopDefault(_path352XPng);
var _path362XPng = require("../../ASSETS/IMAGES/path-36@2x.png");
var _path362XPngDefault = parcelHelpers.interopDefault(_path362XPng);
var _path140552XPng = require("../../ASSETS/IMAGES/path-14055@2x.png");
var _path140552XPngDefault = parcelHelpers.interopDefault(_path140552XPng);
class RenderHeader {
    constructor(){
        this.HeaderTitle = "Driver Management";
        this.HeaderSubTitle = "Add New Driver";
        this.UserName = "Ezio Auditore";
        this.UserStatus = "Admin";
        this.updateDateTime();
        setInterval(()=>{
            this.updateDateTime();
            this.renderLive();
        }, 60000); // 60000 ms = 1 minute
    }
    updateDateTime() {
        const now = new Date();
        this.date = now.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric"
        });
        this.time = now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
    }
    render() {
        return `  
      <div class="container-2">
        <div class="left">
          <p style="color: #969292;">${this.HeaderTitle} / <b style="color: #000000;">${this.HeaderSubTitle}</b></p>
        </div>
        <div class="right">
          <p style="color: #969292;padding-right: 8px;" id="date-time">${this.date} | ${this.time}</p>
          <div class="icons">
            <img id="calender" src="${0, _path140552XPngDefault.default}" alt="" style="width: 17px;height: 16px;">
            <p class="path"></p>
            <img id="message" src="${0, _path362XPngDefault.default}" alt="" style="width: 17px;height: 15.9px; cursor: pointer;">
            <p class="path"></p>
            <img id="Notify" src="${0, _path352XPngDefault.default}" alt="" style="width: 14px;height: 16px; cursor: pointer;">
          </div>
          <div class="col">
            <p style="font-size: 16px;"><b>${this.UserName}</b></p>
            <p style="font-size: 12px;color: #969292;">${this.UserStatus}</p>
          </div>
          <img src="${0, _ellipse122XPngDefault.default}" alt="" style="height: 55px; padding: 5px;">
        </div>
        
        <!-- Message Window -->
        <div class="popup" id="messagePopup" style="display: none;">
          <p>Messages: No new messages.</p>
        </div>
        
        <!-- Notification Window -->
        <div class="popup" id="notifyPopup" style="display: none;">
          <p>Notifications: No new notifications.</p>
        </div>
      </div>
    `;
    }
    setupEventListeners() {
        const messageIcon = document.getElementById("message");
        const notifyIcon = document.getElementById("notify");
        const messagePopup = document.getElementById("messagePopup");
        const notifyPopup = document.getElementById("notifyPopup");
        // Toggle visibility of the message window
        messageIcon.addEventListener("click", ()=>{
            messagePopup.style.display = messagePopup.style.display === "none" ? "block" : "none";
            notifyPopup.style.display = "none"; // Close the notification popup if open
        });
        // Toggle visibility of the notification window
        notifyIcon.addEventListener("click", ()=>{
            notifyPopup.style.display = notifyPopup.style.display === "none" ? "block" : "none";
            messagePopup.style.display = "none"; // Close the message popup if open
        });
    }
    // Re-render live date and time
    renderLive() {
        const dateTimeElement = document.getElementById("date-time");
        if (dateTimeElement) dateTimeElement.textContent = `${this.date} | ${this.time}`;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../ASSETS/IMAGES/ellipse-12@2x.png":"D9GvT","../../ASSETS/IMAGES/path-35@2x.png":"9gWMP","../../ASSETS/IMAGES/path-36@2x.png":"5Qc7s","../../ASSETS/IMAGES/path-14055@2x.png":"5O5NY"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"D9GvT":[function(require,module,exports) {
module.exports = require("e978f52f6dfcb0b6").getBundleURL("5Zsbl") + "ellipse-12@2x.d0749343.png" + "?" + Date.now();

},{"e978f52f6dfcb0b6":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"9gWMP":[function(require,module,exports) {
module.exports = require("928eebda92e5d0e7").getBundleURL("5Zsbl") + "path-35@2x.45aab564.png" + "?" + Date.now();

},{"928eebda92e5d0e7":"lgJ39"}],"5Qc7s":[function(require,module,exports) {
module.exports = require("a971bc9f18788920").getBundleURL("5Zsbl") + "path-36@2x.ccd7b9bf.png" + "?" + Date.now();

},{"a971bc9f18788920":"lgJ39"}],"5O5NY":[function(require,module,exports) {
module.exports = require("5d34887fcd6f5dd6").getBundleURL("5Zsbl") + "path-14055@2x.eb88cde9.png" + "?" + Date.now();

},{"5d34887fcd6f5dd6":"lgJ39"}],"kOwAI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Status", ()=>Status) // Export the Status class
;
var _group286082XPng = require("../../ASSETS/IMAGES/group-28608@2x.png");
var _group286082XPngDefault = parcelHelpers.interopDefault(_group286082XPng);
var _path453132XPng = require("../../ASSETS/IMAGES/path-45313@2x.png");
var _path453132XPngDefault = parcelHelpers.interopDefault(_path453132XPng);
class Status {
    constructor(){
        this.currentStep = 1;
    }
    setCurrentStep(step) {
        this.currentStep = step;
        this.render();
    }
    render() {
        return `
        <div class="status">
            <img class="back" src=${0, _group286082XPngDefault.default} alt="">
            <div class="progress">
                <div class="step ${this.currentStep >= 1 ? "active" : ""}">
                    <div class="step-number" style="border-color: ${this.currentStep >= 1 ? "#e6f2ff" : "grey"}; color: ${this.currentStep >= 1 ? "#e6f2ff" : "grey"};">
                        ${this.currentStep > 1 ? `<img src=${0, _path453132XPngDefault.default} alt="" style="height: 14px;">` : "1"}
                    </div>
                    <div class="step-label">Personal Details</div>
                </div>
                <div class="Path-45302"></div>
                <div class="step ${this.currentStep >= 2 ? "active" : ""}">
                    <div class="step-number" style="border-color: ${this.currentStep >= 2 ? "#e6f2ff" : "grey"}; color: ${this.currentStep >= 2 ? "#e6f2ff" : "grey"};">
                        ${this.currentStep > 2 ? `<img src=${0, _path453132XPngDefault.default} alt="" style="height: 14px;">` : "2"}
                    </div>
                    <div class="step-label">Vehicle Details</div>
                </div>
                <div class="Path-45302"></div>
                <div class="step ${this.currentStep >= 3 ? "active" : ""}">
                    <div class="step-number" style="border-color: ${this.currentStep >= 3 ? "#e6f2ff" : "grey"}; color: ${this.currentStep >= 3 ? "#e6f2ff" : "grey"};">
                        ${this.currentStep > 3 ? `<img src=${0, _path453132XPngDefault.default} alt="" style="height: 14px;">` : "3"}
                    </div>
                    <div class="step-label">Bank Details</div>
                </div>
                <div class="Path-45302"></div>
                <div class="step ${this.currentStep >= 4 ? "active" : ""}">
                    <div class="step-number" style="border-color: ${this.currentStep >= 4 ? "#e6f2ff" : "grey"}; color: ${this.currentStep >= 4 ? "#e6f2ff" : "grey"};">
                        ${this.currentStep > 4 ? `<img src=${0, _path453132XPngDefault.default} alt="" style="height: 14px;">` : "4"}
                    </div>
                    <div class="step-label">Client Details</div>
                </div>
                <div class="Path-45302"></div>
                <div class="step ${this.currentStep >= 5 ? "active" : ""}">
                    <div class="step-number" style="border-color: ${this.currentStep >= 5 ? "#e6f2ff" : "grey"}; color: ${this.currentStep >= 5 ? "#e6f2ff" : "grey"};">
                        ${this.currentStep > 5 ? `<img src=${0, _path453132XPngDefault.default} alt="" style="height: 14px;">` : "5"}
                    </div>
                    <div class="step-label">Document Details</div>
                </div>
            </div>
        </div>
        `;
    }
}

},{"../../ASSETS/IMAGES/group-28608@2x.png":"kb4uE","../../ASSETS/IMAGES/path-45313@2x.png":"9P8Q9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kb4uE":[function(require,module,exports) {
module.exports = require("141deacb6d358509").getBundleURL("5Zsbl") + "group-28608@2x.ad767b4a.png" + "?" + Date.now();

},{"141deacb6d358509":"lgJ39"}],"9P8Q9":[function(require,module,exports) {
module.exports = require("8a291e4795de5df4").getBundleURL("5Zsbl") + "path-45313@2x.ad66d9a2.png" + "?" + Date.now();

},{"8a291e4795de5df4":"lgJ39"}],"dg4s7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Export both classes
parcelHelpers.export(exports, "PersonalDetail", ()=>PersonalDetail);
parcelHelpers.export(exports, "Document", ()=>Document);
parcelHelpers.export(exports, "VehicleDetails", ()=>VehicleDetails);
parcelHelpers.export(exports, "BankDetails", ()=>BankDetails);
parcelHelpers.export(exports, "ClientDetails", ()=>ClientDetails);
var _group287202XPng = require("../../ASSETS/IMAGES/group-28720@2x.png");
var _group287202XPngDefault = parcelHelpers.interopDefault(_group287202XPng);
var _group287212XPng = require("../../ASSETS/IMAGES/group-28721@2x.png");
var _group287212XPngDefault = parcelHelpers.interopDefault(_group287212XPng);
var _group287222XPng = require("../../ASSETS/IMAGES/group-28722@2x.png");
var _group287222XPngDefault = parcelHelpers.interopDefault(_group287222XPng);
var _path385112XPng = require("../../ASSETS/IMAGES/path-38511@2x.png");
var _path385112XPngDefault = parcelHelpers.interopDefault(_path385112XPng);
var _path449332XPng = require("../../ASSETS/IMAGES/path-44933@2x.png");
var _path449332XPngDefault = parcelHelpers.interopDefault(_path449332XPng);
var _path449302XPng = require("../../ASSETS/IMAGES/path-44930@2x.png");
var _path449302XPngDefault = parcelHelpers.interopDefault(_path449302XPng);
const { addPersonalDetails, addVehicleDetails, addClientDetails, addBankDetails } = require("7afe2b3386d5c050");
class BankDetails {
    constructor(){
        this.config = {
            bankNames: [
                "Indian Bank",
                "Central Bank",
                "SBI",
                "HDFC"
            ],
            accountHolderLabel: "Account Holder's Name",
            accountNumberLabel: "Account Number",
            confirmAccountNumberLabel: "Confirm Account Number",
            profilePictureLabel: "Profile Picture",
            uploadedBankPictureUrl: ""
        };
    }
    render() {
        return `
    <div class="container-1">
        <div class="bank-details-section">
            <div class="section-title">
                <h2>Primary Bank Details</h2>
            </div>
            <form>
                <div class="bank-form-row">
                    ${this.renderInputField("accountHolderName", this.config.accountHolderLabel, "Enter Account Holders Name")}
                    ${this.renderInputField("accountNumber", this.config.accountNumberLabel, "Enter Account No")}
                    ${this.renderInputField("confirmAccountNumber", this.config.confirmAccountNumberLabel, "Enter Account No")}
                    ${this.renderBankDropdown("bankName", "Select Bank", this.config.bankNames)}
                </div>

                <div class="Profile">
                    ${this.renderProfilePictureSection("PassBookPicture", this.config.profilePictureLabel)}
                </div>

                <div class="Add">
                    <img src=${0, _path385112XPngDefault.default} alt="">
                    <a href="#" class="add-secondary-bank">Add Secondary Bank Details</a>
                </div>
            </form>
        </div>
        ${this.renderButtons()}
    </div>
    `;
    }
    renderInputField(id, label, placeholder) {
        return `
      <div class="bank-form-group">
        <label for="${id}">${label}</label>
        <input type="text" id="${id}" placeholder="${placeholder}">
      </div>
    `;
    }
    renderBankDropdown(id, label, bankNames) {
        const options = bankNames.map((bank)=>`<option value="${bank}">${bank}</option>`).join("");
        return `
      <div class="bank-form-group">
        <label for="${id}">${label}</label>
        <select id="${id}">
          <option value="" disabled selected>Select Bank</option>
          ${options}
        </select>
      </div>
    `;
    }
    renderProfilePictureSection(id, label) {
        return `
      <div class="profile-row">
        <img id="PassBookPicturePreview" class="profile-pic" src=${0, _group287222XPngDefault.default} alt="bankpass" style="height: 95px;">
        <div class="pic">
          <label for="${id}">${label}</label>
          <p style="color: #969292;">Maximum size : 2 MB | Minimum Resolution : 1000px, Format : JPG, PNG</p>
          <input type="file" id="${id}" accept="image/jpeg, image/png">
        </div>
      </div>
    `;
    }
    renderButtons() {
        return `
      <div class="form-buttons">
        <button type="button" class="cancel-btn">Cancel</button>
        <button type="button" class="back-btn">Back</button>
        <button type="button" id="next-btn-b" class="next-btn">Next</button>
      </div>
    `;
    }
    addEventListeners(nextPageCallback) {
        const BookPictureInput = document.getElementById("PassBookPicture");
        const BookPicturePreview = document.getElementById("PassBookPicturePreview");
        BookPictureInput.addEventListener("change", (e)=>{
            const file = e.target.files[0];
            if (file) {
                if (file.size > 2097152) {
                    alert("File size exceeds 2MB.");
                    BookPictureInput.value = "";
                    BookPicturePreview.src = "";
                    return;
                }
                const reader = new FileReader();
                reader.onload = (event)=>{
                    BookPicturePreview.src = event.target.result;
                };
                reader.readAsDataURL(file);
                this.uploadedBankPicture = file;
            }
        });
        const nextBtn = document.getElementById("next-btn-b");
        nextBtn.addEventListener("click", async (event)=>{
            event.preventDefault();
            try {
                const formData = this.collectBankFormData();
                const result = await addBankDetails(formData);
                if (result.success) nextPageCallback();
                else console.error("Error response from server:", result.error);
            } catch (error) {
                console.error("Error during form submission:", error);
            }
        });
    }
    collectBankFormData() {
        const formData = new FormData();
        formData.append("accountHolderName", document.getElementById("accountHolderName").value);
        formData.append("accountNumber", document.getElementById("accountNumber").value);
        formData.append("confirmAccountNumber", document.getElementById("confirmAccountNumber").value);
        formData.append("bankName", document.getElementById("bankName").value);
        const PassBookPicture = document.getElementById("PassBookPicture").files[0];
        if (PassBookPicture) formData.append("PassBookPicture", PassBookPicture);
        return formData;
    }
}
// PersonalDetails.js
class PersonalDetail {
    constructor(){
        this.uploadedProfilePictureUrl = "";
    }
    render() {
        return `
      <div class="container-1">
        <form id="personal-details-form" class="personal-details-form">
          <div class="section-title">
            <h2>Personal Details</h2>
          </div>
          ${this.renderPersonalDetails()}
          ${this.renderAddressDetails()}
          ${this.renderButtons()}
        </form>
      </div>
    `;
    }
    renderPersonalDetails() {
        return `
      <div class="detail-form-row">
        <div class="detail-form-group">
          <label for="driverType">Driver Type</label>
          <select id="driverType">
            <option value="" disabled selected hidden>Select Owner / Driver / Both</option>
            <option value="owner">Owner</option>
            <option value="driver">Driver</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div class="detail-form-group">
          <label for="serviceType">Service Type</label>
          <select id="serviceType">
            <option value="" disabled selected hidden>Select Fleet / Attachment</option>
            <option value="fleet">Fleet</option>
            <option value="attachment">Attachment</option>
          </select>
        </div>
        <div class="detail-form-group">
          <label for="driverID">Driver ID</label>
          <input type="text" id="driverID" placeholder="Enter ID">
        </div>
      </div>
      ${this.renderProfilePicture()}
      <div class="detail-form-row">
        <div class="detail-form-group">
          <label for="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Enter Name">
        </div>
        <div class="detail-form-group">
          <label for="phoneNumber">Phone Number</label>
          <input type="text" id="phoneNumber" placeholder="Enter Number">
        </div>
        <div class="detail-form-group">
          <label for="gender">Gender</label>
          <select id="gender">
            <option value="" disabled selected hidden>Choose Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div class="detail-form-group">
          <label for="dob">Date of Birth</label>
          <input type="date" id="dob" placeholder="DD/MM/YYYY">
        </div>
      </div>
    `;
    }
    renderProfilePicture() {
        return `
      <div class="Profile">
        <div class="profile-row">
          <img id="profilePicturePreview" class="profile-pic" src="${0, _group287202XPngDefault.default}" alt="Profile Picture" style="height: 95px;">
          <div class="pic">
            <label for="profilePicture">Profile Picture</label>
            <p style="color: #969292; max-width: 100%;">Maximum size: 2 MB | Minimum Resolution: 1000px, Format: JPG, PNG</p>
            <input type="file" id="profilePicture" accept="image/jpeg, image/png">
          </div>
        </div>
      </div>
    `;
    }
    renderAddressDetails() {
        return `
      <div class="section-title">
        <h3>Address Details</h3>
      </div>
      <div class="detail-form-row">
        <div class="detail-form-group">
          <label for="addressLine1">Address Line 1</label>
          <input type="text" id="addressLine1" placeholder="Enter Address">
        </div>
        <div class="detail-form-group">
          <label for="addressLine2">Address Line 2</label>
          <input type="text" id="addressLine2" placeholder="Enter Address">
        </div>
        <div class="detail-form-group">
          <label for="city">City</label>
          <input type="text" id="city" placeholder="Enter City">
        </div>
        <div class="detail-form-group">
          <label for="state">State</label>
          <select id="state">
            <option value="" disabled selected hidden>Select State</option>
            <option value="TamilNadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
            <option value="Karnataka">Karnataka</option>
          </select>
        </div>
      </div>
      <div class="detail-form-row">
        <div class="detail-form-group">
          <label for="country">Country</label>
          <select id="country">
            <option value="" disabled selected hidden>Select Country</option>
            <option value="India">India</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
        <div class="detail-form-group">
          <label for="pinCode">Pin Code</label>
          <input type="text" id="pinCode" placeholder="Enter Pin Code">
        </div>
      </div>
    `;
    }
    renderButtons() {
        return `
      <div class="detail-form-buttons">
        <button type="button" class="cancel-btn">Cancel</button>
        <button type="button" id="next-btn" class="next-btn">Next</button>
      </div>`;
    }
    addEventListeners(nextPageCallback) {
        const profilePictureInput = document.getElementById("profilePicture");
        profilePictureInput.addEventListener("change", (e)=>{
            this.handleProfilePictureChange(e);
        });
        const nextBtn = document.getElementById("next-btn");
        nextBtn.addEventListener("click", async (event)=>{
            await this.handleNextButtonClick(event, nextPageCallback);
        });
    }
    handleProfilePictureChange(event) {
        const file = event.target.files[0];
        const profilePicturePreview = document.getElementById("profilePicturePreview");
        if (file) {
            if (file.size > 2097152) {
                alert("File size exceeds 2MB.");
                event.target.value = "";
                profilePicturePreview.src = "";
                return;
            }
            const reader = new FileReader();
            reader.onload = (e)=>{
                profilePicturePreview.src = e.target.result;
                this.uploadedProfilePictureUrl = e.target.result; // Store the URL for later use
            };
            reader.readAsDataURL(file);
        }
    }
    async handleNextButtonClick(event, nextPageCallback) {
        event.preventDefault();
        try {
            const formData = this.collectFormData();
            const result = await addPersonalDetails(formData); // API calls
            if (result.success) nextPageCallback();
            else console.error("Error response from server:", result.error);
        } catch (error) {
            console.error("Error during form submission:", error);
        }
    }
    collectFormData() {
        const formData = new FormData();
        formData.append("driverType", document.getElementById("driverType").value);
        formData.append("serviceType", document.getElementById("serviceType").value);
        formData.append("driverID", document.getElementById("driverID").value);
        formData.append("fullName", document.getElementById("fullName").value);
        formData.append("phoneNumber", document.getElementById("phoneNumber").value);
        formData.append("gender", document.getElementById("gender").value);
        formData.append("dob", document.getElementById("dob").value);
        formData.append("addressLine1", document.getElementById("addressLine1").value);
        formData.append("addressLine2", document.getElementById("addressLine2").value);
        formData.append("city", document.getElementById("city").value);
        formData.append("state", document.getElementById("state").value);
        formData.append("country", document.getElementById("country").value);
        formData.append("pinCode", document.getElementById("pinCode").value);
        const profilePicture = document.getElementById("profilePicture").files[0];
        if (profilePicture) formData.append("profilePicture", profilePicture);
        return formData;
    }
}
class VehicleDetails {
    constructor(){
        this.uploadedVehiclePictureUrl = "";
    }
    render() {
        return `
      <div class="container-1">
        <h2>Vehicle Details</h2>
        <form>
          ${this.renderVehicleForm()}
          ${this.renderProfilePicture()}
        </form>
      </div>
      ${this.renderButtons()}
      <br><br>
    `;
    }
    renderVehicleForm() {
        return `
      <div class="veh-form-row">
        ${this.renderDrivingExperience()}
        ${this.renderRideType()}
      </div>
      <div class="veh-form-row">
        ${this.renderVehicleRegistration()}
        ${this.renderVehicleType()}
        ${this.renderVehicleBrand()}
        ${this.renderVehicleModel()}
      </div>
      <div class="veh-form-row">
        ${this.renderVehicleColor()}
        ${this.renderFuelType()}
        ${this.renderManufactureYear()}
        ${this.renderSeatCapacity()}
      </div>
      <div class="veh-form-row">
        ${this.renderMileageRange()}
      </div>
    `;
    }
    renderDrivingExperience() {
        return `
      <div class="veh-form-group">
        <label for="drivingExperience">Driving Experience</label>
        <input type="text" id="drivingExperience" name="drivingExperience" placeholder="Enter Years of Experience">
      </div>
    `;
    }
    renderRideType() {
        return `
      <div class="veh-form-group">
        <label for="rideType">Ride Type</label>
        <select id="rideType" name="rideType">
          <option value="" disabled selected>Select Regular / Office / Both</option>
          <option value="Regular">Regular</option>
          <option value="Office">Office</option>
          <option value="Both">Both</option>
        </select>
      </div>
    `;
    }
    renderVehicleRegistration() {
        return `
      <div class="veh-form-group">
        <label for="vehicleRegNo">Vehicle Registration No</label>
        <input type="text" id="vehicleRegNo" name="vehicleRegNo" placeholder="Enter Registration No">
      </div>
    `;
    }
    renderVehicleType() {
        return `
      <div class="veh-form-group">
        <label for="vehicleType">Vehicle Type</label>
        <select id="vehicleType" name="vehicleType">
          <option value="" disabled selected>Select Vehicle Type</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Truck">Truck</option>
        </select>
      </div>
    `;
    }
    renderVehicleBrand() {
        return `
      <div class="veh-form-group">
        <label for="vehicleBrand">Vehicle Brand</label>
        <select id="vehicleBrand" name="vehicleBrand">
          <option value="" disabled selected>Select Vehicle Brand</option>
          <option value="Toyota">Toyota</option>
          <option value="Ford">Ford</option>
        </select>
      </div>
    `;
    }
    renderVehicleModel() {
        return `
      <div class="veh-form-group">
        <label for="vehicleModel">Vehicle Model</label>
        <select id="vehicleModel" name="vehicleModel">
          <option value="" disabled selected>Select Vehicle Model</option>
          <option value="Corolla">Corolla</option>
          <option value="F-150">F-150</option>
        </select>
      </div>
    `;
    }
    renderVehicleColor() {
        return `
      <div class="veh-form-group">
        <label for="vehicleColor">Vehicle Color</label>
        <input type="text" id="vehicleColor" name="vehicleColor" placeholder="Enter Vehicle Color">
      </div>
    `;
    }
    renderFuelType() {
        return `
      <div class="veh-form-group">
        <label for="fuelType">Fuel Type</label>
        <select id="fuelType" name="fuelType">
          <option value="" disabled selected>Select Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>
      </div>
    `;
    }
    renderManufactureYear() {
        return `
      <div class="veh-form-group">
        <label for="manufactureYear">Manufacture Year</label>
        <select id="manufactureYear" name="manufactureYear">
          <option value="" disabled selected>Select Manufacture Year</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    `;
    }
    renderSeatCapacity() {
        return `
      <div class="veh-form-group">
        <label for="seatCapacity">Seat Capacity</label>
        <select id="seatCapacity" name="seatCapacity">
          <option value="" disabled selected>Select Seat Capacity</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    `;
    }
    renderMileageRange() {
        return `
      <div class="veh-form-group">
        <label for="mileageRange">Mileage Range</label>
        <select id="mileageRange" name="mileageRange">
          <option value="" disabled selected>Select Mileage Range</option>
          <option value="10-15">10-15 kmpl</option>
          <option value="15-20">15-20 kmpl</option>
        </select>
      </div>
    `;
    }
    renderProfilePicture() {
        return `
      <div class="Profile">
        <div class="profile-row">
          <img id="vehiclePicturePreview" class="profile-pic" src=${0, _group287212XPngDefault.default} alt="Vehicle Image" style="height: 95px;">
          <div class="pic">
            <label for="vehiclePicture">Profile Picture</label>
            <p style="color: #969292;">Maximum size : 2 MB. Minimum Resolution : 1000px, Format : JPG, PNG</p>
            <input type="file" id="vehiclePicture" accept="image/jpeg, image/png">
          </div>
        </div>
      </div>
    `;
    }
    renderButtons() {
        return `
      <div class="form-buttons">
        <button type="button" class="cancel-btn">Cancel</button>
        <button type="button" class="back-btn">Back</button>
        <button type="button" id="next-btn-v" class="next-btn">Next</button>
      </div>
    `;
    }
    addEventListeners(nextPageCallback) {
        const vehiclePictureInput = document.getElementById("vehiclePicture");
        vehiclePictureInput.addEventListener("change", (e)=>this.handleProfilePictureChange(e));
        const nextBtn = document.getElementById("next-btn-v");
        nextBtn.addEventListener("click", async (event)=>{
            await this.handleNextButtonClick(event, nextPageCallback);
        });
    }
    handleProfilePictureChange(event) {
        const file = event.target.files[0];
        const vehiclePicturePreview = document.getElementById("vehiclePicturePreview");
        if (file) {
            if (file.size > 2097152) {
                alert("File size exceeds 2MB.");
                event.target.value = "";
                vehiclePicturePreview.src = "";
                return;
            }
            const reader = new FileReader();
            reader.onload = (event)=>{
                vehiclePicturePreview.src = event.target.result;
            };
            reader.readAsDataURL(file);
            this.uploadedVehiclePictureUrl = file;
        }
    }
    async handleNextButtonClick(event, nextPageCallback) {
        event.preventDefault();
        try {
            const formData = this.collectVehicleFormData();
            const result = await addVehicleDetails(formData); // API call
            if (result.success) nextPageCallback();
            else console.error("Error response from server:", result.error);
        } catch (error) {
            console.error("Error during form submission:", error);
        }
    }
    collectVehicleFormData() {
        const formData = new FormData();
        formData.append("drivingExperience", document.getElementById("drivingExperience").value);
        formData.append("rideType", document.getElementById("rideType").value);
        formData.append("vehicleRegNo", document.getElementById("vehicleRegNo").value);
        formData.append("vehicleType", document.getElementById("vehicleType").value);
        formData.append("vehicleBrand", document.getElementById("vehicleBrand").value);
        formData.append("vehicleModel", document.getElementById("vehicleModel").value);
        formData.append("vehicleColor", document.getElementById("vehicleColor").value);
        formData.append("fuelType", document.getElementById("fuelType").value);
        formData.append("manufactureYear", document.getElementById("manufactureYear").value);
        formData.append("seatCapacity", document.getElementById("seatCapacity").value);
        formData.append("mileageRange", document.getElementById("mileageRange").value);
        const vehiclePicture = document.getElementById("vehiclePicture").files[0];
        // if (vehiclePicture) {
        formData.append("vehiclePicture", vehiclePicture); // Only append if file exists
        // }
        return formData;
    }
}
class ClientDetails {
    render() {
        return `
    <div class="container-1">
        <div class="form-title">Client Details</div>
            
            <div class="client-form-row">
                <div class="client-form-group">
                    <label for="clientName">Client Name</label>
                    <input type="text" id="clientName" placeholder="Enter client Name">
                </div>
                <div class="client-form-group">
                    <label for="siteName">Site Name</label>
                    <input type="text" id="siteName" placeholder="Enter Site">
                    <!-- Tags for selected locations -->
                    <div class="tags" id="tags-container"></div>
                </div>

                <div class="client-form-group">
                    <label for="location">Location</label>
                    <select id="location">
                        <option value="">Select Location</option>
                        <option value="Taramani">Taramani</option>
                        <option value="Tambaram">Tambaram</option>
                        <option value="Velachery">Velachery</option>
                    </select>
                </div>

                <div class="client-form-group">
                    <label for="tripType">Trip Type</label>
                    <select id="tripType">
                        <option value="">Select Trip Type</option>
                        <option value="kilometer">Kilometer</option>
                        <option value="hourly">Hourly</option>
                    </select>
                </div>
                <div class="client-form-group">
                    <label>Fare Details</label>
                    <div  class="fare-buttons">
                        <button type="button" class="check-fare"><img src=${0, _path449332XPngDefault.default} style="height: 12px;width: auto;padding-right: 3px;" alt="">Check Fare</button>
                        <button type="button" class="edit-fare"><img src=${0, _path449302XPngDefault.default} style="height: 11px;width: auto; padding-right: 2px;" alt=""> Edit Fare</button>
                    </div>
                </div>
            </div>

            <div class="Add">
                <img src=${0, _path385112XPngDefault.default} alt="">
                <a href="#" class="add-secondary-bank">Add Secondary Bank Details</a>
            </div>
    </div>
        ${this.btn_render()}
    `;
    }
    addEventListeners(nextPageCallback) {
        const siteNameInput = document.getElementById("siteName");
        if (siteNameInput) siteNameInput.addEventListener("keypress", (event)=>this.handleKeyPress(event));
        const nextBtn = document.getElementById("next-btn-c");
        if (nextBtn) nextBtn.addEventListener("click", async (event)=>{
            event.preventDefault();
            try {
                const formData = this.collectClientFormData();
                const result = await addClientDetails(formData);
                if (result.success) nextPageCallback();
                else console.error("Error response from server:", result.error);
            } catch (error) {
                console.error("Error during form submission:", error);
            }
        });
    }
    handleKeyPress(event) {
        const input = document.getElementById("siteName");
        const tagsContainer = document.getElementById("tags-container");
        if (event.key === "Enter" && input.value.trim() !== "") {
            event.preventDefault();
            const tagDiv = document.createElement("div");
            tagDiv.className = "tag";
            const tagText = document.createElement("span");
            tagText.textContent = input.value.trim();
            const removeButton = document.createElement("button");
            removeButton.innerHTML = "&times;";
            removeButton.addEventListener("click", function() {
                tagsContainer.removeChild(tagDiv);
            });
            tagDiv.appendChild(tagText);
            tagDiv.appendChild(removeButton);
            tagsContainer.appendChild(tagDiv);
            input.value = "";
        }
    }
    collectClientFormData() {
        const formData = new FormData();
        formData.append("clientName", document.getElementById("clientName").value);
        const tagsContainer = document.getElementById("tags-container");
        const tags = [];
        tagsContainer.querySelectorAll(".tag span").forEach((tag)=>{
            tags.push(tag.textContent);
        });
        const siteName = tags.join(",");
        formData.append("siteName", siteName);
        formData.append("location", document.getElementById("location").value);
        formData.append("tripType", document.getElementById("tripType").value);
        return formData;
    }
    btn_render() {
        return `
      <div class="form-buttons">
        <button type="button" class="cancel-btn">Cancel</button>
        <button type="button" class="back-btn">Back</button>
        <button type="button" id="next-btn-c" class="next-btn">Next</button>
        </div>
    `;
    }
}
// Document.js
class Document {
    render() {
        return `
    <div class="container-1">
        <h2>Driver Documents</h2>
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="aadhar-number">Aadhar Card Number</label>
                <input type="text" id="aadhar-number" placeholder="Enter Aadhar Card No">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
            <div class="doc-form-group">
                <!-- <div class="checkmark"></div> -->
                <label for="pan-number">PAN Card Number</label>
                <input type="text" id="pan-number" placeholder="Enter PAN Card No">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
        </div>

        <!-- Driver Badge -->
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="badge-id">Badge ID Number</label>
                <input type="text" id="badge-id" placeholder="Enter Badge ID No">
            </div>
            <div class="doc-form-group">
                <label for="start-date-badge">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="doc-form-group">
                <label for="expiry-date-badge">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
        </div>

        <!-- Driver License -->
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="license-number">License Number</label>
                <input type="text" id="license-number" placeholder="Enter License Number">
            </div>
            <div class="doc-form-group">
                <label for="start-date-license">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="doc-form-group">
                <label for="expiry-date-license">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
        </div>

        <!-- PVC Document -->
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="pvc-number">Police Verification Certificate</label>
                <input type="text" id="pvc-number" placeholder="Enter PVC Number">
            </div>
            <div class="doc-form-group">
                <label for="start-date-pvc">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="doc-form-group">
                <label for="expiry-date-pvc">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
        </div>

        <!-- Vehicle Documents Section -->
        <h2>Vehicle Documents</h2>

        <!-- Insurance -->
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="insurance-id">Insurance Name/ID</label>
                <input type="text" id="insurance-id" placeholder="Enter Insurance Name/ID No">
            </div>
            <div class="doc-form-group">
                <label for="start-date-insurance">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="doc-form-group">
                <label for="expiry-date-insurance">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY" <input type="text" id="dob"
                    placeholder="DD/MM/YYYY">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
        </div>

        <!-- RC Book -->
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="rc-book">RC Book</label>
                <input type="text" id="rc-book" placeholder="Enter License Number">
            </div>
            <div class="doc-form-group">
                <label for="start-date-rc">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="doc-form-group">
                <label for="expiry-date-rc">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
        </div>

        <!-- Fitness Certificate -->
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="fitness-certificate">Fitness Certificate</label>
                <input type="text" id="fitness-certificate" placeholder="Enter Fitness Certificate Number">
            </div>
            <div class="doc-form-group">
                <label for="start-date-fitness">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="doc-form-group">
                <label for="expiry-date-fitness">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
        </div>

        <!-- Vehicle Verification -->
        <h2>Vehicle Verification</h2>

        <!-- Registration Number -->
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="registration-no">Registration Number</label>
                <input type="text" id="registration-no" placeholder="Enter Registration No">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
            <div class="doc-form-group">
                <label for="engine-number">Engine Number</label>
                <input type="text" id="engine-number" placeholder="Enter Engine Number">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
        </div>

        <!-- Chassis Number -->
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="chassis-number">Chassis Number</label>
                <input type="text" id="chassis-number" placeholder="Enter Chassis Number">
            </div>
            <div class="upload-container">
        <label for="fileUpload" class="upload-label">Upload Document</label>
        <div class="upload-wrapper">
            <div class="file-status">
                <span class="file-name">No file chosen</span>
                <span class="status-icon"></span>
            </div>
            <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
            <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
        </div>
    </div>
        </div>

    </div>
    
    <div class="form-buttons">
        ${this.btn_render()}
    </div>
    <br><br>
        `;
    }
    btn_render() {
        return ` 
            <button type="button" class="cancel-btn">Cancel</button>
      <button type="button" class="back-btn">Back</button>
      <button type="button" id="next-btn-s" class="sub-btn">SUBMIT</button>
            `;
    }
    collectDocFormData() {
        const formData = new FormData();
        // Driver document fields
        formData.append("aadharNumber", document.getElementById("aadhar-number").value);
        formData.append("aadharDocument", document.getElementById("aadhar-file").files[0]);
        formData.append("panNumber", document.getElementById("pan-number").value);
        formData.append("panDocument", document.getElementById("pan-file").files[0]);
        formData.append("badgeIDNumber", document.getElementById("badge-id").value);
        formData.append("badgeStartDate", document.getElementById("start-date-badge").value);
        formData.append("badgeExpiryDate", document.getElementById("expiry-date-badge").value);
        formData.append("badgeIDDocument", document.getElementById("badge-file").files[0]);
        formData.append("licenseNumber", document.getElementById("license-number").value);
        formData.append("licenseStartDate", document.getElementById("start-date-license").value);
        formData.append("licenseExpiryDate", document.getElementById("expiry-date-license").value);
        formData.append("licenseDocument", document.getElementById("license-file").files[0]);
        formData.append("pvcNumber", document.getElementById("pvc-number").value);
        formData.append("pvcStartDate", document.getElementById("start-date-pvc").value);
        formData.append("pvcExpiryDate", document.getElementById("expiry-date-pvc").value);
        formData.append("pvcDocument", document.getElementById("pvc-file").files[0]);
        // Vehicle document fields
        formData.append("insurance_name_id", document.getElementById("insurance-id").value);
        formData.append("insurance_start_date", document.getElementById("start-date-insurance").value);
        formData.append("insurance_expiry_date", document.getElementById("expiry-date-insurance").value);
        formData.append("insurance_document", document.getElementById("insurance-file").files[0]);
        formData.append("rc_book_no", document.getElementById("rc-book").value);
        formData.append("rc_book_start_date", document.getElementById("start-date-rc").value);
        formData.append("rc_book_expiry_date", document.getElementById("expiry-date-rc").value);
        formData.append("rc_book_document", document.getElementById("rc-book-file").files[0]);
        formData.append("fitness_certificate", document.getElementById("fitness-certificate").value);
        formData.append("fitness_certificate_start_date", document.getElementById("start-date-fitness").value);
        formData.append("fitness_certificate_expiry_date", document.getElementById("expiry-date-fitness").value);
        formData.append("fitness_certificate_document", document.getElementById("fitness-file").files[0]);
        formData.append("vehicle_registration_number", document.getElementById("registration-no").value);
        formData.append("vehicle_registration_document", document.getElementById("registration-file").files[0]);
        formData.append("engine_number", document.getElementById("engine-number").value);
        formData.append("engine_number_document", document.getElementById("engine-file").files[0]);
        formData.append("chasis_number", document.getElementById("chassis-number").value);
        formData.append("chasis_number_document", document.getElementById("chassis-file").files[0]);
        return formData;
    }
    handleFileUpload() {
        const fileInput = document.getElementById("fileUpload");
        const fileNameDisplay = document.querySelector(".file-name");
        const statusIcon = document.querySelector(".status-icon");
        if (fileInput.files.length > 0) {
            const fileName = fileInput.files[0].name;
            fileNameDisplay.textContent = fileName;
            statusIcon.classList.add("success"); // Show green tick
        } else {
            fileNameDisplay.textContent = "No file chosen";
            statusIcon.classList.remove("success"); // Hide green tick
        }
    }
}

},{"../../ASSETS/IMAGES/group-28720@2x.png":"3voTF","../../ASSETS/IMAGES/group-28721@2x.png":"c3vFM","../../ASSETS/IMAGES/group-28722@2x.png":"92dnb","../../ASSETS/IMAGES/path-38511@2x.png":"49HUb","../../ASSETS/IMAGES/path-44933@2x.png":"cFqH2","../../ASSETS/IMAGES/path-44930@2x.png":"3QCyt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","7afe2b3386d5c050":"5zL6D"}],"3voTF":[function(require,module,exports) {
module.exports = require("211a42a73487f4f8").getBundleURL("5Zsbl") + "group-28720@2x.08184d67.png" + "?" + Date.now();

},{"211a42a73487f4f8":"lgJ39"}],"c3vFM":[function(require,module,exports) {
module.exports = require("c4cac250fae1f3a9").getBundleURL("5Zsbl") + "group-28721@2x.c372c7ad.png" + "?" + Date.now();

},{"c4cac250fae1f3a9":"lgJ39"}],"92dnb":[function(require,module,exports) {
module.exports = require("22abf682037481c3").getBundleURL("5Zsbl") + "group-28722@2x.79622b3f.png" + "?" + Date.now();

},{"22abf682037481c3":"lgJ39"}],"49HUb":[function(require,module,exports) {
module.exports = require("d4f3e1adaa7ec691").getBundleURL("5Zsbl") + "path-38511@2x.515e7c06.png" + "?" + Date.now();

},{"d4f3e1adaa7ec691":"lgJ39"}],"cFqH2":[function(require,module,exports) {
module.exports = require("88b13953bd86e9e8").getBundleURL("5Zsbl") + "path-44933@2x.02c62fbf.png" + "?" + Date.now();

},{"88b13953bd86e9e8":"lgJ39"}],"3QCyt":[function(require,module,exports) {
module.exports = require("ef6039de16a4d19f").getBundleURL("5Zsbl") + "path-44930@2x.1efe0061.png" + "?" + Date.now();

},{"ef6039de16a4d19f":"lgJ39"}],"5zL6D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _proxyUrlsJs = require("./Proxy_Urls.js");
var _proxyUrlsJsDefault = parcelHelpers.interopDefault(_proxyUrlsJs);
const sendFormData = async (url, formData)=>{
    try {
        console.log("Received form data:", formData);
        for (let pair of formData.entries())console.log(pair[0] + ", " + pair[1]);
        const response = await fetch(url, {
            method: "POST",
            body: formData
        });
        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            return {
                success: true,
                message: result
            };
        } else {
            console.error("Error response from the server:", result);
            throw new Error(result.error || "Unknown error occurred");
        }
    } catch (error) {
        console.error("Error sending data:", error);
        throw new Error("Failed to submit form");
    }
};
// Export functions to send specific form data
exports.addClientDetails = (formData)=>sendFormData(`${(0, _proxyUrlsJsDefault.default).API_FETCH_URL}/addClientDetails`, formData);
exports.addPersonalDetails = (formData)=>sendFormData(`${(0, _proxyUrlsJsDefault.default).API_FETCH_URL}/addPersonalDetails`, formData);
exports.addVehicleDetails = (formData)=>sendFormData(`${(0, _proxyUrlsJsDefault.default).API_FETCH_URL}/addVehicleDetails`, formData);
exports.addBankDetails = (formData)=>sendFormData(`${(0, _proxyUrlsJsDefault.default).API_FETCH_URL}/addBankDetails`, formData);
exports.addDocumentDetails = (formData)=>sendFormData(`${(0, _proxyUrlsJsDefault.default).API_FETCH_URL}/addDocumentDetails`, formData);

},{"./Proxy_Urls.js":"4rzRr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4rzRr":[function(require,module,exports) {
const PORT = 4001;
const SERVER = `http://localhost:${PORT}`;
const API_FETCH_URL = `${SERVER}/api`;
const ORIGIN_URL = "http://localhost:1234";
module.exports = {
    API_FETCH_URL,
    ORIGIN_URL,
    SERVER,
    PORT
};

},{}]},["khPp1","aIpi7"], "aIpi7", "parcelRequire94c2")

//# sourceMappingURL=Main.f9a5cb92.js.map

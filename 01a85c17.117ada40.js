(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{114:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(121);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var o=n(127);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return o.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return o.DEFAULT_SEARCH_TAG}});var s=n(122);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return s.isDocsPluginEnabled}});var i=n(131);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return i.isSamePath}});var u=n(132);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return u.useTitleFormatter}});var a=n(133);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return a.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return a.useDocsPreferredVersionByPluginId}});var c=n(123);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return c.DocsPreferredVersionContextProvider}})},117:function(e,t,n){try{e.exports=n(128)}catch(r){e.exports={}}},119:function(e,t,n){"use strict";n.r(t);var r=n(10);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},121:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;const o=r(n(22));t.useThemeConfig=function(){return o.default().siteConfig.themeConfig}},122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;const r=n(117);t.isDocsPluginEnabled=!!r.useAllDocsData},123:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;const u=s(n(0)),a=n(121),c=n(122),l=n(117),d=i(n(134));function f({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach((e=>{r[e]=function(e){const r=d.default.read(e,t);return n[e].versions.some((e=>e.name===r))?{preferredVersionName:r}:(d.default.clear(e,t),{preferredVersionName:null})}(e)})),r}function m(){const e=l.useAllDocsData(),t=a.useThemeConfig().docs.versionPersistence,n=u.useMemo((()=>Object.keys(e)),[e]),[r,o]=u.useState((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));u.useEffect((()=>{o(f({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,u.useMemo((()=>({savePreferredVersion:function(e,n){d.default.save(e,t,n),o((t=>Object.assign(Object.assign({},t),{[e]:{preferredVersionName:n}})))}})),[o])]}const g=u.createContext(null);function v({children:e}){const t=m();return u.default.createElement(g.Provider,{value:t},e)}t.DocsPreferredVersionContextProvider=function({children:e}){return c.isDocsPluginEnabled?u.default.createElement(v,null,e):u.default.createElement(u.default.Fragment,null,e)},t.useDocsPreferredVersionContext=function(){const e=u.useContext(g);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},124:function(e,t,n){"use strict";var r=n(0),o=n(136);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return`docs-${e}-${t}`}},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(119),o=n(129),s=n(130);t.useAllDocsData=()=>o.useAllPluginInstancesData("docusaurus-plugin-content-docs"),t.useDocsData=e=>o.usePluginData("docusaurus-plugin-content-docs",e),t.useActivePlugin=(e={})=>{const n=t.useAllDocsData(),{pathname:o}=r.useLocation();return s.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=(e={})=>{const n=t.useActivePlugin(e),{pathname:o}=r.useLocation();if(n){return{activePlugin:n,activeVersion:s.getActiveVersion(n.pluginData,o)}}},t.useVersions=e=>t.useDocsData(e).versions,t.useLatestVersion=e=>{const n=t.useDocsData(e);return s.getLatestVersion(n)},t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getActiveVersion(n,o)},t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getActiveDocContext(n,o)},t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getDocVersionSuggestions(n,o)}},129:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return s})),n.d(t,"usePluginData",(function(){return i}));var r=n(22);function o(){const{globalData:e}=Object(r.default)();if(!e)throw new Error("Docusaurus global data not found");return e}function s(e){const t=o()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for pluginName=${e}`);return t}function i(e,t="default"){const n=s(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${e} and pluginId=${t}`);return n}},130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(119);t.getActivePlugin=function(e,t,n={}){const o=Object.entries(e).find((([e,n])=>!!r.matchPath(t,{path:n.path,exact:!1,strict:!1}))),s=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!s&&n.failfast)throw new Error(`Can't find active docs plugin for pathname=${t}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return s},t.getLatestVersion=e=>e.versions.find((e=>e.isLast)),t.getActiveVersion=(e,n)=>{const o=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})))},t.getActiveDocContext=(e,n)=>{const o=t.getActiveVersion(e,n),s=null==o?void 0:o.docs.find((e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:s,alternateDocVersions:s?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(s.id):{}}},t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),s=o.activeVersion!==r;return{latestDocSuggestion:s?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:s?r:void 0}}},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)}},132:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;const o=r(n(22));t.useTitleFormatter=e=>{const{siteConfig:t={}}=o.default(),{title:n,titleDelimiter:r="|"}=t;return e&&e.trim().length?`${e.trim()} ${r} ${n}`:n}},133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;const r=n(0),o=n(123),s=n(117),i=n(135);t.useDocsPreferredVersion=function(e=i.DEFAULT_PLUGIN_ID){const t=s.useDocsData(e),[n,u]=o.useDocsPreferredVersionContext(),{preferredVersionName:a}=n[e];return{preferredVersion:a?t.versions.find((e=>e.name===a)):null,savePreferredVersionName:r.useCallback((t=>{u.savePreferredVersion(e,t)}),[u])}},t.useDocsPreferredVersionByPluginId=function(){const e=s.useAllDocsData(),[t]=o.useDocsPreferredVersionContext(),n=Object.keys(e),r={};return n.forEach((n=>{r[n]=function(n){const r=e[n],{preferredVersionName:o}=t[n];return o?r.versions.find((e=>e.name===o)):null}(n)})),r}},134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=e=>`docs-preferred-version-${e}`,o={save:(e,t,n)=>{"none"===t||window.localStorage.setItem(r(e),n)},read:(e,t)=>"none"===t?null:window.localStorage.getItem(r(e)),clear:(e,t)=>{"none"===t||window.localStorage.removeItem(r(e))}};t.default=o},135:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));const r="default"},136:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)(void 0);t.a=o},137:function(e,t,n){"use strict";var r=n(0);const o=n.n(r).a.createContext(void 0);t.a=o},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),s=n(114),i=n(118),u=n(56),a=n.n(u);function c({sidebar:e}){return 0===e.items.length?null:o.a.createElement("div",{className:Object(s.a)(a.a.sidebar,"thin-scrollbar")},o.a.createElement("h3",{className:a.a.sidebarItemTitle},e.title),o.a.createElement("ul",{className:a.a.sidebarItemList},e.items.map((e=>o.a.createElement("li",{key:e.permalink,className:a.a.sidebarItem},o.a.createElement(i.a,{isNavLink:!0,to:e.permalink,className:a.a.sidebarItemLink,activeClassName:a.a.sidebarItemLinkActive},e.title))))))}},142:function(e,t,n){"use strict";var r=n(0),o=n(137);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},71:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),s=n(138),i=n(118),u=n(140);t.default=function(e){const{tags:t,sidebar:n}=e,r={};Object.keys(t).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e);r[t]=r[t]||[],r[t].push(e)}));const a=Object.entries(r).sort((([e],[t])=>e===t?0:e>t?1:-1)).map((([e,n])=>o.a.createElement("div",{key:e},o.a.createElement("h3",null,e),n.map((e=>o.a.createElement(i.a,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")"))),o.a.createElement("hr",null)))).filter((e=>null!=e));return o.a.createElement(s.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper"},o.a.createElement("div",{className:"container margin-vert--lg"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--2"},o.a.createElement(u.a,{sidebar:n})),o.a.createElement("main",{className:"col col--8"},o.a.createElement("h1",null,"Tags"),o.a.createElement("div",{className:"margin-vert--lg"},a)))))}}}]);
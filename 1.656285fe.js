(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{114:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),p=r,g=f["".concat(i,".").concat(p)]||f[p]||d[p]||s;return n?o.a.createElement(g,a(a({ref:t},u),{},{components:n})):o.a.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(121);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var o=n(127);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return o.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return o.DEFAULT_SEARCH_TAG}});var s=n(122);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return s.isDocsPluginEnabled}});var i=n(131);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return i.isSamePath}});var a=n(132);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return a.useTitleFormatter}});var c=n(133);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return c.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return c.useDocsPreferredVersionByPluginId}});var u=n(123);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return u.DocsPreferredVersionContextProvider}})},117:function(e,t,n){try{e.exports=n(128)}catch(r){e.exports={}}},119:function(e,t,n){"use strict";n.r(t);var r=n(10);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},121:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;const o=r(n(22));t.useThemeConfig=function(){return o.default().siteConfig.themeConfig}},122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;const r=n(117);t.isDocsPluginEnabled=!!r.useAllDocsData},123:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;const a=s(n(0)),c=n(121),u=n(122),l=n(117),f=i(n(134));function d({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach((e=>{r[e]=function(e){const r=f.default.read(e,t);return n[e].versions.some((e=>e.name===r))?{preferredVersionName:r}:(f.default.clear(e,t),{preferredVersionName:null})}(e)})),r}function p(){const e=l.useAllDocsData(),t=c.useThemeConfig().docs.versionPersistence,n=a.useMemo((()=>Object.keys(e)),[e]),[r,o]=a.useState((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));a.useEffect((()=>{o(d({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,a.useMemo((()=>({savePreferredVersion:function(e,n){f.default.save(e,t,n),o((t=>Object.assign(Object.assign({},t),{[e]:{preferredVersionName:n}})))}})),[o])]}const g=a.createContext(null);function y({children:e}){const t=p();return a.default.createElement(g.Provider,{value:t},e)}t.DocsPreferredVersionContextProvider=function({children:e}){return u.isDocsPluginEnabled?a.default.createElement(y,null,e):a.default.createElement(a.default.Fragment,null,e)},t.useDocsPreferredVersionContext=function(){const e=a.useContext(g);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},124:function(e,t,n){"use strict";var r=n(0),o=n(136);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},125:function(e,t,n){"use strict";var r=n(3),o=n(0),s=n.n(o),i=n(114),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(24).a,theme:a};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=l({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=l({},n,{backgroundColor:null}),o};function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var m=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,s=l({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(s.style=i.plain),void 0!==o&&(s.style=void 0!==s.style?l({},s.style,o):o),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s})),u(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,s=t.getThemeDict(t.props);if(void 0!==s){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return s[n[0]];var i=r?{display:"inline-block"}:{},a=n.map((function(e){return s[e]}));return Object.assign.apply(Object,[i].concat(a))}})),u(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,s=e.token,i=l({},y(e,["key","className","style","token"]),{className:"token "+s.types.join(" "),children:s.content,style:t.getStyleForToken(s),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?l({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,s=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],s=0,i=0,a=[],c=[a];i>-1;){for(;(s=r[i]++)<o[i];){var u=void 0,l=t[i],g=n[i][s];if("string"==typeof g?(l=i>0?l:["plain"],u=g):(l=p(l,g.type),g.alias&&(l=p(l,g.alias)),u=g.content),"string"==typeof u){var y=u.split(f),m=y.length;a.push({types:l,content:y[0]});for(var h=1;h<m;h++)d(a),c.push(a=[]),a.push({types:l,content:y[h]})}else i++,t.push(l),n.push(u),r.push(0),o.push(u.length)}i--,t.pop(),n.pop(),r.pop(),o.pop()}return d(a),c}(void 0!==i?t.tokenize(r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==s?s.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),h=n(161),v=n.n(h),b=n(162),P=n.n(b),D={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(142),O=n(116);var x=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),n=e.theme||D,r=e.darkTheme||n;return t?r:n},V=n(75),k=n.n(V);const E=/{([\d,-]+)}/,_=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)},C=/(?:title=")(.*)(?:")/;t.a=({children:e,className:t,metastring:n})=>{const{prism:a}=Object(O.useThemeConfig)(),[u,l]=Object(o.useState)(!1),[f,d]=Object(o.useState)(!1);Object(o.useEffect)((()=>{d(!0)}),[]);const p=Object(o.useRef)(null);let g=[],y="";const h=x(),b=Array.isArray(e)?e.join(""):e;if(n&&E.test(n)){const e=n.match(E)[1];g=P()(e).filter((e=>e>0))}n&&C.test(n)&&(y=n.match(C)[1]);let D=t&&t.replace(/language-/,"");!D&&a.defaultLanguage&&(D=a.defaultLanguage);let j=b.replace(/\n$/,"");if(0===g.length&&void 0!==D){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return _(["js","jsBlock"]);case"jsx":case"tsx":return _(["js","jsBlock","jsx"]);case"html":return _(["js","jsBlock","html"]);case"python":case"py":return _(["python"]);default:return _()}})(D),n=b.replace(/\n$/,"").split("\n");let r;for(let o=0;o<n.length;){const s=o+1,i=n[o].match(t);if(null!==i){switch(i.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${s},`;break;case"highlight-start":r=s;break;case"highlight-end":e+=`${r}-${s-1},`}n.splice(o,1)}else o+=1}g=P()(e),j=n.join("\n")}const V=()=>{v()(j),l(!0),setTimeout((()=>l(!1)),2e3)};return s.a.createElement(m,Object(r.a)({},c,{key:String(f),theme:h,code:j,language:D}),(({className:e,style:t,tokens:n,getLineProps:o,getTokenProps:a})=>s.a.createElement(s.a.Fragment,null,y&&s.a.createElement("div",{style:t,className:k.a.codeBlockTitle},y),s.a.createElement("div",{className:k.a.codeBlockContent},s.a.createElement("div",{tabIndex:0,className:Object(i.a)(e,k.a.codeBlock,"thin-scrollbar",{[k.a.codeBlockWithTitle]:y})},s.a.createElement("div",{className:k.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=o({line:e,key:t});return g.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),s.a.createElement("div",Object(r.a)({key:t},n),e.map(((e,t)=>s.a.createElement("span",Object(r.a)({key:t},a({token:e,key:t}))))))})))),s.a.createElement("button",{ref:p,type:"button","aria-label":"Copy code to clipboard",className:Object(i.a)(k.a.copyButton),onClick:V},u?"Copied":"Copy")))))}},127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return`docs-${e}-${t}`}},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(119),o=n(129),s=n(130);t.useAllDocsData=()=>o.useAllPluginInstancesData("docusaurus-plugin-content-docs"),t.useDocsData=e=>o.usePluginData("docusaurus-plugin-content-docs",e),t.useActivePlugin=(e={})=>{const n=t.useAllDocsData(),{pathname:o}=r.useLocation();return s.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=(e={})=>{const n=t.useActivePlugin(e),{pathname:o}=r.useLocation();if(n){return{activePlugin:n,activeVersion:s.getActiveVersion(n.pluginData,o)}}},t.useVersions=e=>t.useDocsData(e).versions,t.useLatestVersion=e=>{const n=t.useDocsData(e);return s.getLatestVersion(n)},t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getActiveVersion(n,o)},t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getActiveDocContext(n,o)},t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getDocVersionSuggestions(n,o)}},129:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return s})),n.d(t,"usePluginData",(function(){return i}));var r=n(22);function o(){const{globalData:e}=Object(r.default)();if(!e)throw new Error("Docusaurus global data not found");return e}function s(e){const t=o()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for pluginName=${e}`);return t}function i(e,t="default"){const n=s(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${e} and pluginId=${t}`);return n}},130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(119);t.getActivePlugin=function(e,t,n={}){const o=Object.entries(e).find((([e,n])=>!!r.matchPath(t,{path:n.path,exact:!1,strict:!1}))),s=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!s&&n.failfast)throw new Error(`Can't find active docs plugin for pathname=${t}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return s},t.getLatestVersion=e=>e.versions.find((e=>e.isLast)),t.getActiveVersion=(e,n)=>{const o=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})))},t.getActiveDocContext=(e,n)=>{const o=t.getActiveVersion(e,n),s=null==o?void 0:o.docs.find((e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:s,alternateDocVersions:s?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(s.id):{}}},t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),s=o.activeVersion!==r;return{latestDocSuggestion:s?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:s?r:void 0}}},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)}},132:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;const o=r(n(22));t.useTitleFormatter=e=>{const{siteConfig:t={}}=o.default(),{title:n,titleDelimiter:r="|"}=t;return e&&e.trim().length?`${e.trim()} ${r} ${n}`:n}},133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;const r=n(0),o=n(123),s=n(117),i=n(135);t.useDocsPreferredVersion=function(e=i.DEFAULT_PLUGIN_ID){const t=s.useDocsData(e),[n,a]=o.useDocsPreferredVersionContext(),{preferredVersionName:c}=n[e];return{preferredVersion:c?t.versions.find((e=>e.name===c)):null,savePreferredVersionName:r.useCallback((t=>{a.savePreferredVersion(e,t)}),[a])}},t.useDocsPreferredVersionByPluginId=function(){const e=s.useAllDocsData(),[t]=o.useDocsPreferredVersionContext(),n=Object.keys(e),r={};return n.forEach((n=>{r[n]=function(n){const r=e[n],{preferredVersionName:o}=t[n];return o?r.versions.find((e=>e.name===o)):null}(n)})),r}},134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=e=>`docs-preferred-version-${e}`,o={save:(e,t,n)=>{"none"===t||window.localStorage.setItem(r(e),n)},read:(e,t)=>"none"===t?null:window.localStorage.getItem(r(e)),clear:(e,t)=>{"none"===t||window.localStorage.removeItem(r(e))}};t.default=o},135:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));const r="default"},136:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)(void 0);t.a=o},137:function(e,t,n){"use strict";var r=n(0);const o=n.n(r).a.createContext(void 0);t.a=o},142:function(e,t,n){"use strict";var r=n(0),o=n(137);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},161:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let s=!1;o.rangeCount>0&&(s=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch(a){}return n.remove(),s&&(o.removeAllRanges(),o.addRange(s)),r&&r.focus(),i};e.exports=r,e.exports.default=r},162:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,s]=t;if(r&&s){r=parseInt(r),s=parseInt(s);const e=r<s?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(s+=e);for(let t=r;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);
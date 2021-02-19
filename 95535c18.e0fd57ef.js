(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{115:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,m=b["".concat(c,".").concat(d)]||b[d]||l[d]||o;return r?a.a.createElement(m,i(i({ref:t},u),{},{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(115)),c={id:"approach",title:"Approach"},i={unversionedId:"approach",id:"approach",isDocsHomePage:!1,title:"Approach",description:"- For web, we've used React Aria which provides ARIA attributes and behaviour (keyboard navigation) for commonly used components.",source:"@site/docs/approach.md",slug:"/approach",permalink:"/react-native-aria/docs/approach",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/approach.md",version:"current"},p=[],u={toc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For web, we've used ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://react-spectrum.adobe.com/react-aria/index.html"}),"React Aria")," which provides ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-1.1/"}),"ARIA")," attributes and behaviour (keyboard navigation) for commonly used components.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For iOS/Android, we've created similar hooks like React Aria but instead of web-supported ARIA/behaviour, it returns ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/accessibility"}),"React Native supported accessibility props"),"."))),Object(o.b)("p",null,"About the architecture - ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://react-spectrum.adobe.com/architecture.html"}),"React Spectrum")))}s.isMDXComponent=!0}}]);
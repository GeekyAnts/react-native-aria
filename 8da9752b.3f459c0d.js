(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{115:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(m,s(s({ref:t},l),{},{components:r})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n,o=r(3),a=r(7),i=(r(0),r(115)),s={id:"useOverlayPosition",title:"useOverlayPosition"},c={unversionedId:"useOverlayPosition",id:"useOverlayPosition",isDocsHomePage:!1,title:"useOverlayPosition",description:"Handles positioning overlays like popovers and menus relative to a trigger element, and updating the position when the window resizes.",source:"@site/docs/useOverlayPosition.mdx",slug:"/useOverlayPosition",permalink:"/react-native-aria/docs/useOverlayPosition",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/useOverlayPosition.mdx",version:"current",sidebar:"someSidebar",previous:{title:"OverlayContainer",permalink:"/react-native-aria/docs/OverlayContainer"}},l=[{value:"Install",id:"install",children:[]},{value:"Import",id:"import",children:[]},{value:"API",id:"api",children:[]},{value:"Example",id:"example",children:[]}],p=(n="Install",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),u={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Handles positioning overlays like popovers and menus relative to a trigger element, and updating the position when the window resizes."),Object(i.b)("h3",{id:"install"},"Install"),Object(i.b)(p,{p:"@react-native-aria/overlays",mdxType:"Install"}),Object(i.b)("h3",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'import { useOverlayPosition } from "@react-native-aria/overlays";\n')),Object(i.b)("h3",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"useOverlayPosition(props: AriaPositionProps): PositionAria\n")),Object(i.b)("h4",{id:"ariapositionprops"},"AriaPositionProps"),Object(i.b)("p",null,"Props for the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://react-spectrum.adobe.com/react-aria/useOverlayPosition.html"}),"overlay position"),"."),Object(i.b)("h4",{id:"positionaria"},"PositionAria"),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://react-spectrum.adobe.com/react-aria/useOverlayPosition.html"}),"Position info")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("iframe",{src:"https://snack.expo.io/embedded/@nishanbende/useoverlayposition?preview=true&platform=web&theme=dark",height:"500",width:"100%"}))}b.isMDXComponent=!0}}]);
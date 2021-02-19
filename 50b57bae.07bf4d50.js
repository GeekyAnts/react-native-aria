(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{120:function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));var r=t(0),o=t.n(r),i=t(124),n=t(114),s=t(55),c=t.n(s);const l=37,u=39;var p=function(e){const{lazy:a,block:t,defaultValue:s,values:p,groupId:d,className:b}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(i.a)(),[f,O]=Object(r.useState)(s),j=r.Children.toArray(e.children);if(null!=d){const e=m[d];null!=e&&e!==f&&p.some((a=>a.value===e))&&O(e)}const v=e=>{O(e),null!=d&&h(d,e)},R=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(n.a)("tabs",{"tabs--block":t},b)},p.map((({value:e,label:a})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(n.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>R.push(e),onKeyDown:e=>{((e,a,t)=>{switch(t.keyCode){case u:((e,a)=>{const t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()})(e,a);break;case l:((e,a)=>{const t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,a)}})(R,e.target,e)},onFocus:()=>v(e),onClick:()=>{v(e)}},a)))),a?Object(r.cloneElement)(j.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map(((e,a)=>Object(r.cloneElement)(e,{key:a,hidden:e.props.value!==f})))))},d=t(3);var b=function({children:e,hidden:a,className:t}){return o.a.createElement("div",Object(d.a)({role:"tabpanel"},{hidden:a,className:t}),e)},m=t(125);function h({p:e}){return o.a.createElement(p,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}]},o.a.createElement(b,{value:"yarn"},o.a.createElement(m.a,null,"yarn add ",e)),o.a.createElement(b,{value:"npm"},o.a.createElement(m.a,null,"npm install ",e)))}},84:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(115)),n=t(120),s={id:"useRadioGroup",title:"useRadioGroup"},c={unversionedId:"useRadioGroup",id:"useRadioGroup",isDocsHomePage:!1,title:"useRadioGroup",description:"Provides the behavior and accessibility implementation for a radio group component. Radio groups allow users to select a single item from a list of mutually exclusive options.",source:"@site/docs/useRadioGroup.mdx",slug:"/useRadioGroup",permalink:"/react-native-aria/docs/useRadioGroup",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/useRadioGroup.mdx",version:"current",sidebar:"someSidebar",previous:{title:"useCheckboxGroup",permalink:"/react-native-aria/docs/useCheckboxGroup"},next:{title:"useSwitch",permalink:"/react-native-aria/docs/useSwitch"}},l=[{value:"Install",id:"install",children:[]},{value:"Import",id:"import",children:[]},{value:"API",id:"api",children:[]},{value:"Example",id:"example",children:[]}],u={toc:l};function p(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Provides the behavior and accessibility implementation for a radio group component. Radio groups allow users to select a single item from a list of mutually exclusive options."),Object(i.b)("h3",{id:"install"},"Install"),Object(i.b)(n.a,{p:"@react-native-aria/radio",mdxType:"Install"}),Object(i.b)("h3",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"import {useRadioGroup, useRadio} from '@react-native-aria/radio'\n")),Object(i.b)("h3",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"useRadioGroup(props: AriaRadioGroupProps, state: RadioGroupState): RadioGroupAria\nuseRadio(\n  props: RadioAriaProps,\n  state: RadioGroupState,\n  ref: RefObject<HTMLElement>\n): RadioAria\n")),Object(i.b)("h4",{id:"ariaradiogroupprops"},"AriaRadioGroupProps"),Object(i.b)("p",null,"Props for the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://react-spectrum.adobe.com/react-aria/useRadioGroup.html"}),"radio group"),"."),Object(i.b)("h4",{id:"radiogroupstate"},"RadioGroupState"),Object(i.b)("p",null,"State for the radio group, as returned by ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://react-spectrum.adobe.com/react-stately/useRadioGroupState.html"}),"useRadioGroupState"),"."),Object(i.b)("h4",{id:"radiogrouparia"},"RadioGroupAria"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"{\n  /** Props for the radio group wrapper element. */\n  radioGroupProps: HTMLAttributes<HTMLElement> & AccessibilityProps,\n\n  /** Props for the radio group's visible label (if any). */\n  labelProps: HTMLAttributes<HTMLElement> & AccessibilityProps\n}\n")),Object(i.b)("h4",{id:"radioariaprops"},"RadioAriaProps"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Props for the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://react-spectrum.adobe.com/react-aria/useRadioGroup.html"}),"radio."))),Object(i.b)("h4",{id:"radioaria"},"RadioAria"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"{\n  /** Props for the input or Pressable/Touchable element. */\n  inputProps: InputHTMLAttributes<HTMLElement> & AccessibilityProps,\n}\n")),Object(i.b)("h4",{id:"ref"},"ref"),Object(i.b)("p",null,"Ref to the HTML input element."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("iframe",{src:"https://snack.expo.io/embedded/@nishanbende/radiogroup?preview=true&platform=web&theme=dark",height:"500",width:"100%"}))}p.isMDXComponent=!0}}]);
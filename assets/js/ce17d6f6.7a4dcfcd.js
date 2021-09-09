"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[978],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4901:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={},s={unversionedId:"tremor-script/extractors/datetime",id:"tremor-script/extractors/datetime",isDocsHomePage:!1,title:"Datetime",description:"The datetime extractor parses the input into a timestamp. The format of the target needs to be specified as a parameter to the extractor.",source:"@site/docs/tremor-script/extractors/datetime.md",sourceDirName:"tremor-script/extractors",slug:"/tremor-script/extractors/datetime",permalink:"/tremor-new-website/docs/tremor-script/extractors/datetime",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/tremor-script/extractors/datetime.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CIDR",permalink:"/tremor-new-website/docs/tremor-script/extractors/cidr"},next:{title:"Dissect",permalink:"/tremor-new-website/docs/tremor-script/extractors/dissect"}},p=[{value:"Predicate",id:"predicate",children:[]},{value:"Extraction",id:"extraction",children:[]},{value:"Example",id:"example",children:[]},{value:"Errors",id:"errors",children:[]}],l={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The datetime extractor parses the input into a timestamp. The format of the target needs to be specified as a parameter to the extractor."),(0,a.kt)("h2",{id:"predicate"},"Predicate"),(0,a.kt)("p",null,"When used with ",(0,a.kt)("inlineCode",{parentName:"p"},"~"),", the predicate parses if the target can be parsed to a nanosecond-precision timestamp. The predicate will fail if it encounters any of the errors described in the Error section below."),(0,a.kt)("h2",{id:"extraction"},"Extraction"),(0,a.kt)("p",null,"If the predicate parses, the extractor returns the 64-bit nanosecond-precise UTC UNIX timestamp."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},'match { "test" : "2019-01-01 09:42" } of\n  case foo = %{ test ~= datetime|%Y-%m-%d %H:%M| } => foo.test\n  default => "ko"\nend;\n## output: 1546335720000000000\n')),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("p",null,"The extractor will fail due to one of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Incorrect input is passed"),(0,a.kt)("li",{parentName:"ul"},"Input doesn't match the format passed"),(0,a.kt)("li",{parentName:"ul"},"Input doesn't contain the Year, Month, Day, Hour & Minute section irrespective of the format passed."),(0,a.kt)("li",{parentName:"ul"},"Input contains more components than the format passed")))}u.isMDXComponent=!0}}]);
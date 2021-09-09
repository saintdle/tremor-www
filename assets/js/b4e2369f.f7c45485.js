"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[7696],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8832:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},p={unversionedId:"Workshop/examples/passthrough/README",id:"Workshop/examples/passthrough/README",isDocsHomePage:!1,title:"Passthrough",description:"The passthrough example is the simplest possible configuration of tremor. It shows the very basic building blocks: Onramp, Offramp, Binding, Mapping and Pipeline.",source:"@site/docs/Workshop/examples/00_passthrough/README.md",sourceDirName:"Workshop/examples/00_passthrough",slug:"/Workshop/examples/passthrough/README",permalink:"/tremor-new-website/docs/Workshop/examples/passthrough/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/Workshop/examples/00_passthrough/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tremor Workshop",permalink:"/tremor-new-website/docs/Workshop/README"},next:{title:"Filter",permalink:"/tremor-new-website/docs/Workshop/examples/filter/README"}},l=[{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]},{value:"Command line testing during logic development",id:"command-line-testing-during-logic-development",children:[]}],c={toc:l};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"passthrough")," example is the simplest possible configuration of tremor. It shows the very basic building blocks: Onramp, Offramp, Binding, Mapping and Pipeline."),(0,o.kt)("h2",{id:"environment"},"Environment"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{target:"_blank",href:n(2526).Z},"onramp")," we use is a websocket onramp listening on port 4242, it receives ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," formatted messages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'onramp:\n  - id: ws-input # A unique id for binding/mapping\n    type: ws # The unique type descriptor for the onramp ( websocket server here)\n    codec: json # The underlying data format expected for application payload data\n    config:\n      port: 4242 # The TCP port to listen on\n      host: "0.0.0.0" # The IP address to bind on ( all interfaces in this case )\n')),(0,o.kt)("p",null,"It connects to the pipeline ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," in the ",(0,o.kt)("a",{target:"_blank",href:n(3940).Z},(0,o.kt)("code",null,"example.trickle"))," file using the trickle query language to express its logic."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{target:"_blank",href:n(2526).Z},"offramp")," we used is a console offramp producing to standard output. It receives ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," formatted messages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'offramp:\n  - id: stdout-output # The unique id for binding/mapping\n    type: stdout # The unique type descriptor for the offramp ( stdout here )\n    codec: json # The underlying data format expected for application payload data\n    config:\n      prefix: ">> " # A prefix for data emitted on standard output by this offramp\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{target:"_blank",href:n(9193).Z},"binding")," expresses those relations and gives the graph of onramp, pipeline and offramp."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'binding:\n  - id: example # The unique name of this binding template\n    links:\n      "/onramp/ws-input/{instance}/out": # Connect the input to the pipeline\n        - "/pipeline/example/{instance}/in"\n      "/pipeline/example/{instance}/out": # Connect the pipeline to the output\n        - "/offramp/stdout-output/{instance}/in"\n')),(0,o.kt)("p",null,"Finally the ",(0,o.kt)("a",{target:"_blank",href:n(4420).Z},"mapping")," instanciates the binding with the given name and instance variable to activate the elements of the binding."),(0,o.kt)("h2",{id:"business-logic"},"Business Logic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-trickle"},"select event from in into out\n")),(0,o.kt)("h2",{id:"command-line-testing-during-logic-development"},"Command line testing during logic development"),(0,o.kt)("p",null,"Run a the passthrough query against a sample input.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ tremor run -i input.json etc/tremor/config/example.trickle\n{"hello": "world"}\n')),(0,o.kt)("p",null,"Deploy the solution into a docker environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ docker-compose up\n>> {"hello": "world", "selected": false}\n>> {"hello": "again", "selected": true}\n')),(0,o.kt)("p",null,"Inject test messages via ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vi/websocat"},"websocat")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Can be installed via ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo install websocat")," for the lazy/impatient amongst us"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat inputs.txt | websocat ws://localhost:4242\n...\n")))}u.isMDXComponent=!0},2526:function(e,t,n){t.Z=n.p+"assets/files/00_ramps-ab6f76c516e7c0bbd9a5e6c81a5d1e0b.yaml"},9193:function(e,t,n){t.Z=n.p+"assets/files/01_binding-533131e2174068e377d72c672b803e8c.yaml"},4420:function(e,t,n){t.Z=n.p+"assets/files/02_mapping-9c81a0870131ab67e86b0f001460a101.yaml"},3940:function(e,t,n){t.Z=n.p+"assets/files/example-a5bc721242b579503e73a6e7cda4ec32.trickle"}}]);
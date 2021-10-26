"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9009],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33052:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={},c="Websocket Proxy",l={unversionedId:"recipes/proxies_lt_ws/README",id:"recipes/proxies_lt_ws/README",isDocsHomePage:!1,title:"Websocket Proxy",description:"Example Websocket proxy application built on top of Tremor and meant to be a demonstration of linked transports.",source:"@site/docs/recipes/33_proxies_lt_ws/README.md",sourceDirName:"recipes/33_proxies_lt_ws",slug:"/recipes/proxies_lt_ws/README",permalink:"/docs/next/recipes/proxies_lt_ws/README",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/docs/recipes/33_proxies_lt_ws/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"HTTP Proxy",permalink:"/docs/next/recipes/proxies_lt_http/README"},next:{title:"HTTP -> Websocket Bridge",permalink:"/docs/next/recipes/bridges_lt_http_ws/README"}},p=[{value:"Setup",id:"setup",children:[{value:"Sources and sinks",id:"sources-and-sinks",children:[]},{value:"Message flow",id:"message-flow",children:[]},{value:"Processing logic",id:"processing-logic",children:[]}]},{value:"Testing",id:"testing",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"websocket-proxy"},"Websocket Proxy"),(0,a.kt)("p",null,"Example Websocket proxy application built on top of Tremor and meant to be a demonstration of ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/operations/linked-transports"},"linked transports"),"."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"All the code here is available in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www/tree/main/docs/recipes/33_proxies_lt_ws"},"git repository")," as well."))),(0,a.kt)("h3",{id:"sources-and-sinks"},"Sources and sinks"),(0,a.kt)("p",null,"We configure a websocket onramp listening on port 9139, that is meant to be a proxy for our ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/recipes/servers_lt_ws/README"},"example websocket server")," (configured as en endpoint in the websocket offramp here)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'onramp:\n  - id: ws\n    type: ws\n    linked: true\n    codec: string\n    preprocessors:\n      - lines\n    config:\n      host: 0.0.0.0\n      port: 9139\n\nofframp:\n  - id: upstream\n    type: ws\n    linked: true\n    codec: string\n    postprocessors:\n      - lines\n    config:\n      url: "ws://tremor-server:8139"\n')),(0,a.kt)("h3",{id:"message-flow"},"Message flow"),(0,a.kt)("p",null,"Incoming websocket messages from a client's websocket connection are forwarded to the upstream websocket server (via the ",(0,a.kt)("inlineCode",{parentName:"p"},"pass_incoming")," pipeline which lives up to its name). The resulting upstream reply is then returned back to the client reusing its connection (after a quick pass through the ",(0,a.kt)("inlineCode",{parentName:"p"},"pass_outgoing")," pipeline)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'binding:\n  - id: main\n    links:\n      "/onramp/ws/{instance}/out":\n        ["/pipeline/pass_incoming/{instance}/in"]\n\n      "/pipeline/pass_incoming/{instance}/out":\n        ["/offramp/upstream/{instance}/in"]\n\n      "/offramp/upstream/{instance}/out":\n        ["/pipeline/pass_outgoing/{instance}/in"]\n\n      "/pipeline/pass_outgoing/{instance}/out":\n        ["/onramp/ws/{instance}/in"]\n')),(0,a.kt)("h3",{id:"processing-logic"},"Processing logic"),(0,a.kt)("p",null,"Implementation for the ",(0,a.kt)("inlineCode",{parentName:"p"},"pass_incoming")," (as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"pass_outgoing"),") pipeline:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event from in into out;\n")),(0,a.kt)("p",null,"This example is intentionally light on the processing but you can imagine doing arbitrary processing based on the event data here (as well as dynamically changing the confiuration for the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/artefacts/offramps#ws"},"websocket offramp")," via its metadata variables --  eg: things like the server url)."),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"Assuming you have all the code from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www/tree/main/docs/recipes/33_proxies_lt_ws"},"git repository"),", run the following to start our application (along with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/recipes/servers_lt_ws/README"},"tremor websocket server example")," that is the upstream for our proxy):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up\n")),(0,a.kt)("p",null,"Now let's try to test the echo capabilities of our upstream server, via a tool like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vi/websocat"},"websocat"),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Can be installed via ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo install websocat")," for the lazy/impatient amongst us"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# via proxy\n$ echo "hello" | websocat -n1 ws://localhost:9139\nhello\n\n# the upstream\n$ echo "hello" | websocat -n1 ws://localhost:8139\nhello\n')),(0,a.kt)("p",null,"Our snot-handling works as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'$ echo "snot" | websocat -n1 ws://localhost:9139\nbadger\n')),(0,a.kt)("p",null,"And if there's an internal tremor error while processing both the incoming message and the upstream reply to it (eg: codec or pre/post-processor failure), or if the upstream server is down, an error will be bubbled up to the client. Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# stop the upstream server\n$ docker stop 33_proxies_lt_ws_tremor-server_1\n\n# upstream connection now gets closed from the proxy\n$ echo "hello" | websocat -n1 ws://localhost:9139\n{"error":"Error receiving reply from server ws://localhost:8139: WebSocket protocol error: Connection reset without closing handshake","event_id":"\n1:0:9"}\n\n# sending further messages results in errors\n$ echo "hello" | websocat -n1 ws://localhost:9139\n$ echo "hello" | websocat -n1 ws://localhost:9139\n{"error":"Error sending event to server ws://localhost:8139: Trying to work with closed connection","event_id":"1:0:10"}\n')))}u.isMDXComponent=!0}}]);
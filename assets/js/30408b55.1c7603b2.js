"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[3110],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19518:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={},p="HTTP Proxy",c={unversionedId:"recipes/proxies_lt_http/README",id:"version-0.11/recipes/proxies_lt_http/README",isDocsHomePage:!1,title:"HTTP Proxy",description:"Example HTTP proxy application built on top of Tremor and meant to be a demonstration of linked transports.",source:"@site/versioned_docs/version-0.11/recipes/32_proxies_lt_http/README.md",sourceDirName:"recipes/32_proxies_lt_http",slug:"/recipes/proxies_lt_http/README",permalink:"/docs/recipes/proxies_lt_http/README",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/versioned_docs/version-0.11/recipes/32_proxies_lt_http/README.md",tags:[],version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"Websocket Server",permalink:"/docs/recipes/servers_lt_ws/README"},next:{title:"Websocket Proxy",permalink:"/docs/recipes/proxies_lt_ws/README"}},l=[{value:"Setup",id:"setup",children:[{value:"Sources and sinks",id:"sources-and-sinks",children:[]},{value:"Request flow",id:"request-flow",children:[]},{value:"Processing logic",id:"processing-logic",children:[]}]},{value:"Testing",id:"testing",children:[]}],u={toc:l};function d(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"http-proxy"},"HTTP Proxy"),(0,i.kt)("p",null,"Example HTTP proxy application built on top of Tremor and meant to be a demonstration of ",(0,i.kt)("a",{parentName:"p",href:"/docs/operations/linked-transports"},"linked transports"),"."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All the code here is available in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www/tree/main/docs/recipes/32_proxies_lt_http"},"git repository")," as well."))),(0,i.kt)("h3",{id:"sources-and-sinks"},"Sources and sinks"),(0,i.kt)("p",null,"We configure a rest onramp listening on port 9139, that is meant to be a proxy for our ",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/servers_lt_http/README"},"example HTTP server")," (configured as en endpoint in the rest offramp here)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"onramp:\n  - id: http\n    type: rest\n    linked: true\n    codec: string\n    config:\n      host: 0.0.0.0\n      port: 9139\n\nofframp:\n  - id: upstream\n    type: rest\n    linked: true\n    codec: string\n    config:\n      endpoint:\n        host: tremor-server\n        port: 8139\n")),(0,i.kt)("h3",{id:"request-flow"},"Request flow"),(0,i.kt)("p",null,"Incoming requests from clients are forwarded to the ",(0,i.kt)("inlineCode",{parentName:"p"},"request_processing")," pipeline, from where it goes to the upstream server. The resulting response is then returned back to the client which initiated the request (after any needed processing from the ",(0,i.kt)("inlineCode",{parentName:"p"},"response_processing")," pipeline)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'binding:\n  - id: main\n    links:\n      # send incoming requests for processing\n      "/onramp/http/{instance}/out":\n        ["/pipeline/request_processing/{instance}/in"]\n\n      # process incoming requests and relay it to upstream\n      "/pipeline/request_processing/{instance}/out":\n        ["/offramp/upstream/{instance}/in"]\n\n      # send the response from upstream for processing\n      "/offramp/upstream/{instance}/out":\n        ["/pipeline/response_processing/{instance}/in"]\n\n      # process upstream response and send it back as a response to incoming\n      "/pipeline/response_processing/{instance}/out":\n        ["/onramp/http/{instance}/in"]\n')),(0,i.kt)("h3",{id:"processing-logic"},"Processing logic"),(0,i.kt)("p",null,"Implementation for the ",(0,i.kt)("inlineCode",{parentName:"p"},"request_processing")," pipeline:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-trickle"},'define script process\nscript\n  # erase the host/port from request url so that requests are routed\n  # to the endpoint configured as part of the rest offramp\n  # can set endpoint concretely here too, depending on the need\n  # (eg: different endpoint based on request path/headers)\n  let $endpoint = patch $request.url of\n    erase "host",\n    erase "port"\n  end;\n  event;\nend;\n\ncreate script process;\n\n# main request processing\nselect event from in into process;\nselect event from process into out;\n\n# tremor runtime errors from the processing script\nselect event from process/err into err;\n')),(0,i.kt)("p",null,"This example demonstrates the minimal processing needed for the proxying logic to work, but you can do any arbitrary processsing on the incoming request as needed (eg: deciding a different upstream based on certain incoming request attributes like headers or request paths)."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{target:"_blank",href:n(53184).Z},"response_processing")," pipeline is similarly minimal -- it adds an entry to the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-powered-by")," header for showing response modifications (if you don't need it, you can use a passthrough pipeline, or even rely on the default ",(0,i.kt)("inlineCode",{parentName:"p"},"system::passthrough")," pipeline which eliminates the need to create this new pipeline)."),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"Assuming you have all the code from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www/tree/main/docs/recipes/32_proxies_lt_http"},"git repository"),", run the following to start our application (along with the tremor http server example that is the upstream for our proxy):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up\n")),(0,i.kt)("p",null,"Now let's try to access an endpoint that we know is available in the upstream server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'# via the proxy. note the additional entry we have in the x-powered-by header\n$ curl -i http://localhost:9139/snot\nHTTP/1.1 200 OK\ncontent-length: 8\nx-powered-by: Tremor, Tremor (As Proxy)\ncontent-type: application/json\ndate: Thu, 15 Oct 2020 05:00:06 GMT\n\n"badger"\n\n\n# the upstream\n$ curl -i http://localhost:8139/snot\nHTTP/1.1 200 OK\ncontent-length: 8\ndate: Thu, 15 Oct 2020 05:00:44 GMT\ncontent-type: application/json\nx-powered-by: Tremor\n\n"badger"\n')),(0,i.kt)("p",null,"All the ",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/servers_lt_http/README#testing"},"testing examples")," for the example HTTP server should work from here as well, with the port ",(0,i.kt)("inlineCode",{parentName:"p"},"8139")," there swapped to our proxy application port ",(0,i.kt)("inlineCode",{parentName:"p"},"9139"),"."))}d.isMDXComponent=!0},53184:function(e,t,n){t.Z=n.p+"assets/files/response_processing-94c9c4cd73b8955fbb9e0e949da92e7f.trickle"}}]);
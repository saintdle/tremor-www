"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[2108],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4008:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={},p={unversionedId:"Workshop/examples/syslog_udp_dns/README",id:"Workshop/examples/syslog_udp_dns/README",isDocsHomePage:!1,title:"syslog udp dns",description:"This workshop is the samne as the syslogupd workship with the added component of enriching the syslog message we receive with a DNS lookup.",source:"@site/docs/Workshop/examples/15_syslog_udp_dns/README.md",sourceDirName:"Workshop/examples/15_syslog_udp_dns",slug:"/Workshop/examples/syslog_udp_dns/README",permalink:"/tremor-new-website/docs/Workshop/examples/syslog_udp_dns/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/Workshop/examples/15_syslog_udp_dns/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"syslog udp",permalink:"/tremor-new-website/docs/Workshop/examples/syslog_udp/README"},next:{title:"Transient Write-Ahead Log",permalink:"/tremor-new-website/docs/Workshop/examples/transient_gd/README"}},l=[{value:"Setup",id:"setup",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]}],d={toc:l};function c(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This workshop is the samne as the ",(0,i.kt)("a",{parentName:"p",href:"../14_syslog_udp/"},"syslog_upd")," workship with the added component of enriching the syslog message we receive with a DNS lookup."),(0,i.kt)("p",null,"We will only discuss the newly introduced components, for the rest pleas refer to the ",(0,i.kt)("a",{parentName:"p",href:"../14_syslog_udp/"},"syslog_upd")," workshop."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All the code here is available in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/Workshop/examples/14_syslog_udp"},"git repository")," as well and can be run with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker compose up"),"."))),(0,i.kt)("h2",{id:"environment"},"Environment"),(0,i.kt)("p",null,"We get a new ",(0,i.kt)("a",{target:"_blank",href:n(7115).Z},"sink"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"dns")," sink. This is what tremor calls a ",(0,i.kt)("inlineCode",{parentName:"p"},"linked transport"),", aka a ",(0,i.kt)("inlineCode",{parentName:"p"},"sink")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," that can both receive and send messages."),(0,i.kt)("p",null,"In the case of the ",(0,i.kt)("inlineCode",{parentName:"p"},"dns")," sink it receives lookup requests and sends the replies."),(0,i.kt)("p",null,"This changes the ",(0,i.kt)("a",{target:"_blank",href:n(7862).Z},"binding")," the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"metronome -> producer -> syslog-udp-out\n\nsyslog-udp-in -> dns -> dns\n\ndns -> consumer -> stdout-output\n")),(0,i.kt)("h2",{id:"business-logic"},"Business Logic"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"producer")," pipeline stays unchanged however we add a new ",(0,i.kt)("inlineCode",{parentName:"p"},"dns")," pipeline and the ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer")," piepline now includes some logic."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"dns")," pipeline does two things. First it moves the event itself into the ",(0,i.kt)("inlineCode",{parentName:"p"},"$correlation")," metadata. Linked transports will preserve this metadata key over requests allowing to correlate the output event with the input request. Second it changes the event into a lookup of the ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," record (ip address) for the hostname. Finally we do the wiering with select statments."),(0,i.kt)("p",null,":::warn\nStoring data in ",(0,i.kt)("inlineCode",{parentName:"p"},"$correlation")," will mean this data has to be kept in memory until the event is processed, depending on throughput and pending requests this can be a significant memory cost.\n:::"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-trickle"},'# dns.trickle\ndefine script dns\nscript\n let $correlation = event;\n {\n  "lookup": $correlation.hostname,\n  "type": "A"\n }\nend;\n\ncreate script dns;\n\nselect event from in into dns;\nselect event from dns into out;\n')),(0,i.kt)("p",null,"In addition the ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer")," pipeline got slightly more complicated. We use ",(0,i.kt)("inlineCode",{parentName:"p"},"merge")," to replace the lookup response from the ",(0,i.kt)("inlineCode",{parentName:"p"},"dns")," sink with it's correlation (the orriginal event) and merge merge it by inserting the IP we looked up into the event. In result we now have the original event with the added ",(0,i.kt)("inlineCode",{parentName:"p"},"ip")," field containing the IP correlating to the hostname."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-trickle"},'# consumer.trickle\nselect merge $correlation of {"ip": event[0].A} end from in into out\n')))}c.isMDXComponent=!0},7115:function(e,t,n){t.Z=n.p+"assets/files/00_ramps-3aff56264bc3e23d9b0ea73cc601f6a0.yaml"},7862:function(e,t,n){t.Z=n.p+"assets/files/01_binding-80164180a5c99e2f5bd7a319de9dbad2.yaml"}}]);
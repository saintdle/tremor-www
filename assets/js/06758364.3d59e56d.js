"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[4575],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return c}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(o),c=a,m=u["".concat(l,".").concat(c)]||u[c]||h[c]||i;return o?n.createElement(m,r(r({ref:t},p),{},{components:o})):n.createElement(m,r({ref:t},p))}));function c(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4490:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return h}});var n=o(7462),a=o(3366),i=(o(7294),o(3905)),r=["components"],s={},l={unversionedId:"Development/issue-investigation",id:"Development/issue-investigation",isDocsHomePage:!1,title:"issue-investigation",description:"Tools",source:"@site/docs/Development/issue-investigation.md",sourceDirName:"Development",slug:"/Development/issue-investigation",permalink:"/tremor-new-website/docs/Development/issue-investigation",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/Development/issue-investigation.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Debugging Tremor",permalink:"/tremor-new-website/docs/Development/debugging"},next:{title:"contributions",permalink:"/tremor-new-website/docs/Development/process/contributions"}},d=[{value:"Tools",id:"tools",children:[{value:"Logs &amp; Metrics (prod)",id:"logs--metrics-prod",children:[]},{value:"<code>htop</code> (prod)",id:"htop-prod",children:[]},{value:"<code>perf</code> (prod: Linux)",id:"perf-prod-linux",children:[]},{value:"<code>netstat</code> (prod)",id:"netstat-prod",children:[]},{value:"<code>ping</code> (prod)",id:"ping-prod",children:[]},{value:"<code>lldb</code> / <code>lldb-rust</code> (prod)",id:"lldb--lldb-rust-prod",children:[]},{value:"<code>valgrind</code> (dev: Linux)",id:"valgrind-dev-linux",children:[]},{value:"<code>dtrace</code> (dev: OS X / Windows / BSD)",id:"dtrace-dev-os-x--windows--bsd",children:[]},{value:"Instruments (dev: OS X)",id:"instruments-dev-os-x",children:[]},{value:"<code>strace</code> (prod: Linux)",id:"strace-prod-linux",children:[]},{value:"<code>websocat</code> (prod: nay)",id:"websocat-prod-nay",children:[]}]},{value:"Methodology",id:"methodology",children:[]},{value:"Logs",id:"logs",children:[{value:"Out of memory &#39;issue&#39; 01",id:"out-of-memory-issue-01",children:[]},{value:"Infinite loop in librdkafka",id:"infinite-loop-in-librdkafka",children:[]},{value:"UDP GELF messages issue",id:"udp-gelf-messages-issue",children:[]}]}],p={toc:d};function h(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"investigations"},"Investigations"),(0,i.kt)("h2",{id:"tools"},"Tools"),(0,i.kt)("p",null,"Tools for investigating issues in a production environment."),(0,i.kt)("h3",{id:"logs--metrics-prod"},"Logs & Metrics (prod)"),(0,i.kt)("p",null,"Logs and metrics are the first and most fundamental tool when starting to investigate an issue. While they do not provide a deep insight they allow correlating events from the system under investigation and it is dependants and dependencies."),(0,i.kt)("h3",{id:"htop-prod"},(0,i.kt)("inlineCode",{parentName:"h3"},"htop")," (prod)"),(0,i.kt)("p",null,"Not really a debugging tool but a nice starting point to see values like memory consumption, CPU load both per process and per thread. Things to look out for are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Memory consumption"),(0,i.kt)("li",{parentName:"ul"},"CPU load"),(0,i.kt)("li",{parentName:"ul"},"Number of processes"),(0,i.kt)("li",{parentName:"ul"},"System Load (",(0,i.kt)("a",{parentName:"li",href:"http://www.brendangregg.com/blog/2017-08-08/linux-load-averages.html"},"careful this can be misleading"),"!)")),(0,i.kt)("p",null,"To a degree ",(0,i.kt)("inlineCode",{parentName:"p"},"top")," can be used in its place if ",(0,i.kt)("inlineCode",{parentName:"p"},"htop")," isn't available."),(0,i.kt)("h3",{id:"perf-prod-linux"},(0,i.kt)("inlineCode",{parentName:"h3"},"perf")," (prod: Linux)"),(0,i.kt)("p",null,"Perf is a tool that is used to profile processes, it gives an overview over functions that CPU time is spend on. While it doesn't give a full trace but it is quite handy in situations where we have a hot function to find where a program is spending it time."),(0,i.kt)("p",null,"It can be run to find where a program spends time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"perf record -p <pid> # ctrl-c after a while to stop recording\nperf report # will pick up the data that record generated\n")),(0,i.kt)("p",null,"It can do ",(0,i.kt)("strong",{parentName:"p"},"a lot more")," than this. A full tutorial on perf can be found ",(0,i.kt)("a",{parentName:"p",href:"https://perf.wiki.kernel.org/index.php/Tutorial"},"here"),"."),(0,i.kt)("h3",{id:"netstat-prod"},(0,i.kt)("inlineCode",{parentName:"h3"},"netstat")," (prod)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"netstat")," can be helpful to investigate networking state of connections and identify connection issues. Again it can be limited in the scope of docker unless run inside of the container. Please look at the man pages (",(0,i.kt)("a",{parentName:"p",href:"https://linux.die.net/man/8/netstat"},(0,i.kt)("inlineCode",{parentName:"a"},"man netstat")),") for details, ",(0,i.kt)("a",{parentName:"p",href:"https://linuxtechlab.com/learn-use-netstat-with-examples/"},"this tutorial")," also covers the basics and useful commands."),(0,i.kt)("p",null,"It also allows to investigate routing tables which can be very handy for connection issues."),(0,i.kt)("h3",{id:"ping-prod"},(0,i.kt)("inlineCode",{parentName:"h3"},"ping")," (prod)"),(0,i.kt)("p",null,'This isn\'t exciting but if network related issues are suspected "can I ping this address" can cover a lot of ground and is always worth to check.'),(0,i.kt)("p",null,"This can also be used to investigate MTU"),(0,i.kt)("h3",{id:"lldb--lldb-rust-prod"},(0,i.kt)("inlineCode",{parentName:"h3"},"lldb")," / ",(0,i.kt)("inlineCode",{parentName:"h3"},"lldb-rust")," (prod)"),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"lldb")," and for rust more specifically ",(0,i.kt)("inlineCode",{parentName:"p"},"lldb-rust")," are debuggers. They can attach to a program and step through the application step by step. A good starting guide can be found ",(0,i.kt)("a",{parentName:"p",href:"https://lldb.llvm.org/use/map.html"},"here"),". It needs to be said that using lldb should be done with care, it will stop the program and has the potential to crash or terminate it. So far running lldb against a docker contained often lead to the process hanging or crashing."),(0,i.kt)("h3",{id:"valgrind-dev-linux"},(0,i.kt)("inlineCode",{parentName:"h3"},"valgrind")," (dev: Linux)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"valgrind")," is used to debug and analyze memory leaks. While originally developed for C/C++ it mostly works with rust code as well - however on OS X it has shown to crash code and as the time of writing this is not a usable tool. More information can be found in the ",(0,i.kt)("a",{parentName:"p",href:"http://www.valgrind.org/docs/manual/quick-start.html"},"quick start"),"."),(0,i.kt)("h3",{id:"dtrace-dev-os-x--windows--bsd"},(0,i.kt)("inlineCode",{parentName:"h3"},"dtrace")," (dev: OS X / Windows / BSD)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dtrace\x01"),"is a tool that allows low impact introspection of running systems. It allows putting probes on specific points in either kernel or user land code and perform analytics on the results. It is a very powerful tool but it requires learning to use efficiently. The ",(0,i.kt)("a",{parentName:"p",href:"http://www.brendangregg.com/dtrace.html"},"dtrace toolkit")," is a good starting point."),(0,i.kt)("h3",{id:"instruments-dev-os-x"},"Instruments (dev: OS X)"),(0,i.kt)("p",null,"OS X comes with a user interface around dtrace that abstracts a lot of the complication away and presents some of the core functionality in bite-sized portions that can be used without requiring to understand the whole functionality of dtrace. It is installed alongside with XCode."),(0,i.kt)("p",null,"Some of the more interesting profiling templates are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Leaks - for finding memory leaks"),(0,i.kt)("li",{parentName:"ul"},"Time Profiler - for finding 'hot' functions"),(0,i.kt)("li",{parentName:"ul"},"System Usage (I/O) - for finding I/O bottle necks")),(0,i.kt)("h3",{id:"strace-prod-linux"},(0,i.kt)("inlineCode",{parentName:"h3"},"strace")," (prod: Linux)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"strace")," is a tool that allows tracing sys calls in Linux, it can be helpful to determine what system calls do occur during an observed issue. For example this can rule in our out specific kernel calls such as IO, muteness, threading, networking and so on."),(0,i.kt)("h3",{id:"websocat-prod-nay"},(0,i.kt)("inlineCode",{parentName:"h3"},"websocat")," (prod: nay)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vi/websocat"},(0,i.kt)("inlineCode",{parentName:"a"},"websocat"))," is a WebSocket client that can be used to interact with trmeors WebSocket onramp and offramp for testing."),(0,i.kt)("h2",{id:"methodology"},"Methodology"),(0,i.kt)("p",null,"There is no 'one way' to investigate an issue as what you find during the process will guide the next steps. Having seen and investigated other problems will help as it gives you a set of heuristics to go \"oh I've seen this before last time it was X\" but it is not required."),(0,i.kt)("p",null,"However there are general methods that have shown to be efficient in trying to investigate an issue. The mot basic approach consists of three steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Look at the current state, the indicators that have made the issue visible such as logs or ",(0,i.kt)("inlineCode",{parentName:"li"},"htop"),"."),(0,i.kt)("li",{parentName:"ol"},"Formulate a theory what caused the issue - ideally write it down along with the factors of what promoted you to form this theory."),(0,i.kt)("li",{parentName:"ol"},"Decide on what would prove your theory - this is where you decide what the next debugging step is, it should ideally either completely confirm, or rule out your theory, that however isn't always possible."),(0,i.kt)("li",{parentName:"ol"},"If the steps decided on in step 3 fully confirm the issue you're done. If they fully disprove the theory go back to step 1 with the new information. If you neither have prove or disprove for your theory return to 3 and re-formulate what is required to prove it.")),(0,i.kt)("p",null,"Especially initially it helps to document each step as you progress along with any changes you made. This helps to prevent double-checking the same theory but also serves as a good learning exercise."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Don't be shy to re-visit a theory if you found new evidence for it that were not visible in the first attempt."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is very helpful to talk to someone, formulating the thoughts in sentences and words often springs new ideas and a second perspective helps with."))),(0,i.kt)("h2",{id:"logs"},"Logs"),(0,i.kt)("h3",{id:"out-of-memory-issue-01"},"Out of memory 'issue' 01"),(0,i.kt)("h4",{id:"initial-observationsource-metrics--logs"},"Initial observation(source: Metrics & logs)"),(0,i.kt)("p",null,"On one of the busier boxes the memory of the process kept growing until the system started swapping. This happened repeatedly, after restarting the process the memory would slowly grow again."),(0,i.kt)("h4",{id:"1st-theory-a-memory-leak-in-tremor-script"},"1st theory: a memory leak in tremor-script"),(0,i.kt)("p",null,"Most of tremor was written in rust which makes it very hard to create memory leaks, however we integrated two pieces of C code: tremor script and librdkafka those two pipieceses could either directly or by interfacing with rust introduce memory leaks."),(0,i.kt)("h5",{id:"disprove-of-1st-theory-oom"},"disprove of 1st theory (oom)"),(0,i.kt)("p",null,"We ran tremor extensively using the Leak profiler of Instruments to see if it could spot a memory leak. Any amount of memory profiling we did would not show any unusual allocations and missing deallocations. That made the 1st theory unlikely. However this did show a lot of allocation happening inside librdkafka."),(0,i.kt)("h4",{id:"2nd-theory-misconfigured-librdkafka-operations"},"2nd theory: Misconfigured librdkafka operations"),(0,i.kt)("p",null,"With the hint gained from the last investigation we looked at the configuration of the system. It showed that a number instances of Kafka onramps were used and the hosts it running on were under spaced regarding to what was communicated to us. Looking at the manual for librdkafka showed that by default each librdkafka instance would allocate up to 1GB of memory as a buffer. Running 4 instances at a 4GB of memory box with additional processes this would eventually lead to running out of memory."),(0,i.kt)("h5",{id:"prove-of-2nd-theory"},"prove of 2nd theory"),(0,i.kt)("p",null,"Re-deploying tremor with the librdkafka settings set to only use 100MB of memory for buffers we saw the growth disappear after the expected 400MB proving our theory."),(0,i.kt)("h3",{id:"infinite-loop-in-librdkafka"},"Infinite loop in librdkafka"),(0,i.kt)("h4",{id:"initial-observation-source-metrics--logs"},"Initial observation (source: Metrics & logs)"),(0,i.kt)("p",null,"On GCP a node jumped to 75% (100% on a single core) and stopped processing data. No Kafka partitions were assigned to that node until it was restarted."),(0,i.kt)("p",null,"This bug hunt carries some complications. We have not been able to replicate the bug outside of a production environment. The environment runs on an outdated Linux, has no internet access to download tools and does not have many of the usual debugging tools available. The bug is rare enough that it take between one and two weeks to reproduce it."),(0,i.kt)("h4",{id:"1st-theory-network-problems-on-gcp"},"1st theory: network problems on GCP"),(0,i.kt)("p",null,"Since this was first and only observed directly after the migration to GCP the initial theory was that networking issues on GCP cause this problem."),(0,i.kt)("h5",{id:"disprove-of-1st-theory-lib-kafka"},"disprove of 1st theory (lib kafka)"),(0,i.kt)("p",null,"To validate the theory we installed the same version of tremor on-premises - and in parallel to working installations and observed if the issue would surface outside of GCP. If it wouldn't we could have reduced it to a GCP related issue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result"),": After two weeks of on-prem load we were able to recreate the issue locally, this invalidated our 1st theory."),(0,i.kt)("h4",{id:"2nd-theory-a-bug-in-our-kafka-onramp"},"2nd theory: a bug in our Kafka onramp"),(0,i.kt)("p",null,"Inspecting the code that run Kafka we identified a possible issue that we didn't abort on a bad return value to force a reconnect as we suspected the librdkafak wrapper to handle these situations."),(0,i.kt)("h5",{id:"disprove-of-2nd-theory"},"disprove of 2nd theory"),(0,i.kt)("p",null,"We patched our Kafka onramp to explicitly handle this bad returns and provide logs in that case (as it should be rare). We updated to see if this would resolve the issue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result"),": After a week the issue re-surfaced without the related logs printed."),(0,i.kt)("h4",{id:"3rd-theory-incompatible-versions-of-librdkafka-and-kafka"},"3rd theory: incompatible versions of librdkafka and Kafka"),(0,i.kt)("p",null,"During the update of tremor we also updated the version of librdkakfa - the Kafka version however remained quite old. We theorized that incompatibility of the newer librdkafka and the old Kafka could cause undefined behavior such as the busy loop."),(0,i.kt)("h5",{id:"disprove-of-3rd-theory"},"disprove of 3rd theory"),(0,i.kt)("p",null,"We prepared a build of tremor with the same version of librdkafka we have been using in the past and updated the boxes in question to see if the bug would re-produce."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result"),": After a week and a half the bug re-surfaced, making a version conflict between Kafka and librdkafka unlikely."),(0,i.kt)("h4",{id:"4th-theory-unhandled-mutex-locks-in-librdkafka"},"4th theory: unhandled mutex locks in librdkafka"),(0,i.kt)("p",null,"Inspecting a broken process with ",(0,i.kt)("inlineCode",{parentName:"p"},"perf")," we would observe heavy load in pthread related code and the function ",(0,i.kt)("inlineCode",{parentName:"p"},"rd_kafka_q_pop_serve")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"  36.35%  poll          libpthread-2.17.so  [.] pthread_cond_timedwait@@GLIBC_2.3.2\n  19.88%  poll          tremor-server       [.] cnd_timedwait\n  19.14%  poll          tremor-server       [.] rd_kafka_q_pop_serve\n  15.09%  poll          tremor-server       [.] cnd_timedwait_abs\n   8.37%  poll          tremor-server       [.] 0x000000000009fcc0\n   0.27%  poll          [kernel.kallsyms]   [k] __do_softirq\n")),(0,i.kt)("p",null,"After inspecting ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/edenhill/librdkafka/blob/v1.0.0/src/rdkafka_queue.c#L336"},"the code")," we noticed that ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/edenhill/librdkafka/blob/v1.0.0/src/rdkafka_queue.c#L346"},"the lock obtained")," in the function did not check if the lock was successful. The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/edenhill/librdkafka/blob/v1.0.0/src/rdkafka_queue.c#L402-L407"},"else condition")," in the function could lead to an infinite loop calling the function over and over again."),(0,i.kt)("h5",{id:"disprove-of-4th-theory"},"disprove of 4th theory"),(0,i.kt)("p",null,"We isolated the hot thread using ",(0,i.kt)("inlineCode",{parentName:"p"},"stop")," - looking for the tremor thread that was using 100% CPU. We then traced system calls using ",(0,i.kt)("inlineCode",{parentName:"p"},"strace"),". If librdkafka would attempt to fetch a mutex lock we should see related system calls in the ",(0,i.kt)("inlineCode",{parentName:"p"},"strace")," output."),(0,i.kt)("p",null,"However observing the process for an hour didn't show a single system call to be made on the hot thread - this ruled out any mutex/kernel-related code to be run in the hot loop."),(0,i.kt)("h4",{id:"5th-theory-a-different-librdkafka-bug"},"5th theory: a different librdkafka bug"),(0,i.kt)("p",null,"Inspecting the code and the ",(0,i.kt)("inlineCode",{parentName:"p"},"perf")," output further we noticed that ",(0,i.kt)("inlineCode",{parentName:"p"},"cnd_timedwait_abs")," was part of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/edenhill/librdkafka/blob/v1.0.0/src/rdkafka_queue.c#L390"},"last condition")," in a ",(0,i.kt)("inlineCode",{parentName:"p"},"while (1)")," loop. It is reasonable to assume that if we spend time in ",(0,i.kt)("inlineCode",{parentName:"p"},"cnd_timedwait_abs")," that we hit that part of the loop - if this call would fail the loop would re-run possibly creating an infinite loop."),(0,i.kt)("p",null,"In addition we found a related ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/edenhill/librdkafka/issues/2208"},"kafka issue")," that pointed to this particular location."),(0,i.kt)("h5",{id:"proving-5th-theory"},"proving 5th theory"),(0,i.kt)("p",null,"We deployed half the nodes with a version of tremor that the newest version of librdkafka (1.0.0) that includes a fix for the issue mentioned above while. We expect the patched nodes to keep stable and the unpatched nodes to eventually fail with the bug."),(0,i.kt)("p",null,"This never happened again."),(0,i.kt)("h3",{id:"udp-gelf-messages-issue"},"UDP GELF messages issue"),(0,i.kt)("p",null,"Issues:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Undocumented and nonstandard conform use of Decompress after chunking, these messages were discarded, this was falsely attributed to tremor"),(0,i.kt)("li",{parentName:"ul"},"Setup was spanning the WAN using local Logstas and WAN connected Tremor causing MTU issues that was not documented and falsely attributed to tremor"),(0,i.kt)("li",{parentName:"ul"},"Using a nonstandard conform GELF header for 'uncompressed' caused those datapoints to be discarded, this was falsely attributed to tremor"),(0,i.kt)("li",{parentName:"ul"},"the UDP buffer on the Tremor and logstash hosts were configured differently causing the tremor host to have significantly less buffer causing some messages to be discarded in the OS UDP stack, this was falsely attributed to tremor"),(0,i.kt)("li",{parentName:"ul"},"A tool called udp_replay was used to copy data from a logstash host to a tremor host, this tool truncated the UDP payload, this payload could no longer be decompressed making this packages fail, this was falsely attributed to tremor"),(0,i.kt)("li",{parentName:"ul"},"Some clients send a empty tailing message with a bad segment index (n+1) causing error messages to appear in the logs, this is valid behavior but were flagged as a 'bug' in tremor because logstash does silently drop those."),(0,i.kt)("li",{parentName:"ul"},"Some clients reuse the sequence number - this can lead to bad messages when UDP packages interleave, tremor reports those incidents and will likely be flagged as buggy because of it."),(0,i.kt)("li",{parentName:"ul"},"MIO's UDP with edge-poll stops receiving data ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tokio-rs/mio/issues/1076"},"ticket")," we switched to level poll which solves this."),(0,i.kt)("li",{parentName:"ul"},"PCAP files seem to include lots of invalid gelfs when replaying"),(0,i.kt)("li",{parentName:"ul"},"When replaying the pacap the tool shows the following error.\nthread 'main' panicked at 'called ",(0,i.kt)("inlineCode",{parentName:"li"},"Result::unwrap()")," on an ",(0,i.kt)("inlineCode",{parentName:"li"},"Err"),' value: Error(WrongField("PacketHeader.incl_len (288) > PacketHeader.orig_len (272)"), State { next_error: None, backtrace: None })\', src/libcore/result.rs:999:5')))}h.isMDXComponent=!0}}]);
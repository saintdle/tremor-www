"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[3942],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14272:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={},s="Polling",c={unversionedId:"recipes/polling_alerts/README",id:"version-0.11/recipes/polling_alerts/README",isDocsHomePage:!1,title:"Polling",description:"All the application code here is available from the docs git repository.",source:"@site/versioned_docs/version-0.11/recipes/38_polling_alerts/README.md",sourceDirName:"recipes/38_polling_alerts",slug:"/recipes/polling_alerts/README",permalink:"/docs/recipes/polling_alerts/README",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/versioned_docs/version-0.11/recipes/38_polling_alerts/README.md",tags:[],version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"Configurator",permalink:"/docs/recipes/configurator/README"},next:{title:"Ingesting documents from kafka into elastic",permalink:"/docs/recipes/kafka_elastic_correlation/README"}},u=[{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[{value:"Polling",id:"polling-1",children:[]},{value:"Alerting",id:"alerting",children:[]}]},{value:"Command line testing during logic development",id:"command-line-testing-during-logic-development",children:[]}],p={toc:u};function m(e){var t=e.components,o=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"polling"},"Polling"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"All the application code here is available from the docs ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www/tree/main/docs/recipes/38_polling_alerts"},"git repository"),"."))),(0,a.kt)("p",null,"This example demonstrates using Tremor to periodically poll a data source (we use influx as it can quickly generate data) and make decisions based on the results - in our case alert us on low CPU or memory."),(0,a.kt)("p",null,"We will not look deep into the query used or the alerts defined as they're only supporting elements to the story we're trying to tell here: periodic, reactive workflows. To this end, we leverage a good bit of the configuration introduced in ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/influx/README"},"the influx example"),"."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"As mentioned above, we reuse a lot of the influx logic, so we ignore the following artifacts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"onramp: ",(0,a.kt)("inlineCode",{parentName:"li"},"udp-input")),(0,a.kt)("li",{parentName:"ul"},"offramp: ",(0,a.kt)("inlineCode",{parentName:"li"},"influx-output")),(0,a.kt)("li",{parentName:"ul"},"query: ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress")),(0,a.kt)("li",{parentName:"ul"},"binding: ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress")),(0,a.kt)("li",{parentName:"ul"},"mapping: ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress"))),(0,a.kt)("p",null,"Also there are two new pipelines:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"poll")," - translates a tick into a query"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"alert")," - translates the result and evaluates if an alert should be triggered")),(0,a.kt)("p",null,"We also have a new onramp (",(0,a.kt)("inlineCode",{parentName:"p"},"tick"),") and offramp (",(0,a.kt)("inlineCode",{parentName:"p"},"influx-query"),")."),(0,a.kt)("p",null,"For the sake of not repeating the previous workshop we will focus on those new parts exclusively."),(0,a.kt)("h2",{id:"business-logic"},"Business Logic"),(0,a.kt)("h3",{id:"polling-1"},"Polling"),(0,a.kt)("p",null,"This section deals with polling, in our case we want to query influxdb on a periodic interval."),(0,a.kt)("p",null,"To this end we use a ",(0,a.kt)("inlineCode",{parentName:"p"},"metronome")," onramp that triggers an event every 10s. We send the events into ",(0,a.kt)("a",{target:"_blank",href:n(61590).Z},(0,a.kt)("code",null,"poll.trickle"))," where we create a influx request out of the metronom event."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"poll")," pipeline then connects to the linked influx offramp to run the query."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},'# poll.trickle\n# This file is for for turning ticks into queries\n\n# this turns the `metronom` tick into a query\ndefine script query\nwith\n  host = "",\n  db = ""\nscript\n  use std::url;\n  # we define the query to gather data\n  # this is the original, for the sake of dockerizing it we ignore the host in the final query since we don\'t know what it will be\n  # let query = "SELECT mean(\\"usage_idle\\") AS \\"cpu_idle\\", mean(\\"active\\") AS \\"mem_active\\" FROM \\"tremor\\".\\"autogen\\".\\"cpu\\", \\"tremor\\".\\"autogen\\".\\"mem\\" WHERE time > now() - 1h AND time < now() AND \\"host\\"=\'#{ args.host }\' GROUP BY time(1h) FILL(null)";\n  let query = "SELECT mean(\\"usage_idle\\") AS \\"cpu_idle\\", mean(\\"active\\") AS \\"mem_active\\" FROM \\"tremor\\".\\"autogen\\".\\"cpu\\", \\"tremor\\".\\"autogen\\".\\"mem\\" WHERE time > now() - 1h AND time < now() GROUP BY time(1h) FILL(null)";\n  # we encode this to a rest offramp query parameter using `url::encode`\n  let $endpoint.query = "db=#{ args.db }&epock=ms&q=#{ url::encode(query) }";\n  let event.meta = $;\n  # we can end this script\n  event\nend;\n\n# we create a script for a given host\ncreate script query with\n  host = "d111f17774f7"\nend;\n# we wire it all up\nselect event from in into query;\nselect event from query into out;\n')),(0,a.kt)("h3",{id:"alerting"},"Alerting"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{target:"_blank",href:n(34418).Z},(0,a.kt)("code",null,"alert.trickle"))," pipeline takes the reply from Influx and alert if the values we see are above a given limit."),(0,a.kt)("p",null,"Since the influx reply uses a unique datamodle, we need to unscramble the results, this sadly is a trail and error process based on what influx returns."),(0,a.kt)("p",null,"Once we have extracted the data we can pass it into an alerting script that checks a few conditions in a given order. The first condition that is met will trigger the coresponding alert."),(0,a.kt)("p",null,"You can adopt the alert conditions in the ",(0,a.kt)("inlineCode",{parentName:"p"},"with")," section of the script."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},'# This script takes the responses and turns them into alerts\n\n# The script that does all the logic, we define our alerts here\ndefine script alert with\n  cpu_limit = 100,\n  mem_limit = 19518531180\nscript\n  match event of\n    case %{cpu_idle < args.cpu_limit, mem_active > args.mem_limit} => emit "EVERYTHING IS ON FIRE"\n    case %{cpu_idle < args.cpu_limit} => match event of\n      case %{cpu_system > 50} => emit "OS BROKEN"\n      default => emit "CPU BUSY"\n    end\n\n    case %{mem_active > args.mem_limit } => emit "MEM LOW"\n    default => drop\n  end\nend;\n\ncreate script alert;\n\n# Since the influx reply is hard to work with we santize it here so we can write our alerts\n# in a cleaner fashipn\n#\n# example result:\n# ```\n# {"results":[{"statement_id":0,"series":[{"columns":["time","cpu_idle1","mem_active"],"values":[["2021-03-02T15:00:00Z",98.856058199546,null],["2021-03-02T16:00:00Z",97.09260215835516,null]],"name":"cpu"},{"columns":["time","cpu_idle1","mem_active"],"values":[["2021-03-02T15:00:00Z",null,19519109501.023254],["2021-03-02T16:00:00Z",null,19959332287.756653]],"name":"mem"}]}]}\n# ```\ncreate stream extracted;\nselect {\n  "#{event.results[0].series[0].columns[1]}": event.results[0].series[0].values[1][1],\n  "#{event.results[0].series[1].columns[2]}": event.results[0].series[1].values[1][2],\n} from in into extracted;\n\n# we wire it all up\nselect event from extracted into alert;\nselect event from alert into out;\n\n# we could use this for debugging\n# select event from in into out;\n')),(0,a.kt)("h2",{id:"command-line-testing-during-logic-development"},"Command line testing during logic development"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker compose up\n  ... lots of logs ...\n")),(0,a.kt)("p",null,"Then watch alerts on stdout from ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose"),"."))}m.isMDXComponent=!0},34418:function(e,t,n){t.Z=n.p+"assets/files/alert-af3d820a233d97730f9d3413e814ae77.trickle"},61590:function(e,t,n){t.Z=n.p+"assets/files/poll-fe863acce5d3284f4fad09bbb0952218.trickle"}}]);
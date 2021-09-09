"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9339],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2877:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"RFC Template",id:"0000-template"},s={type:"mdx",permalink:"/tremor-new-website/rfcs/0000-template",source:"@site/src/pages/rfcs/0000-template.md"},u=[{value:"Summary",id:"summary",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Guide-level Explanation",id:"guide-level-explanation",children:[]},{value:"Reference-level Explanation",id:"reference-level-explanation",children:[]},{value:"Drawbacks",id:"drawbacks",children:[]},{value:"Rationale and Alternatives",id:"rationale-and-alternatives",children:[]},{value:"Prior Art",id:"prior-art",children:[]},{value:"Unresolved Questions",id:"unresolved-questions",children:[]},{value:"Future Possibilities",id:"future-possibilities",children:[]}],p={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rfc-template-rfc-title-goes-here"},"RFC Template (RFC Title goes here)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Feature Name: (fill me in with a unique ident, ",(0,o.kt)("inlineCode",{parentName:"li"},"my_awesome_feature"),")"),(0,o.kt)("li",{parentName:"ul"},"Start Date: (fill me in with today's date, YYYY-MM-DD)"),(0,o.kt)("li",{parentName:"ul"},"Tremor Issue: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-runtime/issues/0000"},"tremor-rs/tremor-runtime#0000")),(0,o.kt)("li",{parentName:"ul"},"RFC PR: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-rfcs/pull/0000"},"tremor-rs/tremor-rfcs#0000"))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"One paragraph explanation of the feature."),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Why are we doing this? What use cases does it support? What is the expected outcome?"),(0,o.kt)("h2",{id:"guide-level-explanation"},"Guide-level Explanation"),(0,o.kt)("p",null,"Explain the proposal as if it was already included in Tremor and you were teaching it to another Tremor user. That generally means:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introducing new named concepts."),(0,o.kt)("li",{parentName:"ul"},"Explaining the feature largely in terms of examples."),(0,o.kt)("li",{parentName:"ul"},"Explaining how stakeholders should ",(0,o.kt)("em",{parentName:"li"},"think")," about the feature, and how it should impact the way they use Tremor. It should explain the impact as concretely as possible."),(0,o.kt)("li",{parentName:"ul"},"If applicable, provide sample error messages, deprecation warnings, or migration guidance."),(0,o.kt)("li",{parentName:"ul"},"If applicable, describe the differences between teaching this to existing Tremor stakeholders and new Tremor programmers.")),(0,o.kt)("p",null,"For implementation-oriented RFCs (e.g. for language internals), this section should focus on how language contributors should think about the change, and give examples of its concrete impact. For policy RFCs, this section should provide an example-driven introduction to the policy, and explain its impact in concrete terms."),(0,o.kt)("h2",{id:"reference-level-explanation"},"Reference-level Explanation"),(0,o.kt)("p",null,"This is the technical portion of the RFC. Explain the design in sufficient detail that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Its interaction with other features is clear."),(0,o.kt)("li",{parentName:"ul"},"It is reasonably clear how the feature would be implemented."),(0,o.kt)("li",{parentName:"ul"},"Corner cases are dissected by example.")),(0,o.kt)("p",null,"The section should return to the examples given in the previous section, and explain more fully how the detailed proposal makes those examples work."),(0,o.kt)("h2",{id:"drawbacks"},"Drawbacks"),(0,o.kt)("p",null,"Why should we ",(0,o.kt)("em",{parentName:"p"},"not")," do this?"),(0,o.kt)("h2",{id:"rationale-and-alternatives"},"Rationale and Alternatives"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Why is this design the best in the space of possible designs?"),(0,o.kt)("li",{parentName:"ul"},"What other designs have been considered, and what is the rationale for not choosing them?"),(0,o.kt)("li",{parentName:"ul"},"What is the impact of not doing this?")),(0,o.kt)("h2",{id:"prior-art"},"Prior Art"),(0,o.kt)("p",null,"Discuss prior art, both the good and the bad, in relation to this proposal.\nA few examples of what this can include are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For language, library, tools, and clustering proposals: Does this feature exist in other programming languages, and what experience have their community had?"),(0,o.kt)("li",{parentName:"ul"},"For community proposals: Is this done by some other community and what were their experiences with it?"),(0,o.kt)("li",{parentName:"ul"},"For other teams: What lessons can we learn from what other communities have done here?"),(0,o.kt)("li",{parentName:"ul"},"Papers: Are there any published papers or great posts that discuss this? If you have some relevant papers to refer to, this can serve as a more detailed theoretical background.")),(0,o.kt)("p",null,"This section is intended to encourage you as an author to think about the lessons from other projects, provide readers of your RFC with a fuller picture.\nIf there is no prior art, that is fine- your ideas are interesting to us whether they are brand new or if it is an adaptation from other projects."),(0,o.kt)("p",null,"Note that while precedent set by other projects is some motivation, it does not, on its own, motivate an RFC.\nPlease also take into consideration that Tremor sometimes intentionally diverges from similar projects."),(0,o.kt)("h2",{id:"unresolved-questions"},"Unresolved Questions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What parts of the design do you expect to resolve through the RFC process before this gets merged?"),(0,o.kt)("li",{parentName:"ul"},"What parts of the design do you expect to resolve through the implementation of this feature before stabilization?"),(0,o.kt)("li",{parentName:"ul"},"What related issues do you consider out of scope for this RFC that could be addressed in the future independently of the solution that comes out of this RFC?")),(0,o.kt)("h2",{id:"future-possibilities"},"Future Possibilities"),(0,o.kt)("p",null,"Think about what the natural extension and evolution of your proposal would be and how it would affect Tremor as a whole in a holistic way. Try to use this section as a tool to more fully consider all possible interactions with the project in your proposal. Also, consider how this all fits into the roadmap for the project and of the relevant sub-team."),(0,o.kt)("p",null,'This is also a good place to "dump ideas", if they are out of scope for the RFC you are writing but otherwise related.'),(0,o.kt)("p",null,"If you have tried and cannot think of any future possibilities, you may state that you cannot think of anything."),(0,o.kt)("p",null,"Note that having something written down in the future-possibilities section is not a reason to accept the current or a future RFC; such notes should be in the section on motivation or rationale in this or subsequent RFCs.\nThe section merely provides additional information."))}h.isMDXComponent=!0}}]);
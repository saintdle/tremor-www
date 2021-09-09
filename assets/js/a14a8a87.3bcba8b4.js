"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[3109],{3905:function(r,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var t=n(7294);function a(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function o(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function l(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function i(r,e){if(null==r)return{};var n,t,a=function(r,e){if(null==r)return{};var n,t,a={},o=Object.keys(r);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(a[n]=r[n])}return a}var u=t.createContext({}),s=function(r){var e=t.useContext(u),n=e;return r&&(n="function"==typeof r?r(e):l(l({},e),r)),n},p=function(r){var e=s(r.components);return t.createElement(u.Provider,{value:e},r.children)},c={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(r,e){var n=r.components,a=r.mdxType,o=r.originalType,u=r.parentName,p=i(r,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||o;return n?t.createElement(m,l(l({ref:e},p),{},{components:n})):t.createElement(m,l({ref:e},p))}));function f(r,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=r,i.mdxType="string"==typeof r?r:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3495:function(r,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var t=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},u={unversionedId:"internal/transform",id:"internal/transform",isDocsHomePage:!1,title:"Match to Functional",description:"A useful step-by-step follow-up on transforming match style to functional style.",source:"@site/docs/internal/transform.md",sourceDirName:"internal",slug:"/internal/transform",permalink:"/tremor-new-website/docs/internal/transform",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/internal/transform.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running Docusaurus",permalink:"/tremor-new-website/docs/internal/running-docusaurus"},next:{title:"Architecture Overview",permalink:"/tremor-new-website/docs/overview"}},s=[],p={toc:s};function c(r){var e=r.components,n=(0,a.Z)(r,l);return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A useful step-by-step follow-up on transforming match style to functional style."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn get_servant(\n    (req, data, path): (HttpRequest, Data<State>, Path<(String, String)>),\n) -> HTTPResult {\n    let url = build_url(&["binding", &path.0, &path.1])?;\n    let res0 = data.world.reg.find_binding(&url);\n    match res0 {\n        Ok(res) => match res {\n            Some(res) => reply(req, data, Ok(res.binding), false, 200),\n            None => Err(error::ErrorNotFound("Binding not found")),\n        },\n        Err(e) => Err(error::ErrorInternalServerError(format!(\n            "Internal server error: {}",\n            e\n        ))),\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn get_servant(\n    (req, data, path): (HttpRequest, Data<State>, Path<(String, String)>),\n) -> HTTPResult {\n    let url = build_url(&["binding", &path.0, &path.1])?;\n    let res0 = data\n        .world\n        .reg\n        .find_binding(&url)\n        .map_err(|e| error::ErrorInternalServerError(format!("Internal server error: {}", e)))?\n        .ok_or_else(|| error::ErrorNotFound("Binding not found"))?;\n\n    reply(req, data, Ok(res0.binding), false, 200)\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn get_servant(\n    (req, data, path): (HttpRequest, Data<State>, Path<(String, String)>),\n) -> HTTPResult {\n    let url = build_url(&["binding", &path.0, &path.1])?;\n    let res0 =\n        data.world.reg.find_binding(&url).map_err(|e| {\n            error::ErrorInternalServerError(format!("Internal server error: {}", e))\n        })?;\n\n    match res {\n        Some(res) => reply(req, data, Ok(res.binding), false, 200),\n        None => Err(error::ErrorNotFound("Binding not found")),\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn get_servant(\n    (req, data, path): (HttpRequest, Data<State>, Path<(String, String)>),\n) -> HTTPResult {\n    let url = build_url(&["binding", &path.0, &path.1])?;\n    data.world\n        .reg\n        .find_binding(&url)\n        .map_err(|e| error::ErrorInternalServerError(format!("Internal server error: {}", e)))?\n        .ok_or_else(|| error::ErrorNotFound("Binding not found"))\n        .and_then(|result| reply(req, data, Ok(result.binding), false, 200))\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn get_servant(\n    (req, data, path): (HttpRequest, Data<State>, Path<(String, String)>),\n) -> HTTPResult {\n    let url = build_url(&["binding", &path.0, &path.1])?;\n    data.world\n        .reg\n        .find_binding(&url)\n        .map_err(|e| error::ErrorInternalServerError(format!("Internal server error: {}", e)))\n        .and_then(|result| result.ok_or_else(|| error::ErrorNotFound("Binding not found")))\n        .and_then(|result| reply(req, data, Ok(result.binding), false, 200))\n}\n')))}c.isMDXComponent=!0}}]);
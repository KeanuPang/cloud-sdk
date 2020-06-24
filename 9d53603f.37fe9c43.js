(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(9),o=(a(0),a(209)),c=a(224),i={id:"api-reference-java",title:"Java API reference",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"JavaDoc API Reference",description:"Check our generated API Documentation to discover SDK capabilities via code",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},l={id:"java/api-reference-java",title:"Java API reference",description:"Check our generated API Documentation to discover SDK capabilities via code",source:"@site/docs/java/api-reference.md",permalink:"/cloud-sdk/docs/java/api-reference-java",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/api-reference.md",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1592833792,sidebar_label:"JavaDoc API Reference",sidebar:"someSidebar",previous:{title:"Troubleshooting Frequent Problems",permalink:"/cloud-sdk/docs/java/sdk-java-troubleshooting-frequent-problems"},next:{title:"Frequently asked questions",permalink:"/cloud-sdk/docs/java/frequently-asked-questions"}},s=[{value:"Should I update?",id:"should-i-update",children:[]},{value:"SDK Version 3",id:"sdk-version-3",children:[]},{value:"SDK Version 2",id:"sdk-version-2",children:[]},{value:"See also",id:"see-also",children:[]}],d={rightToc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The SAP Cloud SDK for Java is a toolkit to develop cloud native applications on the SAP Cloud Platform."),Object(o.b)("h2",{id:"should-i-update"},"Should I update?"),Object(o.b)("p",null,"We highly recommend regularly updating to the latest SDK version. It will help you:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ensure access to the latest Cloud SDK features"),Object(o.b)("li",{parentName:"ul"},"keep up with the latest changes in SAP Cloud infrastructure"),Object(o.b)("li",{parentName:"ul"},"update client libraries giving access to latest SAP services on SAP Cloud Platform and S4/HANA"),Object(o.b)("li",{parentName:"ul"},"protect yourself from bugs and breaking changes in the future")),Object(o.b)("h2",{id:"sdk-version-3"},"SDK Version 3"),Object(o.b)(c.a,{mdxType:"MvnBadge"}),Object(o.b)("p",null,"Check ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.sap.com/doc/6c02295dfa8f47cf9c08a19f2e172901/1.0/en-US/index.html"}),"JavaDoc links from the release notes"),"."),Object(o.b)("h2",{id:"sdk-version-2"},"SDK Version 2"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Cloud ",Object(o.b)("strong",{parentName:"p"},"SDK for Java V2")," is in maintenance. No major updates and bug-fixing is planned.\nTo continue using the latest feature, please, migrate to ",Object(o.b)("strong",{parentName:"p"},"SDK for Java V3")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://help.sap.com/doc/3e8c7a614a8b49a8806bd0392e7b78d6/1.0/en-US/index.html"}),"2.28.0"))),Object(o.b)("h2",{id:"see-also"},"See also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://help.sap.com/doc/6c02295dfa8f47cf9c08a19f2e172901/1.0/en-US/index.html"}),"Release notes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"getting-started"}),"Getting started"))))}u.isMDXComponent=!0},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),b=n,m=u["".concat(c,".").concat(b)]||u[b]||p[b]||o;return a?r.a.createElement(m,i(i({ref:t},s),{},{components:a})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},224:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.align;return r.a.createElement("span",{className:t?"col text--right":""},r.a.createElement("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom"},r.a.createElement("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})))}}}]);
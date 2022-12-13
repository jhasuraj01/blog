"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,f=p["".concat(s,".").concat(g)]||p[g]||h[g]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={slug:"change-ssh-port-in-linux-centos",title:"Change SSH Port in Linux CentOS (Oracle Linux 8)",authors:["jhasuraj01"],tags:["linux","ssh","firewalld","semanage"]},i="Change SSH Port in CentOS (Oracle Linux 8)",l={permalink:"/blog/change-ssh-port-in-linux-centos",editUrl:"https://github.com/jhasuraj01/blog/tree/main/blog/2022-12-08-change-ssh-port-in-linux-centos.mdx",source:"@site/blog/2022-12-08-change-ssh-port-in-linux-centos.mdx",title:"Change SSH Port in Linux CentOS (Oracle Linux 8)",description:"On Linux systems, the default SSH port is 22. There are a few reasons",date:"2022-12-08T00:00:00.000Z",formattedDate:"December 8, 2022",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"ssh",permalink:"/blog/tags/ssh"},{label:"firewalld",permalink:"/blog/tags/firewalld"},{label:"semanage",permalink:"/blog/tags/semanage"}],readingTime:1.38,hasTruncateMarker:!0,authors:[{name:"Suraj Jha",title:"Educator @CodeChef | IT'24 | 4\u2b50 @CodeChef | Knight @Leetcode",url:"https://github.com/jhasuraj01",imageURL:"https://github.com/jhasuraj01.png",key:"jhasuraj01"}],frontMatter:{slug:"change-ssh-port-in-linux-centos",title:"Change SSH Port in Linux CentOS (Oracle Linux 8)",authors:["jhasuraj01"],tags:["linux","ssh","firewalld","semanage"]}},s={authorsImageUrls:[void 0]},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"On Linux systems, the default SSH port is 22. There are a few reasons\nwhy you might want to change this number. This article will walk you\nthrough the process of changing the default ssh port 22 to 8080."))}p.isMDXComponent=!0}}]);
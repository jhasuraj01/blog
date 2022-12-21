"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6470],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>g});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=a.createContext({}),u=function(e){var r=a.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return a.createElement(m.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=n,g=c["".concat(m,".").concat(d)]||c[d]||p[d]||o;return t?a.createElement(g,i(i({ref:r},s),{},{components:t})):a.createElement(g,i({ref:r},s))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var m in r)hasOwnProperty.call(r,m)&&(l[m]=r[m]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4452:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(7462),n=(t(7294),t(3905));const o={title:"Maximum Subarray Sum",displayed_sidebar:"algorithms"},i="Maximum Subarray Sum - Kadane's Algorithm",l={unversionedId:"algorithms/kadanes-algorithm/maximum-subarray-sum",id:"algorithms/kadanes-algorithm/maximum-subarray-sum",title:"Maximum Subarray Sum",description:"Solution",source:"@site/docs/algorithms/kadanes-algorithm/maximum-subarray-sum.mdx",sourceDirName:"algorithms/kadanes-algorithm",slug:"/algorithms/kadanes-algorithm/maximum-subarray-sum",permalink:"/blog/algorithms/kadanes-algorithm/maximum-subarray-sum",draft:!1,editUrl:"https://github.com/jhasuraj01/blog/tree/main/docs/algorithms/kadanes-algorithm/maximum-subarray-sum.mdx",tags:[],version:"current",lastUpdatedBy:"jhasuraj01",lastUpdatedAt:1671617245,formattedLastUpdatedAt:"Dec 21, 2022",frontMatter:{title:"Maximum Subarray Sum",displayed_sidebar:"algorithms"},sidebar:"algorithms",previous:{title:"Flip Bits",permalink:"/blog/algorithms/kadanes-algorithm/flip-bits"},next:{title:"Monotonic Stack",permalink:"/blog/algorithms/monotonic-stack/"}},m={},u=[{value:"Solution",id:"solution",level:2},{value:"Problem Links",id:"problem-links",level:2}],s={toc:u};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"maximum-subarray-sum---kadanes-algorithm"},"Maximum Subarray Sum - Kadane's Algorithm"),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='C++ Solution'",title:"'C++","Solution'":!0},"#include <bits/stdc++.h> \nlong long maxSubarraySum(int arr[], int n) {\n    long long maxSum = 0;\n    long long curMax = 0;\n    \n    for(int i = 0; i < n; ++i) {\n        cur = max(cur + arr[i], (long long) arr[i]);\n        ans = max(ans, cur);\n    }\n    \n    return ans;\n}\n")),(0,n.kt)("h2",{id:"problem-links"},"Problem Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/maximum-subarray/"},"53. Maximum Subarray - LeetCode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.codingninjas.com/codestudio/problems/maximum-subarray-sum_630526"},"Maximum Subarray Sum - CodeStudio"))))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Flip Bits",displayed_sidebar:"algorithms",keywords:["Kadane's Algorithms","Flip Bits","Dynamic Programming","Subarray","Maximize number of 1s by flipping a subarray"]},o="Flip Bits - Kadane's Algorithm",l={unversionedId:"algorithms/kadanes-algorithm/flip-bits",id:"algorithms/kadanes-algorithm/flip-bits",title:"Flip Bits",description:"Problem Statement",source:"@site/docs/algorithms/kadanes-algorithm/flip-bits.mdx",sourceDirName:"algorithms/kadanes-algorithm",slug:"/algorithms/kadanes-algorithm/flip-bits",permalink:"/blog/algorithms/kadanes-algorithm/flip-bits",draft:!1,editUrl:"https://github.com/jhasuraj01/blog/tree/main/docs/algorithms/kadanes-algorithm/flip-bits.mdx",tags:[],version:"current",lastUpdatedBy:"jhasuraj01",lastUpdatedAt:1671617245,formattedLastUpdatedAt:"Dec 21, 2022",frontMatter:{title:"Flip Bits",displayed_sidebar:"algorithms",keywords:["Kadane's Algorithms","Flip Bits","Dynamic Programming","Subarray","Maximize number of 1s by flipping a subarray"]},sidebar:"algorithms",previous:{title:"Kadane's Algorithm",permalink:"/blog/algorithms/kadanes-algorithm/"},next:{title:"Maximum Subarray Sum",permalink:"/blog/algorithms/kadanes-algorithm/maximum-subarray-sum"}},s={},p=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Examples",id:"examples",level:2},{value:"Constraints",id:"constraints",level:2},{value:"Solution",id:"solution",level:2},{value:"Problem Links",id:"problem-links",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flip-bits---kadanes-algorithm"},"Flip Bits - Kadane's Algorithm"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given an array ",(0,a.kt)("inlineCode",{parentName:"p"},"arr[]")," consisting of ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\u2019s and ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\u2019s. A flip operation is one\nin which you turn ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),". You have to do at most one\n\u201cFlip\u201d operation of any subarray. Formally, select a range ",(0,a.kt)("inlineCode",{parentName:"p"},"(l, r)")," in\nthe array ",(0,a.kt)("inlineCode",{parentName:"p"},"arr[]"),", such that ",(0,a.kt)("inlineCode",{parentName:"p"},"0 \u2264 l \u2264 r < n")," holds and flip the elements\nin this range to get the maximum ones in the final array. You can\npossibly make zero operations to get the answer."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Input:\nN = 5\nA[] = {1, 0, 0, 1, 0} \nOutput:\n4\nExplanation:\nWe can perform a flip operation in the range [1,2]\nAfter flip operation array is : [ 1 1 1 1 0 ]\nCount of one after fliping is : 4\n")),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Example 2:\n\nInput:\nN = 7\nA[] = {1, 0, 0, 1, 0, 0, 1}\nOutput:\n6\nExplanation:\nWe can perform a flip operation in the range [1,5]\nAfter flip operation array is : [ 1 1 1 0 1 1 1]\nCount of one after fliping is : 6\n")),(0,a.kt)("h2",{id:"constraints"},"Constraints"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 \u2264 N \u2264 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 \u2264 arr[i] \u2264 1"))),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='C++ Solution'",title:"'C++","Solution'":!0},"#include <bits/stdc++.h>\n\nint maxOnes(int arr[], int n)\n{\n    vector<int> A;\n    int ones = accumulate(arr, arr+n, 0);\n\n    int extra_ones = 0;\n    int curr_extra_ones = 0;\n\n    for(int i = 0; i < n; ++i) {\n        int delta = arr[i] == 0 ? 1 : -1;\n\n        if(curr_extra_ones + delta < delta) {\n            curr_extra_ones = delta;\n        }\n        else {\n            curr_extra_ones += delta;\n        }\n        extra_ones = max(extra_ones, curr_extra_ones);\n    }\n\n    return ones + extra_ones;\n}\n")),(0,a.kt)("h2",{id:"problem-links"},"Problem Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.codingninjas.com/codestudio/guided-paths/data-structures-algorithms/content/118820/offering/1381872"},"Flip Bits - CodeStudio")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://practice.geeksforgeeks.org/problems/flip-bits0240/1"},"Flip Bits - GeeksforGeeks"))))}u.isMDXComponent=!0}}]);
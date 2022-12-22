"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3174],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,p=c["".concat(l,".").concat(d)]||c[d]||h[d]||i;return a?n.createElement(p,o(o({ref:t},u),{},{components:a})):n.createElement(p,o({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[c]="string"==typeof e?e:r,o[1]=m;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2991:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(7294),r=a(6010),i=a(3438),o=a(9960),m=a(3919),l=a(5999);const s="cardContainer_fWXF",u="cardTitle_rnsV",c="cardDescription_PWke";function h(e){let{href:t,children:a}=e;return n.createElement(o.Z,{href:t,className:(0,r.Z)("card padding--lg",s)},a)}function d(e){let{href:t,icon:a,title:i,description:o}=e;return n.createElement(h,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",u),title:i},a," ",i),o&&n.createElement("p",{className:(0,r.Z)("text--truncate",c),title:o},o))}function p(e){let{item:t}=e;const a=(0,i.Wl)(t);return a?n.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const a=(0,m.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:a,title:t.label,description:r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const a=(0,i.jA)();return n.createElement(b,{items:a.items,className:t})}function b(e){const{items:t,className:a}=e;if(!t)return n.createElement(y,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",a)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},3154:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),i=a(2991);const o={displayed_sidebar:"algorithms"},m="Kadane's Algorithm",l={unversionedId:"algorithms/kadanes-algorithm/index",id:"algorithms/kadanes-algorithm/index",title:"Kadane's Algorithm",description:"Kadane's algorithm is an algorithm for finding the maximum sum of a",source:"@site/docs/algorithms/02-kadanes-algorithm/index.mdx",sourceDirName:"algorithms/02-kadanes-algorithm",slug:"/algorithms/kadanes-algorithm/",permalink:"/blog/algorithms/kadanes-algorithm/",draft:!1,editUrl:"https://github.com/jhasuraj01/blog/tree/main/docs/algorithms/02-kadanes-algorithm/index.mdx",tags:[],version:"current",lastUpdatedBy:"Suraj Jha",lastUpdatedAt:1671745431,formattedLastUpdatedAt:"Dec 22, 2022",frontMatter:{displayed_sidebar:"algorithms"},sidebar:"algorithms",previous:{title:"Introduction to Algorithms",permalink:"/blog/algorithms/intro"},next:{title:"Flip Bits",permalink:"/blog/algorithms/kadanes-algorithm/flip-bits"}},s={},u=[{value:"Steps",id:"steps",level:2},{value:"Example",id:"example",level:2},{value:"Problems",id:"problems",level:2}],c={toc:u};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kadanes-algorithm"},"Kadane's Algorithm"),(0,r.kt)("p",null,"Kadane's algorithm is an algorithm for finding the maximum sum of a\ncontiguous subarray within a one-dimensional array of numbers. It is\na simple yet powerful algorithm that can be used to solve a variety\nof problems, including finding the maximum subarray sum in an array\nof integers, the maximum sum of a submatrix in a matrix of integers,\nand the maximum sum of a subsegment in a sequence of integers."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Initialize the maximum sum to the first element of the array."),(0,r.kt)("li",{parentName:"ol"},"Iterate through the array, starting from the second element."),(0,r.kt)("li",{parentName:"ol"},"At each iteration, calculate the maximum sum of the subarray ending\nat the current element. This can be done by comparing the current\nelement to the sum of the current element and the maximum sum\nof the subarray ending at the previous element. The maximum of these\ntwo values is the maximum sum of the subarray ending at the current element."),(0,r.kt)("li",{parentName:"ol"},"Update the maximum sum to be the maximum of the current maximum sum\nand the maximum sum of the subarray ending at the current element."),(0,r.kt)("li",{parentName:"ol"},"Return the maximum sum.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Suppose we have the following array of integers:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[-2, 1, -3, 4, -1, 2, 1, -5, 4]")),(0,r.kt)("p",null,"We can find the maximum sum of a contiguous subarray using Kadane's algorithm as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Initialize the maximum sum to ",(0,r.kt)("inlineCode",{parentName:"li"},"-2"),"."),(0,r.kt)("li",{parentName:"ol"},"Iterate through the array, starting from the second element."),(0,r.kt)("li",{parentName:"ol"},"At each iteration, calculate the maximum sum of the subarray ending at the\ncurrent element. For example, at the second iteration, we compare ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," to the sum\nof ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"-2")," (the maximum sum of the subarray ending at the previous element),\nand take the maximum of these two values, which is ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ol"},"Update the maximum sum to be the maximum of the current maximum sum and the\nmaximum sum of the subarray ending at the current element. For example, at\nthe second iteration, we update the maximum sum to be the maximum of ",(0,r.kt)("inlineCode",{parentName:"li"},"-2"),"\nand ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),", which is ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ol"},"Repeat this process for each element in the array. The final maximum sum will\nbe the maximum sum of a contiguous subarray within the array. In this case, the\nmaximum sum is ",(0,r.kt)("inlineCode",{parentName:"li"},"6"),", which is the sum of the subarray ",(0,r.kt)("inlineCode",{parentName:"li"},"[4, -1, 2, 1]"),".")),(0,r.kt)("p",null,"Kadane's algorithm has a time complexity of ",(0,r.kt)("inlineCode",{parentName:"p"},"O(n)"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," is the length of the array, making it an efficient solution for finding the maximum sum of a contiguous subarray."),(0,r.kt)("h2",{id:"problems"},"Problems"),(0,r.kt)(i.Z,{mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkjhasuraj_blog=self.webpackChunkjhasuraj_blog||[]).push([[9900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(n),d=r,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:r,o[1]=u;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),u=n(7392),s=n(7094),i=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:o,values:m,groupId:d,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,u.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,s.U)(),[j,C]=(0,r.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,i.o5)();if(null!=d){const e=k[d];null!=e&&e!==j&&h.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),a=h[n].value;a!==j&&(w(t),C(a),null!=d&&v(d,String(a)))},N=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},b)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>O.push(e),onKeyDown:N,onClick:E},o,{className:(0,l.Z)("tabs__item",p,o?.className,{"tabs__item--active":j===t})}),n??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},9596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));n(5488),n(5162);const l={slug:"leetcode/implement-queue-using-stacks",title:"232. Implement Queue using Stacks",authors:"jhasuraj01",tags:["LeetCode","Leetcode Daily","DSA","Stack","Queue"]},o=void 0,u={permalink:"/blog/leetcode/implement-queue-using-stacks",editUrl:"https://github.com/jhasuraj01/blog/tree/main/blog/leetcode-daily/2022-12-16-implement-queue-using-stacks.mdx",source:"@site/blog/leetcode-daily/2022-12-16-implement-queue-using-stacks.mdx",title:"232. Implement Queue using Stacks",description:"Problem Statement",date:"2022-12-16T00:00:00.000Z",formattedDate:"December 16, 2022",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"},{label:"Leetcode Daily",permalink:"/blog/tags/leetcode-daily"},{label:"DSA",permalink:"/blog/tags/dsa"},{label:"Stack",permalink:"/blog/tags/stack"},{label:"Queue",permalink:"/blog/tags/queue"}],readingTime:3.265,hasTruncateMarker:!0,authors:[{name:"Suraj Jha",title:"Web3 & Cloud | Upcoming Intern @Barclays | Educator @CodeChef",url:"https://github.com/jhasuraj01",imageURL:"https://github.com/jhasuraj01.png",key:"jhasuraj01"}],frontMatter:{slug:"leetcode/implement-queue-using-stacks",title:"232. Implement Queue using Stacks",authors:"jhasuraj01",tags:["LeetCode","Leetcode Daily","DSA","Stack","Queue"]},prevItem:{title:"Blockchain Honors Smart Contracts & Crypto currency",permalink:"/blog/blockchain-honors-smart-contracts-crypto-currency"},nextItem:{title:"1143. Longest Common Subsequence, LeetCode",permalink:"/blog/leetcode/longest-common-subsequence"}},s={authorsImageUrls:[void 0]},i=[{value:"Problem Statement",id:"problem-statement",level:2}],c={toc:i};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Implement a first in first out (FIFO) queue using only two stacks.\nThe implemented queue should support all the functions of a normal\nqueue (",(0,r.kt)("inlineCode",{parentName:"p"},"push"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"peek"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pop"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"empty"),")."),(0,r.kt)("p",null,"Implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"MyQueue")," class:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void push(int x)")," Pushes element x to the back of the queue.\n",(0,r.kt)("inlineCode",{parentName:"p"},"int pop()")," Removes the element from the front of the queue and returns it.\n",(0,r.kt)("inlineCode",{parentName:"p"},"int peek()")," Returns the element at the front of the queue.\n",(0,r.kt)("inlineCode",{parentName:"p"},"boolean empty()")," Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the queue is empty, ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=s(n),k=l,d=m["".concat(i,".").concat(k)]||m[k]||c[k]||o;return n?a.createElement(d,u(u({ref:t},p),{},{components:n})):a.createElement(d,u({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,u=new Array(o);u[0]=k;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[m]="string"==typeof e?e:l,u[1]=r;for(var s=2;s<o;s++)u[s]=n[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7294),l=n(6010);const o="tabItem_Ymn6";function u(e){let{children:t,hidden:n,className:u}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,u),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),l=n(7294),o=n(6010),u=n(2389),r=n(7392),i=n(7094),s=n(2466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:u,values:c,groupId:k,className:d}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,r.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===u?u:u??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,i.U)(),[v,w]=(0,l.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=k){const e=y[k];null!=e&&e!==v&&f.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==v&&(O(t),w(a),null!=k&&N(k,String(a)))},q=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},f.map((e=>{let{value:t,label:n,attributes:u}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>C.push(e),onKeyDown:q,onClick:j},u,{className:(0,o.Z)("tabs__item",m,u?.className,{"tabs__item--active":v===t})}),n??t)}))),t?(0,l.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function k(e){const t=(0,u.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}},6981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=n(7462),l=(n(7294),n(3905)),o=n(5488),u=n(5162);const r={slug:"leetcode/implement-queue-using-stacks",title:"232. Implement Queue using Stacks",authors:"jhasuraj01",tags:["LeetCode","Leetcode Daily","DSA","Stack","Queue"]},i=void 0,s={permalink:"/blog/leetcode/implement-queue-using-stacks",editUrl:"https://github.com/jhasuraj01/blog/tree/main/blog/leetcode-daily/2022-12-16-implement-queue-using-stacks.mdx",source:"@site/blog/leetcode-daily/2022-12-16-implement-queue-using-stacks.mdx",title:"232. Implement Queue using Stacks",description:"Problem Statement",date:"2022-12-16T00:00:00.000Z",formattedDate:"December 16, 2022",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"},{label:"Leetcode Daily",permalink:"/blog/tags/leetcode-daily"},{label:"DSA",permalink:"/blog/tags/dsa"},{label:"Stack",permalink:"/blog/tags/stack"},{label:"Queue",permalink:"/blog/tags/queue"}],readingTime:3.265,hasTruncateMarker:!0,authors:[{name:"Suraj Jha",title:"Educator @CodeChef | IT'24 | 4\u2b50 @CodeChef | Knight @Leetcode",url:"https://github.com/jhasuraj01",imageURL:"https://github.com/jhasuraj01.png",key:"jhasuraj01"}],frontMatter:{slug:"leetcode/implement-queue-using-stacks",title:"232. Implement Queue using Stacks",authors:"jhasuraj01",tags:["LeetCode","Leetcode Daily","DSA","Stack","Queue"]},nextItem:{title:"1143. Longest Common Subsequence, LeetCode",permalink:"/blog/leetcode/longest-common-subsequence"}},p={authorsImageUrls:[void 0]},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Follow Up",id:"follow-up",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Queue: Push",id:"queue-push",level:3},{value:"Queue: Peek",id:"queue-peek",level:3},{value:"Queue: Pop",id:"queue-pop",level:3},{value:"Solution",id:"solution",level:2},{value:"Related Problems",id:"related-problems",level:2},{value:"References",id:"references",level:2},{value:"Links",id:"links",level:2}],c={toc:m};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,l.kt)("p",null,"Implement a first in first out (FIFO) queue using only two stacks.\nThe implemented queue should support all the functions of a normal\nqueue (",(0,l.kt)("inlineCode",{parentName:"p"},"push"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"peek"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pop"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"empty"),")."),(0,l.kt)("p",null,"Implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"MyQueue")," class:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void push(int x)")," Pushes element x to the back of the queue.\n",(0,l.kt)("inlineCode",{parentName:"p"},"int pop()")," Removes the element from the front of the queue and returns it.\n",(0,l.kt)("inlineCode",{parentName:"p"},"int peek()")," Returns the element at the front of the queue.\n",(0,l.kt)("inlineCode",{parentName:"p"},"boolean empty()")," Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the queue is empty, ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Notes:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You must use only standard operations of a stack, which means only ",(0,l.kt)("inlineCode",{parentName:"li"},"push to top"),",\n",(0,l.kt)("inlineCode",{parentName:"li"},"peek/pop from top"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"size"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"is empty")," operations are valid."),(0,l.kt)("li",{parentName:"ul"},"Depending on your language, the stack may not be supported natively. You may\nsimulate a stack using a list or deque (double-ended queue) as long as you use\nonly a stack's standard operations.")),(0,l.kt)("p",null,"Example 1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'Input:\n["MyQueue", "push", "push", "peek", "pop", "empty"]\n[[], [1], [2], [], [], []]\nOutput:\n[null, null, null, 1, 1, false]\n\nExplanation:\nMyQueue myQueue = new MyQueue();\nmyQueue.push(1); // queue is: [1]\nmyQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)\nmyQueue.peek(); // return 1\nmyQueue.pop(); // return 1, queue is [2]\nmyQueue.empty(); // return false\n')),(0,l.kt)("p",null,"Constraints:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= x <= 9")),(0,l.kt)("li",{parentName:"ul"},"At most ",(0,l.kt)("inlineCode",{parentName:"li"},"100")," calls will be made to ",(0,l.kt)("inlineCode",{parentName:"li"},"push"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"pop"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"peek"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"empty"),"."),(0,l.kt)("li",{parentName:"ul"},"All the calls to ",(0,l.kt)("inlineCode",{parentName:"li"},"pop")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"peek")," are valid.")),(0,l.kt)("h2",{id:"follow-up"},"Follow Up"),(0,l.kt)("p",null,"Can you implement the queue such that each operation is ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Amortized_analysis"},"amortized"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"O(1)")," time complexity? In other words, performing ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," operations will take\noverall ",(0,l.kt)("inlineCode",{parentName:"p"},"O(n)")," time even if one of those operations may take longer."),(0,l.kt)("h2",{id:"explanation"},"Explanation"),(0,l.kt)("p",null,"Properties of Queue:"),(0,l.kt)("mermaid",{value:"flowchart LR;\n\nqueue[Queue Data Structure];\npush((Push));\npeek((Peek));\npop((Pop));\nfront[Front];\nback[Back];\n\npop --- front --- queue --- back --- push;\npeek --- front;"}),(0,l.kt)("p",null,"Properties of Stack:"),(0,l.kt)("mermaid",{value:"flowchart LR;\n\nstack[Stack Data Structure];\npush((Push));\npeek((Peek));\npop((Pop));\nfront[Front];\nback[Back];\n\nfront --- stack --- back --- push;\nback --- pop;\nback --- peek;"}),(0,l.kt)("p",null,"Inorder to create queue using stack, we can use combination of 2 stacks (say ",(0,l.kt)("inlineCode",{parentName:"p"},"stack1"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"stack2"),");"),(0,l.kt)("h3",{id:"queue-push"},"Queue: Push"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"push new element to ",(0,l.kt)("inlineCode",{parentName:"li"},"stack1")),(0,l.kt)("li",{parentName:"ul"},"oldest element pushed will be in the bottom of stack"),(0,l.kt)("li",{parentName:"ul"},"newest element pushed will be on the top of stack")),(0,l.kt)("h3",{id:"queue-peek"},"Queue: Peek"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"IF ",(0,l.kt)("inlineCode",{parentName:"li"},"stack2")," is empty then oldest element will be at the\nbottom of ",(0,l.kt)("inlineCode",{parentName:"li"},"stack1")," else oldest element will be on top of ",(0,l.kt)("inlineCode",{parentName:"li"},"stack2"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"IF stack2 is empty\n    WHILE stack1 is not empty\n        pop element from stack1\n        push element into stack2\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Now, oldest element will always be on the top of ",(0,l.kt)("inlineCode",{parentName:"li"},"stack2"))),(0,l.kt)("h3",{id:"queue-pop"},"Queue: Pop"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"same as finding the peek, then just pop peek element from ",(0,l.kt)("inlineCode",{parentName:"li"},"stack2"),"."),(0,l.kt)("li",{parentName:"ul"},"after, pop operation on ",(0,l.kt)("inlineCode",{parentName:"li"},"stack2"),", 2nd oldest will again come on top of ",(0,l.kt)("inlineCode",{parentName:"li"},"stack2"),".")),(0,l.kt)("h2",{id:"solution"},"Solution"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"cpp",label:"C++ Two User Stack",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='C++ Solution using Two User Defined Stack'",title:"'C++",Solution:!0,using:!0,Two:!0,User:!0,Defined:!0,"Stack'":!0},"class MyQueue {\nprivate:\n    stack<int> s1, s2;\npublic:\n    MyQueue() {\n\n    }\n    \n    void push(int x) {\n        s1.push(x);\n    }\n    \n    int pop() {\n        if(s2.empty()) {\n            while(!s1.empty()) {\n                s2.push(s1.top());\n                s1.pop();\n            }\n        }\n        int ans = s2.top();\n        s2.pop();\n        return ans;\n    }\n    \n    int peek() {\n        if(s2.empty()) {\n            while(!s1.empty()) {\n                s2.push(s1.top());\n                s1.pop();\n            }\n        }\n        return s2.top();\n    }\n    \n    bool empty() {\n        return s1.size() + s2.size() == 0;\n    }\n};\n\n\n\n/**\n * Your MyQueue object will be instantiated and called as such:\n * MyQueue* obj = new MyQueue();\n * obj->push(x);\n * int param_2 = obj->pop();\n * int param_3 = obj->peek();\n * bool param_4 = obj->empty();\n */\n")),(0,l.kt)("p",null,"Time Complexity:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Push: O(1)"),(0,l.kt)("li",{parentName:"ul"},"Pop: O(N), amortized: O(1)"),(0,l.kt)("li",{parentName:"ul"},"Peek: O(N), amortized: O(1)")),(0,l.kt)("p",null,"Space Complexity: O(N)"))),(0,l.kt)("h2",{id:"related-problems"},"Related Problems"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/implement-stack-using-queue/"},"Implement Stack using Queues - GeeksforGeeks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/implement-stack-using-queues/"},"225. Implement Stack using Queues - LeetCode"))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/queue-using-stacks/"},"Queue using Stacks - GeeksforGeeks"))),(0,l.kt)("h2",{id:"links"},"Links"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/implement-queue-using-stacks/"},"232. Implement Queue using Stacks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/implement-queue-using-stacks/solutions/2918885/c-solution-using-two-user-defined-stack-time-o-1-space-o-n/"},"LeetCode Discussion Post - Suraj Jha"))))}k.isMDXComponent=!0}}]);
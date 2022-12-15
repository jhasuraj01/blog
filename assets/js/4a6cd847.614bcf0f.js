"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:i,values:m,groupId:d,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:v}=(0,s.U)(),[y,x]=(0,r.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=d){const e=N[d];null!=e&&e!==y&&h.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,n=C.indexOf(t),a=h[n].value;a!==y&&(S(t),x(a),null!=d&&v(d,String(a)))},w=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},g)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>C.push(e),onKeyDown:w,onClick:T},i,{className:(0,l.Z)("tabs__item",c,i?.className,{"tabs__item--active":y===t})}),n??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},6677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),i=n(5162);const o={slug:"leetcode/longest-common-subsequence",title:"1143. Longest Common Subsequence, LeetCode",authors:"jhasuraj01",tags:["LeetCode","Leetcode Daily","DSA","Dynamic Programming","String"]},s=void 0,u={permalink:"/blog/leetcode/longest-common-subsequence",editUrl:"https://github.com/jhasuraj01/blog/tree/main/blog/leetcode-daily/2022-12-15-longest-common-subsequence.mdx",source:"@site/blog/leetcode-daily/2022-12-15-longest-common-subsequence.mdx",title:"1143. Longest Common Subsequence, LeetCode",description:"Problem Statement",date:"2022-12-15T00:00:00.000Z",formattedDate:"December 15, 2022",tags:[{label:"LeetCode",permalink:"/blog/tags/leet-code"},{label:"Leetcode Daily",permalink:"/blog/tags/leetcode-daily"},{label:"DSA",permalink:"/blog/tags/dsa"},{label:"Dynamic Programming",permalink:"/blog/tags/dynamic-programming"},{label:"String",permalink:"/blog/tags/string"}],readingTime:3.085,hasTruncateMarker:!1,authors:[{name:"Suraj Jha",title:"Educator @CodeChef | IT'24 | 4\u2b50 @CodeChef | Knight @Leetcode",url:"https://github.com/jhasuraj01",imageURL:"https://github.com/jhasuraj01.png",key:"jhasuraj01"}],frontMatter:{slug:"leetcode/longest-common-subsequence",title:"1143. Longest Common Subsequence, LeetCode",authors:"jhasuraj01",tags:["LeetCode","Leetcode Daily","DSA","Dynamic Programming","String"]},nextItem:{title:"Change SSH Port in Linux CentOS (Oracle Linux 8)",permalink:"/blog/change-ssh-port-in-linux-centos"}},p={authorsImageUrls:[void 0]},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Solution",id:"solution",level:2},{value:"Related Problems",id:"related-problems",level:2},{value:"References",id:"references",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given two strings ",(0,r.kt)("inlineCode",{parentName:"p"},"text1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"text2"),", return the length of their ",(0,r.kt)("em",{parentName:"p"},"longest common subsequence"),". If there is no common subsequence, return ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"subsequence")," of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For example, ",(0,r.kt)("inlineCode",{parentName:"li"},'"ace"')," is a subsequence of ",(0,r.kt)("inlineCode",{parentName:"li"},'"abcde"'),".")),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"common subsequence")," of two strings is a subsequence that is common to both strings. "),(0,r.kt)("p",null,"Example 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Input: text1 = "abcde", text2 = "ace" \nOutput: 3  \nExplanation: The longest common subsequence is "ace" and its length is 3.\n')),(0,r.kt)("p",null,"Example 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Input: text1 = "abc", text2 = "abc"\nOutput: 3\nExplanation: The longest common subsequence is "abc" and its length is 3.\n')),(0,r.kt)("p",null,"Example 3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Input: text1 = "abc", text2 = "def"\nOutput: 0\nExplanation: There is no such common subsequence, so the result is 0.\n')),(0,r.kt)("p",null,"Constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= text1.length, text2.length <= 1000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"text1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"text2")," consist of only lowercase English characters.")),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("p",null,"Let ",(0,r.kt)("inlineCode",{parentName:"p"},"i1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"i2")," be two pointer pointing at ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," index in string ",(0,r.kt)("inlineCode",{parentName:"p"},"s1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"s2")," respectively."),(0,r.kt)("p",null,"let ",(0,r.kt)("inlineCode",{parentName:"p"},"dp(i1, i2, s1, s2)")," denotes the length of longest common subsequence in string ",(0,r.kt)("inlineCode",{parentName:"p"},"s1[i1...n1]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"s2[i2...n2]"),"."),(0,r.kt)("p",null,"If ",(0,r.kt)("em",{parentName:"p"},"i1 == n1"),", implies s1","[i1....n1]"," is empty."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Base Case:")," longest common subsequence of any string with empty string is 0.\nTherefore is any of ",(0,r.kt)("em",{parentName:"p"},"i1 == n1")," or ",(0,r.kt)("em",{parentName:"p"},"i2 == n2")," return ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("p",null,"Now, for any ",(0,r.kt)("inlineCode",{parentName:"p"},"i1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"i2")," there are 2 possibilities."),(0,r.kt)("mermaid",{value:'graph TD;\n    root["(i1, i2)"];\n    eq["s1[i1] == s2[i2]"];\n    nq["s1[i1] != s2[i2]"];\n\n    root --\x3e eq -- Pick --\x3e Pick["Consider Current Characters in Subsequence"] --Recursive Call--\x3e next["(i1+1, i2+1)"];\n    eq -- Skip --\x3e Skip["Skip Current Characters either from s1 or s2"];\n\n    root --\x3e nq -- Skip --\x3e Skip;\n\n    Skip --Recursive Call--\x3e next_i1["(i1+1, i2)"];\n    Skip --Recursive Call--\x3e next_i2["(i1, i2+1)"];'}),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"cpp1",label:"C++ Recursive",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='CPP: Recursive Brute Force Solution'",title:"'CPP:",Recursive:!0,Brute:!0,Force:!0,"Solution'":!0},"class Solution {\nprivate:\n    int dp(int i1, int i2, string &s1, string &s2) {\n        int n1 = s1.size();\n        int n2 = s2.size();\n\n        // Base Case\n        if(i1 == n1 || i2 == n2) return 0;\n\n        if(s1[i1] == s2[i2]) {\n            return max({\n                dp(i1+1, i2+1, s1, s2) + 1,\n                dp(i1, i2+1, s1, s2),\n                dp(i1+1, i2, s1, s2),\n            });\n        }\n        else {\n            return max({\n                dp(i1, i2+1, s1, s2),\n                dp(i1+1, i2, s1, s2),\n            });\n        }\n    }\npublic:\n    int longestCommonSubsequence(string text1, string text2) {\n        return dp(0, 0, text1, text2);\n    }\n};\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"m"),(0,r.kt)("th",{parentName:"tr",align:null},"n"),(0,r.kt)("th",{parentName:"tr",align:null},"Time Complexity"),(0,r.kt)("th",{parentName:"tr",align:null},"Space Complexity"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size of string 1"),(0,r.kt)("td",{parentName:"tr",align:null},"size of string 2"),(0,r.kt)("td",{parentName:"tr",align:null},"O(max(m,n)","*","m","*","n)"),(0,r.kt)("td",{parentName:"tr",align:null},"O(max(m,n))"))))),(0,r.kt)(i.Z,{value:"cpp2",label:"C++ Recursive DP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='CPP: Recursive + Memoization [Accepted]'",title:"'CPP:",Recursive:!0,"+":!0,Memoization:!0,"[Accepted]'":!0},"class Solution {\nprivate:\n    int dp(int i1, int i2, string &s1, string &s2, vector<vector<int>> &cache) {\n        int n1 = s1.size();\n        int n2 = s2.size();\n\n        // Base Case\n        if(i1 == n1 || i2 == n2) return 0;\n\n        if(cache[i1][i2] != -1) return cache[i1][i2];\n\n        if(s1[i1] == s2[i2]) {\n            return cache[i1][i2] = max({\n                dp(i1+1, i2+1, s1, s2, cache) + 1,\n                dp(i1, i2+1, s1, s2, cache),\n                dp(i1+1, i2, s1, s2, cache),\n            });\n        }\n        else {\n            return cache[i1][i2] = max({\n                dp(i1, i2+1, s1, s2, cache),\n                dp(i1+1, i2, s1, s2, cache),\n            });\n        }\n    }\npublic:\n    int longestCommonSubsequence(string text1, string text2) {\n        vector<vector<int>> cache(text1.size(), vector<int>(text2.size(), -1));\n        return dp(0, 0, text1, text2, cache);\n    }\n};\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"m"),(0,r.kt)("th",{parentName:"tr",align:null},"n"),(0,r.kt)("th",{parentName:"tr",align:null},"Time Complexity"),(0,r.kt)("th",{parentName:"tr",align:null},"Space Complexity"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size of string 1"),(0,r.kt)("td",{parentName:"tr",align:null},"size of string 2"),(0,r.kt)("td",{parentName:"tr",align:null},"O(m*n)"),(0,r.kt)("td",{parentName:"tr",align:null},"O(m*n)")))))),(0,r.kt)("h2",{id:"related-problems"},"Related Problems"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://leetcode.com/discuss/interview-question/1273766/longest-common-substring"},"Longest Common Substring")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/shortest-common-supersequence/"},"1092. Shortest Common Supersequence")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/longest-repeating-substring/"},"1062. Longest Repeating Substring")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/longest-palindromic-subsequence/"},"516. Longest Palindromic Subsequence"))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/4Urd0a0BNng"},"Longest common subsequence Recursive - YouTube, Aditya Verma")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/NnD96abizww"},"Longest common subsequence Tabular - YouTube, Tushar Roy"))))}d.isMDXComponent=!0}}]);
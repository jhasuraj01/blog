"use strict";(self.webpackChunkjhasuraj_blog=self.webpackChunkjhasuraj_blog||[]).push([[6880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(s,".").concat(b)]||d[b]||c[b]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={title:"Possible Bipartition",displayed_sidebar:"dataStructures",keywords:["Possible Bipartition","Bipartite","Graph","DSA"]},o="Possible Bipartition - Bipartite Graph",l={unversionedId:"data-structures/graph/bipartite-graph/possible_bipartition",id:"data-structures/graph/bipartite-graph/possible_bipartition",title:"Possible Bipartition",description:"Problem Statement",source:"@site/docs/data-structures/graph/bipartite-graph/01_possible_bipartition.mdx",sourceDirName:"data-structures/graph/bipartite-graph",slug:"/data-structures/graph/bipartite-graph/possible_bipartition",permalink:"/blog/data-structures/graph/bipartite-graph/possible_bipartition",draft:!1,editUrl:"https://github.com/jhasuraj01/blog/tree/main/docs/data-structures/graph/bipartite-graph/01_possible_bipartition.mdx",tags:[],version:"current",lastUpdatedBy:"jhasuraj01",lastUpdatedAt:1671611349,formattedLastUpdatedAt:"Dec 21, 2022",sidebarPosition:1,frontMatter:{title:"Possible Bipartition",displayed_sidebar:"dataStructures",keywords:["Possible Bipartition","Bipartite","Graph","DSA"]},sidebar:"dataStructures",previous:{title:"Bipartite Graph",permalink:"/blog/data-structures/graph/bipartite-graph/"},next:{title:"Tree",permalink:"/blog/data-structures/tree/"}},s={},p=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Examples",id:"examples",level:2},{value:"Constraints",id:"constraints",level:2},{value:"Solution",id:"solution",level:2},{value:"Problem Links",id:"problem-links",level:2},{value:"References",id:"references",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"possible-bipartition---bipartite-graph"},"Possible Bipartition - Bipartite Graph"),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"We want to split a group of ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," people (labeled from ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),") into\ntwo groups of any size. Each person may dislike some other people, and\nthey should not go into the same group."),(0,r.kt)("p",null,"Given the integer ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," and the array ",(0,r.kt)("inlineCode",{parentName:"p"},"dislikes")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"dislikes[i] = [ai, bi]"),"\nindicates that the person labeled ",(0,r.kt)("inlineCode",{parentName:"p"},"ai")," does not like the person labeled ",(0,r.kt)("inlineCode",{parentName:"p"},"bi"),",\nreturn ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if it is possible to split everyone into two groups in this way."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Example 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Input: n = 4, dislikes = [[1,2],[1,3],[2,4]]\nOutput: true\nExplanation: group1 [1,4] and group2 [2,3].\n")),(0,r.kt)("p",null,"Example 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Input: n = 3, dislikes = [[1,2],[1,3],[2,3]]\nOutput: false\n")),(0,r.kt)("p",null,"Example 3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Input: n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]\nOutput: false\n")),(0,r.kt)("h2",{id:"constraints"},"Constraints"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= n <= 2000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= dislikes.length <= 104")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dislikes[i].length == 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= dislikes[i][j] <= n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ai < bi")),(0,r.kt)("li",{parentName:"ul"},"All the pairs of ",(0,r.kt)("inlineCode",{parentName:"li"},"dislikes")," are unique.")),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title='C++ Solution'",title:"'C++","Solution'":!0},"#include<bits/stdc++.h>\nusing namespace std;\n\n#define WHITE -1\n#define RED 0\n#define BLUE 1\n\nclass Solution {\nprivate:\n    bool isBipartite(int node, vector<vector<int>> &G, vector<int> &nodes) {\n        for(int next: G[node]) {\n            if(nodes[node] == nodes[next]) return false;\n            if(nodes[next] != WHITE) continue;\n            nodes[next] = nodes[node] == RED ? BLUE : RED;\n            if(isBipartite(next, G, nodes) == false) return false;\n        }\n        return true;\n    }\npublic:\n    bool possibleBipartition(int n, vector<vector<int>>& dislikes) {\n        vector<int> nodes(n+1, WHITE);\n        vector<vector<int>> G(n+1);\n        for(auto pair: dislikes) {\n            int a = pair[0];\n            int b = pair[1];\n            G[a].push_back(b);\n            G[b].push_back(a);\n        }\n\n        for(int i = 1; i <= n; ++i) {\n            if(nodes[i] != WHITE) continue;\n            nodes[i] = RED;\n            if(isBipartite(i, G, nodes) == false) {\n                return false;\n            }\n        }\n\n        return true;\n    }\n};\n\nint main() {\n    Solution* obj = new Solution();\n    int n = 5;\n    vector<vector<int>> dislikes = {{1,2},{3,4},{4,5},{3,5}};\n    cout << obj->possibleBipartition(n, dislikes);\n    return 0;\n}\n")),(0,r.kt)("h2",{id:"problem-links"},"Problem Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/possible-bipartition/description/"},"886. Possible Bipartition"))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/possible-bipartition/solutions/654887/c-bfs-with-detailed-explanation/"},"C++ BFS with detailed explanation - LeetCode"))))}c.isMDXComponent=!0}}]);
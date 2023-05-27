"use strict";(self.webpackChunkjhasuraj_blog=self.webpackChunkjhasuraj_blog||[]).push([[410],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),a=r(6010),i=r(3438),o=r(9960),l=r(3919),s=r(5999);const c="cardContainer_fWXF",p="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",c)},r)}function u(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",d),title:o},o))}function h(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(k,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},4947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),i=r(2991);const o={title:"Graph",displayed_sidebar:"dataStructures"},l="Graph Introduction",s={unversionedId:"data-structures/graph/index",id:"data-structures/graph/index",title:"Graph",description:"Here are some important topics related to graphs that are commonly covered in technical interviews:",source:"@site/docs/data-structures/graph/index.mdx",sourceDirName:"data-structures/graph",slug:"/data-structures/graph/",permalink:"/blog/data-structures/graph/",draft:!1,editUrl:"https://github.com/jhasuraj01/blog/tree/main/docs/data-structures/graph/index.mdx",tags:[],version:"current",lastUpdatedBy:"Suraj Jha",lastUpdatedAt:1671750421,formattedLastUpdatedAt:"Dec 22, 2022",frontMatter:{title:"Graph",displayed_sidebar:"dataStructures"},sidebar:"dataStructures",previous:{title:"Introduction to Data Structures",permalink:"/blog/data-structures/intro"},next:{title:"Connected Components",permalink:"/blog/data-structures/graph/connected-components"}},c={},p=[{value:"Standard Graph Problems",id:"standard-graph-problems",level:3},{value:"Topics",id:"topics",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"graph-introduction"},"Graph Introduction"),(0,a.kt)("p",null,"Here are some important topics related to graphs that are commonly covered in technical interviews:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Graph representation"),": How to represent a graph in memory,\nincluding ",(0,a.kt)("inlineCode",{parentName:"li"},"adjacency matrix")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"adjacency list")," representations."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Traversal algorithms"),": How to traverse a graph, including ",(0,a.kt)("inlineCode",{parentName:"li"},"Depth-First Search (DFS)")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Breadth-First Search (BFS)"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Shortest path algorithms"),": How to find the shortest path between two nodes in a graph, including ",(0,a.kt)("inlineCode",{parentName:"li"},"Dijkstra's algorithm")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"A*"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Minimum spanning tree algorithms"),": How to find a minimum spanning tree in a graph, including ",(0,a.kt)("inlineCode",{parentName:"li"},"Kruskal's algorithm")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Prim's algorithm"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Topological sorting"),": How to order the nodes in a directed acyclic graph (DAG) such that for every directed edge uv, vertex u comes before v in the ordering using ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/5lZ0iJMrUMk"},"DFS")," or ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/73sneFXuTEg"},"Kahn's Algorithm"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Disjoint Set Union (Union Find)"),": Given an element, how to find the set that it belongs to and Given two sets, how to merge them into a single set."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Strongly connected components"),": How to find the strongly connected components in a directed graph, using ",(0,a.kt)("inlineCode",{parentName:"li"},"Tarjan's algorithm")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Kosaraju's Algorithm"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Graph coloring"),": How to color the nodes in a graph such that no two adjacent nodes have the same color, using the ",(0,a.kt)("inlineCode",{parentName:"li"},"Welsh-Powell algorithm")," or the ",(0,a.kt)("inlineCode",{parentName:"li"},"DSATUR algorithm"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Maximum flow"),": How to find the maximum flow in a flow network, using the ",(0,a.kt)("inlineCode",{parentName:"li"},"Ford-Fulkerson algorithm")," or the ",(0,a.kt)("inlineCode",{parentName:"li"},"Edmonds-Karp algorithm"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Network flow"),": How to model and solve network flow problems, including the ",(0,a.kt)("inlineCode",{parentName:"li"},"max-flow min-cut theorem")," and the ",(0,a.kt)("inlineCode",{parentName:"li"},"Ford-Fulkerson algorithm"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Graph theory concepts"),": Understanding of basic graph theory concepts, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"degrees of a node"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"connectedness"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"bipartiteness"),".")),(0,a.kt)("p",null,"It's also helpful to be familiar with various types of graphs, such as directed and undirected graphs, weighted and unweighted graphs, and tree and cycle graphs."),(0,a.kt)("h3",{id:"standard-graph-problems"},"Standard Graph Problems"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Cycle Detection",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Directed Graph: ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/iTBaI90lpDQ"},"Kahn's Algorithm")),(0,a.kt)("li",{parentName:"ul"},"Undirected Graph: ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/BPlrALf1LDU"},"BFS Approach"),", ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/zQ3zgFypzX4"},"DFS Approach")))),(0,a.kt)("li",{parentName:"ol"},"Articulation Point"),(0,a.kt)("li",{parentName:"ol"},"Disjoint Set Union")),(0,a.kt)("h2",{id:"topics"},"Topics"),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);
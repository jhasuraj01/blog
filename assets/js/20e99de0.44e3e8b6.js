"use strict";(self.webpackChunkjhasuraj_blog=self.webpackChunkjhasuraj_blog||[]).push([[7424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),c=n(6550),i=n(1980),u=n(7392),s=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,c.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=f({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=i??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var h=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:c,selectValue:i,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=s.indexOf(t),a=u[n].value;a!==c&&(p(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>s.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":c===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},4969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),o=n(5162);const c={slug:"ethereum-blockchain-local-environment",title:"Ethereum Blockchain local environment setup using Ganache and truffle",authors:["jhasuraj01"],tags:["ethereum","blockchain","smart-contract","dapp","ganache","truffle","solidity"]},i="Blockchain local environment setup using Ganache and truffle",u={permalink:"/blog/ethereum-blockchain-local-environment",editUrl:"https://github.com/jhasuraj01/blog/tree/main/blog/2022-09-29-ethereum-blockchain-local-environment.mdx",source:"@site/blog/2022-09-29-ethereum-blockchain-local-environment.mdx",title:"Ethereum Blockchain local environment setup using Ganache and truffle",description:"Setting up your dev environment for Ethereum development takes just a few minutes. In this article you will learn about Deploying and Operating Simple Smart Contract on local blockchain network using Ganache and truffle.",date:"2022-09-29T00:00:00.000Z",formattedDate:"September 29, 2022",tags:[{label:"ethereum",permalink:"/blog/tags/ethereum"},{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"smart-contract",permalink:"/blog/tags/smart-contract"},{label:"dapp",permalink:"/blog/tags/dapp"},{label:"ganache",permalink:"/blog/tags/ganache"},{label:"truffle",permalink:"/blog/tags/truffle"},{label:"solidity",permalink:"/blog/tags/solidity"}],readingTime:3.985,hasTruncateMarker:!0,authors:[{name:"Suraj Jha",title:"Software Engineer @Uber",url:"https://github.com/jhasuraj01",imageURL:"https://github.com/jhasuraj01.png",key:"jhasuraj01"}],frontMatter:{slug:"ethereum-blockchain-local-environment",title:"Ethereum Blockchain local environment setup using Ganache and truffle",authors:["jhasuraj01"],tags:["ethereum","blockchain","smart-contract","dapp","ganache","truffle","solidity"]},prevItem:{title:"Change SSH Port in Linux CentOS (Oracle Linux 8)",permalink:"/blog/change-ssh-port-in-linux-centos"}},s={authorsImageUrls:[void 0]},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialize Project",id:"initialize-project",level:2},{value:"Writing Smart Contract",id:"writing-smart-contract",level:2},{value:"Ganache Setup",id:"ganache-setup",level:2},{value:"Compiling and Deploying",id:"compiling-and-deploying",level:2},{value:"Accessing Deployed Smart Contract",id:"accessing-deployed-smart-contract",level:2},{value:"Enter <em>truffle console</em>",id:"enter-truffle-console",level:3},{value:"Check the current balance",id:"check-the-current-balance",level:3},{value:"Deposit the amount",id:"deposit-the-amount",level:3},{value:"Withdraw the amount",id:"withdraw-the-amount",level:3},{value:"Verify all the transactions in Ganache",id:"verify-all-the-transactions-in-ganache",level:3},{value:"References",id:"references",level:2}],m={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Setting up your dev environment for Ethereum development takes just a few minutes. In this article you will learn about Deploying and Operating Simple Smart Contract on local blockchain network using Ganache and truffle."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download and install the latest ",(0,r.kt)("inlineCode",{parentName:"li"},"node")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"npm")," from ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")),(0,r.kt)("li",{parentName:"ol"},"Download and install Visual Studio Code from ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"https://code.visualstudio.com/")),(0,r.kt)("li",{parentName:"ol"},"Download and install ",(0,r.kt)("inlineCode",{parentName:"li"},"Ganache")," from ",(0,r.kt)("a",{parentName:"li",href:"https://trufflesuite.com/ganache/"},"https://trufflesuite.com/ganache/")),(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"Truffle"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install truffle -g\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add truffle\n"))),(0,r.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add truffle -g\n")))))),(0,r.kt)("h2",{id:"initialize-project"},"Initialize Project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"truffle init my-bank\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-output"},"Starting init...\n================\n\n> Copying project files to my-bank\n\nInit successful, sweet!\n\nTry our scaffold commands to get started:\n  $ truffle create contract YourContractName # scaffold a contract\n  $ truffle create test YourTestName         # scaffold a test\n\nhttp://trufflesuite.com/docs/\n")),(0,r.kt)("p",null,"Uncomment the following lines in ",(0,r.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"network_id")," as given below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='truffle-config.js'",title:"'truffle-config.js'"},'...\n// tab if you use this network and you must also set the `host`, `port` and `network_id`\n// options below to some value.\n//\n// highlight-start\ndevelopment: {\n  host: "127.0.0.1",     // Localhost (default: none)\n  port: 8545,            // Standard Ethereum port (default: none)\n  network_id: "*",       // Any network (default: none)\n},\n// highlight-end\n//\n// An additional network, but with some advanced options\u2026\n...\n')),(0,r.kt)("h2",{id:"writing-smart-contract"},"Writing Smart Contract"),(0,r.kt)("p",null,"Create two new files ",(0,r.kt)("inlineCode",{parentName:"p"},"Bank.sol")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"1_bank.js")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"migrations")," directory respectively as shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-output"},"\u251c\u2500build\n\u2502 \u2514\u2500contracts\n\u251c\u2500contracts\n\u2502 \u2514\u2500 Bank.sol (+)\n\u251c\u2500migrations\n\u2502 \u2514\u2500 1_bank.js (+)\n\u2514\u2500test\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol",metastring:"title='contracts/Bank.sol'",title:"'contracts/Bank.sol'"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.17;\n\ncontract Bank {\n\n    uint256 balance;\n\n    constructor() {\n        balance = 0;\n    }\n\n    /**\n     * @dev Add value in variable\n     * @param amount value to deposit\n     */\n    function deposit(uint256 amount) public {\n        if(amount > 0)\n            balance += amount;\n    }\n\n    function withdraw(uint256 amount) public {\n        if(amount > 0)\n            balance -= amount;\n    }\n\n    /**\n     * @dev Return balance\n     * @return value of 'number'\n     */\n    function check_balance() public view returns (uint256){\n        return balance;\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='migrations/1_bank.js'",title:"'migrations/1_bank.js'"},'const Bank = artifacts.require("Bank");\n\nmodule.exports = (deployer) => {\n    deployer.deploy(Bank);\n}\n')),(0,r.kt)("h2",{id:"ganache-setup"},"Ganache Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Launch Ganache and Create a new ",(0,r.kt)("em",{parentName:"li"},"ETHEREUM WORKSPACE."),(0,r.kt)("img",{parentName:"li",src:"https://t43259681.p.clickup-attachments.com/t43259681/2cf5b19b-4516-469d-83ec-bb40dbe94fac/image.png",alt:null})),(0,r.kt)("li",{parentName:"ol"},"Rename your Workspace to ",(0,r.kt)("inlineCode",{parentName:"li"},"My Bank")," and click on ",(0,r.kt)("em",{parentName:"li"},"Add Project"),(0,r.kt)("img",{parentName:"li",src:"https://t43259681.p.clickup-attachments.com/t43259681/1ebbf941-0910-409e-9f83-8d30e6bcc2a9/image.png",alt:null})),(0,r.kt)("li",{parentName:"ol"},"Navigate to your project folder and select ",(0,r.kt)("inlineCode",{parentName:"li"},"truffle-config.js")," and click ",(0,r.kt)("em",{parentName:"li"},"Open")," ",(0,r.kt)("img",{parentName:"li",src:"https://t43259681.p.clickup-attachments.com/t43259681/c91edbb3-4bf6-42a1-8cee-e7195d9e2c98/image.png",alt:null})),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("em",{parentName:"li"},"Server,")," update the port to ",(0,r.kt)("inlineCode",{parentName:"li"},"8545")," then click on ",(0,r.kt)("em",{parentName:"li"},"Save Workspace."),(0,r.kt)("img",{parentName:"li",src:"https://t43259681.p.clickup-attachments.com/t43259681/5724c603-6bea-470b-bca8-2396f34c172b/image.png",alt:null}))),(0,r.kt)("h2",{id:"compiling-and-deploying"},"Compiling and Deploying"),(0,r.kt)("p",null,"Open Terminal and ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," to your project directory",(0,r.kt)("img",{parentName:"p",src:"https://t43259681.p.clickup-attachments.com/t43259681/23a3f7c5-e87c-4d7a-b0ee-ce3cb6ccfca2/image.png",alt:null})),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx truffle migrate\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx truffle migrate\n"))),(0,r.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx truffle migrate\n")))),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-output"},"Compiling your contracts...\n===========================\n> Compiling .\\contracts\\Bank.sol\n> Artifacts written to E:\\Personal Projects\\blockchain\\my-bank\\build\\contracts\n> Compiled successfully using:\n   - solc: 0.8.17+commit.8df45f5f.Emscripten.clang\n\n\nStarting migrations...\n======================\n> Network name:    'development'\n> Network id:      5777\n> Block gas limit: 6721975 (0x6691b7)\n\n\n1_bank.js\n=========\n\n   Deploying 'Bank'\n   ----------------\n   > transaction hash:    0xaa6f43b40c85d646c475e940fe1869fb37876620c726c394a25b6962e28eca9b\n   > Blocks: 0            Seconds: 0\n   > contract address:    0x5724576138328Ebe1A163b4c756038Fe6C0698E4\n   > block number:        1\n   > block timestamp:     1664260108\n   > account:             0x7b17D239FA8d011FF19fC20efE4aD2E5541839b7\n   > balance:             99.9963793\n   > gas used:            181035 (0x2c32b)\n   > gas price:           20 gwei\n   > value sent:          0 ETH\n   > total cost:          0.0036207 ETH\n\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:           0.0036207 ETH\n\nSummary\n=======\n> Total deployments:   1\n> Final cost:          0.0036207 ETH\n")),(0,r.kt)("p",null,"Wow! You have just deployed your first smart contract! To verify go to Ganache, navigate to ",(0,r.kt)("em",{parentName:"p"},"Contracts")," there you will find your first contract ",(0,r.kt)("inlineCode",{parentName:"p"},"Bank"),(0,r.kt)("img",{parentName:"p",src:"https://t43259681.p.clickup-attachments.com/t43259681/bc7da2eb-c66c-446f-91fd-4cf08245dbe9/image.png",alt:null})),(0,r.kt)("h2",{id:"accessing-deployed-smart-contract"},"Accessing Deployed Smart Contract"),(0,r.kt)("h3",{id:"enter-truffle-console"},"Enter ",(0,r.kt)("em",{parentName:"h3"},"truffle console")),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx truffle console\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx truffle console\n"))),(0,r.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx truffle console\n")))),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-output"},"truffle(development)>\n")),(0,r.kt)("h3",{id:"check-the-current-balance"},"Check the current balance"),(0,r.kt)("p",null,"To call the ",(0,r.kt)("inlineCode",{parentName:"p"},"check_balance()")," function in the smart contract, write the following code in the truffle console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='truffle(development)>'",title:"'truffle(development)>'"},"Bank.deployed().then(function(instance){ return instance.check_balance() })\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-output"},"BN { negative: 0, words: [ 0, <1 empty item> ], length: 1, red: null }\n")),(0,r.kt)("h3",{id:"deposit-the-amount"},"Deposit the amount"),(0,r.kt)("p",null,"To call the ",(0,r.kt)("inlineCode",{parentName:"p"},"deposit()")," function in the smart contract, write the following code in the truffle console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='truffle(development)>'",title:"'truffle(development)>'"},"Bank.deployed().then(function(instance){ return instance.deposit(100) })\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-output"},"{\n  tx: '0xfb2f8b4caa8cdb656237dcb7d5793e75d73988d6942e6b8df243408f0fae4e56',\n  receipt: {\n    transactionHash: '0xfb2f8b4caa8cdb656237dcb7d5793e75d73988d6942e6b8df243408f0fae4e56',\n    transactionIndex: 0,\n    blockHash: '0xc02d65d946cdde8e3a13f0660af0c109becffefc030dff27f2bf379387f6c9c1',\n    blockNumber: 3,\n    from: '0x7b17d239fa8d011ff19fc20efe4ad2e5541839b7',\n    to: '0x5724576138328ebe1a163b4c756038fe6c0698e4',\n    gasUsed: 27673,\n    cumulativeGasUsed: 27673,\n    contractAddress: null,\n    logs: [],\n    status: true,\n    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n    rawLogs: []\n  },\n  logs: []\n}\n")),(0,r.kt)("h3",{id:"withdraw-the-amount"},"Withdraw the amount"),(0,r.kt)("p",null,"To call the ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw()")," function in the smart contract, write the following code in the truffle console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='truffle(development)>'",title:"'truffle(development)>'"},"Bank.deployed().then(function(instance){ return instance.withdraw(20) })\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-output"},"{\n  tx: '0xfbd8c0374ed5f6b800feabb24d9c0d921544f270deb83822be3537c3b3059782',\n  receipt: {\n    transactionHash: '0xfbd8c0374ed5f6b800feabb24d9c0d921544f270deb83822be3537c3b3059782',\n    transactionIndex: 0,\n    blockHash: '0x3e729c7336d7ad36048191cd08006163be53acd58d49f6aafbe57b1bef0b2ffb',\n    blockNumber: 4,\n    from: '0x7b17d239fa8d011ff19fc20efe4ad2e5541839b7',\n    to: '0x5724576138328ebe1a163b4c756038fe6c0698e4',\n    gasUsed: 27629,\n    cumulativeGasUsed: 27629,\n    contractAddress: null,\n    logs: [],\n    status: true,\n    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n    rawLogs: []\n  },\n  logs: []\n}\n")),(0,r.kt)("h3",{id:"verify-all-the-transactions-in-ganache"},"Verify all the transactions in Ganache"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check the number of Blocks Created in the ",(0,r.kt)("em",{parentName:"li"},"BLOCKS")," Section of Ganache"),(0,r.kt)("li",{parentName:"ol"},"Verify all the transactions performed by you in the ",(0,r.kt)("em",{parentName:"li"},"TRANSACTIONS")," Section of Ganache."),(0,r.kt)("li",{parentName:"ol"},"Check the ETH balance of your temporary account in the ",(0,r.kt)("em",{parentName:"li"},"ACCOUNTS")," Section of Ganache.")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://trufflesuite.com/docs/truffle/quickstart/"},"Truffle quickstart"))))}f.isMDXComponent=!0}}]);
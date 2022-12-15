"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1477],{10:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"leetcode/longest-common-subsequence","metadata":{"permalink":"/blog/leetcode/longest-common-subsequence","editUrl":"https://github.com/jhasuraj01/blog/tree/main/blog/leetcode-daily/2022-12-15-longest-common-subsequence.mdx","source":"@site/blog/leetcode-daily/2022-12-15-longest-common-subsequence.mdx","title":"1143. Longest Common Subsequence, LeetCode","description":"Problem Statement","date":"2022-12-15T00:00:00.000Z","formattedDate":"December 15, 2022","tags":[{"label":"LeetCode","permalink":"/blog/tags/leet-code"},{"label":"Leetcode Daily","permalink":"/blog/tags/leetcode-daily"},{"label":"DSA","permalink":"/blog/tags/dsa"},{"label":"Dynamic Programming","permalink":"/blog/tags/dynamic-programming"},{"label":"String","permalink":"/blog/tags/string"}],"readingTime":3.085,"hasTruncateMarker":false,"authors":[{"name":"Suraj Jha","title":"Educator @CodeChef | IT\'24 | 4\u2b50 @CodeChef | Knight @Leetcode","url":"https://github.com/jhasuraj01","imageURL":"https://github.com/jhasuraj01.png","key":"jhasuraj01"}],"frontMatter":{"slug":"leetcode/longest-common-subsequence","title":"1143. Longest Common Subsequence, LeetCode","authors":"jhasuraj01","tags":["LeetCode","Leetcode Daily","DSA","Dynamic Programming","String"]},"nextItem":{"title":"Change SSH Port in Linux CentOS (Oracle Linux 8)","permalink":"/blog/change-ssh-port-in-linux-centos"}},"content":"import Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\n\\n## Problem Statement\\n\\nGiven two strings `text1` and `text2`, return the length of their *longest common subsequence*. If there is no common subsequence, return `0`.\\n\\nA *subsequence* of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.\\n\\n- For example, `\\"ace\\"` is a subsequence of `\\"abcde\\"`.\\n\\nA *common subsequence* of two strings is a subsequence that is common to both strings. \\n\\nExample 1:\\n```text\\nInput: text1 = \\"abcde\\", text2 = \\"ace\\" \\nOutput: 3  \\nExplanation: The longest common subsequence is \\"ace\\" and its length is 3.\\n```\\n\\nExample 2:\\n```text\\nInput: text1 = \\"abc\\", text2 = \\"abc\\"\\nOutput: 3\\nExplanation: The longest common subsequence is \\"abc\\" and its length is 3.\\n```\\n\\nExample 3:\\n```text\\nInput: text1 = \\"abc\\", text2 = \\"def\\"\\nOutput: 0\\nExplanation: There is no such common subsequence, so the result is 0.\\n```\\n\\nConstraints:\\n- `1 <= text1.length, text2.length <= 1000`\\n- `text1` and `text2` consist of only lowercase English characters.\\n\\n## Explanation\\n\\nLet `i1` and `i2` be two pointer pointing at `current` index in string `s1` and `s2` respectively.\\n\\nlet `dp(i1, i2, s1, s2)` denotes the length of longest common subsequence in string `s1[i1...n1]` and `s2[i2...n2]`.\\n\\nIf _i1 == n1_, implies s1[i1....n1] is empty.\\n\\n**Base Case:** longest common subsequence of any string with empty string is 0.\\nTherefore is any of _i1 == n1_ or _i2 == n2_ return `0`.\\n\\nNow, for any `i1` and `i2` there are 2 possibilities.\\n\\n```mermaid\\ngraph TD;\\n    root[\\"(i1, i2)\\"];\\n    eq[\\"s1[i1] == s2[i2]\\"];\\n    nq[\\"s1[i1] != s2[i2]\\"];\\n\\n    root --\x3e eq -- Pick --\x3e Pick[\\"Consider Current Characters in Subsequence\\"] --Recursive Call--\x3e next[\\"(i1+1, i2+1)\\"];\\n    eq -- Skip --\x3e Skip[\\"Skip Current Characters either from s1 or s2\\"];\\n\\n    root --\x3e nq -- Skip --\x3e Skip;\\n\\n    Skip --Recursive Call--\x3e next_i1[\\"(i1+1, i2)\\"];\\n    Skip --Recursive Call--\x3e next_i2[\\"(i1, i2+1)\\"];\\n```\\n\\n## Solution\\n\\n<Tabs>\\n\\n<TabItem value=\\"cpp1\\" label=\\"C++ Recursive\\">\\n\\n```cpp title=\'CPP: Recursive Brute Force Solution\'\\nclass Solution {\\nprivate:\\n    int dp(int i1, int i2, string &s1, string &s2) {\\n        int n1 = s1.size();\\n        int n2 = s2.size();\\n\\n        // Base Case\\n        if(i1 == n1 || i2 == n2) return 0;\\n\\n        if(s1[i1] == s2[i2]) {\\n            return max({\\n                dp(i1+1, i2+1, s1, s2) + 1,\\n                dp(i1, i2+1, s1, s2),\\n                dp(i1+1, i2, s1, s2),\\n            });\\n        }\\n        else {\\n            return max({\\n                dp(i1, i2+1, s1, s2),\\n                dp(i1+1, i2, s1, s2),\\n            });\\n        }\\n    }\\npublic:\\n    int longestCommonSubsequence(string text1, string text2) {\\n        return dp(0, 0, text1, text2);\\n    }\\n};\\n```\\n\\nm               |n                  | Time Complexity  | Space Complexity\\n----------------|-------------------|------------------|-----------------\\nsize of string 1|size of string 2   | O(max(m,n)\\\\*m\\\\*n)| O(max(m,n))\\n\\n</TabItem>\\n\\n<TabItem value=\\"cpp2\\" label=\\"C++ Recursive DP\\">\\n\\n```cpp title=\'CPP: Recursive + Memoization [Accepted]\'\\nclass Solution {\\nprivate:\\n    int dp(int i1, int i2, string &s1, string &s2, vector<vector<int>> &cache) {\\n        int n1 = s1.size();\\n        int n2 = s2.size();\\n\\n        // Base Case\\n        if(i1 == n1 || i2 == n2) return 0;\\n\\n        if(cache[i1][i2] != -1) return cache[i1][i2];\\n\\n        if(s1[i1] == s2[i2]) {\\n            return cache[i1][i2] = max({\\n                dp(i1+1, i2+1, s1, s2, cache) + 1,\\n                dp(i1, i2+1, s1, s2, cache),\\n                dp(i1+1, i2, s1, s2, cache),\\n            });\\n        }\\n        else {\\n            return cache[i1][i2] = max({\\n                dp(i1, i2+1, s1, s2, cache),\\n                dp(i1+1, i2, s1, s2, cache),\\n            });\\n        }\\n    }\\npublic:\\n    int longestCommonSubsequence(string text1, string text2) {\\n        vector<vector<int>> cache(text1.size(), vector<int>(text2.size(), -1));\\n        return dp(0, 0, text1, text2, cache);\\n    }\\n};\\n```\\n\\n\\nm               |n                  | Time Complexity  | Space Complexity\\n----------------|-------------------|------------------|-----------------\\nsize of string 1|size of string 2   | O(m*n)           | O(m*n)\\n\\n</TabItem>\\n\\n</Tabs>\\n\\n\\n## Related Problems\\n- [Longest Common Substring](https://leetcode.com/discuss/interview-question/1273766/longest-common-substring)\\n- [1092. Shortest Common Supersequence](https://leetcode.com/problems/shortest-common-supersequence/)\\n- [1062. Longest Repeating Substring](https://leetcode.com/problems/longest-repeating-substring/)\\n- [516. Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)\\n\\n## References\\n- [Longest common subsequence Recursive - YouTube, Aditya Verma](https://youtu.be/4Urd0a0BNng)\\n- [Longest common subsequence Tabular - YouTube, Tushar Roy](https://youtu.be/NnD96abizww)"},{"id":"change-ssh-port-in-linux-centos","metadata":{"permalink":"/blog/change-ssh-port-in-linux-centos","editUrl":"https://github.com/jhasuraj01/blog/tree/main/blog/2022-12-08-change-ssh-port-in-linux-centos.mdx","source":"@site/blog/2022-12-08-change-ssh-port-in-linux-centos.mdx","title":"Change SSH Port in Linux CentOS (Oracle Linux 8)","description":"On Linux systems, the default SSH port is 22. There are a few reasons","date":"2022-12-08T00:00:00.000Z","formattedDate":"December 8, 2022","tags":[{"label":"linux","permalink":"/blog/tags/linux"},{"label":"ssh","permalink":"/blog/tags/ssh"},{"label":"firewalld","permalink":"/blog/tags/firewalld"},{"label":"semanage","permalink":"/blog/tags/semanage"}],"readingTime":1.38,"hasTruncateMarker":true,"authors":[{"name":"Suraj Jha","title":"Educator @CodeChef | IT\'24 | 4\u2b50 @CodeChef | Knight @Leetcode","url":"https://github.com/jhasuraj01","imageURL":"https://github.com/jhasuraj01.png","key":"jhasuraj01"}],"frontMatter":{"slug":"change-ssh-port-in-linux-centos","title":"Change SSH Port in Linux CentOS (Oracle Linux 8)","authors":["jhasuraj01"],"tags":["linux","ssh","firewalld","semanage"]},"prevItem":{"title":"1143. Longest Common Subsequence, LeetCode","permalink":"/blog/leetcode/longest-common-subsequence"},"nextItem":{"title":"Ethereum Blockchain local environment setup using Ganache and truffle","permalink":"/blog/ethereum-blockchain-local-environment"}},"content":"On Linux systems, the default SSH port is 22. There are a few reasons\\nwhy you might want to change this number. This article will walk you\\nthrough the process of changing the default ssh port 22 to 8080.\\n\\n\x3c!--truncate--\x3e\\n\\n## Prerequisite\\n- If you are using oracle cloud, open port 8080 in Oracle Cloud Security list for SSH Access.\\n\\n## Setup VM Firewall\\n\\nCheck firewall state\\n```bash\\nsudo firewall-cmd --state\\n```\\n\\nLogin as root user\\n```bash\\nsudo su root\\n```\\n\\nUpdate Port 22 to 8080\\n```bash\\nvi /usr/lib/firewalld/services/ssh.xml\\n```\\n\\n```output title=\'~/usr/lib/firewalld/services/ssh.xml\'\\n<?xml version=\\"1.0\\" encoding=\\"utf-8\\"?>\\n<service>\\n  <short>SSH</short>\\n  <description>Secure Shell (SSH) is a protocol ... to be useful.</description>\\n  \x3c!-- highlight-next-line --\x3e\\n  <port protocol=\\"tcp\\" port=\\"8080\\"/>\\n</service>\\n```\\n\\nReload firewall and network\\n```bash\\ncp /usr/lib/firewalld/services/ssh.xml /etc/firewalld/services/ssh.xml\\nfirewall-cmd --reload\\nsystemctl restart network\\nsystemctl reload firewalld\\n```\\n\\n## SSH Configuration\\n\\nSet port 8080 as ssh port\\n```bash\\nsemanage port -m -t ssh_port_t -p tcp 8080\\n```\\n\\nUpdate ssh port 22 to 8080\\n```bash\\nvi /etc/ssh/sshd_config\\n```\\n\\n```output title=\'~/etc/ssh/sshd_config\'\\n...\\n# If you want to change the port on a SELinux system, you have to tell\\n# SELinux about this change.\\n# semanage port -a -t ssh_port_t -p tcp #PORTNUMBER\\n# highlight-next-line\\nPort 8080\\n#AddressFamily any\\n#ListenAddress 0.0.0.0\\n#ListenAddress ::\\n\\nHostKey /etc/ssh/ssh_host_rsa_key\\n...\\n```\\n\\nRestart ssh daemon\\n```bash\\nsystemctl restart sshd\\n```\\n\\n## Testing\\n\\nOpen another terminal and try to ssh through new port\\n```bash\\nssh -i \\"PATH_TO_SSH_KEY\\" -p 8080 USERNAME@IP_ADDRESS -p 8080\\n```\\n\\n## References\\n- [How to set up a firewall using firewalld on centos 7](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7)\\n- [Changing the default ssh port](https://www.ionos.com/help/server-cloud-infrastructure/getting-started/important-security-information-for-your-server/changing-the-default-ssh-port/)\\n- [SSH fails after port change on centos 7](https://serverfault.com/questions/834195/ssh-fails-after-port-change-on-centos-7)\\n- [Selinux error valueerror port tcp 5000 already defined](https://serverfault.com/questions/790404/selinux-error-valueerror-port-tcp-5000-already-defined)"},{"id":"ethereum-blockchain-local-environment","metadata":{"permalink":"/blog/ethereum-blockchain-local-environment","editUrl":"https://github.com/jhasuraj01/blog/tree/main/blog/2022-09-29-ethereum-blockchain-local-environment.mdx","source":"@site/blog/2022-09-29-ethereum-blockchain-local-environment.mdx","title":"Ethereum Blockchain local environment setup using Ganache and truffle","description":"Setting up your dev environment for Ethereum development takes just a few minutes. In this article you will learn about Deploying and Operating Simple Smart Contract on local blockchain network using Ganache and truffle.","date":"2022-09-29T00:00:00.000Z","formattedDate":"September 29, 2022","tags":[{"label":"ethereum","permalink":"/blog/tags/ethereum"},{"label":"blockchain","permalink":"/blog/tags/blockchain"},{"label":"smart-contract","permalink":"/blog/tags/smart-contract"},{"label":"dapp","permalink":"/blog/tags/dapp"},{"label":"ganache","permalink":"/blog/tags/ganache"},{"label":"truffle","permalink":"/blog/tags/truffle"},{"label":"solidity","permalink":"/blog/tags/solidity"}],"readingTime":3.97,"hasTruncateMarker":true,"authors":[{"name":"Suraj Jha","title":"Educator @CodeChef | IT\'24 | 4\u2b50 @CodeChef | Knight @Leetcode","url":"https://github.com/jhasuraj01","imageURL":"https://github.com/jhasuraj01.png","key":"jhasuraj01"}],"frontMatter":{"slug":"ethereum-blockchain-local-environment","title":"Ethereum Blockchain local environment setup using Ganache and truffle","authors":["jhasuraj01"],"tags":["ethereum","blockchain","smart-contract","dapp","ganache","truffle","solidity"]},"prevItem":{"title":"Change SSH Port in Linux CentOS (Oracle Linux 8)","permalink":"/blog/change-ssh-port-in-linux-centos"}},"content":"Setting up your dev environment for Ethereum development takes just a few minutes. In this article you will learn about Deploying and Operating Simple Smart Contract on local blockchain network using Ganache and truffle.\\n\\n\x3c!-- truncate --\x3e\\n\\nPrerequisites\\n-------------\\n1.  Download and install the latest `node` and `npm` from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)\\n2.  Download and install Visual Studio Code from [https://code.visualstudio.com/](https://code.visualstudio.com/)\\n3.  Download and install `Ganache` from [https://trufflesuite.com/ganache/](https://trufflesuite.com/ganache/)\\n4.  Install `Truffle`\\n  ```bash\\n  npm install truffle -g\\n  ```\\n\\n  \\n\\nInitialize Project\\n------------------\\n\\n```bash\\ntruffle init my-bank\\n```\\n\\nOutput:\\n```output\\nStarting init...\\n================\\n\\n> Copying project files to my-bank\\n\\nInit successful, sweet!\\n\\nTry our scaffold commands to get started:\\n  $ truffle create contract YourContractName # scaffold a contract\\n  $ truffle create test YourTestName         # scaffold a test\\n\\nhttp://trufflesuite.com/docs/\\n```\\n\\n  \\n\\nUncomment the following lines in `truffle-config.js` and update the `host`, `port` and `network_id` as given below.\\n\\n  \\n\\n```js title=\'truffle-config.js\'\\n...\\n// tab if you use this network and you must also set the `host`, `port` and `network_id`\\n// options below to some value.\\n//\\n// highlight-start\\ndevelopment: {\\n  host: \\"127.0.0.1\\",     // Localhost (default: none)\\n  port: 8545,            // Standard Ethereum port (default: none)\\n  network_id: \\"*\\",       // Any network (default: none)\\n},\\n// highlight-end\\n//\\n// An additional network, but with some advanced options\u2026\\n...\\n```\\n\\n  \\n\\nWriting Smart Contract\\n----------------------\\n\\n  \\n\\nCreate two new files `Bank.sol` and `1_bank.js` in the `contracts` and `migrations` directory respectively as shown below.\\n\\n  \\n\\n```output\\n\u251c\u2500build\\n\u2502 \u2514\u2500contracts\\n\u251c\u2500contracts\\n\u2502 \u2514\u2500 Bank.sol (+)\\n\u251c\u2500migrations\\n\u2502 \u2514\u2500 1_bank.js (+)\\n\u2514\u2500test\\n```\\n\\n```sol title=\'contracts/Bank.sol\'\\n// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.17;\\n\\ncontract Bank {\\n\\n    uint256 balance;\\n\\n    constructor() {\\n        balance = 0;\\n    }\\n\\n    /**\\n     * @dev Add value in variable\\n     * @param amount value to deposit\\n     */\\n    function deposit(uint256 amount) public {\\n        if(amount > 0)\\n            balance += amount;\\n    }\\n\\n    function withdraw(uint256 amount) public {\\n        if(amount > 0)\\n            balance -= amount;\\n    }\\n\\n    /**\\n     * @dev Return balance \\n     * @return value of \'number\'\\n     */\\n    function check_balance() public view returns (uint256){\\n        return balance;\\n    }\\n}\\n```\\n\\n\\n```js title=\'migrations/1_bank.js\'\\nconst Bank = artifacts.require(\\"Bank\\");\\n\\nmodule.exports = (deployer) => {\\n    deployer.deploy(Bank);\\n}\\n```\\n\\n\\nGanache Setup\\n-------------\\n\\n1.  Launch Ganache and Create a new _ETHEREUM WORKSPACE._![](https://t43259681.p.clickup-attachments.com/t43259681/2cf5b19b-4516-469d-83ec-bb40dbe94fac/image.png)\\n2.  Rename your Workspace to `My Bank` and click on _Add Project_![](https://t43259681.p.clickup-attachments.com/t43259681/1ebbf941-0910-409e-9f83-8d30e6bcc2a9/image.png)\\n3.  Navigate to your project folder and select `truffle-config.js` and click _Open_ ![](https://t43259681.p.clickup-attachments.com/t43259681/c91edbb3-4bf6-42a1-8cee-e7195d9e2c98/image.png)\\n4.  Click on _Server,_ update the port to `8545` then click on _Save Workspace._![](https://t43259681.p.clickup-attachments.com/t43259681/5724c603-6bea-470b-bca8-2396f34c172b/image.png)\\n\\n  \\n\\nCompiling and Deploying\\n-----------------------\\n\\n  \\n\\nOpen Terminal and `cd` to your project directory![](https://t43259681.p.clickup-attachments.com/t43259681/23a3f7c5-e87c-4d7a-b0ee-ce3cb6ccfca2/image.png)\\n\\n  \\n\\n```bash\\nnpx truffle migrate\\n```\\n\\n  \\n\\nOutput:\\n\\n```output\\nCompiling your contracts...\\n===========================\\n> Compiling .\\\\contracts\\\\Bank.sol\\n> Artifacts written to E:\\\\Personal Projects\\\\blockchain\\\\my-bank\\\\build\\\\contracts\\n> Compiled successfully using:\\n   - solc: 0.8.17+commit.8df45f5f.Emscripten.clang\\n\\n\\nStarting migrations...\\n======================\\n> Network name:    \'development\'\\n> Network id:      5777\\n> Block gas limit: 6721975 (0x6691b7)\\n\\n\\n1_bank.js\\n=========\\n\\n   Deploying \'Bank\'\\n   ----------------\\n   > transaction hash:    0xaa6f43b40c85d646c475e940fe1869fb37876620c726c394a25b6962e28eca9b\\n   > Blocks: 0            Seconds: 0\\n   > contract address:    0x5724576138328Ebe1A163b4c756038Fe6C0698E4\\n   > block number:        1\\n   > block timestamp:     1664260108\\n   > account:             0x7b17D239FA8d011FF19fC20efE4aD2E5541839b7\\n   > balance:             99.9963793\\n   > gas used:            181035 (0x2c32b)\\n   > gas price:           20 gwei\\n   > value sent:          0 ETH\\n   > total cost:          0.0036207 ETH\\n\\n   > Saving artifacts\\n   -------------------------------------\\n   > Total cost:           0.0036207 ETH\\n\\nSummary\\n=======\\n> Total deployments:   1\\n> Final cost:          0.0036207 ETH\\n```\\n\\n\\nWow! You have just deployed your first smart contract! To verify go to Ganache, navigate to _Contracts_ there you will find your first contract `Bank`![](https://t43259681.p.clickup-attachments.com/t43259681/bc7da2eb-c66c-446f-91fd-4cf08245dbe9/image.png)\\n\\n\\n\\nAccessing Deployed Smart Contract\\n---------------------------------\\n\\n\\n### Enter _truffle console_\\n\\n  \\n\\n```bash\\nnpx truffle console\\n```\\n\\n  \\n\\nOutput:\\n\\n  \\n\\n```output\\ntruffle(development)>\\n```\\n\\n  \\n\\n### Check the current balance\\n\\n  \\n\\nTo call the `check_balance()` function in the smart contract, write the following code in the truffle console.\\n\\n  \\n\\n```js title=\'truffle(development)>\'\\nBank.deployed().then(function(instance){ return instance.check_balance() })\\n```\\n\\n\\nOutput:\\n\\n```output\\nBN { negative: 0, words: [ 0, <1 empty item> ], length: 1, red: null }\\n```\\n  \\n\\n### Deposit the amount\\n\\nTo call the `deposit()` function in the smart contract, write the following code in the truffle console.\\n\\n```js title=\'truffle(development)>\'\\nBank.deployed().then(function(instance){ return instance.deposit(100) })\\n```\\n\\nOutput:\\n\\n```output\\n{\\n  tx: \'0xfb2f8b4caa8cdb656237dcb7d5793e75d73988d6942e6b8df243408f0fae4e56\',\\n  receipt: {\\n    transactionHash: \'0xfb2f8b4caa8cdb656237dcb7d5793e75d73988d6942e6b8df243408f0fae4e56\',\\n    transactionIndex: 0,\\n    blockHash: \'0xc02d65d946cdde8e3a13f0660af0c109becffefc030dff27f2bf379387f6c9c1\',\\n    blockNumber: 3,\\n    from: \'0x7b17d239fa8d011ff19fc20efe4ad2e5541839b7\',\\n    to: \'0x5724576138328ebe1a163b4c756038fe6c0698e4\',\\n    gasUsed: 27673,\\n    cumulativeGasUsed: 27673,\\n    contractAddress: null,\\n    logs: [],\\n    status: true,\\n    logsBloom: \'0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\',\\n    rawLogs: []\\n  },\\n  logs: []\\n}\\n```\\n\\n  \\n\\n### Withdraw the amount\\n\\nTo call the `withdraw()` function in the smart contract, write the following code in the truffle console.\\n\\n\\n```js title=\'truffle(development)>\'\\nBank.deployed().then(function(instance){ return instance.withdraw(20) })\\n```\\n\\n  \\nOutput:\\n\\n```output\\n{\\n  tx: \'0xfbd8c0374ed5f6b800feabb24d9c0d921544f270deb83822be3537c3b3059782\',\\n  receipt: {\\n    transactionHash: \'0xfbd8c0374ed5f6b800feabb24d9c0d921544f270deb83822be3537c3b3059782\',\\n    transactionIndex: 0,\\n    blockHash: \'0x3e729c7336d7ad36048191cd08006163be53acd58d49f6aafbe57b1bef0b2ffb\',\\n    blockNumber: 4,\\n    from: \'0x7b17d239fa8d011ff19fc20efe4ad2e5541839b7\',\\n    to: \'0x5724576138328ebe1a163b4c756038fe6c0698e4\',\\n    gasUsed: 27629,\\n    cumulativeGasUsed: 27629,\\n    contractAddress: null,\\n    logs: [],\\n    status: true,\\n    logsBloom: \'0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\',\\n    rawLogs: []\\n  },\\n  logs: []\\n}\\n```\\n\\n  \\n\\n### Verify all the transactions in Ganache\\n\\n1.  Check the number of Blocks Created in the _BLOCKS_ Section of Ganache\\n2.  Verify all the transactions performed by you in the _TRANSACTIONS_ Section of Ganache.\\n3.  Check the ETH balance of your temporary account in the _ACCOUNTS_ Section of Ganache.\\n\\n## References\\n- [Truffle quickstart](https://trufflesuite.com/docs/truffle/quickstart/)"}]}')}}]);
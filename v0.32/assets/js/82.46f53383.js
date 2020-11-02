(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{325:function(t,n,e){"use strict";e.r(n);var s=e(1),a=Object(s.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"adr-037-deliver-block"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adr-037-deliver-block"}}),t._v(" ADR 037: Deliver Block")]),t._v(" "),e("p",[t._v("Author: Daniil Lashin (@danil-lashin)")]),t._v(" "),e("h2",{attrs:{id:"changelog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}}),t._v(" Changelog")]),t._v(" "),e("p",[t._v("13-03-2019: Initial draft")]),t._v(" "),e("h2",{attrs:{id:"context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context"}}),t._v(" Context")]),t._v(" "),e("p",[t._v("Initial conversation: https://github.com/tendermint/tendermint/issues/2901")]),t._v(" "),e("p",[t._v("Some applications can handle transactions in parallel, or at least some\npart of tx processing can be parallelized. Now it is not possible for developer\nto execute txs in parallel because Tendermint delivers them consequentially.")]),t._v(" "),e("h2",{attrs:{id:"decision"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#decision"}}),t._v(" Decision")]),t._v(" "),e("p",[t._v("Now Tendermint have "),e("code",[t._v("BeginBlock")]),t._v(", "),e("code",[t._v("EndBlock")]),t._v(", "),e("code",[t._v("Commit")]),t._v(", "),e("code",[t._v("DeliverTx")]),t._v(" steps\nwhile executing block. This doc proposes merging this steps into one "),e("code",[t._v("DeliverBlock")]),t._v("\nstep. It will allow developers of applications to decide how they want to\nexecute transactions (in parallel or consequentially). Also it will simplify and\nspeed up communications between application and Tendermint.")]),t._v(" "),e("p",[t._v("As @jaekwon "),e("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2901#issuecomment-477746128",target:"_blank",rel:"noopener noreferrer"}},[t._v("mentioned"),e("OutboundLink")],1),t._v("\nin discussion not all application will benefit from this solution. In some cases,\nwhen application handles transaction consequentially, it way slow down the blockchain,\nbecause it need to wait until full block is transmitted to application to start\nprocessing it. Also, in the case of complete change of ABCI, we need to force all the apps\nto change their implementation completely. That's why I propose to introduce one more ABCI\ntype.")]),t._v(" "),e("h1",{attrs:{id:"implementation-changes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation-changes"}}),t._v(" Implementation Changes")]),t._v(" "),e("p",[t._v("In addition to default application interface which now have this structure")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Application "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Info and Mempool methods...")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Consensus Connection")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("InitChain")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RequestInitChain"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ResponseInitChain    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initialize blockchain with validators and other info from TendermintCore")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("BeginBlock")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RequestBeginBlock"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ResponseBeginBlock "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Signals the beginning of a block")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("DeliverTx")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tx "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ResponseDeliverTx           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Deliver a tx for full processing")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("EndBlock")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RequestEndBlock"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ResponseEndBlock       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Signals the end of a block, returns changes to the validator set")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Commit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ResponseCommit                          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Commit the state and return the application Merkle root hash")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("this doc proposes to add one more:")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Application "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Info and Mempool methods...")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Consensus Connection")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("InitChain")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RequestInitChain"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ResponseInitChain           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initialize blockchain with validators and other info from TendermintCore")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("DeliverBlock")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RequestDeliverBlock"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ResponseDeliverBlock  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Deliver full block")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Commit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ResponseCommit                                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Commit the state and return the application Merkle root hash")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" RequestDeliverBlock "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Hash                 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("\n    Header               Header\n    Txs                  Txs\n    LastCommitInfo       LastCommitInfo\n    ByzantineValidators  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("Evidence\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ResponseDeliverBlock "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ValidatorUpdates      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("ValidatorUpdate\n    ConsensusParamUpdates "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ConsensusParams\n    Tags                  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("common"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("KVPair\n    TxResults             "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("ResponseDeliverTx\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("Also, we will need to add new config param, which will specify what kind of ABCI application uses.\nFor example, it can be "),e("code",[t._v("abci_type")]),t._v(". Then we will have 2 types:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("advanced")]),t._v(" - current ABCI")]),t._v(" "),e("li",[e("code",[t._v("simple")]),t._v(" - proposed implementation")])]),t._v(" "),e("h2",{attrs:{id:"status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#status"}}),t._v(" Status")]),t._v(" "),e("p",[t._v("In review")]),t._v(" "),e("h2",{attrs:{id:"consequences"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}}),t._v(" Consequences")]),t._v(" "),e("h3",{attrs:{id:"positive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#positive"}}),t._v(" Positive")]),t._v(" "),e("ul",[e("li",[t._v("much simpler introduction and tutorials for new developers (instead of implementing 5 methods whey\nwill need to implement only 3)")]),t._v(" "),e("li",[t._v("txs can be handled in parallel")]),t._v(" "),e("li",[t._v("simpler interface")]),t._v(" "),e("li",[t._v("faster communications between Tendermint and application")])]),t._v(" "),e("h3",{attrs:{id:"negative"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#negative"}}),t._v(" Negative")]),t._v(" "),e("ul",[e("li",[t._v("Tendermint should now support 2 kinds of ABCI")])])])}),[],!1,null,null,null);n.default=a.exports}}]);
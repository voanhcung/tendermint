(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{395:function(e,t,r){"use strict";r.r(t);var n=r(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"mempool"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mempool"}}),e._v(" Mempool")]),e._v(" "),r("h2",{attrs:{id:"transaction-ordering"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transaction-ordering"}}),e._v(" Transaction ordering")]),e._v(" "),r("p",[e._v("Currently, there's no ordering of transactions other than the order they've\narrived (via RPC or from other nodes).")]),e._v(" "),r("p",[e._v("So the only way to specify the order is to send them to a single node.")]),e._v(" "),r("p",[e._v("valA:")]),e._v(" "),r("ul",[r("li",[e._v("tx1")]),e._v(" "),r("li",[e._v("tx2")]),e._v(" "),r("li",[e._v("tx3")])]),e._v(" "),r("p",[e._v("If the transactions are split up across different nodes, there's no way to\nensure they are processed in the expected order.")]),e._v(" "),r("p",[e._v("valA:")]),e._v(" "),r("ul",[r("li",[e._v("tx1")]),e._v(" "),r("li",[e._v("tx2")])]),e._v(" "),r("p",[e._v("valB:")]),e._v(" "),r("ul",[r("li",[e._v("tx3")])]),e._v(" "),r("p",[e._v("If valB is the proposer, the order might be:")]),e._v(" "),r("ul",[r("li",[e._v("tx3")]),e._v(" "),r("li",[e._v("tx1")]),e._v(" "),r("li",[e._v("tx2")])]),e._v(" "),r("p",[e._v("If valA is the proposer, the order might be:")]),e._v(" "),r("ul",[r("li",[e._v("tx1")]),e._v(" "),r("li",[e._v("tx2")]),e._v(" "),r("li",[e._v("tx3")])]),e._v(" "),r("p",[e._v("That said, if the transactions contain some internal value, like an\norder/nonce/sequence number, the application can reject transactions that are\nout of order. So if a node receives tx3, then tx1, it can reject tx3 and then\naccept tx1. The sender can then retry sending tx3, which should probably be\nrejected until the node has seen tx2.")])])}),[],!1,null,null,null);t.default=o.exports}}]);
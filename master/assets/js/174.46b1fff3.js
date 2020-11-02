(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{734:function(t,e,a){"use strict";a.r(e);var n=a(1),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mempool-functionality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mempool-functionality"}},[t._v("#")]),t._v(" Mempool Functionality")]),t._v(" "),a("p",[t._v("The mempool maintains a list of potentially valid transactions,\nboth to broadcast to other nodes, as well as to provide to the\nconsensus reactor when it is selected as the block proposer.")]),t._v(" "),a("p",[t._v("There are two sides to the mempool state:")]),t._v(" "),a("ul",[a("li",[t._v("External: get, check, and broadcast new transactions")]),t._v(" "),a("li",[t._v("Internal: return valid transaction, update list after block commit")])]),t._v(" "),a("h2",{attrs:{id:"external-functionality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-functionality"}},[t._v("#")]),t._v(" External functionality")]),t._v(" "),a("p",[t._v("External functionality is exposed via network interfaces\nto potentially untrusted actors.")]),t._v(" "),a("ul",[a("li",[t._v("CheckTx - triggered via RPC or P2P")]),t._v(" "),a("li",[t._v("Broadcast - gossip messages after a successful check")])]),t._v(" "),a("h2",{attrs:{id:"internal-functionality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#internal-functionality"}},[t._v("#")]),t._v(" Internal functionality")]),t._v(" "),a("p",[t._v("Internal functionality is exposed via method calls to other\ncode compiled into the tendermint binary.")]),t._v(" "),a("ul",[a("li",[t._v("ReapMaxBytesMaxGas - get txs to propose in the next block. Guarantees that the\nsize of the txs is less than MaxBytes, and gas is less than MaxGas")]),t._v(" "),a("li",[t._v("Update - remove tx that were included in last block")]),t._v(" "),a("li",[t._v("ABCI.CheckTx - call ABCI app to validate the tx")])]),t._v(" "),a("p",[t._v("What does it provide the consensus reactor?\nWhat guarantees does it need from the ABCI app?\n(talk about interleaving processes in concurrency)")]),t._v(" "),a("h2",{attrs:{id:"optimizations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimizations"}},[t._v("#")]),t._v(" Optimizations")]),t._v(" "),a("p",[t._v("The implementation within this library also implements a tx cache.\nThis is so that signatures don't have to be reverified if the tx has\nalready been seen before.\nHowever, we only store valid txs in the cache, not invalid ones.\nThis is because invalid txs could become good later.\nTxs that are included in a block aren't removed from the cache,\nas they still may be getting received over the p2p network.\nThese txs are stored in the cache by their hash, to mitigate memory concerns.")])])}),[],!1,null,null,null);e.default=i.exports}}]);
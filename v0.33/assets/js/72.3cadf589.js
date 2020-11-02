(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{784:function(e,t,s){"use strict";s.r(t);var a=s(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"adr-2-event-subscription"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adr-2-event-subscription"}},[e._v("#")]),e._v(" ADR 2: Event Subscription")]),e._v(" "),s("h2",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),s("p",[e._v("In the light client (or any other client), the user may want to "),s("strong",[e._v("subscribe to\na subset of transactions")]),e._v(" (rather than all of them) using "),s("code",[e._v("/subscribe?event=X")]),e._v(". For\nexample, I want to subscribe for all transactions associated with a particular\naccount. Same for fetching. The user may want to "),s("strong",[e._v("fetch transactions based on\nsome filter")]),e._v(" (rather than fetching all the blocks). For example, I want to get\nall transactions for a particular account in the last two weeks ("),s("code",[e._v("tx's block time >= '2017-06-05'")]),e._v(").")]),e._v(" "),s("p",[e._v('Now you can\'t even subscribe to "all txs" in Tendermint.')]),e._v(" "),s("p",[e._v("The goal is a simple and easy to use API for doing that.")]),e._v(" "),s("p",[s("img",{attrs:{src:"img/tags1.png",alt:"Tx Send Flow Diagram"}})]),e._v(" "),s("h2",{attrs:{id:"decision"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),s("p",[e._v("ABCI app return tags with a "),s("code",[e._v("DeliverTx")]),e._v(" response inside the "),s("code",[e._v("data")]),e._v(" field ("),s("em",[e._v("for\nnow, later we may create a separate field")]),e._v("). Tags is a list of key-value pairs,\nprotobuf encoded.")]),e._v(" "),s("p",[e._v("Example data:")]),e._v(" "),s("code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2FiY2kuYWNjb3VudC5uYW1lJnF1b3Q7OiAmcXVvdDtJZ29yJnF1b3Q7LAogICZxdW90O2FiY2kuYWNjb3VudC5hZGRyZXNzJnF1b3Q7OiAmcXVvdDsweGRlYWRiZWVmJnF1b3Q7LAogICZxdW90O3R4LmdhcyZxdW90OzogNwp9Cg=="}}),e._v(" "),s("h3",{attrs:{id:"subscribing-for-transactions-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscribing-for-transactions-events"}},[e._v("#")]),e._v(" Subscribing for transactions events")]),e._v(" "),s("p",[e._v("If the user wants to receive only a subset of transactions, ABCI-app must\nreturn a list of tags with a "),s("code",[e._v("DeliverTx")]),e._v(" response. These tags will be parsed and\nmatched with the current queries (subscribers). If the query matches the tags,\nsubscriber will get the transaction event.")]),e._v(" "),s("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"L3N1YnNjcmliZT9xdWVyeT0mcXVvdDt0bS5ldmVudCA9IFR4IEFORCB0eC5oYXNoID0gQUIwMDIzNDMzQ0YwMzM0MjIzMjEyMjQzQkREIEFORCBhYmNpLmFjY291bnQuaW52b2ljZS5udW1iZXIgPSAyMiZxdW90Owo="}}),e._v(" "),s("p",[e._v("A new package must be developed to replace the current "),s("code",[e._v("events")]),e._v(" package. It\nwill allow clients to subscribe to a different types of events in the future:")]),e._v(" "),s("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"L3N1YnNjcmliZT9xdWVyeT0mcXVvdDthYmNpLmFjY291bnQuaW52b2ljZS5udW1iZXIgPSAyMiZxdW90Owovc3Vic2NyaWJlP3F1ZXJ5PSZxdW90O2FiY2kuYWNjb3VudC5pbnZvaWNlLm93bmVyIENPTlRBSU5TIElnb3ImcXVvdDsK"}}),e._v(" "),s("h3",{attrs:{id:"fetching-transactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetching-transactions"}},[e._v("#")]),e._v(" Fetching transactions")]),e._v(" "),s("p",[e._v("This is a bit tricky because a) we want to support a number of indexers, all of\nwhich have a different API b) we don't know whenever tags will be sufficient\nfor the most apps (I guess we'll see).")]),e._v(" "),s("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"L3R4cy9zZWFyY2g/cXVlcnk9JnF1b3Q7dHguaGFzaCA9IEFCMDAyMzQzM0NGMDMzNDIyMzIxMjI0M0JERCBBTkQgYWJjaS5hY2NvdW50Lm93bmVyIENPTlRBSU5TIElnb3ImcXVvdDsKL3R4cy9zZWFyY2g/cXVlcnk9JnF1b3Q7YWJjaS5hY2NvdW50Lm93bmVyID0gSWdvciZxdW90Owo="}}),e._v(" "),s("p",[e._v("For historic queries we will need a indexing storage (Postgres, SQLite, ...).")]),e._v(" "),s("h3",{attrs:{id:"issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issues"}},[e._v("#")]),e._v(" Issues")]),e._v(" "),s("ul",[s("li",[e._v("https://github.com/tendermint/tendermint/issues/376")]),e._v(" "),s("li",[e._v("https://github.com/tendermint/tendermint/issues/287")]),e._v(" "),s("li",[e._v("https://github.com/tendermint/tendermint/issues/525 (related)")])]),e._v(" "),s("h2",{attrs:{id:"status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),s("p",[e._v("proposed")]),e._v(" "),s("h2",{attrs:{id:"consequences"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),s("h3",{attrs:{id:"positive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),s("ul",[s("li",[e._v("same format for event notifications and search APIs")]),e._v(" "),s("li",[e._v("powerful enough query")])]),e._v(" "),s("h3",{attrs:{id:"negative"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),s("ul",[s("li",[e._v("performance of the "),s("code",[e._v("match")]),e._v(" function (where we have too many queries / subscribers)")]),e._v(" "),s("li",[e._v("there is an issue where there are too many txs in the DB")])]),e._v(" "),s("h3",{attrs:{id:"neutral"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{793:function(e,s,n){"use strict";n.r(s);var t=n(1),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"adr-033-pubsub-2-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adr-033-pubsub-2-0"}},[e._v("#")]),e._v(" ADR 033: pubsub 2.0")]),e._v(" "),n("p",[e._v("Author: Anton Kaliaev (@melekes)")]),e._v(" "),n("h2",{attrs:{id:"changelog"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),n("p",[e._v("02-10-2018: Initial draft")]),e._v(" "),n("p",[e._v("16-01-2019: Second version based on our conversation with Jae")]),e._v(" "),n("p",[e._v("17-01-2019: Third version explaining how new design solves current issues")]),e._v(" "),n("p",[e._v("25-01-2019: Fourth version to treat buffered and unbuffered channels differently")]),e._v(" "),n("h2",{attrs:{id:"context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),n("p",[e._v("Since the initial version of the pubsub, there's been a number of issues\nraised: "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/951",target:"_blank",rel:"noopener noreferrer"}},[e._v("#951"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1879",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1879"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1880",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1880"),n("OutboundLink")],1),e._v(". Some of them are high-level issues questioning the\ncore design choices made. Others are minor and mostly about the interface of\n"),n("code",[e._v("Subscribe()")]),e._v(" / "),n("code",[e._v("Publish()")]),e._v(" functions.")]),e._v(" "),n("h3",{attrs:{id:"sync-vs-async"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sync-vs-async"}},[e._v("#")]),e._v(" Sync vs Async")]),e._v(" "),n("p",[e._v("Now, when publishing a message to subscribers, we can do it in a goroutine:")]),e._v(" "),n("p",[n("em",[e._v("using channels for data transmission")])]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Zm9yIGVhY2ggc3Vic2NyaWJlciB7CiAgICBvdXQgOj0gc3Vic2NyaWJlci5vdXRjCiAgICBnbyBmdW5jKCkgewogICAgICAgIG91dCAmbHQ7LSBtc2cKICAgIH0KfQo="}}),e._v(" "),n("p",[n("em",[e._v("by invoking callback functions")])]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Zm9yIGVhY2ggc3Vic2NyaWJlciB7CiAgICBnbyBzdWJzY3JpYmVyLmNhbGxiYWNrRm4oKQp9Cg=="}}),e._v(" "),n("p",[e._v('This gives us greater performance and allows us to avoid "slow client problem"\n(when other subscribers have to wait for a slow subscriber). A pool of\ngoroutines can be used to avoid uncontrolled memory growth.')]),e._v(" "),n("p",[e._v("In certain cases, this is what you want. But in our case, because we need\nstrict ordering of events (if event A was published before B, the guaranteed\ndelivery order will be A -> B), we can't publish msg in a new goroutine every time.")]),e._v(" "),n("p",[e._v("We can also have a goroutine per subscriber, although we'd need to be careful\nwith the number of subscribers. It's more difficult to implement as well +\nunclear if we'll benefit from it (cause we'd be forced to create N additional\nchannels to distribute msg to these goroutines).")]),e._v(" "),n("h3",{attrs:{id:"non-blocking-send"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#non-blocking-send"}},[e._v("#")]),e._v(" Non-blocking send")]),e._v(" "),n("p",[e._v("There is also a question whenever we should have a non-blocking send.\nCurrently, sends are blocking, so publishing to one client can block on\npublishing to another. This means a slow or unresponsive client can halt the\nsystem. Instead, we can use a non-blocking send:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Zm9yIGVhY2ggc3Vic2NyaWJlciB7CiAgICBvdXQgOj0gc3Vic2NyaWJlci5vdXRjCiAgICBzZWxlY3QgewogICAgICAgIGNhc2Ugb3V0ICZsdDstIG1zZzoKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgICBsb2coJnF1b3Q7c3Vic2NyaWJlciAldiBidWZmZXIgaXMgZnVsbCwgc2tpcHBpbmcuLi4mcXVvdDspCiAgICB9Cn0K"}}),e._v(" "),n("p",[e._v('This fixes the "slow client problem", but there is no way for a slow client to\nknow if it had missed a message. We could return a second channel and close it\nto indicate subscription termination. On the other hand, if we\'re going to\nstick with blocking send, '),n("strong",[e._v("devs must always ensure subscriber's handling code\ndoes not block")]),e._v(", which is a hard task to put on their shoulders.")]),e._v(" "),n("p",[e._v('The interim option is to run goroutines pool for a single message, wait for all\ngoroutines to finish. This will solve "slow client problem", but we\'d still\nhave to wait '),n("code",[e._v("max(goroutine_X_time)")]),e._v(" before we can publish the next message.")]),e._v(" "),n("h3",{attrs:{id:"channels-vs-callbacks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#channels-vs-callbacks"}},[e._v("#")]),e._v(" Channels vs Callbacks")]),e._v(" "),n("p",[e._v("Yet another question is whether we should use channels for message transmission or\ncall subscriber-defined callback functions. Callback functions give subscribers\nmore flexibility - you can use mutexes in there, channels, spawn goroutines,\nanything you really want. But they also carry local scope, which can result in\nmemory leaks and/or memory usage increase.")]),e._v(" "),n("p",[e._v("Go channels are de-facto standard for carrying data between goroutines.")]),e._v(" "),n("h3",{attrs:{id:"why-subscribe-accepts-an-out-channel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#why-subscribe-accepts-an-out-channel"}},[e._v("#")]),e._v(" Why "),n("code",[e._v("Subscribe()")]),e._v(" accepts an "),n("code",[e._v("out")]),e._v(" channel?")]),e._v(" "),n("p",[e._v("Because in our tests, we create buffered channels (cap: 1). Alternatively, we\ncan make capacity an argument and return a channel.")]),e._v(" "),n("h2",{attrs:{id:"decision"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),n("h3",{attrs:{id:"msgandtags"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#msgandtags"}},[e._v("#")]),e._v(" MsgAndTags")]),e._v(" "),n("p",[e._v("Use a "),n("code",[e._v("MsgAndTags")]),e._v(" struct on the subscription channel to indicate what tags the\nmsg matched.")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dBbmRUYWdzIHN0cnVjdCB7CiAgICBNc2cgaW50ZXJmYWNle30KICAgIFRhZ3MgVGFnTWFwCn0K"}}),e._v(" "),n("h3",{attrs:{id:"subscription-struct"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#subscription-struct"}},[e._v("#")]),e._v(" Subscription Struct")]),e._v(" "),n("p",[e._v("Change "),n("code",[e._v("Subscribe()")]),e._v(" function to return a "),n("code",[e._v("Subscription")]),e._v(" struct:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTdWJzY3JpcHRpb24gc3RydWN0IHsKICAvLyBwcml2YXRlIGZpZWxkcwp9CgpmdW5jIChzICpTdWJzY3JpcHRpb24pIE91dCgpICZsdDstY2hhbiBNc2dBbmRUYWdzCmZ1bmMgKHMgKlN1YnNjcmlwdGlvbikgQ2FuY2VsbGVkKCkgJmx0Oy1jaGFuIHN0cnVjdHt9CmZ1bmMgKHMgKlN1YnNjcmlwdGlvbikgRXJyKCkgZXJyb3IK"}}),e._v(" "),n("p",[n("code",[e._v("Out()")]),e._v(" returns a channel onto which messages and tags are published.\n"),n("code",[e._v("Unsubscribe")]),e._v("/"),n("code",[e._v("UnsubscribeAll")]),e._v(" does not close the channel to avoid clients from\nreceiving a nil message.")]),e._v(" "),n("p",[n("code",[e._v("Cancelled()")]),e._v(" returns a channel that's closed when the subscription is terminated\nand supposed to be used in a select statement.")]),e._v(" "),n("p",[e._v("If the channel returned by "),n("code",[e._v("Cancelled()")]),e._v(" is not closed yet, "),n("code",[e._v("Err()")]),e._v(" returns nil.\nIf the channel is closed, "),n("code",[e._v("Err()")]),e._v(" returns a non-nil error explaining why:\n"),n("code",[e._v("ErrUnsubscribed")]),e._v(" if the subscriber choose to unsubscribe,\n"),n("code",[e._v("ErrOutOfCapacity")]),e._v(" if the subscriber is not pulling messages fast enough and the channel returned by "),n("code",[e._v("Out()")]),e._v(" became full.\nAfter "),n("code",[e._v("Err()")]),e._v(" returns a non-nil error, successive calls to `Err() return the same error.")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3Vic2NyaXB0aW9uLCBlcnIgOj0gcHVic3ViLlN1YnNjcmliZSguLi4pCmlmIGVyciAhPSBuaWwgewogIC8vIC4uLgp9CmZvciB7CnNlbGVjdCB7CiAgY2FzZSBtc2dBbmRUYWdzICZsdDstIHN1YnNjcmlwdGlvbi5PdXQoKToKICAgIC8vIC4uLgogIGNhc2UgJmx0Oy1zdWJzY3JpcHRpb24uQ2FuY2VsbGVkKCk6CiAgICByZXR1cm4gc3Vic2NyaXB0aW9uLkVycigpCn0K"}}),e._v(" "),n("h3",{attrs:{id:"capacity-and-subscriptions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#capacity-and-subscriptions"}},[e._v("#")]),e._v(" Capacity and Subscriptions")]),e._v(" "),n("p",[e._v("Make the "),n("code",[e._v("Out()")]),e._v(" channel buffered (with capacity 1) by default. In most cases, we want to\nterminate the slow subscriber. Only in rare cases, we want to block the pubsub\n(e.g. when debugging consensus). This should lower the chances of the pubsub\nbeing frozen.")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gb3V0Q2FwIGNhbiBiZSB1c2VkIHRvIHNldCBjYXBhY2l0eSBvZiBPdXQgY2hhbm5lbAovLyAoMSBieSBkZWZhdWx0LCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwKS4KU3Vic2NyaWJlKGN0eCBjb250ZXh0LkNvbnRleHQsIGNsaWVudElEIHN0cmluZywgcXVlcnkgUXVlcnksIG91dENhcC4uLiBpbnQpIChTdWJzY3JpcHRpb24sIGVycm9yKSB7Cg=="}}),e._v(" "),n("p",[e._v("Use a different function for an unbuffered channel:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3Vic2NyaXB0aW9uIHVzZXMgYW4gdW5idWZmZXJlZCBjaGFubmVsLiBQdWJsaXNoaW5nIHdpbGwgYmxvY2suClN1YnNjcmliZVVuYnVmZmVyZWQoY3R4IGNvbnRleHQuQ29udGV4dCwgY2xpZW50SUQgc3RyaW5nLCBxdWVyeSBRdWVyeSkgKFN1YnNjcmlwdGlvbiwgZXJyb3IpIHsK"}}),e._v(" "),n("p",[e._v("SubscribeUnbuffered should not be exposed to users.")]),e._v(" "),n("h3",{attrs:{id:"blocking-nonblocking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blocking-nonblocking"}},[e._v("#")]),e._v(" Blocking/Nonblocking")]),e._v(" "),n("p",[e._v("The publisher should treat these kinds of channels separately.\nIt should block on unbuffered channels (for use with internal consensus events\nin the consensus tests) and not block on the buffered ones. If a client is too\nslow to keep up with it's messages, it's subscription is terminated:")]),e._v(" "),n("p",[e._v("for each subscription {\nout := subscription.outChan\nif cap(out) == 0 {\n// block on unbuffered channel\nout <- msg\n} else {\n// don't block on buffered channels\nselect {\ncase out <- msg:\ndefault:\n// set the error, notify on the cancel chan\nsubscription.err = fmt.Errorf(\"client is too slow for msg)\nclose(subscription.cancelChan)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("            // ... unsubscribe and close out\n    }\n}\n")])])]),n("p",[e._v("}")]),e._v(" "),n("h3",{attrs:{id:"how-this-new-design-solves-the-current-issues"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-this-new-design-solves-the-current-issues"}},[e._v("#")]),e._v(" How this new design solves the current issues?")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/951",target:"_blank",rel:"noopener noreferrer"}},[e._v("#951"),n("OutboundLink")],1),e._v(" ("),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1880",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1880"),n("OutboundLink")],1),e._v("):")]),e._v(" "),n("p",[e._v("Because of non-blocking send, situation where we'll deadlock is not possible\nanymore. If the client stops reading messages, it will be removed.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1879",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1879"),n("OutboundLink")],1),e._v(":")]),e._v(" "),n("p",[e._v("MsgAndTags is used now instead of a plain message.")]),e._v(" "),n("h3",{attrs:{id:"future-problems-and-their-possible-solutions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#future-problems-and-their-possible-solutions"}},[e._v("#")]),e._v(" Future problems and their possible solutions")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2826",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2826"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("One question I am still pondering about: how to prevent pubsub from slowing\ndown consensus. We can increase the pubsub queue size (which is 0 now). Also,\nit's probably a good idea to limit the total number of subscribers.")]),e._v(" "),n("p",[e._v("This can be made automatically. Say we set queue size to 1000 and, when it's >=\n80% full, refuse new subscriptions.")]),e._v(" "),n("h2",{attrs:{id:"status"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),n("p",[e._v("In review")]),e._v(" "),n("h2",{attrs:{id:"consequences"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),n("h3",{attrs:{id:"positive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),n("ul",[n("li",[e._v("more idiomatic interface")]),e._v(" "),n("li",[e._v("subscribers know what tags msg was published with")]),e._v(" "),n("li",[e._v("subscribers aware of the reason their subscription was cancelled")])]),e._v(" "),n("h3",{attrs:{id:"negative"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),n("ul",[n("li",[e._v("(since v1) no concurrency when it comes to publishing messages")])]),e._v(" "),n("h3",{attrs:{id:"neutral"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")])],1)}),[],!1,null,null,null);s.default=a.exports}}]);
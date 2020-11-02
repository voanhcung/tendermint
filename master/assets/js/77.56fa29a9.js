(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{749:function(e,t,r){"use strict";r.r(t);var a=r(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"adr-007-trust-metric-usage-guide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adr-007-trust-metric-usage-guide"}},[e._v("#")]),e._v(" ADR 007: Trust Metric Usage Guide")]),e._v(" "),r("h2",{attrs:{id:"context"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),r("p",[e._v("Tendermint is required to monitor peer quality in order to inform its peer dialing and peer exchange strategies.")]),e._v(" "),r("p",[e._v("When a node first connects to the network, it is important that it can quickly find good peers.\nThus, while a node has fewer connections, it should prioritize connecting to higher quality peers.\nAs the node becomes well connected to the rest of the network, it can dial lesser known or lesser\nquality peers and help assess their quality. Similarly, when queried for peers, a node should make\nsure they dont return low quality peers.")]),e._v(" "),r("p",[e._v("Peer quality can be tracked using a trust metric that flags certain behaviours as good or bad. When enough\nbad behaviour accumulates, we can mark the peer as bad and disconnect.\nFor example, when the PEXReactor makes a request for peers network addresses from an already known peer, and the returned network addresses are unreachable, this undesirable behavior should be tracked. Returning a few bad network addresses probably shouldn’t cause a peer to be dropped, while excessive amounts of this behavior does qualify the peer for removal. The originally proposed approach and design document for the trust metric can be found in the "),r("RouterLink",{attrs:{to:"/architecture/adr-006-trust-metric.html"}},[e._v("ADR 006")]),e._v(" document.")],1),e._v(" "),r("p",[e._v("The trust metric implementation allows a developer to obtain a peer's trust metric from a trust metric store, and track good and bad events relevant to a peer's behavior, and at any time, the peer's metric can be queried for a current trust value. The current trust value is calculated with a formula that utilizes current behavior, previous behavior, and change between the two. Current behavior is calculated as the percentage of good behavior within a time interval. The time interval is short; probably set between 30 seconds and 5 minutes. On the other hand, the historic data can estimate a peer's behavior over days worth of tracking. At the end of a time interval, the current behavior becomes part of the historic data, and a new time interval begins with the good and bad counters reset to zero.")]),e._v(" "),r("p",[e._v("These are some important things to keep in mind regarding how the trust metrics handle time intervals and scoring:")]),e._v(" "),r("ul",[r("li",[e._v("Each new time interval begins with a perfect score")]),e._v(" "),r("li",[e._v("Bad events quickly bring the score down and good events cause the score to slowly rise")]),e._v(" "),r("li",[e._v("When the time interval is over, the percentage of good events becomes historic data.")])]),e._v(" "),r("p",[e._v("Some useful information about the inner workings of the trust metric:")]),e._v(" "),r("ul",[r("li",[e._v("When a trust metric is first instantiated, a timer (ticker) periodically fires in order to handle transitions between trust metric time intervals")]),e._v(" "),r("li",[e._v("If a peer is disconnected from a node, the timer should be paused, since the node is no longer connected to that peer")]),e._v(" "),r("li",[e._v("The ability to pause the metric is supported with the store "),r("strong",[e._v("PeerDisconnected")]),e._v(" method and the metric "),r("strong",[e._v("Pause")]),e._v(" method")]),e._v(" "),r("li",[e._v("After a pause, if a good or bad event method is called on a metric, it automatically becomes unpaused and begins a new time interval.")])]),e._v(" "),r("h2",{attrs:{id:"decision"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),r("p",[e._v("The trust metric capability is now available, yet, it still leaves the question of how should it be applied throughout Tendermint in order to properly track the quality of peers?")]),e._v(" "),r("h3",{attrs:{id:"proposed-process"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proposed-process"}},[e._v("#")]),e._v(" Proposed Process")]),e._v(" "),r("p",[e._v("Peers are managed using an address book and a trust metric:")]),e._v(" "),r("ul",[r("li",[e._v("The address book keeps a record of peers and provides selection methods")]),e._v(" "),r("li",[e._v("The trust metric tracks the quality of the peers")])]),e._v(" "),r("h4",{attrs:{id:"presence-in-address-book"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#presence-in-address-book"}},[e._v("#")]),e._v(" Presence in Address Book")]),e._v(" "),r("p",[e._v("Outbound peers are added to the address book before they are dialed,\nand inbound peers are added once the peer connection is set up.\nPeers are also added to the address book when they are received in response to\na pexRequestMessage.")]),e._v(" "),r("p",[e._v("While a node has less than "),r("code",[e._v("needAddressThreshold")]),e._v(", it will periodically request more,\nvia pexRequestMessage, from randomly selected peers and from newly dialed outbound peers.")]),e._v(" "),r("p",[e._v("When a new address is added to an address book that has more than "),r("code",[e._v("0.5*needAddressThreshold")]),e._v(" addresses,\nthen with some low probability, a randomly chosen low quality peer is removed.")]),e._v(" "),r("h4",{attrs:{id:"outbound-peers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#outbound-peers"}},[e._v("#")]),e._v(" Outbound Peers")]),e._v(" "),r("p",[e._v("Peers attempt to maintain a minimum number of outbound connections by\nrepeatedly querying the address book for peers to connect to.\nWhile a node has few to no outbound connections, the address book is biased to return\nhigher quality peers. As the node increases the number of outbound connections,\nthe address book is biased to return less-vetted or lower-quality peers.")]),e._v(" "),r("h4",{attrs:{id:"inbound-peers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#inbound-peers"}},[e._v("#")]),e._v(" Inbound Peers")]),e._v(" "),r("p",[e._v("Peers also maintain a maximum number of total connections, MaxNumPeers.\nIf a peer has MaxNumPeers, new incoming connections will be accepted with low probability.\nWhen such a new connection is accepted, the peer disconnects from a probabilistically chosen low ranking peer\nso it does not exceed MaxNumPeers.")]),e._v(" "),r("h4",{attrs:{id:"peer-exchange"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#peer-exchange"}},[e._v("#")]),e._v(" Peer Exchange")]),e._v(" "),r("p",[e._v("When a peer receives a pexRequestMessage, it returns a random sample of high quality peers from the address book. Peers with no score or low score should not be inclided in a response to pexRequestMessage.")]),e._v(" "),r("h4",{attrs:{id:"peer-quality"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#peer-quality"}},[e._v("#")]),e._v(" Peer Quality")]),e._v(" "),r("p",[e._v("Peer quality is tracked in the connection and across the reactors by storing the TrustMetric in the peer's\nthread safe Data store.")]),e._v(" "),r("p",[e._v("Peer behaviour is then defined as one of the following:")]),e._v(" "),r("ul",[r("li",[e._v("Fatal - something outright malicious that causes us to disconnect the peer and ban it from the address book for some amount of time")]),e._v(" "),r("li",[e._v("Bad - Any kind of timeout, messages that don't unmarshal, fail other validity checks, or messages we didn't ask for or aren't expecting (usually worth one bad event)")]),e._v(" "),r("li",[e._v("Neutral - Unknown channels/message types/version upgrades (no good or bad events recorded)")]),e._v(" "),r("li",[e._v("Correct - Normal correct behavior (worth one good event)")]),e._v(" "),r("li",[e._v("Good - some random majority of peers per reactor sending us useful messages (worth more than one good event).")])]),e._v(" "),r("p",[e._v("Note that Fatal behaviour causes us to remove the peer, and neutral behaviour does not affect the score.")]),e._v(" "),r("h2",{attrs:{id:"status"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),r("p",[e._v("Proposed.")]),e._v(" "),r("h2",{attrs:{id:"consequences"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),r("h3",{attrs:{id:"positive"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),r("ul",[r("li",[e._v("Bringing the address book and trust metric store together will cause the network to be built in a way that encourages greater security and reliability.")])]),e._v(" "),r("h3",{attrs:{id:"negative"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),r("ul",[r("li",[e._v("TBD")])]),e._v(" "),r("h3",{attrs:{id:"neutral"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),r("ul",[r("li",[e._v("Keep in mind that, good events need to be recorded just as bad events do using this implementation.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);
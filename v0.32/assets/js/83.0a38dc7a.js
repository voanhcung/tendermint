(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{328:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"adr-039-peer-behaviour-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adr-039-peer-behaviour-interface"}}),t._v(" ADR 039: Peer Behaviour Interface")]),t._v(" "),s("h2",{attrs:{id:"changelog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}}),t._v(" Changelog")]),t._v(" "),s("ul",[s("li",[t._v("07-03-2019: Initial draft")]),t._v(" "),s("li",[t._v("14-03-2019: Updates from feedback")])]),t._v(" "),s("h2",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context"}}),t._v(" Context")]),t._v(" "),s("p",[t._v("The responsibility for signaling and acting upon peer behaviour lacks a single\nowning component and is heavily coupled with the network stack"),s("a",{attrs:{href:"#references"}},[s("sup",[t._v("1")])]),t._v(". Reactors\nmaintain a reference to the "),s("code",[t._v("p2p.Switch")]),t._v(" which they use to call\n"),s("code",[t._v("switch.StopPeerForError(...)")]),t._v(" when a peer misbehaves and\n"),s("code",[t._v("switch.MarkAsGood(...)")]),t._v(" when a peer contributes in some meaningful way.\nWhile the switch handles "),s("code",[t._v("StopPeerForError")]),t._v(" internally, the "),s("code",[t._v("MarkAsGood")]),t._v("\nmethod delegates to another component, "),s("code",[t._v("p2p.AddrBook")]),t._v(". This scheme of delegation\nacross Switch obscures the responsibility for handling peer behaviour\nand ties up the reactors in a larger dependency graph when testing.")]),t._v(" "),s("h2",{attrs:{id:"decision"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decision"}}),t._v(" Decision")]),t._v(" "),s("p",[t._v("Introduce a "),s("code",[t._v("PeerBehaviour")]),t._v(" interface and concrete implementations which\nprovide methods for reactors to signal peer behaviour without direct\ncoupling "),s("code",[t._v("p2p.Switch")]),t._v(".  Introduce a ErrorBehaviourPeer to provide\nconcrete reasons for stopping peers. Introduce GoodBehaviourPeer to provide\nconcrete ways in which a peer contributes.")]),t._v(" "),s("h3",{attrs:{id:"implementation-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation-changes"}}),t._v(" Implementation Changes")]),t._v(" "),s("p",[t._v("PeerBehaviour then becomes an interface for signaling peer errors as well\nas for marking peers as "),s("code",[t._v("good")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" PeerBehaviour "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Behaved")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("peer Peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason GoodBehaviourPeer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Errored")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("peer Peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason ErrorBehaviourPeer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Instead of signaling peers to stop with arbitrary reasons:\n"),s("code",[t._v("reason interface{}")])]),t._v(" "),s("p",[t._v("We introduce a concrete error type ErrorBehaviourPeer:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ErrorBehaviourPeer "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    ErrorBehaviourUnknown "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("iota")]),t._v("\n    ErrorBehaviourBadMessage\n    ErrorBehaviourMessageOutofOrder\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("To provide additional information on the ways a peer contributed, we introduce\nthe GoodBehaviourPeer type.")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" GoodBehaviourPeer "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    GoodBehaviourVote "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("iota")]),t._v("\n    GoodBehaviourBlockPart\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("As a first iteration we provide a concrete implementation which wraps\nthe switch:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" SwitchedPeerBehaviour "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sw "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Switch\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("spb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("SwitchedPeerBehaviour"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Errored")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("peer Peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason ErrorBehaviourPeer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    spb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StopPeerForError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("spb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("SwitchedPeerBehaviour"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Behaved")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("peer Peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason GoodBehaviourPeer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    spb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MarkPeerAsGood")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewSwitchedPeerBehaviour")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sw "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Switch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("SwitchedPeerBehaviour "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("SwitchedPeerBehaviour"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        sw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Reactors, which are often difficult to unit test"),s("a",{attrs:{href:"#references"}},[s("sup",[t._v("2")])]),t._v(" could use an implementation which exposes the signals produced by the reactor in\nmanufactured scenarios:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ErrorBehaviours "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("ErrorBehaviourPeer\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" GoodBehaviours "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("GoodBehaviourPeer\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" StorePeerBehaviour "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    eb ErrorBehaviours\n    gb GoodBehaviours\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewStorePeerBehaviour")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("StorePeerBehaviour"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("StorePeerBehaviour"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        eb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ErrorBehaviours"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        gb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GoodBehaviours"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("spb StorePeerBehaviour"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Errored")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("peer Peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason ErrorBehaviourPeer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ok "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" spb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("ok "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        spb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("ErrorBehaviours"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        spb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("spb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mpb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("StorePeerBehaviour"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetErrored")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ErrorBehaviours "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mpb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eb\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("spb StorePeerBehaviour"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Behaved")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("peer Peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason GoodBehaviourPeer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ok "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" spb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("ok "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        spb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("GoodBehaviourPeer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        spb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("spb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("peer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("spb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("StorePeerBehaviour"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBehaved")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" GoodBehaviours "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" spb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gb\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status"}}),t._v(" Status")]),t._v(" "),s("p",[t._v("Accepted")]),t._v(" "),s("h2",{attrs:{id:"consequences"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}}),t._v(" Consequences")]),t._v(" "),s("h3",{attrs:{id:"positive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#positive"}}),t._v(" Positive")]),t._v(" "),s("pre",[s("code",[t._v("* De-couple signaling from acting upon peer behaviour.\n* Reduce the coupling of reactors and the Switch and the network\n  stack\n* The responsibility of managing peer behaviour can be migrated to\n  a single component instead of split between the switch and the\n  address book.\n")])]),t._v(" "),s("h3",{attrs:{id:"negative"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#negative"}}),t._v(" Negative")]),t._v(" "),s("pre",[s("code",[t._v("* The first iteration will simply wrap the Switch and introduce a\n  level of indirection.\n")])]),t._v(" "),s("h3",{attrs:{id:"neutral"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}}),t._v(" Neutral")]),t._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}}),t._v(" References")]),t._v(" "),s("ol",[s("li",[t._v("Issue "),s("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2067",target:"_blank",rel:"noopener noreferrer"}},[t._v("#2067"),s("OutboundLink")],1),t._v(": P2P Refactor")]),t._v(" "),s("li",[t._v("PR: "),s("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/3506",target:"_blank",rel:"noopener noreferrer"}},[t._v("#3506"),s("OutboundLink")],1),t._v(": ADR 036: Blockchain Reactor Refactor")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{403:function(t,e,n){"use strict";n.r(e);var a=n(1),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"tm-monitor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tm-monitor"}}),t._v(" tm-monitor")]),t._v(" "),n("p",[t._v("Tendermint blockchain monitoring tool; watches over one or more nodes,\ncollecting and providing various statistics to the user:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/tools/tm-monitor",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/tendermint/tendermint/tree/master/tools/tm-monitor"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"quick-start"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}}),t._v(" Quick Start")]),t._v(" "),n("h3",{attrs:{id:"docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker"}}),t._v(" Docker")]),t._v(" "),n("p",[t._v("Assuming your application is running in another container with the name\n"),n("code",[t._v("app")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('docker run -it --rm -v "/tmp:/tendermint" tendermint/tendermint init\ndocker run -it --rm -v "/tmp:/tendermint" -p "26657:26657" --name=tm --link=app tendermint/tendermint node --proxy_app=tcp://app:26658\n\ndocker run -it --rm -p "26670:26670" --link=tm tendermint/monitor tm:26657\n')])])]),n("p",[t._v("If you don't have an application yet, but still want to try monitor out,\nuse "),n("code",[t._v("kvstore")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('docker run -it --rm -v "/tmp:/tendermint" tendermint/tendermint init\ndocker run -it --rm -v "/tmp:/tendermint" -p "26657:26657" --name=tm tendermint/tendermint node --proxy_app=kvstore\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('docker run -it --rm -p "26670:26670" --link=tm tendermint/monitor tm:26657\n')])])]),n("h3",{attrs:{id:"using-binaries"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-binaries"}}),t._v(" Using Binaries")]),t._v(" "),n("p",[n("router-link",{attrs:{to:"/introduction/install.html"}},[t._v("Install Tendermint")]),t._v(".")],1),t._v(" "),n("p",[t._v("Start a Tendermint node:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("tendermint init\ntendermint node --proxy_app=kvstore\n")])])]),n("p",[t._v("In another window, run the monitor:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("tm-monitor localhost:26657\n")])])]),n("h2",{attrs:{id:"usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usage"}}),t._v(" Usage")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('tm-monitor [-v] [-no-ton] [-listen-addr="tcp://0.0.0.0:26670"] [endpoints]\n\nExamples:\n        # monitor single instance\n        tm-monitor localhost:26657\n\n        # monitor a few instances by providing comma-separated list of RPC endpoints\n        tm-monitor host1:26657,host2:26657\nFlags:\n  -listen-addr string\n        HTTP and Websocket server listen address (default "tcp://0.0.0.0:26670")\n  -no-ton\n        Do not show ton (table of nodes)\n  -v    verbose logging\n')])])]),n("h3",{attrs:{id:"rpc-ui"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rpc-ui"}}),t._v(" RPC UI")]),t._v(" "),n("p",[t._v("Run "),n("code",[t._v("tm-monitor")]),t._v(" and visit http://localhost:26670 You should see the\nlist of the available RPC endpoints:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("http://localhost:26670/status\nhttp://localhost:26670/status/network\nhttp://localhost:26670/monitor?endpoint=_\nhttp://localhost:26670/status/node?name=_\nhttp://localhost:26670/unmonitor?endpoint=_\n")])])]),n("p",[t._v("The API is available as GET requests with URI encoded parameters, or as\nJSONRPC POST requests. The JSONRPC methods are also exposed over\nwebsocket.")]),t._v(" "),n("h2",{attrs:{id:"development"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#development"}}),t._v(" Development")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("make tools\nmake test\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{790:function(e,t,n){"use strict";n.r(t);var o=n(1),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"getting-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),n("h2",{attrs:{id:"first-tendermint-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#first-tendermint-app"}},[e._v("#")]),e._v(" First Tendermint App")]),e._v(" "),n("p",[e._v("As a general purpose blockchain engine, Tendermint is agnostic to the\napplication you want to run. So, to run a complete blockchain that does\nsomething useful, you must start two programs: one is Tendermint Core,\nthe other is your application, which can be written in any programming\nlanguage. Recall from "),n("RouterLink",{attrs:{to:"/introduction/what-is-tendermint.html#abci-overview"}},[e._v("the intro to\nABCI")]),e._v(" that Tendermint Core handles all the p2p and consensus stuff, and just forwards transactions to the\napplication when they need to be validated, or when they're ready to be\ncommitted to a block.")],1),e._v(" "),n("p",[e._v("In this guide, we show you some examples of how to run an application\nusing Tendermint.")]),e._v(" "),n("h3",{attrs:{id:"install"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),n("p",[e._v("The first apps we will work with are written in Go. To install them, you\nneed to "),n("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("install Go"),n("OutboundLink")],1),e._v(", put\n"),n("code",[e._v("$GOPATH/bin")]),e._v(" in your "),n("code",[e._v("$PATH")]),e._v(" and enable go modules with these instructions:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWNobyBleHBvcnQgR09QQVRIPVwmcXVvdDtcJEhPTUUvZ29cJnF1b3Q7ICZndDsmZ3Q7IH4vLmJhc2hfcHJvZmlsZQplY2hvIGV4cG9ydCBQQVRIPVwmcXVvdDtcJFBBVEg6XCRHT1BBVEgvYmluXCZxdW90OyAmZ3Q7Jmd0OyB+Ly5iYXNoX3Byb2ZpbGUKZWNobyBleHBvcnQgR08xMTFNT0RVTEU9b24gJmd0OyZndDsgfi8uYmFzaF9wcm9maWxlCg=="}}),e._v(" "),n("p",[e._v("Then run")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z28gZ2V0IGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50CmNkICRHT1BBVEgvc3JjL2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50Cm1ha2UgdG9vbHMKbWFrZSBpbnN0YWxsX2FiY2kK"}}),e._v(" "),n("p",[e._v("Now you should have the "),n("code",[e._v("abci-cli")]),e._v(" installed; you'll see a couple of\ncommands ("),n("code",[e._v("counter")]),e._v(" and "),n("code",[e._v("kvstore")]),e._v(") that are example applications written\nin Go. See below for an application written in JavaScript.")]),e._v(" "),n("p",[e._v("Now, let's run some apps!")]),e._v(" "),n("h2",{attrs:{id:"kvstore-a-first-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kvstore-a-first-example"}},[e._v("#")]),e._v(" KVStore - A First Example")]),e._v(" "),n("p",[e._v("The kvstore app is a "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Merkle_tree",target:"_blank",rel:"noopener noreferrer"}},[e._v("Merkle\ntree"),n("OutboundLink")],1),e._v(" that just stores all\ntransactions. If the transaction contains an "),n("code",[e._v("=")]),e._v(", e.g. "),n("code",[e._v("key=value")]),e._v(", then\nthe "),n("code",[e._v("value")]),e._v(" is stored under the "),n("code",[e._v("key")]),e._v(" in the Merkle tree. Otherwise, the\nfull transaction bytes are stored as the key and the value.")]),e._v(" "),n("p",[e._v("Let's start a kvstore application.")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"YWJjaS1jbGkga3ZzdG9yZQo="}}),e._v(" "),n("p",[e._v("In another terminal, we can start Tendermint. You should already have the\nTendermint binary installed. If not, follow the steps from\n"),n("RouterLink",{attrs:{to:"/introduction/install.html"}},[e._v("here")]),e._v(". If you have never run Tendermint\nbefore, use:")],1),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dGVuZGVybWludCBpbml0CnRlbmRlcm1pbnQgbm9kZQo="}}),e._v(" "),n("p",[e._v("If you have used Tendermint, you may want to reset the data for a new\nblockchain by running "),n("code",[e._v("tendermint unsafe_reset_all")]),e._v(". Then you can run\n"),n("code",[e._v("tendermint node")]),e._v(" to start Tendermint, and connect to the app. For more\ndetails, see "),n("RouterLink",{attrs:{to:"/tendermint-core/using-tendermint.html"}},[e._v("the guide on using Tendermint")]),e._v(".")],1),e._v(" "),n("p",[e._v("You should see Tendermint making blocks! We can get the status of our\nTendermint node as follows:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y3VybCAtcyBsb2NhbGhvc3Q6MjY2NTcvc3RhdHVzCg=="}}),e._v(" "),n("p",[e._v("The "),n("code",[e._v("-s")]),e._v(" just silences "),n("code",[e._v("curl")]),e._v(". For nicer output, pipe the result into a\ntool like "),n("a",{attrs:{href:"https://stedolan.github.io/jq/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jq"),n("OutboundLink")],1),e._v(" or "),n("code",[e._v("json_pp")]),e._v(".")]),e._v(" "),n("p",[e._v("Now let's send some transactions to the kvstore.")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y3VybCAtcyAnbG9jYWxob3N0OjI2NjU3L2Jyb2FkY2FzdF90eF9jb21taXQ/dHg9JnF1b3Q7YWJjZCZxdW90OycK"}}),e._v(" "),n("p",[e._v("Note the single quote ("),n("code",[e._v("'")]),e._v(") around the url, which ensures that the\ndouble quotes ("),n("code",[e._v('"')]),e._v(") are not escaped by bash. This command sent a\ntransaction with bytes "),n("code",[e._v("abcd")]),e._v(", so "),n("code",[e._v("abcd")]),e._v(" will be stored as both the key\nand the value in the Merkle tree. The response should look something\nlike:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ewogICZxdW90O2pzb25ycGMmcXVvdDs6ICZxdW90OzIuMCZxdW90OywKICAmcXVvdDtpZCZxdW90OzogJnF1b3Q7JnF1b3Q7LAogICZxdW90O3Jlc3VsdCZxdW90OzogewogICAgJnF1b3Q7Y2hlY2tfdHgmcXVvdDs6IHt9LAogICAgJnF1b3Q7ZGVsaXZlcl90eCZxdW90OzogewogICAgICAmcXVvdDt0YWdzJnF1b3Q7OiBbCiAgICAgICAgewogICAgICAgICAgJnF1b3Q7a2V5JnF1b3Q7OiAmcXVvdDtZWEJ3TG1OeVpXRjBiM0k9JnF1b3Q7LAogICAgICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6ICZxdW90O2FtRmwmcXVvdDsKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7WVhCd0xtdGxlUT09JnF1b3Q7LAogICAgICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6ICZxdW90O1lXSmpaQT09JnF1b3Q7CiAgICAgICAgfQogICAgICBdCiAgICB9LAogICAgJnF1b3Q7aGFzaCZxdW90OzogJnF1b3Q7OURGNjY1NTNGOThERTNDMjZFM0MzMzE3QTNFNENFRDU0RjcxNEUzOSZxdW90OywKICAgICZxdW90O2hlaWdodCZxdW90OzogMTQKICB9Cn0K"}}),e._v(" "),n("p",[e._v("We can confirm that our transaction worked and the value got stored by\nquerying the app:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y3VybCAtcyAnbG9jYWxob3N0OjI2NjU3L2FiY2lfcXVlcnk/ZGF0YT0mcXVvdDthYmNkJnF1b3Q7Jwo="}}),e._v(" "),n("p",[e._v("The result should look like:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ewogICZxdW90O2pzb25ycGMmcXVvdDs6ICZxdW90OzIuMCZxdW90OywKICAmcXVvdDtpZCZxdW90OzogJnF1b3Q7JnF1b3Q7LAogICZxdW90O3Jlc3VsdCZxdW90OzogewogICAgJnF1b3Q7cmVzcG9uc2UmcXVvdDs6IHsKICAgICAgJnF1b3Q7bG9nJnF1b3Q7OiAmcXVvdDtleGlzdHMmcXVvdDssCiAgICAgICZxdW90O2luZGV4JnF1b3Q7OiAmcXVvdDstMSZxdW90OywKICAgICAgJnF1b3Q7a2V5JnF1b3Q7OiAmcXVvdDtZV0pqWkE9PSZxdW90OywKICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6ICZxdW90O1lXSmpaQT09JnF1b3Q7CiAgICB9CiAgfQp9Cg=="}}),e._v(" "),n("p",[e._v("Note the "),n("code",[e._v("value")]),e._v(" in the result ("),n("code",[e._v("YWJjZA==")]),e._v("); this is the base64-encoding\nof the ASCII of "),n("code",[e._v("abcd")]),e._v(". You can verify this in a python 2 shell by\nrunning "),n("code",[e._v("\"YWJjZA==\".decode('base64')")]),e._v(" or in python 3 shell by running\n"),n("code",[e._v("import codecs; codecs.decode(b\"YWJjZA==\", 'base64').decode('ascii')")]),e._v(".\nStay tuned for a future release that "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1794",target:"_blank",rel:"noopener noreferrer"}},[e._v("makes this output more\nhuman-readable"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Now let's try setting a different key and value:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y3VybCAtcyAnbG9jYWxob3N0OjI2NjU3L2Jyb2FkY2FzdF90eF9jb21taXQ/dHg9JnF1b3Q7bmFtZT1zYXRvc2hpJnF1b3Q7Jwo="}}),e._v(" "),n("p",[e._v("Now if we query for "),n("code",[e._v("name")]),e._v(", we should get "),n("code",[e._v("satoshi")]),e._v(", or "),n("code",[e._v("c2F0b3NoaQ==")]),e._v("\nin base64:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y3VybCAtcyAnbG9jYWxob3N0OjI2NjU3L2FiY2lfcXVlcnk/ZGF0YT0mcXVvdDtuYW1lJnF1b3Q7Jwo="}}),e._v(" "),n("p",[e._v("Try some other transactions and queries to make sure everything is\nworking!")]),e._v(" "),n("h2",{attrs:{id:"counter-another-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#counter-another-example"}},[e._v("#")]),e._v(" Counter - Another Example")]),e._v(" "),n("p",[e._v("Now that we've got the hang of it, let's try another application, the\n"),n("code",[e._v("counter")]),e._v(" app.")]),e._v(" "),n("p",[e._v("The counter app doesn't use a Merkle tree, it just counts how many times\nwe've sent a transaction, or committed the state.")]),e._v(" "),n("p",[e._v("This application has two modes: "),n("code",[e._v("serial=off")]),e._v(" and "),n("code",[e._v("serial=on")]),e._v(".")]),e._v(" "),n("p",[e._v("When "),n("code",[e._v("serial=on")]),e._v(", transactions must be a big-endian encoded incrementing\ninteger, starting at 0.")]),e._v(" "),n("p",[e._v("If "),n("code",[e._v("serial=off")]),e._v(", there are no restrictions on transactions.")]),e._v(" "),n("p",[e._v("In a live blockchain, transactions collect in memory before they are\ncommitted into blocks. To avoid wasting resources on invalid\ntransactions, ABCI provides the "),n("code",[e._v("CheckTx")]),e._v(" message, which application\ndevelopers can use to accept or reject transactions, before they are\nstored in memory or gossipped to other peers.")]),e._v(" "),n("p",[e._v("In this instance of the counter app, with "),n("code",[e._v("serial=on")]),e._v(", "),n("code",[e._v("CheckTx")]),e._v(" only\nallows transactions whose integer is greater than the last committed\none.")]),e._v(" "),n("p",[e._v("Let's kill the previous instance of "),n("code",[e._v("tendermint")]),e._v(" and the "),n("code",[e._v("kvstore")]),e._v("\napplication, and start the counter app. We can enable "),n("code",[e._v("serial=on")]),e._v(" with a\nflag:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"YWJjaS1jbGkgY291bnRlciAtLXNlcmlhbAo="}}),e._v(" "),n("p",[e._v("In another window, reset then start Tendermint:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dGVuZGVybWludCB1bnNhZmVfcmVzZXRfYWxsCnRlbmRlcm1pbnQgbm9kZQo="}}),e._v(" "),n("p",[e._v("Once again, you can see the blocks streaming by. Let's send some\ntransactions. Since we have set "),n("code",[e._v("serial=on")]),e._v(", the first transaction must\nbe the number "),n("code",[e._v("0")]),e._v(":")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y3VybCBsb2NhbGhvc3Q6MjY2NTcvYnJvYWRjYXN0X3R4X2NvbW1pdD90eD0weDAwCg=="}}),e._v(" "),n("p",[e._v("Note the empty (hence successful) response. The next transaction must be\nthe number "),n("code",[e._v("1")]),e._v(". If instead, we try to send a "),n("code",[e._v("5")]),e._v(", we get an error:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Jmd0OyBjdXJsIGxvY2FsaG9zdDoyNjY1Ny9icm9hZGNhc3RfdHhfY29tbWl0P3R4PTB4MDUKewogICZxdW90O2pzb25ycGMmcXVvdDs6ICZxdW90OzIuMCZxdW90OywKICAmcXVvdDtpZCZxdW90OzogJnF1b3Q7JnF1b3Q7LAogICZxdW90O3Jlc3VsdCZxdW90OzogewogICAgJnF1b3Q7Y2hlY2tfdHgmcXVvdDs6IHt9LAogICAgJnF1b3Q7ZGVsaXZlcl90eCZxdW90OzogewogICAgICAmcXVvdDtjb2RlJnF1b3Q7OiAyLAogICAgICAmcXVvdDtsb2cmcXVvdDs6ICZxdW90O0ludmFsaWQgbm9uY2UuIEV4cGVjdGVkIDEsIGdvdCA1JnF1b3Q7CiAgICB9LAogICAgJnF1b3Q7aGFzaCZxdW90OzogJnF1b3Q7MzNCOTNERkY5ODc0OUIwRDY5OTZBNzBGNjQwNzEzNDcwNjBEQzE5QyZxdW90OywKICAgICZxdW90O2hlaWdodCZxdW90OzogMzQKICB9Cn0K"}}),e._v(" "),n("p",[e._v("But if we send a "),n("code",[e._v("1")]),e._v(", it works again:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Jmd0OyBjdXJsIGxvY2FsaG9zdDoyNjY1Ny9icm9hZGNhc3RfdHhfY29tbWl0P3R4PTB4MDEKewogICZxdW90O2pzb25ycGMmcXVvdDs6ICZxdW90OzIuMCZxdW90OywKICAmcXVvdDtpZCZxdW90OzogJnF1b3Q7JnF1b3Q7LAogICZxdW90O3Jlc3VsdCZxdW90OzogewogICAgJnF1b3Q7Y2hlY2tfdHgmcXVvdDs6IHt9LAogICAgJnF1b3Q7ZGVsaXZlcl90eCZxdW90Ozoge30sCiAgICAmcXVvdDtoYXNoJnF1b3Q7OiAmcXVvdDtGMTc4NTRBOTc3RjZGQTdFRUExQkQ3NThFMjk2NzEwQjg2RjcyRjNEJnF1b3Q7LAogICAgJnF1b3Q7aGVpZ2h0JnF1b3Q7OiA2MAogIH0KfQo="}}),e._v(" "),n("p",[e._v("For more details on the "),n("code",[e._v("broadcast_tx")]),e._v(" API, see "),n("RouterLink",{attrs:{to:"/tendermint-core/using-tendermint.html"}},[e._v("the guide on using\nTendermint")]),e._v(".")],1),e._v(" "),n("h2",{attrs:{id:"counterjs-example-in-another-language"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#counterjs-example-in-another-language"}},[e._v("#")]),e._v(" CounterJS - Example in Another Language")]),e._v(" "),n("p",[e._v("We also want to run applications in another language - in this case,\nwe'll run a Javascript version of the "),n("code",[e._v("counter")]),e._v(". To run it, you'll need\nto "),n("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("install node"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("You'll also need to fetch the relevant repository, from\n"),n("a",{attrs:{href:"https://github.com/tendermint/js-abci",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(", then install it:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L2pzLWFiY2kuZ2l0CmNkIGpzLWFiY2kKbnBtIGluc3RhbGwgYWJjaQo="}}),e._v(" "),n("p",[e._v("Kill the previous "),n("code",[e._v("counter")]),e._v(" and "),n("code",[e._v("tendermint")]),e._v(" processes. Now run the app:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bm9kZSBleGFtcGxlL2NvdW50ZXIuanMK"}}),e._v(" "),n("p",[e._v("In another window, reset and start "),n("code",[e._v("tendermint")]),e._v(":")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dGVuZGVybWludCB1bnNhZmVfcmVzZXRfYWxsCnRlbmRlcm1pbnQgbm9kZQo="}}),e._v(" "),n("p",[e._v("Once again, you should see blocks streaming by - but now, our\napplication is written in Javascript! Try sending some transactions, and\nlike before - the results should be the same:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBvawpjdXJsIGxvY2FsaG9zdDoyNjY1Ny9icm9hZGNhc3RfdHhfY29tbWl0P3R4PTB4MDAKIyBpbnZhbGlkIG5vbmNlCmN1cmwgbG9jYWxob3N0OjI2NjU3L2Jyb2FkY2FzdF90eF9jb21taXQ/dHg9MHgwNQojIG9rCmN1cmwgbG9jYWxob3N0OjI2NjU3L2Jyb2FkY2FzdF90eF9jb21taXQ/dHg9MHgwMQo="}}),e._v(" "),n("p",[e._v("Neat, eh?")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);
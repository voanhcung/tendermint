(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{691:function(t,_,v){"use strict";v.r(_);var e=v(1),d=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"metrics"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#metrics"}},[t._v("#")]),t._v(" Metrics")]),t._v(" "),v("p",[t._v("Tendermint can report and serve the Prometheus metrics, which in their turn can\nbe consumed by Prometheus collector(s).")]),t._v(" "),v("p",[t._v("This functionality is disabled by default.")]),t._v(" "),v("p",[t._v("To enable the Prometheus metrics, set "),v("code",[t._v("instrumentation.prometheus=true")]),t._v(" if your\nconfig file. Metrics will be served under "),v("code",[t._v("/metrics")]),t._v(" on 26660 port by default.\nListen address can be changed in the config file (see\n"),v("code",[t._v("instrumentation.prometheus\\_listen\\_addr")]),t._v(").")]),t._v(" "),v("h2",{attrs:{id:"list-of-available-metrics"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#list-of-available-metrics"}},[t._v("#")]),t._v(" List of available metrics")]),t._v(" "),v("p",[t._v("The following metrics are available:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("Name")])]),t._v(" "),v("th",[v("strong",[t._v("Type")])]),t._v(" "),v("th",[v("strong",[t._v("Since")])]),t._v(" "),v("th",[v("strong",[t._v("Tags")])]),t._v(" "),v("th",[v("strong",[t._v("Description")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("consensus_height")]),t._v(" "),v("td",[t._v("Gauge")]),t._v(" "),v("td",[t._v("0.21.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Height of the chain")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_validators")]),t._v(" "),v("td",[t._v("Gauge")]),t._v(" "),v("td",[t._v("0.21.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Number of validators")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_validators_power")]),t._v(" "),v("td",[t._v("Gauge")]),t._v(" "),v("td",[t._v("0.21.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Total voting power of all validators")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_validator_power")]),t._v(" "),v("td",[t._v("Gauge")]),t._v(" "),v("td",[t._v("0.33.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Voting power of the node if in the validator set")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_validator_last_signed_height")]),t._v(" "),v("td",[t._v("Gauge")]),t._v(" "),v("td",[t._v("0.33.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Last height the node signed a block, if the node is a validator")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_validator_missed_blocks")]),t._v(" "),v("td",[t._v("Gauge")]),t._v(" "),v("td",[t._v("0.33.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Total amount of blocks missed for the node, if the node is a validator")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_missing_validators")]),t._v(" "),v("td",[t._v("Gauge")]),t._v(" "),v("td",[t._v("0.21.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Number of validators who did not sign")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_missing_validators_power")]),t._v(" "),v("td",[t._v("Gauge")]),t._v(" "),v("td",[t._v("0.21.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Total voting power of the missing validators")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_byzantine_validators")]),t._v(" "),v("td",[t._v("Gauge")]),t._v(" "),v("td",[t._v("0.21.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Number of validators who tried to double sign")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_byzantine_validators_power")]),t._v(" "),v("td",[t._v("Gauge")]),t._v(" "),v("td",[t._v("0.21.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Total voting power of the byzantine validators")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_block_interval_seconds")]),t._v(" "),v("td",[t._v("Histogram")]),t._v(" "),v("td",[t._v("0.21.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Time between this and last block (Block.Header.Time) in seconds")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_rounds")]),t._v(" "),v("td",[t._v("Gauge")]),t._v(" "),v("td",[t._v("0.21.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Number of rounds")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_num_txs")]),t._v(" "),v("td",[t._v("Gauge")]),t._v(" "),v("td",[t._v("0.21.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Number of transactions")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_total_txs")]),t._v(" "),v("td",[t._v("Gauge")]),t._v(" "),v("td",[t._v("0.21.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Total number of transactions committed")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_block_parts")]),t._v(" "),v("td",[t._v("counter")]),t._v(" "),v("td",[t._v("0.25.0")]),t._v(" "),v("td",[t._v("peer_id")]),t._v(" "),v("td",[t._v("number of blockparts transmitted by peer")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_latest_block_height")]),t._v(" "),v("td",[t._v("gauge")]),t._v(" "),v("td",[t._v("0.25.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("/status sync_info number")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_fast_syncing")]),t._v(" "),v("td",[t._v("gauge")]),t._v(" "),v("td",[t._v("0.25.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("either 0 (not fast syncing) or 1 (syncing)")])]),t._v(" "),v("tr",[v("td",[t._v("consensus_block_size_bytes")]),t._v(" "),v("td",[t._v("Gauge")]),t._v(" "),v("td",[t._v("0.21.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Block size in bytes")])]),t._v(" "),v("tr",[v("td",[t._v("p2p_peers")]),t._v(" "),v("td",[t._v("Gauge")]),t._v(" "),v("td",[t._v("0.21.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Number of peers node's connected to")])]),t._v(" "),v("tr",[v("td",[t._v("p2p_peer_receive_bytes_total")]),t._v(" "),v("td",[t._v("counter")]),t._v(" "),v("td",[t._v("0.25.0")]),t._v(" "),v("td",[t._v("peer_id, chID")]),t._v(" "),v("td",[t._v("number of bytes per channel received from a given peer")])]),t._v(" "),v("tr",[v("td",[t._v("p2p_peer_send_bytes_total")]),t._v(" "),v("td",[t._v("counter")]),t._v(" "),v("td",[t._v("0.25.0")]),t._v(" "),v("td",[t._v("peer_id, chID")]),t._v(" "),v("td",[t._v("number of bytes per channel sent to a given peer")])]),t._v(" "),v("tr",[v("td",[t._v("p2p_peer_pending_send_bytes")]),t._v(" "),v("td",[t._v("gauge")]),t._v(" "),v("td",[t._v("0.25.0")]),t._v(" "),v("td",[t._v("peer_id")]),t._v(" "),v("td",[t._v("number of pending bytes to be sent to a given peer")])]),t._v(" "),v("tr",[v("td",[t._v("p2p_num_txs")]),t._v(" "),v("td",[t._v("gauge")]),t._v(" "),v("td",[t._v("0.25.0")]),t._v(" "),v("td",[t._v("peer_id")]),t._v(" "),v("td",[t._v("number of transactions submitted by each peer_id")])]),t._v(" "),v("tr",[v("td",[t._v("p2p_pending_send_bytes")]),t._v(" "),v("td",[t._v("gauge")]),t._v(" "),v("td",[t._v("0.25.0")]),t._v(" "),v("td",[t._v("peer_id")]),t._v(" "),v("td",[t._v("amount of data pending to be sent to peer")])]),t._v(" "),v("tr",[v("td",[t._v("mempool_size")]),t._v(" "),v("td",[t._v("Gauge")]),t._v(" "),v("td",[t._v("0.21.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Number of uncommitted transactions")])]),t._v(" "),v("tr",[v("td",[t._v("mempool_tx_size_bytes")]),t._v(" "),v("td",[t._v("histogram")]),t._v(" "),v("td",[t._v("0.25.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("transaction sizes in bytes")])]),t._v(" "),v("tr",[v("td",[t._v("mempool_failed_txs")]),t._v(" "),v("td",[t._v("counter")]),t._v(" "),v("td",[t._v("0.25.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("number of failed transactions")])]),t._v(" "),v("tr",[v("td",[t._v("mempool_recheck_times")]),t._v(" "),v("td",[t._v("counter")]),t._v(" "),v("td",[t._v("0.25.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("number of transactions rechecked in the mempool")])]),t._v(" "),v("tr",[v("td",[t._v("state_block_processing_time")]),t._v(" "),v("td",[t._v("histogram")]),t._v(" "),v("td",[t._v("0.25.0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("time between BeginBlock and EndBlock in ms")])])])]),t._v(" "),v("h2",{attrs:{id:"useful-queries"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#useful-queries"}},[t._v("#")]),t._v(" Useful queries")]),t._v(" "),v("p",[t._v("Percentage of missing + byzantine validators:")]),t._v(" "),v("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"KChjb25zZW5zdXNcX2J5emFudGluZVxfdmFsaWRhdG9yc1xfcG93ZXIgKyBjb25zZW5zdXNcX21pc3NpbmdcX3ZhbGlkYXRvcnNcX3Bvd2VyKSAvIGNvbnNlbnN1c1xfdmFsaWRhdG9yc1xfcG93ZXIpICogMTAwCg=="}})],1)}),[],!1,null,null,null);_.default=d.exports}}]);
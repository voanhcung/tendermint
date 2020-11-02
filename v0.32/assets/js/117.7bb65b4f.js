(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{422:function(e,o,t){"use strict";t.r(o);var a=t(1),n=Object(a.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"byzantine-consensus-algorithm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#byzantine-consensus-algorithm"}}),e._v(" Byzantine Consensus Algorithm")]),e._v(" "),t("h2",{attrs:{id:"terms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#terms"}}),e._v(" Terms")]),e._v(" "),t("ul",[t("li",[e._v("The network is composed of optionally connected "),t("em",[e._v("nodes")]),e._v(". Nodes\ndirectly connected to a particular node are called "),t("em",[e._v("peers")]),e._v(".")]),e._v(" "),t("li",[e._v("The consensus process in deciding the next block (at some "),t("em",[e._v("height")]),e._v(" "),t("code",[e._v("H")]),e._v(") is composed of one or many "),t("em",[e._v("rounds")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("NewHeight")]),e._v(", "),t("code",[e._v("Propose")]),e._v(", "),t("code",[e._v("Prevote")]),e._v(", "),t("code",[e._v("Precommit")]),e._v(", and "),t("code",[e._v("Commit")]),e._v("\nrepresent state machine states of a round. (aka "),t("code",[e._v("RoundStep")]),e._v(' or\njust "step").')]),e._v(" "),t("li",[e._v("A node is said to be "),t("em",[e._v("at")]),e._v(" a given height, round, and step, or at\n"),t("code",[e._v("(H,R,S)")]),e._v(", or at "),t("code",[e._v("(H,R)")]),e._v(" in short to omit the step.")]),e._v(" "),t("li",[e._v("To "),t("em",[e._v("prevote")]),e._v(" or "),t("em",[e._v("precommit")]),e._v(" something means to broadcast a "),t("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/types#Vote",target:"_blank",rel:"noopener noreferrer"}},[e._v("prevote\nvote"),t("OutboundLink")],1),e._v("\nor "),t("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/types#FirstPrecommit",target:"_blank",rel:"noopener noreferrer"}},[e._v("first precommit\nvote"),t("OutboundLink")],1),e._v("\nfor something.")]),e._v(" "),t("li",[e._v("A vote "),t("em",[e._v("at")]),e._v(" "),t("code",[e._v("(H,R)")]),e._v(" is a vote signed with the bytes for "),t("code",[e._v("H")]),e._v(" and "),t("code",[e._v("R")]),e._v("\nincluded in its "),t("router-link",{attrs:{to:"/spec/blockchain/blockchain.html#vote"}},[e._v("sign-bytes")]),e._v(".")],1),e._v(" "),t("li",[t("em",[e._v("+2/3")]),e._v(' is short for "more than 2/3"')]),e._v(" "),t("li",[t("em",[e._v("1/3+")]),e._v(' is short for "1/3 or more"')]),e._v(" "),t("li",[e._v("A set of +2/3 of prevotes for a particular block or "),t("code",[e._v("<nil>")]),e._v(" at\n"),t("code",[e._v("(H,R)")]),e._v(" is called a "),t("em",[e._v("proof-of-lock-change")]),e._v(" or "),t("em",[e._v("PoLC")]),e._v(" for short.")])]),e._v(" "),t("h2",{attrs:{id:"state-machine-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state-machine-overview"}}),e._v(" State Machine Overview")]),e._v(" "),t("p",[e._v("At each height of the blockchain a round-based protocol is run to\ndetermine the next block. Each round is composed of three "),t("em",[e._v("steps")]),e._v("\n("),t("code",[e._v("Propose")]),e._v(", "),t("code",[e._v("Prevote")]),e._v(", and "),t("code",[e._v("Precommit")]),e._v("), along with two special steps\n"),t("code",[e._v("Commit")]),e._v(" and "),t("code",[e._v("NewHeight")]),e._v(".")]),e._v(" "),t("p",[e._v("In the optimal scenario, the order of steps is:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("NewHeight -> (Propose -> Prevote -> Precommit)+ -> Commit -> NewHeight ->...\n")])])]),t("p",[e._v("The sequence "),t("code",[e._v("(Propose -> Prevote -> Precommit)")]),e._v(" is called a "),t("em",[e._v("round")]),e._v(".\nThere may be more than one round required to commit a block at a given\nheight. Examples for why more rounds may be required include:")]),e._v(" "),t("ul",[t("li",[e._v("The designated proposer was not online.")]),e._v(" "),t("li",[e._v("The block proposed by the designated proposer was not valid.")]),e._v(" "),t("li",[e._v("The block proposed by the designated proposer did not propagate\nin time.")]),e._v(" "),t("li",[e._v("The block proposed was valid, but +2/3 of prevotes for the proposed\nblock were not received in time for enough validator nodes by the\ntime they reached the "),t("code",[e._v("Precommit")]),e._v(" step. Even though +2/3 of prevotes\nare necessary to progress to the next step, at least one validator\nmay have voted "),t("code",[e._v("<nil>")]),e._v(" or maliciously voted for something else.")]),e._v(" "),t("li",[e._v("The block proposed was valid, and +2/3 of prevotes were received for\nenough nodes, but +2/3 of precommits for the proposed block were not\nreceived for enough validator nodes.")])]),e._v(" "),t("p",[e._v("Some of these problems are resolved by moving onto the next round &\nproposer. Others are resolved by increasing certain round timeout\nparameters over each successive round.")]),e._v(" "),t("h2",{attrs:{id:"state-machine-diagram"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state-machine-diagram"}}),e._v(" State Machine Diagram")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("                         +-------------------------------------+\n                         v                                     |(Wait til `CommmitTime+timeoutCommit`)\n                   +-----------+                         +-----+-----+\n      +----------\x3e |  Propose  +--------------+          | NewHeight |\n      |            +-----------+              |          +-----------+\n      |                                       |                ^\n      |(Else, after timeoutPrecommit)         v                |\n+-----+-----+                           +-----------+          |\n| Precommit |  <------------------------+  Prevote  |          |\n+-----+-----+                           +-----------+          |\n      |(When +2/3 Precommits for block found)                  |\n      v                                                        |\n+--------------------------------------------------------------------+\n|  Commit                                                            |\n|                                                                    |\n|  * Set CommitTime = now;                                           |\n|  * Wait for block, then stage/save/commit block;                   |\n+--------------------------------------------------------------------+\n")])])]),t("h1",{attrs:{id:"background-gossip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background-gossip"}}),e._v(" Background Gossip")]),e._v(" "),t("p",[e._v("A node may not have a corresponding validator private key, but it\nnevertheless plays an active role in the consensus process by relaying\nrelevant meta-data, proposals, blocks, and votes to its peers. A node\nthat has the private keys of an active validator and is engaged in\nsigning votes is called a "),t("em",[e._v("validator-node")]),e._v(". All nodes (not just\nvalidator-nodes) have an associated state (the current height, round,\nand step) and work to make progress.")]),e._v(" "),t("p",[e._v("Between two nodes there exists a "),t("code",[e._v("Connection")]),e._v(", and multiplexed on top of\nthis connection are fairly throttled "),t("code",[e._v("Channel")]),e._v("s of information. An\nepidemic gossip protocol is implemented among some of these channels to\nbring peers up to speed on the most recent state of consensus. For\nexample,")]),e._v(" "),t("ul",[t("li",[e._v("Nodes gossip "),t("code",[e._v("PartSet")]),e._v(" parts of the current round's proposer's\nproposed block. A LibSwift inspired algorithm is used to quickly\nbroadcast blocks across the gossip network.")]),e._v(" "),t("li",[e._v("Nodes gossip prevote/precommit votes. A node "),t("code",[e._v("NODE_A")]),e._v(" that is ahead\nof "),t("code",[e._v("NODE_B")]),e._v(" can send "),t("code",[e._v("NODE_B")]),e._v(" prevotes or precommits for "),t("code",[e._v("NODE_B")]),e._v("'s\ncurrent (or future) round to enable it to progress forward.")]),e._v(" "),t("li",[e._v("Nodes gossip prevotes for the proposed PoLC (proof-of-lock-change)\nround if one is proposed.")]),e._v(" "),t("li",[e._v("Nodes gossip to nodes lagging in blockchain height with block\n"),t("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/types#Commit",target:"_blank",rel:"noopener noreferrer"}},[e._v("commits"),t("OutboundLink")],1),e._v("\nfor older blocks.")]),e._v(" "),t("li",[e._v("Nodes opportunistically gossip "),t("code",[e._v("HasVote")]),e._v(" messages to hint peers what\nvotes it already has.")]),e._v(" "),t("li",[e._v("Nodes broadcast their current state to all neighboring peers. (but\nis not gossiped further)")])]),e._v(" "),t("p",[e._v("There's more, but let's not get ahead of ourselves here.")]),e._v(" "),t("h2",{attrs:{id:"proposals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposals"}}),e._v(" Proposals")]),e._v(" "),t("p",[e._v("A proposal is signed and published by the designated proposer at each\nround. The proposer is chosen by a deterministic and non-choking round\nrobin selection algorithm that selects proposers in proportion to their\nvoting power (see\n"),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/types/validator_set.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("implementation"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("p",[e._v("A proposal at "),t("code",[e._v("(H,R)")]),e._v(" is composed of a block and an optional latest\n"),t("code",[e._v("PoLC-Round < R")]),e._v(" which is included iff the proposer knows of one. This\nhints the network to allow nodes to unlock (when safe) to ensure the\nliveness property.")]),e._v(" "),t("h2",{attrs:{id:"state-machine-spec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state-machine-spec"}}),e._v(" State Machine Spec")]),e._v(" "),t("h3",{attrs:{id:"propose-step-height-h-round-r"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#propose-step-height-h-round-r"}}),e._v(" Propose Step (height:H,round:R)")]),e._v(" "),t("p",[e._v("Upon entering "),t("code",[e._v("Propose")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("The designated proposer proposes a block at "),t("code",[e._v("(H,R)")]),e._v(".")])]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("Propose")]),e._v(" step ends:")]),e._v(" "),t("ul",[t("li",[e._v("After "),t("code",[e._v("timeoutProposeR")]),e._v(" after entering "),t("code",[e._v("Propose")]),e._v(". --\x3e goto\n"),t("code",[e._v("Prevote(H,R)")])]),e._v(" "),t("li",[e._v("After receiving proposal block and all prevotes at "),t("code",[e._v("PoLC-Round")]),e._v(". --\x3e\ngoto "),t("code",[e._v("Prevote(H,R)")])]),e._v(" "),t("li",[e._v("After "),t("a",{attrs:{href:"#common-exit-conditions"}},[e._v("common exit conditions")])])]),e._v(" "),t("h3",{attrs:{id:"prevote-step-height-h-round-r"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prevote-step-height-h-round-r"}}),e._v(" Prevote Step (height:H,round:R)")]),e._v(" "),t("p",[e._v("Upon entering "),t("code",[e._v("Prevote")]),e._v(", each validator broadcasts its prevote vote.")]),e._v(" "),t("ul",[t("li",[e._v("First, if the validator is locked on a block since "),t("code",[e._v("LastLockRound")]),e._v("\nbut now has a PoLC for something else at round "),t("code",[e._v("PoLC-Round")]),e._v(" where\n"),t("code",[e._v("LastLockRound < PoLC-Round < R")]),e._v(", then it unlocks.")]),e._v(" "),t("li",[e._v("If the validator is still locked on a block, it prevotes that.")]),e._v(" "),t("li",[e._v("Else, if the proposed block from "),t("code",[e._v("Propose(H,R)")]),e._v(" is good, it\nprevotes that.")]),e._v(" "),t("li",[e._v("Else, if the proposal is invalid or wasn't received on time, it\nprevotes "),t("code",[e._v("<nil>")]),e._v(".")])]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("Prevote")]),e._v(" step ends:")]),e._v(" "),t("ul",[t("li",[e._v("After +2/3 prevotes for a particular block or "),t("code",[e._v("<nil>")]),e._v(". --\x3e; goto\n"),t("code",[e._v("Precommit(H,R)")])]),e._v(" "),t("li",[e._v("After "),t("code",[e._v("timeoutPrevote")]),e._v(" after receiving any +2/3 prevotes. --\x3e goto\n"),t("code",[e._v("Precommit(H,R)")])]),e._v(" "),t("li",[e._v("After "),t("a",{attrs:{href:"#common-exit-conditions"}},[e._v("common exit conditions")])])]),e._v(" "),t("h3",{attrs:{id:"precommit-step-height-h-round-r"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#precommit-step-height-h-round-r"}}),e._v(" Precommit Step (height:H,round:R)")]),e._v(" "),t("p",[e._v("Upon entering "),t("code",[e._v("Precommit")]),e._v(", each validator broadcasts its precommit vote.")]),e._v(" "),t("ul",[t("li",[e._v("If the validator has a PoLC at "),t("code",[e._v("(H,R)")]),e._v(" for a particular block "),t("code",[e._v("B")]),e._v(", it\n(re)locks (or changes lock to) and precommits "),t("code",[e._v("B")]),e._v(" and sets\n"),t("code",[e._v("LastLockRound = R")]),e._v(".")]),e._v(" "),t("li",[e._v("Else, if the validator has a PoLC at "),t("code",[e._v("(H,R)")]),e._v(" for "),t("code",[e._v("<nil>")]),e._v(", it unlocks\nand precommits "),t("code",[e._v("<nil>")]),e._v(".")]),e._v(" "),t("li",[e._v("Else, it keeps the lock unchanged and precommits "),t("code",[e._v("<nil>")]),e._v(".")])]),e._v(" "),t("p",[e._v("A precommit for "),t("code",[e._v("<nil>")]),e._v(' means "I didn’t see a PoLC for this round, but I\ndid get +2/3 prevotes and waited a bit".')]),e._v(" "),t("p",[e._v("The Precommit step ends:")]),e._v(" "),t("ul",[t("li",[e._v("After +2/3 precommits for "),t("code",[e._v("<nil>")]),e._v(". --\x3e goto "),t("code",[e._v("Propose(H,R+1)")])]),e._v(" "),t("li",[e._v("After "),t("code",[e._v("timeoutPrecommit")]),e._v(" after receiving any +2/3 precommits. --\x3e goto\n"),t("code",[e._v("Propose(H,R+1)")])]),e._v(" "),t("li",[e._v("After "),t("a",{attrs:{href:"#common-exit-conditions"}},[e._v("common exit conditions")])])]),e._v(" "),t("h3",{attrs:{id:"common-exit-conditions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-exit-conditions"}}),e._v(" Common exit conditions")]),e._v(" "),t("ul",[t("li",[e._v("After +2/3 precommits for a particular block. --\x3e goto\n"),t("code",[e._v("Commit(H)")])]),e._v(" "),t("li",[e._v("After any +2/3 prevotes received at "),t("code",[e._v("(H,R+x)")]),e._v(". --\x3e goto\n"),t("code",[e._v("Prevote(H,R+x)")])]),e._v(" "),t("li",[e._v("After any +2/3 precommits received at "),t("code",[e._v("(H,R+x)")]),e._v(". --\x3e goto\n"),t("code",[e._v("Precommit(H,R+x)")])])]),e._v(" "),t("h3",{attrs:{id:"commit-step-height-h"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commit-step-height-h"}}),e._v(" Commit Step (height:H)")]),e._v(" "),t("ul",[t("li",[e._v("Set "),t("code",[e._v("CommitTime = now()")])]),e._v(" "),t("li",[e._v("Wait until block is received. --\x3e goto "),t("code",[e._v("NewHeight(H+1)")])])]),e._v(" "),t("h3",{attrs:{id:"newheight-step-height-h"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#newheight-step-height-h"}}),e._v(" NewHeight Step (height:H)")]),e._v(" "),t("ul",[t("li",[e._v("Move "),t("code",[e._v("Precommits")]),e._v(" to "),t("code",[e._v("LastCommit")]),e._v(" and increment height.")]),e._v(" "),t("li",[e._v("Set "),t("code",[e._v("StartTime = CommitTime+timeoutCommit")])]),e._v(" "),t("li",[e._v("Wait until "),t("code",[e._v("StartTime")]),e._v(" to receive straggler commits. --\x3e goto\n"),t("code",[e._v("Propose(H,0)")])])]),e._v(" "),t("h2",{attrs:{id:"proofs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proofs"}}),e._v(" Proofs")]),e._v(" "),t("h3",{attrs:{id:"proof-of-safety"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proof-of-safety"}}),e._v(" Proof of Safety")]),e._v(" "),t("p",[e._v("Assume that at most -1/3 of the voting power of validators is byzantine.\nIf a validator commits block "),t("code",[e._v("B")]),e._v(" at round "),t("code",[e._v("R")]),e._v(", it's because it saw +2/3\nof precommits at round "),t("code",[e._v("R")]),e._v(". This implies that 1/3+ of honest nodes are\nstill locked at round "),t("code",[e._v("R' > R")]),e._v(". These locked validators will remain\nlocked until they see a PoLC at "),t("code",[e._v("R' > R")]),e._v(", but this won't happen because\n1/3+ are locked and honest, so at most -2/3 are available to vote for\nanything other than "),t("code",[e._v("B")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"proof-of-liveness"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proof-of-liveness"}}),e._v(" Proof of Liveness")]),e._v(" "),t("p",[e._v("If 1/3+ honest validators are locked on two different blocks from\ndifferent rounds, a proposers' "),t("code",[e._v("PoLC-Round")]),e._v(" will eventually cause nodes\nlocked from the earlier round to unlock. Eventually, the designated\nproposer will be one that is aware of a PoLC at the later round. Also,\n"),t("code",[e._v("timeoutProposalR")]),e._v(" increments with round "),t("code",[e._v("R")]),e._v(', while the size of a\nproposal are capped, so eventually the network is able to "fully gossip"\nthe whole proposal (e.g. the block & PoLC).')]),e._v(" "),t("h3",{attrs:{id:"proof-of-fork-accountability"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proof-of-fork-accountability"}}),e._v(" Proof of Fork Accountability")]),e._v(" "),t("p",[e._v("Define the JSet (justification-vote-set) at height "),t("code",[e._v("H")]),e._v(" of a validator\n"),t("code",[e._v("V1")]),e._v(" to be all the votes signed by the validator at "),t("code",[e._v("H")]),e._v(" along with\njustification PoLC prevotes for each lock change. For example, if "),t("code",[e._v("V1")]),e._v("\nsigned the following precommits: "),t("code",[e._v("Precommit(B1 @ round 0)")]),e._v(",\n"),t("code",[e._v("Precommit(<nil> @ round 1)")]),e._v(", "),t("code",[e._v("Precommit(B2 @ round 4)")]),e._v(" (note that no\nprecommits were signed for rounds 2 and 3, and that's ok),\n"),t("code",[e._v("Precommit(B1 @ round 0)")]),e._v(" must be justified by a PoLC at round 0, and\n"),t("code",[e._v("Precommit(B2 @ round 4)")]),e._v(" must be justified by a PoLC at round 4; but\nthe precommit for "),t("code",[e._v("<nil>")]),e._v(" at round 1 is not a lock-change by definition\nso the JSet for "),t("code",[e._v("V1")]),e._v(" need not include any prevotes at round 1, 2, or 3\n(unless "),t("code",[e._v("V1")]),e._v(" happened to have prevoted for those rounds).")]),e._v(" "),t("p",[e._v("Further, define the JSet at height "),t("code",[e._v("H")]),e._v(" of a set of validators "),t("code",[e._v("VSet")]),e._v(" to\nbe the union of the JSets for each validator in "),t("code",[e._v("VSet")]),e._v(". For a given\ncommit by honest validators at round "),t("code",[e._v("R")]),e._v(" for block "),t("code",[e._v("B")]),e._v(" we can construct\na JSet to justify the commit for "),t("code",[e._v("B")]),e._v(" at "),t("code",[e._v("R")]),e._v(". We say that a JSet\n"),t("em",[e._v("justifies")]),e._v(" a commit at "),t("code",[e._v("(H,R)")]),e._v(" if all the committers (validators in the\ncommit-set) are each justified in the JSet with no duplicitous vote\nsignatures (by the committers).")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Lemma")]),e._v(": When a fork is detected by the existence of two\nconflicting "),t("router-link",{attrs:{to:"/spec/blockchain/blockchain.html#commit"}},[e._v("commits")]),e._v(", the\nunion of the JSets for both commits (if they can be compiled) must\ninclude double-signing by at least 1/3+ of the validator set.\n"),t("strong",[e._v("Proof")]),e._v(": The commit cannot be at the same round, because that\nwould immediately imply double-signing by 1/3+. Take the union of\nthe JSets of both commits. If there is no double-signing by at least\n1/3+ of the validator set in the union, then no honest validator\ncould have precommitted any different block after the first commit.\nYet, +2/3 did. Reductio ad absurdum.")],1)]),e._v(" "),t("p",[e._v("As a corollary, when there is a fork, an external process can determine\nthe blame by requiring each validator to justify all of its round votes.\nEither we will find 1/3+ who cannot justify at least one of their votes,\nand/or, we will find 1/3+ who had double-signed.")]),e._v(" "),t("h3",{attrs:{id:"alternative-algorithm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alternative-algorithm"}}),e._v(" Alternative algorithm")]),e._v(" "),t("p",[e._v('Alternatively, we can take the JSet of a commit to be the "full commit".\nThat is, if light clients and validators do not consider a block to be\ncommitted unless the JSet of the commit is also known, then we get the\ndesirable property that if there ever is a fork (e.g. there are two\nconflicting "full commits"), then 1/3+ of the validators are immediately\npunishable for double-signing.')]),e._v(" "),t("p",[e._v("There are many ways to ensure that the gossip network efficiently share\nthe JSet of a commit. One solution is to add a new message type that\ntells peers that this node has (or does not have) a +2/3 majority for B\n(or) at (H,R), and a bitarray of which votes contributed towards that\nmajority. Peers can react by responding with appropriate votes.")]),e._v(" "),t("p",[e._v("We will implement such an algorithm for the next iteration of the\nTendermint consensus protocol.")]),e._v(" "),t("p",[e._v("Other potential improvements include adding more data in votes such as\nthe last known PoLC round that caused a lock change, and the last voted\nround/step (or, we may require that validators not skip any votes). This\nmay make JSet verification/gossip logic easier to implement.")]),e._v(" "),t("h3",{attrs:{id:"censorship-attacks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#censorship-attacks"}}),e._v(" Censorship Attacks")]),e._v(" "),t("p",[e._v("Due to the definition of a block\n"),t("router-link",{attrs:{to:"/tendermint-core/validators.html#commit-a-block"}},[e._v("commit")]),e._v(", any 1/3+ coalition of\nvalidators can halt the blockchain by not broadcasting their votes. Such\na coalition can also censor particular transactions by rejecting blocks\nthat include these transactions, though this would result in a\nsignificant proportion of block proposals to be rejected, which would\nslow down the rate of block commits of the blockchain, reducing its\nutility and value. The malicious coalition might also broadcast votes in\na trickle so as to grind blockchain block commits to a near halt, or\nengage in any combination of these attacks.")],1),e._v(" "),t("p",[e._v("If a global active adversary were also involved, it can partition the\nnetwork in such a way that it may appear that the wrong subset of\nvalidators were responsible for the slowdown. This is not just a\nlimitation of Tendermint, but rather a limitation of all consensus\nprotocols whose network is potentially controlled by an active\nadversary.")]),e._v(" "),t("h3",{attrs:{id:"overcoming-forks-and-censorship-attacks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overcoming-forks-and-censorship-attacks"}}),e._v(" Overcoming Forks and Censorship Attacks")]),e._v(" "),t("p",[e._v("For these types of attacks, a subset of the validators through external\nmeans should coordinate to sign a reorg-proposal that chooses a fork\n(and any evidence thereof) and the initial subset of validators with\ntheir signatures. Validators who sign such a reorg-proposal forego its\ncollateral on all other forks. Clients should verify the signatures on\nthe reorg-proposal, verify any evidence, and make a judgement or prompt\nthe end-user for a decision. For example, a phone wallet app may prompt\nthe user with a security warning, while a refrigerator may accept any\nreorg-proposal signed by +1/2 of the original validators.")]),e._v(" "),t("p",[e._v("No non-synchronous Byzantine fault-tolerant algorithm can come to\nconsensus when 1/3+ of validators are dishonest, yet a fork assumes that\n1/3+ of validators have already been dishonest by double-signing or\nlock-changing without justification. So, signing the reorg-proposal is a\ncoordination problem that cannot be solved by any non-synchronous\nprotocol (i.e. automatically, and without making assumptions about the\nreliability of the underlying network). It must be provided by means\nexternal to the weakly-synchronous Tendermint consensus algorithm. For\nnow, we leave the problem of reorg-proposal coordination to human\ncoordination via internet media. Validators must take care to ensure\nthat there are no significant network partitions, to avoid situations\nwhere two conflicting reorg-proposals are signed.")]),e._v(" "),t("p",[e._v("Assuming that the external coordination medium and protocol is robust,\nit follows that forks are less of a concern than "),t("a",{attrs:{href:"#censorship-attacks"}},[e._v("censorship\nattacks")]),e._v(".")])])}),[],!1,null,null,null);o.default=n.exports}}]);
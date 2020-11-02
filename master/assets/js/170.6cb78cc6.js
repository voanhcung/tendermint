(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{653:function(t,e,v){"use strict";v.r(e);var _=v(1),o=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"proposer-selection-procedure-in-tendermint"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#proposer-selection-procedure-in-tendermint"}},[t._v("#")]),t._v(" Proposer selection procedure in Tendermint")]),t._v(" "),v("p",[t._v("This document specifies the Proposer Selection Procedure that is used in Tendermint to choose a round proposer.\nAs Tendermint is “leader-based protocol”, the proposer selection is critical for its correct functioning.")]),t._v(" "),v("p",[t._v("At a given block height, the proposer selection algorithm runs with the same validator set at each round .\nBetween heights, an updated validator set may be specified by the application as part of the ABCIResponses' EndBlock.")]),t._v(" "),v("h2",{attrs:{id:"requirements-for-proposer-selection"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#requirements-for-proposer-selection"}},[t._v("#")]),t._v(" Requirements for Proposer Selection")]),t._v(" "),v("p",[t._v("This sections covers the requirements with Rx being mandatory and Ox optional requirements.\nThe following requirements must be met by the Proposer Selection procedure:")]),t._v(" "),v("h3",{attrs:{id:"r1-determinism"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#r1-determinism"}},[t._v("#")]),t._v(" R1: Determinism")]),t._v(" "),v("p",[t._v("Given a validator set "),v("code",[t._v("V")]),t._v(", and two honest validators "),v("code",[t._v("p")]),t._v(" and "),v("code",[t._v("q")]),t._v(", for each height "),v("code",[t._v("h")]),t._v(" and each round "),v("code",[t._v("r")]),t._v(" the following must hold:")]),t._v(" "),v("p",[v("code",[t._v("proposer_p(h,r) = proposer_q(h,r)")])]),t._v(" "),v("p",[t._v("where "),v("code",[t._v("proposer_p(h,r)")]),t._v(" is the proposer returned by the Proposer Selection Procedure at process "),v("code",[t._v("p")]),t._v(", at height "),v("code",[t._v("h")]),t._v(" and round "),v("code",[t._v("r")]),t._v(".")]),t._v(" "),v("h3",{attrs:{id:"r2-fairness"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#r2-fairness"}},[t._v("#")]),t._v(" R2: Fairness")]),t._v(" "),v("p",[t._v("Given a validator set with total voting power P and a sequence S of elections. In any sub-sequence of S with length C*P, a validator v must be elected as proposer P/VP(v) times, i.e. with frequency:")]),t._v(" "),v("p",[t._v("f(v) ~ VP(v) / P")]),t._v(" "),v("p",[t._v("where C is a tolerance factor for validator set changes with following values:")]),t._v(" "),v("ul",[v("li",[t._v("C == 1 if there are no validator set changes")]),t._v(" "),v("li",[t._v("C ~ k when there are validator changes")])]),t._v(" "),v("p",[v("em",[t._v("[this needs more work]")])]),t._v(" "),v("h2",{attrs:{id:"basic-algorithm"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#basic-algorithm"}},[t._v("#")]),t._v(" Basic Algorithm")]),t._v(" "),v("p",[t._v("At its core, the proposer selection procedure uses a weighted round-robin algorithm.")]),t._v(" "),v("p",[t._v("A model that gives a good intuition on how/ why the selection algorithm works and it is fair is that of a priority queue. The validators move ahead in this queue according to their voting power (the higher the voting power the faster a validator moves towards the head of the queue). When the algorithm runs the following happens:")]),t._v(" "),v("ul",[v("li",[t._v('all validators move "ahead" according to their powers: for each validator, increase the priority by the voting power')]),t._v(" "),v("li",[t._v("first in the queue becomes the proposer: select the validator with highest priority")]),t._v(" "),v("li",[t._v("move the proposer back in the queue: decrease the proposer's priority by the total voting power")])]),t._v(" "),v("p",[t._v("Notation:")]),t._v(" "),v("ul",[v("li",[t._v("vset - the validator set")]),t._v(" "),v("li",[t._v("n - the number of validators")]),t._v(" "),v("li",[t._v("VP(i) - voting power of validator i")]),t._v(" "),v("li",[t._v("A(i) - accumulated priority for validator i")]),t._v(" "),v("li",[t._v("P - total voting power of set")]),t._v(" "),v("li",[t._v("avg - average of all validator priorities")]),t._v(" "),v("li",[t._v("prop - proposer")])]),t._v(" "),v("p",[t._v("Simple view at the Selection Algorithm:")]),t._v(" "),v("code-block",{staticClass:"codeblock",attrs:{language:"md",base64:"ICAgIGRlZiBQcm9wb3NlclNlbGVjdGlvbiAodnNldCk6CgogICAgICAgIC8vIGNvbXB1dGUgcHJpb3JpdGllcyBhbmQgZWxlY3QgcHJvcG9zZXIKICAgICAgICBmb3IgZWFjaCB2YWxpZGF0b3IgaSBpbiB2c2V0OgogICAgICAgICAgICBBKGkpICs9IFZQKGkpCiAgICAgICAgcHJvcCA9IG1heChBKQogICAgICAgIEEocHJvcCkgLT0gUAo="}}),t._v(" "),v("h2",{attrs:{id:"stable-set"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#stable-set"}},[t._v("#")]),t._v(" Stable Set")]),t._v(" "),v("p",[t._v("Consider the validator set:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Validator")]),t._v(" "),v("th",[t._v("p1")]),t._v(" "),v("th",[t._v("p2")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("VP")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("3")])])])]),t._v(" "),v("p",[t._v("Assuming no validator changes, the following table shows the proposer priority computation over a few runs. Four runs of the selection procedure are shown, starting with the 5th the same values are computed.\nEach row shows the priority queue and the process place in it. The proposer is the closest to the head, the rightmost validator. As priorities are updated, the validators move right in the queue. The proposer moves left as its priority is reduced after election.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Priority   Run")]),t._v(" "),v("th",[t._v("-2")]),t._v(" "),v("th",[t._v("-1")]),t._v(" "),v("th",[t._v("0")]),t._v(" "),v("th",[t._v("1")]),t._v(" "),v("th",[t._v("2")]),t._v(" "),v("th",[t._v("3")]),t._v(" "),v("th",[t._v("4")]),t._v(" "),v("th",[t._v("5")]),t._v(" "),v("th",[t._v("Alg step")])])]),t._v(" "),v("tbody",[v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1,p2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Initialized to 0")])]),t._v(" "),v("tr",[v("td",[t._v("run 1")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A(i)+=VP(i)")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A(p2)-= P")])]),t._v(" "),v("tr",[v("td",[t._v("run 2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1,p2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A(i)+=VP(i)")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A(p1)-= P")])]),t._v(" "),v("tr",[v("td",[t._v("run 3")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td",[t._v("A(i)+=VP(i)")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A(p2)-= P")])]),t._v(" "),v("tr",[v("td",[t._v("run 4")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A(i)+=VP(i)")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1,p2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A(p2)-= P")])])])]),t._v(" "),v("p",[t._v("It can be shown that:")]),t._v(" "),v("ul",[v("li",[t._v("At the end of each run k+1 the sum of the priorities is the same as at end of run k. If a new set's priorities are initialized to 0 then the sum of priorities will be 0 at each run while there are no changes.")]),t._v(" "),v("li",[t._v("The max distance between priorites is (n-1) "),v("em",[t._v("P.")]),t._v("[formal proof not finished]*")])]),t._v(" "),v("h2",{attrs:{id:"validator-set-changes"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#validator-set-changes"}},[t._v("#")]),t._v(" Validator Set Changes")]),t._v(" "),v("p",[t._v("Between proposer selection runs the validator set may change. Some changes have implications on the proposer election.")]),t._v(" "),v("h3",{attrs:{id:"voting-power-change"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#voting-power-change"}},[t._v("#")]),t._v(" Voting Power Change")]),t._v(" "),v("p",[t._v("Consider again the earlier example and assume that the voting power of p1 is changed to 4:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Validator")]),t._v(" "),v("th",[t._v("p1")]),t._v(" "),v("th",[t._v("p2")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("VP")]),t._v(" "),v("td",[t._v("4")]),t._v(" "),v("td",[t._v("3")])])])]),t._v(" "),v("p",[t._v("Let's also assume that before this change the proposer priorites were as shown in first row (last run). As it can be seen, the selection could run again, without changes, as before.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Priority   Run")]),t._v(" "),v("th",[t._v("-2")]),t._v(" "),v("th",[t._v("-1")]),t._v(" "),v("th",[t._v("0")]),t._v(" "),v("th",[t._v("1")]),t._v(" "),v("th",[t._v("2")]),t._v(" "),v("th",[t._v("Comment")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("last run")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td",[v("strong",[t._v("update VP(p1)")])])]),t._v(" "),v("tr",[v("td",[t._v("next run")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td",[t._v("A(i)+=VP(i)")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td",[t._v("A(p1)-= P")])])])]),t._v(" "),v("p",[t._v("However, when a validator changes power from a high to a low value, some other validator remain far back in the queue for a long time. This scenario is considered again in the Proposer Priority Range section.")]),t._v(" "),v("p",[t._v("As before:")]),t._v(" "),v("ul",[v("li",[t._v("At the end of each run k+1 the sum of the priorities is the same as at run k.")]),t._v(" "),v("li",[t._v("The max distance between priorites is (n-1) * P.")])]),t._v(" "),v("h3",{attrs:{id:"validator-removal"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#validator-removal"}},[t._v("#")]),t._v(" Validator Removal")]),t._v(" "),v("p",[t._v("Consider a new example with set:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Validator")]),t._v(" "),v("th",[t._v("p1")]),t._v(" "),v("th",[t._v("p2")]),t._v(" "),v("th",[t._v("p3")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("VP")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("3")])])])]),t._v(" "),v("p",[t._v("Let's assume that after the last run the proposer priorities were as shown in first row with their sum being 0. After p2 is removed, at the end of next proposer selection run (penultimate row) the sum of priorities is -2 (minus the priority of the removed process).")]),t._v(" "),v("p",[t._v("The procedure could continue without modifications. However, after a sufficiently large number of modifications in validator set, the priority values would migrate towards maximum or minimum allowed values causing truncations due to overflow detection.\nFor this reason, the selection procedure adds another "),v("strong",[t._v("new step")]),t._v(" that centers the current priority values such that the priority sum remains close to 0.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Priority   Run")]),t._v(" "),v("th",[t._v("-3")]),t._v(" "),v("th",[t._v("-2")]),t._v(" "),v("th",[t._v("-1")]),t._v(" "),v("th",[t._v("0")]),t._v(" "),v("th",[t._v("1")]),t._v(" "),v("th",[t._v("2")]),t._v(" "),v("th",[t._v("4")]),t._v(" "),v("th",[t._v("Comment")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("last run")]),t._v(" "),v("td",[t._v("p3")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td"),t._v(" "),v("td",[v("strong",[t._v("remove p2")])])]),t._v(" "),v("tr",[v("td",[t._v("nextrun")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("new step")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p3")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A(i) -= avg, avg = -1")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p3")]),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A(i)+=VP(i)")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p3")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A(p1)-= P")])])])]),t._v(" "),v("p",[t._v("The modified selection algorithm is:")]),t._v(" "),v("code-block",{staticClass:"codeblock",attrs:{language:"md",base64:"ICAgIGRlZiBQcm9wb3NlclNlbGVjdGlvbiAodnNldCk6CgogICAgICAgIC8vIGNlbnRlciBwcmlvcml0aWVzIGFyb3VuZCB6ZXJvCiAgICAgICAgYXZnID0gc3VtKEEoaSkgZm9yIGkgaW4gdnNldCkvbGVuKHZzZXQpCiAgICAgICAgZm9yIGVhY2ggdmFsaWRhdG9yIGkgaW4gdnNldDoKICAgICAgICAgICAgQShpKSAtPSBhdmcKCiAgICAgICAgLy8gY29tcHV0ZSBwcmlvcml0aWVzIGFuZCBlbGVjdCBwcm9wb3NlcgogICAgICAgIGZvciBlYWNoIHZhbGlkYXRvciBpIGluIHZzZXQ6CiAgICAgICAgICAgIEEoaSkgKz0gVlAoaSkKICAgICAgICBwcm9wID0gbWF4KEEpCiAgICAgICAgQShwcm9wKSAtPSBQCg=="}}),t._v(" "),v("p",[t._v("Observations:")]),t._v(" "),v("ul",[v("li",[t._v("The sum of priorities is now close to 0. Due to integer division the sum is an integer in (-n, n), where n is the number of validators.")])]),t._v(" "),v("h3",{attrs:{id:"new-validator"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#new-validator"}},[t._v("#")]),t._v(" New Validator")]),t._v(" "),v("p",[t._v("When a new validator is added, same problem as the one described for removal appears, the sum of priorities in the new set is not zero. This is fixed with the centering step introduced above.")]),t._v(" "),v("p",[t._v('One other issue that needs to be addressed is the following. A validator V that has just been elected is moved to the end of the queue. If the validator set is large and/ or other validators have significantly higher power, V will have to wait many runs to be elected. If V removes and re-adds itself to the set, it would make a significant (albeit unfair) "jump" ahead in the queue.')]),t._v(" "),v("p",[t._v("In order to prevent this, when a new validator is added, its initial priority is set to:")]),t._v(" "),v("code-block",{staticClass:"codeblock",attrs:{language:"md",base64:"ICAgIEEoVikgPSAtMS4xMjUgKiAgUAo="}}),t._v(" "),v("p",[t._v("where P is the total voting power of the set including V.")]),t._v(" "),v("p",[t._v("Curent implementation uses the penalty factor of 1.125 because it provides a small punishment that is efficient to calculate. See "),v("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/2785#discussion_r235038971",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),v("OutboundLink")],1),t._v(" for more details.")]),t._v(" "),v("p",[t._v("If we consider the validator set where p3 has just been added:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Validator")]),t._v(" "),v("th",[t._v("p1")]),t._v(" "),v("th",[t._v("p2")]),t._v(" "),v("th",[t._v("p3")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("VP")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",[t._v("8")])])])]),t._v(" "),v("p",[t._v("then p3 will start with proposer priority:")]),t._v(" "),v("code-block",{staticClass:"codeblock",attrs:{language:"md",base64:"ICAgIEEocDMpID0gLTEuMTI1ICogKDEgKyAzICsgOCkgfiAtMTMK"}}),t._v(" "),v("p",[t._v("Note that since current computation uses integer division there is penalty loss when sum of the voting power is less than 8.")]),t._v(" "),v("p",[t._v("In the next run, p3 will still be ahead in the queue, elected as proposer and moved back in the queue.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Priority   Run")]),t._v(" "),v("th",[t._v("-13")]),t._v(" "),v("th",[t._v("-9")]),t._v(" "),v("th",[t._v("-5")]),t._v(" "),v("th",[t._v("-2")]),t._v(" "),v("th",[t._v("-1")]),t._v(" "),v("th",[t._v("0")]),t._v(" "),v("th",[t._v("1")]),t._v(" "),v("th",[t._v("2")]),t._v(" "),v("th",[t._v("5")]),t._v(" "),v("th",[t._v("6")]),t._v(" "),v("th",[t._v("7")]),t._v(" "),v("th",[t._v("Alg step")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("last run")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[v("strong",[t._v("add p3")])])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("p3")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A(p3) = -4")])]),t._v(" "),v("tr",[v("td",[t._v("next run")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p3")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A(i) -= avg, avg = -4")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p3")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td",[t._v("A(i)+=VP(i)")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p3")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A(p1)-=P")])])])]),t._v(" "),v("h2",{attrs:{id:"proposer-priority-range"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#proposer-priority-range"}},[t._v("#")]),t._v(" Proposer Priority Range")]),t._v(" "),v("p",[t._v("With the introduction of centering, some interesting cases occur. Low power validators that bind early in a set that includes high power validator(s) benefit from subsequent additions to the set. This is because these early validators run through more right shift operations during centering, operations that increase their priority.")]),t._v(" "),v("p",[t._v("As an example, consider the set where p2 is added after p1, with priority -1.125 * 80k = -90k. After the selection procedure runs once:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Validator")]),t._v(" "),v("th",[t._v("p1")]),t._v(" "),v("th",[t._v("p2")]),t._v(" "),v("th",[t._v("Comment")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("VP")]),t._v(" "),v("td",[t._v("80k")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("A")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("-90k")]),t._v(" "),v("td",[v("strong",[t._v("added p2")])])]),t._v(" "),v("tr",[v("td",[t._v("A")]),t._v(" "),v("td",[t._v("-45k")]),t._v(" "),v("td",[t._v("45k")]),t._v(" "),v("td",[v("strong",[t._v("run selection")])])])])]),t._v(" "),v("p",[t._v("Then execute the following steps:")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("Add a new validator p3:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Validator")]),t._v(" "),v("th",[t._v("p1")]),t._v(" "),v("th",[t._v("p2")]),t._v(" "),v("th",[t._v("p3")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("VP")]),t._v(" "),v("td",[t._v("80k")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",[t._v("10")])])])])]),t._v(" "),v("li",[v("p",[t._v("Run selection once. The notation '..p'/'p..' means very small deviations compared to column priority.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Priority  Run")]),t._v(" "),v("th",[t._v("-90k..")]),t._v(" "),v("th",[t._v("-60k")]),t._v(" "),v("th",[t._v("-45k")]),t._v(" "),v("th",[t._v("-15k")]),t._v(" "),v("th",[t._v("0")]),t._v(" "),v("th",[t._v("45k")]),t._v(" "),v("th",[t._v("75k")]),t._v(" "),v("th",[t._v("155k")]),t._v(" "),v("th",[t._v("Comment")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("last run")]),t._v(" "),v("td",[t._v("p3")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[v("strong",[t._v("added p3")])])]),t._v(" "),v("tr",[v("td",[t._v("next run")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("em",[t._v("right_shift")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p3")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A(i) -= avg,avg=-30k")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("..p3")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("..p2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1")]),t._v(" "),v("td",[t._v("A(i)+=VP(i)")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("..p3")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("..p2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("p1..")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A(p1)-=P, P=80k+20")])])])])]),t._v(" "),v("li",[v("p",[t._v("Remove p1 and run selection once:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Validator")]),t._v(" "),v("th",[t._v("p3")]),t._v(" "),v("th",[t._v("p2")]),t._v(" "),v("th",[t._v("Comment")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("VP")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("A")]),t._v(" "),v("td",[t._v("-60k")]),t._v(" "),v("td",[t._v("-15k")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("A")]),t._v(" "),v("td",[t._v("-22.5k")]),t._v(" "),v("td",[t._v("22.5k")]),t._v(" "),v("td",[v("strong",[t._v("run selection")])])])])])])]),t._v(" "),v("p",[t._v("At this point, while the total voting power is 20, the distance between priorities is 45k. It will take 4500 runs for p3 to catch up with p2.")]),t._v(" "),v("p",[t._v("In order to prevent these types of scenarios, the selection algorithm performs scaling of priorities such that the difference between min and max values is smaller than two times the total voting power.")]),t._v(" "),v("p",[t._v("The modified selection algorithm is:")]),t._v(" "),v("code-block",{staticClass:"codeblock",attrs:{language:"md",base64:"ICAgIGRlZiBQcm9wb3NlclNlbGVjdGlvbiAodnNldCk6CgogICAgICAgIC8vIHNjYWxlIHRoZSBwcmlvcml0eSB2YWx1ZXMKICAgICAgICBkaWZmID0gbWF4KEEpLW1pbihBKQogICAgICAgIHRocmVzaG9sZCA9IDIgKiBQCiAgICAgaWYgIGRpZmYgJmd0OyB0aHJlc2hvbGQ6CiAgICAgICAgICAgIHNjYWxlID0gZGlmZi90aHJlc2hvbGQKICAgICAgICAgICAgZm9yIGVhY2ggdmFsaWRhdG9yIGkgaW4gdnNldDoKICAgICAgICAgIEEoaSkgPSBBKGkpL3NjYWxlCgogICAgICAgIC8vIGNlbnRlciBwcmlvcml0aWVzIGFyb3VuZCB6ZXJvCiAgICAgICAgYXZnID0gc3VtKEEoaSkgZm9yIGkgaW4gdnNldCkvbGVuKHZzZXQpCiAgICAgICAgZm9yIGVhY2ggdmFsaWRhdG9yIGkgaW4gdnNldDoKICAgICAgICAgICAgQShpKSAtPSBhdmcKCiAgICAgICAgLy8gY29tcHV0ZSBwcmlvcml0aWVzIGFuZCBlbGVjdCBwcm9wb3NlcgogICAgICAgIGZvciBlYWNoIHZhbGlkYXRvciBpIGluIHZzZXQ6CiAgICAgICAgICAgIEEoaSkgKz0gVlAoaSkKICAgICAgICBwcm9wID0gbWF4KEEpCiAgICAgICAgQShwcm9wKSAtPSBQCg=="}}),t._v(" "),v("p",[t._v("Observations:")]),t._v(" "),v("ul",[v("li",[t._v("With this modification, the maximum distance between priorites becomes 2 * P.")])]),t._v(" "),v("p",[t._v("Note also that even during steady state the priority range may increase beyond 2 * P. The scaling introduced here  helps to keep the range bounded.")]),t._v(" "),v("h2",{attrs:{id:"wrinkles"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#wrinkles"}},[t._v("#")]),t._v(" Wrinkles")]),t._v(" "),v("h3",{attrs:{id:"validator-power-overflow-conditions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#validator-power-overflow-conditions"}},[t._v("#")]),t._v(" Validator Power Overflow Conditions")]),t._v(" "),v("p",[t._v("The validator voting power is a positive number stored as an int64. When a validator is added the "),v("code",[t._v("1.125 * P")]),t._v(" computation must not overflow. As a consequence the code handling validator updates (add and update) checks for overflow conditions making sure the total voting power is never larger than the largest int64 "),v("code",[t._v("MAX")]),t._v(", with the property that "),v("code",[t._v("1.125 * MAX")]),t._v(" is still in the bounds of int64. Fatal error is return when overflow condition is detected.")]),t._v(" "),v("h3",{attrs:{id:"proposer-priority-overflow-underflow-handling"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#proposer-priority-overflow-underflow-handling"}},[t._v("#")]),t._v(" Proposer Priority Overflow/ Underflow Handling")]),t._v(" "),v("p",[t._v("The proposer priority is stored as an int64. The selection algorithm performs additions and subtractions to these values and in the case of overflows and underflows it limits the values to:")]),t._v(" "),v("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICAgIE1heEludDY0ICA9ICAxICZsdDsmbHQ7IDYzIC0gMQogICAgTWluSW50NjQgID0gLTEgJmx0OyZsdDsgNjMK"}}),t._v(" "),v("h2",{attrs:{id:"requirement-fulfillment-claims"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#requirement-fulfillment-claims"}},[t._v("#")]),t._v(" Requirement Fulfillment Claims")]),t._v(" "),v("p",[v("strong",[t._v("[R1]")])]),t._v(" "),v("p",[t._v("The proposer algorithm is deterministic giving consistent results across executions with same transactions and validator set modifications.\n[WIP - needs more detail]")]),t._v(" "),v("p",[v("strong",[t._v("[R2]")])]),t._v(" "),v("p",[t._v("Given a set of processes with the total voting power P, during a sequence of elections of length P, the number of times any process is selected as proposer is equal to its voting power. The sequence of the P proposers then repeats. If we consider the validator set:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Validator")]),t._v(" "),v("th",[t._v("p1")]),t._v(" "),v("th",[t._v("p2")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("VP")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("3")])])])]),t._v(" "),v("p",[t._v("With no other changes to the validator set, the current implementation of proposer selection generates the sequence:\n"),v("code",[t._v("p2, p1, p2, p2, p2, p1, p2, p2,...")]),t._v(" or ["),v("code",[t._v("p2, p1, p2, p2")]),t._v("]*\nA sequence that starts with any circular permutation of the ["),v("code",[t._v("p2, p1, p2, p2")]),t._v("] sub-sequence would also provide the same degree of fairness. In fact these circular permutations show in the sliding window (over the generated sequence) of size equal to the length of the sub-sequence.")]),t._v(" "),v("p",[t._v("Assigning priorities to each validator based on the voting power and updating them at each run ensures the fairness of the proposer selection. In addition, every time a validator is elected as proposer its priority is decreased with the total voting power.")]),t._v(" "),v("p",[t._v("Intuitively, a process v jumps ahead in the queue at most (max(A) - min(A))/VP(v) times until it reaches the head and is elected. The frequency is then:")]),t._v(" "),v("code-block",{staticClass:"codeblock",attrs:{language:"md",base64:"ICAgIGYodikgfiBWUCh2KS8obWF4KEEpLW1pbihBKSkgPSAxL2sgKiBWUCh2KS9QCg=="}}),t._v(" "),v("p",[t._v("For current implementation, this means v should be proposer at least VP(v) times out of k * P runs, with scaling factor k=2.")])],1)}),[],!1,null,null,null);e.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{663:function(e,a,t){"use strict";t.r(a);var g=t(1),n=Object(g.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"creating-an-application-in-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-application-in-java"}},[e._v("#")]),e._v(" Creating an application in Java")]),e._v(" "),t("h2",{attrs:{id:"guide-assumptions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guide-assumptions"}},[e._v("#")]),e._v(" Guide Assumptions")]),e._v(" "),t("p",[e._v("This guide is designed for beginners who want to get started with a Tendermint\nCore application from scratch. It does not assume that you have any prior\nexperience with Tendermint Core.")]),e._v(" "),t("p",[e._v("Tendermint Core is Byzantine Fault Tolerant (BFT) middleware that takes a state\ntransition machine (your application) - written in any programming language - and securely\nreplicates it on many machines.")]),e._v(" "),t("p",[e._v("By following along with this guide, you'll create a Tendermint Core project\ncalled kvstore, a (very) simple distributed BFT key-value store. The application (which should\nimplementing the blockchain interface (ABCI)) will be written in Java.")]),e._v(" "),t("p",[e._v("This guide assumes that you are not new to JVM world. If you are new please see "),t("a",{attrs:{href:"https://hadihariri.com/2013/12/29/jvm-minimal-survival-guide-for-the-dotnet-developer/#java-the-language-java-the-ecosystem-java-the-jvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JVM Minimal Survival Guide"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://docs.gradle.org/current/userguide/userguide.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gradle Docs"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"built-in-app-vs-external-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#built-in-app-vs-external-app"}},[e._v("#")]),e._v(" Built-in app vs external app")]),e._v(" "),t("p",[e._v("If you use Golang, you can run your app and Tendermint Core in the same process to get maximum performance.\n"),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),t("OutboundLink")],1),e._v(" is written this way.\nPlease refer to "),t("RouterLink",{attrs:{to:"/guides/go-built-in.html"}},[e._v("Writing a built-in Tendermint Core application in Go")]),e._v(" guide for details.")],1),e._v(" "),t("p",[e._v("If you choose another language, like we did in this guide, you have to write a separate app,\nwhich will communicate with Tendermint Core via a socket (UNIX or TCP) or gRPC.\nThis guide will show you how to build external application using RPC server.")]),e._v(" "),t("p",[e._v("Having a separate application might give you better security guarantees as two\nprocesses would be communicating via established binary protocol. Tendermint\nCore will not have access to application's state.")]),e._v(" "),t("h2",{attrs:{id:"_1-1-installing-java-and-gradle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-installing-java-and-gradle"}},[e._v("#")]),e._v(" 1.1 Installing Java and Gradle")]),e._v(" "),t("p",[e._v("Please refer to "),t("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Oracle's guide for installing JDK"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Verify that you have installed Java successfully:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBqYXZhIC12ZXJzaW9uCmphdmEgdmVyc2lvbiAmcXVvdDsxMi4wLjImcXVvdDsgMjAxOS0wNy0xNgpKYXZhKFRNKSBTRSBSdW50aW1lIEVudmlyb25tZW50IChidWlsZCAxMi4wLjIrMTApCkphdmEgSG90U3BvdChUTSkgNjQtQml0IFNlcnZlciBWTSAoYnVpbGQgMTIuMC4yKzEwLCBtaXhlZCBtb2RlLCBzaGFyaW5nKQo="}}),e._v(" "),t("p",[e._v("You can choose any version of Java higher or equal to 8.\nThis guide is written using Java SE Development Kit 12.")]),e._v(" "),t("p",[e._v("Make sure you have "),t("code",[e._v("$JAVA_HOME")]),e._v(" environment variable set:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBlY2hvICRKQVZBX0hPTUUKL0xpYnJhcnkvSmF2YS9KYXZhVmlydHVhbE1hY2hpbmVzL2pkay0xMi4wLjIuamRrL0NvbnRlbnRzL0hvbWUK"}}),e._v(" "),t("p",[e._v("For Gradle installation, please refer to "),t("a",{attrs:{href:"https://gradle.org/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("their official guide"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"_1-2-creating-a-new-java-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-creating-a-new-java-project"}},[e._v("#")]),e._v(" 1.2 Creating a new Java project")]),e._v(" "),t("p",[e._v("We'll start by creating a new Gradle project.")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBleHBvcnQgS1ZTVE9SRV9IT01FPX4va3ZzdG9yZQokIG1rZGlyICRLVlNUT1JFX0hPTUUKJCBjZCAkS1ZTVE9SRV9IT01FCg=="}}),e._v(" "),t("p",[e._v("Inside the example directory run:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z3JhZGxlIGluaXQgLS1kc2wgZ3Jvb3Z5IC0tcGFja2FnZSBpby5leGFtcGxlIC0tcHJvamVjdC1uYW1lIGV4YW1wbGUgLS10eXBlIGphdmEtYXBwbGljYXRpb24gLS10ZXN0LWZyYW1ld29yayBqdW5pdAo="}}),e._v(" "),t("p",[e._v("This will create a new project for you. The tree of files should look like:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCB0cmVlCi4KfC0tIGJ1aWxkLmdyYWRsZQp8LS0gZ3JhZGxlCnwgICBgLS0gd3JhcHBlcgp8ICAgICAgIHwtLSBncmFkbGUtd3JhcHBlci5qYXIKfCAgICAgICBgLS0gZ3JhZGxlLXdyYXBwZXIucHJvcGVydGllcwp8LS0gZ3JhZGxldwp8LS0gZ3JhZGxldy5iYXQKfC0tIHNldHRpbmdzLmdyYWRsZQpgLS0gc3JjCiAgICB8LS0gbWFpbgogICAgfCAgIHwtLSBqYXZhCiAgICB8ICAgfCAgIGAtLSBpbwogICAgfCAgIHwgICAgICAgYC0tIGV4YW1wbGUKICAgIHwgICB8ICAgICAgICAgICBgLS0gQXBwLmphdmEKICAgIHwgICBgLS0gcmVzb3VyY2VzCiAgICBgLS0gdGVzdAogICAgICAgIHwtLSBqYXZhCiAgICAgICAgfCAgIGAtLSBpbwogICAgICAgIHwgICAgICAgYC0tIGV4YW1wbGUKICAgICAgICB8ICAgICAgICAgICBgLS0gQXBwVGVzdC5qYXZhCiAgICAgICAgYC0tIHJlc291cmNlcwo="}}),e._v(" "),t("p",[e._v('When run, this should print "Hello world." to the standard output.')]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCAuL2dyYWRsZXcgcnVuCiZndDsgVGFzayA6cnVuCkhlbGxvIHdvcmxkLgo="}}),e._v(" "),t("h2",{attrs:{id:"_1-3-writing-a-tendermint-core-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-writing-a-tendermint-core-application"}},[e._v("#")]),e._v(" 1.3 Writing a Tendermint Core application")]),e._v(" "),t("p",[e._v("Tendermint Core communicates with the application through the Application\nBlockChain Interface (ABCI). All message types are defined in the "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/abci/types/types.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("protobuf\nfile"),t("OutboundLink")],1),e._v(".\nThis allows Tendermint Core to run applications written in any programming\nlanguage.")]),e._v(" "),t("h3",{attrs:{id:"_1-3-1-compile-proto-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-compile-proto-files"}},[e._v("#")]),e._v(" 1.3.1 Compile .proto files")]),e._v(" "),t("p",[e._v("Add the following piece to the top of the "),t("code",[e._v("build.gradle")]),e._v(":")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"groovy",base64:"YnVpbGRzY3JpcHQgewogICAgcmVwb3NpdG9yaWVzIHsKICAgICAgICBtYXZlbkNlbnRyYWwoKQogICAgfQogICAgZGVwZW5kZW5jaWVzIHsKICAgICAgICBjbGFzc3BhdGggJ2NvbS5nb29nbGUucHJvdG9idWY6cHJvdG9idWYtZ3JhZGxlLXBsdWdpbjowLjguOCcKICAgIH0KfQo="}}),e._v(" "),t("p",[e._v("Enable the protobuf plugin in the "),t("code",[e._v("plugins")]),e._v(" section of the "),t("code",[e._v("build.gradle")]),e._v(":")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"groovy",base64:"cGx1Z2lucyB7CiAgICBpZCAnY29tLmdvb2dsZS5wcm90b2J1ZicgdmVyc2lvbiAnMC44LjgnCn0K"}}),e._v(" "),t("p",[e._v("Add the following code to "),t("code",[e._v("build.gradle")]),e._v(":")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"groovy",base64:"cHJvdG9idWYgewogICAgcHJvdG9jIHsKICAgICAgICBhcnRpZmFjdCA9ICZxdW90O2NvbS5nb29nbGUucHJvdG9idWY6cHJvdG9jOjMuNy4xJnF1b3Q7CiAgICB9CiAgICBwbHVnaW5zIHsKICAgICAgICBncnBjIHsKICAgICAgICAgICAgYXJ0aWZhY3QgPSAnaW8uZ3JwYzpwcm90b2MtZ2VuLWdycGMtamF2YToxLjIyLjEnCiAgICAgICAgfQogICAgfQogICAgZ2VuZXJhdGVQcm90b1Rhc2tzIHsKICAgICAgICBhbGwoKSoucGx1Z2lucyB7CiAgICAgICAgICAgIGdycGMge30KICAgICAgICB9CiAgICB9Cn0K"}}),e._v(" "),t("p",[e._v("Now we should be ready to compile the "),t("code",[e._v("*.proto")]),e._v(" files.")]),e._v(" "),t("p",[e._v("Copy the necessary "),t("code",[e._v(".proto")]),e._v(" files to your project:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bWtkaXIgLXAgXAogICRLVlNUT1JFX0hPTUUvc3JjL21haW4vcHJvdG8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvYWJjaS90eXBlcyBcCiAgJEtWU1RPUkVfSE9NRS9zcmMvbWFpbi9wcm90by9naXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9jcnlwdG8vbWVya2xlIFwKICAkS1ZTVE9SRV9IT01FL3NyYy9tYWluL3Byb3RvL2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2xpYnMva3YgXAogICRLVlNUT1JFX0hPTUUvc3JjL21haW4vcHJvdG8vZ2l0aHViLmNvbS9nb2dvL3Byb3RvYnVmL2dvZ29wcm90bwoKY3AgJEdPUEFUSC9zcmMvZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvYWJjaS90eXBlcy90eXBlcy5wcm90byBcCiAgICRLVlNUT1JFX0hPTUUvc3JjL21haW4vcHJvdG8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvYWJjaS90eXBlcy90eXBlcy5wcm90bwpjcCAkR09QQVRIL3NyYy9naXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9jcnlwdG8vbWVya2xlL21lcmtsZS5wcm90byBcCiAgICRLVlNUT1JFX0hPTUUvc3JjL21haW4vcHJvdG8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvY3J5cHRvL21lcmtsZS9tZXJrbGUucHJvdG8KY3AgJEdPUEFUSC9zcmMvZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvbGlicy9rdi90eXBlcy5wcm90byBcCiAgICRLVlNUT1JFX0hPTUUvc3JjL21haW4vcHJvdG8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvbGlicy9rdi90eXBlcy5wcm90bwpjcCAkR09QQVRIL3NyYy9naXRodWIuY29tL2dvZ28vcHJvdG9idWYvZ29nb3Byb3RvL2dvZ28ucHJvdG8gXAogICAkS1ZTVE9SRV9IT01FL3NyYy9tYWluL3Byb3RvL2dpdGh1Yi5jb20vZ29nby9wcm90b2J1Zi9nb2dvcHJvdG8vZ29nby5wcm90bwo="}}),e._v(" "),t("p",[e._v("Add these dependencies to "),t("code",[e._v("build.gradle")]),e._v(":")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"groovy",base64:"ZGVwZW5kZW5jaWVzIHsKICAgIGltcGxlbWVudGF0aW9uICdpby5ncnBjOmdycGMtcHJvdG9idWY6MS4yMi4xJwogICAgaW1wbGVtZW50YXRpb24gJ2lvLmdycGM6Z3JwYy1uZXR0eS1zaGFkZWQ6MS4yMi4xJwogICAgaW1wbGVtZW50YXRpb24gJ2lvLmdycGM6Z3JwYy1zdHViOjEuMjIuMScKfQo="}}),e._v(" "),t("p",[e._v("To generate all protobuf-type classes run:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Li9ncmFkbGV3IGdlbmVyYXRlUHJvdG8K"}}),e._v(" "),t("p",[e._v("To verify that everything went smoothly, you can inspect the "),t("code",[e._v("build/generated/")]),e._v(" directory:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCB0cmVlIGJ1aWxkL2dlbmVyYXRlZC8KYnVpbGQvZ2VuZXJhdGVkLwp8LS0gc291cmNlCnwgICBgLS0gcHJvdG8KfCAgICAgICBgLS0gbWFpbgp8ICAgICAgICAgICB8LS0gZ3JwYwp8ICAgICAgICAgICB8ICAgYC0tIHR5cGVzCnwgICAgICAgICAgIHwgICAgICAgYC0tIEFCQ0lBcHBsaWNhdGlvbkdycGMuamF2YQp8ICAgICAgICAgICBgLS0gamF2YQp8ICAgICAgICAgICAgICAgfC0tIGNvbQp8ICAgICAgICAgICAgICAgfCAgIGAtLSBnb29nbGUKfCAgICAgICAgICAgICAgIHwgICAgICAgYC0tIHByb3RvYnVmCnwgICAgICAgICAgICAgICB8ICAgICAgICAgICBgLS0gR29Hb1Byb3Rvcy5qYXZhCnwgICAgICAgICAgICAgICB8LS0gY29tbW9uCnwgICAgICAgICAgICAgICB8ICAgYC0tIFR5cGVzLmphdmEKfCAgICAgICAgICAgICAgIHwtLSBtZXJrbGUKfCAgICAgICAgICAgICAgIHwgICBgLS0gTWVya2xlLmphdmEKfCAgICAgICAgICAgICAgIGAtLSB0eXBlcwp8ICAgICAgICAgICAgICAgICAgIGAtLSBUeXBlcy5qYXZhCg=="}}),e._v(" "),t("h3",{attrs:{id:"_1-3-2-implementing-abci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-implementing-abci"}},[e._v("#")]),e._v(" 1.3.2 Implementing ABCI")]),e._v(" "),t("p",[e._v("The resulting "),t("code",[e._v("$KVSTORE_HOME/build/generated/source/proto/main/grpc/types/ABCIApplicationGrpc.java")]),e._v(" file\ncontains the abstract class "),t("code",[e._v("ABCIApplicationImplBase")]),e._v(", which is an interface we'll need to implement.")]),e._v(" "),t("p",[e._v("Create "),t("code",[e._v("$KVSTORE_HOME/src/main/java/io/example/KVStoreApp.java")]),e._v(" file with the following content:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"java",base64:"cGFja2FnZSBpby5leGFtcGxlOwoKaW1wb3J0IGlvLmdycGMuc3R1Yi5TdHJlYW1PYnNlcnZlcjsKaW1wb3J0IHR5cGVzLkFCQ0lBcHBsaWNhdGlvbkdycGM7CmltcG9ydCB0eXBlcy5UeXBlcy4qOwoKY2xhc3MgS1ZTdG9yZUFwcCBleHRlbmRzIEFCQ0lBcHBsaWNhdGlvbkdycGMuQUJDSUFwcGxpY2F0aW9uSW1wbEJhc2UgewoKICAgIC8vIG1ldGhvZHMgaW1wbGVtZW50YXRpb24KCn0K"}}),e._v(" "),t("p",[e._v("Now I will go through each method of "),t("code",[e._v("ABCIApplicationImplBase")]),e._v(" explaining when it's called and adding\nrequired business logic.")]),e._v(" "),t("h3",{attrs:{id:"_1-3-3-checktx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-checktx"}},[e._v("#")]),e._v(" 1.3.3 CheckTx")]),e._v(" "),t("p",[e._v("When a new transaction is added to the Tendermint Core, it will ask the\napplication to check it (validate the format, signatures, etc.).")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"java",base64:"QE92ZXJyaWRlCnB1YmxpYyB2b2lkIGNoZWNrVHgoUmVxdWVzdENoZWNrVHggcmVxLCBTdHJlYW1PYnNlcnZlciZsdDtSZXNwb25zZUNoZWNrVHgmZ3Q7IHJlc3BvbnNlT2JzZXJ2ZXIpIHsKICAgIHZhciB0eCA9IHJlcS5nZXRUeCgpOwogICAgaW50IGNvZGUgPSB2YWxpZGF0ZSh0eCk7CiAgICB2YXIgcmVzcCA9IFJlc3BvbnNlQ2hlY2tUeC5uZXdCdWlsZGVyKCkKICAgICAgICAgICAgLnNldENvZGUoY29kZSkKICAgICAgICAgICAgLnNldEdhc1dhbnRlZCgxKQogICAgICAgICAgICAuYnVpbGQoKTsKICAgIHJlc3BvbnNlT2JzZXJ2ZXIub25OZXh0KHJlc3ApOwogICAgcmVzcG9uc2VPYnNlcnZlci5vbkNvbXBsZXRlZCgpOwp9Cgpwcml2YXRlIGludCB2YWxpZGF0ZShCeXRlU3RyaW5nIHR4KSB7CiAgICBMaXN0Jmx0O2J5dGVbXSZndDsgcGFydHMgPSBzcGxpdCh0eCwgJz0nKTsKICAgIGlmIChwYXJ0cy5zaXplKCkgIT0gMikgewogICAgICAgIHJldHVybiAxOwogICAgfQogICAgYnl0ZVtdIGtleSA9IHBhcnRzLmdldCgwKTsKICAgIGJ5dGVbXSB2YWx1ZSA9IHBhcnRzLmdldCgxKTsKCiAgICAvLyBjaGVjayBpZiB0aGUgc2FtZSBrZXk9dmFsdWUgYWxyZWFkeSBleGlzdHMKICAgIHZhciBzdG9yZWQgPSBnZXRQZXJzaXN0ZWRWYWx1ZShrZXkpOwogICAgaWYgKHN0b3JlZCAhPSBudWxsICZhbXA7JmFtcDsgQXJyYXlzLmVxdWFscyhzdG9yZWQsIHZhbHVlKSkgewogICAgICAgIHJldHVybiAyOwogICAgfQoKICAgIHJldHVybiAwOwp9Cgpwcml2YXRlIExpc3QmbHQ7Ynl0ZVtdJmd0OyBzcGxpdChCeXRlU3RyaW5nIHR4LCBjaGFyIHNlcGFyYXRvcikgewogICAgdmFyIGFyciA9IHR4LnRvQnl0ZUFycmF5KCk7CiAgICBpbnQgaTsKICAgIGZvciAoaSA9IDA7IGkgJmx0OyB0eC5zaXplKCk7IGkrKykgewogICAgICAgIGlmIChhcnJbaV0gPT0gKGJ5dGUpc2VwYXJhdG9yKSB7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KICAgIH0KICAgIGlmIChpID09IHR4LnNpemUoKSkgewogICAgICAgIHJldHVybiBDb2xsZWN0aW9ucy5lbXB0eUxpc3QoKTsKICAgIH0KICAgIHJldHVybiBMaXN0Lm9mKAogICAgICAgICAgICB0eC5zdWJzdHJpbmcoMCwgaSkudG9CeXRlQXJyYXkoKSwKICAgICAgICAgICAgdHguc3Vic3RyaW5nKGkgKyAxKS50b0J5dGVBcnJheSgpCiAgICApOwp9Cg=="}}),e._v(" "),t("p",[e._v("Don't worry if this does not compile yet.")]),e._v(" "),t("p",[e._v("If the transaction does not have a form of "),t("code",[e._v("{bytes}={bytes}")]),e._v(", we return "),t("code",[e._v("1")]),e._v("\ncode. When the same key=value already exist (same key and value), we return "),t("code",[e._v("2")]),e._v("\ncode. For others, we return a zero code indicating that they are valid.")]),e._v(" "),t("p",[e._v("Note that anything with non-zero code will be considered invalid ("),t("code",[e._v("-1")]),e._v(", "),t("code",[e._v("100")]),e._v(",\netc.) by Tendermint Core.")]),e._v(" "),t("p",[e._v("Valid transactions will eventually be committed given they are not too big and\nhave enough gas. To learn more about gas, check out "),t("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/apps.html#gas",target:"_blank",rel:"noopener noreferrer"}},[e._v('"the\nspecification"'),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("For the underlying key-value store we'll use\n"),t("a",{attrs:{href:"https://github.com/JetBrains/xodus",target:"_blank",rel:"noopener noreferrer"}},[e._v("JetBrains Xodus"),t("OutboundLink")],1),e._v(", which is a transactional schema-less embedded high-performance database written in Java.")]),e._v(" "),t("p",[t("code",[e._v("build.gradle")]),e._v(":")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"groovy",base64:"ZGVwZW5kZW5jaWVzIHsKICAgIGltcGxlbWVudGF0aW9uICdvcmcuamV0YnJhaW5zLnhvZHVzOnhvZHVzLWVudmlyb25tZW50OjEuMy45MScKfQo="}}),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"java",base64:"Li4uCmltcG9ydCBqZXRicmFpbnMuZXhvZHVzLkFycmF5Qnl0ZUl0ZXJhYmxlOwppbXBvcnQgamV0YnJhaW5zLmV4b2R1cy5CeXRlSXRlcmFibGU7CmltcG9ydCBqZXRicmFpbnMuZXhvZHVzLmVudi5FbnZpcm9ubWVudDsKaW1wb3J0IGpldGJyYWlucy5leG9kdXMuZW52LlN0b3JlOwppbXBvcnQgamV0YnJhaW5zLmV4b2R1cy5lbnYuU3RvcmVDb25maWc7CmltcG9ydCBqZXRicmFpbnMuZXhvZHVzLmVudi5UcmFuc2FjdGlvbjsKCmNsYXNzIEtWU3RvcmVBcHAgZXh0ZW5kcyBBQkNJQXBwbGljYXRpb25HcnBjLkFCQ0lBcHBsaWNhdGlvbkltcGxCYXNlIHsKICAgIHByaXZhdGUgRW52aXJvbm1lbnQgZW52OwogICAgcHJpdmF0ZSBUcmFuc2FjdGlvbiB0eG4gPSBudWxsOwogICAgcHJpdmF0ZSBTdG9yZSBzdG9yZSA9IG51bGw7CgogICAgS1ZTdG9yZUFwcChFbnZpcm9ubWVudCBlbnYpIHsKICAgICAgICB0aGlzLmVudiA9IGVudjsKICAgIH0KCiAgICAuLi4KCiAgICBwcml2YXRlIGJ5dGVbXSBnZXRQZXJzaXN0ZWRWYWx1ZShieXRlW10gaykgewogICAgICAgIHJldHVybiBlbnYuY29tcHV0ZUluUmVhZG9ubHlUcmFuc2FjdGlvbih0eG4gLSZndDsgewogICAgICAgICAgICB2YXIgc3RvcmUgPSBlbnYub3BlblN0b3JlKCZxdW90O3N0b3JlJnF1b3Q7LCBTdG9yZUNvbmZpZy5XSVRIT1VUX0RVUExJQ0FURVMsIHR4bik7CiAgICAgICAgICAgIEJ5dGVJdGVyYWJsZSBieXRlSXRlcmFibGUgPSBzdG9yZS5nZXQodHhuLCBuZXcgQXJyYXlCeXRlSXRlcmFibGUoaykpOwogICAgICAgICAgICBpZiAoYnl0ZUl0ZXJhYmxlID09IG51bGwpIHsKICAgICAgICAgICAgICAgIHJldHVybiBudWxsOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiBieXRlSXRlcmFibGUuZ2V0Qnl0ZXNVbnNhZmUoKTsKICAgICAgICB9KTsKICAgIH0KfQo="}}),e._v(" "),t("h3",{attrs:{id:"_1-3-4-beginblock-delivertx-endblock-commit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-beginblock-delivertx-endblock-commit"}},[e._v("#")]),e._v(" 1.3.4 BeginBlock -> DeliverTx -> EndBlock -> Commit")]),e._v(" "),t("p",[e._v("When Tendermint Core has decided on the block, it's transferred to the\napplication in 3 parts: "),t("code",[e._v("BeginBlock")]),e._v(", one "),t("code",[e._v("DeliverTx")]),e._v(" per transaction and\n"),t("code",[e._v("EndBlock")]),e._v(" in the end. "),t("code",[e._v("DeliverTx")]),e._v(" are being transferred asynchronously, but the\nresponses are expected to come in order.")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"java",base64:"QE92ZXJyaWRlCnB1YmxpYyB2b2lkIGJlZ2luQmxvY2soUmVxdWVzdEJlZ2luQmxvY2sgcmVxLCBTdHJlYW1PYnNlcnZlciZsdDtSZXNwb25zZUJlZ2luQmxvY2smZ3Q7IHJlc3BvbnNlT2JzZXJ2ZXIpIHsKICAgIHR4biA9IGVudi5iZWdpblRyYW5zYWN0aW9uKCk7CiAgICBzdG9yZSA9IGVudi5vcGVuU3RvcmUoJnF1b3Q7c3RvcmUmcXVvdDssIFN0b3JlQ29uZmlnLldJVEhPVVRfRFVQTElDQVRFUywgdHhuKTsKICAgIHZhciByZXNwID0gUmVzcG9uc2VCZWdpbkJsb2NrLm5ld0J1aWxkZXIoKS5idWlsZCgpOwogICAgcmVzcG9uc2VPYnNlcnZlci5vbk5leHQocmVzcCk7CiAgICByZXNwb25zZU9ic2VydmVyLm9uQ29tcGxldGVkKCk7Cn0K"}}),e._v(" "),t("p",[e._v("Here we begin a new transaction, which will accumulate the block's transactions and open the corresponding store.")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"java",base64:"QE92ZXJyaWRlCnB1YmxpYyB2b2lkIGRlbGl2ZXJUeChSZXF1ZXN0RGVsaXZlclR4IHJlcSwgU3RyZWFtT2JzZXJ2ZXImbHQ7UmVzcG9uc2VEZWxpdmVyVHgmZ3Q7IHJlc3BvbnNlT2JzZXJ2ZXIpIHsKICAgIHZhciB0eCA9IHJlcS5nZXRUeCgpOwogICAgaW50IGNvZGUgPSB2YWxpZGF0ZSh0eCk7CiAgICBpZiAoY29kZSA9PSAwKSB7CiAgICAgICAgTGlzdCZsdDtieXRlW10mZ3Q7IHBhcnRzID0gc3BsaXQodHgsICc9Jyk7CiAgICAgICAgdmFyIGtleSA9IG5ldyBBcnJheUJ5dGVJdGVyYWJsZShwYXJ0cy5nZXQoMCkpOwogICAgICAgIHZhciB2YWx1ZSA9IG5ldyBBcnJheUJ5dGVJdGVyYWJsZShwYXJ0cy5nZXQoMSkpOwogICAgICAgIHN0b3JlLnB1dCh0eG4sIGtleSwgdmFsdWUpOwogICAgfQogICAgdmFyIHJlc3AgPSBSZXNwb25zZURlbGl2ZXJUeC5uZXdCdWlsZGVyKCkKICAgICAgICAgICAgLnNldENvZGUoY29kZSkKICAgICAgICAgICAgLmJ1aWxkKCk7CiAgICByZXNwb25zZU9ic2VydmVyLm9uTmV4dChyZXNwKTsKICAgIHJlc3BvbnNlT2JzZXJ2ZXIub25Db21wbGV0ZWQoKTsKfQo="}}),e._v(" "),t("p",[e._v("If the transaction is badly formatted or the same key=value already exist, we\nagain return the non-zero code. Otherwise, we add it to the store.")]),e._v(" "),t("p",[e._v("In the current design, a block can include incorrect transactions (those who\npassed "),t("code",[e._v("CheckTx")]),e._v(", but failed "),t("code",[e._v("DeliverTx")]),e._v(" or transactions included by the proposer\ndirectly). This is done for performance reasons.")]),e._v(" "),t("p",[e._v("Note we can't commit transactions inside the "),t("code",[e._v("DeliverTx")]),e._v(" because in such case\n"),t("code",[e._v("Query")]),e._v(", which may be called in parallel, will return inconsistent data (i.e.\nit will report that some value already exist even when the actual block was not\nyet committed).")]),e._v(" "),t("p",[t("code",[e._v("Commit")]),e._v(" instructs the application to persist the new state.")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"java",base64:"QE92ZXJyaWRlCnB1YmxpYyB2b2lkIGNvbW1pdChSZXF1ZXN0Q29tbWl0IHJlcSwgU3RyZWFtT2JzZXJ2ZXImbHQ7UmVzcG9uc2VDb21taXQmZ3Q7IHJlc3BvbnNlT2JzZXJ2ZXIpIHsKICAgIHR4bi5jb21taXQoKTsKICAgIHZhciByZXNwID0gUmVzcG9uc2VDb21taXQubmV3QnVpbGRlcigpCiAgICAgICAgICAgIC5zZXREYXRhKEJ5dGVTdHJpbmcuY29weUZyb20obmV3IGJ5dGVbOF0pKQogICAgICAgICAgICAuYnVpbGQoKTsKICAgIHJlc3BvbnNlT2JzZXJ2ZXIub25OZXh0KHJlc3ApOwogICAgcmVzcG9uc2VPYnNlcnZlci5vbkNvbXBsZXRlZCgpOwp9Cg=="}}),e._v(" "),t("h3",{attrs:{id:"_1-3-5-query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-5-query"}},[e._v("#")]),e._v(" 1.3.5 Query")]),e._v(" "),t("p",[e._v("Now, when the client wants to know whenever a particular key/value exist, it\nwill call Tendermint Core RPC "),t("code",[e._v("/abci_query")]),e._v(" endpoint, which in turn will call\nthe application's "),t("code",[e._v("Query")]),e._v(" method.")]),e._v(" "),t("p",[e._v("Applications are free to provide their own APIs. But by using Tendermint Core\nas a proxy, clients (including "),t("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/lite",target:"_blank",rel:"noopener noreferrer"}},[e._v("light client\npackage"),t("OutboundLink")],1),e._v(") can leverage\nthe unified API across different applications. Plus they won't have to call the\notherwise separate Tendermint Core API for additional proofs.")]),e._v(" "),t("p",[e._v("Note we don't include a proof here.")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"java",base64:"QE92ZXJyaWRlCnB1YmxpYyB2b2lkIHF1ZXJ5KFJlcXVlc3RRdWVyeSByZXEsIFN0cmVhbU9ic2VydmVyJmx0O1Jlc3BvbnNlUXVlcnkmZ3Q7IHJlc3BvbnNlT2JzZXJ2ZXIpIHsKICAgIHZhciBrID0gcmVxLmdldERhdGEoKS50b0J5dGVBcnJheSgpOwogICAgdmFyIHYgPSBnZXRQZXJzaXN0ZWRWYWx1ZShrKTsKICAgIHZhciBidWlsZGVyID0gUmVzcG9uc2VRdWVyeS5uZXdCdWlsZGVyKCk7CiAgICBpZiAodiA9PSBudWxsKSB7CiAgICAgICAgYnVpbGRlci5zZXRMb2coJnF1b3Q7ZG9lcyBub3QgZXhpc3QmcXVvdDspOwogICAgfSBlbHNlIHsKICAgICAgICBidWlsZGVyLnNldExvZygmcXVvdDtleGlzdHMmcXVvdDspOwogICAgICAgIGJ1aWxkZXIuc2V0S2V5KEJ5dGVTdHJpbmcuY29weUZyb20oaykpOwogICAgICAgIGJ1aWxkZXIuc2V0VmFsdWUoQnl0ZVN0cmluZy5jb3B5RnJvbSh2KSk7CiAgICB9CiAgICByZXNwb25zZU9ic2VydmVyLm9uTmV4dChidWlsZGVyLmJ1aWxkKCkpOwogICAgcmVzcG9uc2VPYnNlcnZlci5vbkNvbXBsZXRlZCgpOwp9Cg=="}}),e._v(" "),t("p",[e._v("The complete specification can be found\n"),t("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"_1-4-starting-an-application-and-a-tendermint-core-instances"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-starting-an-application-and-a-tendermint-core-instances"}},[e._v("#")]),e._v(" 1.4 Starting an application and a Tendermint Core instances")]),e._v(" "),t("p",[e._v("Put the following code into the "),t("code",[e._v("$KVSTORE_HOME/src/main/java/io/example/App.java")]),e._v(" file:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"java",base64:"cGFja2FnZSBpby5leGFtcGxlOwoKaW1wb3J0IGpldGJyYWlucy5leG9kdXMuZW52LkVudmlyb25tZW50OwppbXBvcnQgamV0YnJhaW5zLmV4b2R1cy5lbnYuRW52aXJvbm1lbnRzOwoKaW1wb3J0IGphdmEuaW8uSU9FeGNlcHRpb247CgpwdWJsaWMgY2xhc3MgQXBwIHsKICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBtYWluKFN0cmluZ1tdIGFyZ3MpIHRocm93cyBJT0V4Y2VwdGlvbiwgSW50ZXJydXB0ZWRFeGNlcHRpb24gewogICAgICAgIHRyeSAoRW52aXJvbm1lbnQgZW52ID0gRW52aXJvbm1lbnRzLm5ld0luc3RhbmNlKCZxdW90O3RtcC9zdG9yYWdlJnF1b3Q7KSkgewogICAgICAgICAgICB2YXIgYXBwID0gbmV3IEtWU3RvcmVBcHAoZW52KTsKICAgICAgICAgICAgdmFyIHNlcnZlciA9IG5ldyBHcnBjU2VydmVyKGFwcCwgMjY2NTgpOwogICAgICAgICAgICBzZXJ2ZXIuc3RhcnQoKTsKICAgICAgICAgICAgc2VydmVyLmJsb2NrVW50aWxTaHV0ZG93bigpOwogICAgICAgIH0KICAgIH0KfQo="}}),e._v(" "),t("p",[e._v("It is the entry point of the application.\nHere we create a special object "),t("code",[e._v("Environment")]),e._v(", which knows where to store the application state.\nThen we create and start the gRPC server to handle Tendermint Core requests.")]),e._v(" "),t("p",[e._v("Create the "),t("code",[e._v("$KVSTORE_HOME/src/main/java/io/example/GrpcServer.java")]),e._v(" file with the following content:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"java",base64:"cGFja2FnZSBpby5leGFtcGxlOwoKaW1wb3J0IGlvLmdycGMuQmluZGFibGVTZXJ2aWNlOwppbXBvcnQgaW8uZ3JwYy5TZXJ2ZXI7CmltcG9ydCBpby5ncnBjLlNlcnZlckJ1aWxkZXI7CgppbXBvcnQgamF2YS5pby5JT0V4Y2VwdGlvbjsKCmNsYXNzIEdycGNTZXJ2ZXIgewogICAgcHJpdmF0ZSBTZXJ2ZXIgc2VydmVyOwoKICAgIEdycGNTZXJ2ZXIoQmluZGFibGVTZXJ2aWNlIHNlcnZpY2UsIGludCBwb3J0KSB7CiAgICAgICAgdGhpcy5zZXJ2ZXIgPSBTZXJ2ZXJCdWlsZGVyLmZvclBvcnQocG9ydCkKICAgICAgICAgICAgICAgIC5hZGRTZXJ2aWNlKHNlcnZpY2UpCiAgICAgICAgICAgICAgICAuYnVpbGQoKTsKICAgIH0KCiAgICB2b2lkIHN0YXJ0KCkgdGhyb3dzIElPRXhjZXB0aW9uIHsKICAgICAgICBzZXJ2ZXIuc3RhcnQoKTsKICAgICAgICBTeXN0ZW0ub3V0LnByaW50bG4oJnF1b3Q7Z1JQQyBzZXJ2ZXIgc3RhcnRlZCwgbGlzdGVuaW5nIG9uICRwb3J0JnF1b3Q7KTsKICAgICAgICBSdW50aW1lLmdldFJ1bnRpbWUoKS5hZGRTaHV0ZG93bkhvb2sobmV3IFRocmVhZCgoKSAtJmd0OyB7CiAgICAgICAgICAgIFN5c3RlbS5vdXQucHJpbnRsbigmcXVvdDtzaHV0dGluZyBkb3duIGdSUEMgc2VydmVyIHNpbmNlIEpWTSBpcyBzaHV0dGluZyBkb3duJnF1b3Q7KTsKICAgICAgICAgICAgR3JwY1NlcnZlci50aGlzLnN0b3AoKTsKICAgICAgICAgICAgU3lzdGVtLm91dC5wcmludGxuKCZxdW90O3NlcnZlciBzaHV0IGRvd24mcXVvdDspOwogICAgICAgIH0pKTsKICAgIH0KCiAgICBwcml2YXRlIHZvaWQgc3RvcCgpIHsKICAgICAgICBzZXJ2ZXIuc2h1dGRvd24oKTsKICAgIH0KCiAgICAvKioKICAgICAqIEF3YWl0IHRlcm1pbmF0aW9uIG9uIHRoZSBtYWluIHRocmVhZCBzaW5jZSB0aGUgZ3JwYyBsaWJyYXJ5IHVzZXMgZGFlbW9uIHRocmVhZHMuCiAgICAgKi8KICAgIHZvaWQgYmxvY2tVbnRpbFNodXRkb3duKCkgdGhyb3dzIEludGVycnVwdGVkRXhjZXB0aW9uIHsKICAgICAgICBzZXJ2ZXIuYXdhaXRUZXJtaW5hdGlvbigpOwogICAgfQp9Cg=="}}),e._v(" "),t("h2",{attrs:{id:"_1-5-getting-up-and-running"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-getting-up-and-running"}},[e._v("#")]),e._v(" 1.5 Getting Up and Running")]),e._v(" "),t("p",[e._v("To create a default configuration, nodeKey and private validator files, let's\nexecute "),t("code",[e._v("tendermint init")]),e._v(". But before we do that, we will need to install\nTendermint Core.")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBybSAtcmYgL3RtcC9leGFtcGxlCiQgY2QgJEdPUEFUSC9zcmMvZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQKJCBtYWtlIGluc3RhbGwKJCBUTUhPTUU9JnF1b3Q7L3RtcC9leGFtcGxlJnF1b3Q7IHRlbmRlcm1pbnQgaW5pdAoKSVsyMDE5LTA3LTE2fDE4OjIwOjM2LjQ4MF0gR2VuZXJhdGVkIHByaXZhdGUgdmFsaWRhdG9yICAgICAgICAgICAgICAgICAgbW9kdWxlPW1haW4ga2V5RmlsZT0vdG1wL2V4YW1wbGUvY29uZmlnL3ByaXZfdmFsaWRhdG9yX2tleS5qc29uIHN0YXRlRmlsZT0vdG1wL2V4YW1wbGUyL2RhdGEvcHJpdl92YWxpZGF0b3Jfc3RhdGUuanNvbgpJWzIwMTktMDctMTZ8MTg6MjA6MzYuNDgxXSBHZW5lcmF0ZWQgbm9kZSBrZXkgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9bWFpbiBwYXRoPS90bXAvZXhhbXBsZS9jb25maWcvbm9kZV9rZXkuanNvbgpJWzIwMTktMDctMTZ8MTg6MjA6MzYuNDgyXSBHZW5lcmF0ZWQgZ2VuZXNpcyBmaWxlICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9bWFpbiBwYXRoPS90bXAvZXhhbXBsZS9jb25maWcvZ2VuZXNpcy5qc29uCg=="}}),e._v(" "),t("p",[e._v("Feel free to explore the generated files, which can be found at\n"),t("code",[e._v("/tmp/example/config")]),e._v(" directory. Documentation on the config can be found\n"),t("a",{attrs:{href:"https://docs.tendermint.com/master/tendermint-core/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("We are ready to start our application:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Li9ncmFkbGV3IHJ1bgoKZ1JQQyBzZXJ2ZXIgc3RhcnRlZCwgbGlzdGVuaW5nIG9uIDI2NjU4Cg=="}}),e._v(" "),t("p",[e._v("Then we need to start Tendermint Core and point it to our application. Staying\nwithin the application directory execute:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBUTUhPTUU9JnF1b3Q7L3RtcC9leGFtcGxlJnF1b3Q7IHRlbmRlcm1pbnQgbm9kZSAtLWFiY2kgZ3JwYyAtLXByb3h5X2FwcCB0Y3A6Ly8xMjcuMC4wLjE6MjY2NTgKCklbMjAxOS0wNy0yOHwxNTo0NDo1My42MzJdIFZlcnNpb24gaW5mbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1tYWluIHNvZnR3YXJlPTAuMzIuMSBibG9jaz0xMCBwMnA9NwpJWzIwMTktMDctMjh8MTU6NDQ6NTMuNjc3XSBTdGFydGluZyBOb2RlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9bWFpbiBpbXBsPU5vZGUKSVsyMDE5LTA3LTI4fDE1OjQ0OjUzLjY4MV0gU3RhcnRlZCBub2RlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPW1haW4gbm9kZUluZm89JnF1b3Q7e1Byb3RvY29sVmVyc2lvbjp7UDJQOjcgQmxvY2s6MTAgQXBwOjB9IElEXzo3NjM5ZTI4NDFjY2Q0N2Q1YWUwZjVhYWQzMDExYjE0MDQ5ZDNmNDUyIExpc3RlbkFkZHI6dGNwOi8vMC4wLjAuMDoyNjY1NiBOZXR3b3JrOnRlc3QtY2hhaW4tTmhsM3prIFZlcnNpb246MC4zMi4xIENoYW5uZWxzOjQwMjAyMTIyMjMzMDM4MDAgTW9uaWtlcjpJdmFucy1NYWNCb29rLVByby5sb2NhbCBPdGhlcjp7VHhJbmRleDpvbiBSUENBZGRyZXNzOnRjcDovLzEyNy4wLjAuMToyNjY1N319JnF1b3Q7CklbMjAxOS0wNy0yOHwxNTo0NDo1NC44MDFdIEV4ZWN1dGVkIGJsb2NrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1zdGF0ZSBoZWlnaHQ9OCB2YWxpZFR4cz0wIGludmFsaWRUeHM9MApJWzIwMTktMDctMjh8MTU6NDQ6NTQuODE0XSBDb21taXR0ZWQgc3RhdGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9c3RhdGUgaGVpZ2h0PTggdHhzPTAgYXBwSGFzaD0wMDAwMDAwMDAwMDAwMDAwCg=="}}),e._v(" "),t("p",[e._v("Now open another tab in your terminal and try sending a transaction:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjdXJsIC1zICdsb2NhbGhvc3Q6MjY2NTcvYnJvYWRjYXN0X3R4X2NvbW1pdD90eD0mcXVvdDt0ZW5kZXJtaW50PXJvY2tzJnF1b3Q7Jwp7CiAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICZxdW90O2lkJnF1b3Q7OiAmcXVvdDsmcXVvdDssCiAgJnF1b3Q7cmVzdWx0JnF1b3Q7OiB7CiAgICAmcXVvdDtjaGVja190eCZxdW90OzogewogICAgICAmcXVvdDtnYXNXYW50ZWQmcXVvdDs6ICZxdW90OzEmcXVvdDsKICAgIH0sCiAgICAmcXVvdDtkZWxpdmVyX3R4JnF1b3Q7OiB7fSwKICAgICZxdW90O2hhc2gmcXVvdDs6ICZxdW90O0NERDNDNkRGQTBBMDhDQUVERjU0NkY5OTM4QTJFRUMyMzIyMDlDMjRBQTBFNDIwMTE5NEUwQUZCNzhBMkMyQkImcXVvdDssCiAgICAmcXVvdDtoZWlnaHQmcXVvdDs6ICZxdW90OzMzJnF1b3Q7Cn0K"}}),e._v(" "),t("p",[e._v("Response should contain the height where this transaction was committed.")]),e._v(" "),t("p",[e._v("Now let's check if the given key now exists and its value:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjdXJsIC1zICdsb2NhbGhvc3Q6MjY2NTcvYWJjaV9xdWVyeT9kYXRhPSZxdW90O3RlbmRlcm1pbnQmcXVvdDsnCnsKICAmcXVvdDtqc29ucnBjJnF1b3Q7OiAmcXVvdDsyLjAmcXVvdDssCiAgJnF1b3Q7aWQmcXVvdDs6ICZxdW90OyZxdW90OywKICAmcXVvdDtyZXN1bHQmcXVvdDs6IHsKICAgICZxdW90O3Jlc3BvbnNlJnF1b3Q7OiB7CiAgICAgICZxdW90O2xvZyZxdW90OzogJnF1b3Q7ZXhpc3RzJnF1b3Q7LAogICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O2RHVnVaR1Z5YldsdWRBPT0mcXVvdDssCiAgICAgICZxdW90O3ZhbHVlJnF1b3Q7OiAmcXVvdDtjbTlqYTNNeSZxdW90OwogICAgfQogIH0KfQo="}}),e._v(" "),t("p",[t("code",[e._v("dGVuZGVybWludA==")]),e._v(" and "),t("code",[e._v("cm9ja3M=")]),e._v(" are the base64-encoding of the ASCII of "),t("code",[e._v("tendermint")]),e._v(" and "),t("code",[e._v("rocks")]),e._v(" accordingly.")]),e._v(" "),t("h2",{attrs:{id:"outro"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outro"}},[e._v("#")]),e._v(" Outro")]),e._v(" "),t("p",[e._v("I hope everything went smoothly and your first, but hopefully not the last,\nTendermint Core application is up and running. If not, please "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("open an issue on\nGithub"),t("OutboundLink")],1),e._v(". To dig\ndeeper, read "),t("a",{attrs:{href:"https://docs.tendermint.com/master/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the docs"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("The full source code of this example project can be found "),t("a",{attrs:{href:"https://github.com/climber73/tendermint-abci-grpc-java",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);
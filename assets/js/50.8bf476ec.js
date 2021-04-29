(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{371:function(e,r,t){"use strict";t.r(r);var a=t(24),s=function(e){e.options.__data__block__={mermaid_382ee184:"graph LR\n    U[User]:::user --\x3e|1: Load UI| Ui[ui]\n    U[User] --\x3e|2: SPARQL Query| G\n    G[gateway] --\x3e|4: SPARQL Query| B[queryservice]\n    G[gateway] --\x3e|3: Get Blazegraph Namespace| A[API]:::other\n    classDef user fill:#90ee90;\n    classDef other fill:#ffcccb;\n",mermaid_382ee188:"graph LR\n    Up[updater] --\x3e|1: Get Changed Entities| A[API]\n    Up[updater] --\x3e|2: Get Blazegraph Namespace| A[API]:::other\n    Up[updater] --\x3e|3: Get Entity Data| M[MediaWiki]:::other\n    Up[updater] --\x3e|4: UPDATE Query| B[queryservice]\n    classDef other fill:#ffcccb;\n"}},i=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"queryservice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queryservice"}},[e._v("#")]),e._v(" Queryservice")]),e._v(" "),t("p",[e._v("The queryservice is made up of a number of components:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/wbstack/queryservice",target:"_blank",rel:"noopener noreferrer"}},[e._v("queryservice"),t("OutboundLink")],1),e._v(" - Blazegraph SPARQL query service (WDQS flavour)")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/wbstack/queryservice-gateway",target:"_blank",rel:"noopener noreferrer"}},[e._v("queryservice-gateway"),t("OutboundLink")],1),e._v(" - Custom gateway proxy to route traffic to the correct Blazegraph namespace based on request domain.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/wbstack/queryservice-updater",target:"_blank",rel:"noopener noreferrer"}},[e._v("queryservice-updater"),t("OutboundLink")],1),e._v(" - Custom updater to updater multiple sites from a single process.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/wbstack/queryservice-ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("queryservice-ui"),t("OutboundLink")],1),e._v(" - Fork of the WDQS UI with modifications for wbstack.")])]),e._v(" "),t("p",[e._v("For Requests:")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee184",graph:e.$dataBlock.mermaid_382ee184}}),t("p",[e._v("For Updates:")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee188",graph:e.$dataBlock.mermaid_382ee188}}),t("h2",{attrs:{id:"queryservice-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queryservice-2"}},[e._v("#")]),e._v(" queryservice")]),e._v(" "),t("h2",{attrs:{id:"queryservice-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queryservice-gateway"}},[e._v("#")]),e._v(" queryservice-gateway")]),e._v(" "),t("h2",{attrs:{id:"queryservice-ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queryservice-ui"}},[e._v("#")]),e._v(" queryservice-ui")]),e._v(" "),t("h2",{attrs:{id:"queryservice-updater"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queryservice-updater"}},[e._v("#")]),e._v(" queryservice-updater")])],1)}),[],!1,null,null,null);"function"==typeof s&&s(i);r.default=i.exports}}]);
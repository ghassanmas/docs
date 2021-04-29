(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{406:function(e,t,r){"use strict";r.r(t);var s=r(24),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"services"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[e._v("#")]),e._v(" Services")]),e._v(" "),r("h2",{attrs:{id:"infrastructure-services"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#infrastructure-services"}},[e._v("#")]),e._v(" Infrastructure services")]),e._v(" "),r("p",[e._v("These services are generally shared and used by multiple components.")]),e._v(" "),r("p",[e._v("They do not really add to / are part of the deployed application at all.")]),e._v(" "),r("h3",{attrs:{id:"ingress-nginx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ingress-nginx"}},[e._v("#")]),e._v(" ingress-nginx")]),e._v(" "),r("p",[e._v("Values should probably be defined in the chart, but for now they live here..")]),e._v(" "),r("p",[e._v("The one thing we might need to change is the IP?")]),e._v(" "),r("div",{staticClass:"language-yml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-yml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("controller")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("service")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("loadBalancerIP")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" <IP Address"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n")])])]),r("h3",{attrs:{id:"cert-manager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cert-manager"}},[e._v("#")]),e._v(" cert-manager")]),e._v(" "),r("p",[e._v("Some cert-manager things were already deployed in the Definitions stages of this guide.")]),e._v(" "),r("p",[e._v("cert-manager also has 2 sets of helmfiles to deploy.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/cert-manager",target:"_blank",rel:"noopener noreferrer"}},[e._v("cert-manager"),r("OutboundLink")],1),e._v(" - Created the cert-manager controller (manages certificates).")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/clusterissuers",target:"_blank",rel:"noopener noreferrer"}},[e._v("clusterissuers"),r("OutboundLink")],1),e._v(" - Creates the cert-manager cluster issuers that connect to Let's Encrypt.")])]),e._v(" "),r("p",[r("strong",[e._v("TBA values!")])]),e._v(" "),r("h2",{attrs:{id:"persistence-services"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#persistence-services"}},[e._v("#")]),e._v(" Persistence services")]),e._v(" "),r("h3",{attrs:{id:"sql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[e._v("#")]),e._v(" sql")]),e._v(" "),r("p",[e._v("We could use an external sql service, but in the interest of depending on as few services as possible, and keeping costs down, this is currently done in k8s.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/sql",target:"_blank",rel:"noopener noreferrer"}},[e._v("sql"),r("OutboundLink")],1),e._v(" - Replication aware sql setup running MariaDB")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/adminer",target:"_blank",rel:"noopener noreferrer"}},[e._v("adminer"),r("OutboundLink")],1),e._v(" - Web interface access for sql (OPTIONAL)")])]),e._v(" "),r("p",[e._v("Some private values will be needed:")]),e._v(" "),r("div",{staticClass:"language-yml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-yml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("services")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("sql")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("rootPassword")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'somePassword'")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("replicationPassword")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'someOtherPassword'")]),e._v("\n")])])]),r("p",[e._v("Once the sql service is running we can create some secrets for use by other services.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/blob/main/k8s/tasks/init-sql-secrets.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("tasks/init-sql-secrets.yaml"),r("OutboundLink")],1),e._v(" - Creates the SQL secrets / password required for various SQL services (and api user and a mediawiki db manager user)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/blob/main/k8s/tasks/init-sql.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("tasks/init-sql.yaml"),r("OutboundLink")],1),e._v(" - Creates the SQL users, from the secrets just created, for various SQL services (wait for the first jobs to finish first!!!)")])]),e._v(" "),r("p",[e._v("Both of these steps should probably be performed as part of the helm files deploying the services rather than here.")]),e._v(" "),r("p",[e._v("You can find some more docs for interacting with sql in the "),r("a",{attrs:{href:"../services"}},[e._v("docs/services directory")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"redis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[e._v("#")]),e._v(" redis")]),e._v(" "),r("p",[e._v("We could use an external redis service, but in the interest of depending on as few services as possible, and keeping costs down, this is currently done in k8s.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/redis",target:"_blank",rel:"noopener noreferrer"}},[e._v("redis"),r("OutboundLink")],1),e._v(" - Replicated redis setup for use by services")])]),e._v(" "),r("p",[e._v("Some private values will be needed:")]),e._v(" "),r("div",{staticClass:"language-yml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-yml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("services")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("redis")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("password")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" somePassword\n")])])]),r("p",[e._v("You can find some more docs for interacting with redis in the "),r("a",{attrs:{href:"../services"}},[e._v("docs/services directory")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"application-services"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#application-services"}},[e._v("#")]),e._v(" Application services")]),e._v(" "),r("p",[e._v("Web facing frontend for the platform app services:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/platform-nginx",target:"_blank",rel:"noopener noreferrer"}},[e._v("platform-nginx"),r("OutboundLink")],1),e._v(" - Nginx ingress doing path based routing\n"),r("ul",[r("li",[e._v("Possible modifications:\n"),r("ul",[r("li",[e._v("nginx.conf "),r("code",[e._v("set_real_ip_from")]),e._v(" needs to be set to the range of possible Pod IP addresses")]),e._v(" "),r("li",[e._v("nginx.conf "),r("code",[e._v("resolver")]),e._v(" probably doesn't need adjusting if your using a default looking cluster")])])]),e._v(" "),r("li",[e._v("NOTE: nginx will initially fail as it can't resolve upstream hosts (as we didn't make the services yet)\n"),r("ul",[r("li",[e._v("Maybe this should all be done in a different order? OR it shouldn't need the services to exist? and fallback?")])])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/platform-apps-ingress",target:"_blank",rel:"noopener noreferrer"}},[e._v("platform-apps-ingress"),r("OutboundLink")],1),e._v(" - Expose the platform-nginx with an ingress\n"),r("ul",[r("li",[e._v("For other usecases this probably needs its own helm charts currently D: (TODO make the chart generic...)")])])])]),e._v(" "),r("p",[e._v("And the platform to manage all the things:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("api"),r("OutboundLink")],1),e._v(" (API users already created in the sql step)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("ui"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("And the app services themselves:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/mediawiki135",target:"_blank",rel:"noopener noreferrer"}},[e._v("mediawiki135"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/mediawiki134",target:"_blank",rel:"noopener noreferrer"}},[e._v("mediawiki134"),r("OutboundLink")],1),e._v(" (Currently still needed for a OAuth issue with some tools)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/queryservice",target:"_blank",rel:"noopener noreferrer"}},[e._v("queryservice"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/queryservice-gateway",target:"_blank",rel:"noopener noreferrer"}},[e._v("queryservice-gateway"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/queryservice-updater",target:"_blank",rel:"noopener noreferrer"}},[e._v("queryservice-updater"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/queryservice-ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("queryservice-ui"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/tool-quickstatements",target:"_blank",rel:"noopener noreferrer"}},[e._v("tool-quickstatements"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/tool-widar",target:"_blank",rel:"noopener noreferrer"}},[e._v("tool-widar"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wbstack/deploy/tree/main/k8s/helm/tool-cradle",target:"_blank",rel:"noopener noreferrer"}},[e._v("tool-cradle"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);
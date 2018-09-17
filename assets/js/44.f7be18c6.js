(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{162:function(t,e,s){t.exports=s.p+"assets/img/SampleMicroservesLook.14044143.png"},183:function(t,e,s){"use strict";s.r(e);var r=s(0),i=Object(r.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("Github Sample Repo:")]),r("p",[r("a",{attrs:{href:"https://github.com/zowe/rest-api-jzos-sample",target:"_blank",rel:"noopener noreferrer"}},[t._v("rest-api-jzos sample"),r("OutboundLink")],1)])]),r("p",[t._v("This sample is a boilerplate for creating Rest API's using a liberty. For more information, visit "),r("router-link",{attrs:{to:"./../guides/libertyAPI.html"}},[t._v("Creating a RestAPI with Swagger documentation using Liberty")]),t._v(".")],1),t._m(1),r("p",[t._v("After creating or obtaining the REST API war file:")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),r("img",{attrs:{src:s(162),alt:"view",align:"center/"}}),t._m(7)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"provide-liberty-api-sample"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#provide-liberty-api-sample","aria-hidden":"true"}},[this._v("#")]),this._v(" Provide Liberty API Sample")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"to-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#to-install","aria-hidden":"true"}},[this._v("#")]),this._v(" To Install")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[s("p",[t._v("Stop the Zowe server.")]),s("ul",[s("li",[t._v("Navigate to "),s("code",[t._v("<zowe_base>/scripts/")])]),s("li",[t._v("Run "),s("code",[t._v("./zowe-stop.sh")])])])]),s("li",[s("p",[t._v("Push the war file up to the dropins folder using SCP, SFTP, or on Windows with Putty SCP (PSCP).")]),s("ul",[s("li",[s("em",[t._v("EX")]),t._v(":\n"),s("code",[t._v("scp /path/to/warfile <usrID>@<serverLocation>:<zowe_base>/explorer-server/wlp/usr/servers/Atlas/dropins/")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("Use the USS, IDZ, or IBM Explorer for z/OS to confirm that your files have transferred.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[e("p",[this._v("Restart the Zowe server.")]),e("ul",[e("li",[this._v("Navigate to "),e("code",[this._v("<zowe_base>/scripts/")])]),e("li",[this._v("Run "),e("code",[this._v("./zowe-start.sh")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"verify-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify-install","aria-hidden":"true"}},[this._v("#")]),this._v(" Verify Install")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Check the Browser to see if the REST APIs have been added.\n"),e("ul",[e("li",[e("em",[this._v("EX")]),this._v(": "),e("code",[this._v("<base>:<yourport>/ibm/api/explorer/#/")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("Make sure to set file transfer mode to binary before the transfer.\nAfter transferring the WAR file, check the permission on the file by running\nls -la\nIf the read permission is not set, turn on the read permission by running,\nchmod +r javazos-sample.war")])])}],!1,null,null,null);e.default=i.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{211:function(t,e,r){"use strict";r.r(e);var o=r(0),s=Object(o.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),r("p",[t._v("The logging utility is based on the following objects:")]),t._m(3),t._m(4),r("p",[t._v("Because Zowe application plug-ins have unique identifiers, both dataservices and an application plug-in's web content are provided with a component logger that knows this unique ID such that messages that are logged can be prefixed with the ID. With the association of logging to IDs, you can control verbosity of logs by setting log verbosity by ID.")]),t._m(5),t._m(6),r("p",[t._v("The core logger object is attached as a global for low-level access.")]),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),r("p",[t._v("Component loggers are created from the core logger object, but when working with an application plug-in, allow the application plug-in framework to create these loggers for you. An application plug-in's component logger is presented to dataservices or web content as follows.")]),t._m(12),r("p",[t._v("See "),r("strong",[t._v("Router Dataservice Context")]),t._v(" in the topic "),r("router-link",{attrs:{to:"./mvd-zluxdataservices.html"}},[t._v("zLUX dataservices")]),t._v(".")],1),t._m(13),r("p",[t._v("(Angular App Instance Injectible). See "),r("strong",[t._v("Logger")]),t._v(" in "),r("router-link",{attrs:{to:"./mvd-desktopandwindowmgt.html"}},[t._v("Virtual desktop and window management")]),t._v(".")],1),t._m(14),r("p",[t._v("The following constants and functions are available on the central logging object.")]),t._m(15),t._m(16),r("p",[t._v("The following constants and functions are available to each component logger.")]),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),r("p",[t._v("Using the component logger API, loggers can dictate at which level of verbosity a log message should be visible.\nThe user can configure the server or client to show more or less verbose messages by using the core logger's API objects.")]),r("p",[t._v("Example: You want to set the verbosity of the org.zowe.foo application plug-in's dataservice, bar to show debugging information.")]),t._m(23),t._m(24),r("p",[t._v("The application plug-in framework provides ways to specify what component loggers you would like to set default verbosity for, such that you can easily turn logging on or off.")]),t._m(25),t._m(26),r("p",[t._v("For example:")]),t._m(27),r("p",[t._v("For more information about the server configuration file, see "),r("router-link",{attrs:{to:"./mvd-zluxconfiguration.html#configuring-the-zlux-proxy-server-and-zss"}},[t._v("Configuring the zLUX Proxy Server and ZSS")]),t._v(".")],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"logging-utility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logging-utility","aria-hidden":"true"}},[this._v("#")]),this._v(" Logging utility")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("zlux-shared")]),this._v(" repository provides a logging utility for use by dataservices and web content for a Zowe application plug-in.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"logging-objects"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logging-objects","aria-hidden":"true"}},[this._v("#")]),this._v(" Logging objects")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("Component Loggers")]),this._v(": Objects that log messages for an individual component of the environment, such as a REST API for an application plug-in or to log user access.")]),e("li",[e("strong",[this._v("Destinations")]),this._v(": Objects that are called when a component logger requests a message to be logged. Destinations determine how something is logged, for example, to a file or to a console, and what formatting is applied.")]),e("li",[e("strong",[this._v("Logger")]),this._v(": Central logging object, which can spawn component loggers and attach destinations.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"logger-ids"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logger-ids","aria-hidden":"true"}},[this._v("#")]),this._v(" Logger IDs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"accessing-logger-objects"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accessing-logger-objects","aria-hidden":"true"}},[this._v("#")]),this._v(" Accessing logger objects")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"logger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logger","aria-hidden":"true"}},[this._v("#")]),this._v(" Logger")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"zlux-application-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zlux-application-server","aria-hidden":"true"}},[this._v("#")]),this._v(" zLUX Application Server")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("NodeJS uses "),e("code",[this._v("global")]),this._v(" as its global object, so the logger is attached to:\n"),e("code",[this._v("global.COM_RS_COMMON_LOGGER")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"web"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web","aria-hidden":"true"}},[this._v("#")]),this._v(" Web")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Browsers use "),e("code",[this._v("window")]),this._v(" as the global object, so the logger is attached to:\n"),e("code",[this._v("window.COM_RS_COMMON_LOGGER")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"component-logger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component-logger","aria-hidden":"true"}},[this._v("#")]),this._v(" Component logger")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"app-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-server","aria-hidden":"true"}},[this._v("#")]),this._v(" App Server")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"web-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Web")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"logger-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logger-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Logger API")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Attribute")]),r("th",[t._v("Type")]),r("th",[t._v("Description")]),r("th",[t._v("Arguments")])])]),r("tbody",[r("tr",[r("td",[r("code",[t._v("makeComponentLogger")])]),r("td",[t._v("function")]),r("td",[t._v("Creates a component logger - Automatically done by the application framework for dataservices and web content")]),r("td",[r("code",[t._v("componentIDString")])])]),r("tr",[r("td",[r("code",[t._v("setLogLevelForComponentName")])]),r("td",[t._v("function")]),r("td",[t._v("Sets the verbosity of an existing component logger")]),r("td",[r("code",[t._v("componentIDString")]),t._v(", "),r("code",[t._v("logLevel")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"component-logger-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component-logger-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Component Logger API")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Attribute")]),r("th",[t._v("Type")]),r("th",[t._v("Description")]),r("th",[t._v("Arguments")])])]),r("tbody",[r("tr",[r("td",[r("code",[t._v("SEVERE")])]),r("td",[t._v("const")]),r("td",[t._v("Is a const for "),r("code",[t._v("logLevel")])]),r("td")]),r("tr",[r("td",[r("code",[t._v("WARNING")])]),r("td",[t._v("const")]),r("td",[t._v("Is a const for "),r("code",[t._v("logLevel")])]),r("td")]),r("tr",[r("td",[r("code",[t._v("INFO")])]),r("td",[t._v("const")]),r("td",[t._v("Is a const for "),r("code",[t._v("logLevel")])]),r("td")]),r("tr",[r("td",[r("code",[t._v("FINE")])]),r("td",[t._v("const")]),r("td",[t._v("Is a const for "),r("code",[t._v("logLevel")])]),r("td")]),r("tr",[r("td",[r("code",[t._v("FINER")])]),r("td",[t._v("const")]),r("td",[t._v("Is a const for "),r("code",[t._v("logLevel")])]),r("td")]),r("tr",[r("td",[r("code",[t._v("FINEST")])]),r("td",[t._v("const")]),r("td",[t._v("Is a const for "),r("code",[t._v("logLevel")])]),r("td")]),r("tr",[r("td",[r("code",[t._v("log")])]),r("td",[t._v("function")]),r("td",[t._v("Used to write a log, specifying the log level")]),r("td",[r("code",[t._v("logLevel")]),t._v(", "),r("code",[t._v("messageString")])])]),r("tr",[r("td",[r("code",[t._v("severe")])]),r("td",[t._v("function")]),r("td",[t._v("Used to write a SEVERE log.")]),r("td",[r("code",[t._v("messageString")])])]),r("tr",[r("td",[r("code",[t._v("warn")])]),r("td",[t._v("function")]),r("td",[t._v("Used to write a WARNING log.")]),r("td",[r("code",[t._v("messageString")])])]),r("tr",[r("td",[r("code",[t._v("info")])]),r("td",[t._v("function")]),r("td",[t._v("Used to write an INFO log.")]),r("td",[r("code",[t._v("messageString")])])]),r("tr",[r("td",[r("code",[t._v("debug")])]),r("td",[t._v("function")]),r("td",[t._v("Used to write a FINE log.")]),r("td",[r("code",[t._v("messageString")])])]),r("tr",[r("td",[r("code",[t._v("makeSublogger")])]),r("td",[t._v("function")]),r("td",[t._v("Creates a new component logger with an ID appended by the string given")]),r("td",[r("code",[t._v("componentNameSuffix")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"log-levels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#log-levels","aria-hidden":"true"}},[this._v("#")]),this._v(" Log Levels")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("An enum, "),e("code",[this._v("LogLevel")]),this._v(", exists for specifying the verbosity level of a logger. The mapping is:")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Level")]),r("th",[t._v("Number")])])]),r("tbody",[r("tr",[r("td",[t._v("SEVERE")]),r("td",[t._v("0")])]),r("tr",[r("td",[t._v("WARNING")]),r("td",[t._v("1")])]),r("tr",[r("td",[t._v("INFO")]),r("td",[t._v("2")])]),r("tr",[r("td",[t._v("FINE")]),r("td",[t._v("3")])]),r("tr",[r("td",[t._v("FINER")]),r("td",[t._v("4")])]),r("tr",[r("td",[t._v("FINEST")]),r("td",[t._v("5")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note:")]),this._v(" The default log level for a logger is "),e("strong",[this._v("INFO")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"logging-verbosity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logging-verbosity","aria-hidden":"true"}},[this._v("#")]),this._v(" Logging verbosity")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("logger.setLogLevelForComponentName('org.zowe.foo.bar',LogLevel.DEBUG)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configuring-logging-verbosity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-logging-verbosity","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring logging verbosity")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"server-startup-logging-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server-startup-logging-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Server startup logging configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The server configuration file, allows for specification of default log levels, as a top-level attribute "),e("code",[this._v("logLevel")]),this._v(", which takes key-value pairs where the key is a regex pattern for component IDs, and the value is an integer for the log levels.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('"logLevel": {\n    "com.rs.configjs.data.access": 2,\n    //the string given is a regex pattern string, so .* at the end here will cover that service and its subloggers.\n    "com.rs.myplugin.myservice.*": 4\n    //\n    // \'_\' char reserved, and \'_\' at beginning reserved for server. Just as we reserve\n    // \'_internal\' for plugin config data for config service.\n    // _unp = universal node proxy core logging\n    //"_unp.dsauth": 2\n  },\n')])])])}],!1,null,null,null);e.default=s.exports}}]);
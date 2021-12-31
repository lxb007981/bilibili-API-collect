(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{649:function(t,s,_){"use strict";_.r(s);var v=_(32),a=Object(v.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"登录记录"}},[t._v("登录记录")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E6%9F%A5%E8%AF%A2%E7%99%BB%E5%BD%95%E8%AE%B0%E5%BD%95"}},[t._v("查询登录记录")])])]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"查询登录记录"}},[t._v("查询登录记录")]),t._v(" "),_("blockquote",[_("p",[t._v("http://api.bilibili.com/x/safecenter/login_notice")])]),t._v(" "),_("p",[_("em",[t._v("请求方式：GET")])]),t._v(" "),_("p",[t._v("认证方式：Cookie（SESSDATA）")]),t._v(" "),_("p",[_("strong",[t._v("url参数：")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("必要性")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("mid")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("用户mid")]),t._v(" "),_("td",[t._v("必要")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("buvid")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("设备虚拟id")]),t._v(" "),_("td",[t._v("非必要")]),t._v(" "),_("td",[t._v("web端为操作登录接口时Cookie中的"),_("code",[t._v("buvid3")]),_("br"),t._v("若登录设备无"),_("code",[t._v("buvid")]),t._v("则留空")])])])]),t._v(" "),_("p",[_("strong",[t._v("json回复：")])]),t._v(" "),_("p",[t._v("根对象：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("code")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("返回值")]),t._v(" "),_("td",[t._v("0：成功"),_("br"),t._v("-101：账号未登录"),_("br"),t._v("-400：请求错误")])]),t._v(" "),_("tr",[_("td",[t._v("message")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("错误信息")]),t._v(" "),_("td",[t._v("默认为0")])]),t._v(" "),_("tr",[_("td",[t._v("ttl")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("data")]),t._v(" "),_("td",[t._v("obj")]),t._v(" "),_("td",[t._v("信息本体")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[_("code",[t._v("data")]),t._v("对象：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("mid")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("登录用户mid")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("device_name")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("登录设备")]),t._v(" "),_("td",[t._v("依靠操作登录接口时的UA决定")])]),t._v(" "),_("tr",[_("td",[t._v("login_type")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("登录方式")]),t._v(" "),_("td",[t._v("根据登录接口决定")])]),t._v(" "),_("tr",[_("td",[t._v("login_time")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("登录时间")]),t._v(" "),_("td",[t._v("YYYY-MM-DD hh:mm:ss")])]),t._v(" "),_("tr",[_("td",[t._v("location")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("登录位置")]),t._v(" "),_("td",[t._v("依靠ip决定")])]),t._v(" "),_("tr",[_("td",[t._v("ip")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("登录ip")]),t._v(" "),_("td",[t._v("部分用"),_("code",[t._v("*")]),t._v("打码")])])])]),t._v(" "),_("p",[_("strong",[t._v("示例：")])]),t._v(" "),_("p",[t._v("查询用户"),_("code",[t._v("293793435")]),t._v("设备id为"),_("code",[t._v("fuck_chenrui")]),t._v("的登录记录")]),t._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -G "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://api.bilibili.com/x/safecenter/login_notice'")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mid=293793435'")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'buvid=fuck_chenrui'")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-b "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SESSDATA=xxx'")]),t._v("\n")])])]),_("details",[_("summary",[t._v("查看响应示例：")]),t._v(" "),_("div",{staticClass:"language-json extra-class"},[_("pre",{pre:!0,attrs:{class:"language-json"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ttl"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mid"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("293793435")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"device_name"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chrome浏览器"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"login_type"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"扫码登录"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"login_time"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-10-02 22:42:38"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"location"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"中国陕西渭南"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ip"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"36.40.***.**"')]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=a.exports}}]);
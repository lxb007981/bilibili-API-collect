(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{690:function(t,v,_){"use strict";_.r(v);var s=_(32),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"视频在线人数"}},[t._v("视频在线人数")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E8%A7%86%E9%A2%91%E5%9C%A8%E7%BA%BF%E4%BA%BA%E6%95%B0_web%E7%AB%AF"}},[t._v("获取视频在线人数_web端")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E8%A7%86%E9%A2%91%E5%9C%A8%E7%BA%BF%E4%BA%BA%E6%95%B0_APP%E7%AB%AF"}},[t._v("获取视频在线人数_APP端")])])]),t._v(" "),_("h2",{attrs:{id:"获取视频在线人数-web端"}},[t._v("获取视频在线人数_web端")]),t._v(" "),_("blockquote",[_("p",[t._v("http://api.bilibili.com/x/player/online/total")])]),t._v(" "),_("p",[_("em",[t._v("请求方式：GET")])]),t._v(" "),_("p",[_("strong",[t._v("url参数：")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("必要性")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("aid")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("稿件avid")]),t._v(" "),_("td",[t._v("必要(可选)")]),t._v(" "),_("td",[t._v("avid与bvid任选一个")])]),t._v(" "),_("tr",[_("td",[t._v("bvid")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("稿件bvid")]),t._v(" "),_("td",[t._v("必要(可选)")]),t._v(" "),_("td",[t._v("avid与bvid任选一个")])]),t._v(" "),_("tr",[_("td",[t._v("cid")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("视频cid")]),t._v(" "),_("td",[t._v("必要")]),t._v(" "),_("td",[t._v("用于选择目标分P")])])])]),t._v(" "),_("p",[_("strong",[t._v("json回复：")])]),t._v(" "),_("p",[t._v("根对象：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("code")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("返回值")]),t._v(" "),_("td",[t._v("0：成功"),_("br"),t._v("-400：请求错误"),_("br"),t._v("-404：无视频")])]),t._v(" "),_("tr",[_("td",[t._v("message")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("错误信息")]),t._v(" "),_("td",[t._v("默认为0")])]),t._v(" "),_("tr",[_("td",[t._v("ttl")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("data")]),t._v(" "),_("td",[t._v("obj")]),t._v(" "),_("td",[t._v("信息本体")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[_("code",[t._v("data")]),t._v("对象：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("total")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("所有终端总计人数")]),t._v(" "),_("td",[t._v("例如"),_("code",[t._v("10万+")])])]),t._v(" "),_("tr",[_("td",[t._v("count")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("web端实时在线人数")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("show_switch")]),t._v(" "),_("td",[t._v("obj")]),t._v(" "),_("td",[t._v("数据显示控制")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[_("code",[t._v("data")]),t._v("中的"),_("code",[t._v("show_switch")]),t._v("对象：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("total")]),t._v(" "),_("td",[t._v("bool")]),t._v(" "),_("td",[t._v("展示所有终端总计人数")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("count")]),t._v(" "),_("td",[t._v("bool")]),t._v(" "),_("td",[t._v("展示web端实时在线人数")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[_("strong",[t._v("示例：")])]),t._v(" "),_("p",[t._v("查询视频"),_("code",[t._v("av759949922")]),t._v("/"),_("code",[t._v("BV1y64y1q757")]),t._v("中1P("),_("code",[t._v("392402545")]),t._v(")的在线人数")]),t._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -G "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://api.bilibili.com/x/player/online/total'")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aid=759949922'")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cid=392402545'")]),t._v("\n")])])]),_("details",[_("summary",[t._v("查看响应示例：")]),t._v(" "),_("div",{staticClass:"language-json extra-class"},[_("pre",{pre:!0,attrs:{class:"language-json"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ttl"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9.4万+"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"count"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"50953"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"show_switch"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"count"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),_("h2",{attrs:{id:"获取视频在线人数-app端"}},[t._v("获取视频在线人数_APP端")]),t._v(" "),_("blockquote",[_("p",[t._v("http://app.bilibili.com/x/v2/view/video/online")])]),t._v(" "),_("p",[_("em",[t._v("请求方式：GET")])]),t._v(" "),_("p",[_("strong",[t._v("url参数：")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("必要性")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("aid")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("稿件avid")]),t._v(" "),_("td",[t._v("必要")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("appkey")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("APP密钥")]),t._v(" "),_("td",[t._v("APP方式必要")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("cid")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("视频cid")]),t._v(" "),_("td",[t._v("必要")]),t._v(" "),_("td",[t._v("用于选择目标分P")])]),t._v(" "),_("tr",[_("td",[t._v("ts")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("当前时间戳")]),t._v(" "),_("td",[t._v("APP方式必要")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("sign")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("APP签名")]),t._v(" "),_("td",[t._v("APP方式必要")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[_("strong",[t._v("json回复：")])]),t._v(" "),_("p",[t._v("根对象：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("code")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("返回值")]),t._v(" "),_("td",[t._v("0：成功"),_("br"),t._v("-400：请求错误"),_("br"),t._v("-404：无视频")])]),t._v(" "),_("tr",[_("td",[t._v("message")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("错误信息")]),t._v(" "),_("td",[t._v("默认为0")])]),t._v(" "),_("tr",[_("td",[t._v("ttl")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("data")]),t._v(" "),_("td",[t._v("obj")]),t._v(" "),_("td",[t._v("信息本体")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[_("code",[t._v("data")]),t._v("对象：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("online")]),t._v(" "),_("td",[t._v("obj")]),t._v(" "),_("td",[t._v("所有终端总计人数")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[_("code",[t._v("data")]),t._v("中的"),_("code",[t._v("show_switch")]),t._v("对象：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("online")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("所有终端总计人数")]),t._v(" "),_("td",[t._v("例如"),_("code",[t._v("10万+人在看")])])])])]),t._v(" "),_("p",[_("strong",[t._v("示例：")])]),t._v(" "),_("p",[t._v("查询视频"),_("code",[t._v("av759949922")]),t._v("/"),_("code",[t._v("BV1y64y1q757")]),t._v("中1P("),_("code",[t._v("392402545")]),t._v(")的在线人数")]),t._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -G "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://app.bilibili.com/x/v2/view/video/online'")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aid=759949922'")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appkey=1d8b6e7d45233436'")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cid=392402545'")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ts=0'")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sign=172dfd9941a01275eb93ce6246cd8556'")]),t._v("\n")])])]),_("details",[_("summary",[t._v("查看响应示例：")]),t._v(" "),_("div",{staticClass:"language-json extra-class"},[_("pre",{pre:!0,attrs:{class:"language-json"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ttl"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"online"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total_text"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8万+人在看"')]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42fde7d9"],{"09bf":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("demo-block",[n("div",{staticClass:"buttondemo"},[n("x-button",{attrs:{type:"primary"},on:{click:function(e){t.tost(1)}}},[t._v("文字提示")]),n("x-button",{attrs:{type:"warning"},on:{click:function(e){t.tost(2)}}},[t._v("加载提示")]),n("x-button",{attrs:{type:"danger"},on:{click:function(e){t.tost(3)}}},[t._v("成功")]),n("x-button",{attrs:{type:"danger"},on:{click:function(e){t.tost(4)}}},[t._v("失败")]),n("x-button",{attrs:{type:"primary"},on:{click:function(e){t.tost(5)}}},[t._v("高级提示")])],1)])],1)},i=[],a=n("e7ba"),s=n("d99e"),c={name:"index",components:{demoSection:a["a"],demoBlock:s["a"]},methods:{tost:function(t){var e=this;switch(t){case 1:this.$toast("我是文字提示！");break;case 2:this.$toast.loading({mask:!0,message:"加载中..."});break;case 3:this.$toast.success("成功文案");break;case 4:this.$toast.fail("失败文案");break;default:var n=this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"倒计时 3 秒"}),o=3,i=setInterval(function(){o--,o?n.message="倒计时 ".concat(o," 秒"):(clearInterval(i),e.$toast.clear())},1e3);break}}}},r=c,l=(n("339f"),n("2877")),u=Object(l["a"])(r,o,i,!1,null,"678748ec",null);u.options.__file="index.vue";e["default"]=u.exports},"339f":function(t,e,n){"use strict";var o=n("b272"),i=n.n(o);i.a},"362c":function(t,e,n){},3845:function(t,e,n){},"64f8":function(t,e,n){"use strict";var o=n("362c"),i=n.n(o);i.a},a651:function(t,e,n){"use strict";var o=n("3845"),i=n.n(o);i.a},b272:function(t,e,n){},d99e:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demoblock"},[n("p",{staticClass:"labelt"},[t._v(t._s(t.title))]),n("div",[t._t("default")],2)])},i=[],a={name:"demoBlock",props:{title:{type:String}}},s=a,c=(n("64f8"),n("2877")),r=Object(c["a"])(s,o,i,!1,null,"ce135a58",null);r.options.__file="demoBlock.vue";e["a"]=r.exports},e7ba:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("x-nav-bar",{attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[n("x-icon",{staticClass:"ricon",attrs:{slot:"right",name:"likeempty"},slot:"right"})],1),n("div",{staticClass:"demoContent"},[t._t("default")],2)],1)},i=[],a={name:"demoSection",data:function(){return{title:this.$route.meta.title}},methods:{onClickLeft:function(){this.$router.push("/demo");var t=window.parent.location.hash;t.indexOf("#/demo")<0&&(window.parent.location.href="#/docs")},onClickRight:function(){this.$toast("呵呵")}}},s=a,c=(n("a651"),n("2877")),r=Object(c["a"])(s,o,i,!1,null,"5a2affe6",null);r.options.__file="demoSection.vue";e["a"]=r.exports}}]);
//# sourceMappingURL=chunk-42fde7d9.815e85b8.js.map
webpackJsonp([0],{"LI+B":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("d+YX"),n("dhHF");var o=n("VCXJ"),i={data:function(){return{}},components:{},computed:{},beforeCreate:function(){},beforeMount:function(){},mounted:function(){},methods:{navRout:function(t,e){console.log(e),this.$router.push({name:e})}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("ul",[n("li",[n("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.navRout(e,"index")}}},[t._v("首页")])]),t._v(" "),n("li",[n("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.navRout(e,"daily")}}},[t._v("主题日报")])]),t._v(" "),n("li",[n("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.navRout(e,"showP")}}},[t._v("相册展示")])]),t._v(" "),n("li",[n("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.navRout(e,"about")}}},[t._v("关于")])])])])},staticRenderFns:[]},r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"apptest-footer"},[e("p",[this._v("关于apptest介绍文档")])])}]},c={name:"home",data:function(){return{msg:"home"}},components:{"nav-top":n("8AGX")(i,a,!1,function(t){n("VAFR")},null,null).exports,"nav-bom":n("8AGX")({data:function(){return{}},components:{},computed:{},beforeCreate:function(){},beforeMount:function(){},mounted:function(){},methods:{}},r,!1,function(t){n("LI+B")},null,null).exports},computed:{},beforeCreate:function(){},beforeMount:function(){},mounted:function(){},methods:{}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"apptest"},[e("nav-top"),this._v(" "),e("router-view"),this._v(" "),e("nav-bom")],1)])},staticRenderFns:[]},u=n("8AGX")(c,s,!1,function(t){n("PVrg")},null,null).exports,m=n("zO6J"),f={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"apptest-homelst"},[this._v("\n  home\n")])},staticRenderFns:[]},d=n("8AGX")({name:"home",data:function(){return{msg:"home"}},components:{},computed:{},beforeCreate:function(){},beforeMount:function(){},mounted:function(){},methods:{}},f,!1,function(t){n("Ree5")},"data-v-4fc3df93",null).exports,l={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  daily\n")])},staticRenderFns:[]},p=n("8AGX")({name:"home",data:function(){return{msg:"home"}},components:{},computed:{},beforeCreate:function(){},beforeMount:function(){},mounted:function(){},methods:{}},l,!1,function(t){n("r6PI")},"data-v-6e8a165c",null).exports,h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"apptest-homelst"},[this._v("\n  SHOWP\n")])},staticRenderFns:[]},v=n("8AGX")({name:"home",data:function(){return{msg:"home"}},components:{},computed:{},beforeCreate:function(){},beforeMount:function(){},mounted:function(){},methods:{}},h,!1,function(t){n("O5s6")},"data-v-e5b5fdb2",null).exports,b={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  About\n")])},staticRenderFns:[]},_=n("8AGX")({name:"home",data:function(){return{msg:"home"}},components:{},computed:{},beforeCreate:function(){},beforeMount:function(){},mounted:function(){},methods:{}},b,!1,function(t){n("pilt")},"data-v-760dd3fc",null).exports;o.a.use(m.a);var x=new m.a({routes:[{path:"/",name:"index",component:d},{path:"/daily",name:"daily",component:p},{path:"/showP",name:"showP",component:v},{path:"/about",name:"about",component:_}]}),g=n("9rMa");o.a.use(m.a),o.a.use(g.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:x,template:"<App/>",components:{App:u}})},O5s6:function(t,e){},PVrg:function(t,e){},Ree5:function(t,e){},VAFR:function(t,e){},"d+YX":function(t,e){},dhHF:function(t,e){!function(t,e){function n(){var e=a.getBoundingClientRect().width;e/s>540&&(e=540*s);var n=e/10;a.style.fontSize=n+"px",m.rem=t.rem=n}var o,i=t.document,a=i.documentElement,r=i.querySelector('meta[name="viewport"]'),c=i.querySelector('meta[name="flexible"]'),s=0,u=0,m=e.flexible||(e.flexible={});if(r){var f=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);f&&(u=parseFloat(f[1]),s=parseInt(1/u))}else if(c){var d=c.getAttribute("content");if(d){var l=d.match(/initial\-dpr=([\d\.]+)/),p=d.match(/maximum\-dpr=([\d\.]+)/);l&&(s=parseFloat(l[1]),u=parseFloat((1/s).toFixed(2))),p&&(s=parseFloat(p[1]),u=parseFloat((1/s).toFixed(2)))}}if(!s&&!u){t.navigator.appVersion.match(/android/gi);var h=t.navigator.appVersion.match(/iphone/gi),v=t.devicePixelRatio;u=1/(s=h?v>=3&&(!s||s>=3)?3:v>=2&&(!s||s>=2)?2:1:1)}if(a.setAttribute("data-dpr",s),!r)if((r=i.createElement("meta")).setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+u+", maximum-scale="+u+", minimum-scale="+u+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(r);else{var b=i.createElement("div");b.appendChild(r),i.write(b.innerHTML)}t.addEventListener("resize",function(){clearTimeout(o),o=setTimeout(n,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(o),o=setTimeout(n,300))},!1),"complete"===i.readyState?i.body.style.fontSize=12*s+"px":i.addEventListener("DOMContentLoaded",function(t){i.body.style.fontSize=12*s+"px"},!1),n(),m.dpr=t.dpr=s,m.refreshRem=n,m.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},m.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},pilt:function(t,e){},r6PI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.900ff4487ce0257f6f46.js.map
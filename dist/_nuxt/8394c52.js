(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{310:function(t,e,n){"use strict";n.r(e);var r,o,c,l=n(32),f=(n(2),n(1),n(13),n(33)),h=(n(83),n(0)),y=n(34),d=n(28),w=(n(52),n(17),n(15),n(3),n(27),n(5),n(4),n(6),n(7),n(305));o=!1,r=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.args,r=e.callback,c=e.method,f=void 0===c?"debug":c;o||((t=console)[f].apply(t,Object(l.a)(n)),"function"==typeof r&&r());return n[n.length-1]},c=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r({args:e})},c.breakpoint=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r({args:e,callback:function(){}})},["log","warn","debug","error"].forEach((function(t){return c[t]=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return r({args:n,method:t})}})),c.disable=function(){return o=!0};var m=c,v=n(306),O=n.n(v);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C,P={data:function(){return{whilst:{}}},methods:{actionPromise:function(t){var e;return null!=(e=this.whilst[t])?e:Promise.resolve()},try:(C=Object(f.a)(regeneratorRuntime.mark((function t(e,n){var r,o,c,l,track,f,h,y,d,w,m,v=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=v.length>2&&void 0!==v[2]?v[2]:{},o=r.errorMessage,c=r.except,l=r.track,track=void 0===l||l,f=r.mixpanelProps,track&&(y=this.mixpanel),this[e]=!0,w=null,d=null,this.whilst[e]=new Promise((function(t,e){return w=t,d=e})),t.prev=6,console.log("Started ".concat(e)),null!=y&&y.track("".concat(e," started"),f),t.t0=w,t.next=12,n.call(this);case 12:return t.t1=m=t.sent,(0,t.t0)(t.t1),null!=y&&y.track("".concat(e," succeeded"),f),t.abrupt("return",m);case 18:return t.prev=18,t.t2=t.catch(6),h=t.t2,console.error("Error while ".concat(e,": ").concat(h)),null!=y&&y.track("".concat(e," failed"),S({error:h.message},f)),"function"==typeof o&&(o=o(h)),this.alert(o),"function"==typeof c&&c(h),t.abrupt("return",d(h));case 27:return t.prev=27,this[e]=!1,console.log("Finished ".concat(e)),t.finish(27);case 31:case"end":return t.stop()}}),t,this,[[6,18,27,31]])}))),function(t,e){return C.apply(this,arguments)}),alert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something went wrong.";return this.$bvToast.toast("See console for error details.",{title:t,variant:"danger",solid:!0,autoHideDelay:5e3})}}},A={mixins:[function(){var t,e,n,r,o,c,l,f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},v=f.prefix,k=f.keys,x=f.format,S=void 0===x?"json":x;return m("Exporting syncLocal mixin with arguments: ".concat(JSON.stringify(arguments[0]))),"yaml"===S?(o=w.a.load,n=w.a.dump):(o=JSON.parse,n=JSON.stringify),l=null,t=function(t,e){return"object"===Object(d.a)(e)&&null!==e?o(t||null):"number"==typeof e?parseFloat(t||null):"boolean"==typeof e?"boolean"==typeof t?t:"true"===t:t||null},c=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter(O.a.identity).join(".")},m("Using data paths:",e=k.reduce((function(t,e){var n;if(O.a.isArray(e)){var r=e,o=Object(y.a)(r,2);e=o[0],n=o[1].dataPath}return Object.assign(t,Object(h.a)({},e,c(n,e)))}),{})),m("Converted keys back to plain strings:",k=k.map((function(t){return O.a.isArray(t)?t[0]:t}))),m("Using local keys:",r=k.reduce((function(t,e){return Object.assign(t,Object(h.a)({},e,c(v,e)))}),{})),{data:function(){return{syncLocal:{promise:new Promise((function(t){return l=t})),values:null,loaded:!1,ignoreWatchers:[]}}},mounted:function(){var n=this;return k.forEach((function(o){var c,l,f;if(m("Syncing key ".concat(o," from local storage for component ").concat(n.$options.name)),m("Local value:",f=window.localStorage.getItem(r[o])),c=e[o],void 0===(l=O.a.get(n,c)))throw new Error("Default value for key `".concat(o,"` does not exist at `").concat(c,"`"));return console.log({key:o,localValue:f,defaultValue:l}),f=t(f,l),O.a.set(n,c,m("Setting ".concat(o," at ").concat(c," to:"),O.a.isObject(l)&&!O.a.isArray(l)?j(j({},l),f):f||l))})),this.$nextTick((function(){return Object.assign(n.syncLocal,{values:O.a.mapValues(e,(function(t){return O.a.get(n,t)})),loaded:!0}),l(n.syncLocal.values)}))},watch:j({},k.reduce((function(t,e){return Object.assign(t,Object(h.a)({},e,{deep:!0,handler:function(t){var o;return this.syncLocal.loaded?(o=r[e],window.localStorage.setItem(o,"object"===Object(d.a)(t)?n(t):t),m("Saved ".concat(e," to local storage as ").concat(o)),this.syncLocal.ignoreWatchers=O.a.without(this.syncLocal.ignoreWatchers,e)):this.syncLocal.ignoreWatchers.push(e)}}))}),{}))}}({keys:["whats","forWhat","openAIkey","format"],format:"yaml",prefix:"polygon"}),P],data:function(){return{whats:["name","tagline"],newWhat:"",forWhat:"A startup for people who would like to have a startup",openAIkey:"",generated:"",formats:["fetch","curl","js"],format:"fetch",generating:!1}},computed:{code:function(){switch(this.format){case"fetch":return"await(\n  await(\n    fetch('".concat("https://ideality.app/api/polygon","/generate', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        what: ").concat(JSON.stringify(this.whats),",\n        for: ").concat(JSON.stringify(this.forWhat),",\n        openAIkey: ").concat(JSON.stringify(this.openAIkey),"\n      })\n    })\n  )\n).json()");case"curl":return'curl -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"what": '.concat(JSON.stringify(this.whats),', "for": ').concat(JSON.stringify(this.forWhat),', "openAIkey": ').concat(JSON.stringify(this.openAIkey),"}' \\\n  ").concat("https://ideality.app/api/polygon","/generate");case"js":return"// COMING SOON:\n//\n// import Generate from 'polygon-ai'\n// \n// const generate = new Generate({\n//   openAIkey: ".concat(JSON.stringify(this.openAIkey),"\n// })\n// \n// const response = await generate(\n//   ").concat(JSON.stringify(this.whats),", {\n//     for: ").concat(JSON.stringify(this.forWhat),"\n//   }\n// )")}}},methods:{copyToClipboard:function(){return window.navigator.clipboard.writeText(this.code)},generate:function(){return this.try("generating",Object(f.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://ideality.app/api/polygon","/generate"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({what:this.whats,for:this.forWhat,openAIkey:this.openAIkey})});case 2:return t.next=4,t.sent.json();case 4:return this.generated=t.sent,this.generated=JSON.stringify(this.generated,null,2),t.abrupt("return",this.$nextTick((function(){return e.$refs.generated.scrollIntoView()})));case 7:case"end":return t.stop()}}),t,this)}))))}}},_=A,I=n(79),component=Object(I.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vh-100 d-flex flex-column justify-content-center align-items-center"},[e("b-container",[e("h1",{staticClass:"display-3 mb-5 text-center",staticStyle:{"font-size":"2.5em"}},[e("strong",[t._v("Polygon.  ")]),t._v("Add AI to your app with a couple lines of code")]),e("b-row",{staticClass:"justify-content-center"},[e("b-col",{staticClass:"col-12 col-lg-4"},[e("h3",[t._v("What do you want to generate?")]),e("div",{staticClass:"d-flex flex-wrap align-items-center"},[t._l(t.whats,(function(n){return e("div",{key:n,staticClass:"bg-light border px-2 py-1 m-1"},[t._v(t._s(n)),t.whats.length>1?e("b-button",{staticClass:"ml-2 text-muted",attrs:{size:"sm",variant:"light"},on:{click:function(e){t.whats=t.whats.filter((function(t){return t!==n}))}}},[e("b-icon-x-circle")],1):t._e()],1)})),e("div",{staticClass:"bg-light border px-2 py-1 m-1"},[e("b-input",{staticStyle:{width:"120px"},attrs:{placeholder:"What else?"},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.whats=[].concat(Object(l.a)(t.whats),[t.newWhat]),t.newWhat=""}},model:{value:t.newWhat,callback:function(e){t.newWhat=e},expression:"newWhat"}})],1)],2),e("h3",[t._v("For what?")]),e("b-input",{attrs:{placeholder:"E.g. 'an app that sells shoes to cats'"},model:{value:t.forWhat,callback:function(e){t.forWhat=e},expression:"forWhat"}}),e("div",{staticClass:"mt-3"},[e("b-form-group",{attrs:{label:"OpenAI API key"},scopedSlots:t._u([{key:"description",fn:function(){return[t._v("We don’t store "),e("a",{attrs:{href:"https://beta.openai.com/account/api-keys",target:"_blank"}},[t._v("your key")]),t._v(", it’s only used to make requests to OpenAI’s API.")]},proxy:!0}])},[e("b-input",{attrs:{placeholder:"sk-..."},model:{value:t.openAIkey,callback:function(e){t.openAIkey=e},expression:"openAIkey"}})],1)],1)],1),e("b-col",{staticClass:"col-12 col-lg-4"},[e("h3",[t._v("Here’s your code:")]),e("div",{staticClass:"d-flex justify-content-between"},[e("b-button-group",{staticClass:"mb-2"},t._l(t.formats,(function(n){return e("b-button",{key:n,attrs:{size:"sm",variant:n===t.format?"secondary":"outline-secondary"},on:{click:function(e){t.format=n}}},[t._v(t._s(n))])})),1)],1),e("div",{staticClass:"bg-dark p-3 rounded"},[e("pre",{staticClass:"text-white",staticStyle:{"white-space":"pre-wrap","font-size":"0.6em",height:"300px","overflow-y":"auto"},domProps:{textContent:t._s(t.code)}})]),e("div",{staticClass:"d-flex justify-content-between mt-2"},[e("b-button",{attrs:{disabled:!t.openAIkey||t.generating,variant:t.generating?"light":"primary",size:"lg"},on:{click:t.generate}},[t.generating?e("span",[e("b-spinner",{staticClass:"mr-2",attrs:{small:""}}),t._v("Generating...")],1):e("span",[e("b-icon-play"),t._v("Try it!")],1)]),e("b-button",{staticClass:"text-muted",attrs:{variant:"light",size:"sm"},on:{click:t.copyToClipboard}},[e("b-icon-clipboard")],1)],1)]),t.generated?e("b-col",{ref:"generated",staticClass:"col-12 col-lg-4"},[e("h3",[t._v("Here’s the response JSON:")]),e("div",{staticClass:"bg-dark p-3 rounded"},[e("pre",{staticClass:"text-white",staticStyle:{"white-space":"pre-wrap","font-size":"0.6em",height:"300px","overflow-y":"auto"},domProps:{textContent:t._s(t.generated)}})])]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4eb05298"],{"014b":function(t,e,i){"use strict";var n=i("e53d"),a=i("07e3"),o=i("8e60"),s=i("63b6"),r=i("9138"),l=i("ebfd").KEY,c=i("294c"),u=i("dbdb"),v=i("45f2"),d=i("62a0"),h=i("5168"),f=i("ccb9"),p=i("6718"),g=i("47ee"),b=i("9003"),m=i("e4ae"),y=i("f772"),w=i("241e"),k=i("36c3"),x=i("1bc3"),_=i("aebd"),j=i("a159"),O=i("0395"),S=i("bf0b"),T=i("9aa9"),C=i("d9f6"),A=i("c3a1"),$=S.f,P=C.f,E=O.f,D=n.Symbol,B=n.JSON,F=B&&B.stringify,V="prototype",L=h("_hidden"),N=h("toPrimitive"),I={}.propertyIsEnumerable,Y=u("symbol-registry"),M=u("symbols"),X=u("op-symbols"),H=Object[V],K="function"==typeof D&&!!T.f,R=n.QObject,W=!R||!R[V]||!R[V].findChild,z=o&&c(function(){return 7!=j(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,e,i){var n=$(H,e);n&&delete H[e],P(t,e,i),n&&t!==H&&P(H,e,n)}:P,J=function(t){var e=M[t]=j(D[V]);return e._k=t,e},Z=K&&"symbol"==typeof D.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof D},q=function(t,e,i){return t===H&&q(X,e,i),m(t),e=x(e,!0),m(i),a(M,e)?(i.enumerable?(a(t,L)&&t[L][e]&&(t[L][e]=!1),i=j(i,{enumerable:_(0,!1)})):(a(t,L)||P(t,L,_(1,{})),t[L][e]=!0),z(t,e,i)):P(t,e,i)},G=function(t,e){m(t);var i,n=g(e=k(e)),a=0,o=n.length;while(o>a)q(t,i=n[a++],e[i]);return t},U=function(t,e){return void 0===e?j(t):G(j(t),e)},Q=function(t){var e=I.call(this,t=x(t,!0));return!(this===H&&a(M,t)&&!a(X,t))&&(!(e||!a(this,t)||!a(M,t)||a(this,L)&&this[L][t])||e)},tt=function(t,e){if(t=k(t),e=x(e,!0),t!==H||!a(M,e)||a(X,e)){var i=$(t,e);return!i||!a(M,e)||a(t,L)&&t[L][e]||(i.enumerable=!0),i}},et=function(t){var e,i=E(k(t)),n=[],o=0;while(i.length>o)a(M,e=i[o++])||e==L||e==l||n.push(e);return n},it=function(t){var e,i=t===H,n=E(i?X:k(t)),o=[],s=0;while(n.length>s)!a(M,e=n[s++])||i&&!a(H,e)||o.push(M[e]);return o};K||(D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(i){this===H&&e.call(X,i),a(this,L)&&a(this[L],t)&&(this[L][t]=!1),z(this,t,_(1,i))};return o&&W&&z(H,t,{configurable:!0,set:e}),J(t)},r(D[V],"toString",function(){return this._k}),S.f=tt,C.f=q,i("6abf").f=O.f=et,i("355d").f=Q,T.f=it,o&&!i("b8e3")&&r(H,"propertyIsEnumerable",Q,!0),f.f=function(t){return J(h(t))}),s(s.G+s.W+s.F*!K,{Symbol:D});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),at=0;nt.length>at;)h(nt[at++]);for(var ot=A(h.store),st=0;ot.length>st;)p(ot[st++]);s(s.S+s.F*!K,"Symbol",{for:function(t){return a(Y,t+="")?Y[t]:Y[t]=D(t)},keyFor:function(t){if(!Z(t))throw TypeError(t+" is not a symbol!");for(var e in Y)if(Y[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),s(s.S+s.F*!K,"Object",{create:U,defineProperty:q,defineProperties:G,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:it});var rt=c(function(){T.f(1)});s(s.S+s.F*rt,"Object",{getOwnPropertySymbols:function(t){return T.f(w(t))}}),B&&s(s.S+s.F*(!K||c(function(){var t=D();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){var e,i,n=[t],a=1;while(arguments.length>a)n.push(arguments[a++]);if(i=e=n[1],(y(e)||void 0!==t)&&!Z(t))return b(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!Z(e))return e}),n[1]=e,F.apply(B,n)}}),D[V][N]||i("35e8")(D[V],N,D[V].valueOf),v(D,"Symbol"),v(Math,"Math",!0),v(n.JSON,"JSON",!0)},"0395":function(t,e,i){var n=i("36c3"),a=i("6abf").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],r=function(t){try{return a(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?r(t):a(n(t))}},"14ec":function(t,e,i){"use strict";i("f7dc");var n=i("80d2"),a=i("2b0e");e["a"]=a["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean},data:function(){return{overlay:null,overlayOffset:0,overlayTimeout:void 0,overlayTransitionDuration:650}},watch:{hideOverlay:function(t){t?this.removeOverlay():this.genOverlay()}},beforeDestroy:function(){this.removeOverlay()},methods:{genOverlay:function(){var t=this;if(!this.isActive||this.hideOverlay||this.isActive&&this.overlayTimeout||this.overlay)return clearTimeout(this.overlayTimeout),this.overlay&&this.overlay.classList.add("v-overlay--active");this.overlay=document.createElement("div"),this.overlay.className="v-overlay",this.absolute&&(this.overlay.className+=" v-overlay--absolute"),this.hideScroll();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");return e&&e.insertBefore(this.overlay,e.firstChild),this.overlay.clientHeight,requestAnimationFrame(function(){t.overlay&&(t.overlay.className+=" v-overlay--active",void 0!==t.activeZIndex&&(t.overlay.style.zIndex=String(t.activeZIndex-1)))}),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.overlay)return e&&this.showScroll();this.overlay.classList.remove("v-overlay--active"),this.overlayTimeout=window.setTimeout(function(){try{t.overlay&&t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.overlay=null,e&&t.showScroll()}catch(i){console.log(i)}clearTimeout(t.overlayTimeout),t.overlayTimeout=void 0},this.overlayTransitionDuration)},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[n["p"].up,n["p"].pageup],i=[n["p"].down,n["p"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,a=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(a,n))||this.shouldScroll(n,i)}for(var o=0;o<e.length;o++){var s=e[o];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return this.shouldScroll(s,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(n["a"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},"169a":function(t,e,i){"use strict";i("6ec0");var n=i("c69d"),a=i("30d4"),o=i("14ec"),s=i("e949"),r=i("261e"),l=i("98a1"),c=i("c584"),u=i("80d2"),v=i("bfc5"),d=i("d9bd"),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e["a"]={name:"v-dialog",directives:{ClickOutside:c["a"]},mixins:[n["a"],a["a"],o["a"],s["a"],r["a"],l["a"]],props:{disabled:Boolean,persistent:Boolean,fullscreen:Boolean,fullWidth:Boolean,noClickAnimation:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[String,Number],default:"none"},origin:{type:String,default:"center center"},width:{type:[String,Number],default:"auto"},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"}},data:function(){return{animate:!1,animateTimeout:null,stackClass:"v-dialog__content--active",stackMinZIndex:200}},computed:{classes:function(){var t;return t={},f(t,("v-dialog "+this.contentClass).trim(),!0),f(t,"v-dialog--active",this.isActive),f(t,"v-dialog--persistent",this.persistent),f(t,"v-dialog--fullscreen",this.fullscreen),f(t,"v-dialog--scrollable",this.scrollable),f(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},beforeMount:function(){var t=this;this.$nextTick(function(){t.isBooted=t.isActive,t.isActive&&t.show()})},mounted:function(){"v-slot"===Object(u["l"])(this,"activator",!0)&&Object(d["a"])("v-dialog's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick(function(){t.animate=!0,clearTimeout(t.animateTimeout),t.animateTimeout=setTimeout(function(){return t.animate=!1},150)})},closeConditional:function(t){return!(!this.isActive||this.$refs.content.contains(t.target))&&(this.persistent?(this.noClickAnimation||this.overlay!==t.target||this.animateClick(),!1):this.activeZIndex>=this.getMaxZIndex())},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):o["a"].options.methods.hideScroll.call(this)},show:function(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$refs.content.focus(),this.bind()},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onKeydown:function(t){if(t.keyCode===u["p"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick(function(){return e&&e.focus()})}this.$emit("keydown",t)},onFocusin:function(t){var e=event,i=e.target;if(![document,this.$refs.content].includes(i)&&!this.$refs.content.contains(i)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(function(t){return t.contains(i)})){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}},getActivator:function(t){if(this.$refs.activator)return this.$refs.activator.children.length>0?this.$refs.activator.children[0]:this.$refs.activator;if(t&&(this.activatedBy=t.currentTarget||t.target),this.activatedBy)return this.activatedBy;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode[0]:this.activatorNode,i=e&&e.elm;if(i)return i}return null},genActivator:function(){var t=this;if(!this.hasActivator)return null;var e=this.disabled?{}:{click:function(e){e.stopPropagation(),t.getActivator(e),t.disabled||(t.isActive=!t.isActive)}};if("scoped"===Object(u["l"])(this,"activator")){var i=this.$scopedSlots.activator({on:e});return this.activatorNode=i,i}return this.$createElement("div",{staticClass:"v-dialog__activator",class:{"v-dialog__activator--disabled":this.disabled},ref:"activator",on:e},this.$slots.activator)}},render:function(t){var e=this,i=[],n={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:function(){e.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}}};this.fullscreen||(n.style={maxWidth:"none"===this.maxWidth?void 0:Object(u["c"])(this.maxWidth),width:"auto"===this.width?void 0:Object(u["c"])(this.width)}),i.push(this.genActivator());var a=t("div",n,this.showLazyContent(this.$slots.default));return this.transition&&(a=t("transition",{props:{name:this.transition,origin:this.origin}},[a])),i.push(t("div",{class:this.contentClasses,attrs:h({tabIndex:"-1"},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(v["a"],{props:{root:!0,light:this.light,dark:this.dark}},[a])])),t("div",{staticClass:"v-dialog__container",style:{display:!this.hasActivator||this.fullWidth?"block":"inline-block"}},i)}}},"268f":function(t,e,i){t.exports=i("fde4")},"2e29":function(t,e,i){},"32a6":function(t,e,i){var n=i("241e"),a=i("c3a1");i("ce7ec")("keys",function(){return function(t){return a(n(t))}})},"355d":function(t,e){e.f={}.propertyIsEnumerable},"454f":function(t,e,i){i("46a7");var n=i("584a").Object;t.exports=function(t,e,i){return n.defineProperty(t,e,i)}},"46a7":function(t,e,i){var n=i("63b6");n(n.S+n.F*!i("8e60"),"Object",{defineProperty:i("d9f6").f})},"47ee":function(t,e,i){var n=i("c3a1"),a=i("9aa9"),o=i("355d");t.exports=function(t){var e=n(t),i=a.f;if(i){var s,r=i(t),l=o.f,c=0;while(r.length>c)l.call(t,s=r[c++])&&e.push(s)}return e}},5368:function(t,e,i){"use strict";var n=i("c37a"),a=i("3ccf"),o=i("2b0e"),s=o["a"].extend({name:"rippleable",directives:{Ripple:a["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),r=i("5e28");e["a"]=n["a"].extend({name:"selectable",mixins:[s,r["a"]],model:{prop:"inputValue",event:"change"},props:{color:{type:String,default:"accent"},id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(t){return{lazyValue:t.inputValue}},computed:{computedColor:function(){return this.isActive?this.color:this.validationState},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some(function(i){return t.valueComparator(i,e)}):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(t){this.lazyValue=t}},methods:{genLabel:function(){if(!this.hasLabel)return null;var t=n["a"].options.methods.genLabel.call(this);return t.data.on={click:this.onChange},t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-label":this.label,"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.id,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter(function(i){return!t.valueComparator(i,e)}),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},"555f":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-container",{staticClass:"ksu-loader",attrs:{fluid:"","fill-height":""}},[i("v-layout",{attrs:{"fill-height":"","justify-center":"","align-center":""}},[i("v-progress-circular",{attrs:{width:"16",size:"126",color:"indigo",indeterminate:""}})],1)],1):t._e()},a=[],o={name:"Loader",props:["show"]},s=o,r=(i("a071"),i("2877")),l=i("6544"),c=i.n(l),u=i("a523"),v=i("a722"),d=i("490a"),h=Object(r["a"])(s,n,a,!1,null,null,null);e["a"]=h.exports;c()(h,{VContainer:u["a"],VLayout:v["a"],VProgressCircular:d["a"]})},"5e28":function(t,e,i){"use strict";var n=i("2b0e"),a=i("80d2");e["a"]=n["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["g"]}}})},6718:function(t,e,i){var n=i("e53d"),a=i("584a"),o=i("b8e3"),s=i("ccb9"),r=i("d9f6").f;t.exports=function(t){var e=a.Symbol||(a.Symbol=o?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||r(e,t,{value:s.f(t)})}},"6abf":function(t,e,i){var n=i("e6f3"),a=i("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},"6ec0":function(t,e,i){},"83fb":function(t,e,i){"use strict";var n=i("16c8");e["a"]={get:function(){return n["a"].get("/api/settings").then(function(t){return t.data})},put:function(t){return n["a"].put("/api/settings",t).then(function(t){return t.data})}}},"85f2":function(t,e,i){t.exports=i("454f")},"8aae":function(t,e,i){i("32a6"),t.exports=i("584a").Object.keys},9003:function(t,e,i){var n=i("6b4c");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"94a7":function(t,e,i){},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a071:function(t,e,i){"use strict";var n=i("de10"),a=i.n(n);a.a},a4bb:function(t,e,i){t.exports=i("8aae")},a595:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app-settings"}},[i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-toolbar-title",[t._v("Settings")])],1),i("v-container",{attrs:{fluid:""}},[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{md6:"",xs12:""}},[i("v-list",{attrs:{"two-line":""}},[i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-avatar",[i("v-btn",{attrs:{icon:"",dark:"",color:"indigo"},on:{click:function(e){t.activeFieldsDialog="pekerjaan"}}},[i("v-icon",[t._v("create")])],1),i("v-dialog",{attrs:{value:"pekerjaan"===t.activeFieldsDialog,width:"500"}},[i("v-card",[i("v-card-text",[i("v-text-field",{attrs:{type:"number",label:"Bobot",min:"0"},model:{value:t.settings.pekerjaan.weight,callback:function(e){t.$set(t.settings.pekerjaan,"weight",t._n(e))},expression:"settings.pekerjaan.weight"}}),t._l(t.settings.pekerjaan.options,function(e,n){return[i("v-text-field",{key:"pekerjaan-opt-"+n,attrs:{type:"number",label:e.text,min:"0"},model:{value:e.value,callback:function(i){t.$set(e,"value",t._n(i))},expression:"opt.value"}}),i("v-divider",{key:"pekerjaan-opt-div-"+n})]})],2),i("v-card-actions",[i("v-btn",{attrs:{dark:"",color:"red",depressed:"",block:""},on:{click:function(e){t.activeFieldsDialog=void 0}}},[t._v("\n                      Close\n                    ")])],1)],1)],1)],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Pekerjaan")]),i("v-list-tile-sub-title",[t._v("Bobot: "+t._s(t.settings.pekerjaan.weight))])],1),i("v-list-tile-action",[i("v-switch",{model:{value:t.settings.pekerjaan.cost,callback:function(e){t.$set(t.settings.pekerjaan,"cost",e)},expression:"settings.pekerjaan.cost"}}),i("v-list-tile-action-text",[t._v("Cost")])],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-avatar",[i("v-btn",{attrs:{icon:"",dark:"",color:"indigo"},on:{click:function(e){t.activeFieldsDialog="penghasilan"}}},[i("v-icon",[t._v("create")])],1),i("v-dialog",{attrs:{value:"penghasilan"===t.activeFieldsDialog,width:"500"}},[i("v-card",[i("v-card-text",[i("v-text-field",{attrs:{type:"number",label:"Bobot",min:"0"},model:{value:t.settings.penghasilan.weight,callback:function(e){t.$set(t.settings.penghasilan,"weight",t._n(e))},expression:"settings.penghasilan.weight"}}),t._l(t.settings.penghasilan.options,function(e,n){return[i("v-text-field",{key:"penghasilan-opt-"+n,attrs:{type:"number",label:e.lower+" - "+e.upper,min:"0"},model:{value:e.value,callback:function(i){t.$set(e,"value",t._n(i))},expression:"opt.value"}}),i("v-divider",{key:"penghasilan-opt-div-"+n})]})],2),i("v-card-actions",[i("v-btn",{attrs:{dark:"",color:"red",depressed:"",block:""},on:{click:function(e){t.activeFieldsDialog=void 0}}},[t._v("\n                      Close\n                    ")])],1)],1)],1)],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Penghasilan")]),i("v-list-tile-sub-title",[t._v("Bobot: "+t._s(t.settings.penghasilan.weight))])],1),i("v-list-tile-action",[i("v-switch",{model:{value:t.settings.pekerjaan.cost,callback:function(e){t.$set(t.settings.pekerjaan,"cost",e)},expression:"settings.pekerjaan.cost"}}),i("v-list-tile-action-text",[t._v("Cost")])],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-avatar",[i("v-btn",{attrs:{icon:"",dark:"",color:"indigo"},on:{click:function(e){t.activeFieldsDialog="jaminan"}}},[i("v-icon",[t._v("create")])],1),i("v-dialog",{attrs:{value:"jaminan"===t.activeFieldsDialog,width:"500"}},[i("v-card",[i("v-card-text",[i("v-text-field",{attrs:{type:"number",label:"Bobot",min:"0"},model:{value:t.settings.jaminan.weight,callback:function(e){t.$set(t.settings.jaminan,"weight",t._n(e))},expression:"settings.jaminan.weight"}}),t._l(t.settings.jaminan.options,function(e,n){return[i("v-text-field",{key:"jaminan-opt-"+n,attrs:{type:"number",label:e.text,min:"0"},model:{value:e.value,callback:function(i){t.$set(e,"value",t._n(i))},expression:"opt.value"}}),i("v-divider",{key:"jaminan-opt-div-"+n})]})],2),i("v-card-actions",[i("v-btn",{attrs:{dark:"",color:"red",depressed:"",block:""},on:{click:function(e){t.activeFieldsDialog=void 0}}},[t._v("\n                      Close\n                    ")])],1)],1)],1)],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Jaminan")]),i("v-list-tile-sub-title",[t._v("Bobot: "+t._s(t.settings.jaminan.weight))])],1),i("v-list-tile-action",[i("v-switch",{model:{value:t.settings.jaminan.cost,callback:function(e){t.$set(t.settings.jaminan,"cost",e)},expression:"settings.jaminan.cost"}}),i("v-list-tile-action-text",[t._v("Cost")])],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-avatar",[i("v-btn",{attrs:{icon:"",dark:"",color:"indigo"},on:{click:function(e){t.activeFieldsDialog="kondisiTempatTinggal"}}},[i("v-icon",[t._v("create")])],1),i("v-dialog",{attrs:{value:"kondisiTempatTinggal"===t.activeFieldsDialog,width:"500"}},[i("v-card",[i("v-card-text",[i("v-text-field",{attrs:{type:"number",label:"Bobot",min:"0"},model:{value:t.settings.kondisiTempatTinggal.weight,callback:function(e){t.$set(t.settings.kondisiTempatTinggal,"weight",t._n(e))},expression:"settings.kondisiTempatTinggal.weight"}}),t._l(t.settings.kondisiTempatTinggal.options,function(e,n){return[i("v-text-field",{key:"jaminan-opt-"+n,attrs:{type:"number",label:e.text,min:"0"},model:{value:e.value,callback:function(i){t.$set(e,"value",t._n(i))},expression:"opt.value"}}),i("v-divider",{key:"jaminan-opt-div-"+n})]})],2),i("v-card-actions",[i("v-btn",{attrs:{dark:"",color:"red",depressed:"",block:""},on:{click:function(e){t.activeFieldsDialog=void 0}}},[t._v("\n                      Close\n                    ")])],1)],1)],1)],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Kondisi Tempat Tinggal")]),i("v-list-tile-sub-title",[t._v("Bobot: "+t._s(t.settings.kondisiTempatTinggal.weight))])],1),i("v-list-tile-action",[i("v-switch",{model:{value:t.settings.kondisiTempatTinggal.cost,callback:function(e){t.$set(t.settings.kondisiTempatTinggal,"cost",e)},expression:"settings.kondisiTempatTinggal.cost"}}),i("v-list-tile-action-text",[t._v("Cost")])],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-avatar",[i("v-btn",{attrs:{icon:"",dark:"",color:"indigo"},on:{click:function(e){t.activeFieldsDialog="tanggungan"}}},[i("v-icon",[t._v("create")])],1),i("v-dialog",{attrs:{value:"tanggungan"===t.activeFieldsDialog,width:"500"}},[i("v-card",[i("v-card-text",[i("v-text-field",{attrs:{type:"number",label:"Bobot",min:"0"},model:{value:t.settings.tanggungan.weight,callback:function(e){t.$set(t.settings.tanggungan,"weight",t._n(e))},expression:"settings.tanggungan.weight"}}),t._l(t.settings.tanggungan.options,function(e,n){return[i("v-text-field",{key:"tanggungan-opt-"+n,attrs:{type:"number",label:e.lower+" - "+e.upper,min:"0"},model:{value:e.value,callback:function(i){t.$set(e,"value",t._n(i))},expression:"opt.value"}}),i("v-divider",{key:"tanggungan-opt-div-"+n})]})],2),i("v-card-actions",[i("v-btn",{attrs:{dark:"",color:"red",depressed:"",block:""},on:{click:function(e){t.activeFieldsDialog=void 0}}},[t._v("\n                      Close\n                    ")])],1)],1)],1)],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Tanggungan")]),i("v-list-tile-sub-title",[t._v("Bobot: "+t._s(t.settings.tanggungan.weight))])],1),i("v-list-tile-action",[i("v-switch",{model:{value:t.settings.tanggungan.cost,callback:function(e){t.$set(t.settings.tanggungan,"cost",e)},expression:"settings.tanggungan.cost"}}),i("v-list-tile-action-text",[t._v("Cost")])],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-avatar",[i("v-btn",{attrs:{icon:"",dark:"",color:"indigo"},on:{click:function(e){t.activeFieldsDialog="jangkaAngsuran"}}},[i("v-icon",[t._v("create")])],1),i("v-dialog",{attrs:{value:"jangkaAngsuran"===t.activeFieldsDialog,width:"500"}},[i("v-card",[i("v-card-text",[i("v-text-field",{attrs:{type:"number",label:"Bobot",min:"0"},model:{value:t.settings.jangkaAngsuran.weight,callback:function(e){t.$set(t.settings.jangkaAngsuran,"weight",t._n(e))},expression:"settings.jangkaAngsuran.weight"}}),t._l(t.settings.jangkaAngsuran.options,function(e,n){return[i("v-text-field",{key:"ja-opt-"+n,attrs:{type:"number",label:e.lower+" - "+e.upper,min:"0"},model:{value:e.value,callback:function(i){t.$set(e,"value",t._n(i))},expression:"opt.value"}}),i("v-divider",{key:"ja-opt-div-"+n})]})],2),i("v-card-actions",[i("v-btn",{attrs:{dark:"",color:"red",depressed:"",block:""},on:{click:function(e){t.activeFieldsDialog=void 0}}},[t._v("\n                      Close\n                    ")])],1)],1)],1)],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Jangka Angsuran")]),i("v-list-tile-sub-title",[t._v("Bobot: "+t._s(t.settings.jangkaAngsuran.weight))])],1),i("v-list-tile-action",[i("v-switch",{model:{value:t.settings.jangkaAngsuran.cost,callback:function(e){t.$set(t.settings.jangkaAngsuran,"cost",e)},expression:"settings.jangkaAngsuran.cost"}}),i("v-list-tile-action-text",[t._v("Cost")])],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-avatar",[i("v-btn",{attrs:{icon:"",dark:"",color:"indigo"},on:{click:function(e){t.activeFieldsDialog="besarPinjaman"}}},[i("v-icon",[t._v("create")])],1),i("v-dialog",{attrs:{value:"besarPinjaman"===t.activeFieldsDialog,width:"500"}},[i("v-card",[i("v-card-text",[i("v-text-field",{attrs:{type:"number",label:"Bobot",min:"0"},model:{value:t.settings.besarPinjaman.weight,callback:function(e){t.$set(t.settings.besarPinjaman,"weight",t._n(e))},expression:"settings.besarPinjaman.weight"}}),t._l(t.settings.besarPinjaman.options,function(e,n){return[i("v-text-field",{key:"ja-opt-"+n,attrs:{type:"number",label:e.lower+" - "+e.upper,min:"0"},model:{value:e.value,callback:function(i){t.$set(e,"value",t._n(i))},expression:"opt.value"}}),i("v-divider",{key:"ja-opt-div-"+n})]})],2),i("v-card-actions",[i("v-btn",{attrs:{dark:"",color:"red",depressed:"",block:""},on:{click:function(e){t.activeFieldsDialog=void 0}}},[t._v("\n                      Close\n                    ")])],1)],1)],1)],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Besar Pinjaman")]),i("v-list-tile-sub-title",[t._v("Bobot: "+t._s(t.settings.besarPinjaman.weight))])],1),i("v-list-tile-action",[i("v-switch",{model:{value:t.settings.besarPinjaman.cost,callback:function(e){t.$set(t.settings.besarPinjaman,"cost",e)},expression:"settings.besarPinjaman.cost"}}),i("v-list-tile-action-text",[t._v("Cost")])],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-avatar",[i("v-btn",{attrs:{icon:"",dark:"",color:"indigo"},on:{click:function(e){t.activeFieldsDialog="pengeluaran"}}},[i("v-icon",[t._v("create")])],1),i("v-dialog",{attrs:{value:"pengeluaran"===t.activeFieldsDialog,width:"500"}},[i("v-card",[i("v-card-text",[i("v-text-field",{attrs:{type:"number",label:"Bobot",min:"0"},model:{value:t.settings.pengeluaran.weight,callback:function(e){t.$set(t.settings.pengeluaran,"weight",t._n(e))},expression:"settings.pengeluaran.weight"}}),t._l(t.settings.pengeluaran.options,function(e,n){return[i("v-text-field",{key:"ja-opt-"+n,attrs:{type:"number",label:e.lower+" - "+e.upper,min:"0"},model:{value:e.value,callback:function(i){t.$set(e,"value",t._n(i))},expression:"opt.value"}}),i("v-divider",{key:"ja-opt-div-"+n})]})],2),i("v-card-actions",[i("v-btn",{attrs:{dark:"",color:"red",depressed:"",block:""},on:{click:function(e){t.activeFieldsDialog=void 0}}},[t._v("\n                      Close\n                    ")])],1)],1)],1)],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Pengeluaran")]),i("v-list-tile-sub-title",[t._v("Bobot: "+t._s(t.settings.pengeluaran.weight))])],1),i("v-list-tile-action",[i("v-switch",{model:{value:t.settings.pengeluaran.cost,callback:function(e){t.$set(t.settings.pengeluaran,"cost",e)},expression:"settings.pengeluaran.cost"}}),i("v-list-tile-action-text",[t._v("Cost")])],1)],1)],1),i("v-btn",{attrs:{dark:"",depressed:"",color:"indigo",block:""},on:{click:t.update}},[t._v("\n          Save\n          "),i("v-icon",{attrs:{right:""}},[t._v("backup")])],1)],1)],1)],1),i("loader",{attrs:{show:t.loading}})],1)},a=[],o=(i("96cf"),i("3b8d")),s=i("268f"),r=i.n(s),l=i("e265"),c=i.n(l),u=i("a4bb"),v=i.n(u),d=i("85f2"),h=i.n(d);function f(t,e,i){return e in t?h()(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=v()(i);"function"===typeof c.a&&(n=n.concat(c()(i).filter(function(t){return r()(i,t).enumerable}))),n.forEach(function(e){f(t,e,i[e])})}return t}var g=i("83fb"),b=i("ed8e"),m=i("555f"),y=p({_id:void 0},b["a"]),w={name:"AppSettings",data:function(){return{settings:y,activeFieldsDialog:void 0,loading:!1}},components:{Loader:m["a"]},methods:{getSettings:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,g["a"].get();case 4:e=t.sent,this.settings=e,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0),alert("Gagal memuat pengaturan");case 12:return t.prev=12,this.loading=!1,t.finish(12);case 15:case"end":return t.stop()}},t,this,[[1,8,12,15]])}));function e(){return t.apply(this,arguments)}return e}(),update:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,e=this.settings,t.next=5,g["a"].put(e);case 5:return t.next=7,this.getSettings();case 7:t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0),alert("Gagal mengubah pengaturan");case 13:return t.prev=13,this.loading=!1,t.finish(13);case 16:case"end":return t.stop()}},t,this,[[1,9,13,16]])}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.getSettings()}},k=w,x=i("2877"),_=i("6544"),j=i.n(_),O=i("8336"),S=i("b0af"),T=i("99d9"),C=i("a523"),A=i("169a"),$=i("ce7e"),P=i("0e8f"),E=i("132d"),D=i("a722"),B=i("8860"),F=i("ba95"),V=i("40fe"),L=i("5d23"),N=i("c954"),I=(i("94a7"),i("2e29"),i("5368")),Y=i("c341"),M=i("0789"),X=i("490a"),H=i("80d2"),K=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},R={name:"v-switch",directives:{Touch:Y["a"]},mixins:[I["a"]],props:{loading:{type:[Boolean,String],default:!1}},computed:{classes:function(){return{"v-input--selection-controls v-input--switch":!0}},switchData:function(){return this.setTextColor(this.loading?void 0:this.computedColor,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",this.$attrs),this.genRipple(this.setTextColor(this.computedColor,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",K({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",K({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(M["b"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(X["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===H["p"].left&&this.isActive||t.keyCode===H["p"].right&&!this.isActive)&&this.onChange()}}},W=i("2677"),z=i("71d9"),J=i("2a7f"),Z=Object(x["a"])(k,n,a,!1,null,null,null);e["default"]=Z.exports;j()(Z,{VBtn:O["a"],VCard:S["a"],VCardActions:T["a"],VCardText:T["b"],VContainer:C["a"],VDialog:A["a"],VDivider:$["a"],VFlex:P["a"],VIcon:E["a"],VLayout:D["a"],VList:B["a"],VListTile:F["a"],VListTileAction:V["a"],VListTileActionText:L["a"],VListTileAvatar:N["a"],VListTileContent:L["b"],VListTileSubTitle:L["c"],VListTileTitle:L["d"],VSwitch:R,VTextField:W["a"],VToolbar:z["a"],VToolbarTitle:J["b"]})},bf0b:function(t,e,i){var n=i("355d"),a=i("aebd"),o=i("36c3"),s=i("1bc3"),r=i("07e3"),l=i("794b"),c=Object.getOwnPropertyDescriptor;e.f=i("8e60")?c:function(t,e){if(t=o(t),e=s(e,!0),l)try{return c(t,e)}catch(i){}if(r(t,e))return a(!n.f.call(t,e),t[e])}},bf90:function(t,e,i){var n=i("36c3"),a=i("bf0b").f;i("ce7ec")("getOwnPropertyDescriptor",function(){return function(t,e){return a(n(t),e)}})},c341:function(t,e,i){"use strict";var n=i("80d2"),a=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,a=t.touchendY,o=.5,s=16;t.offsetX=i-e,t.offsetY=a-n,Math.abs(t.offsetY)<o*Math.abs(t.offsetX)&&(t.left&&i<e-s&&t.left(t),t.right&&i>e+s&&t.right(t)),Math.abs(t.offsetX)<o*Math.abs(t.offsetY)&&(t.up&&a<n-s&&t.up(t),t.down&&a>n+s&&t.down(t))};function o(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function s(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),a(e)}function r(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return o(t,e)},touchend:function(t){return s(t,e)},touchmove:function(t){return r(t,e)}}}function c(t,e,i){var a=e.value,o=a.parent?t.parentElement:t,s=a.options||{passive:!0};if(o){var r=l(e.value);o._touchHandlers=Object(o._touchHandlers),o._touchHandlers[i.context._uid]=r,Object(n["q"])(r).forEach(function(t){o.addEventListener(t,r[t],s)})}}function u(t,e,i){var a=e.value.parent?t.parentElement:t;if(a&&a._touchHandlers){var o=a._touchHandlers[i.context._uid];Object(n["q"])(o).forEach(function(t){a.removeEventListener(t,o[t])}),delete a._touchHandlers[i.context._uid]}}e["a"]={inserted:c,unbind:u}},ccb9:function(t,e,i){e.f=i("5168")},ce7ec:function(t,e,i){var n=i("63b6"),a=i("584a"),o=i("294c");t.exports=function(t,e){var i=(a.Object||{})[t]||Object[t],s={};s[t]=e(i),n(n.S+n.F*o(function(){i(1)}),"Object",s)}},de10:function(t,e,i){},e265:function(t,e,i){t.exports=i("ed33")},ebfd:function(t,e,i){var n=i("62a0")("meta"),a=i("f772"),o=i("07e3"),s=i("d9f6").f,r=0,l=Object.isExtensible||function(){return!0},c=!i("294c")(function(){return l(Object.preventExtensions({}))}),u=function(t){s(t,n,{value:{i:"O"+ ++r,w:{}}})},v=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,n)){if(!l(t))return"F";if(!e)return"E";u(t)}return t[n].i},d=function(t,e){if(!o(t,n)){if(!l(t))return!0;if(!e)return!1;u(t)}return t[n].w},h=function(t){return c&&f.NEED&&l(t)&&!o(t,n)&&u(t),t},f=t.exports={KEY:n,NEED:!1,fastKey:v,getWeak:d,onFreeze:h}},ed33:function(t,e,i){i("014b"),t.exports=i("584a").Object.getOwnPropertySymbols},ed8e:function(t,e,i){"use strict";var n={weight:4,options:[{text:"PNS, TNI, POLRI, Pendeta",value:5},{text:"Pegawai BUMN/BUMD",value:4},{text:"Wiraswasta, Pensiunan",value:3},{text:"Petani Nelayan",value:2},{text:"Buruh",value:1}]},a={weight:5,options:[{lower:0,upper:5e5,value:1},{lower:5e5,upper:1499999,value:2},{lower:15e5,upper:2499999,value:3},{lower:25e5,upper:4e6,value:4},{lower:4e6,upper:99999999,value:5}]},o={weight:5,options:[{text:"Akta Tanah",value:5},{text:"SK, BPKB Mobil",value:4},{text:"BPKB Motor",value:3},{text:"Barang Elektronik",value:2}]},s={weight:4,options:[{text:"Tidak Layak",value:1},{text:"Cukup Layak",value:3},{text:"Sangat Layak",value:5}]},r={weight:3,cost:!0,options:[{lower:1,upper:2,value:1},{lower:2,upper:3,value:2},{lower:3,upper:4,value:3},{lower:4,upper:5,value:4},{lower:5,upper:1e3,value:5}]},l={weight:3,cost:!0,options:[{lower:0,upper:6,value:1},{lower:6,upper:11,value:2},{lower:11,upper:16,value:3},{lower:16,upper:21,value:4},{lower:21,upper:1e3,value:5}]},c={weight:5,options:[{lower:0,upper:5e6,value:1},{lower:5e6,upper:16e6,value:2},{lower:16e6,upper:36e6,value:3},{lower:36e6,upper:5e7,value:4},{lower:5e7,upper:5e10,value:5}]},u={weight:4,cost:!0,options:[{lower:0,upper:5e5,value:1},{lower:5e5,upper:15e5,value:2},{lower:15e5,upper:25e5,value:3},{lower:25e5,upper:4e6,value:4},{lower:4e6,upper:999999999,value:5}]};e["a"]={pekerjaan:n,penghasilan:a,jaminan:o,kondisiTempatTinggal:s,tanggungan:r,jangkaAngsuran:l,besarPinjaman:c,pengeluaran:u}},f7dc:function(t,e,i){},fde4:function(t,e,i){i("bf90");var n=i("584a").Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-4eb05298.84344ff2.js.map
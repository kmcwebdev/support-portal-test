(self["webpackChunkvue3_ts_template"]=self["webpackChunkvue3_ts_template"]||[]).push([[8597],{4906:function(n,e,t){const{createElementVNode:r,openBlock:u,createElementBlock:o}=t(9812);n.exports=function(n,e){return u(),o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[r("path",{"fill-rule":"evenodd",d:"M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 00-.266.112L8.78 21.53A.75.75 0 017.5 21v-3.955a48.842 48.842 0 01-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z","clip-rule":"evenodd"})])}},284:function(n,e,t){const{createElementVNode:r,openBlock:u,createElementBlock:o}=t(9812);n.exports=function(n,e){return u(),o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[r("path",{d:"M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"}),r("path",{d:"M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"})])}},2202:function(n,e,t){"use strict";t.d(e,{Z:function(){return p}});var r=t(6252),u=t(3577),o=t(9963),i=t(2262),c=t(3824);const s={key:0,class:"flex flex-1"},a={class:"my-auto"},f={class:"text-lg font-barlow font-bold leading-6 text-gray-900 truncate"},l={class:"ml-4 flex items-center lg:ml-6"};var d=(0,r.aZ)({__name:"SubHeader",props:{name:{type:String},subName:{type:String},redirectRoute:{type:String}},setup(n){const e=n,t=(0,i.iH)(!1);return(0,r.bv)((()=>{t.value=!0})),(d,m)=>t.value?((0,r.wg)(),(0,r.j4)(r.lR,{key:0,to:"#testTeleport"},[n.name?((0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",a,[(0,r._)("h1",f,(0,u.zw)(e.name),1),n.subName?((0,r.wg)(),(0,r.iD)("a",{key:0,onClick:m[0]||(m[0]=(0,o.iM)((e=>(0,i.SU)(c.Z).push({name:n.redirectRoute})),["prevent"])),class:"md:inline text-secondary text-opacity-40 font-barlow font-bold text-sm uppercase text-gray-600 truncate hover:text-pumpkin cursor-pointer"},(0,u.zw)(n.subName),1)):(0,r.kq)("",!0)])])):(0,r.kq)("",!0),(0,r._)("div",l,[(0,r.WI)(d.$slots,"default")])])):(0,r.kq)("",!0)}});const m=d;var p=m},4028:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return W}});var r=t(6252),u=t(9963),o=t(3577),i=t(2262),c=t(3984),s=t(284),a=t(4906),f=t(2202);const l={class:"hidden md:fixed h-full md:flex md:w-64 md:flex-col"},d={class:"flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-gray-50 pt-5 pb-4"},m={class:"mt-20 lg:mt-5 flex-grow"},p={class:"space-y-1"},v=["onClick"],x={class:"md:hidden w-full flex justify-center py-3 px-4"},w={class:"md:pl-64"},g={class:"flex flex-col items-center justify-center"},y={class:"flex-1"},h={class:"relative mx-auto max-w-4xl md:px-8 xl:px-0"},k={class:"md:pt-10 pb-16"},_={class:"px-4 sm:px-6 md:px-0"},S={class:"overflow-hidden bg-white shadow sm:rounded-md"},b={role:"list",class:"divide-y divide-gray-200"},C={href:"#",class:"block hover:bg-gray-50"},R={class:"flex items-center px-4 py-4 sm:px-6 justify-start"},E={class:"flex min-w-0 flex-1 items-center"},D={class:"min-w-0 flex-1 px-4"},M={class:"truncate text-sm text-pumpkin font-barlow font-semibold"},T={class:"mt-2 flex items-center text-sm text-gray-500"},H={class:"py-3 space-y-3"},z={class:"truncate text-sm font-semibold text-gray-800"},B={class:"text-gray-400 font-medium"},U={class:"flex items-center text-sm text-gray-500"},N={class:"truncate"},V={class:"flex items-center text-sm text-gray-500"},q={class:"truncate"};var A=(0,r.aZ)({__name:"ContactsAndEscalation",setup(n){const e=(0,i.iH)(""),t=(0,i.iH)([]),A=(0,i.iH)([]);async function K(){await c.g.getTeam().then((n=>{e.value=n[0].name,A.value=n,W(e.value)}))}async function W(n){e.value=n,await c.g.getEscalation(n).then((n=>{t.value=n}))}return(0,r.bv)((()=>{K()})),(n,c)=>{const K=(0,r.up)("el-option"),Y=(0,r.up)("el-select");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",l,[(0,r._)("nav",d,[(0,r._)("div",m,[(0,r._)("div",p,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(A.value,(n=>((0,r.wg)(),(0,r.iD)("a",{key:n.name,onClick:(0,u.iM)((e=>W(n.name)),["prevent"]),class:(0,o.C_)([e.value==n.name?"bg-purple-50 border-pumpkin text-pumpkin":"border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50","group border-l-4 py-2 px-3 flex items-center text-sm font-medium"])},(0,o.zw)(n.name),11,v)))),128))])])])]),(0,r._)("div",x,[(0,r.Wm)(Y,{class:"w-full","model-value":e.value,onChange:W},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(A.value,(n=>((0,r.wg)(),(0,r.j4)(K,{key:n.name,value:n.name},null,8,["value"])))),128))])),_:1},8,["model-value"])]),(0,r._)("div",w,[(0,r.Wm)(f.Z,{name:"Contacts & Escalations",subName:""}),(0,r._)("div",g,[(0,r._)("div",y,[(0,r._)("div",h,[(0,r._)("div",k,[(0,r._)("div",_,[(0,r._)("div",S,[(0,r._)("ul",b,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.value,((n,e)=>((0,r.wg)(),(0,r.iD)("li",{key:e},[(0,r._)("a",C,[(0,r._)("div",R,[(0,r._)("div",E,[(0,r._)("div",D,[(0,r._)("div",null,[(0,r._)("p",M," Level "+(0,o.zw)(n.level),1),(0,r._)("p",T,(0,o.zw)(n.description),1),(0,r._)("div",H,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.contacts,((n,e)=>((0,r.wg)(),(0,r.iD)("div",{key:e},[(0,r._)("p",z,[(0,r.Uk)((0,o.zw)(n.firstname)+" "+(0,o.zw)(n.lastname)+" ",1),(0,r._)("span",B," - "+(0,o.zw)(n.title),1)]),(0,r._)("p",U,[(0,r.Wm)((0,i.SU)(s),{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"}),(0,r._)("span",N,(0,o.zw)(n.email),1)]),(0,r._)("p",V,[(0,r.Wm)((0,i.SU)(a),{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"}),(0,r._)("span",q,(0,o.zw)(n.phone),1)])])))),128))])])])])])])])))),128))])])])])])])])])])}}});const K=A;var W=K},9812:function(n,e,t){"use strict";t.r(e),t.d(e,{BaseTransition:function(){return r.P$},Comment:function(){return r.sv},EffectScope:function(){return r.Bj},Fragment:function(){return r.HY},KeepAlive:function(){return r.Ob},ReactiveEffect:function(){return r.qq},Static:function(){return r.qG},Suspense:function(){return r.n4},Teleport:function(){return r.lR},Text:function(){return r.xv},Transition:function(){return r.uT},TransitionGroup:function(){return r.W3},VueElement:function(){return r.a2},callWithAsyncErrorHandling:function(){return r.$d},callWithErrorHandling:function(){return r.KU},camelize:function(){return r._A},capitalize:function(){return r.kC},cloneVNode:function(){return r.Ho},compatUtils:function(){return r.ry},compile:function(){return u},computed:function(){return r.Fl},createApp:function(){return r.ri},createBlock:function(){return r.j4},createCommentVNode:function(){return r.kq},createElementBlock:function(){return r.iD},createElementVNode:function(){return r._},createHydrationRenderer:function(){return r.Eo},createPropsRestProxy:function(){return r.p1},createRenderer:function(){return r.Us},createSSRApp:function(){return r.vr},createSlots:function(){return r.Nv},createStaticVNode:function(){return r.uE},createTextVNode:function(){return r.Uk},createVNode:function(){return r.Wm},customRef:function(){return r.ZM},defineAsyncComponent:function(){return r.RC},defineComponent:function(){return r.aZ},defineCustomElement:function(){return r.MW},defineEmits:function(){return r.Bz},defineExpose:function(){return r.WY},defineProps:function(){return r.yb},defineSSRCustomElement:function(){return r.Ah},devtools:function(){return r.mW},effect:function(){return r.cE},effectScope:function(){return r.B},getCurrentInstance:function(){return r.FN},getCurrentScope:function(){return r.nZ},getTransitionRawChildren:function(){return r.Q6},guardReactiveProps:function(){return r.F4},h:function(){return r.h},handleError:function(){return r.S3},hydrate:function(){return r.ZB},initCustomFormatter:function(){return r.Mr},initDirectivesForSSR:function(){return r.Nd},inject:function(){return r.f3},isMemoSame:function(){return r.nQ},isProxy:function(){return r.X3},isReactive:function(){return r.PG},isReadonly:function(){return r.$y},isRef:function(){return r.dq},isRuntimeOnly:function(){return r.of},isShallow:function(){return r.yT},isVNode:function(){return r.lA},markRaw:function(){return r.Xl},mergeDefaults:function(){return r.u_},mergeProps:function(){return r.dG},nextTick:function(){return r.Y3},normalizeClass:function(){return r.C_},normalizeProps:function(){return r.vs},normalizeStyle:function(){return r.j5},onActivated:function(){return r.dl},onBeforeMount:function(){return r.wF},onBeforeUnmount:function(){return r.Jd},onBeforeUpdate:function(){return r.Xn},onDeactivated:function(){return r.se},onErrorCaptured:function(){return r.d1},onMounted:function(){return r.bv},onRenderTracked:function(){return r.bT},onRenderTriggered:function(){return r.Yq},onScopeDispose:function(){return r.EB},onServerPrefetch:function(){return r.vl},onUnmounted:function(){return r.SK},onUpdated:function(){return r.ic},openBlock:function(){return r.wg},popScopeId:function(){return r.Cn},provide:function(){return r.JJ},proxyRefs:function(){return r.WL},pushScopeId:function(){return r.dD},queuePostFlushCb:function(){return r.qb},reactive:function(){return r.qj},readonly:function(){return r.OT},ref:function(){return r.iH},registerRuntimeCompiler:function(){return r.Y1},render:function(){return r.sY},renderList:function(){return r.Ko},renderSlot:function(){return r.WI},resolveComponent:function(){return r.up},resolveDirective:function(){return r.Q2},resolveDynamicComponent:function(){return r.LL},resolveFilter:function(){return r.eq},resolveTransitionHooks:function(){return r.U2},setBlockTracking:function(){return r.qZ},setDevtoolsHook:function(){return r.ec},setTransitionHooks:function(){return r.nK},shallowReactive:function(){return r.Um},shallowReadonly:function(){return r.YS},shallowRef:function(){return r.XI},ssrContextKey:function(){return r.Uc},ssrUtils:function(){return r.G},stop:function(){return r.sT},toDisplayString:function(){return r.zw},toHandlerKey:function(){return r.hR},toHandlers:function(){return r.mx},toRaw:function(){return r.IU},toRef:function(){return r.Vh},toRefs:function(){return r.BK},transformVNodeArgs:function(){return r.C3},triggerRef:function(){return r.oR},unref:function(){return r.SU},useAttrs:function(){return r.l1},useCssModule:function(){return r.fb},useCssVars:function(){return r.sj},useSSRContext:function(){return r.Zq},useSlots:function(){return r.Rr},useTransitionState:function(){return r.Y8},vModelCheckbox:function(){return r.e8},vModelDynamic:function(){return r.YZ},vModelRadio:function(){return r.G2},vModelSelect:function(){return r.bM},vModelText:function(){return r.nr},vShow:function(){return r.F8},version:function(){return r.i8},warn:function(){return r.ZK},watch:function(){return r.YP},watchEffect:function(){return r.m0},watchPostEffect:function(){return r.Rh},watchSyncEffect:function(){return r.yX},withAsyncContext:function(){return r.mv},withCtx:function(){return r.w5},withDefaults:function(){return r.b9},withDirectives:function(){return r.wy},withKeys:function(){return r.D2},withMemo:function(){return r.MX},withModifiers:function(){return r.iM},withScopeId:function(){return r.HX}});var r=t(9963);const u=()=>{0}}}]);
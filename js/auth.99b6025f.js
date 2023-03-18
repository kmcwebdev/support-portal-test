(self["webpackChunkvue3_ts_template"]=self["webpackChunkvue3_ts_template"]||[]).push([[9818],{2021:function(n,e,t){const{createElementVNode:r,openBlock:u,createElementBlock:o}=t(9812);n.exports=function(n,e){return u(),o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[r("path",{"fill-rule":"evenodd",d:"M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z","clip-rule":"evenodd"})])}},8431:function(n,e,t){const{createElementVNode:r,openBlock:u,createElementBlock:o}=t(9812);n.exports=function(n,e){return u(),o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[r("path",{"fill-rule":"evenodd",d:"M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z","clip-rule":"evenodd"})])}},7937:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return B}});var r=t(6252),u=t(2262),o=t(9963),i=t(3577),c=t(9274),l=t(7865),s=t(8431),a=t(2021),f=t(3824);const d={key:0,class:"rounded-md bg-red-50 p-4 mb-3"},m=(0,r.uE)('<div class="flex"><div class="flex-shrink-0"><svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg></div><div class="ml-3"><h3 class="text-sm font-medium text-red-800"> Incorrect username or password </h3></div></div>',1),p=[m],v=(0,r._)("label",{for:"email",class:"block text-sm font-bold text-gray-700"},"Username",-1),w={class:"mt-1"},h=(0,r._)("label",{for:"password",class:"block text-sm font-bold text-gray-700"}," Password ",-1),g={class:"mt-q"};var x=(0,r.aZ)({__name:"LoginForm",setup(n){const e=(0,u.iH)(null),t=(0,u.iH)(!1),m=(0,u.iH)(!1),x=(0,u.iH)("Sign In"),y=(0,u.qj)({username:"",password:""}),S=(0,r.Fl)((()=>c.h.getters.previousRoute));function k(){e.value?.validate().then((async()=>{t.value=!0,x.value="Validating",c.h.dispatch(l.sS.LOGIN,y).then((async()=>{c.h.dispatch(l.T7.VALIDATE_EMPLOYEE),x.value="Sign In",t.value=!1,S.value?f.Z.push({path:S.value}):f.Z.push({name:"helpdesk-list"})})).catch((()=>{x.value="Sign In",m.value=!0,t.value=!1}))}))}return(n,c)=>{const l=(0,r.up)("el-icon"),f=(0,r.up)("el-input"),S=(0,r.up)("el-form-item"),_=(0,r.up)("el-button"),C=(0,r.up)("el-form");return(0,r.wg)(),(0,r.iD)(r.HY,null,[m.value?((0,r.wg)(),(0,r.iD)("div",d,p)):(0,r.kq)("",!0),(0,r.Wm)(C,{class:"space-y-6",model:y,ref_key:"loginForm",ref:e},{default:(0,r.w5)((()=>[(0,r.Wm)(S,{prop:"username",rules:[{required:!0,message:"Please input username",trigger:"blur"}]},{default:(0,r.w5)((()=>[(0,r._)("div",null,[v,(0,r._)("div",w,[(0,r.Wm)(f,{class:"text-md block shadow rounded-lg w-full",size:"large",placeholder:"Username",modelValue:y.username,"onUpdate:modelValue":c[0]||(c[0]=n=>y.username=n)},{prefix:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)((0,u.SU)(s))])),_:1})])),_:1},8,["modelValue"])])])])),_:1}),(0,r.Wm)(S,{prop:"password",rules:[{required:!0,message:"Please input password",trigger:"blur"}]},{default:(0,r.w5)((()=>[(0,r._)("div",null,[h,(0,r._)("div",g,[(0,r.Wm)(f,{type:"password",class:"text-md block shadow rounded-lg w-full",placeholder:"***********",size:"large",modelValue:y.password,"onUpdate:modelValue":c[1]||(c[1]=n=>y.password=n),"show-password":""},{prefix:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)((0,u.SU)(a))])),_:1})])),_:1},8,["modelValue"])])])])),_:1}),(0,r._)("div",null,[(0,r.Wm)(_,{type:"primary",class:"w-full",size:"large","native-type":"submit",onClick:(0,o.iM)(k,["prevent"]),loading:t.value},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(x.value),1)])),_:1},8,["onClick","loading"])])])),_:1},8,["model"])],64)}}});const y=x;var S=y;const k={class:"flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"},_=(0,r._)("div",{class:"sm:mx-auto sm:w-full sm:max-w-md"},[(0,r._)("div",{class:"flex justify-center"},[(0,r._)("img",{class:"h-10 relative",src:"https://cdn.kmc.solutions/project-statics/KMC-logo-updated-black (1).png"})]),(0,r._)("div",{class:"flex justify-center font-karla text-sm mt-2 text-center"},[(0,r._)("p",null,"Welcome back, it's good to see you again!")])],-1),C={class:"sm:mx-auto sm:w-full sm:max-w-md"},R={class:"py-8 px-4 rounded-lg sm:px-10"};var b=(0,r.aZ)({__name:"Login",setup(n){return(n,e)=>((0,r.wg)(),(0,r.iD)("div",k,[_,(0,r._)("div",C,[(0,r._)("div",R,[(0,r.Wm)(S)])])]))}});const E=b;var M=E;const T={class:"min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 w-full bg-white"};var V=(0,r.aZ)({__name:"AuthView",setup(n){return(n,e)=>((0,r.wg)(),(0,r.iD)("div",T,[(0,r.Wm)(M)]))}});const W=V;var B=W},9812:function(n,e,t){"use strict";t.r(e),t.d(e,{BaseTransition:function(){return r.P$},Comment:function(){return r.sv},EffectScope:function(){return r.Bj},Fragment:function(){return r.HY},KeepAlive:function(){return r.Ob},ReactiveEffect:function(){return r.qq},Static:function(){return r.qG},Suspense:function(){return r.n4},Teleport:function(){return r.lR},Text:function(){return r.xv},Transition:function(){return r.uT},TransitionGroup:function(){return r.W3},VueElement:function(){return r.a2},callWithAsyncErrorHandling:function(){return r.$d},callWithErrorHandling:function(){return r.KU},camelize:function(){return r._A},capitalize:function(){return r.kC},cloneVNode:function(){return r.Ho},compatUtils:function(){return r.ry},compile:function(){return u},computed:function(){return r.Fl},createApp:function(){return r.ri},createBlock:function(){return r.j4},createCommentVNode:function(){return r.kq},createElementBlock:function(){return r.iD},createElementVNode:function(){return r._},createHydrationRenderer:function(){return r.Eo},createPropsRestProxy:function(){return r.p1},createRenderer:function(){return r.Us},createSSRApp:function(){return r.vr},createSlots:function(){return r.Nv},createStaticVNode:function(){return r.uE},createTextVNode:function(){return r.Uk},createVNode:function(){return r.Wm},customRef:function(){return r.ZM},defineAsyncComponent:function(){return r.RC},defineComponent:function(){return r.aZ},defineCustomElement:function(){return r.MW},defineEmits:function(){return r.Bz},defineExpose:function(){return r.WY},defineProps:function(){return r.yb},defineSSRCustomElement:function(){return r.Ah},devtools:function(){return r.mW},effect:function(){return r.cE},effectScope:function(){return r.B},getCurrentInstance:function(){return r.FN},getCurrentScope:function(){return r.nZ},getTransitionRawChildren:function(){return r.Q6},guardReactiveProps:function(){return r.F4},h:function(){return r.h},handleError:function(){return r.S3},hydrate:function(){return r.ZB},initCustomFormatter:function(){return r.Mr},initDirectivesForSSR:function(){return r.Nd},inject:function(){return r.f3},isMemoSame:function(){return r.nQ},isProxy:function(){return r.X3},isReactive:function(){return r.PG},isReadonly:function(){return r.$y},isRef:function(){return r.dq},isRuntimeOnly:function(){return r.of},isShallow:function(){return r.yT},isVNode:function(){return r.lA},markRaw:function(){return r.Xl},mergeDefaults:function(){return r.u_},mergeProps:function(){return r.dG},nextTick:function(){return r.Y3},normalizeClass:function(){return r.C_},normalizeProps:function(){return r.vs},normalizeStyle:function(){return r.j5},onActivated:function(){return r.dl},onBeforeMount:function(){return r.wF},onBeforeUnmount:function(){return r.Jd},onBeforeUpdate:function(){return r.Xn},onDeactivated:function(){return r.se},onErrorCaptured:function(){return r.d1},onMounted:function(){return r.bv},onRenderTracked:function(){return r.bT},onRenderTriggered:function(){return r.Yq},onScopeDispose:function(){return r.EB},onServerPrefetch:function(){return r.vl},onUnmounted:function(){return r.SK},onUpdated:function(){return r.ic},openBlock:function(){return r.wg},popScopeId:function(){return r.Cn},provide:function(){return r.JJ},proxyRefs:function(){return r.WL},pushScopeId:function(){return r.dD},queuePostFlushCb:function(){return r.qb},reactive:function(){return r.qj},readonly:function(){return r.OT},ref:function(){return r.iH},registerRuntimeCompiler:function(){return r.Y1},render:function(){return r.sY},renderList:function(){return r.Ko},renderSlot:function(){return r.WI},resolveComponent:function(){return r.up},resolveDirective:function(){return r.Q2},resolveDynamicComponent:function(){return r.LL},resolveFilter:function(){return r.eq},resolveTransitionHooks:function(){return r.U2},setBlockTracking:function(){return r.qZ},setDevtoolsHook:function(){return r.ec},setTransitionHooks:function(){return r.nK},shallowReactive:function(){return r.Um},shallowReadonly:function(){return r.YS},shallowRef:function(){return r.XI},ssrContextKey:function(){return r.Uc},ssrUtils:function(){return r.G},stop:function(){return r.sT},toDisplayString:function(){return r.zw},toHandlerKey:function(){return r.hR},toHandlers:function(){return r.mx},toRaw:function(){return r.IU},toRef:function(){return r.Vh},toRefs:function(){return r.BK},transformVNodeArgs:function(){return r.C3},triggerRef:function(){return r.oR},unref:function(){return r.SU},useAttrs:function(){return r.l1},useCssModule:function(){return r.fb},useCssVars:function(){return r.sj},useSSRContext:function(){return r.Zq},useSlots:function(){return r.Rr},useTransitionState:function(){return r.Y8},vModelCheckbox:function(){return r.e8},vModelDynamic:function(){return r.YZ},vModelRadio:function(){return r.G2},vModelSelect:function(){return r.bM},vModelText:function(){return r.nr},vShow:function(){return r.F8},version:function(){return r.i8},warn:function(){return r.ZK},watch:function(){return r.YP},watchEffect:function(){return r.m0},watchPostEffect:function(){return r.Rh},watchSyncEffect:function(){return r.yX},withAsyncContext:function(){return r.mv},withCtx:function(){return r.w5},withDefaults:function(){return r.b9},withDirectives:function(){return r.wy},withKeys:function(){return r.D2},withMemo:function(){return r.MX},withModifiers:function(){return r.iM},withScopeId:function(){return r.HX}});var r=t(9963);const u=()=>{0}}}]);
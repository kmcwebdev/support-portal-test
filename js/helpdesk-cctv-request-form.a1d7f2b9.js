"use strict";(self["webpackChunkvue3_ts_template"]=self["webpackChunkvue3_ts_template"]||[]).push([[1981],{396:function(e,n,t){t.d(n,{Z:function(){return V}});var a=t(6252),r=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],o=function(e){return-1!==r.map((function(e){return e.toLowerCase()})).indexOf(e.toLowerCase())},l=function(e,n,t){Object.keys(n).filter(o).forEach((function(a){var r=n[a];"function"===typeof r&&("onInit"===a?r(e,t):t.on(a.substring(2),(function(e){return r(e,t)})))}))},i=function(e,n,t,r){var o=e.modelEvents?e.modelEvents:null,l=Array.isArray(o)?o.join(" "):o;(0,a.YP)(r,(function(n,a){t&&"string"===typeof n&&n!==a&&n!==t.getContent({format:e.outputFormat})&&t.setContent(n)})),t.on(l||"change input undo redo",(function(){n.emit("update:modelValue",t.getContent({format:e.outputFormat}))}))},u=function(e,n,t,a,r,o){a.setContent(o()),t.attrs["onUpdate:modelValue"]&&i(n,t,a,r),l(e,t.attrs,a)},s=0,c=function(e){var n=Date.now(),t=Math.floor(1e9*Math.random());return s++,e+"_"+t+s+String(n)},d=function(e){return null!==e&&"textarea"===e.tagName.toLowerCase()},m=function(e){return"undefined"===typeof e||""===e?[]:Array.isArray(e)?e:e.split(" ")},f=function(e,n){return m(e).concat(m(n))},p=function(e){return null===e||void 0===e},g=function(){return{listeners:[],scriptId:c("tiny-script"),scriptLoaded:!1}},y=function(){var e=g(),n=function(e,n,t,a){var r=n.createElement("script");r.referrerPolicy="origin",r.type="application/javascript",r.id=e,r.src=t;var o=function(){r.removeEventListener("load",o),a()};r.addEventListener("load",o),n.head&&n.head.appendChild(r)},t=function(t,a,r){e.scriptLoaded?r():(e.listeners.push(r),t.getElementById(e.scriptId)||n(e.scriptId,t,a,(function(){e.listeners.forEach((function(e){return e()})),e.scriptLoaded=!0})))},a=function(){e=g()};return{load:t,reinitialize:a}},v=y(),b=function(){return"undefined"!==typeof window?window:t.g},w=function(){var e=b();return e&&e.tinymce?e.tinymce:null},h={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return"html"===e||"text"===e}}},S=t(2262),_=function(){return _=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t],n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},_.apply(this,arguments)},x=function(e,n,t,a){return e(a||"div",{id:n,ref:t})},q=function(e,n,t){return e("textarea",{id:n,visibility:"hidden",ref:t})},k=(0,a.aZ)({props:h,setup:function(e,n){var t=e.init?_({},e.init):{},r=(0,S.BK)(e),o=r.disabled,l=r.modelValue,i=r.tagName,s=(0,S.iH)(null),m=null,g=e.id||c("tiny-vue"),y=e.init&&e.init.inline||e.inline,b=!!n.attrs["onUpdate:modelValue"],h=!0,k=e.initialValue?e.initialValue:"",V="",U=function(e){return b?function(){return(null===l||void 0===l?void 0:l.value)?l.value:""}:function(){return e?k:V}},C=function(){var a=U(h),r=_(_({},t),{readonly:e.disabled,target:s.value,plugins:f(t.plugins,e.plugins),toolbar:e.toolbar||t.toolbar,inline:y,setup:function(r){m=r,r.on("init",(function(t){return u(t,e,n,r,l,a)})),"function"===typeof t.setup&&t.setup(r)}});d(s.value)&&(s.value.style.visibility=""),w().init(r),h=!1};(0,a.YP)(o,(function(e){var n;null!==m&&("function"===typeof(null===(n=m.mode)||void 0===n?void 0:n.set)?m.mode.set(e?"readonly":"design"):m.setMode(e?"readonly":"design"))})),(0,a.YP)(i,(function(e){var n;b||(V=m.getContent()),null===(n=w())||void 0===n||n.remove(m),(0,a.Y3)((function(){return C()}))})),(0,a.bv)((function(){if(null!==w())C();else if(s.value&&s.value.ownerDocument){var n=e.cloudChannel?e.cloudChannel:"6",t=e.apiKey?e.apiKey:"no-api-key",a=p(e.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/".concat(t,"/tinymce/").concat(n,"/tinymce.min.js"):e.tinymceScriptSrc;v.load(s.value.ownerDocument,a,C)}})),(0,a.Jd)((function(){null!==w()&&w().remove(m)})),y||((0,a.dl)((function(){h||C()})),(0,a.se)((function(){var e;b||(V=m.getContent()),null===(e=w())||void 0===e||e.remove(m)})));var M=function(e){var n;V=m.getContent(),null===(n=w())||void 0===n||n.remove(m),t=_(_({},t),e),(0,a.Y3)((function(){return C()}))};return n.expose({rerender:M}),function(){return y?x(a.h,g,s,e.tagName):q(a.h,g,s)}}}),V=k},7720:function(e,n,t){t.r(n),t.d(n,{default:function(){return nn}});var a=t(6252),r=t(2262),o=t(3577),l=t(2202),i=t(9963),u=t(9419),s=t(6080),c=t(6210),d=t(9996),m=t(5953),f=t(7064);const p={class:"flex justify-between my-2"},g=["onClick"];var y=(0,a.aZ)({__name:"SignatureApproval",props:{view:{type:String,required:!0},signature:{type:Object,required:!0},show:{type:Boolean,required:!0},loading:{type:Boolean,default:!1}},emits:["reload","updateSignatureProp","submit","close"],setup(e,{expose:n,emit:t}){const o=e,l=(0,r.iH)(!1),y=(0,r.iH)(null),v=(0,r.iH)(null),b=s.T5+"/admin/upload-sign";function w(e){l.value=e}function h(e){y.value?.fromDataURL("data:image/png;base64,"+e[0].base64)}function S(){y.value?.clearSignature(),v.value?.clearFiles()}async function _(){const e=y.value?.saveSignature().data;e?("requester"==o.view&&(t("updateSignatureProp",{event:e,field:"requesterSign"}),t("updateSignatureProp",{event:(0,m.Iz)("yyyy-MM-dd HH:mm:ss"),field:"requesterSignDate"})),"manager"==o.view&&(t("updateSignatureProp",{event:e,field:"managerSign"}),t("updateSignatureProp",{event:(0,m.Iz)("yyyy-MM-dd HH:mm:ss"),field:"managerSignDate"})),l.value=!1,t("submit")):(0,d.bM)({title:"Warning",message:"Empty Signature",type:"warning"})}return n({open:l,handleModal:w}),(n,o)=>{const l=(0,a.up)("el-input");return(0,a.wg)(),(0,a.j4)(f.Z,{show:e.show,onClose:o[2]||(o[2]=e=>t("close")),"action-bar":!0,onSubmit:_,loading:e.loading,"submit-label":"Sign & Submit"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)((0,r.SU)(u.Z),{height:150,width:"100%",ref_key:"signaturePad",ref:y,options:{maxWidth:5},customStyle:{border:"#333333 1px dashed"}},null,512),(0,a._)("div",p,[(0,a.Wm)(c.Z,{ref_key:"attachFile",ref:v,action:b,limit:1,onFiles:h},null,512),(0,a._)("a",{onClick:(0,i.iM)(S,["prevent"]),class:"text-primary cursor-default mt-1"},"Clear",8,g)]),"manager"==e.view?((0,a.wg)(),(0,a.j4)(l,{key:0,class:"mt-3",placeholder:"Name","model-value":e.signature.managerName,onInput:o[0]||(o[0]=e=>t("updateSignatureProp",{event:e,field:"managerName"}))},null,8,["model-value"])):(0,a.kq)("",!0),"requester"==e.view?((0,a.wg)(),(0,a.j4)(l,{key:1,class:"mt-3",placeholder:"Name","model-value":e.signature.requesterName,onInput:o[1]||(o[1]=e=>t("updateSignatureProp",{event:e,field:"requesterName"}))},null,8,["model-value"])):(0,a.kq)("",!0)])])),_:1},8,["show","loading"])}}});const v=y;var b=v,w=t(9737),h=t(1740),S=t(2201);const _={class:"mt-3 text-center sm:mt-5"};var x=(0,a.aZ)({__name:"DeclineCCTVRequest",props:{show:{type:Boolean,required:!0}},emits:["reload","close"],setup(e,{expose:n,emit:t}){const o=(0,r.iH)(!1),l=(0,r.iH)(!1),i=(0,r.iH)("");n({open:o,handleModal:c});const u=(0,S.yj)(),s=(0,a.Fl)((()=>u.params.id));function c(e){o.value=e}async function d(){l.value=!0,await h.n.declineRequest(i.value,s.value).then((async()=>{(0,w.T)({title:"Success",message:"Request has been declined",type:"success"}),l.value=!1,t("reload"),t("close")}))}return(n,r)=>{const o=(0,a.up)("el-input");return(0,a.wg)(),(0,a.j4)(f.Z,{show:e.show,onClose:r[1]||(r[1]=e=>t("close")),"action-bar":!0,loading:l.value,onSubmit:d,"submit-type":"danger","submit-label":"Decline"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a._)("div",_,[(0,a.Wm)(o,{type:"textarea",rows:4,placeholder:"Please input",modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=e=>i.value=e)},null,8,["modelValue"])])])])),_:1},8,["show","loading"])}}});const q=x;var k=q,V=t(7888),U=t(3984);const C={name:[{required:!0,message:"Name is required",trigger:"blur"}],email:[{required:!0,message:"Email is required",trigger:"blur"},{type:"email",message:"Input a valid email",trigger:"blur"}],siteId:[{required:!0,message:"Site is required",trigger:"blur"}],floor:[{required:!0,message:"Floor is required",trigger:"blur"}],reason:[{required:!0,message:"Reason is required",trigger:"blur"}],locationToView:[{required:!0,message:"Location is required",trigger:"blur"}],dateOfIncident:[{required:!0,message:"Date of incident is required",trigger:"blur"}],requestType:[{required:!0,message:"Type of request is required",trigger:"blur"}]};var M=t(9274),R=t(3824),D=(t(6699),t(6382)),I=t(3003),W=t(963),E=t(7026),T=t(3617);const z={key:0,class:"truncate"},j={style:{color:"rgb(111, 111, 111)"}},P={key:1,class:"truncate"},F={style:{color:"rgb(111, 111, 111)"}};var H=(0,a.aZ)({__name:"Emails",setup(e){const n=(0,r.qj)({subject:"",messageID:[],toEmail:[],ccEmail:[],bodyEmail:""}),t=(0,r.qj)({data:[],thread_id:null}),l=(0,r.iH)(!1),i=(0,S.yj)(),u=(0,a.Fl)((()=>i.params.id));async function s(){await h.n.getEmails(u.value).then((e=>{t.data=e.data,t.thread_id=e.thread_id}))}function c(e=null){const a=(0,W.dG)("cf_contact_email");a&&n.toEmail.push(a);const r=t.data.find((n=>n.data.mail_id==e));r&&(r.data.from_email.map((e=>{n.toEmail.includes(e.mail)||n.toEmail.push(e.mail)})),r.data.cc_email.map((e=>{n.ccEmail.includes(e.mail)||n.ccEmail.push(e.mail)})),n.subject=r.data.subject,n.messageID=r.data.message_id),l.value=!0}async function f(e){await h.n.sendEmail(u.value,{form:e.form,file:e.file}).then((()=>{(0,d.bM)({type:"success",message:"Success."}),l.value=!1}))}return(0,a.bv)((()=>{s()})),(e,i)=>{const u=(0,a.up)("el-icon"),s=(0,a.up)("el-collapse-item"),d=(0,a.up)("el-collapse");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t.data.length>0?((0,a.wg)(),(0,a.j4)(d,{key:0,accordion:"",class:"px-3 border-t"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.data,((e,n)=>((0,a.wg)(),(0,a.j4)(s,{key:n,name:n},{title:(0,a.w5)((()=>["received"==e.delivery?((0,a.wg)(),(0,a.iD)("div",z,[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,r.SU)(E))])),_:1}),(0,a.Uk)(" "+(0,o.zw)(e.data.from_email[0].name)+" - ",1),(0,a._)("span",j,(0,o.zw)((0,r.SU)(m.p6)(e.data.created_at,"MMM dd, yyyy hh:mm a")),1)])):(0,a.kq)("",!0),"sent"==e.delivery?((0,a.wg)(),(0,a.iD)("div",P,[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,r.SU)(T))])),_:1}),(0,a.Uk)(" "+(0,o.zw)(e.data.from_email[0].name)+" - ",1),(0,a._)("span",F,(0,o.zw)((0,r.SU)(m.p6)(e.data.created_at,"MMM dd, yyyy hh:mm a")),1)])):(0,a.kq)("",!0)])),default:(0,a.w5)((()=>[(0,a.Wm)(D.Z,{thread:e,onReply:c},null,8,["thread"])])),_:2},1032,["name"])))),128))])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(I.Z,{show:l.value,onClose:i[0]||(i[0]=e=>l.value=!1),details:n,onSend:f},null,8,["show","details"])],64)}}});const N=H;var L=N,O=t(4204);const A={class:"min-h-full pb-20 h-full"},B={class:"p-0 md:pt-10 md:py-10 2xl:px-8 max-w-7xl mx-auto flex flex-col justify-start"},Y={class:"flex flex-col md:rounded-lg gap-5 bg-white p-4 md:p-6 lg:p-8"},Z={class:"mt-3 grid grid-cols-12 gap-x-3 py-3"},K={class:"col-span-12 sm:col-span-6"},G=(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5"},[(0,a._)("span",{class:"text-red-500 mr-2"},"*"),(0,a.Uk)("Name")],-1),X={class:"col-span-12 sm:col-span-6"},J=(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5"},[(0,a._)("span",{class:"text-red-500 mr-2"},"*"),(0,a.Uk)("Email")],-1),Q={class:"col-span-12 sm:col-span-6"},$=(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5"}," Company/Organization",-1),ee={class:"col-span-12 sm:col-span-6"},ne=(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5"}," Designation",-1),te={class:"col-span-12 sm:col-span-6"},ae=(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5"},[(0,a._)("span",{class:"text-red-500 mr-2"},"*"),(0,a.Uk)("Site")],-1),re={class:"col-span-12 sm:col-span-6"},oe=(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5"},[(0,a._)("span",{class:"text-red-500 mr-2"},"*"),(0,a.Uk)("Floor")],-1),le={class:"col-span-12 sm:col-span-6"},ie=(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5"}," Date",-1),ue={class:"col-span-12 sm:col-span-6"},se=(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5"}," Contact No.",-1),ce={class:"col-span-12 sm:col-span-6"},de=(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5"}," Job Level",-1),me=(0,a.Uk)("Rank and File/Supervisor"),fe=(0,a.Uk)("Manager/Higher"),pe={class:"col-span-12 sm:col-span-6"},ge={class:"block text-sm font-semibold text-gray-700 mb-1.5"},ye={key:0,class:"text-red-500 mr-2"},ve=(0,a.Uk)("Manager's Email"),be={class:"col-span-12"},we=(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5"},[(0,a._)("span",{class:"text-red-500 mr-2"},"*"),(0,a.Uk)("Reason")],-1),he={class:"col-span-12"},Se=(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5"},[(0,a._)("span",{class:"text-red-500 mr-2"},"*"),(0,a.Uk)("Location to View")],-1),_e={class:"col-span-12 sm:col-span-6"},xe=(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5"},[(0,a._)("span",{class:"text-red-500 mr-2"},"*"),(0,a.Uk)("Date of Incident")],-1),qe={class:"col-span-12 sm:col-span-6"},ke=(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5"},[(0,a._)("span",{class:"text-red-500 mr-2"},"*"),(0,a.Uk)("Time of Incident")],-1),Ve={class:"grid grid-cols-12 gap-x-3"},Ue={class:"col-span-12"},Ce=(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5"},[(0,a._)("span",{class:"text-red-500 mr-2"},"*"),(0,a.Uk)("Type of Request")],-1),Me={class:"my-1 flex flex-col"},Re=(0,a.Uk)("Image/Picture"),De=(0,a.Uk)("Video/Footage Viewing"),Ie=(0,a.Uk)("Video Footage Copy (Official or Legal documents are needed "),We=(0,a._)("span",{class:"font-semibold"},"to be attached",-1),Ee=(0,a.Uk)(" .)"),Te=(0,a._)("div",{class:"col-span-12 bg-gray-50 p-3 my-3"},[(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5 text-center"}," Non-Disclosure Agreement"),(0,a._)("p",{class:"text-sm mt-3 text-justify"}," This requesting party will not, as authorized or required by the requesting party’s duties hereunder, reveal or divulge to any person or entity any information concerning the organization, business, finances, transactions or other affairs of KMC which may come to the requesting party’s knowledge during the continuance of this request, and the requesting party will keep in complete secrecy all except confidential information entrusted to the requesting party and will not use or attempt to use any such information in any manner which may injure or cause loss either directly or indirectly to KMC’s business interests. ")],-1),ze=(0,a._)("div",{class:"col-span-12 sm:col-span-6"},[(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5 text-center"}," Waiver/Declaration"),(0,a._)("p",{class:"text-sm mt-3 text-justify"}," I hereby declare that the information provided in this form are true and accurate to the best of my knowledge. I also declare that this form, including the information provided herewith, was prepared on my own free will, freely and voluntarily without any inducement, assurance or guarantee being made. ")],-1),je=(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5 text-center"}," Requested By",-1),Pe={key:0},Fe=["src"],He={class:"text-center text-sm"},Ne={class:"text-center text-xs text-gray-500"},Le={key:0,class:"col-span-12 sm:col-span-3"},Oe=(0,a._)("label",{class:"block text-sm font-semibold text-gray-700 mb-1.5 text-center"}," Approved by Authorized Signatories: (Requester's Manager or higher)",-1),Ae={key:0},Be=["src"],Ye={class:"text-center text-sm"},Ze={class:"text-center text-xs text-gray-500"},Ke={class:"mt-4 py-4 flex justify-between sm:px-4"},Ge={class:"flex space-x-2"},Xe=(0,a.Uk)(" Sign "),Je=(0,a.Uk)("Decline"),Qe=(0,a.Uk)("Approve");var $e=(0,a.aZ)({__name:"Form",setup(e){const n=(0,r.iH)("requester"),t=(0,r.iH)(""),i=(0,r.iH)(!1),u=(0,r.iH)(!1),d=(0,r.iH)(!1),f=(0,r.iH)(!1),p=(0,r.qj)({name:"",managerEmail:"",organizationId:null,organization:"",siteId:null,siteName:"",floor:"",email:"",contact:"",title:"",isLead:"0",date:(0,m.Iz)("yyyy-MM-dd"),reason:"",locationToView:"",requestType:"Image/Picture",dateOfIncident:(0,m.Iz)("yyyy-MM-dd"),timeofIncident:[(0,m.Iz)("yyyy-MM-dd"),(0,m.Iz)("yyyy-MM-dd")]}),g=(0,r.qj)({requesterSign:"",requesterName:"",requesterSignDate:"",managerSign:"",managerName:"",managerSignDate:""}),y=(0,r.iH)([]),v=(0,r.iH)([]),_=(0,r.iH)(null),x=(0,r.iH)([]),q=s.T5+"/public/upload?type=email",D=(0,S.yj)(),I=(0,a.Fl)((()=>D.fullPath)),W=(0,a.Fl)((()=>"requester"==n.value&&"requester"==t.value)),E=(0,a.Fl)((()=>M.h.getters.isAuthenticated)),T=(0,a.Fl)((()=>"requester"==n.value&&"requester"==t.value||"manager"==n.value&&"manager"==t.value)),z=(0,a.Fl)((()=>"officer"==n.value&&"officer"==t.value)),j=(0,a.Fl)((()=>D.params.id)),P=(0,a.Fl)((()=>{const e=x.value.find((e=>e.siteid==p.siteId));return e?e.floors:[]}));function F(e){g[e.field]=e.event}async function H(){await U.g.getPublicSitesModule().then((e=>{x.value=e}))}async function N(){d.value=!0,await h.n.getCCTVDetails(j.value).then((e=>{p.name=e.name,p.organization=e.organization,p.organizationId=e.organizationId,p.siteId=e.siteId,p.siteName=e.siteName,p.email=e.email,p.contact=e.contact,p.title=e.title,p.isLead=e.isLead,p.reason=e.reason,p.managerEmail=e.managerEmail,p.locationToView=e.locationToView,p.dateOfIncident=e.dateOfIncident,p.timeofIncident=e.timeOfIncident,p.requestType=""==e.typeOfRequest?"Image/Picture":e.typeOfRequest,p.floor=e.floor,v.value=e.files,g.requesterSign=e.signatureRequester?e.signatureRequester.signature:"",g.requesterName=e.signatureRequester?e.signatureRequester.name:e.name,g.requesterSignDate=e.signatureRequester?e.signatureRequester.date_time.toString():"",g.managerSign=e.signatureManager?e.signatureManager.signature:"",g.managerName=e.signatureManager?e.signatureManager.name:"",g.managerSignDate=e.signatureManager?e.signatureManager.date_time.toString():"",R.Z.replace({query:{id:e.recordId}}),"officer"==e.view&&0==E.value&&(M.h.commit(O.tM.SET_PREVIOUS_ROUTE,I),R.Z.push({name:"auth"})),n.value=e.view,t.value=e.approvalStep,d.value=!1}))}function $e(){_.value?.validate().then((()=>{(0!=y.value.length||"Video Footage Copy"!=p.requestType||"requester"!=n.value)&&(0!=v.value.length||"Video Footage Copy"!=p.requestType||"manager"!=n.value)?i.value=!0:(0,w.T)({type:"warning",message:"Official or Legal documents are needed\n                    for this request"})}))}function en(){_.value?.validate().then((async()=>{f.value=!0,await h.n.submitCCTVForm({form:p,signature:g,file:y.value},j.value).then((()=>{f.value=!1,i.value=!1,N()})).catch((()=>f.value=!1))}))}async function nn(){f.value=!0,await h.n.approveRequest(j.value).then((()=>{(0,w.T)({title:"Success",message:"Request has been approved",type:"success"}),f.value=!1,N()})).catch((()=>f.value=!1))}function tn(e){y.value=e}function an(){u.value=!0}return(0,a.bv)((()=>{N(),H()})),(e,t)=>{const s=(0,a.up)("el-input"),d=(0,a.up)("el-form-item"),y=(0,a.up)("el-option"),w=(0,a.up)("el-select"),h=(0,a.up)("el-date-picker"),S=(0,a.up)("el-radio"),U=(0,a.up)("el-time-select"),M=(0,a.up)("el-button"),R=(0,a.up)("el-form");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l.Z,{name:"CCTV Video Footage Request Form",subName:"Helpdesk",redirectRoute:"helpdesk"}),(0,a._)("div",A,[(0,a._)("div",B,[(0,a._)("div",Y,[(0,a.Wm)(R,{class:"divide-y divide-gray-200 overflow-hidden",ref_key:"editForm",ref:_,model:p,rules:(0,r.SU)(C)},{default:(0,a.w5)((()=>[(0,a._)("div",Z,[(0,a._)("div",K,[(0,a.Wm)(d,{prop:"name"},{default:(0,a.w5)((()=>[G,(0,a.Wm)(s,{size:"large",class:"w-full",modelValue:p.name,"onUpdate:modelValue":t[0]||(t[0]=e=>p.name=e),readonly:!(0,r.SU)(W)},null,8,["modelValue","readonly"])])),_:1})]),(0,a._)("div",X,[(0,a.Wm)(d,{prop:"email"},{default:(0,a.w5)((()=>[J,(0,a.Wm)(s,{size:"large",class:"w-full",modelValue:p.email,"onUpdate:modelValue":t[1]||(t[1]=e=>p.email=e),readonly:!(0,r.SU)(W)},null,8,["modelValue","readonly"])])),_:1})]),(0,a._)("div",Q,[(0,a.Wm)(d,{prop:"organizationId"},{default:(0,a.w5)((()=>[$,(0,a.Wm)(s,{size:"large",readonly:"",class:"w-full",modelValue:p.organization,"onUpdate:modelValue":t[2]||(t[2]=e=>p.organization=e)},null,8,["modelValue"])])),_:1})]),(0,a._)("div",ee,[(0,a.Wm)(d,{prop:"title"},{default:(0,a.w5)((()=>[ne,(0,a.Wm)(s,{size:"large",readonly:!(0,r.SU)(W),class:"w-full",modelValue:p.title,"onUpdate:modelValue":t[3]||(t[3]=e=>p.title=e)},null,8,["readonly","modelValue"])])),_:1})]),(0,a._)("div",te,[(0,a.Wm)(d,{prop:"siteId"},{default:(0,a.w5)((()=>[ae,(0,a.Wm)(w,{size:"large",readonly:!(0,r.SU)(W),modelValue:p.siteId,"onUpdate:modelValue":t[4]||(t[4]=e=>p.siteId=e),filterable:"",class:"w-full"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(x.value,(e=>((0,a.wg)(),(0,a.j4)(y,{key:e.siteid,value:e.siteid,label:e.name},null,8,["value","label"])))),128))])),_:1},8,["readonly","modelValue"])])),_:1})]),(0,a._)("div",re,[(0,a.Wm)(d,{prop:"floor"},{default:(0,a.w5)((()=>[oe,(0,a.Wm)(w,{size:"large",readonly:!(0,r.SU)(W),modelValue:p.floor,"onUpdate:modelValue":t[5]||(t[5]=e=>p.floor=e),filterable:"",class:"w-full",placeholder:"Select floor"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(P),((e,n)=>((0,a.wg)(),(0,a.j4)(y,{key:n,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["readonly","modelValue"])])),_:1})]),(0,a._)("div",le,[(0,a.Wm)(d,{prop:"date"},{default:(0,a.w5)((()=>[ie,(0,a.Wm)(h,{size:"large",readonly:!(0,r.SU)(W),modelValue:p.date,"onUpdate:modelValue":t[6]||(t[6]=e=>p.date=e),disabled:"",style:{width:"100%"},type:"date",placeholder:"Pick a day","value-format":"YYYY-MM-DD"},null,8,["readonly","modelValue"])])),_:1})]),(0,a._)("div",ue,[(0,a.Wm)(d,{prop:"contact"},{default:(0,a.w5)((()=>[se,(0,a.Wm)(s,{size:"large",readonly:!(0,r.SU)(W),class:"w-full",modelValue:p.contact,"onUpdate:modelValue":t[7]||(t[7]=e=>p.contact=e)},null,8,["readonly","modelValue"])])),_:1})]),(0,a._)("div",ce,[(0,a.Wm)(d,{prop:"isLead"},{default:(0,a.w5)((()=>[de,(0,a.Wm)(S,{readonly:!(0,r.SU)(W),modelValue:p.isLead,"onUpdate:modelValue":t[8]||(t[8]=e=>p.isLead=e),label:"0"},{default:(0,a.w5)((()=>[me])),_:1},8,["readonly","modelValue"]),(0,a.Wm)(S,{readonly:!(0,r.SU)(W),modelValue:p.isLead,"onUpdate:modelValue":t[9]||(t[9]=e=>p.isLead=e),label:"1"},{default:(0,a.w5)((()=>[fe])),_:1},8,["readonly","modelValue"])])),_:1})]),(0,a._)("div",pe,[(0,a.Wm)(d,{prop:"managerEmail",rules:"0"==p.isLead?[{required:!0,message:"Email is required",trigger:"blur"},{type:"email",message:"Input a valid email",trigger:"blur"}]:[]},{default:(0,a.w5)((()=>[(0,a._)("label",ge,["0"==p.isLead?((0,a.wg)(),(0,a.iD)("span",ye,"*")):(0,a.kq)("",!0),ve]),(0,a.Wm)(s,{size:"large",disabled:"1"==p.isLead,readonly:!(0,r.SU)(W),class:"w-full",modelValue:p.managerEmail,"onUpdate:modelValue":t[10]||(t[10]=e=>p.managerEmail=e)},null,8,["disabled","readonly","modelValue"])])),_:1},8,["rules"])]),(0,a._)("div",be,[(0,a.Wm)(d,{prop:"reason"},{default:(0,a.w5)((()=>[we,(0,a.Wm)(s,{size:"large",readonly:!(0,r.SU)(W),modelValue:p.reason,"onUpdate:modelValue":t[11]||(t[11]=e=>p.reason=e),rows:5,type:"textarea",placeholder:"Please input reason"},null,8,["readonly","modelValue"])])),_:1})]),(0,a._)("div",he,[(0,a.Wm)(d,{prop:"locationToView"},{default:(0,a.w5)((()=>[Se,(0,a.Wm)(s,{size:"large",readonly:!(0,r.SU)(W),class:"w-full",modelValue:p.locationToView,"onUpdate:modelValue":t[12]||(t[12]=e=>p.locationToView=e)},null,8,["readonly","modelValue"])])),_:1})]),(0,a._)("div",_e,[(0,a.Wm)(d,{prop:"dateOfIncident"},{default:(0,a.w5)((()=>[xe,(0,a.Wm)(h,{size:"large",disabled:!(0,r.SU)(W),modelValue:p.dateOfIncident,"onUpdate:modelValue":t[13]||(t[13]=e=>p.dateOfIncident=e),clearable:!1,style:{width:"100%"},type:"date",placeholder:"Pick a day","value-format":"YYYY-MM-DD"},null,8,["disabled","modelValue"])])),_:1})]),(0,a._)("div",qe,[ke,(0,a._)("div",Ve,[(0,a.Wm)(d,{prop:"timeofIncident[0]",class:"col-span-12 sm:col-span-6",rules:[{required:!0,message:"Time of incident is required",trigger:"blur"}]},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{size:"large",modelValue:p.timeofIncident[0],"onUpdate:modelValue":t[14]||(t[14]=e=>p.timeofIncident[0]=e),disabled:!(0,r.SU)(W),placeholder:"Start time",style:{width:"100%"},start:"00:00",step:"00:15",end:"23:59"},null,8,["modelValue","disabled"])])),_:1}),(0,a.Wm)(d,{prop:"timeofIncident[1]",class:"col-span-12 sm:col-span-6",rules:[{required:!0,message:"Time of incident is required",trigger:"blur"}]},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{size:"large",modelValue:p.timeofIncident[1],"onUpdate:modelValue":t[15]||(t[15]=e=>p.timeofIncident[1]=e),disabled:!(0,r.SU)(W),placeholder:"End time",style:{width:"100%"},start:"00:00",step:"00:15",end:"23:59"},null,8,["modelValue","disabled"])])),_:1})])]),(0,a._)("div",Ue,[(0,a.Wm)(d,{prop:"requestType"},{default:(0,a.w5)((()=>[Ce,(0,a._)("div",Me,[(0,a.Wm)(S,{disabled:!(0,r.SU)(W),modelValue:p.requestType,"onUpdate:modelValue":t[16]||(t[16]=e=>p.requestType=e),label:"Image/Picture"},{default:(0,a.w5)((()=>[Re])),_:1},8,["disabled","modelValue"]),(0,a.Wm)(S,{disabled:!(0,r.SU)(W),modelValue:p.requestType,"onUpdate:modelValue":t[17]||(t[17]=e=>p.requestType=e),label:"Video Footage Viewing"},{default:(0,a.w5)((()=>[De])),_:1},8,["disabled","modelValue"]),(0,a.Wm)(S,{disabled:!(0,r.SU)(W),modelValue:p.requestType,"onUpdate:modelValue":t[18]||(t[18]=e=>p.requestType=e),label:"Video Footage Copy"},{default:(0,a.w5)((()=>[Ie,We,Ee])),_:1},8,["disabled","modelValue"])])])),_:1})]),Te,ze,(0,a._)("div",{class:(0,o.C_)(["col-span-12","0"==p.isLead?"sm:col-span-3":"sm:col-span-6"])},[je,""!=g.requesterSign?((0,a.wg)(),(0,a.iD)("div",Pe,[(0,a._)("img",{src:g.requesterSign,alt:"",style:{width:"200px"},class:"mx-auto"},null,8,Fe),(0,a._)("p",He,(0,o.zw)(g.requesterName),1),(0,a._)("p",Ne,(0,o.zw)((0,r.SU)(m.p6)(g.requesterSignDate)),1)])):(0,a.kq)("",!0)],2),"0"==p.isLead?((0,a.wg)(),(0,a.iD)("div",Le,[Oe,""!=g.managerSign?((0,a.wg)(),(0,a.iD)("div",Ae,[(0,a._)("img",{src:g.managerSign,alt:"",style:{width:"200px"},class:"mx-auto"},null,8,Be),(0,a._)("p",Ye,(0,o.zw)(g.managerName),1),(0,a._)("p",Ze,(0,o.zw)((0,r.SU)(m.p6)(g.managerSignDate)),1)])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)]),(0,a._)("div",Ke,[(0,r.SU)(W)?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(V.Z,{key:0,documents:v.value},null,8,["documents"])),(0,r.SU)(W)?((0,a.wg)(),(0,a.j4)(c.Z,{key:1,action:q,fileSize:10,onFiles:tn,ref:"attach"},null,512)):(0,a.kq)("",!0),(0,a._)("div",Ge,[(0,r.SU)(T)?((0,a.wg)(),(0,a.j4)(M,{key:0,type:"primary",onClick:$e,loading:f.value},{default:(0,a.w5)((()=>[Xe])),_:1},8,["loading"])):(0,a.kq)("",!0),(0,r.SU)(z)?((0,a.wg)(),(0,a.j4)(M,{key:1,onClick:an,type:"danger"},{default:(0,a.w5)((()=>[Je])),_:1})):(0,a.kq)("",!0),(0,r.SU)(z)?((0,a.wg)(),(0,a.j4)(M,{key:2,type:"primary",loading:f.value,onClick:nn},{default:(0,a.w5)((()=>[Qe])),_:1},8,["loading"])):(0,a.kq)("",!0)])])])),_:1},8,["model","rules"]),(0,r.SU)(E)?((0,a.wg)(),(0,a.j4)(L,{key:0})):(0,a.kq)("",!0)])])]),(0,a.Wm)(k,{show:u.value,onClose:t[19]||(t[19]=e=>u.value=!1),onReload:N},null,8,["show"]),(0,a.Wm)(b,{loading:f.value,show:i.value,onClose:t[20]||(t[20]=e=>i.value=!1),view:n.value,signature:g,onUpdateSignatureProp:F,onSubmit:en},null,8,["loading","show","view","signature"])],64)}}});const en=$e;var nn=en},1971:function(e,n,t){var a=t(3984);const r=async(e,n,t)=>{const r=new FormData;r.append("file",n.blob(),n.filename()),await a.g.uploadImage(r).then((e=>{t(e.location)}))};n["Z"]=r},9812:function(e,n,t){t.r(n),t.d(n,{BaseTransition:function(){return a.P$},Comment:function(){return a.sv},EffectScope:function(){return a.Bj},Fragment:function(){return a.HY},KeepAlive:function(){return a.Ob},ReactiveEffect:function(){return a.qq},Static:function(){return a.qG},Suspense:function(){return a.n4},Teleport:function(){return a.lR},Text:function(){return a.xv},Transition:function(){return a.uT},TransitionGroup:function(){return a.W3},VueElement:function(){return a.a2},callWithAsyncErrorHandling:function(){return a.$d},callWithErrorHandling:function(){return a.KU},camelize:function(){return a._A},capitalize:function(){return a.kC},cloneVNode:function(){return a.Ho},compatUtils:function(){return a.ry},compile:function(){return r},computed:function(){return a.Fl},createApp:function(){return a.ri},createBlock:function(){return a.j4},createCommentVNode:function(){return a.kq},createElementBlock:function(){return a.iD},createElementVNode:function(){return a._},createHydrationRenderer:function(){return a.Eo},createPropsRestProxy:function(){return a.p1},createRenderer:function(){return a.Us},createSSRApp:function(){return a.vr},createSlots:function(){return a.Nv},createStaticVNode:function(){return a.uE},createTextVNode:function(){return a.Uk},createVNode:function(){return a.Wm},customRef:function(){return a.ZM},defineAsyncComponent:function(){return a.RC},defineComponent:function(){return a.aZ},defineCustomElement:function(){return a.MW},defineEmits:function(){return a.Bz},defineExpose:function(){return a.WY},defineProps:function(){return a.yb},defineSSRCustomElement:function(){return a.Ah},devtools:function(){return a.mW},effect:function(){return a.cE},effectScope:function(){return a.B},getCurrentInstance:function(){return a.FN},getCurrentScope:function(){return a.nZ},getTransitionRawChildren:function(){return a.Q6},guardReactiveProps:function(){return a.F4},h:function(){return a.h},handleError:function(){return a.S3},hydrate:function(){return a.ZB},initCustomFormatter:function(){return a.Mr},initDirectivesForSSR:function(){return a.Nd},inject:function(){return a.f3},isMemoSame:function(){return a.nQ},isProxy:function(){return a.X3},isReactive:function(){return a.PG},isReadonly:function(){return a.$y},isRef:function(){return a.dq},isRuntimeOnly:function(){return a.of},isShallow:function(){return a.yT},isVNode:function(){return a.lA},markRaw:function(){return a.Xl},mergeDefaults:function(){return a.u_},mergeProps:function(){return a.dG},nextTick:function(){return a.Y3},normalizeClass:function(){return a.C_},normalizeProps:function(){return a.vs},normalizeStyle:function(){return a.j5},onActivated:function(){return a.dl},onBeforeMount:function(){return a.wF},onBeforeUnmount:function(){return a.Jd},onBeforeUpdate:function(){return a.Xn},onDeactivated:function(){return a.se},onErrorCaptured:function(){return a.d1},onMounted:function(){return a.bv},onRenderTracked:function(){return a.bT},onRenderTriggered:function(){return a.Yq},onScopeDispose:function(){return a.EB},onServerPrefetch:function(){return a.vl},onUnmounted:function(){return a.SK},onUpdated:function(){return a.ic},openBlock:function(){return a.wg},popScopeId:function(){return a.Cn},provide:function(){return a.JJ},proxyRefs:function(){return a.WL},pushScopeId:function(){return a.dD},queuePostFlushCb:function(){return a.qb},reactive:function(){return a.qj},readonly:function(){return a.OT},ref:function(){return a.iH},registerRuntimeCompiler:function(){return a.Y1},render:function(){return a.sY},renderList:function(){return a.Ko},renderSlot:function(){return a.WI},resolveComponent:function(){return a.up},resolveDirective:function(){return a.Q2},resolveDynamicComponent:function(){return a.LL},resolveFilter:function(){return a.eq},resolveTransitionHooks:function(){return a.U2},setBlockTracking:function(){return a.qZ},setDevtoolsHook:function(){return a.ec},setTransitionHooks:function(){return a.nK},shallowReactive:function(){return a.Um},shallowReadonly:function(){return a.YS},shallowRef:function(){return a.XI},ssrContextKey:function(){return a.Uc},ssrUtils:function(){return a.G},stop:function(){return a.sT},toDisplayString:function(){return a.zw},toHandlerKey:function(){return a.hR},toHandlers:function(){return a.mx},toRaw:function(){return a.IU},toRef:function(){return a.Vh},toRefs:function(){return a.BK},transformVNodeArgs:function(){return a.C3},triggerRef:function(){return a.oR},unref:function(){return a.SU},useAttrs:function(){return a.l1},useCssModule:function(){return a.fb},useCssVars:function(){return a.sj},useSSRContext:function(){return a.Zq},useSlots:function(){return a.Rr},useTransitionState:function(){return a.Y8},vModelCheckbox:function(){return a.e8},vModelDynamic:function(){return a.YZ},vModelRadio:function(){return a.G2},vModelSelect:function(){return a.bM},vModelText:function(){return a.nr},vShow:function(){return a.F8},version:function(){return a.i8},warn:function(){return a.ZK},watch:function(){return a.YP},watchEffect:function(){return a.m0},watchPostEffect:function(){return a.Rh},watchSyncEffect:function(){return a.yX},withAsyncContext:function(){return a.mv},withCtx:function(){return a.w5},withDefaults:function(){return a.b9},withDirectives:function(){return a.wy},withKeys:function(){return a.D2},withMemo:function(){return a.MX},withModifiers:function(){return a.iM},withScopeId:function(){return a.HX}});var a=t(9963);const r=()=>{0}}}]);
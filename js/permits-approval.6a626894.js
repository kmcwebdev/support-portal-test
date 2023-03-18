(self["webpackChunkvue3_ts_template"]=self["webpackChunkvue3_ts_template"]||[]).push([[8909],{7665:function(e,t,n){const{createElementVNode:a,openBlock:i,createElementBlock:r}=n(9812);e.exports=function(e,t){return i(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[a("path",{"fill-rule":"evenodd",d:"M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z","clip-rule":"evenodd"})])}},3793:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ct}});var a=n(6252),i=n(3577),r=n(2262),l=n(2202),u=n(3724),o=n(9963),s=n(5953),c=n(9419),d=n(6080),m=n(6210),f=n(9996),p=n(7064),g=n(2201);const v={key:1,class:"flex justify-between my-2"},_=["onClick"];var w=(0,a.aZ)({__name:"SignatureApproval",props:{details:{type:Object,required:!0},approvalOnly:{type:Boolean,required:!0},show:{type:Boolean,required:!0}},emits:["reload","close"],setup(e,{expose:t,emit:n}){const i=e,l=(0,r.iH)(!1),s=(0,r.iH)(!1),w=(0,r.iH)(null),y=(0,r.iH)(null),h=d.T5+"/admin/upload-sign",x=(0,r.qj)({scope:"",string:"",signature:"",authorizedRep:localStorage.signName});t({open:l,handleModal:C});const b=(0,g.yj)(),k=(0,a.Fl)((()=>b.params.id));function C(e){l.value=e}function D(e){w.value?.fromDataURL("data:image/png;base64,"+e[0].base64)}function V(){w.value?.clearSignature(),y.value?.clearFiles()}async function S(){if(!i.approvalOnly){const e=w.value?.saveSignature().data;if(!e)return void(0,f.bM)({title:"Warning",message:"Empty Signature",type:"warning"});x.signature=e}localStorage.signName=x.authorizedRep,s.value=!0,await u.G.sign(k.value,x).then((async()=>{(0,f.bM)({title:"Success",type:"success"}),n("reload"),n("close"),s.value=!1})).catch((()=>s.value=!1))}return(t,i)=>{const l=(0,a.up)("el-input");return(0,a.wg)(),(0,a.j4)(p.Z,{show:e.show,onClose:i[1]||(i[1]=e=>n("close")),"action-bar":!0,disabled:""==x.authorizedRep,onSubmit:S,loading:s.value,"submit-label":e.approvalOnly?"Approve":"Sign & Approve"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[e.approvalOnly?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)((0,r.SU)(c.Z),{key:0,height:150,width:"100%",ref_key:"signaturePad",ref:w,options:{maxWidth:5},customStyle:{border:"#333333 1px dashed"}},null,512)),e.approvalOnly?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",v,[(0,a.Wm)(m.Z,{ref_key:"attachFile",ref:y,action:h,limit:1,onFiles:D},null,512),(0,a._)("a",{onClick:(0,o.iM)(V,["prevent"]),class:"text-primary cursor-default mt-1"},"Clear",8,_)])),(0,a.Wm)(l,{class:"mt-3",placeholder:"Name",modelValue:x.authorizedRep,"onUpdate:modelValue":i[0]||(i[0]=e=>x.authorizedRep=e)},null,8,["modelValue"])])])),_:1},8,["show","disabled","loading","submit-label"])}}});const y=w;var h=y,x=(0,a.aZ)({__name:"DeclinePermit",props:{show:{type:Boolean,required:!0}},emits:["reload","close"],setup(e,{expose:t,emit:n}){t({open:open});const i=(0,r.iH)(!1),l=(0,r.qj)({reason:"",name:""}),o=(0,g.yj)(),s=(0,a.Fl)((()=>o.params.id));async function c(){i.value=!0,await u.G.decline(s.value,l).then((()=>{(0,f.bM)({title:"Success",type:"success"}),n("reload"),n("close"),i.value=!1})).catch((()=>{n("close"),i.value=!1}))}return(t,r)=>{const u=(0,a.up)("el-input");return(0,a.wg)(),(0,a.j4)(p.Z,{show:e.show,onClose:r[2]||(r[2]=e=>n("close")),"action-bar":!0,disabled:!l.reason||!l.name,loading:i.value,onSubmit:c,"submit-type":"danger","submit-label":"Decline"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{type:"textarea",rows:5,placeholder:"Please input reason",modelValue:l.reason,"onUpdate:modelValue":r[0]||(r[0]=e=>l.reason=e)},null,8,["modelValue"]),(0,a.Wm)(u,{class:"mt-3",placeholder:"Input name",modelValue:l.name,"onUpdate:modelValue":r[1]||(r[1]=e=>l.name=e)},null,8,["modelValue"])])),_:1},8,["show","disabled","loading"])}}});const b=x;var k=b;const C=(0,a._)("h2",{class:"text-lg text-gray-900 font-barlow text-semibold"},"Approvals",-1),D={class:"mt-6 flow-root"},V={class:"-mb-8"},S={class:"relative pb-8"},R={key:0,class:"absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200","aria-hidden":"true"},U={class:"relative flex space-x-3"},q={class:"pt-1"},z=(0,a._)("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 640 512",class:"h-5 w-5 text-white","aria-hidden":"true",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("path",{d:"M623.2 192c-51.8 3.5-125.7 54.7-163.1 71.5-29.1 13.1-54.2 24.4-76.1 24.4-22.6 0-26-16.2-21.3-51.9 1.1-8 11.7-79.2-42.7-76.1-25.1 1.5-64.3 24.8-169.5 126L192 182.2c30.4-75.9-53.2-151.5-129.7-102.8L7.4 116.3C0 121-2.2 130.9 2.5 138.4l17.2 27c4.7 7.5 14.6 9.7 22.1 4.9l58-38.9c18.4-11.7 40.7 7.2 32.7 27.1L34.3 404.1C27.5 421 37 448 64 448c8.3 0 16.5-3.2 22.6-9.4 42.2-42.2 154.7-150.7 211.2-195.8-2.2 28.5-2.1 58.9 20.6 83.8 15.3 16.8 37.3 25.3 65.5 25.3 35.6 0 68-14.6 102.3-30 33-14.8 99-62.6 138.4-65.8 8.5-.7 15.2-7.3 15.2-15.8v-32.1c.2-9.1-7.5-16.8-16.6-16.2z"})],-1),W=[z],j={class:"min-w-0 flex-1 flex justify-between space-x-4"},H={class:"text-sm text-gray-800 font-semibold"},A=(0,a.Uk)(" Insert Signature and Approve "),M=(0,a.Uk)(" Approve "),B={key:0,class:"text-gray-500 text-sm"},P={key:1,class:"text-gray-500 text-sm"},E={key:0},N={key:0},T={key:1},F={key:1},I={key:0,class:"text-gray-600 text-sm"},Y={class:"mt-6 flex justify-even"},Z=(0,a.Uk)("Decline "),G=(0,a.Uk)("Download PDF");var O=(0,a.aZ)({__name:"Signatures",props:{details:{type:Object,required:!0}},emits:["reload"],setup(e,{emit:t}){const n=e,l=(0,r.iH)(!1),u=(0,r.iH)(!1),c=(0,r.iH)(!1),m=(0,r.iH)(!1),f=(0,g.yj)(),p=(0,a.Fl)((()=>f.params.id)),v=(0,a.Fl)((()=>{const e=n.details.instance.signatures.find((e=>e.string==n.details.approver));return!!e&&e.status}));function _(e){const t=n.details.instance.signatures.find((t=>t.string==e));return t||null}function w(){l.value=!0}function y(e){c.value=e,u.value=!0}async function x(){m.value=!0,await fetch(d.T5+"/admin/pdf/"+p.value,{method:"GET",headers:{Accept:"arraybuffer","Content-Type":"application/json"}}).then((e=>e.blob())).then((e=>{window.open(URL.createObjectURL(e))})),m.value=!1}return(n,d)=>{const f=(0,a.up)("el-link"),p=(0,a.up)("el-button");return(0,a.wg)(),(0,a.iD)(a.HY,null,[C,(0,a._)("div",D,[(0,a._)("ul",V,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.details.template.signature,((t,n)=>((0,a.wg)(),(0,a.iD)("li",{key:n},[(0,a._)("div",S,[n<e.details.template.signature.length-1?((0,a.wg)(),(0,a.iD)("span",R)):(0,a.kq)("",!0),(0,a._)("div",U,[(0,a._)("div",q,[(0,a._)("span",{class:(0,i.C_)(["h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white",{"bg-negative":"Declined"==_(t.string_name)?.status,"bg-positive":("Signed"==_(t.string_name)?.status||"Approved"==_(t.string_name)?.status)&&"Declined"!=_(t.string_name)?.status}])},W,2)]),(0,a._)("div",j,[(0,a._)("div",null,[(0,a._)("p",H,(0,i.zw)(t.label),1),"Pending"==_(t.string_name)?.status&&0==t.for_approval?((0,a.wg)(),(0,a.j4)(f,{key:0,onClick:d[0]||(d[0]=(0,o.iM)((e=>y(!1)),["prevent"])),disabled:t.string_name!==e.details.approver,type:"primary",class:"text-xs"},{default:(0,a.w5)((()=>[A])),_:2},1032,["disabled"])):(0,a.kq)("",!0),"Pending"==_(t.string_name)?.status&&1==t.for_approval?((0,a.wg)(),(0,a.j4)(f,{key:1,onClick:d[1]||(d[1]=(0,o.iM)((e=>y(!0)),["prevent"])),disabled:t.string_name!==e.details.approver,type:"primary",class:"text-xs"},{default:(0,a.w5)((()=>[M])),_:2},1032,["disabled"])):((0,a.wg)(),(0,a.iD)(a.HY,{key:2},["Declined"==_(t.string_name)?.status?((0,a.wg)(),(0,a.iD)("div",B,[(0,a._)("p",null," Declined by: "+(0,i.zw)(_(t.string_name)?.signed_by),1),(0,a._)("p",null," Reason: "+(0,i.zw)(_(t.string_name)?.status_remarks),1)])):((0,a.wg)(),(0,a.iD)("p",P,["Approved"==_(t.string_name)?.status?((0,a.wg)(),(0,a.iD)("span",E,[0==t.for_approval?((0,a.wg)(),(0,a.iD)("span",N,"Signed and Approved by:")):((0,a.wg)(),(0,a.iD)("span",T,"Approved by:"))])):"Signed"==_(t.string_name)?.status?((0,a.wg)(),(0,a.iD)("span",F," Signed by: ")):(0,a.kq)("",!0),(0,a.Uk)(" "+(0,i.zw)(_(t.string_name)?.signed_by),1)]))],64))]),"Signed"==_(t.string_name)?.status||"Approved"==_(t.string_name)?.status?((0,a.wg)(),(0,a.iD)("div",I,(0,i.zw)((0,r.SU)(s.p6)(_(t.string_name)?.created_at)),1)):(0,a.kq)("",!0)])])])])))),128))]),(0,a._)("div",Y,["Pending"==(0,r.SU)(v)?((0,a.wg)(),(0,a.j4)(p,{key:0,onClick:d[2]||(d[2]=e=>w()),class:"w-full",type:"danger"},{default:(0,a.w5)((()=>[Z])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(p,{class:"w-full",type:"primary",onClick:x,loading:m.value},{default:(0,a.w5)((()=>[G])),_:1},8,["loading"])]),(0,a.Wm)(h,{show:u.value,onClose:d[3]||(d[3]=e=>u.value=!1),details:e.details,approvalOnly:c.value,onReload:d[4]||(d[4]=e=>t("reload"))},null,8,["show","details","approvalOnly"]),(0,a.Wm)(k,{show:l.value,onClose:d[5]||(d[5]=e=>l.value=!1),onReload:d[6]||(d[6]=e=>t("reload"))},null,8,["show"])])],64)}}});const K=O;var L=K,$=n(963),X=n(7665);const Q=(0,a._)("h2",{class:"text-lg text-gray-900 font-barlow text-semibold"},"Notes",-1),J={class:"flow-root my-3"},ee={key:0,role:"list",class:"mb-4 h-80 overflow-y-auto","element-loading-text":"Loading...","element-loading-spinner":"el-icon-loading"},te={class:"relative pb-8"},ne={key:0,class:"absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200","aria-hidden":"true"},ae={class:"relative flex items-start space-x-3"},ie={class:"relative"},re={class:"h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center"},le={class:"min-w-0 flex-1"},ue={class:"text-sm"},oe={class:"font-medium text-gray-900"},se={class:"mt-0.5 text-sm text-gray-500"},ce={class:"mt-2 text-sm text-gray-700"},de={key:1,class:"text-center mb-4"},me=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-12 w-12 mx-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,a._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"})],-1),fe=(0,a._)("h3",{class:"mt-2 text-sm font-medium text-gray-900"},"No notes",-1),pe=(0,a._)("p",{class:"mt-1 text-sm text-gray-500"}," Get started by adding a new note. ",-1),ge=[me,fe,pe],ve={class:"flex justify-end"},_e=(0,a.Uk)("Submit");var we=(0,a.aZ)({__name:"Notes",props:{details:{type:Object,required:!0}},setup(e){const t=e,n=(0,r.iH)([]),l=(0,r.iH)(!1),o=(0,r.iH)(""),c=(0,r.iH)(!1),d=(0,g.yj)(),m=(0,a.Fl)((()=>d.params.id)),f=(0,a.Fl)((()=>{const e=t.details?.template.signature.find((e=>e.string_name==t.details?.approver));return e?e.label:"Unknown"}));async function p(){l.value=!0,await u.G.getNotes(m.value).then((e=>{n.value=e,l.value=!1}))}async function v(){c.value=!0,await u.G.addNote(m.value,{notes:o.value,file:[],permits_scope:f.value}).then((()=>{p(),c.value=!1,o.value=""})).catch((()=>{c.value=!1}))}return(0,a.bv)((()=>{p()})),(e,t)=>{const u=(0,a.up)("el-input"),d=(0,a.up)("el-form-item"),m=(0,a.up)("el-button"),f=(0,a.up)("el-form"),p=(0,a.Q2)("loading");return(0,a.wg)(),(0,a.iD)(a.HY,null,[Q,(0,a._)("div",J,[n.value.length>0?(0,a.wy)(((0,a.wg)(),(0,a.iD)("ul",ee,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.value,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t},[(0,a._)("div",te,[t!==n.value.length-1?((0,a.wg)(),(0,a.iD)("span",ne)):(0,a.kq)("",!0),(0,a._)("div",ae,[(0,a._)("div",ie,[(0,a._)("div",re,[(0,a.Wm)((0,r.SU)(X),{class:"h-5 w-5 text-gray-500","aria-hidden":"true"})])]),(0,a._)("div",le,[(0,a._)("div",null,[(0,a._)("div",ue,[(0,a._)("a",oe,(0,i.zw)(e.permits_scope),1)]),(0,a._)("p",se,(0,i.zw)((0,r.SU)(s.p6)(e.createdtime)),1)]),(0,a._)("div",ce,[(0,a._)("p",null,(0,i.zw)(e.commentcontent),1)])])])])])))),128))])),[[p,l.value]]):((0,a.wg)(),(0,a.iD)("div",de,ge)),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),rows:2,type:"textarea",placeholder:"Please input text"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a._)("div",ve,[(0,a.Wm)(m,{loading:c.value,type:"primary",size:"medium",onClick:v},{default:(0,a.w5)((()=>[_e])),_:1},8,["loading"])])])),_:1})])),_:1})])],64)}}});const ye=we;var he=ye;const xe={class:"min-h-full pb-20 h-full"},be={class:"p-0 md:pt-10 md:py-10 2xl:px-8 max-w-7xl mx-auto flex flex-col justify-start"},ke={class:"w-full grid grid-cols-1 gap-1 sm:px-6 lg:grid-flow-col-dense lg:grid-cols-3"},Ce={class:"lg:col-span-2 xl:pr-8"},De={class:"md:flex md:items-center md:justify-between md:space-x-4 bg-white p-5 border-gray-300 rounded-md"},Ve={class:"text-2xl font-bold text-gray-900 font-barlow"},Se={class:"md:inline text-secondary text-opacity-40 font-barlow font-bold text-sm uppercase text-gray-600"},Re={key:0,class:"py-3 xl:pt-6 xl:pb-0 space-y-3"},Ue={class:"relative",style:{"padding-top":"56.25%","min-height":"1100px"}},qe=["src"],ze={"aria-labelledby":"timeline-title",class:"lg:col-start-3 lg:col-span-1 space-y-5"},We={class:"bg-white px-4 py-5 rounded-md border-gray-300 sm:px-6"},je={key:0},He=(0,a._)("h2",{id:"timeline-title",class:"text-lg font-medium text-gray-900"}," Building Control ID ",-1),Ae={class:"mt-3 mb-4 flex space-x-2"},Me=(0,a.Uk)("Update"),Be={key:1},Pe=(0,a._)("h2",{id:"timeline-title",class:"text-lg font-medium text-gray-900"}," Slot Number ",-1),Ee={class:"mt-3 mb-4 flex space-x-2"},Ne=(0,a.Uk)("Update"),Te={key:2},Fe=(0,a._)("h2",{id:"timeline-title",class:"text-lg font-medium text-gray-900"}," Card Number ",-1),Ie={class:"mt-3 mb-4 flex space-x-2"},Ye=(0,a.Uk)("Update"),Ze={key:3},Ge=(0,a._)("h2",{class:"text-lg font-medium text-gray-900"},"Name of Driver",-1),Oe={class:"mt-3 mb-4 flex space-x-2"},Ke=(0,a.Uk)("Update"),Le={key:4},$e=(0,a._)("h2",{class:"text-lg font-medium text-gray-900"}," Driver's Contact Number ",-1),Xe={class:"mt-3 mb-4 flex space-x-2"},Qe=(0,a.Uk)("Update"),Je={key:5},et=(0,a._)("h2",{class:"text-lg font-medium text-gray-900"},"Vehicle Model",-1),tt={class:"mt-3 mb-4 flex space-x-2"},nt=(0,a.Uk)("Update"),at={key:6},it=(0,a._)("h2",{class:"text-lg font-medium text-gray-900"},"Vehicle Color",-1),rt={class:"mt-3 mb-4 flex space-x-2"},lt=(0,a.Uk)("Update"),ut={key:7},ot=(0,a._)("h2",{class:"text-lg font-medium text-gray-900"}," Vehicle Plate Number ",-1),st={class:"mt-3 mb-4 flex space-x-2"},ct=(0,a.Uk)("Update"),dt={class:"bg-white px-4 py-5 rounded-md border-gray-300 sm:px-6"},mt={key:0,class:"bg-white px-4 py-5 shadow border sm:px-6"},ft=(0,a._)("h2",{id:"timeline-title",class:"text-lg font-medium text-gray-900"}," Attachments ",-1),pt={class:"py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4"},gt={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},vt={class:"border border-gray-200 rounded-md divide-y divide-gray-200"},_t={class:"w-0 flex-1 flex items-center"},wt=(0,a._)("svg",{class:"flex-shrink-0 h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z","clip-rule":"evenodd"})],-1),yt={class:"ml-2 flex-1 w-0 truncate"},ht={class:"ml-4 flex-shrink-0"},xt=["onClick"];var bt=(0,a.aZ)({__name:"Approval",setup(e){const t=(0,r.iH)(!1),n=(0,r.iH)(!1),o=(0,r.qj)({cf_3532:"",cf_4850:"",cf_4876:"",cf_4842:"",cf_4864:"",cf_4844:"",cf_4846:"",cf_4848:""}),s=(0,r.qj)({cf_3532:!1,cf_4850:!1,cf_4876:!1,cf_4842:!1,cf_4864:!1,cf_4844:!1,cf_4846:!1,cf_4848:!1}),c=(0,r.iH)(null),d=(0,g.yj)(),m=(0,a.Fl)((()=>d.params.id));async function p(){t.value=!0,n.value=!1,await u.G.getFormView(m.value).then((e=>{o.cf_3532=e.instance.cf_3532,o.cf_4850=e.instance.cf_4850,o.cf_4876=e.instance.cf_4876,o.cf_4842=e.instance.cf_4842,o.cf_4864=e.instance.cf_4864,o.cf_4844=e.instance.cf_4844,o.cf_4846=e.instance.cf_4846,o.cf_4848=e.instance.cf_4848,c.value=e,t.value=!1,n.value=!0})).catch((()=>{t.value=!1,n.value=!0}))}async function v(e,t){t?(s[e]=!0,await u.G.saveExternalField(m.value,{field:e,value:t}).then((()=>{(0,f.bM)({title:"Success",message:"Value added",type:"success"}),p(),s[e]=!1})).catch((()=>s[e]=!1))):(0,f.bM)({title:"Warning",message:"Empty field",type:"warning"})}return(0,a.bv)((()=>{p()})),(e,t)=>{const u=(0,a.up)("el-input"),d=(0,a.up)("el-button");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l.Z,{name:"Approval",subName:"Permits"}),(0,a._)("div",xe,[(0,a._)("div",be,[(0,a._)("div",ke,[(0,a._)("div",Ce,[(0,a._)("div",null,[(0,a._)("div",null,[(0,a._)("div",De,[(0,a._)("div",null,[(0,a._)("h2",Ve,(0,i.zw)(c.value?.instance.customersuccesspermitsno),1),(0,a._)("p",Se,(0,i.zw)(c.value?.instance.cf_3338),1)])]),n.value?((0,a.wg)(),(0,a.iD)("div",Re,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.value?.iframe.filter((e=>null!=e)),((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:"prose max-w-none bg-white border-gray-300 p-3 rounded-md text-gray-800 unreset"},[(0,a._)("div",Ue,[(0,a._)("iframe",{src:e,style:{border:"0"},class:"absolute inset-0 w-full h-full",frameborder:"0"},null,8,qe)])])))),128))])):(0,a.kq)("",!0)])])]),(0,a._)("section",ze,[(0,a._)("div",We,["building"!=c.value?.view||"Gate Pass"!=c.value?.instance.cf_3338&&"Work Permit"!=c.value?.instance.cf_3338?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",je,[He,(0,a._)("div",Ae,[(0,a.Wm)(u,{size:"medium",placeholder:"Input building control ID",modelValue:o.cf_3532,"onUpdate:modelValue":t[0]||(t[0]=e=>o.cf_3532=e)},null,8,["modelValue"]),(0,a.Wm)(d,{loading:s.cf_3532,size:"medium",type:"primary",onClick:t[1]||(t[1]=e=>v("cf_3532",o.cf_3532))},{default:(0,a.w5)((()=>[Me])),_:1},8,["loading"])])])),"admin"!=c.value?.view&&"building"!=c.value?.view||"Temporary Parking Request"!=c.value?.instance.cf_3338?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",Be,[Pe,(0,a._)("div",Ee,[(0,a.Wm)(u,{size:"medium",placeholder:"Input slot number",modelValue:o.cf_4850,"onUpdate:modelValue":t[2]||(t[2]=e=>o.cf_4850=e)},null,8,["modelValue"]),(0,a.Wm)(d,{loading:s.cf_4850,size:"medium",type:"primary",onClick:t[3]||(t[3]=e=>v("cf_4850",o.cf_4850))},{default:(0,a.w5)((()=>[Ne])),_:1},8,["loading"])])])),"admin"!=c.value?.view||"Access Card Building Request"!=c.value?.instance.cf_3338&&"Access Card Office Request"!=c.value?.instance.cf_3338?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",Te,[Fe,(0,a._)("div",Ie,[(0,a.Wm)(u,{size:"medium",placeholder:"Input card number",modelValue:o.cf_4876,"onUpdate:modelValue":t[4]||(t[4]=e=>o.cf_4876=e)},null,8,["modelValue"]),(0,a.Wm)(d,{loading:s.cf_4876,size:"medium",type:"primary",onClick:t[5]||(t[5]=e=>v("cf_4876",o.cf_4876))},{default:(0,a.w5)((()=>[Ye])),_:1},8,["loading"])])])),"admin"==c.value?.view&&"Van Booking Request"==c.value?.instance.cf_3338?((0,a.wg)(),(0,a.iD)("div",Ze,[Ge,(0,a._)("div",Oe,[(0,a.Wm)(u,{size:"medium",placeholder:"Input driver's name",modelValue:o.cf_4842,"onUpdate:modelValue":t[6]||(t[6]=e=>o.cf_4842=e)},null,8,["modelValue"]),(0,a.Wm)(d,{loading:s.cf_4842,size:"medium",type:"primary",onClick:t[7]||(t[7]=e=>v("cf_4842",o.cf_4842))},{default:(0,a.w5)((()=>[Ke])),_:1},8,["loading"])])])):(0,a.kq)("",!0),"admin"==c.value?.view&&"Van Booking Request"==c.value?.instance.cf_3338?((0,a.wg)(),(0,a.iD)("div",Le,[$e,(0,a._)("div",Xe,[(0,a.Wm)(u,{size:"medium",placeholder:"Input driver's contact number",modelValue:o.cf_4864,"onUpdate:modelValue":t[8]||(t[8]=e=>o.cf_4864=e)},null,8,["modelValue"]),(0,a.Wm)(d,{loading:s.cf_4864,size:"medium",type:"primary",onClick:t[9]||(t[9]=e=>v("cf_4864",o.cf_4864))},{default:(0,a.w5)((()=>[Qe])),_:1},8,["loading"])])])):(0,a.kq)("",!0),"admin"==c.value?.view&&"Van Booking Request"==c.value?.instance.cf_3338?((0,a.wg)(),(0,a.iD)("div",Je,[et,(0,a._)("div",tt,[(0,a.Wm)(u,{size:"medium",placeholder:"Input vechile model",modelValue:o.cf_4844,"onUpdate:modelValue":t[10]||(t[10]=e=>o.cf_4844=e)},null,8,["modelValue"]),(0,a.Wm)(d,{loading:s.cf_4844,size:"medium",type:"primary",onClick:t[11]||(t[11]=e=>v("cf_4844",o.cf_4844))},{default:(0,a.w5)((()=>[nt])),_:1},8,["loading"])])])):(0,a.kq)("",!0),"admin"==c.value?.view&&"Van Booking Request"==c.value?.instance.cf_3338?((0,a.wg)(),(0,a.iD)("div",at,[it,(0,a._)("div",rt,[(0,a.Wm)(u,{size:"medium",placeholder:"Input vehicle color",modelValue:o.cf_4846,"onUpdate:modelValue":t[12]||(t[12]=e=>o.cf_4846=e)},null,8,["modelValue"]),(0,a.Wm)(d,{loading:s.cf_4846,size:"medium",type:"primary",onClick:t[13]||(t[13]=e=>v("cf_4846",o.cf_4846))},{default:(0,a.w5)((()=>[lt])),_:1},8,["loading"])])])):(0,a.kq)("",!0),"admin"==c.value?.view&&"Van Booking Request"==c.value?.instance.cf_3338?((0,a.wg)(),(0,a.iD)("div",ut,[ot,(0,a._)("div",st,[(0,a.Wm)(u,{size:"medium",placeholder:"Input vechile plate number",modelValue:o.cf_4848,"onUpdate:modelValue":t[14]||(t[14]=e=>o.cf_4848=e)},null,8,["modelValue"]),(0,a.Wm)(d,{loading:s.cf_4848,size:"medium",type:"primary",onClick:t[15]||(t[15]=e=>v("cf_4848",o.cf_4848))},{default:(0,a.w5)((()=>[ct])),_:1},8,["loading"])])])):(0,a.kq)("",!0),c.value?((0,a.wg)(),(0,a.j4)(L,{key:8,details:c.value,onReload:p},null,8,["details"])):(0,a.kq)("",!0)]),(0,a._)("div",dt,[c.value?((0,a.wg)(),(0,a.j4)(he,{key:0,details:c.value,onReload:p},null,8,["details"])):(0,a.kq)("",!0)]),c.value?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[c.value.attachment&&c.value.attachment.length>0?((0,a.wg)(),(0,a.iD)("div",mt,[ft,(0,a._)("div",pt,[(0,a._)("dd",gt,[(0,a._)("ul",vt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.value.attachment,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{class:"pl-3 pr-4 py-3 flex items-center justify-between text-sm",key:t},[(0,a._)("div",_t,[wt,(0,a._)("span",yt,(0,i.zw)(e.attachment.name),1)]),(0,a._)("div",ht,[(0,a._)("a",{onClick:t=>(0,r.SU)($.LR)(e.attachmentsid),class:"font-medium text-primary cursor-pointer"}," Download ",8,xt)])])))),128))])])])])):(0,a.kq)("",!0)],64)):(0,a.kq)("",!0)])])])])],64)}}});const kt=bt;var Ct=kt},3724:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});var a=n(5425);const i={async submitGatepass(e){const t=await a.s.post("/public/admin/permits",e);return t.data},async getWorkingpermitsTemplates(e){const t=await a.s.get(`/public/admin/working-permits/templates/${e}`);return t.data},async submitWorkingPermit(e){const t=await a.s.post("/public/admin/working-permits",e);return t.data},async workingPermitsDetails(e){const t=await a.s.get(`/public/admin/working-permits/record-detail/${e}`);return t.data},async submitTemporaryParking(e){const t=await a.s.post("/public/admin/temporary-parking-request",e);return t.data},async vanBookingRequest(e){const t=await a.s.post("/public/admin/van-booking-request",e);return t.data},async visitorRequest(e){const t=await a.s.post("/public/admin/visitor-request",e);return t.data},async accessCard(e){const t=await a.s.post("/public/admin/access-card-request",e);return t.data},async fetchPermit(e){const t=await a.s.get(`/public/admin/track-permit/${e.submitByEmail}/${e.automationno}`);return t.data},async getFormView(e){const t=await a.s.get(`/admin/formview/${e}`);return t.data},async sign(e,t){const n=await a.s.put(`/admin/insertsign/${e}`,t);return n.data},async saveExternalField(e,t){const n=await a.s.put(`/admin/add-external-field/${e}`,t);return n.data},async getNotes(e){const t=await a.s.get("/public/permits/notes/get",e);return t.data},async addNote(e,t){const n=await a.s.post(`/public/permits/notes/add/${e}`,t);return n.data},async decline(e,t){const n=await a.s.put(`/admin/declined/${e}`,t);return n.data}}},9812:function(e,t,n){"use strict";n.r(t),n.d(t,{BaseTransition:function(){return a.P$},Comment:function(){return a.sv},EffectScope:function(){return a.Bj},Fragment:function(){return a.HY},KeepAlive:function(){return a.Ob},ReactiveEffect:function(){return a.qq},Static:function(){return a.qG},Suspense:function(){return a.n4},Teleport:function(){return a.lR},Text:function(){return a.xv},Transition:function(){return a.uT},TransitionGroup:function(){return a.W3},VueElement:function(){return a.a2},callWithAsyncErrorHandling:function(){return a.$d},callWithErrorHandling:function(){return a.KU},camelize:function(){return a._A},capitalize:function(){return a.kC},cloneVNode:function(){return a.Ho},compatUtils:function(){return a.ry},compile:function(){return i},computed:function(){return a.Fl},createApp:function(){return a.ri},createBlock:function(){return a.j4},createCommentVNode:function(){return a.kq},createElementBlock:function(){return a.iD},createElementVNode:function(){return a._},createHydrationRenderer:function(){return a.Eo},createPropsRestProxy:function(){return a.p1},createRenderer:function(){return a.Us},createSSRApp:function(){return a.vr},createSlots:function(){return a.Nv},createStaticVNode:function(){return a.uE},createTextVNode:function(){return a.Uk},createVNode:function(){return a.Wm},customRef:function(){return a.ZM},defineAsyncComponent:function(){return a.RC},defineComponent:function(){return a.aZ},defineCustomElement:function(){return a.MW},defineEmits:function(){return a.Bz},defineExpose:function(){return a.WY},defineProps:function(){return a.yb},defineSSRCustomElement:function(){return a.Ah},devtools:function(){return a.mW},effect:function(){return a.cE},effectScope:function(){return a.B},getCurrentInstance:function(){return a.FN},getCurrentScope:function(){return a.nZ},getTransitionRawChildren:function(){return a.Q6},guardReactiveProps:function(){return a.F4},h:function(){return a.h},handleError:function(){return a.S3},hydrate:function(){return a.ZB},initCustomFormatter:function(){return a.Mr},initDirectivesForSSR:function(){return a.Nd},inject:function(){return a.f3},isMemoSame:function(){return a.nQ},isProxy:function(){return a.X3},isReactive:function(){return a.PG},isReadonly:function(){return a.$y},isRef:function(){return a.dq},isRuntimeOnly:function(){return a.of},isShallow:function(){return a.yT},isVNode:function(){return a.lA},markRaw:function(){return a.Xl},mergeDefaults:function(){return a.u_},mergeProps:function(){return a.dG},nextTick:function(){return a.Y3},normalizeClass:function(){return a.C_},normalizeProps:function(){return a.vs},normalizeStyle:function(){return a.j5},onActivated:function(){return a.dl},onBeforeMount:function(){return a.wF},onBeforeUnmount:function(){return a.Jd},onBeforeUpdate:function(){return a.Xn},onDeactivated:function(){return a.se},onErrorCaptured:function(){return a.d1},onMounted:function(){return a.bv},onRenderTracked:function(){return a.bT},onRenderTriggered:function(){return a.Yq},onScopeDispose:function(){return a.EB},onServerPrefetch:function(){return a.vl},onUnmounted:function(){return a.SK},onUpdated:function(){return a.ic},openBlock:function(){return a.wg},popScopeId:function(){return a.Cn},provide:function(){return a.JJ},proxyRefs:function(){return a.WL},pushScopeId:function(){return a.dD},queuePostFlushCb:function(){return a.qb},reactive:function(){return a.qj},readonly:function(){return a.OT},ref:function(){return a.iH},registerRuntimeCompiler:function(){return a.Y1},render:function(){return a.sY},renderList:function(){return a.Ko},renderSlot:function(){return a.WI},resolveComponent:function(){return a.up},resolveDirective:function(){return a.Q2},resolveDynamicComponent:function(){return a.LL},resolveFilter:function(){return a.eq},resolveTransitionHooks:function(){return a.U2},setBlockTracking:function(){return a.qZ},setDevtoolsHook:function(){return a.ec},setTransitionHooks:function(){return a.nK},shallowReactive:function(){return a.Um},shallowReadonly:function(){return a.YS},shallowRef:function(){return a.XI},ssrContextKey:function(){return a.Uc},ssrUtils:function(){return a.G},stop:function(){return a.sT},toDisplayString:function(){return a.zw},toHandlerKey:function(){return a.hR},toHandlers:function(){return a.mx},toRaw:function(){return a.IU},toRef:function(){return a.Vh},toRefs:function(){return a.BK},transformVNodeArgs:function(){return a.C3},triggerRef:function(){return a.oR},unref:function(){return a.SU},useAttrs:function(){return a.l1},useCssModule:function(){return a.fb},useCssVars:function(){return a.sj},useSSRContext:function(){return a.Zq},useSlots:function(){return a.Rr},useTransitionState:function(){return a.Y8},vModelCheckbox:function(){return a.e8},vModelDynamic:function(){return a.YZ},vModelRadio:function(){return a.G2},vModelSelect:function(){return a.bM},vModelText:function(){return a.nr},vShow:function(){return a.F8},version:function(){return a.i8},warn:function(){return a.ZK},watch:function(){return a.YP},watchEffect:function(){return a.m0},watchPostEffect:function(){return a.Rh},watchSyncEffect:function(){return a.yX},withAsyncContext:function(){return a.mv},withCtx:function(){return a.w5},withDefaults:function(){return a.b9},withDirectives:function(){return a.wy},withKeys:function(){return a.D2},withMemo:function(){return a.MX},withModifiers:function(){return a.iM},withScopeId:function(){return a.HX}});var a=n(9963);const i=()=>{0}}}]);
"use strict";(self["webpackChunkvue3_ts_template"]=self["webpackChunkvue3_ts_template"]||[]).push([[358],{6210:function(e,l,a){a.d(l,{Z:function(){return p}});var t=a(6252),o=a(2262),i=a(3577),n=a(9737),s=a(7960);const c=(0,t.Uk)("Click to upload"),u={class:"el-upload__tip"},r=(0,t.Uk)("Attach File ");var d=(0,t.aZ)({__name:"AttachFile",props:{action:{type:String,required:!0},fileSize:{type:Number,default:15},data:{type:Object},limit:{type:Number,default:3}},emits:["disable","files"],setup(e,{expose:l,emit:a}){const d=e;l({sliceAttachments:h,submitUpload:x});const m=(0,o.iH)(null),p=(0,o.iH)([]),f=(0,o.iH)([]),b=(0,o.iH)(!1),g=(0,t.Fl)((()=>({Authorization:`Bearer ${(0,s.LP)()}`})));function v(e){b.value=!0,a("disable",!0);const l=e.size/1024/1024<d.fileSize;return l||(n.T.alert("Document size can not exceed "+d.fileSize+"MB!"),b.value=!1,a("disable",!0)),l}function y(e,l){p.value=l.slice(-3);const a=f.value.filter((l=>l.crmid!==e.response.crmid));f.value=a}function w(){n.T.alert("File limit exceeded. 3 files attachment only.")}function k(e){n.T.alert(e),b.value=!1,a("disable",!1)}function _(e){f.value.push(e),b.value=!1,a("disable",!1),a("files",f.value)}function h(){p.value=[],f.value=[],m.value?.clearFiles()}function x(){b.value=!0,m.value?.submit()}return(l,a)=>{const n=(0,t.up)("el-button"),s=(0,t.up)("el-upload"),d=(0,t.up)("el-badge"),p=(0,t.up)("el-popover");return(0,t.wg)(),(0,t.j4)(p,{placement:"top",width:"400",trigger:"click"},{reference:(0,t.w5)((()=>[(0,t.Wm)(d,{value:f.value.length,class:"item"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{type:"default"},{default:(0,t.w5)((()=>[r])),_:1})])),_:1},8,["value"])])),default:(0,t.w5)((()=>[(0,t.Wm)(s,{class:"upload-demo",data:e.data,action:e.action,limit:e.limit,ref_key:"upload",ref:m,"before-upload":v,"on-remove":y,"on-exceed":w,headers:(0,o.SU)(g),"on-error":k,"on-success":_,"auto-upload":!0},{tip:(0,t.w5)((()=>[(0,t._)("div",u," Files with a size less than "+(0,i.zw)(e.fileSize)+"mb. ",1)])),default:(0,t.w5)((()=>[(0,t.Wm)(n,{loading:b.value,type:"primary"},{default:(0,t.w5)((()=>[c])),_:1},8,["loading"])])),_:1},8,["data","action","limit","headers"])])),_:1})}}});const m=d;var p=m},6332:function(e,l,a){a.d(l,{Z:function(){return f}});var t=a(6252),o=a(3577),i=a(6210);const n={class:"z-30 fixed w-full bottom-0 px-2 items-center md:rounded-lg bg-white border-t md:hidden"},s={class:"flex items-center justify-between border-gray-200 bg-white px-4 py-3 sm:px-6","aria-label":"Pagination"},c={class:"flex flex-1 justify-between sm:justify-end space-x-2"},u=(0,t.Uk)("Cancel"),r=(0,t.Uk)("Decline"),d=(0,t.Uk)("Edit");var m=(0,t.aZ)({__name:"MobileAction",props:{loading:{type:Boolean,default:!1},attachFile:{type:Boolean,default:!1},cancelButton:{type:Boolean,default:!1},editButton:{type:Boolean,default:!1},rejectButton:{type:Boolean,default:!1},disableRejectButton:{type:Boolean,default:!1},disableSubmitButton:{type:Boolean,default:!1},submitLabel:{type:String,default:"Submit"},submitButton:{type:Boolean,default:!0},action:{type:String},fileSize:{type:Number,default:15},data:{type:Object},limit:{type:Number,default:3}},emits:["cancel","submit","files","edit","reject"],setup(e,{emit:l}){return(a,m)=>{const p=(0,t.up)("el-button");return(0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("nav",s,[(0,t._)("div",c,[e.attachFile&&e.action?((0,t.wg)(),(0,t.j4)(i.Z,{key:0,action:e.action,"file-size":e.fileSize,data:e.data,limit:e.limit,onFiles:m[0]||(m[0]=e=>l("files"))},null,8,["action","file-size","data","limit"])):(0,t.kq)("",!0),e.cancelButton?((0,t.wg)(),(0,t.j4)(p,{key:1,class:"w-full",onClick:m[1]||(m[1]=e=>l("cancel"))},{default:(0,t.w5)((()=>[u])),_:1})):(0,t.kq)("",!0),e.rejectButton?((0,t.wg)(),(0,t.j4)(p,{key:2,type:"danger",disable:e.disableRejectButton,class:"w-full",onClick:m[2]||(m[2]=e=>l("reject"))},{default:(0,t.w5)((()=>[r])),_:1},8,["disable"])):(0,t.kq)("",!0),e.submitButton?((0,t.wg)(),(0,t.j4)(p,{key:3,disable:e.disableSubmitButton,type:"primary",loading:e.loading,class:"w-full",onClick:m[3]||(m[3]=e=>l("submit"))},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.submitLabel),1)])),_:1},8,["disable","loading"])):(0,t.kq)("",!0),e.editButton?((0,t.wg)(),(0,t.j4)(p,{key:4,type:"primary",loading:e.loading,class:"w-full",onClick:m[4]||(m[4]=e=>l("edit"))},{default:(0,t.w5)((()=>[d])),_:1},8,["loading"])):(0,t.kq)("",!0)])])])}}});const p=m;var f=p},5568:function(e,l,a){a.r(l),a.d(l,{default:function(){return Ne}});var t=a(6252),o=a(2202),i=(a(6699),a(2262)),n=a(3577),s=a(963),c=a(7027),u=a(9274),r=a(4204),d=a(2066),m=a(6210),p=a(1740),f=a(9737),b=a(3824),g=a(6332),v=a(4949),y=a(2201);const w={class:"flex flex-col md:rounded-lg gap-5 bg-white p-4 md:p-6 lg:p-8"},k={key:0},_={class:"mt-3 grid grid-cols-12 gap-x-3 py-3"},h=["for"],x={key:0,class:"text-red-500"},D={class:"text-xs mt-1 text-gray-700"},U=["innerHTML"],C={class:"mt-4 py-4 hidden md:flex justify-between sm:px-4"},S={class:"flex space-x-2"},V=(0,t.Uk)(" Cancel "),z=(0,t.Uk)(" Submit ");var W=(0,t.aZ)({__name:"EditForm",setup(e){const l="https://osp-api.kmc.solutions/api/document/upload?type=email&main=true",a=(0,i.iH)(!1),o=(0,i.iH)([]),W=(0,i.iH)(null),T=(0,i.iH)(null),F=(0,y.yj)(),B=(0,t.Fl)((()=>F.query.scan)),H=(0,t.Fl)((()=>u.h.getters.workflows)),j=(0,t.Fl)((()=>u.h.getters.hiddenBlocks));async function E(){T.value?.validate().then((async()=>{a.value=!0,await p.n.createTicket({form:s.cr.value,file:o.value}).then((e=>{a.value=!1,f.T.confirm("Your ticket has been created","Success",{confirmButtonText:"OK",type:"warning"}).then((()=>{b.Z.push({name:"helpdesk-details",params:{id:e.data.recordId}})}))})).catch((()=>a.value=!1))}))}function q(e){o.value=e}function A(){b.Z.push({name:"helpdesk-list"})}async function N(){B.value&&await v.c.getAsset(B.value,"asset_no").then((e=>{(0,s.O0)("cf_assets_id",{id:e.assetsid,value:e.assetname}),(0,s.O0)("ticket_title",{id:null,value:` - ${e.assetname}`})})).catch((()=>{f.T.alert("No record found")}))}return(0,t.YP)((()=>s.Fh.value),(()=>{s.Fh.value.blocks.length>0&&(W.value=s.Fh.value.blocks[0],u.h.commit(r.px.ADD_BLOCK_SEQUENCE,s.Fh.value.blocks[0]))})),(0,t.YP)((()=>[s.Fh.value,H.value]),(()=>{(0,c.Xd)()})),(0,t.bv)((async()=>{N()})),(e,o)=>{const u=(0,t.up)("el-form-item"),r=(0,t.up)("el-button"),p=(0,t.up)("el-form");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",w,[(0,t.Wm)(p,{class:"divide-y divide-gray-200 overflow-hidden",model:{...(0,i.SU)(s.cr)},ref_key:"editForm",ref:T},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,i.SU)(s.Fh).blocks,((e,l)=>((0,t.wg)(),(0,t.iD)(t.HY,{key:l},[!(0,i.SU)(j).includes(e.blockid)&&(0,i.SU)(s.rp)(e.blockid).length>0?((0,t.wg)(),(0,t.iD)("div",k,[(0,t._)("div",_,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,i.SU)(s.rp)(e.blockid),((l,a)=>((0,t.wg)(),(0,t.iD)(t.HY,{key:a},[(0,i.SU)(c.cE)(l)?((0,t.wg)(),(0,t.iD)("div",{key:0,class:(0,n.C_)(`col-span-12 sm:col-span-${l.span}`)},["fields"==l.type?((0,t.wg)(),(0,t.j4)(u,{key:0,prop:(0,i.SU)(s.WJ)(l),rules:(0,i.SU)(s.$c)(l)},{default:(0,t.w5)((()=>[(0,t._)("label",{for:l.fieldname,class:"block text-md font-bold text-gray-700 font-karla line-height-24"},[(0,t.Uk)((0,n.zw)(l.fieldlabel)+" ",1),(0,i.SU)(c.b3)(l)?((0,t.wg)(),(0,t.iD)("span",x," *")):(0,t.kq)("",!0)],8,h),(0,t.Wm)(d.Z,{uitype:l.uitype,fieldname:l.fieldname,relation:l.relation,onChange:l=>(0,i.SU)(c.mH)(e),disabled:(0,i.SU)(c.gJ)(l),value:(0,i.SU)(s.cr)[(0,i.SU)(s.cx)(l.fieldname)]},null,8,["uitype","fieldname","relation","onChange","disabled","value"]),(0,t._)("p",D,(0,n.zw)(l.fieldsublabel),1)])),_:2},1032,["prop","rules"])):(0,t.kq)("",!0),"element"==l.type?((0,t.wg)(),(0,t.iD)("div",{key:1,class:"py-2",innerHTML:l.content},null,8,U)):(0,t.kq)("",!0)],2)):(0,t.kq)("",!0)],64)))),128))])])):(0,t.kq)("",!0)],64)))),128)),(0,t._)("div",C,[(0,t.Wm)(m.Z,{action:l,onFiles:q,ref:"attach"},null,512),(0,t._)("div",S,[(0,t.Wm)(r,{onClick:A},{default:(0,t.w5)((()=>[V])),_:1}),(0,t.Wm)(r,{loading:a.value,type:"primary",onClick:E},{default:(0,t.w5)((()=>[z])),_:1},8,["loading"])])])])),_:1},8,["model"])]),(0,t.Wm)(g.Z,{action:l,onFiles:q,"attach-file":!0,loading:a.value,onSubmit:E},null,8,["loading"])],64)}}});const T=W;var F=T,B=a(9963),H=a(3984),j=a(4433),E=a(8811);const q=["RFID Access","Fingerprint Access"],A=["Desktop Set","Laptop Set","IP Phone","Headset"],N=["Microsoft Office","Visual Studio","Adobe Photoshop","Adobe Premiere","Microsoft Teams","OneDrive","Outlook","Google Chrome"],Y=["Shared Folder Access","KMC Email Account","ERP Access","OSP Access","NAV Access","Manatal Access","Zoom Licensed Account"],O={"element-loading-text":"Loading...","element-loading-spinner":"el-icon-loading"},I={key:0},K={class:""},L={class:"md:mt-0 md:col-span-2"},P={class:"overflow-hidden sm:rounded-md"},Z={class:"px-4 py-5 bg-white sm:p-6"},M=(0,t._)("h2",{class:"text-gray-700 font-semibold mb-2"},"Employee/s",-1),R=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"},[(0,t._)("span",{class:"text-red-500 mr-2"},"*"),(0,t.Uk)("First name")],-1),$=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"},[(0,t._)("span",{class:"text-red-500 mr-2"},"*"),(0,t.Uk)("Last name")],-1),J=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"},[(0,t._)("span",{class:"text-red-500 mr-2"},"*"),(0,t.Uk)("Organization")],-1),G=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"},[(0,t._)("span",{class:"text-red-500 mr-2"},"*"),(0,t.Uk)("Site")],-1),Q=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"}," Contact Number",-1),X=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"},[(0,t._)("span",{class:"text-red-500 mr-2"},"*"),(0,t.Uk)("Company Email Address")],-1),ee=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"},[(0,t._)("span",{class:"text-red-500 mr-2"},"*"),(0,t.Uk)("Start Date")],-1),le=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"}," Position",-1),ae=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"}," Career Level",-1),te=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"}," Replacement For",-1),oe=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"}," Immediate Supervisor",-1),ie=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"}," Access Control",-1),ne={class:"flex flex-col"},se=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"}," NT log-in Username",-1),ce=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"},"Tools to be deployed ",-1),ue=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"},"Applications ",-1),re=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"},"Internal Employee Access ",-1),de=(0,t._)("label",{class:"block text-sm mb-1 font-semibold text-gray-700"},"Email distro to be added ",-1),me={class:"col-span-12 flex justify-end"},pe=(0,t.Uk)("Apply to all"),fe=(0,t.Uk)("Remove"),be={class:"col-span-12 flex justify-end"},ge=(0,t.Uk)("Add New"),ve=(0,t.Uk)("Submit"),ye={class:"px-4 sm:px-0"},we=["onClick"],ke={class:"truncate text-md leading-6"},_e={class:"truncate font-normal"},he={role:"list",class:"divide-y divide-gray-200 border-t border-gray-200 sm:mt-0 sm:border-t-0"},xe=["onClick"],De={class:"flex items-center py-5 px-4 sm:py-6 sm:px-0"},Ue={class:"flex min-w-0 flex-1 items-center"},Ce={class:"min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4"},Se={class:"truncate text-sm font-medium text-pumpkin"},Ve={class:"mt-2 flex items-center text-sm text-gray-500"},ze={class:"truncate"};var We=(0,t.aZ)({__name:"OnboardingForm",setup(e){const l=(0,i.iH)(!1),a=(0,i.qj)([{firstName:"",lastName:"",organization:"",organizationId:null,contactNumber:"",careerLevel:"",immediateSupervisor:"",replacementFor:"",position:"",email:"",site:null,startDate:null,accessControl:[],activeDirectory:[],toolsToBeDeployed:[],applications:[],internalEmployee:[],emailDistro:[]}]),o=(0,i.iH)([]),s=(0,i.iH)([]),c=(0,i.iH)([]),r=(0,i.iH)(null),d=(0,i.iH)([]),m=(0,t.Fl)((()=>u.h.getters.currentUser)),g=(0,t.Fl)((()=>u.h.getters.isMember));function v(e){const l=a[e].firstName.split(" ");for(var t=0;t<l.length;t++)l[t]=l[t].charAt(0).toUpperCase()+l[t].slice(1);const o=l.join(" "),i=a[e].lastName.split(" ");for(var n=0;n<i.length;n++)i[n]=i[n].charAt(0).toUpperCase()+i[n].slice(1);const s=i.join(" ");a[e].firstName=o,a[e].lastName=s}function y(e){const{index:l,value:t,parent:o,action:i}=e;if("add"==i){if("accessControl"==o)if(a[l].accessControl.includes(t)){const e=a[l].accessControl.indexOf(t);a[l].accessControl.splice(e,1)}else a[l].accessControl.push(t);if("activeDirectory"==o)if(a[l].activeDirectory.includes(t)){const e=a[l].activeDirectory.indexOf(t);a[l].activeDirectory.splice(e,1)}else a[l].activeDirectory.push(t);if("toolsToBeDeployed"==o)if(a[l].toolsToBeDeployed.includes(t)){const e=a[l].toolsToBeDeployed.indexOf(t);a[l].toolsToBeDeployed.splice(e,1)}else a[l].toolsToBeDeployed.push(t);if("applications"==o)if(a[l].applications.includes(t)){const e=a[l].applications.indexOf(t);a[l].applications.splice(e,1)}else a[l].applications.push(t);if("internalEmployee"==o)if(a[l].internalEmployee.includes(t)){const e=a[l].internalEmployee.indexOf(t);a[l].internalEmployee.splice(e,1)}else a[l].internalEmployee.push(t)}if("view"==i){if("accessControl"==o)return!!a[l].accessControl.includes(t);if("activeDirectory"==o)return!!a[l].activeDirectory.includes(t);if("toolsToBeDeployed"==o)return!!a[l].toolsToBeDeployed.includes(t);if("applications"==o)return!!a[l].applications.includes(t);if("internalEmployee"==o)return!!a[l].internalEmployee.includes(t)}}async function w(){await H.g.getSitesModule().then((e=>{o.value=e}))}async function k(){await j.J.getPicklistValues("cf_4725","4").then((e=>{s.value=e.data}))}function _(e){return 7==a[e].organizationId||1817977==a[e].organizationId||240652==a[e].organizationId||!a[e].organizationId}async function h(){await E.n.getDistros().then((e=>{d.value=e}))}function x(){a.push({firstName:"",lastName:"",organization:m.value.accountname,organizationId:m.value.accountid,careerLevel:"",immediateSupervisor:"",replacementFor:"",contactNumber:"",position:"",email:"",site:null,startDate:null,accessControl:[],activeDirectory:[],toolsToBeDeployed:[],applications:[],internalEmployee:[],emailDistro:[]})}function D(e){f.T.confirm("Are you sure you want to delete this item? This action cannot be undone. Click 'OK' to delete or 'Cancel' to keep the item.","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((()=>{a.splice(e,1)}))}function U(e){a.map(((l,t)=>{e!=t&&(a[t].organization=a[e].organization,a[t].startDate=a[e].startDate,a[t].site=a[e].site,a[t].accessControl=a[e].accessControl,a[t].activeDirectory=a[e].activeDirectory,a[t].toolsToBeDeployed=a[e].toolsToBeDeployed,a[t].applications=a[e].applications,a[t].internalEmployee=a[e].internalEmployee,a[t].emailDistro=a[e].emailDistro)}))}function C(){r.value?.validate().then((async()=>{c.value=[],l.value=!0,await p.n.submitForm(a).then((e=>{c.value=e.data,l.value=!1})).catch((()=>{l.value=!1}))}))}async function S(e,l){g.value&&await E.n.fetchAccounts({accountname:e}).then((e=>{const a=[];e.map((e=>{a.push({value:e.accountname,link:e.accountid})})),l(a)}))}function V(e){let l=b.Z.resolve({name:"helpdesk-details",params:{id:e}});window.open(l.href,"_blank")}function z(e){_(e)||(a[e].internalEmployee=[],a[e].emailDistro=[])}return(0,t.bv)((()=>{w(),k(),h(),a[0].organization=m.value.accountname,a[0].organizationId=m.value.accountid})),(e,u)=>{const m=(0,t.up)("el-input"),p=(0,t.up)("el-form-item"),f=(0,t.up)("el-autocomplete"),b=(0,t.up)("el-option"),w=(0,t.up)("el-select"),k=(0,t.up)("el-date-picker"),h=(0,t.up)("el-checkbox"),W=(0,t.up)("el-button"),T=(0,t.up)("el-form");return(0,t.wg)(),(0,t.iD)("div",O,[0==c.value.length?((0,t.wg)(),(0,t.iD)("div",I,[(0,t._)("div",K,[(0,t._)("div",L,[(0,t._)("div",P,[(0,t._)("div",Z,[(0,t.Wm)(T,{model:a,ref_key:"employeeFormRef",ref:r},{default:(0,t.w5)((()=>[M,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a,((e,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"grid grid-cols-12 gap-3 bg-gray-50 p-3 my-2",key:l},[(0,t.Wm)(p,{class:"col-span-12 sm:col-span-4 mb-0",prop:`${l}.firstName`,rules:[{required:!0,message:"First name is required",trigger:"blur"}]},{default:(0,t.w5)((()=>[R,(0,t.Wm)(m,{modelValue:a[l].firstName,"onUpdate:modelValue":e=>a[l].firstName=e,onInput:e=>v(l)},null,8,["modelValue","onUpdate:modelValue","onInput"])])),_:2},1032,["prop"]),(0,t.Wm)(p,{class:"col-span-12 sm:col-span-4 mb-0",prop:`${l}.lastName`,rules:[{required:!0,message:"Last name is required",trigger:"blur"}]},{default:(0,t.w5)((()=>[$,(0,t.Wm)(m,{modelValue:a[l].lastName,"onUpdate:modelValue":e=>a[l].lastName=e,onInput:e=>v(l)},null,8,["modelValue","onUpdate:modelValue","onInput"])])),_:2},1032,["prop"]),(0,t.Wm)(p,{class:"col-span-12 sm:col-span-4 mb-0",prop:`${l}.organization`,rules:[{required:!0,message:"Organization is required",trigger:"blur"}]},{default:(0,t.w5)((()=>[J,(0,t.Wm)(f,{disabled:!(0,i.SU)(g),clearable:"",class:"w-full",modelValue:a[l].organization,"onUpdate:modelValue":e=>a[l].organization=e,debounce:700,"fetch-suggestions":S,"trigger-on-focus":!1,"highlight-first-item":!0,onSelect:e=>{a[l].organizationId=e.link,z(l)},onClear:e=>a[l].organizationId=null},null,8,["disabled","modelValue","onUpdate:modelValue","onSelect","onClear"])])),_:2},1032,["prop"]),(0,t.Wm)(p,{class:"col-span-12 sm:col-span-3 mb-0",prop:`${l}.site`,rules:[{required:!0,message:"Site is required",trigger:"blur"}]},{default:(0,t.w5)((()=>[G,(0,t.Wm)(w,{filterable:"",style:{width:"100%"},modelValue:a[l].site,"onUpdate:modelValue":e=>a[l].site=e},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.value,((e,l)=>((0,t.wg)(),(0,t.j4)(b,{value:e.siteid,label:e.name,key:l},null,8,["value","label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["prop"]),(0,t.Wm)(p,{class:"col-span-12 sm:col-span-3 mb-0"},{default:(0,t.w5)((()=>[Q,(0,t.Wm)(m,{modelValue:a[l].contactNumber,"onUpdate:modelValue":e=>a[l].contactNumber=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,t.Wm)(p,{class:"col-span-12 sm:col-span-3 mb-0",prop:`${l}.email`,rules:[{required:!0,message:"Email is required",trigger:"blur"},{type:"email",message:"Email is invalid",trigger:"blur"}]},{default:(0,t.w5)((()=>[X,(0,t.Wm)(m,{modelValue:a[l].email,"onUpdate:modelValue":e=>a[l].email=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["prop"]),(0,t.Wm)(p,{class:"col-span-12 sm:col-span-3 mb-0",prop:`${l}.startDate`,rules:[{required:!0,message:"Start date is required",trigger:"blur"}]},{default:(0,t.w5)((()=>[ee,(0,t.Wm)(k,{style:{width:"100%"},modelValue:a[l].startDate,"onUpdate:modelValue":e=>a[l].startDate=e,type:"date",placeholder:"Pick a day"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["prop"]),(0,t.Wm)(p,{class:"col-span-12 sm:col-span-3 mb-0"},{default:(0,t.w5)((()=>[le,(0,t.Wm)(m,{modelValue:a[l].position,"onUpdate:modelValue":e=>a[l].position=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,t.Wm)(p,{class:"col-span-12 sm:col-span-3 mb-0"},{default:(0,t.w5)((()=>[ae,(0,t.Wm)(w,{modelValue:a[l].careerLevel,"onUpdate:modelValue":e=>a[l].careerLevel=e,class:"w-full"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.value,((e,l)=>((0,t.wg)(),(0,t.j4)(b,{key:l,label:e.values,value:e.values},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,t.Wm)(p,{class:"col-span-12 sm:col-span-3 mb-0"},{default:(0,t.w5)((()=>[te,(0,t.Wm)(m,{modelValue:a[l].replacementFor,"onUpdate:modelValue":e=>a[l].replacementFor=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,t.Wm)(p,{class:"col-span-12 sm:col-span-3 mb-0"},{default:(0,t.w5)((()=>[oe,(0,t.Wm)(m,{modelValue:a[l].immediateSupervisor,"onUpdate:modelValue":e=>a[l].immediateSupervisor=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,t.Wm)(p,{class:"col-span-12 sm:col-span-2 mb-0"},{default:(0,t.w5)((()=>[ie,(0,t._)("div",ne,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,i.SU)(q),((e,a)=>((0,t.wg)(),(0,t.j4)(h,{key:a,label:e,size:"large",onChange:a=>y({index:l,value:e,parent:"accessControl",action:"add"}),"model-value":y({index:l,value:e,parent:"accessControl",action:"view"})},null,8,["label","onChange","model-value"])))),128))])])),_:2},1024),(0,t.Wm)(p,{class:"col-span-12 sm:col-span-2 mb-0"},{default:(0,t.w5)((()=>[se,(0,t.Wm)(h,{label:"Yes",size:"large",onChange:e=>y({index:l,value:"Yes",parent:"activeDirectory",action:"add"}),"model-value":y({index:l,value:"Yes",parent:"activeDirectory",action:"view"})},null,8,["onChange","model-value"])])),_:2},1024),(0,t.Wm)(p,{class:"col-span-12 sm:col-span-2 mb-0"},{default:(0,t.w5)((()=>[ce,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,i.SU)(A),((e,a)=>((0,t.wg)(),(0,t.j4)(h,{key:a,label:e,onChange:a=>y({index:l,value:e,parent:"toolsToBeDeployed",action:"add"}),"model-value":y({index:l,value:e,parent:"toolsToBeDeployed",action:"view"}),size:"large"},null,8,["label","onChange","model-value"])))),128))])),_:2},1024),(0,t.Wm)(p,{class:"col-span-12 sm:col-span-2 mb-0"},{default:(0,t.w5)((()=>[ue,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,i.SU)(N),((e,a)=>((0,t.wg)(),(0,t.j4)(h,{key:a,label:e,onChange:a=>y({index:l,value:e,parent:"applications",action:"add"}),"model-value":y({index:l,value:e,parent:"applications",action:"view"}),size:"large"},null,8,["label","onChange","model-value"])))),128))])),_:2},1024),(0,t.Wm)(p,{class:"col-span-12 sm:col-span-2 mb-0"},{default:(0,t.w5)((()=>[re,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,i.SU)(Y),((e,a)=>((0,t.wg)(),(0,t.j4)(h,{key:a,label:e,disabled:!_(l),onChange:a=>y({index:l,value:e,parent:"internalEmployee",action:"add"}),"model-value":y({index:l,value:e,parent:"internalEmployee",action:"view"}),size:"large"},null,8,["label","disabled","onChange","model-value"])))),128))])),_:2},1024),(0,t.Wm)(p,{class:"col-span-12 sm:col-span-2 mb-0"},{default:(0,t.w5)((()=>[de,(0,t.Wm)(w,{modelValue:a[l].emailDistro,"onUpdate:modelValue":e=>a[l].emailDistro=e,multiple:"",filterable:"","default-first-option":"",disabled:!_(l),"reserve-keyword":!1},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(d.value,(e=>((0,t.wg)(),(0,t.j4)(b,{key:e,label:`${e.email} - ${e.name}`,value:e.email},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])])),_:2},1024),(0,t._)("div",me,[(0,t.Wm)(W,{type:"default",size:"medium",onClick:e=>U(l)},{default:(0,t.w5)((()=>[pe])),_:2},1032,["onClick"]),a.length>1?((0,t.wg)(),(0,t.j4)(W,{key:0,type:"danger",size:"medium",onClick:e=>D(l)},{default:(0,t.w5)((()=>[fe])),_:2},1032,["onClick"])):(0,t.kq)("",!0)])])))),128)),(0,t._)("div",be,[(0,t.Wm)(W,{type:"default",onClick:x,size:"medium"},{default:(0,t.w5)((()=>[ge])),_:1}),(0,t.Wm)(W,{type:"primary",size:"medium",onClick:C,loading:l.value},{default:(0,t.w5)((()=>[ve])),_:1},8,["loading"])])])),_:1},8,["model"])])])])])])):(0,t.kq)("",!0),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(c.value,((e,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"flex flex-col md:rounded-lg bg-white p-4 md:p-6",key:l},[(0,t._)("div",ye,[(0,t._)("a",{onClick:(0,B.iM)((l=>V(e.parentTicket.ticket_id)),["prevent"]),class:"group flex items-center font-semibold justify-between cursor-pointer text-pumpkin cursor-pointer"},[(0,t._)("span",ke,[(0,t.Uk)((0,n.zw)(e.parentTicket.ticket_no)+" - ",1),(0,t._)("span",_e,(0,n.zw)(e.parentTicket.ticket_title),1)])],8,we)]),(0,t._)("ul",he,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.childTicket,((l,a)=>((0,t.wg)(),(0,t.iD)("li",{key:a},[(0,t._)("a",{onClick:(0,B.iM)((e=>V(l.ticket_id)),["prevent"]),class:"group block cursor-pointer"},[(0,t._)("div",De,[(0,t._)("div",Ue,[(0,t._)("div",Ce,[(0,t._)("div",null,[(0,t._)("p",Se,(0,n.zw)(e.parentTicket.ticket_no),1),(0,t._)("p",Ve,[(0,t._)("span",ze,(0,n.zw)(e.parentTicket.ticket_title),1)])])])])])],8,xe)])))),128))])])))),128))])}}});const Te=We;var Fe=Te,Be=a(6080),He=a(7865);const je={class:"min-h-full pb-20 h-full"},Ee={class:"space-y-4 p-0 md:pt-10 md:py-10 2xl:px-8 max-w-[1640px] mx-auto flex flex-col justify-start"};var qe=(0,t.aZ)({__name:"Edit",setup(e){const l=(0,i.iH)(null),a=(0,i.iH)([]),n=(0,i.iH)(!1),s=(0,i.iH)(!1),c=(0,y.yj)(),d=(0,t.Fl)((()=>c.query.template)),m=(0,t.Fl)((()=>u.h.getters.isTalentAsAService));async function f(){await p.n.getAllTemplates().then((e=>{a.value=e}))}async function b(e){n.value=!1,s.value=!1,"onboarding-request"==e?n.value=!0:"purchaseRequest"==e?s.value=!0:(await u.h.dispatch(He.Fh.FETCH_RECORD,{recordId:e,view:"template"}),u.h.commit(r.qo.POPULATE_ENTITY_FORM))}return(0,t.YP)((()=>m.value),(()=>{1==m.value&&Be.sp&&(l.value=+Be.sp,b(Be.sp))})),(0,t.YP)((()=>d.value),(()=>{d.value&&b(d.value)})),(0,t.bv)((()=>{f(),d.value&&b(d.value)})),(e,i)=>{const s=(0,t.up)("el-option"),c=(0,t.up)("el-select");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(o.Z,{name:"New Ticket",subName:"Service Request",redirectRoute:"helpdesk"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{onChange:b,placeholder:"Choose Template",modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=e=>l.value=e),filterable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{value:"onboarding-request",label:"Onboarding Employee (New)"}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.value,((e,l)=>((0,t.wg)(),(0,t.j4)(s,{key:l,value:e.crmid,label:e.label},null,8,["value","label"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,t._)("div",je,[(0,t._)("div",Ee,[n.value?((0,t.wg)(),(0,t.j4)(Fe,{key:0})):((0,t.wg)(),(0,t.j4)(F,{key:1}))])])],64)}}});const Ae=qe;var Ne=Ae}}]);
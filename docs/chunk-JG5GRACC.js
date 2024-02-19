import{a as v}from"./chunk-TUT7BLOT.js";import{f as Pe}from"./chunk-O67S4SDQ.js";import"./chunk-ZTOGYWYL.js";import{a as ve,b as ge,c as ye,d as _e,e as Ce,f as ze,g as be}from"./chunk-YID5B6AM.js";import"./chunk-PPQTFSYT.js";import{a as j,b as B,o as s,p as Me}from"./chunk-VOMKH2AY.js";import{a as he}from"./chunk-N6AAD7VO.js";import{Pa as M,Pb as L,Ra as pe,Sa as me,Ta as b,Va as le,Xa as de,_a as se,i as N,ib as ce,jb as ue,k as T,kb as fe,l as E,o as w,oa as G,pa as R}from"./chunk-NZ27KKE3.js";import{Jb as p,Kb as m,Lb as c,M as Q,Mb as ie,Nb as ne,Oc as O,Pb as oe,Pc as z,R as $,Tb as P,Vb as S,Vc as F,Wc as x,Yc as k,a as V,cc as re,dc as d,ec as h,fa as X,fc as ae,hb as r,hc as _,ib as u,ic as A,ka as Y,la as Z,lc as C,mc as D,nc as I,oa as y,r as J,ta as ee,ua as te,ub as f,v as K,wb as l}from"./chunk-MGW57YGE.js";function Ne(i,t){if(i&1&&(p(0,"tr")(1,"td"),d(2),m(),p(3,"td"),d(4),m(),p(5,"td"),d(6),m(),p(7,"td"),d(8),C(9,"date"),m(),p(10,"td",6),c(11,"span",7)(12,"nz-divider",8)(13,"span",9),m()()),i&2){let a=t.$implicit;r(2),h(a.name),r(2),h(a.phone),r(2),h(a.address),r(2),h(I(9,6,a.birthDate,"dd/MM/yyyy")),r(3),l("routerLink","edit/"+a.id),r(2),l("routerLink","history/"+a.id)}}var Te=()=>({y:"740px"}),Ee=()=>({x:"900px"});function we(i,t){if(i&1&&(ie(0),p(1,"nz-table",2,3)(3,"thead")(4,"tr")(5,"th"),d(6,"Nome"),m(),p(7,"th"),d(8,"Telefone"),m(),p(9,"th"),d(10,"Endere\xE7o"),m(),p(11,"th"),d(12,"Data de nascimento"),m(),c(13,"th",4),m()(),p(14,"tbody"),f(15,Ne,14,9,"tr",5),m()(),ne()),i&2){let a=t.ngIf,e=re(2);r(),l("nzData",a)("nzScroll",A(4,Te))("nzScroll",A(5,Ee)),r(14),l("ngForOf",e.data)}}var De=(()=>{let t=class t{constructor(e){this.patientsService=e}ngOnInit(){this.listOfData$=this.patientsService.getList()}};t.\u0275fac=function(n){return new(n||t)(u(v))},t.\u0275cmp=y({type:t,selectors:[["ng-component"]],standalone:!0,features:[_],decls:3,vars:3,consts:[["label","Novo Paciente","icon","plus","path","create"],[4,"ngIf"],[3,"nzData","nzScroll"],["basicTable",""],["nzWidth","180px"],[4,"ngFor","ngForOf"],[1,"actions"],["nz-icon","","nzType","edit","nzTheme","outline",1,"edit",3,"routerLink"],["nzType","vertical"],["nz-icon","","nzType","history","nzTheme","outline",3,"routerLink"]],template:function(n,o){n&1&&(c(0,"app-link-button",0),f(1,we,16,6,"ng-container",1),C(2,"async")),n&2&&(r(),l("ngIf",D(2,1,o.listOfData$)))},dependencies:[k,O,z,F,x,w,E,be,_e,ve,ge,ze,ye,Ce,B,j,L,R,G],styles:["[_nghost-%COMP%]   app-link-button[_ngcontent-%COMP%]{display:block;margin-bottom:1rem}"]});let i=t;return i})();var Ie=(()=>{let t=class t{constructor(e){this.patientService=e}buildForm(e){let{mode:n,patientId:o}=e,g;switch(n){case s.create:g=J({mode:n});break;case s.edit:case s.view:g=this.buildEditForm(n,o);break;default:throw new Error(`Data mode is not recognized: ${n}`)}return g}buildEditForm(e,n){return this.patientService.getById(n).pipe(Q(1),K(o=>({patient:o,mode:e})))}};t.\u0275fac=function(n){return new(n||t)(Y(v))},t.\u0275prov=X({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var U=(i,t,a=Z(Ie))=>{let e=i.data.mode;return e===s.edit||e===s.view?a.buildForm({patientId:i.paramMap.get("id"),mode:e}).pipe($()):a.buildForm({mode:e}).pipe($())};function Ge(i,t){if(i&1&&c(0,"app-input",7),i&2){let a=S();l("placeholder","Id")("parentForm",a.formGroup)}}var W=(()=>{let t=class t{constructor(e,n,o){this.route=e,this.patientService=n,this.router=o}ngOnInit(){let e=this.route.snapshot.data.formData;if(this.mode=this.route.snapshot.data.mode,console.log(e),this.formGroup=new me({id:new b({value:null,disabled:this.mode===s.edit}),name:new b({value:null,disabled:!1},[M.required]),phone:new b({value:null,disabled:!1},[M.required]),address:new b({value:null,disabled:!1},[M.required]),birthDate:new b({value:null,disabled:!1},[M.required])}),e.mode===s.view||e.mode===s.edit){let n=V({},e.patient);this.formGroup.patchValue(V({},n))}}submit(){let e=this.formGroup.getRawValue();e.id===null?this.patientService.add(e):this.patientService.update(e),this.router.navigate(["/patients"])}back(){this.router.navigate(["/patients"])}};t.\u0275fac=function(n){return new(n||t)(u(N),u(v),u(T))},t.\u0275cmp=y({type:t,selectors:[["ng-component"]],standalone:!0,features:[_],decls:7,vars:11,consts:[["nz-form","",3,"formGroup"],["controlName","id","type","text",3,"placeholder","parentForm",4,"ngIf"],["controlName","name","type","text",3,"placeholder","parentForm"],["controlName","phone","type","text",3,"placeholder","parentForm"],["controlName","address","type","text",3,"placeholder","parentForm"],["controlName","birthDate","type","text",3,"placeholder","parentForm"],[3,"disabled","submit","back"],["controlName","id","type","text",3,"placeholder","parentForm"]],template:function(n,o){n&1&&(p(0,"form",0),f(1,Ge,1,2,"app-input",1),c(2,"app-input",2)(3,"app-input",3)(4,"app-input",4)(5,"app-date-picker",5),p(6,"app-back-submit-panel",6),P("submit",function(){return o.submit()})("back",function(){return o.back()}),m()()),n&2&&(l("formGroup",o.formGroup),r(),l("ngIf",o.mode==="edit"),r(),l("placeholder","Name")("parentForm",o.formGroup),r(),l("placeholder","Contato")("parentForm",o.formGroup),r(),l("placeholder","Endere\xE7o")("parentForm",o.formGroup),r(),l("placeholder","Data de nascimento")("parentForm",o.formGroup),r(),l("disabled",!o.formGroup.valid||(o.formGroup.controls.isSubmitting==null?null:o.formGroup.controls.isSubmitting.value)===!0))},dependencies:[se,le,pe,de,he,z,Me,Pe]});let i=t;return i})();function Re(i,t){if(i&1){let a=oe();p(0,"div",5)(1,"div",6)(2,"div",7),c(3,"span",8),p(4,"p"),d(5),C(6,"date"),m()(),p(7,"div",9),c(8,"span",2),p(9,"p"),d(10),m()()(),p(11,"div",10)(12,"span",11),P("click",function(){let o=ee(a).$implicit,g=S(2);return te(g.checkAppointmentDetails(o.id))}),m()(),c(13,"nz-divider",12),m()}if(i&2){let a=t.$implicit;r(5),h(I(6,3,a.date,"dd-MM-yyyy")),r(2),l("routerLink","/physioterapists/edit/"+a.doctor.id),r(3),h(a.doctor.name)}}function Le(i,t){if(i&1&&(p(0,"div")(1,"h3"),d(2,"Hist\xF3rico de consultas"),m(),p(3,"div",1),c(4,"span",2),p(5,"h4"),d(6),m()(),f(7,Re,14,6,"div",3),c(8,"app-link-button",4),m()),i&2){let a=t.ngIf;r(3),l("routerLink","/patients/edit/"+a[0].patient.id),r(3),ae("Paciente: ",a[0].patient.name,""),r(),l("ngForOf",a)}}var Oe=(()=>{let t=class t{constructor(e,n,o){this.route=e,this.patientService=n,this.router=o}ngOnInit(){let e=this.route.snapshot.params.id;this.history$=this.patientService.getScheduling(e)}checkAppointmentDetails(e){this.router.navigate(["medical-appointments/edit",e])}};t.\u0275fac=function(n){return new(n||t)(u(N),u(v),u(T))},t.\u0275cmp=y({type:t,selectors:[["ng-component"]],standalone:!0,features:[_],decls:2,vars:3,consts:[[4,"ngIf"],[1,"patient-info",3,"routerLink"],["nz-icon","","nzType","user","nzTheme","outline"],["class","procedure-wrapper","nz-row","","nzGutter","16",4,"ngFor","ngForOf"],["path","/patients","label","Voltar","type","secondary"],["nz-row","","nzGutter","16",1,"procedure-wrapper"],["nz-col","","nzSpan","8",1,"appointment-details"],[1,"procedure-info"],["nz-icon","","nzType","calendar","nzTheme","outline"],[1,"procedure-info",3,"routerLink"],["nz-col","","nz-col","","nzSpan","16",1,"see-details"],["nz-icon","","nzType","arrow-right","nzTheme","outline",3,"click"],["nzType","horizontal","nz-col","","nzSpan","24"]],template:function(n,o){n&1&&(f(0,Le,9,3,"div",0),C(1,"async")),n&2&&l("ngIf",D(1,1,o.history$))},dependencies:[k,O,z,F,x,R,G,L,B,j,w,E,fe,ue,ce],styles:["[_nghost-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .patient-info[_ngcontent-%COMP%]{display:flex;align-items:center;margin:1rem 0;cursor:pointer}[_nghost-%COMP%]   .patient-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{transition:.3s ease-in-out}[_nghost-%COMP%]   .patient-info[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], [_nghost-%COMP%]   .patient-info[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]{color:#1890ff}[_nghost-%COMP%]   .patient-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:.5rem}[_nghost-%COMP%]   .procedure-wrapper[_ngcontent-%COMP%]{margin-bottom:1rem;display:flex}[_nghost-%COMP%]   .procedure-info[_ngcontent-%COMP%]{align-items:center;margin-left:1rem;display:flex}[_nghost-%COMP%]   .procedure-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:.5rem}"]});let i=t;return i})();var St=[{path:"",component:De},{path:"edit/:id",component:W,resolve:{formData:U},data:{mode:s.edit}},{path:"create",component:W,resolve:{formData:U},data:{mode:s.create}},{path:"history/:id",component:Oe}];export{St as PATIENTS_ROUTES};

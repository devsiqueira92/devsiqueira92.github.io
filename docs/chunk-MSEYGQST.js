import{a as b,b as Le}from"./chunk-H2PRLT53.js";import{f as ke}from"./chunk-6VL5LBR3.js";import{a as je,b as Be,c as Re,d as Ae}from"./chunk-4YUXEEK2.js";import{b as Ne,c as Fe,d as Ge}from"./chunk-4YHJJFCL.js";import{a as De,b as Pe,c as Me,d as Ie,e as we,f as xe,g as Oe}from"./chunk-AS3ORRBM.js";import"./chunk-INM2M4SU.js";import{a as Se,b as U,o as u,p as Ee,q as Te}from"./chunk-T7FN37OH.js";import{a as be}from"./chunk-5KBX55U3.js";import{Ob as ze,Pa as T,Pb as q,Ra as ue,Sa as fe,Ta as E,Va as ve,Xa as he,_a as ge,i as O,ib as _e,j as se,jb as ye,k as ce,kb as Ce,l as V,m as de,o as H,oa as $,pa as W}from"./chunk-U6PKPXZE.js";import{Jb as r,Kb as a,Lb as c,M as re,Mb as D,Nb as P,O as ae,Oc as R,Pb as L,Pc as z,R as Q,Tb as S,Vb as M,Vc as w,Wc as A,Yc as x,a as K,cc as j,dc as s,ec as g,fa as N,fc as _,hb as o,hc as y,ib as d,ic as X,k as ie,ka as pe,la as me,lc as C,mc as I,nc as B,oa as h,oc as le,r as ne,ta as F,ua as G,ub as f,v as oe,wb as l}from"./chunk-MGW57YGE.js";function Ke(t,e){if(t&1&&(r(0,"tr")(1,"td"),s(2),a(),r(3,"td"),s(4),a(),r(5,"td"),s(6),a(),r(7,"td"),s(8),C(9,"date"),a(),r(10,"td",6),c(11,"span",7)(12,"nz-divider",8)(13,"span",9),a()()),t&2){let p=e.$implicit;o(2),g(p.name),o(2),g(p.phone),o(2),g(p.address),o(2),g(B(9,6,p.birthDate,"dd/MM/yyyy")),o(3),l("routerLink","edit/"+p.id),o(2),l("routerLink",p.id+"/history")}}var Qe=()=>({y:"740px"}),Xe=()=>({x:"900px"});function Ye(t,e){if(t&1&&(D(0),r(1,"nz-table",2,3)(3,"thead")(4,"tr")(5,"th"),s(6,"Nome"),a(),r(7,"th"),s(8,"Telefone"),a(),r(9,"th"),s(10,"Endere\xE7o"),a(),r(11,"th"),s(12,"Data de nascimento"),a(),c(13,"th",4),a()(),r(14,"tbody"),f(15,Ke,14,9,"tr",5),a()(),P()),t&2){let p=e.ngIf,i=j(2);o(),l("nzData",p)("nzScroll",X(4,Qe))("nzScroll",X(5,Xe)),o(14),l("ngForOf",i.data)}}var He=(()=>{let e=class e{constructor(i){this.patientsService=i}ngOnInit(){this.listOfData$=this.patientsService.getList()}};e.\u0275fac=function(n){return new(n||e)(d(b))},e.\u0275cmp=h({type:e,selectors:[["ng-component"]],standalone:!0,features:[y],decls:3,vars:3,consts:[["label","Novo Paciente","icon","plus","path","create"],[4,"ngIf"],[3,"nzData","nzScroll"],["basicTable",""],["nzWidth","180px"],[4,"ngFor","ngForOf"],[1,"actions"],["nz-icon","","nzType","edit","nzTheme","outline",1,"edit",3,"routerLink"],["nzType","vertical"],["nz-icon","","nzType","history","nzTheme","outline",3,"routerLink"]],template:function(n,m){n&1&&(c(0,"app-link-button",0),f(1,Ye,16,6,"ng-container",1),C(2,"async")),n&2&&(o(),l("ngIf",I(2,1,m.listOfData$)))},dependencies:[x,R,z,w,A,H,V,Oe,Ie,De,Pe,xe,Me,we,U,Se,q,W,$],styles:["[_nghost-%COMP%]   app-link-button[_ngcontent-%COMP%]{display:block;margin-bottom:1rem}"]});let t=e;return t})();var $e=(()=>{let e=class e{constructor(i){this.patientService=i}buildForm(i){let{mode:n,patientId:m}=i,v;switch(n){case u.create:v=ne({mode:n});break;case u.edit:case u.view:v=this.buildEditForm(n,m);break;default:throw new Error(`Data mode is not recognized: ${n}`)}return v}buildEditForm(i,n){return this.patientService.getById(n).pipe(re(1),oe(m=>({patient:m,mode:i})))}};e.\u0275fac=function(n){return new(n||e)(pe(b))},e.\u0275prov=N({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ee=(t,e,p=me($e))=>{let i=t.data.mode;return i===u.edit||i===u.view?p.buildForm({patientId:t.paramMap.get("id"),mode:i}).pipe(Q()):p.buildForm({mode:i}).pipe(Q())};function Ze(t,e){t&1&&(r(0,"h3"),s(1,"Novo paciente"),a())}function et(t,e){t&1&&(r(0,"h3"),s(1,"Editar paciente"),a())}function tt(t,e){if(t&1&&c(0,"app-input",8),t&2){let p=M();l("placeholder","Id")("parentForm",p.formGroup)}}var te=(()=>{let e=class e{constructor(i,n,m){this.route=i,this.patientService=n,this.router=m}ngOnInit(){let i=this.route.snapshot.data.formData;if(this.mode=this.route.snapshot.data.mode,console.log(i),this.formGroup=new fe({id:new E({value:null,disabled:this.mode===u.edit}),name:new E({value:null,disabled:!1},[T.required]),phone:new E({value:null,disabled:!1},[T.required]),address:new E({value:null,disabled:!1},[T.required]),birthDate:new E({value:null,disabled:!1},[T.required])}),i.mode===u.view||i.mode===u.edit){let n=K({},i.patient);this.formGroup.patchValue(K({},n))}}submit(){let i=this.formGroup.getRawValue();i.id===null?this.patientService.add(i):this.patientService.update(i),this.router.navigate(["/patients"])}back(){this.router.navigate(["/patients"])}};e.\u0275fac=function(n){return new(n||e)(d(O),d(b),d(ce))},e.\u0275cmp=h({type:e,selectors:[["ng-component"]],standalone:!0,features:[y],decls:11,vars:13,consts:[[4,"ngIf"],["nz-form","",3,"formGroup"],["controlName","id","type","text",3,"placeholder","parentForm",4,"ngIf"],["controlName","name","type","text",3,"placeholder","parentForm"],["controlName","phone","type","text",3,"placeholder","parentForm"],["controlName","address","type","text",3,"placeholder","parentForm"],["controlName","birthDate","type","text",3,"placeholder","parentForm"],[3,"disabled","submit","back"],["controlName","id","type","text",3,"placeholder","parentForm"]],template:function(n,m){n&1&&(r(0,"section")(1,"header"),f(2,Ze,2,0,"h3",0)(3,et,2,0,"h3",0),a(),r(4,"form",1),f(5,tt,1,2,"app-input",2),c(6,"app-input",3)(7,"app-input",4)(8,"app-input",5)(9,"app-date-picker",6),r(10,"app-back-submit-panel",7),S("submit",function(){return m.submit()})("back",function(){return m.back()}),a()()()),n&2&&(o(2),l("ngIf",m.mode==="create"),o(),l("ngIf",m.mode==="edit"),o(),l("formGroup",m.formGroup),o(),l("ngIf",m.mode==="edit"),o(),l("placeholder","Name")("parentForm",m.formGroup),o(),l("placeholder","Contato")("parentForm",m.formGroup),o(),l("placeholder","Endere\xE7o")("parentForm",m.formGroup),o(),l("placeholder","Data de nascimento")("parentForm",m.formGroup),o(),l("disabled",!m.formGroup.valid||(m.formGroup.controls.isSubmitting==null?null:m.formGroup.controls.isSubmitting.value)===!0))},dependencies:[ge,ve,ue,he,be,z,Te,ke]});let t=e;return t})();var J=(()=>{let e=class e{constructor(){this._visibleDrawer=new ie(!1),this.visibleDrawer$=this._visibleDrawer.asObservable()}get visibleDrawer(){return this._visibleDrawer.value}set visibleDrawer(i){this._visibleDrawer.next(i)}close(){this._visibleDrawer.next(!1)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=N({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function it(t,e){t&1&&(D(0),c(1,"router-outlet"),P())}function nt(t,e){if(t&1){let p=L();r(0,"div",9)(1,"div",10)(2,"div",11),c(3,"span",12),r(4,"p"),s(5),C(6,"date"),a()(),r(7,"div",13),c(8,"span",4),r(9,"p"),s(10),a()()(),r(11,"div",14)(12,"span",15),S("click",function(){F(p);let n=M(2);return G(n.open())}),a()()()}if(t&2){let p=e.$implicit;o(5),g(B(6,4,p.date,"dd-MM-yyyy")),o(2),l("routerLink","/physioterapists/edit/"+p.doctor.id),o(3),g(p.doctor.name),o(2),l("routerLink","detail/"+p.id)}}function ot(t,e){if(t&1&&(r(0,"div")(1,"h3"),s(2,"Hist\xF3rico de consultas"),a(),r(3,"div",3),c(4,"span",4),r(5,"h4"),s(6),a()(),r(7,"div",5)(8,"div",6),f(9,nt,13,7,"div",7),a()(),c(10,"app-link-button",8),a()),t&2){let p=e.ngIf;o(3),l("routerLink","/patients/edit/"+p[0].patient.id),o(3),_("Paciente: ",p[0].patient.name,""),o(3),l("ngForOf",p)}}var qe=(()=>{let e=class e{constructor(i,n,m){this.route=i,this.patientService=n,this.drawerService=m,this.visible=!1}ngOnInit(){let i=this.route.snapshot.params.id;this.history$=this.patientService.getScheduling(i)}open(){this.drawerService.visibleDrawer=!0}close(){this.drawerService.close()}getWidthScreen(){return window.innerWidth<990?window.innerWidth:675}};e.\u0275fac=function(n){return new(n||e)(d(O),d(b),d(J))},e.\u0275cmp=h({type:e,selectors:[["ng-component"]],standalone:!0,features:[y],decls:4,vars:6,consts:[["nzPlacement","right",3,"nzClosable","nzVisible","nzWidth","nzOnClose"],[4,"nzDrawerContent"],[4,"ngIf"],[1,"patient-info",3,"routerLink"],["nz-icon","","nzType","user","nzTheme","outline"],["nz-row","","nzGutter","16",1,"procedure-wrapper"],["nz-col","","nzSpan","24"],["class","history","nz-row","","nzGutter","16","routerLinkActive","active",4,"ngFor","ngForOf"],["path","/patients","label","Voltar","type","secondary"],["nz-row","","nzGutter","16","routerLinkActive","active",1,"history"],["nz-col","","nzSpan","16",1,"appointment-details"],[1,"procedure-info"],["nz-icon","","nzType","calendar","nzTheme","outline"],[1,"procedure-info",3,"routerLink"],["nz-col","","nz-col","","nzSpan","8",1,"see-details"],["nz-icon","","nzType","arrow-right","nzTheme","outline",3,"routerLink","click"]],template:function(n,m){n&1&&(r(0,"nz-drawer",0),S("nzOnClose",function(){return m.close()}),f(1,it,2,0,"ng-container",1),a(),f(2,ot,11,3,"div",2),C(3,"async")),n&2&&(l("nzClosable",!0)("nzVisible",m.drawerService.visibleDrawer)("nzWidth",m.getWidthScreen()),o(2),l("ngIf",I(3,4,m.history$)))},dependencies:[x,R,z,w,A,W,$,q,U,H,se,V,de,Ce,ye,_e,Ge,Fe,Ne],styles:["[_nghost-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .history[_ngcontent-%COMP%]{border:1px solid #b4b6c3;margin-bottom:1rem;padding:1rem .5rem;border-radius:4px}[_nghost-%COMP%]   .history.active[_ngcontent-%COMP%]{border-color:#1890ff}[_nghost-%COMP%]   .patient-info[_ngcontent-%COMP%]{display:flex;align-items:center;margin:1rem 0;cursor:pointer}[_nghost-%COMP%]   .patient-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{transition:.3s ease-in-out}[_nghost-%COMP%]   .patient-info[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], [_nghost-%COMP%]   .patient-info[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]{color:#1890ff}[_nghost-%COMP%]   .patient-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:.5rem}[_nghost-%COMP%]   .procedure-wrapper[_ngcontent-%COMP%]{margin-bottom:1rem;display:flex}[_nghost-%COMP%]   .procedure-info[_ngcontent-%COMP%]{align-items:center;margin-left:1rem;display:flex}[_nghost-%COMP%]   .procedure-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:.5rem}[_nghost-%COMP%]   .see-details[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}"]});let t=e;return t})();function rt(t,e){t&1&&c(0,"app-loading")}function at(t,e){if(t&1){let p=L();D(0),r(1,"nz-descriptions",2)(2,"nz-descriptions-item",3),s(3),a(),r(4,"nz-descriptions-item",4),s(5),a(),r(6,"nz-descriptions-item",5),s(7),a(),r(8,"nz-descriptions-item",6),s(9),a(),r(10,"nz-descriptions-item",7),s(11),a()(),r(12,"app-button",8),S("click",function(){F(p);let n=M();return G(n.close())}),a(),P()}if(t&2){let p=e.ngIf;o(3),_(" ",p.bpm," "),o(2),_(" ",p.bloodPressure," "),o(2),_(" ",p.bloodOxygenation," "),o(),l("nzSpan",3),o(),_(" ",p.details," "),o(),l("nzSpan",3),o(),_(" ",p.evolution," ")}}var Ue=(()=>{let e=class e{constructor(i,n,m){this.route=i,this.medicalAppointmentService=n,this.drawerService=m}ngOnInit(){this.route.params.subscribe(i=>{this.appointmentDetails$=this.medicalAppointmentService.getById(i.id).pipe(ae(700))})}close(){this.drawerService.close()}};e.\u0275fac=function(n){return new(n||e)(d(O),d(Ae),d(J))},e.\u0275cmp=h({type:e,selectors:[["ng-component"]],standalone:!0,features:[y],decls:4,vars:4,consts:[["loading",""],[4,"ngIf","ngIfElse"],["nzTitle","Detalhes","nzLayout","vertical"],["nzTitle","Batimentos por minuto"],["nzTitle","Press\xE3o arterial"],["nzTitle","Oxigena\xE7\xE3o sanguinea"],["nzTitle","Detalhes",3,"nzSpan"],["nzTitle","Evolu\xE7\xE3o",3,"nzSpan"],["label","Fechar","type","secondary","backButton","",3,"click"]],template:function(n,m){if(n&1&&(f(0,rt,1,0,"ng-template",null,0,le)(2,at,13,7,"ng-container",1),C(3,"async")),n&2){let v=j(1);o(2),l("ngIf",I(3,2,m.appointmentDetails$))("ngIfElse",v)}},dependencies:[x,z,w,Re,Be,je,ze,Le,Ee]});let t=e;return t})();var pi=[{path:"",component:He},{path:"edit/:id",component:te,resolve:{formData:ee},data:{mode:u.edit}},{path:"create",component:te,resolve:{formData:ee},data:{mode:u.create}},{path:":id/history",component:qe,children:[{path:"detail/:id",component:Ue}]}];export{pi as PATIENTS_ROUTES};

import{a as f,b as ue}from"./chunk-3NZM36VX.js";import{b as K}from"./chunk-ZG4FR5O2.js";import{a as le,b as n,c as de}from"./chunk-YWNLVJYF.js";import"./chunk-4LRCULV4.js";import{a as ie,b as ne,c as ae,d as pe,e as me,f as ce,g as se}from"./chunk-U2I65ZW3.js";import"./chunk-CVGLXEUG.js";import{a as re,b as oe}from"./chunk-L36BLO6X.js";import{a as te}from"./chunk-RRYEWEV6.js";import{Na as C,Qa as Q,Sa as X,Ta as b,Va as Y,Xa as Z,_a as ee,e as U,g as W,h as H,k as J}from"./chunk-BUBXGMRK.js";import{Jb as m,Kb as c,Lb as l,M as E,Mb as M,Nb as R,Pc as V,Qc as F,R as I,Tb as j,Vb as O,Wc as $,Zc as q,a as _,cc as A,dc as d,ec as N,fa as g,hb as a,hc as D,ib as u,ic as k,ka as y,la as G,mc as B,nc as L,oa as S,r as T,ub as h,v as w,wb as p}from"./chunk-HUG7J4BS.js";function ye(r,e){if(r&1&&(m(0,"tr")(1,"td"),d(2),c(),m(3,"td"),d(4),c(),m(5,"td")(6,"a",6),d(7,"Editar"),c(),l(8,"nz-divider",7),m(9,"a"),d(10,"Apagar"),c()()()),r&2){let s=e.$implicit;a(2),N(s.name),a(2),N(s.steps),a(2),p("routerLink","edit/"+s.id)}}var Se=()=>({y:"740px"}),De=()=>({x:"900px"});function Fe(r,e){if(r&1&&(M(0),m(1,"nz-table",2,3)(3,"thead")(4,"tr")(5,"th"),d(6,"Name"),c(),m(7,"th"),d(8,"Passos"),c(),l(9,"th",4),c()(),m(10,"tbody"),h(11,ye,11,3,"tr",5),c()(),R()),r&2){let s=e.ngIf,t=A(2);a(),p("nzData",s)("nzScroll",k(4,Se))("nzScroll",k(5,De)),a(10),p("ngForOf",t.data)}}var ve=(()=>{let e=class e{constructor(t){this.proceduresService=t}ngOnInit(){this.listOfData$=this.proceduresService.getList()}};e.\u0275fac=function(o){return new(o||e)(u(f))},e.\u0275cmp=S({type:e,selectors:[["ng-component"]],standalone:!0,features:[D],decls:3,vars:3,consts:[["label","Novo Procedimento","icon","plus","path","create"],[4,"ngIf"],[3,"nzData","nzScroll"],["basicTable",""],["nzWidth","160px"],[4,"ngFor","ngForOf"],["accessControl","","moduleType","user3_token",3,"routerLink"],["nzType","vertical"]],template:function(o,i){o&1&&(l(0,"app-link-button",0),h(1,Fe,12,6,"ng-container",1),B(2,"async")),o&2&&(a(),p("ngIf",L(2,1,i.listOfData$)))},dependencies:[q,V,F,$,J,H,se,pe,ie,ne,ce,ae,me,oe,re,te,ue]});let r=e;return r})();function Ce(r,e){if(r&1&&l(0,"app-input",6),r&2){let s=O();p("placeholder","Id")("parentForm",s.formGroup)}}var x=(()=>{let e=class e{constructor(t,o,i){this.route=t,this.procedureService=o,this.router=i}ngOnInit(){let t=this.route.snapshot.data.formData;if(this.mode=this.route.snapshot.data.mode,console.log(t),this.formGroup=new X({id:new b({value:null,disabled:this.mode===n.edit}),name:new b({value:null,disabled:!1},[C.required]),steps:new b({value:null,disabled:!1},[C.required]),member:new b({value:null,disabled:!1},[C.required])}),t.mode===n.view||t.mode===n.edit){let o=_({},t.procedure);this.formGroup.patchValue(_({},o))}}submit(){let t=this.formGroup.getRawValue();t.id===null?this.procedureService.add(t):this.procedureService.update(t),this.router.navigate(["/procedures"])}back(){this.router.navigate(["/procedures"])}};e.\u0275fac=function(o){return new(o||e)(u(U),u(f),u(W))},e.\u0275cmp=S({type:e,selectors:[["app-procedure-details"]],standalone:!0,features:[D],decls:6,vars:9,consts:[["nz-form","",3,"formGroup"],["controlName","id","type","text",3,"placeholder","parentForm",4,"ngIf"],["controlName","name","type","text",3,"placeholder","parentForm"],["controlName","member","type","text",3,"placeholder","parentForm"],["controlName","steps","type","text",3,"placeholder","parentForm"],[3,"disabled","submit","back"],["controlName","id","type","text",3,"placeholder","parentForm"]],template:function(o,i){o&1&&(m(0,"form",0),h(1,Ce,1,2,"app-input",1),l(2,"app-input",2)(3,"app-input",3)(4,"app-input",4),m(5,"app-back-submit-panel",5),j("submit",function(){return i.submit()})("back",function(){return i.back()}),c()()),o&2&&(p("formGroup",i.formGroup),a(),p("ngIf",i.mode==="edit"),a(),p("placeholder","Name")("parentForm",i.formGroup),a(),p("placeholder","Membro")("parentForm",i.formGroup),a(),p("placeholder","Passo")("parentForm",i.formGroup),a(),p("disabled",!i.formGroup.valid||(i.formGroup.controls.isSubmitting==null?null:i.formGroup.controls.isSubmitting.value)===!0))},dependencies:[ee,Y,Q,Z,le,F,de]});let r=e;return r})();var he=(()=>{let e=class e{constructor(t){this.procedureService=t}buildForm(t){let{mode:o,procedureId:i}=t,v;switch(o){case n.create:v=T({mode:o});break;case n.edit:case n.view:v=this.buildEditForm(o,i);break;default:throw new Error(`Data mode is not recognized: ${o}`)}return v}buildEditForm(t,o){return this.procedureService.getById(o).pipe(E(1),w(i=>({procedure:i,mode:t})))}};e.\u0275fac=function(o){return new(o||e)(y(f))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var P=(r,e,s=G(he))=>{let t=r.data.mode;return t===n.edit||t===n.view?s.buildForm({procedureId:r.paramMap.get("id"),mode:t}).pipe(I()):s.buildForm({mode:t}).pipe(I())};var be=(()=>{let e=class e{constructor(t){this.authService=t}canActivate(t,o){let i=t.data.roles;return this.authService.getRole(i)?!0:(console.log("Voc\xEA n\xE3o tem permiss\xE3o para acessar est\xE1 p\xE1gina"),!1)}};e.\u0275fac=function(o){return new(o||e)(y(K))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var nt=[{path:"",component:ve},{path:"edit/:id",canActivate:[be],component:x,resolve:{formData:P},data:{mode:n.edit,roles:["user_token"]}},{path:"create",component:x,resolve:{formData:P},data:{mode:n.create}}];export{nt as PROCEDURES_ROUTES};

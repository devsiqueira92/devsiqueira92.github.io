import{a as f}from"./chunk-O3IUXDTU.js";import{a as ee,b as te,c as re,d as oe,e as ie,f as ne,g as ae,h as pe,i as me}from"./chunk-3O6N67O6.js";import"./chunk-FG6AQFEN.js";import{k as m}from"./chunk-2FTG2Z6E.js";import{a as Y}from"./chunk-ZNVYHAWE.js";import{a as de}from"./chunk-QJAXG5KO.js";import{Fb as Z,Ja as F,La as J,Ma as K,Na as b,Pa as Q,Ra as W,Ua as X,i as $,k as q,l as U,o as H}from"./chunk-NZUQ4GC7.js";import{q as L,r as S,x as B,z as V}from"./chunk-S3EDYLDG.js";import{Ab as l,Mb as i,N as z,Nb as n,Ob as u,Pb as w,Qb as G,S as I,_b as k,a as C,ac as R,ha as M,jc as O,kc as c,lb as p,lc as h,ma as P,mb as s,na as T,oc as y,qa as g,r as E,sc as j,tc as A,w as _,yb as v}from"./chunk-3JFFWWO5.js";function ve(r,t){if(r&1&&(i(0,"tr")(1,"td"),c(2),n(),i(3,"td"),c(4),n(),i(5,"td"),c(6),n(),i(7,"td"),c(8),n(),i(9,"td")(10,"a",5),c(11,"Edit"),n(),u(12,"nz-divider",6),i(13,"a"),c(14,"Delete"),n()()()),r&2){let d=t.$implicit;p(2),h(d.name),p(2),h(d.phone),p(2),h(d.address),p(2),h(d.birthDate),p(2),l("routerLink","edit/"+d.id)}}function he(r,t){if(r&1&&(w(0),i(1,"nz-table",2,3)(3,"thead")(4,"tr")(5,"th"),c(6,"Name"),n(),i(7,"th"),c(8,"Phone"),n(),i(9,"th"),c(10,"Address"),n(),i(11,"th"),c(12,"birthDate"),n(),i(13,"th"),c(14,"Action"),n()()(),i(15,"tbody"),v(16,ve,15,5,"tr",4),n()(),G()),r&2){let d=t.ngIf,e=O(2);p(),l("nzData",d),p(15),l("ngForOf",e.data)}}var se=(()=>{let t=class t{constructor(e){this.proceduresService=e}ngOnInit(){this.listOfData$=this.proceduresService.getList()}};t.\u0275fac=function(o){return new(o||t)(s(f))},t.\u0275cmp=g({type:t,selectors:[["app-procedures"]],standalone:!0,features:[y],decls:3,vars:3,consts:[["label","Novo Procedimento","icon","plus","path","create"],[4,"ngIf"],[3,"nzData"],["basicTable",""],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzType","vertical"]],template:function(o,a){o&1&&(u(0,"app-link-button",0),v(1,he,17,2,"ng-container",1),j(2,"async")),o&2&&(p(),l("ngIf",A(2,1,a.listOfData$)))},dependencies:[V,L,S,B,H,U,me,ne,re,oe,pe,ie,ae,te,ee,Z]});let r=t;return r})();function be(r,t){if(r&1&&u(0,"app-input",6),r&2){let d=R();l("placeholder","Id")("parentForm",d.formGroup)}}var x=(()=>{let t=class t{constructor(e,o,a){this.route=e,this.procedureService=o,this.router=a}ngOnInit(){let e=this.route.snapshot.data.formData;if(this.mode=this.route.snapshot.data.mode,console.log(e),this.formGroup=new K({id:new b({value:null,disabled:this.mode===m.edit}),name:new b({value:null,disabled:!1},[F.required]),steps:new b({value:null,disabled:!1},[F.required]),member:new b({value:null,disabled:!1},[F.required])}),e.mode===m.view||e.mode===m.edit){let o=C({},e.procedure);this.formGroup.patchValue(C({},o))}}submit(){let e=this.formGroup.getRawValue();e.id===null?this.procedureService.add(e):this.procedureService.update(e),this.router.navigate(["/procedures"])}};t.\u0275fac=function(o){return new(o||t)(s($),s(f),s(q))},t.\u0275cmp=g({type:t,selectors:[["app-procedure-details"]],standalone:!0,features:[y],decls:6,vars:8,consts:[["nz-form","",3,"formGroup"],["controlName","id","type","text",3,"placeholder","parentForm",4,"ngIf"],["controlName","name","type","text",3,"placeholder","parentForm"],["controlName","member","type","text",3,"placeholder","parentForm"],["controlName","steps","type","text",3,"placeholder","parentForm"],["label","Adicionar","icon","plus",3,"click"],["controlName","id","type","text",3,"placeholder","parentForm"]],template:function(o,a){o&1&&(i(0,"form",0),v(1,be,1,2,"app-input",1),u(2,"app-input",2)(3,"app-input",3)(4,"app-input",4),i(5,"app-button",5),k("click",function(){return a.submit()}),n()()),o&2&&(l("formGroup",a.formGroup),p(),l("ngIf",a.mode==="edit"),p(),l("placeholder","Name")("parentForm",a.formGroup),p(),l("placeholder","Membro")("parentForm",a.formGroup),p(),l("placeholder","Passo")("parentForm",a.formGroup))},dependencies:[X,Q,J,W,de,Y,S]});let r=t;return r})();var ue=(()=>{let t=class t{constructor(e){this.procedureService=e}buildForm(e){let{mode:o,procedureId:a}=e,D;switch(o){case m.create:D=E({mode:o});break;case m.edit:case m.view:D=this.buildEditForm(o,a);break;default:throw new Error(`Data mode is not recognized: ${o}`)}return D}buildEditForm(e,o){return this.procedureService.getById(o).pipe(z(1),_(a=>({procedure:a,mode:e})))}};t.\u0275fac=function(o){return new(o||t)(P(f))},t.\u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var N=(r,t,d=T(ue))=>{let e=r.data.mode;return e===m.edit||e===m.view?d.buildForm({procedureId:r.paramMap.get("id"),mode:e}).pipe(I()):d.buildForm({mode:e}).pipe(I())};var Je=[{path:"",component:se},{path:"edit/:id",component:x,resolve:{formData:N},data:{mode:m.edit}},{path:"create",component:x,resolve:{formData:N},data:{mode:m.create}}];export{Je as PROCEDURES_ROUTES};

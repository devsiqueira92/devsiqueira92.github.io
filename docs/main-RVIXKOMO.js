import{b as It}from"./chunk-TFQZ4LS3.js";import{a as k,b as zt,c as Me,d as Ct,e as P}from"./chunk-3RQU7UJ4.js";import"./chunk-D7AA5DW3.js";import{a as Mt,b as wt}from"./chunk-62JYHU3U.js";import{a as N,b as bt}from"./chunk-K5CK6OO7.js";import{a as vt}from"./chunk-CINU5K47.js";import{a as K,b as Ye,c as X,d as S}from"./chunk-WD5VY4T7.js";import{c as yt,d as St,e as ne,f as Tt}from"./chunk-BSQ6U4BJ.js";import{$a as ge,Ac as nt,Ad as ft,B as De,Bb as $e,Bd as gt,Db as He,Eb as J,Fc as ot,Ga as a,Gb as Se,Gc as rt,Ha as c,Hb as Ue,Hc as at,Ia as u,Ib as Ge,Ic as st,Ja as de,Jc as lt,K as le,Ka as ue,Kc as x,L as M,Lb as Ze,Lc as b,Ma as U,Mb as Q,Mc as pt,Nb as Y,Nc as ct,O as g,Ob as Je,P as Ne,Pa as h,Pb as Qe,Qb as q,R as v,Ra as y,S as xe,Sa as G,T as B,Ta as Z,Tc as dt,U as m,V as Pe,W as j,Wc as ut,Xa as me,Xc as ie,Y as pe,Yb as qe,Z as L,Za as he,Zb as Ke,_ as W,_a as fe,_b as Te,ab as T,ac as Xe,ca as _,cc as et,eb as f,ec as tt,ed as mt,fc as ee,fd as ht,g as se,gb as ze,h as ke,hb as Ce,ia as V,ib as Ae,ja as Re,jb as Oe,ka as l,l as R,la as d,lb as ve,m as A,na as $,nb as Fe,o as O,oa as D,ob as Ee,p as F,rb as ye,rc as it,sa as w,sb as Be,tb as je,tc as te,ua as r,va as ce,vb as Le,w as _e,wa as H,wb as We,xb as Ve,y as E}from"./chunk-PDW7X3UQ.js";var we=(()=>{let t=class t{constructor(n,i){this.authService=n,this.location=i}canActivate(n,i){let o=n.data.roles,p=!1;return this.authService.token$.pipe(M(C=>{p=o.includes(C.accType)})).subscribe(),p?!0:(console.log("Voc\xEA n\xE3o tem permiss\xE3o para acessar est\xE1 p\xE1gina"),this.location.back(),!1)}};t.\u0275fac=function(i){return new(i||t)(v(S),v(Fe))},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var be=(()=>{let t=class t{constructor(n,i){this.router=n,this.auth=i}canActivate(n,i){return this.auth.isAuthenticated===n.data.authDesiredValue?this.auth.token$.pipe(De(1),F(o=>{if(o.isRegistred!=="True"){let p=o.accType.toLowerCase();return this.router.createUrlTree([`/onboarding/${p}`])}else return!0})):!0}};t.\u0275fac=function(i){return new(i||t)(v(Q),v(S))},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var _t=[{path:"",pathMatch:"full",redirectTo:"/auth"},{path:"auth",loadChildren:()=>import("./chunk-UFNOLMFU.js").then(e=>e.AUTH_ROUTES)},{path:"onboarding",canActivate:[k],data:{authDesiredValue:!0,redirect:"/scheduling"},loadChildren:()=>import("./chunk-PF4E7GQO.js").then(e=>e.ONBOARDING_ROUTES)},{path:"physioterapists",canActivate:[k,we],data:{authDesiredValue:!0,redirect:"/scheduling",roles:[N.Clinic]},loadChildren:()=>import("./chunk-IV63DW5J.js").then(e=>e.PHYSIOTERAPISTS_ROUTES)},{path:"scheduling",canActivate:[k,be],data:{authDesiredValue:!0,redirect:"/scheduling"},loadChildren:()=>import("./chunk-PU2GL2EB.js").then(e=>e.APPOINTMENTS_ROUTES)},{path:"patients",canActivate:[k],data:{authDesiredValue:!0,redirect:"/scheduling"},loadChildren:()=>import("./chunk-ISK5MUOU.js").then(e=>e.PATIENTS_ROUTES)},{path:"procedures",canActivate:[k,we],data:{authDesiredValue:!0,redirect:"/scheduling",roles:[N.Professional,N.Clinic]},loadChildren:()=>import("./chunk-6JIK3TSG.js").then(e=>e.PROCEDURES_ROUTES)},{path:"account",canActivate:[k],data:{authDesiredValue:!0,redirect:"/scheduling"},loadChildren:()=>import("./chunk-2V2OONDG.js").then(e=>e.MY_ACCOUNT_ROUTES)},{path:"medical-appointments",canActivate:[be],data:{authDesiredValue:!0,redirect:"/scheduling"},loadChildren:()=>import("./chunk-3IP5CY24.js").then(e=>e.MEDICAL_APPOINTMENTS_ROUTES)}];var Qt=[st,at,ot,rt];function Dt(){return _(b.forRoot(Qt))}function Yt(e){let t=e,s=Math.floor(Math.abs(e)),n=e.toString().replace(/^[^.]*\.?/,"").length;return s===1&&n===0?1:5}var Nt=["en",[["a","p"],["AM","PM"],void 0],[["AM","PM"],void 0,void 0],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],void 0,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",void 0,"{1} 'at' {0}",void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",Yt];var qt={401:{content:"Invalid credentials or you have been suspended. Please try again or contact your administrator.",title:"Unable to login"}};function xt(e){if(e instanceof J){let t=e?.error?.code,s=e?.error?.message;return qt[e.status]||{content:s,title:t}}return typeof e=="string"?{content:e,title:"Error"}:{content:JSON.stringify(e),title:"Error"}}var Pt=(()=>{let t=class t{constructor(n){this.nzNotificationService=n}error(n,i={}){let o=xt(n);return this.nzNotificationService.create("error",o.title,o.content,i)}success(n,i="Success",o={}){return this.nzNotificationService.create("success",i,n,o)}warning(n,i="Warning",o={}){return this.nzNotificationService.create("warning",i,n,o)}template(n,i={}){return this.nzNotificationService.template(n,i)}};t.\u0275fac=function(i){return new(i||t)(v(It))},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Rt=(()=>{let t=class t{constructor(n){this.notificationService=n}intercept(n,i){return i.handle(n).pipe(M(o=>{if(o instanceof He&&o.ok){let p;switch(o.status){case 204:p="The information was updated successfully",this.notificationService.success(p,"Success");break;case 201:p="The information was created successfully",this.notificationService.success(p,"Success");break;default:break}}}),E(o=>{if(o instanceof J){console.log(o);try{this.notificationService.error(o)}catch{this.notificationService.error("An error occurred")}}return O(o)}))}};t.\u0275fac=function(i){return new(i||t)(v(Pt))},t.\u0275prov=g({token:t,factory:t.\u0275fac});let e=t;return e})();var At=(()=>{let t=class t{constructor(){}intercept(n,i){let o=X();if(o){let p=n.clone({headers:n.headers.set("Authorization",`Bearer ${o}`)});return i.handle(p)}return i.handle(n)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=g({token:t,factory:t.\u0275fac});let e=t;return e})();Ee(Nt);var Ot={providers:[Qe(_t),Dt(),gt(ft),_(tt),_(Ye.forRoot({config:{tokenGetter:X}})),_(Ue),dt(),{provide:Se,useClass:At,multi:!0},{provide:Se,useClass:Rt,multi:!0},P]};var Ie=["*"],Xt=["nz-sider-trigger",""];function ei(e,t){}function ti(e,t){if(e&1&&(de(0),w(1,ei,0,0,"ng-template",3),ue()),e&2){let s=y(),n=ge(5);l(),r("ngTemplateOutlet",s.nzZeroTrigger||n)}}function ii(e,t){}function ni(e,t){if(e&1&&(de(0),w(1,ii,0,0,"ng-template",3),ue()),e&2){let s=y(),n=ge(3);l(),r("ngTemplateOutlet",s.nzTrigger||n)}}function oi(e,t){if(e&1&&u(0,"span",5),e&2){let s=y(2);r("nzType",s.nzCollapsed?"right":"left")}}function ri(e,t){if(e&1&&u(0,"span",5),e&2){let s=y(2);r("nzType",s.nzCollapsed?"left":"right")}}function ai(e,t){if(e&1&&w(0,oi,1,1,"span",4)(1,ri,1,1,"span",4),e&2){let s=y();r("ngIf",!s.nzReverseArrow),l(),r("ngIf",s.nzReverseArrow)}}function si(e,t){e&1&&u(0,"span",6)}function li(e,t){if(e&1){let s=U();a(0,"div",2),h("click",function(){L(s);let i=y();return W(i.setCollapsed(!i.nzCollapsed))}),c()}if(e&2){let s=y();r("matchBreakPoint",s.matchBreakPoint)("nzCollapsedWidth",s.nzCollapsedWidth)("nzCollapsed",s.nzCollapsed)("nzBreakpoint",s.nzBreakpoint)("nzReverseArrow",s.nzReverseArrow)("nzTrigger",s.nzTrigger)("nzZeroTrigger",s.nzZeroTrigger)("siderWidth",s.widthSetting)}}var Et=(()=>{let t=class t{constructor(n,i){this.elementRef=n,this.renderer=i,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}};t.\u0275fac=function(i){return new(i||t)(d(V),d(Re))},t.\u0275cmp=m({type:t,selectors:[["nz-header"]],exportAs:["nzHeader"],standalone:!0,features:[f],ngContentSelectors:Ie,decls:1,vars:0,template:function(i,o){i&1&&(G(),Z(0))},encapsulation:2,changeDetection:0});let e=t;return e})(),Bt=(()=>{let t=class t{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=this.nzCollapsedWidth===0&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=this.nzCollapsedWidth!==0}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(i,o){i&2&&(ce("width",o.isNormalTrigger?o.siderWidth:null),H("ant-layout-sider-trigger",o.isNormalTrigger)("ant-layout-sider-zero-width-trigger",o.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",o.isZeroTrigger&&o.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",o.isZeroTrigger&&!o.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],standalone:!0,features:[pe,f],attrs:Xt,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(i,o){i&1&&w(0,ti,2,1,"ng-container",0)(1,ni,2,1,"ng-container",0)(2,ai,2,2,"ng-template",null,1,ve)(4,si,1,0,"ng-template",null,2,ve),i&2&&(r("ngIf",o.isZeroTrigger),l(),r("ngIf",o.isNormalTrigger))},dependencies:[ye,We,b,x],encapsulation:2,changeDetection:0});let e=t;return e})(),re=(()=>{let t=class t{updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:it(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&this.nzMenuDirective.nzMode==="inline"&&this.nzCollapsedWidth!==0&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(n){n!==this.nzCollapsed&&(this.nzCollapsed=n,this.nzCollapsedChange.emit(n),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}constructor(n,i,o){this.platform=n,this.cdr=i,this.breakpointService=o,this.destroy$=new se,this.nzMenuDirective=null,this.nzCollapsedChange=new D,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(mt,!0).pipe(le(this.destroy$)).subscribe(n=>{let i=this.nzBreakpoint;i&&nt().subscribe(()=>{this.matchBreakPoint=!n[i],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(n){let{nzCollapsed:i,nzCollapsedWidth:o,nzWidth:p}=n;(i||o||p)&&this.updateStyleMap(),i&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}};t.\u0275fac=function(i){return new(i||t)(d(lt),d($),d(ht))},t.\u0275cmp=m({type:t,selectors:[["nz-sider"]],contentQueries:function(i,o,p){if(i&1&&me(p,ne,5),i&2){let C;he(C=fe())&&(o.nzMenuDirective=C.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(i,o){i&2&&(ce("flex",o.flexSetting)("max-width",o.widthSetting)("min-width",o.widthSetting)("width",o.widthSetting),H("ant-layout-sider-zero-width",o.nzCollapsed&&o.nzCollapsedWidth===0)("ant-layout-sider-light",o.nzTheme==="light")("ant-layout-sider-dark",o.nzTheme==="dark")("ant-layout-sider-collapsed",o.nzCollapsed)("ant-layout-sider-has-trigger",o.nzCollapsible&&o.nzTrigger!==null))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],standalone:!0,features:[pe,f],ngContentSelectors:Ie,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(i,o){i&1&&(G(),a(0,"div",0),Z(1),c(),w(2,li,1,8,"div",1)),i&2&&(l(2),r("ngIf",o.nzCollapsible&&o.nzTrigger!==null))},dependencies:[ye,Bt],encapsulation:2,changeDetection:0});let e=t;return A([te()],e.prototype,"nzReverseArrow",void 0),A([te()],e.prototype,"nzCollapsible",void 0),A([te()],e.prototype,"nzCollapsed",void 0),e})(),jt=(()=>{let t=class t{constructor(n){this.directionality=n,this.dir="ltr",this.destroy$=new se}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(le(this.destroy$)).subscribe(n=>{this.dir=n})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};t.\u0275fac=function(i){return new(i||t)(d(pt,8))},t.\u0275cmp=m({type:t,selectors:[["nz-layout"]],contentQueries:function(i,o,p){if(i&1&&me(p,re,4),i&2){let C;he(C=fe())&&(o.listOfNzSiderComponent=C)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(i,o){i&2&&H("ant-layout-rtl",o.dir==="rtl")("ant-layout-has-sider",o.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],standalone:!0,features:[f],ngContentSelectors:Ie,decls:1,vars:0,template:function(i,o){i&1&&(G(),Z(0))},encapsulation:2,changeDetection:0});let e=t;return e})(),Lt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=Pe({type:t}),t.\u0275inj=Ne({imports:[re,Bt]});let e=t;return e})();var I=function(e){return e[e.ActivateTwoFa=0]="ActivateTwoFa",e[e.Auth=1]="Auth",e[e.Register=2]="Register",e[e.ChangePassword=3]="ChangePassword",e[e.GetListed=4]="GetListed",e[e.Disclaimer=5]="Disclaimer",e[e.SecretQuestion=6]="SecretQuestion",e[e.CommunicationSecret=7]="CommunicationSecret",e[e.Default=8]="Default",e}(I||{});var Wt=(()=>{let t=class t{constructor(){this.forgotPasswordButtonClick=new D,this.loginInputSubmit=new D,this.registerButtonClick=new D}ngOnInit(){this.formGroup=new Ke({email:new Te(null),password:new Te(null)})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-login-form"]],outputs:{forgotPasswordButtonClick:"forgotPasswordButtonClick",loginInputSubmit:"loginInputSubmit",registerButtonClick:"registerButtonClick"},standalone:!0,features:[f],decls:6,vars:5,consts:[["id","login-form",3,"formGroup"],[1,"mt-2"],["type","text","aria-input-field-name","Login input",3,"control","placeholder"],["type","password","aria-input-field-name","Password input",3,"control","placeholder"],["label","Login",3,"click"]],template:function(i,o){i&1&&(a(0,"form",0)(1,"div",1),u(2,"app-login-input",2),c(),a(3,"div",1),u(4,"app-login-input",3),c(),a(5,"app-button",4),h("click",function(){return o.loginInputSubmit.emit(o.formGroup)}),c()()),i&2&&(r("formGroup",o.formGroup),l(2),r("control",o.formGroup.controls.email)("placeholder","Username"),l(2),r("control",o.formGroup.controls.password)("placeholder","Password"))},dependencies:[ee,Xe,qe,et,zt,ie]});let e=t;return e})();function di(e,t){if(e&1){let s=U();a(0,"app-login-form",2),h("loginInputSubmit",function(i){L(s);let o=y();return W(o.onLoginInputSubmit(i))}),c()}}var Vt=(()=>{let t=class t{constructor(n,i,o){this.ref=n,this.modal=i,this.auth=o,this.AuthStep=Me,this.currentStep$=new ke(Me.Login)}ngOnInit(){}onLoginInputSubmit(n){if(!n.valid)return;let{value:i}=n;this.auth.login({password:i.password,email:i.email}).pipe(M(()=>{i.rememberMe&&i.username,this.modal.close()}),E(o=>{switch(o.status){case 400:return this.errorCode=400,this.ref.markForCheck(),R;case 401:return this.loginInput=i,R;case 403:return this.errorCode=403,this.ref.markForCheck(),R;default:return O(()=>o)}})).subscribe()}};t.\u0275fac=function(i){return new(i||t)(d($),d(Ct),d(S))},t.\u0275cmp=m({type:t,selectors:[["app-auth-modal"]],standalone:!0,features:[f],decls:5,vars:4,consts:[[1,"modal-container",3,"ngSwitch"],[3,"loginInputSubmit",4,"ngSwitchCase"],[3,"loginInputSubmit"]],template:function(i,o){i&1&&(a(0,"h2"),T(1,"Login"),c(),a(2,"div",0),Ae(3,"async"),w(4,di,1,0,"app-login-form",1),c()),i&2&&(l(2),r("ngSwitch",Oe(3,2,o.currentStep$)),l(2),r("ngSwitchCase",o.AuthStep.Login))},dependencies:[Wt,Ve,Be,je]});let e=t;return e})();var $t=(()=>{let t=class t{constructor(){this.service=xe(P),this.create=()=>this.service.create({nzContent:Vt,nzFooter:null})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Ht=(()=>{let t=class t{showEntryModal(n){switch(this.action){case I.Auth:this.triggerModalAuth();break;case I.ChangePassword:break;case I.Register:break;default:throw new Error("An action of type ModalTriggerActionEnum should be added with this directive")}}constructor(n,i){this.modalService=n,this.modalAuthTriggerService=i,this.subs=new K,this.action=I.Default}triggerModalAuth(){this.modalAuthTriggerService.create()}ngOnDestroy(){this.subs.unsubscribe()}};t.\u0275fac=function(i){return new(i||t)(d(P),d($t))},t.\u0275dir=j({type:t,selectors:[["","appModalTrigger",""]],hostBindings:function(i,o){i&1&&h("click",function(C){return o.showEntryModal(C)})},inputs:{action:[B.None,"appModalTrigger","action"]},standalone:!0});let e=t;return e})();var ae=(()=>{let t=class t{constructor(n,i){this.el=n,this.auth=i,this.authDesiredValue=!0,this.subs=new K}ngOnInit(){this.initialDisplay=this.el.nativeElement.style.display,this.subs.sink=this.auth.token$.pipe(M(n=>this.el.nativeElement.style.display=!!n===this.authDesiredValue?this.initialDisplay:"none"),_e(n=>!!n),F(n=>{})).subscribe()}ngOnDestroy(){this.auth.token$.unsubscribe()}};t.\u0275fac=function(i){return new(i||t)(d(V),d(S))},t.\u0275dir=j({type:t,selectors:[["","appShowIfLogged",""]],inputs:{authDesiredValue:[B.None,"appShowIfLogged","authDesiredValue"]},standalone:!0});let e=t;return e})();var Ut=(()=>{let t=class t{constructor(n,i){this.authService=n,this.router=i,this.ModalTriggerActionEnum=I}logout(){this.authService.logout(),this.router.navigate([""])}};t.\u0275fac=function(i){return new(i||t)(d(S),d(Q))},t.\u0275cmp=m({type:t,selectors:[["app-header"]],standalone:!0,features:[f],decls:5,vars:5,consts:[[1,"app-header"],["label","Login","icon","login",3,"appShowIfLogged","appModalTrigger"],["label","Register","path","register","icon","plus",3,"appShowIfLogged"],["nz-popover","","nzPopoverContent","Meus Dados","nzPopoverPlacement","left","nz-icon","","nzType","user","nzTheme","outline","routerLink","/account","routerLinkActive","router-active",1,"controls-button",3,"appShowIfLogged"],["nz-popover","","nzPopoverContent","Sair","nzPopoverPlacement","left","nz-icon","","nzType","poweroff","nzTheme","outline",1,"controls-button",3,"appShowIfLogged","click"]],template:function(i,o){i&1&&(a(0,"div",0),u(1,"app-button",1)(2,"app-link-button",2)(3,"span",3),a(4,"span",4),h("click",function(){return o.logout()}),c()()),i&2&&(l(),r("appShowIfLogged",!1)("appModalTrigger",o.ModalTriggerActionEnum.Auth),l(),r("appShowIfLogged",!1),l(),r("appShowIfLogged",!0),l(),r("appShowIfLogged",!0))},dependencies:[ie,vt,ae,Ht,b,x,wt,Mt,q,Y,Je],styles:["[_nghost-%COMP%]   .app-header[_ngcontent-%COMP%]{padding:0;width:100%;z-index:2}[_nghost-%COMP%]   .app-header[_ngcontent-%COMP%]{position:relative;height:64px;padding:1rem;background:#fff;box-shadow:0 1px 4px #00152914;display:flex;justify-content:flex-end;align-items:center}[_nghost-%COMP%]   .app-header[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]{margin-right:1rem}[_nghost-%COMP%]   .app-header[_ngcontent-%COMP%]   .controls-button[_ngcontent-%COMP%]{margin-right:1rem;font-size:1rem;transition:ease-in .2s}[_nghost-%COMP%]   .app-header[_ngcontent-%COMP%]   .controls-button[_ngcontent-%COMP%]:hover{color:red;cursor:pointer}.router-active[_ngcontent-%COMP%]{color:#1890ff}"]});let e=t;return e})();var mi=e=>({overflow:e}),Gt=(e,t)=>[e,t],hi=e=>[e],Zt=(()=>{let t=class t{constructor(){this.isCollapsed=!1,this.roles=N,this.isMobile=window.innerWidth<720}ngOnInit(){this.collapsedSize=this.isMobile?"80px":"0",this.uncollapsedSize=this.isMobile?"0":"200px"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-root"]],standalone:!0,features:[f],decls:38,vars:20,consts:[["nzCollapsible","","nzBreakpoint","lg",1,"menu-sidebar",3,"nzWidth","nzTrigger","nzCollapsed","appShowIfLogged","nzCollapsedChange"],[1,"sidebar-logo"],["routerLink","","target","_blank"],["src","../assets/imgs/physio-logo.svg","alt","logo"],[1,"screen-reader-txt"],["nz-menu","","nzTheme","dark","nzMode","inline",3,"ngStyle"],["nz-menu-item","","routerLink","/scheduling","nzMatchRouter",""],["nz-icon","","nzType","calendar","nzTheme","outline"],["nz-submenu","","nzTitle","Gerenciamento","nzIcon","setting"],["accessControl","","nz-menu-item","","routerLink","/patients","nzMatchRouter","",3,"moduleType"],["nz-icon","","nzType","contacts","nzTheme","outline"],["accessControl","","nz-menu-item","","routerLink","/physioterapists","nzMatchRouter","",3,"moduleType"],["nz-icon","","nzType","team","nzTheme","outline"],["accessControl","","nz-menu-item","","routerLink","/procedures","nzMatchRouter","",3,"moduleType"],["nz-icon","","nzType","exclamation-circle","nzTheme","outline"],["nz-menu-item","","routerLink","/medical-appointments","nzMatchRouter",""],[3,"appShowIfLogged"],[2,"display","flex"],[1,"trigger"],["nz-icon","",3,"nzType","click"],[1,"inner-content"]],template:function(i,o){i&1&&(a(0,"nz-layout")(1,"nz-sider",0),h("nzCollapsedChange",function(C){return o.isCollapsed=C}),a(2,"div",1)(3,"a",2),u(4,"img",3),a(5,"h1",4),T(6,"Physio"),c()()(),a(7,"ul",5)(8,"li",6),u(9,"span",7),a(10,"span"),T(11,"Agendamento"),c()(),a(12,"li",8)(13,"ul")(14,"li",9),u(15,"span",10),a(16,"span"),T(17,"Pacientes"),c()(),a(18,"li",11),u(19,"span",12),a(20,"span"),T(21,"Fisioterapeutas"),c()(),a(22,"li",13),u(23,"span",14),a(24,"span"),T(25,"Protocolos"),c()(),a(26,"li",15),u(27,"span",10),a(28,"span"),T(29,"Consultas"),c()()()()()(),a(30,"nz-layout")(31,"nz-header",16)(32,"div",17)(33,"div",18)(34,"span",19),h("click",function(){return o.isCollapsed=!o.isCollapsed}),c()(),u(35,"app-header"),c()(),a(36,"div",20),u(37,"router-outlet"),c()()()),i&2&&(l(),r("nzWidth",o.uncollapsedSize)("nzTrigger",null)("nzCollapsed",o.isCollapsed)("appShowIfLogged",!0),l(6),r("ngStyle",ze(10,mi,o.isCollapsed?"unset":"hidden")),l(7),r("moduleType",Ce(12,Gt,o.roles.Professional,o.roles.Clinic)),l(4),r("moduleType",ze(15,hi,o.roles.Clinic)),l(4),r("moduleType",Ce(17,Gt,o.roles.Professional,o.roles.Clinic)),l(9),r("appShowIfLogged",!0),l(3),r("nzType",o.isCollapsed?"menu-fold":"menu-unfold"))},dependencies:[$e,Le,q,Ze,Y,b,x,Lt,jt,Et,re,Tt,ne,yt,St,ut,ct,Ut,ee,ae,bt],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.menu-sidebar[_ngcontent-%COMP%]{position:relative;z-index:10;min-height:100vh;box-shadow:2px 0 6px #00152959}.sidebar-logo[_ngcontent-%COMP%]{position:relative;height:64px;text-align:center;overflow:hidden;line-height:64px;background:#001529;transition:all .3s}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block;height:83px;width:83px;vertical-align:middle}.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline-block;margin:0 0 0 20px;color:#fff;font-weight:600;font-size:14px;font-family:Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;vertical-align:middle}nz-header[_ngcontent-%COMP%]{padding:0;width:100%;z-index:2}nz-content[_ngcontent-%COMP%]{margin:24px}.inner-content[_ngcontent-%COMP%]{padding:24px;background:#fff;height:100%;max-height:800px;overflow-y:auto}.trigger[_ngcontent-%COMP%]{flex:1;background-color:#fff;font-size:18px;line-height:64px;padding:0 24px;box-shadow:0 1px 4px #00152914}"]});let e=t;return e})();Ge(Zt,Ot).catch(e=>console.error(e));
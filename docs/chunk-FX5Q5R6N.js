import{a as ct,b as rt,c as st}from"./chunk-B6FEKO5C.js";import{$a as $,Ec as Q,Ga as s,Ha as p,Ia as d,Ja as N,K as L,Ka as T,Lc as Y,Ma as y,Mc as tt,O as R,P,Pa as _,R as I,Ra as m,U as x,V,Wd as at,Z as h,_ as C,a as v,b as M,cd as nt,da as j,eb as D,g as w,ga as O,gb as H,hb as K,ka as r,la as b,lb as B,md as et,na as E,oa as A,pb as U,qa as k,qb as G,rb as X,sa as l,sb as Z,sc as F,tb as W,ua as c,ud as it,va as z,vb as q,vd as ot,wa as u,wb as J}from"./chunk-FFMU4347.js";function ft(i,o){i&1&&d(0,"span",17)}function mt(i,o){i&1&&d(0,"span",18)}function dt(i,o){i&1&&d(0,"span",19)}function _t(i,o){i&1&&d(0,"span",20)}function ut(i,o){if(i&1&&(N(0),d(1,"div",21),T()),i&2){let a=m(2);r(),c("innerHTML",a.instance.title,O)}}function gt(i,o){if(i&1&&(N(0),d(1,"div",21),T()),i&2){let a=m(2);r(),c("innerHTML",a.instance.content,O)}}function ht(i,o){}var Ct=i=>({$implicit:i});function zt(i,o){if(i&1&&(s(0,"span",22),l(1,ht,0,0,"ng-template",23),p()),i&2){let a=o.ngIf,n=m(2);r(),c("ngTemplateOutlet",a)("ngTemplateOutletContext",H(2,Ct,n))}}function yt(i,o){if(i&1&&(s(0,"div",7)(1,"div",7)(2,"div"),N(3,8),l(4,ft,1,0,"span",9)(5,mt,1,0,"span",10)(6,dt,1,0,"span",11)(7,_t,1,0,"span",12),T(),s(8,"div",13),l(9,ut,2,1,"ng-container",14),p(),s(10,"div",15),l(11,gt,2,1,"ng-container",14),p(),l(12,zt,2,4,"span",16),p()()()),i&2){let a=m();r(2),u("ant-notification-notice-with-icon",a.instance.type!=="blank"),r(),c("ngSwitch",a.instance.type),r(),c("ngSwitchCase","success"),r(),c("ngSwitchCase","info"),r(),c("ngSwitchCase","warning"),r(),c("ngSwitchCase","error"),r(2),c("nzStringTemplateOutlet",a.instance.title),r(2),c("nzStringTemplateOutlet",a.instance.content),r(),c("ngIf",a.instance.options==null?null:a.instance.options.nzButton)}}function vt(i,o){}function Nt(i,o){if(i&1&&(N(0),d(1,"span",24),T()),i&2){let a=o.$implicit;r(),c("nzType",a)}}function Tt(i,o){if(i&1&&(N(0),l(1,Nt,2,1,"ng-container",14),T()),i&2){let a=m();r(),c("nzStringTemplateOutlet",a.instance.options==null?null:a.instance.options.nzCloseIcon)}}function It(i,o){i&1&&d(0,"span",25)}var bt=(i,o)=>({$implicit:i,data:o});function St(i,o){if(i&1){let a=y();s(0,"nz-notification",7),_("destroyed",function(t){h(a);let e=m();return C(e.remove(t.id,t.userAction))}),p()}if(i&2){let a=o.$implicit;c("instance",a)("placement","topLeft")}}function wt(i,o){if(i&1){let a=y();s(0,"nz-notification",7),_("destroyed",function(t){h(a);let e=m();return C(e.remove(t.id,t.userAction))}),p()}if(i&2){let a=o.$implicit;c("instance",a)("placement","topRight")}}function xt(i,o){if(i&1){let a=y();s(0,"nz-notification",7),_("destroyed",function(t){h(a);let e=m();return C(e.remove(t.id,t.userAction))}),p()}if(i&2){let a=o.$implicit;c("instance",a)("placement","bottomLeft")}}function Ot(i,o){if(i&1){let a=y();s(0,"nz-notification",7),_("destroyed",function(t){h(a);let e=m();return C(e.remove(t.id,t.userAction))}),p()}if(i&2){let a=o.$implicit;c("instance",a)("placement","bottomRight")}}function Et(i,o){if(i&1){let a=y();s(0,"nz-notification",7),_("destroyed",function(t){h(a);let e=m();return C(e.remove(t.id,t.userAction))}),p()}if(i&2){let a=o.$implicit;c("instance",a)("placement","top")}}function kt(i,o){if(i&1){let a=y();s(0,"nz-notification",7),_("destroyed",function(t){h(a);let e=m();return C(e.remove(t.id,t.userAction))}),p()}if(i&2){let a=o.$implicit;c("instance",a)("placement","bottom")}}var pt=(()=>{let o=class o extends st{constructor(n){super(n),this.destroyed=new A}ngOnDestroy(){super.ngOnDestroy(),this.instance.onClick.complete()}onClick(n){this.instance.onClick.next(n)}close(){this.destroy(!0)}get state(){if(this.instance.state==="enter")switch(this.placement){case"topLeft":case"bottomLeft":return"enterLeft";case"topRight":case"bottomRight":return"enterRight";case"top":return"enterTop";case"bottom":return"enterBottom";default:return"enterRight"}else return this.instance.state}};o.\u0275fac=function(t){return new(t||o)(b(E))},o.\u0275cmp=x({type:o,selectors:[["nz-notification"]],inputs:{instance:"instance",index:"index",placement:"placement"},outputs:{destroyed:"destroyed"},exportAs:["nzNotification"],standalone:!0,features:[k,D],decls:8,vars:12,consts:[[1,"ant-notification-notice","ant-notification-notice-closable",3,"ngStyle","ngClass","click","mouseenter","mouseleave"],["class","ant-notification-notice-content",4,"ngIf"],[3,"ngIf","ngTemplateOutlet","ngTemplateOutletContext"],["tabindex","0",1,"ant-notification-notice-close",3,"click"],[1,"ant-notification-notice-close-x"],[4,"ngIf","ngIfElse"],["iconTpl",""],[1,"ant-notification-notice-content"],[3,"ngSwitch"],["nz-icon","","nzType","check-circle","class","ant-notification-notice-icon ant-notification-notice-icon-success",4,"ngSwitchCase"],["nz-icon","","nzType","info-circle","class","ant-notification-notice-icon ant-notification-notice-icon-info",4,"ngSwitchCase"],["nz-icon","","nzType","exclamation-circle","class","ant-notification-notice-icon ant-notification-notice-icon-warning",4,"ngSwitchCase"],["nz-icon","","nzType","close-circle","class","ant-notification-notice-icon ant-notification-notice-icon-error",4,"ngSwitchCase"],[1,"ant-notification-notice-message"],[4,"nzStringTemplateOutlet"],[1,"ant-notification-notice-description"],["class","ant-notification-notice-btn",4,"ngIf"],["nz-icon","","nzType","check-circle",1,"ant-notification-notice-icon","ant-notification-notice-icon-success"],["nz-icon","","nzType","info-circle",1,"ant-notification-notice-icon","ant-notification-notice-icon-info"],["nz-icon","","nzType","exclamation-circle",1,"ant-notification-notice-icon","ant-notification-notice-icon-warning"],["nz-icon","","nzType","close-circle",1,"ant-notification-notice-icon","ant-notification-notice-icon-error"],[3,"innerHTML"],[1,"ant-notification-notice-btn"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","close",1,"ant-notification-close-icon"]],template:function(t,e){if(t&1&&(s(0,"div",0),_("@notificationMotion.done",function(g){return e.animationStateChanged.next(g)})("click",function(g){return e.onClick(g)})("mouseenter",function(){return e.onEnter()})("mouseleave",function(){return e.onLeave()}),l(1,yt,13,10,"div",1)(2,vt,0,0,"ng-template",2),s(3,"a",3),_("click",function(){return e.close()}),s(4,"span",4),l(5,Tt,2,1,"ng-container",5)(6,It,1,0,"ng-template",null,6,B),p()()()),t&2){let f=$(7);c("ngStyle",(e.instance.options==null?null:e.instance.options.nzStyle)||null)("ngClass",(e.instance.options==null?null:e.instance.options.nzClass)||"")("@notificationMotion",e.state),r(),c("ngIf",!e.instance.template),r(),c("ngIf",e.instance.template)("ngTemplateOutlet",e.instance.template)("ngTemplateOutletContext",K(9,bt,e,e.instance.options==null?null:e.instance.options.nzData)),r(3),c("ngIf",e.instance.options==null?null:e.instance.options.nzCloseIcon)("ngIfElse",f)}},dependencies:[q,U,X,Z,W,tt,Y,ot,it,J],encapsulation:2,data:{animation:[et]}});let i=o;return i})(),S="notification",Dt={nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0,nzDirection:"ltr"},lt=(()=>{let o=class o extends rt{constructor(n,t){super(n,t),this.dir="ltr",this.instances=[],this.topLeftInstances=[],this.topRightInstances=[],this.bottomLeftInstances=[],this.bottomRightInstances=[],this.topInstances=[],this.bottomInstances=[];let e=this.nzConfigService.getConfigForComponent(S);this.dir=e?.nzDirection||"ltr"}create(n){let t=this.onCreate(n),e=t.options.nzKey,f=this.instances.find(g=>g.options.nzKey===n.options.nzKey);return e&&f?this.replaceNotification(f,t):(this.instances.length>=this.config.nzMaxStack&&(this.instances=this.instances.slice(1)),this.instances=[...this.instances,t]),this.readyInstances(),t}onCreate(n){return n.options=this.mergeOptions(n.options),n.onClose=new w,n.onClick=new w,n}subscribeConfigChange(){this.nzConfigService.getConfigChangeEventForComponent(S).pipe(L(this.destroy$)).subscribe(()=>{this.updateConfig();let n=this.nzConfigService.getConfigForComponent(S);if(n){let{nzDirection:t}=n;this.dir=t||this.dir}})}updateConfig(){this.config=v(v(v({},Dt),this.config),this.nzConfigService.getConfigForComponent(S)),this.top=F(this.config.nzTop),this.bottom=F(this.config.nzBottom),this.cdr.markForCheck()}replaceNotification(n,t){n.title=t.title,n.content=t.content,n.template=t.template,n.type=t.type,n.options=t.options}readyInstances(){let n={topLeft:[],topRight:[],bottomLeft:[],bottomRight:[],top:[],bottom:[]};this.instances.forEach(t=>{switch(t.options.nzPlacement){case"topLeft":n.topLeft.push(t);break;case"topRight":n.topRight.push(t);break;case"bottomLeft":n.bottomLeft.push(t);break;case"bottomRight":n.bottomRight.push(t);break;case"top":n.top.push(t);break;case"bottom":n.bottom.push(t);break;default:n.topRight.push(t)}}),this.topLeftInstances=n.topLeft,this.topRightInstances=n.topRight,this.bottomLeftInstances=n.bottomLeft,this.bottomRightInstances=n.bottomRight,this.topInstances=n.top,this.bottomInstances=n.bottom,this.cdr.detectChanges()}mergeOptions(n){let{nzDuration:t,nzAnimate:e,nzPauseOnHover:f,nzPlacement:g}=this.config;return v({nzDuration:t,nzAnimate:e,nzPauseOnHover:f,nzPlacement:g},n)}};o.\u0275fac=function(t){return new(t||o)(b(E),b(Q))},o.\u0275cmp=x({type:o,selectors:[["nz-notification-container"]],exportAs:["nzNotificationContainer"],standalone:!0,features:[k,D],decls:12,vars:46,consts:[[1,"ant-notification","ant-notification-topLeft"],[3,"instance","placement","destroyed",4,"ngFor","ngForOf"],[1,"ant-notification","ant-notification-topRight"],[1,"ant-notification","ant-notification-bottomLeft"],[1,"ant-notification","ant-notification-bottomRight"],[1,"ant-notification","ant-notification-top"],[1,"ant-notification","ant-notification-bottom"],[3,"instance","placement","destroyed"]],template:function(t,e){t&1&&(s(0,"div",0),l(1,St,1,2,"nz-notification",1),p(),s(2,"div",2),l(3,wt,1,2,"nz-notification",1),p(),s(4,"div",3),l(5,xt,1,2,"nz-notification",1),p(),s(6,"div",4),l(7,Ot,1,2,"nz-notification",1),p(),s(8,"div",5),l(9,Et,1,2,"nz-notification",1),p(),s(10,"div",6),l(11,kt,1,2,"nz-notification",1),p()),t&2&&(z("top",e.top)("left","0px"),u("ant-notification-rtl",e.dir==="rtl"),r(),c("ngForOf",e.topLeftInstances),r(),z("top",e.top)("right","0px"),u("ant-notification-rtl",e.dir==="rtl"),r(),c("ngForOf",e.topRightInstances),r(),z("bottom",e.bottom)("left","0px"),u("ant-notification-rtl",e.dir==="rtl"),r(),c("ngForOf",e.bottomLeftInstances),r(),z("bottom",e.bottom)("right","0px"),u("ant-notification-rtl",e.dir==="rtl"),r(),c("ngForOf",e.bottomRightInstances),r(),z("top",e.top)("left","50%")("transform","translateX(-50%)"),u("ant-notification-rtl",e.dir==="rtl"),r(),c("ngForOf",e.topInstances),r(),z("bottom",e.bottom)("left","50%")("transform","translateX(-50%)"),u("ant-notification-rtl",e.dir==="rtl"),r(),c("ngForOf",e.bottomInstances))},dependencies:[pt,G],encapsulation:2,changeDetection:0});let i=o;return i})(),en=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=V({type:o}),o.\u0275inj=P({imports:[pt,lt]});let i=o;return i})(),Ft=0,on=(()=>{let o=class o extends ct{constructor(n,t,e){super(n,t,e),this.componentPrefix="notification-"}success(n,t,e){return this.create("success",n,t,e)}error(n,t,e){return this.create("error",n,t,e)}info(n,t,e){return this.create("info",n,t,e)}warning(n,t,e){return this.create("warning",n,t,e)}blank(n,t,e){return this.create("blank",n,t,e)}create(n,t,e,f){return this.createInstance({type:n,title:t,content:e},f)}template(n,t){return this.createInstance({template:n},t)}generateMessageId(){return`${this.componentPrefix}-${Ft++}`}createInstance(n,t){return this.container=this.withContainer(lt),this.container.create(M(v({},n),{createdAt:new Date,messageId:t?.nzKey||this.generateMessageId(),options:t}))}};o.\u0275fac=function(t){return new(t||o)(I(nt),I(at),I(j))},o.\u0275prov=R({token:o,factory:o.\u0275fac,providedIn:"root"});let i=o;return i})();export{en as a,on as b};

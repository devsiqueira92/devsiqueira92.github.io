import{E as K,F as Ee,G as Pe,R as M,d as ke,g as Ne,gb as Re,h as J,jb as Fe,kb as Le,la as Ae,m as $e,ma as je,n as k,qb as X,ra as ze,rb as m,sa as ge,tb as Be}from"./chunk-BUBXGMRK.js";import{$ as u,$b as pe,E as Z,F as x,G as ve,Jb as S,Kb as C,Lb as A,Mb as ae,N as be,Nb as ue,Oc as Oe,P as ee,Pb as de,Qc as U,Rb as ce,Rc as we,Sc as _e,Tb as w,Tc as Te,Vb as g,Vc as fe,Wb as Q,Xb as _,Z as ne,_ as Se,_b as j,ac as I,bc as y,cb as B,cc as R,dc as me,eb as re,ec as he,fa as te,ga as Ce,gc as q,hb as h,hc as T,ib as a,j as p,ja as ie,k as D,ka as V,kb as H,la as L,lb as P,oa as O,p as f,pa as Ie,pc as G,qa as ye,sa as E,ta as se,ua as oe,ub as z,v as W,w as F,wb as d,x as De,xb as le,yb as v}from"./chunk-HUG7J4BS.js";var Ue=["nz-menu-item",""],Qe=["*"],Je=["nz-submenu-inline-child",""];function Ke(s,i){}var Xe=["nz-submenu-none-inline-child",""];function Ye(s,i){}var Ze=["nz-submenu-title",""];function xe(s,i){if(s&1&&A(0,"span",4),s&2){let r=g();d("nzType",r.nzIcon)}}function en(s,i){if(s&1&&(ae(0),S(1,"span",5),me(2),C(),ue()),s&2){let r=g();h(2),he(r.nzTitle)}}function nn(s,i){s&1&&A(0,"span",9)}function tn(s,i){s&1&&A(0,"span",10)}function sn(s,i){if(s&1&&(S(0,"span",6),z(1,nn,1,0,"span",7)(2,tn,1,0,"span",8),C()),s&2){let r=g();d("ngSwitch",r.dir),h(),d("ngSwitchCase","rtl")}}function on(s,i){s&1&&A(0,"span",11)}var rn=["nz-submenu",""];function ln(s,i){s&1&&_(0,0,["*ngIf","!nzTitle"])}function an(s,i){if(s&1&&A(0,"div",6),s&2){let r=g(),n=R(7);d("mode",r.mode)("nzOpen",r.nzOpen)("@.disabled",!!(r.noAnimation!=null&&r.noAnimation.nzNoAnimation))("nzNoAnimation",r.noAnimation==null?null:r.noAnimation.nzNoAnimation)("menuClass",r.nzMenuClassName)("templateOutlet",n)}}function un(s,i){if(s&1){let r=de();S(0,"div",8),w("subMenuMouseState",function(t){se(r);let e=g(2);return oe(e.setMouseEnterState(t))}),C()}if(s&2){let r=g(2),n=R(7);d("theme",r.theme)("mode",r.mode)("nzOpen",r.nzOpen)("position",r.position)("nzDisabled",r.nzDisabled)("isMenuInsideDropDown",r.isMenuInsideDropDown)("templateOutlet",n)("menuClass",r.nzMenuClassName)("@.disabled",!!(r.noAnimation!=null&&r.noAnimation.nzNoAnimation))("nzNoAnimation",r.noAnimation==null?null:r.noAnimation.nzNoAnimation)}}function dn(s,i){if(s&1){let r=de();z(0,un,1,10,"ng-template",7),w("positionChange",function(t){se(r);let e=g();return oe(e.onPositionChange(t))})}if(s&2){let r=g(),n=R(1);d("cdkConnectedOverlayPositions",r.overlayPositions)("cdkConnectedOverlayOrigin",n)("cdkConnectedOverlayWidth",r.triggerWidth)("cdkConnectedOverlayOpen",r.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function cn(s,i){s&1&&_(0,1)}var pn=[[["","title",""]],"*"],mn=["[title]","*"],hn=["titleElement"],fn=["nz-menu-group",""];function zn(s,i){if(s&1&&(ae(0),me(1),ue()),s&2){let r=g();h(),he(r.nzTitle)}}function gn(s,i){s&1&&_(0,1,["*ngIf","!nzTitle"])}var Mn=["*",[["","title",""]]],Dn=["*","[title]"],b=new ie("NzIsInDropDownMenuToken"),We=new ie("NzMenuServiceLocalToken"),N=(()=>{let i=class i{constructor(){this.descendantMenuItemClick$=new p,this.childMenuItemClick$=new p,this.theme$=new D("light"),this.mode$=new D("vertical"),this.inlineIndent$=new D(24),this.isChildSubMenuOpen$=new D(!1)}onDescendantMenuItemClick(n){this.descendantMenuItemClick$.next(n)}onChildMenuItemClick(n){this.childMenuItemClick$.next(n)}setMode(n){this.mode$.next(n)}setTheme(n){this.theme$.next(n)}setInlineIndent(n){this.inlineIndent$.next(n)}};i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=te({token:i,factory:i.\u0275fac});let s=i;return s})(),Me=(()=>{let i=class i{onChildMenuItemClick(n){this.childMenuItemClick$.next(n)}setOpenStateWithoutDebounce(n){this.isCurrentSubMenuOpen$.next(n)}setMouseEnterTitleOrOverlayState(n){this.isMouseEnterTitleOrOverlay$.next(n)}constructor(n,t,e){this.nzHostSubmenuService=n,this.nzMenuService=t,this.isMenuInsideDropDown=e,this.mode$=this.nzMenuService.mode$.pipe(W(c=>c==="inline"?"inline":c==="vertical"||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new D(!1),this.isChildSubMenuOpen$=new D(!1),this.isMouseEnterTitleOrOverlay$=new p,this.childMenuItemClick$=new p,this.destroy$=new p,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);let o=this.childMenuItemClick$.pipe(De(()=>this.mode$),x(c=>c!=="inline"||this.isMenuInsideDropDown),be(!1)),l=Z(this.isMouseEnterTitleOrOverlay$,o);F([this.isChildSubMenuOpen$,l]).pipe(W(([c,Y])=>c||Y),ve(150),ee(),u(this.destroy$)).pipe(ee()).subscribe(c=>{this.setOpenStateWithoutDebounce(c),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(c):this.nzMenuService.isChildSubMenuOpen$.next(c)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};i.\u0275fac=function(t){return new(t||i)(V(i,12),V(N),V(b))},i.\u0275prov=te({token:i,factory:i.\u0275fac});let s=i;return s})(),Ve=(()=>{let i=class i{clickMenuItem(n){this.nzDisabled?(n.preventDefault(),n.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(n){this.nzSelected=n,this.selected$.next(n)}updateRouterActive(){!this.listOfRouterLink||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{let n=this.hasActiveLinks();this.nzSelected!==n&&(this.nzSelected=n,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){let n=this.isLinkActive(this.router);return this.routerLink&&n(this.routerLink)||this.listOfRouterLink.some(n)}isLinkActive(n){return t=>n.isActive(t.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}constructor(n,t,e,o,l,$,c){this.nzMenuService=n,this.cdr=t,this.nzSubmenuService=e,this.isMenuInsideDropDown=o,this.directionality=l,this.routerLink=$,this.router=c,this.destroy$=new p,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new p,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,c&&this.router.events.pipe(u(this.destroy$),x(Y=>Y instanceof ke)).subscribe(()=>{this.updateRouterActive()})}ngOnInit(){F([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe(u(this.destroy$)).subscribe(([n,t])=>{this.inlinePaddingLeft=n==="inline"?this.level*t:null}),this.dir=this.directionality.value,this.directionality.change?.pipe(u(this.destroy$)).subscribe(n=>{this.dir=n})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe(u(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(n){n.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}};i.\u0275fac=function(t){return new(t||i)(a(N),a(H),a(Me,8),a(b),a(k,8),a(J,8),a(Ne,8))},i.\u0275cmp=O({type:i,selectors:[["","nz-menu-item",""]],contentQueries:function(t,e,o){if(t&1&&j(o,J,5),t&2){let l;I(l=y())&&(e.listOfRouterLink=l)}},hostVars:20,hostBindings:function(t,e){t&1&&w("click",function(l){return e.clickMenuItem(l)}),t&2&&(le("padding-left",e.dir==="rtl"?null:e.nzPaddingLeft||e.inlinePaddingLeft,"px")("padding-right",e.dir==="rtl"?e.nzPaddingLeft||e.inlinePaddingLeft:null,"px"),v("ant-dropdown-menu-item",e.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",e.isMenuInsideDropDown&&e.nzSelected)("ant-dropdown-menu-item-danger",e.isMenuInsideDropDown&&e.nzDanger)("ant-dropdown-menu-item-disabled",e.isMenuInsideDropDown&&e.nzDisabled)("ant-menu-item",!e.isMenuInsideDropDown)("ant-menu-item-selected",!e.isMenuInsideDropDown&&e.nzSelected)("ant-menu-item-danger",!e.isMenuInsideDropDown&&e.nzDanger)("ant-menu-item-disabled",!e.isMenuInsideDropDown&&e.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],standalone:!0,features:[E,T],attrs:Ue,ngContentSelectors:Qe,decls:2,vars:0,consts:[[1,"ant-menu-title-content"]],template:function(t,e){t&1&&(Q(),S(0,"span",0),_(1),C())},encapsulation:2,changeDetection:0});let s=i;return f([M()],s.prototype,"nzDisabled",void 0),f([M()],s.prototype,"nzSelected",void 0),f([M()],s.prototype,"nzDanger",void 0),f([M()],s.prototype,"nzMatchRouterExact",void 0),f([M()],s.prototype,"nzMatchRouter",void 0),s})(),vn=(()=>{let i=class i{constructor(n,t,e){this.elementRef=n,this.renderer=t,this.directionality=e,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new p}calcMotionState(){this.nzOpen?this.expandState="expanded":this.expandState="collapsed"}ngOnInit(){this.calcMotionState(),this.dir=this.directionality.value,this.directionality.change?.pipe(u(this.destroy$)).subscribe(n=>{this.dir=n})}ngOnChanges(n){let{mode:t,nzOpen:e,menuClass:o}=n;(t||e)&&this.calcMotionState(),o&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(l=>!!l).forEach(l=>{this.renderer.removeClass(this.elementRef.nativeElement,l)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(l=>!!l).forEach(l=>{this.renderer.addClass(this.elementRef.nativeElement,l)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};i.\u0275fac=function(t){return new(t||i)(a(B),a(re),a(k,8))},i.\u0275cmp=O({type:i,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(t,e){t&2&&(ce("@collapseMotion",e.expandState),v("ant-menu-rtl",e.dir==="rtl"))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],standalone:!0,features:[E,T],attrs:Je,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(t,e){t&1&&z(0,Ke,0,0,"ng-template",0),t&2&&d("ngTemplateOutlet",e.templateOutlet)},dependencies:[fe],encapsulation:2,data:{animation:[Re]},changeDetection:0});let s=i;return s})(),bn=(()=>{let i=class i{constructor(n){this.directionality=n,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new P,this.expandState="collapsed",this.dir="ltr",this.destroy$=new p}setMouseState(n){this.nzDisabled||this.subMenuMouseState.next(n)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?this.mode==="horizontal"?this.expandState="bottom":this.mode==="vertical"&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){this.calcMotionState(),this.dir=this.directionality.value,this.directionality.change?.pipe(u(this.destroy$)).subscribe(n=>{this.dir=n})}ngOnChanges(n){let{mode:t,nzOpen:e}=n;(t||e)&&this.calcMotionState()}};i.\u0275fac=function(t){return new(t||i)(a(k,8))},i.\u0275cmp=O({type:i,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(t,e){t&1&&w("mouseenter",function(){return e.setMouseState(!0)})("mouseleave",function(){return e.setMouseState(!1)}),t&2&&(ce("@slideMotion",e.expandState)("@zoomBigMotion",e.expandState),v("ant-menu-light",e.theme==="light")("ant-menu-dark",e.theme==="dark")("ant-menu-submenu-placement-bottom",e.mode==="horizontal")("ant-menu-submenu-placement-right",e.mode==="vertical"&&e.position==="right")("ant-menu-submenu-placement-left",e.mode==="vertical"&&e.position==="left")("ant-menu-submenu-rtl",e.dir==="rtl"))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],standalone:!0,features:[E,T],attrs:Xe,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(t,e){t&1&&(S(0,"div",0),z(1,Ye,0,0,"ng-template",1),C()),t&2&&(v("ant-dropdown-menu",e.isMenuInsideDropDown)("ant-menu",!e.isMenuInsideDropDown)("ant-dropdown-menu-vertical",e.isMenuInsideDropDown)("ant-menu-vertical",!e.isMenuInsideDropDown)("ant-dropdown-menu-sub",e.isMenuInsideDropDown)("ant-menu-sub",!e.isMenuInsideDropDown)("ant-menu-rtl",e.dir==="rtl"),d("ngClass",e.menuClass),h(),d("ngTemplateOutlet",e.templateOutlet))},dependencies:[Oe,fe],encapsulation:2,data:{animation:[Le,Fe]},changeDetection:0});let s=i;return s})(),qe=(()=>{let i=class i{constructor(n,t){this.cdr=n,this.directionality=t,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new P,this.subMenuMouseState=new P,this.dir="ltr",this.destroy$=new p}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(u(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(n){this.nzDisabled||this.subMenuMouseState.next(n)}clickTitle(){this.mode==="inline"&&!this.nzDisabled&&this.toggleSubMenu.emit()}};i.\u0275fac=function(t){return new(t||i)(a(H),a(k,8))},i.\u0275cmp=O({type:i,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(t,e){t&1&&w("click",function(){return e.clickTitle()})("mouseenter",function(){return e.setMouseState(!0)})("mouseleave",function(){return e.setMouseState(!1)}),t&2&&(le("padding-left",e.dir==="rtl"?null:e.paddingLeft,"px")("padding-right",e.dir==="rtl"?e.paddingLeft:null,"px"),v("ant-dropdown-menu-submenu-title",e.isMenuInsideDropDown)("ant-menu-submenu-title",!e.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],standalone:!0,features:[T],attrs:Ze,ngContentSelectors:Qe,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-menu-title-content"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(t,e){if(t&1&&(Q(),z(0,xe,1,1,"span",0)(1,en,3,1,"ng-container",1),_(2),z(3,sn,3,2,"span",2)(4,on,1,0,"ng-template",null,3,G)),t&2){let o=R(5);d("ngIf",e.nzIcon),h(),d("nzStringTemplateOutlet",e.nzTitle),h(2),d("ngIf",e.isMenuInsideDropDown)("ngIfElse",o)}},dependencies:[je,Ae,U,ge,ze,we,_e,Te],encapsulation:2,changeDetection:0});let s=i;return s})(),He=[m.rightTop,m.right,m.rightBottom,m.leftTop,m.left,m.leftBottom],Sn=[m.bottomLeft,m.bottomRight,m.topRight,m.topLeft],Ge=(()=>{let i=class i{setOpenStateWithoutDebounce(n){this.nzSubmenuService.setOpenStateWithoutDebounce(n)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(n){this.isActive=n,this.mode!=="inline"&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(n)}setTriggerWidth(){this.mode==="horizontal"&&this.platform.isBrowser&&this.cdkOverlayOrigin&&this.nzPlacement==="bottomLeft"&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(n){let t=Be(n);t==="rightTop"||t==="rightBottom"||t==="right"?this.position="right":(t==="leftTop"||t==="leftBottom"||t==="left")&&(this.position="left")}constructor(n,t,e,o,l,$,c){this.nzMenuService=n,this.cdr=t,this.nzSubmenuService=e,this.platform=o,this.isMenuInsideDropDown=l,this.directionality=$,this.noAnimation=c,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzPlacement="bottomLeft",this.nzOpenChange=new P,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new p,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=He,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}ngOnInit(){this.nzMenuService.theme$.pipe(u(this.destroy$)).subscribe(n=>{this.theme=n,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe(u(this.destroy$)).subscribe(n=>{this.mode=n,n==="horizontal"?this.overlayPositions=[m[this.nzPlacement],...Sn]:n==="vertical"&&(this.overlayPositions=He),this.cdr.markForCheck()}),F([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe(u(this.destroy$)).subscribe(([n,t])=>{this.inlinePaddingLeft=n==="inline"?this.level*t:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe(u(this.destroy$)).subscribe(n=>{this.isActive=n,n!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=n,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,this.directionality.change?.pipe(u(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();let n=this.listOfNzMenuItemDirective,t=n.changes,e=Z(t,...n.map(o=>o.selected$));t.pipe(ne(n),Se(()=>e),ne(!0),W(()=>n.some(o=>o.nzSelected)),u(this.destroy$)).subscribe(o=>{this.isSelected=o,this.cdr.markForCheck()})}ngOnChanges(n){let{nzOpen:t}=n;t&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};i.\u0275fac=function(t){return new(t||i)(a(N),a(H),a(Me),a($e),a(b),a(k,8),a(X,9))},i.\u0275cmp=O({type:i,selectors:[["","nz-submenu",""]],contentQueries:function(t,e,o){if(t&1&&(j(o,i,5),j(o,Ve,5)),t&2){let l;I(l=y())&&(e.listOfNzSubMenuComponent=l),I(l=y())&&(e.listOfNzMenuItemDirective=l)}},viewQuery:function(t,e){if(t&1&&pe(K,7,B),t&2){let o;I(o=y())&&(e.cdkOverlayOrigin=o.first)}},hostVars:34,hostBindings:function(t,e){t&2&&v("ant-dropdown-menu-submenu",e.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",e.isMenuInsideDropDown&&e.nzDisabled)("ant-dropdown-menu-submenu-open",e.isMenuInsideDropDown&&e.nzOpen)("ant-dropdown-menu-submenu-selected",e.isMenuInsideDropDown&&e.isSelected)("ant-dropdown-menu-submenu-vertical",e.isMenuInsideDropDown&&e.mode==="vertical")("ant-dropdown-menu-submenu-horizontal",e.isMenuInsideDropDown&&e.mode==="horizontal")("ant-dropdown-menu-submenu-inline",e.isMenuInsideDropDown&&e.mode==="inline")("ant-dropdown-menu-submenu-active",e.isMenuInsideDropDown&&e.isActive)("ant-menu-submenu",!e.isMenuInsideDropDown)("ant-menu-submenu-disabled",!e.isMenuInsideDropDown&&e.nzDisabled)("ant-menu-submenu-open",!e.isMenuInsideDropDown&&e.nzOpen)("ant-menu-submenu-selected",!e.isMenuInsideDropDown&&e.isSelected)("ant-menu-submenu-vertical",!e.isMenuInsideDropDown&&e.mode==="vertical")("ant-menu-submenu-horizontal",!e.isMenuInsideDropDown&&e.mode==="horizontal")("ant-menu-submenu-inline",!e.isMenuInsideDropDown&&e.mode==="inline")("ant-menu-submenu-active",!e.isMenuInsideDropDown&&e.isActive)("ant-menu-submenu-rtl",e.dir==="rtl")},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled",nzPlacement:"nzPlacement"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],standalone:!0,features:[q([Me]),E,T],attrs:rn,ngContentSelectors:mn,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(t,e){if(t&1&&(Q(pn),S(0,"div",0,1),w("subMenuMouseState",function(l){return e.setMouseEnterState(l)})("toggleSubMenu",function(){return e.toggleSubMenu()}),z(2,ln,1,0,"ng-content",2),C(),z(3,an,1,6,"div",3)(4,dn,1,5,"ng-template",null,4,G)(6,cn,1,0,"ng-template",null,5,G)),t&2){let o=R(5);d("nzIcon",e.nzIcon)("nzTitle",e.nzTitle)("mode",e.mode)("nzDisabled",e.nzDisabled)("isMenuInsideDropDown",e.isMenuInsideDropDown)("paddingLeft",e.nzPaddingLeft||e.inlinePaddingLeft),h(2),d("ngIf",!e.nzTitle),h(),d("ngIf",e.mode==="inline")("ngIfElse",o)}},dependencies:[qe,vn,U,X,bn,Pe,Ee,K],encapsulation:2,changeDetection:0});let s=i;return f([M()],s.prototype,"nzOpen",void 0),f([M()],s.prototype,"nzDisabled",void 0),s})();function Cn(){let s=L(N,{skipSelf:!0,optional:!0}),i=L(We);return s??i}function In(){return L(b,{skipSelf:!0,optional:!0})??!1}var ut=(()=>{let i=class i{setInlineCollapsed(n){this.nzInlineCollapsed=n,this.inlineCollapsed$.next(n)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(n=>n.nzOpen),this.listOfNzSubMenuComponent.forEach(n=>n.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(n=>n.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}constructor(n,t,e,o){this.nzMenuService=n,this.isMenuInsideDropDown=t,this.cdr=e,this.directionality=o,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new P,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new D(this.nzInlineCollapsed),this.mode$=new D(this.nzMode),this.destroy$=new p,this.listOfOpenedNzSubMenuComponent=[]}ngOnInit(){F([this.inlineCollapsed$,this.mode$]).pipe(u(this.destroy$)).subscribe(([n,t])=>{this.actualMode=n?"vertical":t,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe(u(this.destroy$)).subscribe(n=>{this.nzClick.emit(n),this.nzSelectable&&!n.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(t=>t.setSelectedState(t===n))}),this.dir=this.directionality.value,this.directionality.change?.pipe(u(this.destroy$)).subscribe(n=>{this.dir=n,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe(u(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(n){let{nzInlineCollapsed:t,nzInlineIndent:e,nzTheme:o,nzMode:l}=n;t&&this.inlineCollapsed$.next(this.nzInlineCollapsed),e&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),o&&this.nzMenuService.setTheme(this.nzTheme),l&&(this.mode$.next(this.nzMode),!n.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach($=>$.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}};i.\u0275fac=function(t){return new(t||i)(a(N),a(b),a(H),a(k,8))},i.\u0275dir=ye({type:i,selectors:[["","nz-menu",""]],contentQueries:function(t,e,o){if(t&1&&(j(o,Ve,5),j(o,Ge,5)),t&2){let l;I(l=y())&&(e.listOfNzMenuItemDirective=l),I(l=y())&&(e.listOfNzSubMenuComponent=l)}},hostVars:34,hostBindings:function(t,e){t&2&&v("ant-dropdown-menu",e.isMenuInsideDropDown)("ant-dropdown-menu-root",e.isMenuInsideDropDown)("ant-dropdown-menu-light",e.isMenuInsideDropDown&&e.nzTheme==="light")("ant-dropdown-menu-dark",e.isMenuInsideDropDown&&e.nzTheme==="dark")("ant-dropdown-menu-vertical",e.isMenuInsideDropDown&&e.actualMode==="vertical")("ant-dropdown-menu-horizontal",e.isMenuInsideDropDown&&e.actualMode==="horizontal")("ant-dropdown-menu-inline",e.isMenuInsideDropDown&&e.actualMode==="inline")("ant-dropdown-menu-inline-collapsed",e.isMenuInsideDropDown&&e.nzInlineCollapsed)("ant-menu",!e.isMenuInsideDropDown)("ant-menu-root",!e.isMenuInsideDropDown)("ant-menu-light",!e.isMenuInsideDropDown&&e.nzTheme==="light")("ant-menu-dark",!e.isMenuInsideDropDown&&e.nzTheme==="dark")("ant-menu-vertical",!e.isMenuInsideDropDown&&e.actualMode==="vertical")("ant-menu-horizontal",!e.isMenuInsideDropDown&&e.actualMode==="horizontal")("ant-menu-inline",!e.isMenuInsideDropDown&&e.actualMode==="inline")("ant-menu-inline-collapsed",!e.isMenuInsideDropDown&&e.nzInlineCollapsed)("ant-menu-rtl",e.dir==="rtl")},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],standalone:!0,features:[q([{provide:We,useClass:N},{provide:N,useFactory:Cn},{provide:b,useFactory:In}]),E]});let s=i;return f([M()],s.prototype,"nzInlineCollapsed",void 0),f([M()],s.prototype,"nzSelectable",void 0),s})();function yn(){return L(b,{optional:!0,skipSelf:!0})??!1}var On=(()=>{let i=class i{constructor(n,t,e){this.elementRef=n,this.renderer=t,this.isMenuInsideDropDown=e;let o=this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group";this.renderer.addClass(n.nativeElement,o)}ngAfterViewInit(){let n=this.titleElement.nativeElement.nextElementSibling;if(n){let t=this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list";this.renderer.addClass(n,t)}}};i.\u0275fac=function(t){return new(t||i)(a(B),a(re),a(b))},i.\u0275cmp=O({type:i,selectors:[["","nz-menu-group",""]],viewQuery:function(t,e){if(t&1&&pe(hn,5),t&2){let o;I(o=y())&&(e.titleElement=o.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],standalone:!0,features:[q([{provide:b,useFactory:yn}]),T],attrs:fn,ngContentSelectors:Dn,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(t,e){t&1&&(Q(Mn),S(0,"div",null,0),z(2,zn,2,1,"ng-container",1)(3,gn,1,0,"ng-content",2),C(),_(4)),t&2&&(v("ant-menu-item-group-title",!e.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",e.isMenuInsideDropDown),h(2),d("nzStringTemplateOutlet",e.nzTitle),h(),d("ngIf",!e.nzTitle))},dependencies:[ge,ze,U],encapsulation:2,changeDetection:0});let s=i;return s})();var dt=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=Ie({type:i}),i.\u0275inj=Ce({imports:[Ge,On,qe]});let s=i;return s})();export{b as a,N as b,Ve as c,Ge as d,ut as e,dt as f};

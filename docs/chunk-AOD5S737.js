import{Dc as oe,Na as Re,Qa as Te,Wb as $e,Xb as S,Yb as F,Zb as Ue,_b as ze,ea as _e,eb as H,fa as Ie,fc as z,gb as Y,ha as I,hb as ue,ia as Me,ib as Pe,jb as ke,la as N,ma as T,mb as m,na as k,ob as xe,pa as Be,pb as Ne,ra as Le,sa as M,ta as V,ua as Oe,ub as $}from"./chunk-JEXKB6JL.js";var qe=null;function ae(){return qe}function Bn(e){qe??=e}var je=class{},we=new N(""),Ae=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=I({token:t,factory:()=>k(rt),providedIn:"platform"});let e=t;return e})(),Ln=new N(""),rt=(()=>{let t=class t extends Ae{constructor(){super(),this._doc=k(we),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ae().getBaseHref(this._doc)}onPopState(n){let i=ae().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=ae().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,r){this._history.pushState(n,i,r)}replaceState(n,i,r){this._history.replaceState(n,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=I({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function ye(e,t){if(e.length==0)return t;if(t.length==0)return e;let s=0;return e.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?e+t.substring(1):s==1?e+t:e+"/"+t}function Ge(e){let t=e.match(/#|\?|$/),s=t&&t.index||e.length,n=s-(e[s-1]==="/"?1:0);return e.slice(0,n)+e.slice(s)}function L(e){return e&&e[0]!=="?"?"?"+e:e}var re=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=I({token:t,factory:()=>k(st),providedIn:"root"});let e=t;return e})(),Je=new N(""),st=(()=>{let t=class t extends re{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??k(we).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return ye(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+L(this._platformLocation.search),r=this._platformLocation.hash;return r&&n?`${i}${r}`:i}pushState(n,i,r,u){let o=this.prepareExternalUrl(r+L(u));this._platformLocation.pushState(n,i,o)}replaceState(n,i,r,u){let o=this.prepareExternalUrl(r+L(u));this._platformLocation.replaceState(n,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(i){return new(i||t)(T(Ae),T(Je,8))},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),On=(()=>{let t=class t extends re{constructor(n,i){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(n){let i=ye(this._baseHref,n);return i.length>0?"#"+i:i}pushState(n,i,r,u){let o=this.prepareExternalUrl(r+L(u));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(n,i,o)}replaceState(n,i,r,u){let o=this.prepareExternalUrl(r+L(u));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(n,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(i){return new(i||t)(T(Ae),T(Je,8))},t.\u0275prov=I({token:t,factory:t.\u0275fac});let e=t;return e})(),ut=(()=>{let t=class t{constructor(n){this._subject=new Ne,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=ct(Ge(Ve(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+L(i))}normalize(n){return t.stripTrailingSlash(at(this._basePath,Ve(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",r=null){this._locationStrategy.pushState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+L(i)),r)}replaceState(n,i="",r=null){this._locationStrategy.replaceState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+L(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(r=>r(n,i))}subscribe(n,i,r){return this._subject.subscribe({next:n,error:i,complete:r})}};t.normalizeQueryParams=L,t.joinWithSlash=ye,t.stripTrailingSlash=Ge,t.\u0275fac=function(i){return new(i||t)(T(re))},t.\u0275prov=I({token:t,factory:()=>ot(),providedIn:"root"});let e=t;return e})();function ot(){return new ut(T(re))}function at(e,t){if(!e||!t.startsWith(e))return t;let s=t.substring(e.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function Ve(e){return e.replace(/\/index.html$/,"")}function ct(e){if(new RegExp("^(https?:)?//").test(e)){let[,s]=e.split(/\/\/[^\/]+/);return s}return e}var Qe=function(e){return e[e.Decimal=0]="Decimal",e[e.Percent=1]="Percent",e[e.Currency=2]="Currency",e[e.Scientific=3]="Scientific",e}(Qe||{});var A=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(A||{}),f=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(f||{}),v=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(v||{}),y=function(e){return e[e.Decimal=0]="Decimal",e[e.Group=1]="Group",e[e.List=2]="List",e[e.PercentSign=3]="PercentSign",e[e.PlusSign=4]="PlusSign",e[e.MinusSign=5]="MinusSign",e[e.Exponential=6]="Exponential",e[e.SuperscriptingExponent=7]="SuperscriptingExponent",e[e.PerMille=8]="PerMille",e[e.Infinity=9]="Infinity",e[e.NaN=10]="NaN",e[e.TimeSeparator=11]="TimeSeparator",e[e.CurrencyDecimal=12]="CurrencyDecimal",e[e.CurrencyGroup=13]="CurrencyGroup",e}(y||{});function dt(e){return S(e)[F.LocaleId]}function lt(e,t,s){let n=S(e),i=[n[F.DayPeriodsFormat],n[F.DayPeriodsStandalone]],r=b(i,t);return b(r,s)}function ft(e,t,s){let n=S(e),i=[n[F.DaysFormat],n[F.DaysStandalone]],r=b(i,t);return b(r,s)}function ht(e,t,s){let n=S(e),i=[n[F.MonthsFormat],n[F.MonthsStandalone]],r=b(i,t);return b(r,s)}function Dt(e,t){let n=S(e)[F.Eras];return b(n,t)}function Z(e,t){let s=S(e);return b(s[F.DateFormat],t)}function W(e,t){let s=S(e);return b(s[F.TimeFormat],t)}function K(e,t){let n=S(e)[F.DateTimeFormat];return b(n,t)}function O(e,t){let s=S(e),n=s[F.NumberSymbols][t];if(typeof n>"u"){if(t===y.CurrencyDecimal)return s[F.NumberSymbols][y.Decimal];if(t===y.CurrencyGroup)return s[F.NumberSymbols][y.Group]}return n}function gt(e,t){return S(e)[F.NumberFormats][t]}function et(e){if(!e[F.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[F.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function pt(e){let t=S(e);return et(t),(t[F.ExtraData][2]||[]).map(n=>typeof n=="string"?ce(n):[ce(n[0]),ce(n[1])])}function mt(e,t,s){let n=S(e);et(n);let i=[n[F.ExtraData][0],n[F.ExtraData][1]],r=b(i,t)||[];return b(r,s)||[]}function b(e,t){for(let s=t;s>-1;s--)if(typeof e[s]<"u")return e[s];throw new Error("Locale data API: locale data undefined")}function ce(e){let[t,s]=e.split(":");return{hours:+t,minutes:+s}}var Ft=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,X={},Ct=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,R=function(e){return e[e.Short=0]="Short",e[e.ShortGMT=1]="ShortGMT",e[e.Long=2]="Long",e[e.Extended=3]="Extended",e}(R||{}),d=function(e){return e[e.FullYear=0]="FullYear",e[e.Month=1]="Month",e[e.Date=2]="Date",e[e.Hours=3]="Hours",e[e.Minutes=4]="Minutes",e[e.Seconds=5]="Seconds",e[e.FractionalSeconds=6]="FractionalSeconds",e[e.Day=7]="Day",e}(d||{}),c=function(e){return e[e.DayPeriods=0]="DayPeriods",e[e.Days=1]="Days",e[e.Months=2]="Months",e[e.Eras=3]="Eras",e}(c||{});function Et(e,t,s,n){let i=Mt(e);t=B(s,t)||t;let u=[],o;for(;t;)if(o=Ct.exec(t),o){u=u.concat(o.slice(1));let g=u.pop();if(!g)break;t=g}else{u.push(t);break}let l=i.getTimezoneOffset();n&&(l=nt(n,l),i=It(i,n,!0));let D="";return u.forEach(g=>{let a=bt(g);D+=a?a(i,s,l):g==="''"?"'":g.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),D}function te(e,t,s){let n=new Date(0);return n.setFullYear(e,t,s),n.setHours(0,0,0),n}function B(e,t){let s=dt(e);if(X[s]??={},X[s][t])return X[s][t];let n="";switch(t){case"shortDate":n=Z(e,v.Short);break;case"mediumDate":n=Z(e,v.Medium);break;case"longDate":n=Z(e,v.Long);break;case"fullDate":n=Z(e,v.Full);break;case"shortTime":n=W(e,v.Short);break;case"mediumTime":n=W(e,v.Medium);break;case"longTime":n=W(e,v.Long);break;case"fullTime":n=W(e,v.Full);break;case"short":let i=B(e,"shortTime"),r=B(e,"shortDate");n=q(K(e,v.Short),[i,r]);break;case"medium":let u=B(e,"mediumTime"),o=B(e,"mediumDate");n=q(K(e,v.Medium),[u,o]);break;case"long":let l=B(e,"longTime"),D=B(e,"longDate");n=q(K(e,v.Long),[l,D]);break;case"full":let g=B(e,"fullTime"),a=B(e,"fullDate");n=q(K(e,v.Full),[g,a]);break}return n&&(X[s][t]=n),n}function q(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,function(s,n){return t!=null&&n in t?t[n]:s})),e}function _(e,t,s="-",n,i){let r="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,r=s));let u=String(e);for(;u.length<t;)u="0"+u;return n&&(u=u.slice(u.length-t)),r+u}function wt(e,t){return _(e,3).substring(0,t)}function C(e,t,s=0,n=!1,i=!1){return function(r,u){let o=At(e,r);if((s>0||o>-s)&&(o+=s),e===d.Hours)o===0&&s===-12&&(o=12);else if(e===d.FractionalSeconds)return wt(o,t);let l=O(u,y.MinusSign);return _(o,t,l,n,i)}}function At(e,t){switch(e){case d.FullYear:return t.getFullYear();case d.Month:return t.getMonth();case d.Date:return t.getDate();case d.Hours:return t.getHours();case d.Minutes:return t.getMinutes();case d.Seconds:return t.getSeconds();case d.FractionalSeconds:return t.getMilliseconds();case d.Day:return t.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function h(e,t,s=A.Format,n=!1){return function(i,r){return yt(i,r,e,t,s,n)}}function yt(e,t,s,n,i,r){switch(s){case c.Months:return ht(t,i,n)[e.getMonth()];case c.Days:return ft(t,i,n)[e.getDay()];case c.DayPeriods:let u=e.getHours(),o=e.getMinutes();if(r){let D=pt(t),g=mt(t,i,n),a=D.findIndex(E=>{if(Array.isArray(E)){let[p,w]=E,U=u>=p.hours&&o>=p.minutes,P=u<w.hours||u===w.hours&&o<w.minutes;if(p.hours<w.hours){if(U&&P)return!0}else if(U||P)return!0}else if(E.hours===u&&E.minutes===o)return!0;return!1});if(a!==-1)return g[a]}return lt(t,i,n)[u<12?0:1];case c.Eras:return Dt(t,n)[e.getFullYear()<=0?0:1];default:let l=s;throw new Error(`unexpected translation type ${l}`)}}function J(e){return function(t,s,n){let i=-1*n,r=O(s,y.MinusSign),u=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case R.Short:return(i>=0?"+":"")+_(u,2,r)+_(Math.abs(i%60),2,r);case R.ShortGMT:return"GMT"+(i>=0?"+":"")+_(u,1,r);case R.Long:return"GMT"+(i>=0?"+":"")+_(u,2,r)+":"+_(Math.abs(i%60),2,r);case R.Extended:return n===0?"Z":(i>=0?"+":"")+_(u,2,r)+":"+_(Math.abs(i%60),2,r);default:throw new Error(`Unknown zone width "${e}"`)}}}var St=0,ee=4;function vt(e){let t=te(e,St,1).getDay();return te(e,0,1+(t<=ee?ee:ee+7)-t)}function tt(e){let t=e.getDay(),s=t===0?-3:ee-t;return te(e.getFullYear(),e.getMonth(),e.getDate()+s)}function de(e,t=!1){return function(s,n){let i;if(t){let r=new Date(s.getFullYear(),s.getMonth(),1).getDay()-1,u=s.getDate();i=1+Math.floor((u+r)/7)}else{let r=tt(s),u=vt(r.getFullYear()),o=r.getTime()-u.getTime();i=1+Math.round(o/6048e5)}return _(i,e,O(n,y.MinusSign))}}function Q(e,t=!1){return function(s,n){let r=tt(s).getFullYear();return _(r,e,O(n,y.MinusSign),t)}}var le={};function bt(e){if(le[e])return le[e];let t;switch(e){case"G":case"GG":case"GGG":t=h(c.Eras,f.Abbreviated);break;case"GGGG":t=h(c.Eras,f.Wide);break;case"GGGGG":t=h(c.Eras,f.Narrow);break;case"y":t=C(d.FullYear,1,0,!1,!0);break;case"yy":t=C(d.FullYear,2,0,!0,!0);break;case"yyy":t=C(d.FullYear,3,0,!1,!0);break;case"yyyy":t=C(d.FullYear,4,0,!1,!0);break;case"Y":t=Q(1);break;case"YY":t=Q(2,!0);break;case"YYY":t=Q(3);break;case"YYYY":t=Q(4);break;case"M":case"L":t=C(d.Month,1,1);break;case"MM":case"LL":t=C(d.Month,2,1);break;case"MMM":t=h(c.Months,f.Abbreviated);break;case"MMMM":t=h(c.Months,f.Wide);break;case"MMMMM":t=h(c.Months,f.Narrow);break;case"LLL":t=h(c.Months,f.Abbreviated,A.Standalone);break;case"LLLL":t=h(c.Months,f.Wide,A.Standalone);break;case"LLLLL":t=h(c.Months,f.Narrow,A.Standalone);break;case"w":t=de(1);break;case"ww":t=de(2);break;case"W":t=de(1,!0);break;case"d":t=C(d.Date,1);break;case"dd":t=C(d.Date,2);break;case"c":case"cc":t=C(d.Day,1);break;case"ccc":t=h(c.Days,f.Abbreviated,A.Standalone);break;case"cccc":t=h(c.Days,f.Wide,A.Standalone);break;case"ccccc":t=h(c.Days,f.Narrow,A.Standalone);break;case"cccccc":t=h(c.Days,f.Short,A.Standalone);break;case"E":case"EE":case"EEE":t=h(c.Days,f.Abbreviated);break;case"EEEE":t=h(c.Days,f.Wide);break;case"EEEEE":t=h(c.Days,f.Narrow);break;case"EEEEEE":t=h(c.Days,f.Short);break;case"a":case"aa":case"aaa":t=h(c.DayPeriods,f.Abbreviated);break;case"aaaa":t=h(c.DayPeriods,f.Wide);break;case"aaaaa":t=h(c.DayPeriods,f.Narrow);break;case"b":case"bb":case"bbb":t=h(c.DayPeriods,f.Abbreviated,A.Standalone,!0);break;case"bbbb":t=h(c.DayPeriods,f.Wide,A.Standalone,!0);break;case"bbbbb":t=h(c.DayPeriods,f.Narrow,A.Standalone,!0);break;case"B":case"BB":case"BBB":t=h(c.DayPeriods,f.Abbreviated,A.Format,!0);break;case"BBBB":t=h(c.DayPeriods,f.Wide,A.Format,!0);break;case"BBBBB":t=h(c.DayPeriods,f.Narrow,A.Format,!0);break;case"h":t=C(d.Hours,1,-12);break;case"hh":t=C(d.Hours,2,-12);break;case"H":t=C(d.Hours,1);break;case"HH":t=C(d.Hours,2);break;case"m":t=C(d.Minutes,1);break;case"mm":t=C(d.Minutes,2);break;case"s":t=C(d.Seconds,1);break;case"ss":t=C(d.Seconds,2);break;case"S":t=C(d.FractionalSeconds,1);break;case"SS":t=C(d.FractionalSeconds,2);break;case"SSS":t=C(d.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":t=J(R.Short);break;case"ZZZZZ":t=J(R.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=J(R.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":t=J(R.Long);break;default:return null}return le[e]=t,t}function nt(e,t){e=e.replace(/:/g,"");let s=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(s)?t:s}function _t(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),e}function It(e,t,s){let n=s?-1:1,i=e.getTimezoneOffset(),r=nt(t,i);return _t(e,n*(r-i))}function Mt(e){if(He(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,r=1,u=1]=e.split("-").map(o=>+o);return te(i,r-1,u)}let s=parseFloat(e);if(!isNaN(e-s))return new Date(s);let n;if(n=e.match(Ft))return Bt(n)}let t=new Date(e);if(!He(t))throw new Error(`Unable to convert "${e}" into a date`);return t}function Bt(e){let t=new Date(0),s=0,n=0,i=e[8]?t.setUTCFullYear:t.setFullYear,r=e[8]?t.setUTCHours:t.setHours;e[9]&&(s=Number(e[9]+e[10]),n=Number(e[9]+e[11])),i.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));let u=Number(e[4]||0)-s,o=Number(e[5]||0)-n,l=Number(e[6]||0),D=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return r.call(t,u,o,l,D),t}function He(e){return e instanceof Date&&!isNaN(e.valueOf())}var Lt=/^(\d+)?\.((\d+)(-(\d+))?)?$/,Ye=22,ne=".",j="0",Ot=";",Rt=",",fe="#";function Tt(e,t,s,n,i,r,u=!1){let o="",l=!1;if(!isFinite(e))o=O(s,y.Infinity);else{let D=Nt(e);u&&(D=xt(D));let g=t.minInt,a=t.minFrac,E=t.maxFrac;if(r){let x=r.match(Lt);if(x===null)throw new Error(`${r} is not a valid digit info`);let ve=x[1],se=x[3],be=x[5];ve!=null&&(g=he(ve)),se!=null&&(a=he(se)),be!=null?E=he(be):se!=null&&a>E&&(E=a)}$t(D,a,E);let p=D.digits,w=D.integerLen,U=D.exponent,P=[];for(l=p.every(x=>!x);w<g;w++)p.unshift(0);for(;w<0;w++)p.unshift(0);w>0?P=p.splice(w,p.length):(P=p,p=[0]);let G=[];for(p.length>=t.lgSize&&G.unshift(p.splice(-t.lgSize,p.length).join(""));p.length>t.gSize;)G.unshift(p.splice(-t.gSize,p.length).join(""));p.length&&G.unshift(p.join("")),o=G.join(O(s,n)),P.length&&(o+=O(s,i)+P.join("")),U&&(o+=O(s,y.Exponential)+"+"+U)}return e<0&&!l?o=t.negPre+o+t.negSuf:o=t.posPre+o+t.posSuf,o}function Pt(e,t,s){let n=gt(t,Qe.Decimal),i=kt(n,O(t,y.MinusSign));return Tt(e,i,t,y.Group,y.Decimal,s)}function kt(e,t="-"){let s={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=e.split(Ot),i=n[0],r=n[1],u=i.indexOf(ne)!==-1?i.split(ne):[i.substring(0,i.lastIndexOf(j)+1),i.substring(i.lastIndexOf(j)+1)],o=u[0],l=u[1]||"";s.posPre=o.substring(0,o.indexOf(fe));for(let g=0;g<l.length;g++){let a=l.charAt(g);a===j?s.minFrac=s.maxFrac=g+1:a===fe?s.maxFrac=g+1:s.posSuf+=a}let D=o.split(Rt);if(s.gSize=D[1]?D[1].length:0,s.lgSize=D[2]||D[1]?(D[2]||D[1]).length:0,r){let g=i.length-s.posPre.length-s.posSuf.length,a=r.indexOf(fe);s.negPre=r.substring(0,a).replace(/'/g,""),s.negSuf=r.slice(a+g).replace(/'/g,"")}else s.negPre=t+s.posPre,s.negSuf=s.posSuf;return s}function xt(e){if(e.digits[0]===0)return e;let t=e.digits.length-e.integerLen;return e.exponent?e.exponent+=2:(t===0?e.digits.push(0,0):t===1&&e.digits.push(0),e.integerLen+=2),e}function Nt(e){let t=Math.abs(e)+"",s=0,n,i,r,u,o;for((i=t.indexOf(ne))>-1&&(t=t.replace(ne,"")),(r=t.search(/e/i))>0?(i<0&&(i=r),i+=+t.slice(r+1),t=t.substring(0,r)):i<0&&(i=t.length),r=0;t.charAt(r)===j;r++);if(r===(o=t.length))n=[0],i=1;else{for(o--;t.charAt(o)===j;)o--;for(i-=r,n=[],u=0;r<=o;r++,u++)n[u]=Number(t.charAt(r))}return i>Ye&&(n=n.splice(0,Ye-1),s=i-1,i=1),{digits:n,exponent:s,integerLen:i}}function $t(e,t,s){if(t>s)throw new Error(`The minimum number of digits after fraction (${t}) is higher than the maximum (${s}).`);let n=e.digits,i=n.length-e.integerLen,r=Math.min(Math.max(t,i),s),u=r+e.integerLen,o=n[u];if(u>0){n.splice(Math.max(e.integerLen,u));for(let a=u;a<n.length;a++)n[a]=0}else{i=Math.max(0,i),e.integerLen=1,n.length=Math.max(1,u=r+1),n[0]=0;for(let a=1;a<u;a++)n[a]=0}if(o>=5)if(u-1<0){for(let a=0;a>u;a--)n.unshift(0),e.integerLen++;n.unshift(1),e.integerLen++}else n[u-1]++;for(;i<Math.max(0,r);i++)n.push(0);let l=r!==0,D=t+e.integerLen,g=n.reduceRight(function(a,E,p,w){return E=E+a,w[p]=E<10?E:E-10,l&&(w[p]===0&&p>=D?w.pop():l=!1),E>=10?1:0},0);g&&(n.unshift(g),e.integerLen++)}function he(e){let t=parseInt(e);if(isNaN(t))throw new Error("Invalid integer literal when parsing "+e);return t}function Rn(e,t,s){return $e(e,t,s)}function Tn(e,t){t=encodeURIComponent(t);for(let s of e.split(";")){let n=s.indexOf("="),[i,r]=n==-1?[s,""]:[s.slice(0,n),s.slice(n+1)];if(i.trim()===t)return decodeURIComponent(r)}return null}var De=/\s+/,Ze=[],Pn=(()=>{let t=class t{constructor(n,i){this._ngEl=n,this._renderer=i,this.initialClasses=Ze,this.stateMap=new Map}set klass(n){this.initialClasses=n!=null?n.trim().split(De):Ze}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(De):n}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let i of n)this._updateState(i,!0);else if(n!=null)for(let i of Object.keys(n))this._updateState(i,!!n[i]);this._applyStateDiff()}_updateState(n,i){let r=this.stateMap.get(n);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(n,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let i=n[0],r=n[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(n,i){n=n.trim(),n.length>0&&n.split(De).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};t.\u0275fac=function(i){return new(i||t)(m(H),m(Y))},t.\u0275dir=M({type:t,selectors:[["","ngClass",""]],inputs:{klass:[Be.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let e=t;return e})();var ge=class{constructor(t,s,n,i){this.$implicit=t,this.ngForOf=s,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},kn=(()=>{let t=class t{set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}constructor(n,i,r){this._viewContainer=n,this._template=i,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let n=this._ngForOf;if(!this._differ&&n)if(0)try{}catch{}else this._differ=this._differs.find(n).create(this.ngForTrackBy)}if(this._differ){let n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){let i=this._viewContainer;n.forEachOperation((r,u,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new ge(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(u===null?void 0:u);else if(u!==null){let l=i.get(u);i.move(l,o),We(l,r)}});for(let r=0,u=i.length;r<u;r++){let l=i.get(r).context;l.index=r,l.count=u,l.ngForOf=this._ngForOf}n.forEachIdentityChange(r=>{let u=i.get(r.currentIndex);We(u,r)})}static ngTemplateContextGuard(n,i){return!0}};t.\u0275fac=function(i){return new(i||t)(m($),m(z),m(Pe))},t.\u0275dir=M({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let e=t;return e})();function We(e,t){e.context.$implicit=t.item}var xn=(()=>{let t=class t{constructor(n,i){this._viewContainer=n,this._context=new pe,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){Ke("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){Ke("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,i){return!0}};t.\u0275fac=function(i){return new(i||t)(m($),m(z))},t.\u0275dir=M({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let e=t;return e})(),pe=class{constructor(){this.$implicit=null,this.ngIf=null}};function Ke(e,t){if(!!!(!t||t.createEmbeddedView))throw new Error(`${e} must be a TemplateRef, but received '${Ie(t)}'.`)}var Ut=!0,ie=class{constructor(t,s){this._viewContainerRef=t,this._templateRef=s,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(t){t&&!this._created?this.create():!t&&this._created&&this.destroy()}},it=(()=>{let t=class t{constructor(){this._defaultViews=[],this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(n){this._ngSwitch=n,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(n){this._defaultViews.push(n)}_matchCase(n){let i=Ut?n===this._ngSwitch:n==this._ngSwitch;return this._lastCasesMatched||=i,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),i}_updateDefaultCases(n){if(this._defaultViews.length>0&&n!==this._defaultUsed){this._defaultUsed=n;for(let i of this._defaultViews)i.enforceState(n)}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=M({type:t,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"},standalone:!0});let e=t;return e})(),Nn=(()=>{let t=class t{constructor(n,i,r){this.ngSwitch=r,r._addCase(),this._view=new ie(n,i)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}};t.\u0275fac=function(i){return new(i||t)(m($),m(z),m(it,9))},t.\u0275dir=M({type:t,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"},standalone:!0});let e=t;return e})(),$n=(()=>{let t=class t{constructor(n,i,r){r._addDefault(new ie(n,i))}};t.\u0275fac=function(i){return new(i||t)(m($),m(z),m(it,9))},t.\u0275dir=M({type:t,selectors:[["","ngSwitchDefault",""]],standalone:!0});let e=t;return e})();var Un=(()=>{let t=class t{constructor(n,i,r){this._ngEl=n,this._differs=i,this._renderer=r,this._ngStyle=null,this._differ=null}set ngStyle(n){this._ngStyle=n,!this._differ&&n&&(this._differ=this._differs.find(n).create())}ngDoCheck(){if(this._differ){let n=this._differ.diff(this._ngStyle);n&&this._applyChanges(n)}}_setStyle(n,i){let[r,u]=n.split("."),o=r.indexOf("-")===-1?void 0:Te.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,u?`${i}${u}`:i,o):this._renderer.removeStyle(this._ngEl.nativeElement,r,o)}_applyChanges(n){n.forEachRemovedItem(i=>this._setStyle(i.key,null)),n.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),n.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}};t.\u0275fac=function(i){return new(i||t)(m(H),m(ke),m(Y))},t.\u0275dir=M({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0});let e=t;return e})(),zn=(()=>{let t=class t{constructor(n){this._viewContainerRef=n,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(n){if(this._shouldRecreateView(n)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(n){return!!n.ngTemplateOutlet||!!n.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(n,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(n,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}};t.\u0275fac=function(i){return new(i||t)(m($))},t.\u0275dir=M({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[Oe]});let e=t;return e})();function Se(e,t){return new _e(2100,!1)}var me=class{createSubscription(t,s){return ue(()=>t.subscribe({next:s,error:n=>{throw n}}))}dispose(t){ue(()=>t.unsubscribe())}},Fe=class{createSubscription(t,s){return t.then(s,n=>{throw n})}dispose(t){}},zt=new Fe,jt=new me,jn=(()=>{let t=class t{constructor(n){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=n}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(n){return this._obj?n!==this._obj?(this._dispose(),this.transform(n)):this._latestValue:(n&&this._subscribe(n),this._latestValue)}_subscribe(n){this._obj=n,this._strategy=this._selectStrategy(n),this._subscription=this._strategy.createSubscription(n,i=>this._updateLatestValue(n,i))}_selectStrategy(n){if(Ue(n))return zt;if(ze(n))return jt;throw Se(t,n)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(n,i){n===this._obj&&(this._latestValue=i,this._ref.markForCheck())}};t.\u0275fac=function(i){return new(i||t)(m(xe,16))},t.\u0275pipe=V({name:"async",type:t,pure:!1,standalone:!0});let e=t;return e})();var Gt="mediumDate",Vt=new N(""),Ht=new N(""),Gn=(()=>{let t=class t{constructor(n,i,r){this.locale=n,this.defaultTimezone=i,this.defaultOptions=r}transform(n,i,r,u){if(n==null||n===""||n!==n)return null;try{let o=i??this.defaultOptions?.dateFormat??Gt,l=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Et(n,o,u||this.locale,l)}catch(o){throw Se(t,o.message)}}};t.\u0275fac=function(i){return new(i||t)(m(oe,16),m(Vt,24),m(Ht,24))},t.\u0275pipe=V({name:"date",type:t,pure:!0,standalone:!0});let e=t;return e})();var Vn=(()=>{let t=class t{constructor(n){this._locale=n}transform(n,i,r){if(!Yt(n))return null;r||=this._locale;try{let u=Zt(n);return Pt(u,r,i)}catch(u){throw Se(t,u.message)}}};t.\u0275fac=function(i){return new(i||t)(m(oe,16))},t.\u0275pipe=V({name:"number",type:t,pure:!0,standalone:!0});let e=t;return e})();function Yt(e){return!(e==null||e===""||e!==e)}function Zt(e){if(typeof e=="string"&&!isNaN(Number(e)-parseFloat(e)))return Number(e);if(typeof e!="number")throw new Error(`${e} is not a number`);return e}var Hn=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=Le({type:t}),t.\u0275inj=Me({});let e=t;return e})(),Wt="browser",Kt="server";function Xt(e){return e===Wt}function Yn(e){return e===Kt}var Zn=(()=>{let t=class t{};t.\u0275prov=I({token:t,providedIn:"root",factory:()=>Xt(k(Re))?new Ce(k(we),window):new Ee});let e=t;return e})(),Ce=class{constructor(t,s){this.document=t,this.window=s,this.offset=()=>[0,0]}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t){this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){let s=qt(this.document,t);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(t){this.window.history.scrollRestoration=t}scrollToElement(t){let s=t.getBoundingClientRect(),n=s.left+this.window.pageXOffset,i=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(n-r[0],i-r[1])}};function qt(e,t){let s=e.getElementById(t)||e.getElementsByName(t)[0];if(s)return s;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let n=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let r=i.shadowRoot;if(r){let u=r.getElementById(t)||r.querySelector(`[name="${t}"]`);if(u)return u}i=n.nextNode()}}return null}var Ee=class{setOffset(t){}getScrollPosition(){return[0,0]}scrollToPosition(t){}scrollToAnchor(t){}setHistoryScrollRestoration(t){}},Xe=class{};export{ae as a,Bn as b,je as c,we as d,Ln as e,re as f,st as g,On as h,ut as i,A as j,f as k,lt as l,Et as m,Rn as n,Tn as o,Pn as p,kn as q,xn as r,it as s,Nn as t,$n as u,Un as v,zn as w,jn as x,Gn as y,Vn as z,Hn as A,Wt as B,Xt as C,Yn as D,Zn as E,Xe as F};
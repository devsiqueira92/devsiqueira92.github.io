import{e as c}from"./chunk-NZ27KKE3.js";import{fa as d,ka as a,r as s}from"./chunk-MGW57YGE.js";var n=[{id:"1",name:"Protocolo de joelho",steps:"Erguer o joelho; abaixar o joelho",member:"Bra\xE7o"},{id:"2",name:"Protocolo de ombro",steps:"Erguer o ombro; abaixar o ombro",member:"Bra\xE7o"},{id:"3",name:"Protocolo de bra\xE7o",steps:"Erguer o bra\xE7o; abaixar o bra\xE7o",member:"Bra\xE7o"}];var b=(()=>{let e=class e{constructor(r){this.httpClient=r,this.procedures=n}getList(){return s(this.procedures)}getById(r){let o=this.procedures.find(i=>i.id===r);return s(o)}add(r){let o={procedure:r};o.procedure.id=(this.procedures.length+1).toString(),this.procedures.push(o.procedure)}update(r){let o=this.procedures.findIndex(i=>i.id===r.id);this.procedures[o]=r}};e.\u0275fac=function(o){return new(o||e)(a(c))},e.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();export{b as a};

import{a as k,b as F,c as T,d as P,e as R,f as Q,g as j,h as D}from"./chunk-6D6QBJGA.js";import{$ as L,B as w,D as y,H as _,M as l,N as r,O as o,Q as S,R as M,S as g,X as m,Y as h,Z as E,_ as I,d as C,e as c,ha as q,i as b,ia as N,n as u,o as f,pa as V,s as x,y as s}from"./chunk-YDNS6PF7.js";import"./chunk-RGAUAWUM.js";var O=(()=>{let e=class e{constructor(){this.llmReady=import("./chunk-GO2RBSBA.js").then(i=>(this.llm=new i.ChatLLM7({modelName:"gpt-4.1-2025-04-14",temperature:.8}),this.llm))}askQuestion(i){return c(this.llmReady).pipe(x(n=>c(n.invoke(i))),C(n=>typeof n=="string"?n:n?.content||""))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"any"});let t=e;return t})();function B(t,e){t&1&&(r(0,"div",10),m(1,"Cargando respuesta..."),o())}function G(t,e){if(t&1&&(r(0,"div",10)(1,"strong"),m(2,"Respuesta:"),o(),r(3,"div",11),m(4),o()()),t&2){let d=g();s(4),h(d.answer)}}function H(t,e){if(t&1&&(r(0,"div",12),m(1),o()),t&2){let d=g();s(),h(d.error)}}var ee=(()=>{let e=class e{constructor(i){this.llm7Service=i,this.question="",this.answer="",this.loading=!1,this.error=""}sendQuestion(){this.answer="",this.error="",this.loading=!0,this.llm7Service.askQuestion(this.question).subscribe({next:i=>{this.answer=i,this.loading=!1},error:i=>{this.error="Error: "+(i?.message||i),this.loading=!1}})}};e.\u0275fac=function(n){return new(n||e)(w(O))},e.\u0275cmp=y({type:e,selectors:[["app-llm7-chat"]],decls:16,vars:5,consts:[["chatForm","ngForm"],[1,"llm7-chat-container"],["routerLink","/home",1,"btn","btn-primary","btn-sm",2,"position","absolute","left","2rem","top","2rem"],[3,"ngSubmit"],[1,"mb-3"],["for","question",1,"form-label"],["id","question","name","question","rows","3","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary",3,"disabled"],["class","mt-3",4,"ngIf"],["class","alert alert-danger mt-3",4,"ngIf"],[1,"mt-3"],[1,"alert","alert-success","mt-2"],[1,"alert","alert-danger","mt-3"]],template:function(n,a){if(n&1){let v=S();r(0,"div",1)(1,"a",2),m(2,"Home"),o(),r(3,"h2"),m(4,"Chat LLM7"),o(),r(5,"form",3,0),M("ngSubmit",function(){return u(v),f(a.sendQuestion())}),r(7,"div",4)(8,"label",5),m(9,"Pregunta:"),o(),r(10,"textarea",6),L("ngModelChange",function(p){return u(v),I(a.question,p)||(a.question=p),f(p)}),o()(),r(11,"button",7),m(12,"Enviar"),o()(),_(13,B,2,0,"div",8)(14,G,5,1,"div",8)(15,H,2,1,"div",9),o()}n&2&&(s(10),E("ngModel",a.question),s(),l("disabled",a.loading||!a.question),s(2),l("ngIf",a.loading),s(),l("ngIf",a.answer&&!a.loading),s(),l("ngIf",a.error))},dependencies:[N,q,D,Q,k,F,T,j,R,P,V],styles:[".llm7-chat-container[_ngcontent-%COMP%]{max-width:600px;margin:2rem auto;padding:2rem;background:#f8f9fa;border-radius:8px;box-shadow:0 2px 8px #00000014}textarea.form-control[_ngcontent-%COMP%]{resize:vertical}button.btn[_ngcontent-%COMP%]{min-width:120px}"]});let t=e;return t})();export{ee as Llm7ChatComponent};

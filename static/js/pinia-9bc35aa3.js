import{aq as V,g as B,m as D,B as G,P as H,D as C,aw as L,J as $,t as A,r as T,ax as tt,k as et,l as st,n as nt,O as ot,v as ct}from"./@vue-9c35b395.js";var rt=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let J;const R=t=>J=t,q=Symbol();function E(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var k;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(k||(k={}));function bt(){const t=V(!0),n=t.run(()=>B({}));let s=[],e=[];const r=D({install(u){R(r),r._a=u,u.provide(q,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!rt?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return r}const N=()=>{};function F(t,n,s,e=N){t.push(n);const r=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&et()&&st(r),r}function P(t,...n){t.slice().forEach(s=>{s(...n)})}const ut=t=>t();function I(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],r=t[s];E(r)&&E(e)&&t.hasOwnProperty(s)&&!C(e)&&!L(e)?t[s]=I(r,e):t[s]=e}return t}const at=Symbol();function ft(t){return!E(t)||!t.hasOwnProperty(at)}const{assign:v}=Object;function it(t){return!!(C(t)&&t.effect)}function lt(t,n,s,e){const{state:r,actions:u,getters:f}=n,a=s.state.value[t];let g;function b(){a||(s.state.value[t]=r?r():{});const y=ot(s.state.value[t]);return v(y,u,Object.keys(f||{}).reduce((d,m)=>(d[m]=D(ct(()=>{R(s);const _=s._s.get(t);return f[m].call(_,_)})),d),{}))}return g=z(t,b,n,s,e,!0),g}function z(t,n,s={},e,r,u){let f;const a=v({actions:{}},s),g={deep:!0};let b,y,d=[],m=[],_;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),B({});let O;function W(c){let o;b=y=!1,typeof c=="function"?(c(e.state.value[t]),o={type:k.patchFunction,storeId:t,events:_}):(I(e.state.value[t],c),o={type:k.patchObject,payload:c,storeId:t,events:_});const h=O=Symbol();nt().then(()=>{O===h&&(b=!0)}),y=!0,P(d,o,e.state.value[t])}const K=u?function(){const{state:o}=s,h=o?o():{};this.$patch(S=>{v(S,h)})}:N;function M(){f.stop(),d=[],m=[],e._s.delete(t)}function Q(c,o){return function(){R(e);const h=Array.from(arguments),S=[],w=[];function Y(i){S.push(i)}function Z(i){w.push(i)}P(m,{args:h,name:c,store:l,after:Y,onError:Z});let x;try{x=o.apply(this&&this.$id===t?this:l,h)}catch(i){throw P(w,i),i}return x instanceof Promise?x.then(i=>(P(S,i),i)).catch(i=>(P(w,i),Promise.reject(i))):(P(S,x),x)}}const U={_p:e,$id:t,$onAction:F.bind(null,m),$patch:W,$reset:K,$subscribe(c,o={}){const h=F(d,c,o.detached,()=>S()),S=f.run(()=>A(()=>e.state.value[t],w=>{(o.flush==="sync"?y:b)&&c({storeId:t,type:k.direct,events:_},w)},v({},g,o)));return h},$dispose:M},l=T(U);e._s.set(t,l);const X=e._a&&e._a.runWithContext||ut,p=e._e.run(()=>(f=V(),X(()=>f.run(n))));for(const c in p){const o=p[c];if(C(o)&&!it(o)||L(o))u||(j&&ft(o)&&(C(o)?o.value=j[c]:I(o,j[c])),e.state.value[t][c]=o);else if(typeof o=="function"){const h=Q(c,o);p[c]=h,a.actions[c]=o}}return v(l,p),v(H(l),p),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{W(o=>{v(o,c)})}}),e._p.forEach(c=>{v(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),j&&u&&s.hydrate&&s.hydrate(l.$state,j),b=!0,y=!0,l}function vt(t,n,s){let e,r;const u=typeof n=="function";typeof t=="string"?(e=t,r=u?s:n):(r=t,e=t.id);function f(a,g){const b=tt();return a=a||(b?G(q,null):null),a&&R(a),a=J,a._s.has(e)||(u?z(e,n,r,a):lt(e,r,a)),a._s.get(e)}return f.$id=e,f}function yt(t){{t=H(t);const n={};for(const s in t){const e=t[s];(C(e)||L(e))&&(n[s]=$(t,s))}return n}}export{bt as c,vt as d,yt as s};

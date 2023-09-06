import{A as pt,y as dt}from"./@popperjs-38034195.js";var lt="tippy-box",je="tippy-content",vt="tippy-backdrop",Pe="tippy-arrow",ke="tippy-svg-arrow",L={passive:!0,capture:!0},We=function(){return document.body};function re(e,r,i){if(Array.isArray(e)){var s=e[r];return s??(Array.isArray(i)?i[r]:i)}return e}function ce(e,r){var i={}.toString.call(e);return i.indexOf("[object")===0&&i.indexOf(r+"]")>-1}function $e(e,r){return typeof e=="function"?e.apply(void 0,r):e}function Ie(e,r){if(r===0)return e;var i;return function(s){clearTimeout(i),i=setTimeout(function(){e(s)},r)}}function mt(e){return e.split(/\s+/).filter(Boolean)}function I(e){return[].concat(e)}function Re(e,r){e.indexOf(r)===-1&&e.push(r)}function ht(e){return e.filter(function(r,i){return e.indexOf(r)===i})}function gt(e){return e.split("-")[0]}function Y(e){return[].slice.call(e)}function Ue(e){return Object.keys(e).reduce(function(r,i){return e[i]!==void 0&&(r[i]=e[i]),r},{})}function B(){return document.createElement("div")}function K(e){return["Element","Fragment"].some(function(r){return ce(e,r)})}function bt(e){return ce(e,"NodeList")}function yt(e){return ce(e,"MouseEvent")}function Tt(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function At(e){return K(e)?[e]:bt(e)?Y(e):Array.isArray(e)?e:Y(document.querySelectorAll(e))}function ie(e,r){e.forEach(function(i){i&&(i.style.transitionDuration=r+"ms")})}function Ve(e,r){e.forEach(function(i){i&&i.setAttribute("data-state",r)})}function Et(e){var r,i=I(e),s=i[0];return s!=null&&(r=s.ownerDocument)!=null&&r.body?s.ownerDocument:document}function wt(e,r){var i=r.clientX,s=r.clientY;return e.every(function(v){var d=v.popperRect,u=v.popperState,m=v.props,l=m.interactiveBorder,A=gt(u.placement),h=u.modifiersData.offset;if(!h)return!0;var _=A==="bottom"?h.top.y:0,H=A==="top"?h.bottom.y:0,R=A==="right"?h.left.x:0,O=A==="left"?h.right.x:0,F=d.top-s+_>l,G=s-d.bottom-H>l,J=d.left-i+R>l,j=i-d.right-O>l;return F||G||J||j})}function oe(e,r,i){var s=r+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(v){e[s](v,i)})}function Ne(e,r){for(var i=r;i;){var s;if(e.contains(i))return!0;i=i.getRootNode==null||(s=i.getRootNode())==null?void 0:s.host}return!1}var w={isTouch:!1},Be=0;function Ot(){w.isTouch||(w.isTouch=!0,window.performance&&document.addEventListener("mousemove",qe))}function qe(){var e=performance.now();e-Be<20&&(w.isTouch=!1,document.removeEventListener("mousemove",qe)),Be=e}function Dt(){var e=document.activeElement;if(Tt(e)){var r=e._tippy;e.blur&&!r.state.isVisible&&e.blur()}}function Ct(){document.addEventListener("touchstart",Ot,L),window.addEventListener("blur",Dt)}var Lt=typeof window<"u"&&typeof document<"u",St=Lt?!!window.msCrypto:!1,xt={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Mt={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},T=Object.assign({appendTo:We,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},xt,Mt),It=Object.keys(T),Rt=function(r){var i=Object.keys(r);i.forEach(function(s){T[s]=r[s]})};function ze(e){var r=e.plugins||[],i=r.reduce(function(s,v){var d=v.name,u=v.defaultValue;if(d){var m;s[d]=e[d]!==void 0?e[d]:(m=T[d])!=null?m:u}return s},{});return Object.assign({},e,i)}function Ut(e,r){var i=r?Object.keys(ze(Object.assign({},T,{plugins:r}))):It,s=i.reduce(function(v,d){var u=(e.getAttribute("data-tippy-"+d)||"").trim();if(!u)return v;if(d==="content")v[d]=u;else try{v[d]=JSON.parse(u)}catch{v[d]=u}return v},{});return s}function _e(e,r){var i=Object.assign({},r,{content:$e(r.content,[e])},r.ignoreAttributes?{}:Ut(e,r.plugins));return i.aria=Object.assign({},T.aria,i.aria),i.aria={expanded:i.aria.expanded==="auto"?r.interactive:i.aria.expanded,content:i.aria.content==="auto"?r.interactive?null:"describedby":i.aria.content},i}var Vt=function(){return"innerHTML"};function se(e,r){e[Vt()]=r}function He(e){var r=B();return e===!0?r.className=Pe:(r.className=ke,K(e)?r.appendChild(e):se(r,e)),r}function Fe(e,r){K(r.content)?(se(e,""),e.appendChild(r.content)):typeof r.content!="function"&&(r.allowHTML?se(e,r.content):e.textContent=r.content)}function ue(e){var r=e.firstElementChild,i=Y(r.children);return{box:r,content:i.find(function(s){return s.classList.contains(je)}),arrow:i.find(function(s){return s.classList.contains(Pe)||s.classList.contains(ke)}),backdrop:i.find(function(s){return s.classList.contains(vt)})}}function Ye(e){var r=B(),i=B();i.className=lt,i.setAttribute("data-state","hidden"),i.setAttribute("tabindex","-1");var s=B();s.className=je,s.setAttribute("data-state","hidden"),Fe(s,e.props),r.appendChild(i),i.appendChild(s),v(e.props,e.props);function v(d,u){var m=ue(r),l=m.box,A=m.content,h=m.arrow;u.theme?l.setAttribute("data-theme",u.theme):l.removeAttribute("data-theme"),typeof u.animation=="string"?l.setAttribute("data-animation",u.animation):l.removeAttribute("data-animation"),u.inertia?l.setAttribute("data-inertia",""):l.removeAttribute("data-inertia"),l.style.maxWidth=typeof u.maxWidth=="number"?u.maxWidth+"px":u.maxWidth,u.role?l.setAttribute("role",u.role):l.removeAttribute("role"),(d.content!==u.content||d.allowHTML!==u.allowHTML)&&Fe(A,e.props),u.arrow?h?d.arrow!==u.arrow&&(l.removeChild(h),l.appendChild(He(u.arrow))):l.appendChild(He(u.arrow)):h&&l.removeChild(h)}return{popper:r,onUpdate:v}}Ye.$$tippy=!0;var Nt=1,z=[],ae=[];function Bt(e,r){var i=_e(e,Object.assign({},T,ze(Ue(r)))),s,v,d,u=!1,m=!1,l=!1,A=!1,h,_,H,R=[],O=Ie(we,i.interactiveDebounce),F,G=Nt++,J=null,j=ht(i.plugins),Ke={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},t={id:G,reference:e,popper:B(),popperInstance:J,props:i,state:Ke,plugins:j,clearDelayTimeouts:nt,setProps:rt,setContent:it,show:ot,hide:at,hideWithInteractivity:st,enable:et,disable:tt,unmount:ut,destroy:ct};if(!i.render)return t;var fe=i.render(t),f=fe.popper,pe=fe.onUpdate;f.setAttribute("data-tippy-root",""),f.id="tippy-"+t.id,t.popper=f,e._tippy=t,f._tippy=t;var Xe=j.map(function(n){return n.fn(t)}),Ge=e.hasAttribute("aria-expanded");return Te(),N(),P(),b("onCreate",[t]),i.showOnCreate&&xe(),f.addEventListener("mouseenter",function(){t.props.interactive&&t.state.isVisible&&t.clearDelayTimeouts()}),f.addEventListener("mouseleave",function(){t.props.interactive&&t.props.trigger.indexOf("mouseenter")>=0&&U().addEventListener("mousemove",O)}),t;function de(){var n=t.props.touch;return Array.isArray(n)?n:[n,0]}function le(){return de()[0]==="hold"}function E(){var n;return!!((n=t.props.render)!=null&&n.$$tippy)}function D(){return F||e}function U(){var n=D().parentNode;return n?Et(n):document}function V(){return ue(f)}function ve(n){return t.state.isMounted&&!t.state.isVisible||w.isTouch||h&&h.type==="focus"?0:re(t.props.delay,n?0:1,T.delay)}function P(n){n===void 0&&(n=!1),f.style.pointerEvents=t.props.interactive&&!n?"":"none",f.style.zIndex=""+t.props.zIndex}function b(n,o,a){if(a===void 0&&(a=!0),Xe.forEach(function(c){c[n]&&c[n].apply(c,o)}),a){var p;(p=t.props)[n].apply(p,o)}}function me(){var n=t.props.aria;if(n.content){var o="aria-"+n.content,a=f.id,p=I(t.props.triggerTarget||e);p.forEach(function(c){var g=c.getAttribute(o);if(t.state.isVisible)c.setAttribute(o,g?g+" "+a:a);else{var y=g&&g.replace(a,"").trim();y?c.setAttribute(o,y):c.removeAttribute(o)}})}}function N(){if(!(Ge||!t.props.aria.expanded)){var n=I(t.props.triggerTarget||e);n.forEach(function(o){t.props.interactive?o.setAttribute("aria-expanded",t.state.isVisible&&o===D()?"true":"false"):o.removeAttribute("aria-expanded")})}}function Q(){U().removeEventListener("mousemove",O),z=z.filter(function(n){return n!==O})}function k(n){if(!(w.isTouch&&(l||n.type==="mousedown"))){var o=n.composedPath&&n.composedPath()[0]||n.target;if(!(t.props.interactive&&Ne(f,o))){if(I(t.props.triggerTarget||e).some(function(a){return Ne(a,o)})){if(w.isTouch||t.state.isVisible&&t.props.trigger.indexOf("click")>=0)return}else b("onClickOutside",[t,n]);t.props.hideOnClick===!0&&(t.clearDelayTimeouts(),t.hide(),m=!0,setTimeout(function(){m=!1}),t.state.isMounted||Z())}}}function he(){l=!0}function ge(){l=!1}function be(){var n=U();n.addEventListener("mousedown",k,!0),n.addEventListener("touchend",k,L),n.addEventListener("touchstart",ge,L),n.addEventListener("touchmove",he,L)}function Z(){var n=U();n.removeEventListener("mousedown",k,!0),n.removeEventListener("touchend",k,L),n.removeEventListener("touchstart",ge,L),n.removeEventListener("touchmove",he,L)}function Je(n,o){ye(n,function(){!t.state.isVisible&&f.parentNode&&f.parentNode.contains(f)&&o()})}function Qe(n,o){ye(n,o)}function ye(n,o){var a=V().box;function p(c){c.target===a&&(oe(a,"remove",p),o())}if(n===0)return o();oe(a,"remove",_),oe(a,"add",p),_=p}function S(n,o,a){a===void 0&&(a=!1);var p=I(t.props.triggerTarget||e);p.forEach(function(c){c.addEventListener(n,o,a),R.push({node:c,eventType:n,handler:o,options:a})})}function Te(){le()&&(S("touchstart",Ee,{passive:!0}),S("touchend",Oe,{passive:!0})),mt(t.props.trigger).forEach(function(n){if(n!=="manual")switch(S(n,Ee),n){case"mouseenter":S("mouseleave",Oe);break;case"focus":S(St?"focusout":"blur",De);break;case"focusin":S("focusout",De);break}})}function Ae(){R.forEach(function(n){var o=n.node,a=n.eventType,p=n.handler,c=n.options;o.removeEventListener(a,p,c)}),R=[]}function Ee(n){var o,a=!1;if(!(!t.state.isEnabled||Ce(n)||m)){var p=((o=h)==null?void 0:o.type)==="focus";h=n,F=n.currentTarget,N(),!t.state.isVisible&&yt(n)&&z.forEach(function(c){return c(n)}),n.type==="click"&&(t.props.trigger.indexOf("mouseenter")<0||u)&&t.props.hideOnClick!==!1&&t.state.isVisible?a=!0:xe(n),n.type==="click"&&(u=!a),a&&!p&&W(n)}}function we(n){var o=n.target,a=D().contains(o)||f.contains(o);if(!(n.type==="mousemove"&&a)){var p=ee().concat(f).map(function(c){var g,y=c._tippy,x=(g=y.popperInstance)==null?void 0:g.state;return x?{popperRect:c.getBoundingClientRect(),popperState:x,props:i}:null}).filter(Boolean);wt(p,n)&&(Q(),W(n))}}function Oe(n){var o=Ce(n)||t.props.trigger.indexOf("click")>=0&&u;if(!o){if(t.props.interactive){t.hideWithInteractivity(n);return}W(n)}}function De(n){t.props.trigger.indexOf("focusin")<0&&n.target!==D()||t.props.interactive&&n.relatedTarget&&f.contains(n.relatedTarget)||W(n)}function Ce(n){return w.isTouch?le()!==n.type.indexOf("touch")>=0:!1}function Le(){Se();var n=t.props,o=n.popperOptions,a=n.placement,p=n.offset,c=n.getReferenceClientRect,g=n.moveTransition,y=E()?ue(f).arrow:null,x=c?{getBoundingClientRect:c,contextElement:c.contextElement||D()}:e,Me={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function($){var M=$.state;if(E()){var ft=V(),ne=ft.box;["placement","reference-hidden","escaped"].forEach(function(q){q==="placement"?ne.setAttribute("data-placement",M.placement):M.attributes.popper["data-popper-"+q]?ne.setAttribute("data-"+q,""):ne.removeAttribute("data-"+q)}),M.attributes.popper={}}}},C=[{name:"offset",options:{offset:p}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!g}},Me];E()&&y&&C.push({name:"arrow",options:{element:y,padding:3}}),C.push.apply(C,(o==null?void 0:o.modifiers)||[]),t.popperInstance=dt(x,f,Object.assign({},o,{placement:a,onFirstUpdate:H,modifiers:C}))}function Se(){t.popperInstance&&(t.popperInstance.destroy(),t.popperInstance=null)}function Ze(){var n=t.props.appendTo,o,a=D();t.props.interactive&&n===We||n==="parent"?o=a.parentNode:o=$e(n,[a]),o.contains(f)||o.appendChild(f),t.state.isMounted=!0,Le()}function ee(){return Y(f.querySelectorAll("[data-tippy-root]"))}function xe(n){t.clearDelayTimeouts(),n&&b("onTrigger",[t,n]),be();var o=ve(!0),a=de(),p=a[0],c=a[1];w.isTouch&&p==="hold"&&c&&(o=c),o?s=setTimeout(function(){t.show()},o):t.show()}function W(n){if(t.clearDelayTimeouts(),b("onUntrigger",[t,n]),!t.state.isVisible){Z();return}if(!(t.props.trigger.indexOf("mouseenter")>=0&&t.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(n.type)>=0&&u)){var o=ve(!1);o?v=setTimeout(function(){t.state.isVisible&&t.hide()},o):d=requestAnimationFrame(function(){t.hide()})}}function et(){t.state.isEnabled=!0}function tt(){t.hide(),t.state.isEnabled=!1}function nt(){clearTimeout(s),clearTimeout(v),cancelAnimationFrame(d)}function rt(n){if(!t.state.isDestroyed){b("onBeforeUpdate",[t,n]),Ae();var o=t.props,a=_e(e,Object.assign({},o,Ue(n),{ignoreAttributes:!0}));t.props=a,Te(),o.interactiveDebounce!==a.interactiveDebounce&&(Q(),O=Ie(we,a.interactiveDebounce)),o.triggerTarget&&!a.triggerTarget?I(o.triggerTarget).forEach(function(p){p.removeAttribute("aria-expanded")}):a.triggerTarget&&e.removeAttribute("aria-expanded"),N(),P(),pe&&pe(o,a),t.popperInstance&&(Le(),ee().forEach(function(p){requestAnimationFrame(p._tippy.popperInstance.forceUpdate)})),b("onAfterUpdate",[t,n])}}function it(n){t.setProps({content:n})}function ot(){var n=t.state.isVisible,o=t.state.isDestroyed,a=!t.state.isEnabled,p=w.isTouch&&!t.props.touch,c=re(t.props.duration,0,T.duration);if(!(n||o||a||p)&&!D().hasAttribute("disabled")&&(b("onShow",[t],!1),t.props.onShow(t)!==!1)){if(t.state.isVisible=!0,E()&&(f.style.visibility="visible"),P(),be(),t.state.isMounted||(f.style.transition="none"),E()){var g=V(),y=g.box,x=g.content;ie([y,x],0)}H=function(){var C;if(!(!t.state.isVisible||A)){if(A=!0,f.offsetHeight,f.style.transition=t.props.moveTransition,E()&&t.props.animation){var te=V(),$=te.box,M=te.content;ie([$,M],c),Ve([$,M],"visible")}me(),N(),Re(ae,t),(C=t.popperInstance)==null||C.forceUpdate(),b("onMount",[t]),t.props.animation&&E()&&Qe(c,function(){t.state.isShown=!0,b("onShown",[t])})}},Ze()}}function at(){var n=!t.state.isVisible,o=t.state.isDestroyed,a=!t.state.isEnabled,p=re(t.props.duration,1,T.duration);if(!(n||o||a)&&(b("onHide",[t],!1),t.props.onHide(t)!==!1)){if(t.state.isVisible=!1,t.state.isShown=!1,A=!1,u=!1,E()&&(f.style.visibility="hidden"),Q(),Z(),P(!0),E()){var c=V(),g=c.box,y=c.content;t.props.animation&&(ie([g,y],p),Ve([g,y],"hidden"))}me(),N(),t.props.animation?E()&&Je(p,t.unmount):t.unmount()}}function st(n){U().addEventListener("mousemove",O),Re(z,O),O(n)}function ut(){t.state.isVisible&&t.hide(),t.state.isMounted&&(Se(),ee().forEach(function(n){n._tippy.unmount()}),f.parentNode&&f.parentNode.removeChild(f),ae=ae.filter(function(n){return n!==t}),t.state.isMounted=!1,b("onHidden",[t]))}function ct(){t.state.isDestroyed||(t.clearDelayTimeouts(),t.unmount(),Ae(),delete e._tippy,t.state.isDestroyed=!0,b("onDestroy",[t]))}}function X(e,r){r===void 0&&(r={});var i=T.plugins.concat(r.plugins||[]);Ct();var s=Object.assign({},r,{plugins:i}),v=At(e),d=v.reduce(function(u,m){var l=m&&Bt(m,s);return l&&u.push(l),u},[]);return K(e)?d[0]:d}X.defaultProps=T;X.setDefaultProps=Rt;X.currentInput=w;Object.assign({},pt,{effect:function(r){var i=r.state,s={popper:{position:i.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(i.elements.popper.style,s.popper),i.styles=s,i.elements.arrow&&Object.assign(i.elements.arrow.style,s.arrow)}});X.setDefaultProps({render:Ye});export{X as t};

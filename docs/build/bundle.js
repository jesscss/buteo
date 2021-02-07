(()=>{"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return 0===Object.keys(t).length}function i(t,e){t.appendChild(e)}function a(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let f;function h(t){f=t}new Set,new Set;const p=[],$=[],m=[],b=[],g=Promise.resolve();let y=!1;function _(t){m.push(t)}let w=!1;const k=new Set;function x(){if(!w){w=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];h(e),v(e.$$)}for(h(null),p.length=0;$.length;)$.pop()();for(let t=0;t<m.length;t+=1){const e=m[t];k.has(e)||(k.add(e),e())}m.length=0}while(p.length);for(;b.length;)b.pop()();y=!1,w=!1,k.clear()}}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const S=new Set;let E;function T(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function C(s,l,i,c,u,d,$=[-1]){const m=f;h(s);const b=s.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:n(),dirty:$,skip_bound:!1};let w=!1;if(b.ctx=i?i(s,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return b.ctx&&u(b.ctx[t],b.ctx[t]=o)&&(!b.skip_bound&&b.bound[t]&&b.bound[t](o),w&&function(t,e){-1===t.$$.dirty[0]&&(p.push(t),y||(y=!0,g.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(s,t)),e})):[],b.update(),w=!0,o(b.before_update),b.fragment=!!c&&c(b.ctx),l.target){if(l.hydrate){const t=(E=l.target,Array.from(E.childNodes));b.fragment&&b.fragment.l(t),t.forEach(a)}else b.fragment&&b.fragment.c();l.intro&&((k=s.$$.fragment)&&k.i&&(S.delete(k),k.i(v))),function(t,n,s){const{fragment:l,on_mount:i,on_destroy:a,after_update:c}=t.$$;l&&l.m(n,s),_((()=>{const n=i.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(_)}(s,l.target,l.anchor),x()}var k,v,E;h(m)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(E=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function j(e){let n,o,r,s,l,f,h;return{c(){n=c("main"),o=c("h1"),r=u("Hello "),s=u(e[0]),l=u("!"),f=u(" "),h=c("p"),h.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',d(o,"class","svelte-1tky8bj"),d(n,"class","svelte-1tky8bj")},m(t,e){(function(t,e,n){t.insertBefore(e,n||null)})(t,n,e),i(n,o),i(o,r),i(o,s),i(o,l),i(n,f),i(n,h)},p(t,[e]){var n,o;1&e&&(n=s,o=""+(o=t[0]),n.wholeText!==o&&(n.data=o))},i:t,o:t,d(t){t&&a(n)}}}function A(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}new class extends class{$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),C(this,t,A,j,s,{name:0})}}({target:document.body,props:{name:"world"}})})();
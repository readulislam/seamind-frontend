import{b as l,c as S,_ as h}from"./index-0fc9848f.js";import{i as x}from"./isHostComponent-73d6e646.js";import{u as N}from"./Container-a3d911cd.js";function g(n,s,e){return n===void 0||x(n)?s:l({},s,{ownerState:l({},s.ownerState,e)})}function w(n,s=[]){if(n===void 0)return{};const e={};return Object.keys(n).filter(t=>t.match(/^on[A-Z]/)&&typeof n[t]=="function"&&!s.includes(t)).forEach(t=>{e[t]=n[t]}),e}function E(n,s){return typeof n=="function"?n(s):n}function P(n){if(n===void 0)return{};const s={};return Object.keys(n).filter(e=>!(e.match(/^on[A-Z]/)&&typeof n[e]=="function")).forEach(e=>{s[e]=n[e]}),s}function H(n){const{getSlotProps:s,additionalProps:e,externalSlotProps:t,externalForwardedProps:o,className:a}=n;if(!s){const v=S(o==null?void 0:o.className,t==null?void 0:t.className,a,e==null?void 0:e.className),y=l({},e==null?void 0:e.style,o==null?void 0:o.style,t==null?void 0:t.style),m=l({},e,o,t);return v.length>0&&(m.className=v),Object.keys(y).length>0&&(m.style=y),{props:m,internalRef:void 0}}const i=w(l({},o,t)),u=P(t),d=P(o),r=s(i),c=S(r==null?void 0:r.className,e==null?void 0:e.className,a,o==null?void 0:o.className,t==null?void 0:t.className),p=l({},r==null?void 0:r.style,e==null?void 0:e.style,o==null?void 0:o.style,t==null?void 0:t.style),f=l({},r,e,d,u);return c.length>0&&(f.className=c),Object.keys(p).length>0&&(f.style=p),{props:f,internalRef:r.ref}}const k=["elementType","externalSlotProps","ownerState"];function R(n){var s;const{elementType:e,externalSlotProps:t,ownerState:o}=n,a=h(n,k),i=E(t,o),{props:u,internalRef:d}=H(l({},a,{externalSlotProps:i})),r=N(d,i==null?void 0:i.ref,(s=n.additionalProps)==null?void 0:s.ref);return g(e,l({},u,{ref:r}),o)}export{w as e,E as r,R as u};

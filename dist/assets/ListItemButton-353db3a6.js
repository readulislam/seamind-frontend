import{s as F,k as j,b as u,i as d,r as p,u as G,_ as N,j as y,c as I,d as V}from"./index-0fc9848f.js";import{c as n,L as $,g as P}from"./ListItemText-ee76c296.js";import{d as w,a as E,u as S}from"./Container-a3d911cd.js";const _=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],M=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters]},T=t=>{const{alignItems:e,classes:s,dense:a,disabled:o,disableGutters:l,divider:c,selected:f}=t,i=V({root:["root",a&&"dense",!l&&"gutters",c&&"divider",o&&"disabled",e==="flex-start"&&"alignItemsFlexStart",f&&"selected"]},P,s);return u({},s,i)},D=F(w,{shouldForwardProp:t=>j(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:M})(({theme:t,ownerState:e})=>u({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:d(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:d(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:d(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:d(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${n.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.alignItems==="flex-start"&&{alignItems:"flex-start"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.dense&&{paddingTop:4,paddingBottom:4})),U=p.forwardRef(function(e,s){const a=G({props:e,name:"MuiListItemButton"}),{alignItems:o="center",autoFocus:l=!1,component:c="div",children:f,dense:v=!1,disableGutters:i=!1,divider:B=!1,focusVisibleClassName:O,selected:L=!1,className:k}=a,r=N(a,_),m=p.useContext($),x=p.useMemo(()=>({dense:v||m.dense||!1,alignItems:o,disableGutters:i}),[o,m.dense,v,i]),b=p.useRef(null);E(()=>{l&&b.current&&b.current.focus()},[l]);const C=u({},a,{alignItems:o,dense:x.dense,disableGutters:i,divider:B,selected:L}),g=T(C),R=S(b,s);return y.jsx($.Provider,{value:x,children:y.jsx(D,u({ref:R,href:r.href||r.to,component:(r.href||r.to)&&c==="div"?"button":c,focusVisibleClassName:I(g.focusVisible,O),ownerState:C,className:I(g.root,k)},r,{classes:g,children:f}))})}),q=U;export{q as L};

import{j as e}from"./index-0fc9848f.js";import{i as n}from"./icon-right-63ad7bd3.js";import{H as y}from"./index-4c95476e.js";import{C as f}from"./globalStyles-f2db22a9.js";import{u as l}from"./useTranslation-3f654ac1.js";import{G as d}from"./Grid-2258cf47.js";import{B as o,T as i,C as b}from"./Container-a3d911cd.js";import{I as v}from"./index-c45d75fc.js";const m=t=>({background:t,color:"white",display:"flex",flexDirection:"column",justifyContent:"center",gap:"10px",alignItems:"center",width:"240px",minHeight:"270px",padding:"10px"}),C=({CardsData:t})=>{const{t:a}=l();return e.jsx(d,{container:!0,direction:"row",spacing:2,children:t.map(s=>e.jsx(e.Fragment,{children:e.jsx(d,{item:!0,sm:6,md:3,lg:2,children:e.jsxs(o,{sx:s.color?m(s.color):m("#00253D"),children:[e.jsxs(o,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(i,{sx:{fontSize:35,fontWeight:700},children:s.id}),e.jsx(i,{variant:"body1",children:a(s.title)})]}),e.jsx(o,{children:e.jsx("img",{width:"102px",src:s.img,alt:""})})]})})}))})},w=({CardsData:t})=>e.jsx("div",{children:e.jsx(C,{CardsData:t})}),P=({headerTitle:t,headerIcon:a,headerBgColor:s,logozIndex:c,headerQuote:u,NextTags:x,cardHeaderTitle:p,CardsData:j,IndicatorHeaderTitle:g,IndicatorSubTitle:h})=>{const{t:r}=l();return e.jsxs(e.Fragment,{children:[e.jsx(y,{bgColor:s,logozIndex:c,children:e.jsxs(o,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[e.jsxs(o,{children:[e.jsx("img",{src:a,alt:""}),e.jsx(i,{pt:2,variant:"h3",children:r(t)})]}),e.jsx(i,{sx:{fontSize:24,maxWidth:800},children:r(u)})]})}),e.jsxs(b,{maxWidth:"xl",children:[e.jsxs(o,{sx:{display:"flex",alignItems:"center",gap:2,paddingY:5},children:[e.jsx(i,{children:r("home")}),e.jsx("img",{src:n,alt:""}),e.jsx(i,{children:r("Policy")}),e.jsx("img",{src:n,alt:""}),e.jsx(x,{})]}),e.jsx(f,{children:r(p)}),e.jsx(i,{py:4,color:"black",children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"}),e.jsx(w,{CardsData:j}),e.jsx(v,{IndicatorHeaderTitle:r(g),IndicatorSubTitle:r(h)})]})]})};export{P};

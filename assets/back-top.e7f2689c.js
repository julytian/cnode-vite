import{d as o,r as a,q as s,s as e,aw as n,o as t,f as d,w as c,al as r,g as l,av as p,h as i}from"./index.f3a72f47.js";var v=o({name:"BackTop",setup(){const o=a(!1),t=()=>{document.body.scrollTop>100||document.documentElement.scrollTop>100?o.value=!0:o.value=!1};s((()=>{window.addEventListener("scroll",t)})),e((()=>{window.removeEventListener("scroll",t)}));return{show:o,goTop:()=>{n()}}}});const f=i("data-v-13213dfc")(((o,a,s,e,n,i)=>(t(),d(p,{to:"body"},[c(l("div",{class:"iconfont icon-top",onClick:a[1]||(a[1]=(...a)=>o.goTop&&o.goTop(...a))},"",512),[[r,o.show]])]))));v.render=f,v.__scopeId="data-v-13213dfc";export default v;

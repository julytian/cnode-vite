import{d as e,_ as a,r as s,u as t,a as n,b as o,S as r,p as i,c,e as d,o as l,f as u,g as m,w as p,v,F as f,h as g}from"./index.40eb45fc.js";import{T as b}from"./index.f54d46e2.js";import{a as h}from"./user.0ab94002.js";import"./mount-component.617105fe.js";var k=e({name:"LoginPage",components:{NavHeader:a},setup(){const e=s(""),a=t(),i=n(),c=o(),d=a.query.redirect;return{token:e,submit:async()=>{if(e.value)try{const a=await h(e.value),s={loginname:a.loginname,avatar_url:a.avatar_url,userId:a.id,token:e.value};window.sessionStorage.user=JSON.stringify(s),c.dispatch(`user/${r}`,s);const t=decodeURIComponent(d||"/");i.replace({path:t})}catch(a){}else b("令牌格式错误,应为36位UUID字符串")}}}});const w=g("data-v-6cdb0e3e");i("data-v-6cdb0e3e");const x={class:"login-info"};c();const y=w(((e,a,s,t,n,o)=>{const r=d("nav-header");return l(),u(f,null,[m(r,{"show-menu":!1,title:"登录"}),m("section",x,[p(m("input",{"onUpdate:modelValue":a[1]||(a[1]=a=>e.token=a),class:"login-input",type:"text",placeholder:"Access Token",maxlength:"36"},null,512),[[v,e.token,void 0,{trim:!0}]]),m("div",{class:"login-btn",onClick:a[2]||(a[2]=(...a)=>e.submit&&e.submit(...a))},"登录")])],64)}));k.render=y,k.__scopeId="data-v-6cdb0e3e";export default k;

import{d as t,E as a,G as o,p as e,c,H as i,o as s,f as n,w as p,J as l,g as r,K as d,h as f,M as u,_ as v,N as _,O as m,u as g,b as T,Q as b,q as h,R as k,e as I,T as y,F as x}from"./index.f3a72f47.js";var L=t({name:"TopicInfo",props:{topic:{type:Object,default:{},required:!0}},methods:{getTabInfo:(t,o,e,c)=>a(t,o,e,c),getLastTimeStr:(t,a)=>o(t,a)}});const w=f("data-v-71559378");e("data-v-71559378");const E={class:"d-flex align-items-center topic-info"},j={key:0,class:"topic-info-avatar"},H={class:"flex-1"},O={key:0},R={class:"topic-info-wrap"},M={class:"topic-info-name"};c();const P=w(((t,a,o,e,c,f)=>{const u=i("lazy");return s(),n("section",E,[t.topic.author?p((s(),n("img",j,null,512)),[[u,t.topic.author.avatar_url]]):l("",!0),r("div",H,[t.topic.author?(s(),n("span",O,d(t.topic.author.loginname),1)):l("",!0),r("time",null," 发布于："+d(t.getLastTimeStr(t.topic.create_at,!0)),1)]),r("div",R,[r("span",{class:["topic-info-tag",t.getTabInfo(t.topic.tab,t.topic.good,t.topic.top,!0)],textContent:d(t.getTabInfo(t.topic.tab,t.topic.good,t.topic.top,!1))},null,10,["textContent"]),r("span",M,d(t.topic.visit_count)+"次浏览",1)])])}));L.render=P,L.__scopeId="data-v-71559378";var q=t({name:"TopicPage",components:{[u.name]:u,NavHeader:v,TopicInfo:L,TopicReply:_((()=>m((()=>__import__("./topic-reply.a188d269.js")),["/cnode-vite/assets/topic-reply.a188d269.js","/cnode-vite/assets/topic-reply.6ebe3c97.css","/cnode-vite/assets/index.f3a72f47.js","/cnode-vite/assets/index.639fd466.css"]))),BackTop:_((()=>m((()=>__import__("./back-top.e7f2689c.js")),["/cnode-vite/assets/back-top.e7f2689c.js","/cnode-vite/assets/back-top.d710be5d.css","/cnode-vite/assets/index.f3a72f47.js","/cnode-vite/assets/index.639fd466.css"])))},setup(){const t=g(),a=T(),o=b((()=>a.state.topic.topic));return h((()=>{var e;o.value.id||a.dispatch(`topic/${k}`,null==(e=t.params)?void 0:e.id)})),{topic:o}}});const A=f("data-v-fe6c7ae2");e("data-v-fe6c7ae2");const C={class:"topic-title"};c();const D=A(((t,a,o,e,c,i)=>{const p=I("nav-header"),l=I("topic-info"),f=I("van-skeleton"),u=I("topic-reply"),v=I("back-top");return s(),n(x,null,[r(p,{title:"主题"}),r("h2",C,d(t.topic.title),1),r(f,{title:"",avatar:"",row:5,loading:!t.topic.id,class:"skeleton-top"},{default:A((()=>[r(l,{topic:t.topic},null,8,["topic"]),r("section",{class:"markdown-body topic-content van-hairline--bottom",innerHTML:t.topic.content},null,8,["innerHTML"])])),_:1},8,["loading"]),(s(),n(y,null,{default:A((()=>[r(u,{topic:t.topic},null,8,["topic"])])),fallback:A((()=>[r(f,{title:"",row:5,class:"skeleton-top"})])),_:1})),r(v)],64)}));q.render=D,q.__scopeId="data-v-fe6c7ae2";export default q;

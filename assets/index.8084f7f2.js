import{a1 as t,a2 as e,au as o,r as n,ai as a,E as l,g as i,l as s,n as r,a8 as u,B as c,D as d,w as p,aq as v,P as f,q as m,av as b,I as h,z as w,d as y,_ as g,b as x,a as C,u as k,W as O,Z as V,aw as P,p as j,c as z,e as I,o as S,f as B,R as W,F as T,h as _}from"./index.1390daae.js";import{u as M,a as N}from"./useChildren.6784d988.js";import{C as R,F as U}from"./index.9e36744a.js";import{T as D}from"./index.751c4c12.js";import"./use-route.70bb7143.js";import"./mount-component.aef7fb18.js";var E=s("dropdown-menu"),q=E[0],A=E[1],F=q({props:{zIndex:[Number,String],activeColor:String,overlay:{type:Boolean,default:!0},duration:{type:[Number,String],default:.2},direction:{type:String,default:"down"},closeOnClickOutside:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},setup:function(s,c){var d=c.slots,p=n(),v=n(0),f=n(),m=M("vanDropdownMenu"),b=m.children,h=m.linkChildren,w=a(p),y=l((function(){return b.some((function(t){return t.state.showWrapper}))})),g=l((function(){if(y.value&&r(s.zIndex))return{zIndex:1+s.zIndex}})),x=function(){if(f.value){var t=u(f);"down"===s.direction?v.value=t.bottom:v.value=window.innerHeight-t.top}},C=function(t,e){var o=t.state.showPopup,n=t.disabled,a=t.titleClass;return i("div",{role:"button",tabindex:n?-1:0,class:A("item",{disabled:n}),onClick:function(){var t;n||(t=e,b.forEach((function(e,o){o===t?(x(),e.toggle()):e.state.showPopup&&e.toggle(!1,{immediate:!0})})))}},[i("span",{class:[A("title",{down:o===("down"===s.direction),active:o}),a],style:{color:o?s.activeColor:""}},[i("div",{class:"van-ellipsis"},[t.renderTitle()])])])};return h({props:s,offset:v}),function(n,a,l){if(void 0===l&&(l={}),t){var i=l.eventName;e(void 0===i?"click":i,(function(t){var e=o(n);e&&!e.contains(t.target)&&a(t)}),{target:document})}}(p,(function(){s.closeOnClickOutside&&b.forEach((function(t){t.toggle(!1)}))})),e("scroll",(function(){y.value&&x()}),{target:w}),function(){return i("div",{ref:p,class:A()},[i("div",{ref:f,style:g.value,class:A("bar",{opened:y.value})},[b.map(C)]),null==d.default?void 0:d.default()])}}});var H=s("dropdown-item"),$=H[0],Z=H[1],G=$({props:{title:String,disabled:Boolean,teleport:[String,Object],modelValue:null,titleClass:null,options:{type:Array,default:function(){return[]}},lazyRender:{type:Boolean,default:!0}},emits:["open","opened","close","closed","change","update:modelValue"],setup:function(t,e){var o=e.emit,n=e.slots,a=c({showPopup:!1,transition:!0,showWrapper:!1}),l=N("vanDropdownMenu").parent,s=function(t){return function(){return o(t)}},r=s("open"),u=s("close"),w=s("opened"),y=function(){a.showWrapper=!1,o("closed")},g=function(e){t.teleport&&e.stopPropagation()},x=function(e){var n=l.props.activeColor,s=e.value===t.modelValue;return i(R,{clickable:!0,key:e.value,icon:e.icon,title:e.text,class:Z("option",{active:s}),style:{color:s?n:""},onClick:function(){a.showPopup=!1,e.value!==t.modelValue&&(o("update:modelValue",e.value),o("change",e.value))}},{default:function(){return[s&&i(h,{class:Z("icon"),color:n,name:"success"},null)]}})},C=function(){var e=l.offset,o=l.props,s=o.zIndex,c=o.overlay,d=o.duration,m=o.direction,b=o.closeOnClickOverlay,h={zIndex:s};return"down"===m?h.top=e.value+"px":h.bottom=e.value+"px",p(i("div",{style:h,class:Z([m]),onClick:g},[i(f,{show:a.showPopup,"onUpdate:show":function(t){return a.showPopup=t},class:Z("content"),overlay:c,position:"down"===m?"top":"bottom",duration:a.transition?d:0,lazyRender:t.lazyRender,overlayStyle:{position:"absolute"},closeOnClickOverlay:b,onOpen:r,onClose:u,onOpened:w,onClosed:y},{default:function(){return[t.options.map(x),null==n.default?void 0:n.default()]}})]),[[v,a.showWrapper]])};return d({state:a,toggle:function(t,e){void 0===t&&(t=!a.showPopup),void 0===e&&(e={}),t!==a.showPopup&&(a.showPopup=t,a.transition=!e.immediate,t&&(a.showWrapper=!0))},renderTitle:function(){if(n.title)return n.title();if(t.title)return t.title;var e=t.options.filter((function(e){return e.value===t.modelValue}));return e.length?e[0].text:""}}),function(){var e,o;return t.teleport?i(b,{to:t.teleport},"function"==typeof(o=e=C())||"[object Object]"===Object.prototype.toString.call(o)&&!m(o)?e:{default:function(){return[e]}}):C()}}});var J=y({name:"AddPage",components:{[F.name]:F,[G.name]:G,[U.name]:U,NavHeader:g},setup(){var t;const e=x(),o=C(),a=n(""),l=null==(t=k().params)?void 0:t.id,i=l?"更新":"发布",s=c({tab:"dev",options:[{text:"测试",value:"dev"},{text:"分享",value:"share"},{text:"问答",value:"ask"},{text:"招聘",value:"job"}],title:"",content:""});O((()=>{l?(a.value="编辑主题",P(l,!1).then((t=>{s.title=t.title,s.content=t.content,s.tab=t.tab}))):a.value="添加主题"}));return{topic:s,submit:async()=>{if(!s.title)return void D("标题不能为空");if(!s.content)return void D("内容不能为空");const t={accesstoken:e.state.user.userInfo.token,title:s.title,tab:s.tab,content:s.content};try{if(l){t.topic_id=l;(await function(t){return w.post("/topics/update",t)}(t)).success&&(D("更新成功"),e.dispatch(`topic/${V}`,{id:l}),o.back())}else{(await function(t){return w.post("/topics",t)}(t)).success&&(D("发布成功"),o.replace(`/list?tab=${s.tab}`))}}catch(n){D(l?"更新失败":"发布失败")}},title:a,btnText:i}}});const K=_("data-v-261b3516");j("data-v-261b3516");const L={class:"d-flex align-items-center van-hairline--bottom add-hd"},Q=i("span",null,"选择分类：",-1),X={class:"flex-1"},Y={class:"add-title van-hairline--bottom"},tt={class:"add-content"};z();const et=K(((t,e,o,n,a,l)=>{const s=I("nav-header"),r=I("van-dropdown-item"),u=I("van-dropdown-menu"),c=I("van-field");return S(),B(T,null,[i(s,{title:t.title},null,8,["title"]),i("div",L,[Q,i("div",X,[i(u,null,{default:K((()=>[i(r,{modelValue:t.topic.tab,"onUpdate:modelValue":e[1]||(e[1]=e=>t.topic.tab=e),options:t.topic.options},null,8,["modelValue","options"])])),_:1})]),i("div",{class:"submit-btn",onClick:e[2]||(e[2]=(...e)=>t.submit&&t.submit(...e))},W(t.btnText),1)]),i("div",Y,[i(c,{modelValue:t.topic.title,"onUpdate:modelValue":e[3]||(e[3]=e=>t.topic.title=e),modelModifiers:{trim:!0},clearable:"",maxlength:"100",placeholder:"标题，字数10字以上"},null,8,["modelValue"])]),i("div",tt,[i(c,{modelValue:t.topic.content,"onUpdate:modelValue":e[4]||(e[4]=e=>t.topic.content=e),rows:"20",type:"textarea",placeholder:"回复支持Markdown语法,请注意标记代码"},null,8,["modelValue"])])],64)}));J.render=et,J.__scopeId="data-v-261b3516";export default J;
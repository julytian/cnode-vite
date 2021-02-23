import{a1 as e,a2 as t,au as o,r as n,ai as a,E as l,g as i,l as r,n as s,a8 as u,B as d,D as c,w as p,aq as v,P as f,q as m,av as b,I as h,z as w,d as y,_ as g,b as x,a as C,p as k,c as O,e as V,o as P,f as j,F as z,h as I}from"./index.33ff7d70.js";import{u as S,a as B}from"./useChildren.2d928c69.js";import{C as W,F as M}from"./index.a0be4774.js";import{T as N}from"./index.204e4b03.js";import"./use-route.6b531580.js";import"./mount-component.39be6864.js";var U=r("dropdown-menu"),_=U[0],D=U[1],E=_({props:{zIndex:[Number,String],activeColor:String,overlay:{type:Boolean,default:!0},duration:{type:[Number,String],default:.2},direction:{type:String,default:"down"},closeOnClickOutside:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},setup:function(r,d){var c=d.slots,p=n(),v=n(0),f=n(),m=S("vanDropdownMenu"),b=m.children,h=m.linkChildren,w=a(p),y=l((function(){return b.some((function(e){return e.state.showWrapper}))})),g=l((function(){if(y.value&&s(r.zIndex))return{zIndex:1+r.zIndex}})),x=function(){if(f.value){var e=u(f);"down"===r.direction?v.value=e.bottom:v.value=window.innerHeight-e.top}},C=function(e,t){var o=e.state.showPopup,n=e.disabled,a=e.titleClass;return i("div",{role:"button",tabindex:n?-1:0,class:D("item",{disabled:n}),onClick:function(){var e;n||(e=t,b.forEach((function(t,o){o===e?(x(),t.toggle()):t.state.showPopup&&t.toggle(!1,{immediate:!0})})))}},[i("span",{class:[D("title",{down:o===("down"===r.direction),active:o}),a],style:{color:o?r.activeColor:""}},[i("div",{class:"van-ellipsis"},[e.renderTitle()])])])};return h({props:r,offset:v}),function(n,a,l){if(void 0===l&&(l={}),e){var i=l.eventName;t(void 0===i?"click":i,(function(e){var t=o(n);t&&!t.contains(e.target)&&a(e)}),{target:document})}}(p,(function(){r.closeOnClickOutside&&b.forEach((function(e){e.toggle(!1)}))})),t("scroll",(function(){y.value&&x()}),{target:w}),function(){return i("div",{ref:p,class:D()},[i("div",{ref:f,style:g.value,class:D("bar",{opened:y.value})},[b.map(C)]),null==c.default?void 0:c.default()])}}});var R=r("dropdown-item"),T=R[0],q=R[1],A=T({props:{title:String,disabled:Boolean,teleport:[String,Object],modelValue:null,titleClass:null,options:{type:Array,default:function(){return[]}},lazyRender:{type:Boolean,default:!0}},emits:["open","opened","close","closed","change","update:modelValue"],setup:function(e,t){var o=t.emit,n=t.slots,a=d({showPopup:!1,transition:!0,showWrapper:!1}),l=B("vanDropdownMenu").parent,r=function(e){return function(){return o(e)}},s=r("open"),u=r("close"),w=r("opened"),y=function(){a.showWrapper=!1,o("closed")},g=function(t){e.teleport&&t.stopPropagation()},x=function(t){var n=l.props.activeColor,r=t.value===e.modelValue;return i(W,{clickable:!0,key:t.value,icon:t.icon,title:t.text,class:q("option",{active:r}),style:{color:r?n:""},onClick:function(){a.showPopup=!1,t.value!==e.modelValue&&(o("update:modelValue",t.value),o("change",t.value))}},{default:function(){return[r&&i(h,{class:q("icon"),color:n,name:"success"},null)]}})},C=function(){var t=l.offset,o=l.props,r=o.zIndex,d=o.overlay,c=o.duration,m=o.direction,b=o.closeOnClickOverlay,h={zIndex:r};return"down"===m?h.top=t.value+"px":h.bottom=t.value+"px",p(i("div",{style:h,class:q([m]),onClick:g},[i(f,{show:a.showPopup,"onUpdate:show":function(e){return a.showPopup=e},class:q("content"),overlay:d,position:"down"===m?"top":"bottom",duration:a.transition?c:0,lazyRender:e.lazyRender,overlayStyle:{position:"absolute"},closeOnClickOverlay:b,onOpen:s,onClose:u,onOpened:w,onClosed:y},{default:function(){return[e.options.map(x),null==n.default?void 0:n.default()]}})]),[[v,a.showWrapper]])};return c({state:a,toggle:function(e,t){void 0===e&&(e=!a.showPopup),void 0===t&&(t={}),e!==a.showPopup&&(a.showPopup=e,a.transition=!t.immediate,e&&(a.showWrapper=!0))},renderTitle:function(){if(n.title)return n.title();if(e.title)return e.title;var t=e.options.filter((function(t){return t.value===e.modelValue}));return t.length?t[0].text:""}}),function(){var t,o;return e.teleport?i(b,{to:e.teleport},"function"==typeof(o=t=C())||"[object Object]"===Object.prototype.toString.call(o)&&!m(o)?t:{default:function(){return[t]}}):C()}}});var F=y({name:"AddPage",components:{[E.name]:E,[A.name]:A,[M.name]:M,NavHeader:g},setup(){const e=x(),t=C(),o=d({tab:"dev",options:[{text:"测试",value:"dev"},{text:"分享",value:"share"},{text:"问答",value:"ask"},{text:"招聘",value:"job"}],title:"",content:""});return{topic:o,submit:async()=>{if(!o.title)return void N("标题不能为空");if(!o.content)return void N("内容不能为空");const n={accesstoken:e.state.user.userInfo.token,title:o.title,tab:o.tab,content:o.content};try{(await function(e){return w.post("/topics",e)}(n)).success&&(N("发布成功"),t.replace(`/list?tab=${o.tab}`))}catch(a){N("发布失败")}}}}});const H=I("data-v-d2567e62");k("data-v-d2567e62");const $={class:"d-flex align-items-center van-hairline--bottom add-hd"},G=i("span",null,"选择分类：",-1),J={class:"flex-1"},K={class:"add-title van-hairline--bottom"},L={class:"add-content"};O();const Q=H(((e,t,o,n,a,l)=>{const r=V("nav-header"),s=V("van-dropdown-item"),u=V("van-dropdown-menu"),d=V("van-field");return P(),j(z,null,[i(r,{title:"主题"}),i("div",$,[G,i("div",J,[i(u,null,{default:H((()=>[i(s,{modelValue:e.topic.tab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.topic.tab=t),options:e.topic.options},null,8,["modelValue","options"])])),_:1})]),i("div",{class:"submit-btn",onClick:t[2]||(t[2]=(...t)=>e.submit&&e.submit(...t))},"发布")]),i("div",K,[i(d,{modelValue:e.topic.title,"onUpdate:modelValue":t[3]||(t[3]=t=>e.topic.title=t),modelModifiers:{trim:!0},clearable:"",maxlength:"100",placeholder:"标题，字数10字以上"},null,8,["modelValue"])]),i("div",L,[i(d,{modelValue:e.topic.content,"onUpdate:modelValue":t[4]||(t[4]=t=>e.topic.content=t),rows:"20",type:"textarea",placeholder:"回复支持Markdown语法,请注意标记代码"},null,8,["modelValue"])])],64)}));F.render=Q,F.__scopeId="data-v-d2567e62";export default F;
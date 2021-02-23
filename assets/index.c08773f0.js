import{r as o,y as t,E as e,n as a,G as n,i,x as r,H as s,g as l,l as c,w as u,J as d,m,I as p,B as v,K as f,s as g,q as h,M as b,L as w,D as y,j as x,C as I,P as S,d as _,N as P,O as T,p as C,c as k,o as N,f as z,Q as j,R as B,h as L,T as X,_ as H,U as R,V as Y,u as Z,b as O,W,X as E,Y as D,Z as $,e as M,$ as A,a0 as q,F}from"./index.ae815293.js";import{m as U,u as V}from"./mount-component.10517cb8.js";import{S as G,u as J,a as K,c as Q}from"./index.cbdf9dd2.js";import{r as oo}from"./useChildren.9708e8e1.js";var to=c("image"),eo=to[0],ao=to[1],no=eo({props:{src:String,alt:String,fit:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,iconPrefix:String,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"photo-fail"},loadingIcon:{type:String,default:"photo"}},emits:["load","error"],setup:function(c,v){var f=v.emit,g=v.slots,h=o(!1),b=o(!0),w=o(),y=t().proxy.$Lazyload,x=e((function(){var o={};return a(c.width)&&(o.width=n(c.width)),a(c.height)&&(o.height=n(c.height)),a(c.radius)&&(o.overflow="hidden",o.borderRadius=n(c.radius)),o}));i((function(){return c.src}),(function(){h.value=!1,b.value=!0}));var I=function(o){b.value=!1,f("load",o)},S=function(o){h.value=!0,b.value=!1,f("error",o)},_=function(){if(!h.value&&c.src){var o={alt:c.alt,class:ao("img"),style:{objectFit:c.fit}};return c.lazyLoad?u(l("img",m({ref:w},o),null),[[d("lazy"),c.src]]):l("img",m({src:c.src,onLoad:I,onError:S},o),null)}},P=function(o){o.el===w.value&&b.value&&I()},T=function(o){o.el!==w.value||h.value||S()};return y&&r&&(y.$on("loaded",P),y.$on("error",T),s((function(){y.$off("loaded",P),y.$off("error",T)}))),function(){return l("div",{class:ao({round:c.round}),style:x.value},[_(),b.value&&c.showLoading?l("div",{class:ao("loading")},[g.loading?g.loading():l(p,{name:c.loadingIcon,class:ao("loading-icon"),classPrefix:c.iconPrefix},null)]):h.value&&c.showError?l("div",{class:ao("error")},[g.error?g.error():l(p,{name:c.errorIcon,class:ao("error-icon"),classPrefix:c.iconPrefix},null)]):void 0,null==g.default?void 0:g.default()])}}}),io=c("image-preview"),ro=io[0],so=io[1];function lo(o){return Math.sqrt(Math.pow(o[0].clientX-o[1].clientX,2)+Math.pow(o[0].clientY-o[1].clientY,2))}var co={props:{src:String,show:Boolean,active:Number,minZoom:[Number,String],maxZoom:[Number,String],rootWidth:Number,rootHeight:Number},emits:["scale","close"],setup:function(o,t){var a,n,r,s,c,u,d=t.emit,m=v({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}),p=f(),y=e((function(){var t=o.rootWidth,e=o.rootHeight/t;return m.imageRatio>e})),x=e((function(){var o=m.scale,t=m.moveX,e=m.moveY,a=m.moving,n={transitionDuration:m.zooming||a?"0s":".3s"};if(1!==o){var i=t/o,r=e/o;n.transform="scale("+o+", "+o+") translate("+i+"px, "+r+"px)"}return n})),I=e((function(){if(m.imageRatio){var t=o.rootWidth,e=o.rootHeight,a=y.value?e/m.imageRatio:t;return Math.max(0,(m.scale*a-t)/2)}return 0})),S=e((function(){if(m.imageRatio){var t=o.rootWidth,e=o.rootHeight,a=y.value?e:t*m.imageRatio;return Math.max(0,(m.scale*a-e)/2)}return 0})),_=function(t){(t=oo(t,+o.minZoom,+o.maxZoom))!==m.scale&&(m.scale=t,d("scale",{scale:t,index:o.active}))},P=function(){_(1),m.moveX=0,m.moveY=0},T=function(o){var t=o.touches,e=p.offsetX;p.start(o),a=m.moveX,n=m.moveY,u=new Date,m.moving=1===t.length&&1!==m.scale,m.zooming=2===t.length&&!e.value,m.zooming&&(r=m.scale,s=lo(o.touches))},C=function(o){var t=o.touches;if(p.move(o),(m.moving||m.zooming)&&b(o,!0),m.moving){var e=p.deltaX,i=p.deltaY,l=e.value+a,c=i.value+n;m.moveX=oo(l,-I.value,I.value),m.moveY=oo(c,-S.value,S.value)}if(m.zooming&&2===t.length){var u=lo(t);_(r*u/s)}},k=function(){var o,t=p.offsetX,e=p.offsetY,a=new Date-u;t.value<10&&e.value<10&&a<250&&(c?(clearTimeout(c),c=null,o=m.scale>1?1:2,_(o),m.moveX=0,m.moveY=0):c=setTimeout((function(){d("close"),c=null}),250))},N=function(o){var t=!1;(m.moving||m.zooming)&&(t=!0,m.moving&&a===m.moveX&&n===m.moveY&&(t=!1),o.touches.length||(m.zooming&&(m.moveX=oo(m.moveX,-I.value,I.value),m.moveY=oo(m.moveY,-S.value,S.value),m.zooming=!1),m.moving=!1,a=0,n=0,r=1,m.scale<1&&P())),b(o,t),k(),p.reset()},z=function(o){var t=o.target,e=t.naturalWidth,a=t.naturalHeight;m.imageRatio=a/e};return i((function(){return o.active}),P),i((function(){return o.show}),(function(o){o||P()})),function(){var t,e,a={loading:function(){return l(w,{type:"spinner"},null)}};return l(G,{class:so("swipe-item"),onTouchstart:T,onTouchmove:C,onTouchend:N,onTouchcancel:N},"function"==typeof(e=t=l(no,{src:o.src,fit:"contain",class:so("image",{vertical:y.value}),style:x.value,onLoad:z},g({},a)))||"[object Object]"===Object.prototype.toString.call(e)&&!h(e)?t:{default:function(){return[t]}})}}};var uo,mo=ro({props:{show:Boolean,className:null,closeable:Boolean,beforeClose:Function,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},minZoom:{type:[Number,String],default:1/3},maxZoom:{type:[Number,String],default:3},showIndex:{type:Boolean,default:!0},swipeDuration:{type:[Number,String],default:300},startPosition:{type:[Number,String],default:0},closeIcon:{type:String,default:"clear"},closeOnPopstate:{type:Boolean,default:!0},closeIconPosition:{type:String,default:"top-right"}},emits:["scale","close","closed","change","update:show"],setup:function(t,e){var a=e.emit,n=e.slots,r=o(),s=J(),c=v({active:0,rootWidth:0,rootHeight:0}),u=function(){if(r.value){var o=r.value.$el.getBoundingClientRect();c.rootWidth=o.width,c.rootHeight=o.height}},d=function(o){a("scale",o)},f=function(o){a("update:show",o)},g=function(){Q({interceptor:t.beforeClose,args:[c.active],done:function(){f(!1)}})},b=function(o){o!==c.active&&(c.active=o,a("change",o))},w=function(){if(t.showIndex)return l("div",{class:so("index")},[n.index?n.index({index:c.active}):c.active+1+" / "+t.images.length])},_=function(){if(n.cover)return l("div",{class:so("cover")},[n.cover()])},P=function(){var o,e;return l(K,{ref:r,lazyRender:!0,loop:t.loop,class:so("swipe"),duration:t.swipeDuration,initialSwipe:t.startPosition,showIndicators:t.showIndicators,indicatorColor:"white",onChange:b},"function"==typeof(e=o=t.images.map((function(o){return l(co,{src:o,show:t.show,active:c.active,maxZoom:t.maxZoom,minZoom:t.minZoom,rootWidth:c.rootWidth,rootHeight:c.rootHeight,onScale:d,onClose:g},null)})))||"[object Object]"===Object.prototype.toString.call(e)&&!h(e)?o:{default:function(){return[o]}})},T=function(){if(t.closeable)return l(p,{role:"button",name:t.closeIcon,class:so("close-icon",t.closeIconPosition),onClick:g},null)},C=function(){a("closed")},k=function(o,t){r.value&&r.value.swipeTo(o,t)};return y({swipeTo:k}),x(u),i([s.width,s.height],u),i((function(){return t.startPosition}),b),i((function(){return t.show}),(function(o){var e=t.images,n=t.startPosition;o?(b(+n),I((function(){u(),k(+n,{immediate:!0})}))):a("close",{index:c.active,url:e[c.active]})})),function(){return l(S,m({show:t.show,class:[so(),t.className],overlayClass:so("overlay"),closeOnPopstate:t.closeOnPopstate,onClosed:C},{"onUpdate:show":f}),{default:function(){return[T(),P(),w(),_()]}})}}}),po={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:null,onClose:null,onChange:null,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",beforeClose:null,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};var vo=function(o,t){if(void 0===t&&(t=0),r){var e;uo||(e=U({setup:function(){var o=V(),t=o.state,e=o.toggle,a=function(){t.images=[]};return function(){return l(mo,g({},t,{onClosed:a,"onUpdate:show":e}),null)}}}),uo=e.instance);var a=Array.isArray(o)?{images:o,startPosition:t}:o;return uo.open(g({},po,a)),uo}};vo.Component=mo,vo.install=function(o){o.use(mo)};var fo=_({name:"TopicInfo",props:{topic:{type:Object,default:{},required:!0}},methods:{getTabInfo:(o,t,e,a)=>P(o,t,e,a),getLastTimeStr:(o,t)=>T(o,t)}});const go=L("data-v-71559378");C("data-v-71559378");const ho={class:"d-flex align-items-center topic-info"},bo={key:0,class:"topic-info-avatar"},wo={class:"flex-1"},yo={key:0},xo={class:"topic-info-wrap"},Io={class:"topic-info-name"};k();const So=go(((o,t,e,a,n,i)=>{const r=d("lazy");return N(),z("section",ho,[o.topic.author?u((N(),z("img",bo,null,512)),[[r,o.topic.author.avatar_url]]):j("",!0),l("div",wo,[o.topic.author?(N(),z("span",yo,B(o.topic.author.loginname),1)):j("",!0),l("time",null," 发布于："+B(o.getLastTimeStr(o.topic.create_at,!0)),1)]),l("div",xo,[l("span",{class:["topic-info-tag",o.getTabInfo(o.topic.tab,o.topic.good,o.topic.top,!0)],textContent:B(o.getTabInfo(o.topic.tab,o.topic.good,o.topic.top,!1))},null,10,["textContent"]),l("span",Io,B(o.topic.visit_count)+"次浏览",1)])])}));fo.render=So,fo.__scopeId="data-v-71559378";var _o=_({name:"TopicPage",components:{[X.name]:X,[p.name]:p,NavHeader:H,TopicInfo:fo,TopicReply:R((()=>Y((()=>__import__("./topic-reply.cb9342e2.js")),["/assets/topic-reply.cb9342e2.js","/assets/topic-reply.3d12d5ac.css","/assets/index.ae815293.js","/assets/index.cf2967e3.css","/assets/index.2e9f5cfd.js","/assets/mount-component.10517cb8.js","/assets/index.aaaf6a9a.js","/assets/use-route.834cb91a.js","/assets/useChildren.9708e8e1.js"]))),BackTop:R((()=>Y((()=>__import__("./back-top.205c959c.js")),["/assets/back-top.205c959c.js","/assets/back-top.d710be5d.css","/assets/index.ae815293.js","/assets/index.cf2967e3.css"])))},setup(){const o=Z(),t=O(),a=e((()=>t.state.topic.topic)),n=e((()=>t.state.user.userInfo.token));W((async()=>{var e;a.value.id||await t.dispatch(`topic/${$}`,null==(e=o.params)?void 0:e.id),I((()=>{const o=document.querySelectorAll(".markdown-body img"),t=[];o.forEach(((o,e)=>{let a=o.getAttribute("src");a.startsWith("http")||(a=`https:${a}`),t.push(a),o.addEventListener("click",(()=>{vo({images:t,startPosition:e,closeable:!0,teleport:"body"})}))}))}))}));return{topic:a,token:n,toggleCollect:async t=>{const e=o.params.id;if(t){(await E(n.value,e)).success&&(a.value.is_collect=!1)}else{(await D(n.value,e)).success&&(a.value.is_collect=!0)}}}}});const Po=L("data-v-780dbb50");C("data-v-780dbb50");const To={class:"topic-title"};k();const Co=Po(((o,t,e,a,n,i)=>{const r=M("van-icon"),s=M("nav-header"),c=M("topic-info"),u=M("van-skeleton"),d=M("topic-reply"),m=M("back-top");return N(),z(F,null,[l(s,{title:"主题"},A({_:2},[o.token?{name:"collect",fn:Po((()=>[l(r,{name:"like",size:"20",color:o.topic.is_collect?"#80bd01":"#000000",onClick:t[1]||(t[1]=t=>o.toggleCollect(o.topic.is_collect))},null,8,["color"])]))}:void 0]),1024),l("h2",To,B(o.topic.title),1),l(u,{title:"",avatar:"",row:5,loading:!o.topic.id,class:"skeleton-top"},{default:Po((()=>[l(c,{topic:o.topic},null,8,["topic"]),l("section",{class:"markdown-body topic-content van-hairline--bottom",innerHTML:o.topic.content},null,8,["innerHTML"])])),_:1},8,["loading"]),(N(),z(q,null,{default:Po((()=>[l(d,{topic:o.topic},null,8,["topic"])])),fallback:Po((()=>[l(u,{title:"",row:5,class:"skeleton-top"})])),_:1})),l(m)],64)}));_o.render=Co,_o.__scopeId="data-v-780dbb50";export default _o;

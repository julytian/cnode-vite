import{A as n,B as o,s as t,C as e,D as u}from"./index.40eb45fc.js";function c(){var n=o({show:!1}),c=function(o){n.show=o},s=function(o){t(n,o),e((function(){c(!0)}))},a=function(){c(!1)};return u({open:s,close:a,toggle:c}),{open:s,close:a,state:n,toggle:c}}function s(o){var t=n(o),e=document.createElement("div");return document.body.appendChild(e),{instance:t.mount(e),unmount:function(){t.unmount(e),document.body.removeChild(e)}}}export{s as m,c as u};

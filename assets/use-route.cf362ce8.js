import{y as r}from"./index.40eb45fc.js";var e={to:[String,Object],url:String,replace:Boolean};function o(r){var e=r.$router,o=r.to,a=r.url,t=r.replace;o&&e?e[t?"replace":"push"](o):a&&(t?location.replace(a):location.href=a)}function a(){var e=r().proxy;return function(){o(e)}}export{e as a,o as r,a as u};

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,u=arguments.length,c=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(u<3?o(c):u>3?o(t,n,c):o(t,n))||c);return u>3&&c&&Object.defineProperty(t,n,c),c};function o(e){console.log(e)}function u(e){e.prototype.showHTML=function(){var e=document.createElement("pre");e.innerHTML=JSON.stringify(this),document.body.append(e)}}new(function(){function e(e,t){this.name=e,this.age=t,console.log("I'm user: "+e+" of "+t+" years!")}var t;return e=r([(t=!0,t?o:function(){}),u],e)}())("Sergey",22).showHTML()}]);
//# sourceMappingURL=bundle.js.map
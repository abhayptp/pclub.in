!new function(window,document,undefined,$){"use strict";var MODULE;!function(t){t.NAME="preload",t.NAMESPACE=jQuery,function(t){t[t.wait=-1]="wait",t[t.ready=0]="ready",t[t.lock=1]="lock",t[t.seal=2]="seal"}(t.State||(t.State={}));t.State;t.GEN_UUID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8;return n.toString(16).toUpperCase()})}}(MODULE||(MODULE={}));var MODULE;!function(t){var e;!function(t){var e,n,r=function(){function t(t,r){e=r,n=t}return t.prototype.enable=function(){return e.state_=0,this},t.prototype.disable=function(){return e.state_=1,this},t}();t.ControllerFunction=r}(e=t.CONTROLLER||(t.CONTROLLER={}))}(MODULE||(MODULE={}));var __extends=this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);n.prototype=e.prototype,t.prototype=new n},MODULE;!function(t){var e;!function(t){var e=function(t){function e(){t.apply(this,arguments)}return __extends(e,t),e}(t.ControllerFunction);t.ControllerMethod=e}(e=t.CONTROLLER||(t.CONTROLLER={}))}(MODULE||(MODULE={}));var MODULE;!function(t){var e;!function(e){var n,r,a=function(){function a(a){this.state_=-1,this.HANDLERS={},n=a,r=this,this.UUID=t.GEN_UUID(),t.NAMESPACE&&t.NAMESPACE==t.NAMESPACE.window?t.NAMESPACE[t.NAME]=this.EXEC:t.NAMESPACE[t.NAME]=t.NAMESPACE.prototype[t.NAME]=this.EXEC;var i=new e.ControllerFunction(r,n);this.REGISTER_FUNCTIONS(t.NAMESPACE[t.NAME],i),this.UPDATE_PROPERTIES(t.NAMESPACE[t.NAME],i),this.OBSERVE(),this.state_=0}return a.prototype.EXTEND=function(a){if(a===t.NAMESPACE||t.NAMESPACE&&t.NAMESPACE==t.NAMESPACE.window){var i=new e.ControllerFunction(r,n);a=t.NAMESPACE[t.NAME]}else var i=new e.ControllerMethod(r,n);return a instanceof t.NAMESPACE&&(a instanceof jQuery&&(a=a.add()),this.REGISTER_FUNCTIONS(a,i)),this.UPDATE_PROPERTIES(a,i),a},a.prototype.EXEC=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];var a=r.EXTEND(this);return t=[a].concat(t),t=r.exec_.apply(r,t),t=t instanceof Array?t:[t],n.MAIN.apply(n,t)},a.prototype.exec_=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return[t].concat(e)},a.prototype.REGISTER_FUNCTIONS=function(t,n){var r;e.Template.PROPERTIES;for(r in n)t[r]=n[r];return t},a.prototype.UPDATE_PROPERTIES=function(t,n){var r,a,i,o=e.Template.PROPERTIES;for(r=0,a=o.length;a>r;r++)i=o[r],n[i]&&(t[i]=n[i].call(t));return t},a.prototype.OBSERVE=function(){},a.prototype.RELEASE=function(){},a.EVENTS={},a.FUNCTIONS={},a.METHODS={},a.PROPERTIES=[],a.TRIGGERS={},a}();e.Template=a}(e=t.CONTROLLER||(t.CONTROLLER={}))}(MODULE||(MODULE={}));var MODULE;!function(t){var e;!function(t){var e=function(t){function e(e){t.call(this,e),this.model_=e,this.HANDLERS={}}return __extends(e,t),e.prototype.PRELOAD=function(t){this.model_.PRELOAD(t)},e.prototype.CLICK=function(t){this.model_.CLICK(t)},e.prototype.MOUSEMOVE=function(t){this.model_.MOUSEMOVE(t)},e.prototype.MOUSEOVER=function(t){this.model_.MOUSEOVER(t)},e.prototype.MOUSEOUT=function(t){this.model_.MOUSEOUT(t)},e.prototype.OBSERVE=function(){},e.EVENTS={},e.PROPERTIES=[],e.TRIGGERS={},e}(t.Template);t.Main=e}(e=t.CONTROLLER||(t.CONTROLLER={}))}(MODULE||(MODULE={}));var MODULE;!function(t){var e;!function(e){var n=function(){function e(){this.NAME=t.NAME,this.NAMESPACE=t.NAMESPACE,this.state_=-1,this.stock=function n(r,a,i){if(this instanceof n||this.constructor.toString()===n.toString())switch(typeof r){case"object":case"function":return this.uuid=t.GEN_UUID(),n[this.uuid]=this,jQuery.extend.apply(jQuery,[!0,this].concat([].slice.call(arguments)).concat({uuid:this.uuid}));case"string":return delete n[r]}else if("object"==typeof r){var o,s=r;for(o in s)e.store(o,s[o])}else switch(arguments.length){case 0:return new this.stock;case 1:return n[r]||e.store(r);case 2:return e.store(r,a);case 3:return e.store(r,a,i)}},this.UUID=t.GEN_UUID()}return e.prototype.MAIN=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return this.main_.apply(this,[t].concat(e))},e.prototype.main_=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return this.state_=0,t},e.store=function(t,n,r){switch(arguments.length){case 0:break;case 1:return e.store[t];case 2:return e.store[t]=n;case 3:return e.store[t]=jQuery.extend(!0,e.store[t],n)}},e}();e.Template=n}(e=t.MODEL||(t.MODEL={}))}(MODULE||(MODULE={}));var MODULE;!function(t){var e;!function(t){var e=function(){function t(){}return t.trim=function(t){if(t="string"==typeof t?t:String(0===t&&t.toString()||""),t.trim)t=t.trim();else if(t=t.replace(/^[\s\uFEFF\xA0]+/,"")){var e=/[\s\uFEFF\xA0]/,n=t.length,r=n%8;t:{for(;r--;)if(!e.test(t.charAt(--n)))break t;for(;n;){if(!e.test(t.charAt(--n)))break t;if(!e.test(t.charAt(--n)))break t;if(!e.test(t.charAt(--n)))break t;if(!e.test(t.charAt(--n)))break t;if(!e.test(t.charAt(--n)))break t;if(!e.test(t.charAt(--n)))break t;if(!e.test(t.charAt(--n)))break t;if(!e.test(t.charAt(--n)))break t}}t=t.substring(0,n+1)}return t},t.repeat=function(t,e){switch(t instanceof Array&&"array"||typeof t){case"string":var n=t;return Array(e+1).join(n);case"array":var r=t.length;if(300>e){var a=Array(e);this.duff(-e,function(e){return a[e]=t[e%r]})}else{for(var a=t.slice();2*a.length<=e;)a=a.concat(a);a=a.concat(a.slice(0,e-a.length))}return a}},t.fire=function(t,e,n,r){return void 0===e&&(e=window),void 0===n&&(n=[]),"function"==typeof t?r?setTimeout(function(){t.apply(e||window,n)},0):t.apply(e||window,n):t},t.duff=function(t,e){if(0>t){for(var n=-t,r=n%8;r--;)e(--n);for(;n;)e(--n),e(--n),e(--n),e(--n),e(--n),e(--n),e(--n),e(--n)}else{for(var a=t,n=0,r=a%8,i=a/8^0;r--;)e(n++);for(;i--;)e(n++),e(n++),e(n++),e(n++),e(n++),e(n++),e(n++),e(n++)}},t.duffEx=function(t,e){if(0>t){var n=-t,r=n%8;t:{for(;r--;)if(!1===e(--n))break t;for(;n;){if(!1===e(--n))break t;if(!1===e(--n))break t;if(!1===e(--n))break t;if(!1===e(--n))break t;if(!1===e(--n))break t;if(!1===e(--n))break t;if(!1===e(--n))break t;if(!1===e(--n))break t}}}else{var a=t,n=0,r=a%8,i=a/8^0;t:{for(;r--;)if(!1===e(n++))break t;for(;i--;){if(!1===e(n++))break t;if(!1===e(n++))break t;if(!1===e(n++))break t;if(!1===e(n++))break t;if(!1===e(n++))break t;if(!1===e(n++))break t;if(!1===e(n++))break t;if(!1===e(n++))break t}}}},t.normalizeUrl=function(t,e){void 0===e&&(e=!0);var n;return n=this.trim(t),n=/^([^:\/?#]+):\/\/[^\/?#.]+\.[^\/?#]+/i.test(n)?n:function(t,e){return e.href=t,e.href}(n,document.createElement("a")),n=encodeURI(decodeURI(n)),n=n.replace(/["`^|\\<>{}\[\]\s].*/,""),n=e?this.justifyPercentEncodingUrlCase_(t,n):n},t.canonicalizeUrl=function(t){function e(t){return t.toUpperCase()}var n=this.normalizeUrl(t,!1);return n=n.replace(/(?:%\w{2})+/g,e)},t.compareUrl=function(t,e,n){return n&&(t=this.canonicalizeUrl(t),e=this.canonicalizeUrl(e)),t===this.justifyPercentEncodingUrlCase_(t,e)},t.justifyPercentEncodingUrlCase_=function(t,e){function n(e){var n=~t.indexOf(e.toUpperCase())||~t.indexOf(e.toLowerCase());return n?t.substr(~n,e.length):e}return t===e?e:e.replace(/(?:%\w{2})+/g,n)},t}();t.Utility=e}(e=t.LIBRARY||(t.LIBRARY={}))}(MODULE||(MODULE={}));var MODULE;!function(t){var e;!function(e){var n,r=function(){function e(e,r,a){for(var i=[],o=3;o<arguments.length;o++)i[o-3]=arguments[o];this.model_=e,this.controller_=r,this.state_=-1,this.queue_=[],this.HANDLERS={},n=r,this.UUID=t.GEN_UUID(),this.CONTEXT=a,this.OBSERVE.apply(this,i||[]),this.state_=0}return e.prototype.OBSERVE=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e]},e.prototype.RELEASE=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e]},e.prototype.BIND=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return this.UNBIND(),this},e.prototype.UNBIND=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return this},e.EVENTS={},e.TRIGGERS={},e}();e.Template=r}(e=t.VIEW||(t.VIEW={}))}(MODULE||(MODULE={}));var MODULE;!function(t){var e;!function(e){var n,r=function(e){function r(t,r,a,i){e.call(this,t,r,a,i),this.model_=t,this.controller_=r,n=r}return __extends(r,e),r.prototype.OBSERVE=function(t){var e=this.model_.stock(t);return this.CONTEXT.bind(e.nss.event,t,this.PRELOAD),this},r.prototype.RELEASE=function(t){var e=this.model_.stock(t);return this.CONTEXT.unbind(e.nss.event),this},r.prototype.BIND=function(t,e){var n=this.model_.stock(t);return this.UNBIND(t,e),e&&this.CONTEXT.find(e.currentTarget).add(this.CONTEXT.filter(e.currentTarget)).find(n.link).filter(n.filter).bind(n.nss.click,t,this.CLICK).bind(n.nss.mouseover,t,this.MOUSEOVER).bind(n.nss.mousemove,t,this.MOUSEMOVE).bind(n.nss.mouseout,t,this.MOUSEOUT),this},r.prototype.UNBIND=function(t,e){var n=this.model_.stock(t);return e&&this.CONTEXT.find(e.currentTarget).add(this.CONTEXT.filter(e.currentTarget)).find(n.link).filter(n.filter).unbind(n.nss.click).unbind(n.nss.mouseover).unbind(n.nss.mousemove).unbind(n.nss.mouseout),this},r.prototype.RESET=function(t){return this.CONTEXT.trigger(t.nss.event),this},r.prototype.PRELOAD=function(t){n.PRELOAD(t)},r.prototype.CLICK=function(t){n.CLICK(t)},r.prototype.MOUSEMOVE=function(t){n.MOUSEMOVE(t)},r.prototype.MOUSEOVER=function(t){n.MOUSEOVER(t)},r.prototype.MOUSEOUT=function(t){n.MOUSEOUT(t)},r.EVENTS={BIND:t.NAME},r.TRIGGERS={},r}(e.Template);e.Main=r}(e=t.VIEW||(t.VIEW={}))}(MODULE||(MODULE={}));var MODULE;!function(MODULE){var MODEL;!function(MODEL){var Util=MODULE.LIBRARY.Utility,Main=function(_super){function Main(){_super.apply(this,arguments),this.controller_=new MODULE.CONTROLLER.Main(this),this.loaded_={}}return __extends(Main,_super),Main.prototype.main_=function(t,e){var n,r=this;switch(n=t instanceof MODULE.NAMESPACE?"m:":"f:",n+=e?{}.toString.call(e).split(" ").pop().slice(0,-1).toLowerCase():e,n.toLowerCase()){case"f:number":case"f:0":case"f:string":e={link:e};case"f:":case"m:object":case"m:null":case"m:function":case"m:undefined":}t=t instanceof jQuery?t:jQuery(document);var a=new this.stock(this.configure(e));this.stock({setting:a,queue:[]});var i=a.encode?Util.normalizeUrl(window.location.href):window.location.href;return i=i.replace(/#.*/,""),this.loaded_[i]=!0,t.uuid=a.uuid,jQuery(function(){a.view.push(new MODULE.VIEW.Main(r,r.controller_,t,a.uuid)),a.view[0].CONTEXT.trigger(a.nss.event),r.state_=~r.state_?r.state_:0}),this.cooldown(a),t},Main.prototype.configure=function(t){var e=jQuery.extend(!0,{},t),n={gns:MODULE.NAME,ns:null,link:"a:not([target])",filter:function(){return/^https?:/.test(this.href)&&/(\/[^.]*|\.html?|\.php)$/.test("/"+this.pathname)},lock:1e3,forward:null,check:null,balance:{host:null,ajax:{crossDomain:!0,beforeSend:null}},interval:1e3,limit:2,cooldown:1e4,skip:50,query:"",encode:!1,ajax:{dataType:"text",async:!0,timeout:1500}},r={view:[],target:null,volume:0,points:[],touch:!1,xhr:null,timeStamp:0,option:t},a=function(){var t=[e.gns||MODULE.NAME].concat(e.ns&&String(e.ns).split(".")||[]);return{nss:{name:e.ns||"",array:t,event:t.join("."),data:t.join("-"),class4html:t.join("-"),click:["click"].concat(t.join(":")).join("."),mousemove:["mousemove"].concat(t.join(":")).join("."),mouseover:["mouseover"].concat(t.join(":")).join("."),mouseout:["mouseout"].concat(t.join(":")).join("."),touchstart:["touchstart"].concat(t.join(":")).join("."),touchmove:["touchmove"].concat(t.join(":")).join("."),touchend:["touchend"].concat(t.join(":")).join(".")},ajax:jQuery.extend(!0,{},jQuery.ajaxSettings,e.ajax)}};return e=jQuery.extend(!0,{},n,e,r),e=jQuery.extend(!0,{},e,a())},Main.prototype.cooldown=function(t){!function(t,e){setTimeout(function n(){e.volume-=Number(!!e.volume),setTimeout(n,t)},t,e)}(t.cooldown,t)},Main.prototype.PRELOAD=function(t){var e=this.stock(t.data);e.volume=0,e.timeStamp=0,e.view[0].BIND(t.data,t)},Main.prototype.CLICK=function(t){var e=this.stock(t.data),n=t.currentTarget;if(0===this.state_)switch(t.timeStamp=(new Date).getTime(),e.encode&&("href"in n?n.href=this.getURL_(e,n):n.src=this.getURL_(e,n)),!t.isDefaultPrevented()&&jQuery.data(t.currentTarget,e.nss.data)){case"preload":case"lock":if(e.forward){var r=(this.getURL_(e,t.currentTarget),e.xhr.host);delete e.xhr.host,!1===Util.fire(e.forward,null,[t,e.xhr,r,e.timeStamp])?"lock"===jQuery.data(t.currentTarget,e.nss.data)?t.preventDefault():(this.click_(e,t),jQuery.removeData(t.currentTarget,e.nss.data)):(e.xhr=null,t.preventDefault(),jQuery.removeData(t.currentTarget,e.nss.data))}else"lock"===jQuery.data(t.currentTarget,e.nss.data)?t.preventDefault():(this.click_(e,t),jQuery.removeData(t.currentTarget,e.nss.data));break;default:e.xhr&&e.xhr.readyState<4&&e.xhr.abort()}},Main.prototype.MOUSEMOVE=function(t){var e=this.stock(t.data);0===this.state_&&(t.timeStamp=(new Date).getTime(),(!e.points.length||30<t.timeStamp-e.points[0].timeStamp)&&(e.points.unshift(t),e.points=e.points.slice(0,3),e.points.length>=3&&this.check_(t,e)))},Main.prototype.MOUSEOVER=function(t){var e=this.stock(t.data);e.target=t.currentTarget},Main.prototype.MOUSEOUT=function(t){var e=this.stock(t.data);e.target=null},Main.prototype.speed=function(t){if(t.length<3)return!1;var e,n,r,a;n=t[0].timeStamp-t[1].timeStamp,e=parseInt(String(Math.pow(t[0].pageX-t[1].pageX,2)+Math.pow(t[0].pageY-t[1].pageY,2)/(n||1)),10),a=t[1].timeStamp-t[2].timeStamp,r=parseInt(String(Math.pow(t[1].pageX-t[2].pageX,2)+Math.pow(t[1].pageY-t[2].pageY,2)/(a||1)),10);var i=1e3>n&&1e3>a?[e-r,e]:[];switch(!0){case!i.length:break;case-50>i[0]&&200>i[1]:case-50<i[0]&&50>i[0]&&-50<i[1]&&50>i[1]:return!0}return!1},Main.prototype.check_=function(t,e){var n=this;switch(!0){case e.volume>=e.limit:case e.points.length<3:case e.points[2].pageX===t.pageX:case e.interval?(new Date).getTime()-e.timeStamp<e.interval:!1:return;default:var r=function(){var r=n.getURL_(e,t.currentTarget);switch(r=r.replace(/#.*/,""),!0){case e.target!==t.currentTarget:case e.check?!!Util.fire(e.check,t.currentTarget,[r]):n.loaded_[r]:case!e.ajax.crossDomain&&(e.target.protocol!==window.location.protocol||e.target.host!==window.location.host):return}n.drive_(t,e)};this.speed(e.points)&&r()}},Main.prototype.drive_=function(t,e){var n=this;e.xhr&&e.xhr.readyState<4&&e.xhr.abort(),this.loaded_[this.getURL_(e,t.currentTarget).replace(/#.*/,"")]=!0,++e.volume,e.timeStamp=t.timeStamp,jQuery.data(t.currentTarget,e.nss.data,"preload"),e.lock&&(jQuery.data(t.currentTarget,e.nss.data,"lock"),jQuery(t.currentTarget).one(e.nss.click,function(t){if(jQuery.data(t.currentTarget,e.nss.data)){var r=Math.max(e.lock-(new Date).getTime()+t.data,0);jQuery.data(t.currentTarget,e.nss.data,"click"),r&&(setTimeout(function(){"click"===jQuery.data(t.currentTarget,e.nss.data)&&n.click_(e,t),jQuery.removeData(t.currentTarget,e.nss.data)},r),t.preventDefault())}})),this.preload_(t)},Main.prototype.preload_=function(event){var setting=this.stock(event.data),host=setting.balance.host&&setting.balance.host(),that=this,ajax=jQuery.extend(!0,{},setting.ajax,{beforeSend:function(t,e){t.setRequestHeader("X-Preload","true"),Util.fire(setting.ajax.beforeSend,this,[t,e])},success:function(){time=(new Date).getTime()-time,Util.fire(setting.ajax.success,this,arguments),that.loaded_[url]=!0,(304===arguments[2].status||time<=setting.skip)&&(setting.volume-=Number(!!setting.volume),setting.timeStamp=0),"click"===jQuery.data(event.currentTarget,setting.nss.data)&&that.click_(setting,event),jQuery.removeData(event.currentTarget,setting.nss.data)},error:function(){Util.fire(setting.ajax.error,this,arguments),setting.volume-=Number(!!setting.volume),setting.timeStamp=0,jQuery.removeData(event.currentTarget,setting.nss.data)},complete:function(){Util.fire(setting.ajax.complete,this,arguments)}},host&&setting.balance.ajax),query=setting.query;switch(query&&typeof query){case"string":query=eval("({"+query.match(/[^?=&]+=[^&]*/g).join("&").replace(/"/g,'\\"').replace(/([^?=&]+)=([^&]*)/g,'"$1": "$2"').replace(/&/g,",")+"})");case"object":query=jQuery.param(query);break;default:query=""}var url=this.getURL_(setting,event.currentTarget);url=host?url.replace("//[^/]+","//"+host):url,url=query?url.replace(/([^\?#]+)\??([^#]*)?(#.+)?/,"$1$2&"+query+"$3").replace(/\?&/,"?"):url,ajax.url=url;var time=(new Date).getTime();setting.xhr=jQuery.ajax(ajax),setting.xhr.host=host},Main.prototype.click_=function(t,e){var n=this,r=e.currentTarget;t.xhr&&t.xhr.readyState<4&&t.xhr.abort(),jQuery(e.currentTarget).removeData(t.nss.data),jQuery(document).find(e.currentTarget).length&&(jQuery(document).unbind(t.nss.click).one(t.nss.click,function(e){e.isDefaultPrevented()||(window.location.href=t.encode?Util.normalizeUrl(r.href):r.href,t.encode&&(window.location.href=n.getURL_(t,e.currentTarget)))}),jQuery(e.currentTarget).click()),e.preventDefault()},Main.prototype.getURL_=function(t,e){var n;switch(e.tagName.toLowerCase()){case"a":case"link":n=e.href;break;case"script":case"img":case"iframe":n=e.src}return t.encode?Util.normalizeUrl(n):n},Main}(MODEL.Template);MODEL.Main=Main}(MODEL=MODULE.MODEL||(MODULE.MODEL={}))}(MODULE||(MODULE={})),new MODULE.MODEL.Main}(window,window.document,void 0,jQuery);
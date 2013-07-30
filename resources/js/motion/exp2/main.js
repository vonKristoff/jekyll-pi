(function(){(function(){var t=this,n=t._,e={},r=Array.prototype,i=Object.prototype,u=Function.prototype,o=r.push,a=r.slice,s=r.concat,c=i.toString,l=i.hasOwnProperty,f=r.forEach,h=r.map,p=r.reduce,y=r.reduceRight,d=r.filter,v=r.every,m=r.some,g=r.indexOf,x=r.lastIndexOf,w=Array.isArray,b=Object.keys,k=u.bind,_=function(t){return t instanceof _?t:this instanceof _?(this._wrapped=t,void 0):new _(t)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=_),exports._=_):t._=_,_.VERSION="1.4.4";var E=_.each=_.forEach=function(t,n,r){if(null!=t)if(f&&t.forEach===f)t.forEach(n,r);else if(t.length===+t.length){for(var i=0,u=t.length;u>i;i++)if(n.call(r,t[i],i,t)===e)return}else for(var o in t)if(_.has(t,o)&&n.call(r,t[o],o,t)===e)return};_.map=_.collect=function(t,n,e){var r=[];return null==t?r:h&&t.map===h?t.map(n,e):(E(t,function(t,i,u){r[r.length]=n.call(e,t,i,u)}),r)};var M="Reduce of empty array with no initial value";_.reduce=_.foldl=_.inject=function(t,n,e,r){var i=arguments.length>2;if(null==t&&(t=[]),p&&t.reduce===p)return r&&(n=_.bind(n,r)),i?t.reduce(n,e):t.reduce(n);if(E(t,function(t,u,o){i?e=n.call(r,e,t,u,o):(e=t,i=!0)}),!i)throw new TypeError(M);return e},_.reduceRight=_.foldr=function(t,n,e,r){var i=arguments.length>2;if(null==t&&(t=[]),y&&t.reduceRight===y)return r&&(n=_.bind(n,r)),i?t.reduceRight(n,e):t.reduceRight(n);var u=t.length;if(u!==+u){var o=_.keys(t);u=o.length}if(E(t,function(a,s,c){s=o?o[--u]:--u,i?e=n.call(r,e,t[s],s,c):(e=t[s],i=!0)}),!i)throw new TypeError(M);return e},_.find=_.detect=function(t,n,e){var r;return j(t,function(t,i,u){return n.call(e,t,i,u)?(r=t,!0):void 0}),r},_.filter=_.select=function(t,n,e){var r=[];return null==t?r:d&&t.filter===d?t.filter(n,e):(E(t,function(t,i,u){n.call(e,t,i,u)&&(r[r.length]=t)}),r)},_.reject=function(t,n,e){return _.filter(t,function(t,r,i){return!n.call(e,t,r,i)},e)},_.every=_.all=function(t,n,r){n||(n=_.identity);var i=!0;return null==t?i:v&&t.every===v?t.every(n,r):(E(t,function(t,u,o){return(i=i&&n.call(r,t,u,o))?void 0:e}),!!i)};var j=_.some=_.any=function(t,n,r){n||(n=_.identity);var i=!1;return null==t?i:m&&t.some===m?t.some(n,r):(E(t,function(t,u,o){return i||(i=n.call(r,t,u,o))?e:void 0}),!!i)};_.contains=_.include=function(t,n){return null==t?!1:g&&t.indexOf===g?-1!=t.indexOf(n):j(t,function(t){return t===n})},_.invoke=function(t,n){var e=a.call(arguments,2),r=_.isFunction(n);return _.map(t,function(t){return(r?n:t[n]).apply(t,e)})},_.pluck=function(t,n){return _.map(t,function(t){return t[n]})},_.where=function(t,n,e){return _.isEmpty(n)?e?null:[]:_[e?"find":"filter"](t,function(t){for(var e in n)if(n[e]!==t[e])return!1;return!0})},_.findWhere=function(t,n){return _.where(t,n,!0)},_.max=function(t,n,e){if(!n&&_.isArray(t)&&t[0]===+t[0]&&65535>t.length)return Math.max.apply(Math,t);if(!n&&_.isEmpty(t))return-1/0;var r={computed:-1/0,value:-1/0};return E(t,function(t,i,u){var o=n?n.call(e,t,i,u):t;o>=r.computed&&(r={value:t,computed:o})}),r.value},_.min=function(t,n,e){if(!n&&_.isArray(t)&&t[0]===+t[0]&&65535>t.length)return Math.min.apply(Math,t);if(!n&&_.isEmpty(t))return 1/0;var r={computed:1/0,value:1/0};return E(t,function(t,i,u){var o=n?n.call(e,t,i,u):t;r.computed>o&&(r={value:t,computed:o})}),r.value},_.shuffle=function(t){var n,e=0,r=[];return E(t,function(t){n=_.random(e++),r[e-1]=r[n],r[n]=t}),r};var C=function(t){return _.isFunction(t)?t:function(n){return n[t]}};_.sortBy=function(t,n,e){var r=C(n);return _.pluck(_.map(t,function(t,n,i){return{value:t,index:n,criteria:r.call(e,t,n,i)}}).sort(function(t,n){var e=t.criteria,r=n.criteria;if(e!==r){if(e>r||void 0===e)return 1;if(r>e||void 0===r)return-1}return t.index<n.index?-1:1}),"value")};var A=function(t,n,e,r){var i={},u=C(n||_.identity);return E(t,function(n,o){var a=u.call(e,n,o,t);r(i,a,n)}),i};_.groupBy=function(t,n,e){return A(t,n,e,function(t,n,e){(_.has(t,n)?t[n]:t[n]=[]).push(e)})},_.countBy=function(t,n,e){return A(t,n,e,function(t,n){_.has(t,n)||(t[n]=0),t[n]++})},_.sortedIndex=function(t,n,e,r){e=null==e?_.identity:C(e);for(var i=e.call(r,n),u=0,o=t.length;o>u;){var a=u+o>>>1;i>e.call(r,t[a])?u=a+1:o=a}return u},_.toArray=function(t){return t?_.isArray(t)?a.call(t):t.length===+t.length?_.map(t,_.identity):_.values(t):[]},_.size=function(t){return null==t?0:t.length===+t.length?t.length:_.keys(t).length},_.first=_.head=_.take=function(t,n,e){return null==t?void 0:null==n||e?t[0]:a.call(t,0,n)},_.initial=function(t,n,e){return a.call(t,0,t.length-(null==n||e?1:n))},_.last=function(t,n,e){return null==t?void 0:null==n||e?t[t.length-1]:a.call(t,Math.max(t.length-n,0))},_.rest=_.tail=_.drop=function(t,n,e){return a.call(t,null==n||e?1:n)},_.compact=function(t){return _.filter(t,_.identity)};var O=function(t,n,e){return E(t,function(t){_.isArray(t)?n?o.apply(e,t):O(t,n,e):e.push(t)}),e};_.flatten=function(t,n){return O(t,n,[])},_.without=function(t){return _.difference(t,a.call(arguments,1))},_.uniq=_.unique=function(t,n,e,r){_.isFunction(n)&&(r=e,e=n,n=!1);var i=e?_.map(t,e,r):t,u=[],o=[];return E(i,function(e,r){(n?r&&o[o.length-1]===e:_.contains(o,e))||(o.push(e),u.push(t[r]))}),u},_.union=function(){return _.uniq(s.apply(r,arguments))},_.intersection=function(t){var n=a.call(arguments,1);return _.filter(_.uniq(t),function(t){return _.every(n,function(n){return _.indexOf(n,t)>=0})})},_.difference=function(t){var n=s.apply(r,a.call(arguments,1));return _.filter(t,function(t){return!_.contains(n,t)})},_.zip=function(){for(var t=a.call(arguments),n=_.max(_.pluck(t,"length")),e=Array(n),r=0;n>r;r++)e[r]=_.pluck(t,""+r);return e},_.object=function(t,n){if(null==t)return{};for(var e={},r=0,i=t.length;i>r;r++)n?e[t[r]]=n[r]:e[t[r][0]]=t[r][1];return e},_.indexOf=function(t,n,e){if(null==t)return-1;var r=0,i=t.length;if(e){if("number"!=typeof e)return r=_.sortedIndex(t,n),t[r]===n?r:-1;r=0>e?Math.max(0,i+e):e}if(g&&t.indexOf===g)return t.indexOf(n,e);for(;i>r;r++)if(t[r]===n)return r;return-1},_.lastIndexOf=function(t,n,e){if(null==t)return-1;var r=null!=e;if(x&&t.lastIndexOf===x)return r?t.lastIndexOf(n,e):t.lastIndexOf(n);for(var i=r?e:t.length;i--;)if(t[i]===n)return i;return-1},_.range=function(t,n,e){1>=arguments.length&&(n=t||0,t=0),e=arguments[2]||1;for(var r=Math.max(Math.ceil((n-t)/e),0),i=0,u=Array(r);r>i;)u[i++]=t,t+=e;return u},_.bind=function(t,n){if(t.bind===k&&k)return k.apply(t,a.call(arguments,1));var e=a.call(arguments,2);return function(){return t.apply(n,e.concat(a.call(arguments)))}},_.partial=function(t){var n=a.call(arguments,1);return function(){return t.apply(this,n.concat(a.call(arguments)))}},_.bindAll=function(t){var n=a.call(arguments,1);return 0===n.length&&(n=_.functions(t)),E(n,function(n){t[n]=_.bind(t[n],t)}),t},_.memoize=function(t,n){var e={};return n||(n=_.identity),function(){var r=n.apply(this,arguments);return _.has(e,r)?e[r]:e[r]=t.apply(this,arguments)}},_.delay=function(t,n){var e=a.call(arguments,2);return setTimeout(function(){return t.apply(null,e)},n)},_.defer=function(t){return _.delay.apply(_,[t,1].concat(a.call(arguments,1)))},_.throttle=function(t,n){var e,r,i,u,o=0,a=function(){o=new Date,i=null,u=t.apply(e,r)};return function(){var s=new Date,c=n-(s-o);return e=this,r=arguments,0>=c?(clearTimeout(i),i=null,o=s,u=t.apply(e,r)):i||(i=setTimeout(a,c)),u}},_.debounce=function(t,n,e){var r,i;return function(){var u=this,o=arguments,a=function(){r=null,e||(i=t.apply(u,o))},s=e&&!r;return clearTimeout(r),r=setTimeout(a,n),s&&(i=t.apply(u,o)),i}},_.once=function(t){var n,e=!1;return function(){return e?n:(e=!0,n=t.apply(this,arguments),t=null,n)}},_.wrap=function(t,n){return function(){var e=[t];return o.apply(e,arguments),n.apply(this,e)}},_.compose=function(){var t=arguments;return function(){for(var n=arguments,e=t.length-1;e>=0;e--)n=[t[e].apply(this,n)];return n[0]}},_.after=function(t,n){return 0>=t?n():function(){return 1>--t?n.apply(this,arguments):void 0}},_.keys=b||function(t){if(t!==Object(t))throw new TypeError("Invalid object");var n=[];for(var e in t)_.has(t,e)&&(n[n.length]=e);return n},_.values=function(t){var n=[];for(var e in t)_.has(t,e)&&n.push(t[e]);return n},_.pairs=function(t){var n=[];for(var e in t)_.has(t,e)&&n.push([e,t[e]]);return n},_.invert=function(t){var n={};for(var e in t)_.has(t,e)&&(n[t[e]]=e);return n},_.functions=_.methods=function(t){var n=[];for(var e in t)_.isFunction(t[e])&&n.push(e);return n.sort()},_.extend=function(t){return E(a.call(arguments,1),function(n){if(n)for(var e in n)t[e]=n[e]}),t},_.pick=function(t){var n={},e=s.apply(r,a.call(arguments,1));return E(e,function(e){e in t&&(n[e]=t[e])}),n},_.omit=function(t){var n={},e=s.apply(r,a.call(arguments,1));for(var i in t)_.contains(e,i)||(n[i]=t[i]);return n},_.defaults=function(t){return E(a.call(arguments,1),function(n){if(n)for(var e in n)null==t[e]&&(t[e]=n[e])}),t},_.clone=function(t){return _.isObject(t)?_.isArray(t)?t.slice():_.extend({},t):t},_.tap=function(t,n){return n(t),t};var P=function(t,n,e,r){if(t===n)return 0!==t||1/t==1/n;if(null==t||null==n)return t===n;t instanceof _&&(t=t._wrapped),n instanceof _&&(n=n._wrapped);var i=c.call(t);if(i!=c.call(n))return!1;switch(i){case"[object String]":return t==n+"";case"[object Number]":return t!=+t?n!=+n:0==t?1/t==1/n:t==+n;case"[object Date]":case"[object Boolean]":return+t==+n;case"[object RegExp]":return t.source==n.source&&t.global==n.global&&t.multiline==n.multiline&&t.ignoreCase==n.ignoreCase}if("object"!=typeof t||"object"!=typeof n)return!1;for(var u=e.length;u--;)if(e[u]==t)return r[u]==n;e.push(t),r.push(n);var o=0,a=!0;if("[object Array]"==i){if(o=t.length,a=o==n.length)for(;o--&&(a=P(t[o],n[o],e,r)););}else{var s=t.constructor,l=n.constructor;if(s!==l&&!(_.isFunction(s)&&s instanceof s&&_.isFunction(l)&&l instanceof l))return!1;for(var f in t)if(_.has(t,f)&&(o++,!(a=_.has(n,f)&&P(t[f],n[f],e,r))))break;if(a){for(f in n)if(_.has(n,f)&&!o--)break;a=!o}}return e.pop(),r.pop(),a};_.isEqual=function(t,n){return P(t,n,[],[])},_.isEmpty=function(t){if(null==t)return!0;if(_.isArray(t)||_.isString(t))return 0===t.length;for(var n in t)if(_.has(t,n))return!1;return!0},_.isElement=function(t){return!(!t||1!==t.nodeType)},_.isArray=w||function(t){return"[object Array]"==c.call(t)},_.isObject=function(t){return t===Object(t)},E(["Arguments","Function","String","Number","Date","RegExp"],function(t){_["is"+t]=function(n){return c.call(n)=="[object "+t+"]"}}),_.isArguments(arguments)||(_.isArguments=function(t){return!(!t||!_.has(t,"callee"))}),_.isFunction=function(t){return"function"==typeof t},_.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},_.isNaN=function(t){return _.isNumber(t)&&t!=+t},_.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"==c.call(t)},_.isNull=function(t){return null===t},_.isUndefined=function(t){return void 0===t},_.has=function(t,n){return l.call(t,n)},_.noConflict=function(){return t._=n,this},_.identity=function(t){return t},_.times=function(t,n,e){for(var r=Array(t),i=0;t>i;i++)r[i]=n.call(e,i);return r},_.random=function(t,n){return null==n&&(n=t,t=0),t+Math.floor(Math.random()*(n-t+1))};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};T.unescape=_.invert(T.escape);var q={escape:RegExp("["+_.keys(T.escape).join("")+"]","g"),unescape:RegExp("("+_.keys(T.unescape).join("|")+")","g")};_.each(["escape","unescape"],function(t){_[t]=function(n){return null==n?"":(""+n).replace(q[t],function(n){return T[t][n]})}}),_.result=function(t,n){if(null==t)return null;var e=t[n];return _.isFunction(e)?e.call(t):e},_.mixin=function(t){E(_.functions(t),function(n){var e=_[n]=t[n];_.prototype[n]=function(){var t=[this._wrapped];return o.apply(t,arguments),R.call(this,e.apply(_,t))}})};var F=0;_.uniqueId=function(t){var n=++F+"";return t?t+n:n},_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var D=/(.)^/,I={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},L=/\\|'|\r|\n|\t|\u2028|\u2029/g;_.template=function(t,n,e){var r;e=_.defaults({},e,_.templateSettings);var i=RegExp([(e.escape||D).source,(e.interpolate||D).source,(e.evaluate||D).source].join("|")+"|$","g"),u=0,o="__p+='";t.replace(i,function(n,e,r,i,a){return o+=t.slice(u,a).replace(L,function(t){return"\\"+I[t]}),e&&(o+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'"),r&&(o+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(o+="';\n"+i+"\n__p+='"),u=a+n.length,n}),o+="';\n",e.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{r=Function(e.variable||"obj","_",o)}catch(a){throw a.source=o,a}if(n)return r(n,_);var s=function(t){return r.call(this,t,_)};return s.source="function("+(e.variable||"obj")+"){\n"+o+"}",s},_.chain=function(t){return _(t).chain()};var R=function(t){return this._chain?_(t).chain():t};_.mixin(_),E(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var n=r[t];_.prototype[t]=function(){var e=this._wrapped;return n.apply(e,arguments),"shift"!=t&&"splice"!=t||0!==e.length||delete e[0],R.call(this,e)}}),E(["concat","join","slice"],function(t){var n=r[t];_.prototype[t]=function(){return R.call(this,n.apply(this._wrapped,arguments))}}),_.extend(_.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this),define("underscore",function(t){return function(){var n;return n||t._}}(this)),define("vector2",[],function(){var t=function(t,n){this.x=t||0,this.y=n||0};return t.prototype={reset:function(t,n){return this.x=t,this.y=n,this},toString:function(t){t=t||3;var n=Math.pow(10,t);return"["+Math.round(this.x*n)/n+", "+Math.round(this.y*n)/n+"]"},clone:function(){return new t(this.x,this.y)},copyTo:function(t){t.x=this.x,t.y=this.y},copyFrom:function(t){this.x=t.x,this.y=t.y},magnitude:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},magnitudeSquared:function(){return this.x*this.x+this.y*this.y},normalise:function(){var t=this.magnitude();return this.x=this.x/t,this.y=this.y/t,this},reverse:function(){return this.x=-this.x,this.y=-this.y,this},plusEq:function(t){return this.x+=t.x,this.y+=t.y,this},plusNew:function(n){return new t(this.x+n.x,this.y+n.y)},minusEq:function(t){return this.x-=t.x,this.y-=t.y,this},minusNew:function(n){return new t(this.x-n.x,this.y-n.y)},multiplyEq:function(t){return this.x*=t,this.y*=t,this},multiplyNew:function(t){var n=this.clone();return n.multiplyEq(t)},divideEq:function(t){return this.x/=t,this.y/=t,this},divideNew:function(t){var n=this.clone();return n.divideEq(t)},dot:function(t){return this.x*t.x+this.y*t.y},angle:function(t){return Math.atan2(this.y,this.x)*(t?1:Vector2Const.TO_DEGREES)},rotate:function(t,n){var e=Math.cos(t*(n?1:Vector2Const.TO_RADIANS)),r=Math.sin(t*(n?1:Vector2Const.TO_RADIANS));return Vector2Const.temp.copyFrom(this),this.x=Vector2Const.temp.x*e-Vector2Const.temp.y*r,this.y=Vector2Const.temp.x*r+Vector2Const.temp.y*e,this},equals:function(t){return this.x==t.x&&this.y==t.x},isCloseTo:function(t,n){return this.equals(t)?!0:(Vector2Const.temp.copyFrom(this),Vector2Const.temp.minusEq(t),n*n>Vector2Const.temp.magnitudeSquared())},rotateAroundPoint:function(t,n,e){Vector2Const.temp.copyFrom(this),Vector2Const.temp.minusEq(t),Vector2Const.temp.rotate(n,e),Vector2Const.temp.plusEq(t),this.copyFrom(Vector2Const.temp)},isMagLessThan:function(t){return t*t>this.magnitudeSquared()},isMagGreaterThan:function(t){return this.magnitudeSquared()>t*t}},Vector2Const={TO_DEGREES:180/Math.PI,TO_RADIANS:Math.PI/180,temp:new t},t}),define("layer",["vector2"],function(t){var n=function(n,e){var r=this.pos=new t(n,e),i=this.vel=new t(0,0),u=this.drag=new t(.95,.96);this.gravity=1,this.width=24,this.height=43;var o=2;this.update=function(){i.x*=u.x,i.y*=u.y,i.y+=this.gravity,r.plusEq(i)},this.render=function(t){t.save(),t.fillStyle="rgba(255,255,255,1)",t.fillRect(this.getLeft(),this.getTop(),this.width,this.height),t.restore()},this.moveLeft=function(){this.vel.x-=o},this.moveRight=function(){console.log("right"),this.vel.x+=o},this.moveUp=function(){this.vel.y-=o},this.moveDown=function(){this.vel.y+=o},this.getLeft=function(){return r.x},this.getRight=function(){return r.x+this.width},this.getTop=function(){return r.y-this.height},this.getBottom=function(){return r.y}};return n}),define("keytracker",[],function(){var t=function(){this.Key={UP:38,LEFT:37,RIGHT:39,DOWN:40,SPACE:32},this.keysPressed={},this.keyDownListeners=[],this.keyUpListeners=[],this.isKeyDown=function(t){return"string"==typeof t&&(t=t.charCodeAt(0)),this.keysPressed[t]},this.addKeyDownListener=function(t,n){"string"==typeof t&&(t=t.charCodeAt(0)),this.keyDownListeners.push({key:t,func:n})},this.addKeyUpListener=function(t,n){"string"==typeof t&&(t=t.charCodeAt(0)),this.keyUpListeners.push({key:t,func:n})}};return t}),define("controller",["keytracker"],function(t){var n={};return n=function(){var n=new t;return document.addEventListener("keydown",function(t){for(var e=0;n.keyDownListeners.length>e;e++)t.keyCode!=keyDownListeners[e].key||n.keysPressed[t.keyCode]||n.keyDownListeners[e].func();n.keysPressed[t.keyCode]=!0,console.log("key down "+t.keyCode)}),document.addEventListener("keyup",function(t){n.keysPressed[t.keyCode]=!1;for(var e=0;n.keyUpListeners.length>e;e++)t.keyCode==n.keyUpListeners[e].key&&n.keyUpListeners[e].func()}),n}}),define("creativejs",[],function(){var t={random:function(t,n){return void 0===t?(t=0,n=1):void 0===n&&(n=t,t=0),Math.random()*(n-t)+t},randomInteger:function(t,n){return void 0===n&&(n=t,t=0),Math.floor(Math.random()*(n+1-t))+t},clamp:function(t,n,e){if(n>e){var r=n;n=e,e=r}return Math.max(n,Math.min(t,e))},map:function(t,n,e,r,i,u){var o=(t-n)/(e-n)*(i-r)+r;return u?this.clamp(o,r,i):o},dist:function(t,n,e,r){return e-=t,r-=n,Math.sqrt(e*e+r*r)},scale:function(t,n,e,r,i){var u=e-n,o=i-r,a=(t-n)/u;return r+a*o},dist2D:function(t,n){var e=t.x-n.x,r=t.y-n.y;return e*e+r*r},radians:function(t){return t*Math.PI/180},degrees:function(t){return 180*t/Math.PI},rgb:function(t,n,e){return"rgb("+this.clamp(Math.round(t),0,255)+", "+this.clamp(Math.round(n),0,255)+", "+this.clamp(Math.round(e),0,255)+")"},rgba:function(t,n,e,r){return"rgba("+this.clamp(Math.round(t),0,255)+", "+this.clamp(Math.round(n),0,255)+", "+this.clamp(Math.round(e),0,255)+", "+this.clamp(r,0,1)+")"},hsl:function(t,n,e){return"hsl("+t+", "+this.clamp(n,0,100)+"%, "+this.clamp(e,0,100)+"%)"},hsla:function(t,n,e,r){return"hsla("+t+", "+this.clamp(n,0,100)+"%, "+this.clamp(e,0,100)+"%, "+this.clamp(r,0,1)+")"}};return t}),define("graphics",[],function(){var t={};return t.circle=function(t,n,e){this.beginPath(),this.arc(t,n,e,0,2*Math.PI,!0)},t.fillCircle=function(t,n,e){this.circle(t,n,e),this.fill(),this.beginPath()},t.strokeCircle=function(t,n,e){this.circle(t,n,e),this.stroke(),this.beginPath()},t.ellipse=function(t,n,e,r){this.beginPath();for(var i=0;2*Math.PI>i;i+=Math.PI/16)this.lineTo(t+Math.cos(i)*e/2,n+Math.sin(i)*r/2);this.closePath()},t.fillEllipse=function(t,n,e,r){this.ellipse(t,n,e,r),this.fill(),this.beginPath()},t.strokeEllipse=function(t,n,e,r){this.ellipse(t,n,e,r),this.stroke(),this.beginPath()},t.line=function(t,n,e,r){this.beginPath(),this.moveTo(t,n),this.lineTo(e,r),this.stroke(),this.beginPath()},t}),define("scene",[],function(){var t={render:function(t){t.strokeStyle="red",t.circle(20,20,200),t.stroke()}};return t}),define("app",["underscore","layer","controller","creativejs","graphics","scene"],function(t,n,e,r,i,u){var o={};return o=function(){console.log("exp 2"),this.self=this,this.ctx=null,this.width=window.innerWidth,this.height=window.innerHeight,this.player,this.controller,this.scene},o.prototype.draw=function(){this.player.update(),this.managePositions(this.player,this.controller),u.render(this.ctx),this.player.render(this.ctx)},o.prototype.setup=function(t,n,e){if(!n&&!e)var n=this.width,e=this.height;var r=this.initCanvas(t,n,e);return this.initVars(n,e),this.initObjects(),r},o.prototype.initCanvas=function(t){return canvas=document.getElementById(t),this.ctx=canvas.getContext("2d"),canvas},o.prototype.initVars=function(n,e){t.extend(this.ctx,i),this.width=n,this.height=e},o.prototype.initObjects=function(){this.player=new n(100,0),this.controller=new e},o.prototype.managePositions=function(t,n){0>t.pos.y?(t.pos.y=0,t.vel.y=0):t.getBottom()>this.height&&(t.pos.y=0,t.vel.y=0),n.isKeyDown(n.Key.LEFT)?t.moveLeft():n.isKeyDown(n.Key.RIGHT)&&t.moveRight(),n.isKeyDown(n.Key.UP)?t.moveUp():n.isKeyDown(n.Key.DOWN)&&t.moveDown()},o}),require.config({baseUrl:"scripts/exp2",paths:{underscore:"../../components/underscore/underscore",creativejs:"../../libs/creativejs",vector2:"../../libs/Vector2",keytracker:"../../libs/KeyTracker",graphics:"../../libs/Graphics"},shim:{underscore:{exports:"_"}}}),require(["app"],function(t){var n=function(){function n(){onFrame.tgt=r,onFrame.on=!0}function e(){onFrame.tgt=null,onFrame.on=!1}var r=new t,i=r.setup("van");i.addEventListener("mouseover",n),i.addEventListener("mouseout",e)};n("van")}),define("main",function(){})})();
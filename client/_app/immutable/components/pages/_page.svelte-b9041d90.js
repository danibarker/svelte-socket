import{S as Fe,i as Ue,s as ze,k as A,q as V,a as I,l as R,m as O,r as F,h as E,c as q,n as _,b as Re,F as l,L as fe,M as pe,N as He,u as J,A as de,O as Ke,P as Ye,o as We}from"../../chunks/index-25767c28.js";const x=Object.create(null);x.open="0";x.close="1";x.ping="2";x.pong="3";x.message="4";x.upgrade="5";x.noop="6";const X=Object.create(null);Object.keys(x).forEach(s=>{X[x[s]]=s});const $e={type:"error",data:"parser error"},Je=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Xe=typeof ArrayBuffer=="function",Qe=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,Oe=({type:s,data:e},t,n)=>Je&&e instanceof Blob?t?n(e):ye(e,n):Xe&&(e instanceof ArrayBuffer||Qe(e))?t?n(e):ye(new Blob([e]),n):n(x[s]+(e||"")),ye=(s,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+n)},t.readAsDataURL(s)},me="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",K=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<me.length;s++)K[me.charCodeAt(s)]=s;const Ge=s=>{let e=s.length*.75,t=s.length,n,i=0,r,o,c,h;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);const v=new ArrayBuffer(e),m=new Uint8Array(v);for(n=0;n<t;n+=4)r=K[s.charCodeAt(n)],o=K[s.charCodeAt(n+1)],c=K[s.charCodeAt(n+2)],h=K[s.charCodeAt(n+3)],m[i++]=r<<2|o>>4,m[i++]=(o&15)<<4|c>>2,m[i++]=(c&3)<<6|h&63;return v},Ze=typeof ArrayBuffer=="function",Te=(s,e)=>{if(typeof s!="string")return{type:"message",data:Ce(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:je(s.substring(1),e)}:X[t]?s.length>1?{type:X[t],data:s.substring(1)}:{type:X[t]}:$e},je=(s,e)=>{if(Ze){const t=Ge(s);return Ce(t,e)}else return{base64:!0,data:s}},Ce=(s,e)=>{switch(e){case"blob":return s instanceof ArrayBuffer?new Blob([s]):s;case"arraybuffer":default:return s}},xe=String.fromCharCode(30),et=(s,e)=>{const t=s.length,n=new Array(t);let i=0;s.forEach((r,o)=>{Oe(r,!1,c=>{n[o]=c,++i===t&&e(n.join(xe))})})},tt=(s,e)=>{const t=s.split(xe),n=[];for(let i=0;i<t.length;i++){const r=Te(t[i],e);if(n.push(r),r.type==="error")break}return n},Ne=4;function d(s){if(s)return st(s)}function st(s){for(var e in d.prototype)s[e]=d.prototype[e];return s}d.prototype.on=d.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};d.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};d.prototype.off=d.prototype.removeListener=d.prototype.removeAllListeners=d.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var n,i=0;i<t.length;i++)if(n=t[i],n===e||n.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+s],this};d.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,i=t.length;n<i;++n)t[n].apply(this,e)}return this};d.prototype.emitReserved=d.prototype.emit;d.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};d.prototype.hasListeners=function(s){return!!this.listeners(s).length};const L=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function Be(s,...e){return e.reduce((t,n)=>(s.hasOwnProperty(n)&&(t[n]=s[n]),t),{})}const nt=setTimeout,it=clearTimeout;function Z(s,e){e.useNativeTimers?(s.setTimeoutFn=nt.bind(L),s.clearTimeoutFn=it.bind(L)):(s.setTimeoutFn=setTimeout.bind(L),s.clearTimeoutFn=clearTimeout.bind(L))}const rt=1.33;function ot(s){return typeof s=="string"?at(s):Math.ceil((s.byteLength||s.size)*rt)}function at(s){let e=0,t=0;for(let n=0,i=s.length;n<i;n++)e=s.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}class ct extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class Se extends d{constructor(e){super(),this.writable=!1,Z(this,e),this.opts=e,this.query=e.query,this.readyState="",this.socket=e.socket}onError(e,t,n){return super.emitReserved("error",new ct(e,t,n)),this}open(){return(this.readyState==="closed"||this.readyState==="")&&(this.readyState="opening",this.doOpen()),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Te(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}}const Le="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),te=64,ht={};let ge=0,W=0,be;function ve(s){let e="";do e=Le[s%te]+e,s=Math.floor(s/te);while(s>0);return e}function Pe(){const s=ve(+new Date);return s!==be?(ge=0,be=s):s+"."+ve(ge++)}for(;W<te;W++)ht[Le[W]]=W;function Ie(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function lt(s){let e={},t=s.split("&");for(let n=0,i=t.length;n<i;n++){let r=t[n].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}let qe=!1;try{qe=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const ut=qe;function De(s){const e=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||ut))return new XMLHttpRequest}catch{}if(!e)try{return new L[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function ft(){}const pt=function(){return new De({xdomain:!1}).responseType!=null}();class dt extends Se{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const n=location.protocol==="https:";let i=location.port;i||(i=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port,this.xs=e.secure!==n}const t=e&&e.forceBase64;this.supportsBinary=pt&&!t}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};tt(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,et(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let e=this.query||{};const t=this.opts.secure?"https":"http";let n="";this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=Pe()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.opts.port&&(t==="https"&&Number(this.opts.port)!==443||t==="http"&&Number(this.opts.port)!==80)&&(n=":"+this.opts.port);const i=Ie(e),r=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(r?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(i.length?"?"+i:"")}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new C(this.uri(),e)}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(i,r)=>{this.onError("xhr post error",i,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}class C extends d{constructor(e,t){super(),Z(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.async=t.async!==!1,this.data=t.data!==void 0?t.data:null,this.create()}create(){const e=Be(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;const t=this.xhr=new De(e);try{t.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0);for(let n in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(n)&&t.setRequestHeader(n,this.opts.extraHeaders[n])}}catch{}if(this.method==="POST")try{t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{t.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in t&&(t.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(t.timeout=this.opts.requestTimeout),t.onreadystatechange=()=>{t.readyState===4&&(t.status===200||t.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof t.status=="number"?t.status:0)},0))},t.send(this.data)}catch(n){this.setTimeoutFn(()=>{this.onError(n)},0);return}typeof document<"u"&&(this.index=C.requestsCount++,C.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=ft,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete C.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}C.requestsCount=0;C.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",we);else if(typeof addEventListener=="function"){const s="onpagehide"in L?"pagehide":"unload";addEventListener(s,we,!1)}}function we(){for(let s in C.requests)C.requests.hasOwnProperty(s)&&C.requests[s].abort()}const yt=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0))(),$=L.WebSocket||L.MozWebSocket,_e=!0,mt="arraybuffer",Ee=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class gt extends Se{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,n=Ee?{}:Be(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=_e&&!Ee?t?new $(e,t):new $(e):new $(e,t,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType||mt,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;Oe(n,this.supportsBinary,r=>{const o={};try{_e&&this.ws.send(r)}catch{}i&&yt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const t=this.opts.secure?"wss":"ws";let n="";this.opts.port&&(t==="wss"&&Number(this.opts.port)!==443||t==="ws"&&Number(this.opts.port)!==80)&&(n=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=Pe()),this.supportsBinary||(e.b64=1);const i=Ie(e),r=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(r?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(i.length?"?"+i:"")}check(){return!!$}}const bt={websocket:gt,polling:dt},vt=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,wt=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function se(s){const e=s,t=s.indexOf("["),n=s.indexOf("]");t!=-1&&n!=-1&&(s=s.substring(0,t)+s.substring(t,n).replace(/:/g,";")+s.substring(n,s.length));let i=vt.exec(s||""),r={},o=14;for(;o--;)r[wt[o]]=i[o]||"";return t!=-1&&n!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=_t(r,r.path),r.queryKey=Et(r,r.query),r}function _t(s,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.substr(0,1)=="/"||e.length===0)&&n.splice(0,1),e.substr(e.length-1,1)=="/"&&n.splice(n.length-1,1),n}function Et(s,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,r){i&&(t[i]=r)}),t}class S extends d{constructor(e,t={}){super(),e&&typeof e=="object"&&(t=e,e=null),e?(e=se(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=se(t.host).host),Z(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},t),this.opts.path=this.opts.path.replace(/\/$/,"")+"/",typeof this.opts.query=="string"&&(this.opts.query=lt(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&addEventListener("beforeunload",()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},!1),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=Ne,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts.transportOptions[e],this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new bt[e](n)}open(){let e;if(this.opts.rememberUpgrade&&S.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),n=!1;S.priorWebsocketSuccess=!1;const i=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",g=>{if(!n)if(g.type==="pong"&&g.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;S.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(m(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const f=new Error("probe error");f.transport=t.name,this.emitReserved("upgradeError",f)}}))};function r(){n||(n=!0,m(),t.close(),t=null)}const o=g=>{const f=new Error("probe error: "+g);f.transport=t.name,r(),this.emitReserved("upgradeError",f)};function c(){o("transport closed")}function h(){o("socket closed")}function v(g){t&&g.name!==t.name&&r()}const m=()=>{t.removeListener("open",i),t.removeListener("error",o),t.removeListener("close",c),this.off("close",h),this.off("upgrading",v)};t.once("open",i),t.once("error",o),t.once("close",c),this.once("close",h),this.once("upgrading",v),t.open()}onOpen(){if(this.readyState="open",S.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade&&this.transport.pause){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(t+=ot(i)),n>0&&t>this.maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}write(e,t,n){return this.sendPacket("message",e,t,n),this}send(e,t,n){return this.sendPacket("message",e,t,n),this}sendPacket(e,t,n,i){if(typeof t=="function"&&(i=t,t=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:e,data:t,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}onError(e){S.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&removeEventListener("offline",this.offlineEventListener,!1),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let n=0;const i=e.length;for(;n<i;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}S.protocol=Ne;function kt(s,e="",t){let n=s;t=t||typeof location<"u"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t<"u"?s=t.protocol+"//"+s:s="https://"+s),n=se(s)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+e,n.href=n.protocol+"://"+r+(t&&t.port===n.port?"":":"+n.port),n}const At=typeof ArrayBuffer=="function",Rt=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,Me=Object.prototype.toString,Ot=typeof Blob=="function"||typeof Blob<"u"&&Me.call(Blob)==="[object BlobConstructor]",Tt=typeof File=="function"||typeof File<"u"&&Me.call(File)==="[object FileConstructor]";function oe(s){return At&&(s instanceof ArrayBuffer||Rt(s))||Ot&&s instanceof Blob||Tt&&s instanceof File}function Q(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,n=s.length;t<n;t++)if(Q(s[t]))return!0;return!1}if(oe(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return Q(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&Q(s[t]))return!0;return!1}function Ct(s){const e=[],t=s.data,n=s;return n.data=ne(t,e),n.attachments=e.length,{packet:n,buffers:e}}function ne(s,e){if(!s)return s;if(oe(s)){const t={_placeholder:!0,num:e.length};return e.push(s),t}else if(Array.isArray(s)){const t=new Array(s.length);for(let n=0;n<s.length;n++)t[n]=ne(s[n],e);return t}else if(typeof s=="object"&&!(s instanceof Date)){const t={};for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=ne(s[n],e));return t}return s}function xt(s,e){return s.data=ie(s.data,e),s.attachments=void 0,s}function ie(s,e){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<e.length)return e[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=ie(s[t],e);else if(typeof s=="object")for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=ie(s[t],e));return s}const Nt=5;var a;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(a||(a={}));class Bt{constructor(e){this.replacer=e}encode(e){return(e.type===a.EVENT||e.type===a.ACK)&&Q(e)?(e.type=e.type===a.EVENT?a.BINARY_EVENT:a.BINARY_ACK,this.encodeAsBinary(e)):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===a.BINARY_EVENT||e.type===a.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Ct(e),n=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(n),i}}class ae extends d{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e),t.type===a.BINARY_EVENT||t.type===a.BINARY_ACK?(this.reconstructor=new St(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(oe(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(a[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===a.BINARY_EVENT||n.type===a.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(r,t)}else n.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const r=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(ae.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case a.CONNECT:return typeof t=="object";case a.DISCONNECT:return t===void 0;case a.CONNECT_ERROR:return typeof t=="string"||typeof t=="object";case a.EVENT:case a.BINARY_EVENT:return Array.isArray(t)&&t.length>0;case a.ACK:case a.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}class St{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=xt(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Lt=Object.freeze(Object.defineProperty({__proto__:null,protocol:Nt,get PacketType(){return a},Encoder:Bt,Decoder:ae},Symbol.toStringTag,{value:"Module"}));function T(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const Pt=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ve extends d{constructor(e,t,n){super(),this.connected=!1,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[T(e,"open",this.onopen.bind(this)),T(e,"packet",this.onpacket.bind(this)),T(e,"error",this.onerror.bind(this)),T(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(Pt.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');t.unshift(e);const n={type:a.EVENT,data:t};if(n.options={},n.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,c=t.pop();this._registerAckCallback(o,c),n.id=o}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(n),this.packet(n)):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(e,t){const n=this.flags.timeout;if(n===void 0){this.acks[e]=t;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let r=0;r<this.sendBuffer.length;r++)this.sendBuffer[r].id===e&&this.sendBuffer.splice(r,1);t.call(this,new Error("operation has timed out"))},n);this.acks[e]=(...r)=>{this.io.clearTimeoutFn(i),t.apply(this,[null,...r])}}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this.packet({type:a.CONNECT,data:e})}):this.packet({type:a.CONNECT,data:this.auth})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case a.CONNECT:if(e.data&&e.data.sid){const i=e.data.sid;this.onconnect(i)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case a.EVENT:case a.BINARY_EVENT:this.onevent(e);break;case a.ACK:case a.BINARY_ACK:this.onack(e);break;case a.DISCONNECT:this.ondisconnect();break;case a.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e)}ack(e){const t=this;let n=!1;return function(...i){n||(n=!0,t.packet({type:a.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e){this.id=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:a.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function U(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}U.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=(Math.floor(e*10)&1)==0?s-t:s+t}return Math.min(s,this.max)|0};U.prototype.reset=function(){this.attempts=0};U.prototype.setMin=function(s){this.ms=s};U.prototype.setMax=function(s){this.max=s};U.prototype.setJitter=function(s){this.jitter=s};class re extends d{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Z(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new U({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||Lt;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new S(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=T(t,"open",function(){n.onopen(),e&&e()}),r=T(t,"error",o=>{n.cleanup(),n._readyState="closed",this.emitReserved("error",o),e?e(o):n.maybeReconnectOnOpen()});if(this._timeout!==!1){const o=this._timeout;o===0&&i();const c=this.setTimeoutFn(()=>{i(),t.close(),t.emit("error",new Error("timeout"))},o);this.opts.autoUnref&&c.unref(),this.subs.push(function(){clearTimeout(c)})}return this.subs.push(i),this.subs.push(r),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(T(e,"ping",this.onping.bind(this)),T(e,"data",this.ondata.bind(this)),T(e,"error",this.onerror.bind(this)),T(e,"close",this.onclose.bind(this)),T(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch{this.onclose("parse error")}}ondecoded(e){this.emitReserved("packet",e)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n||(n=new Ve(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(function(){clearTimeout(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const H={};function G(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=kt(s,e.path||"/socket.io"),n=t.source,i=t.id,r=t.path,o=H[i]&&r in H[i].nsps,c=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let h;return c?h=new re(n,e):(H[i]||(H[i]=new re(n,e)),h=H[i]),t.query&&!e.query&&(e.query=t.queryKey),h.socket(t.path,e)}Object.assign(G,{Manager:re,Socket:Ve,io:G,connect:G});const It="http://localhost:3000",qt=G(It),ee=qt;function ke(s,e,t){const n=s.slice();return n[5]=e[t],n}function Ae(s){let e,t,n,i=s[5].from+"",r,o,c,h=s[5].time+"",v,m,g=s[5].message+"",f,w;return{c(){e=A("div"),t=A("span"),n=A("b"),r=V(i),o=I(),c=A("i"),v=V(h),m=I(),f=V(g),w=I(),this.h()},l(k){e=R(k,"DIV",{class:!0});var y=O(e);t=R(y,"SPAN",{class:!0});var B=O(t);n=R(B,"B",{});var D=O(n);r=F(D,i),D.forEach(E),o=q(B),c=R(B,"I",{});var z=O(c);v=F(z,h),z.forEach(E),B.forEach(E),m=q(y),f=F(y,g),w=q(y),y.forEach(E),this.h()},h(){_(t,"class","flex items-center space-between gap-4"),_(e,"class","bg-zinc-300 rounded-xl rounded-tl-none px-4 py-3 my-4 w-fit")},m(k,y){Re(k,e,y),l(e,t),l(t,n),l(n,r),l(t,o),l(t,c),l(c,v),l(e,m),l(e,f),l(e,w)},p(k,y){y&4&&i!==(i=k[5].from+"")&&J(r,i),y&4&&h!==(h=k[5].time+"")&&J(v,h),y&4&&g!==(g=k[5].message+"")&&J(f,g)},d(k){k&&E(e)}}}function Dt(s){let e,t,n,i,r,o,c,h,v,m,g,f,w,k,y,B,D,z,M=s[2],b=[];for(let p=0;p<M.length;p+=1)b[p]=Ae(ke(s,M,p));return{c(){e=A("div"),t=A("div"),n=A("header"),i=A("span"),r=V("My Chat app"),o=I(),c=A("span"),h=V(s[1]),v=I(),m=A("div");for(let p=0;p<b.length;p+=1)b[p].c();g=I(),f=A("form"),w=A("input"),k=I(),y=A("button"),B=V("Send"),this.h()},l(p){e=R(p,"DIV",{class:!0});var N=O(e);t=R(N,"DIV",{class:!0});var u=O(t);n=R(u,"HEADER",{class:!0});var P=O(n);i=R(P,"SPAN",{class:!0});var ce=O(i);r=F(ce,"My Chat app"),ce.forEach(E),o=q(P),c=R(P,"SPAN",{});var he=O(c);h=F(he,s[1]),he.forEach(E),P.forEach(E),v=q(u),m=R(u,"DIV",{class:!0});var le=O(m);for(let j=0;j<b.length;j+=1)b[j].l(le);le.forEach(E),g=q(u),f=R(u,"FORM",{action:!0,class:!0});var Y=O(f);w=R(Y,"INPUT",{type:!0,placeholder:!0,class:!0}),k=q(Y),y=R(Y,"BUTTON",{type:!0,class:!0});var ue=O(y);B=F(ue,"Send"),ue.forEach(E),Y.forEach(E),u.forEach(E),N.forEach(E),this.h()},h(){_(i,"class","font-bold text-xl"),_(n,"class","px-6 py-4 border-b border-zinc-800 bg-zinc-700 text-white shrink-0 flex items-center justify-between"),_(m,"class","h-full w-full p-4"),_(w,"type","text"),_(w,"placeholder","Type something..."),_(w,"class","bg-transparent border-none px-4 py-3 w-full"),_(y,"type","submit"),_(y,"class","shrink-0 border border-white rounded-lg px-4 py-3"),_(f,"action","#"),_(f,"class","px-6 py-4 border-t border-zinc-800 bg-zinc-700 text-white shrink-0 flex items-center"),_(t,"class","h-full w-full max-w-md mx-auto bg-zinc-500 flex flex-col"),_(e,"class","h-screen w-screen bg-zinc-800")},m(p,N){Re(p,e,N),l(e,t),l(t,n),l(n,i),l(i,r),l(n,o),l(n,c),l(c,h),l(t,v),l(t,m);for(let u=0;u<b.length;u+=1)b[u].m(m,null);l(t,g),l(t,f),l(f,w),fe(w,s[0]),l(f,k),l(f,y),l(y,B),D||(z=[pe(w,"input",s[4]),pe(f,"submit",He(s[3]))],D=!0)},p(p,[N]){if(N&2&&J(h,p[1]),N&4){M=p[2];let u;for(u=0;u<M.length;u+=1){const P=ke(p,M,u);b[u]?b[u].p(P,N):(b[u]=Ae(P),b[u].c(),b[u].m(m,null))}for(;u<b.length;u+=1)b[u].d(1);b.length=M.length}N&1&&w.value!==p[0]&&fe(w,p[0])},i:de,o:de,d(p){p&&E(e),Ke(b,p),D=!1,Ye(z)}}}function Mt(s,e,t){let n="",i="",r=[];We(()=>{ee.on("message",h=>{t(2,r=[...r,h])}),ee.on("name",h=>{t(1,i=h)})});function o(){const h=n.trim();!h||(t(0,n=""),ee.emit("message",h))}function c(){n=this.value,t(0,n)}return[n,i,r,o,c]}class Ft extends Fe{constructor(e){super(),Ue(this,e,Mt,Dt,ze,{})}}export{Ft as default};

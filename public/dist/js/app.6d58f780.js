(function(e){function t(t){for(var r,s,o=t[0],c=t[1],d=t[2],h=0,f=[];h<o.length;h++)s=o[h],a[s]&&f.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"19b8":function(e,t){e.exports="data:image/png;base64,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"},2856:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}})},i=[],s=n("1929"),o=n.n(s),c=n("c665"),d=n("aa9a"),u=n("19b8"),h=function(){function e(t){var n=t.draw,r=t.x,a=t.y,i=t.r;Object(c["a"])(this,e),this.draw=n,this.x=r,this.y=a,this.r=i,this.instance,this.init()}return Object(d["a"])(e,[{key:"init",value:function(){var e=this.draw.circle(this.r);e.style({"stroke-width":"5",fill:"#fff"}).move(this.x,this.y),this.instance={node:e,length:2*Math.PI*this.r}}},{key:"_drawCountDown",value:function(e,t){var n=this.instance,r=n.node,a=r.cx(),i=r.cy(),s=this.draw.circle(this.r-30),o=2*Math.PI*(this.r-30);return s.attr("stroke-dasharray",o).style({fill:"#fff","stroke-width":3,"stroke-dashoffset":o,stroke:e}),s.center(a,i).animate(t).style({"stroke-dashoffset":1}),s}},{key:"drawCountDown",value:function(){var e=this.instance,t=e.data.state;this.removeCountDown(),"follower"==t?e.countDown=this._drawCountDown("#000",1e3*e.data.elapsed+1e3):"candidate"==t?e.countDown=this._drawCountDown("#f00",1e3*e.data.elapsed+1e3):"leader"==t&&(e.countDown=this._drawCountDown("#f00",1e3*e.data.life))}},{key:"removeCountDown",value:function(){var e=this.instance;e.countDown&&e.countDown.remove()}},{key:"drawText",value:function(){var e=this.instance;e.text&&e.text.remove();var t=e.node.x(),n=e.node.cy(),r=e.data,a=this.draw.text(function(e){e.tspan(r.server_name).newLine(),e.tspan(r.state).newLine(),e.tspan("倒计时：".concat(r.elapsed)).newLine(),e.tspan("行为: ".concat(r.loop)).newLine()});a.move(t,n+this.r),e.text=a}},{key:"startMining",value:function(){this.endMining();var e=this.instance,t=e.node.cx(),n=e.node.cy(),r=this.draw.image(u,25,25);r.center(t,n),e.startMining=r}},{key:"endMining",value:function(){this.instance.startMining&&this.instance.startMining.remove()}},{key:"renderFollower",value:function(){var e=this.instance.data.loop;switch(this.instance.node.attr({stroke:"#333","stroke-dasharray":1}),this.instance.isLeader=!1,e){case"Heartbeat":this.drawCountDown();break;case"append_entries":this.removeCountDown();break;case"start_mining":this.startMining();break;case"end_mining":this.endMining();break}}},{key:"renderCandidate",value:function(){this.instance.isLeader=!1,this.instance.node.attr({stroke:"#f00","stroke-dasharray":3}),this.instance.data.elapsed>0&&this.drawCountDown()}},{key:"renderLeader",value:function(){this.instance.isLeader||(this.drawCountDown(),this.instance.node.attr({stroke:"#f00","stroke-dasharray":this.instance.length}),this.instance.isLeader=!0)}},{key:"render",value:function(e){var t=e.state;this.drawText(),"follower"==t?this.renderFollower():"candidate"==t?this.renderCandidate():"leader"==t&&this.renderLeader()}},{key:"change",value:function(e){this.instance.data=e,this.render(e)}}]),e}(),f=h,l=function(){function e(t){Object(c["a"])(this,e),this.draw=t,this.nodes={},this.idx=1,this.r=100}return Object(d["a"])(e,[{key:"add",value:function(e){var t=this.idx%5;0==t&&(t=5),this.nodes[e.server_name]=new f({draw:this.draw,x:2*this.r*(t+1),y:300*(Math.ceil(this.idx/5)-1)+20,r:this.r}),this.idx+=1,this.dispatch(e)}},{key:"dispatch",value:function(e){this.nodes[e.server_name].change(e)}},{key:"change",value:function(e){var t=JSON.parse(e);this.nodes[t.server_name]?this.dispatch(t):this.add(t)}}]),e}(),w=l,p={name:"app",components:{},created:function(){},mounted:function(){var e=o()("app").size("100%","1000px"),t=new w(e),n=function e(){var n=new WebSocket("ws://10.0.248.211:8081","echo-protocol");n.addEventListener("message",function(e){t.change(e.data)},!1),n.addEventListener("close",function(t){console.log("close !"),console.log(t),e()},!1),n.addEventListener("error",function(e){console.log("error !"),console.log(e)},!1)};n(),window.ani=t}},v=p,g=(n("5c0b"),n("2877")),y=Object(g["a"])(v,a,i,!1,null,null,null);y.options.__file="App.vue";var k=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("2856"),a=n.n(r);a.a}});
//# sourceMappingURL=app.6d58f780.js.map
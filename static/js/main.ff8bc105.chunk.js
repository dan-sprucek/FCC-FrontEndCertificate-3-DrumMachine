(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(2),i=n.n(s),r=(n(12),n(3)),c=n(4),l=n(6),u=n(5),m=(n(13),function(){return o.a.createElement("h1",null,"Drum Machine")}),d=function(e){return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6 row",style:{height:200}},e.keystrokes.map((function(t,n){return o.a.createElement("button",{className:"col-4 drum-pad",id:e.songs[n],onClick:e.playSong,key:t},t,o.a.createElement("audio",{src:"./sounds/".concat(e.songs[n],".wav"),className:"clip",id:t}))}))),o.a.createElement("div",{className:"col-6"},o.a.createElement("h2",null,"Now playing:"),o.a.createElement("h3",{id:"display"},e.name),o.a.createElement("button",{onClick:e.turnOnOff},e.online?"TURN OFF":"TURN ON"))))},h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).handleClick=function(t){e.state.online&&(document.getElementById(t.target.innerText).play(),e.setState({name:t.target.id}))},e.handleOnOff=function(){e.state.online?e.setState({name:"Turn on the Drum Machine first"}):e.setState({name:"Click buttons/keys to play sounds"}),e.setState((function(e){return{online:!e.online}}))},e.state={songs:["bongo","dirtyhat","ghost","kick","pop","quartertone","snare","subbasesoft","wip"],keystrokes:["Q","W","E","A","S","D","Z","X","C"],name:"Click buttons/keys to play sounds",online:!0},document.addEventListener("keydown",(function(t){if(e.state.online){var n=t.key.toUpperCase();e.state.keystrokes.indexOf(n)>=0&&(document.getElementById(n).play(),e.setState({name:e.state.songs[e.state.keystrokes.indexOf(n)]}))}})),e}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App",id:"drum-machine"},o.a.createElement(m,null),o.a.createElement(d,{playSong:this.handleClick,songs:this.state.songs,name:this.state.name,keystrokes:this.state.keystrokes,online:this.state.online,turnOnOff:this.handleOnOff}))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.ff8bc105.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13);var l=n(1),s=n(2),i=n(4),u=n(3),h=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-yellow dib br3 bw3 pa2 ma2 grow shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/ ".concat(t,"?200x200")}),r.a.createElement("h2",null,n),r.a.createElement("p",null,a))},m=(n(14),function(e){var t=e.robo;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,email:t[n].name})})))}),d=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"3px red solid",height:"800px"}},e.children)},f=function(e){var t=e.searchnew;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa2 bg-lightest-blue",type:"search",placeholder:"robots",onChange:t}))},p=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={errors:!1},a}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e){this.setState({errors:!0})}},{key:"render",value:function(){return this.state.errors?r.a.createElement("h1",null,"yoooo "):this.props.children}}]),n}(a.Component),b=(n(17),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robot:[],searchfield:""},console.log("Comp"),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robot:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robot,n=e.searchfield,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"robofriends"),r.a.createElement(f,{searchnew:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(p,null,r.a.createElement(m,{robo:a})))):r.a.createElement("h1",{className:"tc"},"now loading")}}]),n}(a.Component));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.101f7de3.chunk.js.map
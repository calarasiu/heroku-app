(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(t,n,e){},14:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var c=e(0),i=e(1),r=e.n(i),o=e(3),u=e.n(o),s=(e(13),e(4)),a=e(5),h=e(7),l=e(6),j=(e(14),function(t){Object(h.a)(e,t);var n=Object(l.a)(e);function e(){var t;return Object(s.a)(this,e),(t=n.call(this)).state={countries:[]},t}return Object(a.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("/api/v1/countries").then((function(t){return t.json()})).then((function(n){t.setState({countries:n})}))}},{key:"render",value:function(){var t=this.state.countries.map((function(t,n){return Object(c.jsx)("li",{children:t.name},n)}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Country list"}),Object(c.jsx)("ul",{children:t})]})}}]),e}(i.Component)),f=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,16)).then((function(n){var e=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,o=n.getTTFB;e(t),c(t),i(t),r(t),o(t)}))};u.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.f9107ed5.chunk.js.map
(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{16:function(t,n,e){"use strict";e.r(n);var r=e(8),o=e.n(r),c=e(9),a=e(2),i=e(3),s=e(5),u=e(4),l=e(7),d=e.n(l),f=e(1),h=e.n(f),j=e(0),b=function(t){Object(s.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(a.a)(this,e);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=n.call.apply(n,[this].concat(o))).state={},t}return Object(i.a)(e,[{key:"render",value:function(){var t=this.props.goods;return Object(j.jsx)("ul",{children:t.map((function(t){return Object(j.jsx)("li",{style:{color:t.color},children:t.name},t.name)}))})}}]),e}(f.Component);function p(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}function O(){return p().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)}))})).then((function(t){return t.slice(0,5)}))}function g(){return p().then((function(t){return t.filter((function(t){return"red"===t.color}))}))}var m=function(t){Object(s.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(a.a)(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n.call.apply(n,[this].concat(o))).state={goods:[]},t.loader=function(){var n=Object(c.a)(d.a.mark((function n(e){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=t,n.next=3,e();case 3:n.t1=n.sent,n.t2={goods:n.t1},n.t0.setState.call(n.t0,n.t2);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),t}return Object(i.a)(e,[{key:"render",value:function(){var t=this.state.goods,n=this.loader;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Dynamic list of Goods"}),Object(j.jsx)("button",{type:"button",onClick:function(){return n(p)},children:"Load All goods"}),Object(j.jsx)("button",{type:"button",onClick:function(){return n(O)},children:"Load 5 first goods"}),Object(j.jsx)("button",{type:"button",onClick:function(){return n(g)},children:"Load red goods"}),t.length>0&&Object(j.jsx)(b,{goods:t})]})}}]),e}(h.a.Component);o.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7acc0d1b.chunk.js.map
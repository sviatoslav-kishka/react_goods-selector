(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),s=n(3),l=n.n(s),a=n(1),r=n(4),i=n(5),d=n(8),u=n(7),m=(n(14),n(6)),f=n.n(m),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:["Jam"]},e.formatTitle=function(){var t=e.state.selectedGoods;switch(t.length){case 0:return"No Goods Selected";case 1:return"".concat(t[0]," is Selected");default:return"".concat(t.slice(0,-1).join(", ")," and\n          ").concat(t.slice(-1)," are Selected")}},e.selectItem=function(t){e.setState((function(e){var n=Object(a.a)(e.selectedGoods);return n.push(t),{selectedGoods:n}}))},e.unSelectItem=function(t){e.setState((function(e){var n=Object(a.a)(e.selectedGoods),c=n.indexOf(t);return n.splice(c,1),{selectedGoods:n}}))},e.clearAllSelections=function(){e.setState({selectedGoods:[]})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,this.formatTitle()),o.a.createElement("button",{type:"button",onClick:this.clearAllSelections,disabled:0===this.state.selectedGoods.length},"Clear all Selections"),o.a.createElement("ul",null,p.map((function(t){return o.a.createElement("li",{key:t,className:f()("goods__item",{selectedGood:e.state.selectedGoods.includes(t)})},t,o.a.createElement("button",{type:"button",onClick:e.state.selectedGoods.includes(t)?function(){e.unSelectItem(t)}:function(){e.selectItem(t)}},e.state.selectedGoods.includes(t)?"Unselect":"Select"))}))))}}]),n}(o.a.Component);l.a.render(o.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.4ad340f5.chunk.js.map
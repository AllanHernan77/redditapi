(this.webpackJsonpreddiapi=this.webpackJsonpreddiapi||[]).push([[0],{12:function(t,e,n){},26:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var s=n(2),r=n.n(s),o=n(3),a=n.n(o),c=(n(26),n(7)),i=n(8),p=n(4),l=n(10),u=n(9),d=(n(12),n(21)),h=n.n(d),j=n(0),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={posts:[]},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"rhsBlock",children:[Object(j.jsxs)("a",{href:this.props.props.url_overridden_by_dest,target:"_blank",rel:"noreferrer",children:[" ",Object(j.jsx)("h1",{className:"title",children:this.props.props.title})]}),Object(j.jsxs)("a",{href:this.props.props.url_overridden_by_dest,target:"_blank",rel:"noreferrer",children:[" ",Object(j.jsx)("p",{children:this.props.props.domain})," "]}),Object(j.jsxs)("p",{children:["Submitted x hours ago by ",Object(j.jsx)("p",{className:"userName",children:this.props.props.name})]}),Object(j.jsxs)("p",{className:"commentSection",children:[" ",this.props.props.num_comments+" Comments ","   "]}),"  ",Object(j.jsx)("p",{className:"footer",children:"share save hide report pocket "})]})}}]),n}(r.a.Component),b=m,f=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={posts:[]},t.downVoteFunction=function(e){var n,s=a.a.findDOMNode(Object(p.a)(t)),r=0;for(s instanceof HTMLElement&&(n=s.querySelectorAll(".test")),r=0;r<25;r++)n[r].outerText===e.ups.toString()&&(n[r].innerHTML=e.ups-1)},t.upVoteFunction=function(e){var n,s=a.a.findDOMNode(Object(p.a)(t)),r=0;for(s instanceof HTMLElement&&(n=s.querySelectorAll(".test")),r=0;r<25;r++)n[r].outerText===e.ups.toString()&&(n[r].innerHTML=e.ups+1)},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;h.a.get("https://www.reddit.com/r/pics.json").then((function(e){var n=e.data.data.children;t.setState({posts:n})}))}},{key:"render",value:function(){var t=this;return Object(j.jsx)("div",{className:"outerBlock",children:Object(j.jsx)("ul",{className:"listPost",children:this.state.posts.map((function(e){return Object(j.jsxs)("li",{className:"listElements",children:[Object(j.jsx)("input",{type:"image",src:"https://www.pngitem.com/pimgs/m/71-715538_reddit-arrow-transparent-background-reddit-upvote-icon-hd.png",alt:"upvote",name:"saveForm",className:"upVote",width:"30px",onClick:function(){t.upVoteFunction(e.data)}}),Object(j.jsx)("div",{className:"test",children:e.data.ups}),Object(j.jsx)("input",{type:"image",src:"https://metro.co.uk/wp-content/uploads/2014/12/downvote_1551690908.png",name:"saveForm",alt:"downvote",className:"downVote",width:"30px",onClick:function(){t.downVoteFunction(e.data)}}),Object(j.jsx)("img",{src:e.data.thumbnail,alt:"thumbnail"})," ",Object(j.jsx)(b,{props:e.data})," ",Object(j.jsx)("hr",{})]})}))})})}}]),n}(r.a.Component),O=f,v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),s(t),r(t),o(t),a(t)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.842db777.chunk.js.map
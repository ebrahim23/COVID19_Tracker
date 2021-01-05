(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{14:function(e,t,a){e.exports={container:"Cards_container__3BBMy",card:"Cards_card__15sGf",infected:"Cards_infected__2ySY3",recovered:"Cards_recovered__3clog",deaths:"Cards_deaths__3wsvp"}},208:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),c=a(71),o=a.n(c),s=a(6),i=a.n(s),u=a(11),d=a(72),l=a(73),j=a(81),f=a(80),p=a(226),b=a(230),h=a(227),v=a(228),x=a(14),m=a.n(x),O=a(31),g=a.n(O),y=a(32),_=a.n(y);var C=function(e){var t=e.data,a=t.confirmed,n=t.deaths,c=t.recovered,o=t.lastUpdate;return a?Object(r.jsx)("div",{className:m.a.container,children:Object(r.jsxs)(p.a,{container:!0,spacing:3,justify:"center",children:[Object(r.jsx)(p.a,{item:!0,component:b.a,className:_()(m.a.card,m.a.infected),xs:12,md:3,children:Object(r.jsxs)(h.a,{children:[Object(r.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(r.jsx)(v.a,{variant:"h5",children:Object(r.jsx)(g.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(r.jsx)(v.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(r.jsx)(v.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(r.jsx)(p.a,{item:!0,component:b.a,className:_()(m.a.card,m.a.recovered),xs:12,md:3,children:Object(r.jsxs)(h.a,{children:[Object(r.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(r.jsx)(v.a,{variant:"h5",children:Object(r.jsx)(g.a,{start:0,end:c.value,duration:2.5,separator:","})}),Object(r.jsx)(v.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(r.jsx)(v.a,{variant:"body2",children:"Number of recoveries from COVID-19"})]})}),Object(r.jsx)(p.a,{item:!0,component:b.a,className:_()(m.a.card,m.a.deaths),xs:12,md:3,children:Object(r.jsxs)(h.a,{children:[Object(r.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(r.jsx)(v.a,{variant:"h5",children:Object(r.jsx)(g.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(r.jsx)(v.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(r.jsx)(v.a,{variant:"body2",children:"Number of deaths caused by COVID-19"})]})})]})}):"Loading..."},w=a(30),k=a(33),D=a.n(k),S="https://covid19.mathdro.id/api",N=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r,n,c,o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,D.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.deaths,s=n.recovered,u=n.lastUpdate,e.abrupt("return",{confirmed:c,deaths:o,recovered:s,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,r=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=a(45),U=a(78),A=a.n(U);var E=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,d=Object(n.useState)([]),l=Object(w.a)(d,2),j=l[0],f=l[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=j.length?Object(r.jsx)(V.Line,{data:{labels:j.map((function(e){return e.date})),datasets:[{data:j.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:j.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,.5)",fill:!0}]}}):null,b=a?Object(r.jsx)(V.Bar,{data:{labels:["Infeted","Rcovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 250, 0.5)","rgba(0, 0, 250, 0.5)","rgba(250, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return Object(r.jsx)("div",{className:A.a.container,children:s?b:p})},J=a(231),R=a(229),G=a(79),L=a.n(G);var M=function(e){var t=e.handleCountries,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){return function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s]),Object(r.jsx)(J.a,{className:L.a.formControl,children:Object(r.jsxs)(R.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(r.jsx)("option",{value:"",children:"Global"}),o.map((function(e,t){return Object(r.jsx)("option",{value:e,children:e},t)}))]})})},P=a(46),F=a.n(P),H=a.p+"static/media/image.9e5d4fc7.png",K=function(e){Object(j.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountries=function(){var t=Object(u.a)(i.a.mark((function t(a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(r.jsxs)("div",{className:F.a.container,children:[Object(r.jsx)("img",{src:H,alt:"COVID-19",className:F.a.logo}),Object(r.jsx)(C,{data:t}),Object(r.jsx)(M,{handleCountries:this.handleCountries}),Object(r.jsx)(E,{data:t,country:a})]})}}]),a}(n.Component);o.a.render(Object(r.jsx)(K,{}),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__1RuKC",logo:"App_logo__3mUmH"}},78:function(e,t,a){e.exports={container:"Chart_container__B55ea"}},79:function(e,t,a){e.exports={formControl:"Picker_formControl__3NBJF"}}},[[208,1,2]]]);
//# sourceMappingURL=main.6f93e78c.chunk.js.map
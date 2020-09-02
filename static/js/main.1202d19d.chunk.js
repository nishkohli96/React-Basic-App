(this["webpackJsonpreact-basic-app"]=this["webpackJsonpreact-basic-app"]||[]).push([[0],{107:function(e,a,t){},162:function(e,a,t){e.exports=t(175)},167:function(e,a,t){},174:function(e,a,t){},175:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),c=t.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(68),i=t(17),u=(t(107),t(167),t(35)),m=t(36),s=t(38),d=t(39),p=t(232),E=t(4),b=t(231),g=t(112),h=t.n(g),f=t(111),v=t.n(f),k=t(11),y=t(77),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},O=t(54),j=t(101),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,t={id:a.id,text:a.text,completed:!1};if(""===a.text)return Object(j.a)(e);switch(a.type){case"ADD_ITEM":return[].concat(Object(j.a)(e),[t]);case"DELETE_ITEM":return e.filter((function(e){return e.id!==a.id}));case"TOGGLE_ITEM":return e.map((function(e){return e.id!==a.id?e:Object(O.a)({},e,{completed:!e.completed})}));default:return e}},w=Object(y.a)({returnCounter:C,todoList:x}),N=Object(y.b)(w),S=t(110),I=t.n(S),T=function(){var e,a=Object(n.useState)(N.getState().returnCounter),t=Object(k.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(N.getState().todoList),i=Object(k.a)(o,2),u=i[0],m=i[1],s=Object(n.useState)("SHOW_ALL"),d=Object(k.a)(s,2),p=d[0],E=d[1],g=Object(n.useState)(0),h=Object(k.a)(g,2),f=h[0],v=h[1];N.subscribe((function(){return c(N.getState().returnCounter)})),N.subscribe((function(){return m(N.getState().todoList)}));var y=function(e){var a=e.item;return l.a.createElement("div",{className:"listitem"},l.a.createElement("div",{className:"itemText",onClick:function(){return N.dispatch({type:"TOGGLE_ITEM",id:a.id})}}," ",a.completed?x(a.text):a.text," "),l.a.createElement("div",{className:"itemRemove"}," ",l.a.createElement(I.a,{onClick:function(){return N.dispatch({type:"DELETE_ITEM",id:a.id})}})," "))},C=function(e){var a=e.title,t=e.filterName;return t===p?l.a.createElement("span",null," ",a," "):l.a.createElement("div",{className:"activeFilter",onClick:function(){return E(t)}},a)},O=function(){var e=u;switch(p){case"SHOW_ALL":return e.length>0?l.a.createElement(j,{list:e}):"No Tasks Noted Down";case"ITEMS_COMPLETED":return(e=e.filter((function(e){return e.completed}))).length>0?l.a.createElement(j,{list:e}):"No Completed Tasks";case"ITEMS_PENDING":return(e=e.filter((function(e){return!e.completed}))).length>0?l.a.createElement(j,{list:e}):"No Pending Tasks"}},j=function(e){var a=e.list;return l.a.createElement("div",null,l.a.createElement("ul",{type:"square"},a.map((function(e){return l.a.createElement("li",{key:e.id}," ",l.a.createElement(y,{item:e})," ")}))))},x=function(e){return l.a.createElement("div",{className:"text-striked"}," ",e," ")};return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null," Redux Counter and To-Do List Example "),l.a.createElement("p",null," Counter Value : ",r," "),l.a.createElement(b.a,{style:{backgroundColor:"#21b6ae",color:"yellow"},variant:"contained",onClick:function(){return N.dispatch({type:"INCREMENT"})}},"Inc counter"),l.a.createElement(b.a,{style:{backgroundColor:"#21b6ae",color:"yellow"},variant:"contained",onClick:function(){return N.dispatch({type:"DECREMENT"})}},"Dec counter"),l.a.createElement("div",{className:"div_list"},l.a.createElement("p",null," To-Do List ")," ",l.a.createElement("br",null),l.a.createElement("input",{ref:function(a){e=a},style:{width:"200px",height:"25px"}}),l.a.createElement(b.a,{onClick:function(){N.dispatch({type:"ADD_ITEM",text:e.value,id:f}),v(f+1),e.value=""},style:{backgroundColor:"#21b6ae",marginLeft:"10px",color:"yellow"}},"Add Item"),l.a.createElement("div",{className:"listOptions"},l.a.createElement("div",null," ",l.a.createElement(C,{filterName:"SHOW_ALL",title:"All Items"})," "),l.a.createElement("div",null," ",l.a.createElement(C,{filterName:"ITEMS_PENDING",title:"Pending"})," "),l.a.createElement("div",null," ",l.a.createElement(C,{filterName:"ITEMS_COMPLETED",title:"Completed"})," ")),l.a.createElement(O,null)))},F=Object(p.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})),L=Object(E.a)({root:{fontSize:16,textTransform:"none",borderColor:"#007ABA",fontFamily:['"Helvetica Neue"'].join(","),"&:hover":{backgroundColor:"#0069d9",borderColor:"red",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}},button:{backgroundColor:"orange",color:"#007aba"}})(b.a);function P(){var e=F();return l.a.createElement("div",{className:e.root},l.a.createElement(b.a,{style:{backgroundColor:"#21b6ae",color:"yellow"},variant:"contained",className:e.button,endIcon:l.a.createElement(v.a,null),onClick:M},"Fetch data"),l.a.createElement("br",null),l.a.createElement(b.a,{variant:"outlined",style:{color:"#21b6ae"},className:e.button,startIcon:l.a.createElement(h.a,null),onClick:B},"Login"),l.a.createElement(L,{variant:"contained",color:"primary",disableRipple:!0,onClick:D},"Activate Lazers"),l.a.createElement(o.b,{to:{pathname:"/ui",data:{name:"nish",msg:"Hi people"}}},"Click Me"),l.a.createElement(o.b,{to:{pathname:"/dashboard"}},"Go to dashboard"),l.a.createElement(T,null))}function D(){console.log("lazers activated"),window.location.href="/ui"}function M(){fetch("http://localhost:4000/items",{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e)}),(function(e){console.log(e)}))}function B(){fetch("http://localhost:4000/data",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:"nk@qw.qw",password:"nish134"})}).then((function(e){return e.json()})).then((function(e){console.log(e)}),(function(e){}))}var A=function(e){Object(d.a)(t,e);var a=Object(s.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(P,null)}}]),t}(l.a.Component);var G=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(A,null))},R=(t(174),t(90)),W=t(264),q=t(269),H=t(265),_=t(53),z=t(268),$=t(125),J=t.n($),V=t(270),K=t(239),U=t(233),Q=Object(p.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}})),X=Object(E.a)({switchBase:{color:"yellow","&$checked":{color:"red"},"&$checked + $track":{backgroundColor:"#006699"}},checked:{},track:{}})(U.a),Y=function(e){e.target.checked?document.getElementById("standard-required").value="Switch Toggled On":document.getElementById("standard-required").value="Toggled Off"};function Z(){var e=Q();return l.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},l.a.createElement("div",null,l.a.createElement(V.a,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World"}),l.a.createElement(V.a,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password"}),l.a.createElement(V.a,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),l.a.createElement(V.a,{error:!0,id:"standard-error-helper-text",label:"Error",defaultValue:"Hello World",helperText:"Incorrect entry."}),l.a.createElement(K.a,{control:l.a.createElement(U.a,{onChange:Y,name:"checkedB",color:"primary"}),label:"Change value of reqd field"})," ",l.a.createElement("br",null),l.a.createElement(K.a,{control:l.a.createElement(X,{onChange:Y,name:"checkedC"}),label:"Change value of reqd field"})))}var ee=function(e){Object(d.a)(t,e);var a=Object(s.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(Z,null)}}]),t}(l.a.Component),ae=t(240),te=t(241);function ne(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(ae.a,null),l.a.createElement(te.a,{fixed:!0},l.a.createElement(_.a,{component:"div",style:{backgroundColor:"#cfe8fc",height:"100px"}},"Inside Container",l.a.createElement("div",{style:{backgroundColor:"pink",color:"#FFFFFF"}},"Inside the pink Container"))))}var le=t(132),re=t(242),ce=Object(p.a)((function(e){return{root:{flexGrow:1},paper:{margin:e.spacing(.5),padding:e.spacing(2),textAlign:"center",color:"blue",backgroundColor:"lightgreen"}}}));function oe(){var e=ce();return l.a.createElement("div",{className:e.root},l.a.createElement(re.a,{container:!0},l.a.createElement(re.a,{item:!0,xs:12},l.a.createElement(le.a,{className:e.paper},"xs=12")),l.a.createElement(re.a,{item:!0,xs:12,sm:6},l.a.createElement(le.a,{className:e.paper},"xs=12 sm=6")),l.a.createElement(re.a,{item:!0,xs:12,sm:6},l.a.createElement(le.a,{className:e.paper},"xs=12 sm=6")),l.a.createElement(re.a,{item:!0,xs:6,sm:3},l.a.createElement(le.a,{className:e.paper},"xs=6 sm=3")),l.a.createElement(re.a,{item:!0,xs:6,sm:3},l.a.createElement(le.a,{className:e.paper},"xs=6 sm=3")),l.a.createElement(re.a,{item:!0,xs:6,sm:3},l.a.createElement(le.a,{className:e.paper},"xs=6 sm=3")),l.a.createElement(re.a,{item:!0,xs:6,sm:3},l.a.createElement(le.a,{className:e.paper},"xs=6 sm=3"))))}var ie=t(275),ue=t(244),me=t(245),se=Object(E.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",backgroundColor:"lightgreen",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(ie.a),de=Object(E.a)({root:{backgroundColor:"skyblue",borderBottom:"1px solid orange",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{backgroundColor:"#007ABA"}})(ue.a),pe=Object(E.a)((function(e){return{root:{padding:e.spacing(2)}}}))(me.a);function Ee(){var e=l.a.useState("panel1"),a=Object(k.a)(e,2),t=a[0],n=a[1],r=function(e){return function(a,t){n(!!t&&e)}};return l.a.createElement("div",null,l.a.createElement(se,{square:!0,expanded:"panel1"===t,onChange:r("panel1")},l.a.createElement(de,{"aria-controls":"panel1d-content",id:"panel1d-header"},l.a.createElement(_.a,null,"Collapsible Group Item #1")),l.a.createElement(pe,null,l.a.createElement(_.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),l.a.createElement(se,{square:!0,expanded:"panel2"===t,onChange:r("panel2")},l.a.createElement(de,{"aria-controls":"panel2d-content",id:"panel2d-header"},l.a.createElement(_.a,null,"Collapsible Group Item #2")),l.a.createElement(pe,null,l.a.createElement(_.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),l.a.createElement(se,{square:!0,expanded:"panel3"===t,onChange:r("panel3")},l.a.createElement(de,{"aria-controls":"panel3d-content",id:"panel3d-header"},l.a.createElement(_.a,null,"Collapsible Group Item #3")),l.a.createElement(pe,null,l.a.createElement(_.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))))}var be=t(246),ge=t(250),he=t(248),fe=t(249),ve=t(247);function ke(){var e=l.a.useState(!1),a=Object(k.a)(e,2),t=a[0],n=a[1],r=function(){n(!1)};return l.a.createElement("div",null,l.a.createElement(b.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)}},"Open alert dialog"),l.a.createElement(be.a,{open:t,onClose:r,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(ve.a,{id:"alert-dialog-title"},"Use Google's location service?"),l.a.createElement(he.a,null,l.a.createElement(fe.a,{id:"alert-dialog-description"},"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),l.a.createElement(ge.a,null,l.a.createElement(b.a,{onClick:r,color:"primary"},"Disagree"),l.a.createElement(b.a,{onClick:r,color:"primary",autoFocus:!0},"Agree"))))}var ye=t(238),Ce=t(178),Oe=t(251),je=t(276),xe=t(271),we=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function Ne(e){var a=e.onClose,t=e.value,n=e.open,r=Object(R.a)(e,["onClose","value","open"]),c=l.a.useState(t),o=Object(k.a)(c,2),i=o[0],u=o[1],m=l.a.useRef(null);l.a.useEffect((function(){n||u(t)}),[t,n]);return l.a.createElement(be.a,Object.assign({disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"xs",onEntering:function(){null!=m.current&&m.current.focus()},"aria-labelledby":"confirmation-dialog-title",open:n},r),l.a.createElement(ve.a,{id:"confirmation-dialog-title"},"Phone Ringtone"),l.a.createElement(he.a,{dividers:!0},l.a.createElement(je.a,{ref:m,"aria-label":"ringtone",name:"ringtone",value:i,onChange:function(e){u(e.target.value)}},we.map((function(e){return l.a.createElement(K.a,{value:e,key:e,control:l.a.createElement(xe.a,null),label:e})})))),l.a.createElement(ge.a,null,l.a.createElement(b.a,{autoFocus:!0,onClick:function(){a()},color:"primary"},"Cancel"),l.a.createElement(b.a,{onClick:function(){a(i)},color:"primary"},"Ok")))}var Se=Object(p.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},paper:{width:"80%",maxHeight:435}}}));function Ie(){var e=Se(),a=l.a.useState(!1),t=Object(k.a)(a,2),n=t[0],r=t[1],c=l.a.useState("Dione"),o=Object(k.a)(c,2),i=o[0],u=o[1];return l.a.createElement("div",{className:e.root},l.a.createElement(ye.a,{component:"div",role:"list"},l.a.createElement(Ce.a,{button:!0,divider:!0,disabled:!0,role:"listitem"},l.a.createElement(Oe.a,{primary:"Interruptions"})),l.a.createElement(Ce.a,{button:!0,divider:!0,"aria-haspopup":"true","aria-controls":"ringtone-menu","aria-label":"phone ringtone",onClick:function(){r(!0)},role:"listitem"},l.a.createElement(Oe.a,{primary:"Phone ringtone",secondary:i})),l.a.createElement(Ce.a,{button:!0,divider:!0,disabled:!0,role:"listitem"},l.a.createElement(Oe.a,{primary:"Default notification ringtone",secondary:"Tethys"})),l.a.createElement(Ne,{classes:{paper:e.paper},id:"ringtone-menu",keepMounted:!0,open:n,onClose:function(e){r(!1),e&&u(e)},value:i})))}var Te=t(277),Fe=t(113),Le=t.n(Fe),Pe=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},chip:{margin:e.spacing(.5)}}}));function De(){var e=Pe(),a=l.a.useState([{key:0,label:"Angular"},{key:1,label:"jQuery"},{key:2,label:"Polymer"},{key:3,label:"React"},{key:4,label:"Vue.js"}]),t=Object(k.a)(a,2),n=t[0],r=t[1];return l.a.createElement(le.a,{component:"ul",className:e.root},n.map((function(a){var t,n;return"React"===a.label&&(t=l.a.createElement(Le.a,null)),l.a.createElement("li",{key:a.key},l.a.createElement(Te.a,{icon:t,label:a.label,onDelete:"React"===a.label?void 0:(n=a,function(){r((function(e){return e.filter((function(e){return e.key!==n.key}))}))}),className:e.chip}))}))," ",l.a.createElement("br",null),["red","skyblue","green","orange","yellow"].map((function(a){return l.a.createElement("li",{key:a},l.a.createElement(Te.a,{label:a,className:e.chip,style:{backgroundColor:a}}))})))}var Me=t(252),Be=t(253),Ae=t(243),Ge=t(69),Re=t.n(Ge),We=t(115),qe=t.n(We),He=t(114),_e=t.n(He),ze=t(116),$e=t.n(ze),Je=t(117),Ve=t.n(Je),Ke=t(118),Ue=t.n(Ke),Qe=Object(p.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:"#4c4c4c"},nested:{paddingLeft:e.spacing(4)}}}));function Xe(){var e=Qe(),a=l.a.useState(!0),t=Object(k.a)(a,2),n=t[0],r=t[1];return l.a.createElement(ye.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:l.a.createElement(Me.a,{component:"div",id:"nested-list-subheader"},"Nested List Items"),className:e.root},l.a.createElement(Ce.a,{button:!0},l.a.createElement(Be.a,null,l.a.createElement(_e.a,null)),l.a.createElement(Oe.a,{primary:"Sent mail"})),l.a.createElement(Ce.a,{button:!0},l.a.createElement(Be.a,null,l.a.createElement(qe.a,null)),l.a.createElement(Oe.a,{primary:"Drafts"})),l.a.createElement(Ce.a,{button:!0,onClick:function(){r(!n)}},l.a.createElement(Be.a,null,l.a.createElement(Re.a,null)),l.a.createElement(Oe.a,{primary:"Inbox"}),n?l.a.createElement($e.a,null):l.a.createElement(Ve.a,null)),l.a.createElement(Ae.a,{in:n,timeout:"auto",unmountOnExit:!0},l.a.createElement(ye.a,{component:"div",disablePadding:!0},l.a.createElement(Ce.a,{button:!0,className:e.nested},l.a.createElement(Be.a,null,l.a.createElement(Ue.a,null)),l.a.createElement(Oe.a,{primary:"Starred"})))))}var Ye=t(254),Ze=t(278),ea=t(119),aa=t.n(ea),ta=t(121),na=t.n(ta),la=t(122),ra=t.n(la),ca=t(255),oa=t(279),ia=Object(p.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},listItem:{backgroundColor:"skyblue",color:"purple"}}}));function ua(){var e=ia();return l.a.createElement(ye.a,{className:e.root},l.a.createElement(Ce.a,{className:e.listItem},l.a.createElement(Ye.a,null,l.a.createElement(Ze.a,null,l.a.createElement(aa.a,null))),l.a.createElement(Oe.a,{primary:"Photos",secondary:"Jan 9, 2014"})),l.a.createElement(ca.a,null),l.a.createElement(oa.a,{title:"Work baby",placement:"right-start",arrow:!0},l.a.createElement(Ce.a,null,l.a.createElement(Ye.a,null,l.a.createElement(Ze.a,null,l.a.createElement(na.a,{style:{color:"lightgreen"}}))),l.a.createElement(Oe.a,{primary:"Work",secondary:"Jan 7, 2014"}))),l.a.createElement(ca.a,{light:!0}),l.a.createElement(Ce.a,null,l.a.createElement(Oe.a,{primary:"Vacation",secondary:"July 20, 2014"}),l.a.createElement(Ye.a,null,l.a.createElement(Ze.a,null,l.a.createElement(ra.a,null)))))}var ma=t(25),sa=t(3),da=t(7),pa=t(261),Ea=t(262),ba=t(258),ga=t(260),ha=t(256),fa=t(281),va=t(257),ka=t(280),ya=t(259),Ca=t(274),Oa=t(131),ja=t(123),xa=t.n(ja),wa=t(124),Na=t.n(wa);function Sa(e,a,t,n,l){return{name:e,calories:a,fat:t,carbs:n,protein:l}}var Ia=[Sa("Cupcake",305,3.7,67,4.3),Sa("Donut",452,25,51,4.9),Sa("Eclair",262,16,24,6),Sa("Frozen yoghurt",159,6,24,4),Sa("Gingerbread",356,16,49,3.9),Sa("Honeycomb",408,3.2,87,6.5),Sa("Ice cream sandwich",237,9,37,4.3),Sa("Jelly Bean",375,0,94,0),Sa("KitKat",518,26,65,7),Sa("Lollipop",392,.2,98,0),Sa("Marshmallow",318,0,81,2),Sa("Nougat",360,19,9,37),Sa("Oreo",437,18,63,4)];function Ta(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var Fa=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert\xa0(100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat\xa0(g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs\xa0(g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein\xa0(g)"}];function La(e){var a=e.classes,t=e.onSelectAllClick,n=e.order,r=e.orderBy,c=e.numSelected,o=e.rowCount,i=e.onRequestSort;return l.a.createElement(ha.a,null,l.a.createElement(va.a,null,l.a.createElement(ba.a,{padding:"checkbox"},l.a.createElement(Ca.a,{indeterminate:c>0&&c<o,checked:o>0&&c===o,onChange:t,inputProps:{"aria-label":"select all desserts"}})),Fa.map((function(e){return l.a.createElement(ba.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:r===e.id&&n},l.a.createElement(ka.a,{active:r===e.id,direction:r===e.id?n:"asc",onClick:(t=e.id,function(e){i(e,t)})},e.label,r===e.id?l.a.createElement("span",{className:a.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var t}))))}var Pa=Object(p.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(da.e)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),Da=function(e){var a=Pa(),t=e.numSelected;return l.a.createElement(ya.a,{className:Object(sa.a)(a.root,Object(ma.a)({},a.highlight,t>0))},t>0?l.a.createElement(_.a,{className:a.title,color:"inherit",variant:"subtitle1",component:"div"},t," selected"):l.a.createElement(_.a,{className:a.title,variant:"h6",id:"tableTitle",component:"div"},"Nutrition"),t>0?l.a.createElement(oa.a,{title:"Delete"},l.a.createElement(Oa.a,{"aria-label":"delete"},l.a.createElement(xa.a,null))):l.a.createElement(oa.a,{title:"Filter list"},l.a.createElement(Oa.a,{"aria-label":"filter list"},l.a.createElement(Na.a,null))))},Ma=Object(p.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function Ba(){var e=Ma(),a=l.a.useState("asc"),t=Object(k.a)(a,2),n=t[0],r=t[1],c=l.a.useState("calories"),o=Object(k.a)(c,2),i=o[0],u=o[1],m=l.a.useState([]),s=Object(k.a)(m,2),d=s[0],p=s[1],E=l.a.useState(0),b=Object(k.a)(E,2),g=b[0],h=b[1],f=l.a.useState(!1),v=Object(k.a)(f,2),y=v[0],C=v[1],O=l.a.useState(5),j=Object(k.a)(O,2),x=j[0],w=j[1],N=x-Math.min(x,Ia.length-g*x);return l.a.createElement("div",{className:e.root},l.a.createElement(le.a,{className:e.paper},l.a.createElement(Da,{numSelected:d.length}),l.a.createElement(ga.a,null,l.a.createElement(pa.a,{className:e.table,"aria-labelledby":"tableTitle",size:y?"small":"medium","aria-label":"enhanced table"},l.a.createElement(La,{classes:e,numSelected:d.length,order:n,orderBy:i,onSelectAllClick:function(e){if(e.target.checked){var a=Ia.map((function(e){return e.name}));p(a)}else p([])},onRequestSort:function(e,a){r(i===a&&"asc"===n?"desc":"asc"),u(a)},rowCount:Ia.length}),l.a.createElement(Ea.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(Ia,function(e,a){return"desc"===e?function(e,t){return Ta(e,t,a)}:function(e,t){return-Ta(e,t,a)}}(n,i)).slice(g*x,g*x+x).map((function(e,a){var t,n=(t=e.name,-1!==d.indexOf(t)),r="enhanced-table-checkbox-".concat(a);return l.a.createElement(va.a,{hover:!0,onClick:function(a){return function(e,a){var t=d.indexOf(a),n=[];-1===t?n=n.concat(d,a):0===t?n=n.concat(d.slice(1)):t===d.length-1?n=n.concat(d.slice(0,-1)):t>0&&(n=n.concat(d.slice(0,t),d.slice(t+1))),p(n)}(0,e.name)},role:"checkbox","aria-checked":n,tabIndex:-1,key:e.name,selected:n},l.a.createElement(ba.a,{padding:"checkbox"},l.a.createElement(Ca.a,{checked:n,inputProps:{"aria-labelledby":r}})),l.a.createElement(ba.a,{component:"th",id:r,scope:"row",padding:"none"},e.name),l.a.createElement(ba.a,{align:"right"},e.calories),l.a.createElement(ba.a,{align:"right"},e.fat),l.a.createElement(ba.a,{align:"right"},e.carbs),l.a.createElement(ba.a,{align:"right"},e.protein))})),N>0&&l.a.createElement(va.a,{style:{height:(y?33:53)*N}},l.a.createElement(ba.a,{colSpan:6}))))),l.a.createElement(fa.a,{rowsPerPageOptions:[5,10,25],component:"div",count:Ia.length,rowsPerPage:x,page:g,onChangePage:function(e,a){h(a)},onChangeRowsPerPage:function(e){w(parseInt(e.target.value,10)),h(0)}})),l.a.createElement(K.a,{control:l.a.createElement(U.a,{checked:y,onChange:function(e){C(e.target.checked)}}),label:"Dense padding"}))}function Aa(e){var a=e.children,t=e.value,n=e.index,r=Object(R.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),t===n&&l.a.createElement(z.a,{p:3},l.a.createElement(_.a,null,a)))}function Ga(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Ra=Object(p.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function Wa(){var e=Ra(),a=l.a.useState(1),t=Object(k.a)(a,2),n=t[0],r=t[1];return l.a.createElement("div",{className:e.root},l.a.createElement(W.a,{position:"static"},l.a.createElement(q.a,{value:n,variant:"fullWidth",onChange:function(e,a){r(a)},"aria-label":"simple tabs example"},l.a.createElement(H.a,Object.assign({label:"TextField",icon:l.a.createElement(J.a,null),wrapped:!0},Ga(0))),l.a.createElement(H.a,Object.assign({label:"Container"},Ga(1))),l.a.createElement(H.a,Object.assign({label:"Grids"},Ga(2))),l.a.createElement(H.a,Object.assign({label:"Disabled Tab",disabled:!0},Ga(3))),l.a.createElement(H.a,Object.assign({label:"Tables"},Ga(4))))),l.a.createElement(Aa,{value:n,index:0},l.a.createElement(ee,null),l.a.createElement("br",null),l.a.createElement(De,null)," ",l.a.createElement("br",null),l.a.createElement(Xe,null)),l.a.createElement(Aa,{value:n,index:1},l.a.createElement(ne,null)," ",l.a.createElement("br",null),l.a.createElement(Ee,null)," ",l.a.createElement("br",null),l.a.createElement(ua,null)),l.a.createElement(Aa,{value:n,index:2},l.a.createElement(oe,null)," ",l.a.createElement("br",null),l.a.createElement(ke,null)," ",l.a.createElement("br",null),l.a.createElement(Ie,null)),l.a.createElement(Aa,{value:n,index:3},"This Table is disabled."),l.a.createElement(Aa,{value:n,index:4},l.a.createElement(Ba,null)))}var qa=function(e){Object(d.a)(t,e);var a=Object(s.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.location.data;return console.log("data here:",e),l.a.createElement("div",{className:"header"},l.a.createElement(Wa,null))}}]),t}(l.a.Component),Ha=function(e){Object(d.a)(t,e);var a=Object(s.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"Page Not Found")}}]),t}(l.a.Component),_a=t(134),za=t(266),$a=t(263),Ja=t(130),Va=t(127),Ka=t.n(Va),Ua=t(99),Qa=t.n(Ua),Xa=t(62),Ya=t.n(Xa),Za=t(98),et=t.n(Za),at=t(128),tt=t.n(at),nt=t(272),lt=t(126),rt=t.n(lt),ct=Object(p.a)({list:{width:250,color:"#FFFFFF"},listicon:{color:"#FFFFFF"},fullList:{width:"auto"},drawerPaper:{background:"#2E3B55"},menu:{color:"#FFFFFF",marginLeft:"-10px",marginRight:"20px"}});function ot(){var e=ct(),a=l.a.useState({top:!1,left:!1,bottom:!1,right:!1}),t=Object(k.a)(a,2),n=t[0],r=t[1],c=function(e,a){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&r(Object(O.a)({},n,Object(ma.a)({},e,a)))}};return l.a.createElement("div",null,["left"].map((function(a){return l.a.createElement(l.a.Fragment,{key:a},l.a.createElement(Oa.a,{className:e.menu,onClick:c(a,!0)}," ",l.a.createElement(rt.a,null)," "),l.a.createElement(nt.a,{anchor:a,open:n[a],onClose:c(a,!1),onOpen:c(a,!0),classes:{paper:e.drawerPaper}},function(a){return l.a.createElement("div",{className:Object(sa.a)(e.list,Object(ma.a)({},e.fullList,"top"===a||"bottom"===a)),role:"presentation",onClick:c(a,!1),onKeyDown:c(a,!1)},l.a.createElement(ye.a,null,["Inbox","Starred","Send email","Drafts"].map((function(a,t){return l.a.createElement(Ce.a,{button:!0,key:a},l.a.createElement(Be.a,{className:e.listicon},t%2===0?l.a.createElement(Re.a,null):l.a.createElement(Ya.a,null)),l.a.createElement(Oe.a,{primary:a}))}))),l.a.createElement(ca.a,null),l.a.createElement(ye.a,null,["All mail","Trash","Spam"].map((function(a,t){return l.a.createElement(Ce.a,{button:!0,key:a},l.a.createElement(Be.a,{className:e.listicon},t%2===0?l.a.createElement(Re.a,null):l.a.createElement(Ya.a,null)),l.a.createElement(Oe.a,{primary:a}))}))))}(a)))})))}var it=Object(p.a)((function(e){return{grow:{flexGrow:1},navbgcolor:{backgroundColor:"#2E3B55"},menuButton:{marginLeft:e.spacing(1)},title:Object(ma.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(ma.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(da.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(da.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(ma.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(ma.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(ma.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function ut(){var e=it(),a=l.a.useState(null),t=Object(k.a)(a,2),n=t[0],r=t[1],c=l.a.useState(null),o=Object(k.a)(c,2),i=o[0],u=o[1],m=Boolean(n),s=Boolean(i),d=function(e){r(e.currentTarget)},p=function(){u(null)},E=function(){r(null),p()};var b="primary-search-account-menu",g=l.a.createElement(Ja.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:b,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:E},l.a.createElement($a.a,{onClick:E},"Profile"),l.a.createElement($a.a,{onClick:E},"My account")),h=l.a.createElement(Ja.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:p},l.a.createElement($a.a,null,l.a.createElement(Oa.a,{"aria-label":"show 4 new mails",color:"inherit"},l.a.createElement(za.a,{badgeContent:4,color:"secondary"},l.a.createElement(Ya.a,null))),l.a.createElement("p",null,"Messages")),l.a.createElement($a.a,null,l.a.createElement(Oa.a,{"aria-label":"show 11 new notifications",color:"inherit"},l.a.createElement(za.a,{badgeContent:11,color:"secondary"},l.a.createElement(et.a,null))),l.a.createElement("p",null,"Notifications")),l.a.createElement($a.a,{onClick:d},l.a.createElement(Oa.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},l.a.createElement(Qa.a,null)),l.a.createElement("p",null,"Profile")));return l.a.createElement("div",{className:e.grow},l.a.createElement(W.a,{position:"static",className:e.navbgcolor},l.a.createElement(ya.a,null,l.a.createElement(ot,{className:e.menuButton}),l.a.createElement(_.a,{className:e.title,variant:"h6",noWrap:!0},"Material-UI"),l.a.createElement("div",{className:e.grow}),l.a.createElement("div",{className:e.search},l.a.createElement("div",{className:e.searchIcon},l.a.createElement(Ka.a,null)),l.a.createElement(_a.a,{placeholder:"Search\u2026",id:"searchInput",classes:{root:e.inputRoot,input:e.inputInput},onKeyUp:function(e){console.log("event : ",e.keyCode);var a=document.getElementById("searchInput").value;console.log(a)},inputProps:{"aria-label":"search"}})),l.a.createElement("div",{className:e.sectionDesktop},l.a.createElement(Oa.a,{"aria-label":"show 4 new mails",color:"inherit"},l.a.createElement(za.a,{badgeContent:4,color:"secondary"},l.a.createElement(Ya.a,null))),l.a.createElement(Oa.a,{"aria-label":"show 17 new notifications",color:"inherit"},l.a.createElement(za.a,{badgeContent:17,color:"secondary"},l.a.createElement(et.a,null))),l.a.createElement(Oa.a,{edge:"end","aria-label":"account of current user","aria-controls":b,"aria-haspopup":"true",onClick:d,color:"inherit"},l.a.createElement(Qa.a,null))),l.a.createElement("div",{className:e.sectionMobile},l.a.createElement(Oa.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},l.a.createElement(tt.a,null))))),h,g)}var mt=t(100),st=t.n(mt),dt=t(267),pt=t(129),Et=t.n(pt),bt=Object(p.a)((function(e){return{root:{flexGrow:1},paper:{margin:e.spacing(.5),padding:e.spacing(2),textAlign:"center",color:"blue"},fabGreen:{color:"blue",backgroundColor:"orange","&:hover":{backgroundColor:"teal"}}}})),gt=Object(E.a)({root:{color:"pink","&$checked":{color:"blue"}},checked:{}})((function(e){return l.a.createElement(Ca.a,Object.assign({color:"default"},e))}));function ht(){var e=bt(),a=l.a.useState({checkedA:!0,checkedB:!1,checkedF:!0,checkedG:!0}),t=Object(k.a)(a,2),n=t[0],r=t[1],c=function(e){r(Object(O.a)({},n,Object(ma.a)({},e.target.name,e.target.checked)))};return l.a.createElement("div",null,"Inside form body",l.a.createElement("div",{className:e.root},l.a.createElement(re.a,{container:!0},l.a.createElement(re.a,{item:!0,xs:12,md:4},l.a.createElement(le.a,{elevation:5,className:e.paper},l.a.createElement(K.a,{checked:n.checkedB,control:l.a.createElement(Ca.a,{checked:n.checkedB,onChange:c,name:"checkedB",color:"primary"}),label:"Primary"}))),l.a.createElement(re.a,{item:!0,xs:12,md:4},l.a.createElement(le.a,{className:e.paper},l.a.createElement(K.a,{checked:n.checkedA,control:l.a.createElement(Ca.a,{icon:l.a.createElement(st.a,null),checkedIcon:l.a.createElement(st.a,null),name:"checkedA",onChange:c}),label:"Custom icon"}))),l.a.createElement(re.a,{item:!0,xs:12,md:4},l.a.createElement(le.a,{className:e.paper},l.a.createElement(K.a,{control:l.a.createElement(gt,{checked:n.checkedC,onChange:c,name:"checkedC"}),label:"Custom color"}))))),l.a.createElement(dt.a,{className:e.fabGreen,onClick:function(e){console.log("fab btn clicked")},size:"small","aria-label":"add"}," ",l.a.createElement(Et.a,null)," "))}var ft=function(e){Object(d.a)(t,e);var a=Object(s.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(ut,null),l.a.createElement(ht,null))}}]),t}(l.a.Component),vt=l.a.createElement(o.a,null,l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/",component:G}),l.a.createElement(i.b,{path:"/ui",component:qa}),l.a.createElement(i.b,{path:"/dashboard",component:ft}),l.a.createElement(i.b,{path:"/404",component:Ha}),l.a.createElement(i.a,{to:"/404"})));c.a.render(vt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[162,1,2]]]);
//# sourceMappingURL=main.1202d19d.chunk.js.map
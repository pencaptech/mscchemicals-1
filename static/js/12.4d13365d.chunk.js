(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1339:function(e,t,a){"use strict";a.r(t);var n=a(51),s=a(32),r=a(33),l=a(67),c=a(34),o=a(68),i=a(64),m=a(1),d=a.n(m),p=a(140),u=(a(90),a(621)),E=a(69),f=a(1300),v=a(45),h=a.n(v),g=a(102),N=a.n(g),x=a(646),b=a.n(x),y=a(648),O=a(1052),w=a.n(O),j=(a(1165),a(13)),C=(m.Component,a(1167));w.a.momentLocalizer(N.a);var M=w.a.momentLocalizer(N.a),D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!1,dropdownOpen:!1,page:{number:0,size:10,totalElements:0,totalPages:0},data:{companies:0,posts:0,articles:0,recommendations:0},eventDate:new Date,events:[],companies:[],styles:{MARKET_FOLLOWUP:{backgroundColor:"#f39c12",borderColor:"#f39c12"},SALES_FOLLOWUP:{backgroundColor:"#0073b7",borderColor:"#0073b7"},purchases_FOLLOWUP:{backgroundColor:"#00c0ef",borderColor:"#00c0ef"},COMMON:{backgroundColor:"#00a65a",borderColor:"#00a65a"}}},a.parseStyleProp=function(e){var t=e.style;return t?{style:t}:{}},a.selectEvent=function(e){console.log(e)},a.resizeEvent=function(e,t){var s=t.event,r=t.start,l=t.end,c=a.state.events.map(function(e){return e.id===s.id?Object(n.a)({},e,{start:r,end:l}):e});a.setState({events:c}),console.log("".concat(s.title," was resized to ").concat(r,"-").concat(l))},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get(i.i+i.d+"user/dashboard").then(function(t){e.setState({data:t.data})}),this.loadCompanies(),this.loadEvents()}},{key:"loadCompanies",value:function(e){var t=this;e||(e=1);var a=i.i+i.d+"api/companies?projection=company_details&role=ROLE_USER&sort=id,desc&size=10&page="+(e-1);h.a.get(a).then(function(e){t.setState({companies:e.data._embedded.companies,page:e.data.page})})}},{key:"loadEvents",value:function(){var e=this,t=i.i+i.d+"api/events?uid="+this.props.user.id+"&"+Object(i.f)(N()(this.state.eventDate),"fromTime")+"&size=100000";h.a.get(t).then(function(t){var a=t.data._embedded.events;a.forEach(function(t){t.style=e.state.styles[t.type],t.start=new Date(t.fromTime),t.end=new Date(t.toTime)}),e.setState({events:a})})}},{key:"onNavigate",value:function(e){this.setState({eventDate:e},this.loadEvents)}},{key:"render",value:function(){var e=this;return d.a.createElement(u.a,null,this.state.loading&&d.a.createElement(p.a,null),d.a.createElement("div",{className:"content-heading d-none"},d.a.createElement("div",null,"Dashboard")),d.a.createElement(j.x,null,"ROLE_ADMIN"==this.props.user.role&&d.a.createElement(j.e,{xl:3,md:6},d.a.createElement(f.a,{className:"text-decoration-none",to:"/users"},d.a.createElement("div",{className:"card flex-row align-items-center align-items-stretch border-0"},d.a.createElement("div",{className:"col-4 d-flex align-items-center justify-content-center rounded-left"},d.a.createElement("em",{className:"fa fa-users fa-3x"})),d.a.createElement("div",{className:"col-8 py-3 rounded-right"},d.a.createElement("div",{className:"h2 mt-0"},this.state.data.users),d.a.createElement("div",{className:"text-uppercase"},"Users"))))),("ROLE_ADMIN"==this.props.user.role||-1!=this.props.user.permissions.indexOf("MG_CM"))&&d.a.createElement(j.e,{xl:3,md:6},d.a.createElement(f.a,{className:"text-decoration-none",to:"/companies"},d.a.createElement("div",{className:"card flex-row align-items-center align-items-stretch border-0"},d.a.createElement("div",{className:"col-4 d-flex align-items-center justify-content-center rounded-left"},d.a.createElement("em",{className:"fa fa-university fa-3x"})),d.a.createElement("div",{className:"col-8 py-3 rounded-right"},d.a.createElement("div",{className:"h2 mt-0"},this.state.data.companies),d.a.createElement("div",{className:"text-uppercase"},"Companies"))))),("ROLE_ADMIN"==this.props.user.role||-1!=this.props.user.permissions.indexOf("MG_CM"))&&d.a.createElement(j.e,{xl:3,md:6},d.a.createElement(f.a,{className:"text-decoration-none",to:"/company-contact"},d.a.createElement("div",{className:"card flex-row align-items-center align-items-stretch border-0"},d.a.createElement("div",{className:"col-4 d-flex align-items-center justify-content-center rounded-left"},d.a.createElement("em",{className:"fa fa-address-book fa-3x"})),d.a.createElement("div",{className:"col-8 py-3 rounded-right"},d.a.createElement("div",{className:"h2 mt-0"},this.state.data.contacts),d.a.createElement("div",{className:"text-uppercase"},"Contacts"))))),("ROLE_ADMIN"==this.props.user.role||-1!=this.props.user.permissions.indexOf("MG_PD"))&&d.a.createElement(j.e,{xl:3,md:6},d.a.createElement(f.a,{className:"text-decoration-none",to:"/products"},d.a.createElement("div",{className:"card flex-row align-items-center align-items-stretch border-0"},d.a.createElement("div",{className:"col-4 d-flex align-items-center justify-content-center rounded-left"},d.a.createElement("em",{className:"fa fa-cubes fa-3x"})),d.a.createElement("div",{className:"col-8 py-3 rounded-right"},d.a.createElement("div",{className:"h2 mt-0"},this.state.data.products),d.a.createElement("div",{className:"text-uppercase"},"Products"))))),("ROLE_ADMIN"==this.props.user.role||-1!=this.props.user.permissions.indexOf("MG_OR"))&&d.a.createElement(j.e,{xl:3,md:6},d.a.createElement(f.a,{className:"text-decoration-none",to:"/orders"},d.a.createElement("div",{className:"card flex-row align-items-center align-items-stretch border-0"},d.a.createElement("div",{className:"col-4 d-flex align-items-center justify-content-center rounded-left"},d.a.createElement("em",{className:"fa fa-clipboard-list fa-3x"})),d.a.createElement("div",{className:"col-8 py-3 rounded-right"},d.a.createElement("div",{className:"h2 mt-0"},this.state.data.orders),d.a.createElement("div",{className:"text-uppercase"},"Orders"))))),("ROLE_ADMIN"==this.props.user.role||-1!=this.props.user.permissions.indexOf("MG_SE"))&&d.a.createElement(j.e,{xl:3,md:6},d.a.createElement(f.a,{className:"text-decoration-none",to:"/sales"},d.a.createElement("div",{className:"card flex-row align-items-center align-items-stretch border-0"},d.a.createElement("div",{className:"col-4 d-flex align-items-center justify-content-center rounded-left"},d.a.createElement("em",{className:"fa fa-cloud-upload-alt fa-3x"})),d.a.createElement("div",{className:"col-8 py-3 rounded-right"},d.a.createElement("div",{className:"h2 mt-0"},this.state.data.sales),d.a.createElement("div",{className:"text-uppercase"},"Sales"))))),("ROLE_ADMIN"==this.props.user.role||-1!=this.props.user.permissions.indexOf("MG_PR"))&&d.a.createElement(j.e,{xl:3,md:6},d.a.createElement(f.a,{className:"text-decoration-none",to:"/purchases"},d.a.createElement("div",{className:"card flex-row align-items-center align-items-stretch border-0"},d.a.createElement("div",{className:"col-4 d-flex align-items-center justify-content-center rounded-left"},d.a.createElement("em",{className:"fa fa-shopping-cart fa-3x"})),d.a.createElement("div",{className:"col-8 py-3 rounded-right"},d.a.createElement("div",{className:"h2 mt-0"},this.state.data.purchases),d.a.createElement("div",{className:"text-uppercase"},"Purchases"))))),("ROLE_ADMIN"==this.props.user.role||-1!=this.props.user.permissions.indexOf("MG_OR"))&&d.a.createElement(j.e,{xl:3,md:6},d.a.createElement(f.a,{className:"text-decoration-none",to:"/orders"},d.a.createElement("div",{className:"card flex-row align-items-center align-items-stretch border-0"},d.a.createElement("div",{className:"col-4 d-flex align-items-center justify-content-center rounded-left"},d.a.createElement("em",{className:"fa fa-book fa-3x"})),d.a.createElement("div",{className:"col-8 py-3 rounded-right"},d.a.createElement("div",{className:"h2 mt-0"},this.state.data.invoices),d.a.createElement("div",{className:"text-uppercase"},"Invoices")))))),("ROLE_ADMIN"==this.props.user.role||-1!=this.props.user.permissions.indexOf("MG_CM"))&&d.a.createElement(C.a,{className:"card-default"},d.a.createElement("div",{className:"card-header"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-12"},d.a.createElement("h3",null,"Companies")))),d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-12"},d.a.createElement(j.A,{hover:!0,responsive:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"#"),d.a.createElement("th",null,"Name"),d.a.createElement("th",null,"Type"),d.a.createElement("th",null,"Code"),d.a.createElement("th",null,"Created On"))),d.a.createElement("tbody",null,this.state.companies.map(function(e,t){return d.a.createElement("tr",{key:e.id},d.a.createElement("td",null,t+1),d.a.createElement("td",null,d.a.createElement(f.a,{to:"/companies/".concat(e.id)},e.name)),d.a.createElement("td",null,"B"===e.type?"Buyer":"Vendor"),d.a.createElement("td",null,e.code),d.a.createElement("td",null,d.a.createElement(b.a,{format:"DD MMM YY HH:mm"},e.creationDate)))}))),d.a.createElement(y.a,{page:this.state.page,onChange:function(t){return e.loadCompanies(t)}}))))),d.a.createElement(C.a,{className:"card-default"},d.a.createElement("div",{className:"card-header"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-12"},d.a.createElement("h3",null,"Events")))),d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-12"},d.a.createElement(w.a,{localizer:M,style:{minHeight:500},popup:!1,events:this.state.events,onEventDrop:this.moveEvent,onNavigate:function(t){return e.onNavigate(t)},onEventResize:this.resizeEvent,onSelectEvent:this.selectEvent,defaultView:"month",defaultDate:new Date,eventPropGetter:this.parseStyleProp}))))))}}]),t}(d.a.Component);t.default=Object(E.b)(function(e){return{settings:e.settings,user:e.login.userObj}})(D)},621:function(e,t,a){"use strict";var n=a(1),s=a.n(n),r=function(e){return s.a.createElement("div",{className:"content-wrapper"},e.unwrap?s.a.createElement("div",{className:"unwrap"},e.children):e.children)};r.defaultProps={unwrap:!1},t.a=r},648:function(e,t,a){"use strict";var n=a(791),s=a(32),r=a(33),l=a(67),c=a(34),o=a(68),i=a(1),m=a.n(i),d=a(682),p=a.n(d),u=a(792);function E(){var e=Object(n.a)(["\n    padding-top: 1em;\n    white-space: nowrap;\n    font-size: 16px;\n  "]);return E=function(){return e},e}function f(){var e=Object(n.a)(["\n    padding-top: 1em;\n    white-space: nowrap;\n    float: left;\n  "]);return f=function(){return e},e}function v(){var e=Object(n.a)(["\ndisplay: flex;\n-webkit-justify-content: flex-end;\njustify-content: flex-end;\nflex-direction: column;\nhite-space: nowrap;\ntext-align: right;\nmargin: 0px;\n\n"]);return v=function(){return e},e}function h(){var e=Object(n.a)(["\n    margin: 20px 10px 0;\n  "]);return h=function(){return e},e}var g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).renderPagination=function(){var e=a.props.page.number*a.props.page.size+1,t=e+a.props.page.size-1;t>a.props.page.totalElements&&(t=a.props.page.totalElements);var n="Showing "+e+" to "+t+" of "+a.props.page.totalElements+" entries";return m.a.createElement("div",{className:"row text-center"},0===a.props.page.totalElements&&m.a.createElement("div",{className:"col-sm-12"},m.a.createElement(y,null,"No records found")),a.props.page.totalElements>0&&a.props.page.totalPages>1&&m.a.createElement("div",{className:"col-sm-12 col-md-5"},m.a.createElement(b,null,n)),a.props.page.totalElements>0&&a.props.page.totalPages>1&&m.a.createElement("div",{className:"col-sm-12 col-md-7"},m.a.createElement(x,null,m.a.createElement(p.a,{activePage:a.props.page.number+1,itemsCountPerPage:a.props.page.size,totalItemsCount:a.props.page.totalElements,pageRangeDisplayed:5,onChange:a.props.onChange,itemClass:"page-item",linkClass:"page-link",prevPageText:"<",nextPageText:">"}))))},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(N,null,m.a.createElement("style",null,"ul.pagination { white-space: nowrap; justify-content: flex-end; margin: 2px 0px; }"),this.renderPagination())}}]),t}(m.a.Component);t.a=g;var N=u.a.div(h()),x=u.a.div(v()),b=u.a.span(f()),y=u.a.span(E())}}]);
//# sourceMappingURL=12.4d13365d.chunk.js.map
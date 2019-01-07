webpackJsonp([13],{2256:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var o=t[r](l),u=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current,account:e.app.account}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(13),c=n(i),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=a(0),m=n(f),p=a(14),h=a(15),b=a(12),y=a(2865),v=n(y),g=a(28),E=(a(23),a(24)),_=a(2866),k=n(_),w=a(2867),x=n(w),N=a(2868),T=a(26),C=a(97),S=a(205),O=a(17),P=a(77),M=n(P),j=a(106),A=a(16),I=n(A),R=a(33),L=n(R),F=function(e){function t(){var e=this;l(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.loadToken=function(){var t=r(c.default.mark(function t(n,r){var l,o,u;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0,token:{name:n}}),e.next=3,L.default.get(T.API_URL+"/api/token_trc20?sort=issue_time&start=0&limit=20");case 3:l=e.sent,o=l.data.trc20_tokens,u=I.default.find(o,function(e){return e.contract_address==r}),a.setState({loading:!1,token:u,tabs:[{id:"tokenInfo",icon:"",path:"",label:m.default.createElement("span",null,(0,h.tu)("issue_info")),cmp:function(){return m.default.createElement(x.default,{token:u})}},{id:"transfers",icon:"",path:"/transfers",label:m.default.createElement("span",null,(0,h.tu)("token_transfers")),cmp:function(){return m.default.createElement(k.default,{filter:{token:r},token:u})}},{id:"holders",icon:"",path:"/holders",label:m.default.createElement("span",null,(0,h.tu)("token_holders")),cmp:function(){return m.default.createElement(v.default,{filter:{token:r},token:u})}}]});case 7:case"end":return e.stop()}},t,e)}));return function(e,a){return t.apply(this,arguments)}}(),a.submit=function(){var t=r(c.default.mark(function t(n){var r,l,o,u,s,i,d;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.props,l=r.account,o=r.currentWallet,u=a.state,s=u.buyAmount,i=u.privateKey,e.next=4,p.Client.participateAsset(o.address,n.ownerAddress,n.id,s*n.price)(l.key);case 4:if(d=e.sent,!d.success){e.next=11;break}return a.setState({activeToken:null,confirmedParticipate:!0,participateSuccess:d.success,buyAmount:0}),a.props.reloadWallet(),e.abrupt("return",!0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),a.onInputChange=function(e){var t=a.props.account;e&&64===e.length?(a.privateKey.className="form-control",(0,j.pkToAddress)(e)!==t.address&&(a.privateKey.className="form-control is-invalid")):a.privateKey.className="form-control is-invalid",a.setState({privateKey:e}),a.privateKey.value=e},a.confirmPrivateKey=function(e){var t=a.state,n=(t.privateKey,t.token),r=a.props.account,l=function(){a.privateKey.value&&64===a.privateKey.value.length&&(0,j.pkToAddress)(a.privateKey.value)===r.address&&a.buyTokens(n)};a.setState({alert:m.default.createElement(M.default,{info:!0,showCancel:!0,cancelBtnText:(0,h.tu)("cancel"),confirmBtnText:(0,h.tu)("confirm"),confirmBtnBsStyle:"success",cancelBtnBsStyle:"default",title:(0,h.tu)("confirm_private_key"),onConfirm:l,onCancel:function(){return a.setState({alert:null})},style:{marginLeft:"-240px",marginTop:"-195px"}},m.default.createElement("div",{className:"form-group"},m.default.createElement("div",{className:"input-group mb-3"},m.default.createElement("input",{type:"text",ref:function(e){return a.privateKey=e},onChange:function(e){a.onInputChange(e.target.value)},className:"form-control is-invalid"}),m.default.createElement("div",{className:"invalid-feedback"},(0,h.tu)("fill_a_valid_private_key")))))})},a.isBuyValid=function(){return a.state.buyAmount>0},a.onBuyInputChange=function(e,t,n){var r=a.props.intl;e>n&&(e=n),a.setState({buyAmount:e}),a.buyAmount.value=e;var l=e*(t/T.ONE_TRX);a.priceTRX.innerHTML=r.formatNumber(l)},a.preBuyTokens=function(e){var t=(a.state.buyAmount,a.props),n=(t.currentWallet,t.wallet);t.intl;if(!n.isOpen)return void a.setState({alert:m.default.createElement(M.default,{info:!0,showConfirm:!1,style:{width:"30rem",height:"18.75rem",left:"50%",marginLeft:"-15rem"}},m.default.createElement("div",{className:"token-sweet-alert"},m.default.createElement("a",{className:"close",onClick:function(){a.setState({alert:null})}},m.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),m.default.createElement("span",null,(0,h.tu)("login_first")),m.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.setState({alert:null})}},(0,h.tu)("OK"))))});a.setState({alert:m.default.createElement(M.default,{showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},m.default.createElement("div",{className:"mt-5 token-sweet-alert",style:{textAlign:"left"}},m.default.createElement("a",{style:{float:"right",marginTop:"-45px"},onClick:function(){a.setState({alert:null})}},m.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),m.default.createElement("h5",{style:{color:"black"}},(0,h.tu)("buy_token_info")),0===e.remaining&&m.default.createElement("span",null," ",(0,h.tu)("no_token_to_buy")),m.default.createElement("div",{className:"input-group mt-5"},m.default.createElement("input",{type:"number",ref:function(e){return a.buyAmount=e},className:"form-control",max:e.remaining,min:1,onChange:function(t){a.onBuyInputChange(t.target.value,e.price,e.remaining)}})),m.default.createElement("div",{className:"text-center mt-3 text-muted"},m.default.createElement("b",null,"= ",m.default.createElement("span",{ref:function(e){return a.priceTRX=e}},"0")," TRX")),m.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.buyTokens(e)}},(0,h.tu)("participate"))))})},a.buyTokens=function(e){var t=a.state.buyAmount;if(!(t<=0)){var n=a.props,r=n.currentWallet,l=(n.wallet,t*(e.price/T.ONE_TRX));r.balance/T.ONE_TRX<l?a.setState({alert:m.default.createElement(M.default,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},m.default.createElement("div",{className:"mt-5 token-sweet-alert"},m.default.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){a.setState({alert:null})}},m.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),m.default.createElement("span",null,(0,h.tu)("not_enough_trx_message")),m.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.setState({alert:null})}},(0,h.tu)("confirm"))))}):a.setState({alert:m.default.createElement(M.default,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},m.default.createElement("div",{className:"mt-5 token-sweet-alert"},m.default.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){a.setState({alert:null})}},m.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),m.default.createElement("h5",{style:{color:"black"}},(0,h.tu)("buy_confirm_message_1")),m.default.createElement("span",null,t," ",e.name," ",(0,h.t)("for")," ",t*(e.price/T.ONE_TRX)," TRX?"),m.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.confirmTransaction(e)}},(0,h.tu)("confirm"))))})}},a.confirmTransaction=function(){var t=r(c.default.mark(function t(n){var r,l,o,u;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.props,l=r.account,o=r.intl,u=a.state.buyAmount,a.setState({alert:m.default.createElement(M.default,{showConfirm:!1,showCancel:!1,cancelBtnBsStyle:"default",title:o.formatMessage({id:"transferring"}),style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}})}),e.next=5,a.submit(n);case 5:if(!e.sent){e.next=9;break}a.setState({alert:m.default.createElement(M.default,{success:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},m.default.createElement("div",{className:"mt-5 token-sweet-alert"},m.default.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){a.setState({alert:null})}},m.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),m.default.createElement("h5",{style:{color:"black"}},(0,h.tu)("transaction")," ",(0,h.tu)("confirm")),m.default.createElement("span",null,(0,h.tu)("success_receive")," ",n.name," ",(0,h.tu)("tokens")),m.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.setState({alert:null})}},(0,h.tu)("OK"))))}),e.next=10;break;case 9:a.setState({alert:m.default.createElement(M.default,{danger:!0,title:"Error",onConfirm:function(){return a.setState({alert:null})}},(0,h.tu)("fail_transaction"))});case 10:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),a.state={privateKey:"",loading:!0,token:{},tabs:[],buyAmount:0,alert:null},a}return u(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this.props.match;this.loadToken(decodeURI(e.params.name),decodeURI(e.params.address))}},{key:"componentDidUpdate",value:function(e){var t=this.props.match;t.params.name!==e.match.params.name&&this.loadToken(decodeURI(t.params.name),decodeURI(t.params.address))}},{key:"render",value:function(){var e=this.props,t=e.match,n=(e.wallet,this.state),r=n.token,l=n.tabs,o=n.loading,u=(n.buyAmount,n.alert);return m.default.createElement("main",{className:"container header-overlap token_black mc-donalds-coin"},u,o?m.default.createElement("div",{className:"card"},m.default.createElement(E.TronLoader,null,(0,h.tu)("loading_token")," ",r.name)):m.default.createElement("div",{className:"row"},r&&m.default.createElement("div",{className:"col-sm-12"},m.default.createElement("div",{className:"card"},m.default.createElement("div",{className:"card-body"},m.default.createElement("div",{className:"d-flex"},r&&r.icon_url?m.default.createElement("img",{className:"token-logo",src:r.icon_url}):m.default.createElement("img",{className:"token-logo",src:a(410)}),m.default.createElement("div",{style:{width:"70%"}},m.default.createElement("h5",{className:"card-title"},r.name," (",r.symbol,")"),m.default.createElement("p",{className:"card-text"},r.token_desc)))),m.default.createElement(N.Information,{token:r})),m.default.createElement("div",{className:"card mt-3 border_table"},m.default.createElement("div",{className:"card-header"},m.default.createElement("ul",{className:"nav nav-tabs card-header-tabs",style:{marginTop:"-12px",marginLeft:"-20px"}},l.map(function(e){return m.default.createElement("li",{key:e.id,className:"nav-item"},m.default.createElement(g.NavLink,{exact:!0,to:t.url+e.path,className:"nav-link text-dark"},m.default.createElement("i",{className:e.icon+" mr-2"}),e.label))}))),m.default.createElement("div",{className:"card-body p-0"},m.default.createElement(g.Switch,null,l.map(function(e){return m.default.createElement(g.Route,{key:e.id,exact:!0,path:t.url+e.path,render:function(){return m.default.createElement(e.cmp,null)}})})))))))}}]),t}(m.default.Component),K={login:C.login,reloadWallet:S.reloadWallet};t.default=(0,O.connect)(s,K)((0,b.injectIntl)(F))},2865:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var o=t[r](l),u=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(13),i=n(s),c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(0),f=n(d),m=a(15),p=a(23),h=(a(14),a(54)),b=n(h),y=a(12),v=a(24),g=a(16),E=a(33),_=n(E),k=a(26),w=a(172),x=a(106),N=function(e){function t(e){var a=this;l(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onChange=function(e,t){n.loadTokenHolders(e,t)},n.loadTokenHolders=function(){var e=r(i.default.mark(function e(){var t,r,l,o,u,s,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.filter,n.setState({loading:!0}),e.next=4,_.default.get(k.API_URL+"/api/token_trc20/holders?sort=-balance&start="+(c-1)*d+"&limit="+d+"&contract_address="+t.token);case 4:r=e.sent,l=r.data,o=l.token_holders,u=l.total;for(s in o)o[s].index=parseInt(s)+1;n.setState({page:c,addresses:o,total:u,loading:!1});case 10:case"end":return e.stop()}},e,a)}));return function(){return e.apply(this,arguments)}}(),n.customizedColumn=function(){var e=n.props,t=e.intl,a=e.token;return[{title:"#",dataIndex:"index",key:"index",width:"10%",align:"left",className:"ant_table"},{title:t.formatMessage({id:"address"}),dataIndex:"address",key:"address",render:function(e,t,a){return f.default.createElement(p.AddressLink,{address:t.holder_address})}},{title:(0,g.upperFirst)(t.formatMessage({id:"quantity"})),dataIndex:"balance",key:"balance",width:"20%",align:"right",className:"ant_table",render:function(e,t,n){return f.default.createElement(y.FormattedNumber,{value:Number(t.balance)/Math.pow(10,a.decimals)})}},{title:t.formatMessage({id:"percentage"}),dataIndex:"percentage",key:"percentage",width:"18%",align:"right",className:"ant_table",render:function(e,t,n){return f.default.createElement("div",null,f.default.createElement(y.FormattedNumber,{value:t.balance/a.total_supply_with_decimals*100,maximumFractionDigits:6})," %")}}]},n.doSearch=r(i.default.mark(function e(){var t,r,l,o,u,s,c,d;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.props,r=t.intl,l=t.filter,o=n.state,u=o.search,s=o.addresses,c=[],!(0,x.isAddressValid)(u)){e.next=12;break}return e.next=6,_.default.get(k.API_URL+"/api/token_trc20/holder_balance?contract_address="+l.token+"&holder_address="+u);case 6:d=e.sent,d.data.index=1,c.push(d.data),n.setState({addresses:c,total:1,search:""}),e.next=14;break;case 12:w.toastr.warning(r.formatMessage({id:"warning"}),r.formatMessage({id:"search_TRC20_error"})),n.setState({search:""});case 14:case"end":return e.stop()}},e,a)})),n.state={search:"",filter:{},addresses:[],page:0,total:0,pageSize:25},n}return u(t,e),c(t,[{key:"componentDidMount",value:function(){this.loadTokenHolders()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.addresses,n=t.total,r=t.loading,l=t.search;0==n&&(a=[]);var o=this.props.intl,u=this.customizedColumn();o.formatMessage({id:"a_totle"}),o.formatMessage({id:"hold_addr"});return r||0!==a.length?f.default.createElement(d.Fragment,null,r&&f.default.createElement("div",{className:"loading-style",style:{marginTop:"-20px"}},f.default.createElement(v.TronLoader,null)),f.default.createElement("div",{className:"row transfers"},f.default.createElement("div",{className:"col-md-12 table_pos"},f.default.createElement("div",{className:"nav-searchbar",style:T.searchBox},f.default.createElement("div",{className:"token20-input-group input-group"},f.default.createElement("div",{className:"token20-search"},f.default.createElement("input",{type:"text",className:"form-control p-2 bg-white border-0 box-shadow-none",value:l,onChange:function(t){return e.setState({search:t.target.value})},placeholder:o.formatMessage({id:"search_TRC20"})}),f.default.createElement("div",{className:"input-group-append"},f.default.createElement("button",{className:"btn box-shadow-none",onClick:this.doSearch},f.default.createElement("i",{className:"fa fa-search"})))))),f.default.createElement("div",{style:T.table},f.default.createElement(b.default,{border:!1,loading:r,column:u,data:a,total:n,onPageChange:function(t,a){e.loadTokenHolders(t,a)}}))))):f.default.createElement("div",{className:"p-3 text-center no-data"},(0,m.tu)("no_holders_found"))}}]),t}(f.default.Component),T={searchBox:{background:"#fff",paddingTop:10}};t.default=(0,y.injectIntl)(N)},2866:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var o=t[r](l),u=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(13),i=n(s),c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(0),f=n(d),m=(a(14),a(23)),p=(a(37),a(26)),h=a(15),b=a(55),y=n(b),v=a(42),g=a(147),E=a(12),_=a(54),k=n(_),w=a(16),x=a(24),N=a(33),T=n(N),C=function(e){function t(e){var n=this;l(this,t);var u=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return u.onChange=function(e,t){u.loadPage(e,t)},u.loadPage=function(){var e=r(i.default.mark(function e(){var t,a,r,l,o,s,c,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.props.filter,a=u.state.showTotal,u.setState({loading:!0}),e.next=5,T.default.get(p.API_URL+"/api/token_trc20/transfers?sort=-block_number&start="+(d-1)*f+"&limit="+f+"&contract_address="+t.token);case 5:r=e.sent,l=r.data,o=l.token_transfers,s=l.total;for(c in o)o[c].index=parseInt(c)+1;u.setState({page:d,transfers:o,total:s,loading:!1});case 11:case"end":return e.stop()}},e,n)}));return function(){return e.apply(this,arguments)}}(),u.customizedColumn=function(){var e=u.props,t=e.intl,n=e.token;return[{title:(0,w.upperFirst)(t.formatMessage({id:"hash"})),dataIndex:"transactionHash",key:"transactionHash",className:"ant_table",render:function(e,t,a){return f.default.createElement(v.Truncate,null,f.default.createElement(m.TransactionHashLink,{hash:t.transaction_id},t.transaction_id))}},{title:(0,w.upperFirst)(t.formatMessage({id:"age"})),dataIndex:"timestamp",key:"timestamp",width:"150px",className:"ant_table",render:function(e,t,a){return f.default.createElement(y.default,{date:Number(t.block_ts)})}},{title:(0,w.upperFirst)(t.formatMessage({id:"from"})),dataIndex:"transferFromAddress",key:"transferFromAddress",className:"ant_table",render:function(e,t,a){return f.default.createElement(m.AddressLink,{address:t.from_address})}},{title:"",className:"ant_table",width:"30px",render:function(e,t,n){return f.default.createElement("img",{src:a(940)})}},{title:(0,w.upperFirst)(t.formatMessage({id:"to"})),dataIndex:"transferToAddress",key:"transferToAddress",className:"ant_table",render:function(e,t,a){return f.default.createElement(m.AddressLink,{address:t.to_address})}},{title:(0,w.upperFirst)(t.formatMessage({id:"amount"})),dataIndex:"amount",key:"amount",width:"200px",align:"right",className:"ant_table",render:function(e,t,a){return f.default.createElement("span",null,f.default.createElement(E.FormattedNumber,{value:t.quant/Math.pow(10,n.decimals)}),"  ",n.name)}}]},u.state={filter:{},transfers:[],page:0,total:0,pageSize:25,showTotal:!1!==e.showTotal,emptyState:e.emptyState,autoRefresh:e.autoRefresh||!1},u}return u(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this;this.loadPage(),!1!==this.state.autoRefresh&&this.props.setInterval(function(){return e.load()},this.state.autoRefresh)}},{key:"render",value:function(){var e=this,t=this.state,a=t.transfers,n=(t.page,t.total),r=(t.pageSize,t.loading),l=t.emptyState,o=void 0===l?null:l;0==n&&(a=[]);var u=this.props,s=(u.theadClass,u.intl),i=this.customizedColumn();s.formatMessage({id:"a_totle"}),s.formatMessage({id:"transaction_info"});return r||0!==a.length?f.default.createElement(d.Fragment,null,r&&f.default.createElement("div",{className:"loading-style",style:{marginTop:"-20px"}},f.default.createElement(x.TronLoader,null)),f.default.createElement("div",{className:"row transfers"},f.default.createElement("div",{className:"col-md-12 table_pos"},f.default.createElement(k.default,{border:!1,loading:r,column:i,data:a,total:n,onPageChange:function(t,a){e.loadPage(t,a)}})))):o?f.default.createElement(o,null):f.default.createElement("div",{className:"p-3 text-center no-data"},(0,h.tu)("no_transfers"))}}]),t}(f.default.Component);t.default=(0,g.withTimers)((0,E.injectIntl)(C))},2867:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),s=function(e){return e&&e.__esModule?e:{default:e}}(u),i=a(12),c=(a(26),a(15)),d=a(23),f=a(147),m=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return l(t,e),o(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.token;return s.default.createElement("div",{className:"tokenDetail_box"},s.default.createElement("table",{className:"table m-0 tokenDetail"},s.default.createElement("tbody",null,s.default.createElement("tr",null,s.default.createElement("th",{style:{borderTop:"0px"}},(0,c.tu)("start_date"),":"),s.default.createElement("td",{style:{borderTop:"0px"}},s.default.createElement("span",null,e.issue_time))),s.default.createElement("tr",null,s.default.createElement("th",null,(0,c.tu)("total_supply"),":"),s.default.createElement("td",null,s.default.createElement(i.FormattedNumber,{value:e.total_supply_with_decimals/Math.pow(10,e.decimals)}))),s.default.createElement("tr",null,s.default.createElement("th",null,(0,c.tu)("issuer"),":"),s.default.createElement("td",null,e.issue_address?s.default.createElement(d.AddressLink,{address:e.issue_address}):s.default.createElement("span",{style:{color:"#d8d8d8"}},"-"))),s.default.createElement("tr",null,s.default.createElement("td",{colSpan:"2"},s.default.createElement("i",{className:"fa fa-exclamation-circle","aria-hidden":"true",style:{color:"#999999",marginRight:"10px"}}),s.default.createElement("span",{style:{color:"#999999",fontSize:"12px"}},(0,c.tu)("change_info")),"\xa0",s.default.createElement("a",{href:"mailto:token@tronscan.org",style:{color:"red",fontSize:"12px"}},(0,c.tu)("contact_us")))))))}}]),t}(s.default.Component);t.default=(0,f.withTimers)(m)},2868:function(e,t,a){"use strict";function n(e){var t=e.token,a=(t.reputation&&(0,i.toLower)(t.reputation),[{name:"total_supply",content:l.default.createElement(u.FormattedNumber,{value:t.total_supply_with_decimals/Math.pow(10,t.decimals)})},{name:"contract_address",content:l.default.createElement(s.AddressLink,{address:t.contract_address,isContract:!0})},{name:"TRC20_decimals",content:l.default.createElement(u.FormattedNumber,{value:t.decimals})},{name:"website",content:t.home_page?l.default.createElement(s.ExternalLink,{url:t.home_page}):l.default.createElement("span",{style:{color:"#d8d8d8"}},"-")},{name:"white_paper",content:t.white_paper?l.default.createElement(s.ExternalLink,{url:t.white_paper&&(0,o.tu)(t.white_paper),_url:t.white_paper}):l.default.createElement("span",{style:{color:"#d8d8d8"}},"-")},{name:"social_link",content:l.default.createElement("span",{style:{color:"#d8d8d8"}},"-")},{name:"GitHub",content:t.git_hub?l.default.createElement(s.ExternalLink,{url:t.git_hub,_url:t.git_hub}):l.default.createElement("span",{style:{color:"#d8d8d8"}},"-")}]);return l.default.createElement("div",{className:"information-bg"},a.map(function(e,t){return l.default.createElement("div",{className:t%2==0?"information-bg-item":"information-bg-item ml",key:t},l.default.createElement("span",null,(0,o.tu)(e.name)),l.default.createElement("p",null,e.content))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.Information=n;var r=a(0),l=function(e){return e&&e.__esModule?e:{default:e}}(r),o=a(15),u=a(12),s=a(23),i=(a(28),a(16))}});
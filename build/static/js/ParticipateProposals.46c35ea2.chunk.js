(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{2276:function(e,a,t){e.exports=t.p+"static/media/tron-empty.a9a72332.svg"},2796:function(e,a,t){"use strict";t.r(a);var l=t(1433),n=t.n(l),o=t(260),r=t.n(o),s=t(2),p=t.n(s),c=t(25),i=t(5),m=t(13),u=t(11),d=t(21),E=t(20),g=t(22),f=t(0),_=t.n(f),v=t(32),y=t(3),b=t(16),M=t(10),h=t(91),w=(t(23),t(261)),O=t(6),T=t(65),j=t(51),A=t.n(j),S=t(64);function V(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,l)}return t}function C(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?V(t,!0).forEach(function(a){Object(c.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var K=function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(d.a)(this,Object(E.a)(a).call(this))).load=Object(i.a)(p.a.mark(function a(){var t,l,n,o,r,s,c,i,m,u,d,E,g,f,_,v=arguments;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=v.length>0&&void 0!==v[0]?v[0]:1,l=v.length>1&&void 0!==v[1]?v[1]:20,n=v.length>2?v[2]:void 0,o=e.props,r=o.account,o.currentWallet,e.setState({loading:!n}),a.next=7,b.d.getMyProposalList({limit:l,start:(t-1)*l,address:r.address,type:2});case 7:if(s=a.sent,c=s.data,i=s.total,m=["getMaintenanceTimeInterval","getAccountUpgradeCost","getCreateAccountFee","getTransactionFee","getAssetIssueFee","getWitnessPayPerBlock","getWitnessStandbyAllowance","getCreateNewAccountFeeInSystemContract","getCreateNewAccountBandwidthRate","getAllowCreationOfContracts","getRemoveThePowerOfTheGr","getEnergyFee","getExchangeCreateFee","getMaxCpuTimeOfOneTx","getAllowUpdateAccountName","getAllowSameTokenName","getAllowDelegateResource","getTotalEnergyLimit","getAllowTvmTransferTrc10","getTotalEnergyLimitNew","getAllowMultiSign","getAllowAdaptiveEnergy","getUpdateAccountPermissionFee","getMultiSignFee","getAllowProtoFilterNum","","getAllowTvmConstantinople","getAllowShieldedTransaction","getShieldedTransactionFee","getAdaptiveResourceLimitMultiplier","getChangeDelegation","getWitness127PayPerBlock","getAllowTvmSolidity059","getAdaptiveResourceLimitTargetRatio"],u=[{id:"1000000",key:"getChargingSwitch"},{id:"1000001",key:"getSideChainGateWayList"},{id:"1000003",key:"getProposalExpireTime"},{id:"1000004",key:"getVoteWitnessSwitch"},{id:"1000007",key:"getFundInjectAddress"},{id:"1000008",key:"getFundDistributeEnableSwitch"},{id:"1000009",key:"getDayToSustainByFund"},{id:"1000010",key:"getPercentToPayWitness"}],O.v)for(d in c)for(E in c[d].paramters)c[d].paramters[E].proposalKey=m[c[d].paramters[E].key],c[d].paramters[E].proposalVal=c[d].paramters[E].value;else for(g in c)for(f in c[g].paramters)for(_ in u)u[_].id==c[g].paramters[f].key&&(c[g].paramters[f].proposalKey=u[_].key,c[g].paramters[f].proposalVal=c[g].paramters[f].value);e.setState({loading:!1,dataSource:c,total:i,page:t,pagination:C({},e.state.pagination,{total:i})});case 14:case"end":return a.stop()}},a)})),e.handleTableChange=function(a,t,l){var n=C({},e.state.pagination);n.current=a.current,n.pageSize=a.pageSize,e.setState({pagination:n},function(){e.load(n.current,n.pageSize),clearInterval(e.state.timer);var a=setInterval(function(){e.load(n.current,n.pageSize,1)},1e4);e.setState({timer:a})})},e.hideModal=function(){e.setState({modal:null,isAction:!1})},e.state={dataSource:[],total:0,loading:!1,pagination:{showQuickJumper:!0,position:"bottom",showSizeChanger:!0,defaultPageSize:20,total:0},modal:null,isAction:!1,timer:null},e}return Object(g.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props;a.account,a.currentWallet;this.load();var t=setInterval(function(){e.load(1,20,1)},1e4);this.setState({timer:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"getColumns",value:function(){var e=this,a=this.props,t=a.account,l=a.intl;this.state.dataSource;return[{title:r()(l.formatMessage({id:"proposal_content_info"})),dataIndex:"proposalVal",key:"proposalVal",width:"40%",render:function(e,a,t){return _.a.createElement("div",{style:{fontFamily:"HelveticaNeue-Medium"}},a.paramters.map(function(e,a){return _.a.createElement("div",{key:a},O.v?_.a.createElement("div",null,"getMaintenanceTimeInterval"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_1"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/36e5)," \xa0",_.a.createElement("span",null,l.formatMessage({id:"propose_hour"}))),"getAccountUpgradeCost"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_2"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/O.E)," \xa0",_.a.createElement("span",null,"TRX")),"getCreateAccountFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_3"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/O.E)," \xa0",_.a.createElement("span",null,"TRX")),"getTransactionFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_4"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)," \xa0",_.a.createElement("span",null,"Sun/byte")),"getAssetIssueFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_5"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/O.E)," \xa0",_.a.createElement("span",null,"TRX")),"getWitnessPayPerBlock"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_6"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/O.E)," \xa0",_.a.createElement("span",null,"TRX"))),"getWitnessStandbyAllowance"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_7"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/O.E)," \xa0",_.a.createElement("span",null,"TRX")),"getCreateNewAccountFeeInSystemContract"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_8"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/O.E)," \xa0",_.a.createElement("span",null,"TRX")),"getCreateNewAccountBandwidthRate"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_9"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)," \xa0",_.a.createElement("span",null,"bandwith/byte")),"getAllowCreationOfContracts"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_10"})),_.a.createElement("span",null,Object(y.c)("propose_activate"))),"getRemoveThePowerOfTheGr"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_11"}))),"getEnergyFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_12"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/O.E," TRX")),"getExchangeCreateFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_13"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/O.E," TRX")),"getMaxCpuTimeOfOneTx"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_14"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal," ms")),"getAllowUpdateAccountName"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_15"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(y.c)("propose_allowed")):_.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getAllowSameTokenName"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_16"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(y.c)("propose_allowed")):_.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getAllowDelegateResource"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_17"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(y.c)("propose_allowed")):_.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getTotalEnergyLimit"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_18"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getAllowTvmTransferTrc10"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_19"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(y.c)("propose_allowed")):_.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getTotalEnergyLimitNew"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_18_1"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getTotalEnergyCurrentLimit"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_20"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal," ENERGY")),"getAllowMultiSign"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_21"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(y.c)("propose_allowed")):_.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getAllowAdaptiveEnergy"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_22"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(y.c)("propose_allowed")):_.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getTotalEnergyTargetLimit"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_23"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal),"/",_.a.createElement("span",null,Object(y.c)("propose_minute"))),"getTotalEnergyAverageUsage"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_24"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,_.a.createElement("span",null,e.proposalVal),"/",_.a.createElement("span",null,Object(y.c)("propose_minute"))):_.a.createElement("span",null,Object(y.c)("propose_unactivate"))),"getUpdateAccountPermissionFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_25"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/O.E)," \xa0",_.a.createElement("span",null,"TRX")),"getMultiSignFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_26"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/O.E)," \xa0",_.a.createElement("span",null,"TRX")),"getAllowProtoFilterNum"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_27"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(y.c)("propose_activate")):_.a.createElement("span",null,Object(y.c)("propose_unactivate"))),"getAllowTvmConstantinople"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_28"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(y.c)("propose_allowed")):_.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getAllowShieldedTransaction"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_29"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(y.c)("propose_allowed")):_.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getShieldedTransactionFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_28_1"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/O.E)," \xa0",_.a.createElement("span",null,"TRX")),"getAdaptiveResourceLimitMultiplier"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_29_1"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getChangeDelegation"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_30"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(y.c)("propose_activate")):_.a.createElement("span",null,Object(y.c)("propose_unactivate"))),"getWitness127PayPerBlock"==e.proposalKey&&_.a.createElement("div",{className:"mt-1"},_.a.createElement("span",null,l.formatMessage({id:"propose_31"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/O.E)," \xa0",_.a.createElement("span",null,"TRX")),"getAllowTvmSolidity059"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_32"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(y.c)("propose_allowed")):_.a.createElement("span",null,Object(y.c)("propose_not_allowed"))),"getAdaptiveResourceLimitTargetRatio"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_33"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal))):_.a.createElement("div",null,"getChargingSwitch"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_1"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?_.a.createElement("span",null,Object(y.c)("propose_activate")):_.a.createElement("span",null,Object(y.c)("propose_unactivate"))),"getSideChainGateWayList"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_2"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getProposalExpireTime"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_3"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getVoteWitnessSwitch"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_4"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?_.a.createElement("span",null,Object(y.c)("propose_activate")):_.a.createElement("span",null,Object(y.c)("propose_unactivate"))),"getFundInjectAddress"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_5"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getFundDistributeEnableSwitch"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_6"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?_.a.createElement("span",null,Object(y.c)("propose_activate")):_.a.createElement("span",null,Object(y.c)("propose_unactivate"))),"getDayToSustainByFund"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_7"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal," ",Object(y.c)("day"))),"getPercentToPayWitness"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_8"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal," %"))))}))}},{title:r()(l.formatMessage({id:"proposal_time_of_creation"}))+"/ "+r()(l.formatMessage({id:"proposal_endtime"})),dataIndex:"createTime",key:"createTime",width:"15%",align:"center",render:function(e,a,t){return _.a.createElement("div",null,_.a.createElement("div",{style:{color:"#333"}},_.a.createElement(M.a,{value:Number(e)}),"\xa0",_.a.createElement(M.e,{value:Number(e),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})),_.a.createElement("div",{style:{color:"#C23631"}},_.a.createElement(M.a,{value:Number(a.expirationTime)}),"\xa0",_.a.createElement(M.e,{value:Number(a.expirationTime),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})))}},{title:r()(l.formatMessage({id:"proposal_status"})),dataIndex:"state",key:"state",align:"center",width:"12%",render:function(e,a,t){return _.a.createElement("div",null,"PENDING"==e&&_.a.createElement("div",null,_.a.createElement("span",{className:"badge badge-warning text-uppercase badge-success-radius"},Object(y.c)("proposal_voting"))),"DISAPPROVED"==e&&_.a.createElement("div",null,_.a.createElement("span",{className:"badge badge-danger text-uppercase badge-success-radius"},Object(y.c)("proposal_ineffective"))),"APPROVED"==e&&_.a.createElement("div",null,_.a.createElement("span",{className:"badge badge-success text-uppercase badge-success-radius"},Object(y.c)("proposal_effective"))),"CANCELED"==e&&_.a.createElement("div",null,_.a.createElement("span",{className:"badge badge-secondary text-uppercase badge-success-radius"},Object(y.c)("proposal_cancelled"))))}},{title:function(){var e=r()(l.formatMessage({id:"proposal_valid_votes"}))+" / "+r()(l.formatMessage({id:"proposal_total_votes"})),a=r()(l.formatMessage({id:"proposal_votes_tip"}));return _.a.createElement("div",null,e," ",_.a.createElement("span",{className:"mr-2"},_.a.createElement(w.a,{placement:"top",text:a})))},dataIndex:"votes",key:"votes",width:"12%",align:"center",render:function(e,a,t){return"".concat(a.validVotes,"/").concat(a.totalVotes)}},{title:r()(l.formatMessage({id:"proposal_action"})),dataIndex:"details",key:"details",width:"12%",align:"center",render:function(a,l,n){return _.a.createElement("div",{className:"detail-action"},_.a.createElement("div",null,_.a.createElement(T.a,{to:"/proposal/".concat(l.proposalId),className:"proposal-more"},Object(y.c)("proposal_more"))),t.address&&"PENDING"===l.state?_.a.createElement("div",null,_.a.createElement("div",null,_.a.createElement("a",{href:"javascript:;",className:"proposal-cancel",onClick:function(){return e.cancelModal(l.proposalId)}},Object(y.c)("proposal_cancel_approve")))):"")}}]}},{key:"cancelModal",value:function(e){var a=this,t=this.props.intl;this.setState({modal:_.a.createElement(A.a,{showCancel:!0,title:"",confirmBtnText:t.formatMessage({id:"confirm"}),cancelBtnText:t.formatMessage({id:"cancel"}),confirmBtnBsStyle:"link",confirmBtnCssClass:"modal-confirm",cancelBtnCssClass:"modal-cancel",onCancel:function(){return a.hideModal()},onConfirm:function(){return a.cancelFun(e)}},_.a.createElement("div",{style:{color:"#333",padding:"30px 0"}},Object(y.c)("proposal_cancel_tip")))})}},{key:"cancelFun",value:function(){var e=Object(i.a)(p.a.mark(function e(a){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.isAction){e.next=2;break}return e.abrupt("return");case 2:return this.setState({isAction:!0}),e.next=5,this.getResult(a,!1);case 5:e.sent?this.setState({modal:_.a.createElement(A.a,{success:!0,timeout:"3000",onConfirm:this.hideModal},Object(y.c)("proposal_success"))}):this.setState({modal:_.a.createElement(A.a,{warning:!0,timeout:"3000",onConfirm:this.hideModal},Object(y.c)("proposal_fail"))}),this.setState({isAction:!1});case 8:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"getResult",value:function(){var e=Object(i.a)(p.a.mark(function e(a,t){var l,n,o,r,s,c,i,m,u;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.isTronLink,n=this.props.account,!O.v){e.next=14;break}return"ACCOUNT_LEDGER"===this.props.walletType.type?o=this.props.tronWeb():"ACCOUNT_TRONLINK"!==this.props.walletType.type&&"ACCOUNT_PRIVATE_KEY"!==this.props.walletType.type||(o=n.tronWeb),e.next=6,o.transactionBuilder.voteProposal(a,t,n.address,1).catch(function(e){return console.log(e)});case 6:return r=e.sent,e.next=9,Object(S.c)(r,o);case 9:s=e.sent,c=s.result,l=c,e.next=22;break;case 14:return e.next=16,n.sunWeb.sidechain.transactionBuilder.voteProposal(a,t,n.address,1).catch(function(e){return console.log(e)});case 16:return i=e.sent,e.next=19,Object(S.e)(i,n.sunWeb);case 19:m=e.sent,u=m.result,l=u;case 22:return e.abrupt("return",l);case 23:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.modal,l=(e.page,e.total),o=(e.pageSize,e.loading),r=e.dataSource,s=(e.emptyState,e.pagination),p=this.getColumns();this.props.intl;return _.a.createElement("div",{className:""},a,o&&_.a.createElement("div",{className:"loading-style"},_.a.createElement(h.b,null)),!o&&(l>0?_.a.createElement(n.a,{bordered:!0,columns:p,rowKey:function(e,a){return a},dataSource:r,scroll:scroll,pagination:s,loading:o,onChange:this.handleTableChange}):_.a.createElement("div",{className:"my-proposals-empty"},_.a.createElement("img",{src:t(2276),alt:""}),_.a.createElement("div",null,Object(y.b)("trc20_no_data"),",",Object(y.b)("proposal_go"),_.a.createElement(T.a,{to:"/proposalscreate"},Object(y.b)("proposal_create")),Object(y.b)("proposal_or"),_.a.createElement(T.a,{to:"/proposals"},Object(y.b)("proposal_vote_link"))))))}}]),a}(_.a.Component);a.default=Object(v.connect)(function(e){return{account:e.app.account,currentWallet:e.wallet.current,walletType:e.app.wallet,locale:e.app.activeLanguage}},null)(Object(M.h)(K))}}]);
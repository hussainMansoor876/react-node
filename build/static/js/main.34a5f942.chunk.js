(this["webpackJsonpmern-task"]=this["webpackJsonpmern-task"]||[]).push([[0],{18:function(e,t,n){e.exports=n(43)},23:function(e,t,n){},24:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(12),o=n.n(c),r=(n(23),n(13)),s=n(14),m=n(17),l=n(16),u=(n(24),n(2)),d=n.n(u),h=n(15),v=n.n(h),f=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).epochFormat=function(e){return v()(e).format("HH:mm:ss")},e.getTime=function(){e.setState({timeLoading:!0,metricsLoading:!0});var t=e.state.counter;"number"===typeof t&&clearInterval(t),d.a.get("/time",{headers:{mysecrettoken:"Basic dXNlcjpwYXNzd29yZA=="}}).then((function(t){var n=t.data,a=Date.now()-n.properties.epoch.description-18e6;e.setState({epoch:e.epochFormat(a),currentTime:a,timeLoading:!1},(function(){e.startCount()}))})).catch((function(){e.setState({timeLoading:!1})}))},e.getMetrics=function(){d.a.get("/metrics",{headers:{mysecrettoken:"Basic dXNlcjpwYXNzd29yZA=="}}).then((function(t){var n=t.data;e.setState({metrics:n,metricsLoading:!1})})).catch((function(){e.setState({metricsLoading:!1})}))},e.startCount=function(){var t=e.state.currentTime,n=setInterval((function(){e.setState({epoch:e.epochFormat(t+1e3)}),t+=1e3}),1e3);e.setState({counter:n}),setTimeout((function(){e.getTime()}),3e4)},e.state={epoch:"",counter:null,currentTime:0,metrics:"",timeLoading:!0,metricsLoading:!0},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.getTime(),this.getMetrics()}},{key:"render",value:function(){var e=this.state,t=e.epoch,n=e.metrics,a=e.timeLoading,c=e.metricsLoading;return i.a.createElement("div",null,a&&c?i.a.createElement("div",{style:{position:"fixed",top:window.innerHeight/2.5,left:window.innerWidth/2.08}},i.a.createElement("div",{className:"lds-ellipsis"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))):i.a.createElement("div",{className:"main-div"},i.a.createElement("div",{className:"left-div"},t),i.a.createElement("div",{className:"right-div"},n)))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.34a5f942.chunk.js.map
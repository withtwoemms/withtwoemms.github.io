import React from 'react';

var core = require("../core.js");
console.log("core-->", core);



var apiDict = JSON.parse(core.getAPI());
var apiList = Object.keys(apiDict).map(function (key) {return apiDict[key]});

var allRESTendpoints = [];

for (var method in apiList) {
  var paths = Object.keys(apiList[method]);
  for (var i=0; i<paths.length; i++) { 
    var ep = {};
    ep[paths[i]] = apiList[method][paths[i]];
    allRESTendpoints.push(ep);
  }
}

console.log(allRESTendpoints);

class List extends React.Component{
  render() {
    var endpoints = allRESTendpoints;
    var endpointList = endpoints.map(function(endpoint, i){
                         return <ListElement key={i} href='#' name={Object.keys(endpoint)}/>
                       })
    return <ul>{ endpointList }</ul>
  }
}

class ListElement extends React.Component{
  render() {
    return <div>
             <a href={this.props.href}>
               {this.props.name}
             </a>
           </div>
  }
}

export default List


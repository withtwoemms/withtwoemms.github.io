import React from 'react';


// ES6 React Class
class App extends React.Component {
  render(){
    return <div>
             <a href={this.props.href}>
               Hello {this.props.name}
             </a>
           </div>
  }
}

export default App

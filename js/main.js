import App from './components/App';
import List from './components/List';
import React from 'react';
import ReactDOM from 'react-dom';


console.log('##########################');
console.log('Hello from main.js (entry)');
console.log('##########################');

$('#api').on('click', function(){
  ReactDOM.render(<List />, document.getElementById('app'))
});
ReactDOM.render(<App href="http://google.com" name="Emmanuel"/>, document.getElementById('app'))





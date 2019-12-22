import ReactDOM from 'react-dom';
//React library
import React from 'react'

//Create a component , produce HTML
const App = () => {
  return <div>Hi ! </div>
}

//take component's generated HTML , put it on page.
ReactDOM.render(<App/>,document.querySelector('.container'));
import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';

  const AppLayout =()=>{
    return(
      <div className='app'> 
       <Header/>
       <Body/>
      </div>
    )
  }
const Root = ReactDOM.createRoot(document.getElementById("root"))
Root.render(<AppLayout/>)


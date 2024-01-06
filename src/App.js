import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import Contact from './Components/contact';
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom';
import About from './Components/about';
import { Error } from './Components/error';
import RestaurantMenu from './Components/restaurantMenu';
  const AppLayout =()=>{
    return(
      <div className='app'> 
       <Header/>
      <Outlet/>
      </div>
    )
  }
  const appRouter = createBrowserRouter([
    { path: '/',
     element: <AppLayout />, 
     children:[
      {
       path:'/',
       element:<Body/>
      },{
        path:"/contact",
        element :<Contact/>
      },{
        path:"/about",
        element:<About/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }
     ],
     errorElement:<Error/>,
    }
  ])
const Root = ReactDOM.createRoot(document.getElementById("root"))
Root.render(<RouterProvider router={appRouter}/>)


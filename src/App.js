import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import Contact from './Components/contact';
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Error } from './Components/error';
import RestaurantMenu from './Components/restaurantMenu';
import { lazy,Suspense } from 'react';
//import Grocery from './Components/grocery';




const  Grocery =lazy(()=> import("./Components/grocery"));
const About = lazy(()=>import("./Components/about"))

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
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <About/>
        </Suspense>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1> Loading.....</h1>}> 
          <Grocery/>
          </Suspense>
      }
     ],
     errorElement:<Error/>,
    }
  ])
const Root = ReactDOM.createRoot(document.getElementById("root"))
Root.render(<RouterProvider router={appRouter}/>)


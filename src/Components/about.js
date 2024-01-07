import UserClass from "./UserClass";
import React from "react";
import User from "./user";
class About extends React.Component{
    constructor(props){
        super(props)
        console.log("parent constructor")
    }

    componentDidMount(){
   console.log("parent component did mount")
    }

    componentDidUpdate(){
     console.log("Parent component updated");
    }

    componentWillUnmount(){
        console.log("parent unmount")
    }
    render(){
 

        return(
            <div className=" bg-gray-200  grid justify-items-center p-4   ">
                <h1 className="font-bold text-xl  capitalize">Welcome to about page </h1>
    
                <h2 className="font-semibold">learn about the policies in detail</h2>
          
    
               <div className=""></div>
                <UserClass name="First" location="kashmir"/>
               
            </div>
        )
    }
    
}
export default About;
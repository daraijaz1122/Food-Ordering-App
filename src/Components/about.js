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
  console.log("parent render")

        return(
            <div>
                <h1>Welcome to about page </h1>
    
                <h2>learn about the policies in detail</h2>
                <h1>meet our Founder</h1>
    
               
                <UserClass name="First" location="kashmir"/>
               
            </div>
        )
    }
    
}
export default About;
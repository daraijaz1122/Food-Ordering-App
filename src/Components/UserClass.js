import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
           userInfo:{
            name : "Dummy",
            id: 'Default',
            avatar_url: "https://dummy"

           }

    
        }
     console.log('child constructor')
    }

    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/daraijaz1122")
        const json = await data.json();
       console.log("child  component did mount")
      
       this.setState(json)
         }
        
         
    render(){
       //const {name,location}=this.props
       const {name,id,avatar_url}=this.state
  console.log(" child render")

        
        return(
            <div> 
                 <div className="user-card">
            <h2>Name:{name}</h2>
            <h3>ID: {id}</h3>
            <img src={avatar_url}/>
            <h4>Contact : aijaz124</h4>
           
        </div>
            </div>
        )
    }
}
export default UserClass;
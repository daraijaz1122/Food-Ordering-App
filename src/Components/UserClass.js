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
            <div className=" items-center"> 
                 <div className="">
            <h2  className="font-semibold">Name:  {name}</h2>
            <h3  className="font-semibold">ID:  {id}</h3>
            <img className=" h-48 w-44 rounded " src={avatar_url}/>
            <h4  className="font-semibold">Contact : aijaz124</h4>
           
        </div>
            </div>
        )
    }
}
export default UserClass;
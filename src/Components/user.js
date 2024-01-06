const User =(props)=>{
    const {name , location}=props
    return(
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>location: {location}</h3>
            <h4>Contact : aijaz124</h4>
        </div>
    )
}
export default User;
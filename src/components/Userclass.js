import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            userinfo:{
                name:"default",
                location:"default",
                bio:""
            }
        })
        // console.log(this.props.name+"Constructor")
    }
    async componentDidMount(){
        // console.log(this.props.name+"ComponentDidMount")
        const data= await fetch("https://api.github.com/users/nithiishkumarb");
        const json= await data.json();
        this.setState({
            userinfo:json
        })
    }
    render(){
        // console.log(this.props.name+"Render")
        const {name,location,avatar_url,bio}=this.state.userinfo;
        return(
            <div>
                <img src={avatar_url} alt="Profile"/>
                <p>Name: {name}</p>
                <p>Loaction: {location}</p>
                <p>Bio:{bio}</p>
            </div>
        )
    }
}
export default UserClass;
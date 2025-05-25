import User from './User'
import UserClass from "./Userclass"
import React from 'react'
class About extends React.Component{
  constructor(props){
    super(props)
    // console.log("Parent constructor")
  }
  componentDidMount(){
    // console.log("parent ComponentnDidMount")
  }
  render(){
    // console.log("Parent render")
    return (
    <div>
      <h1>This is About</h1>
      <h2>React Coures</h2>
      <UserClass name={"Nithis"} location={"Coimbatore - class"}/>
    </div>
  )
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>This is About</h1>
//       <h2>React Coures</h2>
//       <UserClass name={"Nithish - class"} location={"Coimbatore - class"}/>
//     </div>
//   )
// }

export default About
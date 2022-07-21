import NavBar from "../layout/NavBar"
//import Giphy from "./Giphy"


const About = (props) =>{
    return (
     <div>
        <NavBar user={props.user} />
         <h1 className="text-center">About</h1>

          <img src="https://media.istockphoto.com/vectors/thank-you-thanks-expressing-gratitude-note-on-a-sign-vector-id1147584034?k=20&m=1147584034&s=612x612&w=0&h=iqlBNQ6UrY_3Sxm5sC3v7IA3rw2PFSRqgOMwhfn8-l0=" alt="thanks"></img>  
         <p>Just gratitude for every day of this learning process. This is the very beginning of a great career.
            <br></br>Thank you Abraham, Colton and classmates. 
            <br></br>Best wishes for all your future endeavors!
         </p>
     </div>
    ) 
 }
 
 export default About
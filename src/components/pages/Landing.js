import LoginForm from "../forms/LoginForm";
import { useState } from "react";
import RegisterForm from "../forms/RegisterForm";
import Giphy from "./Giphy";

const Landing = (props) => {
    const [hasAccount, setHasAccount] = useState(false)

    return (
        <div>
            <br></br>
            <h1 className="text-center">Landing Page</h1><br></br>

            {hasAccount === false ? (
                <div>
                    
                    <RegisterForm setUser={props.setUser} />
                    <p>Already have an account? {' '}
                    <span className="btn btn-primary" onClick={() =>
                    setHasAccount(true)}>Login</span>{' '}</p>

                    <Giphy />
                </div>
            ): (
                
               <>   
                    <LoginForm setUser={props.setUser} /> <br></br>
                    <Giphy />
               </>
                
            )}
        </div>
    )
}


export default Landing

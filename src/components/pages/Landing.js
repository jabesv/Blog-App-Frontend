import LoginForm from "../forms/LoginForm";
import { useState } from "react";
import RegisterForm from "../forms/RegisterForm";
const Landing = (props) => {
    const [hasAccount, setHasAccount] = useState(false)

    return (
        <div>
            <h1>Landing Page</h1>

            {hasAccount === false ? (
                <div>
                    <RegisterForm setUser={props.setUser} />
                    <p>Already have an account? {' '}
                    <span className="btn btn-primary" onClick={() =>
                    setHasAccount(true)}>Login</span>{' '}</p>
                </div>
            ): (
                <LoginForm setUser={props.setUser} />
            )}
        </div>
    )

}


export default Landing

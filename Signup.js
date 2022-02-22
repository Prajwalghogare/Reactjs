
import { useState } from "react"
import { Link } from "react-router-dom"

const SignupPage = (props) => {

    const [ email, setEmail] = useState()
    const [ password, setPassword] = useState()

    const onSignup = ()=>{
        alert('signup')
    }

    return ( 
        <div>
        <h1 className = "header" > Signup </h1>  
        <div>
        <div className="form"></div>

        <div className="mb-3">
            <label on onChange={(e)=>{
                console.log(e)
            }} 
            className="form-label">Email Address</label>
            <input 
               onChange={(e)=>{
                   setEmail(e.target.value)
               }}
            
            type="email" className="form-control"/>{''}
        </div>

        <div className="mb-3">
            <label className="form-label">Password</label>
            <input
             onChange={(e)=>{
                setPassword(e.target.value)
            }}
             type="password" className="form-control"/>{''}
        </div>


        <div class="mb-3">
            <div>Already have an account ? signin <link to="/Signin"></link>
            </div>
                <button onClick={onSignup} className="btn btn success">Signup</button>
            </div>
           
        
    </div>
        </div>
    )
}

export default SignupPage
import { Link } from "react-router-dom"

const SigninPage = (props) => {
    return ( 
    <div>
        <h1 className = "header" > Signin </h1>
        <div className="form"></div>

        <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control"/>{''}
        </div>

        <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="email" className="form-control"/>{''}
        </div>


        <div className="mb-3">
            <div>Don't have an account ? signup <link to="/Signup"></link>
            </div>
                <button className="btn btn success">Signin</button>
            </div>
           
        
    </div>
    )
}

export default SigninPage
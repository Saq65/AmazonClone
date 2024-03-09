import { useNavigate } from "react-router-dom";
import amazonIcon from "./Screenshot 2024-02-27 133843.png";
export function NewAccount(){
    const navigate = useNavigate();
    return(
        <div className="container-fluid bg-white">
        <div className="img d-flex justify-content-center p-3">
            <img src={amazonIcon} alt="icon" />

        </div>
        <div className="form d-flex justify-content-center">
            <form action="#" className="border border-dark w-25 p-4 form-control">
                <label className="h3 p-1" htmlFor="signin">Create Account</label> <br />
                <label style={{fontWeight:'700'}} htmlFor="email or mobile">Your name</label>
                <input type="text" placeholder="First and last name" className="form-control" /> <br />
                <label style={{fontWeight:'700'}} htmlFor="email or mobile">Mobile number</label>
                <input type="text" placeholder="Mobile number" className="form-control" /> <br />
                <label style={{fontWeight:'700'}} htmlFor="email or mobile">Password</label>
                <input type="text" placeholder="At least 6 characters" className="form-control" /> <br />
                <p style={{fontSize:'small'}}>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p> 
                <button className="btn btn-warning w-100">Verify mobile number</button>
                <br />
                <hr />
                <p>Alrady have an account? <span onClick={()=>navigate('/signin')} style={{color:'#009DD1',cursor:'pointer'}}>Sign in</span></p>
            </form>
        </div>
        <div>
            <span onClick={()=>navigate('/')} style={{color:'#009DD1',cursor:'pointer'}}>back to homepage?</span>
        </div>
         <br />
        <hr />
    </div>
    )
}
import { useNavigate } from "react-router-dom";
import amazonIcon from "./Screenshot 2024-02-27 133843.png";
import "./amazon.css";
export function SignIn() {
    const navigate = useNavigate();
    return (
        <div id="si" className="container-fluid bg-white">
            <div className="img d-flex justify-content-center p-3">
                <img src={amazonIcon} alt="icon" />

            </div>
            <div id="sign" className="form d-flex justify-content-center">
                <form action="#" className="border border-dark w-25 p-4 form-control">
                    <label className="h3 p-1" htmlFor="signin">Sign in</label> <br />
                    <label htmlFor="email or mobile">Email or mobile phone number</label>
                    <input type="text" className="form-control" /> <br />
                    <button className="btn btn-warning w-100">Continue</button>
                    <br />
                    <br />
                    <p style={{ fontSize: 'small' }} className="">By continuing,you agree to Amazon's <span style={{ color: '#009DD1' }}> Condition of Use</span> and <span style={{ color: '#009DD1' }}>Privacy Notice</span> .</p>
                    <br />
                    <span style={{ color: '#009DD1' }}>Need help?</span>
                    <br />
                    <hr />
                    <b>Buying for work?</b> <br />
                    <span style={{ color: '#009DD1' }}>Shop on Amazon Business</span>
                </form>
            </div>
            <div id="new">
                <div style={{ float: 'left', width: '44%' }}> <hr /></div>
                <div style={{ float: 'right', width: '44%' }}> <hr /></div>
                <p style={{ position: 'relative', left: '20px' }}>New to Amazon?</p>
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={()=>navigate('/newAccount')} className="btn w-25 border border-dark">create your Amazon account</button>
            </div>
            <br />
            <div className="d-flex justify-content-center">
            <span onClick={()=>navigate('/')} style={{color:'#009DD1',cursor:'pointer'}}>back to homepage?</span>
            </div>
            <hr />
        </div>
    )
}
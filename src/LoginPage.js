import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './LoginPage.css'


function LoginPage() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8001/login",{
                email,password
            })
            .then(res=>{
                if(res.data!=="invalid"){
                    history("/employeeListing")
                }
                else if(res.data==="invalid"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
            <div className="login">
                <div className="main_signuppage">
                    <div className="rightcomponent_signuppage">
                        <div className="title">
                            <p className='title_welc'>Login</p>
                        </div>
                        <form action="POST" className="inpgrp_login">
                            <input type="email" className="inp" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                            <input type="password" className="inp" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                            <input type="submit" className="btn_sinup" onClick={submit} />
                        </form>
                        <br />
                        <p className="or">OR</p>
                        <br />
                        <p>Not registered?</p>
                        <p>Create an account.<Link className="signup_link" to="/customerSignup">Signup</Link></p>
                        
                    </div>
                </div>
            </div>
    )
}

export default LoginPage


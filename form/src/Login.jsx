import React,{useState} from "react";
import {Link,useNavigate} from 'react-router-dom'
import './App.css'

function Login(){
    const nav= useNavigate();
    const [data,setData]=useState({
        email:'',
        password:'',
    })
    const {email,password}=data;
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
   const  submitHandler=e=>{
    e.preventDefault();
    const store=localStorage.getItem('user')
    if(email=== ''){
        alert('please enter email')
    }
    else if(!email.includes('@')){
        alert('please enter valid email')
    }
    else if(password === ''){
        alert('please enter password')
    }
    else if(password.length<5){
        alert('password length must greater than five')
    }
    else{
        const userdata= JSON.parse(store)
        const loginuser= userdata.filter((e,k)=>{
            return e.email == email  &&  e.password === password;
        })
        if(loginuser.length ===0){
            console.log('invalid email or password')
        }
        else {
            console.log('login successful')
            nav('/todo')
        }
    }
   }
    return(
        <div className="Container">
            <form onSubmit={submitHandler}>
                <div className="header">
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <label>E-Mail : </label>
                        <input type='email' name='email' value={email} onChange={changeHandler} /><p></p>
                    </div>
                    <div className="input">
                        <label>Password : </label>
                        <input type='password' name='password' value={password} onChange={changeHandler} /><p></p>
                    </div>
                    <div className="input">
                        <input type="radio" /> <label>Remember me</label>
                       
                    </div>
                    <div className="submitcontainer">
                       <button className="submit">Login</button>
                    </div>
                    <p className="link">  
                    <small>Don't have an account</small>
                        <Link to='/' className="login">Signup</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}
export default Login
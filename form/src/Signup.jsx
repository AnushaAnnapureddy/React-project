import React,{useState} from "react";
import {Link,useNavigate} from 'react-router-dom'
import './App.css'

function Signup(){
    const nav = useNavigate();
    const[data,setData]=useState(
        {
            firstname:'',
            lastname:'',
            email:'',
            phonenumber:'',
            birthday:'',
            password:'',
        }
    );
    const {firstname,lastname,email,phonenumber,birthday,password}=data
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=e=>{
        e.preventDefault()
        if(firstname === ''){
            alert('please enter firstname')
        }
        else if(lastname === ''){
            alert('please enter lastname')
        }
        else if(email=== ''){
            alert('please enter email')
        }
        else if(!email.includes('@')){
            alert('please enter valid email')
        }
        else if(phonenumber === ''){
            alert('please enter phone number')
        }
        else if(birthday === ''){
            alert('please select birthday')
        }
        else if(password === ''){
            alert('please enter password')
        }
        else if(password.length<5){
            alert('password length must greater than five')
        }
        else{
            let store= JSON.parse(localStorage.getItem('user') || '[]');
            let items={
                firstname:firstname,
                lastname:lastname,
                email:email,
                phonenumber:phonenumber,
                birthday:birthday,
                password:password,
            }
            store.push(items);
            localStorage.setItem('user',JSON.stringify(store));
            nav('/login')
        }
    }
    return(
        <div className="Container">
            <form onSubmit={submitHandler} >
                <div className="header">
                    <div className="text">Sign Up</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                <div className="input">
                        <label>Firstname : </label>
                        <input type='text' name='firstname' value={firstname} onChange={changeHandler} /><p></p>
                        <label>Lastname : </label>
                        <input type='text' name='lastname' value={lastname} onChange={changeHandler}  />
                    </div>

                    <div className="input">
                        <label>E-Mail : </label>
                        <input type='email' name='email' value={email} onChange={changeHandler}  />
                    </div>

                    <div className="input">
                        <label>Phone : 
                            <small>formate:1234-567-890</small> </label>
                        <input type='tel' pattern='[0-9]{10}' name='phonenumber' value={phonenumber} onChange={changeHandler}  />
                    </div>

                    <div className="input">
                        <label>Birthday : </label>
                        <input type='date' name='birthday' value={birthday} onChange={changeHandler}  /><p></p>
                        <label>Gender : </label>
                        <input type='radio' name='male'/><label>male</label>
                        <input type='radio' name='female'/><label>female</label>
                    </div>
                    <div className="input">
                        <label>Password : </label>
                        <input type='password' name='password' value={password} onChange={changeHandler}  />
                    </div>
                    <div className="input">
                        <input type="radio" /> <label>Remember me</label>   <p></p> <p></p>
                       
                       
                    </div>
                    <div className="submitcontainer">
                       <button onSubmit={submitHandler} className="submit" >Signup</button>
                    </div>
                    <p className="link">  
                    <small>Already have an account  </small>
                        <Link to='/Login'  className="login">Login</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}
export default Signup
import React,{useState,useEffect} from'react'
//import TodoList from './TodosList';
import { Data } from './Data';
import { useNavigate } from 'react-router-dom';
import './App.css';


function TodoApp(){
    const userName=JSON.parse(localStorage.getItem('user'))
    console.log(userName)
    const nav = useNavigate();
    const[data,setData]=useState([]);
    const[description,setDescription]=useState('');
    const[amount,setAmount]=useState(0);
    const[id,setId]=useState(0);
    const[update,setUpdate]=useState(false);

    useEffect(()=>{
        setData([])
    },[])
    const handleEdit=(id)=>{
        const dt=data.filter((item)=>item.id==id)
        if(dt!== undefined)
            setUpdate(true);
        
        setId(id);
        console.log(id,data);
        setDescription(dt[0].description);
        setAmount(dt[0].amount);
    }
    const handleDelete=(id)=>{
        if(id > 0){
            if(window.confirm('Are you sure to delete')){
        const del=data.filter((item)=>{
           return id!==item.id;
        });
        setData(del);
            }
        }
    }
    
    const handleSave=(e)=>{
            let error='';
            if(description === '')
                error += 'description is required, ';
            if(amount <= '')
                error += 'amount is required, ';
        if (error=== ''){

       
        e.preventDefault();
        const dt=[...data];
        const newobject={
            id: data.length + 1,
            description:description,
            amount:amount,
        }
        dt.push(newobject);
        setData(dt);
        handleClear();
    } else{
        alert(error)
    }
    }
    const handleUpdate=()=>{
        const index= data.map((item,index)=>{
            return (item.id)
        }).indexOf(id)
       
        const dt=[...data];
        dt[index].description=description;
        dt[index].amount=amount;
        setData(dt);
        handleClear();
    }
    const handleClear=(id)=>{
        setId(id)
    setDescription('');
    setAmount(0)
    setUpdate(false)

    }

    const logoutHandler=()=>{
        nav('/login');
    }
    return(
        <div className='Container'>
            <br />
           <div className='subcontainer'>
            <button type='submit' onClick={logoutHandler} className='sub'>Logout</button>
            </div>
            <div>
                <label>Description : </label>
                <input type='text' name='description' value={description} onChange={(e)=>setDescription(e.target.value)} className='input'/>
            </div>
            <div >
                <label>Amount : </label>
                <input type='number' name='amount' value={amount} onChange={(e)=>setAmount(e.target.value)} className='input'/>
                
            </div>
            &nbsp;
            &nbsp;
            <div className='submitcontainer'>
                {
                    !update?<button type='submit'onClick={(e)=>handleSave(e)} className='submit '>Save</button> : <button type='submit' onClick={()=>handleUpdate()} className='submit '>Update</button>
                }
                
               &nbsp;
               &nbsp;
               &nbsp;
               &nbsp;

                <button type='submit' onClick={()=>handleClear() } className='submit'>Clear</button>
            </div>
            <table>
               
                <thead>
                    <tr>
                        <td>S.NO</td>&nbsp; &nbsp;
                        <td>Description </td> &nbsp;
                        <td>Amount</td>
                        <td style={{textAlign:'center'}}>Actions</td>
                    </tr>
                </thead>
                    <tbody >
                        {
                              data.map((item,index)=>{
                                 return(   
                                       
                                        <tr key={index}>
                                    <td >{index+1}</td>&nbsp; &nbsp;
                                    <td>{item.description}</td>&nbsp;
                                    <td>{item.amount}</td>
                                    <td className='subcontainer'>
                                        <button type='submit' onClick={()=>handleEdit(item.id)} className='sub '>Edit</button>
                                        <button type='submit' onClick={()=>handleDelete(item.id)} className='sub '>Delete</button>
                                    </td>
                                    </tr>
                                     )
                            })
                        }
                    </tbody>
            </table>
        </div>
    )
}
export default TodoApp
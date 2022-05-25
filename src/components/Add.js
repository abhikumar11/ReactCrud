import axios from "axios";
import React,{useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import {toast} from 'react-toastify';
import './css/AddEdit.css';
const initialState={
    name:"",
    email:"",
    mob:""
}
function AddEdit()
{
    const[state,setState]=useState(initialState);
    const{name,email,mob}=state;
    const his=useNavigate();
    const handelSubmit=(e)=>
    {
        e.preventDefault();
        if(!name||!email||!mob)
        {
            toast.error("please provide information");
        }
        else
        {
         axios.post("http://localhost:3001/api/post",{name,email,mob})
         .then(()=>{setState({name:"",email:"",mob:""});
        })
        .catch((err)=>toast.error(err.response.data));
        toast.success("Data Saved Successfully");
        setTimeout(()=>his('/'),500);
        }
    }
    const handelOnChange=(e)=>
    {
            const{name,value}=e.target;
            setState({...state,[name]:value});
    }
        return(
            <div style={{marginTop:"100px"}}>
                <form style={{margin:"auto",padding:"15px",maxWidth:"400px",alignContent:"center"}} onSubmit={handelSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" value={name} onChange={handelOnChange}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" value={email} onChange={handelOnChange}/>
                    <label htmlFor="mob">Contact</label>
                    <input type="number" id="mob" name="mob" placeholder="Your Number" value={mob} onChange={handelOnChange}/>
                  <input type="submit" value="Save"/>
                  <Link to="/">
                  <input type="button" value="Back"/>
                  </Link>
                </form>
            </div>
        );
}
export default AddEdit;
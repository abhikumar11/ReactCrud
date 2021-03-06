import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import axios from "axios";
import './css/Home.css';
const Home=()=>
{
    const[data,setData]=useState([]);
    const loadData=async()=>{
        const response=await axios.get("http://localhost:3001/api/get")
        setData(response.data);
    };
    useEffect(()=>{
        loadData();
    },[]);
    const deleteData=(email)=>
    {
            if(window.confirm("Are you sure"))
            {
                axios.post(`http://localhost:3001/api/remove/${email}`);
                toast.success("Data deleted successfully");
                setTimeout(()=>loadData(),500);
            }
    }
    return(
        <div style={{marginTop:"150px"}}>
            <Link to="/addContact">
            <button className='btn btn-contact'>Add New</button>
            </Link>
            <table className='styled-table'>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>No.</th>
                    <th style={{textAlign:"center"}}>Name</th>
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Contact No.</th>
                    <th style={{textAlign:"center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>{
                    return(
                        <tr key={item.id}>
                            <th scope='row'>{index+1}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>
                            <Link to={`/update/${item.id}`}>
                            <button className='btn btn-edit'>Edit</button>
                            </Link>
                            <button className='btn btn-delete' onClick={()=>deleteData(item.email)}>Delete</button>
                            <Link to={`/view/${item.email}`}>
                            <button className='btn btn-view'>View</button>
                            </Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
            </table>
        </div>
    );
}
export default Home;
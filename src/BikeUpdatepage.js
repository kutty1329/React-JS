import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {  alter1 } from './BikeDetailValues'
import './Image.css'


export let Updating=(myvalue)=>
{
    const[pos,setPos]=useState(myvalue.who)
    const[process,setProcess]=useState({
        "cusId":myvalue.mention.cusId,
        "cusName":myvalue.mention.cusName,
        "cusContact":myvalue.mention.cusContact,
        "cusEmail":myvalue.mention.cusEmail,
        "cusDate":myvalue.mention.cusDate
    })

    const track=(data)=>
    {
        const{name,value}=data.target
        setProcess(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }

    const register=()=>
    {
        alter1(process,pos)
        alert("Your values is updated succesfully")
        // alert('welcome to Zealous Service Center'+JSON.stringify(process))
        // create(process);
    }
    const reset=()=>
    {
        alert('Rejected...!')
    }

    return(
        <>
            <div className="container bg-dark">
                <img src="./Images/BikeForm.webp" id="center1"></img>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3 " id="center">
                <h4 className="text-center mt-5 mb-5" id='center2'><i class="bi bi-bicycle"></i> Bike Details Form</h4>
                    <div className="row justify-content-center " >
                        <div className="row">
                            <div className="col">
                                <label className="form-label" >RegisterNumber</label>
                                <input type="text" 
                                 name="cusId"
                                 onChange={track}
                                 value={process.cusId}
                                className="form-control" />
                            </div>
                            <div className="col">
                                <label className="form-label" >CustomerName</label>
                                <input type="text" 
                                name="cusName"
                                onChange={track}
                                value={process.cusName}
                                className="form-control" />
                            </div>
                        </div>
                    </div>  
                    <div className="mt-3">
                                <label className="form-label" >CustomerContact</label>
                                <input type="tel" 
                                name="cusContact"
                                onChange={track}
                                value={process.cusContact}
                                className="form-control" />
                    </div>
                    <div className="mt-3">
                                <label className="form-label" >CustomerEmail</label>
                                <input type="email" 
                                name="cusEmail"
                                value={process.cusEmail}
                                onChange={track}
                                className="form-control" />
                    </div>
                    <div className="mt-3">
                                <label className="form-label" >DateofPurchase</label>
                                <input type="date"
                                name="cusDate"
                                value={process.cusDate}
                                onChange={track}
                                 className="form-control" />
                    </div>
                    <div className="row justify-content-around mt-4">
                        <button className="btn btn-outline-success col-3 ms-3" onClick={register}  >Update</button>
                        <button className="btn btn-outline-danger col-3 me-3" onClick={reset} type="reset" value="Reset" >Reset</button>
                    </div>
                </div>
                </div>
                </div>
        </>
    )
}

import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { create } from './JobDetails'

export let Application=()=>
{
    const [process,setprocess]=useState({
        "EmpName":"",
        "EmplastName":"",
        "EmpAge":0,
        "gender":"",
        "gender1":"",
        "EmpEdu":"",
        "EmpRes":"",
        "EmpAdd":"",
        "EmpAdd1":"",
        "EmpMail":"",
        "Empno":0,
    })
    const track=(data)=>
    {
        const{name,value}=data.target
        setprocess(
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
        alert('welcome to ZOHO'+JSON.stringify(process))
        create(process);
    }
    const reset=()=>
    {
        alert('Rejected...!')
    }

    return(
        <>
        <div className="container bg-info">
            <div className="row-justify-content-center">
                <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3">
                    <img src="./Zoho 1.jpg" className='align-center'></img>
                    <h4 className="text-center">Job Application Form</h4>
                    <h6 className="bg-warning">Personal Information</h6>
                    <div className="row-justify-content-center">
                        <div className="row">
                            <div className="col">
                                <label className="form-label">Full Name</label>
                                <input className="form-control"
                                name='EmpName'
                                onChange={track}
                                value={process.EmpName}
                                 type="text"/>
                            </div>
                            <div className="col">
                                <label className="form-label">Last Name</label>
                                <input className="form-control" 
                                name='EmplastName'
                                onChange={track}
                                value={process.EmplastName}
                                type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Date Of Birth</label>
                        <input className="form-control" 
                        name='EmpAge'
                        onChange={track}
                        value={process.EmpAge}
                        type="date"/>
                    </div>
                    <div className="mt-3">
                        <label className="form-label">E-Mail</label>
                        <input className="form-control" 
                        name='EmpMail'
                        onChange={track}
                        value={process.EmpMail}
                        type="email"/>
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Mobile No</label>
                        <input className="form-control" 
                        name='EmpNo'
                        onChange={track}
                        value={process.Empno}
                        type="tel"/>
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Gender</label>
                        <input type="radio" className="form-check-input" 
                        name="gender"
                        onChange={track}
                        value={process.gender}
                        />Male
                        <input type="radio" className="form-check-input" 
                        name="gender1"
                        onChange={track}
                        value={process.gender1}
                        />FeMale
                    </div>
                    <div className="mt-3">
                         <label className="form-label">Education</label>
                         <select className="form-select" 
                         name='EmpEdu'
                         onChange={track}
                         value={process.EmpEdu}
                         >
                            <option selected hidden>-select-</option>
                            <option>Under Graduate</option>
                            <option>Post Graduate</option>
                            <option>School</option>
                         </select>
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Resume</label>
                        <input type="file" className="form-control" 
                        name='EmpRes'
                        onChange={track}
                        value={process.EmpRes}
                        />
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Address</label>
                        <textarea placeholder="Address here" class="form-control" 
                        name='EmpAdd'
                        onChange={track}
                        value={process.EmpAdd}
                        ></textarea>
                    </div>
                    <div className="mt-3">
                        <label className="form-label" typeof="hidden">Address</label>
                        <textarea placeholder="Address here" class="form-control" 
                        name='EmpAdd1'
                        onChange={track}
                        value={process.EmpAdd1}
                        ></textarea>
                    </div>
                    <div className="row-justify-content-arount mt-4">
                    <button className="btn btn-outline-success text-dark col-3 ms-3" onClick={register}>Register</button>
                    <button className="btn btn-outline-success text-dark col-3 me-3" onClick={reset} type="reset" value="Reset">Reset</button>
                 </div>
                </div>

            </div>

        </div>
        </>
    )
}
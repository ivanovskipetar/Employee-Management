import React, {useEffect, useState} from 'react'
import {createEmployee, getEmployee, updateEmployee} from "../services/EmployeeService.js";
import {useNavigate, useParams} from "react-router-dom";

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const {id} = useParams()

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    useEffect(() => {
        getEmployee(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
        }).catch(error => {
            console.error(error)
        })
    }, [id]);

    const navigator = useNavigate()

    function saveOrUpdateEmployee(event) {
        event.preventDefault()

        if (validateForm()) {
            const employee = {firstName, lastName, email}
            console.log(employee)

            if (id) {
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data)
                    navigator('/employees')
                }).catch(error => {
                    console.error(error)
                })
            } else {
                createEmployee(employee).then((response) => {
                    console.log(response.data)
                    navigator('/employees')
                }).catch(error => {
                    console.error(error)
                })
            }
        }
    }

    function validateForm() {
        let valid = true

        const errorsCopy = {...errors}

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required!'
            valid = false
        }

        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required!'
            valid = false
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required!'
            valid = false
        }

        setErrors(errorsCopy)

        return valid
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center my-4'>Update Employee</h2>
        } else {
            return <h2 className='text-center my-4'>Add Employee</h2>

        }
    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter employee first name'
                                    name='firstName'
                                    value={firstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    onChange={(event) => setFirstName(event.target.value)}>
                                </input>
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter employee last name'
                                    name='lastName'
                                    value={lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    onChange={(event) => setLastName(event.target.value)}
                                >
                                </input>
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type='text'
                                    placeholder='Enter employee email'
                                    name='email'
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={(event) => setEmail(event.target.value)}
                                >
                                </input>
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>

                            <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmployeeComponent
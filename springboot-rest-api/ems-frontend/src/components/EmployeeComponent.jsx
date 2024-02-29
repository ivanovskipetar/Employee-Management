import React, {useState} from 'react'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    function saveEmployee(event) {
        event.preventDefault()

        const employee = {firstName, lastName, email}
        console.log(employee)
    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center my-4'>Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter employee first name'
                                    name='firstName'
                                    value={firstName}
                                    className='form-control'
                                    onChange={(event) => setFirstName(event.target.value)}>
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter employee last name'
                                    name='lastName'
                                    value={lastName}
                                    className='form-control'
                                    onChange={(event) => setLastName(event.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type='text'
                                    placeholder='Enter employee email'
                                    name='email'
                                    value={email}
                                    className='form-control'
                                    onChange={(event) => setEmail(event.target.value)}
                                >
                                </input>
                            </div>

                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmployeeComponent
import React from 'react'

const ListEmployeeComponent = () => {

    const dummy_data = [
        {
            "id": 1,
            "firstName": "Petar",
            "lastName": "Ivanovski",
            "email": "petar@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Lebron",
            "lastName": "James",
            "email": "lebron@gmail.com"
        },
        {
            "id": 3,
            "firstName": "Tom",
            "lastName": "Cruise",
            "email": "tom@gmail.com"
        },
    ]
    return (
        <div className='container'>
            <h2 className='text-center'>List of employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                <tr>
                    <th>Employee id</th>
                    <th>Employee first name</th>
                    <th>Employee last name</th>
                    <th>Employee email</th>
                </tr>
                </thead>
                <tbody>
                {
                    dummy_data.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}
export default ListEmployeeComponent
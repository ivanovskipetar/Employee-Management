import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL + '/get')
}
export const createEmployee = (employee) => {
    return axios.post(REST_API_BASE_URL + '/add', employee)
}

export const getEmployee = (employeeId) => {
    return axios.get(REST_API_BASE_URL + '/' + employeeId + '/get')
}

export const updateEmployee = (employeeId, employee) => {
    return axios.put(REST_API_BASE_URL + '/' + employeeId + '/update', employee)
}
export const deleteEmployee = (employeeId) => {
    return axios.delete(REST_API_BASE_URL + '/' + employeeId + '/delete')
}
import ApiHandler from "../../handler/apiHandler";

class EmployeeProvider extends ApiHandler {
    getAllEmployees() {
        return this.get('/employees')
    }
    getEmployee(payload) {
        return this.get('/employees/' + payload)
    }
    createEmployee(payload) {
        return this.post('/employees/', payload);
    }
    deleteEmployee(id) {
        return this.delete('/employees/' + id);
    }
    updateEmployee(payload) {
        return this.put('/employees/'+payload.employee_id, payload)
    }
}

export default EmployeeProvider; 
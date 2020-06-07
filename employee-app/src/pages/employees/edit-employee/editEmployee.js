import {mapGetters} from "vuex";
import {GET_EMPLOYEE, CREATE_EMPLOYEE, UPDATE_EMPLOYEE} from "../../../store/actions";
export default {
    data() {
        return {
            employee: {
                first_name: '',
                last_name: '',
                job_title: '',
                salary: '',
                period: ''

            },
            editing: false,
            employee_id: null
        }
    },
    computed: {
        ...mapGetters(['employee'])
    },
    methods: {
        createEmployee() {
            const payload = {
                'first_name' : this.employee.first_name,
                'last_name' : this.employee.last_name,
                'job_title' : this.employee.job_title,
                'salary' : this.employee.salary,
                'period' : this.employee.period
            }

            window.console.log('employee', payload);
            this.$store.dispatch(CREATE_EMPLOYEE, payload).then(
                () => {
                    this.$router.push({name: 'employees-overview'})
                }
            )
        }, 
        getOneEmployee(id) {
            this.$store.dispatch(GET_EMPLOYEE, id).then(
                (data) => {
                    this.employee = data.data;
                }
            )
        },
        updateEmployee() {
            const payload = {
                'first_name' : this.employee.first_name,
                'last_name' : this.employee.last_name,
                'job_title' : this.employee.job_title,
                'salary' : this.employee.salary,
                'period' : this.employee.period,
                'employee_id' :this.employee_id
            }
            window.console.log('updated', payload)
            this.$store.dispatch(UPDATE_EMPLOYEE, payload).then(
                () => {
                    this.$router.push({name: 'employees-overview'})
                }
            )
        }
    },
    mounted() {
       
       if (this.editing === true) {
            this.getOneEmployee(this.employee_id)
       } else {
           this.editing = false
       }
       
    },
    created() {
        
        this.employee_id = this.$route.params.employeeId;
        this.editing = this.$route.params.editing;
    }
}
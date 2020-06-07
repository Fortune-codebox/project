import {mapGetters} from "vuex";
import {GET_ALL_EMPLOYEES, DELETE_EMPLOYEE} from "../../../store/actions";


export default {
    data() {
        return {
           
        }
    },
    methods: {
        getAllEmployees() {
            this.$store.dispatch(GET_ALL_EMPLOYEES);
        },
        deleteEmployee(id) {
            alert("you are deleting")
          if (id) {
              this.$store.dispatch(DELETE_EMPLOYEE, id).then(
                  () => {
                      this.getAllEmployees();
                  }
              )
          }
        },
        editEmployee(id) {  
            this.$router.push({name: 'edit-employee', params:{employeeId:id, editing: true}})
        }
    },
    computed: {
      ...mapGetters(['employees'])
    },
    mounted() {
        this.getAllEmployees();
    }
}

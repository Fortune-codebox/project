<template>
    <div>
      <b-card class="card_adj">  
        {{editing}}
       <h3 v-if="editing === true">Edit Employee</h3>
       <h3 v-else>Create Employee</h3>
       <hr>
       <div class="mt-3" >
          <b-form @submit.prevent="editing === true ? updateEmployee : createEmployee">
                <b-form-group
                  id="input-group-1"
                  label="First Name:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="employee.first_name"
                    type="text"
                    required
                    placeholder="Enter First Name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="employee.last_name"
                    type="text"
                    required
                    placeholder="Enter last name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Job Title:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="employee.job_title"
                    required
                    type="text"
                    placeholder="Enter Job Title"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Salary:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="employee.salary"
                    required
                    type="number"
                    step="0.0001"
                    placeholder="Enter Salary"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Period:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="employee.period"
                    required
                    type="time"
                    placeholder="Enter Period"
                  ></b-form-input>
                </b-form-group>

                
                <b-button @click="updateEmployee" v-if="editing === true" variant="primary">Update</b-button>
                <b-button @click="createEmployee" v-else variant="primary">Create</b-button>
                
                <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
              </b-form>
       </div>
    
      </b-card>
    
    </div>
</template>

<script src="./editEmployee.js"></script>
<style lang="scss" scoped>
  @import "editEmployee";
</style>
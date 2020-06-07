<template>
    <div>
      <router-link :to="{ name: 'add-employee' }">
      <b-button class="top-b" >add employee</b-button>
      </router-link>
          <!-- <pre>{{employees}}</pre> -->
          <b-row class="mt-4 table-head pl-3 ml-4">
            <b-col cols="1">
              <b-form-checkbox
                id="checkbox-1"
                name="checkbox-1"
              >
              <!-- value="accepted" -->
                <!-- unchecked-value="not_accepted" -->
                </b-form-checkbox>
            </b-col>
            <b-col cols="3">
                <p>EMPLOYEE</p>
            </b-col>

            <b-col cols="3">
                <p>SALARY</p>
            </b-col>

            <b-col cols="2">
                <p>STATUS</p>
            </b-col>

            <b-col cols="3">
                <p>MANAGE</p>
            </b-col>
          </b-row>
         
         <div class="container-fluid" style="width:95%">
           <b-card class="mt-2" v-for="(employee, i) in employees" :key="i">
              <b-row>
                   <b-col cols="1">
                      <b-form-checkbox
                        name="checkbox-1"
                        
                      >
                      </b-form-checkbox>
                   </b-col>

                   <b-col cols="3">
                       <b-row>
                         <b-col cols="3">
                           <img src="@/assets/profile.png" alt="">
                         </b-col>
                         <b-col cols="9">
                            <span class="top-tag">{{employee.first_name}} {{employee.last_name}}</span> <br>
                            <span class="bottom-tag"> <small>{{employee.job_title}}</small> </span>
                         </b-col>
                       </b-row>
                   </b-col>

                   <b-col cols="3">
                      <span class="top-tag">{{employee.salary}} NOK <b-badge class="badge_adj">New</b-badge></span> <br>
                      <span class="bottom-tag"> <small>full time</small> </span>
                   </b-col>

                   <b-col cols="2">
                      <span class="top-tag">test period</span> <br>
                      <span class="bottom-tag"> <small>{{employee.period}}</small> </span>
                   </b-col>

                    <b-col cols="2">
                      <b-row class="mt-2">
                        <b-col @click="editEmployee(employee.id)" id="edit" style="border-right: 1px solid #dcdcdc">
                          <img src="@/assets/edit.png" alt="">
                        </b-col>

                        <b-tooltip target="edit" triggers="hover">
                          Edit Employee
                        </b-tooltip>

                        <b-col id="delete" @click="deleteEmployee(employee.id)">
                          <img src="@/assets/delete.png" alt="">
                        </b-col>
                        <b-tooltip target="delete" triggers="hover">
                          Delete Employee
                        </b-tooltip>
                      </b-row>
                   </b-col>


              </b-row>
          </b-card>
         </div>
          
   
    </div>
</template>

<script src="./employeesOverview.js"></script>
<style lang="scss" scoped>
  @import "employeesOverview";
</style>
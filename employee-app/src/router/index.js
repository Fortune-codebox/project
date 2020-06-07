import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);
let router = new Router({
    mode: 'history',
    // scrollBehavior(to, from, savedPosition) {
    //     return {x: 0, y: 0};
    // },
    routes: [
       {
        path: '/',
        component: () => import('../pages/layout/Layout.vue'),
        redirect: {
            name: 'employees-overview'
        },
        children: [
            {
                path: '/all-employees',
                name: 'employees-overview',
                component: () => import('../pages/employees/employees-overview/EmployeesOverview.vue')
            },

            {
                path: '/edit-employee/:employeeId',
                name: 'edit-employee',
                component: () => import('../pages/employees/edit-employee/EditEmployee.vue')
            },
            {
                path: '/add-employee',
                name: 'add-employee',
                component: () => import('../pages/employees/edit-employee/EditEmployee.vue')
            }
        ]

       }]
});

export default router;
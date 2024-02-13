import { createWebHistory,createRouter} from "vue-router";
import  login from './components/Login.vue'

import signUp from './components/signUp.vue'
import Weather1 from './components/Weather1.vue'



const routes = [
   
    {
        name:'weather',
        path:'/weather',
        component:Weather1
    },
    {
        name:'login',
        path:'/login',
        component:login
    },
    {
        name:'signUp',
        path:'/signUp',
        component:signUp
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router

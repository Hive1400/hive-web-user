import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'Services',
        component: () =>
            import ('../pages/Services.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../pages/Login.vue')
    },
    {
        path: '/accountCredit',
        name: 'AccountCredit',
        component: () =>
            import ('../pages/AccountCredit.vue')
    },
    {
        path: '/myLocation',
        name: 'MyLocation',
        component: () =>
            import ('../pages/MyLocation.vue')
    }
]

const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })
    // router.beforeEach((to, from, next) => {
    //     console.log(to.name)
    //     if (!localStorage.getItem("accessToken") && to.name !== "Login") {
    //         next({ name: 'Services' })
    //     } else if (localStorage.getItem("accessToken") && to.name == "Login") {
    //         next({ name: 'Services' })
    //     } else next()
    // })
export default router
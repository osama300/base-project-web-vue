import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: false
        
       } // حماية الصفحة باستخدام requiresAuth
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// استخدام حارس التنقل لحماية المسارات المحمية
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth'); // افتراض وجود "auth" في LocalStorage عند تسجيل الدخول
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login'); // إعادة التوجيه إلى صفحة تسجيل الدخول إذا لم يكن المستخدم مسجلاً
  } else {
    next(); // السماح بالانتقال
  }
});

export default router;

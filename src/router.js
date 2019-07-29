import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import ProductList from '@/views/ProductList.vue'
// productの子ルート
import ProductHome from '@/views/ProductHome.vue'
import ProductReview from '@/views/ProductReview.vue'
// import ProductReviewDetail from '@/views/ProductReviewDetail.vue'

const router = new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'productlist',
      path: '/product',
      component: ProductList
    },
    {
      name: 'product',
      path: '/product/:id',
      component: Product,
      props: route => ({id: Number(route.params.id)}),
      children: [
        {
          name: 'product-home',
          path: 'home',
          conponent: ProductHome
        },
        {
          name: 'product-review',
          path: 'review',
          conponent: ProductReview
        },
        // {
          // name: 'review-detail',
          // path: 'review/:rid',
          // conponent: ProductReviewDetail,
          // props: route => ({rid: Number(route.params.rid)}),
        // },
      ]
    },
  ]
})

export default router

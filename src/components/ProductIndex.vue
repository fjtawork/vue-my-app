<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <Product :item="item" @alerting="handleAlert" />
    </li>
  </ul>
</template>

<script>
import Product from '@/components/Product.vue'
export default {
  computed: {
    items: function(){ return this.$store.getters.items }
  },
  components: { Product },
  methods:{
    handleAlert: function(name){
      alert(name)
    }
  }
}
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/product">商品一覧</router-link>
      <router-view></router-view>
    </nav>
  </div>
</template>

<script>
import EditForm from '@/components/EditForm.vue'
export default {
  name: 'App',
  components: {
    EditForm
  },
  computed: {
    message: function() { return this.$store.getters.message },
    itemA: function() {
      return this.$store.getters.item
    },
    itemAll: function(){
      return this.$store.getters.items;
    }
  }
}
</script>

<style scoped>
.router-link-exact-active { background: #e25193; }
</style>


<template>
  <div>
  <div class="product" v-if="item" key="product">
    <h1>商品情報:{{ item.name }}</h1>
    <nav class="nav">
      <router-link :to="{name: 'product-home'}">商品詳細</router-link>
      <router-link :to="{name: 'product-review'}">商品レビュー</router-link>
    </nav>
  </div>
  <pre>{{ $store.state.detail }} </pre>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions  } from 'vuex'

export default {
  props: { id: Number, required: true },
  computed: {
    item: function(){
      return this.$store.getters.detail
     }
  },
  actions: mapActions(['load']),
  watch: {
    id: {
      handler: function(){
        this.$store.dispatch('load', this.id)
      },
      immediate: true
    }
  },
}
</script>

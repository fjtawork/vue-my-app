<template>
  <div class="product" v-if="item" key="product">
     <dl class="product-table">
      <dt>商品名</dt><dd>{{ item.name }}</dd>
      <dt>価格</dt><dd>{{ item.price }}円</dd>
      <dt>商品説明</dt><dd>{{ item.content }}</dd>
    </dl>
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

<template>
  <div class="product" key="product">
    レビュー
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

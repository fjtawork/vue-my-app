<template>
  <div>
    <router-link :to="{name: 'product',  params: { id: item.id } }"> {{ item.name }} </router-link>
    <button @click="childAlert">ボタン</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  methods:{
    childAlert: function(event){
      this.$emit('alerting', this.item.name)
    }
  }
}
</script>

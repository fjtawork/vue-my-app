<template>
  <div class="edit-form">
    <input type="text" v-model="message2">
    <input type="text" v-model="message3">
    <p>{{ message3 }}</p>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  data: function(){
    return {
      message3: 'メッセ３'
    }
  },
  computed: {
    message2: {
      get(){ return this.$store.getters.message },
      set(value) { this.$store.dispatch('doUpdate', value)}
    }
  },
}
</script>

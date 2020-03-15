<template>
  <form-group :label="label">
    <textarea @change="change" class="form-control" :id="name" :name="name" :placeholder="placeholder" :value="value" rows="6"></textarea>
  </form-group>
</template>
<script>
export default {
    props : ['name','placeholder','value','label'],
    methods : {
      change(event){
        this.$emit('my_change',event.target.value);
      }
    }
};
</script>

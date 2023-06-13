<template>
    <input :type="type" v-model="inputValue" class="input" :placeholder="placeholder">
</template>

<script>
export default {
    props:['placeholder', 'type'],
    data(){
        return{
            inputValue: ''
        }
    },
    watch: {
        inputValue(newValue, oldValue){
            this.$emit('change', newValue);
        }
    }
}
</script>

<style>
.input{
    text-align: center;
    width: 300px;
    font-size: 16px;
    border-radius: 12px;
    padding: 12px;
    background-color: transparent;
    border: 1px solid #7149C6;
    outline: none;
}
</style>
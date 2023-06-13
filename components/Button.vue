<template>
    <button @click="onClick" class="button">
        <slot />
    </button>
</template>

<script>
export default {
    methods: {
        onClick() {
            this.$emit('clicked', '');
        }
    },
}
</script>

<style>
.button{
    border-radius: 8px;
    padding: 8px;
    padding-inline: 16px;
    background-color: #7149C6;
    color: #fff;
    border: 0;
    cursor: pointer;
    transition: 200ms;
}
.button:hover{
    background-color: #5a3c9b;
}
</style>
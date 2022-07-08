<template>
    <div>
        <h3>子1</h3>
        <p>{{title}}</p>
        <button @click="toParent">传递到父元素</button>
    </div>
</template>

<script>
    export default {
        name: 'Child1',
        components: {},
        props: ["title"],
        data() {
            return {}
        },
        create() {
        },
        computed: {},
        mounted() {
        },
        methods: {
            toParent(){
                this.$emit("getmsg", "子--->父传值");
            }
        }
    }
</script>

<style scoped>

</style>

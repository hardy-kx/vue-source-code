<template>
    <div class="app">
        <h2>父亲</h2>
        <h3>{{msg}}</h3>
        <Child1 :title="title1" @getmsg="getmsg"></Child1>
        <Child2></Child2>
    </div>
</template>

<script>
    import Child1 from "./Child1";
    import Child2 from "./Child2";
    export default {
        name: 'Parent',
        components: {
            Child1,
            Child2
        },
        props: {},
        provide: {
            woniu: "我是骚气的Jerry老师"
        },
        data() {
            return {
                msg: "",
                title1: '父--->子传值'
            }
        },
        create() {
        },
        computed: {},
        mounted() {
        },
        methods: {
            getmsg(msg) {
                this.msg = msg;
            }
        }
    }
</script>

<style scoped>
    div {
        border: 3px blue solid;
        padding: 10px;
        display: inline-block;
        vertical-align: top;
        /* width:50%; */
    }
    h1,
    h2 {
        font-size: 18px;
        margin: 5px 0;
    }
    h3 {
        color: red;
        font-size: 14px;
    }
</style>

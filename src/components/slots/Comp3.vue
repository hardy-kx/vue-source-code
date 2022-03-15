<template>
    <div>
        <h3>
            作用域插槽
        </h3>
        <!-- 通过绑定指定作用域 -->
        <slot :foo="foo"></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                foo: 'comp3的数据'
            }
        },
    }
</script>

<style scoped>

</style>

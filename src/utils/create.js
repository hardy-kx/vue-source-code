import Vue from 'vue';

// create把传递的组件配置转换为组件实例返回
export default function create(Component, props) {
    // 先创建vue实例，用它创建组件实例
    const vm = new Vue({
        render(h) {
            // h就是createElement，它返回VNode
            return h(Component, {props})
        }
    }).$mount(); // $mount里面会调render生成VNode，生成的VNode会执行update函数生成DOM

    // 手动挂载：生成DOM结构存储在vm.$el把它追加到body即可
    document.body.appendChild(vm.$el);

    // 从vm.$children中拿出comp
    const comp = vm.$children[0]; // vm.$root也是comp

    // 销毁方法
    comp.remove = function() {
        document.body.removeChild(vm.$el);
        vm.$destroy();
    }
    return comp;
}

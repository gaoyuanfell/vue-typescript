import Vue from 'vue'
import Component from "vue-class-component";
import './style.less'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  // 所有的组件选项都可以放在这里
  template: `
    <div id="app">
      {{message}}
      {{message}}
      <div style="width: 200px;height: 200px;background-color: #ccc" @click="onClick($event)"></div>
      <router-view/>
    </div>
  `,
})
export default class App extends Vue {
  // 初始数据可以直接声明为实例的属性
  message: string = 'Hello';

  // 组件方法也可以直接声明为实例的方法
  onClick(event): void {
    window.alert(this.message)
    console.info(event);
  }
}

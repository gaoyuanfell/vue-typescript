import Component from "vue-class-component";
import Vue from 'vue'

@Component({
  template: `
<div>
  <div class="test">{{message}}</div>
  <div class="test">
    2qwe
  </div>
</div>
  `
})
export default class HelloWord extends Vue {
  message = 'hello word!!!!!!!!'
}

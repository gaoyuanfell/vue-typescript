import Vue from 'vue'
import Router from 'vue-router'
import HelloWord from "../components/hello-word";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:HelloWord
    }
  ]
})

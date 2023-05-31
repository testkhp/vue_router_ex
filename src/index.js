import { createWebHistory, createRouter } from "vue-router";

import MainContainer from "./components/MainContainer.vue";
import SubContainer from "./components/SubContainer.vue";
import DetailComp from "./components/DetailComp.vue";
import DetailComp2 from "./components/DetailComp2.vue";
//상세페이지 -> url 파라미터를 이용한 수많은 상세페이지 생성

const routes = [
  {
    path: "/",
    component:MainContainer,
  },
  {
    path:"/sub",
    component:SubContainer
  },
  {
    //  :작명 <--- 주소값에 데이터를 담아서 전달하는 매개변수(파라미터)
    path:"/detail/:id",
    component:DetailComp
  },
  {
    //  :작명 <--- 주소값에 데이터를 담아서 전달하는 매개변수(파라미터)
    path:"/doctors/:id",
    component:DetailComp2
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
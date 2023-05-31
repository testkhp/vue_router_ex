import { createApp } from 'vue'
import App from './App.vue'
import router from "./index.js"
//라우터 쓰고 싶어요.

createApp(App).use(router).mount('#app')
//#app 생성전 라우터 사용한다는 코드(탑재)

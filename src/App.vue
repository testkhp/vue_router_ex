<template>
    <!-- 라우터 경로에 따른 컴포넌트 교체보여주세요. -->
    <!-- header 영역을 만든다 -> header컴포넌트를 만들고 App.vue에 import -->
    <ul>
      <li><router-link to="/">메인으로</router-link></li>
      <li><router-link to="/sub">서브페이지로</router-link></li>
    </ul>
    
    <ul>
      <li v-for="(details,i) in webtoonData" :key="i"><router-link :to="`/detail/${i}`">{{details.title}}</router-link></li>
      <!-- <li><router-link to="/detail/0">상세페이지1</router-link></li>
      <li><router-link to="/detail/1">상세페이지2</router-link></li>
      <li><router-link to="/detail/2">상세페이지3</router-link></li>
      <li><router-link to="/detail/3">상세페이지4</router-link></li> -->
    </ul>

    <ul>
      <li v-for="(details,i) in doctorData" :key="i"><router-link :to="`/doctors/${i}`">{{details.title}}</router-link></li>
      <!-- <li><router-link to="/detail/0">상세페이지1</router-link></li>
      <li><router-link to="/detail/1">상세페이지2</router-link></li>
      <li><router-link to="/detail/2">상세페이지3</router-link></li>
      <li><router-link to="/detail/3">상세페이지4</router-link></li> -->
    </ul>
    
    
    <!-- 웹툰데이터 디테일 컴포넌트에 전달 (사용하려면 해당컴포넌트 파일에서 props 사용해야 가능)-->
    <router-view :webtoon="webtoonData" :doctors="doctorData"></router-view>

    <!-- footer 영역도 컴포넌트로 따로 만들어서 App.vue에다가 import 시킬수 있음-->
    <div>
       하단영역입니다.
    </div>

</template>

<script>


export default {
  name: 'App',
  components: {
   
  },
  data(){
    return{
      webtoonData:[
        {title:"삼국지톡",context:"삼국지톡 설명내용입니다.",imgs:require("./assets/1.jpg")},
        {title:"개를 낳았다",context:"개를 낳았다 설명내용입니다.",imgs:require("./assets/2.jpg")},
        {title:"연애혁명",context:"연애혁명 설명내용입니다.",imgs:require("./assets/3.jpg")},
        {title:"외모지상주의",context:"외모지상주의 설명내용입니다.",imgs:require("./assets/4.jpg")},
        {title:"김부장",context:"김부장 설명내용입니다",imgs:require("./assets/2.jpg")}
      ],
      doctorData:[
        {title:"닥터1",context:"삼국지톡 설명내용입니다.",imgs:require("./assets/1.jpg")},
        {title:"닥터2",context:"개를 낳았다 설명내용입니다.",imgs:require("./assets/2.jpg")},
        {title:"닥터3",context:"연애혁명 설명내용입니다.",imgs:require("./assets/3.jpg")},
        {title:"닥터4",context:"외모지상주의 설명내용입니다.",imgs:require("./assets/4.jpg")},
        {title:"닥터5",context:"김부장 설명내용입니다",imgs:require("./assets/2.jpg")}
      ]
    }
  }
}
</script>

<style>

</style>

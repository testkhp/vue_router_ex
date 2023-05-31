<template>
    <div class="detail">
        <img :src="webtoon[$route.params.id].imgs">
        <!-- url 주소에 전달한 데이터값을 컴포넌트내에서 출력하려면?
           vue에서 지정한 url parameter 출력할 때 사용하는 구문
           뒤에 id라고 작성한거는 index.js에서 작성한 :id <--- 이거랑 같음
           $route.params.id
        -->
        <h2>{{webtoon[$route.params.id].title}}</h2>
        <p>{{webtoon[$route.params.id].context}}</p>
    </div>
</template>

<script>
export default {
    name:"DetailComp",
    props:{
        webtoon:Array
    }
}
</script>

<style>
    .detail { width:800px; border:1px solid; margin:0 auto; }
</style>
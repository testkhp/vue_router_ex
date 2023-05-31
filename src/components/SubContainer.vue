<template>
     <div id="container">
         <div class="cont1">
             <div class="center">
                 <div class="left">서브페이지 왼쪽구역</div>
                 <div class="right">서브페이지 오른쪽구역</div>
             </div>
         </div>
     </div>
</template>

<script>
export default {

}
</script>

<style>
    .cont1 { display:flex; justify-content:center;}
    .cont1 .center { width:1000px; display:flex;}
    .cont1 .center .left {width:400px; height:300px; background-color:red;}
    .cont1 .center .right {width:600px; height:300px; background-color:blue;}

    /*반응형 */
    @media screen and (max-width:1000px){
        .cont1 .center { width:60%;}
        .cont1 .center .left {width:40%; }
        .cont1 .center .right {width:60%; }
    }
</style>
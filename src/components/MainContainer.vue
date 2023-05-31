<template>
    <div id="container">
        <div class="cont1">
            <div class="center">
                <h2>메인 중간영역 첫번째 구역</h2>
                <p>메인 중간영역 첫번째 텍스트</p>
            </div>
        </div>
        <div class="cont2">
            <div class="center">
                <div>메인 리스트1</div>
                <div>메인 리스트2</div>
                <div>메인 리스트3</div>
                <div>메인 리스트4</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"MainContainer",
    data(){
        return{
            
        }
    }
}
</script>

<style>
    .cont1 { display:flex; justify-content:center;}
    .cont1 .center { width:1200px; text-align:center; border:1px solid #000;}

    .cont2 { display:flex; justify-content:center;}
    .cont2 .center { width:1000px; display:flex; justify-content:space-between;}
    .cont2 .center > div { width:200px; height:200px; border:1px solid red;}
</style>
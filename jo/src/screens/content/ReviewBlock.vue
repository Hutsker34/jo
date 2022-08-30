<template>
    <div class='reviewBlock'>
        <h2 class='reviewBlock__name'>{{name}}</h2>
        <p class="reviewBlock__text">{{text}}</p>
    </div>
</template>
<script>
export default {
    name: 'PortfolioBlock',
    props: {
        text: String,
        name: String
    }
}
</script>
<style>
    .reviewBlock{
        background: white;
        margin: 0 20px 0 20px;
        padding: 20px 15px 20px 15px;
        width: 500px;
        display: inline-block;
        border-radius: 5px;
        box-shadow: 0 0 15px rgba(0,0,0,0.3);
    }
    .reviewBlock__name{
        border-bottom: 1px solid #DFDFDF;
        color: #234895;
        font-size: 20px;
        font-weight: bolder;
    }
   
    .reviewBlock__text{
        font-size: 14px;
        color:#79A7D3;
    }
</style>
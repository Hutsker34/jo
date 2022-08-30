<template>
    <div class='v-popup'>
        <slot><img src='../../assets/portfolio__img1.png' class='v-popup__img'/></slot>
    </div>
</template>
<script>
export default {
    name: 'PortfolioBlock',
    props: {
        PortfolioBlock: Object
    }
}
</script>
<style>
    .v-popup{
        width: 200px;
        height: 400px;
        background: black;
    }
</style>
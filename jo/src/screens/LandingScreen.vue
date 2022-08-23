<template>
    <header class='header header__hover'>
        <img src='../assets/logo.png' class='header__logo'/>
        <a class='header__link'>портфолио</a>
        <a class='header__link'> о нас</a>
        <a class='header__link'>отзывы</a>
        <a class='header__link'> заказ</a>
    </header>
    <article></article>
    <div class='steps'></div>
    <div class='form'></div>
    <footer></footer>
</template>
<script>


export default {
    name: 'LandingScreen',
    components:{

    },

data() {
    return {
        
    }
},

}
</script>
<style>
    .header{
        display: flex;
        justify-content: space-between;
        border: 2px solid grey;
        padding: 30px 300px 0 300px;
    }
    .header:hover{
        background: #E8E8E8;
    }
    .header__hover{
        transition: 0.5s;
    }
    .header__link{
        color: #234895;
        font-size: 20px;
        font-weight: 500;
        margin-top: 40px;
    }
    .header__logo{
        margin-right: 200px;
    }
</style>
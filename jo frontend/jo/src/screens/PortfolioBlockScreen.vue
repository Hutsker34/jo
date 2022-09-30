<template class='template'>
    <header class='header header__hover'>
       <router-link class='header__logo' to="/"><img src='../assets/logo.png' class='header__logo'/></router-link>
        <router-link class='header__link' to="/aboutUs">о нас</router-link>
        <router-link class='header__link' to="/reviews">Отзывы</router-link>
        <router-link class='header__link'  to="/#yak1">заказ</router-link>
    </header>
    <article class='article'>
        <div class='article__wrap'>
            <h1 class='article__h1'>{{name}}</h1>
            
        </div>
        <div  class='portfolio__pic'>
            <img :src='pic' class='block__img'/>
        </div>
    </article>
        
    <footer class='footer'></footer>
</template>
<script>

 


export default {
    name: 'PortfolioScreen',
    components: {
        
    },
    data(){
        return { 
           pic: localStorage.getItem('portfoliopic'),
           name: localStorage.getItem('portfolioname'),
        }
    },
    methods: {
        
    },
    mounted() {
        
    },
}
</script>
<style scoped>
    .article{
        background: #F6F6F6;
        display: flex;
        flex-direction: column;
    }
    .article__h1{
        margin-bottom: 0;
        margin-left: 100px;
        
    }
    .article__wrap{
        margin-top: 50px;
    }
    .portfolio__pic{
        margin: 100px 0 0 0;
        padding: 30px 200px 0 200px;
        display: flex;
        justify-content: center;

    }
    .footer{
        margin: 0;
    }
    .block__img{
        margin: 0 0 30px 0 ;
    }
</style>
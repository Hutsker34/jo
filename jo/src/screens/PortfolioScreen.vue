<template >
    <header class='header header__hover'>
       <router-link class='header__logo' to="/"><img src='../assets/logo.png' class='header__logo'/></router-link>
        <router-link class='header__link' to="/aboutUs">о нас</router-link>
        <router-link class='header__link' to="/reviews">Отзывы</router-link>
        <router-link class='header__link'  to="/#yak1">заказ</router-link>
    </header>
    <article class='article'>
    <div class='article__wrap'>
        <h1 class='article__h1'> - портфолио команды  Jó</h1>
        <p class='article__text'>
           лендинги , интернет-магазины и прочие услуги
        </p>
    </div>
    <img src='../assets/portfolio__img.png' class='article__img' />
    </article>
    <div class='portfolio__blocks'>
        <PortfolioBlock/>
        <PortfolioBlock/>
        <PortfolioBlock/>
    </div>
    <footer class='footer'></footer>
</template>
<script>
import PortfolioBlock from '../screens/content/PortfolioBlock'


export default {
    name: 'PortfolioScreen',
    components: {
        PortfolioBlock
    },
    data(){
        return {
            users: []
        }
    },
}
</script>
<style scoped>
    .article__h1{
        margin-bottom: 0;
    }
    .article__text{
        margin-top: 5px;
    }
    .article__img{
        width: 900px;
    }
    .article__wrap{
        margin-top: 50px;
    }
    .portfolio__blocks{
        margin: 180px 0 0 0;
        padding: 30px 200px 0 200px;
        display: flex;
        justify-content: space-between;
    }
</style>
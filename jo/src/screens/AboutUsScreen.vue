<template >
    <header class='header header__hover'>
        <router-link class='header__logo' to="/"><img src='../assets/logo.png' class='header__logo'/></router-link>
        <router-link class='header__link' to="/portfolio">портфолио</router-link>
        <router-link class='header__link' to="/reviews">Отзывы</router-link>
        <router-link class='header__link'   to='/#yak1'>заказ</router-link>
        
    </header>
    <div class='article article__1'>
        <img src='../assets/aboutUs__img1.png' class='article__img' />
        <div class='article__wrap'>
            <h1 class='article__h1'>Веб-студия Jó</h1>
            <p class='article__text'>
            Все сотрудники веб-студии — программисты, 
            дизайнеры, менеджеры — работают на 
            постоянной основе и находятся в одном офисе,
            что позволяет нам быстро реагировать на запросы 
            клиентов.
            </p>
        </div>
    </div>
    <div class='article'>
        <div class='article__wrap wrap__2'>
            <h1 class='article__h1'>Дизайн</h1>
            <p class='article__text'>
            Создаём современный дизайн сайтов и полиграфии, 
            разрабатываем узнаваемый фирменный стиль и рисуем
             уникальные иллюстрации.
            </p>
        </div>
        <img src='../assets/aboutUs__img2.png' class='article__img' />
    </div>
    <div class='article article__3'>
        <img src='../assets/aboutUs__img3.png' class='article__img' />
        <div class='article__wrap'>
            <h1 class='article__h1'>Разработка</h1>
            <p class='article__text'>
            Делаем сайты на реактивных фреймворках, 
            создаем мобильные приложения и ответственно 
            ведём техническую поддержку проектов.
            </p>
        </div>
    </div>
    <footer class='footer'></footer>
</template>
<script>


export default {
    name: 'AboutUsScreen',
    components: {
        
    },
    data(){
        return {
            users: []
        }
    },
    methods: {
        methods: {
   
 }
    },
}
</script>
<style scoped>
    .article{
        border-bottom: 1px solid #E4E4E4;
        padding-bottom: 20px;
    }
    .article__1{
        padding-top: 120px;
    }
    .article__h1{
        margin-bottom: 30px;
        text-align: center;
    }
    .article__text{
        margin-top: 5px;
        text-align: center;
    }
    .article__img{
        width: 900px;
        margin: 0 0 0 0;
    }
    .article__wrap{
        margin-top: 100px;
    }
    .portfolio__blocks{
        margin: 180px 0 0 0;
        padding: 30px 200px 0 200px;
        display: flex;
        justify-content: space-between;
    }
    .wrap__2{
        padding: 300px 0 0 0;
        margin-top: 0;
    }
    .article__3{
        border: none;
    }
</style>
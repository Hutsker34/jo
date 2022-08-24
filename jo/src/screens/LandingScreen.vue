<template>
    <header class='header header__hover'>
        <img src='../assets/logo.png' class='header__logo'/>
        <a class='header__link'>портфолио</a>
        <a class='header__link'> о нас</a>
        <a class='header__link'>отзывы</a>
        <a class='header__link'> заказ</a>
    </header>
    <article class='article'>
    <div class='article__wrap'>
        <h1 class='article__h1'>разработка лендингов, магазинов и любых других сайтов под заказ</h1>
        <p class='article__text'>
            Тщательно продумаем дизайн и структуру 
            вышего сайта. Все созданные нами сайты 
            адаптивны, удобны и понятны в управлении
            как для посетителей сайта,  так и для его владельца
        </p>
            
        <p class='article__text'>
            Мы оказываем ИТ-услуги, которые позволяют 
            гарантированно повысить ключевые показатели 
            эффективности и вывести бизнес на новый 
            уровень.
            </p>
        <button class='article__button'>оставить заявку</button>
    </div>
    <img src='../assets/articleImg.png' class='article__img' />
    </article>
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
        padding: 30px 200px 0 200px;
    }
    .header:hover{
        background: #E8E8E8;
    }
    .header__hover{
        transition: 0.5s;
    }
    .header__link{
        color: #234895;
        font-size: 24px;
        font-weight: 600;
        margin-top: 20px;
    }
    .header__logo{
        margin-right: 200px;
    }
    .article{
        display: flex;
        padding: 30px 200px 0 200px;
        
    }
    .article__h1{
        max-width: 700px;
        text-align: start;
        color: #234895;
        font-size: 38px;
        
    }
    .article__text{
        text-align: start;
        max-width: 670px;
        color: #79A7D3;
        font-size: 28px;
    }
    .article__wrap{
        padding: 70px 0 0 10px;
    }
    .article__button{
       background: #8A307F;
       border-radius: 30px;
       border:none;
       color: white;
       padding: 13px 40px 13px 40px;
       font-size:20px;
       font-weight: thin;
    }
    .article__img{
        width:600px;
    }
</style>
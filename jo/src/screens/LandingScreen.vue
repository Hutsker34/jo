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
    <div class='steps'>
        <h1 class='steps__h1'>этапы разработки - от оформления заказа до получения рабочего сайта </h1>
        <div class='steps__cards'>
            <div class='cards__card'>
                <p class='card__num'>|</p>
                <div class='card__wrap'>
                    <img src='../assets/steps__img1.png' class='card__img card__img--1'/>
                    <h2 class='card__h2'>оформление закака</h2>
                    <ul class='card__ul'>
                        <li class='card__li'>учтём все нюансы</li>
                        <li class='card__li'>договоримся о сроках</li>
                        <li class='card__li'>назначим исполнителя</li>
                    </ul>
                </div>
            </div>
            <div class='steps__arrow'>=></div>
            <div class='steps__card'>
                <p class='card__num'>||</p>
                <div class='card__wrap'>
                    <img src='../assets/steps__img2.png' class='card__img'/>
                    <h2 class='card__h2'>разработка </h2>
                    <ul class='card__ul'>
                        <li class='card__li'>правильная и красивая верстка</li>
                        <li class='card__li'>продуманный back-end</li>
                        <li class='card__li'>адаптация под все устройства</li>
                    </ul>
                </div>
            </div>
            <div class='steps__arrow'>=></div>
            <div class='steps__card'>
                <p class='card__num'>|||</p>
                <div class='card__wrap'>
                    <img src='../assets/steps__img3.png' class='card__img'/>
                    <h2 class='card__h2'>представление готового проекта</h2>
                    <ul class='card__ul'>
                        <li class='card__li'>отчет попроделанной нами работе</li>
                        <li class='card__li'>корректировка </li>
                        <li class='card__li'>оплата через безоопасную сделку</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class='order'>
        <h1 class='order__h1'>Оформление заказа</h1>
        <div class='order__wrap'>
            <img src='../assets/form__img.png' class='order__img'/>
            <form class='order__form'>
                <label class='form__label' >как вас зовут?</label>
                <input class='form__input' type='text'>
                 <label class='form__label'>укажите ваш номер телефона</label>
                <input class='form__input' type='text'>
                 <label class='form__label ' >расскажите о своём проекте</label>
                <textarea class='form__input form__label--big' ></textarea>
                <button class='form__button'>оформить</button>
            </form>
        </div>
    </div>
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
        margin: 0 0 0 150px;
    }
    .steps__cards{
        display: flex;
        justify-content: space-between;
        margin: 130px 0 0 0;
    }
    .steps{
        margin-top: 250px;
        text-align: center;
        padding: 30px 200px 0 200px;
    }
    .card__wrap{
        border: 1px solid #E7E1E1;
        border-radius: 5px;
        padding: 10px;
        text-align: start;
        min-height: 450px;
    }
    .card__h2{
        font-size: 20px;
        max-width: 250px;
        margin-left: 35px;
        color: #234895;
    }
    .card__ul{
        max-width: 240px;
        font-size: 18px;
        color: #79A7D3;
    }
    .card__img{
        text-align: center;
        weight: 400px;
    }
    .card__img--1{
        margin-top: 15px;
    }
    .card__li{
        margin: 0 0 10px 0;
    }
    .steps__h1{
        color: #234895;
        max-width: 700px;
        margin:  auto;
    }
    .card__num{
        font-size: 32px;
        color: #79A7D3;
    }
    .steps__arrow{
        margin-top: 23%;
        font-size: 32px;
        color: #8A307F;
    }
    .order__wrap{
        display: flex;
        justify-content: space-between;
    }
    .order{
        margin-top: 250px;
        text-align: center;
        padding: 30px 200px 0 200px;
    }
    .order__form{
        display: flex;
        flex-direction: column;
        text-align: start;
        margin: 150px 150px 0 0;
        align-items: flex-start
    }
    .form__input{
        background: #79A7D3;
        border: none;
        border-radius: 4px;
        width:400px;
        font-size:22px;
        padding: 5px 20px 5px 20px;
        
   }
    .form__label--big{
       min-width:600px;
       min-height: 150px;
       font-size: 12px;
        padding-top: 10px;
    }
    .order__h1{
        color: #234895;
    }
    .form__label{
        font-size: 22px;
    }
    .form__button{
        background: #8A307F;
        border-radius: 30px;
        border:none;
        color: white;
        padding: 10px 40px 10px 40px;
        font-size:20px;
        font-weight: thin;
        margin: 30px 0 0 470px;
        min-width: 150px;
        color: white;
    }

</style>
<template >
    <header class='header header__hover'>
       <router-link class='header__logo' to="/"><img src='../assets/logo.png' class='header__logo'/></router-link>
        <router-link class='header__link' to="/aboutUs">о нас</router-link>
        <router-link class='header__link' to="/portfolio">Портфолио</router-link>
        <router-link class='header__link'  to="/#yak1">Заказ</router-link>
    </header>
    <article class='article'>
        <h1 class='article__h1'>Отзывы наших клиентов</h1>
    <div class='article__wrap'>
        <div class='article__wrap--duble'>
        <ReviewBlock  :text = 'musText[0]' :name ='musName[0]'/>
        <ReviewBlock :text = 'musText[1]' :name ='musName[1]'/>
        </div>
        <div class='article__wrap--duble'>
        <ReviewBlock  :text = 'musText[2]' :name ='musName[2]'/>
        <ReviewBlock  :text = 'musText[3]' :name ='musName[3]'/>
        </div>
        <div class='article__wrap--duble'>
        <ReviewBlock  :text = 'musText[4]' :name ='musName[4]'/>
        <ReviewBlock :text = 'musText[5]' :name ='musName[5]'/>
        </div>
    </div>
    </article>
    
    <footer class='footer'></footer>
</template>
<script>

import ReviewBlock from '../screens/content/ReviewBlock'

export default {
    name: 'PortfolioScreen',
    components: {
       ReviewBlock
    },
    data(){
        return {
            musText: [
                'Все отлично, Олег молодец! В любое удобное время был на связи, предложил решения по цвету и фото, очень профессиональный исполнитель!',
                'Спасибо за проделанную работу над калькулятором! Все оперативно и быстро!',
                'Большое спасибо исполнителю Денису за оперативную работу.',
                'Часто пользуюсь дополнительными услугами, как всегда все очень понравилось, по результату есть отчёт и всё понятно!',
                'Спасибо исполнителю Александру за проделанную работу',
                'Большое спасибо Максиму за создание моего сайта! Я очень довольна его грамотной и быстрой работой. Он был внимателен ко всем моим пожеланиям и грамотно меня консультировал по всем интересующим меня вопросам! Спасибо ему!'
            ],
            musName: [
                'Артём',
                'Владислав',
                'Вячеслав',
                'Алексей',
                'Вероника',
                'Руслан',
            ]
        }
    },
}
</script>
<style scoped>
    .article{
        display: flex;
        align-items: center;
        background: #F6F6F6;
        padding-bottom: 50px;
        flex-direction: column;
    }
    .article__h1{
        margin-bottom: 0;
        text-align: center;
    }
    .article__text{
        margin-top: 5px;
    }
    .article__img{
        width: 900px;
    }
    .article__wrap{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
    }
    .article__wrap--duble{
        display: flex;
        margin: 20px 0 20px 0;
        display:inline-block;
    }
    .portfolio__blocks{
        margin: 180px 0 0 0;
        padding: 30px 200px 0 200px;
        display: flex;
        justify-content: space-between;
        display: block;
    }
    .footer{
        margin: 0;
    }
    
</style>
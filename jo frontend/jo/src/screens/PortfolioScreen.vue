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
    <div  class='portfolio__blocks'>
        <portfolioBlock class='block' :portfolioBlock='item' v-on:click='getPicture(item._id , item)' v-for="(item, index) in blocks" :key="index" />
        
    </div>
    <footer class='footer'></footer>
</template>
<script>
import portfolioBlock from '../screens/content/PortfolioBlock'
import router from '../router'
import axios from 'axios'

const url = 'http://localhost:3001/api'

export default {
    name: 'PortfolioScreen',
    components: {
        portfolioBlock
    },
    data(){
        return {  
            blocks: [],
            
        }
    },
    methods: {
        getChats(){
            axios.get(`${url}/bio`,{
            }).then(
                ({data})=>{   
                    this.blocks = data.data
                    console.log(data)
                }
            )
        },
        
        getPicture(_id , item){
            axios.get(`${url}/bio/:bio_id`,{
            }).then(
                localStorage.setItem('portfoliopic', item.picture),
                localStorage.setItem('portfolioname', item.name),
                router.push({ path: `/portfolioBlock/${_id}`, replace: true }),
                console.log('ttt',item)
            )
        },
        

        changeBgImg(){
            let block = document.querySelectorAll('.block');
            block.style.backgroundImage = `url(${})`;
        }


    },

    mounted() {
        this.getChats()
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
        flex-flow: wrap;

    }
    :root{
        --picture-background: red;
    }
    .block  {
        background: var(--picture-background)
    }
    
</style>
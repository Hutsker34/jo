<template>
    <div @click ='close' v-if='isOpen' class='v-popup' >
        <div  class='v-popup__bodu'>
             <img @click.stop src={{img}} class='v-popup__img'/>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        isOpen: {
            type: Boolean,
            required: true,
            
        },
        img: String
    },
    emits: {
        close: null,
    },
    data(){
        return{
           
        }
    },
    methods: {
        
        close(){
            this.$emit('close');
            console.log(this.isOpen)
            
        },
        
    },
    
}
</script>
<style>
    .v-popup{
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        top: 0;
        left: 0;
        padding: 20px 0 0 20px;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .v-popup__bodu{
        display: flex;
        justify-content: center;
   }
   .v-popup__img{
        
   }
</style>
<template>
    <div class="container" v-if="getCart.length"> Cart:
        <cart-item v-for="item in getCart" :key="item.id" :item="item"/>
        <div>Total price: {{totalCartPrice}} {{getSelectedCurrency}}</div>
    </div>
    <div class="empty-container" v-else>The cart is empty</div>    
</template>
<script>
import CartItem from './CartItem.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'ProductsCart',

    components: {
        CartItem,
    },

    computed: {
        ...mapGetters(['getCart', 'getTotalCartPrice', 'getSelectedCurrency']),
        totalCartPrice(){
            return this.getTotalCartPrice.toFixed(2)
        }
    },
}
</script>
<style lang="scss" scoped>
.container {
    padding-top: 10px;
    max-width: 500px;
    margin: 0 auto;
}
.empty-container {
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

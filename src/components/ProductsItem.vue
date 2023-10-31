<template>
    <div class="container">
        <div>{{ product.title }}</div>
        <div class="price-container">
            <div>{{ productPrice}} {{product.currency}}</div>
            <button type="button" @click = "addProductToCart(product)">Buy</button>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'PeoductsItem',

    props: {
        product: {
            type: Object,
            default: () => ({}),
        },
    },

    computed:{
        productPrice (){
           return this.product.price.toFixed(2)
        }
    },

    methods: {
        ...mapActions(['addToCart']),

        addProductToCart(product) {
            this.addToCart(product)
        },
    },
}
</script>
<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;

    & .price-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        button {
            cursor: pointer;
        }

        button:hover {
            background-color: transparent;
        }
    }
}
</style>

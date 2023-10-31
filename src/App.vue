<template>
    <currency-filter />
    <products-list />
    <products-cart />
</template>

<script>
import ProductsList from './components/ProductsList.vue'
import ProductsCart from './components/ProductsCart.vue'
import CurrencyFilter from './components/CurrencyFilter.vue'

export default {
    name: 'App',
    components: {
        ProductsList,
        ProductsCart,
        CurrencyFilter,
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

<template>
    <div class="container"> Products list:
        <products-item v-for="product in getProductsData" :product="product" :key="product.id" />
    </div>
</template>
<script>
import ProductsItem from './ProductsItem.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'ProductsList',

    components: {
        ProductsItem,
    },

    computed: {
        ...mapGetters(['getProductsData']),
    },
}
</script>
<style lang="scss" scoped>
    .container {
        padding-top: 30px;
        max-width: 500px;
        margin: 0 auto;        
    }
</style>

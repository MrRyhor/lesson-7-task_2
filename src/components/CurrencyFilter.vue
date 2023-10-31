<template>
    <select v-model="selectedVal">
        <option v-for="option in options" :value="option" :key="option">{{ option }}</option>
    </select>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'CurrencyFilter',

    data() {
        return {
            options: ['UAH', 'USD'],
        }
    },

    computed: {
        ...mapGetters(['getSelectedCurrency', 'getProductsData']),
        selectedVal: {
            get() {
                return this.getSelectedCurrency
            },
            set(val) {
                this.setSelectedCurrency(val)
            },
        },
    },
    methods: {
        ...mapActions(['setSelectedCurrency']),
    },
}
</script>
<style lang="scss" scoped></style>

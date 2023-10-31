import { createStore } from 'vuex'
import { products } from '../constants/products.js'
import { getTotalPrice } from '../utils/getTotalPrice.js'

export default createStore({
    state: {
        productsData: [],
        cart: [],
        totalPrice: 0,
        selectedCurrency: 'UAH',
    },
    getters: {
        getProductsData: (state) => {
            if (!state.selectedCurrency) state.productsData = products
            if (state.selectedCurrency === 'UAH') {
                state.productsData = []
                products.map((prod) => state.productsData.push({ ...prod, currency: state.selectedCurrency }))
            }
            if (state.selectedCurrency === 'USD') {
                state.productsData = []
                products.map((prod) => state.productsData.push({ ...prod, price: prod.price / 37, currency: 'USD' }))
            }

            return state.productsData
        },
        getCart: ({ cart }) => cart,
        getTotalCartPrice: ({ totalPrice }) => totalPrice,
        getSelectedCurrency: ({ selectedCurrency }) => selectedCurrency,
    },
    mutations: {
        addToCart(state, product) {
            const findObj = state.cart.find((obj) => obj.id === product.id)
            if (findObj) findObj.count++
            else state.cart.push({ ...product, count: 1 })
            state.totalPrice = getTotalPrice(state.cart)
        },
        removeFromCart(state, id) {
            state.cart = state.cart.filter((item) => item.id !== id)
            state.totalPrice = getTotalPrice(state.cart)
        },
        setSelectedCurrency(state, currency) {
            state.selectedCurrency = currency
        },
    },
    actions: {
        addToCart({ commit }, product) {
            commit('addToCart', product)
        },
        removeFromCart({ commit }, id) {
            commit('removeFromCart', id)
        },
        setSelectedCurrency({ commit }, currency) {
            commit('setSelectedCurrency', currency)
        },
    },
    modules: {},
})

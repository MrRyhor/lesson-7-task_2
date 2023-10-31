<template>
    <div class="container">
        <div>{{ item.title }}</div>
        <div>{{ item.count }} pcs.</div>
        <div class="price-container">
            <div>{{ itemPrice * item.count }} {{ item.currency }}</div>
            <button type="button" @click="removeItemFromCart(item.id)">Delete</button>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'CartItem',

    props: {
        item: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        itemPrice() {
            return this.item.price.toFixed(2)
        },
    },

    methods: {
        ...mapActions(['removeFromCart']),
        removeItemFromCart(id) {
            this.removeFromCart(id)
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

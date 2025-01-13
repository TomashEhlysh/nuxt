<template>
    <form @submit.prevent="addGoods()">
        <input type="text" name="name" v-model="this.name" placeholder="Name">
        <input type="number" name="price" v-model="this.price" placeholder="price">
        <button type="submit">Add goods</button>
    </form>
</template>

<script>
export default {
    data(){
        return{
            name: '',
            price: ''
        }
    },
    methods:{
        async addGoods(){
            try {
                const body = {
                    name: this.name,
                    price: this.price
                }
                const response = await this.$axios.post('/addGood', body) // Запит через Axios
                console.log(response)
            } catch (error) {
                console.error('Error fetching goods:', error)
            }
        }
    }
}
</script>

<style>

</style>
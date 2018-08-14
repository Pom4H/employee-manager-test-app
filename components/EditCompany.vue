<template>
    <form @submit="onSubmit" v-if="company">
        <fieldset>
            <legend>Компания:</legend>
            Название:<br>
            <input v-model="company.name" type="text" required><br>
            <button type="submit">Сохранить</button>
        </fieldset>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            company: null
        }
    },
    methods: {
        async getCompanyInfo() {
            let { data } = await axios.get(`/api/companies/${this.$route.params.id}`)
            this.company = data
        },
        async onSubmit() {    
            await axios.put(`/api/companies/edit/${this.$route.params.id}`, this.company)
        }
    },
    mounted() {
        this.getCompanyInfo()
    }
}
</script>

<style>

</style>

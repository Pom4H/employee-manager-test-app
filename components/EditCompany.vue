<template>
    <form @submit="onSubmit" v-if="company">
        <fieldset>
            <legend>Компания:</legend>
            Название:<br>
            <input v-model="company.name" type="text" required><br>
            <button type="submit">Сохранить</button>
            <p v-if="message">{{ message }}</p>
        </fieldset>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            company: null,
            message: null
        }
    },
    methods: {
        async getCompanyInfo() {
            let { data } = await axios.get(`/api/companies/${this.$route.params.id}`)
            this.company = data
        },
        async onSubmit(e) {
            e.preventDefault()
            let res = await axios.put(`/api/companies/edit/${this.$route.params.id}`, this.company)
            if (res.status === 200) {
                this.message = `Компания ${res.data.name} - успешно переименована в ${this.company.name}`
            } else {
                this.message = 'Ошибка!'
            }
            //this.$router.push('/companies')
        }
    },
    mounted() {
        this.getCompanyInfo()
    }
}
</script>

<style>

</style>

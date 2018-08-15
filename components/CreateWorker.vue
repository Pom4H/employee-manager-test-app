<template>
    <form @submit="onSubmit">
        <fieldset>
            <legend>Новый сотрудник:</legend>
            Имя:<br>
            <input v-model="form.name" type="text" required><br>
            Дата рождения:<br>
            <input v-model="form.birth_date" type="date" required><br>
            Место работы:<br>
            <!-- <input v-model="company" type="text"><br> -->

            <select v-model="form.company">
                <option :value="company" v-for="company of companies" :key="company._id">
                    {{ company.name }}
                </option>
            </select><br><br>
            <button type="submit">Создать</button>
        </fieldset>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            form: {
                name: null,
                birth_date: null,
                company: null
            },
            companies: null
        }
    },
    methods: {
        async onSubmit(e) {
            e.preventDefault()
            let res = await axios.post('/api/workers', this.form)
            if (res.status === 200) {
                this.$router.push({ name: 'workers', params: { message: `Сотрудник - ${res.data.name} успешно добавлен!` }})
            }
        },
        async getCompanies() {
            let { data } = await axios.get('/api/companies/all')
            this.companies = data
        }
    },
    mounted() {
        this.getCompanies()
    }
}
</script>

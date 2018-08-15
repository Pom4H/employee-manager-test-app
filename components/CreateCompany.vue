<template>
    <form @submit="onSubmit">
        <fieldset>
            <legend>Новая компания:</legend>
            Название:<br>
            <input v-model="form.name" type="text" required><br>
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
                name: null
            }
        }
    },
    methods: {
        async onSubmit(e) {
            e.preventDefault()
            let res = await axios.post('/api/companies', this.form)
            if (res.status === 200) {
                this.$router.push({ name: 'companies', params: { message: `Компания - ${res.data.name} успешно добавлена!` }})
            }
        }
    }
}
</script>
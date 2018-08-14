<template>
    <div>
        <div class="worker" v-if="worker">
            <p>Имя: {{ worker.name }}</p>
            <p>Дата рождения: {{ formatDate(worker.birth_date) }}</p>
            <p v-if="worker.company">Место работы: <nuxt-link :to="/companies/ + worker.company._id"> {{ worker.company.name }} </nuxt-link> </p>
            <p v-if="worker.ex_company">Предыдущее место работы: {{ worker.ex_company.name }}</p>
        </div>
        <div class="message" v-else>
            <h1>Загрузка...</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            worker: null
        }
    },
    methods: {
        async getWorkerInfo() {
            let { data } = await axios.get(`/api/workers/${this.$route.params.id}`)
            this.worker = data
        },
        formatDate(date) {
            return new Date(date).toLocaleDateString()
        }
    },
    mounted() {
        this.getWorkerInfo()
    }
}
</script>


<template>
    <div>
        <div class="company" v-if="company">
            <p>Название компании: {{ company.name }}</p>
            <div class="company__workers" v-if="workers">
                <p>Сотрудники компании:</p>
                <ul>
                    <li v-for="worker of workers" :key="worker.id">
                        <nuxt-link :to="/workers/ + worker._id"> {{ worker.name }} </nuxt-link> - {{ formatDate(worker.birth_date) }} д.р
                    </li>
                </ul>
            </div>
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
            company: null,
            workers: null
        }
    },
    methods: {
        async getCompanyInfo() {
            let { data } = await axios.get(`/api/companies/${this.$route.params.id}`)
            this.company = data
        },
        async getWorkersList() {
            let { data } = await axios.get(`/api/workers/company/${this.$route.params.id}`)
            this.workers = data
        },
        formatDate(date) {
            return new Date(date).toLocaleDateString()
        }
    },
    mounted() {
        this.getCompanyInfo()
        this.getWorkersList()
    }
}
</script>


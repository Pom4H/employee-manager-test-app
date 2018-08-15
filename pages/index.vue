<template>
    <div class="container">
        <div class="row">
            <div class="plus">
                <nuxt-link to="/workers/add">+</nuxt-link>
            </div>
            <div class="total">
                <nuxt-link to="/workers">
                    <h1>Всего сотрудников:</h1>
                </nuxt-link>
            </div>
        </div>
        <div class="row">
            <div class="plus">
                <nuxt-link to="/companies/add">+</nuxt-link>
            </div>
            <div class="total">
                <nuxt-link to="/companies">
                    <h1>Всего компаний:</h1>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    head: {
        title: 'Учет сотрудников'
    },
    data() {
        return {
            workersCount: 0,
            companiesCount: 0
        }
    },
    methods: {
        async getWorkersCount() {
            let { data } = await axios.get('/api/workers/count')
            this.workersCount = data
        },
        async getCompaniesCount() {
            let { data } = await axios.get('/api/companies/count')
            this.companiesCount = data
        }
    },
    created() {
        this.getWorkersCount()
        this.getCompaniesCount()
    }
}
</script>


<style scoped>

.row {
    margin: 0 auto;
    background-color: whitesmoke;
    width: 600px;
    margin-bottom: 50px;
}
.plus {
    height: 100px;
    width: 100px;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    line-height: 0.8;
    display: inline-block;
    color: #fff;
    background-color: #bebebe;
    cursor: pointer;
}
.plus a {
    color:#fff;
}
.total {
    display: inline-block;
    margin-left: 50px;
}

/* @media screen and (max-width: 800px) {
    .row {
        margin-top: 50px;
        margin-bottom: 0px;
    }
} */
</style>

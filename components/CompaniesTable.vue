<template>
    <div class="container">
        <div class="table__menu">
            <input v-model="search" type="text" placeholder="Поиск" size="40">
        </div>
        <table v-if="companies">
            <!-- <caption>{{ companies }}</caption> -->
            <thead>
                <tr>
                    <th scope="col" colspan="3">Название</th>
                    <th scope="col">Действия</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="company of companies" :key="company._id">
                    <th colspan="3"><nuxt-link :to="company._id ? '/companies/' + company._id : '#'">{{ company.name ? company.name : '-'}}</nuxt-link></th>
                    <td>
                        <nuxt-link :to="'/companies/edit/' + company._id"><button>Редактировать</button></nuxt-link>
                        <button>Удалить</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td @click="page-- && getCompanies()">Назад</td>
                    <td>Страница {{ page }}</td>
                    <td>Компаний на стр.:
                        <select name="limit" v-model="limit" @change="getCompanies()">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </select>
                    </td>
                    <td @click="page++ && getCompanies()">Вперед</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            companies: null,
            limit: 10,
            page: 1,
            search: null
        }
    },
    methods: {
        async getCompanies() {
            let { data } = await axios.get(`/api/companies?limit=${this.limit}&page=${this.page}`)
            this.companies = data
        },
        formatDate(date) {
            return new Date(date).toLocaleDateString()
        }
    },
    mounted() {
        this.getCompanies()
    }
}
</script>


<style scoped>
.container {
    display: flex;
    flex-direction: column;
}

.table__menu input {
    float: right;
    margin: 20px;
}

table {
    background-color: #fff;
    border-collapse: collapse;
}

thead, tfoot {
    background-color: #a2abff;
    color: #fff;
}

tbody tr:nth-child(odd) {
    background-color: #fff;
}

tbody tr:nth-child(even) {
    background-color: #eee;
}

tbody tr:hover {
    background-color: #fff8bd;
}

tbody td {
    text-align: center;
}
</style>

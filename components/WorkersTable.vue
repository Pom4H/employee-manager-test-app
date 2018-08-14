<template>
    <div class="container">
        <div class="table__menu">
            
            <input v-model="search" type="text" placeholder="Поиск" size="40">
        </div>
        <table v-if="workers">
            <!-- <caption>{{ workers }}</caption> -->
            <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Дата рождения</th>
                    <th scope="col">Компания</th>
                    <th scope="col">Действия</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="worker of workers" :key="worker._id">
                    <td><nuxt-link :to="worker._id ? '/workers/' + worker._id : '#'">{{ worker.name ? worker.name : '-'}}</nuxt-link></td>
                    <td>{{ worker.birth_date ? formatDate(worker.birth_date) : '-'}}</td>
                    <td><nuxt-link :to="worker.company ? '/companies/' + worker.company._id : '#'">{{ worker.company ? worker.company.name : '-'}}</nuxt-link></td>
                    <td>
                        <button>Редактировать</button>
                        <button>Удалить</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td @click="page-- && getWorkers()">Назад</td>
                    <td>Страница {{ page }}</td>
                    <td>Сотрудников на стр.:
                        <select name="limit" v-model="limit" @change="getWorkers()">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </select>
                    </td>
                    <td @click="page++ && getWorkers()">Вперед</td>
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
            workers: null,
            limit: 10,
            page: 1,
            search: null
        }
    },
    methods: {
        async getWorkers() {
            let { data } = await axios.get(`/api/workers?limit=${this.limit}&page=${this.page}`)
            this.workers = data
        },
        formatDate(date) {
            return new Date(date).toLocaleDateString()
        }
    },
    mounted() {
        this.getWorkers()
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

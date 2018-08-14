<template>
    <div class="container">
        <p>Таблица компаний</p>
        <nuxt-link :to="'/companies/add'">
            <button>Добавить компанию</button>
        </nuxt-link>
        <companies-table/>
    </div>
</template>

<script>
import CompaniesTable from '@/components/CompaniesTable'

export default {
    head: {
        title: 'Компании'
    },
    components: {
        CompaniesTable
    }
}
</script>

<style scoped>
button {
    padding: 5px;
}
</style>
<template>
    <div class="container">
        <p>Таблица сотрудников</p>
        <nuxt-link :to="'/workers/add'">
            <button>Добавить сотрудника</button>
        </nuxt-link>
        <WorkersTable/>
    </div>
</template>

<script>
import WorkersTable from '@/components/WorkersTable'

export default {
    head: {
        title: 'Сотрудники'
    },
    components: {
        WorkersTable
    }
}
</script>

<style scoped>
button {
    padding: 5px;
}
</style>

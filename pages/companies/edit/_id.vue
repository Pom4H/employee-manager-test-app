<template>
    <div>
        <nuxt-link :to="'/companies'">Назад</nuxt-link>
        <edit-company/>
    </div>
</template>

<script>
import EditCompany from '@/components/EditCompany'

export default {
    components: {
        EditCompany
    }
}
</script>


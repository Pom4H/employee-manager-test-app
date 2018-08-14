<template>
    <div class="container">
        <div class="row">
            <div class="plus">+</div>
            <div class="total">
                <nuxt-link to="/workers">
                    <p>Всего сотрудников:</p>
                </nuxt-link>
            </div>
        </div>
        <div class="row">
            <div class="plus">+</div>
            <div class="total">
                <nuxt-link to="/companies">
                    <p>Всего компаний:</p>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head: {
        title: 'Учет сотрудников'
    },
}
</script>


<style scoped>

.container {
    padding: 100px;
}
.row {
    margin: 0 auto;
    background-color: whitesmoke;
    width: 600px;
    height: 115px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}
.plus {
    font-size: 100px;
    width: 115px;
    text-align: center;
    line-height: 1;
}
.total {
    text-align: center;
    align-self: center;
}
/* @media screen and (max-width: 800px) {
    .container {
        padding: unset;
    }
    .row {
        margin-top: 50px;
        margin-bottom: 0px;
    }
} */
</style>

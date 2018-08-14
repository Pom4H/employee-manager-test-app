const { Router } = require('express')
const { 
    addWorker, 
    getWorkersPage, 
    getWorkerByID, 
    getWorkersByCompany 
} = require('../models/workers')

const route = Router()

route.get('/', (req, res, next) => {
    const { query: { limit, page } } = req
    getWorkersPage(limit, page)
    .then(data => {
        res.send(data)
    })
    .catch(next)
})

route.get('/:id', (req, res, next) => {
    getWorkerByID(req.params.id)
    .then(data => {
        res.send(data)
    })
    .catch(next)
})

route.get('/company/:id', (req, res, next) => {
    getWorkersByCompany(req.params.id)
    .then(data => {
        res.send(data)
    })
    .catch(next)
})

route.post('/', (req, res, next) => {
    const { body } = req
    addWorker(body)
    .then(data => {
        res.send(data)
    })
    .catch(next)
})

module.exports = route
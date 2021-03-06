const { Router } = require('express')
const {
    addCompany,
    editCompany,
    getAllCompanies,
    getCompaniesPage,
    getCompanyByID,
    getCompaniesCount,
    deleteCompanyByID
} = require('../models/companies')
const route = Router()

route.get('/count', (req, res, next) => {
    getCompaniesCount()
        .then((count) => {
            res.send(count.toString())
        })
        .catch(next)
})

route.get('/all', (req, res, next) => {
    getAllCompanies()
        .then((data) => {
            res.send(data)
        })
        .catch(next)
})

route.get('/', (req, res, next) => {
    const { query: { limit, page } } = req
    getCompaniesPage(limit, page)
        .then(data => {
            res.send(data)
        })
        .catch(next)
})

route.get('/:id', (req, res, next) => {
    getCompanyByID(req.params.id)
        .then(data => {
            res.send(data)
        })
        .catch(next)
})

route.post('/', (req, res, next) => {
    const { body } = req
    addCompany(body)
        .then(data => {
            res.send(data)
        })
        .catch(next)
})

route.put('/edit/:id', (req, res, next) => {
    const { body } = req
    editCompany(req.params.id, body)
        .then(data => {
            res.send(data)
        })
        .catch(next)
})

route.delete('/delete/:id', (req, res, next) => {
    deleteCompanyByID(req.params.id)
        .then(data => {
            res.send(data)
        })
        .catch(next)
})
module.exports = route
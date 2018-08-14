const { Companies } = require('../lib/mongo')

module.exports = {
    addCompany: (company) => Companies.create(company),
    editCompany: (id, company) => Companies.findByIdAndUpdate(id, company),
    getAllCompanies: () => Companies.find().exec(),
    getCompanyByID: (id) => Companies.findById(id).exec(),
    getCompaniesPage: (limit, page) => Companies
        .find()
        .skip(limit * (page - 1))
        .limit(parseInt(limit))
        .exec()
}
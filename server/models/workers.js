const { Workers } = require('../lib/mongo')

module.exports = {
  addWorker: (worker) => Workers.create(worker),

  getWorkersPage: (limit, page) => Workers
    .find()
    .skip(limit * (page - 1))
    .limit(parseInt(limit))
    .exec(),

  getWorkerByID: (id) => Workers.findById(id).exec(),
  getWorkersByCompany: (company_id) => Workers.find({ 'company._id': company_id }).exec(),
  getWorkersCount: () => Workers.estimatedDocumentCount(),
  deleteWorkerByID: (id) => Workers.remove({ _id: id })
}
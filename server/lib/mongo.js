const { mongodb: { url } } = require('../config')

const mongoose = require('mongoose')
mongoose.connect(url, {
    useNewUrlParser: true
})
mongoose.Promise = global.Promise

exports.Workers = mongoose.model('Workers', {
    name: { 
        type: String,
        required: true
    },
    birth_date: { 
        type: Date,
        required: true
    },
    company: { type: Object },
    ex_company: { type: Object }
})

exports.Companies = mongoose.model('Companies', {
    name: { 
        type: String,
        required: true,
        unique: true
    }
})
const express = require('express')
const { 
    showCompanies,
    showCompanyBranch 
} = require('./controllers')
const routs = express()

routs.get('/', showCompanies)
routs.get('/:companyId', showCompanyBranch)



module.exports = routs
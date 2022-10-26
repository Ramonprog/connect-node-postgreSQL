const pool = require('../conect')


const showCompanies = async (req, res) =>{
    try{
        const resultado = await pool.query('SELECT * FROM empresas')
        return res.json(resultado.rows)
    }catch (error){
        console.log(error.message)
    }
}

const showCompanyBranch = async (req, res) =>{
    const {companyId} = req.params
    const query = 'SELECT * FROM filiais WHERE empresa_id = $1'
    const params = [companyId]
    try{
        const resultado = await pool.query(query, params)
        return res.json(resultado.rows)
    }catch (error){
        console.log(error.message)
    }
}

module.exports = {
    showCompanies,
    showCompanyBranch
}
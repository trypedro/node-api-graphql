const path = require('path')
const mergeGraphQLSChemas = require('merge-graphql-schemas')

const arquivos = path.join(__dirname, './')

const { fileLoader, mergeTypes } = mergeGraphQLSChemas

const arquivosCarregados = fileLoader(arquivos)

const schemas = mergeTypes(arquivosCarregados)

module.exports = schemas
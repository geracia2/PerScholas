// make a schema, target a model
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const dataSchema = new Schema ({
	name:{type:String, required:true},
	second:{type:String},
	on:{type:Boolean},
})
// mongoose.model('Target this folder collection on MongoDB', match this schema)
// folder needs to be plural
const Data = mongoose.model('dataSets', dataSchema)
module.exports = Data
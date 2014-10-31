'use strict'

// load mongoose since we need it to define a model
var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
	text : String,
	done : Boolean,
	doBy : { type : Date, default: Date.now }
})

module.exports = mongoose.model('Todo', todoSchema);

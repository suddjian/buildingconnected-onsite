'use strict'

const find = require('../query/find')

module.exports = (req, res, next) => {
	find({ parentId: { $exists: false } })
		.then(projects => res.json(projects))
		.catch(next)
}
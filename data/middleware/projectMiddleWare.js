// const express = require("express");

const actionData  = require("../helpers/actionModel")
const projectData = require("../helpers/projectModel")

function validateUserId() {
	return (req, res, next) => {
		projectData.get(req.params.id)
			.then((user) => {
				if (user) {
					req.user = user
					next()
				} else {
					res.status(404).json({
						message: "invalid user id",
					})
				}
			})
			.catch((error) => {
				next(error)
			})
	}
}

function validateUser() {
	return (req, res, next) => {
		if (!req.body || !req.body.project_id) {
			return res.status(400).json({
				message: "Missing user userdata",
			})
		}
			next()
		}
	}

module.exports = {
	validateUserId,
	validateUser,
	
}

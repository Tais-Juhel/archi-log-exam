"use strict";

const DbMixin = require("../mixins/db.mixin");
/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "questions",


	/**
	 * Mixins
	 */
	mixins: [DbMixin("questions")],

	/**
	 * Settings
	 */
	settings: {
		fields: [
			"_id",
			"question",
			"answers",
			"validAnswer",
			"difficulty",
			"categoryId",
		],
		entityValidator: {
			question: "string",
			difficulty: "string",
			categoryId: "string",
			validAnswer: "string",
		}

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};

"use strict";

const DbMixin = require("../mixins/db.mixin");
/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "users",


	/**
	 * Mixins
	 */
	mixins: [DbMixin("users")],

	/**
	 * Settings
	 */
	settings: {
		fields: [
			"_id",
			"username",
			"email",
			"password"

		],
		entityValidator: {
			username: "string|min:3",
			email: "string",
			password: "string|min:3"
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

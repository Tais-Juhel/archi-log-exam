"use strict";

const DbMixin = require("../mixins/db.mixin");
const {MoleculerClientError} = require("moleculer").Errors;
const bcrypt = require('bcryptjs');
const saltRounds = 10;

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
	actions: {

		/**
		 * Login with username & password
		 *
		 * @actions
		 * @param {Object} user - User credentials
		 *
		 * @returns {Object} Logged in user with token
		 */
		login: {
			rest: "POST /login",
			params: {
				username: {type: "string"},
				password: {type: "string"}
			},
			async handler(ctx) {
				const username = ctx.params.username;
				const password = ctx.params.password;

				const user = await this.adapter.findOne({username});
				if (!user) {
					throw new MoleculerClientError("Le nom d'utilisateur ou le mot de passe sont invalides !", 422, "", [{
						field: "username",
						message: "n'à pas été trouvé"
					}]);
				} else {
					if (password !== user.password) {
						throw new MoleculerClientError("Mauvais mot de passe!", 422, "", [{
							field: "username",
							message: "n'à pas été trouvé"
						}]);
					} else {
						let token = user._id;
						let hashedToken = bcrypt.hashSync(token, saltRounds);
						return {"username": user.username, "hashedToken": hashedToken};
					}
				}
			}
		},

	},

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

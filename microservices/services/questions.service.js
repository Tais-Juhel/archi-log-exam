"use strict";

const DbMixin = require("../mixins/db.mixin");
const bcrypt = require("bcryptjs");
const {MoleculerClientError} = require("moleculer").Errors;
/**
 * @typedef {import("moleculer").Context} Context Moleculer's Context
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
	actions: {

		findByCategoryAndDifficulty: {
			rest: "POST /cat-dif",
			params: {
				categoryId: {type: "string"},
				difficulty: {type: "string"},
				number: {type: "string"}
			},
			async handler(ctx) {
				const categoryIdParam = ctx.params.categoryId;
				const difficultyParam = ctx.params.difficulty;
				const numberParam = ctx.params.number;

				if (categoryIdParam === "" || difficultyParam === "" || numberParam === "") {
					throw new MoleculerClientError("Un ou plusieurs champs sont vides", 422);
				} else {
					return await this.adapter.find({
						query: {difficulty: difficultyParam, categoryId: categoryIdParam},
						limit: parseInt(numberParam)
					});
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

"use strict";

const DbMixin = require("../mixins/db.mixin");
const bcrypt = require("bcryptjs");

const {MoleculerClientError} = require("moleculer").Errors;

/**
 * @typedef {import("moleculer").Context} Context Moleculer's Context
 */

module.exports = {
	name: "game",
	// version: 1

	/**
	 * Mixins
	 */
	mixins: [DbMixin("game")],

	/**
	 * Settings
	 */
	settings: {
		// Available fields in the responses
		fields: [
			"_id",
			"date",
			"score",
			"categoryId",
			"userId",
			"difficulty"
		],


	},

	/**
	 * Action Hooks
	 */
	hooks: {},

	/**
	 * Actions
	 */
	actions: {

		insertNewGame: {
			rest: "POST /new",
			params: {
				date: {type: "string"}, score: {type: "string"}, categoryId: {type: "string"}, userToken: {type: "string"}, difficulty: {type: "string"}
			},
			async handler(ctx) {
				const dateParam = ctx.params.date;
				const scoreParam = ctx.params.score;
				const categoryIdParam = ctx.params.categoryId;
				const userTokenParam = ctx.params.userToken;
				const difficultyParam = ctx.params.difficulty;

				if (dateParam === "" || scoreParam === "" || categoryIdParam === "" || userTokenParam === "" || difficultyParam === "") {
					throw new MoleculerClientError("Un ou plusieurs champs sont vides", 422);
				} else {
					let foundUserByToken = await ctx.call("users.find", {query: {token: userTokenParam}, limit: 1});
					if (foundUserByToken.length === 0) {
						throw new MoleculerClientError("Impossible de récupérer l'utilisateur pour qui créer la partie", 401);
					} else {
						return await ctx.call("game.create", {"date": dateParam, "score": scoreParam, "categoryId": categoryIdParam, "userId": foundUserByToken[0]._id, "difficulty": difficultyParam});
					}
				}
			}
		},

		findUserGames: {
			rest: "POST /user",
			params: {userToken: {type: "string"}},
			async handler(ctx) {
				const userTokenParam = ctx.params.userToken;

				if (userTokenParam === "") {
					throw new MoleculerClientError("Le champ lié au token utilisateur est vide", 422);
				} else {
					let foundUserByToken = await ctx.call("users.find", {query: {token: userTokenParam}, limit: 1});
					if (foundUserByToken.length === 0) {
						throw new MoleculerClientError("Impossible de récupérer l'utilisateur lié au token donné", 401);
					} else {
						return await ctx.call("game.find", {query: {userId: foundUserByToken[0]._id}});
					}
				}
			}
		},

		getLeaderboard: {
			rest: "GET /leaderboard",
			async handler(ctx) {
				let foundGames = await ctx.call("game.find", {limit: 20});
				foundGames.forEach(function (foundGame) {
					foundGame.score = parseInt(foundGame.score);
				});
				foundGames = foundGames.sort((a, b) => b.score - a.score);
				console.log(foundGames);
				return await foundGames;
			}
		},

	},

	/**
	 * Methods
	 */
	methods: {},

	/**
	 * Fired after database connection establishing.
	 */

};

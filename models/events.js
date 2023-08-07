const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const CATEGORIES = [
	"Art",
	"Business",
	"Music",
	"Conference",
	"Workshop",
	"Party",
	"Sport",
];

const eventsSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			minlength: 2,
		},

		description: {
			type: String,
			minlength: 2,

			required: true,
		},
		selectDate: {
			type: String,
			required: true,
		},
		selectTime: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},

		category: {
			type: String,
			required: true,
			enum: CATEGORIES,
		},
		picture: {
			type: String,
			default: "https://i.ibb.co/J5XxVtJ/default.jpg",
		},
		priority: { type: String, enum: ["High", "Medium", "Low"], required: true },
	},
	{ versionKey: false, timestamps: true }
);
eventsSchema.post("save", handleMongooseError);

const Events = model("Events", eventsSchema);

const eventSchema = Joi.object({
	title: Joi.string().required(),
	description: Joi.string().required(),
	selectDate: Joi.string().required(),
	selectTime: Joi.string().required(),
	location: Joi.string().required(),
	category: Joi.string()
		.valid(
			"Art",
			"Business",
			"Music",
			"Conference",
			"Workshop",
			"Party",
			"Sport"
		)
		.required(),
	picture: Joi.string().allow(""),
	priority: Joi.string().valid("High", "Medium", "Low").required(),
});

module.exports = {
	eventSchema,
	Events,
};

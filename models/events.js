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
			maxlength: 50,
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

			default:
				"https://pixabay.com/ru/photos/%D0%B3%D0%BE%D1%80%D1%8B-%D1%82%D1%83%D0%BC%D0%B0%D0%BD-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6-%D0%B7%D0%B8%D0%BC%D0%B0-7779007/",
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

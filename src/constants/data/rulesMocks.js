export const categories = [
	{
		value: 1,
		label: 'Nutrition',
	},
	{
		value: 2,
		label: 'Ventilator',
	},
	{
		value: 3,
		label: 'Medication',
	},
	{
		value: 4,
		label: 'Procedure',
	},
	{
		value: 5,
		label: 'Assessments',
	},
	{
		value: 7,
		label: 'Initial Assessment'
	},
	{
		value: 8,
		label: 'Instructions'
	}
];


export const rulesListMock = [
	{
		id: 1,
		ruleName: "Human Milk Consumption",
		condition: "If  DOL< =14  AND  Birth Weight >= 1000 grams && Birth Weight <= 2500 grams for all birth weights and gestations",
		action: 'Ensure a lactation consultant <=72 hours'
	},
	{
		id: 2,
		ruleName: "Human Milk Consumption",
		condition: "If  Gestation At Birth  >29 weeks AND medication ≠ Inotrope OR AND Peripherial_arterial_line = No AND Whole_body_cooling = No AND high_frequency_ventilation = No  AND Jet Ventilator = No",
		action: 'Perform K-care(skin-to-skin) Total K-care duration >= 30 mins per day'
	}
];

export const operators = [
	{
		value: 1,
		label: '<=',
	},
	{
		value: 2,
		label: '==',
	},
	{
		value: 3,
		label: '>=',
	},
	{
		value: 4,
		label: 'In Between'
	},
	{
		value: 5,
		label: 'Not Equals'
	},
	{
		value: 6,
		label: 'No'
	}
];



export const conditionOperatorList = [
	{
		value: 'AND',
		label: 'AND',
	},
	{
		value: 'OR',
		label: 'OR',
	},
];

export const unitsList = [
	{
		value: '1',
		label: 'Seconds',
	},
	{
		value: '2',
		label: 'Minutes',
	},
	{
		value: '3',
		label: 'Days',
	},
	{
		value: '4',
		label: 'Weeks',
	},
	{
		value: '5',
		label: 'Grams',
	},
];

export const conditionsList = [
	{
		id: 1,
		conditionOperator: 'AND',
		dataField: {
			value: 96,
			label: 'Enteral Feeds',
		},
		operators: {
			value: 2,
			label: '<=',
		},
		value: false,
		units: {
			value: '1',
			label: 'Seconds',
		}
	},
	{
		id: 2,
		conditionOperator: 'AND',
		dataField: {
			value: 97,
			label: 'Peripheral Arterial Line',
		},
		operators: {
			value: 2,
			label: '>=',
		},
		value: false,
		units: {
			value: '2',
			label: 'Minutes',
		}
	},
	{
		id: 3,
		conditionOperator: 'OR',
		dataField: {
			value: 98,
			label: 'Whole Body Cooling',
		},
		operators: {
			value: 1,
			label: '<=',
		},
		value: true,
		units: {
			value: '3',
			label: 'Days',
		}
	},
	{
		id: 4,
		conditionOperator: 'OR',
		dataField: {
			value: 99,
			label: 'Lactation consultation',
		},
		operators: {
			value: 4,
			label: '<=',
		},
		value: false,
		units: {
			value: '4',
			label: 'Weeks',
		}
	},
	{
		id: 5,
		conditionOperator: 'OR',
		dataField: {
			value: 100,
			label: 'Skin to Skin Care',
		},
		operators: {
			value: 2,
			label: '<=',
		},
		value: true,
		units: {
			value: '5',
			label: 'Grams',
		}
	},

	// {
	// 	dataFields: {
	// 		value: '1',
	// 		label: 'Day of Life',
	// 	},
	// 	operators: {
	// 		value: '1',
	// 		label: '<=',
	// 	},
	// 	value: '14',
	// 	units: {
	// 		value: '1',
	// 		label: 'Minutes',
	// 	}
	// }
];

const baseDataFieldConditionMapping = [
	{ value: 96,  label: 'Enteral Feeds', bundleCategoryId: 1 },
	{ value: 97,  label: 'Peripheral Arterial Line', bundleCategoryId: 4 },
	{ value: 98,  label: 'Whole Body Cooling', bundleCategoryId: 4 },
	{ value: 99,  label: 'Lactation consultation', bundleCategoryId: 9 },
	{ value: 100,  label: 'Skin to Skin Care', bundleCategoryId: 9 },
	{ value: 101,  label: 'Weekly lactation Rounds', bundleCategoryId: 9 },
	{ value: 102,  label: 'Inotropes', bundleCategoryId: 3 },
	{ value: 103,  label: 'Antibiotics', bundleCategoryId: 3 },
	{ value: 104,  label: 'Jet Ventilator', bundleCategoryId: 2 },
	{ value: 105,  label: 'HFO', bundleCategoryId: 2 },
]
;
export const dataFieldConditionMapping = (categoryId) =>
	([...baseDataFieldConditionMapping].filter(dF => dF.bundleCategoryId === categoryId));
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

export const conditionsList = [
	{
		id: 1,
		comparator: null,
		dataFields: {
			value: '1',
			label: 'Day of Life',
		},
		operators: {
			value: '2',
			label: '<=',
		},
		value: '14',
		units: {
			value: '3',
			label: 'Minutes',
		}
	},
	{
		id: 2,
		comparator: 'AND',
		dataFields: {
			value: '1',
			label: 'Day of Life',
		},
		operators: {
			value: '1',
			label: '>=',
		},
		value: '1000',
		units: {
			value: '1',
			label: 'Minutes',
		}
	},
	{
		id: 3,
		comparator: 'OR',
		dataFields: {
			value: '1',
			label: 'Day of Life',
		},
		operators: {
			value: '1',
			label: '<=',
		},
		value: '1500',
		units: {
			value: '1',
			label: 'Minutes',
		}
	},
	{
		id: 4,
		comparator: 'OR',
		dataFields: {
			value: '1',
			label: 'Day of Life',
		},
		operators: {
			value: '1',
			label: '<=',
		},
		value: '1500',
		units: {
			value: '1',
			label: 'Minutes',
		}
	},
	{
		id: 5,
		comparator: 'OR',
		dataFields: {
			value: '1',
			label: 'Day of Life',
		},
		operators: {
			value: '1',
			label: '<=',
		},
		value: '1500',
		units: {
			value: '1',
			label: 'Minutes',
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
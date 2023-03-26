const required = 'Обязательное поле'

export const CategoryName = {
	required,
	minLength: {
		value: 3,
		message: 'Не менее 3 символов',
	},
}

export const ProductSize = {
	required,
	minLength: {
		value: 1,
		message: 'Не менее 1 символа',
	},
}

export const ProductName = {
	required,
	minLength: {
		value: 3,
		message: 'Не менее 3 символов',
	},
	maxLength: {
		value: 50,
		message: 'Не более 30 символов',
	},
}

export const ProductDescription = {
	required,
	minLength: {
		value: 10,
		message: 'Не менее 10 символов',
	},
	maxLength: {
		value: 100,
		message: 'Не более 100 символов',
	},
}

export const SimpleField = {
	required,
}

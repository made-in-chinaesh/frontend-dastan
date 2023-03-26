const required = 'Обязательное поле'

export const Username = {
	required,
	minLength: {
		value: 4,
		message: 'Не менее 4 символов',
	},
	maxLength: {
		value: 8,
		message: 'Не более 8 символов',
	},
}

export const Description = {
	required,
}

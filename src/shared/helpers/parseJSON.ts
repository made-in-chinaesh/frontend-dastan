export const parseJSON = (data: any) => {
	return Object.entries(data).map(([key, value]: any) => {
		return {
			...value,
			id: key,
		}
	})
}

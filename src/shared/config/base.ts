const getEnvVar = (key: string) => {
	if (process.env[key] === undefined) {
		throw new Error(`Env variable ${key} is required`)
	}
	return process.env[key] ?? ''
}

export const API_URL = 'http://176.126.166.180:5000/'

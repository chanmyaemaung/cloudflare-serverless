const getJson = async (url) => {
	const response = await fetch(url)

	if (!response.ok) {
		throw new Error('Unexpected HTTP response')
	}

	return await response.json()
}

const baseUrl = 'https://swapi.dev/api/people'

export const fetchAllPeople = () => getJson(baseUrl)
export const fetchPerson = (id) => getJson(baseUrl + '/' + id)

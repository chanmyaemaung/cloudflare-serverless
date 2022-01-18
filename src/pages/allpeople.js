import { fetchAllPeople } from '../api'
import { htmlResponse } from '../lib/responses'

// html render
const personToList = (person, index) => {
	return `<li><a href="/people/${index + 1}">${person.name}</a></li>`
}

const allPeople = async () => {
	const { results } = await fetchAllPeople()

	const persons = results.map(personToList).join('')
	const html = `<ul>${persons}</ul>`

	return htmlResponse(JSON.stringify(html))
}

export default allPeople

import { fetchAllPeople } from '../api'
import { htmlResponse } from '../lib/responses'

const person = (request) => {
	const url = new URL(request.url)

	const pathname = url.pathname

	return htmlResponse(pathname)
}

export default person

import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID SB6NrhFyRI5yTB1eUxOMfdL41SCqHeBeDWhL1kEKioo',
	},
})

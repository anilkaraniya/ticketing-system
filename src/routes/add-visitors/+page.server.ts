import { createVisitors } from '$lib/appwrite.js';

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();

		const name = data.get('title') as string;
		const phone = data.get('description') as string;
        const email = data.get('title') as string;
        const course = data.get('title') as string;
		const year = data.get('description') as string;
		const mop = data.get('description') as string;
        const pictureId = data.get('title') as string;
		const paymentId = data.get('description') as string;
        const isVisited = false;

		if (!name || !phone) {
			return {
				status: 400,
				body: {
					message: 'Title and description are required'
				}
			};
		}

		const result = await createVisitors(name, phone, email, course, year, mop, pictureId, paymentId,"");

		return {
			status: 200,
			body: result
		};
	}
};
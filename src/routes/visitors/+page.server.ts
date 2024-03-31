import { getVisitorsFromDatabase } from '$lib/appwrite';

export async function load() {
	const visitors = await getVisitorsFromDatabase();

	if (visitors) {
		return {
			visitors: visitors
		};
	}
}
import { getVisitor } from '$lib/appwrite';
import { error } from '@sveltejs/kit';

export async function load({ params, url }) {
	let id = url.searchParams.get('id');
	if(id !==null ) {
	try {
		return {
			response : await getVisitor(id)
		}
	} catch (e){ 
		throw error(404, "Ticket Not Found")
	}

} else 
{
	return null;
}
}
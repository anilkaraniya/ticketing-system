import { error } from '@sveltejs/kit';
import { Client, Databases, ID, Query, Storage } from 'appwrite';
export let APPWRITE_PROJECT_ID= "660963105209c1bf629f"
export let APPWRITE_ENDPOINT= "https://cloud.appwrite.io/v1"
export let APPWRITE_DATABASE_ID= "660966fa13868169391e"
export let APPWRITE_COLLECTION_ID= "6609672da8b35f31ec23"
export let APPWRITE_STORAGE_PICTURE_ID = "66096789a2c6fadbda64"
export let APPWRITE_STORAGE_PAYMENT_ID = "66096794a7bb1c96b32f"

const client = new Client();
const databases = new Databases(client);
const storage = new Storage(client);

client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID);

const getVisitorsFromDatabase = async () => {
	const { documents } = await databases.listDocuments(
		APPWRITE_DATABASE_ID, 
		APPWRITE_COLLECTION_ID,
		);
	return documents;
};

const getVisitor = async (id: string | null) => {
	if(id !== null) {
		try {
			
			const client = new Client();

	const databases = new Databases(client);

	client	
		.setEndpoint('https://cloud.appwrite.io/v1') 
		.setProject('660963105209c1bf629f');

	const promise = await databases.getDocument('660966fa13868169391e', '6609672da8b35f31ec23', id);
	return promise;
			} catch (e){ 
				throw error(404, "Ticket Not Found")
			}}
	return null;
};

const updateIsVisited = async (id: string) => {
	if(id !== null) {
		try {
			
			const client = new Client();

	const databases = new Databases(client);

	client	
		.setEndpoint('https://cloud.appwrite.io/v1') 
		.setProject('660963105209c1bf629f');

	const promise = await databases.updateDocument('660966fa13868169391e', '6609672da8b35f31ec23', id, {"isVisited": true});
	return promise;
			} catch (e){ 
				throw error(404, "Data not chnaged")
			}}
	return null;
};

const uploadImage = async (isPicture : boolean, uniqueId : string, file: any) => {
	console.log(uniqueId);
	await storage.createFile(
		isPicture ? APPWRITE_STORAGE_PICTURE_ID : APPWRITE_STORAGE_PAYMENT_ID,
		uniqueId, 
		file,
		);
} 

const createVisitors = async (name: string, phone: string, email: string, course: string, year: string, mop : string, picture: string, payment: string  , uniqueId : string) => {
	const result = await databases.createDocument(
		APPWRITE_DATABASE_ID,
		APPWRITE_COLLECTION_ID,
		picture,
		{
			"name" : name, 
			"phone" :phone, 
			"email" : email, 
			"course":course, 
			"year":year, 
			"mop" :mop, 
			"pictureId" : picture, 
			"paymentId" : picture,
			"id" : picture,
			'createdAt' : new Date(),
		}
	);

	return result;
};

export { client, getVisitorsFromDatabase, createVisitors, uploadImage, getVisitor, updateIsVisited };
import { Client, Databases, ID, Storage } from 'appwrite';
import {
	APPWRITE_ENDPOINT,
	APPWRITE_PROJECT_ID,
	APPWRITE_DATABASE_ID,
	APPWRITE_COLLECTION_ID,
	APPWRITE_STORAGE_PICTURE_ID,
	APPWRITE_STORAGE_PAYMENT_ID
} from '$env/static/private';

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

const createVisitors = async (name: string, phone: string, email: string, course: string, year: string, mop : string, picture: File, payment: File  ) => {
	var uniqueId = ID.unique();

	await storage.createFile(
		APPWRITE_STORAGE_PICTURE_ID,
		uniqueId, 
		picture,
		);
	await storage.createFile(
		APPWRITE_STORAGE_PAYMENT_ID,
		uniqueId, 
		payment,
		);
	const result = await databases.createDocument(
		APPWRITE_DATABASE_ID,
		APPWRITE_COLLECTION_ID,
		uniqueId,
		{
			"name" : name, 
			"phone" :phone, 
			"email" : email, 
			"course":course, 
			"year":year, 
			"mop" :mop, 
			"pictureId" : uniqueId.toString, 
			"paymentId" : uniqueId.toString,
			"id" : uniqueId,
		}
	);

	return result;
};

export { client, getVisitorsFromDatabase, createVisitors };
import emailjs from "@emailjs/browser";
import { error } from '@sveltejs/kit';
import { Client, Databases, ID, Query, Storage } from 'appwrite';
import { APPWRITE_STORAGE_PICTURE_ID, APPWRITE_STORAGE_PAYMENT_ID, APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_DATABASE_ID, APPWRITE_COLLECTION_ID, } from "$env/static/private";


const client = new Client();
const databases = new Databases(client);
const storage = new Storage(client);

client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID);

const getVisitorsFromDatabase = async () => {
	const { documents } = await databases.listDocuments(
		APPWRITE_DATABASE_ID, 
		APPWRITE_COLLECTION_ID,
		[
			Query.limit(200),
			Query.orderDesc('createdAt'),
		],
		);
	return documents;
};

const getVisitor = async (id: string | null) => {
	if(id !== null) {
		try {
	const promise = await databases.getDocument('APPWRITE_DATABASE_ID', 'APPWRITE_DATABASE_ID', id);
	return promise;
			} catch (e){ 
				throw error(404, "Ticket Not Found")
			}}
	return null;
};

const updateIsVisited = async (id: string) => {
	if(id !== null) {
		try {

	const promise = await databases.updateDocument('APPWRITE_DATABASE_ID', 'APPWRITE_COLLECTION_ID', id, {"isVisited": true});
	return promise;
			} catch (e){ 
				throw error(404, "Data not changed")
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

const createVisitors = async (name: string, phone: string, email: string, course: string, year: string, mop : string, uniqueId : string) => {
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
			"id" : uniqueId,
			'createdAt' : new Date(),
		}
	);

	return result;
};

const deleteVisitorData = async (id: any) => {
	if(id !== null) {
		try {
			
	const promise = await databases.deleteDocument(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTION_ID,
        id
      );
	return promise;
			} catch (e){ 
				throw error(404, "Data not changed")
			}}
	return null;
};

const updateTotalIsVisited = async (id: any) => {
	if(id !== null) {
		try {
			
	const promise = await databases.updateDocument('APPWRITE_DATABASE_ID', 'APPWRITE_COLLECTION_ID', id.$id, {
		"name" : id.name, 
		"phone" :id.phone, 
		"email" : id.email, 
		"course":id.course, 
		"year":id.year, 
		"mop" :id.mop, 
	});
	return promise;
			} catch (e){ 
				throw error(404, "Data not changed")
			}}
	return null;
};

const sendMail = async (email: string, name: string, uniqueID: string) => {
	// await emailjs.send("SERVICE_ID","TAMPLATE_ID",{
	// 	to_name: name,
	// 	message: `https://farewell-bfc.netlify.app/?id=${uniqueID}`,
	// 	reply_to: email,
	//   },
	// 	{
	// 	  publicKey: 'API_KEY',
	// 	})
	// 	.then(
	// 	  () => {
	// 		console.log('SUCCESS!');
	// 	  },
	// 	  (error) => {
	// 		console.log('FAILED...', error);
	// 	  },
	// 	);
  
	  await emailjs
	    .send(
	      "SERVICE_ID",
	      "TAMPLATE_ID",
	      {
	        to_name: name,
	        message: `https://farewell-bfc.netlify.app/?id=${uniqueID}`,
	        reply_to: email,
	      },
	      {
	        publicKey: "API_KEY",
	      }
	    )
	    .then(
	      () => {
	        console.log("SUCCESS!");
	      },
	      (error) => {
	        console.log("FAILED...", error);
	      }
	    );
}

export { client, updateTotalIsVisited, getVisitorsFromDatabase, createVisitors, deleteVisitorData, uploadImage, getVisitor, updateIsVisited, sendMail };
import { initializeApp } from "firebase/app";

import {
	collection,
	CollectionReference,
	doc,
	DocumentReference,
	getFirestore,
    Timestamp
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCir4wQDYICNuYzPyEOU44Gar8rL1SCnEg",
  authDomain: "portfolio-9303b.firebaseapp.com",
  projectId: "portfolio-9303b",
  storageBucket: "portfolio-9303b.appspot.com",
  messagingSenderId: "472330448884",
  appId: "1:472330448884:web:8a9455b38a6348748013a1"
};

initializeApp(firebaseConfig)

const db = getFirestore()

export type Project = {
	title: string | null,
	description: string | null,
	tags?: Array<string> | null,
    created: Timestamp | null
}

export const projectsCollection = collection(
	db,
	'projects'
) as CollectionReference<Project>

export const projectsDocument = (id: string) =>
	doc(db, 'projects', id) as DocumentReference<Project>
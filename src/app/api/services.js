import {
    collection,
    doc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    getDoc,
} from "firebase/firestore";
import { db } from "@/services/firebaseConfig";

// Get docs refs
export async function getRef(collectionName) {
    try {
        return await getDocs(collection(db, collectionName));
    } catch (e) {
        console.log(e);
    }
}

// Add new doc
export async function addElement(data, collectionName) {
    try {
        return await addDoc(collection(db, collectionName), {
            ...data,
        });
    } catch (e) {
        console.log(e);
    }
}

// Update a doc
export async function putElement(data, id, collectionName) {
    try {
        const docRef = doc(db, collectionName, id);
        const docBefore = await getDoc(docRef);

        return await updateDoc(docRef, {
            ...docBefore.data(),
            ...data,
        });
    } catch (e) {
        console.log(e);
    }
}

// Delete a doc
export async function delElement(id, collectionName) {
    try {
        const docRef = doc(db, collectionName, id);
        return await deleteDoc(docRef);
    } catch (e) {
        console.log(e);
    }
}

// Adapt docs format to use them easily
export function formatData(res) {
    return res.docs.map((doc) => {
        return {
            id: doc.id,
            data: doc.data(),
        };
    });
}

import {
    collection,
    doc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    getDoc,
} from "firebase/firestore";
import { db, storage } from "@/app/api/firebaseConfig";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";

// Get users by email
export async function getUserByEmail(email, pass) {
    const res = await getRef("admins");

    const admins = res.docs.map((data) => {
        return {
            id: data.id,
            data: data.data(),
        };
    });

    const userFound = admins.find((user) => {
        return user.data.email == email && user.data.contraseña == pass;
    });

    return userFound;
}

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

// Upload an image
export async function uploadImage(file) {
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
}

// Delete an image
export async function delImage(imageUrl) {
    try {
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef);
    } catch (e) {
        console.error("Error al eliminar la imagen: ", e);
        throw new Error("Error al eliminar la imagen");
    }
}

export default uploadImage;

// Adapt docs format to use them easily
export function formatData(res) {
    return res.docs.map((doc) => {
        return {
            id: doc.id,
            data: doc.data(),
        };
    });
}

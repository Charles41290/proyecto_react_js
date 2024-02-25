import { collection, getDocs, getFirestore, query, where} from "firebase/firestore"

export const getDocument = (collectionName, categoriaAutor) => {
    const db = getFirestore();
    const colRef = collection(db, collectionName);
    const consulta = categoriaAutor ? query(colRef, where("categoria", "==", categoriaAutor)) : colRef;
    return getDocs(consulta).then((snapshot) => {
        const data = snapshot.docs.map(doc => ({id:doc.id,...doc.data()}));
        return data;
    })
}
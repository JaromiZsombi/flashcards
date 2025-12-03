import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { db } from "./firebaseApp"

export const addTopic = async (topicName) => {
    try {
        const collectionRef = collection(db, "topics")
        await addDoc(collectionRef, {topicName})
        
    } catch (error) {
        console.log("Nem sikerült hozzáadni a témát! " + error)
    }
}

export const addCard = async (topicId, card)=>{
    try {
        const subCollectionReference = collection(db, "topics", topicId, "cards")
        await addDoc(subCollectionReference, {...card})
    } catch (error) {
        console.log("Nem sikerült hozzáadni a kártyát! " + error)
    }
}

export const readTopicsOnce = async (setTopics) =>{
    try {
        const docRef = collection(db, "topics")
        const snap = await getDocs(docRef)
        setTopics(snap.docs.map((d)=>({id:d.id, ...d.data() }) ))
    } catch (error) {
        console.log("Téma lekérési hiba: ", error);
        return null;
    }
}

export const readCardsOnce = async(topicId, setCards)=>{
    try {
        const subCollectionReference = collection(db, "topics", topicId, "cards")
        const snap = await getDocs(subCollectionReference)
        setCards(snap.docs.map((d)=>({id:d.id, ...d.data() }) ))
    } catch (error) {
        console.log("Egyszeri kártya lekérési hiba: ", error)
        return [];  
    }
}

export const deleteRecipe = async (id) => {
    if(window.confirm("Biztosan szeretnéd törölni a receptet?")){
    const docRef = doc(db, "topics", id)
    await deleteDoc(docRef)
    }
}
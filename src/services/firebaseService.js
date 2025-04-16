import { db } from "../firebase/config"; 
import { collection, getDocs, addDoc } from "firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";

export const fetchDataFromFirebase = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "blog"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    throw error;
  }
};


export const addBlogPost = async (title, description) => {
    try {
      const docRef = await addDoc(collection(db, "blog"), {
        title,
        description,
        cdate: new Date(),
      });
      return docRef;
    } catch (err) {
      console.error("Ekleme hatası:", err);
      throw err;
    }
  };


  export const deleteBlogPost = async (postId) => {
    try {
      const postRef = doc(db, "blog", postId);
      await deleteDoc(postRef);
    } catch (err) {
      console.error("Silme hatası:", err);
      throw err; 
    }
  };
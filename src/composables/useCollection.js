import { ref } from "vue";
import { db } from "@/firebase/config";

const useCollection = (collection) => {
  let error = ref(null);
  const addDoc = async (doc) => {
    try {
      await db.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "could not send message";
    }
  };
  return { error, addDoc };
};

export default useCollection;

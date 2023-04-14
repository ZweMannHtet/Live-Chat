import { ref } from "vue";
import { auth } from "@/firebase/config";

let error = ref(null);

const signOut = async () => {
  try {
    const res = await auth.signOut();
    console.log("user logged out");
    return res;
  } catch (err) {
    error.value = err.message;
    console.log(error.value);
  }
};

const useSignout = () => {
  return { error, signOut };
};

export default useSignout;

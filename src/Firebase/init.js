import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";

const initAuth = () => {
    initializeApp(firebaseConfig)
}

export default initAuth
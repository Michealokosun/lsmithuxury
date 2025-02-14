import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./auth";
// import { Product } from "@/sampledata";

const db = getFirestore(app);

// export const addProducttodb = () => {
//   const docfref = collection(db, "product");
//   Product.forEach(async (item) => {
//     try {
//       await addDoc(docfref, item);
//     } catch (error) {
//       console.log(error);
//     }
//   });
// };

export const getallProductFromDb = async () => {
  try {
    const product: any = [];

    const colref = collection(db, "product");
    const snapshot = await getDocs(colref);
    snapshot.forEach((item) => {
      product.push(item.data());
    });

    return product;
  } catch (error) {
    console.log(error);
  }
};

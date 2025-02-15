import Navbar from "@/components/header/Navbar";
import banner from "../../assets/images/banner-1.jpg";
import { Separator } from "../../components/ui/separator";

import loader from "../../assets/images/loader.gif";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Product } from "@/sampledata";
import { useEffect, useState } from "react";
import { getallProductFromDb } from "@/firebase/product";
import { Star } from "lucide-react";
import { ProductList } from "@/components/product/produtlist";

export const HomePage = () => {
  const [products, setproducts] = useState([]);
  const [loading, setisLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = async () => {
      setisLoading(true);
      const res = await getallProductFromDb();
      setisLoading(false);
      return setproducts(res);
    };

    unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center gap flex-col items-center gap-3 h-screen w-screen ">
        <img className="w-20" src={loader} />
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <div
      className="max-w-7xl w-full mx-auto  p-4
    "
    >
      <Navbar />
      <Separator />

      <section>
        <header className="mt-5 ">
          <img src={banner} alt="" />
        </header>
      </section>

      <section className="mt-7">
        <ProductList product={products} />
      </section>
    </div>
  );
};

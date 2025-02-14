import Navbar from "@/components/header/Navbar";
import banner from "../../assets/images/banner-1.jpg";
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

      <section>
        <header className="mt-5 ">
          <img src={banner} alt="" />
        </header>
      </section>

      <section className="mt-7">
        <h3 className="text-lg ">New Arrival</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {products.map((item) => (
            <Card key={item?.name} className="cursor-pointer">
              <CardHeader className="h-60    overflow-hidden">
                <img src={item?.images[0]} />
              </CardHeader>
              <CardContent className="mt-3">
                <CardTitle>{item?.name}</CardTitle>
                <div>
                  <CardDescription>{item?.rating}</CardDescription>
                  <CardDescription>{item?.price}</CardDescription>
                </div>
                <CardDescription>{item?.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Star } from "lucide-react";
import { NavLink } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <Card key={product?.name} className="cursor-pointer">
      <CardHeader className="h-60    overflow-hidden">
        <NavLink to={product.slug}>
          <img src={product?.images[0]} />
        </NavLink>
      </CardHeader>
      <CardContent className="mt-3">
        <CardTitle>{product?.name}</CardTitle>
        <div className="flex items-center  justify-between mt-3">
          <CardDescription className="flex gap-2">
            <Star color="#FFFF00" />
            <Star color="#FFFF00" />
            <Star color="#F3Fe00" />
          </CardDescription>
          <CardDescription>${product?.price}</CardDescription>
        </div>
        <CardDescription className="mt-2">
          {product?.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

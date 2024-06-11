import { v4 as uuidv4 } from "uuid";
import img0 from "../assets/product-img/Images-0.png";
import img1 from "../assets/product-img/Images-1.png";
import img2 from "../assets/product-img/Images-2.png";
import img3 from "../assets/product-img/image-3.png";

export interface Product {
  id: string;
  name: string;
  originalPrice: number;
  discountedPrice?: number;
  description: string;
  image: string;
}

export const productDatabase: Product[] = [
   ...Array(10).fill({ // Array(10) creates an array of 10 elements
    id: uuidv4(),
    name: "Syltherine",
    originalPrice: 2500000,
    discountedPrice: 3500000,
    description: "Stylish cafe chair",
    image: img0,
}),
...Array(10).fill({
    id: uuidv4(),
    name: "Leviosa",
    originalPrice: 2500000,
    description: "Stylish cafe chair",
    image: img3,
}),
...Array(10).fill({
    id: uuidv4(),
    name: "Lolito",
    originalPrice: 700000,
    discountedPrice: 14000000,
    description: "Luxury big sofa",
    image: img1,
}),
...Array(10).fill({
    id: uuidv4(),
    name: "Respira",
    originalPrice: 500000,
    description: "Outdoor bar table and stool",
    image: img2,
})
  
];

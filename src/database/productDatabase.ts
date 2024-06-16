import img0 from "../assets/product-img/Images-0.png";
import img1 from "../assets/product-img/Images-1.png";
import img2 from "../assets/product-img/Images-2.png";
import img3 from "../assets/product-img/image-3.png";

/* 
Logica para gerar um array de produtos com IDs únicos
1 - Definir a Função - Recebe o número de produtos (count) e um template de produto (productTemplate).
2 - Criar um Array de Produtos: - Array.from para criar um array com count elementos.
3 - Mapear Cada Elemento para um Novo Produto
   -> Para cada elemento no array, criar um novo objeto de produto
   -> Copiar as propriedades do productTemplate para o novo produto.
   -> Adicionar um id único gerado por crypto.randomUUID().
4 - Retornar o Array de Produtos
    -> O array resultante contém count produtos, cada um com um id único e as demais propriedades copiadas do productTemplate.
*/

// Interface que define a estrutura de um produto
export interface IProduct {
  id: string;
  name: string;
  price: number;
  discountedPrice?: number;
  description: string;
  image: string;
}

// Função que gera um array de produtos com IDs únicos
const generateProducts = (
  count: number,
  productTemplate: Omit<IProduct, "id">
): IProduct[] => {
  return Array.from({ length: count }, () => ({
    ...productTemplate, // Copia as propriedades do template do produto
    id: crypto.randomUUID(), // Gera um ID único para cada produto
  }));
};

// Banco de dados de produtos, gerando 10 produtos de cada tipo com IDs únicos
export const productDatabase: IProduct[] = [
  // Gera 10 produtos do tipo "Syltherine"
  ...generateProducts(10, {
    name: "Syltherine",
    price: 3500000,
    discountedPrice: 2500000,
    description: "Stylish cafe chair",
    image: img0,
  }),
  // Gera 10 produtos do tipo "Leviosa"
  ...generateProducts(10, {
    name: "Leviosa",
    price: 2500000,
    description: "Stylish cafe chair",
    image: img3,
  }),
  // Gera 10 produtos do tipo "Lolito"
  ...generateProducts(10, {
    name: "Lolito",
    price: 14000000,
    discountedPrice: 700000,
    description: "Luxury big sofa",
    image: img1,
  }),
  // Gera 10 produtos do tipo "Respira"
  ...generateProducts(10, {
    name: "Respira",
    price: 500000,
    description: "Outdoor bar table and stool",
    image: img2,
  }),
];

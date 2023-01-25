export interface ProductRequest {
  category: string;
  name: string;
  path: string;
  weight: number;
  consist: string;
  price: string;
  imagePath: string;
}

export interface ProductResponse extends ProductRequest {
  id: number;
}

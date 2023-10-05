export interface GetProductResponse {
    products: Product[];
    current_page: number;
    total_item: number;
    total_page: number;
}

export interface Product {
    id: number;
    name: string;
    is_active: string;
}

export interface Category {
    id: number;
    name: string;
    
}

export type ProductForm = Omit<Product,'id'>

export interface LoginForm {
    email: string;
    password: string;
}

export interface LoginResponse {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    token: string;
}

export interface RegisterForm {
    name: string;
    email: string;
    password: string;
}

export interface GetRegisterResponse {
    name: string;
    email: string;
    password: string;
}

export interface GetCategoryResponse {
    name: string;
    token: string;
    
}


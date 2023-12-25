import { GetProductResponse, ProductForm, Product, GetRegisterResponse, GetCategoryResponse, RegisterForm } from '../types'

export const getProductList = async (): Promise<GetProductResponse>  => {
    const fetching = await fetch('localhost:5000/products');

    return fetching.json()
}

export const getCategoryList = async (): Promise<GetCategoryResponse>  => {
    const fetching = await fetch('localhost:5000/products');

    return fetching.json()
}

export const removeProduct = async (id?: number): Promise<void> => {
    try {
        const fetching = await fetch(`localhost:5000/products/${id}`, {
            method: 'DELETE'
        })

        return fetching.json()

    } catch (error) {
        alert(error)
    }
}

export const addProduct = async (body: ProductForm) => {
    try {
        const fetching = await fetch('localhost:5000/products/add', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(body)
        })
        const response : Promise<Product> = fetching.json()
        return response

    } catch (error) {
        alert(error)
    }
}

export const addRegister = async (body: RegisterForm) => {
    try {
        const fetching = await fetch('localhost:5000/v1/auth/register', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(body)
        })
        const response : Promise<Register> = fetching.json()
        return response

    } catch (error) {
        alert(error)
    }
}
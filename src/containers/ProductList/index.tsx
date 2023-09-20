import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { ProductList as ProductListComponent } from '../../components'
import { Product, GetProductResponse } from '../../types';
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom';

const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();

    const getProductList = async () => {
        const fetching = await fetch('https://dummyjson.com/products')
        const response: GetProductResponse = await fetching.json();
        setProducts(response.products ?? []);
    }

    useEffect(
        () => {
            getProductList()
        },
        []
    )

    const columns: ColumnsType<Product> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',        
        },
        {
            title: 'Name',
            dataIndex: 'title',
            key: 'title',        
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <Button type={'primary'} onClick={() => navigate(`/product/${record.id}`)}>Detail</Button>
            ),
          },
    ];

    return (
        <>
            <h3>Daftar Product</h3>
            <ProductListComponent columns={columns} data={products}/>
        </>
    )
}

export default ProductList
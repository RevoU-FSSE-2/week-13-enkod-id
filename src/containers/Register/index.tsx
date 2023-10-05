import { GetRegisterResponse } from "../../types"
import { useNavigate } from "react-router-dom"
import { useMutation, useQueryClient } from "react-query"
import { addRegister } from '../../api'; 
import { RegisterForm } from "../../components"

const Register = () => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const { mutate } = useMutation(addRegister, {
        onSuccess: (data) => {
            if(data) {
                const prevProducts = queryClient.getQueryData<GetRegisterResponse>(['getProductList']);
                if(prevProducts) {
                    const newProducts = {
                        ...prevProducts,
                        products: [...prevProducts.products , data]
                    }
                    queryClient.setQueryData('getProductList', newProducts)
                }
                navigate('/login')

            }
        }
    })



    return (
        <RegisterForm onSubmit={mutate}/>
    )

}

export default Register
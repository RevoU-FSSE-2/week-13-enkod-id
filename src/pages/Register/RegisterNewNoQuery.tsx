import { RegisterForm as RegisterFormProps } from "../../types"
import { RegisterForm } from "../../components"
import { useNavigate } from "react-router-dom"

const RegisterNewNoQuery = () => {

    const navigate = useNavigate()


    const onSubmit = async (values: RegisterFormProps) => {
        try {
            const fetching = await fetch('https://mock-api.arikmpt.com/api/user/register', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(values)
            })
            await fetching.json()
            navigate('/login')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <RegisterForm onSubmit={onSubmit}/>
    )
}

export default RegisterNewNoQuery
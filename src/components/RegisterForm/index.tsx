import { Button, Card, Input, Typography, Col, Row } from "antd"
import { useFormik } from "formik"
import { RegisterForm as RegisterFormProps } from "../../types"
import { initialValues, validationSchema } from "./registerFormScheme"
import { useNavigate } from 'react-router-dom';

interface Props {
    onSubmit: (values: RegisterFormProps) => void
}

const RegisterForm = ({ onSubmit } : Props) => {

    const navigate = useNavigate();

    const handleSubmit = (values: RegisterFormProps) => {
        onSubmit(values)
    }

    const formMik = useFormik({
        
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
       
    })

    return (
        <>
        <Row justify="center">  
        <Col span={6} offset={6}>
        <Card title={"Register Page"} bordered style={{ width: 350 }}>
            <form onSubmit={formMik.handleSubmit}>
                <div>
                    <Typography.Paragraph>{'Name'}</Typography.Paragraph>
                    <Input name={'name'}
                        value={formMik.values.name} 
                        onChange={formMik.handleChange('name')}
                        status={formMik.errors.name && 'error'}
                        placeholder={'Enter name'}
                    />
                    {formMik.errors.name && (
                        <Typography.Paragraph>{formMik.errors.name}</Typography.Paragraph>
                    )}
                </div>
                <div>
                    <Typography.Paragraph>{'Email'}</Typography.Paragraph>
                    <Input name={'email'}
                        value={formMik.values.email} 
                        onChange={formMik.handleChange('email')}
                        status={formMik.errors.email && 'error'}
                        placeholder={'Enter email'}
                    />
                    {formMik.errors.name && (
                        <Typography.Paragraph>{formMik.errors.email}</Typography.Paragraph>
                    )}
                </div>
                <div>
                    <Typography.Paragraph>{'Password'}</Typography.Paragraph>
                    <Input name={'password'}
                        value={formMik.values.password} 
                        onChange={formMik.handleChange('password')}
                        status={formMik.errors.password && 'error'}
                        type={'password'}
                        placeholder={'Enter password'}
                    />
                    {formMik.errors.password && (
                        <Typography.Paragraph>{formMik.errors.password}</Typography.Paragraph>
                    )}
                </div>
                <Button type={'primary'} htmlType={"submit"}>Register</Button>
            </form>
            <br></br>
            <Button type={'primary'} onClick={() => navigate('/login')}>Login</Button>

        </Card>
        </Col>
        
        </Row>
        </>
    )
}

export default RegisterForm
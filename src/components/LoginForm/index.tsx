import { Button, Card, Input, Typography, Col, Row } from "antd"
import { useFormik } from "formik"
import { LoginForm as LoginFormProps } from "../../types"
import { initialValues, validationSchema } from "./loginFormSchema"
import { useNavigate } from "react-router-dom"

interface Props {
    onSubmit: (values: LoginFormProps) => void
}

const LoginForm = ({ onSubmit } : Props) => {

    const navigate = useNavigate();

    const handleSubmit = (values: LoginFormProps) => {
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
        <Card title={"Login Page"} bordered style={{ width: 350 }}>
            <form onSubmit={formMik.handleSubmit}>
                <div>
                    <Typography.Paragraph>{'Email'}</Typography.Paragraph>
                    <Input name={'email'}
                        value={formMik.values.email} 
                        onChange={formMik.handleChange('email')}
                        status={formMik.errors.email && 'error'}
                        placeholder={'Enter email'}
                    />
                    {formMik.errors.username && (
                        <Typography.Paragraph>{formMik.errors.username}</Typography.Paragraph>
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
                <Button type={'primary'} htmlType={"submit"}>Login</Button>
            </form>
            <br></br>
            <Button type={'primary'} onClick={() => navigate('/register')}>Register</Button>

        </Card>
        </Col>
        
        </Row>
        </>
    )
}

export default LoginForm
import { Col, Row } from 'antd';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { ButtonStyled } from '../stylesheet/Button/Button.styled';
import { FormGroup, InputAntd } from '../stylesheet/Input/Input.styled';
import { TextSpan } from '../stylesheet/Text/Text.styled';
import * as Yup from 'yup';
import AppAction from '../action/appAction';
import { useDispatch } from 'react-redux';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required')
});

export default function LoginForm() {
    const dispatch = useDispatch();

    const onLogin = (values) => {
        dispatch(AppAction.loginUser(values));
    };

    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, { resetForm }) => {
                    onLogin(values);
                }}
                validationSchema={LoginSchema}>
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Field name="email">
                                {({ field, form: { touched, errors } }) => (
                                    <>
                                        <InputAntd
                                            error={errors.email && touched.email ? true : false}
                                            placeholder="Email"
                                            name="email"
                                            type="text"
                                            {...field}
                                        />
                                        {errors.email && touched.email ? (
                                            <TextSpan error>{errors.email}</TextSpan>
                                        ) : null}
                                    </>
                                )}
                            </Field>
                        </FormGroup>
                        <FormGroup>
                            <Field name="password">
                                {({ field, form: { touched, errors } }) => (
                                    <>
                                        <InputAntd.Password
                                            style={{ height: '35px' }}
                                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                            error={errors.email && touched.email ? true : false}
                                            placeholder="password"
                                            name="password"
                                            type="password"
                                            {...field}
                                        />
                                        {errors.password && touched.password ? (
                                            <TextSpan error>{errors.password}</TextSpan>
                                        ) : null}
                                    </>
                                )}
                            </Field>
                        </FormGroup>
                        <Row>
                            <Col span={24}>
                                <ButtonStyled type="submit" purple2 w100 onClick={handleSubmit}>
                                    Lưu lại
                                </ButtonStyled>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

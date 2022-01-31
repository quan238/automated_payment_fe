import { Col, Row } from 'antd';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { ButtonStyled } from '../stylesheet/Button/Button.styled';
import { FormGroup, InputAntd } from '../stylesheet/Input/Input.styled';
import { TextSpan } from '../stylesheet/Text/Text.styled';
import * as Yup from 'yup';
import AppAction from '../action/appAction';
import { useDispatch } from 'react-redux';

const BankSchema = Yup.object().shape({
    cardNumber: Yup.string().required('Email is required'),
    cardName: Yup.string().required('Password is required'),
    cardExpiration: Yup.string().required('Password is required'),
    cardPass: Yup.string().required('Password is required')
});

export default function BankForm() {
    const dispatch = useDispatch();

    const onLogin = (values) => {
        dispatch(AppAction.uploadBankData(values));
    };

    return (
        <div>
            <Formik
                initialValues={{ cardNumber: null, cardName: null, cardExpiration: null, cardPass: null }}
                onSubmit={(values, { resetForm }) => {
                    onLogin(values);
                }}
                validationSchema={BankSchema}>
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Field name="cardNumber">
                                {({ field, form: { touched, errors } }) => (
                                    <>
                                        <InputAntd
                                            error={errors.cardNumber && touched.cardNumber ? true : false}
                                            placeholder="Số thẻ"
                                            name="cardNumber"
                                            type="text"
                                            {...field}
                                        />
                                        {errors.cardNumber && touched.cardNumber ? (
                                            <TextSpan error>{errors.cardNumber}</TextSpan>
                                        ) : null}
                                    </>
                                )}
                            </Field>
                        </FormGroup>
                        <FormGroup>
                            <Field name="cardName">
                                {({ field, form: { touched, errors } }) => (
                                    <>
                                        <InputAntd
                                            error={errors.cardName && touched.cardName ? true : false}
                                            placeholder="Tên in trên thẻ"
                                            name="cardName"
                                            {...field}
                                        />
                                        {errors.cardName && touched.cardName ? (
                                            <TextSpan error>{errors.cardName}</TextSpan>
                                        ) : null}
                                    </>
                                )}
                            </Field>
                        </FormGroup>
                        <FormGroup>
                            <Field name="cardExpiration">
                                {({ field, form: { touched, errors } }) => (
                                    <>
                                        <InputAntd
                                            error={errors.cardExpiration && touched.cardExpiration ? true : false}
                                            placeholder="Ngày hết hạn"
                                            name="cardExpiration"

                                            {...field}
                                        />
                                        {errors.cardExpiration && touched.cardExpiration ? (
                                            <TextSpan error>{errors.cardExpiration}</TextSpan>
                                        ) : null}
                                    </>
                                )}
                            </Field>
                        </FormGroup>
                        <FormGroup>
                            <Field name="cardPass">
                                {({ field, form: { touched, errors } }) => (
                                    <>
                                        <InputAntd
                                            error={errors.cardPass && touched.cardPass ? true : false}
                                            placeholder="Mã bảo mật"
                                            name="cardPass"
                                            {...field}
                                        />
                                        {errors.cardPass && touched.cardPass ? (
                                            <TextSpan error>{errors.cardPass}</TextSpan>
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

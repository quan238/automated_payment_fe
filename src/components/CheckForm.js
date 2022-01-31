import React from 'react';
import { useSelector } from 'react-redux';
import ErrorText from './ErrorText';
import SuccessText from './SuccessText';

export default function CheckForm() {
    const { cardNumber, cardName, cardExpiration, cardPass, email, password } = useSelector((state) => state.app)

    const notEnter = 'Chưa Nhập'

    return <div>
        <div>{email !== null ? <SuccessText text={`Email: ${email}`} /> : <ErrorText text={`Email: ${notEnter}`} />}</div>
        <div>{password !== null ? <SuccessText text={`Password: ***`} /> : <ErrorText text={`Password: ${notEnter}`} />}</div>
        <div>{cardNumber !== null ? <SuccessText text={`Thẻ tài khoản ngân hàng: ${cardNumber}`} /> : <ErrorText text={`Thẻ tài khoản ngân hàng: ${notEnter}`} />}</div>
        <div>{cardName !== null ? <SuccessText text={`Tên thẻ:  ${cardName}`} /> : <ErrorText text={`Tên thẻ: ${notEnter}`} />}</div>
        <div>{cardExpiration !== null ? <SuccessText text={`Hạn thẻ: ${cardExpiration}`} /> : <ErrorText text={`Hạn thẻ: ${notEnter}`} />}</div>
        <div>{cardPass !== null ? <SuccessText text={`Mã thẻ: ${cardPass}`} /> : <ErrorText text={`Mã thẻ: ${notEnter}`} />}</div>
    </div>;
}

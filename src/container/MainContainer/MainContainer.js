import { Card } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { ButtonStyled } from '../../stylesheet/Button/Button.styled';
import { executeScriptAPI } from '../../api/execute/executeAPI';
import UploadFile from '../../components/UploadFile';
import { CardStyled } from '../../stylesheet/Card/Card.styled';
import RadioEvn from '../../components/RadioEvn';
import CheckForm from '../../components/CheckForm';
import { showPromiseConfirm } from '../../components/Confirm';
import { divideExcelData } from '../../service/excel';

export default function MainContainer() {
    const { email, password, clientCode, cardName, cardNumber, cardExpiration, cardPass } = useSelector((state) => state.app)
    const disable = email && password && clientCode && cardName && cardNumber && cardExpiration && cardPass ? false : true

    const onDivideBill = async () => {
        console.log('dividing')
        divideExcelData(clientCode, 10)
    }

    const onSubmitAutomatic = async (onDivideBill) => {
        if (!disable) {
            const bank = { cardName, cardNumber, cardExpiration, cardPass }
            const user = { email, password }
            const data = { user, clientCode, bank }
            if (clientCode.length >= 10) {
                await showPromiseConfirm(onDivideBill)
            } else {
                await executeScriptAPI(data)
            }
        }
        console.log(19)
    }


    return <CardStyled>
        <Card title="Excute Program" style={{ height: '100%' }} >
            <CheckForm />
            <UploadFile />
            <RadioEvn />
            <div style={{ flex: 1 }}></div>
            <ButtonStyled purple onClick={() => onSubmitAutomatic(onDivideBill)} disabled={disable} style={{ width: '100%' }}>Xác nhận</ButtonStyled>
        </Card >

    </CardStyled>;
}

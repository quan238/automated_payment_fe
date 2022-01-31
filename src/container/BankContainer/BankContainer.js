import { Card } from 'antd';
import React from 'react';
import BankForm from '../../components/BankForm';

export default function BankContainer() {
    return (
        <Card title="Nhập tài khoản ngân hàng Tiki" style={{ margin: '0 20px' }}>
            <BankForm />
        </Card>
    );
}

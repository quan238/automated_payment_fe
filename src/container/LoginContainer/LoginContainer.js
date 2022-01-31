import { Card } from 'antd';
import React from 'react';
import LoginForm from '../../components/LoginForm';

export default function LoginContainer() {
    return (
        <Card title="Nhập tài khoản Tiki" style={{ margin: '0 20px', }}>
            <LoginForm />
        </Card>
    );
}

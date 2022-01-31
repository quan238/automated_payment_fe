import React from 'react';
import { Alert } from 'antd';
export default function ErrorText({ text }) {
    return <Alert style={{ marginBottom: '10px' }} message={text} type="error" showIcon />;
}

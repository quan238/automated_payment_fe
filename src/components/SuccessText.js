import React from 'react';
import { Alert } from 'antd';

export default function SuccessText({ text }) {
    return <Alert message={text} style={{ marginBottom: '10px' }} type="success" showIcon />;
}

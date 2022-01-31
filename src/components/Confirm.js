import { Modal } from 'antd';
import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

export function showPromiseConfirm(callback) {
    confirm({
        title: 'Bạn có muốn chia đơn?',
        icon: <ExclamationCircleOutlined />,
        content: 'File excel của bạn đang trên 10 mã, bạn có muốn chia đơn ?',
        async onOk() {
            await callback()
        },
        onCancel() { },
    });
}

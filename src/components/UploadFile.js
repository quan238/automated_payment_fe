import { Button, Upload } from 'antd';
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { ButtonStyled } from '../stylesheet/Button/Button.styled';
import { uploadAPI } from '../api/upload/uploadAPI';
import { useDispatch } from 'react-redux';
import AppAction from '../action/appAction';
export default function UploadFile() {

    const [uploading, setUploading] = useState(false)
    const [fileList, setFileList] = useState([])
    const dispatch = useDispatch()
    const props = {
        onRemove: file => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList)
        },
        beforeUpload: file => {
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
    };

    const handleUpload = async () => {
        const formData = new FormData();
        fileList.forEach(file => {
            formData.append('files', file);
        });
        setUploading(true)
        console.log(formData)
        // You can use any AJAX library you like
        const clientCode = await uploadAPI(formData)
        await dispatch(AppAction.uploadClientData(clientCode.data))
        setTimeout(() => {
            setUploading(false)
        }, 2000)
    };

    return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Upload style={{ display: 'flex' }} {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <ButtonStyled
            type="primary"
            purple
            onClick={handleUpload}
            disabled={fileList.length === 0 || uploading}
            loading={uploading}
            style={{ marginTop: 16 }}
        >
            {uploading ? 'Uploading' : 'Start Upload'}
        </ButtonStyled>
    </div>
}

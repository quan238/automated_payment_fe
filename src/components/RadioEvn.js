import { Radio } from 'antd';
import React from 'react';

export default function RadioEvn() {
    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return <Radio.Group onChange={onChange} value={value} style={{ marginTop: 20 }}>
        <Radio value={1}>EVN Miền Trung</Radio>
        <Radio value={2}>EVN Hà Nội</Radio>
        <Radio value={3}>EVN HCM</Radio>
        <Radio value={4}>EVN Miền Nam</Radio>
    </Radio.Group>;
}

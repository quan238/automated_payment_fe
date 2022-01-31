import { Card, Col, Row } from 'antd';
import React from 'react';
import BankContainer from '../container/BankContainer/BankContainer';
import LoginContainer from '../container/LoginContainer/LoginContainer';
import MainContainer from '../container/MainContainer/MainContainer';
import { PrimaryTitle } from '../stylesheet/Title/Title.styled';

export default function DashboardPage() {
    return <div style={{ height: '100%' }}>
        <PrimaryTitle center style={{ paddingTop: 10, marginBottom: 50 }}>Thanh Toán Điện Tiki</PrimaryTitle>
        <Row style={{ width: '100%', height: '80vh', padding: '0 20px' }}>
            <Row style={{ width: '40%', display: 'flex', flexDirection: 'row', height: "100%" }}>
                <Col span={24} style={{ height: "40%" }}><LoginContainer /></Col>
                <Col span={24} style={{ height: "60%", padding: '30px 0' }}><BankContainer /></Col>
            </Row>
            <Row style={{ width: '60%', height: "100%" }}>
                <Col span={24}><MainContainer /></Col>
            </Row>
        </Row>
    </div>;
}

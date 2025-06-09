import React from 'react';
import { Button, Layout, Typography, Row, Col, Card } from 'antd';
import {
  SafetyCertificateOutlined,
  MessageOutlined,
  FileSearchOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import MainLayout from "../components/layout/index"

const { Content } = Layout;
const { Title, Paragraph } = Typography;



const features = [
  {
    icon: <MessageOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
    title: 'Real-Time Communication',
    description: 'Keep your crews and PMs connected on every job site.',
  },
  {
    icon: <SafetyCertificateOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
    title: 'Safety Sign-Offs',
    description: 'Digitally manage safety compliance and approvals.',
  },
  {
    icon: <FileSearchOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
    title: 'Blueprint Management',
    description: 'Upload, track, and version control your project drawings.',
  },
  {
    icon: <CheckCircleOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
    title: 'Work Logging',
    description: 'Track job site progress, logs, and daily sign-offs in one place.',
  },
];

const Homepage = () => {

  return (
    <MainLayout>
        <Content style={{ padding: '4rem 2rem', maxWidth: 1000, margin: '0 auto' }}>
      <Row justify="center" style={{ textAlign: 'center' }}>
        <Col span={24}>
          <Title>Build Smarter. Communicate Faster. Stay Safer.</Title>
          <Paragraph type="secondary" style={{ fontSize: '1.2rem' }}>
            Scaffly is the all-in-one digital platform for construction teams to manage safety sign-offs, work logs, real-time communication, and drawing revisions — all in one secure place.
          </Paragraph>
          <Button size="large" type="primary" href="/sign-up">
            Get Started Free
          </Button>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: '4rem' }}>
        {features.map((feature, i) => (
          <Col xs={24} md={12} key={i}>
            <Card bordered={false} style={{ textAlign: 'center', minHeight: 200 }}>
              {feature.icon}
              <Title level={4} style={{ marginTop: '1rem' }}>{feature.title}</Title>
              <Paragraph>{feature.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
    </MainLayout>
  );
};

export default Homepage;


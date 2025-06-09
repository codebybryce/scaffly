import { Content } from "antd/lib/layout/layout";
import { Button, Form, Input, Typography } from "antd";
import { useState } from "react";
const { Title, Paragraph } = Typography;
import MainLayout from "../../components/layout";

export default function SignUpPage() {

  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Here you could connect to backend API
    console.log("Form values:", values);
    message.success("Thanks for signing up, " + values.name + "!");
    form.resetFields();
  };

  const onFinishFailed = () => {
    message.error("Please complete all required fields correctly.");
  };

  return (
    <MainLayout>
      <Content
        style={{
          padding: "50px 24px",
          maxWidth: 600,
          margin: "auto",
          backgroundColor: "white",
          marginTop: 40,
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Title level={2}>Welcome to Scaffly</Title>
        <Paragraph>
          Scaffly is your smart construction project management platform. Manage
          your construction forms, safety sign-offs, architectural plans, and
          team collaboration — all in one place.
        </Paragraph>
        <Paragraph>
          Streamline your workflows, keep your projects on track, and build with
          confidence.
        </Paragraph>

        <Title level={4} style={{ marginTop: 40 }}>
          Sign Up for Early Access
        </Title>

        <Form
          form={form}
          name="signup"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[
              { required: true, message: "Please enter your full name" },
              { min: 2, message: "Name must be at least 2 characters" },
            ]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="email@example.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password placeholder="At least 6 characters" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </MainLayout>

  );
}
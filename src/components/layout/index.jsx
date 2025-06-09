import MainHeader from "./Header";
import MainFooter from "./Footer";

import { Layout } from "antd";

export default function MainLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MainHeader />
      <Layout.Content style={{ padding: "24px", backgroundColor: "#fff" }}>
        {children}
      </Layout.Content>
      <MainFooter />
    </Layout>
  );
}
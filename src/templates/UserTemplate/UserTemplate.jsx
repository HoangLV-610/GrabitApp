import { Layout } from "antd";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router";
import Header from "./components/header/Header";
const { Content } = Layout;

const UserTemplate = () => {
  // const {} = theme.useToken();
  return (
    <Layout className="h-screen bg-white">
      <Header />
      <Content>
        <div
          style={{
            minHeight: "100vh", // Giúp phần content mở rộng theo chiều cao màn hình
            height: "auto",
          }}
          className="h-full"
        >
          <Outlet />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};
export default UserTemplate;

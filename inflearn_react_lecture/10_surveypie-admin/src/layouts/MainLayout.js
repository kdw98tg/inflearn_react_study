import { Layout, Menu } from "antd";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const { Header, Content, Sider } = Layout;

function MainLayout({ selectedKeys, children }) {
  //일종의 캐시를 해주는 훅임
  //오브젝트를 매번 생성하지 않고
  //디팬던시 리스트에 값이 변경되지 않는 이상
  //캐싱된 값을 사용함
  const contentStyle = useMemo(() => {
    return { padding: 45 };
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div
          className="logo"
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255,255,255,0.3)",
          }}
        />

        <Menu
          theme="dark"
          defaultSelectedKeys={["list"]}
          mode="inline"
          selectedKeys={selectedKeys}
        >
          <Menu.Item key="list">
            <Link to="/list"></Link>설문조사 관리
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;

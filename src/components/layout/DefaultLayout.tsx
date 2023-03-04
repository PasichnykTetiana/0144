import "./DefaultLayout.less";

import { Layout } from "antd";
import { type FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "./Loader";
import { Content } from "./Content";

const DefaultLayout: FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Suspense fallback={<Loader />}>
        <Content>
          <Outlet />
        </Content>
      </Suspense>
    </Layout>
  );
};

export { DefaultLayout };

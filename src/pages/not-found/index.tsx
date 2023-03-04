import { type FC } from "react";
import { Button, Result } from "antd";
import { NavLink } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <Result
      title={"Not Found"}
      extra={
        <NavLink to={"/"}>
          <Button key="console" shape="round" size={"large"}>
            HOME
          </Button>
        </NavLink>
      }
    ></Result>
  );
};

export { NotFound as default };

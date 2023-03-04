import "./Comments.less";

import { Col, Row, Typography } from "antd";
import { type FC, useState } from "react";

import { SvgIcon } from "../../../components/icon/SvgIcon";

const Comments: FC<{ arr: FormValues[] }> = ({ arr }) => {
  const [flag, setFlag] = useState(true);

  return (
    <Row className={"comments"} justify={"space-between"}>
      <Col className={"button-block"}>
        <Typography.Title
          onClick={() => {
            setFlag(true);
          }}
          className={`${!flag ? "active" : ""}`}
          level={1}
        >
          Latest reviews
        </Typography.Title>
        <Typography.Title
          onClick={() => {
            setFlag(false);
          }}
          className={`${flag ? "active" : ""}`}
          level={1}
        >
          All reviews
        </Typography.Title>
      </Col>
      <Col className={"icon-block"}>
        <div>
          <SvgIcon type={"comment"} />
          <Typography.Paragraph>{arr.length}</Typography.Paragraph>
        </div>
        <div>
          <SvgIcon type={"like"} />
          <Typography.Paragraph>131</Typography.Paragraph>
        </div>
      </Col>

      {(flag ? arr.slice(-3) : arr).map((it, index) => (
        <Col key={flag ? arr.length + index : index} span={24}>
          <div className={"content"}>
            <Typography.Title level={1}>{it.name}<time>{it.date}</time></Typography.Title>
            <Typography.Paragraph>{it.comment}</Typography.Paragraph>
            <div className={"triangle-border"}></div>
            <div className={"triangle"}></div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export { Comments };

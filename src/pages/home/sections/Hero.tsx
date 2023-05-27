import "./Hero.less";
import img from "./img/img.png";
import { Col, Row, Typography } from "antd";
import { type FC } from "react";

type Text = {
  title: string;
  subtitle: string;
  info: string;
};

const Hero: FC<Text> = ({ title, subtitle, info }) => {
  const data = [
    {
      text: "Manual tour booking",
      number: 11,
      color: "#B1E19B",
    },
    {
      text: "Package tours",
      number: 3,
      color: "#ACE2F8",
    },
    {
      text: "Hotels",
      number: 1,
      color: "#ACE2F8",
    },
  ];

  return (
    <Row className={"hero"}>
      <Col className={"container"} span={24}>
        <div>
          <Row>
            <Col span={5}>
              <div className={"img-container"}>
                <img src={img} alt={"avatar"} />
              </div>
            </Col>
            <Col span={18}>
              <Typography.Title className={"name"} level={1}>
                {title}
              </Typography.Title>
              <Typography.Paragraph className={"subtitle"}>
                {subtitle}
              </Typography.Paragraph>
              <Typography.Paragraph className={'info'}>
                <span>{info}</span>
              </Typography.Paragraph>
            </Col>
          </Row>
          <div className={"services"}>
            <Row justify={"space-between"}>
              <Col span={19}></Col>
              <Col span={5}>
                <Typography.Paragraph className={"title"}>
                  Services
                </Typography.Paragraph>
              </Col>
            </Row>
            <Row>

              <Col span={5}>

              </Col>
              <Col span={19}>
                <div className={"diagram"}>
                  <div>
                    {data.map((it: any, index: any) => {
                      return (
                          <Row key={index} justify={"space-between"}>
                            <Col className={'diagram-content'} span={19}>
                              <Typography.Paragraph>{it.text}</Typography.Paragraph>
                              <div
                                  style={{ backgroundColor: it.color }}
                                  className={"line"}
                              ></div>
                            </Col>
                            <Col span={5}>
                              <Typography.Title level={1}>
                                {it.number}
                              </Typography.Title>
                            </Col>
                          </Row>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Row>


          </div>
          <Row className={"total"}>
            <Col span={19}>
              <Typography.Title level={1}>Total</Typography.Title>
            </Col>
            <Col span={5}>
              <Typography.Title level={1}>15</Typography.Title>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export { Hero };

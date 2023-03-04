import "./MessageInput.less";

import { Button, Col, Row, Form, Input, type FormInstance } from "antd";
import { type FC } from "react";

const MessageInput: FC<{
  onFinish: (data: FormValues) => void;
  form: FormInstance;
}> = ({ onFinish, form }) => {
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "Enter") {
      const elem = document.getElementById("ctrl-enter");
      elem?.click();
    }
  });

  return (
    <Row className={"message-input"} justify={"space-between"}>
      <Col className={"form-block"} span={24}>
        <Form
          name={"data"}
          onFinish={onFinish}
          form={form}
          className={"contact-wrapper"}
        >
          <Form.Item
            name={"comment"}
            rules={[{ required: false, type: "string" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            wrapperCol={{ span: 24, offset: 0 }}
            style={{ marginBottom: 0 }}
          >
            <Button
              id={"ctrl-enter"}
              htmlType={"submit"}
              type="primary"
              shape="round"
              size={"middle"}
            >
              Send a message
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export { MessageInput };

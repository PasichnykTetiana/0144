import { type FC, useState } from "react";
import { Comments, Hero, MessageInput } from "./sections/index";
import moment from 'moment';
import { Form } from "antd";

const Home: FC = () => {
  const [form] = Form.useForm();
  const currentDate = moment().format('D MMM YYYY');

  const [arr, setArr] = useState<FormValues[]>([
    { name: "Ronald Harris", date: "15 Apr 2022", comment: "Hey Eva! You're cool. Nice pic!" },
    { name: "Samuel Jackson", date: "15 Apr 2022", comment: "Hey Eva! You're cool. Nice pic!" },
    {
      name: "Angela Deimon",
      date: "15 Apr 2022",
      comment:
        "Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.",
    },
    {
      name: "Ronald Harris",
      date: "15 Apr 2022",
      comment:
        "Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?",
    },
    { name: "Ronald Harris", date: "15 Apr 2022", comment: "Hey Eva! You're cool. Nice pic!" },
    { name: "Samuel Jackson", date: "15 Apr 2022", comment: "Hey Eva! You're cool. Nice pic!" },
    {
      name: "Angela Deimon",
      date: "15 Apr 2022",
      comment:
        "Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.",
    },
    {
      name: "Ronald Harris",
      date: "15 Apr 2022",
      comment:
        "Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?",
    },
    { name: "Ronald Harris", date: "15 Apr 2022", comment: "Hey Eva! You're cool. Nice pic!" },
    { name: "Samuel Jackson", date: "14 Apr 2022", comment: "Hey Eva! You're cool. Nice pic!" },
    {
      name: "Angela Deimon",
      date: "13 Apr 2022",
      comment:
        "Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.",
    },
    { name: "Samuel Jackson", date: "13 Apr 2022", comment: "Hey Eva! You're cool. Nice pic!" },
    {
      name: "Angela Deimon",
      date: "10 Apr 2022",
      comment:
        "Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.",
    },
    {
      name: "Ronald Harris",
      date: '8 Apr 2022',
      comment:
        "Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?",
    },
  ]);

  const onFinish = (data: FormValues) => {
    if (data.comment) {
      data.name = "Tetiana P.";
      data.date = currentDate
      setArr([...arr, data]);
      form.resetFields();
    }
  };

  return (
    <>
      <Hero
        title={"Eva Jonson"}
        subtitle={"Sales Manager"}
        info={
          "I will find the best offers for you. My services are absolutely free."
        }
      />
      <Comments arr={arr} />
      <MessageInput onFinish={onFinish} form={form} />
    </>
  );
};

export default Home;

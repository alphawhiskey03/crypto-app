import Button from "../component/button";
export default {
  title: "components/Button",
  component: Button,
  argTypes: { handleClick: { action: "ass" } },
};

const Template = (args) => <Button {...args} />;
export const Red = Template.bind({});
Red.args = {
  title: "Red button",
  color: "red",
  size: "lg",
};

export const Blue = Template.bind({});
Blue.args = {
  title: "Blue button",
  color: "blue",
  size: "md",
};
// export const black = () => <Button title="black" />;

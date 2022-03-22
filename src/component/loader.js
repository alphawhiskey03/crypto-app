import { Spin, Alert } from "antd";
const Loader = () => {
  return (
    <div className="loader">
      <Spin tip="loading" />
    </div>
  );
};

export default Loader;

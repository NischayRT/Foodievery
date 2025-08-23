import { useRouteError } from "react-router-dom";
const Image1 = new URL("../Error.png", import.meta.url).href;
const Error = () => {
  const error = useRouteError();
  console.log(Error);
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>Please try again later.</p>
      <img src={Image1} alt="Error Image" />
    </div>
  );
};
export default Error;

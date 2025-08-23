const Image1 = new URL("../none-1.png", import.meta.url).href;
const Image2 = new URL("../none-2.png", import.meta.url).href;

const Empty = () => {
  return (
    <div className="empty-container">
      <div className="sad_img">
        <img className="image1" src={Image1} alt="No Results Found" />
      </div>
      <div className="empty">
        <h1 className="empty-text">No Results Found</h1>
        <img className="image2" src={Image2} alt="No Results Found" />
      </div>
    </div>
  );
};
export default Empty;

const loadingImage = new URL("../loaading.png", import.meta.url).href;

const Shimmer2 = () => {
  return (
    <div className="shimmer">
      <div className="shimmer-header">
        <img className="shimmer-img2" alt="loading" src={loadingImage}></img>
        <h1 className="shimmer-text">
          Loading your Hunger
          <div className="loader"></div>
        </h1>
      </div>
    </div>
  );
};
export default Shimmer2;

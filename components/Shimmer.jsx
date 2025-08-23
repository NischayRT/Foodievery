const loadingImage = new URL("../loaading.png", import.meta.url).href;

const Shimmer = () => {
  return (
    <div className="shimmer">
      <div className="shimmer-header">
        <img className="shimmer-img" alt="loading" src={loadingImage}></img>
        <h1 className="shimmer-text">
          Loading your Hunger
          <div className="loader"></div>
        </h1>
      </div>
      <div className="shimmer-container">
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-image"></div>
        </div>
      </div>
    </div>
  );
};
export default Shimmer;

import carImg from "../imgs/car.png";
import vector from "../imgs/Vector.png";

const Driver = () => {
  return (
    <div className="driver">
      <div className="col1">
        <div className="img-driver">
          <div className="rate">
            <img className="star" src={vector} />
            <p>5.0</p>
          </div>
          <div className="driver-name">
            <p>Fabio D.</p>
          </div>
        </div>
        <img className="car" src={carImg} />
      </div>
      <div className="col2">
        <h2>bcd0d19</h2>
        <p>Honda Civic Roxo</p>
      </div>
    </div>
  );
};

export default Driver;

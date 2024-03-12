import spinner from "../../static/spiner";

import "./style.scss";

const Spinner = () => {
  return (
    <div className="spinner">
      <p>$</p>
      {!spinner.length
        ? null
        : spinner.map((item, index) => {
            return (
              <span
                style={{ transform: `rotate(${index * 15}deg)` }}
                key={index}
              >
                {item.letter}
              </span>
            );
          })}
    </div>
  );
};

export default Spinner;

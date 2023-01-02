import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "services", "contact"].map(
        (
          item,
          index //"blog removed"
        ) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={
              active === item
                ? { backgroundColor: "#030343" }
                : { border: "1px solid #f6eaea" }
            }
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;

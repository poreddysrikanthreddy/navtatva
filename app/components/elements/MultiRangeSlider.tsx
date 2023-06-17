import React, { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const MultiRangeSlider = (props: any) => {
  const [minVal, setMinVal] = useState(props.min);
  const [maxVal, setMaxVal] = useState(props.max);
  // todo
  //const [selectedValue, setSelectedValue] = useState([props.min, props.max])
  const minValRef: any = useRef(null);
  const maxValRef: any = useRef(null);
  const range: any = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: any) => Math.round(((value - props.min) / (props.max - props.min)) * 100),
    [props.min, props.max]
  );

  /* useEffect( () => {
        
    if(props.selectedValue){
      let valueArray = props.selectedValue.split(",")
      setSelectedValue(valueArray)
    }    
    return () => {}
  },[props.selectedValue]) */

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get props.min and props.max values when their state changes
  useEffect(() => {
    props.onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, props.onChange]);

  return (
    <>     
      <input type="text" id="priceRange" readOnly={true}
        value={minVal + " - " + maxVal}
      />
      <div className="range-container">
        <input
          type="range"
          min={props.min}
          max={props.max}
          value={minVal}
          ref={minValRef}
          onChange={(event) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
            event.target.value = value.toString();
          }}
          className={classnames("range-thumb thumb--zindex-3", {
            "thumb--zindex-5": minVal > props.max - 100
          })}
        />
        <input
          type="range"
          min={props.min}
          max={props.max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event) => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
            event.target.value = value.toString();
          }}
          className="range-thumb thumb--zindex-4"
        />

        <div className="range-slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
        </div>
      </div>
    </>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { NavItem } from "react-bootstrap";
import { addAbortSignal } from "stream";
import MultiRangeSlider from "../elements/MultiRangeSlider";

const CategoryBox = (props: any,) => {

  const route = useRouter();
  const [active, setActive] = useState<boolean>(true);
  const [propsData, setPropsData] = useState<any>([])
  const [priceRange, setPriceRange] = useState<string>("")

  useEffect(() => {
    if (props?.reset) {
      setActive(true)
      props.setReset(false)

    }
  })

  const handle = (index: any, value: any) => {


    if (props.data[index].isSelected) {
      props.data[index].isSelected = false;
      setPropsData([...propsData, props])

    }
    else {
      props.data[index].isSelected = true;
      setPropsData([...propsData, props])
    }

    const currentPath = route.pathname;
    const currentQuery = {...route.query};
    currentQuery[props.name] = value;

    route.replace({
        pathname: currentPath,
        query: currentQuery,
    });

  }

  const handlePriceRange = () => {
    const currentPath = route.pathname;
    const currentQuery = {...route.query};
    currentQuery.price = priceRange;
    route.replace({
        pathname: currentPath,
        query: currentQuery,
    });
  }

  return (
    <div className="category-box"  onClick={() => setActive(!active)}>
      <h5 className="category-box-title">{props.title}
        <button type="button" className="float-end categoty-btn">
          <i className="fas fa-angle-down fa-fw"></i>
        </button>
      </h5>
      <div className={"category-area" + (active ? " active" : "") + (props?.name == "color" ? " category-color" : "")}>
        {
          props?.data?.map((item: any, index: number) => {
            return (
              <label key={index} className="radio-container">{item.name}
                {
                  item?.color_code && (
                    <b className="color-radio" style={{ background: item.color_code }}></b>
                  )
                }
                <input type="radio" name={props.name} value={item.name} defaultChecked={(item.value ?? item.name) == props.selectedValue} onClick={() => handle(index, item.value ?? item.name)} />
                <span className="radio-checkmark"></span>
              </label>
            )
          })
        }
        {
          props?.name == "price" && (
            <>
              <div style={{ marginTop: "15%" }} className="mb-4 price-range-filter">
                <MultiRangeSlider
                  min={500}
                  max={10000}
                  onChange={({ min, max }) => setPriceRange(`${min},${max}`)}
                  /* selectedValue={props.selectedValue} */
                />
              </div>

              <button type="button" className="btn btn-sm w-100"
                onClick={() => handlePriceRange()}
              >
                Set Price
              </button>

            </>
          )
        }
      </div>
    </div>
  )
}

export default CategoryBox;
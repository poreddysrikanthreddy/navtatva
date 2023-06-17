import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface iProps {
  loading: boolean;
}

const Spinner = (props: iProps) => {
  return (
    <>
      {props.loading && (
        <div style={{ marginLeft: 430, marginTop: 100 }}>
          <div className="text-center">
            <div style={{ marginBottom: 400 }}>
              {props.loading && (
                <ClipLoader loading={props.loading} size={100} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Spinner;

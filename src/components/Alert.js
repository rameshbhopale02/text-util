import React from "react";

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height: '50px'}}>
        {props.alert && <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <stron>{capitalize(props.alert.type)}</stron> : {props.alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>}
    </div>
    
  );
}

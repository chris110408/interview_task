import React from "react";
import { string, func, element, oneOfType } from "prop-types";

import { convertArrToJson, ParseFile } from "./fns";

const CSVParser = ({ label, onFileLoaded, filterCallback }) => {
  const handleChangeFile = e => {
    let reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = event => {
      // get object which include header and data array
      const arrayObj = ParseFile(event.target.result, filterCallback);

      const JsonData = convertArrToJson(arrayObj.data, arrayObj.header);
      onFileLoaded(JsonData, arrayObj.header);
    };
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <input
        style={{ marginLeft: 10 }}
        type="file"
        accept=".csv, text/csv"
        onChange={e => handleChangeFile(e)}
      />
    </div>
  );
};

CSVParser.propTypes = {
  label: oneOfType([string, element]),
  onFileLoaded: func.isRequired,
  filterCallback: func.isRequired
};

export default CSVParser;

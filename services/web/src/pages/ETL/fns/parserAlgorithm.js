const ParseFile = (strData, filterCallback) => {
  const universalNewline = /\r\n|\r|\n/g;
  const strDelimiter = ",";
  const strRows = strData.split(universalNewline);
  const arrayRows = strRows.map(item => item.split(strDelimiter));
  //get the header (the first line)
  const header = arrayRows[0] ? arrayRows[0] : null;
  //get unfiltered data
  const dirtyData = arrayRows[1] ? arrayRows.slice(1) : null;
  // use the callback from outSide to filter data
  const Data = dirtyData.filter(item => {
    return filterCallback(item);
  });

  return {
    header: header,
    data: Data
  };
};

const convertArrToJson = (Data, Header) => {
  return Data.map(item => {
    return Header.reduce((Object, key, Index) => {
      Object[key] = item[Index];
      return Object;
    }, {});
  });
};

export { convertArrToJson, ParseFile };

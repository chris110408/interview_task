

const strictSearch = (criteriaObj, customers) => {
  if (Object.keys(criteriaObj).length === 0) {
    return customers;
  }
  return customers.filter(item => {
    return Object.keys(criteriaObj).reduce((shouldShow, key) => {
      if (shouldShow) {
        //check date is same day
        if(key == 'created_at'){
          return criteriaObj[key].isSame(item[key], 'day');
        }

        //if searchCriteria has been strictly meet
        if (criteriaObj[key] === item[key]) {
          return true;
        }
      }
      return false;
    }, true);
  });
};


const fuzzySearch = (criteriaObj, customers) => {
  if (Object.keys(criteriaObj).length === 0) {
    return customers;
  }
  return customers.filter(item => {
    return Object.keys(criteriaObj).reduce((shouldShow, key) => {

      const criteriaVal = criteriaObj[key]
      const itemVal = item[key]
      if (shouldShow) {
        //email or first name contains some chars
        if(key == 'email'||key == 'first_name'){
          return itemVal.indexOf(criteriaVal)>=0
        }
        //ip contains the search val and need to match from the 1st number
        if(key == 'ip'){
          return itemVal.indexOf(criteriaVal)===0
        }

        if(key == 'latitude'){
          return criteriaObj[key] === item[key];
        }

        if(key == 'created_at'){
          return criteriaObj[key].isSame(item[key], 'day');
        }
      }
      return false;
    }, true);
  });
};




export { strictSearch,fuzzySearch }

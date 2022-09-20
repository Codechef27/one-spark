export const getRecord = () => {
    const savedRecord = localStorage.getItem('saved_records')
      ? JSON.parse(localStorage.getItem('saved_records'))
      : [];
  
    return savedRecord;
  };
  
  export const saveRecord = (recordArr) => {
    if (recordArr.length) {
      localStorage.setItem('saved_records', JSON.stringify(recordArr));
    } 
  };
  
  export const removeRecord = (record) => {
    const savedRecord = localStorage.getItem('saved_records')
      ? JSON.parse(localStorage.getItem('saved_records'))
      : null;
  
    if (!savedRecord) {
      return false;
    }
  
    const updatedSavedRecord = savedRecord?.filter((savedRecord) => savedRecord !== record);
    localStorage.setItem('saved_records', JSON.stringify(updatedSavedRecord));
  
    return true;
  };
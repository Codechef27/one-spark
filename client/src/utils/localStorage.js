export const getRecordIds = () => {
    const savedRecordIds = localStorage.getItem('saved_records')
      ? JSON.parse(localStorage.getItem('saved_records'))
      : [];
  
    return savedRecordIds;
  };
  
  export const saveRecordIds = (recordIdArr) => {
    if (recordIdArr.length) {
      localStorage.setItem('saved_records', JSON.stringify(recordIdArr));
    } else {
      localStorage.removeItem('saved_records');
    }
  };
  
  export const removeRecordId = (recordId) => {
    const savedRecordIds = localStorage.getItem('saved_records')
      ? JSON.parse(localStorage.getItem('saved_records'))
      : null;
  
    if (!savedRecordIds) {
      return false;
    }
  
    const updatedSavedRecordIds = savedRecordIds?.filter((savedRecordId) => savedRecordId !== recordId);
    localStorage.setItem('saved_records', JSON.stringify(updatedSavedRecordIds));
  
    return true;
  };
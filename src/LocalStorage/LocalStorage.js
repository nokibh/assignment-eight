import { toast } from 'react-toastify';
const saveToLocalStorage = data => {
  const saveData = JSON.parse(localStorage.getItem('book')) || [];

  const existedData = saveData.find(item => item.id == data.id);
  if (!existedData) {
    saveData.push(data);
    toast('Your book has been added');
    localStorage.setItem('book', JSON.stringify(saveData));
  } else {
    toast('Added Done');
  }
};
const saveToLocalStorage2 = data => {
  console.log(data);
  const saveData = JSON.parse(localStorage.getItem('book')) || [];
  const saveData3 = JSON.parse(localStorage.getItem('wish')) || [];
  const existedData = saveData3.find(item => item.id == data.id);
  const read = saveData.find(item => item.id == data.id);

  if (!existedData && !read) {
    saveData3.push(data);
    toast('Your book has been added');
    localStorage.setItem('wish', JSON.stringify(saveData3));
  } else {
    toast('already have data');
  }
};

export { saveToLocalStorage, saveToLocalStorage2 };

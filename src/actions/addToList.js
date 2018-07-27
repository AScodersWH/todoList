const addToLists = name => ({
  type: 'addToLists',
  payload: {
    name: name,
    flag: false,
    id: Date.now()
  }
});

export default addToLists;

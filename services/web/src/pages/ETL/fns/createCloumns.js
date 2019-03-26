const createColumns = Header => {
  return Header.map(Item => ({
    title: Item,
    dataIndex: Item
  }));
};

export { createColumns };

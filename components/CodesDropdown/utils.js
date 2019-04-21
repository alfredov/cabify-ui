export function orderItemsByPrefixSelected(items, prefix) {
  const item = items.find(value => (value.prefix === prefix));
  return items.reduce((collection, value) => {
    if (value.prefix !== prefix) {
      return [...collection, value];
    }
    return collection;
  }, [item]);
}

export default {
  orderItemsByPrefixSelected,
};

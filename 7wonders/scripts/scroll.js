function scrollToItem(itemId) {
  const item = document.getElementById(itemId);
  if (item) {
    item.scrollIntoView({ behavior: "smooth" });
  }
}

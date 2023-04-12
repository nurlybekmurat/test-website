const select = document.querySelector("#system-type");

const choices = new Choices(select, {
  searchEnabled: false,
  itemSelectText: "",
  renderSelectedChoices: "auto",
});

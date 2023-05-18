addButton2.addEventListener("click", () => {
  const name = inputName.value.trim();
  const surname = inputSurname.value.trim();
  if (name !== "" && surname !== "") {
    const row = tableBody.insertRow();
    const cellName = row.insertCell();
    const cellSurname = row.insertCell();
    cellName.textContent = name;
    cellSurname.textContent = surname;
    inputName.value = "";
    inputSurname.value = "";
  }
});

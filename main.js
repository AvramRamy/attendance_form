let names = [];

function addName() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();
    if (name) {
        names.push(name);
        updateNameList();
        nameInput.value = '';
    }
}

function updateNameList() {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = '';
    names.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
    });
}

function downloadExcel() {
    const csvContent = "data:text/csv;charset=utf-8,Name\n" + names.map(name => `${name}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "attendance.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

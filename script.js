function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "123") {
    alert("Login berhasil!");
    window.location.href = "insert.html";
  } else {
    alert("Username atau password salah!");
  }
}

function simpanData() {
  const NoTP = document.getElementById("NoTP").value;
  const JudulTP = document.getElementById("JudulTP").value;
  const MKTP = document.getElementById("MKTP").value;

  if (!NoTP || !JudulTP || !MKTP) {
    alert("Semua data wajib diisi!");
    return;
  }

  const barang = { NoTP, JudulTP, MKTP };
  let data = JSON.parse(localStorage.getItem("tpList")) || [];
  data.push(barang);
  localStorage.setItem("tpList", JSON.stringify(data));

  alert("Data berhasil disimpan!");
  window.location.href = "show.html";
}

function tampilkanData() {
  const data = JSON.parse(localStorage.getItem("tpList")) || [];
  const tbody = document.getElementById("tabelData");
  tbody.innerHTML = "";

  data.forEach((barang, index) => {
    const row = `
      <tr>
        <td>${barang.NoTP}</td>
        <td>${barang.JudulTP}</td>
        <td>${barang.MKTP}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// INSERT DATA
function updateData() {
const document = getElementById("editId").value = id;
  const NoTP = document.getElementById("NoTP").value;
  const JudulTP = document.getElementById("JudulTP").value;
  const MKTP = document.getElementById("MKTP").value;

  if (!NoTP || !JudulTP || !MKTP) {
    alert("Semua data wajib diisi!");
    return;
  }

  const barang = { editId, NoTP, JudulTP, MKTP };
  let data = JSON.parse(localStorage.getItem("tpList")) || [];
  data.parse(barang);
  localStorage.setItem("tpList", JSON.stringify(data));

  alert("Data berhasil disimpan!");
  window.location.href = "show.html";
}

function removeData(id){
    bookList = JSON.parse(localStorage.getItem('listItem3')) ?? []
    bookList = bookList.filter(function(value){ 
        return value.id != id; 
    });
    // localStorage.clear();
    localStorage.setItem('listItem3', JSON.stringify(bookList))
    allData()
}
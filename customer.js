import {initializeApp} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnlaQLyww-8x8bouHqedVnfw0ocH1xTu0",
  authDomain: "cs-data-572d4.firebaseapp.com",
  databaseURL: "https://cs-data-572d4-default-rtdb.firebaseio.com",
  projectId: "cs-data-572d4",
  storageBucket: "cs-data-572d4.firebasestorage.app",
  messagingSenderId: "677651161944",
  appId: "1:677651161944:web:4cac4589b8f7383b8d7b2d",
};

const app = initializeApp(firebaseConfig);

import {getDatabase, ref, set, get, child, update, remove} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const db = getDatabase();

const name = document.getElementById("name");
const add = document.getElementById("address");
const phone = document.getElementById("telephone");
const sl = document.getElementById("quantity");

const addButtonEl = document.getElementById("button");

function addData() {
  set(ref(db, "dlKhachHang/" + phone.value), {
    Tên_khách_hàng: name.value,
    Địa_chỉ: add.value,
    Số_lượng_sản_phẩm: Number(sl.value),
  })
    .then(() => {
      alert("Mua hàng thành công");
    })
    .catch((error) => {
      alert("Mua hàng thất bại, tải lại trang để thử lại");
      console.log(error);
    });

  addButtonEl.addEventListener('click', addData);
}

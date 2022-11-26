function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  console.log(e);

  let checkbox = document.getElementById('check');
  let text = document.getElementById('text');

  if (checkbox.checked) {
    text.style.backgroundColor = "#ff0000";
  } else {
    text.style.backgroundColor = "";
  }
}

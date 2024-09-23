// jQueryを使って、ボタンがクリックされたときにテキストボックスの値を変更
$(document).ready(function() {
  $(".btn").click(function() {
    $(".text-box").val("クリックしました！");
  });
});

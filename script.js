var $ = require("jquery");
var itemLists = require("./itemLists.js")

console.log(itemLists);

$(function() {
  var $itemListSelect = $("#new .itemList");
  $itemListSelect.empty();
  $itemListSelect.append($("<option></option>").val(null).html("Select one..."));
  $.each(itemLists, function(k, v) {
    console.log(v.name);
    $itemListSelect.append($("<option></option>").val(k).html(v.name));
  });
  $itemListSelect.on("change", function(){
    console.log(itemLists[$itemListSelect.val()]);
  })
});

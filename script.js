var $ = require("jquery");
var itemLists = require("./itemLists.js")

console.log(itemLists);

$(function() {
  (function(){
    // New page code
    var $itemListSelect = $("#new .itemList");
    var $boxList = $("#new .boxList");
    var $submitBox = $("#new .submitBox");
    var $submit = $("#new .submit");
    var $nextStep = $("#new .nextStep");
    var $linkInput = $("#new .linkInput");
    $itemListSelect.empty();
    $itemListSelect.append($("<option></option>").val(null).html("Select one..."));
    $.each(itemLists, function(k, v) {
      console.log(v.name);
      $itemListSelect.append($("<option></option>").val(k).html(v.name));
    });
    $itemListSelect.on("change", function(){
      $itemListSelect.attr("disabled", "disabled");
      var list = itemLists[$itemListSelect.val()].list;
      $boxList.empty()
      var table = "<p>2. Fill in the price you're willing to pay per item</p>\n"
        + "<table><thead><tr><th>Item Name</th><th>Price Per Unit (isk)</th></tr></thead><tbody>";
      $.each(list, function(k, v) {
        table += "<tr><td>" + v + "</td><td><input type='text' class='price'></td></tr>";
      });
      table += "</tbody></table>";
      $boxList.append($(table));
      $submitBox.show();
    });
    $submit.on("click", function() {
      $nextStep.show();
      var data = [];
      $("#new .price").each(function(k, v) {
        if(v.value.trim() == "") {
          v.value = "0";
        }
        data.push(v.value);
      });
      $linkInput.val(location.href + "?l=" + $itemListSelect.val() + "&d=" + data.join(","));
    });
  })();
});

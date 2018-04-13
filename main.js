var $ = require("jquery");
var queryString = require("query-string").parse(location.search);
var itemLists = require("./itemLists.js")

function showNewScreen() {
  $("#new").show();
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
      + generatePriceListTable(list, null);
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
}

function generatePriceListTable(list, prices) {
  var table = "<table><thead><tr><th>Item Name</th><th>Price Per Unit (isk)</th></tr></thead><tbody>";
  $.each(list, function(k, v) {
    table += "<tr><td>" + v + "</td><td><input type='text' class='price'";
    if(prices != null) {
      if(prices[k].trim() == "") {
        prices[k] = "0";
      }
      table += "value='" + prices[k] + "'";
    }
    table += "></td></tr>";
  });
  table += "</tbody></table>";
  return table;
}

function parseItemList(text) {
  var ret = [];
  var rows = text.split(/\n|\r\n|\n\r/);
  $.each(rows, function(k, row) {
    var cells = row.split("\t");
    ret.push({"name": cells[0].trim(), "qty": cells[1].trim()});
  });
  return ret;
}

function removeUnrecognizedItems(items) {
  var list = itemLists[queryString["l"]];
  var ret = [];
  var rows = items.split(/\n|\r\n|\n\r/);
  $.each(rows, function(k, row) {
    var cells = row.split("\t");
    var found = false;
    $.each(list.list, function(k, v) {
      if(cells[0].trim() == v) {
        found = true;
        return false;
      }
    });
    if(found) {
      ret.push(row);
    }
  });
  return ret.join("\n");
}


$(function() {
  console.log(queryString["l"] === undefined);
  if(queryString["l"] !== undefined && queryString["e"] !== undefined) {
    (function() {
      console.log("Existing page with edit");
      // Existing page with edit
    })();
  } else if(queryString["l"] !== undefined && queryString["e"] === undefined){
      (function(){
        console.log("Existing page with process");
        // Existing page with process
        var $process = $("#process");
        var $priceTable = $("#process .priceTable");
        var $inventoryList = $("#process .inventoryList");
        var $unexpected = $("#process .unrecognizedItemInBaggingArea");
        var $result = $("#process .result");
        var $resultNumber = $("#process .resultNumber");
        var $unrecognizedButton = $("#process .unrecognizedButton");
        $process.show();
        var list = itemLists[queryString["l"]];
        var priceList = queryString["d"].split(",");
        var table = generatePriceListTable(list.list, priceList);
        $priceTable.append($(table));
        $("#process .price").attr("disabled", "disabled");
        $unrecognizedButton.on("click", function() {
          $inventoryList.val(removeUnrecognizedItems($inventoryList.val().trim()));
          $unexpected.hide();
        });
        $inventoryList.on("paste change keyup", function() {
          var userItemList = parseItemList($inventoryList.val().trim());
          var total = 0;
          $unexpected.hide();
          $.each(userItemList, function(k, v) {
            var found = false;
            $.each(list.list, function(m, n) {
              if(v.name == n) {
                found = true;
                total += v.qty * priceList[m];
                return false;
              }
            });
            if(!found) {
              console.log("Item not found");
              $unexpected.show();
            }
          });
          console.log("Done processing: " + total);
          $result.show();
          $resultNumber.text(total);
        });
      })();
  } else {
    (function(){
      console.log("New page");
      // New page code
      showNewScreen();
    })();
  }
});

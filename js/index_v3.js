/*
  Filename: index_v3.js
  Author: Daniel Lenselink
  Date: 2017-03-20
*/

// GLOBAL VARIABLES and DECLARATIONS
var $table = $('#data_table');
var $button_A = $('#toggle_button');
var $button1 = $('#compare_button');
var $button2 = $('#refresh_button');
var $button3 = $('#remove_button');
var $button4 = $('#chart_button');

// CALL loadData() on DOCUMENT.READY
$(document).ready(function(){
  loadData();
});

// DEFINE loadData()
$(function loadData() {
  $.getJSON('data/raw_data.json', function(chart_data) {
    
  });
});

// CHANGE ROW COLOR WHEN CHECKED
$('#data_table').on('check.bs.table', function (e, row, $element) {
  $('.success').removeClass('success');
  $($element).addClass('success');
});

// BUTTON_A, BUTTON_B
$(function () {
  $button_A.click(function () {
    /*document.getElementById('table_container').style.display = "block";*/
    $("#table_wrapper").slideToggle();
    $('html,body').animate({
        scrollTop: $("#table_wrapper").offset().top},
        'slow');
    });
});

// BUTTON1 --> HIDE ALL UNCHECKED ROWS
$(function () {
  $button1.click(function () {
    var names = $.map($table.bootstrapTable('getSelections'), function (row) {
      return row.name;
    });
    $table.bootstrapTable('filterBy', {
      name: names
    });
  });
});

// BUTTON2 --> REFRESH
$(function () {
    $button2.click(function () {
        $table.bootstrapTable('refresh');
    });
});

// BUTTON3 --> REMOVE CHECKED ROWS
$(function () {
  $button3.click(function () {
    var names = $.map($table.bootstrapTable('getSelections'), function (row) {
      return row.name;
    });
    $table.bootstrapTable('remove', {
      field: 'name',
      values: names
    });
  });
});

//BUTTON4 --> DISPLAY FLIGHT PATH IMAGE
$(function () {
  $button4.click(function () {
    var data = $table.bootstrapTable('getSelections');
    var ids = $.map(data, function (item) {
      $(function() {
        swal({
          title: item.name + " Flight Chart",
          imageUrl: 'img/' + item.name + '.PNG',
          showCancelButton: true,
          cancelButtonText: 'SHOP',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'GO BACK',
          confirmButtonClass: 'btn btn-warning',
          buttonsStyling: true,
        }).then(function () {
          swal({
            type: "success",
            text: "Returning to table...",
            showConfirmButton: false,
          })
        },
        function (dismiss) {
          if (dismiss === 'cancel') {
            swal({
              imageUrl: 'img/GOTTA_GO.PNG',
              html:
                '<a href="http://www.gottagogottathrow.com/"><b>Gotta Go Gotta Throw</b></a>',
              showConfirmButton: false,
            })
          }
        });
      });
    });
  });
});

//CHART 1
$(function () {
  Highcharts.chart('chart_1', {
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45
          }
      },
      title: {
          text: 'Disc Power Rating Distribution'
      },
      subtitle: {
          text: 'Drivers'
      },
      plotOptions: {
          pie: {
              innerSize: 100,
              depth: 45
          }
      },
      series: [{
          name: 'Discs',
          data: [
              ['Power 6', 47],
              ['Power 5', 74],
              ['Power 4', 31],
              ['Power 3', 4]
          ]
      }]
  });
});

//CHART 2
$(function () {
  Highcharts.chart('chart_2', {
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45
          }
      },
      title: {
          text: 'Low Speed Stability (LSS) Distribution'
      },
      subtitle: {
          text: 'Range: 0 to 5'
      },
      plotOptions: {
          pie: {
              innerSize: 100,
              depth: 45
          }
      },
      series: [{
          name: 'Discs',
          data: [
              ['LSS 5', 1],
              ['LSS 4.5', 7],
              ['LSS 4', 14],
              ['LSS 3.5', 37],
              ['LSS 3', 69],
              ['LSS 2.5', 20],
              ['LSS 2', 7],
              ['LSS 1.5', 0],
              ['LSS 1', 1],
              ['LSS 0.5', 0],
              ['LSS 0', 0]
          ]
      }]
  });
});

//CHART 3
$(function () {
  Highcharts.chart('chart_3', {
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45
          }
      },
      title: {
          text: 'High Speed Stability (HSS) Distribution'
      },
      subtitle: {
          text: 'Range: -3 to 3'
      },
      plotOptions: {
          pie: {
              innerSize: 100,
              depth: 45
          }
      },
      series: [{
          name: 'Discs',
          data: [
              ['HSS 3', 0],
              ['HSS 2.5', 0],
              ['HSS 2', 1],
              ['HSS 1.5', 0],
              ['HSS 1', 4],
              ['HSS 0.5', 5],
              ['HSS 0', 30],
              ['HSS -0.5', 23],
              ['HSS -1', 26],
              ['HSS -1.5', 17],
              ['HSS -2', 34],
              ['HSS -2.5', 10],
              ['HSS -3', 5],             
          ]
      }]
  });
});

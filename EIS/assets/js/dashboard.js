/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>
*/
 /**
 *  Dashboard Controllers
    The given below code will render all the charts that you see when the file is loaded
 */
//Creating the users chart for the no. of user that visited in that month

$(document).ready(function() {

  //Creating Visistor Type Chart for that month
  $("#visitor-chart-container").insertFusionCharts({
    type: 'angulargauge',
    id: 'chart6',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "REV VS TARGET",
        "gaugeFillMix": "{light+0}",
        "lowerLimit": "0",
        "upperLimit": "2000",
        "lowerLimitDisplay": "0(M)",
        "upperLimitDisplay": "2000(M)",
        "numberSuffix": "(M)",
        "showTickMarks": "1",
        "showTickValues": "1",
        "minorTMNumber": "3",
        "minorTMColor": "#527a7a",
        "minorTMThickness": "3",
        "minorTMHeight": "5",
        "majorTMThickness": "3",
        "majorTMHeight": "9",
        "gaugeFillRatio": "15",
        "theme": "zune",
        "showTickValues": "1",
        "placeTicksInside": "1",
        "placeValuesInside": "1",
        "pivotRadius": "10",
        "pivotFillColor": "#5599CC",
        "pivotFillAlpha": "100",
        "valueBelowPivot": "1",
        "captionPadding": "30"

      },
      "colorRange": {
        "color": [{
          "minValue": "0",
          "maxValue": "1702",
          "code": "#e44a00"
        }, {
          "minValue": "1703",
          "maxValue": "2000",
          "code": "#6baa01"
        }]
      },
      "dials": {
        "dial": [{
          "value": penjualan1
        }]
      },

      "annotations": {
        "showBelow": "0",
        "autoScale": "1",
        "groups": [{
          "items": [{
            "id": "movieText",
            "type": "text",
            "showBorder": "0",
            "fontColor": "#000000",
            "x": "$gaugeCenterX",
            "y": "$gaugeStartY-10",
            "fontSize": "18"
          }]
        }]
      }
    }
  });

  $("#visitor-chart-container1").insertFusionCharts({
    type: 'angulargauge',
    id: 'chart6',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "INV FG SO TARGET",
        "gaugeFillMix": "{light+0}",
        "lowerLimit": "7",
        "upperLimit": "10",
        "showTickValues": "1",
        "minorTMNumber": "3",
        "minorTMColor": "#527a7a",
        "minorTMThickness": "3",
        "minorTMHeight": "5",
        "majorTMThickness": "3",
        "majorTMHeight": "9",
        "gaugeFillRatio": "15",
        "theme": "zune",
        "showTickValues": "1",
        "placeTicksInside": "1",
        "placeValuesInside": "1",
        "pivotRadius": "10",
        "pivotFillColor": "#5599CC",
        "pivotFillAlpha": "100",
        "valueBelowPivot": "1",
        "captionPadding": "30"

      },
      "colorRange": {
        "color": [{
          "minValue": "7",
          "maxValue": "8",
          //"code": "#e44a00"
        }, {
          "minValue": "8",
          "maxValue": "9",
          //"code": "#f8bd19"
        }, {
          "minValue": "9",
          "maxValue": "10",
          //"code": "#6baa01"
        }]
      },
      "dials": {
        "dial": [{
          "value": "9.8"
        }]
      },

      "annotations": {
        "showBelow": "0",
        "autoScale": "1",
        "groups": [{
          "items": [{
            "id": "movieText",
            "type": "text",
            "showBorder": "0",
            "fontColor": "#000000",
            "x": "$gaugeCenterX",
            "y": "$gaugeStartY-10",
            "fontSize": "18"
          }]
        }]
      }
    }
  });

  //Creating Gender Chart for that month
  $("#profitloss-chart-container").insertFusionCharts({
    type: 'msline',
    id: 'chart7',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "subCaption": "2012-2016",
        "theme": "zune",
        "showhovereffect": "1",
        "xAxisName": "Years",
        "showValues": "0",
        "numbersuffix": "%",
        "drawCrossLine": "1",
        "crossLineAlpha": "100",
        "crossLineColor": "#cc3300"
      },
      "categories": [{
        "category": [{
            "label": "2012"
          }, {
            "label": "2013"
          }, {
            "label": "2014"
          }, {
            "label": "2015"
          }, {
            "label": "2016"
          }

        ]
      }],
      "dataset": [{
        "seriesname": "LR RKAP",
        "anchorBgColor": "#876EA1",
        "data": [{
            "value": "62"
          }, {
            "value": "64"
          }, {
            "value": "64"
          }, {
            "value": "66"
          }, {
            "value": "78"
          }
        ]
      }, {
        "seriesname": "LR",
        "anchorBgColor": "#72D7B2",
        "data": [{
          "value": "16"
        }, {
          "value": "18"
        }, {
          "value": "24"
        }, {
          "value": "26"
        }, {
          "value": "32"
        }]
      }]
    }
  });

  //Creating Traffic Soucres Chart for that month
  $("#revcogs-chart-container").insertFusionCharts({
    type: 'bar2d',
    id: 'chart8',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {
                "numberPrefix": "$",
                "numberSuffix": "B",
                "placeValuesInside": "0",
                "showAxisLines": "1",
                "axisLineAlpha": "25",
                "alignCaptionWithCanvas": "0",
                "showAlternateVGridColor": "0",
                "theme":"zune"

            },

            "data": [
                {
                    "label": "Rev",
                    "value": "38"
                },
                {
                    "label": "Cogs",
                    "value": "8"
                }
            ]
        }
    });

  //Creating Age Group Chart for that month , this tells the different age group of people that visited the site in that month
  $("#productionprogress-chart-container").insertFusionCharts({
    type: 'msline',
    id: 'chart9',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "subCaption": "2012-2016",
        "theme": "zune",
        "showhovereffect": "1",
        "xAxisName": "Years",
        "showValues": "0",
        "numbersuffix": "%",
        "drawCrossLine": "1",
        "crossLineAlpha": "100",
        "crossLineColor": "#cc3300"
      },
      "categories": [{
        "category": [{
            "label": "2012"
          }, {
            "label": "2013"
          }, {
            "label": "2014"
          }, {
            "label": "2015"
          }, {
            "label": "2016"
          }

        ]
      }],
      "dataset": [{
        "seriesname": "Alpha",
        "anchorBgColor": "#876EA1",
        "data": [{
            "value": "62"
          }, {
            "value": "64"
          }, {
            "value": "64"
          }, {
            "value": "66"
          }, {
            "value": "78"
          }

        ]
      }, {
        "seriesname": "Beta",
        "anchorBgColor": "#72D7B2",
        "data": [{
          "value": "16"
        }, {
          "value": "18"
        }, {
          "value": "24"
        }, {
          "value": "26"
        }, {
          "value": "32"
        }]
      }, {
        "seriesname": "Gamma",
        "anchorBgColor": "#77BCE9",
        "data": [{
          "value": "20"
        }, {
          "value": "22"
        }, {
          "value": "27"
        }, {
          "value": "22"
        }, {
          "value": "29"
        }]
      }]

    }
  });
  $("#agingsales-chart-container").insertFusionCharts({
    type: 'msline',
    id: 'chart9',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "subCaption": "2012-2016",
        "theme": "zune",
        "showhovereffect": "1",
        "xAxisName": "Years",
        "showValues": "0",
        "numbersuffix": "%",
        "drawCrossLine": "1",
        "crossLineAlpha": "100",
        "crossLineColor": "#cc3300"
      },
      "categories": [{
        "category": [{
            "label": "2012"
          }, {
            "label": "2013"
          }, {
            "label": "2014"
          }, {
            "label": "2015"
          }, {
            "label": "2016"
          }

        ]
      }],
      "dataset": [{
        "seriesname": "Alpha",
        "anchorBgColor": "#876EA1",
        "data": [{
            "value": "62"
          }, {
            "value": "64"
          }, {
            "value": "64"
          }, {
            "value": "66"
          }, {
            "value": "78"
          }

        ]
      }, {
        "seriesname": "Beta",
        "anchorBgColor": "#72D7B2",
        "data": [{
          "value": "16"
        }, {
          "value": "18"
        }, {
          "value": "24"
        }, {
          "value": "26"
        }, {
          "value": "32"
        }]
      }, {
        "seriesname": "Gamma",
        "anchorBgColor": "#77BCE9",
        "data": [{
          "value": "20"
        }, {
          "value": "22"
        }, {
          "value": "27"
        }, {
          "value": "22"
        }, {
          "value": "29"
        }]
      }]

    }
  });

  //----------------------------------------------------------------------------
  //PRODUK UTAMA
  //----------------------------------------------------------------------------

  $("#produkutama-chart-container").insertFusionCharts({
    type: 'cylinder',
    id: 'chart9',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {

        "lowerLimit": "0",
        "upperLimit": "25",
        "lowerLimitDisplay": "Empty",
        "upperLimitDisplay": "Full",
        "numberSuffix": " ltrs",
        "showValue": "0",
        "cylFillColor": "#ffff00",
        "plottooltext": "<div id='valueDiv'> Level Indicator: $datavalue</div>",
        "theme": "zune",
        "alignCaptionWithCanvas": "1",
        "cylRadius": "55"
      },
      "value": stok1
    },
    "events": {
      "rendered": function(evtObj, argObj) {
        setInterval(function() {
          var num = parseInt(Math.random() * (24 - 1) + 1);
          FusionCharts("fuelMeter").feedData("&value=" + num);
        }, 3000);
      }
    }
  });

  $("#produkutama2-chart-container").insertFusionCharts({
    type: 'cylinder',
    id: 'chart9',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {

        "lowerLimit": "0",
        "upperLimit": "25",
        "lowerLimitDisplay": "Empty",
        "upperLimitDisplay": "Full",
        "numberSuffix": " ltrs",
        "showValue": "0",
        "cylFillColor": "#ffff00",
        "plottooltext": "<div id='valueDiv'> Level Indicator: $datavalue</div>",
        "theme": "zune",
        "alignCaptionWithCanvas": "1",
        "cylRadius": "55"
      },
      "value": "10"
    },
    "events": {
      "rendered": function(evtObj, argObj) {
        setInterval(function() {
          var num = parseInt(Math.random() * (24 - 1) + 1);
          FusionCharts("fuelMeter").feedData("&value=" + num);
        }, 3000);
      }
    }
  });

  $("#produkutama3-chart-container").insertFusionCharts({
    type: 'cylinder',
    id: 'chart9',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {

        "lowerLimit": "0",
        "upperLimit": "25",
        "lowerLimitDisplay": "Empty",
        "upperLimitDisplay": "Full",
        "numberSuffix": " ltrs",
        "showValue": "0",
        "cylFillColor": "#ffff00",
        "plottooltext": "<div id='valueDiv'> Level Indicator: $datavalue</div>",
        "theme": "zune",
        "alignCaptionWithCanvas": "1",
        "cylRadius": "55"
      },
      "value": "15"
    },
    "events": {
      "rendered": function(evtObj, argObj) {
        setInterval(function() {
          var num = parseInt(Math.random() * (24 - 1) + 1);
          FusionCharts("fuelMeter").feedData("&value=" + num);
        }, 3000);
      }
    }
  });

  $("#produkutama4-chart-container").insertFusionCharts({
    type: 'cylinder',
    id: 'chart9',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {

        "lowerLimit": "0",
        "upperLimit": "25",
        "lowerLimitDisplay": "Empty",
        "upperLimitDisplay": "Full",
        "numberSuffix": " ltrs",
        "showValue": "0",
        "cylFillColor": "#ffff00",
        "plottooltext": "<div id='valueDiv'> Level Indicator: $datavalue</div>",
        "theme": "zune",
        "alignCaptionWithCanvas": "1",
        "cylRadius": "55"
      },
      "value": "20"
    },
    "events": {
      "rendered": function(evtObj, argObj) {
        setInterval(function() {
          var num = parseInt(Math.random() * (24 - 1) + 1);
          FusionCharts("fuelMeter").feedData("&value=" + num);
        }, 3000);
      }
    }
  });

  $("#produkutama5-chart-container").insertFusionCharts({
    type: 'cylinder',
    id: 'chart9',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {

        "lowerLimit": "0",
        "upperLimit": "25",
        "lowerLimitDisplay": "Empty",
        "upperLimitDisplay": "Full",
        "numberSuffix": " ltrs",
        "showValue": "0",
        "cylFillColor": "#ffff00",
        "plottooltext": "<div id='valueDiv'> Level Indicator: $datavalue</div>",
        "theme": "zune",
        "alignCaptionWithCanvas": "1",
        "cylRadius": "55"
      },
      "value": "20"
    },
    "events": {
      "rendered": function(evtObj, argObj) {
        setInterval(function() {
          var num = parseInt(Math.random() * (24 - 1) + 1);
          FusionCharts("fuelMeter").feedData("&value=" + num);
        }, 3000);
      }
    }
  });

  //----------------------------------------------------------------------------
  //MATERIAL UTAMA
  //----------------------------------------------------------------------------

  $("#materialutama-chart-container").insertFusionCharts({
    type: 'cylinder',
    id: 'chart9',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {

        "lowerLimit": "0",
        "upperLimit": "99199323",
        "lowerLimitDisplay": "0",
        "upperLimitDisplay": "99199323",
        "numberSuffix": " ltrs",
        "showValue": "0",
        "cylFillColor": "#add8e6",
        "plottooltext": "<div id='valueDiv'> Level Indicator: $datavalue</div>",
        "theme": "zune",
        "alignCaptionWithCanvas": "1",
        "cylRadius": "55"
      },
      "value": "10"
    },
    "events": {
      "rendered": function(evtObj, argObj) {
        setInterval(function() {
          var num = parseInt(Math.random() * (24 - 1) + 1);
          FusionCharts("fuelMeter").feedData("&value=" + num);
        }, 3000);
      }
    }
  });

  $("#materialutama2-chart-container").insertFusionCharts({
    type: 'cylinder',
    id: 'chart9',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {

        "lowerLimit": "0",
        "upperLimit": "25",
        "lowerLimitDisplay": "Empty",
        "upperLimitDisplay": "Full",
        "numberSuffix": " ltrs",
        "showValue": "0",
        "cylFillColor": "#add8e6",
        "plottooltext": "<div id='valueDiv'> Level Indicator: $datavalue</div>",
        "theme": "zune",
        "alignCaptionWithCanvas": "1",
        "cylRadius": "55"
      },
      "value": "13"
    },
    "events": {
      "rendered": function(evtObj, argObj) {
        setInterval(function() {
          var num = parseInt(Math.random() * (24 - 1) + 1);
          FusionCharts("fuelMeter").feedData("&value=" + num);
        }, 3000);
      }
    }
  });

  $("#materialutama3-chart-container").insertFusionCharts({
    type: 'cylinder',
    id: 'chart9',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {

        "lowerLimit": "0",
        "upperLimit": "25",
        "lowerLimitDisplay": "Empty",
        "upperLimitDisplay": "Full",
        "numberSuffix": " ltrs",
        "showValue": "0",
        "cylFillColor": "#add8e6",
        "plottooltext": "<div id='valueDiv'> Level Indicator: $datavalue</div>",
        "theme": "zune",
        "alignCaptionWithCanvas": "1",
        "cylRadius": "55"
      },
      "value": "4"
    },
    "events": {
      "rendered": function(evtObj, argObj) {
        setInterval(function() {
          var num = parseInt(Math.random() * (24 - 1) + 1);
          FusionCharts("fuelMeter").feedData("&value=" + num);
        }, 3000);
      }
    }
  });

  $("#materialutama4-chart-container").insertFusionCharts({
    type: 'cylinder',
    id: 'chart9',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {

        "lowerLimit": "0",
        "upperLimit": "25",
        "lowerLimitDisplay": "Empty",
        "upperLimitDisplay": "Full",
        "numberSuffix": " ltrs",
        "showValue": "0",
        "cylFillColor": "#add8e6",
        "plottooltext": "<div id='valueDiv'> Level Indicator: $datavalue</div>",
        "theme": "zune",
        "alignCaptionWithCanvas": "1",
        "cylRadius": "55"
      },
      "value": "25"
    },
    "events": {
      "rendered": function(evtObj, argObj) {
        setInterval(function() {
          var num = parseInt(Math.random() * (24 - 1) + 1);
          FusionCharts("fuelMeter").feedData("&value=" + num);
        }, 3000);
      }
    }
  });

  $("#materialutama5-chart-container").insertFusionCharts({
    type: 'cylinder',
    id: 'chart9',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
      "chart": {

        "lowerLimit": "0",
        "upperLimit": "25",
        "lowerLimitDisplay": "Empty",
        "upperLimitDisplay": "Full",
        "numberSuffix": " ltrs",
        "showValue": "0",
        "cylFillColor": "#add8e6",
        "plottooltext": "<div id='valueDiv'> Level Indicator: $datavalue</div>",
        "theme": "zune",
        "alignCaptionWithCanvas": "1",
        "cylRadius": "55"
      },
      "value": "20"
    },
    "events": {
      "rendered": function(evtObj, argObj) {
        setInterval(function() {
          var num = parseInt(Math.random() * (24 - 1) + 1);
          FusionCharts("fuelMeter").feedData("&value=" + num);
        }, 3000);
      }
    }
  });

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////DIRUT////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  $("#a").insertFusionCharts({
      type: 'angulargauge',
      id: 'chart6',
      width: '100%',
      height: '250',
      dataFormat: 'json',
      dataSource: {
  	  "chart": {
          "caption": "REV VS TARRGET",
          "subcaption": "(RKAP 20)",
          "lowerLimit": "0",
          "upperLimit": "2000",
          "lowerLimitDisplay": "0(M)",
          "upperLimitDisplay": "2000(M)",
          "showValue": "1",
  		    "numberSuffix": "(M)",
  		    "showTickMarks": "1",
          "showTickValues": "1",
  		    "majorTMNumber": "4",
          "minorTMNumber": "4",
  		    "tickValueStep": "4",
          "valueBelowPivot": "1",
          "theme": "zune"
      },
      "colorRange": {
          "color": [
              {
                  "minValue": "0",
                  "maxValue": "1702",
                  "code": "#e44a00"
              },

              {
                  "minValue": "1702",
                  "maxValue": "2000",
                  "code": "#6baa01"
              }
          ]
      },
      "dials": {
          "dial": [
              {
                  "value": "693"
              }
          ]
      },
  	"trendpoints": {
          "point": [
              {
                  "startValue": "1702",
                  "useMarker": "1",
  				"showValue": "1",
                  "markerColor": "#FFFFFF",
                  "markerBorderColor": "#000000",
                  "markerRadius": "10",
                  "markerTooltext": "Previous year's average was 62",

                  "color": "#000000",
                  "thickness": "2",
                  "alpha": "100"
              }
          ]
      }
      }
    });
    $("#b").insertFusionCharts({
      type: 'mscombi3d',
      width: '100%',
      height: '250',
      dataFormat: 'json',
      dataSource: {
          "chart": {
          "caption": "Operating Cost",
          "xAxisname": "Bulan",
          "yAxisName": "Jumlah",
  		    "placevaluesinside": "1",
          "showBorder": "0",
          "showValues": "0",
          "paletteColors": "#0075c2,#1aaf5d,#f2c500",
          "bgColor": "#ffffff",
          "showCanvasBorder": "0",
          "canvasBgColor": "#ffffff",
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0",
          "divlineColor": "#999999",
          "divLineIsDashed": "1",
          "divLineDashLen": "1",
          "showAlternateHGridColor": "0",
          "usePlotGradientColor": "0",
          "toolTipColor": "#ffffff",
          "toolTipBorderThickness": "0",
          "toolTipBgColor": "#000000",
          "toolTipBgAlpha": "80",
          "toolTipBorderRadius": "2",
          "toolTipPadding": "5",
          "legendBgColor": "#ffffff",
          "legendBorderAlpha": "0",
          "legendShadow": "0",
          "legendItemFontSize": "10",
          "legendItemFontColor": "#666666",
      },
      "categories": [
          {
              "category": [

                  {
                      "label": "Mar"
                  },
                  {
                      "label": "Apr"
                  },
                  {
                      "label": "May"
                  },
                  {
                      "label": "Jun"
                  },
                  {
                      "label": "Jul"
                  },
                  {
                      "label": "Aug"
                  }

              ]
          }
      ],
      "dataset": [
          {
              "seriesName": "Actual Revenue",
              "showValues": "1",
              "data": [
                  {
                      "value": "500"
                  },
                  {
                      "value": "900"
                  },
                  {
                      "value": "1200"
                  },
                  {
                      "value": "1000"
                  },
                  {
                      "value": "800"
                  },
                  {
                      "value": "900"
                  }
              ]
          },
          {
              "seriesName": "Projected Revenue",
              "renderAs": "line",
              "data": [
                  {
                      "value": "1200"
                  },
                  {
                      "value": "900"
                  },
                  {
                      "value": "400"
                  },
                  {
                      "value": "200"
                  },
                  {
                      "value": "400"
                  },
                  {
                      "value": "1000"
                  }
              ]
          }

      ]
      }
    });
    $("#c").insertFusionCharts({
      type: 'msline',
      id: 'chart6',
      width: '100%',
      height: '250',
      dataFormat: 'json',
      dataSource: {
  	   "chart": {
          "caption": "PROFIT / LOSS",
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0",
          "paletteColors": "#0075c2,#1aaf5d",
          "bgcolor": "#ffffff",
          "showBorder": "0",
          "showShadow": "0",
          "showCanvasBorder": "0",
          "usePlotGradientColor": "0",
          "legendBorderAlpha": "0",
          "legendShadow": "0",
          "showAxisLines": "0",
          "showAlternateHGridColor": "0",
          "divlineThickness": "1",
          "divLineDashed": "1",
          "divLineDashLen": "1",
          "xAxisName": "Bulan",
  		"yAxisName": "Jumlah",
          "showValues": "1"
      },
      "categories": [
          {
              "category": [
                  {
                      "label": "MAR"
                  },
                  {
                      "label": "APR"
                  },
                  {
                      "label": "MEI"
                  },

                  {
                      "label": "JUN"
                  },
                  {
                      "label": "JUL"
                  },
                  {
                      "label": "AGU"
                  }
              ]
          }
      ],
      "dataset": [
          {
              "seriesname": "LR RKAP",
              "data": [
                  {
                      "value": "-68.6"
                  },
                  {
                      "value": "-64.1"
                  },
                  {
                      "value": "-75.3"
                  },
                  {
                      "value": "6.4"
                  },
                  {
                      "value": "11.2"
                  },
                  {
                      "value": "6.2"
                  }
              ]
          },
          {
              "seriesname": "LR",
              "data": [
                  {
                      "value": "-68.6"
                  },
                  {
                      "value": "6.4"
                  },
                  {
                      "value": "-24.6"
                  },
                  {
                      "value": "-60.9"
                  },
                  {
                      "value": "-94.3"
                  },
                  {
                      "value": "-86.7"
                  }
              ]
          }
      ]
      }
    });
     $("#d").insertFusionCharts({
      type: 'bar3d',
      id: 'chart6',
      width: '100%',
      height: '250',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "INV VS REV",

          "yAxisName": "Nilai",
          "paletteColors": "#0075c2",
          "bgColor": "#ffffff",
          "showBorder": "0",
          "showCanvasBorder": "0",
          "usePlotGradientColor": "0",
          "plotBorderAlpha": "10",
          "placeValuesInside": "1",
          "valueFontColor": "#ffffff",
          "showAxisLines": "1",
          "axisLineAlpha": "25",
          "divLineAlpha": "10",
          "alignCaptionWithCanvas": "0",
          "showAlternateVGridColor": "0",
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0",
          "toolTipColor": "#ffffff",
          "toolTipBorderThickness": "0",
          "toolTipBgColor": "#000000",
          "toolTipBgAlpha": "80",
          "toolTipBorderRadius": "2",
          "toolTipPadding": "5"
      },
      "data": [
          {
              "label": "INV",
              "value": "38"
          },
          {
              "label": "REV",
              "value": "8"
          }
      ]
      }
    });
    $("#e").insertFusionCharts({
      type: 'angulargauge',
      id: 'chart6',
      width: '100%',
      height: '250',
      dataFormat: 'json',
      dataSource: {
  	  "chart": {
          "caption": "REV VS TARRGET",
          "subcaption": "Last week",
          "lowerLimit": "0",
          "upperLimit": "2000",
          "lowerLimitDisplay": "0(M)",
          "upperLimitDisplay": "2000(M)",
          "showValue": "1",
  		"numberSuffix": "(M)",
  		"showTickMarks": "1",
          "showTickValues": "1",
  		"majorTMNumber": "4",
          "minorTMNumber": "4",
  		"tickValueStep": "4",
          "valueBelowPivot": "1",
          "theme": "zune"
      },
      "colorRange": {
          "color": [
              {
                  "minValue": "0",
                  "maxValue": "1702",
                  "code": "#e44a00"
              },

              {
                  "minValue": "1702",
                  "maxValue": "2000",
                  "code": "#6baa01"
              }
          ]
      },
      "dials": {
          "dial": [
              {
                  "value": "693"
              }
          ]
      },
  	"trendpoints": {
          "point": [
              {
                  "startValue": "1702",
                  "useMarker": "1",
  				 "showValue": "1",
                  "markerColor": "#FFFFFF",
                  "markerBorderColor": "#000000",
                  "markerRadius": "10",
                  "markerTooltext": "Previous year's average was 62",

                  "color": "#000000",
                  "thickness": "2",
                  "alpha": "100"
              }
          ]
      }
      }
    });
    $("#f").insertFusionCharts({
      type: 'line',
      id: 'chart6',
      width: '100%',
      height: '250',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "INVENTORY",
          "xAxisName": "Bulan",
          "yAxisName": "Jumlah",
          "lineThickness": "2",
          "paletteColors": "#0075c2",
          "baseFontColor": "#333333",
          "baseFont": "Helvetica Neue,Arial",
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0",
          "showBorder": "0",
          "bgColor": "#ffffff",
          "showShadow": "0",
          "canvasBgColor": "#ffffff",
          "canvasBorderAlpha": "0",
          "divlineAlpha": "100",
          "divlineColor": "#999999",
          "divlineThickness": "1",
          "divLineDashed": "1",
          "divLineDashLen": "1",
          "showXAxisLine": "1",
          "xAxisLineThickness": "1",
          "xAxisLineColor": "#999999",
          "showAlternateHGridColor": "0"
      },
      "data": [
          {
              "label": "MAR",
              "value": "20"
          },
          {
              "label": "APR",
              "value": "90"
          },
          {
              "label": "MEI",
              "value": "40"
          },
          {
              "label": "JUN",
              "value": "50"
          },
          {
              "label": "JUL",
              "value": "30"
          },
          {
              "label": "AGU",
              "value": "100"
          }
      ]

      }
    });
    $("#g").insertFusionCharts({
      type: 'msline',
      id: 'chart6',
      width: '100%',
      height: '250',
      dataFormat: 'json',
      dataSource: {
  	   "chart": {
          "caption": "PRODUCTION PROGRESS",
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0",
          "paletteColors": "#0075c2,#1aaf5d",
          "bgcolor": "#ffffff",
          "showBorder": "0",
          "showShadow": "0",
          "showCanvasBorder": "0",
          "usePlotGradientColor": "0",
          "legendBorderAlpha": "0",
          "legendShadow": "0",
          "showAxisLines": "0",
          "showAlternateHGridColor": "0",
          "divlineThickness": "1",
          "divLineDashed": "1",
          "divLineDashLen": "1",
          "xAxisName": "Bulan",
  		"yAxisName": "Jumlah",
          "showValues": "1"
      },
      "categories": [
          {
              "category": [
                  {
                      "label": "MAR"
                  },
                  {
                      "label": "APR"
                  },
                  {
                      "label": "MEI"
                  },

                  {
                      "label": "JUN"
                  },
                  {
                      "label": "JUL"
                  },
                  {
                      "label": "AGU"
                  }
              ]
          }
      ],
      "dataset": [
          {
              "seriesname": "ALPHA",
              "data": [
                  {
                      "value": "100"
                  },
                  {
                      "value": "110"
                  },
                  {
                      "value": "80"
                  },
                  {
                      "value": "130"
                  },
                  {
                      "value": "105"
                  },
                  {
                      "value": "160"
                  }
              ]
          },
          {
              "seriesname": "BETA",
              "data": [
                  {
                      "value": "170"
                  },
                  {
                      "value": "150"
                  },
                  {
                      "value": "230"
                  },
                  {
                      "value": "220"
                  },
                  {
                      "value": "230"
                  },
                  {
                      "value": "160"
                  }
              ]
          }
      ]
      }
    });
    $("#h").insertFusionCharts({
     type: 'bar3d',
      id: 'chart6',
      width: '100%',
      height: '250',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "OPR VS REV",
          "yAxisName": "Nilai",
          "paletteColors": "#0075c2",
          "bgColor": "#ffffff",
          "showBorder": "0",
          "showCanvasBorder": "0",
          "usePlotGradientColor": "0",
          "plotBorderAlpha": "10",
          "placeValuesInside": "1",
          "valueFontColor": "#ffffff",
          "showAxisLines": "1",
          "axisLineAlpha": "25",
          "divLineAlpha": "10",
          "alignCaptionWithCanvas": "0",
          "showAlternateVGridColor": "0",
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0",
          "toolTipColor": "#ffffff",
          "toolTipBorderThickness": "0",
          "toolTipBgColor": "#000000",
          "toolTipBgAlpha": "80",
          "toolTipBorderRadius": "2",
          "toolTipPadding": "5"
      },
      "data": [
          {
              "label": "OPR",
              "value": "27"
          },
          {
              "label": "REV",
              "value": "17"
          }
      ]
      }
    });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////DIRUT/////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Calculating height and making the sidenav responsive for all the devices ,as soon as the Document loaded
  sidenavHeight();
  //Sidenavbar is made responsive for both all types of devices
  function sidenavHeight() {
    var contemt_main = $("#contemt-main").height();
    var nav = $(".sidenav").height();

      if (nav <= contemt_main) {
        $(".sidenav").css("height", contemt_main);
        $("#loader").css("height", contemt_main);
      } else {
        $(".sidenav").css("height", nav);
        $("#loader").css("height", contemt_main);
      }
  }
  function data_export(dataset , day)
  {
      if(dataset[day].length > 0)
      {
        return dataset[day].shift();
      }
      else
      {
        for(var i = 0; i < 7 ; i++)
        {
            day++;
            if(dataset[day%7].length > 0)
            {
              return dataset[day%7].shift();
            }
        }
      }
  }

  //Calculating height and making the sidenav responsive whenever their is change in window size
  $(window).resize(function() {
    sidenavHeight();
  });
  $(window).on("orientationchange",function() {
    sidenavHeight();
  });
  $(window).on("load",function() {
    sidenavHeight();
  });

  $(function() {
    //Maximum  date for which the analytic could be done
    var max_pickup_Date = new Date();
    var maxDate = new Date(new Date(max_pickup_Date).setMonth(max_pickup_Date.getMonth()-1));

    $('#datetimepicker6').datetimepicker({
      format:'DD/MM/YYYY',
      maxDate : maxDate
    });
    //Setting the defailt date
    $('#datetimepicker6').data("DateTimePicker").date(new Date('1 July 2016'));

    $('#datetimepicker7').datetimepicker({
      format:'DD/MM/YYYY'
    });

    $("#datetimepicker6 input").click(function(){
        $(".input-group-addon").click();
    });

    //Variable initialization
    var static_date = new Date($('#datetimepicker6 input').val());

    //Checking for any change in the Date Time Picker input box to manipulate the chart data accordingly
    $("#datetimepicker6").on("dp.change", function(e) {

      $('#datetimepicker6 input').blur();
      $("#loader").removeClass("hidden");

      var pick_up_date = new Date(e.date);
      var one_month_foward = new Date(new Date(pick_up_date).setMonth(pick_up_date.getMonth()+1));
      $('#datetimepicker7').data("DateTimePicker").date(one_month_foward);

      setTimeout(function(){
        seed_data(pick_up_date,one_month_foward);
      }, 1);
    });

    //Function is to update the chart data when ever their is a Change in the Date from the input
    function update_chart(chart , i , obj)
    {
       //Setting Timeout for the render of charts do that the change in each chart can be noticed .
        setTimeout(function(){
          //Updating Chart with a new set of values
          chart.setJSONData(obj);
          //This is to remove the loader after everychange is complete
          if(i == 7)
          {
            $("#loader").addClass("hidden");
          }
        } , 500 + i*300);
    }

    //Calculating fake data to be seeded in the graph .. if u want to update real time data you need to do changes in this function.
    function seed_data(pick_up_date , one_month_foward)
    {
        //Collection of the chart objects , they contains the list of ids that were specified in as the "id" parameter for the charts
        var charts = [chart1,chart2,chart3,chart4,chart6,chart7,chart8,chart9];
        //Flag variable
        var count =0;
        //Collection to store Data for the chart according to the day
        var dataset = [[],[],[],[],[],[],[]];

        var day = static_date.getDay();

        //Collection of all the months
        var monthNames = ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"
                         ];


        //Calculating all the days between the two choosen dates
        var currentDate = new Date(pick_up_date.getTime());
        //Collection of all the 31 dates between the choosen date and the the after a month
        var  between = [];
        //Loop to find out the next 31 days from the pickup date
        while (currentDate <= one_month_foward || between.length < 31) {
            between.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

              /*  Creating of fake data and json preparation that neeeds to be passed  */
        //Getting the current chart data
        var obj = chart5.getJSONData();
        $.each( obj['dataset'][0]['data'], function( k, v ) {
          dataset[day % 7].push(obj['dataset'][0]['data'][count]['value']);
          day++;
          count++;
        });

        //Count value reset
        count = 0;

        //Calculating data to seeded  in Session Chart
        $.each( obj['dataset'][0]['data'], function( k, v ) {
          var value = data_export(dataset,between[count].getDay());
          var rndm = parseInt(value) + (Math.floor(Math.random() * value/50) + 1 )*((between[count].getDay() < 6)?((between[count].getDay() > 0)?between[count].getDay():-1):between[count].getDay()*(-1));
          obj['dataset'][0]['data'][count]['value'] = rndm ;
          obj['dataset'][1]['data'][count]['value'] = rndm;
          obj['categories'][0]['category'][count]['label'] = monthNames[between[count].getMonth()] + " " + between[count].getDate() + " " + between[count].getFullYear();

          count++;
        });
        //Updating Session chart with the fake data
        update_chart(chart5 , 5 , obj);


        //Updating Location Map with a new set of random data.
        obj = chart10.getJSONData();
        $.each( obj['data'][0]['data'], function( k, v ) {
          var rndm = (Math.floor(Math.random() * v.value/10) + 50);
          if(pick_up_date < static_date)
            rndm = -1 * rndm;
          v.value = ((parseInt(v.value) +rndm) < 0)?0:(parseInt(v.value) +rndm) ;
        });
        //Update Location in the Map
        update_chart(chart10 , 5 , obj);

        //Looping through all the charts and updating rest of the charts with new set of random Data
        for(var i =0; i<8 ;i++)
        {
          //Count value reset
          count = 0 ;
          obj = charts[i].getJSONData();

          if(i<4)
          {
           day = static_date.getDay();
           //Getting current dataset
           $.each( obj['data'], function( k, v ) {
              dataset[day%7].push(v.value);
              day++;
            });
          }
          //Creating fake data
          $.each( obj['data'], function( k, v ) {
            if(i<4)
            {
              //Random data
              var rndm = data_export(dataset,between[count].getDay());
              v.value = parseInt(rndm) + (Math.floor(Math.random() * rndm/50) + 20);
              v.label = monthNames[between[count].getMonth()] + " " + between[count].getDate() + " " + between[count].getFullYear() ;
              count++;
            }
            else
            {
                v.value = parseInt(v.value) + (Math.floor(Math.random() * v.value/5)*2 + 20);
            }
          });
          //Updating the value of the remaining charts
          update_chart(charts[i] , i , obj);
        }
        //Setting the day value to the new pick up date day
        day = between[0].getDay();
    }

  });
});

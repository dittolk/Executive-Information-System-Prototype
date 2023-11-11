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
  //$("#visitor-chart-container").insertFusionCharts({
  var salesChart = new FusionCharts({
    type: 'angulargauge',
    renderAt: 'visitor-chart-container',
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
          "value": penjualan1,
          "link" : "newchart-xml-drillrevcogs"
        }]
      },

      "linkeddata": [
          {
              "id": "drillrevcogs",
              "type": "bar2d",
              "linkedchart": {
                  "chart": {
                      "caption": "REV",
                      "subcaption": "Click on a column to drill-down",
                      "xaxisname": "Quarter",
                      "yaxisname": "Sales",
                      "theme": "zune",
                      "numberprefix": "$",
                      "showvalues": "0",
                      "bgcolor": "FFFFFF",
                      "plotgradientcolor": "",
                      "showalternatehgridcolor": "0",
                      "showplotborder": "0",
                      "divlinecolor": "CCCCCC",
                      "canvasborderalpha": "0"
                  },
                  "data": [
                      {
                          "label": "Q1",
                          "value": "1500",
                          "color": "F44336"
                      },
                      {
                          "label": "Q2",
                          "value": "2700",
                          "color": "4CAF50"
                      },
                      {
                          "label": "Q3",
                          "value": "3180",
                          "color": "FFEB3B"
                      },
                      {
                          "label": "Q4",
                          "value": "2990",
                          "color": "008ee4"
                      }
                  ]
              }
          }
      ],

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

  salesChart.configureLink (
      {
        type : "pie2d",
        overlayButton:
        {
          message: 'back',
          fontColor : '880000',
          bgColor:'FFEEEE',
          borderColor: '660000'
        }
      }, 0);
      salesChart.render();


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
            "value": "62",
            "link": "newchart-xml-2010Quarters"
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
      }],
      //////////////////////DRILLDOWN////////////////////////////
      "linkeddata": [
          {
              "id": "2010Quarters",
              "linkedchart": {
                  "chart": {
                      "caption": "Quarterly Sales Summary (2012)",
                      "subcaption": "Click on a column to drill-down",
                      "xaxisname": "Quarter",
                      "theme": "zune",
                      "yaxisname": "Sales",
                      "numberprefix": "$",
                      "showvalues": "0",
                      "bgcolor": "FFFFFF",
                      "plotgradientcolor": "",
                      "showalternatehgridcolor": "0",
                      "showplotborder": "0",
                      "divlinecolor": "CCCCCC",
                      "canvasborderalpha": "0"
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
                        "value": "-68.6",

                    },
                    {
                        "value": "-64.1",
              "link": "newchart-xml-2010Quarters",
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
        ],
                  "linkeddata": [
                      {
                          "id": "2010Q1",
                          "linkedchart": {
                              "chart": {
                                  "caption": "Monthly Sales Summary",
                                  "subcaption": "For the first quarter of year 2010",
                                  "xaxisname": "Month",
                                  "yaxisname": "Sales",
                                  "numberprefix": "$",
                                  "showvalues": "0",
                                  "bgcolor": "FFFFFF",
                                  "plotgradientcolor": "",
                                  "showalternatehgridcolor": "0",
                                  "showplotborder": "0",
                                  "divlinecolor": "CCCCCC",
                                  "canvasborderalpha": "0"
                              },
                              "data": [
                                  {
                                      "label": "January",
                                      "value": "1100",
                                      "color": "008ee4"
                                  },
                                  {
                                      "label": "February",
                                      "value": "760",
                                      "color": "008ee4"
                                  },
                                  {
                                      "label": "March",
                                      "value": "880",
                                      "color": "008ee4"
                                  }
                              ]
                          }
                      },
                      {
                          "id": "2010Q2",
                          "linkedchart": {
                              "chart": {
                                  "caption": "Monthly Sales Summary",
                                  "subcaption": "For the second quarter of year 2010",
                                  "xaxisname": "Month",
                                  "yaxisname": "Sales",
                                  "numberprefix": "$",
                                  "showvalues": "0",
                                  "bgcolor": "FFFFFF",
                                  "plotgradientcolor": "",
                                  "showalternatehgridcolor": "0",
                                  "showplotborder": "0",
                                  "divlinecolor": "CCCCCC",
                                  "canvasborderalpha": "0"
                              },
                              "data": [
                                  {
                                      "label": "April",
                                      "value": "1160",
                                      "color": "008ee4"
                                  },
                                  {
                                      "label": "May",
                                      "value": "920",
                                      "color": "008ee4"
                                  },
                                  {
                                      "label": "June",
                                      "value": "620",
                                      "color": "008ee4"
                                  }
                              ]
                          }
                      },
                      {
                          "id": "2010Q3",
                          "linkedchart": {
                              "chart": {
                                  "caption": "Monthly Sales Summary",
                                  "subcaption": "For the third quarter of year 2010",
                                  "xaxisname": "Month",
                                  "yaxisname": "Sales",
                                  "numberprefix": "$",
                                  "showvalues": "0",
                                  "bgcolor": "FFFFFF",
                                  "plotgradientcolor": "",
                                  "showalternatehgridcolor": "0",
                                  "showplotborder": "0",
                                  "divlinecolor": "CCCCCC",
                                  "canvasborderalpha": "0"
                              },
                              "data": [
                                  {
                                      "label": "July",
                                      "value": "1140",
                                      "color": "008ee4"
                                  },
                                  {
                                      "label": "August",
                                      "value": "860",
                                      "color": "008ee4"
                                  },
                                  {
                                      "label": "September",
                                      "value": "1180",
                                      "color": "008ee4"
                                  }
                              ]
                          }
                      },
                      {
                          "id": "2010Q4",
                          "linkedchart": {
                              "chart": {
                                  "caption": "Monthly Sales Summary",
                                  "subcaption": "For the fourth quarter of year 2010",
                                  "xaxisname": "Month",
                                  "yaxisname": "Sales",
                                  "numberprefix": "$",
                                  "showvalues": "0",
                                  "bgcolor": "FFFFFF",
                                  "plotgradientcolor": "",
                                  "showalternatehgridcolor": "0",
                                  "showplotborder": "0",
                                  "divlinecolor": "CCCCCC",
                                  "canvasborderalpha": "0"
                              },
                              "data": [
                                  {
                                      "label": "October",
                                      "value": "920",
                                      "color": "008ee4"
                                  },
                                  {
                                      "label": "November",
                                      "value": "1020",
                                      "color": "008ee4"
                                  },
                                  {
                                      "label": "December",
                                      "value": "1050",
                                      "color": "008ee4"
                                  }
                              ]
                          }
                      }
                  ]
              }
          },
          {
              "id": "2011Quarters",
              "linkedchart": {
                  "chart": {
                      "caption": "Quarterly Sales Summary (2011)",
                      "subcaption": "Click on a column to drill-down",
                      "xaxisname": "Quarter",
                      "yaxisname": "Sales",
                      "numberprefix": "$",
                      "showvalues": "0",
                      "bgcolor": "FFFFFF",
                      "plotgradientcolor": "",
                      "showalternatehgridcolor": "0",
                      "showplotborder": "0",
                      "divlinecolor": "CCCCCC",
                      "canvasborderalpha": "0"
                  },
                  "data": [
                      {
                          "label": "Q1",
                          "value": "3060",
                          "link": "newchart-xml-2011Q1"
                      },
                      {
                          "label": "Q2",
                          "value": "2030",
                          "link": "newchart-xml-2011Q2"
                      },
                      {
                          "label": "Q3",
                          "value": "2700",
                          "link": "newchart-xml-2011Q3"
                      },
                      {
                          "label": "Q4",
                          "value": "2640",
                          "link": "newchart-xml-2011Q4"
                      }
                  ],
                  "linkeddata": [
                      {
                          "id": "2011Q1",
                          "linkedchart": {
                              "chart": {
                                  "caption": "Monthly Sales Summary",
                                  "subcaption": "For the first quarter of year 2011",
                                  "xaxisname": "Month",
                                  "yaxisname": "Sales",
                                  "numberprefix": "$",
                                  "showvalues": "0",
                                  "bgcolor": "FFFFFF",
                                  "plotgradientcolor": "",
                                  "showalternatehgridcolor": "0",
                                  "showplotborder": "0",
                                  "divlinecolor": "CCCCCC",
                                  "canvasborderalpha": "0"
                              },
                              "data": [
                                  {
                                      "label": "January",
                                      "value": "3700",
                                      "color": "6baa01"
                                  },
                                  {
                                      "label": "February",
                                      "value": "2900",
                                      "color": "6baa01"
                                  },
                                  {
                                      "label": "March",
                                      "value": "3200",
                                      "color": "6baa01"
                                  }
                              ]
                          }
                      },
                      {
                          "id": "2011Q2",
                          "linkedchart": {
                              "chart": {
                                  "caption": "Monthly Sales Summary",
                                  "subcaption": "For the second quarter of year 2011",
                                  "xaxisname": "Month",
                                  "yaxisname": "Sales",
                                  "numberprefix": "$",
                                  "showvalues": "0",
                                  "bgcolor": "FFFFFF",
                                  "plotgradientcolor": "",
                                  "showalternatehgridcolor": "0",
                                  "showplotborder": "0",
                                  "divlinecolor": "CCCCCC",
                                  "canvasborderalpha": "0"
                              },
                              "data": [
                                  {
                                      "label": "April",
                                      "value": "3700",
                                      "color": "6baa01"
                                  },
                                  {
                                      "label": "May",
                                      "value": "2900",
                                      "color": "6baa01"
                                  },
                                  {
                                      "label": "June",
                                      "value": "3200",
                                      "color": "6baa01"
                                  }
                              ]
                          }
                      },
                      {
                          "id": "2011Q3",
                          "linkedchart": {
                              "chart": {
                                  "caption": "Monthly Sales Summary",
                                  "subcaption": "For the third quarter of year 2011",
                                  "xaxisname": "Month",
                                  "yaxisname": "Sales",
                                  "numberprefix": "$",
                                  "showvalues": "0",
                                  "bgcolor": "FFFFFF",
                                  "plotgradientcolor": "",
                                  "showalternatehgridcolor": "0",
                                  "showplotborder": "0",
                                  "divlinecolor": "CCCCCC",
                                  "canvasborderalpha": "0"
                              },
                              "data": [
                                  {
                                      "label": "July",
                                      "value": "3700",
                                      "color": "6baa01"
                                  },
                                  {
                                      "label": "August",
                                      "value": "2900",
                                      "color": "6baa01"
                                  },
                                  {
                                      "label": "September",
                                      "value": "3200",
                                      "color": "6baa01"
                                  }
                              ]
                          }
                      },
                      {
                          "id": "2011Q4",
                          "linkedchart": {
                              "chart": {
                                  "caption": "Monthly Sales Summary",
                                  "subcaption": "For the fourth quarter of year 2011",
                                  "xaxisname": "Month",
                                  "yaxisname": "Sales",
                                  "numberprefix": "$",
                                  "showvalues": "0",
                                  "bgcolor": "FFFFFF",
                                  "plotgradientcolor": "",
                                  "showalternatehgridcolor": "0",
                                  "showplotborder": "0",
                                  "divlinecolor": "CCCCCC",
                                  "canvasborderalpha": "0"
                              },
                              "data": [
                                  {
                                      "label": "October",
                                      "value": "3700",
                                      "color": "6baa01"
                                  },
                                  {
                                      "label": "November",
                                      "value": "2900",
                                      "color": "6baa01"
                                  },
                                  {
                                      "label": "December",
                                      "value": "3200",
                                      "color": "6baa01"
                                  }
                              ]
                          }
                      }
                  ]
              }
          },
          {
              "id": "2012Quarters",
              "linkedchart": {
                  "chart": {
                      "caption": "Quarterly Sales Summary (2012)",
                      "subcaption": "Click on a column to drill-down",
                      "xaxisname": "Quarter",
                      "yaxisname": "Sales",
                      "numberprefix": "$",
                      "showvalues": "0",
                      "bgcolor": "FFFFFF",
                      "plotgradientcolor": "",
                      "showalternatehgridcolor": "0",
                      "showplotborder": "0",
                      "divlinecolor": "CCCCCC",
                      "canvasborderalpha": "0"
                  },
                  "data": [
                      {
                          "label": "Q1",
                          "value": "2410",
                          "link": "newchart-xml-2012Q1",
                          "color": "f8bd19"
                      },
                      {
                          "label": "Q2",
                          "value": "2800",
                          "link": "newchart-xml-2012Q2",
                          "color": "f8bd19"
                      },
                      {
                          "label": "Q3",
                          "value": "2550",
                          "link": "newchart-xml-2012Q3",
                          "color": "f8bd19"
                      },
                      {
                          "label": "Q4",
                          "value": "2410",
                          "link": "newchart-xml-2012Q4",
                          "color": "f8bd19"
                      }
                  ],
                  "linkeddata": [
                      {
                          "id": "2012Q1",
                          "linkedchart": {
                              "chart": {
                                  "caption": "Monthly Sales Summary",
                                  "subcaption": "For the first quarter of year 2012",
                                  "xaxisname": "Month",
                                  "yaxisname": "Sales",
                                  "numberprefix": "$",
                                  "showvalues": "0",
                                  "bgcolor": "FFFFFF",
                                  "plotgradientcolor": "",
                                  "showalternatehgridcolor": "0",
                                  "showplotborder": "0",
                                  "divlinecolor": "CCCCCC",
                                  "canvasborderalpha": "0"
                              },
                              "data": [
                                  {
                                      "label": "January",
                                      "value": "870",
                                      "color": "f8bd19"
                                  },
                                  {
                                      "label": "February",
                                      "value": "890",
                                      "color": "f8bd19"
                                  },
                                  {
                                      "label": "March",
                                      "value": "650",
                                      "color": "f8bd19"
                                  }
                              ]
                          }
                      },
                      {
                          "id": "2012Q2",
                          "linkedchart": {
                              "chart": {
                                  "caption": "Monthly Sales Summary",
                                  "subcaption": "For the second quarter of year 2012",
                                  "xaxisname": "Month",
                                  "yaxisname": "Sales",
                                  "numberprefix": "$",
                                  "showvalues": "0",
                                  "bgcolor": "FFFFFF",
                                  "plotgradientcolor": "",
                                  "showalternatehgridcolor": "0",
                                  "showplotborder": "0",
                                  "divlinecolor": "CCCCCC",
                                  "canvasborderalpha": "0"
                              },
                              "data": [
                                  {
                                      "label": "April",
                                      "value": "1300",
                                      "color": "f8bd19"
                                  },
                                  {
                                      "label": "May",
                                      "value": "440",
                                      "color": "f8bd19"
                                  },
                                  {
                                      "label": "June",
                                      "value": "1060",
                                      "color": "f8bd19"
                                  }
                              ]
                          }
                      },
                      {
                          "id": "2012Q3",
                          "linkedchart": {
                              "chart": {
                                  "caption": "Monthly Sales Summary",
                                  "subcaption": "For the third quarter of year 2012",
                                  "xaxisname": "Month",
                                  "yaxisname": "Sales",
                                  "numberprefix": "$",
                                  "showvalues": "0",
                                  "bgcolor": "FFFFFF",
                                  "plotgradientcolor": "",
                                  "showalternatehgridcolor": "0",
                                  "showplotborder": "0",
                                  "divlinecolor": "CCCCCC",
                                  "canvasborderalpha": "0"
                              },
                              "data": [
                                  {
                                      "label": "July",
                                      "value": "850",
                                      "color": "f8bd19"
                                  },
                                  {
                                      "label": "August",
                                      "value": "1030",
                                      "color": "f8bd19"
                                  },
                                  {
                                      "label": "September",
                                      "value": "670",
                                      "color": "f8bd19"
                                  }
                              ]
                          }
                      },
                      {
                          "id": "2012Q4",
                          "linkedchart": {
                              "chart": {
                                  "caption": "Monthly Sales Summary",
                                  "subcaption": "For the fourth quarter of year 2012",
                                  "xaxisname": "Month",
                                  "yaxisname": "Sales",
                                  "numberprefix": "$",
                                  "showvalues": "0",
                                  "bgcolor": "FFFFFF",
                                  "plotgradientcolor": "",
                                  "showalternatehgridcolor": "0",
                                  "showplotborder": "0",
                                  "divlinecolor": "CCCCCC",
                                  "canvasborderalpha": "0"
                              },
                              "data": [
                                  {
                                      "label": "October",
                                      "value": "590",
                                      "color": "f8bd19"
                                  },
                                  {
                                      "label": "November",
                                      "value": "690",
                                      "color": "f8bd19"
                                  },
                                  {
                                      "label": "December",
                                      "value": "1130",
                                      "color": "f8bd19"
                                  }
                              ]
                          }
                      }
                  ]
              }
          },
          {
              "id": "2013Quarters",
              "linkedchart": {
                  "chart": {
                      "caption": "Quarterly Sales Summary (2013)",
                      "subcaption": "Click on a column to drill-down",
                      "xaxisname": "Quarter",
                      "yaxisname": "Sales",
                      "numberprefix": "$",
                      "showvalues": "0",
                      "bgcolor": "FFFFFF",
                      "plotgradientcolor": "",
                      "showalternatehgridcolor": "0",
                      "showplotborder": "0",
                      "divlinecolor": "CCCCCC",
                      "canvasborderalpha": "0"
                  },
                  "data": [
                      {
                          "label": "Q1",
                          "value": "2690",
                          "link": "newchart-xml-2013Q1",
                          "color": "e44a00"
                      },
                      {
                          "label": "Q2",
                          "value": "2700",
                          "link": "newchart-xml-2013Q2",
                          "color": "e44a00"
                      },
                      {
                          "label": "Q3",
                          "value": "3180",
                          "link": "newchart-xml-2013Q3",
                          "color": "e44a00"
                      },
                      {
                          "label": "Q4",
                          "value": "2990",
                          "link": "newchart-xml-2013Q4",
                          "color": "e44a00"
                      }
                  ],
                  "linkeddata": [
                      {
                          "id": "2013Q1",
                          "linkedchart": {
                              "chart": {
                                  "caption": "Monthly Sales Summary",
                                  "subcaption": "For the first quarter of year 2013",
                                  "xaxisname": "Month",
                                  "yaxisname": "Sales",
                                  "numberprefix": "$",
                                  "showvalues": "0",
                                  "bgcolor": "FFFFFF",
                                  "plotgradientcolor": "",
                                  "showalternatehgridcolor": "0",
                                  "showplotborder": "0",
                                  "divlinecolor": "CCCCCC",
                                  "canvasborderalpha": "0"
                              },
                              "data": [
                                  {
                                      "label": "January",
                                      "value": "1050",
                                      "color": "e44a00"
                                  },
                                  {
                                      "label": "February",
                                      "value": "760",
                                      "color": "e44a00"
                                  },
                                  {
                                      "label": "March",
                                      "value": "880",
                                      "color": "e44a00"
                                  }
                              ]
                          }
                      },
                      {
                          "id": "2013Q2",
                          "linkedchart": {
                              "chart": {
                                  "caption": "Monthly Sales Summary",
                                  "subcaption": "For the second quarter of year 2013",
                                  "xaxisname": "Month",
                                  "yaxisname": "Sales",
                                  "numberprefix": "$",
                                  "showvalues": "0",
                                  "bgcolor": "FFFFFF",
                                  "plotgradientcolor": "",
                                  "showalternatehgridcolor": "0",
                                  "showplotborder": "0",
                                  "divlinecolor": "CCCCCC",
                                  "canvasborderalpha": "0"
                              },
                              "data": [
                                  {
                                      "label": "April",
                                      "value": "1160",
                                      "color": "e44a00"
                                  },
                                  {
                                      "label": "May",
                                      "value": "920",
                                      "color": "e44a00"
                                  },
                                  {
                                      "label": "June",
                                      "value": "620",
                                      "color": "e44a00"
                                  }
                              ]
                          }
                      },
                      {
                          "id": "2013Q3",
                          "linkedchart": {
                              "chart": {
                                  "caption": "Monthly Sales Summary",
                                  "subcaption": "For the third quarter of year 2013",
                                  "xaxisname": "Month",
                                  "yaxisname": "Sales",
                                  "numberprefix": "$",
                                  "showvalues": "0",
                                  "bgcolor": "FFFFFF",
                                  "plotgradientcolor": "",
                                  "showalternatehgridcolor": "0",
                                  "showplotborder": "0",
                                  "divlinecolor": "CCCCCC",
                                  "canvasborderalpha": "0"
                              },
                              "data": [
                                  {
                                      "label": "July",
                                      "value": "1140",
                                      "color": "e44a00"
                                  },
                                  {
                                      "label": "August",
                                      "value": "860",
                                      "color": "e44a00"
                                  },
                                  {
                                      "label": "September",
                                      "value": "1180",
                                      "color": "e44a00"
                                  }
                              ]
                          }
                      },
                      {
                          "id": "2013Q4",
                          "linkedchart": {
                              "chart": {
                                  "caption": "Monthly Sales Summary",
                                  "subcaption": "For the fourth quarter of year 2013",
                                  "xaxisname": "Month",
                                  "yaxisname": "Sales",
                                  "numberprefix": "$",
                                  "showvalues": "0",
                                  "bgcolor": "FFFFFF",
                                  "plotgradientcolor": "",
                                  "showalternatehgridcolor": "0",
                                  "showplotborder": "0",
                                  "divlinecolor": "CCCCCC",
                                  "canvasborderalpha": "0"
                              },
                              "data": [
                                  {
                                      "label": "October",
                                      "value": "920",
                                      "color": "e44a00"
                                  },
                                  {
                                      "label": "November",
                                      "value": "1020",
                                      "color": "e44a00"
                                  },
                                  {
                                      "label": "December",
                                      "value": "1050",
                                      "color": "e44a00"
                                  }
                              ]
                          }
                      }
                  ]
              }
          }
      ]
      //////////////////////DRILDOWN/////////////////////////////
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
                    "value": "38",
                    "link": "newchart-xml-drillrevcogs"
                },
                {
                    "label": "Cogs",
                    "value": "8"
                }
            ],
            "linkeddata": [
                {
                    "id": "drillrevcogs",
                    "linkedchart": {
                        "chart": {
                            "caption": "REV",
                            "subcaption": "Click on a column to drill-down",
                            "xaxisname": "Quarter",
                            "yaxisname": "Sales",
                            "theme": "zune",
                            "numberprefix": "$",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [
                            {
                                "label": "Q1",
                                "value": "1500",
                                "link": "newchart-xml-2010Q1",
                                "color": "F44336"
                            },
                            {
                                "label": "Q2",
                                "value": "2700",
                                "link": "newchart-xml-2010Q2",
                                "color": "4CAF50"
                            },
                            {
                                "label": "Q3",
                                "value": "3180",
                                "link": "newchart-xml-2010Q3",
                                "color": "FFEB3B"
                            },
                            {
                                "label": "Q4",
                                "value": "2990",
                                "link": "newchart-xml-2010Q4",
                                "color": "008ee4"
                            }
                        ]
                    }
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

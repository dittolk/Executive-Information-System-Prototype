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
                      "value": "1200",
                      "link": "newchart-xml-drilla"
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
      ],
      "linkeddata":[
        {
          "id": "drilla",
          "seriesName": "Actual Revenue",
          "showValues": "1",
          "linkedchart": {
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
                "legendItemFontColor": "#666666"
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
                              "value": "300"
                          },
                          {
                              "value": "900"

                          },
                          {
                              "value": "800",
                          },
                          {
                              "value": "1000"
                          },
                          {
                              "value": "1300"
                          },
                          {
                              "value": "550"
                          }
                      ]
                  },
                  {
                      "seriesName": "Projected Revenue",
                      "renderAs": "line",
                      "data": [
                          {
                              "value": "800"

                          },
                          {
                              "value": "500"
                          },
                          {
                              "value": "400"
                          },
                          {
                              "value": "300"
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
            "id": "2010Quarters",
            "linkedchart": {
                "chart": {
                    "caption": "Quarterly Sales Summary (2010)",
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
      }
    });
     $("#d").insertFusionCharts({
      type: 'bar2d',
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
			  "link": "newchart-xml-2010Quarters",
              "value": "38"

          },
          {
              "label": "REV",
              "value": "8"
          }
      ],
	  "linkeddata": [
        {
            "id": "2010Quarters",
            "linkedchart": {
                "chart": {
                    "caption": "Quarterly Sales Summary (2010)",
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
                        "value": "2740",
                        "link": "newchart-xml-2010Q1",
                        "color": "008ee4"
                    },
                    {
                        "label": "Q2",
                        "value": "2700",
                        "link": "newchart-xml-2010Q2",
                        "color": "008ee4"
                    },
                    {
                        "label": "Q3",
                        "value": "3180",
                        "link": "newchart-xml-2010Q3",
                        "color": "008ee4"
                    },
                    {
                        "label": "Q4",
                        "value": "2990",
                        "link": "newchart-xml-2010Q4",
                        "color": "008ee4"
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
			  "link": "newchart-xml-2010Quarters",
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
      ],
"linkeddata": [
        {
            "id": "2010Quarters",
            "linkedchart": {
                "chart": {
                    "caption": "Quarterly Sales Summary (2010)",
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
                        "value": "2740",
                        "link": "newchart-xml-2010Q1",
                        "color": "008ee4"
                    },
                    {
                        "label": "Q2",
                        "value": "2700",
                        "link": "newchart-xml-2010Q2",
                        "color": "008ee4"
                    },
                    {
                        "label": "Q3",
                        "value": "3180",
                        "link": "newchart-xml-2010Q3",
                        "color": "008ee4"
                    },
                    {
                        "label": "Q4",
                        "value": "2990",
                        "link": "newchart-xml-2010Q4",
                        "color": "008ee4"
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

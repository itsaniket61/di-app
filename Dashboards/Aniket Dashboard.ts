export const dashboard = {
    "id": "content-delivery-dashboard",
    "title": "Content Delivery Analytics",
    "widgets": [
        {
            "id": "content-views-bar-chart",
            "type": "chart",
            "title": "Content Views by Month",
            "data": {
                "chart": {
                    "type": "bar",
                    "backgroundColor": "#ffffff",
                    "borderRadius": 10
                },
                "title": {
                    "text": "Monthly Content Views",
                    "style": {
                        "color": "#2d3436",
                        "fontWeight": "bold"
                    }
                },
                "xAxis": {
                    "categories": ["January", "February", "March", "April", "May", "June"],
                    "title": {
                        "text": "Month",
                        "style": {
                            "color": "#636e72",
                            "fontSize": "14px"
                        }
                    },
                    "labels": {
                        "style": {
                            "color": "#636e72",
                            "fontSize": "12px"
                        }
                    }
                },
                "yAxis": {
                    "title": {
                        "text": "Views",
                        "style": {
                            "color": "#636e72",
                            "fontSize": "14px"
                        }
                    },
                    "gridLineColor": "#dfe6e9"
                },
                "series": [
                    {
                        "name": "Article Views",
                        "data": [5000, 6200, 7000, 8500, 9000, 9500],
                        "color": "#0984e3"
                    },
                    {
                        "name": "Video Views",
                        "data": [3000, 4000, 5500, 6000, 7500, 8000],
                        "color": "#e17055"
                    }
                ],
                "tooltip": {
                    "pointFormat": "{series.name}: <b>{point.y} views</b>",
                    "backgroundColor": "#dfe6e9",
                    "borderColor": "#0984e3",
                    "style": {
                        "color": "#2d3436"
                    }
                }
            },
            "style": {
                "resize": "both",
                "overflow": "auto",
                "width": "680px",
                "height": "400px",
                "margin": "20px",
                "backgroundColor": "#f5f6fa",
                "boxShadow": "0 6px 12px rgba(0,0,0,0.1)",
                "borderRadius": "12px"
            }
        },
        {
            "id": "content-type-pie-chart",
            "type": "chart",
            "title": "Content Types by Popularity",
            "data": {
                "chart": {
                    "type": "pie",
                    "backgroundColor": "#ffffff",
                    "borderRadius": 10
                },
                "title": {
                    "text": "Popular Content Types",
                    "style": {
                        "color": "#2d3436",
                        "fontWeight": "bold"
                    }
                },
                "series": [
                    {
                        "name": "Content Types",
                        "colorByPoint": true,
                        "data": [
                            {
                                "name": "Articles",
                                "y": 50,
                                "color": "#74b9ff"
                            },
                            {
                                "name": "Videos",
                                "y": 35,
                                "color": "#fd79a8"
                            },
                            {
                                "name": "Podcasts",
                                "y": 10,
                                "color": "#00b894"
                            },
                            {
                                "name": "Webinars",
                                "y": 5,
                                "color": "#ffeaa7"
                            }
                        ]
                    }
                ],
                "tooltip": {
                    "pointFormat": "{point.name}: <b>{point.y}%</b>",
                    "backgroundColor": "#dfe6e9",
                    "borderColor": "#74b9ff",
                    "style": {
                        "color": "#2d3436"
                    }
                }
            },
            "style": {
                "resize": "both",
                "overflow": "auto",
                "width": "600px",
                "height": "400px",
                "margin": "20px",
                "backgroundColor": "#f5f6fa",
                "boxShadow": "0 6px 12px rgba(0,0,0,0.1)",
                "borderRadius": "12px"
            }
        },
        {
            "id": "geo-distribution-map",
            "type": "map",
            "title": "Content Consumption by Region",
            "data": {
                "chart": {
                    "map": "world",
                    "backgroundColor": "#ffffff",
                    "borderRadius": 10
                },
                "title": {
                    "text": "Global Content Consumption",
                    "style": {
                        "color": "#2d3436",
                        "fontWeight": "bold"
                    }
                },
                "series": [
                    {
                        "name": "Views",
                        "data": [
                            ["us", 10000],
                            ["in", 8500],
                            ["gb", 7000],
                            ["de", 6000],
                            ["jp", 5000]
                        ],
                        "mapData": "world",
                        "color": "#0984e3"
                    }
                ],
                "tooltip": {
                    "pointFormat": "{point.name}: <b>{point.value} views</b>",
                    "backgroundColor": "#dfe6e9",
                    "borderColor": "#0984e3",
                    "style": {
                        "color": "#2d3436"
                    }
                }
            },
            "style": {
                "resize": "both",
                "overflow": "auto",
                "width": "680px",
                "height": "400px",
                "margin": "20px",
                "backgroundColor": "#f5f6fa",
                "boxShadow": "0 6px 12px rgba(0,0,0,0.1)",
                "borderRadius": "12px"
            }
        },
        // {
        //     "id": "engagement-radar-chart",
        //     "type": "chart",
        //     "title": "Engagement by Content Type",
        //     "data": {
        //         "chart": {
        //             "type": "radar",
        //             "backgroundColor": "#ffffff",
        //             "borderRadius": 10
        //         },
        //         "title": {
        //             "text": "User Engagement",
        //             "style": {
        //                 "color": "#2d3436",
        //                 "fontWeight": "bold"
        //             }
        //         },
        //         "xAxis": {
        //             "categories": ["Articles", "Videos", "Podcasts", "Webinars"],
        //             "title": {
        //                 "text": "Content Type",
        //                 "style": {
        //                     "color": "#636e72",
        //                     "fontSize": "14px"
        //                 }
        //             },
        //             "labels": {
        //                 "style": {
        //                     "color": "#636e72",
        //                     "fontSize": "12px"
        //                 }
        //             }
        //         },
        //         "yAxis": {
        //             "title": {
        //                 "text": "Engagement Level",
        //                 "style": {
        //                     "color": "#636e72",
        //                     "fontSize": "14px"
        //                 }
        //             },
        //             "gridLineColor": "#dfe6e9"
        //         },
        //         "series": [
        //             {
        //                 "name": "Engagement",
        //                 "data": [80, 70, 50, 40],
        //                 "color": "#fd79a8"
        //             }
        //         ],
        //         "tooltip": {
        //             "pointFormat": "{point.category}: <b>{point.y}%</b>",
        //             "backgroundColor": "#dfe6e9",
        //             "borderColor": "#fd79a8",
        //             "style": {
        //                 "color": "#2d3436"
        //             }
        //         }
        //     },
        //     "style": {
        //         "resize": "both",
        //         "overflow": "auto",
        //         "width": "680px",
        //         "height": "400px",
        //         "margin": "20px",
        //         "backgroundColor": "#f5f6fa",
        //         "boxShadow": "0 6px 12px rgba(0,0,0,0.1)",
        //         "borderRadius": "12px"
        //     }
        // },
        {
            "id": "top-content-table",
            "type": "table",
            "title": "Top Performing Content",
            "columns": [
                {
                    "header": "Content Title",
                    "key": "title"
                },
                {
                    "header": "Views",
                    "key": "views"
                },
                {
                    "header": "Category",
                    "key": "category"
                }
            ],
            "rows": [
                {
                    "title": "AI in 2024",
                    "views": 9500,
                    "category": "Technology"
                },
                {
                    "title": "Healthy Living",
                    "views": 8000,
                    "category": "Health"
                },
                {
                    "title": "Stock Market Trends",
                    "views": 7500,
                    "category": "Finance"
                },
                {
                    "title": "Online Learning Resources",
                    "views": 6000,
                    "category": "Education"
                }
            ],
            "style": {
                "resize": "both",
                "overflow": "auto",
                "width": "600px",
                "height": "400px",
                "margin": "20px",
                "backgroundColor": "#ffffff",
                "boxShadow": "0 6px 12px rgba(0,0,0,0.1)",
                "borderRadius": "12px",
                "padding": "20px"
            }
        },
        {
            "id": "user-retention-line-chart",
            "type": "chart",
            "title": "User Retention Rate",
            "data": {
                "chart": {
                    "type": "line",
                    "backgroundColor": "#ffffff",
                    "borderRadius": 10
                },
                "title": {
                    "text": "Monthly User Retention",
                    "style": {
                        "color": "#2d3436",
                        "fontWeight": "bold"
                    }
                },
                "xAxis": {
                    "categories": ["January", "February", "March", "April", "May", "June"],
                    "title": {
                        "text": "Month",
                        "style": {
                            "color": "#636e72",
                            "fontSize": "14px"
                        }
                    },
                    "labels": {
                        "style": {
                            "color": "#636e72",
                            "fontSize": "12px"
                        }
                    }
                },
                "yAxis": {
                    "title": {
                        "text": "Retention Rate (%)",
                        "style": {
                            "color": "#636e72",
                            "fontSize": "14px"
                        }
                    },
                    "gridLineColor": "#dfe6e9"
                },
                "series": [
                    {
                        "name": "Retention Rate",
                        "data": [60, 65, 70, 75, 80, 85],
                        "color": "#00cec9"
                    }
                ],
                "tooltip": {
                    "pointFormat": "Month: <b>{point.category}</b><br>Retention Rate: <b>{point.y}%</b>",
                    "backgroundColor": "#dfe6e9",
                    "borderColor": "#00cec9",
                    "style": {
                        "color": "#2d3436"
                    }
                }
            },
            "style": {
                "resize": "both",
                "overflow": "auto",
                "width": "680px",
                "height": "400px",
                "margin": "20px",
                "backgroundColor": "#f5f6fa",
                "boxShadow": "0 6px 12px rgba(0,0,0,0.1)",
                "borderRadius": "12px"
            }
        }
    ]
};

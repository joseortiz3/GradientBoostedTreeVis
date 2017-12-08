rootdata = {
    "params": {
        "boosting_type": "gbdt",
        "colsample_bytree": 1.0,
        "learning_rate": 0.1,
        "max_bin": 255,
        "max_depth": -1,
        "min_child_samples": 20,
        "min_child_weight": 0.001,
        "min_split_gain": 0.0,
        "n_estimators": 10,
        "n_jobs": -1,
        "num_leaves": 31,
        "objective": null,
        "random_state": null,
        "reg_alpha": 0.0,
        "reg_lambda": 0.0,
        "silent": true,
        "subsample": 1.0,
        "subsample_for_bin": 200000,
        "subsample_freq": 1
    },
    "data": {
        "label": "\"split_feature_name:day_delta\nthreshold:-0.09754902124404906\"",
        "name": "split0",
        "split_feature_name": "day_delta",
        "threshold": -0.09754902124404906,
        "id": "split0",
        "children": [
            {
                "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\"",
                "name": "split1",
                "split_feature_name": "daytime",
                "threshold": 15.250000000000002,
                "id": "split1",
                "children": [
                    {
                        "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\"",
                        "name": "split2",
                        "split_feature_name": "daytime",
                        "threshold": 9.750000000000002,
                        "id": "split2",
                        "children": [
                            {
                                "label": "\"leaf_index:0\nleaf_value:0.0038815088053437367\"",
                                "name": "leaf0",
                                "leaf_index": 0.0,
                                "leaf_value": 0.0038815088053437367,
                                "size": 0.0038815088053437367,
                                "id": "leaf0"
                            },
                            {
                                "label": "\"split_feature_name:high2_2_5\nthreshold:-0.030459167435765263\"",
                                "name": "split4",
                                "split_feature_name": "high2_2_5",
                                "threshold": -0.030459167435765263,
                                "id": "split4",
                                "children": [
                                    {
                                        "label": "\"split_feature_name:stk1_2\nthreshold:-0.005110724829137324\"",
                                        "name": "split24",
                                        "split_feature_name": "stk1_2",
                                        "threshold": -0.005110724829137324,
                                        "id": "split24",
                                        "children": [
                                            {
                                                "label": "\"leaf_index:3\nleaf_value:0.0034055800206069216\"",
                                                "name": "leaf3",
                                                "leaf_index": 3.0,
                                                "leaf_value": 0.0034055800206069216,
                                                "size": 0.0034055800206069216,
                                                "id": "leaf3"
                                            },
                                            {
                                                "label": "\"leaf_index:25\nleaf_value:0.0013222506156804269\"",
                                                "name": "leaf25",
                                                "leaf_index": 25.0,
                                                "leaf_value": 0.0013222506156804269,
                                                "size": 0.0013222506156804269,
                                                "id": "leaf25"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "\"leaf_index:5\nleaf_value:0.0002559176267014373\"",
                                        "name": "leaf5",
                                        "leaf_index": 5.0,
                                        "leaf_value": 0.0002559176267014373,
                                        "size": 0.0002559176267014373,
                                        "id": "leaf5"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "label": "\"split_feature_name:stk5_30\nthreshold:0.05445013754069806\"",
                        "name": "split12",
                        "split_feature_name": "stk5_30",
                        "threshold": 0.05445013754069806,
                        "id": "split12",
                        "children": [
                            {
                                "label": "\"leaf_index:2\nleaf_value:0.005746135744525257\"",
                                "name": "leaf2",
                                "leaf_index": 2.0,
                                "leaf_value": 0.005746135744525257,
                                "size": 0.005746135744525257,
                                "id": "leaf2"
                            },
                            {
                                "label": "\"split_feature_name:high2_5_30\nthreshold:0.0034375452669337396\"",
                                "name": "split13",
                                "split_feature_name": "high2_5_30",
                                "threshold": 0.0034375452669337396,
                                "id": "split13",
                                "children": [
                                    {
                                        "label": "\"split_feature_name:vol1_10\nthreshold:0.1831127926707268\"",
                                        "name": "split14",
                                        "split_feature_name": "vol1_10",
                                        "threshold": 0.1831127926707268,
                                        "id": "split14",
                                        "children": [
                                            {
                                                "label": "\"leaf_index:13\nleaf_value:0.0023026504820091373\"",
                                                "name": "leaf13",
                                                "leaf_index": 13.0,
                                                "leaf_value": 0.0023026504820091373,
                                                "size": 0.0023026504820091373,
                                                "id": "leaf13"
                                            },
                                            {
                                                "label": "\"leaf_index:15\nleaf_value:0.005617032319807717\"",
                                                "name": "leaf15",
                                                "leaf_index": 15.0,
                                                "leaf_value": 0.005617032319807717,
                                                "size": 0.005617032319807717,
                                                "id": "leaf15"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "\"leaf_index:14\nleaf_value:0.0012476082338749763\"",
                                        "name": "leaf14",
                                        "leaf_index": 14.0,
                                        "leaf_value": 0.0012476082338749763,
                                        "size": 0.0012476082338749763,
                                        "id": "leaf14"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\"",
                "name": "split3",
                "split_feature_name": "daytime",
                "threshold": 15.250000000000002,
                "id": "split3",
                "children": [
                    {
                        "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\"",
                        "name": "split5",
                        "split_feature_name": "daytime",
                        "threshold": 9.750000000000002,
                        "id": "split5",
                        "children": [
                            {
                                "label": "\"split_feature_name:day_delta\nthreshold:0.06377673149108888\"",
                                "name": "split6",
                                "split_feature_name": "day_delta",
                                "threshold": 0.06377673149108888,
                                "id": "split6",
                                "children": [
                                    {
                                        "label": "\"split_feature_name:day_delta\nthreshold:-0.0185016393661499\"",
                                        "name": "split7",
                                        "split_feature_name": "day_delta",
                                        "threshold": -0.0185016393661499,
                                        "id": "split7",
                                        "children": [
                                            {
                                                "label": "\"split_feature_name:day_delta\nthreshold:-0.05325555801391601\"",
                                                "name": "split22",
                                                "split_feature_name": "day_delta",
                                                "threshold": -0.05325555801391601,
                                                "id": "split22",
                                                "children": [
                                                    {
                                                        "label": "\"leaf_index:1\nleaf_value:0.0017381035748404879\"",
                                                        "name": "leaf1",
                                                        "leaf_index": 1.0,
                                                        "leaf_value": 0.0017381035748404879,
                                                        "size": 0.0017381035748404879,
                                                        "id": "leaf1"
                                                    },
                                                    {
                                                        "label": "\"leaf_index:23\nleaf_value:0.0006513125706894708\"",
                                                        "name": "leaf23",
                                                        "leaf_index": 23.0,
                                                        "leaf_value": 0.0006513125706894708,
                                                        "size": 0.0006513125706894708,
                                                        "id": "leaf23"
                                                    }
                                                ]
                                            },
                                            {
                                                "label": "\"split_feature_name:day_delta\nthreshold:9.999999682655225e-21\"",
                                                "name": "split9",
                                                "split_feature_name": "day_delta",
                                                "threshold": 9.999999682655225e-21,
                                                "id": "split9",
                                                "children": [
                                                    {
                                                        "label": "\"leaf_index:8\nleaf_value:-0.00011095662323913871\"",
                                                        "name": "leaf8",
                                                        "leaf_index": 8.0,
                                                        "leaf_value": -0.00011095662323913871,
                                                        "size": -0.00011095662323913871,
                                                        "id": "leaf8"
                                                    },
                                                    {
                                                        "label": "\"split_feature_name:low2_5_30\nthreshold:-0.11927295103669165\"",
                                                        "name": "split10",
                                                        "split_feature_name": "low2_5_30",
                                                        "threshold": -0.11927295103669165,
                                                        "id": "split10",
                                                        "children": [
                                                            {
                                                                "label": "\"leaf_index:10\nleaf_value:-0.0028786224015156024\"",
                                                                "name": "leaf10",
                                                                "leaf_index": 10.0,
                                                                "leaf_value": -0.0028786224015156024,
                                                                "size": -0.0028786224015156024,
                                                                "id": "leaf10"
                                                            },
                                                            {
                                                                "label": "\"leaf_index:11\nleaf_value:-0.0007484804924584118\"",
                                                                "name": "leaf11",
                                                                "leaf_index": 11.0,
                                                                "leaf_value": -0.0007484804924584118,
                                                                "size": -0.0007484804924584118,
                                                                "id": "leaf11"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "label": "\"split_feature_name:day_delta\nthreshold:0.11658552289009096\"",
                                        "name": "split8",
                                        "split_feature_name": "day_delta",
                                        "threshold": 0.11658552289009096,
                                        "id": "split8",
                                        "children": [
                                            {
                                                "label": "\"leaf_index:7\nleaf_value:-0.00328894845476291\"",
                                                "name": "leaf7",
                                                "leaf_index": 7.0,
                                                "leaf_value": -0.00328894845476291,
                                                "size": -0.00328894845476291,
                                                "id": "leaf7"
                                            },
                                            {
                                                "label": "\"leaf_index:9\nleaf_value:-0.00856333859882059\"",
                                                "name": "leaf9",
                                                "leaf_index": 9.0,
                                                "leaf_value": -0.00856333859882059,
                                                "size": -0.00856333859882059,
                                                "id": "leaf9"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "\"split_feature_name:stk2_5\nthreshold:-0.1374743431806564\"",
                                "name": "split15",
                                "split_feature_name": "stk2_5",
                                "threshold": -0.1374743431806564,
                                "id": "split15",
                                "children": [
                                    {
                                        "label": "\"leaf_index:6\nleaf_value:0.001395488565407353\"",
                                        "name": "leaf6",
                                        "leaf_index": 6.0,
                                        "leaf_value": 0.001395488565407353,
                                        "size": 0.001395488565407353,
                                        "id": "leaf6"
                                    },
                                    {
                                        "label": "\"split_feature_name:low2_2_5\nthreshold:-0.00774780916981399\"",
                                        "name": "split16",
                                        "split_feature_name": "low2_2_5",
                                        "threshold": -0.00774780916981399,
                                        "id": "split16",
                                        "children": [
                                            {
                                                "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:10699.480468750002\"",
                                                "name": "split23",
                                                "split_feature_name": "avg_dolvol2_5",
                                                "threshold": 10699.480468750002,
                                                "id": "split23",
                                                "children": [
                                                    {
                                                        "label": "\"leaf_index:16\nleaf_value:-0.00023334429182474947\"",
                                                        "name": "leaf16",
                                                        "leaf_index": 16.0,
                                                        "leaf_value": -0.00023334429182474947,
                                                        "size": -0.00023334429182474947,
                                                        "id": "leaf16"
                                                    },
                                                    {
                                                        "label": "\"split_feature_name:stk5_30\nthreshold:0.2321625500917435\"",
                                                        "name": "split27",
                                                        "split_feature_name": "stk5_30",
                                                        "threshold": 0.2321625500917435,
                                                        "id": "split27",
                                                        "children": [
                                                            {
                                                                "label": "\"leaf_index:24\nleaf_value:1.6614422315204224e-05\"",
                                                                "name": "leaf24",
                                                                "leaf_index": 24.0,
                                                                "leaf_value": 1.6614422315204224e-05,
                                                                "size": 1.6614422315204224e-05,
                                                                "id": "leaf24"
                                                            },
                                                            {
                                                                "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:280604.81250000006\"",
                                                                "name": "split28",
                                                                "split_feature_name": "avg_dolvol1_2",
                                                                "threshold": 280604.81250000006,
                                                                "id": "split28",
                                                                "children": [
                                                                    {
                                                                        "label": "\"leaf_index:28\nleaf_value:-0.00042821363702483716\"",
                                                                        "name": "leaf28",
                                                                        "leaf_index": 28.0,
                                                                        "leaf_value": -0.00042821363702483716,
                                                                        "size": -0.00042821363702483716,
                                                                        "id": "leaf28"
                                                                    },
                                                                    {
                                                                        "label": "\"leaf_index:29\nleaf_value:-0.0025831000252383974\"",
                                                                        "name": "leaf29",
                                                                        "leaf_index": 29.0,
                                                                        "leaf_value": -0.0025831000252383974,
                                                                        "size": -0.0025831000252383974,
                                                                        "id": "leaf29"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "label": "\"split_feature_name:day_delta\nthreshold:0.1297319829463959\"",
                                                "name": "split25",
                                                "split_feature_name": "day_delta",
                                                "threshold": 0.1297319829463959,
                                                "id": "split25",
                                                "children": [
                                                    {
                                                        "label": "\"split_feature_name:stk1_2\nthreshold:-0.08991678804159163\"",
                                                        "name": "split26",
                                                        "split_feature_name": "stk1_2",
                                                        "threshold": -0.08991678804159163,
                                                        "id": "split26",
                                                        "children": [
                                                            {
                                                                "label": "\"leaf_index:17\nleaf_value:0.0014790651547353711\"",
                                                                "name": "leaf17",
                                                                "leaf_index": 17.0,
                                                                "leaf_value": 0.0014790651547353711,
                                                                "size": 0.0014790651547353711,
                                                                "id": "leaf17"
                                                            },
                                                            {
                                                                "label": "\"leaf_index:27\nleaf_value:8.704093496987258e-05\"",
                                                                "name": "leaf27",
                                                                "leaf_index": 27.0,
                                                                "leaf_value": 8.704093496987258e-05,
                                                                "size": 8.704093496987258e-05,
                                                                "id": "leaf27"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "label": "\"leaf_index:26\nleaf_value:-0.0007572354754006835\"",
                                                        "name": "leaf26",
                                                        "leaf_index": 26.0,
                                                        "leaf_value": -0.0007572354754006835,
                                                        "size": -0.0007572354754006835,
                                                        "id": "leaf26"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "label": "\"split_feature_name:day_delta\nthreshold:-0.0449075698852539\"",
                        "name": "split11",
                        "split_feature_name": "day_delta",
                        "threshold": -0.0449075698852539,
                        "id": "split11",
                        "children": [
                            {
                                "label": "\"split_feature_name:dayofweek\nthreshold:3.5000000000000004\"",
                                "name": "split18",
                                "split_feature_name": "dayofweek",
                                "threshold": 3.5000000000000004,
                                "id": "split18",
                                "children": [
                                    {
                                        "label": "\"leaf_index:4\nleaf_value:0.000943773165328873\"",
                                        "name": "leaf4",
                                        "leaf_index": 4.0,
                                        "leaf_value": 0.000943773165328873,
                                        "size": 0.000943773165328873,
                                        "id": "leaf4"
                                    },
                                    {
                                        "label": "\"split_feature_name:low2_5_30\nthreshold:-0.07889136672019957\"",
                                        "name": "split29",
                                        "split_feature_name": "low2_5_30",
                                        "threshold": -0.07889136672019957,
                                        "id": "split29",
                                        "children": [
                                            {
                                                "label": "\"leaf_index:19\nleaf_value:0.00442950934462784\"",
                                                "name": "leaf19",
                                                "leaf_index": 19.0,
                                                "leaf_value": 0.00442950934462784,
                                                "size": 0.00442950934462784,
                                                "id": "leaf19"
                                            },
                                            {
                                                "label": "\"leaf_index:30\nleaf_value:0.0015992830606030106\"",
                                                "name": "leaf30",
                                                "leaf_index": 30.0,
                                                "leaf_value": 0.0015992830606030106,
                                                "size": 0.0015992830606030106,
                                                "id": "leaf30"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "\"split_feature_name:low2_5_30\nthreshold:0.04229239560663701\"",
                                "name": "split17",
                                "split_feature_name": "low2_5_30",
                                "threshold": 0.04229239560663701,
                                "id": "split17",
                                "children": [
                                    {
                                        "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:51842.86523437501\"",
                                        "name": "split19",
                                        "split_feature_name": "avg_dolvol1_2",
                                        "threshold": 51842.86523437501,
                                        "id": "split19",
                                        "children": [
                                            {
                                                "label": "\"split_feature_name:low2_2_5\nthreshold:-0.0018845144659280775\"",
                                                "name": "split21",
                                                "split_feature_name": "low2_2_5",
                                                "threshold": -0.0018845144659280775,
                                                "id": "split21",
                                                "children": [
                                                    {
                                                        "label": "\"leaf_index:12\nleaf_value:0.0001551244382148592\"",
                                                        "name": "leaf12",
                                                        "leaf_index": 12.0,
                                                        "leaf_value": 0.0001551244382148592,
                                                        "size": 0.0001551244382148592,
                                                        "id": "leaf12"
                                                    },
                                                    {
                                                        "label": "\"leaf_index:22\nleaf_value:0.0007287439060888816\"",
                                                        "name": "leaf22",
                                                        "leaf_index": 22.0,
                                                        "leaf_value": 0.0007287439060888816,
                                                        "size": 0.0007287439060888816,
                                                        "id": "leaf22"
                                                    }
                                                ]
                                            },
                                            {
                                                "label": "\"split_feature_name:day_delta\nthreshold:0.030769199132919315\"",
                                                "name": "split20",
                                                "split_feature_name": "day_delta",
                                                "threshold": 0.030769199132919315,
                                                "id": "split20",
                                                "children": [
                                                    {
                                                        "label": "\"leaf_index:20\nleaf_value:0.0005885742184751046\"",
                                                        "name": "leaf20",
                                                        "leaf_index": 20.0,
                                                        "leaf_value": 0.0005885742184751046,
                                                        "size": 0.0005885742184751046,
                                                        "id": "leaf20"
                                                    },
                                                    {
                                                        "label": "\"leaf_index:21\nleaf_value:-0.001353014023341281\"",
                                                        "name": "leaf21",
                                                        "leaf_index": 21.0,
                                                        "leaf_value": -0.001353014023341281,
                                                        "size": -0.001353014023341281,
                                                        "id": "leaf21"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "label": "\"leaf_index:18\nleaf_value:0.002927958618119964\"",
                                        "name": "leaf18",
                                        "leaf_index": 18.0,
                                        "leaf_value": 0.002927958618119964,
                                        "size": 0.002927958618119964,
                                        "id": "leaf18"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "edges": {
        "split0": {
            "split3": ">"
        },
        "split1": {
            "split12": ">"
        },
        "split2": {
            "split4": ">"
        },
        "split4": {
            "leaf5": ">"
        },
        "split24": {
            "leaf25": ">"
        },
        "split12": {
            "split13": ">"
        },
        "split13": {
            "leaf14": ">"
        },
        "split14": {
            "leaf15": ">"
        },
        "split3": {
            "split11": ">"
        },
        "split5": {
            "split15": ">"
        },
        "split6": {
            "split8": ">"
        },
        "split7": {
            "split9": ">"
        },
        "split22": {
            "leaf23": ">"
        },
        "split9": {
            "split10": ">"
        },
        "split10": {
            "leaf11": ">"
        },
        "split8": {
            "leaf9": ">"
        },
        "split15": {
            "split16": ">"
        },
        "split16": {
            "split25": ">"
        },
        "split23": {
            "split27": ">"
        },
        "split27": {
            "split28": ">"
        },
        "split28": {
            "leaf29": ">"
        },
        "split25": {
            "leaf26": ">"
        },
        "split26": {
            "leaf27": ">"
        },
        "split11": {
            "split17": ">"
        },
        "split18": {
            "split29": ">"
        },
        "split29": {
            "leaf30": ">"
        },
        "split17": {
            "leaf18": ">"
        },
        "split19": {
            "split20": ">"
        },
        "split21": {
            "leaf22": ">"
        },
        "split20": {
            "leaf21": ">"
        }
    },
    "model": {
        "name": "tree",
        "num_class": 1,
        "num_tree_per_iteration": 1,
        "label_index": 0,
        "max_feature_idx": 14,
        "feature_names": [
            "daytime",
            "dayofweek",
            "day_delta",
            "day_delta_rank",
            "avg_dolvol1_2",
            "avg_dolvol2_5",
            "avg_dolvol5_30",
            "stk1_2",
            "stk2_5",
            "high2_2_5",
            "low2_2_5",
            "stk5_30",
            "high2_5_30",
            "low2_5_30",
            "vol1_10"
        ],
        "tree_info": [
            {
                "tree_index": 0,
                "num_leaves": 31,
                "num_cat": 0,
                "shrinkage": 1,
                "tree_structure": {
                    "split_index": 0,
                    "split_feature": 2,
                    "split_gain": 0.16928922842520885,
                    "threshold": -0.09754902124404906,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0,
                    "internal_count": 29079,
                    "left_child": {
                        "split_index": 1,
                        "split_feature": 0,
                        "split_gain": 0.10256095915301872,
                        "threshold": 15.250000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.011038451113286395,
                        "internal_count": 1326,
                        "left_child": {
                            "split_index": 2,
                            "split_feature": 0,
                            "split_gain": 0.0673945129858817,
                            "threshold": 9.750000000000002,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.007992747799504114,
                            "internal_count": 1184,
                            "left_child": {
                                "leaf_index": 0,
                                "leaf_value": 0.0038815088053437367,
                                "leaf_count": 70
                            },
                            "right_child": {
                                "split_index": 4,
                                "split_feature": 9,
                                "split_gain": 0.03692382333690149,
                                "threshold": -0.030459167435765263,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.006101524354587063,
                                "internal_count": 1114,
                                "left_child": {
                                    "split_index": 24,
                                    "split_feature": 7,
                                    "split_gain": 0.010541890623312566,
                                    "threshold": -0.005110724829137324,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.013868941585927512,
                                    "internal_count": 395,
                                    "left_child": {
                                        "leaf_index": 3,
                                        "leaf_value": 0.0034055800206069216,
                                        "leaf_count": 26
                                    },
                                    "right_child": {
                                        "leaf_index": 25,
                                        "leaf_value": 0.0013222506156804269,
                                        "leaf_count": 369
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 5,
                                    "leaf_value": 0.0002559176267014373,
                                    "leaf_count": 719
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 12,
                            "split_feature": 11,
                            "split_gain": 0.018427170037853602,
                            "threshold": 0.05445013754069806,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0364336111380626,
                            "internal_count": 142,
                            "left_child": {
                                "leaf_index": 2,
                                "leaf_value": 0.005746135744525257,
                                "leaf_count": 34
                            },
                            "right_child": {
                                "split_index": 13,
                                "split_feature": 12,
                                "split_gain": 0.018829131125290166,
                                "threshold": 0.0034375452669337396,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.030041964893825934,
                                "internal_count": 108,
                                "left_child": {
                                    "split_index": 14,
                                    "split_feature": 14,
                                    "split_gain": 0.01946378834386646,
                                    "threshold": 0.1831127926707268,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.039573765522144526,
                                    "internal_count": 71,
                                    "left_child": {
                                        "leaf_index": 13,
                                        "leaf_value": 0.0023026504820091373,
                                        "leaf_count": 34
                                    },
                                    "right_child": {
                                        "leaf_index": 15,
                                        "leaf_value": 0.005617032319807717,
                                        "leaf_count": 37
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 14,
                                    "leaf_value": 0.0012476082338749763,
                                    "leaf_count": 37
                                }
                            }
                        }
                    },
                    "right_child": {
                        "split_index": 3,
                        "split_feature": 0,
                        "split_gain": 0.03856358616767143,
                        "threshold": 15.250000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.000527401845701179,
                        "internal_count": 27753,
                        "left_child": {
                            "split_index": 5,
                            "split_feature": 0,
                            "split_gain": 0.03130533098816665,
                            "threshold": 9.750000000000002,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.0008631029023715139,
                            "internal_count": 25671,
                            "left_child": {
                                "split_index": 6,
                                "split_feature": 2,
                                "split_gain": 0.17674322016880092,
                                "threshold": 0.06377673149108888,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.004493584127473203,
                                "internal_count": 2174,
                                "left_child": {
                                    "split_index": 7,
                                    "split_feature": 2,
                                    "split_gain": 0.08645291910165612,
                                    "threshold": -0.0185016393661499,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00253455463108526,
                                    "internal_count": 2076,
                                    "left_child": {
                                        "split_index": 22,
                                        "split_feature": 2,
                                        "split_gain": 0.011569414999253333,
                                        "threshold": -0.05325555801391601,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.00840385345745473,
                                        "internal_count": 536,
                                        "left_child": {
                                            "leaf_index": 1,
                                            "leaf_value": 0.0017381035748404879,
                                            "leaf_count": 129
                                        },
                                        "right_child": {
                                            "leaf_index": 23,
                                            "leaf_value": 0.0006513125706894708,
                                            "leaf_count": 407
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 9,
                                        "split_feature": 2,
                                        "split_gain": 0.021951776412026322,
                                        "threshold": 9.999999682655225e-21,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.006341688874888789,
                                        "internal_count": 1540,
                                        "left_child": {
                                            "leaf_index": 8,
                                            "leaf_value": -0.00011095662323913871,
                                            "leaf_count": 635
                                        },
                                        "right_child": {
                                            "split_index": 10,
                                            "split_feature": 13,
                                            "split_gain": 0.023439595341408256,
                                            "threshold": -0.11927295103669165,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.009504236307746708,
                                            "internal_count": 905,
                                            "left_child": {
                                                "leaf_index": 10,
                                                "leaf_value": -0.0028786224015156024,
                                                "leaf_count": 55
                                            },
                                            "right_child": {
                                                "leaf_index": 11,
                                                "leaf_value": -0.0007484804924584118,
                                                "leaf_count": 850
                                            }
                                        }
                                    }
                                },
                                "right_child": {
                                    "split_index": 8,
                                    "split_feature": 2,
                                    "split_gain": 0.048967454235448016,
                                    "threshold": 0.11658552289009096,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.04599302529585453,
                                    "internal_count": 98,
                                    "left_child": {
                                        "leaf_index": 7,
                                        "leaf_value": -0.00328894845476291,
                                        "leaf_count": 75
                                    },
                                    "right_child": {
                                        "leaf_index": 9,
                                        "leaf_value": -0.00856333859882059,
                                        "leaf_count": 23
                                    }
                                }
                            },
                            "right_child": {
                                "split_index": 15,
                                "split_feature": 8,
                                "split_gain": 0.01786199433205746,
                                "threshold": -0.1374743431806564,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.0005272018859280925,
                                "internal_count": 23497,
                                "left_child": {
                                    "leaf_index": 6,
                                    "leaf_value": 0.001395488565407353,
                                    "leaf_count": 94
                                },
                                "right_child": {
                                    "split_index": 16,
                                    "split_feature": 10,
                                    "split_gain": 0.017655327165286505,
                                    "threshold": -0.00774780916981399,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0005824588379673694,
                                    "internal_count": 23403,
                                    "left_child": {
                                        "split_index": 23,
                                        "split_feature": 5,
                                        "split_gain": 0.011324308913758043,
                                        "threshold": 10699.480468750002,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.001663972679083014,
                                        "internal_count": 9176,
                                        "left_child": {
                                            "leaf_index": 16,
                                            "leaf_value": -0.00023334429182474947,
                                            "leaf_count": 3563
                                        },
                                        "right_child": {
                                            "split_index": 27,
                                            "split_feature": 11,
                                            "split_gain": 0.010115677902975618,
                                            "threshold": 0.2321625500917435,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.0007788783838480873,
                                            "internal_count": 5613,
                                            "left_child": {
                                                "leaf_index": 24,
                                                "leaf_value": 1.6614422315204224e-05,
                                                "leaf_count": 5466
                                            },
                                            "right_child": {
                                                "split_index": 28,
                                                "split_feature": 4,
                                                "split_gain": 0.0102347309669321,
                                                "threshold": 280604.81250000006,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.008964960962812319,
                                                "internal_count": 147,
                                                "left_child": {
                                                    "leaf_index": 28,
                                                    "leaf_value": -0.00042821363702483716,
                                                    "leaf_count": 120
                                                },
                                                "right_child": {
                                                    "leaf_index": 29,
                                                    "leaf_value": -0.0025831000252383974,
                                                    "leaf_count": 27
                                                }
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 25,
                                        "split_feature": 2,
                                        "split_gain": 0.010150219726761164,
                                        "threshold": 0.1297319829463959,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.00011508604191434542,
                                        "internal_count": 14227,
                                        "left_child": {
                                            "split_index": 26,
                                            "split_feature": 7,
                                            "split_gain": 0.010615906686087797,
                                            "threshold": -0.08991678804159163,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.00019989599103044118,
                                            "internal_count": 14085,
                                            "left_child": {
                                                "leaf_index": 17,
                                                "leaf_value": 0.0014790651547353711,
                                                "leaf_count": 55
                                            },
                                            "right_child": {
                                                "leaf_index": 27,
                                                "leaf_value": 8.704093496987258e-05,
                                                "leaf_count": 14030
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 26,
                                            "leaf_value": -0.0007572354754006835,
                                            "leaf_count": 142
                                        }
                                    }
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 11,
                            "split_feature": 2,
                            "split_gain": 0.02138510085378565,
                            "threshold": -0.0449075698852539,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0036117825086620123,
                            "internal_count": 2082,
                            "left_child": {
                                "split_index": 18,
                                "split_feature": 1,
                                "split_gain": 0.013792221518441707,
                                "threshold": 3.5000000000000004,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.01336236722358609,
                                "internal_count": 203,
                                "left_child": {
                                    "leaf_index": 4,
                                    "leaf_value": 0.000943773165328873,
                                    "leaf_count": 154
                                },
                                "right_child": {
                                    "split_index": 29,
                                    "split_feature": 13,
                                    "split_gain": 0.009710300829302618,
                                    "threshold": -0.07889136672019957,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.027975099022133153,
                                    "internal_count": 49,
                                    "left_child": {
                                        "leaf_index": 19,
                                        "leaf_value": 0.00442950934462784,
                                        "leaf_count": 22
                                    },
                                    "right_child": {
                                        "leaf_index": 30,
                                        "leaf_value": 0.0015992830606030106,
                                        "leaf_count": 27
                                    }
                                }
                            },
                            "right_child": {
                                "split_index": 17,
                                "split_feature": 13,
                                "split_gain": 0.015043964420131966,
                                "threshold": 0.04229239560663701,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.0025583664910305125,
                                "internal_count": 1879,
                                "left_child": {
                                    "split_index": 19,
                                    "split_feature": 4,
                                    "split_gain": 0.01162037081103748,
                                    "threshold": 51842.86523437501,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.002250386042381922,
                                    "internal_count": 1857,
                                    "left_child": {
                                        "split_index": 21,
                                        "split_feature": 10,
                                        "split_gain": 0.012868800634588718,
                                        "threshold": -0.0018845144659280775,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.0032438728856849642,
                                        "internal_count": 1604,
                                        "left_child": {
                                            "leaf_index": 12,
                                            "leaf_value": 0.0001551244382148592,
                                            "leaf_count": 928
                                        },
                                        "right_child": {
                                            "leaf_index": 22,
                                            "leaf_value": 0.0007287439060888816,
                                            "leaf_count": 676
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 20,
                                        "split_feature": 2,
                                        "split_gain": 0.023780809413487702,
                                        "threshold": 0.030769199132919315,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.004048242007650016,
                                        "internal_count": 253,
                                        "left_child": {
                                            "leaf_index": 20,
                                            "leaf_value": 0.0005885742184751046,
                                            "leaf_count": 133
                                        },
                                        "right_child": {
                                            "leaf_index": 21,
                                            "leaf_value": -0.001353014023341281,
                                            "leaf_count": 120
                                        }
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 18,
                                    "leaf_value": 0.002927958618119964,
                                    "leaf_count": 22
                                }
                            }
                        }
                    }
                }
            },
            {
                "tree_index": 1,
                "num_leaves": 31,
                "num_cat": 0,
                "shrinkage": 0.1,
                "tree_structure": {
                    "split_index": 0,
                    "split_feature": 2,
                    "split_gain": 0.13712427421892698,
                    "threshold": -0.09754902124404906,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0,
                    "internal_count": 29079,
                    "left_child": {
                        "split_index": 1,
                        "split_feature": 0,
                        "split_gain": 0.08307437763592626,
                        "threshold": 15.250000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.009934605896005602,
                        "internal_count": 1326,
                        "left_child": {
                            "split_index": 2,
                            "split_feature": 0,
                            "split_gain": 0.05458955441569941,
                            "threshold": 9.750000000000002,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0071934729016902565,
                            "internal_count": 1184,
                            "left_child": {
                                "leaf_index": 0,
                                "leaf_value": 0.0034281195854834684,
                                "leaf_count": 70
                            },
                            "right_child": {
                                "split_index": 4,
                                "split_feature": 9,
                                "split_gain": 0.029908296451152,
                                "threshold": -0.030459167435765263,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.005491371818458561,
                                "internal_count": 1114,
                                "left_child": {
                                    "split_index": 26,
                                    "split_feature": 2,
                                    "split_gain": 0.009847800304019057,
                                    "threshold": -0.28124994039535517,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.012482047273871,
                                    "internal_count": 395,
                                    "left_child": {
                                        "split_index": 27,
                                        "split_feature": 6,
                                        "split_gain": 0.01498204348959857,
                                        "threshold": 25013.444335937504,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.02544981437534386,
                                        "internal_count": 51,
                                        "left_child": {
                                            "leaf_index": 3,
                                            "leaf_value": 0.004436085973461361,
                                            "leaf_count": 23
                                        },
                                        "right_child": {
                                            "leaf_index": 28,
                                            "leaf_value": 0.0009915741401657994,
                                            "leaf_count": 28
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 27,
                                        "leaf_value": 0.0010559500407082872,
                                        "leaf_count": 344
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 5,
                                    "leaf_value": 0.00016508755668759268,
                                    "leaf_count": 719
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 12,
                            "split_feature": 7,
                            "split_gain": 0.017409221839346845,
                            "threshold": 0.02216559369117022,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.03279025001762087,
                            "internal_count": 142,
                            "left_child": {
                                "split_index": 13,
                                "split_feature": 12,
                                "split_gain": 0.03756954666796536,
                                "threshold": -0.010547527577728031,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.03936306972893709,
                                "internal_count": 105,
                                "left_child": {
                                    "split_index": 14,
                                    "split_feature": 14,
                                    "split_gain": 0.015519228869735113,
                                    "threshold": 0.1831127926707268,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.06120508448220789,
                                    "internal_count": 45,
                                    "left_child": {
                                        "leaf_index": 2,
                                        "leaf_value": 0.004135214651580013,
                                        "leaf_count": 21
                                    },
                                    "right_child": {
                                        "leaf_index": 15,
                                        "leaf_value": 0.007857640520281468,
                                        "leaf_count": 24
                                    }
                                },
                                "right_child": {
                                    "split_index": 23,
                                    "split_feature": 8,
                                    "split_gain": 0.010359908056715987,
                                    "threshold": 0.006875310093164445,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.022981558663983985,
                                    "internal_count": 60,
                                    "left_child": {
                                        "leaf_index": 14,
                                        "leaf_value": 0.003371049568118502,
                                        "leaf_count": 36
                                    },
                                    "right_child": {
                                        "leaf_index": 24,
                                        "leaf_value": 0.0006888153138182437,
                                        "leaf_count": 24
                                    }
                                }
                            },
                            "right_child": {
                                "leaf_index": 13,
                                "leaf_value": 0.0014137653539561341,
                                "leaf_count": 37
                            }
                        }
                    },
                    "right_child": {
                        "split_index": 3,
                        "split_feature": 0,
                        "split_gain": 0.031236503188153672,
                        "threshold": 15.250000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.00047466173651027895,
                        "internal_count": 27753,
                        "left_child": {
                            "split_index": 5,
                            "split_feature": 0,
                            "split_gain": 0.02535731999161525,
                            "threshold": 9.750000000000002,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.0007767926797386403,
                            "internal_count": 25671,
                            "left_child": {
                                "split_index": 6,
                                "split_feature": 2,
                                "split_gain": 0.14316200562767648,
                                "threshold": 0.06377673149108888,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.0040442259041760555,
                                "internal_count": 2174,
                                "left_child": {
                                    "split_index": 7,
                                    "split_feature": 2,
                                    "split_gain": 0.07002686381399774,
                                    "threshold": -0.0185016393661499,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0022810993741087136,
                                    "internal_count": 2076,
                                    "left_child": {
                                        "split_index": 28,
                                        "split_feature": 2,
                                        "split_gain": 0.009602012278329328,
                                        "threshold": -0.04236608743667602,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.0075634678593014,
                                        "internal_count": 536,
                                        "left_child": {
                                            "leaf_index": 1,
                                            "leaf_value": 0.0013049437179288362,
                                            "leaf_count": 200
                                        },
                                        "right_child": {
                                            "leaf_index": 29,
                                            "leaf_value": 0.0004298009930737733,
                                            "leaf_count": 336
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 9,
                                        "split_feature": 2,
                                        "split_gain": 0.018421961567688175,
                                        "threshold": 0.03416720032691956,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00570752017742548,
                                        "internal_count": 1540,
                                        "left_child": {
                                            "leaf_index": 8,
                                            "leaf_value": -0.0004352193854435328,
                                            "leaf_count": 1335
                                        },
                                        "right_child": {
                                            "leaf_index": 10,
                                            "leaf_value": -0.0014533669646654033,
                                            "leaf_count": 205
                                        }
                                    }
                                },
                                "right_child": {
                                    "split_index": 8,
                                    "split_feature": 2,
                                    "split_gain": 0.03966363271828624,
                                    "threshold": 0.11658552289009096,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.04139372260233729,
                                    "internal_count": 98,
                                    "left_child": {
                                        "leaf_index": 7,
                                        "leaf_value": -0.003025291966274381,
                                        "leaf_count": 75
                                    },
                                    "right_child": {
                                        "leaf_index": 9,
                                        "leaf_value": -0.007772242784014215,
                                        "leaf_count": 23
                                    }
                                }
                            },
                            "right_child": {
                                "split_index": 15,
                                "split_feature": 10,
                                "split_gain": 0.014796247400207768,
                                "threshold": -0.004402069142088293,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.0004744817536660803,
                                "internal_count": 23497,
                                "left_child": {
                                    "split_index": 25,
                                    "split_feature": 5,
                                    "split_gain": 0.010022609831174104,
                                    "threshold": 14038.712890625002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0012956917070194678,
                                    "internal_count": 11346,
                                    "left_child": {
                                        "leaf_index": 6,
                                        "leaf_value": -0.00022905154473527238,
                                        "leaf_count": 5351
                                    },
                                    "right_child": {
                                        "split_index": 29,
                                        "split_feature": 12,
                                        "split_gain": 0.009174433055215824,
                                        "threshold": -0.09298333153128623,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.0004077347704851468,
                                        "internal_count": 5995,
                                        "left_child": {
                                            "leaf_index": 26,
                                            "leaf_value": -0.0016550730504085159,
                                            "leaf_count": 35
                                        },
                                        "right_child": {
                                            "leaf_index": 30,
                                            "leaf_value": -3.129352988952139e-05,
                                            "leaf_count": 5960
                                        }
                                    }
                                },
                                "right_child": {
                                    "split_index": 20,
                                    "split_feature": 6,
                                    "split_gain": 0.010888642846945738,
                                    "threshold": 14088.141113281252,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0002923232937166482,
                                    "internal_count": 12151,
                                    "left_child": {
                                        "leaf_index": 16,
                                        "leaf_value": 0.00013993935007790823,
                                        "leaf_count": 5132
                                    },
                                    "right_child": {
                                        "split_index": 24,
                                        "split_feature": 7,
                                        "split_gain": 0.010310962126898552,
                                        "threshold": -0.08991678804159163,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.0005171202598728106,
                                        "internal_count": 7019,
                                        "left_child": {
                                            "leaf_index": 21,
                                            "leaf_value": 0.0011472700898286323,
                                            "leaf_count": 71
                                        },
                                        "right_child": {
                                            "leaf_index": 25,
                                            "leaf_value": -6.396414605390885e-05,
                                            "leaf_count": 6948
                                        }
                                    }
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 10,
                            "split_feature": 1,
                            "split_gain": 0.01813209121503174,
                            "threshold": 3.5000000000000004,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0032506040865518063,
                            "internal_count": 2082,
                            "left_child": {
                                "split_index": 17,
                                "split_feature": 6,
                                "split_gain": 0.011783460227704736,
                                "threshold": 445701.23437500006,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.0017936832997309938,
                                "internal_count": 1674,
                                "left_child": {
                                    "split_index": 18,
                                    "split_feature": 13,
                                    "split_gain": 0.011628507033984666,
                                    "threshold": 0.03554580919444562,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0020998549762112732,
                                    "internal_count": 1652,
                                    "left_child": {
                                        "split_index": 19,
                                        "split_feature": 12,
                                        "split_gain": 0.011612204357292686,
                                        "threshold": -0.0045129500795155755,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.0017846011731979606,
                                        "internal_count": 1629,
                                        "left_child": {
                                            "leaf_index": 4,
                                            "leaf_value": 0.0016635926248615282,
                                            "leaf_count": 51
                                        },
                                        "right_child": {
                                            "split_index": 21,
                                            "split_feature": 4,
                                            "split_gain": 0.010373031311587635,
                                            "threshold": 51842.86523437501,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.0013046153817871347,
                                            "internal_count": 1578,
                                            "left_child": {
                                                "leaf_index": 20,
                                                "leaf_value": 0.00022980879948826213,
                                                "leaf_count": 1372
                                            },
                                            "right_child": {
                                                "split_index": 22,
                                                "split_feature": 2,
                                                "split_gain": 0.017653926465730635,
                                                "threshold": 0.08604592084884645,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.0053121051287323175,
                                                "internal_count": 206,
                                                "left_child": {
                                                    "leaf_index": 22,
                                                    "leaf_value": -0.00013421334234857798,
                                                    "leaf_count": 174
                                                },
                                                "right_child": {
                                                    "leaf_index": 23,
                                                    "leaf_value": -0.002689882627601037,
                                                    "leaf_count": 32
                                                }
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 19,
                                        "leaf_value": 0.0024428048241806333,
                                        "leaf_count": 23
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 18,
                                    "leaf_value": -0.0021197026225060903,
                                    "leaf_count": 22
                                }
                            },
                            "right_child": {
                                "split_index": 11,
                                "split_feature": 13,
                                "split_gain": 0.023277462154230384,
                                "threshold": -0.07889136672019957,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.009228264373654847,
                                "internal_count": 408,
                                "left_child": {
                                    "split_index": 16,
                                    "split_feature": 5,
                                    "split_gain": 0.012013295531721084,
                                    "threshold": 57006.15234375001,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.028567641577898973,
                                    "internal_count": 54,
                                    "left_child": {
                                        "leaf_index": 11,
                                        "leaf_value": 0.0017128070530495335,
                                        "leaf_count": 34
                                    },
                                    "right_child": {
                                        "leaf_index": 17,
                                        "leaf_value": 0.004801491235848517,
                                        "leaf_count": 20
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 12,
                                    "leaf_value": 0.0006278189884871845,
                                    "leaf_count": 354
                                }
                            }
                        }
                    }
                }
            },
            {
                "tree_index": 2,
                "num_leaves": 31,
                "num_cat": 0,
                "shrinkage": 0.1,
                "tree_structure": {
                    "split_index": 0,
                    "split_feature": 2,
                    "split_gain": 0.11506699075724511,
                    "threshold": -0.1306527256965637,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0,
                    "internal_count": 29079,
                    "left_child": {
                        "split_index": 1,
                        "split_feature": 0,
                        "split_gain": 0.05579571749465427,
                        "threshold": 15.250000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.012029476920261756,
                        "internal_count": 774,
                        "left_child": {
                            "split_index": 2,
                            "split_feature": 9,
                            "split_gain": 0.04634676883715822,
                            "threshold": -0.0790327563881874,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.008969066510070641,
                            "internal_count": 685,
                            "left_child": {
                                "split_index": 11,
                                "split_feature": 5,
                                "split_gain": 0.020943597543838094,
                                "threshold": 16840.613281250004,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.026817415371867052,
                                "internal_count": 120,
                                "left_child": {
                                    "leaf_index": 0,
                                    "leaf_value": 0.005193698947102978,
                                    "leaf_count": 26
                                },
                                "right_child": {
                                    "leaf_index": 12,
                                    "leaf_value": 0.001986944806784332,
                                    "leaf_count": 94
                                }
                            },
                            "right_child": {
                                "split_index": 23,
                                "split_feature": 7,
                                "split_gain": 0.009775259279430366,
                                "threshold": -0.052430111914873116,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.005178266751812996,
                                "internal_count": 565,
                                "left_child": {
                                    "leaf_index": 3,
                                    "leaf_value": 0.002584293765142899,
                                    "leaf_count": 22
                                },
                                "right_child": {
                                    "leaf_index": 24,
                                    "leaf_value": 0.0004341024100263177,
                                    "leaf_count": 543
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 7,
                            "split_feature": 7,
                            "split_gain": 0.030320310900321154,
                            "threshold": -0.001480124541558325,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.03558432108858663,
                            "internal_count": 89,
                            "left_child": {
                                "leaf_index": 2,
                                "leaf_value": 0.0067794851966689095,
                                "leaf_count": 22
                            },
                            "right_child": {
                                "split_index": 15,
                                "split_feature": 6,
                                "split_gain": 0.017008901287696984,
                                "threshold": 90906.61328125001,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.025007728859955974,
                                "internal_count": 67,
                                "left_child": {
                                    "split_index": 16,
                                    "split_feature": 13,
                                    "split_gain": 0.016528350383012064,
                                    "threshold": -0.22468289732933042,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.014614109738799248,
                                    "internal_count": 47,
                                    "left_child": {
                                        "leaf_index": 8,
                                        "leaf_value": -0.0002239339597648583,
                                        "leaf_count": 26
                                    },
                                    "right_child": {
                                        "leaf_index": 17,
                                        "leaf_value": 0.0035480285107734656,
                                        "leaf_count": 21
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 16,
                                    "leaf_value": 0.004943273379467428,
                                    "leaf_count": 20
                                }
                            }
                        }
                    },
                    "right_child": {
                        "split_index": 3,
                        "split_feature": 2,
                        "split_gain": 0.03572418641341544,
                        "threshold": -0.04744893312454223,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.0003289459523260024,
                        "internal_count": 28305,
                        "left_child": {
                            "split_index": 8,
                            "split_feature": 0,
                            "split_gain": 0.029454959980360643,
                            "threshold": 9.750000000000002,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0030129115758483057,
                            "internal_count": 2874,
                            "left_child": {
                                "split_index": 28,
                                "split_feature": 9,
                                "split_gain": 0.008330095247869637,
                                "threshold": -0.0790327563881874,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.014386046520584391,
                                "internal_count": 211,
                                "left_child": {
                                    "leaf_index": 1,
                                    "leaf_value": -0.0002374298176549089,
                                    "leaf_count": 26
                                },
                                "right_child": {
                                    "leaf_index": 29,
                                    "leaf_value": 0.0016741554423965314,
                                    "leaf_count": 185
                                }
                            },
                            "right_child": {
                                "split_index": 9,
                                "split_feature": 0,
                                "split_gain": 0.031681294537675785,
                                "threshold": 15.250000000000002,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.002111773208090396,
                                "internal_count": 2663,
                                "left_child": {
                                    "leaf_index": 9,
                                    "leaf_value": 0.00010237520817968662,
                                    "leaf_count": 2422
                                },
                                "right_child": {
                                    "split_index": 18,
                                    "split_feature": 11,
                                    "split_gain": 0.012242976422352662,
                                    "threshold": 0.17499598115682605,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.013046159796816243,
                                    "internal_count": 241,
                                    "left_child": {
                                        "split_index": 20,
                                        "split_feature": 1,
                                        "split_gain": 0.010333671285133766,
                                        "threshold": 3.5000000000000004,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.015190303289240365,
                                        "internal_count": 221,
                                        "left_child": {
                                            "leaf_index": 10,
                                            "leaf_value": 0.001101590511721692,
                                            "leaf_count": 161
                                        },
                                        "right_child": {
                                            "split_index": 21,
                                            "split_feature": 10,
                                            "split_gain": 0.012697492478713733,
                                            "threshold": -0.00943406345322728,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.02639160505083661,
                                            "internal_count": 60,
                                            "left_child": {
                                                "leaf_index": 21,
                                                "leaf_value": 0.0015322744934804322,
                                                "leaf_count": 38
                                            },
                                            "right_child": {
                                                "leaf_index": 22,
                                                "leaf_value": 0.004551054525125602,
                                                "leaf_count": 22
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 19,
                                        "leaf_value": -0.001064662579447031,
                                        "leaf_count": 20
                                    }
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 4,
                            "split_feature": 0,
                            "split_gain": 0.03992067024326274,
                            "threshold": 9.750000000000002,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.0007066148814272159,
                            "internal_count": 25431,
                            "left_child": {
                                "split_index": 5,
                                "split_feature": 2,
                                "split_gain": 0.10810095619818759,
                                "threshold": 0.08891305327415468,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.004989230279496137,
                                "internal_count": 2005,
                                "left_child": {
                                    "split_index": 6,
                                    "split_feature": 2,
                                    "split_gain": 0.04498213999191053,
                                    "threshold": 9.999999682655225e-21,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0039021983382741304,
                                    "internal_count": 1962,
                                    "left_child": {
                                        "split_index": 24,
                                        "split_feature": 9,
                                        "split_gain": 0.008890809371342975,
                                        "threshold": -0.030459167435765263,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.0007845573013047376,
                                        "internal_count": 1002,
                                        "left_child": {
                                            "leaf_index": 4,
                                            "leaf_value": -0.0007968470083701855,
                                            "leaf_count": 104
                                        },
                                        "right_child": {
                                            "split_index": 25,
                                            "split_feature": 2,
                                            "split_gain": 0.009049569111724203,
                                            "threshold": -0.01901382207870483,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.0017982709405482628,
                                            "internal_count": 898,
                                            "left_child": {
                                                "leaf_index": 25,
                                                "leaf_value": 0.0006359896772860354,
                                                "leaf_count": 293
                                            },
                                            "right_child": {
                                                "leaf_index": 26,
                                                "leaf_value": -4.1091314022436984e-05,
                                                "leaf_count": 605
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 10,
                                        "split_feature": 13,
                                        "split_gain": 0.021291814271727036,
                                        "threshold": -0.11927295103669165,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.008793999537084573,
                                        "internal_count": 960,
                                        "left_child": {
                                            "leaf_index": 7,
                                            "leaf_value": -0.0027033643119011687,
                                            "leaf_count": 60
                                        },
                                        "right_child": {
                                            "split_index": 17,
                                            "split_feature": 2,
                                            "split_gain": 0.013913469575197339,
                                            "threshold": 0.05438703298568726,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.007578023298289433,
                                            "internal_count": 900,
                                            "left_child": {
                                                "split_index": 27,
                                                "split_feature": 11,
                                                "split_gain": 0.008569609244958795,
                                                "threshold": -0.07408649846911429,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.00632481147208876,
                                                "internal_count": 817,
                                                "left_child": {
                                                    "leaf_index": 11,
                                                    "leaf_value": -0.0014326637729739204,
                                                    "leaf_count": 115
                                                },
                                                "right_child": {
                                                    "leaf_index": 28,
                                                    "leaf_value": -0.0005013970988285625,
                                                    "leaf_count": 702
                                                }
                                            },
                                            "right_child": {
                                                "leaf_index": 18,
                                                "leaf_value": -0.001991385537065027,
                                                "leaf_count": 83
                                            }
                                        }
                                    }
                                },
                                "right_child": {
                                    "split_index": 12,
                                    "split_feature": 4,
                                    "split_gain": 0.019875601791892183,
                                    "threshold": 114119.64843750001,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.054588222574323504,
                                    "internal_count": 43,
                                    "left_child": {
                                        "leaf_index": 6,
                                        "leaf_value": -0.0032582906609778073,
                                        "leaf_count": 21
                                    },
                                    "right_child": {
                                        "leaf_index": 13,
                                        "leaf_value": -0.007559329690411687,
                                        "leaf_count": 22
                                    }
                                }
                            },
                            "right_child": {
                                "split_index": 13,
                                "split_feature": 13,
                                "split_gain": 0.01903738169688396,
                                "threshold": -0.009247005917131899,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.00034007155891683486,
                                "internal_count": 23426,
                                "left_child": {
                                    "split_index": 14,
                                    "split_feature": 7,
                                    "split_gain": 0.019359696259524033,
                                    "threshold": -0.08991678804159163,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0010364619274566345,
                                    "internal_count": 14671,
                                    "left_child": {
                                        "leaf_index": 5,
                                        "leaf_value": 0.0024775476079506413,
                                        "leaf_count": 29
                                    },
                                    "right_child": {
                                        "split_index": 19,
                                        "split_feature": 10,
                                        "split_gain": 0.012192584984020337,
                                        "threshold": -0.014016961213201283,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.0010875851484784846,
                                        "internal_count": 14642,
                                        "left_child": {
                                            "split_index": 26,
                                            "split_feature": 6,
                                            "split_gain": 0.008767958514667048,
                                            "threshold": 16482.351562500004,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.002441652491897596,
                                            "internal_count": 4573,
                                            "left_child": {
                                                "leaf_index": 15,
                                                "leaf_value": -0.0003790754370648537,
                                                "leaf_count": 2346
                                            },
                                            "right_child": {
                                                "leaf_index": 27,
                                                "leaf_value": -0.00010204611997782846,
                                                "leaf_count": 2227
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 20,
                                            "leaf_value": -4.7261345700409813e-05,
                                            "leaf_count": 10069
                                        }
                                    }
                                },
                                "right_child": {
                                    "split_index": 22,
                                    "split_feature": 8,
                                    "split_gain": 0.010298082829431895,
                                    "threshold": -0.1374743431806564,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0008268893887527711,
                                    "internal_count": 8755,
                                    "left_child": {
                                        "leaf_index": 14,
                                        "leaf_value": 0.001356601732613709,
                                        "leaf_count": 63
                                    },
                                    "right_child": {
                                        "split_index": 29,
                                        "split_feature": 4,
                                        "split_gain": 0.00817961765260356,
                                        "threshold": 6508.550048828126,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.0007345556266663454,
                                        "internal_count": 8692,
                                        "left_child": {
                                            "leaf_index": 23,
                                            "leaf_value": 0.00021292575623471093,
                                            "leaf_count": 2834
                                        },
                                        "right_child": {
                                            "leaf_index": 30,
                                            "leaf_value": 5.98227339180891e-06,
                                            "leaf_count": 5858
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                "tree_index": 3,
                "num_leaves": 31,
                "num_cat": 0,
                "shrinkage": 0.1,
                "tree_structure": {
                    "split_index": 0,
                    "split_feature": 2,
                    "split_gain": 0.09320426244118526,
                    "threshold": -0.1306527256965637,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0,
                    "internal_count": 29079,
                    "left_child": {
                        "split_index": 1,
                        "split_feature": 0,
                        "split_gain": 0.04519453099689208,
                        "threshold": 15.250000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.01082652919221072,
                        "internal_count": 774,
                        "left_child": {
                            "split_index": 2,
                            "split_feature": 9,
                            "split_gain": 0.037945312802960825,
                            "threshold": -0.06665717065334319,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.008072159828334141,
                            "internal_count": 685,
                            "left_child": {
                                "split_index": 12,
                                "split_feature": 7,
                                "split_gain": 0.01942376996173162,
                                "threshold": 0.006043967558071018,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.021892562060308485,
                                "internal_count": 154,
                                "left_child": {
                                    "leaf_index": 0,
                                    "leaf_value": 0.004803056833528293,
                                    "leaf_count": 24
                                },
                                "right_child": {
                                    "split_index": 16,
                                    "split_feature": 5,
                                    "split_gain": 0.010036896332148042,
                                    "threshold": 16840.613281250004,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.017067083978774742,
                                    "internal_count": 130,
                                    "left_child": {
                                        "leaf_index": 13,
                                        "leaf_value": 0.0036535408654758197,
                                        "leaf_count": 22
                                    },
                                    "right_child": {
                                        "leaf_index": 17,
                                        "leaf_value": 0.0013101314137370706,
                                        "leaf_count": 108
                                    }
                                }
                            },
                            "right_child": {
                                "leaf_index": 3,
                                "leaf_value": 0.0004063982909833107,
                                "leaf_count": 531
                            }
                        },
                        "right_child": {
                            "split_index": 8,
                            "split_feature": 11,
                            "split_gain": 0.026968321291199637,
                            "threshold": 0.07463307306170465,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.03202588890294618,
                            "internal_count": 89,
                            "left_child": {
                                "leaf_index": 2,
                                "leaf_value": 0.006334985624111835,
                                "leaf_count": 21
                            },
                            "right_child": {
                                "split_index": 11,
                                "split_feature": 5,
                                "split_gain": 0.022508783375364265,
                                "threshold": 96027.96093750001,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.022352310754393007,
                                "internal_count": 68,
                                "left_child": {
                                    "leaf_index": 9,
                                    "leaf_value": 0.0008037566835160502,
                                    "leaf_count": 42
                                },
                                "right_child": {
                                    "leaf_index": 12,
                                    "leaf_value": 0.0045476127854691675,
                                    "leaf_count": 26
                                }
                            }
                        }
                    },
                    "right_child": {
                        "split_index": 3,
                        "split_feature": 2,
                        "split_gain": 0.02893659219662023,
                        "threshold": -0.04744893312454223,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.0002960513888112495,
                        "internal_count": 28305,
                        "left_child": {
                            "split_index": 9,
                            "split_feature": 0,
                            "split_gain": 0.023858519356974726,
                            "threshold": 9.750000000000002,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.00271162044900082,
                            "internal_count": 2874,
                            "left_child": {
                                "leaf_index": 1,
                                "leaf_value": 0.0012947442279565833,
                                "leaf_count": 211
                            },
                            "right_child": {
                                "split_index": 10,
                                "split_feature": 0,
                                "split_gain": 0.02566184893469836,
                                "threshold": 15.250000000000002,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.0019005958878858303,
                                "internal_count": 2663,
                                "left_child": {
                                    "leaf_index": 10,
                                    "leaf_value": 9.213768673687406e-05,
                                    "leaf_count": 2422
                                },
                                "right_child": {
                                    "split_index": 17,
                                    "split_feature": 11,
                                    "split_gain": 0.00991681147781407,
                                    "threshold": 0.17499598115682605,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.011741543886609447,
                                    "internal_count": 241,
                                    "left_child": {
                                        "split_index": 18,
                                        "split_feature": 13,
                                        "split_gain": 0.009664268127959029,
                                        "threshold": -0.09738603234291075,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.013671273085805197,
                                        "internal_count": 221,
                                        "left_child": {
                                            "split_index": 19,
                                            "split_feature": 7,
                                            "split_gain": 0.01050738634090357,
                                            "threshold": 0.008333375211805107,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.021287007991448167,
                                            "internal_count": 95,
                                            "left_child": {
                                                "leaf_index": 11,
                                                "leaf_value": 0.0028606423598603217,
                                                "leaf_count": 64
                                            },
                                            "right_child": {
                                                "leaf_index": 20,
                                                "leaf_value": 0.0006175956415386134,
                                                "leaf_count": 31
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 19,
                                            "leaf_value": 0.0007929250736312482,
                                            "leaf_count": 126
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 18,
                                        "leaf_value": -0.0009581963764503598,
                                        "leaf_count": 20
                                    }
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 4,
                            "split_feature": 0,
                            "split_gain": 0.03233574312482817,
                            "threshold": 9.750000000000002,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.0006359534320605078,
                            "internal_count": 25431,
                            "left_child": {
                                "split_index": 5,
                                "split_feature": 2,
                                "split_gain": 0.08794248704138401,
                                "threshold": 0.06377673149108888,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.004490307303898308,
                                "internal_count": 2005,
                                "left_child": {
                                    "split_index": 6,
                                    "split_feature": 2,
                                    "split_gain": 0.02882798051692307,
                                    "threshold": 9.999999682655225e-21,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.002988964472768238,
                                    "internal_count": 1907,
                                    "left_child": {
                                        "leaf_index": 4,
                                        "leaf_value": 7.061014611410171e-05,
                                        "leaf_count": 1002
                                    },
                                    "right_child": {
                                        "split_index": 15,
                                        "split_feature": 13,
                                        "split_gain": 0.014695533384059947,
                                        "threshold": -0.11927295103669165,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.007080076147660032,
                                        "internal_count": 905,
                                        "left_child": {
                                            "leaf_index": 7,
                                            "leaf_value": -0.002292158357714388,
                                            "leaf_count": 55
                                        },
                                        "right_child": {
                                            "leaf_index": 16,
                                            "leaf_value": -0.0006055037431634607,
                                            "leaf_count": 850
                                        }
                                    }
                                },
                                "right_child": {
                                    "split_index": 7,
                                    "split_feature": 5,
                                    "split_gain": 0.027295711769304357,
                                    "threshold": 114335.28125000001,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.03370521321170488,
                                    "internal_count": 98,
                                    "left_child": {
                                        "leaf_index": 6,
                                        "leaf_value": -0.0025254334466388592,
                                        "leaf_count": 78
                                    },
                                    "right_child": {
                                        "leaf_index": 8,
                                        "leaf_value": -0.006666364031843841,
                                        "leaf_count": 20
                                    }
                                }
                            },
                            "right_child": {
                                "split_index": 13,
                                "split_feature": 8,
                                "split_gain": 0.016485152560427947,
                                "threshold": -0.1374743431806564,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.0003060644406392327,
                                "internal_count": 23426,
                                "left_child": {
                                    "leaf_index": 5,
                                    "leaf_value": 0.0012703405748380676,
                                    "leaf_count": 97
                                },
                                "right_child": {
                                    "split_index": 14,
                                    "split_feature": 10,
                                    "split_gain": 0.01659144925979749,
                                    "threshold": -0.01254049828276038,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00036015671241834587,
                                    "internal_count": 23329,
                                    "left_child": {
                                        "split_index": 28,
                                        "split_feature": 12,
                                        "split_gain": 0.008951385848540144,
                                        "threshold": 0.061875438317656524,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.0018115860274432558,
                                        "internal_count": 5888,
                                        "left_child": {
                                            "leaf_index": 14,
                                            "leaf_value": -0.00026284440747196164,
                                            "leaf_count": 4092
                                        },
                                        "right_child": {
                                            "leaf_index": 29,
                                            "leaf_value": 4.954043661847484e-06,
                                            "leaf_count": 1796
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 20,
                                        "split_feature": 6,
                                        "split_gain": 0.00940640764408211,
                                        "threshold": 38124.89062500001,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.00012983903363214828,
                                        "internal_count": 17441,
                                        "left_child": {
                                            "split_index": 21,
                                            "split_feature": 0,
                                            "split_gain": 0.015851136854640596,
                                            "threshold": 15.250000000000002,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.0005739302615360032,
                                            "internal_count": 12771,
                                            "left_child": {
                                                "split_index": 22,
                                                "split_feature": 9,
                                                "split_gain": 0.01033602954173261,
                                                "threshold": 0.03189358115196229,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": 0.0002406538005540941,
                                                "internal_count": 11722,
                                                "left_child": {
                                                    "leaf_index": 15,
                                                    "leaf_value": -1.6336361264503e-05,
                                                    "leaf_count": 9891
                                                },
                                                "right_child": {
                                                    "leaf_index": 23,
                                                    "leaf_value": 0.00024231421861098214,
                                                    "leaf_count": 1831
                                                }
                                            },
                                            "right_child": {
                                                "split_index": 29,
                                                "split_feature": 10,
                                                "split_gain": 0.008720212701946634,
                                                "threshold": -0.0018845144659280775,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": 0.004298112030487327,
                                                "internal_count": 1049,
                                                "left_child": {
                                                    "leaf_index": 22,
                                                    "leaf_value": 0.00010165656383455636,
                                                    "leaf_count": 457
                                                },
                                                "right_child": {
                                                    "leaf_index": 30,
                                                    "leaf_value": 0.0006831332809556222,
                                                    "leaf_count": 592
                                                }
                                            }
                                        },
                                        "right_child": {
                                            "split_index": 23,
                                            "split_feature": 2,
                                            "split_gain": 0.009342778877421618,
                                            "threshold": 0.07858806848526002,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.0010846125876869375,
                                            "internal_count": 4670,
                                            "left_child": {
                                                "leaf_index": 21,
                                                "leaf_value": -5.888250742823358e-05,
                                                "leaf_count": 4159
                                            },
                                            "right_child": {
                                                "split_index": 24,
                                                "split_feature": 14,
                                                "split_gain": 0.011623733926924793,
                                                "threshold": 0.31494072079658514,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.005119799022617934,
                                                "internal_count": 511,
                                                "left_child": {
                                                    "split_index": 25,
                                                    "split_feature": 14,
                                                    "split_gain": 0.011149438882105768,
                                                    "threshold": -0.8622259497642516,
                                                    "decision_type": "<=",
                                                    "default_left": true,
                                                    "missing_type": "None",
                                                    "internal_value": -0.009071396807004882,
                                                    "internal_count": 303,
                                                    "left_child": {
                                                        "leaf_index": 24,
                                                        "leaf_value": 0.000771426876329185,
                                                        "leaf_count": 35
                                                    },
                                                    "right_child": {
                                                        "split_index": 26,
                                                        "split_feature": 6,
                                                        "split_gain": 0.009570307356652069,
                                                        "threshold": 77567.97265625001,
                                                        "decision_type": "<=",
                                                        "default_left": true,
                                                        "missing_type": "None",
                                                        "internal_value": -0.011263554624021246,
                                                        "internal_count": 268,
                                                        "left_child": {
                                                            "leaf_index": 26,
                                                            "leaf_value": 9.157011071902861e-05,
                                                            "leaf_count": 52
                                                        },
                                                        "right_child": {
                                                            "split_index": 27,
                                                            "split_feature": 0,
                                                            "split_gain": 0.011643503810227017,
                                                            "threshold": 15.250000000000002,
                                                            "decision_type": "<=",
                                                            "default_left": true,
                                                            "missing_type": "None",
                                                            "internal_value": -0.014195597670424023,
                                                            "internal_count": 216,
                                                            "left_child": {
                                                                "leaf_index": 27,
                                                                "leaf_value": -0.001096703140964921,
                                                                "leaf_count": 181
                                                            },
                                                            "right_child": {
                                                                "leaf_index": 28,
                                                                "leaf_value": -0.0030891897476145198,
                                                                "leaf_count": 35
                                                            }
                                                        }
                                                    }
                                                },
                                                "right_child": {
                                                    "leaf_index": 25,
                                                    "leaf_value": 6.366150575226689e-05,
                                                    "leaf_count": 208
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                "tree_index": 4,
                "num_leaves": 31,
                "num_cat": 0,
                "shrinkage": 0.1,
                "tree_structure": {
                    "split_index": 0,
                    "split_feature": 2,
                    "split_gain": 0.07549545058916717,
                    "threshold": -0.1306527256965637,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0,
                    "internal_count": 29079,
                    "left_child": {
                        "split_index": 1,
                        "split_feature": 0,
                        "split_gain": 0.03660757258693993,
                        "threshold": 15.250000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.009743876174312526,
                        "internal_count": 774,
                        "left_child": {
                            "split_index": 2,
                            "split_feature": 9,
                            "split_gain": 0.03145823382410986,
                            "threshold": -0.0790327563881874,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.00726494366287366,
                            "internal_count": 685,
                            "left_child": {
                                "split_index": 14,
                                "split_feature": 5,
                                "split_gain": 0.014252770405763407,
                                "threshold": 16840.613281250004,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.021969620456123568,
                                "internal_count": 120,
                                "left_child": {
                                    "leaf_index": 0,
                                    "leaf_value": 0.004269184018350923,
                                    "leaf_count": 26
                                },
                                "right_child": {
                                    "leaf_index": 15,
                                    "leaf_value": 0.0016237942659187111,
                                    "leaf_count": 94
                                }
                            },
                            "right_child": {
                                "split_index": 27,
                                "split_feature": 7,
                                "split_gain": 0.007843518285571149,
                                "threshold": -0.052430111914873116,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.00414182646784713,
                                "internal_count": 565,
                                "left_child": {
                                    "leaf_index": 3,
                                    "leaf_value": 0.0022652397101575682,
                                    "leaf_count": 22
                                },
                                "right_child": {
                                    "leaf_index": 28,
                                    "leaf_value": 0.0003391858596867336,
                                    "leaf_count": 543
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 3,
                            "split_feature": 7,
                            "split_gain": 0.024201591008360224,
                            "threshold": -0.001480124541558325,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.028823300560106055,
                            "internal_count": 89,
                            "left_child": {
                                "leaf_index": 2,
                                "leaf_value": 0.00576007974926721,
                                "leaf_count": 22
                            },
                            "right_child": {
                                "split_index": 7,
                                "split_feature": 1,
                                "split_gain": 0.014536395936272008,
                                "threshold": 9.999999682655225e-21,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.01937397320911422,
                                "internal_count": 67,
                                "left_child": {
                                    "leaf_index": 4,
                                    "leaf_value": -9.989519918314688e-05,
                                    "leaf_count": 23
                                },
                                "right_child": {
                                    "leaf_index": 8,
                                    "leaf_value": 0.0030023456836881287,
                                    "leaf_count": 44
                                }
                            }
                        }
                    },
                    "right_child": {
                        "split_index": 4,
                        "split_feature": 0,
                        "split_gain": 0.024028829914922892,
                        "threshold": 15.250000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.0002664462167949859,
                        "internal_count": 28305,
                        "left_child": {
                            "split_index": 6,
                            "split_feature": 13,
                            "split_gain": 0.014985091145909705,
                            "threshold": -0.35978579521179194,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.0005296134474866927,
                            "internal_count": 26170,
                            "left_child": {
                                "split_index": 17,
                                "split_feature": 2,
                                "split_gain": 0.013442105086864966,
                                "threshold": -0.01725882291793823,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.011725707854948421,
                                "internal_count": 119,
                                "left_child": {
                                    "leaf_index": 1,
                                    "leaf_value": -0.00018730926840362374,
                                    "leaf_count": 64
                                },
                                "right_child": {
                                    "split_index": 18,
                                    "split_feature": 12,
                                    "split_gain": 0.02380587924995366,
                                    "threshold": 0.0860288441181183,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.023190569144737144,
                                    "internal_count": 55,
                                    "left_child": {
                                        "leaf_index": 18,
                                        "leaf_value": -0.004598093995824457,
                                        "leaf_count": 25
                                    },
                                    "right_child": {
                                        "leaf_index": 19,
                                        "leaf_value": -0.00041985934668142973,
                                        "leaf_count": 30
                                    }
                                }
                            },
                            "right_child": {
                                "split_index": 8,
                                "split_feature": 2,
                                "split_gain": 0.014318751395246885,
                                "threshold": -0.04744893312454223,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.00047847010425656924,
                                "internal_count": 26051,
                                "left_child": {
                                    "split_index": 9,
                                    "split_feature": 0,
                                    "split_gain": 0.02137223998769068,
                                    "threshold": 9.750000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0017542957693022516,
                                    "internal_count": 2587,
                                    "left_child": {
                                        "leaf_index": 7,
                                        "leaf_value": 0.0011684039000574558,
                                        "leaf_count": 200
                                    },
                                    "right_child": {
                                        "leaf_index": 10,
                                        "leaf_value": 9.223105802555565e-05,
                                        "leaf_count": 2387
                                    }
                                },
                                "right_child": {
                                    "split_index": 10,
                                    "split_feature": 0,
                                    "split_gain": 0.020008625442742328,
                                    "threshold": 9.750000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0007246414865825439,
                                    "internal_count": 23464,
                                    "left_child": {
                                        "split_index": 11,
                                        "split_feature": 2,
                                        "split_gain": 0.055669778081857066,
                                        "threshold": 0.04226076602935792,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.0037597631869804122,
                                        "internal_count": 1988,
                                        "left_child": {
                                            "split_index": 13,
                                            "split_feature": 2,
                                            "split_gain": 0.015651862929977507,
                                            "threshold": -0.0009866952896118162,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.0018930750603864221,
                                            "internal_count": 1768,
                                            "left_child": {
                                                "split_index": 29,
                                                "split_feature": 9,
                                                "split_gain": 0.0069637653167627265,
                                                "threshold": -0.04691454209387302,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": 0.0012988416256165384,
                                                "internal_count": 822,
                                                "left_child": {
                                                    "leaf_index": 9,
                                                    "leaf_value": -0.0014495002111491178,
                                                    "leaf_count": 27
                                                },
                                                "right_child": {
                                                    "leaf_index": 30,
                                                    "leaf_value": 0.00018352363185749138,
                                                    "leaf_count": 795
                                                }
                                            },
                                            "right_child": {
                                                "split_index": 24,
                                                "split_feature": 9,
                                                "split_gain": 0.009511281154318114,
                                                "threshold": -0.006968653062358498,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.004666600975708234,
                                                "internal_count": 946,
                                                "left_child": {
                                                    "leaf_index": 14,
                                                    "leaf_value": -0.0012438327043195454,
                                                    "leaf_count": 135
                                                },
                                                "right_child": {
                                                    "leaf_index": 25,
                                                    "leaf_value": -0.00033729104465950714,
                                                    "leaf_count": 811
                                                }
                                            }
                                        },
                                        "right_child": {
                                            "split_index": 12,
                                            "split_feature": 2,
                                            "split_gain": 0.01951879688995256,
                                            "threshold": 0.10266572237014772,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.018761147767972115,
                                            "internal_count": 220,
                                            "left_child": {
                                                "split_index": 23,
                                                "split_feature": 5,
                                                "split_gain": 0.009842812853417107,
                                                "threshold": 9474.712890625002,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.01538852412128248,
                                                "internal_count": 195,
                                                "left_child": {
                                                    "leaf_index": 12,
                                                    "leaf_value": -0.000522397851000278,
                                                    "leaf_count": 64
                                                },
                                                "right_child": {
                                                    "leaf_index": 24,
                                                    "leaf_value": -0.0020354409000075614,
                                                    "leaf_count": 131
                                                }
                                            },
                                            "right_child": {
                                                "leaf_index": 13,
                                                "leaf_value": -0.004506761221215129,
                                                "leaf_count": 25
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 19,
                                        "split_feature": 10,
                                        "split_gain": 0.011841258012731164,
                                        "threshold": -0.011481666471809147,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00044368497976605286,
                                        "internal_count": 21476,
                                        "left_child": {
                                            "split_index": 28,
                                            "split_feature": 5,
                                            "split_gain": 0.007800995958509485,
                                            "threshold": 25814.795898437504,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.0016522944047182536,
                                            "internal_count": 5885,
                                            "left_child": {
                                                "leaf_index": 11,
                                                "leaf_value": -0.00025067097620563053,
                                                "leaf_count": 3795
                                            },
                                            "right_child": {
                                                "leaf_index": 29,
                                                "leaf_value": -1.0085599270968614e-05,
                                                "leaf_count": 2090
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 20,
                                            "leaf_value": 1.2518372542567645e-06,
                                            "leaf_count": 15591
                                        }
                                    }
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 5,
                            "split_feature": 2,
                            "split_gain": 0.01698868378286629,
                            "threshold": -0.0449075698852539,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.002959355388451837,
                            "internal_count": 2135,
                            "left_child": {
                                "split_index": 25,
                                "split_feature": 1,
                                "split_gain": 0.0081725084482707,
                                "threshold": 3.5000000000000004,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.01060165982420358,
                                "internal_count": 256,
                                "left_child": {
                                    "leaf_index": 5,
                                    "leaf_value": 0.0007237596163312442,
                                    "leaf_count": 189
                                },
                                "right_child": {
                                    "leaf_index": 26,
                                    "leaf_value": 0.002009133194223978,
                                    "leaf_count": 67
                                }
                            },
                            "right_child": {
                                "split_index": 15,
                                "split_feature": 7,
                                "split_gain": 0.013498843086244204,
                                "threshold": -0.02894940227270126,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.0019181473333414344,
                                "internal_count": 1879,
                                "left_child": {
                                    "split_index": 16,
                                    "split_feature": 12,
                                    "split_gain": 0.013838078343035326,
                                    "threshold": 0.13676924258470538,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.01630853626429887,
                                    "internal_count": 63,
                                    "left_child": {
                                        "leaf_index": 6,
                                        "leaf_value": 0.0006200928326295473,
                                        "leaf_count": 43
                                    },
                                    "right_child": {
                                        "leaf_index": 17,
                                        "leaf_value": 0.003803989333100617,
                                        "leaf_count": 20
                                    }
                                },
                                "right_child": {
                                    "split_index": 20,
                                    "split_feature": 6,
                                    "split_gain": 0.011132890150094579,
                                    "threshold": 90906.61328125001,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0014189212856265015,
                                    "internal_count": 1816,
                                    "left_child": {
                                        "split_index": 26,
                                        "split_feature": 12,
                                        "split_gain": 0.008142069549756745,
                                        "threshold": 0.1231898106634617,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.002382814989846641,
                                        "internal_count": 1577,
                                        "left_child": {
                                            "leaf_index": 16,
                                            "leaf_value": 0.00018610088364552535,
                                            "leaf_count": 1498
                                        },
                                        "right_child": {
                                            "leaf_index": 27,
                                            "leaf_value": 0.0012277316480736496,
                                            "leaf_count": 79
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 21,
                                        "split_feature": 10,
                                        "split_gain": 0.02620035033627899,
                                        "threshold": 0.006273008650168777,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.004941163951005966,
                                        "internal_count": 239,
                                        "left_child": {
                                            "split_index": 22,
                                            "split_feature": 2,
                                            "split_gain": 0.012313905699925366,
                                            "threshold": 0.010504126548767092,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.0003076180301732213,
                                            "internal_count": 191,
                                            "left_child": {
                                                "leaf_index": 21,
                                                "leaf_value": 0.0010184579330502618,
                                                "leaf_count": 76
                                            },
                                            "right_child": {
                                                "leaf_index": 23,
                                                "leaf_value": -0.0006219765090044467,
                                                "leaf_count": 115
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 22,
                                            "leaf_value": -0.0025826942251114815,
                                            "leaf_count": 48
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                "tree_index": 5,
                "num_leaves": 31,
                "num_cat": 0,
                "shrinkage": 0.1,
                "tree_structure": {
                    "split_index": 0,
                    "split_feature": 2,
                    "split_gain": 0.06180575084537543,
                    "threshold": -0.09754902124404906,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0,
                    "internal_count": 29079,
                    "left_child": {
                        "split_index": 1,
                        "split_feature": 0,
                        "split_gain": 0.037350525336900905,
                        "threshold": 15.250000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.006669724800392978,
                        "internal_count": 1326,
                        "left_child": {
                            "split_index": 2,
                            "split_feature": 0,
                            "split_gain": 0.03259434480145362,
                            "threshold": 9.750000000000002,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.00483172730075909,
                            "internal_count": 1184,
                            "left_child": {
                                "split_index": 25,
                                "split_feature": 5,
                                "split_gain": 0.007704095526713424,
                                "threshold": 87255.58593750001,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.02576267304456061,
                                "internal_count": 70,
                                "left_child": {
                                    "leaf_index": 0,
                                    "leaf_value": 0.0018184953729834651,
                                    "leaf_count": 46
                                },
                                "right_child": {
                                    "leaf_index": 26,
                                    "leaf_value": 0.0040286635064452035,
                                    "leaf_count": 24
                                }
                            },
                            "right_child": {
                                "split_index": 3,
                                "split_feature": 9,
                                "split_gain": 0.018175286702963058,
                                "threshold": -0.022884525358676907,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.003516497316857737,
                                "internal_count": 1114,
                                "left_child": {
                                    "leaf_index": 3,
                                    "leaf_value": 0.0008332735961179741,
                                    "leaf_count": 460
                                },
                                "right_child": {
                                    "leaf_index": 4,
                                    "leaf_value": 1.2892885143247477e-05,
                                    "leaf_count": 654
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 7,
                            "split_feature": 11,
                            "split_gain": 0.012445861056953694,
                            "threshold": 0.0309075340628624,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.02199499972691779,
                            "internal_count": 142,
                            "left_child": {
                                "leaf_index": 2,
                                "leaf_value": 0.004511741620954126,
                                "leaf_count": 20
                            },
                            "right_child": {
                                "split_index": 8,
                                "split_feature": 7,
                                "split_gain": 0.015231321986896341,
                                "threshold": 0.028170875273644928,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.01820443964779919,
                                "internal_count": 122,
                                "left_child": {
                                    "split_index": 9,
                                    "split_feature": 12,
                                    "split_gain": 0.028724738914186428,
                                    "threshold": -0.010547527577728031,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.023152144632345596,
                                    "internal_count": 102,
                                    "left_child": {
                                        "split_index": 10,
                                        "split_feature": 13,
                                        "split_gain": 0.014006533229676918,
                                        "threshold": -0.23987425863742826,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.04095149780368956,
                                        "internal_count": 48,
                                        "left_child": {
                                            "leaf_index": 8,
                                            "leaf_value": 0.005952184582764114,
                                            "leaf_count": 22
                                        },
                                        "right_child": {
                                            "leaf_index": 11,
                                            "leaf_value": 0.0025238126398807463,
                                            "leaf_count": 26
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 27,
                                        "split_feature": 8,
                                        "split_gain": 0.006885207521605703,
                                        "threshold": -9.999999682655225e-21,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.007330497368928735,
                                        "internal_count": 54,
                                        "left_child": {
                                            "leaf_index": 10,
                                            "leaf_value": 0.0019492095038294794,
                                            "leaf_count": 25
                                        },
                                        "right_child": {
                                            "leaf_index": 28,
                                            "leaf_value": -0.00031536385529385563,
                                            "leaf_count": 29
                                        }
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 9,
                                    "leaf_value": -0.0007028855773387478,
                                    "leaf_count": 20
                                }
                            }
                        }
                    },
                    "right_child": {
                        "split_index": 4,
                        "split_feature": 0,
                        "split_gain": 0.015910115878730365,
                        "threshold": 15.250000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.00031867024695049706,
                        "internal_count": 27753,
                        "left_child": {
                            "split_index": 5,
                            "split_feature": 13,
                            "split_gain": 0.013666031994292147,
                            "threshold": -0.3240950554609298,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.000534296021664199,
                            "internal_count": 25671,
                            "left_child": {
                                "split_index": 28,
                                "split_feature": 0,
                                "split_gain": 0.0068302230108105745,
                                "threshold": 10.750000000000002,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.009926213534515239,
                                "internal_count": 154,
                                "left_child": {
                                    "split_index": 29,
                                    "split_feature": 2,
                                    "split_gain": 0.008974699978076383,
                                    "threshold": -0.006518125534057616,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.016673009658054645,
                                    "internal_count": 76,
                                    "left_child": {
                                        "leaf_index": 1,
                                        "leaf_value": -0.0008606474788393826,
                                        "leaf_count": 49
                                    },
                                    "right_child": {
                                        "leaf_index": 30,
                                        "leaf_value": -0.003131227664373539,
                                        "leaf_count": 27
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 29,
                                    "leaf_value": -0.000335241218337428,
                                    "leaf_count": 78
                                }
                            },
                            "right_child": {
                                "split_index": 15,
                                "split_feature": 2,
                                "split_gain": 0.009738386009862099,
                                "threshold": -0.020233809947967526,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.0004776139941147591,
                                "internal_count": 25517,
                                "left_child": {
                                    "split_index": 20,
                                    "split_feature": 0,
                                    "split_gain": 0.012170922172385771,
                                    "threshold": 9.750000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0006827968008915462,
                                    "internal_count": 5635,
                                    "left_child": {
                                        "leaf_index": 6,
                                        "leaf_value": 0.0005488105965259555,
                                        "leaf_count": 482
                                    },
                                    "right_child": {
                                        "leaf_index": 21,
                                        "leaf_value": 2.3331901761474036e-05,
                                        "leaf_count": 5153
                                    }
                                },
                                "right_child": {
                                    "split_index": 16,
                                    "split_feature": 0,
                                    "split_gain": 0.0290711933222687,
                                    "threshold": 9.750000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0008065001640101685,
                                    "internal_count": 19882,
                                    "left_child": {
                                        "split_index": 17,
                                        "split_feature": 2,
                                        "split_gain": 0.039446903184562274,
                                        "threshold": 0.059211373329162605,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.0048088729615608505,
                                        "internal_count": 1663,
                                        "left_child": {
                                            "split_index": 22,
                                            "split_feature": 13,
                                            "split_gain": 0.009069033271004279,
                                            "threshold": -0.07363471388816832,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.0034814058365665707,
                                            "internal_count": 1548,
                                            "left_child": {
                                                "leaf_index": 16,
                                                "leaf_value": -0.0009524593035404617,
                                                "leaf_count": 214
                                            },
                                            "right_child": {
                                                "leaf_index": 23,
                                                "leaf_value": -0.00025119590145640655,
                                                "leaf_count": 1334
                                            }
                                        },
                                        "right_child": {
                                            "split_index": 18,
                                            "split_feature": 5,
                                            "split_gain": 0.014440016574115179,
                                            "threshold": 96027.96093750001,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.02267773478322298,
                                            "internal_count": 115,
                                            "left_child": {
                                                "leaf_index": 18,
                                                "leaf_value": -0.0016923072386486968,
                                                "leaf_count": 91
                                            },
                                            "right_child": {
                                                "leaf_index": 19,
                                                "leaf_value": -0.004449749637084703,
                                                "leaf_count": 24
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 19,
                                        "split_feature": 13,
                                        "split_gain": 0.012563242175436808,
                                        "threshold": -0.0066445176489651194,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.000441170235785415,
                                        "internal_count": 18219,
                                        "left_child": {
                                            "split_index": 21,
                                            "split_feature": 10,
                                            "split_gain": 0.009373368682161392,
                                            "threshold": -0.019802552647888657,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.0011109559285036345,
                                            "internal_count": 11038,
                                            "left_child": {
                                                "leaf_index": 17,
                                                "leaf_value": -0.00033672449156040777,
                                                "leaf_count": 1578
                                            },
                                            "right_child": {
                                                "split_index": 26,
                                                "split_feature": 7,
                                                "split_gain": 0.007097688320959488,
                                                "threshold": -0.08991678804159163,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.0007345897528541103,
                                                "internal_count": 9460,
                                                "left_child": {
                                                    "leaf_index": 22,
                                                    "leaf_value": 0.0016810918510284112,
                                                    "leaf_count": 23
                                                },
                                                "right_child": {
                                                    "leaf_index": 27,
                                                    "leaf_value": -7.773519325777704e-05,
                                                    "leaf_count": 9437
                                                }
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 20,
                                            "leaf_value": 5.8836527127818436e-05,
                                            "leaf_count": 7181
                                        }
                                    }
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 6,
                            "split_feature": 7,
                            "split_gain": 0.01256645194799897,
                            "threshold": -0.02894940227270126,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0023399893412701777,
                            "internal_count": 2082,
                            "left_child": {
                                "split_index": 11,
                                "split_feature": 12,
                                "split_gain": 0.012023086812675526,
                                "threshold": 0.14242377877235415,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.015137690634661782,
                                "internal_count": 74,
                                "left_child": {
                                    "leaf_index": 5,
                                    "leaf_value": 0.0007114190870746619,
                                    "leaf_count": 53
                                },
                                "right_child": {
                                    "leaf_index": 12,
                                    "leaf_value": 0.003538747575311434,
                                    "leaf_count": 21
                                }
                            },
                            "right_child": {
                                "split_index": 12,
                                "split_feature": 1,
                                "split_gain": 0.01047892092825188,
                                "threshold": 3.5000000000000004,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.0018683609071511644,
                                "internal_count": 2008,
                                "left_child": {
                                    "split_index": 14,
                                    "split_feature": 6,
                                    "split_gain": 0.010961107984481331,
                                    "threshold": 388724.42187500006,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0007378941613342729,
                                    "internal_count": 1613,
                                    "left_child": {
                                        "split_index": 24,
                                        "split_feature": 12,
                                        "split_gain": 0.008026750288407,
                                        "threshold": -0.0045129500795155755,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.0010649747718590363,
                                        "internal_count": 1588,
                                        "left_child": {
                                            "leaf_index": 7,
                                            "leaf_value": 0.0013534151854692027,
                                            "leaf_count": 50
                                        },
                                        "right_child": {
                                            "leaf_index": 25,
                                            "leaf_value": 6.596049057071186e-05,
                                            "leaf_count": 1538
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 15,
                                        "leaf_value": -0.0020038266219198704,
                                        "leaf_count": 25
                                    }
                                },
                                "right_child": {
                                    "split_index": 13,
                                    "split_feature": 13,
                                    "split_gain": 0.011444412030978093,
                                    "threshold": -0.07889136672019957,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.006484671947664192,
                                    "internal_count": 395,
                                    "left_child": {
                                        "leaf_index": 13,
                                        "leaf_value": 0.0020788036383645684,
                                        "leaf_count": 49
                                    },
                                    "right_child": {
                                        "split_index": 23,
                                        "split_feature": 4,
                                        "split_gain": 0.008103173357774723,
                                        "threshold": 726.5516967773439,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.004459050972626351,
                                        "internal_count": 346,
                                        "left_child": {
                                            "leaf_index": 14,
                                            "leaf_value": 0.002109329142991488,
                                            "leaf_count": 27
                                        },
                                        "right_child": {
                                            "leaf_index": 24,
                                            "leaf_value": 0.00030511372035141554,
                                            "leaf_count": 319
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                "tree_index": 6,
                "num_leaves": 31,
                "num_cat": 0,
                "shrinkage": 0.1,
                "tree_structure": {
                    "split_index": 0,
                    "split_feature": 2,
                    "split_gain": 0.05164849739091056,
                    "threshold": -0.1306527256965637,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0,
                    "internal_count": 29079,
                    "left_child": {
                        "split_index": 1,
                        "split_feature": 0,
                        "split_gain": 0.02383960449541036,
                        "threshold": 15.250000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.008059353585640295,
                        "internal_count": 774,
                        "left_child": {
                            "split_index": 2,
                            "split_feature": 9,
                            "split_gain": 0.023012089814639328,
                            "threshold": -0.06665717065334319,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.006058898706074934,
                            "internal_count": 685,
                            "left_child": {
                                "split_index": 9,
                                "split_feature": 7,
                                "split_gain": 0.014177668795618888,
                                "threshold": 0.01418466353788972,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.016821559294438376,
                                "internal_count": 154,
                                "left_child": {
                                    "leaf_index": 0,
                                    "leaf_value": 0.003717549084935205,
                                    "leaf_count": 28
                                },
                                "right_child": {
                                    "split_index": 19,
                                    "split_feature": 0,
                                    "split_gain": 0.007479427450509956,
                                    "threshold": 13.250000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.012298463393346452,
                                    "internal_count": 126,
                                    "left_child": {
                                        "leaf_index": 10,
                                        "leaf_value": 0.0008180192767343084,
                                        "leaf_count": 98
                                    },
                                    "right_child": {
                                        "leaf_index": 20,
                                        "leaf_value": 0.0026712410584358234,
                                        "leaf_count": 28
                                    }
                                }
                            },
                            "right_child": {
                                "leaf_index": 3,
                                "leaf_value": 0.00029375244488094533,
                                "leaf_count": 531
                            }
                        },
                        "right_child": {
                            "split_index": 3,
                            "split_feature": 11,
                            "split_gain": 0.019612661227388146,
                            "threshold": 0.07463307306170465,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.023456113051957963,
                            "internal_count": 89,
                            "left_child": {
                                "leaf_index": 2,
                                "leaf_value": 0.005016883041354872,
                                "leaf_count": 21
                            },
                            "right_child": {
                                "split_index": 4,
                                "split_feature": 5,
                                "split_gain": 0.016670060380640693,
                                "threshold": 96027.96093750001,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.015206597396172583,
                                "internal_count": 68,
                                "left_child": {
                                    "split_index": 23,
                                    "split_feature": 7,
                                    "split_gain": 0.006802856195121224,
                                    "threshold": 0.005899694515392185,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0028875774365761096,
                                    "internal_count": 42,
                                    "left_child": {
                                        "leaf_index": 4,
                                        "leaf_value": 0.001623561261803843,
                                        "leaf_count": 20
                                    },
                                    "right_child": {
                                        "leaf_index": 24,
                                        "leaf_value": -0.0009247000001116911,
                                        "leaf_count": 22
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 5,
                                    "leaf_value": 0.0035106552715520735,
                                    "leaf_count": 26
                                }
                            }
                        }
                    },
                    "right_child": {
                        "split_index": 5,
                        "split_feature": 2,
                        "split_gain": 0.016076380862386247,
                        "threshold": -0.0449075698852539,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.0002203829832683295,
                        "internal_count": 28305,
                        "left_child": {
                            "split_index": 11,
                            "split_feature": 0,
                            "split_gain": 0.013456649870722722,
                            "threshold": 9.750000000000002,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0019305092916221652,
                            "internal_count": 3095,
                            "left_child": {
                                "split_index": 28,
                                "split_feature": 9,
                                "split_gain": 0.006403846394102176,
                                "threshold": -0.0790327563881874,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.009324596570207322,
                                "internal_count": 228,
                                "left_child": {
                                    "leaf_index": 1,
                                    "leaf_value": -0.0005447496673486267,
                                    "leaf_count": 26
                                },
                                "right_child": {
                                    "split_index": 29,
                                    "split_feature": 4,
                                    "split_gain": 0.007513690699273812,
                                    "threshold": 23092.629882812504,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.011225955106524316,
                                    "internal_count": 202,
                                    "left_child": {
                                        "leaf_index": 29,
                                        "leaf_value": 0.0005127062698040102,
                                        "leaf_count": 101
                                    },
                                    "right_child": {
                                        "leaf_index": 30,
                                        "leaf_value": 0.0017324847515008534,
                                        "leaf_count": 101
                                    }
                                }
                            },
                            "right_child": {
                                "split_index": 12,
                                "split_feature": 0,
                                "split_gain": 0.015377760566815134,
                                "threshold": 15.250000000000002,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.0013424897940576674,
                                "internal_count": 2867,
                                "left_child": {
                                    "split_index": 24,
                                    "split_feature": 7,
                                    "split_gain": 0.006691975212410655,
                                    "threshold": 0.10368127003312112,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0006173040674055621,
                                    "internal_count": 2611,
                                    "left_child": {
                                        "split_index": 25,
                                        "split_feature": 9,
                                        "split_gain": 0.007726127441213281,
                                        "threshold": -0.024130228906869885,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.0008011931622791714,
                                        "internal_count": 2577,
                                        "left_child": {
                                            "split_index": 26,
                                            "split_feature": 7,
                                            "split_gain": 0.009427620087726518,
                                            "threshold": 0.015267470851540567,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.003975285861155908,
                                            "internal_count": 591,
                                            "left_child": {
                                                "split_index": 27,
                                                "split_feature": 10,
                                                "split_gain": 0.006616510597503081,
                                                "threshold": -0.048790067434310906,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": 0.010034682597023925,
                                                "internal_count": 179,
                                                "left_child": {
                                                    "leaf_index": 12,
                                                    "leaf_value": 0.0006038642253726721,
                                                    "leaf_count": 125
                                                },
                                                "right_child": {
                                                    "leaf_index": 28,
                                                    "leaf_value": 0.001928477598428597,
                                                    "leaf_count": 54
                                                }
                                            },
                                            "right_child": {
                                                "leaf_index": 27,
                                                "leaf_value": 0.0001342683881252085,
                                                "leaf_count": 412
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 26,
                                            "leaf_value": -1.4336312424457046e-05,
                                            "leaf_count": 1986
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 25,
                                        "leaf_value": -0.0013320407623455943,
                                        "leaf_count": 34
                                    }
                                },
                                "right_child": {
                                    "split_index": 18,
                                    "split_feature": 11,
                                    "split_gain": 0.00757549230576544,
                                    "threshold": 0.17499598115682605,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.008738817654560194,
                                    "internal_count": 256,
                                    "left_child": {
                                        "split_index": 21,
                                        "split_feature": 1,
                                        "split_gain": 0.007105780984402642,
                                        "threshold": 3.5000000000000004,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.010322413830705292,
                                        "internal_count": 236,
                                        "left_child": {
                                            "leaf_index": 13,
                                            "leaf_value": 0.0006975260012527436,
                                            "leaf_count": 172
                                        },
                                        "right_child": {
                                            "split_index": 22,
                                            "split_feature": 10,
                                            "split_gain": 0.00903668190103767,
                                            "threshold": -0.00943406345322728,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.01931788971705828,
                                            "internal_count": 64,
                                            "left_child": {
                                                "leaf_index": 22,
                                                "leaf_value": 0.0010717835171990806,
                                                "leaf_count": 42
                                            },
                                            "right_child": {
                                                "leaf_index": 23,
                                                "leaf_value": 0.0035736175666732546,
                                                "leaf_count": 22
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 19,
                                        "leaf_value": -0.0009947617223951967,
                                        "leaf_count": 20
                                    }
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 6,
                            "split_feature": 0,
                            "split_gain": 0.01809909672156409,
                            "threshold": 9.750000000000002,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.0004844453232439773,
                            "internal_count": 25210,
                            "left_child": {
                                "split_index": 7,
                                "split_feature": 2,
                                "split_gain": 0.05610381722186698,
                                "threshold": 0.11658552289009096,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.0033803459036259027,
                                "internal_count": 1988,
                                "left_child": {
                                    "split_index": 8,
                                    "split_feature": 2,
                                    "split_gain": 0.02443654199258508,
                                    "threshold": 0.03416720032691956,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0028056069193359017,
                                    "internal_count": 1965,
                                    "left_child": {
                                        "split_index": 16,
                                        "split_feature": 2,
                                        "split_gain": 0.010337795231533383,
                                        "threshold": -0.013360440731048582,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.001368074458558717,
                                        "internal_count": 1685,
                                        "left_child": {
                                            "split_index": 20,
                                            "split_feature": 9,
                                            "split_gain": 0.007403411530175839,
                                            "threshold": -0.02186795976012945,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.002632102592912681,
                                            "internal_count": 467,
                                            "left_child": {
                                                "leaf_index": 6,
                                                "leaf_value": -0.0004415151239702462,
                                                "leaf_count": 113
                                            },
                                            "right_child": {
                                                "leaf_index": 21,
                                                "leaf_value": 0.0004881649720272882,
                                                "leaf_count": 354
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 17,
                                            "leaf_value": -0.0002901804083383957,
                                            "leaf_count": 1218
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 17,
                                        "split_feature": 6,
                                        "split_gain": 0.009811610527169175,
                                        "threshold": 17775.082031250004,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.011456471906512888,
                                        "internal_count": 280,
                                        "left_child": {
                                            "leaf_index": 9,
                                            "leaf_value": -0.000471988739064116,
                                            "leaf_count": 122
                                        },
                                        "right_child": {
                                            "leaf_index": 18,
                                            "leaf_value": -0.0016658138431426502,
                                            "leaf_count": 158
                                        }
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 8,
                                    "leaf_value": -0.005248304608318469,
                                    "leaf_count": 23
                                }
                            },
                            "right_child": {
                                "split_index": 10,
                                "split_feature": 8,
                                "split_gain": 0.013771301570291727,
                                "threshold": -0.1374743431806564,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.0002365316916102133,
                                "internal_count": 23222,
                                "left_child": {
                                    "leaf_index": 7,
                                    "leaf_value": 0.0011653764894533395,
                                    "leaf_count": 97
                                },
                                "right_child": {
                                    "split_index": 13,
                                    "split_feature": 13,
                                    "split_gain": 0.01162960691552024,
                                    "threshold": -0.02020265348255634,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0002864066653985778,
                                    "internal_count": 23125,
                                    "left_child": {
                                        "split_index": 14,
                                        "split_feature": 7,
                                        "split_gain": 0.012390309775990505,
                                        "threshold": -0.08991678804159163,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.0010511891163787197,
                                        "internal_count": 10691,
                                        "left_child": {
                                            "leaf_index": 11,
                                            "leaf_value": 0.002075228373332021,
                                            "leaf_count": 26
                                        },
                                        "right_child": {
                                            "split_index": 15,
                                            "split_feature": 11,
                                            "split_gain": 0.01060886886399642,
                                            "threshold": 0.2697164565324784,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.001104343386804615,
                                            "internal_count": 10665,
                                            "left_child": {
                                                "leaf_index": 15,
                                                "leaf_value": -9.770277824489424e-05,
                                                "leaf_count": 10494
                                            },
                                            "right_child": {
                                                "leaf_index": 16,
                                                "leaf_value": -0.0008917501001473795,
                                                "leaf_count": 171
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 14,
                                        "leaf_value": 3.7116846596934065e-05,
                                        "leaf_count": 12434
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                "tree_index": 7,
                "num_leaves": 31,
                "num_cat": 0,
                "shrinkage": 0.1,
                "tree_structure": {
                    "split_index": 0,
                    "split_feature": 2,
                    "split_gain": 0.041890806422273386,
                    "threshold": -0.12265396118164061,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0,
                    "internal_count": 29079,
                    "left_child": {
                        "split_index": 1,
                        "split_feature": 0,
                        "split_gain": 0.01921245263908479,
                        "threshold": 15.250000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.006778436671717675,
                        "internal_count": 884,
                        "left_child": {
                            "split_index": 2,
                            "split_feature": 9,
                            "split_gain": 0.020097597857784245,
                            "threshold": -0.0790327563881874,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.005113463495592664,
                            "internal_count": 784,
                            "left_child": {
                                "split_index": 9,
                                "split_feature": 5,
                                "split_gain": 0.010176164285550508,
                                "threshold": 16840.613281250004,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.016683686214188736,
                                "internal_count": 126,
                                "left_child": {
                                    "leaf_index": 0,
                                    "leaf_value": 0.003389216566251384,
                                    "leaf_count": 27
                                },
                                "right_child": {
                                    "split_index": 29,
                                    "split_feature": 7,
                                    "split_gain": 0.006573153670887972,
                                    "threshold": 0.05244650132954121,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.011990464546463707,
                                    "internal_count": 99,
                                    "left_child": {
                                        "leaf_index": 10,
                                        "leaf_value": 0.0023009035187507316,
                                        "leaf_count": 35
                                    },
                                    "right_child": {
                                        "leaf_index": 30,
                                        "leaf_value": 0.0005964683727142984,
                                        "leaf_count": 64
                                    }
                                }
                            },
                            "right_child": {
                                "split_index": 17,
                                "split_feature": 7,
                                "split_gain": 0.008317955535818723,
                                "threshold": 0.042187677696347244,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.002897888932457246,
                                "internal_count": 658,
                                "left_child": {
                                    "split_index": 18,
                                    "split_feature": 9,
                                    "split_gain": 0.013052835324816096,
                                    "threshold": -0.030459167435765263,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.00409501258431047,
                                    "internal_count": 591,
                                    "left_child": {
                                        "split_index": 24,
                                        "split_feature": 7,
                                        "split_gain": 0.007130030417875136,
                                        "threshold": -0.004376347642391919,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.013077897150307806,
                                        "internal_count": 127,
                                        "left_child": {
                                            "leaf_index": 3,
                                            "leaf_value": 0.0029447085277008065,
                                            "leaf_count": 22
                                        },
                                        "right_child": {
                                            "leaf_index": 25,
                                            "leaf_value": 0.0009648162495189657,
                                            "leaf_count": 105
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 19,
                                        "leaf_value": 0.00016363351276689584,
                                        "leaf_count": 464
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 18,
                                    "leaf_value": -0.00076618137279197,
                                    "leaf_count": 67
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 3,
                            "split_feature": 1,
                            "split_gain": 0.015580973831564385,
                            "threshold": 9.999999682655225e-21,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.01983182637253776,
                            "internal_count": 100,
                            "left_child": {
                                "leaf_index": 2,
                                "leaf_value": 7.64680386055261e-05,
                                "leaf_count": 30
                            },
                            "right_child": {
                                "split_index": 4,
                                "split_feature": 11,
                                "split_gain": 0.016838658815588325,
                                "threshold": 0.07463307306170465,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.02800346036674455,
                                "internal_count": 70,
                                "left_child": {
                                    "leaf_index": 4,
                                    "leaf_value": 0.005169499107259548,
                                    "leaf_count": 21
                                },
                                "right_child": {
                                    "split_index": 28,
                                    "split_feature": 9,
                                    "split_gain": 0.006785274767787923,
                                    "threshold": -0.0022158513311296697,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.017849947207094152,
                                    "internal_count": 49,
                                    "left_child": {
                                        "leaf_index": 5,
                                        "leaf_value": 0.0008077537231468437,
                                        "leaf_count": 29
                                    },
                                    "right_child": {
                                        "leaf_index": 29,
                                        "leaf_value": 0.0032019941671751445,
                                        "leaf_count": 20
                                    }
                                }
                            }
                        }
                    },
                    "right_child": {
                        "split_index": 5,
                        "split_feature": 0,
                        "split_gain": 0.014168530404124222,
                        "threshold": 15.250000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.00021252485666123537,
                        "internal_count": 28195,
                        "left_child": {
                            "split_index": 8,
                            "split_feature": 13,
                            "split_gain": 0.010677694810136543,
                            "threshold": -0.3240950554609298,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.00041486160443616826,
                            "internal_count": 26071,
                            "left_child": {
                                "leaf_index": 1,
                                "leaf_value": -0.000840947857848579,
                                "leaf_count": 166
                            },
                            "right_child": {
                                "split_index": 11,
                                "split_feature": 2,
                                "split_gain": 0.008526153682930948,
                                "threshold": -0.020233809947967526,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.0003636318643206602,
                                "internal_count": 25905,
                                "left_child": {
                                    "split_index": 15,
                                    "split_feature": 0,
                                    "split_gain": 0.011378521369911857,
                                    "threshold": 9.750000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0006787056848612981,
                                    "internal_count": 6023,
                                    "left_child": {
                                        "split_index": 26,
                                        "split_feature": 2,
                                        "split_gain": 0.006912076583107576,
                                        "threshold": -0.08520501852035521,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.00517370711693959,
                                        "internal_count": 515,
                                        "left_child": {
                                            "split_index": 27,
                                            "split_feature": 7,
                                            "split_gain": 0.007482618916708414,
                                            "threshold": 0.0009442876325920225,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.016600871575064957,
                                            "internal_count": 48,
                                            "left_child": {
                                                "leaf_index": 9,
                                                "leaf_value": 0.00035838303156197074,
                                                "leaf_count": 23
                                            },
                                            "right_child": {
                                                "leaf_index": 28,
                                                "leaf_value": 0.002857654953375459,
                                                "leaf_count": 25
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 27,
                                            "leaf_value": 0.0003999180577346404,
                                            "leaf_count": 467
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 16,
                                        "leaf_value": 2.5842141879007082e-05,
                                        "leaf_count": 5508
                                    }
                                },
                                "right_child": {
                                    "split_index": 12,
                                    "split_feature": 0,
                                    "split_gain": 0.018818840302477227,
                                    "threshold": 9.750000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0006793948186875717,
                                    "internal_count": 19882,
                                    "left_child": {
                                        "split_index": 13,
                                        "split_feature": 2,
                                        "split_gain": 0.026643490264155897,
                                        "threshold": 0.06377673149108888,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.003899592529930071,
                                        "internal_count": 1663,
                                        "left_child": {
                                            "split_index": 25,
                                            "split_feature": 13,
                                            "split_gain": 0.006963903791089037,
                                            "threshold": -0.07363471388816832,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.0029309684649477907,
                                            "internal_count": 1571,
                                            "left_child": {
                                                "leaf_index": 12,
                                                "leaf_value": -0.0008162207645772756,
                                                "leaf_count": 219
                                            },
                                            "right_child": {
                                                "leaf_index": 26,
                                                "leaf_value": -0.0002083600579888126,
                                                "leaf_count": 1352
                                            }
                                        },
                                        "right_child": {
                                            "split_index": 14,
                                            "split_feature": 7,
                                            "split_gain": 0.013396294683651326,
                                            "threshold": -0.0015791898476891217,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.02043990129174705,
                                            "internal_count": 92,
                                            "left_child": {
                                                "leaf_index": 14,
                                                "leaf_value": -0.003822554992351296,
                                                "leaf_count": 29
                                            },
                                            "right_child": {
                                                "leaf_index": 15,
                                                "leaf_value": -0.0012252856683473857,
                                                "leaf_count": 63
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 16,
                                        "split_feature": 10,
                                        "split_gain": 0.009771860449443275,
                                        "threshold": -0.011481666471809147,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.0003854605306478178,
                                        "internal_count": 18219,
                                        "left_child": {
                                            "leaf_index": 13,
                                            "leaf_value": -0.00017563843159784453,
                                            "leaf_count": 4045
                                        },
                                        "right_child": {
                                            "leaf_index": 17,
                                            "leaf_value": 5.776008907874826e-07,
                                            "leaf_count": 14174
                                        }
                                    }
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 6,
                            "split_feature": 1,
                            "split_gain": 0.01105406782955724,
                            "threshold": 3.5000000000000004,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.002271053933941531,
                            "internal_count": 2124,
                            "left_child": {
                                "split_index": 19,
                                "split_feature": 12,
                                "split_gain": 0.007979379510452756,
                                "threshold": -0.0045129500795155755,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.0011334218459284444,
                                "internal_count": 1701,
                                "left_child": {
                                    "leaf_index": 6,
                                    "leaf_value": 0.0012363671483667607,
                                    "leaf_count": 61
                                },
                                "right_child": {
                                    "split_index": 21,
                                    "split_feature": 9,
                                    "split_gain": 0.0077952021102913735,
                                    "threshold": 0.0606246404349804,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0007157113411100975,
                                    "internal_count": 1640,
                                    "left_child": {
                                        "split_index": 22,
                                        "split_feature": 6,
                                        "split_gain": 0.008041018695193875,
                                        "threshold": 83788.70312500001,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.000450020423612625,
                                        "internal_count": 1616,
                                        "left_child": {
                                            "leaf_index": 20,
                                            "leaf_value": 0.0001370198643520626,
                                            "leaf_count": 1381
                                        },
                                        "right_child": {
                                            "split_index": 23,
                                            "split_feature": 9,
                                            "split_gain": 0.014820327434303286,
                                            "threshold": 0.010022622067481281,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.004957494987846734,
                                            "internal_count": 235,
                                            "left_child": {
                                                "leaf_index": 23,
                                                "leaf_value": 5.863590505225746e-05,
                                                "leaf_count": 158
                                            },
                                            "right_child": {
                                                "leaf_index": 24,
                                                "leaf_value": -0.001633319548216298,
                                                "leaf_count": 77
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 22,
                                        "leaf_value": 0.0018605566452606582,
                                        "leaf_count": 24
                                    }
                                }
                            },
                            "right_child": {
                                "split_index": 7,
                                "split_feature": 12,
                                "split_gain": 0.017351576945941506,
                                "threshold": 0.12550753355026248,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.00684578722403671,
                                "internal_count": 423,
                                "left_child": {
                                    "split_index": 10,
                                    "split_feature": 13,
                                    "split_gain": 0.009519787600169305,
                                    "threshold": -0.08957080170512198,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.005240592366112537,
                                    "internal_count": 398,
                                    "left_child": {
                                        "split_index": 20,
                                        "split_feature": 12,
                                        "split_gain": 0.007906063540284135,
                                        "threshold": 0.015450398903340103,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.018447024284493335,
                                        "internal_count": 48,
                                        "left_child": {
                                            "leaf_index": 7,
                                            "leaf_value": 0.003075689367949963,
                                            "leaf_count": 25
                                        },
                                        "right_child": {
                                            "leaf_index": 21,
                                            "leaf_value": 0.000506673146383432,
                                            "leaf_count": 23
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 11,
                                        "leaf_value": 0.00034294245601631704,
                                        "leaf_count": 350
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 8,
                                    "leaf_value": 0.003240048936218955,
                                    "leaf_count": 25
                                }
                            }
                        }
                    }
                }
            },
            {
                "tree_index": 8,
                "num_leaves": 31,
                "num_cat": 0,
                "shrinkage": 0.1,
                "tree_structure": {
                    "split_index": 0,
                    "split_feature": 2,
                    "split_gain": 0.034521793917863024,
                    "threshold": -0.1406314969062805,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0,
                    "internal_count": 29079,
                    "left_child": {
                        "split_index": 1,
                        "split_feature": 0,
                        "split_gain": 0.01435912253597045,
                        "threshold": 15.250000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.0071441895583294005,
                        "internal_count": 661,
                        "left_child": {
                            "split_index": 3,
                            "split_feature": 9,
                            "split_gain": 0.01524041285375801,
                            "threshold": -0.06665717065334319,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0053779957902092045,
                            "internal_count": 578,
                            "left_child": {
                                "split_index": 4,
                                "split_feature": 6,
                                "split_gain": 0.012436752697761701,
                                "threshold": 13777.772949218752,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.014417937058659852,
                                "internal_count": 141,
                                "left_child": {
                                    "leaf_index": 0,
                                    "leaf_value": 0.003016355649546116,
                                    "leaf_count": 37
                                },
                                "right_child": {
                                    "leaf_index": 5,
                                    "leaf_value": 0.0008816130143644001,
                                    "leaf_count": 104
                                }
                            },
                            "right_child": {
                                "leaf_index": 4,
                                "leaf_value": 0.0002461218401532909,
                                "leaf_count": 437
                            }
                        },
                        "right_child": {
                            "split_index": 2,
                            "split_feature": 7,
                            "split_gain": 0.020333773141206844,
                            "threshold": -0.0007186729635577648,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.019443707606202575,
                            "internal_count": 83,
                            "left_child": {
                                "leaf_index": 2,
                                "leaf_value": 0.004722325833135983,
                                "leaf_count": 20
                            },
                            "right_child": {
                                "split_index": 22,
                                "split_feature": 14,
                                "split_gain": 0.009157134448601272,
                                "threshold": 0.6598813831806184,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.01062480261408916,
                                "internal_count": 63,
                                "left_child": {
                                    "leaf_index": 3,
                                    "leaf_value": 0.0019149805266698379,
                                    "leaf_count": 42
                                },
                                "right_child": {
                                    "leaf_index": 23,
                                    "leaf_value": -0.0006425202691129276,
                                    "leaf_count": 21
                                }
                            }
                        }
                    },
                    "right_child": {
                        "split_index": 5,
                        "split_feature": 2,
                        "split_gain": 0.012283511785937782,
                        "threshold": -0.05325555801391601,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.00016617317626142804,
                        "internal_count": 28418,
                        "left_child": {
                            "split_index": 7,
                            "split_feature": 0,
                            "split_gain": 0.011780383119755895,
                            "threshold": 9.750000000000002,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0019332541494703128,
                            "internal_count": 2538,
                            "left_child": {
                                "leaf_index": 1,
                                "leaf_value": 0.0009825807227188804,
                                "leaf_count": 176
                            },
                            "right_child": {
                                "split_index": 13,
                                "split_feature": 0,
                                "split_gain": 0.010296690690986429,
                                "threshold": 15.250000000000002,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.0013451553595979784,
                                "internal_count": 2362,
                                "left_child": {
                                    "split_index": 25,
                                    "split_feature": 4,
                                    "split_gain": 0.008468017031568537,
                                    "threshold": 4807.514160156251,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0006878298590874134,
                                    "internal_count": 2149,
                                    "left_child": {
                                        "split_index": 28,
                                        "split_feature": 9,
                                        "split_gain": 0.007146720400448578,
                                        "threshold": 0.025947427377104763,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00410196642185347,
                                        "internal_count": 315,
                                        "left_child": {
                                            "leaf_index": 8,
                                            "leaf_value": -0.0005675658634777713,
                                            "leaf_count": 284
                                        },
                                        "right_child": {
                                            "leaf_index": 29,
                                            "leaf_value": 0.0010315084819129908,
                                            "leaf_count": 31
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 26,
                                        "leaf_value": 0.0001510504792836802,
                                        "leaf_count": 1834
                                    }
                                },
                                "right_child": {
                                    "split_index": 29,
                                    "split_feature": 3,
                                    "split_gain": 0.006477453305221266,
                                    "threshold": 0.5833333432674409,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.007977045033763255,
                                    "internal_count": 213,
                                    "left_child": {
                                        "leaf_index": 14,
                                        "leaf_value": 0.0005002702440657286,
                                        "leaf_count": 165
                                    },
                                    "right_child": {
                                        "leaf_index": 30,
                                        "leaf_value": 0.0018201347697565024,
                                        "leaf_count": 48
                                    }
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 6,
                            "split_feature": 13,
                            "split_gain": 0.013818535885527387,
                            "threshold": -0.35978579521179194,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.0003720598282207464,
                            "internal_count": 25880,
                            "left_child": {
                                "split_index": 21,
                                "split_feature": 0,
                                "split_gain": 0.009178921607552277,
                                "threshold": 10.750000000000002,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.013836416258479738,
                                "internal_count": 76,
                                "left_child": {
                                    "leaf_index": 6,
                                    "leaf_value": -0.0023463877444534543,
                                    "leaf_count": 43
                                },
                                "right_child": {
                                    "leaf_index": 22,
                                    "leaf_value": -0.0001291542591802268,
                                    "leaf_count": 33
                                }
                            },
                            "right_child": {
                                "split_index": 8,
                                "split_feature": 0,
                                "split_gain": 0.010447730336946287,
                                "threshold": 10.250000000000002,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.00033240353118541526,
                                "internal_count": 25804,
                                "left_child": {
                                    "split_index": 9,
                                    "split_feature": 2,
                                    "split_gain": 0.028242671114725282,
                                    "threshold": 0.0981625020503998,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.001807339328084656,
                                    "internal_count": 4049,
                                    "left_child": {
                                        "split_index": 10,
                                        "split_feature": 2,
                                        "split_gain": 0.011708065234374248,
                                        "threshold": 0.04226076602935792,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.001459593438466502,
                                        "internal_count": 3980,
                                        "left_child": {
                                            "split_index": 12,
                                            "split_feature": 7,
                                            "split_gain": 0.01188614398309093,
                                            "threshold": -0.057054983451962464,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.000872832564130765,
                                            "internal_count": 3563,
                                            "left_child": {
                                                "leaf_index": 7,
                                                "leaf_value": 0.001964957345938144,
                                                "leaf_count": 28
                                            },
                                            "right_child": {
                                                "split_index": 15,
                                                "split_feature": 9,
                                                "split_gain": 0.010037247273257917,
                                                "threshold": -0.05221593938767909,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.0010353862752080895,
                                                "internal_count": 3535,
                                                "left_child": {
                                                    "leaf_index": 13,
                                                    "leaf_value": -0.0015103277177549899,
                                                    "leaf_count": 50
                                                },
                                                "right_child": {
                                                    "split_index": 16,
                                                    "split_feature": 2,
                                                    "split_gain": 0.010292001612824947,
                                                    "threshold": -0.013360440731048582,
                                                    "decision_type": "<=",
                                                    "default_left": true,
                                                    "missing_type": "None",
                                                    "internal_value": -0.0008335513985604308,
                                                    "internal_count": 3485,
                                                    "left_child": {
                                                        "leaf_index": 16,
                                                        "leaf_value": 0.0001896511646585134,
                                                        "leaf_count": 989
                                                    },
                                                    "right_child": {
                                                        "split_index": 26,
                                                        "split_feature": 9,
                                                        "split_gain": 0.008232723304592902,
                                                        "threshold": -0.007889647502452133,
                                                        "decision_type": "<=",
                                                        "default_left": true,
                                                        "missing_type": "None",
                                                        "internal_value": -0.001915295129189022,
                                                        "internal_count": 2496,
                                                        "left_child": {
                                                            "leaf_index": 17,
                                                            "leaf_value": -0.0006496447033896403,
                                                            "leaf_count": 339
                                                        },
                                                        "right_child": {
                                                            "leaf_index": 27,
                                                            "leaf_value": -0.00011953088075868884,
                                                            "leaf_count": 2157
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "right_child": {
                                            "split_index": 11,
                                            "split_feature": 7,
                                            "split_gain": 0.012406714978730731,
                                            "threshold": -0.03879664093255996,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.006473092228054584,
                                            "internal_count": 417,
                                            "left_child": {
                                                "leaf_index": 11,
                                                "leaf_value": 0.00010772673997269307,
                                                "leaf_count": 143
                                            },
                                            "right_child": {
                                                "split_index": 24,
                                                "split_feature": 4,
                                                "split_gain": 0.008641825347369219,
                                                "threshold": 21522.333984375004,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.010413608384159535,
                                                "internal_count": 274,
                                                "left_child": {
                                                    "leaf_index": 12,
                                                    "leaf_value": -0.0003120853805240568,
                                                    "leaf_count": 102
                                                },
                                                "right_child": {
                                                    "leaf_index": 25,
                                                    "leaf_value": -0.0014738381448402178,
                                                    "leaf_count": 172
                                                }
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 14,
                                        "split_feature": 7,
                                        "split_gain": 0.010268101418547275,
                                        "threshold": -0.020758198574185368,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.021865725424899923,
                                        "internal_count": 69,
                                        "left_child": {
                                            "leaf_index": 10,
                                            "leaf_value": -0.0010847552654970633,
                                            "leaf_count": 38
                                        },
                                        "right_child": {
                                            "leaf_index": 15,
                                            "leaf_value": -0.0035371872691264857,
                                            "leaf_count": 31
                                        }
                                    }
                                },
                                "right_child": {
                                    "split_index": 17,
                                    "split_feature": 9,
                                    "split_gain": 0.009626823780329247,
                                    "threshold": 0.03518651798367501,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -5.7891233247238966e-05,
                                    "internal_count": 21755,
                                    "left_child": {
                                        "leaf_index": 9,
                                        "leaf_value": -2.8672564497054734e-05,
                                        "leaf_count": 19453
                                    },
                                    "right_child": {
                                        "split_index": 18,
                                        "split_feature": 5,
                                        "split_gain": 0.010602248622104266,
                                        "threshold": 14038.712890625002,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.001875868893274706,
                                        "internal_count": 2302,
                                        "left_child": {
                                            "split_index": 27,
                                            "split_feature": 7,
                                            "split_gain": 0.007291002732424966,
                                            "threshold": -0.07129997014999388,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.00483345060430484,
                                            "internal_count": 794,
                                            "left_child": {
                                                "leaf_index": 18,
                                                "leaf_value": 0.0023684644559398295,
                                                "leaf_count": 20
                                            },
                                            "right_child": {
                                                "leaf_index": 28,
                                                "leaf_value": 0.0004346339649392865,
                                                "leaf_count": 774
                                            }
                                        },
                                        "right_child": {
                                            "split_index": 19,
                                            "split_feature": 8,
                                            "split_gain": 0.011765478533400953,
                                            "threshold": -0.07242358103394507,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.00031862759449624036,
                                            "internal_count": 1508,
                                            "left_child": {
                                                "split_index": 23,
                                                "split_feature": 7,
                                                "split_gain": 0.00869419609838041,
                                                "threshold": -0.045226177200675004,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": 0.005466408205451571,
                                                "internal_count": 343,
                                                "left_child": {
                                                    "leaf_index": 19,
                                                    "leaf_value": 0.0024245679105186595,
                                                    "leaf_count": 23
                                                },
                                                "right_child": {
                                                    "leaf_index": 24,
                                                    "leaf_value": 0.00041166481095331167,
                                                    "leaf_count": 320
                                                }
                                            },
                                            "right_child": {
                                                "split_index": 20,
                                                "split_feature": 2,
                                                "split_gain": 0.02066911443379808,
                                                "threshold": 0.18260979652404788,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.0011969850660682906,
                                                "internal_count": 1165,
                                                "left_child": {
                                                    "leaf_index": 20,
                                                    "leaf_value": -5.860982241537371e-05,
                                                    "leaf_count": 1141
                                                },
                                                "right_child": {
                                                    "leaf_index": 21,
                                                    "leaf_value": -0.0030239563675422687,
                                                    "leaf_count": 24
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                "tree_index": 9,
                "num_leaves": 31,
                "num_cat": 0,
                "shrinkage": 0.1,
                "tree_structure": {
                    "split_index": 0,
                    "split_feature": 2,
                    "split_gain": 0.02811436646355767,
                    "threshold": -0.1306527256965637,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0,
                    "internal_count": 29079,
                    "left_child": {
                        "split_index": 1,
                        "split_feature": 0,
                        "split_gain": 0.013896161885114576,
                        "threshold": 9.750000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.005946145266036949,
                        "internal_count": 774,
                        "left_child": {
                            "leaf_index": 0,
                            "leaf_value": 0.002781708027967917,
                            "leaf_count": 28
                        },
                        "right_child": {
                            "split_index": 2,
                            "split_feature": 0,
                            "split_gain": 0.015100422129394882,
                            "threshold": 15.250000000000002,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.005125252262843943,
                            "internal_count": 746,
                            "left_child": {
                                "split_index": 15,
                                "split_feature": 9,
                                "split_gain": 0.0075963194087929585,
                                "threshold": -0.06665717065334319,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.003469339517570633,
                                "internal_count": 657,
                                "left_child": {
                                    "split_index": 16,
                                    "split_feature": 6,
                                    "split_gain": 0.007519579203160669,
                                    "threshold": 10561.379882812502,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.010218639742527017,
                                    "internal_count": 133,
                                    "left_child": {
                                        "leaf_index": 2,
                                        "leaf_value": 0.002445793906146468,
                                        "leaf_count": 29
                                    },
                                    "right_child": {
                                        "split_index": 18,
                                        "split_feature": 14,
                                        "split_gain": 0.006653704587729785,
                                        "threshold": 0.10178722068667413,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.006248065893977093,
                                        "internal_count": 104,
                                        "left_child": {
                                            "leaf_index": 17,
                                            "leaf_value": 0.0020466724578291177,
                                            "leaf_count": 25
                                        },
                                        "right_child": {
                                            "leaf_index": 19,
                                            "leaf_value": 0.0001748490360966306,
                                            "leaf_count": 79
                                        }
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 16,
                                    "leaf_value": 0.00017562537734500247,
                                    "leaf_count": 524
                                }
                            },
                            "right_child": {
                                "split_index": 3,
                                "split_feature": 7,
                                "split_gain": 0.01333463879928657,
                                "threshold": -0.001480124541558325,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.017349237359973884,
                                "internal_count": 89,
                                "left_child": {
                                    "leaf_index": 3,
                                    "leaf_value": 0.0038710242560641333,
                                    "leaf_count": 22
                                },
                                "right_child": {
                                    "split_index": 9,
                                    "split_feature": 1,
                                    "split_gain": 0.00905648076139362,
                                    "threshold": 9.999999682655225e-21,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.010335175950799498,
                                    "internal_count": 67,
                                    "left_child": {
                                        "leaf_index": 4,
                                        "leaf_value": -0.0005745516772351593,
                                        "leaf_count": 23
                                    },
                                    "right_child": {
                                        "leaf_index": 10,
                                        "leaf_value": 0.0018740992601537568,
                                        "leaf_count": 44
                                    }
                                }
                            }
                        }
                    },
                    "right_child": {
                        "split_index": 4,
                        "split_feature": 0,
                        "split_gain": 0.010851196489391902,
                        "threshold": 15.250000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.00016259731371785158,
                        "internal_count": 28305,
                        "left_child": {
                            "split_index": 10,
                            "split_feature": 2,
                            "split_gain": 0.008271917344687003,
                            "threshold": 0.1488955616950989,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.0003394470076560034,
                            "internal_count": 26170,
                            "left_child": {
                                "split_index": 14,
                                "split_feature": 9,
                                "split_gain": 0.009454977468021706,
                                "threshold": 0.14134048670530322,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.0002922680106950003,
                                "internal_count": 25987,
                                "left_child": {
                                    "split_index": 21,
                                    "split_feature": 13,
                                    "split_gain": 0.006270702185417639,
                                    "threshold": -0.3240950554609298,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0003171089730291207,
                                    "internal_count": 25943,
                                    "left_child": {
                                        "split_index": 22,
                                        "split_feature": 2,
                                        "split_gain": 0.0068182191993769225,
                                        "threshold": -0.006518125534057616,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.006721241145561707,
                                        "internal_count": 152,
                                        "left_child": {
                                            "split_index": 24,
                                            "split_feature": 7,
                                            "split_gain": 0.00920047609914825,
                                            "threshold": 0.042187677696347244,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.0023091988320097785,
                                            "internal_count": 106,
                                            "left_child": {
                                                "leaf_index": 1,
                                                "leaf_value": 0.0002458665788470258,
                                                "leaf_count": 84
                                            },
                                            "right_child": {
                                                "leaf_index": 25,
                                                "leaf_value": -0.0020513772837479007,
                                                "leaf_count": 22
                                            }
                                        },
                                        "right_child": {
                                            "split_index": 23,
                                            "split_feature": 0,
                                            "split_gain": 0.010514880613220654,
                                            "threshold": 11.250000000000002,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.01688812125939876,
                                            "internal_count": 46,
                                            "left_child": {
                                                "leaf_index": 23,
                                                "leaf_value": -0.0032007127878782545,
                                                "leaf_count": 23
                                            },
                                            "right_child": {
                                                "leaf_index": 24,
                                                "leaf_value": -0.00017691146400149752,
                                                "leaf_count": 23
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 28,
                                        "split_feature": 2,
                                        "split_gain": 0.006054589750794193,
                                        "threshold": -0.0395936369895935,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.0002793660359493272,
                                        "internal_count": 25791,
                                        "left_child": {
                                            "leaf_index": 22,
                                            "leaf_value": 9.90612497633529e-05,
                                            "leaf_count": 3277
                                        },
                                        "right_child": {
                                            "split_index": 29,
                                            "split_feature": 10,
                                            "split_gain": 0.012052896282544745,
                                            "threshold": -0.03704122453927993,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.00046421633596491836,
                                            "internal_count": 22514,
                                            "left_child": {
                                                "leaf_index": 29,
                                                "leaf_value": -0.00040920423897494566,
                                                "leaf_count": 880
                                            },
                                            "right_child": {
                                                "leaf_index": 30,
                                                "leaf_value": -3.1664829827746374e-05,
                                                "leaf_count": 21634
                                            }
                                        }
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 15,
                                    "leaf_value": 0.0014354302121897821,
                                    "leaf_count": 44
                                }
                            },
                            "right_child": {
                                "split_index": 11,
                                "split_feature": 12,
                                "split_gain": 0.02768551019199479,
                                "threshold": 0.1747507229447365,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.007039122384845004,
                                "internal_count": 183,
                                "left_child": {
                                    "leaf_index": 11,
                                    "leaf_value": -0.003869786499611413,
                                    "leaf_count": 24
                                },
                                "right_child": {
                                    "split_index": 12,
                                    "split_feature": 8,
                                    "split_gain": 0.013550688768905965,
                                    "threshold": -0.06685147061944006,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0022604442548421182,
                                    "internal_count": 159,
                                    "left_child": {
                                        "leaf_index": 12,
                                        "leaf_value": 0.0010434109765231948,
                                        "leaf_count": 55
                                    },
                                    "right_child": {
                                        "split_index": 13,
                                        "split_feature": 0,
                                        "split_gain": 0.010308047299499185,
                                        "threshold": 11.750000000000002,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.008973910323150518,
                                        "internal_count": 104,
                                        "left_child": {
                                            "leaf_index": 13,
                                            "leaf_value": -0.002876642294272426,
                                            "leaf_count": 21
                                        },
                                        "right_child": {
                                            "split_index": 20,
                                            "split_feature": 13,
                                            "split_gain": 0.006286623163052259,
                                            "threshold": -0.05154652893543243,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.003966166166390899,
                                            "internal_count": 83,
                                            "left_child": {
                                                "leaf_index": 14,
                                                "leaf_value": -0.0016852234256825448,
                                                "leaf_count": 26
                                            },
                                            "right_child": {
                                                "leaf_index": 21,
                                                "leaf_value": 0.00019116894538073165,
                                                "leaf_count": 57
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 5,
                            "split_feature": 13,
                            "split_gain": 0.009075911377381224,
                            "threshold": 0.03554580919444562,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0020051574827043657,
                            "internal_count": 2135,
                            "left_child": {
                                "split_index": 6,
                                "split_feature": 2,
                                "split_gain": 0.009180000256617275,
                                "threshold": 0.014289140701293947,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.0017632128461361847,
                                "internal_count": 2106,
                                "left_child": {
                                    "split_index": 8,
                                    "split_feature": 12,
                                    "split_gain": 0.01092228629078883,
                                    "threshold": 0.10726978629827501,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0035580771041389746,
                                    "internal_count": 1211,
                                    "left_child": {
                                        "split_index": 26,
                                        "split_feature": 2,
                                        "split_gain": 0.006158321675547199,
                                        "threshold": -0.1020374298095703,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.00303997534402762,
                                        "internal_count": 1176,
                                        "left_child": {
                                            "split_index": 27,
                                            "split_feature": 5,
                                            "split_gain": 0.007297929123947,
                                            "threshold": 38858.73828125001,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.015235112645314075,
                                            "internal_count": 40,
                                            "left_child": {
                                                "leaf_index": 5,
                                                "leaf_value": 0.0028742452431470156,
                                                "leaf_count": 20
                                            },
                                            "right_child": {
                                                "leaf_index": 28,
                                                "leaf_value": 0.00017277728591579943,
                                                "leaf_count": 20
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 27,
                                            "leaf_value": 0.0002610569101024576,
                                            "leaf_count": 1136
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 9,
                                        "leaf_value": 0.002096629624388048,
                                        "leaf_count": 35
                                    }
                                },
                                "right_child": {
                                    "split_index": 7,
                                    "split_feature": 4,
                                    "split_gain": 0.013475408893578933,
                                    "threshold": 51842.86523437501,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0006653688482117241,
                                    "internal_count": 895,
                                    "left_child": {
                                        "split_index": 17,
                                        "split_feature": 12,
                                        "split_gain": 0.007041694050428189,
                                        "threshold": 0.12118293717503549,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.0010757441252817993,
                                        "internal_count": 745,
                                        "left_child": {
                                            "split_index": 19,
                                            "split_feature": 12,
                                            "split_gain": 0.006516988026711235,
                                            "threshold": 0.10726978629827501,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -4.94283271859751e-05,
                                            "internal_count": 657,
                                            "left_child": {
                                                "leaf_index": 7,
                                                "leaf_value": 8.446735921058677e-05,
                                                "leaf_count": 608
                                            },
                                            "right_child": {
                                                "leaf_index": 20,
                                                "leaf_value": -0.0011143590917582719,
                                                "leaf_count": 49
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 18,
                                            "leaf_value": 0.0009476179367001432,
                                            "leaf_count": 88
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 25,
                                        "split_feature": 4,
                                        "split_gain": 0.006248102245463672,
                                        "threshold": 122479.75781250001,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00931289661656289,
                                        "internal_count": 150,
                                        "left_child": {
                                            "leaf_index": 8,
                                            "leaf_value": -0.0013605202667699465,
                                            "leaf_count": 104
                                        },
                                        "right_child": {
                                            "leaf_index": 26,
                                            "leaf_value": 3.914474990502324e-05,
                                            "leaf_count": 46
                                        }
                                    }
                                }
                            },
                            "right_child": {
                                "leaf_index": 6,
                                "leaf_value": 0.0019575343848655708,
                                "leaf_count": 29
                            }
                        }
                    }
                }
            }
        ]
    }
}
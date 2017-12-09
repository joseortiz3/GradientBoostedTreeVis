allTrees = {
    "0": {
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.1265662312507629\nsplit_gain:0.24567374209016074\ninternal_value:0\ninternal_count:40420\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.1265662312507629,
            "split_gain": 0.24567374209016074,
            "internal_value": 0.0,
            "internal_count": 40420,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.07160226255655287\nsplit_gain:0.08798734696735741\ninternal_value:0.013980668395723128\ninternal_count:1219\"",
                    "name": "split1",
                    "split_feature_name": "high2_2_5",
                    "threshold": -0.07160226255655287,
                    "split_gain": 0.08798734696735741,
                    "internal_value": 0.013980668395723128,
                    "internal_count": 1219,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:stk1_2\nthreshold:0.0029368743998929863\nsplit_gain:0.08320441749026669\ninternal_value:0.030499399563453992\ninternal_count:255\"",
                            "name": "split3",
                            "split_feature_name": "stk1_2",
                            "threshold": 0.0029368743998929863,
                            "split_gain": 0.08320441749026669,
                            "internal_value": 0.030499399563453992,
                            "internal_count": 255,
                            "id": "split3",
                            "children": [
                                {
                                    "label": "\"leaf_index:0\nleaf_value:0.007451845175529668\nleaf_count:38\"",
                                    "name": "leaf0",
                                    "leaf_index": 0.0,
                                    "leaf_value": 0.007451845175529668,
                                    "size": 0.007451845175529668,
                                    "leaf_count": 38,
                                    "id": "leaf0"
                                },
                                {
                                    "label": "\"split_feature_name:daytime\nthreshold:13.250000000000002\nsplit_gain:0.022922627516114916\ninternal_value:0.022940387587561402\ninternal_count:217\"",
                                    "name": "split14",
                                    "split_feature_name": "daytime",
                                    "threshold": 13.250000000000002,
                                    "split_gain": 0.022922627516114916,
                                    "internal_value": 0.022940387587561402,
                                    "internal_count": 217,
                                    "id": "split14",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:stk1_2\nthreshold:0.07421001419425012\nsplit_gain:0.014158278355810475\ninternal_value:0.016805879148341772\ninternal_count:160\"",
                                            "name": "split25",
                                            "split_feature_name": "stk1_2",
                                            "threshold": 0.07421001419425012,
                                            "split_gain": 0.014158278355810475,
                                            "internal_value": 0.016805879148341772,
                                            "internal_count": 160,
                                            "id": "split25",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:stk2_5\nthreshold:0.08013450726866723\nsplit_gain:0.01844376275972861\ninternal_value:0.026095891001103964\ninternal_count:81\"",
                                                    "name": "split26",
                                                    "split_feature_name": "stk2_5",
                                                    "threshold": 0.08013450726866723,
                                                    "split_gain": 0.01844376275972861,
                                                    "internal_value": 0.026095891001103964,
                                                    "internal_count": 81,
                                                    "id": "split26",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:4\nleaf_value:0.004222622125316574\nleaf_count:40\"",
                                                            "name": "leaf4",
                                                            "leaf_index": 4.0,
                                                            "leaf_value": 0.004222622125316574,
                                                            "size": 0.004222622125316574,
                                                            "leaf_count": 40,
                                                            "id": "leaf4"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:27\nleaf_value:0.0012044406510150062\nleaf_count:41\"",
                                                            "name": "leaf27",
                                                            "leaf_index": 27.0,
                                                            "leaf_value": 0.0012044406510150062,
                                                            "size": 0.0012044406510150062,
                                                            "leaf_count": 41,
                                                            "id": "leaf27"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:26\nleaf_value:0.0008133792504232185\nleaf_count:79\"",
                                                    "name": "leaf26",
                                                    "leaf_index": 26.0,
                                                    "leaf_value": 0.0008133792504232185,
                                                    "size": 0.0008133792504232185,
                                                    "leaf_count": 79,
                                                    "id": "leaf26"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:stk2_5\nthreshold:0.02798797190189362\nsplit_gain:0.021811779546043672\ninternal_value:0.04016006039940597\ninternal_count:57\"",
                                            "name": "split15",
                                            "split_feature_name": "stk2_5",
                                            "threshold": 0.02798797190189362,
                                            "split_gain": 0.021811779546043672,
                                            "internal_value": 0.04016006039940597,
                                            "internal_count": 57,
                                            "id": "split15",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:15\nleaf_value:0.006479710821667848\nleaf_count:23\"",
                                                    "name": "leaf15",
                                                    "leaf_index": 15.0,
                                                    "leaf_value": 0.006479710821667848,
                                                    "size": 0.006479710821667848,
                                                    "leaf_count": 23,
                                                    "id": "leaf15"
                                                },
                                                {
                                                    "label": "\"leaf_index:16\nleaf_value:0.002492404501660382\nleaf_count:34\"",
                                                    "name": "leaf16",
                                                    "leaf_index": 16.0,
                                                    "leaf_value": 0.002492404501660382,
                                                    "size": 0.002492404501660382,
                                                    "leaf_count": 34,
                                                    "id": "leaf16"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.08656896823744964\ninternal_value:0.009611087018366936\ninternal_count:964\"",
                            "name": "split2",
                            "split_feature_name": "daytime",
                            "threshold": 15.250000000000002,
                            "split_gain": 0.08656896823744964,
                            "internal_value": 0.009611087018366936,
                            "internal_count": 964,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.02345656510442495\nsplit_gain:0.01473297789689475\ninternal_value:0.005936522585852148\ninternal_count:838\"",
                                    "name": "split22",
                                    "split_feature_name": "high2_2_5",
                                    "threshold": -0.02345656510442495,
                                    "split_gain": 0.01473297789689475,
                                    "internal_value": 0.005936522585852148,
                                    "internal_count": 838,
                                    "id": "split22",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:2\nleaf_value:0.0012955270441505971\nleaf_count:265\"",
                                            "name": "leaf2",
                                            "leaf_index": 2.0,
                                            "leaf_value": 0.0012955270441505971,
                                            "size": 0.0012955270441505971,
                                            "leaf_count": 265,
                                            "id": "leaf2"
                                        },
                                        {
                                            "label": "\"leaf_index:23\nleaf_value:0.00039381674523185855\nleaf_count:573\"",
                                            "name": "leaf23",
                                            "leaf_index": 23.0,
                                            "leaf_value": 0.00039381674523185855,
                                            "size": 0.00039381674523185855,
                                            "leaf_count": 573,
                                            "id": "leaf23"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:95359.27734375001\nsplit_gain:0.01585456427538176\ninternal_value:0.03404985681556845\ninternal_count:126\"",
                                    "name": "split17",
                                    "split_feature_name": "avg_dolvol2_5",
                                    "threshold": 95359.27734375001,
                                    "split_gain": 0.01585456427538176,
                                    "internal_value": 0.03404985681556845,
                                    "internal_count": 126,
                                    "id": "split17",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:high2_2_5\nthreshold:-0.02592978626489639\nsplit_gain:0.02231053324870713\ninternal_value:0.02695535541796643\ninternal_count:90\"",
                                            "name": "split18",
                                            "split_feature_name": "high2_2_5",
                                            "threshold": -0.02592978626489639,
                                            "split_gain": 0.02231053324870713,
                                            "internal_value": 0.02695535541796643,
                                            "internal_count": 90,
                                            "id": "split18",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:3\nleaf_value:0.0002420944018756721\nleaf_count:25\"",
                                                    "name": "leaf3",
                                                    "leaf_index": 3.0,
                                                    "leaf_value": 0.0002420944018756721,
                                                    "size": 0.0002420944018756721,
                                                    "leaf_count": 25,
                                                    "id": "leaf3"
                                                },
                                                {
                                                    "label": "\"split_feature_name:high2_5_30\nthreshold:-0.02559939213097095\nsplit_gain:0.02055200577033721\ninternal_value:0.03671978879540872\ninternal_count:65\"",
                                                    "name": "split19",
                                                    "split_feature_name": "high2_5_30",
                                                    "threshold": -0.02559939213097095,
                                                    "split_gain": 0.02055200577033721,
                                                    "internal_value": 0.03671978879540872,
                                                    "internal_count": 65,
                                                    "id": "split19",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:19\nleaf_value:0.0063311634474236015\nleaf_count:21\"",
                                                            "name": "leaf19",
                                                            "leaf_index": 19.0,
                                                            "leaf_value": 0.0063311634474236015,
                                                            "size": 0.0063311634474236015,
                                                            "leaf_count": 21,
                                                            "id": "leaf19"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:20\nleaf_value:0.002528851017231198\nleaf_count:44\"",
                                                            "name": "leaf20",
                                                            "leaf_index": 20.0,
                                                            "leaf_value": 0.002528851017231198,
                                                            "size": 0.002528851017231198,
                                                            "leaf_count": 44,
                                                            "id": "leaf20"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:18\nleaf_value:0.005263922569171377\nleaf_count:36\"",
                                            "name": "leaf18",
                                            "leaf_index": 18.0,
                                            "leaf_value": 0.005263922569171377,
                                            "size": 0.005263922569171377,
                                            "leaf_count": 36,
                                            "id": "leaf18"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "\"split_feature_name:day_delta\nthreshold:-0.052631556987762444\nsplit_gain:0.05727576366654754\ninternal_value:-0.000434744936086833\ninternal_count:39201\"",
                    "name": "split4",
                    "split_feature_name": "day_delta",
                    "threshold": -0.052631556987762444,
                    "split_gain": 0.05727576366654754,
                    "internal_value": -0.000434744936086833,
                    "internal_count": 39201,
                    "id": "split4",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.05978541950314592\ninternal_value:0.0034856992793874777\ninternal_count:3403\"",
                            "name": "split9",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.05978541950314592,
                            "internal_value": 0.0034856992793874777,
                            "internal_count": 3403,
                            "id": "split9",
                            "children": [
                                {
                                    "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:3004.367309570313\nsplit_gain:0.012094579738116451\ninternal_value:0.01905387711727678\ninternal_count:230\"",
                                    "name": "split27",
                                    "split_feature_name": "avg_dolvol5_30",
                                    "threshold": 3004.367309570313,
                                    "split_gain": 0.012094579738116451,
                                    "internal_value": 0.01905387711727678,
                                    "internal_count": 230,
                                    "id": "split27",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:1\nleaf_value:-0.0002390283010467142\nleaf_count:22\"",
                                            "name": "leaf1",
                                            "leaf_index": 1.0,
                                            "leaf_value": -0.0002390283010467142,
                                            "size": -0.0002390283010467142,
                                            "leaf_count": 22,
                                            "id": "leaf1"
                                        },
                                        {
                                            "label": "\"leaf_index:28\nleaf_value:0.0022265358178347088\nleaf_count:208\"",
                                            "name": "leaf28",
                                            "leaf_index": 28.0,
                                            "leaf_value": 0.0022265358178347088,
                                            "size": 0.0022265358178347088,
                                            "leaf_count": 208,
                                            "id": "leaf28"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.045965610437832954\ninternal_value:0.002357214910426072\ninternal_count:3173\"",
                                    "name": "split10",
                                    "split_feature_name": "daytime",
                                    "threshold": 15.250000000000002,
                                    "split_gain": 0.045965610437832954,
                                    "internal_value": 0.002357214910426072,
                                    "internal_count": 3173,
                                    "id": "split10",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:10\nleaf_value:0.00020008995988039918\nleaf_count:2882\"",
                                            "name": "leaf10",
                                            "leaf_index": 10.0,
                                            "leaf_value": 0.00020008995988039918,
                                            "size": 0.00020008995988039918,
                                            "leaf_count": 2882,
                                            "id": "leaf10"
                                        },
                                        {
                                            "label": "\"split_feature_name:dayofweek\nthreshold:3.5000000000000004\nsplit_gain:0.012019633281266325\ninternal_value:0.014335150509817974\ninternal_count:291\"",
                                            "name": "split28",
                                            "split_feature_name": "dayofweek",
                                            "threshold": 3.5000000000000004,
                                            "split_gain": 0.012019633281266325,
                                            "internal_value": 0.014335150509817974,
                                            "internal_count": 291,
                                            "id": "split28",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:11\nleaf_value:0.001163930560896142\nleaf_count:223\"",
                                                    "name": "leaf11",
                                                    "leaf_index": 11.0,
                                                    "leaf_value": 0.001163930560896142,
                                                    "size": 0.001163930560896142,
                                                    "leaf_count": 223,
                                                    "id": "leaf11"
                                                },
                                                {
                                                    "label": "\"leaf_index:29\nleaf_value:0.002682676799649188\nleaf_count:68\"",
                                                    "name": "leaf29",
                                                    "leaf_index": 29.0,
                                                    "leaf_value": 0.002682676799649188,
                                                    "size": 0.002682676799649188,
                                                    "leaf_count": 68,
                                                    "id": "leaf29"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.07973916956767192\ninternal_value:-0.0008074269760125014\ninternal_count:35798\"",
                            "name": "split5",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.07973916956767192,
                            "internal_value": -0.0008074269760125014,
                            "internal_count": 35798,
                            "id": "split5",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:0.06454187631607057\nsplit_gain:0.25503470390562766\ninternal_value:-0.005892659187858662\ninternal_count:2839\"",
                                    "name": "split6",
                                    "split_feature_name": "day_delta",
                                    "threshold": 0.06454187631607057,
                                    "split_gain": 0.25503470390562766,
                                    "internal_value": -0.005892659187858662,
                                    "internal_count": 2839,
                                    "id": "split6",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:-0.0009280443191528319\nsplit_gain:0.07757239800898102\ninternal_value:-0.003584062280834356\ninternal_count:2680\"",
                                            "name": "split7",
                                            "split_feature_name": "day_delta",
                                            "threshold": -0.0009280443191528319,
                                            "split_gain": 0.07757239800898102,
                                            "internal_value": -0.003584062280834356,
                                            "internal_count": 2680,
                                            "id": "split7",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:-0.021235704421997067\nsplit_gain:0.014780532575766957\ninternal_value:0.0023236166575392745\ninternal_count:1215\"",
                                                    "name": "split21",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": -0.021235704421997067,
                                                    "split_gain": 0.014780532575766957,
                                                    "internal_value": 0.0023236166575392745,
                                                    "internal_count": 1215,
                                                    "id": "split21",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:5\nleaf_value:0.0007368921775015766\nleaf_count:497\"",
                                                            "name": "leaf5",
                                                            "leaf_index": 5.0,
                                                            "leaf_value": 0.0007368921775015766,
                                                            "size": 0.0007368921775015766,
                                                            "leaf_count": 497,
                                                            "id": "leaf5"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:22\nleaf_value:2.7489596939803585e-05\nleaf_count:718\"",
                                                            "name": "leaf22",
                                                            "leaf_index": 22.0,
                                                            "leaf_value": 2.7489596939803585e-05,
                                                            "size": 2.7489596939803585e-05,
                                                            "leaf_count": 718,
                                                            "id": "leaf22"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.11759912222623824\nsplit_gain:0.02419234576003748\ninternal_value:-0.008483604881601565\ninternal_count:1465\"",
                                                    "name": "split12",
                                                    "split_feature_name": "low2_5_30",
                                                    "threshold": -0.11759912222623824,
                                                    "split_gain": 0.02419234576003748,
                                                    "internal_value": -0.008483604881601565,
                                                    "internal_count": 1465,
                                                    "id": "split12",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:8\nleaf_value:-0.00224076203680519\nleaf_count:103\"",
                                                            "name": "leaf8",
                                                            "leaf_index": 8.0,
                                                            "leaf_value": -0.00224076203680519,
                                                            "size": -0.00224076203680519,
                                                            "leaf_count": 103,
                                                            "id": "leaf8"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:13\nleaf_value:-0.000651298253950182\nleaf_count:1362\"",
                                                            "name": "leaf13",
                                                            "leaf_index": 13.0,
                                                            "leaf_value": -0.000651298253950182,
                                                            "size": -0.000651298253950182,
                                                            "leaf_count": 1362,
                                                            "id": "leaf13"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:0.1503901779651642\nsplit_gain:0.06361023457102671\ninternal_value:-0.04480485862701049\ninternal_count:159\"",
                                            "name": "split8",
                                            "split_feature_name": "day_delta",
                                            "threshold": 0.1503901779651642,
                                            "split_gain": 0.06361023457102671,
                                            "internal_value": -0.04480485862701049,
                                            "internal_count": 159,
                                            "id": "split8",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:3238.7702636718755\nsplit_gain:0.02332319515662995\ninternal_value:-0.03596132584805714\ninternal_count:133\"",
                                                    "name": "split13",
                                                    "split_feature_name": "avg_dolvol2_5",
                                                    "threshold": 3238.7702636718755,
                                                    "split_gain": 0.02332319515662995,
                                                    "internal_value": -0.03596132584805714,
                                                    "internal_count": 133,
                                                    "id": "split13",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:7\nleaf_value:-0.001003061609862187\nleaf_count:29\"",
                                                            "name": "leaf7",
                                                            "leaf_index": 7.0,
                                                            "leaf_value": -0.001003061609862187,
                                                            "size": -0.001003061609862187,
                                                            "leaf_count": 29,
                                                            "id": "leaf7"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:14\nleaf_value:-0.004210100120295108\nleaf_count:104\"",
                                                            "name": "leaf14",
                                                            "leaf_index": 14.0,
                                                            "leaf_value": -0.004210100120295108,
                                                            "size": -0.004210100120295108,
                                                            "leaf_count": 104,
                                                            "id": "leaf14"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:9\nleaf_value:-0.008918981476797776\nleaf_count:26\"",
                                                    "name": "leaf9",
                                                    "leaf_index": 9.0,
                                                    "leaf_value": -0.008918981476797776,
                                                    "size": -0.008918981476797776,
                                                    "leaf_count": 26,
                                                    "id": "leaf9"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:stk1_2\nthreshold:-0.05783221870660781\nsplit_gain:0.026798858286082944\ninternal_value:-0.00036939869088761134\ninternal_count:32959\"",
                                    "name": "split11",
                                    "split_feature_name": "stk1_2",
                                    "threshold": -0.05783221870660781,
                                    "split_gain": 0.026798858286082944,
                                    "internal_value": -0.00036939869088761134,
                                    "internal_count": 32959,
                                    "id": "split11",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:vol1_10\nthreshold:1.1335655450820925\nsplit_gain:0.0156635858649118\ninternal_value:0.006539693831971659\ninternal_count:552\"",
                                            "name": "split20",
                                            "split_feature_name": "vol1_10",
                                            "threshold": 1.1335655450820925,
                                            "split_gain": 0.0156635858649118,
                                            "internal_value": 0.006539693831971659,
                                            "internal_count": 552,
                                            "id": "split20",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:0.20946538448333743\nsplit_gain:0.011142256981729036\ninternal_value:0.004840111208073711\ninternal_count:501\"",
                                                    "name": "split29",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": 0.20946538448333743,
                                                    "split_gain": 0.011142256981729036,
                                                    "internal_value": 0.004840111208073711,
                                                    "internal_count": 501,
                                                    "id": "split29",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:6\nleaf_value:0.0006904381350223152\nleaf_count:470\"",
                                                            "name": "leaf6",
                                                            "leaf_index": 6.0,
                                                            "leaf_value": 0.0006904381350223152,
                                                            "size": 0.0006904381350223152,
                                                            "leaf_count": 470,
                                                            "id": "leaf6"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:30\nleaf_value:-0.0012669442351860816\nleaf_count:31\"",
                                                            "name": "leaf30",
                                                            "leaf_index": 30.0,
                                                            "leaf_value": -0.0012669442351860816,
                                                            "size": -0.0012669442351860816,
                                                            "leaf_count": 31,
                                                            "id": "leaf30"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:21\nleaf_value:0.002408870910769764\nleaf_count:51\"",
                                                    "name": "leaf21",
                                                    "leaf_index": 21.0,
                                                    "leaf_value": 0.002408870910769764,
                                                    "size": 0.002408870910769764,
                                                    "leaf_count": 51,
                                                    "id": "leaf21"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.021783396601676937\nsplit_gain:0.01891509576671975\ninternal_value:-0.00048708373031175787\ninternal_count:32407\"",
                                            "name": "split16",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.021783396601676937,
                                            "split_gain": 0.01891509576671975,
                                            "internal_value": -0.00048708373031175787,
                                            "internal_count": 32407,
                                            "id": "split16",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:12\nleaf_value:-4.165442079453662e-05\nleaf_count:15814\"",
                                                    "name": "leaf12",
                                                    "leaf_index": 12.0,
                                                    "leaf_value": -4.165442079453662e-05,
                                                    "size": -4.165442079453662e-05,
                                                    "leaf_count": 15814,
                                                    "id": "leaf12"
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_2_5\nthreshold:0.07796159014105798\nsplit_gain:0.014490069960657156\ninternal_value:0.00025875214303627044\ninternal_count:16593\"",
                                                    "name": "split23",
                                                    "split_feature_name": "low2_2_5",
                                                    "threshold": 0.07796159014105798,
                                                    "split_gain": 0.014490069960657156,
                                                    "internal_value": 0.00025875214303627044,
                                                    "internal_count": 16593,
                                                    "id": "split23",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:17\nleaf_value:0.00011672133267512297\nleaf_count:16535\"",
                                                            "name": "leaf17",
                                                            "leaf_index": 17.0,
                                                            "leaf_value": 0.00011672133267512297,
                                                            "size": 0.00011672133267512297,
                                                            "leaf_count": 16535,
                                                            "id": "leaf17"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:day_delta\nthreshold:0.13767567276954654\nsplit_gain:0.015142684514011911\ninternal_value:-0.015519572495546087\ninternal_count:58\"",
                                                            "name": "split24",
                                                            "split_feature_name": "day_delta",
                                                            "threshold": 0.13767567276954654,
                                                            "split_gain": 0.015142684514011911,
                                                            "internal_value": -0.015519572495546087,
                                                            "internal_count": 58,
                                                            "id": "split24",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:24\nleaf_value:0.0007605800477993193\nleaf_count:20\"",
                                                                    "name": "leaf24",
                                                                    "leaf_index": 24.0,
                                                                    "leaf_value": 0.0007605800477993193,
                                                                    "size": 0.0007605800477993193,
                                                                    "leaf_count": 20,
                                                                    "id": "leaf24"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:25\nleaf_value:-0.002638869795098427\nleaf_count:38\"",
                                                                    "name": "leaf25",
                                                                    "leaf_index": 25.0,
                                                                    "leaf_value": -0.002638869795098427,
                                                                    "size": -0.002638869795098427,
                                                                    "leaf_count": 38,
                                                                    "id": "leaf25"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
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
                "split4": ">"
            },
            "split1": {
                "split2": ">"
            },
            "split3": {
                "split14": ">"
            },
            "split14": {
                "split15": ">"
            },
            "split25": {
                "leaf26": ">"
            },
            "split26": {
                "leaf27": ">"
            },
            "split15": {
                "leaf16": ">"
            },
            "split2": {
                "split17": ">"
            },
            "split22": {
                "leaf23": ">"
            },
            "split17": {
                "leaf18": ">"
            },
            "split18": {
                "split19": ">"
            },
            "split19": {
                "leaf20": ">"
            },
            "split4": {
                "split5": ">"
            },
            "split9": {
                "split10": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split10": {
                "split28": ">"
            },
            "split28": {
                "leaf29": ">"
            },
            "split5": {
                "split11": ">"
            },
            "split6": {
                "split8": ">"
            },
            "split7": {
                "split12": ">"
            },
            "split21": {
                "leaf22": ">"
            },
            "split12": {
                "leaf13": ">"
            },
            "split8": {
                "leaf9": ">"
            },
            "split13": {
                "leaf14": ">"
            },
            "split11": {
                "split16": ">"
            },
            "split20": {
                "leaf21": ">"
            },
            "split29": {
                "leaf30": ">"
            },
            "split16": {
                "split23": ">"
            },
            "split23": {
                "split24": ">"
            },
            "split24": {
                "leaf25": ">"
            }
        }
    },
    "1": {
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.09331983327865599\nsplit_gain:0.202742066554636\ninternal_value:0\ninternal_count:40420\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.09331983327865599,
            "split_gain": 0.202742066554636,
            "internal_value": 0.0,
            "internal_count": 40420,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.09043947376813588\ninternal_value:0.00948160396412587\ninternal_count:2136\"",
                    "name": "split1",
                    "split_feature_name": "daytime",
                    "threshold": 15.250000000000002,
                    "split_gain": 0.09043947376813588,
                    "internal_value": 0.00948160396412587,
                    "internal_count": 2136,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.08961387368244494\ninternal_value:0.007259965757032104\ninternal_count:1913\"",
                            "name": "split2",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.08961387368244494,
                            "internal_value": 0.007259965757032104,
                            "internal_count": 1913,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"split_feature_name:stk2_5\nthreshold:0.035840258002281196\nsplit_gain:0.01984288133647888\ninternal_value:0.03671472092548579\ninternal_count:98\"",
                                    "name": "split14",
                                    "split_feature_name": "stk2_5",
                                    "threshold": 0.035840258002281196,
                                    "split_gain": 0.01984288133647888,
                                    "internal_value": 0.03671472092548579,
                                    "internal_count": 98,
                                    "id": "split14",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:0\nleaf_value:0.0029283612217350075\nleaf_count:77\"",
                                            "name": "leaf0",
                                            "leaf_index": 0.0,
                                            "leaf_value": 0.0029283612217350075,
                                            "size": 0.0029283612217350075,
                                            "leaf_count": 77,
                                            "id": "leaf0"
                                        },
                                        {
                                            "label": "\"leaf_index:15\nleaf_value:0.006396211952198342\nleaf_count:21\"",
                                            "name": "leaf15",
                                            "leaf_index": 15.0,
                                            "leaf_value": 0.006396211952198342,
                                            "size": 0.006396211952198342,
                                            "leaf_count": 21,
                                            "id": "leaf15"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.02345656510442495\nsplit_gain:0.057225042511835744\ninternal_value:0.005669571263088049\ninternal_count:1815\"",
                                    "name": "split3",
                                    "split_feature_name": "high2_2_5",
                                    "threshold": -0.02345656510442495,
                                    "split_gain": 0.057225042511835744,
                                    "internal_value": 0.005669571263088049,
                                    "internal_count": 1815,
                                    "id": "split3",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:vol1_10\nthreshold:1.9770268201828005\nsplit_gain:0.04298937476117187\ninternal_value:0.01265030028105118\ninternal_count:713\"",
                                            "name": "split8",
                                            "split_feature_name": "vol1_10",
                                            "threshold": 1.9770268201828005,
                                            "split_gain": 0.04298937476117187,
                                            "internal_value": 0.01265030028105118,
                                            "internal_count": 713,
                                            "id": "split8",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:3\nleaf_value:0.0011051453865771339\nleaf_count:684\"",
                                                    "name": "leaf3",
                                                    "leaf_index": 3.0,
                                                    "leaf_value": 0.0011051453865771339,
                                                    "size": 0.0011051453865771339,
                                                    "leaf_count": 684,
                                                    "id": "leaf3"
                                                },
                                                {
                                                    "label": "\"leaf_index:9\nleaf_value:0.005036102262765154\nleaf_count:29\"",
                                                    "name": "leaf9",
                                                    "leaf_index": 9.0,
                                                    "leaf_value": 0.005036102262765154,
                                                    "size": 0.005036102262765154,
                                                    "leaf_count": 29,
                                                    "id": "leaf9"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:4\nleaf_value:0.00011530015808668938\nleaf_count:1102\"",
                                            "name": "leaf4",
                                            "leaf_index": 4.0,
                                            "leaf_value": 0.00011530015808668938,
                                            "size": 0.00011530015808668938,
                                            "leaf_count": 1102,
                                            "id": "leaf4"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:high2_5_30\nthreshold:0.003380393260158599\nsplit_gain:0.025460000811841244\ninternal_value:0.02853987252991229\ninternal_count:223\"",
                            "name": "split13",
                            "split_feature_name": "high2_5_30",
                            "threshold": 0.003380393260158599,
                            "split_gain": 0.025460000811841244,
                            "internal_value": 0.02853987252991229,
                            "internal_count": 223,
                            "id": "split13",
                            "children": [
                                {
                                    "label": "\"split_feature_name:stk1_2\nthreshold:-0.0071835124399513\nsplit_gain:0.016493359088903703\ninternal_value:0.03637669620200478\ninternal_count:145\"",
                                    "name": "split21",
                                    "split_feature_name": "stk1_2",
                                    "threshold": -0.0071835124399513,
                                    "split_gain": 0.016493359088903703,
                                    "internal_value": 0.03637669620200478,
                                    "internal_count": 145,
                                    "id": "split21",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:2\nleaf_value:0.006303979149088264\nleaf_count:20\"",
                                            "name": "leaf2",
                                            "leaf_index": 2.0,
                                            "leaf_value": 0.006303979149088264,
                                            "size": 0.006303979149088264,
                                            "leaf_count": 20,
                                            "id": "leaf2"
                                        },
                                        {
                                            "label": "\"leaf_index:22\nleaf_value:0.0032110600955784323\nleaf_count:125\"",
                                            "name": "leaf22",
                                            "leaf_index": 22.0,
                                            "leaf_value": 0.0032110600955784323,
                                            "size": 0.0032110600955784323,
                                            "leaf_count": 125,
                                            "id": "leaf22"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"leaf_index:14\nleaf_value:0.0013971418267689072\nleaf_count:78\"",
                                    "name": "leaf14",
                                    "leaf_index": 14.0,
                                    "leaf_value": 0.0013971418267689072,
                                    "size": 0.0013971418267689072,
                                    "leaf_count": 78,
                                    "id": "leaf14"
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.043399502702600935\ninternal_value:-0.0005290122350002888\ninternal_count:38284\"",
                    "name": "split4",
                    "split_feature_name": "daytime",
                    "threshold": 9.750000000000002,
                    "split_gain": 0.043399502702600935,
                    "internal_value": -0.0005290122350002888,
                    "internal_count": 38284,
                    "id": "split4",
                    "children": [
                        {
                            "label": "\"split_feature_name:day_delta\nthreshold:0.059530645608901984\nsplit_gain:0.21988345674348303\ninternal_value:-0.004171220945197473\ninternal_count:3014\"",
                            "name": "split5",
                            "split_feature_name": "day_delta",
                            "threshold": 0.059530645608901984,
                            "split_gain": 0.21988345674348303,
                            "internal_value": -0.004171220945197473,
                            "internal_count": 3014,
                            "id": "split5",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:-0.020689666271209713\nsplit_gain:0.08882943694374729\ninternal_value:-0.0019807301958092915\ninternal_count:2828\"",
                                    "name": "split6",
                                    "split_feature_name": "day_delta",
                                    "threshold": -0.020689666271209713,
                                    "split_gain": 0.08882943694374729,
                                    "internal_value": -0.0019807301958092915,
                                    "internal_count": 2828,
                                    "id": "split6",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:1\nleaf_value:0.0007913197157274347\nleaf_count:687\"",
                                            "name": "leaf1",
                                            "leaf_index": 1.0,
                                            "leaf_value": 0.0007913197157274347,
                                            "size": 0.0007913197157274347,
                                            "leaf_count": 687,
                                            "id": "leaf1"
                                        },
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:9.999999682655225e-21\nsplit_gain:0.026707422562714696\ninternal_value:-0.005155474750488628\ninternal_count:2141\"",
                                            "name": "split9",
                                            "split_feature_name": "day_delta",
                                            "threshold": 9.999999682655225e-21,
                                            "split_gain": 0.026707422562714696,
                                            "internal_value": -0.005155474750488628,
                                            "internal_count": 2141,
                                            "id": "split9",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.03600203432142734\nsplit_gain:0.014334139844379843\ninternal_value:-0.0013933922099217087\ninternal_count:1003\"",
                                                    "name": "split24",
                                                    "split_feature_name": "high2_2_5",
                                                    "threshold": -0.03600203432142734,
                                                    "split_gain": 0.014334139844379843,
                                                    "internal_value": -0.0013933922099217087,
                                                    "internal_count": 1003,
                                                    "id": "split24",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:7\nleaf_value:-0.0019705188978394557\nleaf_count:41\"",
                                                            "name": "leaf7",
                                                            "leaf_index": 7.0,
                                                            "leaf_value": -0.0019705188978394557,
                                                            "size": -0.0019705188978394557,
                                                            "leaf_count": 41,
                                                            "id": "leaf7"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:25\nleaf_value:-6.129518071073773e-05\nleaf_count:962\"",
                                                            "name": "leaf25",
                                                            "leaf_index": 25.0,
                                                            "leaf_value": -6.129518071073773e-05,
                                                            "size": -6.129518071073773e-05,
                                                            "leaf_count": 962,
                                                            "id": "leaf25"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.13816444575786588\nsplit_gain:0.01896824124745433\ninternal_value:-0.008471264546787942\ninternal_count:1138\"",
                                                    "name": "split18",
                                                    "split_feature_name": "low2_5_30",
                                                    "threshold": -0.13816444575786588,
                                                    "split_gain": 0.01896824124745433,
                                                    "internal_value": -0.008471264546787942,
                                                    "internal_count": 1138,
                                                    "id": "split18",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:10\nleaf_value:-0.0026587805698033086\nleaf_count:55\"",
                                                            "name": "leaf10",
                                                            "leaf_index": 10.0,
                                                            "leaf_value": -0.0026587805698033086,
                                                            "size": -0.0026587805698033086,
                                                            "leaf_count": 55,
                                                            "id": "leaf10"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:19\nleaf_value:-0.0007551218597278725\nleaf_count:1083\"",
                                                            "name": "leaf19",
                                                            "leaf_index": 19.0,
                                                            "leaf_value": -0.0007551218597278725,
                                                            "size": -0.0007551218597278725,
                                                            "leaf_count": 1083,
                                                            "id": "leaf19"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:0.1503901779651642\nsplit_gain:0.05735781996438083\ninternal_value:-0.0374761018014866\ninternal_count:186\"",
                                    "name": "split7",
                                    "split_feature_name": "day_delta",
                                    "threshold": 0.1503901779651642,
                                    "split_gain": 0.05735781996438083,
                                    "internal_value": -0.0374761018014866,
                                    "internal_count": 186,
                                    "id": "split7",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:19054.894531250004\nsplit_gain:0.017228219163611336\ninternal_value:-0.030397189552786585\ninternal_count:160\"",
                                            "name": "split19",
                                            "split_feature_name": "avg_dolvol5_30",
                                            "threshold": 19054.894531250004,
                                            "split_gain": 0.017228219163611336,
                                            "internal_value": -0.030397189552786585,
                                            "internal_count": 160,
                                            "id": "split19",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:6\nleaf_value:-0.0018327401054300614\nleaf_count:68\"",
                                                    "name": "leaf6",
                                                    "leaf_index": 6.0,
                                                    "leaf_value": -0.0018327401054300614,
                                                    "size": -0.0018327401054300614,
                                                    "leaf_count": 68,
                                                    "id": "leaf6"
                                                },
                                                {
                                                    "label": "\"leaf_index:20\nleaf_value:-0.003931833757340665\nleaf_count:92\"",
                                                    "name": "leaf20",
                                                    "leaf_index": 20.0,
                                                    "leaf_value": -0.003931833757340665,
                                                    "size": -0.003931833757340665,
                                                    "leaf_count": 92,
                                                    "id": "leaf20"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:8\nleaf_value:-0.00810386387165636\nleaf_count:26\"",
                                            "name": "leaf8",
                                            "leaf_index": 8.0,
                                            "leaf_value": -0.00810386387165636,
                                            "size": -0.00810386387165636,
                                            "leaf_count": 26,
                                            "id": "leaf8"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.0259161409576235\ninternal_value:-0.00021776706764745885\ninternal_count:35270\"",
                            "name": "split10",
                            "split_feature_name": "daytime",
                            "threshold": 15.250000000000002,
                            "split_gain": 0.0259161409576235,
                            "internal_value": -0.00021776706764745885,
                            "internal_count": 35270,
                            "id": "split10",
                            "children": [
                                {
                                    "label": "\"split_feature_name:stk1_2\nthreshold:-0.07115863263607024\nsplit_gain:0.019825694226765993\ninternal_value:-0.00046792278705384935\ninternal_count:32502\"",
                                    "name": "split15",
                                    "split_feature_name": "stk1_2",
                                    "threshold": -0.07115863263607024,
                                    "split_gain": 0.019825694226765993,
                                    "internal_value": -0.00046792278705384935,
                                    "internal_count": 32502,
                                    "id": "split15",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:vol1_10\nthreshold:-0.04619671590626239\nsplit_gain:0.016546393573672272\ninternal_value:0.0071622783486826\ninternal_count:337\"",
                                            "name": "split20",
                                            "split_feature_name": "vol1_10",
                                            "threshold": -0.04619671590626239,
                                            "split_gain": 0.016546393573672272,
                                            "internal_value": 0.0071622783486826,
                                            "internal_count": 337,
                                            "id": "split20",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:128692.00781250001\nsplit_gain:0.012714977581852922\ninternal_value:-0.002836097421849289\ninternal_count:111\"",
                                                    "name": "split25",
                                                    "split_feature_name": "avg_dolvol2_5",
                                                    "threshold": 128692.00781250001,
                                                    "split_gain": 0.012714977581852922,
                                                    "internal_value": -0.002836097421849289,
                                                    "internal_count": 111,
                                                    "id": "split25",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:5\nleaf_value:0.00021814399011558497\nleaf_count:91\"",
                                                            "name": "leaf5",
                                                            "leaf_index": 5.0,
                                                            "leaf_value": 0.00021814399011558497,
                                                            "size": 0.00021814399011558497,
                                                            "leaf_count": 91,
                                                            "id": "leaf5"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:26\nleaf_value:-0.0025665892241522673\nleaf_count:20\"",
                                                            "name": "leaf26",
                                                            "leaf_index": 26.0,
                                                            "leaf_value": -0.0025665892241522673,
                                                            "size": -0.0025665892241522673,
                                                            "leaf_count": 20,
                                                            "id": "leaf26"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:21\nleaf_value:0.0012072985032439414\nleaf_count:226\"",
                                                    "name": "leaf21",
                                                    "leaf_index": 21.0,
                                                    "leaf_value": 0.0012072985032439414,
                                                    "size": 0.0012072985032439414,
                                                    "leaf_count": 226,
                                                    "id": "leaf21"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.31598722934722895\nsplit_gain:0.016124340066814\ninternal_value:-0.0005478661348773589\ninternal_count:32165\"",
                                            "name": "split23",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.31598722934722895,
                                            "split_gain": 0.016124340066814,
                                            "internal_value": -0.0005478661348773589,
                                            "internal_count": 32165,
                                            "id": "split23",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:16\nleaf_value:-0.0009021658491541114\nleaf_count:223\"",
                                                    "name": "leaf16",
                                                    "leaf_index": 16.0,
                                                    "leaf_value": -0.0009021658491541114,
                                                    "size": -0.0009021658491541114,
                                                    "leaf_count": 223,
                                                    "id": "leaf16"
                                                },
                                                {
                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:0.011477044783532621\nsplit_gain:0.012183302427645929\ninternal_value:-0.0004887071687657811\ninternal_count:31942\"",
                                                    "name": "split26",
                                                    "split_feature_name": "high2_2_5",
                                                    "threshold": 0.011477044783532621,
                                                    "split_gain": 0.012183302427645929,
                                                    "internal_value": -0.0004887071687657811,
                                                    "internal_count": 31942,
                                                    "id": "split26",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:22673.349609375004\nsplit_gain:0.012384425069474837\ninternal_value:-0.0009993472374349938\ninternal_count:18972\"",
                                                            "name": "split27",
                                                            "split_feature_name": "avg_dolvol5_30",
                                                            "threshold": 22673.349609375004,
                                                            "split_gain": 0.012384425069474837,
                                                            "internal_value": -0.0009993472374349938,
                                                            "internal_count": 18972,
                                                            "id": "split27",
                                                            "children": [
                                                                {
                                                                    "label": "\"split_feature_name:low2_2_5\nthreshold:-0.008512542117387055\nsplit_gain:0.011988348597000806\ninternal_value:-0.00158699185237864\ninternal_count:12408\"",
                                                                    "name": "split29",
                                                                    "split_feature_name": "low2_2_5",
                                                                    "threshold": -0.008512542117387055,
                                                                    "split_gain": 0.011988348597000806,
                                                                    "internal_value": -0.00158699185237864,
                                                                    "internal_count": 12408,
                                                                    "id": "split29",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:24\nleaf_value:-0.0002481961950668435\nleaf_count:6784\"",
                                                                            "name": "leaf24",
                                                                            "leaf_index": 24.0,
                                                                            "leaf_value": -0.0002481961950668435,
                                                                            "size": -0.0002481961950668435,
                                                                            "leaf_count": 6784,
                                                                            "id": "leaf24"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:30\nleaf_value:-5.074262146122871e-05\nleaf_count:5624\"",
                                                                            "name": "leaf30",
                                                                            "leaf_index": 30.0,
                                                                            "leaf_value": -5.074262146122871e-05,
                                                                            "size": -5.074262146122871e-05,
                                                                            "leaf_count": 5624,
                                                                            "id": "leaf30"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:28\nleaf_value:1.1148371659010719e-05\nleaf_count:6564\"",
                                                                    "name": "leaf28",
                                                                    "leaf_index": 28.0,
                                                                    "leaf_value": 1.1148371659010719e-05,
                                                                    "size": 1.1148371659010719e-05,
                                                                    "leaf_count": 6564,
                                                                    "id": "leaf28"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:13864.295898437502\nsplit_gain:0.012233431919276635\ninternal_value:0.00025823680831920764\ninternal_count:12970\"",
                                                            "name": "split28",
                                                            "split_feature_name": "avg_dolvol5_30",
                                                            "threshold": 13864.295898437502,
                                                            "split_gain": 0.012233431919276635,
                                                            "internal_value": 0.00025823680831920764,
                                                            "internal_count": 12970,
                                                            "id": "split28",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:27\nleaf_value:0.00011643592019418378\nleaf_count:6934\"",
                                                                    "name": "leaf27",
                                                                    "leaf_index": 27.0,
                                                                    "leaf_value": 0.00011643592019418378,
                                                                    "size": 0.00011643592019418378,
                                                                    "leaf_count": 6934,
                                                                    "id": "leaf27"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:29\nleaf_value:-7.826930587085122e-05\nleaf_count:6036\"",
                                                                    "name": "leaf29",
                                                                    "leaf_index": 29.0,
                                                                    "leaf_value": -7.826930587085122e-05,
                                                                    "size": -7.826930587085122e-05,
                                                                    "leaf_count": 6036,
                                                                    "id": "leaf29"
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
                                    "label": "\"split_feature_name:dayofweek\nthreshold:3.5000000000000004\nsplit_gain:0.03353030193810483\ninternal_value:0.0027195744035037345\ninternal_count:2768\"",
                                    "name": "split11",
                                    "split_feature_name": "dayofweek",
                                    "threshold": 3.5000000000000004,
                                    "split_gain": 0.03353030193810483,
                                    "internal_value": 0.0027195744035037345,
                                    "internal_count": 2768,
                                    "id": "split11",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:0.08708521723747255\nsplit_gain:0.019631839091582316\ninternal_value:0.0010041396147219175\ninternal_count:2227\"",
                                            "name": "split16",
                                            "split_feature_name": "day_delta",
                                            "threshold": 0.08708521723747255,
                                            "split_gain": 0.019631839091582316,
                                            "internal_value": 0.0010041396147219175,
                                            "internal_count": 2227,
                                            "id": "split16",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:11\nleaf_value:0.00018020383296986743\nleaf_count:2077\"",
                                                    "name": "leaf11",
                                                    "leaf_index": 11.0,
                                                    "leaf_value": 0.00018020383296986743,
                                                    "size": 0.00018020383296986743,
                                                    "leaf_count": 2077,
                                                    "id": "leaf11"
                                                },
                                                {
                                                    "label": "\"split_feature_name:stk1_2\nthreshold:0.014084757771342995\nsplit_gain:0.021935792570213865\ninternal_value:-0.010044097925322907\ninternal_count:150\"",
                                                    "name": "split17",
                                                    "split_feature_name": "stk1_2",
                                                    "threshold": 0.014084757771342995,
                                                    "split_gain": 0.021935792570213865,
                                                    "internal_value": -0.010044097925322907,
                                                    "internal_count": 150,
                                                    "id": "split17",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.0333364363759756\nsplit_gain:0.016278733521119342\ninternal_value:-0.015321879153484515\ninternal_count:126\"",
                                                            "name": "split22",
                                                            "split_feature_name": "low2_5_30",
                                                            "threshold": -0.0333364363759756,
                                                            "split_gain": 0.016278733521119342,
                                                            "internal_value": -0.015321879153484515,
                                                            "internal_count": 126,
                                                            "id": "split22",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:17\nleaf_value:-0.0035654811871548495\nleaf_count:30\"",
                                                                    "name": "leaf17",
                                                                    "leaf_index": 17.0,
                                                                    "leaf_value": -0.0035654811871548495,
                                                                    "size": -0.0035654811871548495,
                                                                    "leaf_count": 30,
                                                                    "id": "leaf17"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:23\nleaf_value:-0.0008967837679089522\nleaf_count:96\"",
                                                                    "name": "leaf23",
                                                                    "leaf_index": 23.0,
                                                                    "leaf_value": -0.0008967837679089522,
                                                                    "size": -0.0008967837679089522,
                                                                    "leaf_count": 96,
                                                                    "id": "leaf23"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:18\nleaf_value:0.0017664253522525542\nleaf_count:24\"",
                                                            "name": "leaf18",
                                                            "leaf_index": 18.0,
                                                            "leaf_value": 0.0017664253522525542,
                                                            "size": 0.0017664253522525542,
                                                            "leaf_count": 24,
                                                            "id": "leaf18"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.10159255936741828\nsplit_gain:0.028257767145567554\ninternal_value:0.009781077683757166\ninternal_count:541\"",
                                            "name": "split12",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.10159255936741828,
                                            "split_gain": 0.028257767145567554,
                                            "internal_value": 0.009781077683757166,
                                            "internal_count": 541,
                                            "id": "split12",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:12\nleaf_value:0.00350195673612378\nleaf_count:41\"",
                                                    "name": "leaf12",
                                                    "leaf_index": 12.0,
                                                    "leaf_value": 0.00350195673612378,
                                                    "size": 0.00350195673612378,
                                                    "leaf_count": 41,
                                                    "id": "leaf12"
                                                },
                                                {
                                                    "label": "\"leaf_index:13\nleaf_value:0.0007711521530203754\nleaf_count:500\"",
                                                    "name": "leaf13",
                                                    "leaf_index": 13.0,
                                                    "leaf_value": 0.0007711521530203754,
                                                    "size": 0.0007711521530203754,
                                                    "leaf_count": 500,
                                                    "id": "leaf13"
                                                }
                                            ]
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
                "split4": ">"
            },
            "split1": {
                "split13": ">"
            },
            "split2": {
                "split3": ">"
            },
            "split14": {
                "leaf15": ">"
            },
            "split3": {
                "leaf4": ">"
            },
            "split8": {
                "leaf9": ">"
            },
            "split13": {
                "leaf14": ">"
            },
            "split21": {
                "leaf22": ">"
            },
            "split4": {
                "split10": ">"
            },
            "split5": {
                "split7": ">"
            },
            "split6": {
                "split9": ">"
            },
            "split9": {
                "split18": ">"
            },
            "split24": {
                "leaf25": ">"
            },
            "split18": {
                "leaf19": ">"
            },
            "split7": {
                "leaf8": ">"
            },
            "split19": {
                "leaf20": ">"
            },
            "split10": {
                "split11": ">"
            },
            "split15": {
                "split23": ">"
            },
            "split20": {
                "leaf21": ">"
            },
            "split25": {
                "leaf26": ">"
            },
            "split23": {
                "split26": ">"
            },
            "split26": {
                "split28": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split29": {
                "leaf30": ">"
            },
            "split28": {
                "leaf29": ">"
            },
            "split11": {
                "split12": ">"
            },
            "split16": {
                "split17": ">"
            },
            "split17": {
                "leaf18": ">"
            },
            "split22": {
                "leaf23": ">"
            },
            "split12": {
                "leaf13": ">"
            }
        }
    },
    "2": {
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.1265662312507629\nsplit_gain:0.1668653030823551\ninternal_value:0\ninternal_count:40420\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.1265662312507629,
            "split_gain": 0.1668653030823551,
            "internal_value": 0.0,
            "internal_count": 40420,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.07160226255655287\nsplit_gain:0.0630480940823692\ninternal_value:0.011522098554729372\ninternal_count:1219\"",
                    "name": "split1",
                    "split_feature_name": "high2_2_5",
                    "threshold": -0.07160226255655287,
                    "split_gain": 0.0630480940823692,
                    "internal_value": 0.011522098554729372,
                    "internal_count": 1219,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:stk1_2\nthreshold:0.0029368743998929863\nsplit_gain:0.06402611819814436\ninternal_value:0.025505169309725913\ninternal_count:255\"",
                            "name": "split2",
                            "split_feature_name": "stk1_2",
                            "threshold": 0.0029368743998929863,
                            "split_gain": 0.06402611819814436,
                            "internal_value": 0.025505169309725913,
                            "internal_count": 255,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"leaf_index:0\nleaf_value:0.006337091941263919\nleaf_count:38\"",
                                    "name": "leaf0",
                                    "leaf_index": 0.0,
                                    "leaf_value": 0.006337091941263919,
                                    "size": 0.006337091941263919,
                                    "leaf_count": 38,
                                    "id": "leaf0"
                                },
                                {
                                    "label": "\"split_feature_name:stk2_5\nthreshold:0.07364432513713838\nsplit_gain:0.01913957266193747\ninternal_value:0.018874300628109762\ninternal_count:217\"",
                                    "name": "split11",
                                    "split_feature_name": "stk2_5",
                                    "threshold": 0.07364432513713838,
                                    "split_gain": 0.01913957266193747,
                                    "internal_value": 0.018874300628109762,
                                    "internal_count": 217,
                                    "id": "split11",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:stk1_2\nthreshold:0.06656158715486528\nsplit_gain:0.025730070136015776\ninternal_value:0.02633793015340238\ninternal_count:133\"",
                                            "name": "split12",
                                            "split_feature_name": "stk1_2",
                                            "threshold": 0.06656158715486528,
                                            "split_gain": 0.025730070136015776,
                                            "internal_value": 0.02633793015340238,
                                            "internal_count": 133,
                                            "id": "split12",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:3\nleaf_value:0.0042647631689240895\nleaf_count:56\"",
                                                    "name": "leaf3",
                                                    "leaf_index": 3.0,
                                                    "leaf_value": 0.0042647631689240895,
                                                    "size": 0.0042647631689240895,
                                                    "leaf_count": 56,
                                                    "id": "leaf3"
                                                },
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:-0.2029260993003845\nsplit_gain:0.01282155462335902\ninternal_value:0.01447632903642892\ninternal_count:77\"",
                                                    "name": "split17",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": -0.2029260993003845,
                                                    "split_gain": 0.01282155462335902,
                                                    "internal_value": 0.01447632903642892,
                                                    "internal_count": 77,
                                                    "id": "split17",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:13\nleaf_value:0.00325490438262932\nleaf_count:26\"",
                                                            "name": "leaf13",
                                                            "leaf_index": 13.0,
                                                            "leaf_value": 0.00325490438262932,
                                                            "size": 0.00325490438262932,
                                                            "leaf_count": 26,
                                                            "id": "leaf13"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:18\nleaf_value:0.0005262788163164777\nleaf_count:51\"",
                                                            "name": "leaf18",
                                                            "leaf_index": 18.0,
                                                            "leaf_value": 0.0005262788163164777,
                                                            "size": 0.0005262788163164777,
                                                            "leaf_count": 51,
                                                            "id": "leaf18"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:12\nleaf_value:0.0007056887213063117\nleaf_count:84\"",
                                            "name": "leaf12",
                                            "leaf_index": 12.0,
                                            "leaf_value": 0.0007056887213063117,
                                            "size": 0.0007056887213063117,
                                            "leaf_count": 84,
                                            "id": "leaf12"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.05704545879158565\ninternal_value:0.007823257224310163\ninternal_count:964\"",
                            "name": "split3",
                            "split_feature_name": "daytime",
                            "threshold": 15.250000000000002,
                            "split_gain": 0.05704545879158565,
                            "internal_value": 0.007823257224310163,
                            "internal_count": 964,
                            "id": "split3",
                            "children": [
                                {
                                    "label": "\"leaf_index:2\nleaf_value:0.00048403806397763607\nleaf_count:838\"",
                                    "name": "leaf2",
                                    "leaf_index": 2.0,
                                    "leaf_value": 0.00048403806397763607,
                                    "size": 0.00048403806397763607,
                                    "leaf_count": 838,
                                    "id": "leaf2"
                                },
                                {
                                    "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:95359.27734375001\nsplit_gain:0.012492401997698507\ninternal_value:0.02766175387382862\ninternal_count:126\"",
                                    "name": "split18",
                                    "split_feature_name": "avg_dolvol2_5",
                                    "threshold": 95359.27734375001,
                                    "split_gain": 0.012492401997698507,
                                    "internal_value": 0.02766175387382862,
                                    "internal_count": 126,
                                    "id": "split18",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:high2_2_5\nthreshold:-0.02592978626489639\nsplit_gain:0.017882464378201353\ninternal_value:0.021364260797983863\ninternal_count:90\"",
                                            "name": "split19",
                                            "split_feature_name": "high2_2_5",
                                            "threshold": -0.02592978626489639,
                                            "split_gain": 0.017882464378201353,
                                            "internal_value": 0.021364260797983863,
                                            "internal_count": 90,
                                            "id": "split19",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:4\nleaf_value:-0.0001364675087388605\nleaf_count:25\"",
                                                    "name": "leaf4",
                                                    "leaf_index": 4.0,
                                                    "leaf_value": -0.0001364675087388605,
                                                    "size": -0.0001364675087388605,
                                                    "leaf_count": 25,
                                                    "id": "leaf4"
                                                },
                                                {
                                                    "label": "\"split_feature_name:high2_5_30\nthreshold:-0.010323592927306889\nsplit_gain:0.015224105024745423\ninternal_value:0.030106159215434813\ninternal_count:65\"",
                                                    "name": "split20",
                                                    "split_feature_name": "high2_5_30",
                                                    "threshold": -0.010323592927306889,
                                                    "split_gain": 0.015224105024745423,
                                                    "internal_value": 0.030106159215434813,
                                                    "internal_count": 65,
                                                    "id": "split20",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:20\nleaf_value:0.004517664412869084\nleaf_count:33\"",
                                                            "name": "leaf20",
                                                            "leaf_index": 20.0,
                                                            "leaf_value": 0.004517664412869084,
                                                            "size": 0.004517664412869084,
                                                            "leaf_count": 33,
                                                            "id": "leaf20"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:21\nleaf_value:0.0014564721648639535\nleaf_count:32\"",
                                                            "name": "leaf21",
                                                            "leaf_index": 21.0,
                                                            "leaf_value": 0.0014564721648639535,
                                                            "size": 0.0014564721648639535,
                                                            "leaf_count": 32,
                                                            "id": "leaf21"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:19\nleaf_value:0.004340548656344052\nleaf_count:36\"",
                                            "name": "leaf19",
                                            "leaf_index": 19.0,
                                            "leaf_value": 0.004340548656344052,
                                            "size": 0.004340548656344052,
                                            "leaf_count": 36,
                                            "id": "leaf19"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "\"split_feature_name:day_delta\nthreshold:-0.052631556987762444\nsplit_gain:0.04011236648630373\ninternal_value:-0.0003582928711586025\ninternal_count:39201\"",
                    "name": "split4",
                    "split_feature_name": "day_delta",
                    "threshold": -0.052631556987762444,
                    "split_gain": 0.04011236648630373,
                    "internal_value": -0.0003582928711586025,
                    "internal_count": 39201,
                    "id": "split4",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.04071950500360553\ninternal_value:0.002922576783406339\ninternal_count:3403\"",
                            "name": "split9",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.04071950500360553,
                            "internal_value": 0.002922576783406339,
                            "internal_count": 3403,
                            "id": "split9",
                            "children": [
                                {
                                    "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:9033.722656250002\nsplit_gain:0.010286666310940266\ninternal_value:0.015770750160632105\ninternal_count:230\"",
                                    "name": "split24",
                                    "split_feature_name": "avg_dolvol1_2",
                                    "threshold": 9033.722656250002,
                                    "split_gain": 0.010286666310940266,
                                    "internal_value": 0.015770750160632105,
                                    "internal_count": 230,
                                    "id": "split24",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:1\nleaf_value:0.0004639297523383113\nleaf_count:61\"",
                                            "name": "leaf1",
                                            "leaf_index": 1.0,
                                            "leaf_value": 0.0004639297523383113,
                                            "size": 0.0004639297523383113,
                                            "leaf_count": 61,
                                            "id": "leaf1"
                                        },
                                        {
                                            "label": "\"leaf_index:25\nleaf_value:0.001978861176342612\nleaf_count:169\"",
                                            "name": "leaf25",
                                            "leaf_index": 25.0,
                                            "leaf_value": 0.001978861176342612,
                                            "size": 0.001978861176342612,
                                            "leaf_count": 169,
                                            "id": "leaf25"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.031072945804834343\ninternal_value:0.0019912563053849316\ninternal_count:3173\"",
                                    "name": "split10",
                                    "split_feature_name": "daytime",
                                    "threshold": 15.250000000000002,
                                    "split_gain": 0.031072945804834343,
                                    "internal_value": 0.0019912563053849316,
                                    "internal_count": 3173,
                                    "id": "split10",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:10\nleaf_value:9.96868742087024e-05\nleaf_count:2882\"",
                                            "name": "leaf10",
                                            "leaf_index": 10.0,
                                            "leaf_value": 9.96868742087024e-05,
                                            "size": 9.96868742087024e-05,
                                            "leaf_count": 2882,
                                            "id": "leaf10"
                                        },
                                        {
                                            "label": "\"leaf_index:11\nleaf_value:0.001183945203536627\nleaf_count:291\"",
                                            "name": "leaf11",
                                            "leaf_index": 11.0,
                                            "leaf_value": 0.001183945203536627,
                                            "size": 0.001183945203536627,
                                            "leaf_count": 291,
                                            "id": "leaf11"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.05289169260607639\ninternal_value:-0.0006701762007994902\ninternal_count:35798\"",
                            "name": "split5",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.05289169260607639,
                            "internal_value": -0.0006701762007994902,
                            "internal_count": 35798,
                            "id": "split5",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:0.06454187631607057\nsplit_gain:0.16831244997089284\ninternal_value:-0.004811781119156392\ninternal_count:2839\"",
                                    "name": "split6",
                                    "split_feature_name": "day_delta",
                                    "threshold": 0.06454187631607057,
                                    "split_gain": 0.16831244997089284,
                                    "internal_value": -0.004811781119156392,
                                    "internal_count": 2839,
                                    "id": "split6",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:-0.0009280443191528319\nsplit_gain:0.05061469022630507\ninternal_value:-0.002936326371164667\ninternal_count:2680\"",
                                            "name": "split7",
                                            "split_feature_name": "day_delta",
                                            "threshold": -0.0009280443191528319,
                                            "split_gain": 0.05061469022630507,
                                            "internal_value": -0.002936326371164667,
                                            "internal_count": 2680,
                                            "id": "split7",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:5\nleaf_value:0.00018356860778516828\nleaf_count:1215\"",
                                                    "name": "leaf5",
                                                    "leaf_index": 5.0,
                                                    "leaf_value": 0.00018356860778516828,
                                                    "size": 0.00018356860778516828,
                                                    "leaf_count": 1215,
                                                    "id": "leaf5"
                                                },
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:109607.00781250001\nsplit_gain:0.019007616601415145\ninternal_value:-0.006894002224785735\ninternal_count:1465\"",
                                                    "name": "split13",
                                                    "split_feature_name": "avg_dolvol1_2",
                                                    "threshold": 109607.00781250001,
                                                    "split_gain": 0.019007616601415145,
                                                    "internal_value": -0.006894002224785735,
                                                    "internal_count": 1465,
                                                    "id": "split13",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:8\nleaf_value:-0.0005867708403469154\nleaf_count:1355\"",
                                                            "name": "leaf8",
                                                            "leaf_index": 8.0,
                                                            "leaf_value": -0.0005867708403469154,
                                                            "size": -0.0005867708403469154,
                                                            "leaf_count": 1355,
                                                            "id": "leaf8"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:14\nleaf_value:-0.001953607611463998\nleaf_count:110\"",
                                                            "name": "leaf14",
                                                            "leaf_index": 14.0,
                                                            "leaf_value": -0.001953607611463998,
                                                            "size": -0.001953607611463998,
                                                            "leaf_count": 110,
                                                            "id": "leaf14"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:0.1503901779651642\nsplit_gain:0.04143615589687705\ninternal_value:-0.036423219638765325\ninternal_count:159\"",
                                            "name": "split8",
                                            "split_feature_name": "day_delta",
                                            "threshold": 0.1503901779651642,
                                            "split_gain": 0.04143615589687705,
                                            "internal_value": -0.036423219638765325,
                                            "internal_count": 159,
                                            "id": "split8",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:3238.7702636718755\nsplit_gain:0.01686215713494034\ninternal_value:-0.029285622685377422\ninternal_count:133\"",
                                                    "name": "split15",
                                                    "split_feature_name": "avg_dolvol2_5",
                                                    "threshold": 3238.7702636718755,
                                                    "split_gain": 0.01686215713494034,
                                                    "internal_value": -0.029285622685377422,
                                                    "internal_count": 133,
                                                    "id": "split15",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:7\nleaf_value:-0.0007962617316636545\nleaf_count:29\"",
                                                            "name": "leaf7",
                                                            "leaf_index": 7.0,
                                                            "leaf_value": -0.0007962617316636545,
                                                            "size": -0.0007962617316636545,
                                                            "leaf_count": 29,
                                                            "id": "leaf7"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:16\nleaf_value:-0.003523146072089171\nleaf_count:104\"",
                                                            "name": "leaf16",
                                                            "leaf_index": 16.0,
                                                            "leaf_value": -0.003523146072089171,
                                                            "size": -0.003523146072089171,
                                                            "leaf_count": 104,
                                                            "id": "leaf16"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:9\nleaf_value:-0.0072934773284941915\nleaf_count:26\"",
                                                    "name": "leaf9",
                                                    "leaf_index": 9.0,
                                                    "leaf_value": -0.0072934773284941915,
                                                    "size": -0.0072934773284941915,
                                                    "leaf_count": 26,
                                                    "id": "leaf9"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:stk1_2\nthreshold:-0.05783221870660781\nsplit_gain:0.01867190431178687\ninternal_value:-0.0003134294438221777\ninternal_count:32959\"",
                                    "name": "split14",
                                    "split_feature_name": "stk1_2",
                                    "threshold": -0.05783221870660781,
                                    "split_gain": 0.01867190431178687,
                                    "internal_value": -0.0003134294438221777,
                                    "internal_count": 32959,
                                    "id": "split14",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:vol1_10\nthreshold:1.1335655450820925\nsplit_gain:0.011866863652769039\ninternal_value:0.005453666399756437\ninternal_count:552\"",
                                            "name": "split21",
                                            "split_feature_name": "vol1_10",
                                            "threshold": 1.1335655450820925,
                                            "split_gain": 0.011866863652769039,
                                            "internal_value": 0.005453666399756437,
                                            "internal_count": 552,
                                            "id": "split21",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:low2_2_5\nthreshold:-0.03340295329689979\nsplit_gain:0.0094696830515608\ninternal_value:0.003974337769464481\ninternal_count:501\"",
                                                    "name": "split26",
                                                    "split_feature_name": "low2_2_5",
                                                    "threshold": -0.03340295329689979,
                                                    "split_gain": 0.0094696830515608,
                                                    "internal_value": 0.003974337769464481,
                                                    "internal_count": 501,
                                                    "id": "split26",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:6\nleaf_value:-0.0016811131318155233\nleaf_count:21\"",
                                                            "name": "leaf6",
                                                            "leaf_index": 6.0,
                                                            "leaf_value": -0.0016811131318155233,
                                                            "size": -0.0016811131318155233,
                                                            "leaf_count": 21,
                                                            "id": "leaf6"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:day_delta\nthreshold:0.20946538448333743\nsplit_gain:0.009670273320347684\ninternal_value:0.004883702042047844\ninternal_count:480\"",
                                                            "name": "split27",
                                                            "split_feature_name": "day_delta",
                                                            "threshold": 0.20946538448333743,
                                                            "split_gain": 0.009670273320347684,
                                                            "internal_value": 0.004883702042047844,
                                                            "internal_count": 480,
                                                            "id": "split27",
                                                            "children": [
                                                                {
                                                                    "label": "\"split_feature_name:stk1_2\nthreshold:-0.11558269336819647\nsplit_gain:0.00936295416780834\ninternal_value:0.006063089302528319\ninternal_count:449\"",
                                                                    "name": "split28",
                                                                    "split_feature_name": "stk1_2",
                                                                    "threshold": -0.11558269336819647,
                                                                    "split_gain": 0.00936295416780834,
                                                                    "internal_value": 0.006063089302528319,
                                                                    "internal_count": 449,
                                                                    "id": "split28",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:27\nleaf_value:0.0015444915110196617\nleaf_count:86\"",
                                                                            "name": "leaf27",
                                                                            "leaf_index": 27.0,
                                                                            "leaf_value": 0.0015444915110196617,
                                                                            "size": 0.0015444915110196617,
                                                                            "leaf_count": 86,
                                                                            "id": "leaf27"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:29\nleaf_value:0.0003840397788865858\nleaf_count:363\"",
                                                                            "name": "leaf29",
                                                                            "leaf_index": 29.0,
                                                                            "leaf_value": 0.0003840397788865858,
                                                                            "size": 0.0003840397788865858,
                                                                            "leaf_count": 363,
                                                                            "id": "leaf29"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:28\nleaf_value:-0.001219839085975001\nleaf_count:31\"",
                                                                    "name": "leaf28",
                                                                    "leaf_index": 28.0,
                                                                    "leaf_value": -0.001219839085975001,
                                                                    "size": -0.001219839085975001,
                                                                    "leaf_count": 31,
                                                                    "id": "leaf28"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:22\nleaf_value:0.001998589470909507\nleaf_count:51\"",
                                                    "name": "leaf22",
                                                    "leaf_index": 22.0,
                                                    "leaf_value": 0.001998589470909507,
                                                    "size": 0.001998589470909507,
                                                    "leaf_count": 51,
                                                    "id": "leaf22"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.021783396601676937\nsplit_gain:0.014168153067650284\ninternal_value:-0.00041166244612585883\ninternal_count:32407\"",
                                            "name": "split16",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.021783396601676937,
                                            "split_gain": 0.014168153067650284,
                                            "internal_value": -0.00041166244612585883,
                                            "internal_count": 32407,
                                            "id": "split16",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:daytime\nthreshold:14.750000000000002\nsplit_gain:0.00916338973151096\ninternal_value:-0.001088958889256808\ninternal_count:15814\"",
                                                    "name": "split29",
                                                    "split_feature_name": "daytime",
                                                    "threshold": 14.750000000000002,
                                                    "split_gain": 0.00916338973151096,
                                                    "internal_value": -0.001088958889256808,
                                                    "internal_count": 15814,
                                                    "id": "split29",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:15\nleaf_value:-0.00014196753203407799\nleaf_count:13303\"",
                                                            "name": "leaf15",
                                                            "leaf_index": 15.0,
                                                            "leaf_value": -0.00014196753203407799,
                                                            "size": -0.00014196753203407799,
                                                            "leaf_count": 13303,
                                                            "id": "leaf15"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:30\nleaf_value:6.631401480630141e-05\nleaf_count:2511\"",
                                                            "name": "leaf30",
                                                            "leaf_index": 30.0,
                                                            "leaf_value": 6.631401480630141e-05,
                                                            "size": 6.631401480630141e-05,
                                                            "leaf_count": 2511,
                                                            "id": "leaf30"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_2_5\nthreshold:0.07796159014105798\nsplit_gain:0.011695722890699598\ninternal_value:0.00023383661683278837\ninternal_count:16593\"",
                                                    "name": "split22",
                                                    "split_feature_name": "low2_2_5",
                                                    "threshold": 0.07796159014105798,
                                                    "split_gain": 0.011695722890699598,
                                                    "internal_value": 0.00023383661683278837,
                                                    "internal_count": 16593,
                                                    "id": "split22",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:low2_5_30\nthreshold:0.12822700291872027\nsplit_gain:0.010265386704277462\ninternal_value:0.00028356026393352215\ninternal_count:16535\"",
                                                            "name": "split25",
                                                            "split_feature_name": "low2_5_30",
                                                            "threshold": 0.12822700291872027,
                                                            "split_gain": 0.010265386704277462,
                                                            "internal_value": 0.00028356026393352215,
                                                            "internal_count": 16535,
                                                            "id": "split25",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:17\nleaf_value:2.3255487690921443e-05\nleaf_count:16466\"",
                                                                    "name": "leaf17",
                                                                    "leaf_index": 17.0,
                                                                    "leaf_value": 2.3255487690921443e-05,
                                                                    "size": 2.3255487690921443e-05,
                                                                    "leaf_count": 16466,
                                                                    "id": "leaf17"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:26\nleaf_value:0.0012455367550053094\nleaf_count:69\"",
                                                                    "name": "leaf26",
                                                                    "leaf_index": 26.0,
                                                                    "leaf_value": 0.0012455367550053094,
                                                                    "size": 0.0012455367550053094,
                                                                    "leaf_count": 69,
                                                                    "id": "leaf26"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:day_delta\nthreshold:0.13767567276954654\nsplit_gain:0.012286843820453043\ninternal_value:-0.01394168932817812\ninternal_count:58\"",
                                                            "name": "split23",
                                                            "split_feature_name": "day_delta",
                                                            "threshold": 0.13767567276954654,
                                                            "split_gain": 0.012286843820453043,
                                                            "internal_value": -0.01394168932817812,
                                                            "internal_count": 58,
                                                            "id": "split23",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:23\nleaf_value:0.0006120714719872922\nleaf_count:20\"",
                                                                    "name": "leaf23",
                                                                    "leaf_index": 23.0,
                                                                    "leaf_value": 0.0006120714719872922,
                                                                    "size": 0.0006120714719872922,
                                                                    "leaf_count": 20,
                                                                    "id": "leaf23"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:24\nleaf_value:-0.0024500849353468147\nleaf_count:38\"",
                                                                    "name": "leaf24",
                                                                    "leaf_index": 24.0,
                                                                    "leaf_value": -0.0024500849353468147,
                                                                    "size": -0.0024500849353468147,
                                                                    "leaf_count": 38,
                                                                    "id": "leaf24"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
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
                "split4": ">"
            },
            "split1": {
                "split3": ">"
            },
            "split2": {
                "split11": ">"
            },
            "split11": {
                "leaf12": ">"
            },
            "split12": {
                "split17": ">"
            },
            "split17": {
                "leaf18": ">"
            },
            "split3": {
                "split18": ">"
            },
            "split18": {
                "leaf19": ">"
            },
            "split19": {
                "split20": ">"
            },
            "split20": {
                "leaf21": ">"
            },
            "split4": {
                "split5": ">"
            },
            "split9": {
                "split10": ">"
            },
            "split24": {
                "leaf25": ">"
            },
            "split10": {
                "leaf11": ">"
            },
            "split5": {
                "split14": ">"
            },
            "split6": {
                "split8": ">"
            },
            "split7": {
                "split13": ">"
            },
            "split13": {
                "leaf14": ">"
            },
            "split8": {
                "leaf9": ">"
            },
            "split15": {
                "leaf16": ">"
            },
            "split14": {
                "split16": ">"
            },
            "split21": {
                "leaf22": ">"
            },
            "split26": {
                "split27": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split28": {
                "leaf29": ">"
            },
            "split16": {
                "split22": ">"
            },
            "split29": {
                "leaf30": ">"
            },
            "split22": {
                "split23": ">"
            },
            "split25": {
                "leaf26": ">"
            },
            "split23": {
                "leaf24": ">"
            }
        }
    },
    "3": {
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.0811910033226013\nsplit_gain:0.13623339232932039\ninternal_value:0\ninternal_count:40420\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.0811910033226013,
            "split_gain": 0.13623339232932039,
            "internal_value": 0.0,
            "internal_count": 40420,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.06447811741171502\ninternal_value:0.007006250205805683\ninternal_count:2597\"",
                    "name": "split1",
                    "split_feature_name": "daytime",
                    "threshold": 15.250000000000002,
                    "split_gain": 0.06447811741171502,
                    "internal_value": 0.007006250205805683,
                    "internal_count": 2597,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.0739471896171104\ninternal_value:0.00535493936317497\ninternal_count:2340\"",
                            "name": "split2",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.0739471896171104,
                            "internal_value": 0.00535493936317497,
                            "internal_count": 2340,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"split_feature_name:vol1_10\nthreshold:-0.18033161759376523\nsplit_gain:0.01583496510891272\ninternal_value:0.028919342478773268\ninternal_count:126\"",
                                    "name": "split16",
                                    "split_feature_name": "vol1_10",
                                    "threshold": -0.18033161759376523,
                                    "split_gain": 0.01583496510891272,
                                    "internal_value": 0.028919342478773268,
                                    "internal_count": 126,
                                    "id": "split16",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:0\nleaf_value:0.0016973007774233062\nleaf_count:59\"",
                                            "name": "leaf0",
                                            "leaf_index": 0.0,
                                            "leaf_value": 0.0016973007774233062,
                                            "size": 0.0016973007774233062,
                                            "leaf_count": 59,
                                            "id": "leaf0"
                                        },
                                        {
                                            "label": "\"leaf_index:17\nleaf_value:0.003943924915889077\nleaf_count:67\"",
                                            "name": "leaf17",
                                            "leaf_index": 17.0,
                                            "leaf_value": 0.003943924915889077,
                                            "size": 0.003943924915889077,
                                            "leaf_count": 67,
                                            "id": "leaf17"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.02345656510442495\nsplit_gain:0.04473798390538886\ninternal_value:0.0040138757712303505\ninternal_count:2214\"",
                                    "name": "split3",
                                    "split_feature_name": "high2_2_5",
                                    "threshold": -0.02345656510442495,
                                    "split_gain": 0.04473798390538886,
                                    "internal_value": 0.0040138757712303505,
                                    "internal_count": 2214,
                                    "id": "split3",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:vol1_10\nthreshold:1.9770268201828005\nsplit_gain:0.03526297192971867\ninternal_value:0.009840997701084651\ninternal_count:826\"",
                                            "name": "split4",
                                            "split_feature_name": "vol1_10",
                                            "threshold": 1.9770268201828005,
                                            "split_gain": 0.03526297192971867,
                                            "internal_value": 0.009840997701084651,
                                            "internal_count": 826,
                                            "id": "split4",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:3\nleaf_value:0.000859464984690284\nleaf_count:797\"",
                                                    "name": "leaf3",
                                                    "leaf_index": 3.0,
                                                    "leaf_value": 0.000859464984690284,
                                                    "size": 0.000859464984690284,
                                                    "leaf_count": 797,
                                                    "id": "leaf3"
                                                },
                                                {
                                                    "label": "\"leaf_index:5\nleaf_value:0.004409407493497791\nleaf_count:29\"",
                                                    "name": "leaf5",
                                                    "leaf_index": 5.0,
                                                    "leaf_value": 0.004409407493497791,
                                                    "size": 0.004409407493497791,
                                                    "leaf_count": 29,
                                                    "id": "leaf5"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:4\nleaf_value:5.461504729164805e-05\nleaf_count:1388\"",
                                            "name": "leaf4",
                                            "leaf_index": 4.0,
                                            "leaf_value": 5.461504729164805e-05,
                                            "size": 5.461504729164805e-05,
                                            "leaf_count": 1388,
                                            "id": "leaf4"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:high2_5_30\nthreshold:0.003380393260158599\nsplit_gain:0.01841227096180821\ninternal_value:0.022041531807968594\ninternal_count:257\"",
                            "name": "split10",
                            "split_feature_name": "high2_5_30",
                            "threshold": 0.003380393260158599,
                            "split_gain": 0.01841227096180821,
                            "internal_value": 0.022041531807968594,
                            "internal_count": 257,
                            "id": "split10",
                            "children": [
                                {
                                    "label": "\"split_feature_name:stk1_2\nthreshold:-0.0071835124399513\nsplit_gain:0.011384699833736994\ninternal_value:0.028686632907897403\ninternal_count:159\"",
                                    "name": "split27",
                                    "split_feature_name": "stk1_2",
                                    "threshold": -0.0071835124399513,
                                    "split_gain": 0.011384699833736994,
                                    "internal_value": 0.028686632907897403,
                                    "internal_count": 159,
                                    "id": "split27",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:2\nleaf_value:0.004980260956852528\nleaf_count:22\"",
                                            "name": "leaf2",
                                            "leaf_index": 2.0,
                                            "leaf_value": 0.004980260956852528,
                                            "size": 0.004980260956852528,
                                            "leaf_count": 22,
                                            "id": "leaf2"
                                        },
                                        {
                                            "label": "\"leaf_index:28\nleaf_value:0.002529574614487687\nleaf_count:137\"",
                                            "name": "leaf28",
                                            "leaf_index": 28.0,
                                            "leaf_value": 0.002529574614487687,
                                            "size": 0.002529574614487687,
                                            "leaf_count": 137,
                                            "id": "leaf28"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.2815421819686889\nsplit_gain:0.011312884190830465\ninternal_value:0.011260194309104509\ninternal_count:98\"",
                                    "name": "split28",
                                    "split_feature_name": "low2_5_30",
                                    "threshold": -0.2815421819686889,
                                    "split_gain": 0.011312884190830465,
                                    "internal_value": 0.011260194309104509,
                                    "internal_count": 98,
                                    "id": "split28",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:11\nleaf_value:-0.0009957878547720612\nleaf_count:20\"",
                                            "name": "leaf11",
                                            "leaf_index": 11.0,
                                            "leaf_value": -0.0009957878547720612,
                                            "size": -0.0009957878547720612,
                                            "leaf_count": 20,
                                            "id": "leaf11"
                                        },
                                        {
                                            "label": "\"split_feature_name:high2_2_5\nthreshold:0.004915727768093348\nsplit_gain:0.01586593314034997\ninternal_value:0.01670072581085454\ninternal_count:78\"",
                                            "name": "split29",
                                            "split_feature_name": "high2_2_5",
                                            "threshold": 0.004915727768093348,
                                            "split_gain": 0.01586593314034997,
                                            "internal_value": 0.01670072581085454,
                                            "internal_count": 78,
                                            "id": "split29",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:29\nleaf_value:0.00027996852284559284\nleaf_count:40\"",
                                                    "name": "leaf29",
                                                    "leaf_index": 29.0,
                                                    "leaf_value": 0.00027996852284559284,
                                                    "size": 0.00027996852284559284,
                                                    "leaf_count": 40,
                                                    "id": "leaf29"
                                                },
                                                {
                                                    "label": "\"leaf_index:30\nleaf_value:0.003133340010811624\nleaf_count:38\"",
                                                    "name": "leaf30",
                                                    "leaf_index": 30.0,
                                                    "leaf_value": 0.003133340010811624,
                                                    "size": 0.003133340010811624,
                                                    "leaf_count": 38,
                                                    "id": "leaf30"
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
                    "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.03255492724543768\ninternal_value:-0.00048106262464868215\ninternal_count:37823\"",
                    "name": "split5",
                    "split_feature_name": "daytime",
                    "threshold": 9.750000000000002,
                    "split_gain": 0.03255492724543768,
                    "internal_value": -0.00048106262464868215,
                    "internal_count": 37823,
                    "id": "split5",
                    "children": [
                        {
                            "label": "\"split_feature_name:day_delta\nthreshold:0.04907092452049256\nsplit_gain:0.14557293085944975\ninternal_value:-0.00364994304230189\ninternal_count:2986\"",
                            "name": "split6",
                            "split_feature_name": "day_delta",
                            "threshold": 0.04907092452049256,
                            "split_gain": 0.14557293085944975,
                            "internal_value": -0.00364994304230189,
                            "internal_count": 2986,
                            "id": "split6",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:-0.020201504230499264\nsplit_gain:0.04635765461765906\ninternal_value:-0.0014574507158127798\ninternal_count:2718\"",
                                    "name": "split8",
                                    "split_feature_name": "day_delta",
                                    "threshold": -0.020201504230499264,
                                    "split_gain": 0.04635765461765906,
                                    "internal_value": -0.0014574507158127798,
                                    "internal_count": 2718,
                                    "id": "split8",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:1\nleaf_value:0.0005755843769808342\nleaf_count:671\"",
                                            "name": "leaf1",
                                            "leaf_index": 1.0,
                                            "leaf_value": 0.0005755843769808342,
                                            "size": 0.0005755843769808342,
                                            "leaf_count": 671,
                                            "id": "leaf1"
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_2_5\nthreshold:-0.038956748321652405\nsplit_gain:0.01479949018028805\ninternal_value:-0.003821945390874711\ninternal_count:2047\"",
                                            "name": "split19",
                                            "split_feature_name": "low2_2_5",
                                            "threshold": -0.038956748321652405,
                                            "split_gain": 0.01479949018028805,
                                            "internal_value": -0.003821945390874711,
                                            "internal_count": 2047,
                                            "id": "split19",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:9\nleaf_value:-0.0014233053558200483\nleaf_count:128\"",
                                                    "name": "leaf9",
                                                    "leaf_index": 9.0,
                                                    "leaf_value": -0.0014233053558200483,
                                                    "size": -0.0014233053558200483,
                                                    "leaf_count": 128,
                                                    "id": "leaf9"
                                                },
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:0.0009465515613555909\nsplit_gain:0.013509184262499946\ninternal_value:-0.003127509827863925\ninternal_count:1919\"",
                                                    "name": "split20",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": 0.0009465515613555909,
                                                    "split_gain": 0.013509184262499946,
                                                    "internal_value": -0.003127509827863925,
                                                    "internal_count": 1919,
                                                    "id": "split20",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:20\nleaf_value:-3.511240885686169e-05\nleaf_count:916\"",
                                                            "name": "leaf20",
                                                            "leaf_index": 20.0,
                                                            "leaf_value": -3.511240885686169e-05,
                                                            "size": -3.511240885686169e-05,
                                                            "leaf_count": 916,
                                                            "id": "leaf20"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:21\nleaf_value:-0.0005663072477110687\nleaf_count:1003\"",
                                                            "name": "leaf21",
                                                            "leaf_index": 21.0,
                                                            "leaf_value": -0.0005663072477110687,
                                                            "size": -0.0005663072477110687,
                                                            "leaf_count": 1003,
                                                            "id": "leaf21"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:0.1255769729614258\nsplit_gain:0.04725819725792704\ninternal_value:-0.025885742084829504\ninternal_count:268\"",
                                    "name": "split7",
                                    "split_feature_name": "day_delta",
                                    "threshold": 0.1255769729614258,
                                    "split_gain": 0.04725819725792704,
                                    "internal_value": -0.025885742084829504,
                                    "internal_count": 268,
                                    "id": "split7",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:low2_2_5\nthreshold:0.0668243207037449\nsplit_gain:0.01760447258482091\ninternal_value:-0.020000375658777818\ninternal_count:224\"",
                                            "name": "split11",
                                            "split_feature_name": "low2_2_5",
                                            "threshold": 0.0668243207037449,
                                            "split_gain": 0.01760447258482091,
                                            "internal_value": -0.020000375658777818,
                                            "internal_count": 224,
                                            "id": "split11",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:7\nleaf_value:-0.0022926030955006515\nleaf_count:202\"",
                                                    "name": "leaf7",
                                                    "leaf_index": 7.0,
                                                    "leaf_value": -0.0022926030955006515,
                                                    "size": -0.0022926030955006515,
                                                    "leaf_count": 202,
                                                    "id": "leaf7"
                                                },
                                                {
                                                    "label": "\"leaf_index:12\nleaf_value:0.0006862459333867513\nleaf_count:22\"",
                                                    "name": "leaf12",
                                                    "leaf_index": 12.0,
                                                    "leaf_value": 0.0006862459333867513,
                                                    "size": 0.0006862459333867513,
                                                    "leaf_count": 22,
                                                    "id": "leaf12"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:48489.92773437501\nsplit_gain:0.021105533316773673\ninternal_value:-0.05584760752654719\ninternal_count:44\"",
                                            "name": "split9",
                                            "split_feature_name": "avg_dolvol5_30",
                                            "threshold": 48489.92773437501,
                                            "split_gain": 0.021105533316773673,
                                            "internal_value": -0.05584760752654719,
                                            "internal_count": 44,
                                            "id": "split9",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:8\nleaf_value:-0.0031855828640982506\nleaf_count:20\"",
                                                    "name": "leaf8",
                                                    "leaf_index": 8.0,
                                                    "leaf_value": -0.0031855828640982506,
                                                    "size": -0.0031855828640982506,
                                                    "leaf_count": 20,
                                                    "id": "leaf8"
                                                },
                                                {
                                                    "label": "\"leaf_index:10\nleaf_value:-0.00758407565978511\nleaf_count:24\"",
                                                    "name": "leaf10",
                                                    "leaf_index": 10.0,
                                                    "leaf_value": -0.00758407565978511,
                                                    "size": -0.00758407565978511,
                                                    "leaf_count": 24,
                                                    "id": "leaf10"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.016993052151237455\ninternal_value:-0.00020944690208036463\ninternal_count:34837\"",
                            "name": "split12",
                            "split_feature_name": "daytime",
                            "threshold": 15.250000000000002,
                            "split_gain": 0.016993052151237455,
                            "internal_value": -0.00020944690208036463,
                            "internal_count": 34837,
                            "id": "split12",
                            "children": [
                                {
                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.31598722934722895\nsplit_gain:0.01491981562049802\ninternal_value:-0.0004132645411377208\ninternal_count:32103\"",
                                    "name": "split17",
                                    "split_feature_name": "low2_5_30",
                                    "threshold": -0.31598722934722895,
                                    "split_gain": 0.01491981562049802,
                                    "internal_value": -0.0004132645411377208,
                                    "internal_count": 32103,
                                    "id": "split17",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:daytime\nthreshold:10.750000000000002\nsplit_gain:0.011511517596632753\ninternal_value:-0.008620127242565187\ninternal_count:220\"",
                                            "name": "split22",
                                            "split_feature_name": "daytime",
                                            "threshold": 10.750000000000002,
                                            "split_gain": 0.011511517596632753,
                                            "internal_value": -0.008620127242565187,
                                            "internal_count": 220,
                                            "id": "split22",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:vol1_10\nthreshold:0.5437525212764741\nsplit_gain:0.014464815081431315\ninternal_value:-0.018678050552261995\ninternal_count:75\"",
                                                    "name": "split23",
                                                    "split_feature_name": "vol1_10",
                                                    "threshold": 0.5437525212764741,
                                                    "split_gain": 0.014464815081431315,
                                                    "internal_value": -0.018678050552261995,
                                                    "internal_count": 75,
                                                    "id": "split23",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:6\nleaf_value:-0.003202078240559413\nleaf_count:39\"",
                                                            "name": "leaf6",
                                                            "leaf_index": 6.0,
                                                            "leaf_value": -0.003202078240559413,
                                                            "size": -0.003202078240559413,
                                                            "leaf_count": 39,
                                                            "id": "leaf6"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:24\nleaf_value:-0.0004223424377818851\nleaf_count:36\"",
                                                            "name": "leaf24",
                                                            "leaf_index": 24.0,
                                                            "leaf_value": -0.0004223424377818851,
                                                            "size": -0.0004223424377818851,
                                                            "leaf_count": 36,
                                                            "id": "leaf24"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:23\nleaf_value:-0.00034177531168599423\nleaf_count:145\"",
                                                    "name": "leaf23",
                                                    "leaf_index": 23.0,
                                                    "leaf_value": -0.00034177531168599423,
                                                    "size": -0.00034177531168599423,
                                                    "leaf_count": 145,
                                                    "id": "leaf23"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:stk1_2\nthreshold:-0.05783221870660781\nsplit_gain:0.015713640630051456\ninternal_value:-0.0003566353094370012\ninternal_count:31883\"",
                                            "name": "split18",
                                            "split_feature_name": "stk1_2",
                                            "threshold": -0.05783221870660781,
                                            "split_gain": 0.015713640630051456,
                                            "internal_value": -0.0003566353094370012,
                                            "internal_count": 31883,
                                            "id": "split18",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:18\nleaf_value:0.0005012129953483828\nleaf_count:536\"",
                                                    "name": "leaf18",
                                                    "leaf_index": 18.0,
                                                    "leaf_value": 0.0005012129953483828,
                                                    "size": 0.0005012129953483828,
                                                    "leaf_count": 536,
                                                    "id": "leaf18"
                                                },
                                                {
                                                    "label": "\"leaf_index:19\nleaf_value:-4.484354236720337e-05\nleaf_count:31347\"",
                                                    "name": "leaf19",
                                                    "leaf_index": 19.0,
                                                    "leaf_value": -4.484354236720337e-05,
                                                    "size": -4.484354236720337e-05,
                                                    "leaf_count": 31347,
                                                    "id": "leaf19"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:dayofweek\nthreshold:3.5000000000000004\nsplit_gain:0.02511881911264478\ninternal_value:0.0021838075480506906\ninternal_count:2734\"",
                                    "name": "split13",
                                    "split_feature_name": "dayofweek",
                                    "threshold": 3.5000000000000004,
                                    "split_gain": 0.02511881911264478,
                                    "internal_value": 0.0021838075480506906,
                                    "internal_count": 2734,
                                    "id": "split13",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:169516.44531250003\nsplit_gain:0.015899089856448004\ninternal_value:0.000685253302177008\ninternal_count:2197\"",
                                            "name": "split15",
                                            "split_feature_name": "avg_dolvol5_30",
                                            "threshold": 169516.44531250003,
                                            "split_gain": 0.015899089856448004,
                                            "internal_value": 0.000685253302177008,
                                            "internal_count": 2197,
                                            "id": "split15",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:0.06765865534543992\nsplit_gain:0.011468839228792736\ninternal_value:0.0013735784825339764\ninternal_count:2062\"",
                                                    "name": "split24",
                                                    "split_feature_name": "high2_2_5",
                                                    "threshold": 0.06765865534543992,
                                                    "split_gain": 0.011468839228792736,
                                                    "internal_value": 0.0013735784825339764,
                                                    "internal_count": 2062,
                                                    "id": "split24",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:day_delta\nthreshold:0.09765374660491945\nsplit_gain:0.013676298272702912\ninternal_value:0.0011401775801044628\ninternal_count:2042\"",
                                                            "name": "split25",
                                                            "split_feature_name": "day_delta",
                                                            "threshold": 0.09765374660491945,
                                                            "split_gain": 0.013676298272702912,
                                                            "internal_value": 0.0011401775801044628,
                                                            "internal_count": 2042,
                                                            "id": "split25",
                                                            "children": [
                                                                {
                                                                    "label": "\"split_feature_name:high2_5_30\nthreshold:0.2005359381437302\nsplit_gain:0.012651921803575966\ninternal_value:0.0016384822819939826\ninternal_count:1969\"",
                                                                    "name": "split26",
                                                                    "split_feature_name": "high2_5_30",
                                                                    "threshold": 0.2005359381437302,
                                                                    "split_gain": 0.012651921803575966,
                                                                    "internal_value": 0.0016384822819939826,
                                                                    "internal_count": 1969,
                                                                    "id": "split26",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:13\nleaf_value:0.0001375291567816764\nleaf_count:1948\"",
                                                                            "name": "leaf13",
                                                                            "leaf_index": 13.0,
                                                                            "leaf_value": 0.0001375291567816764,
                                                                            "size": 0.0001375291567816764,
                                                                            "leaf_count": 1948,
                                                                            "id": "leaf13"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:27\nleaf_value:0.0026052554244718825\nleaf_count:21\"",
                                                                            "name": "leaf27",
                                                                            "leaf_index": 27.0,
                                                                            "leaf_value": 0.0026052554244718825,
                                                                            "size": 0.0026052554244718825,
                                                                            "leaf_count": 21,
                                                                            "id": "leaf27"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:26\nleaf_value:-0.001230039718729916\nleaf_count:73\"",
                                                                    "name": "leaf26",
                                                                    "leaf_index": 26.0,
                                                                    "leaf_value": -0.001230039718729916,
                                                                    "size": -0.001230039718729916,
                                                                    "leaf_count": 73,
                                                                    "id": "leaf26"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:25\nleaf_value:0.0025203810620587318\nleaf_count:20\"",
                                                            "name": "leaf25",
                                                            "leaf_index": 25.0,
                                                            "leaf_value": 0.0025203810620587318,
                                                            "size": 0.0025203810620587318,
                                                            "leaf_count": 20,
                                                            "id": "leaf25"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:0.03062143921852112\nsplit_gain:0.012296504603986985\ninternal_value:-0.009828276489645725\ninternal_count:135\"",
                                                    "name": "split21",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": 0.03062143921852112,
                                                    "split_gain": 0.012296504603986985,
                                                    "internal_value": -0.009828276489645725,
                                                    "internal_count": 135,
                                                    "id": "split21",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:16\nleaf_value:3.745365279933645e-05\nleaf_count:63\"",
                                                            "name": "leaf16",
                                                            "leaf_index": 16.0,
                                                            "leaf_value": 3.745365279933645e-05,
                                                            "size": 3.745365279933645e-05,
                                                            "leaf_count": 63,
                                                            "id": "leaf16"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:22\nleaf_value:-0.0018755737880079932\nleaf_count:72\"",
                                                            "name": "leaf22",
                                                            "leaf_index": 22.0,
                                                            "leaf_value": -0.0018755737880079932,
                                                            "size": -0.0018755737880079932,
                                                            "leaf_count": 72,
                                                            "id": "leaf22"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.10337839648127554\nsplit_gain:0.021875495689964178\ninternal_value:0.008314764118226632\ninternal_count:537\"",
                                            "name": "split14",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.10337839648127554,
                                            "split_gain": 0.021875495689964178,
                                            "internal_value": 0.008314764118226632,
                                            "internal_count": 537,
                                            "id": "split14",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:14\nleaf_value:0.003144341406081558\nleaf_count:38\"",
                                                    "name": "leaf14",
                                                    "leaf_index": 14.0,
                                                    "leaf_value": 0.003144341406081558,
                                                    "size": 0.003144341406081558,
                                                    "leaf_count": 38,
                                                    "id": "leaf14"
                                                },
                                                {
                                                    "label": "\"leaf_index:15\nleaf_value:0.0006553464122598617\nleaf_count:499\"",
                                                    "name": "leaf15",
                                                    "leaf_index": 15.0,
                                                    "leaf_value": 0.0006553464122598617,
                                                    "size": 0.0006553464122598617,
                                                    "leaf_count": 499,
                                                    "id": "leaf15"
                                                }
                                            ]
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
                "split5": ">"
            },
            "split1": {
                "split10": ">"
            },
            "split2": {
                "split3": ">"
            },
            "split16": {
                "leaf17": ">"
            },
            "split3": {
                "leaf4": ">"
            },
            "split4": {
                "leaf5": ">"
            },
            "split10": {
                "split28": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split28": {
                "split29": ">"
            },
            "split29": {
                "leaf30": ">"
            },
            "split5": {
                "split12": ">"
            },
            "split6": {
                "split7": ">"
            },
            "split8": {
                "split19": ">"
            },
            "split19": {
                "split20": ">"
            },
            "split20": {
                "leaf21": ">"
            },
            "split7": {
                "split9": ">"
            },
            "split11": {
                "leaf12": ">"
            },
            "split9": {
                "leaf10": ">"
            },
            "split12": {
                "split13": ">"
            },
            "split17": {
                "split18": ">"
            },
            "split22": {
                "leaf23": ">"
            },
            "split23": {
                "leaf24": ">"
            },
            "split18": {
                "leaf19": ">"
            },
            "split13": {
                "split14": ">"
            },
            "split15": {
                "split21": ">"
            },
            "split24": {
                "leaf25": ">"
            },
            "split25": {
                "leaf26": ">"
            },
            "split26": {
                "leaf27": ">"
            },
            "split21": {
                "leaf22": ">"
            },
            "split14": {
                "leaf15": ">"
            }
        }
    },
    "4": {
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.1265662312507629\nsplit_gain:0.11493978771975404\ninternal_value:0\ninternal_count:40420\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.1265662312507629,
            "split_gain": 0.11493978771975404,
            "internal_value": 0.0,
            "internal_count": 40420,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.07160226255655287\nsplit_gain:0.04536969105087375\ninternal_value:0.009562771100025111\ninternal_count:1219\"",
                    "name": "split1",
                    "split_feature_name": "high2_2_5",
                    "threshold": -0.07160226255655287,
                    "split_gain": 0.04536969105087375,
                    "internal_value": 0.009562771100025111,
                    "internal_count": 1219,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:stk1_2\nthreshold:0.0029368743998929863\nsplit_gain:0.04893619996224563\ninternal_value:0.021424540719839142\ninternal_count:255\"",
                            "name": "split2",
                            "split_feature_name": "stk1_2",
                            "threshold": 0.0029368743998929863,
                            "split_gain": 0.04893619996224563,
                            "internal_value": 0.021424540719839142,
                            "internal_count": 255,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"leaf_index:0\nleaf_value:0.005452874089640222\nleaf_count:38\"",
                                    "name": "leaf0",
                                    "leaf_index": 0.0,
                                    "leaf_value": 0.005452874089640222,
                                    "size": 0.005452874089640222,
                                    "leaf_count": 38,
                                    "id": "leaf0"
                                },
                                {
                                    "label": "\"split_feature_name:daytime\nthreshold:13.250000000000002\nsplit_gain:0.016425648028521735\ninternal_value:0.015627491840993993\ninternal_count:217\"",
                                    "name": "split11",
                                    "split_feature_name": "daytime",
                                    "threshold": 13.250000000000002,
                                    "split_gain": 0.016425648028521735,
                                    "internal_value": 0.015627491840993993,
                                    "internal_count": 217,
                                    "id": "split11",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:stk1_2\nthreshold:0.11238185316324235\nsplit_gain:0.009692716461817553\ninternal_value:0.010434605395857943\ninternal_count:160\"",
                                            "name": "split29",
                                            "split_feature_name": "stk1_2",
                                            "threshold": 0.11238185316324235,
                                            "split_gain": 0.009692716461817553,
                                            "internal_value": 0.010434605395857943,
                                            "internal_count": 160,
                                            "id": "split29",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:3\nleaf_value:0.0015682093014898286\nleaf_count:110\"",
                                                    "name": "leaf3",
                                                    "leaf_index": 3.0,
                                                    "leaf_value": 0.0015682093014898286,
                                                    "size": 0.0015682093014898286,
                                                    "leaf_count": 110,
                                                    "id": "leaf3"
                                                },
                                                {
                                                    "label": "\"leaf_index:30\nleaf_value:-0.00011098673660308124\nleaf_count:50\"",
                                                    "name": "leaf30",
                                                    "leaf_index": 30.0,
                                                    "leaf_value": -0.00011098673660308124,
                                                    "size": -0.00011098673660308124,
                                                    "leaf_count": 50,
                                                    "id": "leaf30"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:stk2_5\nthreshold:0.06899289414286615\nsplit_gain:0.017923989804891974\ninternal_value:0.030204015195761855\ninternal_count:57\"",
                                            "name": "split12",
                                            "split_feature_name": "stk2_5",
                                            "threshold": 0.06899289414286615,
                                            "split_gain": 0.017923989804891974,
                                            "internal_value": 0.030204015195761855,
                                            "internal_count": 57,
                                            "id": "split12",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:12\nleaf_value:0.004324150710945596\nleaf_count:37\"",
                                                    "name": "leaf12",
                                                    "leaf_index": 12.0,
                                                    "leaf_value": 0.004324150710945596,
                                                    "size": 0.004324150710945596,
                                                    "leaf_count": 37,
                                                    "id": "leaf12"
                                                },
                                                {
                                                    "label": "\"leaf_index:13\nleaf_value:0.0006084655155427754\nleaf_count:20\"",
                                                    "name": "leaf13",
                                                    "leaf_index": 13.0,
                                                    "leaf_value": 0.0006084655155427754,
                                                    "size": 0.0006084655155427754,
                                                    "leaf_count": 20,
                                                    "id": "leaf13"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.038258891890619935\ninternal_value:0.00642506233129837\ninternal_count:964\"",
                            "name": "split3",
                            "split_feature_name": "daytime",
                            "threshold": 15.250000000000002,
                            "split_gain": 0.038258891890619935,
                            "internal_value": 0.00642506233129837,
                            "internal_count": 964,
                            "id": "split3",
                            "children": [
                                {
                                    "label": "\"leaf_index:2\nleaf_value:0.00039822452962607604\nleaf_count:838\"",
                                    "name": "leaf2",
                                    "leaf_index": 2.0,
                                    "leaf_value": 0.00039822452962607604,
                                    "size": 0.00039822452962607604,
                                    "leaf_count": 838,
                                    "id": "leaf2"
                                },
                                {
                                    "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:95359.27734375001\nsplit_gain:0.009845329646418002\ninternal_value:0.022671734357977077\ninternal_count:126\"",
                                    "name": "split26",
                                    "split_feature_name": "avg_dolvol2_5",
                                    "threshold": 95359.27734375001,
                                    "split_gain": 0.009845329646418002,
                                    "internal_value": 0.022671734357977077,
                                    "internal_count": 126,
                                    "id": "split26",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:high2_2_5\nthreshold:-0.02592978626489639\nsplit_gain:0.014048908334938437\ninternal_value:0.0170811158992971\ninternal_count:90\"",
                                            "name": "split27",
                                            "split_feature_name": "high2_2_5",
                                            "threshold": -0.02592978626489639,
                                            "split_gain": 0.014048908334938437,
                                            "internal_value": 0.0170811158992971,
                                            "internal_count": 90,
                                            "id": "split27",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:4\nleaf_value:-0.0003064785716123879\nleaf_count:25\"",
                                                    "name": "leaf4",
                                                    "leaf_index": 4.0,
                                                    "leaf_value": -0.0003064785716123879,
                                                    "size": -0.0003064785716123879,
                                                    "leaf_count": 25,
                                                    "id": "leaf4"
                                                },
                                                {
                                                    "label": "\"split_feature_name:high2_5_30\nthreshold:-0.02559939213097095\nsplit_gain:0.011845976556448735\ninternal_value:0.024829539597535935\ninternal_count:65\"",
                                                    "name": "split28",
                                                    "split_feature_name": "high2_5_30",
                                                    "threshold": -0.02559939213097095,
                                                    "split_gain": 0.011845976556448735,
                                                    "internal_value": 0.024829539597535935,
                                                    "internal_count": 65,
                                                    "id": "split28",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:28\nleaf_value:0.0044370479405015\nleaf_count:21\"",
                                                            "name": "leaf28",
                                                            "leaf_index": 28.0,
                                                            "leaf_value": 0.0044370479405015,
                                                            "size": 0.0044370479405015,
                                                            "leaf_count": 21,
                                                            "id": "leaf28"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:29\nleaf_value:0.0015503181962148202\nleaf_count:44\"",
                                                            "name": "leaf29",
                                                            "leaf_index": 29.0,
                                                            "leaf_value": 0.0015503181962148202,
                                                            "size": 0.0015503181962148202,
                                                            "leaf_count": 44,
                                                            "id": "leaf29"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:27\nleaf_value:0.003664828050467703\nleaf_count:36\"",
                                            "name": "leaf27",
                                            "leaf_index": 27.0,
                                            "leaf_value": 0.003664828050467703,
                                            "size": 0.003664828050467703,
                                            "leaf_count": 36,
                                            "id": "leaf27"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "\"split_feature_name:day_delta\nthreshold:-0.047541439533233636\nsplit_gain:0.027151240394014203\ninternal_value:-0.0002973653326110626\ninternal_count:39201\"",
                    "name": "split4",
                    "split_feature_name": "day_delta",
                    "threshold": -0.047541439533233636,
                    "split_gain": 0.027151240394014203,
                    "internal_value": -0.0002973653326110626,
                    "internal_count": 39201,
                    "id": "split4",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.028540218347146026\ninternal_value:0.0021677064306493002\ninternal_count:4011\"",
                            "name": "split8",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.028540218347146026,
                            "internal_value": 0.0021677064306493002,
                            "internal_count": 4011,
                            "id": "split8",
                            "children": [
                                {
                                    "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:2935.863403320313\nsplit_gain:0.013224047757807902\ninternal_value:0.012018893863210759\ninternal_count:274\"",
                                    "name": "split17",
                                    "split_feature_name": "avg_dolvol5_30",
                                    "threshold": 2935.863403320313,
                                    "split_gain": 0.013224047757807902,
                                    "internal_value": 0.012018893863210759,
                                    "internal_count": 274,
                                    "id": "split17",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:1\nleaf_value:-0.0012094455383097134\nleaf_count:21\"",
                                            "name": "leaf1",
                                            "leaf_index": 1.0,
                                            "leaf_value": -0.0012094455383097134,
                                            "size": -0.0012094455383097134,
                                            "leaf_count": 21,
                                            "id": "leaf1"
                                        },
                                        {
                                            "label": "\"leaf_index:18\nleaf_value:0.001402039716033513\nleaf_count:253\"",
                                            "name": "leaf18",
                                            "leaf_index": 18.0,
                                            "leaf_value": 0.001402039716033513,
                                            "size": 0.001402039716033513,
                                            "leaf_count": 253,
                                            "id": "leaf18"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.024320874542150983\ninternal_value:0.001445409037948781\ninternal_count:3737\"",
                                    "name": "split10",
                                    "split_feature_name": "daytime",
                                    "threshold": 15.250000000000002,
                                    "split_gain": 0.024320874542150983,
                                    "internal_value": 0.001445409037948781,
                                    "internal_count": 3737,
                                    "id": "split10",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:9\nleaf_value:6.501296622228981e-05\nleaf_count:3406\"",
                                            "name": "leaf9",
                                            "leaf_index": 9.0,
                                            "leaf_value": 6.501296622228981e-05,
                                            "size": 6.501296622228981e-05,
                                            "leaf_count": 3406,
                                            "id": "leaf9"
                                        },
                                        {
                                            "label": "\"leaf_index:11\nleaf_value:0.0009628857840735359\nleaf_count:331\"",
                                            "name": "leaf11",
                                            "leaf_index": 11.0,
                                            "leaf_value": 0.0009628857840735359,
                                            "size": 0.0009628857840735359,
                                            "leaf_count": 331,
                                            "id": "leaf11"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.037638138499118554\ninternal_value:-0.0005783372803927425\ninternal_count:35190\"",
                            "name": "split5",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.037638138499118554,
                            "internal_value": -0.0005783372803927425,
                            "internal_count": 35190,
                            "id": "split5",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:0.06315362453460695\nsplit_gain:0.112215050695768\ninternal_value:-0.004099227796106507\ninternal_count:2795\"",
                                    "name": "split6",
                                    "split_feature_name": "day_delta",
                                    "threshold": 0.06315362453460695,
                                    "split_gain": 0.112215050695768,
                                    "internal_value": -0.004099227796106507,
                                    "internal_count": 2795,
                                    "id": "split6",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:9.999999682655225e-21\nsplit_gain:0.030806935546219407\ninternal_value:-0.0025172654257027667\ninternal_count:2631\"",
                                            "name": "split7",
                                            "split_feature_name": "day_delta",
                                            "threshold": 9.999999682655225e-21,
                                            "split_gain": 0.030806935546219407,
                                            "internal_value": -0.0025172654257027667,
                                            "internal_count": 2631,
                                            "id": "split7",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:0.03957726992666722\nsplit_gain:0.015923683903758735\ninternal_value:0.0005214251868341416\ninternal_count:1471\"",
                                                    "name": "split13",
                                                    "split_feature_name": "high2_2_5",
                                                    "threshold": 0.03957726992666722,
                                                    "split_gain": 0.015923683903758735,
                                                    "internal_value": 0.0005214251868341416,
                                                    "internal_count": 1471,
                                                    "id": "split13",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:5\nleaf_value:3.015915657327872e-08\nleaf_count:1435\"",
                                                            "name": "leaf5",
                                                            "leaf_index": 5.0,
                                                            "leaf_value": 3.015915657327872e-08,
                                                            "size": 3.015915657327872e-08,
                                                            "leaf_count": 1435,
                                                            "id": "leaf5"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:14\nleaf_value:0.002129399072044988\nleaf_count:36\"",
                                                            "name": "leaf14",
                                                            "leaf_index": 14.0,
                                                            "leaf_value": 0.002129399072044988,
                                                            "size": 0.002129399072044988,
                                                            "leaf_count": 36,
                                                            "id": "leaf14"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.13816444575786588\nsplit_gain:0.01398561927125768\ninternal_value:-0.006370639469704311\ninternal_count:1160\"",
                                                    "name": "split15",
                                                    "split_feature_name": "low2_5_30",
                                                    "threshold": -0.13816444575786588,
                                                    "split_gain": 0.01398561927125768,
                                                    "internal_value": -0.006370639469704311,
                                                    "internal_count": 1160,
                                                    "id": "split15",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:8\nleaf_value:-0.0021505856627331453\nleaf_count:58\"",
                                                            "name": "leaf8",
                                                            "leaf_index": 8.0,
                                                            "leaf_value": -0.0021505856627331453,
                                                            "size": -0.0021505856627331453,
                                                            "leaf_count": 58,
                                                            "id": "leaf8"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:16\nleaf_value:-0.0005574049092987093\nleaf_count:1102\"",
                                                            "name": "leaf16",
                                                            "leaf_index": 16.0,
                                                            "leaf_value": -0.0005574049092987093,
                                                            "size": -0.0005574049092987093,
                                                            "leaf_count": 1102,
                                                            "id": "leaf16"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:0.1503901779651642\nsplit_gain:0.027997425894455585\ninternal_value:-0.029478148506668952\ninternal_count:164\"",
                                            "name": "split9",
                                            "split_feature_name": "day_delta",
                                            "threshold": 0.1503901779651642,
                                            "split_gain": 0.027997425894455585,
                                            "internal_value": -0.029478148506668952,
                                            "internal_count": 164,
                                            "id": "split9",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:3372.4592285156255\nsplit_gain:0.012468096327111752\ninternal_value:-0.023806827123221214\ninternal_count:138\"",
                                                    "name": "split19",
                                                    "split_feature_name": "avg_dolvol2_5",
                                                    "threshold": 3372.4592285156255,
                                                    "split_gain": 0.012468096327111752,
                                                    "internal_value": -0.023806827123221214,
                                                    "internal_count": 138,
                                                    "id": "split19",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:7\nleaf_value:-0.0006147604841258257\nleaf_count:31\"",
                                                            "name": "leaf7",
                                                            "leaf_index": 7.0,
                                                            "leaf_value": -0.0006147604841258257,
                                                            "size": -0.0006147604841258257,
                                                            "leaf_count": 31,
                                                            "id": "leaf7"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:20\nleaf_value:-0.00289230504011731\nleaf_count:107\"",
                                                            "name": "leaf20",
                                                            "leaf_index": 20.0,
                                                            "leaf_value": -0.00289230504011731,
                                                            "size": -0.00289230504011731,
                                                            "leaf_count": 107,
                                                            "id": "leaf20"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:10\nleaf_value:-0.0059579777388045424\nleaf_count:26\"",
                                                    "name": "leaf10",
                                                    "leaf_index": 10.0,
                                                    "leaf_value": -0.0059579777388045424,
                                                    "size": -0.0059579777388045424,
                                                    "leaf_count": 26,
                                                    "id": "leaf10"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:low2_2_5\nthreshold:-0.011447614524513481\nsplit_gain:0.015164444489586855\ninternal_value:-0.00027455925935801576\ninternal_count:32395\"",
                                    "name": "split14",
                                    "split_feature_name": "low2_2_5",
                                    "threshold": -0.011447614524513481,
                                    "split_gain": 0.015164444489586855,
                                    "internal_value": -0.00027455925935801576,
                                    "internal_count": 32395,
                                    "id": "split14",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:18972.065429687504\nsplit_gain:0.013912940575217324\ninternal_value:-0.0013627456364451373\ninternal_count:9178\"",
                                            "name": "split16",
                                            "split_feature_name": "avg_dolvol2_5",
                                            "threshold": 18972.065429687504,
                                            "split_gain": 0.013912940575217324,
                                            "internal_value": -0.0013627456364451373,
                                            "internal_count": 9178,
                                            "id": "split16",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:6\nleaf_value:-0.00022951139620302756\nleaf_count:5833\"",
                                                    "name": "leaf6",
                                                    "leaf_index": 6.0,
                                                    "leaf_value": -0.00022951139620302756,
                                                    "size": -0.00022951139620302756,
                                                    "leaf_count": 5833,
                                                    "id": "leaf6"
                                                },
                                                {
                                                    "label": "\"split_feature_name:stk2_5\nthreshold:-0.15822401642799375\nsplit_gain:0.013027521072598441\ninternal_value:0.00026311518362604657\ninternal_count:3345\"",
                                                    "name": "split18",
                                                    "split_feature_name": "stk2_5",
                                                    "threshold": -0.15822401642799375,
                                                    "split_gain": 0.013027521072598441,
                                                    "internal_value": 0.00026311518362604657,
                                                    "internal_count": 3345,
                                                    "id": "split18",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:17\nleaf_value:0.0017556784002176016\nleaf_count:43\"",
                                                            "name": "leaf17",
                                                            "leaf_index": 17.0,
                                                            "leaf_value": 0.0017556784002176016,
                                                            "size": 0.0017556784002176016,
                                                            "leaf_count": 43,
                                                            "id": "leaf17"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:19\nleaf_value:3.7909926449290475e-06\nleaf_count:3302\"",
                                                            "name": "leaf19",
                                                            "leaf_index": 19.0,
                                                            "leaf_value": 3.7909926449290475e-06,
                                                            "size": 3.7909926449290475e-06,
                                                            "leaf_count": 3302,
                                                            "id": "leaf19"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:stk1_2\nthreshold:-0.05783221870660781\nsplit_gain:0.012306541228981399\ninternal_value:0.00015561580929450615\ninternal_count:23217\"",
                                            "name": "split20",
                                            "split_feature_name": "stk1_2",
                                            "threshold": -0.05783221870660781,
                                            "split_gain": 0.012306541228981399,
                                            "internal_value": 0.00015561580929450615,
                                            "internal_count": 23217,
                                            "id": "split20",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:15\nleaf_value:0.0005063060817141377\nleaf_count:500\"",
                                                    "name": "leaf15",
                                                    "leaf_index": 15.0,
                                                    "leaf_value": 0.0005063060817141377,
                                                    "size": 0.0005063060817141377,
                                                    "leaf_count": 500,
                                                    "id": "leaf15"
                                                },
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:0.13767567276954654\nsplit_gain:0.012175533702673703\ninternal_value:4.760319742130831e-05\ninternal_count:22717\"",
                                                    "name": "split21",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": 0.13767567276954654,
                                                    "split_gain": 0.012175533702673703,
                                                    "internal_value": 4.760319742130831e-05,
                                                    "internal_count": 22717,
                                                    "id": "split21",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:21\nleaf_value:1.3186464873286852e-05\nleaf_count:22420\"",
                                                            "name": "leaf21",
                                                            "leaf_index": 21.0,
                                                            "leaf_value": 1.3186464873286852e-05,
                                                            "size": 1.3186464873286852e-05,
                                                            "leaf_count": 22420,
                                                            "id": "leaf21"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:high2_5_30\nthreshold:0.20804919302463534\nsplit_gain:0.019585646559632443\ninternal_value:-0.006313143396535525\ninternal_count:297\"",
                                                            "name": "split22",
                                                            "split_feature_name": "high2_5_30",
                                                            "threshold": 0.20804919302463534,
                                                            "split_gain": 0.019585646559632443,
                                                            "internal_value": -0.006313143396535525,
                                                            "internal_count": 297,
                                                            "id": "split22",
                                                            "children": [
                                                                {
                                                                    "label": "\"split_feature_name:stk2_5\nthreshold:-0.10430652648210524\nsplit_gain:0.01588177549111515\ninternal_value:-0.017885031678555867\ninternal_count:98\"",
                                                                    "name": "split23",
                                                                    "split_feature_name": "stk2_5",
                                                                    "threshold": -0.10430652648210524,
                                                                    "split_gain": 0.01588177549111515,
                                                                    "internal_value": -0.017885031678555867,
                                                                    "internal_count": 98,
                                                                    "id": "split23",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:22\nleaf_value:0.00044685298247107614\nleaf_count:24\"",
                                                                            "name": "leaf22",
                                                                            "leaf_index": 22.0,
                                                                            "leaf_value": 0.00044685298247107614,
                                                                            "size": 0.00044685298247107614,
                                                                            "leaf_count": 24,
                                                                            "id": "leaf22"
                                                                        },
                                                                        {
                                                                            "label": "\"split_feature_name:low2_2_5\nthreshold:0.01907890941947699\nsplit_gain:0.023821766170913604\ninternal_value:-0.02513483540934504\ninternal_count:74\"",
                                                                            "name": "split24",
                                                                            "split_feature_name": "low2_2_5",
                                                                            "threshold": 0.01907890941947699,
                                                                            "split_gain": 0.023821766170913604,
                                                                            "internal_value": -0.02513483540934504,
                                                                            "internal_count": 74,
                                                                            "id": "split24",
                                                                            "children": [
                                                                                {
                                                                                    "label": "\"leaf_index:24\nleaf_value:-0.0004579679516609758\nleaf_count:32\"",
                                                                                    "name": "leaf24",
                                                                                    "leaf_index": 24.0,
                                                                                    "leaf_value": -0.0004579679516609758,
                                                                                    "size": -0.0004579679516609758,
                                                                                    "leaf_count": 32,
                                                                                    "id": "leaf24"
                                                                                },
                                                                                {
                                                                                    "label": "\"leaf_index:25\nleaf_value:-0.004079590656571478\nleaf_count:42\"",
                                                                                    "name": "leaf25",
                                                                                    "leaf_index": 25.0,
                                                                                    "leaf_value": -0.004079590656571478,
                                                                                    "size": -0.004079590656571478,
                                                                                    "leaf_count": 42,
                                                                                    "id": "leaf25"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "label": "\"split_feature_name:vol1_10\nthreshold:0.36846077442169195\nsplit_gain:0.01379260403578058\ninternal_value:-0.0006144245440832972\ninternal_count:199\"",
                                                                    "name": "split25",
                                                                    "split_feature_name": "vol1_10",
                                                                    "threshold": 0.36846077442169195,
                                                                    "split_gain": 0.01379260403578058,
                                                                    "internal_value": -0.0006144245440832972,
                                                                    "internal_count": 199,
                                                                    "id": "split25",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:23\nleaf_value:-0.0008412458782205885\nleaf_count:106\"",
                                                                            "name": "leaf23",
                                                                            "leaf_index": 23.0,
                                                                            "leaf_value": -0.0008412458782205885,
                                                                            "size": -0.0008412458782205885,
                                                                            "leaf_count": 106,
                                                                            "id": "leaf23"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:26\nleaf_value:0.0008273657490766104\nleaf_count:93\"",
                                                                            "name": "leaf26",
                                                                            "leaf_index": 26.0,
                                                                            "leaf_value": 0.0008273657490766104,
                                                                            "size": 0.0008273657490766104,
                                                                            "leaf_count": 93,
                                                                            "id": "leaf26"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
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
                "split4": ">"
            },
            "split1": {
                "split3": ">"
            },
            "split2": {
                "split11": ">"
            },
            "split11": {
                "split12": ">"
            },
            "split29": {
                "leaf30": ">"
            },
            "split12": {
                "leaf13": ">"
            },
            "split3": {
                "split26": ">"
            },
            "split26": {
                "leaf27": ">"
            },
            "split27": {
                "split28": ">"
            },
            "split28": {
                "leaf29": ">"
            },
            "split4": {
                "split5": ">"
            },
            "split8": {
                "split10": ">"
            },
            "split17": {
                "leaf18": ">"
            },
            "split10": {
                "leaf11": ">"
            },
            "split5": {
                "split14": ">"
            },
            "split6": {
                "split9": ">"
            },
            "split7": {
                "split15": ">"
            },
            "split13": {
                "leaf14": ">"
            },
            "split15": {
                "leaf16": ">"
            },
            "split9": {
                "leaf10": ">"
            },
            "split19": {
                "leaf20": ">"
            },
            "split14": {
                "split20": ">"
            },
            "split16": {
                "split18": ">"
            },
            "split18": {
                "leaf19": ">"
            },
            "split20": {
                "split21": ">"
            },
            "split21": {
                "split22": ">"
            },
            "split22": {
                "split25": ">"
            },
            "split23": {
                "split24": ">"
            },
            "split24": {
                "leaf25": ">"
            },
            "split25": {
                "leaf26": ">"
            }
        }
    },
    "5": {
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.1472342014312744\nsplit_gain:0.09399809009211524\ninternal_value:0\ninternal_count:40420\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.1472342014312744,
            "split_gain": 0.09399809009211524,
            "internal_value": 0.0,
            "internal_count": 40420,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.04151302762329578\nsplit_gain:0.03502009064184532\ninternal_value:0.010037058700120588\ninternal_count:912\"",
                    "name": "split1",
                    "split_feature_name": "high2_2_5",
                    "threshold": -0.04151302762329578,
                    "split_gain": 0.03502009064184532,
                    "internal_value": 0.010037058700120588,
                    "internal_count": 912,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:stk1_2\nthreshold:0.006043967558071018\nsplit_gain:0.04360719419759279\ninternal_value:0.01811236138372047\ninternal_count:338\"",
                            "name": "split2",
                            "split_feature_name": "stk1_2",
                            "threshold": 0.006043967558071018,
                            "split_gain": 0.04360719419759279,
                            "internal_value": 0.01811236138372047,
                            "internal_count": 338,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:-0.2029260993003845\nsplit_gain:0.020326253390671206\ninternal_value:0.04505726175528823\ninternal_count:51\"",
                                    "name": "split10",
                                    "split_feature_name": "day_delta",
                                    "threshold": -0.2029260993003845,
                                    "split_gain": 0.020326253390671206,
                                    "internal_value": 0.04505726175528823,
                                    "internal_count": 51,
                                    "id": "split10",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:0\nleaf_value:0.006176018939198305\nleaf_count:30\"",
                                            "name": "leaf0",
                                            "leaf_index": 0.0,
                                            "leaf_value": 0.006176018939198305,
                                            "size": 0.006176018939198305,
                                            "leaf_count": 30,
                                            "id": "leaf0"
                                        },
                                        {
                                            "label": "\"leaf_index:11\nleaf_value:0.0021195936560009917\nleaf_count:21\"",
                                            "name": "leaf11",
                                            "leaf_index": 11.0,
                                            "leaf_value": 0.0021195936560009917,
                                            "size": 0.0021195936560009917,
                                            "leaf_count": 21,
                                            "id": "leaf11"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:stk2_5\nthreshold:0.07364432513713838\nsplit_gain:0.02016393085857119\ninternal_value:0.013324243199225849\ninternal_count:287\"",
                                    "name": "split12",
                                    "split_feature_name": "stk2_5",
                                    "threshold": 0.07364432513713838,
                                    "split_gain": 0.02016393085857119,
                                    "internal_value": 0.013324243199225849,
                                    "internal_count": 287,
                                    "id": "split12",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:daytime\nthreshold:14.750000000000002\nsplit_gain:0.017809412121060894\ninternal_value:0.020328213611515045\ninternal_count:169\"",
                                            "name": "split13",
                                            "split_feature_name": "daytime",
                                            "threshold": 14.750000000000002,
                                            "split_gain": 0.017809412121060894,
                                            "internal_value": 0.020328213611515045,
                                            "internal_count": 169,
                                            "id": "split13",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:stk2_5\nthreshold:0.0040997155010700235\nsplit_gain:0.012916805747305391\ninternal_value:0.014611892986166391\ninternal_count:129\"",
                                                    "name": "split18",
                                                    "split_feature_name": "stk2_5",
                                                    "threshold": 0.0040997155010700235,
                                                    "split_gain": 0.012916805747305391,
                                                    "internal_value": 0.014611892986166391,
                                                    "internal_count": 129,
                                                    "id": "split18",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:3\nleaf_value:-0.00014713244325119173\nleaf_count:36\"",
                                                            "name": "leaf3",
                                                            "leaf_index": 3.0,
                                                            "leaf_value": -0.00014713244325119173,
                                                            "size": -0.00014713244325119173,
                                                            "leaf_count": 36,
                                                            "id": "leaf3"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:stk5_30\nthreshold:-0.006734016118571161\nsplit_gain:0.014162809195485127\ninternal_value:0.020837654567590253\ninternal_count:93\"",
                                                            "name": "split19",
                                                            "split_feature_name": "stk5_30",
                                                            "threshold": -0.006734016118571161,
                                                            "split_gain": 0.014162809195485127,
                                                            "internal_value": 0.020837654567590253,
                                                            "internal_count": 93,
                                                            "id": "split19",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:19\nleaf_value:0.004013170074257585\nleaf_count:27\"",
                                                                    "name": "leaf19",
                                                                    "leaf_index": 19.0,
                                                                    "leaf_value": 0.004013170074257585,
                                                                    "size": 0.004013170074257585,
                                                                    "leaf_count": 27,
                                                                    "id": "leaf19"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:20\nleaf_value:0.0012944635677823418\nleaf_count:66\"",
                                                                    "name": "leaf20",
                                                                    "leaf_index": 20.0,
                                                                    "leaf_value": 0.0012944635677823418,
                                                                    "size": 0.0012944635677823418,
                                                                    "leaf_count": 66,
                                                                    "id": "leaf20"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:87572.70312500001\nsplit_gain:0.012261389587038818\ninternal_value:0.03876334762826446\ninternal_count:40\"",
                                                    "name": "split20",
                                                    "split_feature_name": "avg_dolvol1_2",
                                                    "threshold": 87572.70312500001,
                                                    "split_gain": 0.012261389587038818,
                                                    "internal_value": 0.03876334762826446,
                                                    "internal_count": 40,
                                                    "id": "split20",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:14\nleaf_value:0.0021255214099073784\nleaf_count:20\"",
                                                            "name": "leaf14",
                                                            "leaf_index": 14.0,
                                                            "leaf_value": 0.0021255214099073784,
                                                            "size": 0.0021255214099073784,
                                                            "leaf_count": 20,
                                                            "id": "leaf14"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:21\nleaf_value:0.005627148115745513\nleaf_count:20\"",
                                                            "name": "leaf21",
                                                            "leaf_index": 21.0,
                                                            "leaf_value": 0.005627148115745513,
                                                            "size": 0.005627148115745513,
                                                            "leaf_count": 20,
                                                            "id": "leaf21"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:13\nleaf_value:0.0003293133032472678\nleaf_count:118\"",
                                            "name": "leaf13",
                                            "leaf_index": 13.0,
                                            "leaf_value": 0.0003293133032472678,
                                            "size": 0.0003293133032472678,
                                            "leaf_count": 118,
                                            "id": "leaf13"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.016723367424702654\ninternal_value:0.005281915308035641\ninternal_count:574\"",
                            "name": "split14",
                            "split_feature_name": "daytime",
                            "threshold": 15.250000000000002,
                            "split_gain": 0.016723367424702654,
                            "internal_value": 0.005281915308035641,
                            "internal_count": 574,
                            "id": "split14",
                            "children": [
                                {
                                    "label": "\"leaf_index:2\nleaf_value:0.0003109777181404719\nleaf_count:494\"",
                                    "name": "leaf2",
                                    "leaf_index": 2.0,
                                    "leaf_value": 0.0003109777181404719,
                                    "size": 0.0003109777181404719,
                                    "leaf_count": 494,
                                    "id": "leaf2"
                                },
                                {
                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.012485789600759743\nsplit_gain:0.0157759910555533\ninternal_value:0.018694868239981587\ninternal_count:80\"",
                                    "name": "split15",
                                    "split_feature_name": "high2_2_5",
                                    "threshold": -0.012485789600759743,
                                    "split_gain": 0.0157759910555533,
                                    "internal_value": 0.018694868239981587,
                                    "internal_count": 80,
                                    "id": "split15",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:15\nleaf_value:0.00035562339408725903\nleaf_count:37\"",
                                            "name": "leaf15",
                                            "leaf_index": 15.0,
                                            "leaf_value": 0.00035562339408725903,
                                            "size": 0.00035562339408725903,
                                            "leaf_count": 37,
                                            "id": "leaf15"
                                        },
                                        {
                                            "label": "\"split_feature_name:high2_5_30\nthreshold:-0.007017625961452722\nsplit_gain:0.01215763005326776\ninternal_value:0.031721134962470726\ninternal_count:43\"",
                                            "name": "split21",
                                            "split_feature_name": "high2_5_30",
                                            "threshold": -0.007017625961452722,
                                            "split_gain": 0.01215763005326776,
                                            "internal_value": 0.031721134962470726,
                                            "internal_count": 43,
                                            "id": "split21",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:16\nleaf_value:0.004975293797906489\nleaf_count:20\"",
                                                    "name": "leaf16",
                                                    "leaf_index": 16.0,
                                                    "leaf_value": 0.004975293797906489,
                                                    "size": 0.004975293797906489,
                                                    "leaf_count": 20,
                                                    "id": "leaf16"
                                                },
                                                {
                                                    "label": "\"leaf_index:22\nleaf_value:0.0016041306252388852\nleaf_count:23\"",
                                                    "name": "leaf22",
                                                    "leaf_index": 22.0,
                                                    "leaf_value": 0.0016041306252388852,
                                                    "size": 0.0016041306252388852,
                                                    "leaf_count": 23,
                                                    "id": "leaf22"
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
                    "label": "\"split_feature_name:day_delta\nthreshold:-0.052631556987762444\nsplit_gain:0.026941825415222793\ninternal_value:-0.0002316947713598987\ninternal_count:39508\"",
                    "name": "split3",
                    "split_feature_name": "day_delta",
                    "threshold": -0.052631556987762444,
                    "split_gain": 0.026941825415222793,
                    "internal_value": -0.0002316947713598987,
                    "internal_count": 39508,
                    "id": "split3",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.028124585056504555\ninternal_value:0.0023334590514878994\ninternal_count:3710\"",
                            "name": "split6",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.028124585056504555,
                            "internal_value": 0.0023334590514878994,
                            "internal_count": 3710,
                            "id": "split6",
                            "children": [
                                {
                                    "label": "\"split_feature_name:stk5_30\nthreshold:0.2079393267631531\nsplit_gain:0.011618053373984971\ninternal_value:0.01264287058362051\ninternal_count:247\"",
                                    "name": "split23",
                                    "split_feature_name": "stk5_30",
                                    "threshold": 0.2079393267631531,
                                    "split_gain": 0.011618053373984971,
                                    "internal_value": 0.01264287058362051,
                                    "internal_count": 247,
                                    "id": "split23",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:9033.722656250002\nsplit_gain:0.01033619580834802\ninternal_value:0.010341366636042425\ninternal_count:222\"",
                                            "name": "split24",
                                            "split_feature_name": "avg_dolvol1_2",
                                            "threshold": 9033.722656250002,
                                            "split_gain": 0.01033619580834802,
                                            "internal_value": 0.010341366636042425,
                                            "internal_count": 222,
                                            "id": "split24",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:1\nleaf_value:-0.0001000164075699335\nleaf_count:59\"",
                                                    "name": "leaf1",
                                                    "leaf_index": 1.0,
                                                    "leaf_value": -0.0001000164075699335,
                                                    "size": -0.0001000164075699335,
                                                    "leaf_count": 59,
                                                    "id": "leaf1"
                                                },
                                                {
                                                    "label": "\"leaf_index:25\nleaf_value:0.0014446583274034842\nleaf_count:163\"",
                                                    "name": "leaf25",
                                                    "leaf_index": 25.0,
                                                    "leaf_value": 0.0014446583274034842,
                                                    "size": 0.0014446583274034842,
                                                    "leaf_count": 163,
                                                    "id": "leaf25"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:24\nleaf_value:0.0033080225638113915\nleaf_count:25\"",
                                            "name": "leaf24",
                                            "leaf_index": 24.0,
                                            "leaf_value": 0.0033080225638113915,
                                            "size": 0.0033080225638113915,
                                            "leaf_count": 25,
                                            "id": "leaf24"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.02017205977952296\ninternal_value:0.0015981357340068842\ninternal_count:3463\"",
                                    "name": "split11",
                                    "split_feature_name": "daytime",
                                    "threshold": 15.250000000000002,
                                    "split_gain": 0.02017205977952296,
                                    "internal_value": 0.0015981357340068842,
                                    "internal_count": 3463,
                                    "id": "split11",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:7\nleaf_value:8.253789166891775e-05\nleaf_count:3141\"",
                                            "name": "leaf7",
                                            "leaf_index": 7.0,
                                            "leaf_value": 8.253789166891775e-05,
                                            "size": 8.253789166891775e-05,
                                            "leaf_count": 3141,
                                            "id": "leaf7"
                                        },
                                        {
                                            "label": "\"leaf_index:12\nleaf_value:0.0009136114501692963\nleaf_count:322\"",
                                            "name": "leaf12",
                                            "leaf_index": 12.0,
                                            "leaf_value": 0.0009136114501692963,
                                            "size": 0.0009136114501692963,
                                            "leaf_count": 322,
                                            "id": "leaf12"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.028416074135765433\ninternal_value:-0.0004975398097074413\ninternal_count:35798\"",
                            "name": "split4",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.028416074135765433,
                            "internal_value": -0.0004975398097074413,
                            "internal_count": 35798,
                            "id": "split4",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:0.06454187631607057\nsplit_gain:0.09221656635296765\ninternal_value:-0.0035332266898463758\ninternal_count:2839\"",
                                    "name": "split5",
                                    "split_feature_name": "day_delta",
                                    "threshold": 0.06454187631607057,
                                    "split_gain": 0.09221656635296765,
                                    "internal_value": -0.0035332266898463758,
                                    "internal_count": 2839,
                                    "id": "split5",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:-0.0009280443191528319\nsplit_gain:0.027883885900881585\ninternal_value:-0.0021450238049910966\ninternal_count:2680\"",
                                            "name": "split7",
                                            "split_feature_name": "day_delta",
                                            "threshold": -0.0009280443191528319,
                                            "split_gain": 0.027883885900881585,
                                            "internal_value": -0.0021450238049910966,
                                            "internal_count": 2680,
                                            "id": "split7",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:4\nleaf_value:0.00013969057951423262\nleaf_count:1215\"",
                                                    "name": "leaf4",
                                                    "leaf_index": 4.0,
                                                    "leaf_value": 0.00013969057951423262,
                                                    "size": 0.00013969057951423262,
                                                    "leaf_count": 1215,
                                                    "id": "leaf4"
                                                },
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:109607.00781250001\nsplit_gain:0.013696155213407751\ninternal_value:-0.005082528558685369\ninternal_count:1465\"",
                                                    "name": "split16",
                                                    "split_feature_name": "avg_dolvol1_2",
                                                    "threshold": 109607.00781250001,
                                                    "split_gain": 0.013696155213407751,
                                                    "internal_value": -0.005082528558685369,
                                                    "internal_count": 1465,
                                                    "id": "split16",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:8\nleaf_value:-0.0004211349921629956\nleaf_count:1355\"",
                                                            "name": "leaf8",
                                                            "leaf_index": 8.0,
                                                            "leaf_value": -0.0004211349921629956,
                                                            "size": -0.0004211349921629956,
                                                            "leaf_count": 1355,
                                                            "id": "leaf8"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:17\nleaf_value:-0.0015813865406049778\nleaf_count:110\"",
                                                            "name": "leaf17",
                                                            "leaf_index": 17.0,
                                                            "leaf_value": -0.0015813865406049778,
                                                            "size": -0.0015813865406049778,
                                                            "leaf_count": 110,
                                                            "id": "leaf17"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:19054.894531250004\nsplit_gain:0.023881575107585262\ninternal_value:-0.02693186651004856\ninternal_count:159\"",
                                            "name": "split8",
                                            "split_feature_name": "avg_dolvol5_30",
                                            "threshold": 19054.894531250004,
                                            "split_gain": 0.023881575107585262,
                                            "internal_value": -0.02693186651004856,
                                            "internal_count": 159,
                                            "id": "split8",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:low2_5_30\nthreshold:0.03365058079361916\nsplit_gain:0.010192940173129487\ninternal_value:-0.010976495192893307\ninternal_count:59\"",
                                                    "name": "split25",
                                                    "split_feature_name": "low2_5_30",
                                                    "threshold": 0.03365058079361916,
                                                    "split_gain": 0.010192940173129487,
                                                    "internal_value": -0.010976495192893307,
                                                    "internal_count": 59,
                                                    "id": "split25",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:6\nleaf_value:-0.0020389026334249557\nleaf_count:39\"",
                                                            "name": "leaf6",
                                                            "leaf_index": 6.0,
                                                            "leaf_value": -0.0020389026334249557,
                                                            "size": -0.0020389026334249557,
                                                            "leaf_count": 39,
                                                            "id": "leaf6"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:26\nleaf_value:0.0007377940532751382\nleaf_count:20\"",
                                                            "name": "leaf26",
                                                            "leaf_index": 26.0,
                                                            "leaf_value": 0.0007377940532751382,
                                                            "size": 0.0007377940532751382,
                                                            "leaf_count": 20,
                                                            "id": "leaf26"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:0.13767567276954654\nsplit_gain:0.02270097286118336\ninternal_value:-0.03634553558717016\ninternal_count:100\"",
                                                    "name": "split9",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": 0.13767567276954654,
                                                    "split_gain": 0.02270097286118336,
                                                    "internal_value": -0.03634553558717016,
                                                    "internal_count": 100,
                                                    "id": "split9",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:9\nleaf_value:-0.0027646690288092943\nleaf_count:75\"",
                                                            "name": "leaf9",
                                                            "leaf_index": 9.0,
                                                            "leaf_value": -0.0027646690288092943,
                                                            "size": -0.0027646690288092943,
                                                            "leaf_count": 75,
                                                            "id": "leaf9"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:10\nleaf_value:-0.006244207148440182\nleaf_count:25\"",
                                                            "name": "leaf10",
                                                            "leaf_index": 10.0,
                                                            "leaf_value": -0.006244207148440182,
                                                            "size": -0.006244207148440182,
                                                            "leaf_count": 25,
                                                            "id": "leaf10"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:low2_2_5\nthreshold:-0.02030001766979694\nsplit_gain:0.012929342030120338\ninternal_value:-0.00023605387103471352\ninternal_count:32959\"",
                                    "name": "split17",
                                    "split_feature_name": "low2_2_5",
                                    "threshold": -0.02030001766979694,
                                    "split_gain": 0.012929342030120338,
                                    "internal_value": -0.00023605387103471352,
                                    "internal_count": 32959,
                                    "id": "split17",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:22792.256835937504\nsplit_gain:0.010069673995747045\ninternal_value:-0.001653971775700082\ninternal_count:5381\"",
                                            "name": "split26",
                                            "split_feature_name": "avg_dolvol2_5",
                                            "threshold": 22792.256835937504,
                                            "split_gain": 0.010069673995747045,
                                            "internal_value": -0.001653971775700082,
                                            "internal_count": 5381,
                                            "id": "split26",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:5\nleaf_value:-0.0002661335460419151\nleaf_count:3489\"",
                                                    "name": "leaf5",
                                                    "leaf_index": 5.0,
                                                    "leaf_value": -0.0002661335460419151,
                                                    "size": -0.0002661335460419151,
                                                    "leaf_count": 3489,
                                                    "id": "leaf5"
                                                },
                                                {
                                                    "label": "\"split_feature_name:high2_5_30\nthreshold:0.15364186465740207\nsplit_gain:0.009821898622880621\ninternal_value:0.00020368778877392975\ninternal_count:1892\"",
                                                    "name": "split29",
                                                    "split_feature_name": "high2_5_30",
                                                    "threshold": 0.15364186465740207,
                                                    "split_gain": 0.009821898622880621,
                                                    "internal_value": 0.00020368778877392975,
                                                    "internal_count": 1892,
                                                    "id": "split29",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:27\nleaf_value:-8.358734518900989e-05\nleaf_count:1566\"",
                                                            "name": "leaf27",
                                                            "leaf_index": 27.0,
                                                            "leaf_value": -8.358734518900989e-05,
                                                            "size": -8.358734518900989e-05,
                                                            "leaf_count": 1566,
                                                            "id": "leaf27"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:30\nleaf_value:0.0005197408349755122\nleaf_count:326\"",
                                                            "name": "leaf30",
                                                            "leaf_index": 30.0,
                                                            "leaf_value": 0.0005197408349755122,
                                                            "size": 0.0005197408349755122,
                                                            "leaf_count": 326,
                                                            "id": "leaf30"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:stk1_2\nthreshold:-0.11558269336819647\nsplit_gain:0.011747182510629553\ninternal_value:4.0609275132678884e-05\ninternal_count:27578\"",
                                            "name": "split22",
                                            "split_feature_name": "stk1_2",
                                            "threshold": -0.11558269336819647,
                                            "split_gain": 0.011747182510629553,
                                            "internal_value": 4.0609275132678884e-05,
                                            "internal_count": 27578,
                                            "id": "split22",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:21923.119140625004\nsplit_gain:0.010016498824680989\ninternal_value:0.010039474572349563\ninternal_count:117\"",
                                                    "name": "split28",
                                                    "split_feature_name": "avg_dolvol5_30",
                                                    "threshold": 21923.119140625004,
                                                    "split_gain": 0.010016498824680989,
                                                    "internal_value": 0.010039474572349563,
                                                    "internal_count": 117,
                                                    "id": "split28",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:18\nleaf_value:0.002038422572122027\nleaf_count:52\"",
                                                            "name": "leaf18",
                                                            "leaf_index": 18.0,
                                                            "leaf_value": 0.002038422572122027,
                                                            "size": 0.002038422572122027,
                                                            "leaf_count": 52,
                                                            "id": "leaf18"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:29\nleaf_value:0.0001763673653252996\nleaf_count:65\"",
                                                            "name": "leaf29",
                                                            "leaf_index": 29.0,
                                                            "leaf_value": 0.0001763673653252996,
                                                            "size": 0.0001763673653252996,
                                                            "leaf_count": 65,
                                                            "id": "leaf29"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.1258849576115608\nsplit_gain:0.010068463563260858\ninternal_value:-1.991767792719874e-06\ninternal_count:27461\"",
                                                    "name": "split27",
                                                    "split_feature_name": "low2_5_30",
                                                    "threshold": -0.1258849576115608,
                                                    "split_gain": 0.010068463563260858,
                                                    "internal_value": -1.991767792719874e-06,
                                                    "internal_count": 27461,
                                                    "id": "split27",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:23\nleaf_value:-0.00028774743393424925\nleaf_count:1166\"",
                                                            "name": "leaf23",
                                                            "leaf_index": 23.0,
                                                            "leaf_value": -0.00028774743393424925,
                                                            "size": -0.00028774743393424925,
                                                            "leaf_count": 1166,
                                                            "id": "leaf23"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:28\nleaf_value:1.2551584500161496e-05\nleaf_count:26295\"",
                                                            "name": "leaf28",
                                                            "leaf_index": 28.0,
                                                            "leaf_value": 1.2551584500161496e-05,
                                                            "size": 1.2551584500161496e-05,
                                                            "leaf_count": 26295,
                                                            "id": "leaf28"
                                                        }
                                                    ]
                                                }
                                            ]
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
                "split14": ">"
            },
            "split2": {
                "split12": ">"
            },
            "split10": {
                "leaf11": ">"
            },
            "split12": {
                "leaf13": ">"
            },
            "split13": {
                "split20": ">"
            },
            "split18": {
                "split19": ">"
            },
            "split19": {
                "leaf20": ">"
            },
            "split20": {
                "leaf21": ">"
            },
            "split14": {
                "split15": ">"
            },
            "split15": {
                "split21": ">"
            },
            "split21": {
                "leaf22": ">"
            },
            "split3": {
                "split4": ">"
            },
            "split6": {
                "split11": ">"
            },
            "split23": {
                "leaf24": ">"
            },
            "split24": {
                "leaf25": ">"
            },
            "split11": {
                "leaf12": ">"
            },
            "split4": {
                "split17": ">"
            },
            "split5": {
                "split8": ">"
            },
            "split7": {
                "split16": ">"
            },
            "split16": {
                "leaf17": ">"
            },
            "split8": {
                "split9": ">"
            },
            "split25": {
                "leaf26": ">"
            },
            "split9": {
                "leaf10": ">"
            },
            "split17": {
                "split22": ">"
            },
            "split26": {
                "split29": ">"
            },
            "split29": {
                "leaf30": ">"
            },
            "split22": {
                "split27": ">"
            },
            "split28": {
                "leaf29": ">"
            },
            "split27": {
                "leaf28": ">"
            }
        }
    },
    "6": {
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.0811910033226013\nsplit_gain:0.07628774562532949\ninternal_value:0\ninternal_count:40420\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.0811910033226013,
            "split_gain": 0.07628774562532949,
            "internal_value": 0.0,
            "internal_count": 40420,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.039455820956920074\ninternal_value:0.005242896043248779\ninternal_count:2597\"",
                    "name": "split1",
                    "split_feature_name": "daytime",
                    "threshold": 9.750000000000002,
                    "split_gain": 0.039455820956920074,
                    "internal_value": 0.005242896043248779,
                    "internal_count": 2597,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:stk2_5\nthreshold:0.04502972587943078\nsplit_gain:0.011436250003534001\ninternal_value:0.022504083435965834\ninternal_count:126\"",
                            "name": "split24",
                            "split_feature_name": "stk2_5",
                            "threshold": 0.04502972587943078,
                            "split_gain": 0.011436250003534001,
                            "internal_value": 0.022504083435965834,
                            "internal_count": 126,
                            "id": "split24",
                            "children": [
                                {
                                    "label": "\"split_feature_name:stk2_5\nthreshold:-0.022218869067728516\nsplit_gain:0.012636852353555973\ninternal_value:0.01812229687969263\ninternal_count:104\"",
                                    "name": "split25",
                                    "split_feature_name": "stk2_5",
                                    "threshold": -0.022218869067728516,
                                    "split_gain": 0.012636852353555973,
                                    "internal_value": 0.01812229687969263,
                                    "internal_count": 104,
                                    "id": "split25",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:0\nleaf_value:0.004071287947444944\nleaf_count:20\"",
                                            "name": "leaf0",
                                            "leaf_index": 0.0,
                                            "leaf_value": 0.004071287947444944,
                                            "size": 0.004071287947444944,
                                            "leaf_count": 20,
                                            "id": "leaf0"
                                        },
                                        {
                                            "label": "\"leaf_index:26\nleaf_value:0.0012743586738083866\nleaf_count:84\"",
                                            "name": "leaf26",
                                            "leaf_index": 26.0,
                                            "leaf_value": 0.0012743586738083866,
                                            "size": 0.0012743586738083866,
                                            "leaf_count": 84,
                                            "id": "leaf26"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"leaf_index:25\nleaf_value:0.004321798352016644\nleaf_count:22\"",
                                    "name": "leaf25",
                                    "leaf_index": 25.0,
                                    "leaf_value": 0.004321798352016644,
                                    "size": 0.004321798352016644,
                                    "leaf_count": 22,
                                    "id": "leaf25"
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.042665693233713185\ninternal_value:0.0043627221818637735\ninternal_count:2471\"",
                            "name": "split2",
                            "split_feature_name": "daytime",
                            "threshold": 15.250000000000002,
                            "split_gain": 0.042665693233713185,
                            "internal_value": 0.0043627221818637735,
                            "internal_count": 2471,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.02345656510442495\nsplit_gain:0.029317086522751605\ninternal_value:0.002946991044658077\ninternal_count:2214\"",
                                    "name": "split3",
                                    "split_feature_name": "high2_2_5",
                                    "threshold": -0.02345656510442495,
                                    "split_gain": 0.029317086522751605,
                                    "internal_value": 0.002946991044658077,
                                    "internal_count": 2214,
                                    "id": "split3",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:vol1_10\nthreshold:1.9770268201828005\nsplit_gain:0.02616651041924399\ninternal_value:0.007664104321190101\ninternal_count:826\"",
                                            "name": "split4",
                                            "split_feature_name": "vol1_10",
                                            "threshold": 1.9770268201828005,
                                            "split_gain": 0.02616651041924399,
                                            "internal_value": 0.007664104321190101,
                                            "internal_count": 826,
                                            "id": "split4",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:stk1_2\nthreshold:0.04135162010788918\nsplit_gain:0.011235769438437536\ninternal_value:0.00659047906603651\ninternal_count:797\"",
                                                    "name": "split26",
                                                    "split_feature_name": "stk1_2",
                                                    "threshold": 0.04135162010788918,
                                                    "split_gain": 0.011235769438437536,
                                                    "internal_value": 0.00659047906603651,
                                                    "internal_count": 797,
                                                    "id": "split26",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:2\nleaf_value:0.0009763075371024229\nleaf_count:465\"",
                                                            "name": "leaf2",
                                                            "leaf_index": 2.0,
                                                            "leaf_value": 0.0009763075371024229,
                                                            "size": 0.0009763075371024229,
                                                            "leaf_count": 465,
                                                            "id": "leaf2"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:27\nleaf_value:0.00021469330364603398\nleaf_count:332\"",
                                                            "name": "leaf27",
                                                            "leaf_index": 27.0,
                                                            "leaf_value": 0.00021469330364603398,
                                                            "size": 0.00021469330364603398,
                                                            "leaf_count": 332,
                                                            "id": "leaf27"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:5\nleaf_value:0.0037170288057652595\nleaf_count:29\"",
                                                    "name": "leaf5",
                                                    "leaf_index": 5.0,
                                                    "leaf_value": 0.0037170288057652595,
                                                    "size": 0.0037170288057652595,
                                                    "leaf_count": 29,
                                                    "id": "leaf5"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:4\nleaf_value:1.3983285559795336e-05\nleaf_count:1388\"",
                                            "name": "leaf4",
                                            "leaf_index": 4.0,
                                            "leaf_value": 1.3983285559795336e-05,
                                            "size": 1.3983285559795336e-05,
                                            "leaf_count": 1388,
                                            "id": "leaf4"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:dayofweek\nthreshold:3.5000000000000004\nsplit_gain:0.014082948291220337\ninternal_value:0.01655894295141012\ninternal_count:257\"",
                                    "name": "split15",
                                    "split_feature_name": "dayofweek",
                                    "threshold": 3.5000000000000004,
                                    "split_gain": 0.014082948291220337,
                                    "internal_value": 0.01655894295141012,
                                    "internal_count": 257,
                                    "id": "split15",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:stk1_2\nthreshold:0.025508694350719455\nsplit_gain:0.013065506098300705\ninternal_value:0.012785801543656156\ninternal_count:204\"",
                                            "name": "split18",
                                            "split_feature_name": "stk1_2",
                                            "threshold": 0.025508694350719455,
                                            "split_gain": 0.013065506098300705,
                                            "internal_value": 0.012785801543656156,
                                            "internal_count": 204,
                                            "id": "split18",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:224927.30468750003\nsplit_gain:0.017689784467675426\ninternal_value:0.016738158004112092\ninternal_count:164\"",
                                                    "name": "split19",
                                                    "split_feature_name": "avg_dolvol2_5",
                                                    "threshold": 224927.30468750003,
                                                    "split_gain": 0.017689784467675426,
                                                    "internal_value": 0.016738158004112092,
                                                    "internal_count": 164,
                                                    "id": "split19",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:3\nleaf_value:0.0012867604292700384\nleaf_count:144\"",
                                                            "name": "leaf3",
                                                            "leaf_index": 3.0,
                                                            "leaf_value": 0.0012867604292700384,
                                                            "size": 0.0012867604292700384,
                                                            "leaf_count": 144,
                                                            "id": "leaf3"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:20\nleaf_value:0.00446061447262764\nleaf_count:20\"",
                                                            "name": "leaf20",
                                                            "leaf_index": 20.0,
                                                            "leaf_value": 0.00446061447262764,
                                                            "size": 0.00446061447262764,
                                                            "leaf_count": 20,
                                                            "id": "leaf20"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:19\nleaf_value:-0.0003418859944213182\nleaf_count:40\"",
                                                    "name": "leaf19",
                                                    "leaf_index": 19.0,
                                                    "leaf_value": -0.0003418859944213182,
                                                    "size": -0.0003418859944213182,
                                                    "leaf_count": 40,
                                                    "id": "leaf19"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:high2_5_30\nthreshold:-0.010323592927306889\nsplit_gain:0.011569983002828736\ninternal_value:0.031081977803897078\ninternal_count:53\"",
                                            "name": "split23",
                                            "split_feature_name": "high2_5_30",
                                            "threshold": -0.010323592927306889,
                                            "split_gain": 0.011569983002828736,
                                            "internal_value": 0.031081977803897078,
                                            "internal_count": 53,
                                            "id": "split23",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:16\nleaf_value:0.004732331577300405\nleaf_count:24\"",
                                                    "name": "leaf16",
                                                    "leaf_index": 16.0,
                                                    "leaf_value": 0.004732331577300405,
                                                    "size": 0.004732331577300405,
                                                    "leaf_count": 24,
                                                    "id": "leaf16"
                                                },
                                                {
                                                    "label": "\"leaf_index:24\nleaf_value:0.0017640870519118898\nleaf_count:29\"",
                                                    "name": "leaf24",
                                                    "leaf_index": 24.0,
                                                    "leaf_value": 0.0017640870519118898,
                                                    "size": 0.0017640870519118898,
                                                    "leaf_count": 29,
                                                    "id": "leaf24"
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
                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.31598722934722895\nsplit_gain:0.02121468406478251\ninternal_value:-0.0003599873498202927\ninternal_count:37823\"",
                    "name": "split5",
                    "split_feature_name": "low2_5_30",
                    "threshold": -0.31598722934722895,
                    "split_gain": 0.02121468406478251,
                    "internal_value": -0.0003599873498202927,
                    "internal_count": 37823,
                    "id": "split5",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:10.750000000000002\nsplit_gain:0.013031509422038023\ninternal_value:-0.009047760389868563\ninternal_count:279\"",
                            "name": "split20",
                            "split_feature_name": "daytime",
                            "threshold": 10.750000000000002,
                            "split_gain": 0.013031509422038023,
                            "internal_value": -0.009047760389868563,
                            "internal_count": 279,
                            "id": "split20",
                            "children": [
                                {
                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.003106000833213329\nsplit_gain:0.014096260650113906\ninternal_value:-0.01663354685541708\ninternal_count:125\"",
                                    "name": "split21",
                                    "split_feature_name": "high2_2_5",
                                    "threshold": -0.003106000833213329,
                                    "split_gain": 0.014096260650113906,
                                    "internal_value": -0.01663354685541708,
                                    "internal_count": 125,
                                    "id": "split21",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:1\nleaf_value:-0.0007962903465183141\nleaf_count:75\"",
                                            "name": "leaf1",
                                            "leaf_index": 1.0,
                                            "leaf_value": -0.0007962903465183141,
                                            "size": -0.0007962903465183141,
                                            "leaf_count": 75,
                                            "id": "leaf1"
                                        },
                                        {
                                            "label": "\"split_feature_name:vol1_10\nthreshold:0.42505101859569555\nsplit_gain:0.023569487635166288\ninternal_value:-0.029639511940767988\ninternal_count:50\"",
                                            "name": "split22",
                                            "split_feature_name": "vol1_10",
                                            "threshold": 0.42505101859569555,
                                            "split_gain": 0.023569487635166288,
                                            "internal_value": -0.029639511940767988,
                                            "internal_count": 50,
                                            "id": "split22",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:22\nleaf_value:-0.005316334197034493\nleaf_count:23\"",
                                                    "name": "leaf22",
                                                    "leaf_index": 22.0,
                                                    "leaf_value": -0.005316334197034493,
                                                    "size": -0.005316334197034493,
                                                    "leaf_count": 23,
                                                    "id": "leaf22"
                                                },
                                                {
                                                    "label": "\"leaf_index:23\nleaf_value:-0.0009600693767424673\nleaf_count:27\"",
                                                    "name": "leaf23",
                                                    "leaf_index": 23.0,
                                                    "leaf_value": -0.0009600693767424673,
                                                    "size": -0.0009600693767424673,
                                                    "leaf_count": 27,
                                                    "id": "leaf23"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"leaf_index:21\nleaf_value:-0.00028904661808194413\nleaf_count:154\"",
                                    "name": "leaf21",
                                    "leaf_index": 21.0,
                                    "leaf_value": -0.00028904661808194413,
                                    "size": -0.00028904661808194413,
                                    "leaf_count": 154,
                                    "id": "leaf21"
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.014978573883130283\ninternal_value:-0.00029542607030363314\ninternal_count:37544\"",
                            "name": "split6",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.014978573883130283,
                            "internal_value": -0.00029542607030363314,
                            "internal_count": 37544,
                            "id": "split6",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:0.04907092452049256\nsplit_gain:0.06242749106612635\ninternal_value:-0.002464004770438976\ninternal_count:2936\"",
                                    "name": "split7",
                                    "split_feature_name": "day_delta",
                                    "threshold": 0.04907092452049256,
                                    "split_gain": 0.06242749106612635,
                                    "internal_value": -0.002464004770438976,
                                    "internal_count": 2936,
                                    "id": "split7",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:-0.021235704421997067\nsplit_gain:0.023726605921000093\ninternal_value:-0.0010418999838621911\ninternal_count:2681\"",
                                            "name": "split8",
                                            "split_feature_name": "day_delta",
                                            "threshold": -0.021235704421997067,
                                            "split_gain": 0.023726605921000093,
                                            "internal_value": -0.0010418999838621911,
                                            "internal_count": 2681,
                                            "id": "split8",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:6\nleaf_value:0.0004376327209705919\nleaf_count:621\"",
                                                    "name": "leaf6",
                                                    "leaf_index": 6.0,
                                                    "leaf_value": 0.0004376327209705919,
                                                    "size": 0.0004376327209705919,
                                                    "leaf_count": 621,
                                                    "id": "leaf6"
                                                },
                                                {
                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.02592978626489639\nsplit_gain:0.01121916030107037\ninternal_value:-0.0026752587640591794\ninternal_count:2060\"",
                                                    "name": "split27",
                                                    "split_feature_name": "high2_2_5",
                                                    "threshold": -0.02592978626489639,
                                                    "split_gain": 0.01121916030107037,
                                                    "internal_value": -0.0026752587640591794,
                                                    "internal_count": 2060,
                                                    "id": "split27",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:9\nleaf_value:-0.0012796046630403279\nleaf_count:104\"",
                                                            "name": "leaf9",
                                                            "leaf_index": 9.0,
                                                            "leaf_value": -0.0012796046630403279,
                                                            "size": -0.0012796046630403279,
                                                            "leaf_count": 104,
                                                            "id": "leaf9"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:28\nleaf_value:-0.00021371391638036653\nleaf_count:1956\"",
                                                            "name": "leaf28",
                                                            "leaf_index": 28.0,
                                                            "leaf_value": -0.00021371391638036653,
                                                            "size": -0.00021371391638036653,
                                                            "leaf_count": 1956,
                                                            "id": "leaf28"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:11730.573730468752\nsplit_gain:0.017963293989778126\ninternal_value:-0.017415624114801177\ninternal_count:255\"",
                                            "name": "split9",
                                            "split_feature_name": "avg_dolvol1_2",
                                            "threshold": 11730.573730468752,
                                            "split_gain": 0.017963293989778126,
                                            "internal_value": -0.017415624114801177,
                                            "internal_count": 255,
                                            "id": "split9",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:8\nleaf_value:-0.0005649944306432464\nleaf_count:86\"",
                                                    "name": "leaf8",
                                                    "leaf_index": 8.0,
                                                    "leaf_value": -0.0005649944306432464,
                                                    "size": -0.0005649944306432464,
                                                    "leaf_count": 86,
                                                    "id": "leaf8"
                                                },
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:0.1255769729614258\nsplit_gain:0.01623476642087733\ninternal_value:-0.023402893129710698\ninternal_count:169\"",
                                                    "name": "split10",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": 0.1255769729614258,
                                                    "split_gain": 0.01623476642087733,
                                                    "internal_value": -0.023402893129710698,
                                                    "internal_count": 169,
                                                    "id": "split10",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:10\nleaf_value:-0.0019319055859947792\nleaf_count:144\"",
                                                            "name": "leaf10",
                                                            "leaf_index": 10.0,
                                                            "leaf_value": -0.0019319055859947792,
                                                            "size": -0.0019319055859947792,
                                                            "leaf_count": 144,
                                                            "id": "leaf10"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:11\nleaf_value:-0.004692579580354505\nleaf_count:25\"",
                                                            "name": "leaf11",
                                                            "leaf_index": 11.0,
                                                            "leaf_value": -0.004692579580354505,
                                                            "size": -0.004692579580354505,
                                                            "leaf_count": 25,
                                                            "id": "leaf11"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:high2_2_5\nthreshold:0.03486881777644158\nsplit_gain:0.015376706842203592\ninternal_value:-0.00011145279639016318\ninternal_count:34608\"",
                                    "name": "split11",
                                    "split_feature_name": "high2_2_5",
                                    "threshold": 0.03486881777644158,
                                    "split_gain": 0.015376706842203592,
                                    "internal_value": -0.00011145279639016318,
                                    "internal_count": 34608,
                                    "id": "split11",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:7\nleaf_value:-3.5944869017716166e-05\nleaf_count:30400\"",
                                            "name": "leaf7",
                                            "leaf_index": 7.0,
                                            "leaf_value": -3.5944869017716166e-05,
                                            "size": -3.5944869017716166e-05,
                                            "leaf_count": 30400,
                                            "id": "leaf7"
                                        },
                                        {
                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:24366.466796875004\nsplit_gain:0.021761007529357838\ninternal_value:0.0016801525199417646\ninternal_count:4208\"",
                                            "name": "split12",
                                            "split_feature_name": "avg_dolvol5_30",
                                            "threshold": 24366.466796875004,
                                            "split_gain": 0.021761007529357838,
                                            "internal_value": 0.0016801525199417646,
                                            "internal_count": 4208,
                                            "id": "split12",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:daytime\nthreshold:11.250000000000002\nsplit_gain:0.017887054526544155\ninternal_value:0.003449677048015937\ninternal_count:2621\"",
                                                    "name": "split13",
                                                    "split_feature_name": "daytime",
                                                    "threshold": 11.250000000000002,
                                                    "split_gain": 0.017887054526544155,
                                                    "internal_value": 0.003449677048015937,
                                                    "internal_count": 2621,
                                                    "id": "split13",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:stk2_5\nthreshold:-0.12172824889421462\nsplit_gain:0.010187386497571635\ninternal_value:0.00011015253827217428\ninternal_count:995\"",
                                                            "name": "split28",
                                                            "split_feature_name": "stk2_5",
                                                            "threshold": -0.12172824889421462,
                                                            "split_gain": 0.010187386497571635,
                                                            "internal_value": 0.00011015253827217428,
                                                            "internal_count": 995,
                                                            "id": "split28",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:12\nleaf_value:-0.0016647818885810143\nleaf_count:35\"",
                                                                    "name": "leaf12",
                                                                    "leaf_index": 12.0,
                                                                    "leaf_value": -0.0016647818885810143,
                                                                    "size": -0.0016647818885810143,
                                                                    "leaf_count": 35,
                                                                    "id": "leaf12"
                                                                },
                                                                {
                                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:0.1295633912086487\nsplit_gain:0.01113818167794467\ninternal_value:0.000721120246441842\ninternal_count:960\"",
                                                                    "name": "split29",
                                                                    "split_feature_name": "high2_2_5",
                                                                    "threshold": 0.1295633912086487,
                                                                    "split_gain": 0.01113818167794467,
                                                                    "internal_value": 0.000721120246441842,
                                                                    "internal_count": 960,
                                                                    "id": "split29",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:29\nleaf_value:1.52810939814781e-05\nleaf_count:934\"",
                                                                            "name": "leaf29",
                                                                            "leaf_index": 29.0,
                                                                            "leaf_value": 1.52810939814781e-05,
                                                                            "size": 1.52810939814781e-05,
                                                                            "leaf_count": 934,
                                                                            "id": "leaf29"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:30\nleaf_value:0.002113653918450627\nleaf_count:26\"",
                                                                            "name": "leaf30",
                                                                            "leaf_index": 30.0,
                                                                            "leaf_value": 0.002113653918450627,
                                                                            "size": 0.002113653918450627,
                                                                            "leaf_count": 26,
                                                                            "id": "leaf30"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:stk2_5\nthreshold:-0.15822401642799375\nsplit_gain:0.015191765541878718\ninternal_value:0.005493236019230601\ninternal_count:1626\"",
                                                            "name": "split14",
                                                            "split_feature_name": "stk2_5",
                                                            "threshold": -0.15822401642799375,
                                                            "split_gain": 0.015191765541878718,
                                                            "internal_value": 0.005493236019230601,
                                                            "internal_count": 1626,
                                                            "id": "split14",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:14\nleaf_value:0.0030466165396319414\nleaf_count:24\"",
                                                                    "name": "leaf14",
                                                                    "leaf_index": 14.0,
                                                                    "leaf_value": 0.0030466165396319414,
                                                                    "size": 0.0030466165396319414,
                                                                    "leaf_count": 24,
                                                                    "id": "leaf14"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:15\nleaf_value:0.0005119109736427773\nleaf_count:1602\"",
                                                                    "name": "leaf15",
                                                                    "leaf_index": 15.0,
                                                                    "leaf_value": 0.0005119109736427773,
                                                                    "size": 0.0005119109736427773,
                                                                    "leaf_count": 1602,
                                                                    "id": "leaf15"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:stk2_5\nthreshold:-0.07025957480072974\nsplit_gain:0.013676460965140571\ninternal_value:-0.0012422947315279304\ninternal_count:1587\"",
                                                    "name": "split16",
                                                    "split_feature_name": "stk2_5",
                                                    "threshold": -0.07025957480072974,
                                                    "split_gain": 0.013676460965140571,
                                                    "internal_value": -0.0012422947315279304,
                                                    "internal_count": 1587,
                                                    "id": "split16",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:13\nleaf_value:0.00038062773341257267\nleaf_count:401\"",
                                                            "name": "leaf13",
                                                            "leaf_index": 13.0,
                                                            "leaf_value": 0.00038062773341257267,
                                                            "size": 0.00038062773341257267,
                                                            "leaf_count": 401,
                                                            "id": "leaf13"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:day_delta\nthreshold:0.07520949840545656\nsplit_gain:0.01449827146675528\ninternal_value:-0.0029492739881275226\ninternal_count:1186\"",
                                                            "name": "split17",
                                                            "split_feature_name": "day_delta",
                                                            "threshold": 0.07520949840545656,
                                                            "split_gain": 0.01449827146675528,
                                                            "internal_value": -0.0029492739881275226,
                                                            "internal_count": 1186,
                                                            "id": "split17",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:17\nleaf_value:-6.456571801718251e-05\nleaf_count:827\"",
                                                                    "name": "leaf17",
                                                                    "leaf_index": 17.0,
                                                                    "leaf_value": -6.456571801718251e-05,
                                                                    "size": -6.456571801718251e-05,
                                                                    "leaf_count": 827,
                                                                    "id": "leaf17"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:18\nleaf_value:-0.000825593443430959\nleaf_count:359\"",
                                                                    "name": "leaf18",
                                                                    "leaf_index": 18.0,
                                                                    "leaf_value": -0.000825593443430959,
                                                                    "size": -0.000825593443430959,
                                                                    "leaf_count": 359,
                                                                    "id": "leaf18"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
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
                "split5": ">"
            },
            "split1": {
                "split2": ">"
            },
            "split24": {
                "leaf25": ">"
            },
            "split25": {
                "leaf26": ">"
            },
            "split2": {
                "split15": ">"
            },
            "split3": {
                "leaf4": ">"
            },
            "split4": {
                "leaf5": ">"
            },
            "split26": {
                "leaf27": ">"
            },
            "split15": {
                "split23": ">"
            },
            "split18": {
                "leaf19": ">"
            },
            "split19": {
                "leaf20": ">"
            },
            "split23": {
                "leaf24": ">"
            },
            "split5": {
                "split6": ">"
            },
            "split20": {
                "leaf21": ">"
            },
            "split21": {
                "split22": ">"
            },
            "split22": {
                "leaf23": ">"
            },
            "split6": {
                "split11": ">"
            },
            "split7": {
                "split9": ">"
            },
            "split8": {
                "split27": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split9": {
                "split10": ">"
            },
            "split10": {
                "leaf11": ">"
            },
            "split11": {
                "split12": ">"
            },
            "split12": {
                "split16": ">"
            },
            "split13": {
                "split14": ">"
            },
            "split28": {
                "split29": ">"
            },
            "split29": {
                "leaf30": ">"
            },
            "split14": {
                "leaf15": ">"
            },
            "split16": {
                "split17": ">"
            },
            "split17": {
                "leaf18": ">"
            }
        }
    },
    "7": {
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.1472342014312744\nsplit_gain:0.065900978208454\ninternal_value:0\ninternal_count:40420\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.1472342014312744,
            "split_gain": 0.065900978208454,
            "internal_value": 0.0,
            "internal_count": 40420,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.1094386801123619\nsplit_gain:0.027944707880393327\ninternal_value:0.008404132275436973\ninternal_count:912\"",
                    "name": "split1",
                    "split_feature_name": "high2_2_5",
                    "threshold": -0.1094386801123619,
                    "split_gain": 0.027944707880393327,
                    "internal_value": 0.008404132275436973,
                    "internal_count": 912,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:stk1_2\nthreshold:0.07421001419425012\nsplit_gain:0.030180928463291228\ninternal_value:0.023049537337532167\ninternal_count:114\"",
                            "name": "split2",
                            "split_feature_name": "stk1_2",
                            "threshold": 0.07421001419425012,
                            "split_gain": 0.030180928463291228,
                            "internal_value": 0.023049537337532167,
                            "internal_count": 114,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"split_feature_name:stk5_30\nthreshold:0.041984515264630325\nsplit_gain:0.01238266919641895\ninternal_value:0.043957360532827845\ninternal_count:43\"",
                                    "name": "split16",
                                    "split_feature_name": "stk5_30",
                                    "threshold": 0.041984515264630325,
                                    "split_gain": 0.01238266919641895,
                                    "internal_value": 0.043957360532827845,
                                    "internal_count": 43,
                                    "id": "split16",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:0\nleaf_value:0.002813307949058388\nleaf_count:23\"",
                                            "name": "leaf0",
                                            "leaf_index": 0.0,
                                            "leaf_value": 0.002813307949058388,
                                            "size": 0.002813307949058388,
                                            "leaf_count": 23,
                                            "id": "leaf0"
                                        },
                                        {
                                            "label": "\"leaf_index:17\nleaf_value:0.0062155283731408426\nleaf_count:20\"",
                                            "name": "leaf17",
                                            "leaf_index": 17.0,
                                            "leaf_value": 0.0062155283731408426,
                                            "size": 0.0062155283731408426,
                                            "leaf_count": 20,
                                            "id": "leaf17"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:vol1_10\nthreshold:1.0989267230033877\nsplit_gain:0.010212311751712416\ninternal_value:0.010387052867141828\ninternal_count:71\"",
                                    "name": "split28",
                                    "split_feature_name": "vol1_10",
                                    "threshold": 1.0989267230033877,
                                    "split_gain": 0.010212311751712416,
                                    "internal_value": 0.010387052867141828,
                                    "internal_count": 71,
                                    "id": "split28",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:3\nleaf_value:4.213665878134115e-05\nleaf_count:42\"",
                                            "name": "leaf3",
                                            "leaf_index": 3.0,
                                            "leaf_value": 4.213665878134115e-05,
                                            "size": 4.213665878134115e-05,
                                            "leaf_count": 42,
                                            "id": "leaf3"
                                        },
                                        {
                                            "label": "\"leaf_index:29\nleaf_value:0.0024820115754445055\nleaf_count:29\"",
                                            "name": "leaf29",
                                            "leaf_index": 29.0,
                                            "leaf_value": 0.0024820115754445055,
                                            "size": 0.0024820115754445055,
                                            "leaf_count": 29,
                                            "id": "leaf29"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.024107823982652786\ninternal_value:0.006311931552280518\ninternal_count:798\"",
                            "name": "split3",
                            "split_feature_name": "daytime",
                            "threshold": 15.250000000000002,
                            "split_gain": 0.024107823982652786,
                            "internal_value": 0.006311931552280518,
                            "internal_count": 798,
                            "id": "split3",
                            "children": [
                                {
                                    "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:1379.2614746093752\nsplit_gain:0.01078333717068381\ninternal_value:0.004160748113794545\ninternal_count:692\"",
                                    "name": "split21",
                                    "split_feature_name": "avg_dolvol5_30",
                                    "threshold": 1379.2614746093752,
                                    "split_gain": 0.01078333717068381,
                                    "internal_value": 0.004160748113794545,
                                    "internal_count": 692,
                                    "id": "split21",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:2\nleaf_value:-0.0018721209873910996\nleaf_count:20\"",
                                            "name": "leaf2",
                                            "leaf_index": 2.0,
                                            "leaf_value": -0.0018721209873910996,
                                            "size": -0.0018721209873910996,
                                            "leaf_count": 20,
                                            "id": "leaf2"
                                        },
                                        {
                                            "label": "\"leaf_index:22\nleaf_value:0.0004841758768190543\nleaf_count:672\"",
                                            "name": "leaf22",
                                            "leaf_index": 22.0,
                                            "leaf_value": 0.0004841758768190543,
                                            "size": 0.0004841758768190543,
                                            "leaf_count": 672,
                                            "id": "leaf22"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:high2_5_30\nthreshold:-0.0852154456079006\nsplit_gain:0.0128103942969581\ninternal_value:0.02035550645258517\ninternal_count:106\"",
                                    "name": "split14",
                                    "split_feature_name": "high2_5_30",
                                    "threshold": -0.0852154456079006,
                                    "split_gain": 0.0128103942969581,
                                    "internal_value": 0.02035550645258517,
                                    "internal_count": 106,
                                    "id": "split14",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:4\nleaf_value:0.004315171092748642\nleaf_count:20\"",
                                            "name": "leaf4",
                                            "leaf_index": 4.0,
                                            "leaf_value": 0.004315171092748642,
                                            "size": 0.004315171092748642,
                                            "leaf_count": 20,
                                            "id": "leaf4"
                                        },
                                        {
                                            "label": "\"leaf_index:15\nleaf_value:0.0015054063551445346\nleaf_count:86\"",
                                            "name": "leaf15",
                                            "leaf_index": 15.0,
                                            "leaf_value": 0.0015054063551445346,
                                            "size": 0.0015054063551445346,
                                            "leaf_count": 86,
                                            "id": "leaf15"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "\"split_feature_name:day_delta\nthreshold:-0.015094339847564696\nsplit_gain:0.021302674082340003\ninternal_value:-0.0001940004224691249\ninternal_count:39508\"",
                    "name": "split4",
                    "split_feature_name": "day_delta",
                    "threshold": -0.015094339847564696,
                    "split_gain": 0.021302674082340003,
                    "internal_value": -0.0001940004224691249,
                    "internal_count": 39508,
                    "id": "split4",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.020435179564599205\ninternal_value:0.0009624414972872794\ninternal_count:11352\"",
                            "name": "split8",
                            "split_feature_name": "daytime",
                            "threshold": 15.250000000000002,
                            "split_gain": 0.020435179564599205,
                            "internal_value": 0.0009624414972872794,
                            "internal_count": 11352,
                            "id": "split8",
                            "children": [
                                {
                                    "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.016659943805290862\ninternal_value:0.0005868396663061302\ninternal_count:10527\"",
                                    "name": "split10",
                                    "split_feature_name": "daytime",
                                    "threshold": 9.750000000000002,
                                    "split_gain": 0.016659943805290862,
                                    "internal_value": 0.0005868396663061302,
                                    "internal_count": 10527,
                                    "id": "split10",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:-0.0811910033226013\nsplit_gain:0.015286819315292098\ninternal_value:0.004647229004160118\ninternal_count:922\"",
                                            "name": "split11",
                                            "split_feature_name": "day_delta",
                                            "threshold": -0.0811910033226013,
                                            "split_gain": 0.015286819315292098,
                                            "internal_value": 0.004647229004160118,
                                            "internal_count": 922,
                                            "id": "split11",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:1\nleaf_value:0.0016321479679027107\nleaf_count:100\"",
                                                    "name": "leaf1",
                                                    "leaf_index": 1.0,
                                                    "leaf_value": 0.0016321479679027107,
                                                    "size": 0.0016321479679027107,
                                                    "leaf_count": 100,
                                                    "id": "leaf1"
                                                },
                                                {
                                                    "label": "\"leaf_index:12\nleaf_value:0.00032270038612322604\nleaf_count:822\"",
                                                    "name": "leaf12",
                                                    "leaf_index": 12.0,
                                                    "leaf_value": 0.00032270038612322604,
                                                    "size": 0.00032270038612322604,
                                                    "leaf_count": 822,
                                                    "id": "leaf12"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:11\nleaf_value:1.9707610883591928e-05\nleaf_count:9605\"",
                                            "name": "leaf11",
                                            "leaf_index": 11.0,
                                            "leaf_value": 1.9707610883591928e-05,
                                            "size": 1.9707610883591928e-05,
                                            "leaf_count": 9605,
                                            "id": "leaf11"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:dayofweek\nthreshold:3.5000000000000004\nsplit_gain:0.017239679568956286\ninternal_value:0.005755120860606742\ninternal_count:825\"",
                                    "name": "split9",
                                    "split_feature_name": "dayofweek",
                                    "threshold": 3.5000000000000004,
                                    "split_gain": 0.017239679568956286,
                                    "internal_value": 0.005755120860606742,
                                    "internal_count": 825,
                                    "id": "split9",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:high2_5_30\nthreshold:-0.0040035154670476905\nsplit_gain:0.011614404154624084\ninternal_value:0.00333167136124294\ninternal_count:644\"",
                                            "name": "split18",
                                            "split_feature_name": "high2_5_30",
                                            "threshold": -0.0040035154670476905,
                                            "split_gain": 0.011614404154624084,
                                            "internal_value": 0.00333167136124294,
                                            "internal_count": 644,
                                            "id": "split18",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:low2_2_5\nthreshold:-0.034053105860948556\nsplit_gain:0.013549691121612452\ninternal_value:0.012587223642705274\ninternal_count:112\"",
                                                    "name": "split19",
                                                    "split_feature_name": "low2_2_5",
                                                    "threshold": -0.034053105860948556,
                                                    "split_gain": 0.013549691121612452,
                                                    "internal_value": 0.012587223642705274,
                                                    "internal_count": 112,
                                                    "id": "split19",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:9\nleaf_value:-0.0002761764401312623\nleaf_count:38\"",
                                                            "name": "leaf9",
                                                            "leaf_index": 9.0,
                                                            "leaf_value": -0.0002761764401312623,
                                                            "size": -0.0002761764401312623,
                                                            "leaf_count": 38,
                                                            "id": "leaf9"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:20\nleaf_value:0.0020469136422065818\nleaf_count:74\"",
                                                            "name": "leaf20",
                                                            "leaf_index": 20.0,
                                                            "leaf_value": 0.0020469136422065818,
                                                            "size": 0.0020469136422065818,
                                                            "leaf_count": 74,
                                                            "id": "leaf20"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:19\nleaf_value:0.0001383134038829817\nleaf_count:532\"",
                                                    "name": "leaf19",
                                                    "leaf_index": 19.0,
                                                    "leaf_value": 0.0001383134038829817,
                                                    "size": 0.0001383134038829817,
                                                    "leaf_count": 532,
                                                    "id": "leaf19"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:vol1_10\nthreshold:-0.4962718933820724\nsplit_gain:0.012256590740588401\ninternal_value:0.014377780957790657\ninternal_count:181\"",
                                            "name": "split17",
                                            "split_feature_name": "vol1_10",
                                            "threshold": -0.4962718933820724,
                                            "split_gain": 0.012256590740588401,
                                            "internal_value": 0.014377780957790657,
                                            "internal_count": 181,
                                            "id": "split17",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_5_30\nthreshold:0.024390508420765403\nsplit_gain:0.010590490790771429\ninternal_value:0.024050162249630757\ninternal_count:76\"",
                                                    "name": "split22",
                                                    "split_feature_name": "high2_5_30",
                                                    "threshold": 0.024390508420765403,
                                                    "split_gain": 0.010590490790771429,
                                                    "internal_value": 0.024050162249630757,
                                                    "internal_count": 76,
                                                    "id": "split22",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:10\nleaf_value:0.0015287519835306294\nleaf_count:49\"",
                                                            "name": "leaf10",
                                                            "leaf_index": 10.0,
                                                            "leaf_value": 0.0015287519835306294,
                                                            "size": 0.0015287519835306294,
                                                            "leaf_count": 49,
                                                            "id": "leaf10"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:23\nleaf_value:0.003995273552007145\nleaf_count:27\"",
                                                            "name": "leaf23",
                                                            "leaf_index": 23.0,
                                                            "leaf_value": 0.003995273552007145,
                                                            "size": 0.003995273552007145,
                                                            "leaf_count": 27,
                                                            "id": "leaf23"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:18\nleaf_value:0.0007376819260839729\nleaf_count:105\"",
                                                    "name": "leaf18",
                                                    "leaf_index": 18.0,
                                                    "leaf_value": 0.0007376819260839729,
                                                    "size": 0.0007376819260839729,
                                                    "leaf_count": 105,
                                                    "id": "leaf18"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.03599337351786476\ninternal_value:-0.000660257301041177\ninternal_count:28156\"",
                            "name": "split5",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.03599337351786476,
                            "internal_value": -0.000660257301041177,
                            "internal_count": 28156,
                            "id": "split5",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:0.06454187631607057\nsplit_gain:0.05326424018812279\ninternal_value:-0.004578731750898391\ninternal_count:2164\"",
                                    "name": "split6",
                                    "split_feature_name": "day_delta",
                                    "threshold": 0.06454187631607057,
                                    "split_gain": 0.05326424018812279,
                                    "internal_value": -0.004578731750898391,
                                    "internal_count": 2164,
                                    "id": "split6",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:0.034182608127594\nsplit_gain:0.011163765613596898\ninternal_value:-0.0031816217110511268\ninternal_count:2005\"",
                                            "name": "split20",
                                            "split_feature_name": "day_delta",
                                            "threshold": 0.034182608127594,
                                            "split_gain": 0.011163765613596898,
                                            "internal_value": -0.0031816217110511268,
                                            "internal_count": 2005,
                                            "id": "split20",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:5\nleaf_value:-0.00022607556243457667\nleaf_count:1740\"",
                                                    "name": "leaf5",
                                                    "leaf_index": 5.0,
                                                    "leaf_value": -0.00022607556243457667,
                                                    "size": -0.00022607556243457667,
                                                    "leaf_count": 1740,
                                                    "id": "leaf5"
                                                },
                                                {
                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:0.009302461054176094\nsplit_gain:0.010505690231114355\ninternal_value:-0.009228063186022172\ninternal_count:265\"",
                                                    "name": "split23",
                                                    "split_feature_name": "high2_2_5",
                                                    "threshold": 0.009302461054176094,
                                                    "split_gain": 0.010505690231114355,
                                                    "internal_value": -0.009228063186022172,
                                                    "internal_count": 265,
                                                    "id": "split23",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:21\nleaf_value:-0.0022966347509835667\nleaf_count:46\"",
                                                            "name": "leaf21",
                                                            "leaf_index": 21.0,
                                                            "leaf_value": -0.0022966347509835667,
                                                            "size": -0.0022966347509835667,
                                                            "leaf_count": 46,
                                                            "id": "leaf21"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:24\nleaf_value:-0.0006342396159102443\nleaf_count:219\"",
                                                            "name": "leaf24",
                                                            "leaf_index": 24.0,
                                                            "leaf_value": -0.0006342396159102443,
                                                            "size": -0.0006342396159102443,
                                                            "leaf_count": 219,
                                                            "id": "leaf24"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.13176617771387097\nsplit_gain:0.020489706687054285\ninternal_value:-0.022196377221928357\ninternal_count:159\"",
                                            "name": "split7",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.13176617771387097,
                                            "split_gain": 0.020489706687054285,
                                            "internal_value": -0.022196377221928357,
                                            "internal_count": 159,
                                            "id": "split7",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:7\nleaf_value:-0.004729641597993948\nleaf_count:27\"",
                                                    "name": "leaf7",
                                                    "leaf_index": 7.0,
                                                    "leaf_value": -0.004729641597993948,
                                                    "size": -0.004729641597993948,
                                                    "leaf_count": 27,
                                                    "id": "leaf7"
                                                },
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:95359.27734375001\nsplit_gain:0.012549999341290231\ninternal_value:-0.017062278385062447\ninternal_count:132\"",
                                                    "name": "split15",
                                                    "split_feature_name": "avg_dolvol2_5",
                                                    "threshold": 95359.27734375001,
                                                    "split_gain": 0.012549999341290231,
                                                    "internal_value": -0.017062278385062447,
                                                    "internal_count": 132,
                                                    "id": "split15",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:8\nleaf_value:-0.0012821134135781512\nleaf_count:111\"",
                                                            "name": "leaf8",
                                                            "leaf_index": 8.0,
                                                            "leaf_value": -0.0012821134135781512,
                                                            "size": -0.0012821134135781512,
                                                            "leaf_count": 111,
                                                            "id": "leaf8"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:16\nleaf_value:-0.0039479755131261686\nleaf_count:21\"",
                                                            "name": "leaf16",
                                                            "leaf_index": 16.0,
                                                            "leaf_value": -0.0039479755131261686,
                                                            "size": -0.0039479755131261686,
                                                            "leaf_count": 21,
                                                            "id": "leaf16"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.0490236859768629\nsplit_gain:0.01475971980565654\ninternal_value:-0.00033401927743810647\ninternal_count:25992\"",
                                    "name": "split12",
                                    "split_feature_name": "low2_5_30",
                                    "threshold": -0.0490236859768629,
                                    "split_gain": 0.01475971980565654,
                                    "internal_value": -0.00033401927743810647,
                                    "internal_count": 25992,
                                    "id": "split12",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:high2_2_5\nthreshold:0.1295633912086487\nsplit_gain:0.01342942091798811\ninternal_value:-0.001997198985270512\ninternal_count:4427\"",
                                            "name": "split13",
                                            "split_feature_name": "high2_2_5",
                                            "threshold": 0.1295633912086487,
                                            "split_gain": 0.01342942091798811,
                                            "internal_value": -0.001997198985270512,
                                            "internal_count": 4427,
                                            "id": "split13",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:6\nleaf_value:-0.00022211463986294866\nleaf_count:4355\"",
                                                    "name": "leaf6",
                                                    "leaf_index": 6.0,
                                                    "leaf_value": -0.00022211463986294866,
                                                    "size": -0.00022211463986294866,
                                                    "leaf_count": 4355,
                                                    "id": "leaf6"
                                                },
                                                {
                                                    "label": "\"split_feature_name:vol1_10\nthreshold:0.40720497071743017\nsplit_gain:0.01038973444366826\ninternal_value:0.011548509142206361\ninternal_count:72\"",
                                                    "name": "split27",
                                                    "split_feature_name": "vol1_10",
                                                    "threshold": 0.40720497071743017,
                                                    "split_gain": 0.01038973444366826,
                                                    "internal_value": 0.011548509142206361,
                                                    "internal_count": 72,
                                                    "id": "split27",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:14\nleaf_value:-0.00035100458065114384\nleaf_count:28\"",
                                                            "name": "leaf14",
                                                            "leaf_index": 14.0,
                                                            "leaf_value": -0.00035100458065114384,
                                                            "size": -0.00035100458065114384,
                                                            "leaf_count": 28,
                                                            "id": "leaf14"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:28\nleaf_value:0.002113122592775405\nleaf_count:44\"",
                                                            "name": "leaf28",
                                                            "leaf_index": 28.0,
                                                            "leaf_value": 0.002113122592775405,
                                                            "size": 0.002113122592775405,
                                                            "leaf_count": 44,
                                                            "id": "leaf28"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:high2_2_5\nthreshold:0.009950317908078434\nsplit_gain:0.010461827521793752\ninternal_value:7.408803553039291e-06\ninternal_count:21565\"",
                                            "name": "split24",
                                            "split_feature_name": "high2_2_5",
                                            "threshold": 0.009950317908078434,
                                            "split_gain": 0.010461827521793752,
                                            "internal_value": 7.408803553039291e-06,
                                            "internal_count": 21565,
                                            "id": "split24",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:13\nleaf_value:-7.221531480941024e-05\nleaf_count:10283\"",
                                                    "name": "leaf13",
                                                    "leaf_index": 13.0,
                                                    "leaf_value": -7.221531480941024e-05,
                                                    "size": -7.221531480941024e-05,
                                                    "leaf_count": 10283,
                                                    "id": "leaf13"
                                                },
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:17241.819335937504\nsplit_gain:0.012541817797860694\ninternal_value:0.0006723694088346878\ninternal_count:11282\"",
                                                    "name": "split25",
                                                    "split_feature_name": "avg_dolvol5_30",
                                                    "threshold": 17241.819335937504,
                                                    "split_gain": 0.012541817797860694,
                                                    "internal_value": 0.0006723694088346878,
                                                    "internal_count": 11282,
                                                    "id": "split25",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.011748565363985745\ninternal_value:0.0014700675768378336\ninternal_count:7175\"",
                                                            "name": "split26",
                                                            "split_feature_name": "daytime",
                                                            "threshold": 15.250000000000002,
                                                            "split_gain": 0.011748565363985745,
                                                            "internal_value": 0.0014700675768378336,
                                                            "internal_count": 7175,
                                                            "id": "split26",
                                                            "children": [
                                                                {
                                                                    "label": "\"split_feature_name:stk5_30\nthreshold:0.11022726073861124\nsplit_gain:0.009610569831613187\ninternal_value:0.0011390572229441824\ninternal_count:6725\"",
                                                                    "name": "split29",
                                                                    "split_feature_name": "stk5_30",
                                                                    "threshold": 0.11022726073861124,
                                                                    "split_gain": 0.009610569831613187,
                                                                    "internal_value": 0.0011390572229441824,
                                                                    "internal_count": 6725,
                                                                    "id": "split29",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:25\nleaf_value:0.00010721502980783232\nleaf_count:6704\"",
                                                                            "name": "leaf25",
                                                                            "leaf_index": 25.0,
                                                                            "leaf_value": 0.00010721502980783232,
                                                                            "size": 0.00010721502980783232,
                                                                            "leaf_count": 6704,
                                                                            "id": "leaf25"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:30\nleaf_value:0.0022498296475359464\nleaf_count:21\"",
                                                                            "name": "leaf30",
                                                                            "leaf_index": 30.0,
                                                                            "leaf_value": 0.0022498296475359464,
                                                                            "size": 0.0022498296475359464,
                                                                            "leaf_count": 21,
                                                                            "id": "leaf30"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:27\nleaf_value:0.0006416833421137401\nleaf_count:450\"",
                                                                    "name": "leaf27",
                                                                    "leaf_index": 27.0,
                                                                    "leaf_value": 0.0006416833421137401,
                                                                    "size": 0.0006416833421137401,
                                                                    "leaf_count": 450,
                                                                    "id": "leaf27"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:26\nleaf_value:-7.212230809200167e-05\nleaf_count:4107\"",
                                                            "name": "leaf26",
                                                            "leaf_index": 26.0,
                                                            "leaf_value": -7.212230809200167e-05,
                                                            "size": -7.212230809200167e-05,
                                                            "leaf_count": 4107,
                                                            "id": "leaf26"
                                                        }
                                                    ]
                                                }
                                            ]
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
                "split4": ">"
            },
            "split1": {
                "split3": ">"
            },
            "split2": {
                "split28": ">"
            },
            "split16": {
                "leaf17": ">"
            },
            "split28": {
                "leaf29": ">"
            },
            "split3": {
                "split14": ">"
            },
            "split21": {
                "leaf22": ">"
            },
            "split14": {
                "leaf15": ">"
            },
            "split4": {
                "split5": ">"
            },
            "split8": {
                "split9": ">"
            },
            "split10": {
                "leaf11": ">"
            },
            "split11": {
                "leaf12": ">"
            },
            "split9": {
                "split17": ">"
            },
            "split18": {
                "leaf19": ">"
            },
            "split19": {
                "leaf20": ">"
            },
            "split17": {
                "leaf18": ">"
            },
            "split22": {
                "leaf23": ">"
            },
            "split5": {
                "split12": ">"
            },
            "split6": {
                "split7": ">"
            },
            "split20": {
                "split23": ">"
            },
            "split23": {
                "leaf24": ">"
            },
            "split7": {
                "split15": ">"
            },
            "split15": {
                "leaf16": ">"
            },
            "split12": {
                "split24": ">"
            },
            "split13": {
                "split27": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split24": {
                "split25": ">"
            },
            "split25": {
                "leaf26": ">"
            },
            "split26": {
                "leaf27": ">"
            },
            "split29": {
                "leaf30": ">"
            }
        }
    },
    "8": {
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.1472342014312744\nsplit_gain:0.05337979481610944\ninternal_value:0\ninternal_count:40420\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.1472342014312744,
            "split_gain": 0.05337979481610944,
            "internal_value": 0.0,
            "internal_count": 40420,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.04151302762329578\nsplit_gain:0.023196838353676627\ninternal_value:0.007563719242739353\ninternal_count:912\"",
                    "name": "split1",
                    "split_feature_name": "high2_2_5",
                    "threshold": -0.04151302762329578,
                    "split_gain": 0.023196838353676627,
                    "internal_value": 0.007563719242739353,
                    "internal_count": 912,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:stk1_2\nthreshold:-0.005620659328997134\nsplit_gain:0.03274588477331937\ninternal_value:0.014135976807493218\ninternal_count:338\"",
                            "name": "split2",
                            "split_feature_name": "stk1_2",
                            "threshold": -0.005620659328997134,
                            "split_gain": 0.03274588477331937,
                            "internal_value": 0.014135976807493218,
                            "internal_count": 338,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"leaf_index:0\nleaf_value:0.0047541503764309545\nleaf_count:27\"",
                                    "name": "leaf0",
                                    "leaf_index": 0.0,
                                    "leaf_value": 0.0047541503764309545,
                                    "size": 0.0047541503764309545,
                                    "leaf_count": 27,
                                    "id": "leaf0"
                                },
                                {
                                    "label": "\"split_feature_name:stk2_5\nthreshold:0.13443949818611148\nsplit_gain:0.01772782761509898\ninternal_value:0.01123581851863778\ninternal_count:311\"",
                                    "name": "split3",
                                    "split_feature_name": "stk2_5",
                                    "threshold": 0.13443949818611148,
                                    "split_gain": 0.01772782761509898,
                                    "internal_value": 0.01123581851863778,
                                    "internal_count": 311,
                                    "id": "split3",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:daytime\nthreshold:13.250000000000002\nsplit_gain:0.01259292682157443\ninternal_value:0.015003235896359232\ninternal_count:249\"",
                                            "name": "split15",
                                            "split_feature_name": "daytime",
                                            "threshold": 13.250000000000002,
                                            "split_gain": 0.01259292682157443,
                                            "internal_value": 0.015003235896359232,
                                            "internal_count": 249,
                                            "id": "split15",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:stk1_2\nthreshold:0.021040333434939388\nsplit_gain:0.010043028640419453\ninternal_value:0.009512344658828508\ninternal_count:156\"",
                                                    "name": "split21",
                                                    "split_feature_name": "stk1_2",
                                                    "threshold": 0.021040333434939388,
                                                    "split_gain": 0.010043028640419453,
                                                    "internal_value": 0.009512344658828508,
                                                    "internal_count": 156,
                                                    "id": "split21",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:3\nleaf_value:0.0026303203591819986\nleaf_count:29\"",
                                                            "name": "leaf3",
                                                            "leaf_index": 3.0,
                                                            "leaf_value": 0.0026303203591819986,
                                                            "size": 0.0026303203591819986,
                                                            "leaf_count": 29,
                                                            "id": "leaf3"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:22\nleaf_value:0.0005678211516649353\nleaf_count:127\"",
                                                            "name": "leaf22",
                                                            "leaf_index": 22.0,
                                                            "leaf_value": 0.0005678211516649353,
                                                            "size": 0.0005678211516649353,
                                                            "leaf_count": 127,
                                                            "id": "leaf22"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:dayofweek\nthreshold:9.999999682655225e-21\nsplit_gain:0.015379948593853082\ninternal_value:0.02421376313350754\ninternal_count:93\"",
                                                    "name": "split16",
                                                    "split_feature_name": "dayofweek",
                                                    "threshold": 9.999999682655225e-21,
                                                    "split_gain": 0.015379948593853082,
                                                    "internal_value": 0.02421376313350754,
                                                    "internal_count": 93,
                                                    "id": "split16",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:16\nleaf_value:0.00411541184396757\nleaf_count:34\"",
                                                            "name": "leaf16",
                                                            "leaf_index": 16.0,
                                                            "leaf_value": 0.00411541184396757,
                                                            "size": 0.00411541184396757,
                                                            "leaf_count": 34,
                                                            "id": "leaf16"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:17\nleaf_value:0.001445152448249539\nleaf_count:59\"",
                                                            "name": "leaf17",
                                                            "leaf_index": 17.0,
                                                            "leaf_value": 0.001445152448249539,
                                                            "size": 0.001445152448249539,
                                                            "leaf_count": 59,
                                                            "id": "leaf17"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:4\nleaf_value:-0.0003894615788662885\nleaf_count:62\"",
                                            "name": "leaf4",
                                            "leaf_index": 4.0,
                                            "leaf_value": -0.0003894615788662885,
                                            "size": -0.0003894615788662885,
                                            "leaf_count": 62,
                                            "id": "leaf4"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"leaf_index:2\nleaf_value:0.0003693644230741433\nleaf_count:574\"",
                            "name": "leaf2",
                            "leaf_index": 2.0,
                            "leaf_value": 0.0003693644230741433,
                            "size": 0.0003693644230741433,
                            "leaf_count": 574,
                            "id": "leaf2"
                        }
                    ]
                },
                {
                    "label": "\"split_feature_name:day_delta\nthreshold:-0.015094339847564696\nsplit_gain:0.017255165342288336\ninternal_value:-0.00017460036421215324\ninternal_count:39508\"",
                    "name": "split4",
                    "split_feature_name": "day_delta",
                    "threshold": -0.015094339847564696,
                    "split_gain": 0.017255165342288336,
                    "internal_value": -0.00017460036421215324,
                    "internal_count": 39508,
                    "id": "split4",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.016552494465575072\ninternal_value:0.0008661973435307455\ninternal_count:11352\"",
                            "name": "split8",
                            "split_feature_name": "daytime",
                            "threshold": 15.250000000000002,
                            "split_gain": 0.016552494465575072,
                            "internal_value": 0.0008661973435307455,
                            "internal_count": 11352,
                            "id": "split8",
                            "children": [
                                {
                                    "label": "\"split_feature_name:daytime\nthreshold:10.250000000000002\nsplit_gain:0.01374139481661364\ninternal_value:0.0005281557056725589\ninternal_count:10527\"",
                                    "name": "split11",
                                    "split_feature_name": "daytime",
                                    "threshold": 10.250000000000002,
                                    "split_gain": 0.01374139481661364,
                                    "internal_value": 0.0005281557056725589,
                                    "internal_count": 10527,
                                    "id": "split11",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:-0.0811910033226013\nsplit_gain:0.017457024472975164\ninternal_value:0.0030016998177378263\ninternal_count:1851\"",
                                            "name": "split12",
                                            "split_feature_name": "day_delta",
                                            "threshold": -0.0811910033226013,
                                            "split_gain": 0.017457024472975164,
                                            "internal_value": 0.0030016998177378263,
                                            "internal_count": 1851,
                                            "id": "split12",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:stk1_2\nthreshold:0.07421001419425012\nsplit_gain:0.014717742839220518\ninternal_value:0.011495447469918464\ninternal_count:214\"",
                                                    "name": "split13",
                                                    "split_feature_name": "stk1_2",
                                                    "threshold": 0.07421001419425012,
                                                    "split_gain": 0.014717742839220518,
                                                    "internal_value": 0.011495447469918464,
                                                    "internal_count": 214,
                                                    "id": "split13",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:1\nleaf_value:0.001673184875260013\nleaf_count:153\"",
                                                            "name": "leaf1",
                                                            "leaf_index": 1.0,
                                                            "leaf_value": 0.001673184875260013,
                                                            "size": 0.001673184875260013,
                                                            "leaf_count": 153,
                                                            "id": "leaf1"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:14\nleaf_value:-0.00016384770587748911\nleaf_count:61\"",
                                                            "name": "leaf14",
                                                            "leaf_index": 14.0,
                                                            "leaf_value": -0.00016384770587748911,
                                                            "size": -0.00016384770587748911,
                                                            "leaf_count": 61,
                                                            "id": "leaf14"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.04485704936087131\nsplit_gain:0.0117374197200012\ninternal_value:0.00189133818208318\ninternal_count:1637\"",
                                                    "name": "split18",
                                                    "split_feature_name": "high2_2_5",
                                                    "threshold": -0.04485704936087131,
                                                    "split_gain": 0.0117374197200012,
                                                    "internal_value": 0.00189133818208318,
                                                    "internal_count": 1637,
                                                    "id": "split18",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:13\nleaf_value:-0.0004958436453240454\nleaf_count:217\"",
                                                            "name": "leaf13",
                                                            "leaf_index": 13.0,
                                                            "leaf_value": -0.0004958436453240454,
                                                            "size": -0.0004958436453240454,
                                                            "leaf_count": 217,
                                                            "id": "leaf13"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:19\nleaf_value:0.00029380995171995384\nleaf_count:1420\"",
                                                            "name": "leaf19",
                                                            "leaf_index": 19.0,
                                                            "leaf_value": 0.00029380995171995384,
                                                            "size": 0.00029380995171995384,
                                                            "leaf_count": 1420,
                                                            "id": "leaf19"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:12\nleaf_value:4.320828702525204e-08\nleaf_count:8676\"",
                                            "name": "leaf12",
                                            "leaf_index": 12.0,
                                            "leaf_value": 4.320828702525204e-08,
                                            "size": 4.320828702525204e-08,
                                            "leaf_count": 8676,
                                            "id": "leaf12"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:dayofweek\nthreshold:3.5000000000000004\nsplit_gain:0.013964140460796144\ninternal_value:0.005179608642601207\ninternal_count:825\"",
                                    "name": "split10",
                                    "split_feature_name": "dayofweek",
                                    "threshold": 3.5000000000000004,
                                    "split_gain": 0.013964140460796144,
                                    "internal_value": 0.005179608642601207,
                                    "internal_count": 825,
                                    "id": "split10",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:high2_5_30\nthreshold:-0.0040035154670476905\nsplit_gain:0.009407667501153195\ninternal_value:0.0029985040923973835\ninternal_count:644\"",
                                            "name": "split26",
                                            "split_feature_name": "high2_5_30",
                                            "threshold": -0.0040035154670476905,
                                            "split_gain": 0.009407667501153195,
                                            "internal_value": 0.0029985040923973835,
                                            "internal_count": 644,
                                            "id": "split26",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:low2_2_5\nthreshold:-0.034053105860948556\nsplit_gain:0.010975249874067332\ninternal_value:0.011328501205883055\ninternal_count:112\"",
                                                    "name": "split27",
                                                    "split_feature_name": "low2_2_5",
                                                    "threshold": -0.034053105860948556,
                                                    "split_gain": 0.010975249874067332,
                                                    "internal_value": 0.011328501205883055,
                                                    "internal_count": 112,
                                                    "id": "split27",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:9\nleaf_value:-0.0002485588074992656\nleaf_count:38\"",
                                                            "name": "leaf9",
                                                            "leaf_index": 9.0,
                                                            "leaf_value": -0.0002485588074992656,
                                                            "size": -0.0002485588074992656,
                                                            "leaf_count": 38,
                                                            "id": "leaf9"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:28\nleaf_value:0.001842222272849491\nleaf_count:74\"",
                                                            "name": "leaf28",
                                                            "leaf_index": 28.0,
                                                            "leaf_value": 0.001842222272849491,
                                                            "size": 0.001842222272849491,
                                                            "leaf_count": 74,
                                                            "id": "leaf28"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.19293284416198728\nsplit_gain:0.008693470861551342\ninternal_value:0.0012448204895582947\ninternal_count:532\"",
                                                    "name": "split28",
                                                    "split_feature_name": "low2_5_30",
                                                    "threshold": -0.19293284416198728,
                                                    "split_gain": 0.008693470861551342,
                                                    "internal_value": 0.0012448204895582947,
                                                    "internal_count": 532,
                                                    "id": "split28",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:27\nleaf_value:-0.0014734223717823625\nleaf_count:32\"",
                                                            "name": "leaf27",
                                                            "leaf_index": 27.0,
                                                            "leaf_value": -0.0014734223717823625,
                                                            "size": -0.0014734223717823625,
                                                            "leaf_count": 32,
                                                            "id": "leaf27"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:29\nleaf_value:0.00022674793188307376\nleaf_count:500\"",
                                                            "name": "leaf29",
                                                            "leaf_index": 29.0,
                                                            "leaf_value": 0.00022674793188307376,
                                                            "size": 0.00022674793188307376,
                                                            "leaf_count": 500,
                                                            "id": "leaf29"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:vol1_10\nthreshold:-0.4962718933820724\nsplit_gain:0.0099278382257303\ninternal_value:0.012940002732829175\ninternal_count:181\"",
                                            "name": "split22",
                                            "split_feature_name": "vol1_10",
                                            "threshold": -0.4962718933820724,
                                            "split_gain": 0.0099278382257303,
                                            "internal_value": 0.012940002732829175,
                                            "internal_count": 181,
                                            "id": "split22",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_5_30\nthreshold:0.024390508420765403\nsplit_gain:0.008578297587232102\ninternal_value:0.02164514577529381\ninternal_count:76\"",
                                                    "name": "split29",
                                                    "split_feature_name": "high2_5_30",
                                                    "threshold": 0.024390508420765403,
                                                    "split_gain": 0.008578297587232102,
                                                    "internal_value": 0.02164514577529381,
                                                    "internal_count": 76,
                                                    "id": "split29",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:11\nleaf_value:0.0013758767580931855\nleaf_count:49\"",
                                                            "name": "leaf11",
                                                            "leaf_index": 11.0,
                                                            "leaf_value": 0.0013758767580931855,
                                                            "size": 0.0013758767580931855,
                                                            "leaf_count": 49,
                                                            "id": "leaf11"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:30\nleaf_value:0.0035957461757654395\nleaf_count:27\"",
                                                            "name": "leaf30",
                                                            "leaf_index": 30.0,
                                                            "leaf_value": 0.0035957461757654395,
                                                            "size": 0.0035957461757654395,
                                                            "leaf_count": 27,
                                                            "id": "leaf30"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:23\nleaf_value:0.0006639137292569061\nleaf_count:105\"",
                                                    "name": "leaf23",
                                                    "leaf_index": 23.0,
                                                    "leaf_value": 0.0006639137292569061,
                                                    "size": 0.0006639137292569061,
                                                    "leaf_count": 105,
                                                    "id": "leaf23"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.02915463226362026\ninternal_value:-0.0005942315468480883\ninternal_count:28156\"",
                            "name": "split5",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.02915463226362026,
                            "internal_value": -0.0005942315468480883,
                            "internal_count": 28156,
                            "id": "split5",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:0.1255769729614258\nsplit_gain:0.043739634203521706\ninternal_value:-0.004120858534430956\ninternal_count:2164\"",
                                    "name": "split6",
                                    "split_feature_name": "day_delta",
                                    "threshold": 0.1255769729614258,
                                    "split_gain": 0.043739634203521706,
                                    "internal_value": -0.004120858534430956,
                                    "internal_count": 2164,
                                    "id": "split6",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.2993552386760711\nsplit_gain:0.022771451130771572\ninternal_value:-0.00347316829419435\ninternal_count:2120\"",
                                            "name": "split7",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.2993552386760711,
                                            "split_gain": 0.022771451130771572,
                                            "internal_value": -0.00347316829419435,
                                            "internal_count": 2120,
                                            "id": "split7",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:5\nleaf_value:-0.003623921116204223\nleaf_count:21\"",
                                                    "name": "leaf5",
                                                    "leaf_index": 5.0,
                                                    "leaf_value": -0.003623921116204223,
                                                    "size": -0.003623921116204223,
                                                    "leaf_count": 21,
                                                    "id": "leaf5"
                                                },
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:0.034182608127594\nsplit_gain:0.016119348010833673\ninternal_value:-0.0031453517624054953\ninternal_count:2099\"",
                                                    "name": "split9",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": 0.034182608127594,
                                                    "split_gain": 0.016119348010833673,
                                                    "internal_value": -0.0031453517624054953,
                                                    "internal_count": 2099,
                                                    "id": "split9",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:8\nleaf_value:-0.00018676105819778716\nleaf_count:1731\"",
                                                            "name": "leaf8",
                                                            "leaf_index": 8.0,
                                                            "leaf_value": -0.00018676105819778716,
                                                            "size": -0.00018676105819778716,
                                                            "leaf_count": 1731,
                                                            "id": "leaf8"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:17479.580078125004\nsplit_gain:0.012890290866012347\ninternal_value:-0.009155596282297389\ninternal_count:368\"",
                                                            "name": "split14",
                                                            "split_feature_name": "avg_dolvol5_30",
                                                            "threshold": 17479.580078125004,
                                                            "split_gain": 0.012890290866012347,
                                                            "internal_value": -0.009155596282297389,
                                                            "internal_count": 368,
                                                            "id": "split14",
                                                            "children": [
                                                                {
                                                                    "label": "\"split_feature_name:low2_2_5\nthreshold:0.04249145463109017\nsplit_gain:0.011310574835475441\ninternal_value:-0.003074080531735607\ninternal_count:179\"",
                                                                    "name": "split19",
                                                                    "split_feature_name": "low2_2_5",
                                                                    "threshold": 0.04249145463109017,
                                                                    "split_gain": 0.011310574835475441,
                                                                    "internal_value": -0.003074080531735607,
                                                                    "internal_count": 179,
                                                                    "id": "split19",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:10\nleaf_value:-0.000678286969295044\nleaf_count:147\"",
                                                                            "name": "leaf10",
                                                                            "leaf_index": 10.0,
                                                                            "leaf_value": -0.000678286969295044,
                                                                            "size": -0.000678286969295044,
                                                                            "leaf_count": 147,
                                                                            "id": "leaf10"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:20\nleaf_value:0.0013963169677595035\nleaf_count:32\"",
                                                                            "name": "leaf20",
                                                                            "leaf_index": 20.0,
                                                                            "leaf_value": 0.0013963169677595035,
                                                                            "size": 0.0013963169677595035,
                                                                            "leaf_count": 32,
                                                                            "id": "leaf20"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:15\nleaf_value:-0.0014915338712723628\nleaf_count:189\"",
                                                                    "name": "leaf15",
                                                                    "leaf_index": 15.0,
                                                                    "leaf_value": -0.0014915338712723628,
                                                                    "size": -0.0014915338712723628,
                                                                    "leaf_count": 189,
                                                                    "id": "leaf15"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:48489.92773437501\nsplit_gain:0.010892184198393065\ninternal_value:-0.03532775192764926\ninternal_count:44\"",
                                            "name": "split20",
                                            "split_feature_name": "avg_dolvol5_30",
                                            "threshold": 48489.92773437501,
                                            "split_gain": 0.010892184198393065,
                                            "internal_value": -0.03532775192764926,
                                            "internal_count": 44,
                                            "id": "split20",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:7\nleaf_value:-0.001809233580133878\nleaf_count:20\"",
                                                    "name": "leaf7",
                                                    "leaf_index": 7.0,
                                                    "leaf_value": -0.001809233580133878,
                                                    "size": -0.001809233580133878,
                                                    "leaf_count": 20,
                                                    "id": "leaf7"
                                                },
                                                {
                                                    "label": "\"leaf_index:21\nleaf_value:-0.004969059869957468\nleaf_count:24\"",
                                                    "name": "leaf21",
                                                    "leaf_index": 21.0,
                                                    "leaf_value": -0.004969059869957468,
                                                    "size": -0.004969059869957468,
                                                    "leaf_count": 24,
                                                    "id": "leaf21"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.029578153975307938\nsplit_gain:0.012546646810050108\ninternal_value:-0.0003006173270447132\ninternal_count:25992\"",
                                    "name": "split17",
                                    "split_feature_name": "low2_5_30",
                                    "threshold": -0.029578153975307938,
                                    "split_gain": 0.012546646810050108,
                                    "internal_value": -0.0003006173270447132,
                                    "internal_count": 25992,
                                    "id": "split17",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:high2_2_5\nthreshold:0.1295633912086487\nsplit_gain:0.009918424457283843\ninternal_value:-0.0013700870804314212\ninternal_count:7714\"",
                                            "name": "split23",
                                            "split_feature_name": "high2_2_5",
                                            "threshold": 0.1295633912086487,
                                            "split_gain": 0.009918424457283843,
                                            "internal_value": -0.0013700870804314212,
                                            "internal_count": 7714,
                                            "id": "split23",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:6\nleaf_value:-0.0001486896107322272\nleaf_count:7633\"",
                                                    "name": "leaf6",
                                                    "leaf_index": 6.0,
                                                    "leaf_value": -0.0001486896107322272,
                                                    "size": -0.0001486896107322272,
                                                    "leaf_count": 7633,
                                                    "id": "leaf6"
                                                },
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:466511.50000000006\nsplit_gain:0.009633262839702086\ninternal_value:0.009637361095591598\ninternal_count:81\"",
                                                    "name": "split24",
                                                    "split_feature_name": "avg_dolvol2_5",
                                                    "threshold": 466511.50000000006,
                                                    "split_gain": 0.009633262839702086,
                                                    "internal_value": 0.009637361095591598,
                                                    "internal_count": 81,
                                                    "id": "split24",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:stk5_30\nthreshold:0.3943403214216233\nsplit_gain:0.009590173922067147\ninternal_value:0.0033929098968119285\ninternal_count:61\"",
                                                            "name": "split25",
                                                            "split_feature_name": "stk5_30",
                                                            "threshold": 0.3943403214216233,
                                                            "split_gain": 0.009590173922067147,
                                                            "internal_value": 0.0033929098968119285,
                                                            "internal_count": 61,
                                                            "id": "split25",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:24\nleaf_value:0.0012477973579370883\nleaf_count:40\"",
                                                                    "name": "leaf24",
                                                                    "leaf_index": 24.0,
                                                                    "leaf_value": 0.0012477973579370883,
                                                                    "size": 0.0012477973579370883,
                                                                    "leaf_count": 40,
                                                                    "id": "leaf24"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:26\nleaf_value:-0.001391197330806227\nleaf_count:21\"",
                                                                    "name": "leaf26",
                                                                    "leaf_index": 26.0,
                                                                    "leaf_value": -0.001391197330806227,
                                                                    "size": -0.001391197330806227,
                                                                    "leaf_count": 21,
                                                                    "id": "leaf26"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:25\nleaf_value:0.002868293725186959\nleaf_count:20\"",
                                                            "name": "leaf25",
                                                            "leaf_index": 25.0,
                                                            "leaf_value": 0.002868293725186959,
                                                            "size": 0.002868293725186959,
                                                            "leaf_count": 20,
                                                            "id": "leaf25"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:18\nleaf_value:1.5073893062161055e-05\nleaf_count:18278\"",
                                            "name": "leaf18",
                                            "leaf_index": 18.0,
                                            "leaf_value": 1.5073893062161055e-05,
                                            "size": 1.5073893062161055e-05,
                                            "leaf_count": 18278,
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
                "split4": ">"
            },
            "split1": {
                "leaf2": ">"
            },
            "split2": {
                "split3": ">"
            },
            "split3": {
                "leaf4": ">"
            },
            "split15": {
                "split16": ">"
            },
            "split21": {
                "leaf22": ">"
            },
            "split16": {
                "leaf17": ">"
            },
            "split4": {
                "split5": ">"
            },
            "split8": {
                "split10": ">"
            },
            "split11": {
                "leaf12": ">"
            },
            "split12": {
                "split18": ">"
            },
            "split13": {
                "leaf14": ">"
            },
            "split18": {
                "leaf19": ">"
            },
            "split10": {
                "split22": ">"
            },
            "split26": {
                "split28": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split28": {
                "leaf29": ">"
            },
            "split22": {
                "leaf23": ">"
            },
            "split29": {
                "leaf30": ">"
            },
            "split5": {
                "split17": ">"
            },
            "split6": {
                "split20": ">"
            },
            "split7": {
                "split9": ">"
            },
            "split9": {
                "split14": ">"
            },
            "split14": {
                "leaf15": ">"
            },
            "split19": {
                "leaf20": ">"
            },
            "split20": {
                "leaf21": ">"
            },
            "split17": {
                "leaf18": ">"
            },
            "split23": {
                "split24": ">"
            },
            "split24": {
                "leaf25": ">"
            },
            "split25": {
                "leaf26": ">"
            }
        }
    },
    "9": {
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.1265662312507629\nsplit_gain:0.04385872670369534\ninternal_value:0\ninternal_count:40420\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.1265662312507629,
            "split_gain": 0.04385872670369534,
            "internal_value": 0.0,
            "internal_count": 40420,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.07160226255655287\nsplit_gain:0.021977590853189566\ninternal_value:0.005907130640117714\ninternal_count:1219\"",
                    "name": "split1",
                    "split_feature_name": "high2_2_5",
                    "threshold": -0.07160226255655287,
                    "split_gain": 0.021977590853189566,
                    "internal_value": 0.005907130640117714,
                    "internal_count": 1219,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:stk1_2\nthreshold:0.002635044045746327\nsplit_gain:0.02543738066785957\ninternal_value:0.014162882213085872\ninternal_count:255\"",
                            "name": "split2",
                            "split_feature_name": "stk1_2",
                            "threshold": 0.002635044045746327,
                            "split_gain": 0.02543738066785957,
                            "internal_value": 0.014162882213085872,
                            "internal_count": 255,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"leaf_index:0\nleaf_value:0.0038796994201321573\nleaf_count:36\"",
                                    "name": "leaf0",
                                    "leaf_index": 0.0,
                                    "leaf_value": 0.0038796994201321573,
                                    "size": 0.0038796994201321573,
                                    "leaf_count": 36,
                                    "id": "leaf0"
                                },
                                {
                                    "label": "\"split_feature_name:stk2_5\nthreshold:0.07364432513713838\nsplit_gain:0.012031372607242363\ninternal_value:0.01011343914652658\ninternal_count:219\"",
                                    "name": "split11",
                                    "split_feature_name": "stk2_5",
                                    "threshold": 0.07364432513713838,
                                    "split_gain": 0.012031372607242363,
                                    "internal_value": 0.01011343914652658,
                                    "internal_count": 219,
                                    "id": "split11",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:stk1_2\nthreshold:0.06656158715486528\nsplit_gain:0.013532608363348658\ninternal_value:0.01596010521445553\ninternal_count:135\"",
                                            "name": "split12",
                                            "split_feature_name": "stk1_2",
                                            "threshold": 0.06656158715486528,
                                            "split_gain": 0.013532608363348658,
                                            "internal_value": 0.01596010521445553,
                                            "internal_count": 135,
                                            "id": "split12",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:3\nleaf_value:0.0027496104972544407\nleaf_count:58\"",
                                                    "name": "leaf3",
                                                    "leaf_index": 3.0,
                                                    "leaf_value": 0.0027496104972544407,
                                                    "size": 0.0027496104972544407,
                                                    "leaf_count": 58,
                                                    "id": "leaf3"
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.19991368055343625\nsplit_gain:0.010557985074385509\ninternal_value:0.0072706508512197475\ninternal_count:77\"",
                                                    "name": "split18",
                                                    "split_feature_name": "low2_5_30",
                                                    "threshold": -0.19991368055343625,
                                                    "split_gain": 0.010557985074385509,
                                                    "internal_value": 0.0072706508512197475,
                                                    "internal_count": 77,
                                                    "id": "split18",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:19597.375000000004\nsplit_gain:0.0137523912489596\ninternal_value:0.014206868772019158\ninternal_count:57\"",
                                                            "name": "split19",
                                                            "split_feature_name": "avg_dolvol2_5",
                                                            "threshold": 19597.375000000004,
                                                            "split_gain": 0.0137523912489596,
                                                            "internal_value": 0.014206868772019158,
                                                            "internal_count": 57,
                                                            "id": "split19",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:13\nleaf_value:0.0033092313759919747\nleaf_count:23\"",
                                                                    "name": "leaf13",
                                                                    "leaf_index": 13.0,
                                                                    "leaf_value": 0.0033092313759919747,
                                                                    "size": 0.0033092313759919747,
                                                                    "leaf_count": 23,
                                                                    "id": "leaf13"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:20\nleaf_value:0.00014314206919687636\nleaf_count:34\"",
                                                                    "name": "leaf20",
                                                                    "leaf_index": 20.0,
                                                                    "leaf_value": 0.00014314206919687636,
                                                                    "size": 0.00014314206919687636,
                                                                    "leaf_count": 34,
                                                                    "id": "leaf20"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:19\nleaf_value:-0.0012497570223058575\nleaf_count:20\"",
                                                            "name": "leaf19",
                                                            "leaf_index": 19.0,
                                                            "leaf_value": -0.0012497570223058575,
                                                            "size": -0.0012497570223058575,
                                                            "leaf_count": 20,
                                                            "id": "leaf19"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:12\nleaf_value:7.170115373550548e-05\nleaf_count:84\"",
                                            "name": "leaf12",
                                            "leaf_index": 12.0,
                                            "leaf_value": 7.170115373550548e-05,
                                            "size": 7.170115373550548e-05,
                                            "leaf_count": 84,
                                            "id": "leaf12"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.017318269544700476\ninternal_value:0.0037232959397993735\ninternal_count:964\"",
                            "name": "split3",
                            "split_feature_name": "daytime",
                            "threshold": 15.250000000000002,
                            "split_gain": 0.017318269544700476,
                            "internal_value": 0.0037232959397993735,
                            "internal_count": 964,
                            "id": "split3",
                            "children": [
                                {
                                    "label": "\"leaf_index:2\nleaf_value:0.0002079768369916834\nleaf_count:838\"",
                                    "name": "leaf2",
                                    "leaf_index": 2.0,
                                    "leaf_value": 0.0002079768369916834,
                                    "size": 0.0002079768369916834,
                                    "leaf_count": 838,
                                    "id": "leaf2"
                                },
                                {
                                    "label": "\"leaf_index:4\nleaf_value:0.0014654058666478489\nleaf_count:126\"",
                                    "name": "leaf4",
                                    "leaf_index": 4.0,
                                    "leaf_value": 0.0014654058666478489,
                                    "size": 0.0014654058666478489,
                                    "leaf_count": 126,
                                    "id": "leaf4"
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.31598722934722895\nsplit_gain:0.014428660554590153\ninternal_value:-0.00018368898592470634\ninternal_count:39201\"",
                    "name": "split4",
                    "split_feature_name": "low2_5_30",
                    "threshold": -0.31598722934722895,
                    "split_gain": 0.014428660554590153,
                    "internal_value": -0.00018368898592470634,
                    "internal_count": 39201,
                    "id": "split4",
                    "children": [
                        {
                            "label": "\"leaf_index:1\nleaf_value:-0.0006641087616252379\nleaf_count:343\"",
                            "name": "leaf1",
                            "leaf_index": 1.0,
                            "leaf_value": -0.0006641087616252379,
                            "size": -0.0006641087616252379,
                            "leaf_count": 343,
                            "id": "leaf1"
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.014226510619226636\ninternal_value:-0.0001266894560929499\ninternal_count:38858\"",
                            "name": "split5",
                            "split_feature_name": "daytime",
                            "threshold": 15.250000000000002,
                            "split_gain": 0.014226510619226636,
                            "internal_value": -0.0001266894560929499,
                            "internal_count": 38858,
                            "id": "split5",
                            "children": [
                                {
                                    "label": "\"split_feature_name:stk1_2\nthreshold:-0.11558269336819647\nsplit_gain:0.011683367405879524\ninternal_value:-0.0002964016040762531\ninternal_count:36024\"",
                                    "name": "split13",
                                    "split_feature_name": "stk1_2",
                                    "threshold": -0.11558269336819647,
                                    "split_gain": 0.011683367405879524,
                                    "internal_value": -0.0002964016040762531,
                                    "internal_count": 36024,
                                    "id": "split13",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:53249.26562500001\nsplit_gain:0.01155833801159177\ninternal_value:0.009947193489744415\ninternal_count:111\"",
                                            "name": "split14",
                                            "split_feature_name": "avg_dolvol1_2",
                                            "threshold": 53249.26562500001,
                                            "split_gain": 0.01155833801159177,
                                            "internal_value": 0.009947193489744415,
                                            "internal_count": 111,
                                            "id": "split14",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_5_30\nthreshold:0.2005359381437302\nsplit_gain:0.011459445671301416\ninternal_value:0.02253926754399965\ninternal_count:44\"",
                                                    "name": "split15",
                                                    "split_feature_name": "high2_5_30",
                                                    "threshold": 0.2005359381437302,
                                                    "split_gain": 0.011459445671301416,
                                                    "internal_value": 0.02253926754399965,
                                                    "internal_count": 44,
                                                    "id": "split15",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:5\nleaf_value:0.0005650041924257364\nleaf_count:21\"",
                                                            "name": "leaf5",
                                                            "leaf_index": 5.0,
                                                            "leaf_value": 0.0005650041924257364,
                                                            "size": 0.0005650041924257364,
                                                            "leaf_count": 21,
                                                            "id": "leaf5"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:16\nleaf_value:0.0037959864848981736\nleaf_count:23\"",
                                                            "name": "leaf16",
                                                            "leaf_index": 16.0,
                                                            "leaf_value": 0.0037959864848981736,
                                                            "size": 0.0037959864848981736,
                                                            "leaf_count": 23,
                                                            "id": "leaf16"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:15\nleaf_value:0.00016777717227708296\nleaf_count:67\"",
                                                    "name": "leaf15",
                                                    "leaf_index": 15.0,
                                                    "leaf_value": 0.00016777717227708296,
                                                    "size": 0.00016777717227708296,
                                                    "leaf_count": 67,
                                                    "id": "leaf15"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:-0.021235704421997067\nsplit_gain:0.009634252890327061\ninternal_value:-0.00032806253620150285\ninternal_count:35913\"",
                                            "name": "split20",
                                            "split_feature_name": "day_delta",
                                            "threshold": -0.021235704421997067,
                                            "split_gain": 0.009634252890327061,
                                            "internal_value": -0.00032806253620150285,
                                            "internal_count": 35913,
                                            "id": "split20",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:daytime\nthreshold:10.250000000000002\nsplit_gain:0.011482703855641404\ninternal_value:0.000609237788060894\ninternal_count:8401\"",
                                                    "name": "split24",
                                                    "split_feature_name": "daytime",
                                                    "threshold": 10.250000000000002,
                                                    "split_gain": 0.011482703855641404,
                                                    "internal_value": 0.000609237788060894,
                                                    "internal_count": 8401,
                                                    "id": "split24",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:14247.391601562502\nsplit_gain:0.010419414286448166\ninternal_value:0.0031916119316448928\ninternal_count:1429\"",
                                                            "name": "split25",
                                                            "split_feature_name": "avg_dolvol5_30",
                                                            "threshold": 14247.391601562502,
                                                            "split_gain": 0.010419414286448166,
                                                            "internal_value": 0.0031916119316448928,
                                                            "internal_count": 1429,
                                                            "id": "split25",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:14\nleaf_value:3.814076715250481e-05\nleaf_count:686\"",
                                                                    "name": "leaf14",
                                                                    "leaf_index": 14.0,
                                                                    "leaf_value": 3.814076715250481e-05,
                                                                    "size": 3.814076715250481e-05,
                                                                    "leaf_count": 686,
                                                                    "id": "leaf14"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:26\nleaf_value:0.0005786228516358505\nleaf_count:743\"",
                                                                    "name": "leaf26",
                                                                    "leaf_index": 26.0,
                                                                    "leaf_value": 0.0005786228516358505,
                                                                    "size": 0.0005786228516358505,
                                                                    "leaf_count": 743,
                                                                    "id": "leaf26"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:25\nleaf_value:7.994739058792574e-06\nleaf_count:6972\"",
                                                            "name": "leaf25",
                                                            "leaf_index": 25.0,
                                                            "leaf_value": 7.994739058792574e-06,
                                                            "size": 7.994739058792574e-06,
                                                            "leaf_count": 6972,
                                                            "id": "leaf25"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.018051881069628063\ninternal_value:-0.0006142743719142244\ninternal_count:27512\"",
                                                    "name": "split21",
                                                    "split_feature_name": "daytime",
                                                    "threshold": 9.750000000000002,
                                                    "split_gain": 0.018051881069628063,
                                                    "internal_value": -0.0006142743719142244,
                                                    "internal_count": 27512,
                                                    "id": "split21",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:day_delta\nthreshold:0.04907092452049256\nsplit_gain:0.03237075071215856\ninternal_value:-0.0032872900675572905\ninternal_count:2314\"",
                                                            "name": "split22",
                                                            "split_feature_name": "day_delta",
                                                            "threshold": 0.04907092452049256,
                                                            "split_gain": 0.03237075071215856,
                                                            "internal_value": -0.0032872900675572905,
                                                            "internal_count": 2314,
                                                            "id": "split22",
                                                            "children": [
                                                                {
                                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.02592978626489639\nsplit_gain:0.009425921332815142\ninternal_value:-0.0019739476942231926\ninternal_count:2060\"",
                                                                    "name": "split27",
                                                                    "split_feature_name": "high2_2_5",
                                                                    "threshold": -0.02592978626489639,
                                                                    "split_gain": 0.009425921332815142,
                                                                    "internal_value": -0.0019739476942231926,
                                                                    "internal_count": 2060,
                                                                    "id": "split27",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:21\nleaf_value:-0.0011250701921968497\nleaf_count:104\"",
                                                                            "name": "leaf21",
                                                                            "leaf_index": 21.0,
                                                                            "leaf_value": -0.0011250701921968497,
                                                                            "size": -0.0011250701921968497,
                                                                            "leaf_count": 104,
                                                                            "id": "leaf21"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:28\nleaf_value:-0.00014807051381467552\nleaf_count:1956\"",
                                                                            "name": "leaf28",
                                                                            "leaf_index": 28.0,
                                                                            "leaf_value": -0.00014807051381467552,
                                                                            "size": -0.00014807051381467552,
                                                                            "leaf_count": 1956,
                                                                            "id": "leaf28"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "label": "\"split_feature_name:high2_5_30\nthreshold:0.27277384698390966\nsplit_gain:0.010161559367084183\ninternal_value:-0.013938806953652731\ninternal_count:254\"",
                                                                    "name": "split26",
                                                                    "split_feature_name": "high2_5_30",
                                                                    "threshold": 0.27277384698390966,
                                                                    "split_gain": 0.010161559367084183,
                                                                    "internal_value": -0.013938806953652731,
                                                                    "internal_count": 254,
                                                                    "id": "split26",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:23\nleaf_value:-0.00118028988101223\nleaf_count:228\"",
                                                                            "name": "leaf23",
                                                                            "leaf_index": 23.0,
                                                                            "leaf_value": -0.00118028988101223,
                                                                            "size": -0.00118028988101223,
                                                                            "leaf_count": 228,
                                                                            "id": "leaf23"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:27\nleaf_value:-0.0032669078366150367\nleaf_count:26\"",
                                                                            "name": "leaf27",
                                                                            "leaf_index": 27.0,
                                                                            "leaf_value": -0.0032669078366150367,
                                                                            "size": -0.0032669078366150367,
                                                                            "leaf_count": 26,
                                                                            "id": "leaf27"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:low2_2_5\nthreshold:-0.011918716132640837\nsplit_gain:0.01177164783278022\ninternal_value:-0.00036880416317868766\ninternal_count:25198\"",
                                                            "name": "split23",
                                                            "split_feature_name": "low2_2_5",
                                                            "threshold": -0.011918716132640837,
                                                            "split_gain": 0.01177164783278022,
                                                            "internal_value": -0.00036880416317868766,
                                                            "internal_count": 25198,
                                                            "id": "split23",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:22\nleaf_value:-0.0001640872145684427\nleaf_count:5645\"",
                                                                    "name": "leaf22",
                                                                    "leaf_index": 22.0,
                                                                    "leaf_value": -0.0001640872145684427,
                                                                    "size": -0.0001640872145684427,
                                                                    "leaf_count": 5645,
                                                                    "id": "leaf22"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:24\nleaf_value:-1.554955320819404e-07\nleaf_count:19553\"",
                                                                    "name": "leaf24",
                                                                    "leaf_index": 24.0,
                                                                    "leaf_value": -1.554955320819404e-07,
                                                                    "size": -1.554955320819404e-07,
                                                                    "leaf_count": 19553,
                                                                    "id": "leaf24"
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
                                    "label": "\"split_feature_name:dayofweek\nthreshold:3.5000000000000004\nsplit_gain:0.021500536025048297\ninternal_value:0.002030583098229744\ninternal_count:2834\"",
                                    "name": "split6",
                                    "split_feature_name": "dayofweek",
                                    "threshold": 3.5000000000000004,
                                    "split_gain": 0.021500536025048297,
                                    "internal_value": 0.002030583098229744,
                                    "internal_count": 2834,
                                    "id": "split6",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:0.08708521723747255\nsplit_gain:0.012698389433326717\ninternal_value:0.0006561243916633231\ninternal_count:2269\"",
                                            "name": "split8",
                                            "split_feature_name": "day_delta",
                                            "threshold": 0.08708521723747255,
                                            "split_gain": 0.012698389433326717,
                                            "internal_value": 0.0006561243916633231,
                                            "internal_count": 2269,
                                            "id": "split8",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:0.057158337906003005\nsplit_gain:0.010595392622097525\ninternal_value:0.0012855395880435867\ninternal_count:2119\"",
                                                    "name": "split17",
                                                    "split_feature_name": "high2_2_5",
                                                    "threshold": 0.057158337906003005,
                                                    "split_gain": 0.010595392622097525,
                                                    "internal_value": 0.0012855395880435867,
                                                    "internal_count": 2119,
                                                    "id": "split17",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:high2_5_30\nthreshold:-0.014497829135507343\nsplit_gain:0.009254424796806833\ninternal_value:0.001061822089680896\ninternal_count:2098\"",
                                                            "name": "split28",
                                                            "split_feature_name": "high2_5_30",
                                                            "threshold": -0.014497829135507343,
                                                            "split_gain": 0.009254424796806833,
                                                            "internal_value": 0.001061822089680896,
                                                            "internal_count": 2098,
                                                            "id": "split28",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:6\nleaf_value:0.0015581054553940492\nleaf_count:43\"",
                                                                    "name": "leaf6",
                                                                    "leaf_index": 6.0,
                                                                    "leaf_value": 0.0015581054553940492,
                                                                    "size": 0.0015581054553940492,
                                                                    "leaf_count": 43,
                                                                    "id": "leaf6"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:29\nleaf_value:7.580133325212062e-05\nleaf_count:2055\"",
                                                                    "name": "leaf29",
                                                                    "leaf_index": 29.0,
                                                                    "leaf_value": 7.580133325212062e-05,
                                                                    "size": 7.580133325212062e-05,
                                                                    "leaf_count": 2055,
                                                                    "id": "leaf29"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:18\nleaf_value:0.002363598299589718\nleaf_count:21\"",
                                                            "name": "leaf18",
                                                            "leaf_index": 18.0,
                                                            "leaf_value": 0.002363598299589718,
                                                            "size": 0.002363598299589718,
                                                            "leaf_count": 21,
                                                            "id": "leaf18"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:stk1_2\nthreshold:0.014084757771342995\nsplit_gain:0.016345955151563223\ninternal_value:-0.008235414282535203\ninternal_count:150\"",
                                                    "name": "split9",
                                                    "split_feature_name": "stk1_2",
                                                    "threshold": 0.014084757771342995,
                                                    "split_gain": 0.016345955151563223,
                                                    "internal_value": -0.008235414282535203,
                                                    "internal_count": 150,
                                                    "id": "split9",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.0333364363759756\nsplit_gain:0.011336282642229648\ninternal_value:-0.012791373945046439\ninternal_count:126\"",
                                                            "name": "split16",
                                                            "split_feature_name": "low2_5_30",
                                                            "threshold": -0.0333364363759756,
                                                            "split_gain": 0.011336282642229648,
                                                            "internal_value": -0.012791373945046439,
                                                            "internal_count": 126,
                                                            "id": "split16",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:9\nleaf_value:-0.002975915491115302\nleaf_count:30\"",
                                                                    "name": "leaf9",
                                                                    "leaf_index": 9.0,
                                                                    "leaf_value": -0.002975915491115302,
                                                                    "size": -0.002975915491115302,
                                                                    "leaf_count": 30,
                                                                    "id": "leaf9"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:17\nleaf_value:-0.0007488942393138132\nleaf_count:96\"",
                                                                    "name": "leaf17",
                                                                    "leaf_index": 17.0,
                                                                    "leaf_value": -0.0007488942393138132,
                                                                    "size": -0.0007488942393138132,
                                                                    "leaf_count": 96,
                                                                    "id": "leaf17"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:10\nleaf_value:0.0015683373945648783\nleaf_count:24\"",
                                                            "name": "leaf10",
                                                            "leaf_index": 10.0,
                                                            "leaf_value": 0.0015683373945648783,
                                                            "size": 0.0015683373945648783,
                                                            "leaf_count": 24,
                                                            "id": "leaf10"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.06483569368720053\nsplit_gain:0.020664143640849182\ninternal_value:0.007550311956989406\ninternal_count:565\"",
                                            "name": "split7",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.06483569368720053,
                                            "split_gain": 0.020664143640849182,
                                            "internal_value": 0.007550311956989406,
                                            "internal_count": 565,
                                            "id": "split7",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:0.01868119463324547\nsplit_gain:0.012126938641645588\ninternal_value:0.01823953361727168\ninternal_count:137\"",
                                                    "name": "split10",
                                                    "split_feature_name": "high2_2_5",
                                                    "threshold": 0.01868119463324547,
                                                    "split_gain": 0.012126938641645588,
                                                    "internal_value": 0.01823953361727168,
                                                    "internal_count": 137,
                                                    "id": "split10",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:4945.095458984376\nsplit_gain:0.009232792176295242\ninternal_value:0.014349643141280016\ninternal_count:117\"",
                                                            "name": "split29",
                                                            "split_feature_name": "avg_dolvol2_5",
                                                            "threshold": 4945.095458984376,
                                                            "split_gain": 0.009232792176295242,
                                                            "internal_value": 0.014349643141280016,
                                                            "internal_count": 117,
                                                            "id": "split29",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:7\nleaf_value:-7.780462251200031e-05\nleaf_count:30\"",
                                                                    "name": "leaf7",
                                                                    "leaf_index": 7.0,
                                                                    "leaf_value": -7.780462251200031e-05,
                                                                    "size": -7.780462251200031e-05,
                                                                    "leaf_count": 30,
                                                                    "id": "leaf7"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:30\nleaf_value:0.001956608775038347\nleaf_count:87\"",
                                                                    "name": "leaf30",
                                                                    "leaf_index": 30.0,
                                                                    "leaf_value": 0.001956608775038347,
                                                                    "size": 0.001956608775038347,
                                                                    "leaf_count": 87,
                                                                    "id": "leaf30"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:11\nleaf_value:0.004099539290182293\nleaf_count:20\"",
                                                            "name": "leaf11",
                                                            "leaf_index": 11.0,
                                                            "leaf_value": 0.004099539290182293,
                                                            "size": 0.004099539290182293,
                                                            "leaf_count": 20,
                                                            "id": "leaf11"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:8\nleaf_value:0.00041287620330205467\nleaf_count:428\"",
                                                    "name": "leaf8",
                                                    "leaf_index": 8.0,
                                                    "leaf_value": 0.00041287620330205467,
                                                    "size": 0.00041287620330205467,
                                                    "leaf_count": 428,
                                                    "id": "leaf8"
                                                }
                                            ]
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
                "split4": ">"
            },
            "split1": {
                "split3": ">"
            },
            "split2": {
                "split11": ">"
            },
            "split11": {
                "leaf12": ">"
            },
            "split12": {
                "split18": ">"
            },
            "split18": {
                "leaf19": ">"
            },
            "split19": {
                "leaf20": ">"
            },
            "split3": {
                "leaf4": ">"
            },
            "split4": {
                "split5": ">"
            },
            "split5": {
                "split6": ">"
            },
            "split13": {
                "split20": ">"
            },
            "split14": {
                "leaf15": ">"
            },
            "split15": {
                "leaf16": ">"
            },
            "split20": {
                "split21": ">"
            },
            "split24": {
                "leaf25": ">"
            },
            "split25": {
                "leaf26": ">"
            },
            "split21": {
                "split23": ">"
            },
            "split22": {
                "split26": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split26": {
                "leaf27": ">"
            },
            "split23": {
                "leaf24": ">"
            },
            "split6": {
                "split7": ">"
            },
            "split8": {
                "split9": ">"
            },
            "split17": {
                "leaf18": ">"
            },
            "split28": {
                "leaf29": ">"
            },
            "split9": {
                "leaf10": ">"
            },
            "split16": {
                "leaf17": ">"
            },
            "split7": {
                "leaf8": ">"
            },
            "split10": {
                "leaf11": ">"
            },
            "split29": {
                "leaf30": ">"
            }
        }
    }
}
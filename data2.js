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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.09759795665740965\nsplit_gain:0.16309211802720705\ninternal_value:0\ninternal_count:24771\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.09759795665740965,
            "split_gain": 0.16309211802720705,
            "internal_value": 0.0,
            "internal_count": 24771,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.09697318216535827\ninternal_value:0.01120631140606725\ninternal_count:1234\"",
                    "name": "split1",
                    "split_feature_name": "daytime",
                    "threshold": 15.250000000000002,
                    "split_gain": 0.09697318216535827,
                    "internal_value": 0.01120631140606725,
                    "internal_count": 1234,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.06399386274460674\ninternal_value:0.008177432156877511\ninternal_count:1105\"",
                            "name": "split2",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.06399386274460674,
                            "internal_value": 0.008177432156877511,
                            "internal_count": 1105,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"leaf_index:0\nleaf_value:0.003979477874676797\nleaf_count:65\"",
                                    "name": "leaf0",
                                    "leaf_index": 0.0,
                                    "leaf_value": 0.003979477874676797,
                                    "size": 0.003979477874676797,
                                    "leaf_count": 65,
                                    "id": "leaf0"
                                },
                                {
                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.02997459843754768\nsplit_gain:0.03584330421419699\ninternal_value:0.0062749174072809395\ninternal_count:1040\"",
                                    "name": "split7",
                                    "split_feature_name": "high2_2_5",
                                    "threshold": -0.02997459843754768,
                                    "split_gain": 0.03584330421419699,
                                    "internal_value": 0.0062749174072809395,
                                    "internal_count": 1040,
                                    "id": "split7",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:-0.2928998470306396\nsplit_gain:0.012165050409564768\ninternal_value:0.01414182612209134\ninternal_count:372\"",
                                            "name": "split21",
                                            "split_feature_name": "day_delta",
                                            "threshold": -0.2928998470306396,
                                            "split_gain": 0.012165050409564768,
                                            "internal_value": 0.01414182612209134,
                                            "internal_count": 372,
                                            "id": "split21",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:25343.862304687504\nsplit_gain:0.01677641355981073\ninternal_value:0.029557166051300657\ninternal_count:45\"",
                                                    "name": "split22",
                                                    "split_feature_name": "avg_dolvol5_30",
                                                    "threshold": 25343.862304687504,
                                                    "split_gain": 0.01677641355981073,
                                                    "internal_value": 0.029557166051300657,
                                                    "internal_count": 45,
                                                    "id": "split22",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:3\nleaf_value:0.005137568275196566\nleaf_count:21\"",
                                                            "name": "leaf3",
                                                            "leaf_index": 3.0,
                                                            "leaf_value": 0.005137568275196566,
                                                            "size": 0.005137568275196566,
                                                            "leaf_count": 21,
                                                            "id": "leaf3"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:23\nleaf_value:0.0012673046306366207\nleaf_count:24\"",
                                                            "name": "leaf23",
                                                            "leaf_index": 23.0,
                                                            "leaf_value": 0.0012673046306366207,
                                                            "size": 0.0012673046306366207,
                                                            "leaf_count": 24,
                                                            "id": "leaf23"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:22\nleaf_value:0.0013197559663958292\nleaf_count:327\"",
                                                    "name": "leaf22",
                                                    "leaf_index": 22.0,
                                                    "leaf_value": 0.0013197559663958292,
                                                    "size": 0.0013197559663958292,
                                                    "leaf_count": 327,
                                                    "id": "leaf22"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:8\nleaf_value:0.0003071054886995297\nleaf_count:668\"",
                                            "name": "leaf8",
                                            "leaf_index": 8.0,
                                            "leaf_value": 0.0003071054886995297,
                                            "size": 0.0003071054886995297,
                                            "leaf_count": 668,
                                            "id": "leaf8"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:stk1_2\nthreshold:0.02214110735803843\nsplit_gain:0.018732709840978135\ninternal_value:0.037151362339049115\ninternal_count:129\"",
                            "name": "split13",
                            "split_feature_name": "stk1_2",
                            "threshold": 0.02214110735803843,
                            "split_gain": 0.018732709840978135,
                            "internal_value": 0.037151362339049115,
                            "internal_count": 129,
                            "id": "split13",
                            "children": [
                                {
                                    "label": "\"split_feature_name:high2_5_30\nthreshold:-0.011071891058236359\nsplit_gain:0.02597374770569494\ninternal_value:0.04464884075306116\ninternal_count:93\"",
                                    "name": "split14",
                                    "split_feature_name": "high2_5_30",
                                    "threshold": -0.011071891058236359,
                                    "split_gain": 0.02597374770569494,
                                    "internal_value": 0.04464884075306116,
                                    "internal_count": 93,
                                    "id": "split14",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:stk1_2\nthreshold:0.007125915493816138\nsplit_gain:0.012459367818379419\ninternal_value:0.0638856825651601\ninternal_count:40\"",
                                            "name": "split20",
                                            "split_feature_name": "stk1_2",
                                            "threshold": 0.007125915493816138,
                                            "split_gain": 0.012459367818379419,
                                            "internal_value": 0.0638856825651601,
                                            "internal_count": 40,
                                            "id": "split20",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:2\nleaf_value:0.008271170801368497\nleaf_count:20\"",
                                                    "name": "leaf2",
                                                    "leaf_index": 2.0,
                                                    "leaf_value": 0.008271170801368497,
                                                    "size": 0.008271170801368497,
                                                    "leaf_count": 20,
                                                    "id": "leaf2"
                                                },
                                                {
                                                    "label": "\"leaf_index:21\nleaf_value:0.00474138783093258\nleaf_count:20\"",
                                                    "name": "leaf21",
                                                    "leaf_index": 21.0,
                                                    "leaf_value": 0.00474138783093258,
                                                    "size": 0.00474138783093258,
                                                    "leaf_count": 20,
                                                    "id": "leaf21"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:vol1_10\nthreshold:-0.19572037458419797\nsplit_gain:0.014813315737791391\ninternal_value:0.03013046957411856\ninternal_count:53\"",
                                            "name": "split16",
                                            "split_feature_name": "vol1_10",
                                            "threshold": -0.19572037458419797,
                                            "split_gain": 0.014813315737791391,
                                            "internal_value": 0.03013046957411856,
                                            "internal_count": 53,
                                            "id": "split16",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:15\nleaf_value:0.005115288213796785\nleaf_count:22\"",
                                                    "name": "leaf15",
                                                    "leaf_index": 15.0,
                                                    "leaf_value": 0.005115288213796785,
                                                    "size": 0.005115288213796785,
                                                    "leaf_count": 22,
                                                    "id": "leaf15"
                                                },
                                                {
                                                    "label": "\"leaf_index:17\nleaf_value:0.0017223817483848125\nleaf_count:31\"",
                                                    "name": "leaf17",
                                                    "leaf_index": 17.0,
                                                    "leaf_value": 0.0017223817483848125,
                                                    "size": 0.0017223817483848125,
                                                    "leaf_count": 31,
                                                    "id": "leaf17"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"leaf_index:14\nleaf_value:0.0018959987032529978\nleaf_count:36\"",
                                    "name": "leaf14",
                                    "leaf_index": 14.0,
                                    "leaf_value": 0.0018959987032529978,
                                    "size": 0.0018959987032529978,
                                    "leaf_count": 36,
                                    "id": "leaf14"
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.038179924630843236\ninternal_value:-0.0005875256305763983\ninternal_count:23537\"",
                    "name": "split3",
                    "split_feature_name": "daytime",
                    "threshold": 9.750000000000002,
                    "split_gain": 0.038179924630843236,
                    "internal_value": -0.0005875256305763983,
                    "internal_count": 23537,
                    "id": "split3",
                    "children": [
                        {
                            "label": "\"split_feature_name:day_delta\nthreshold:0.06477540731430055\nsplit_gain:0.17845514693311815\ninternal_value:-0.004953346560189503\ninternal_count:1846\"",
                            "name": "split4",
                            "split_feature_name": "day_delta",
                            "threshold": 0.06477540731430055,
                            "split_gain": 0.17845514693311815,
                            "internal_value": -0.004953346560189503,
                            "internal_count": 1846,
                            "id": "split4",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:-0.02029722929000854\nsplit_gain:0.07668077958874062\ninternal_value:-0.0027932235873708556\ninternal_count:1761\"",
                                    "name": "split5",
                                    "split_feature_name": "day_delta",
                                    "threshold": -0.02029722929000854,
                                    "split_gain": 0.07668077958874062,
                                    "internal_value": -0.0027932235873708556,
                                    "internal_count": 1761,
                                    "id": "split5",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:1\nleaf_value:0.0010011405748638494\nleaf_count:429\"",
                                            "name": "leaf1",
                                            "leaf_index": 1.0,
                                            "leaf_value": 0.0010011405748638494,
                                            "size": 0.0010011405748638494,
                                            "leaf_count": 429,
                                            "id": "leaf1"
                                        },
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:9.999999682655225e-21\nsplit_gain:0.023956979457186417\ninternal_value:-0.006538122640911304\ninternal_count:1332\"",
                                            "name": "split9",
                                            "split_feature_name": "day_delta",
                                            "threshold": 9.999999682655225e-21,
                                            "split_gain": 0.023956979457186417,
                                            "internal_value": -0.006538122640911304,
                                            "internal_count": 1332,
                                            "id": "split9",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:6\nleaf_value:-5.46713068555452e-05\nleaf_count:582\"",
                                                    "name": "leaf6",
                                                    "leaf_index": 6.0,
                                                    "leaf_value": -5.46713068555452e-05,
                                                    "size": -5.46713068555452e-05,
                                                    "leaf_count": 582,
                                                    "id": "leaf6"
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.1182611435651779\nsplit_gain:0.022622908558556726\ninternal_value:-0.010274018646295492\ninternal_count:750\"",
                                                    "name": "split11",
                                                    "split_feature_name": "low2_5_30",
                                                    "threshold": -0.1182611435651779,
                                                    "split_gain": 0.022622908558556726,
                                                    "internal_value": -0.010274018646295492,
                                                    "internal_count": 750,
                                                    "id": "split11",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:10\nleaf_value:-0.002921883777203011\nleaf_count:52\"",
                                                            "name": "leaf10",
                                                            "leaf_index": 10.0,
                                                            "leaf_value": -0.002921883777203011,
                                                            "size": -0.002921883777203011,
                                                            "leaf_count": 52,
                                                            "id": "leaf10"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:12\nleaf_value:-0.0007597853113634785\nleaf_count:698\"",
                                                            "name": "leaf12",
                                                            "leaf_index": 12.0,
                                                            "leaf_value": -0.0007597853113634785,
                                                            "size": -0.0007597853113634785,
                                                            "leaf_count": 698,
                                                            "id": "leaf12"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:0.12474024295806886\nsplit_gain:0.04755232244529459\ninternal_value:-0.0497060119147029\ninternal_count:85\"",
                                    "name": "split6",
                                    "split_feature_name": "day_delta",
                                    "threshold": 0.12474024295806886,
                                    "split_gain": 0.04755232244529459,
                                    "internal_value": -0.0497060119147029,
                                    "internal_count": 85,
                                    "id": "split6",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:stk1_2\nthreshold:-9.999999682655225e-21\nsplit_gain:0.00869658959022411\ninternal_value:-0.035728899144848426\ninternal_count:63\"",
                                            "name": "split29",
                                            "split_feature_name": "stk1_2",
                                            "threshold": -9.999999682655225e-21,
                                            "split_gain": 0.00869658959022411,
                                            "internal_value": -0.035728899144848426,
                                            "internal_count": 63,
                                            "id": "split29",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:5\nleaf_value:-0.005116751029669884\nleaf_count:21\"",
                                                    "name": "leaf5",
                                                    "leaf_index": 5.0,
                                                    "leaf_value": -0.005116751029669884,
                                                    "size": -0.005116751029669884,
                                                    "leaf_count": 21,
                                                    "id": "leaf5"
                                                },
                                                {
                                                    "label": "\"leaf_index:30\nleaf_value:-0.002624392767440527\nleaf_count:42\"",
                                                    "name": "leaf30",
                                                    "leaf_index": 30.0,
                                                    "leaf_value": -0.002624392767440527,
                                                    "size": -0.002624392767440527,
                                                    "leaf_count": 42,
                                                    "id": "leaf30"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:7\nleaf_value:-0.008855426970475906\nleaf_count:22\"",
                                            "name": "leaf7",
                                            "leaf_index": 7.0,
                                            "leaf_value": -0.008855426970475906,
                                            "size": -0.008855426970475906,
                                            "leaf_count": 22,
                                            "id": "leaf7"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.029918922850086307\ninternal_value:-0.00021597496734898638\ninternal_count:21691\"",
                            "name": "split8",
                            "split_feature_name": "daytime",
                            "threshold": 15.250000000000002,
                            "split_gain": 0.029918922850086307,
                            "internal_value": -0.00021597496734898638,
                            "internal_count": 21691,
                            "id": "split8",
                            "children": [
                                {
                                    "label": "\"split_feature_name:stk2_5\nthreshold:-0.1498427242040634\nsplit_gain:0.015627509701304318\ninternal_value:-0.0005656216195811144\ninternal_count:19925\"",
                                    "name": "split15",
                                    "split_feature_name": "stk2_5",
                                    "threshold": -0.1498427242040634,
                                    "split_gain": 0.015627509701304318,
                                    "internal_value": -0.0005656216195811144,
                                    "internal_count": 19925,
                                    "id": "split15",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:4\nleaf_value:0.0014559949629958735\nleaf_count:80\"",
                                            "name": "leaf4",
                                            "leaf_index": 4.0,
                                            "leaf_value": 0.0014559949629958735,
                                            "size": 0.0014559949629958735,
                                            "leaf_count": 80,
                                            "id": "leaf4"
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_2_5\nthreshold:-0.007681044284254312\nsplit_gain:0.014711353196808786\ninternal_value:-0.000621851241765824\ninternal_count:19845\"",
                                            "name": "split17",
                                            "split_feature_name": "low2_2_5",
                                            "threshold": -0.007681044284254312,
                                            "split_gain": 0.014711353196808786,
                                            "internal_value": -0.000621851241765824,
                                            "internal_count": 19845,
                                            "id": "split17",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_5_30\nthreshold:-0.09802618250250815\nsplit_gain:0.012975854887170856\ninternal_value:-0.0016781240807881195\ninternal_count:7922\"",
                                                    "name": "split19",
                                                    "split_feature_name": "high2_5_30",
                                                    "threshold": -0.09802618250250815,
                                                    "split_gain": 0.012975854887170856,
                                                    "internal_value": -0.0016781240807881195,
                                                    "internal_count": 7922,
                                                    "id": "split19",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:16\nleaf_value:-0.0022804228273401424\nleaf_count:26\"",
                                                            "name": "leaf16",
                                                            "leaf_index": 16.0,
                                                            "leaf_value": -0.0022804228273401424,
                                                            "size": -0.0022804228273401424,
                                                            "leaf_count": 26,
                                                            "id": "leaf16"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:18536.154296875004\nsplit_gain:0.009924330444103652\ninternal_value:-0.0016046839105103934\ninternal_count:7896\"",
                                                            "name": "split27",
                                                            "split_feature_name": "avg_dolvol5_30",
                                                            "threshold": 18536.154296875004,
                                                            "split_gain": 0.009924330444103652,
                                                            "internal_value": -0.0016046839105103934,
                                                            "internal_count": 7896,
                                                            "id": "split27",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:20\nleaf_value:-0.00014098250492194654\nleaf_count:4467\"",
                                                                    "name": "leaf20",
                                                                    "leaf_index": 20.0,
                                                                    "leaf_value": -0.00014098250492194654,
                                                                    "size": -0.00014098250492194654,
                                                                    "leaf_count": 4467,
                                                                    "id": "leaf20"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:28\nleaf_value:8.520179662338186e-05\nleaf_count:3429\"",
                                                                    "name": "leaf28",
                                                                    "leaf_index": 28.0,
                                                                    "leaf_value": 8.520179662338186e-05,
                                                                    "size": 8.520179662338186e-05,
                                                                    "leaf_count": 3429,
                                                                    "id": "leaf28"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:0.13921177387237552\nsplit_gain:0.010556934913985652\ninternal_value:7.996821900198803e-05\ninternal_count:11923\"",
                                                    "name": "split25",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": 0.13921177387237552,
                                                    "split_gain": 0.010556934913985652,
                                                    "internal_value": 7.996821900198803e-05,
                                                    "internal_count": 11923,
                                                    "id": "split25",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:18\nleaf_value:0.00013511559665809603\nleaf_count:11805\"",
                                                            "name": "leaf18",
                                                            "leaf_index": 18.0,
                                                            "leaf_value": 0.00013511559665809603,
                                                            "size": 0.00013511559665809603,
                                                            "leaf_count": 11805,
                                                            "id": "leaf18"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:vol1_10\nthreshold:0.319464921951294\nsplit_gain:0.009177954126502153\ninternal_value:-0.00933173322433288\ninternal_count:118\"",
                                                            "name": "split28",
                                                            "split_feature_name": "vol1_10",
                                                            "threshold": 0.319464921951294,
                                                            "split_gain": 0.009177954126502153,
                                                            "internal_value": -0.00933173322433288,
                                                            "internal_count": 118,
                                                            "id": "split28",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:26\nleaf_value:-0.0016825645050394088\nleaf_count:60\"",
                                                                    "name": "leaf26",
                                                                    "leaf_index": 26.0,
                                                                    "leaf_value": -0.0016825645050394088,
                                                                    "size": -0.0016825645050394088,
                                                                    "leaf_count": 60,
                                                                    "id": "leaf26"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:29\nleaf_value:8.154005676053557e-05\nleaf_count:58\"",
                                                                    "name": "leaf29",
                                                                    "leaf_index": 29.0,
                                                                    "leaf_value": 8.154005676053557e-05,
                                                                    "size": 8.154005676053557e-05,
                                                                    "leaf_count": 58,
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
                                    "label": "\"split_feature_name:dayofweek\nthreshold:3.5000000000000004\nsplit_gain:0.023280867187056364\ninternal_value:0.003728934175190736\ninternal_count:1766\"",
                                    "name": "split10",
                                    "split_feature_name": "dayofweek",
                                    "threshold": 3.5000000000000004,
                                    "split_gain": 0.023280867187056364,
                                    "internal_value": 0.003728934175190736,
                                    "internal_count": 1766,
                                    "id": "split10",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:173476.47656250003\nsplit_gain:0.013864462598769549\ninternal_value:0.0019431307561849158\ninternal_count:1422\"",
                                            "name": "split18",
                                            "split_feature_name": "avg_dolvol5_30",
                                            "threshold": 173476.47656250003,
                                            "split_gain": 0.013864462598769549,
                                            "internal_value": 0.0019431307561849158,
                                            "internal_count": 1422,
                                            "id": "split18",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:0.05360581725835801\nsplit_gain:0.010280720132395454\ninternal_value:0.0028649595634147487\ninternal_count:1308\"",
                                                    "name": "split26",
                                                    "split_feature_name": "high2_2_5",
                                                    "threshold": 0.05360581725835801,
                                                    "split_gain": 0.010280720132395454,
                                                    "internal_value": 0.0028649595634147487,
                                                    "internal_count": 1308,
                                                    "id": "split26",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:9\nleaf_value:0.0003683950411717505\nleaf_count:1287\"",
                                                            "name": "leaf9",
                                                            "leaf_index": 9.0,
                                                            "leaf_value": 0.0003683950411717505,
                                                            "size": 0.0003683950411717505,
                                                            "leaf_count": 1287,
                                                            "id": "leaf9"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:27\nleaf_value:0.0025989694718367294\nleaf_count:21\"",
                                                            "name": "leaf27",
                                                            "leaf_index": 27.0,
                                                            "leaf_value": 0.0025989694718367294,
                                                            "size": 0.0025989694718367294,
                                                            "leaf_count": 21,
                                                            "id": "leaf27"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:0.03100773692131043\nsplit_gain:0.01107406135744679\ninternal_value:-0.008633641874136325\ninternal_count:114\"",
                                                    "name": "split24",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": 0.03100773692131043,
                                                    "split_gain": 0.01107406135744679,
                                                    "internal_value": -0.008633641874136325,
                                                    "internal_count": 114,
                                                    "id": "split24",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:19\nleaf_value:0.00029326131154050873\nleaf_count:54\"",
                                                            "name": "leaf19",
                                                            "leaf_index": 19.0,
                                                            "leaf_value": 0.00029326131154050873,
                                                            "size": 0.00029326131154050873,
                                                            "leaf_count": 54,
                                                            "id": "leaf19"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:25\nleaf_value:-0.001680676123166753\nleaf_count:60\"",
                                                            "name": "leaf25",
                                                            "leaf_index": 25.0,
                                                            "leaf_value": -0.001680676123166753,
                                                            "size": -0.001680676123166753,
                                                            "leaf_count": 60,
                                                            "id": "leaf25"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.11590421199798583\nsplit_gain:0.02042907009972776\ninternal_value:0.011110947145615958\ninternal_count:344\"",
                                            "name": "split12",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.11590421199798583,
                                            "split_gain": 0.02042907009972776,
                                            "internal_value": 0.011110947145615958,
                                            "internal_count": 344,
                                            "id": "split12",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:11\nleaf_value:0.004042743269006678\nleaf_count:24\"",
                                                    "name": "leaf11",
                                                    "leaf_index": 11.0,
                                                    "leaf_value": 0.004042743269006678,
                                                    "size": 0.004042743269006678,
                                                    "leaf_count": 24,
                                                    "id": "leaf11"
                                                },
                                                {
                                                    "label": "\"split_feature_name:high2_5_30\nthreshold:0.11937574297189714\nsplit_gain:0.01206546796299297\ninternal_value:0.009000494024508043\ninternal_count:320\"",
                                                    "name": "split23",
                                                    "split_feature_name": "high2_5_30",
                                                    "threshold": 0.11937574297189714,
                                                    "split_gain": 0.01206546796299297,
                                                    "internal_value": 0.009000494024508043,
                                                    "internal_count": 320,
                                                    "id": "split23",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:13\nleaf_value:0.0008468837851655289\nleaf_count:297\"",
                                                            "name": "leaf13",
                                                            "leaf_index": 13.0,
                                                            "leaf_value": 0.0008468837851655289,
                                                            "size": 0.0008468837851655289,
                                                            "leaf_count": 297,
                                                            "id": "leaf13"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:24\nleaf_value:0.0032242984205715164\nleaf_count:23\"",
                                                            "name": "leaf24",
                                                            "leaf_index": 24.0,
                                                            "leaf_value": 0.0032242984205715164,
                                                            "size": 0.0032242984205715164,
                                                            "leaf_count": 23,
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
        },
        "edges": {
            "split0": {
                "split3": ">"
            },
            "split1": {
                "split13": ">"
            },
            "split2": {
                "split7": ">"
            },
            "split7": {
                "leaf8": ">"
            },
            "split21": {
                "leaf22": ">"
            },
            "split22": {
                "leaf23": ">"
            },
            "split13": {
                "leaf14": ">"
            },
            "split14": {
                "split16": ">"
            },
            "split20": {
                "leaf21": ">"
            },
            "split16": {
                "leaf17": ">"
            },
            "split3": {
                "split8": ">"
            },
            "split4": {
                "split6": ">"
            },
            "split5": {
                "split9": ">"
            },
            "split9": {
                "split11": ">"
            },
            "split11": {
                "leaf12": ">"
            },
            "split6": {
                "leaf7": ">"
            },
            "split29": {
                "leaf30": ">"
            },
            "split8": {
                "split10": ">"
            },
            "split15": {
                "split17": ">"
            },
            "split17": {
                "split25": ">"
            },
            "split19": {
                "split27": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split25": {
                "split28": ">"
            },
            "split28": {
                "leaf29": ">"
            },
            "split10": {
                "split12": ">"
            },
            "split18": {
                "split24": ">"
            },
            "split26": {
                "leaf27": ">"
            },
            "split24": {
                "leaf25": ">"
            },
            "split12": {
                "split23": ">"
            },
            "split23": {
                "leaf24": ">"
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.10699045658111571\nsplit_gain:0.1337209349442924\ninternal_value:0\ninternal_count:24771\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.10699045658111571,
            "split_gain": 0.1337209349442924,
            "internal_value": 0.0,
            "internal_count": 24771,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.07774669584977881\ninternal_value:0.011081954032642104\ninternal_count:1043\"",
                    "name": "split1",
                    "split_feature_name": "daytime",
                    "threshold": 15.250000000000002,
                    "split_gain": 0.07774669584977881,
                    "internal_value": 0.011081954032642104,
                    "internal_count": 1043,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.04866030406687543\ninternal_value:0.008072438675752823\ninternal_count:930\"",
                            "name": "split2",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.04866030406687543,
                            "internal_value": 0.008072438675752823,
                            "internal_count": 930,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"leaf_index:0\nleaf_value:0.003779536199447019\nleaf_count:52\"",
                                    "name": "leaf0",
                                    "leaf_index": 0.0,
                                    "leaf_value": 0.003779536199447019,
                                    "size": 0.003779536199447019,
                                    "leaf_count": 52,
                                    "id": "leaf0"
                                },
                                {
                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.06087518110871314\nsplit_gain:0.024775520995910738\ninternal_value:0.006312083308357262\ninternal_count:878\"",
                                    "name": "split4",
                                    "split_feature_name": "high2_2_5",
                                    "threshold": -0.06087518110871314,
                                    "split_gain": 0.024775520995910738,
                                    "internal_value": 0.006312083308357262,
                                    "internal_count": 878,
                                    "id": "split4",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:-0.2928998470306396\nsplit_gain:0.011124909771627188\ninternal_value:0.016700110213815397\ninternal_count:182\"",
                                            "name": "split22",
                                            "split_feature_name": "day_delta",
                                            "threshold": -0.2928998470306396,
                                            "split_gain": 0.011124909771627188,
                                            "internal_value": 0.016700110213815397,
                                            "internal_count": 182,
                                            "id": "split22",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:3\nleaf_value:0.003217742778518162\nleaf_count:37\"",
                                                    "name": "leaf3",
                                                    "leaf_index": 3.0,
                                                    "leaf_value": 0.003217742778518162,
                                                    "size": 0.003217742778518162,
                                                    "leaf_count": 37,
                                                    "id": "leaf3"
                                                },
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:45769.22656250001\nsplit_gain:0.009166338512482622\ninternal_value:0.012750725730087464\ninternal_count:145\"",
                                                    "name": "split28",
                                                    "split_feature_name": "avg_dolvol1_2",
                                                    "threshold": 45769.22656250001,
                                                    "split_gain": 0.009166338512482622,
                                                    "internal_value": 0.012750725730087464,
                                                    "internal_count": 145,
                                                    "id": "split28",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:23\nleaf_value:0.002900351333456846\nleaf_count:28\"",
                                                            "name": "leaf23",
                                                            "leaf_index": 23.0,
                                                            "leaf_value": 0.002900351333456846,
                                                            "size": 0.002900351333456846,
                                                            "leaf_count": 28,
                                                            "id": "leaf23"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:29\nleaf_value:0.0008861169722177483\nleaf_count:117\"",
                                                            "name": "leaf29",
                                                            "leaf_index": 29.0,
                                                            "leaf_value": 0.0008861169722177483,
                                                            "size": 0.0008861169722177483,
                                                            "leaf_count": 117,
                                                            "id": "leaf29"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:5\nleaf_value:0.0003595673973884015\nleaf_count:696\"",
                                            "name": "leaf5",
                                            "leaf_index": 5.0,
                                            "leaf_value": 0.0003595673973884015,
                                            "size": 0.0003595673973884015,
                                            "leaf_count": 696,
                                            "id": "leaf5"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:stk1_2\nthreshold:0.022565553896129135\nsplit_gain:0.01965591357829838\ninternal_value:0.03585053174863353\ninternal_count:113\"",
                            "name": "split9",
                            "split_feature_name": "stk1_2",
                            "threshold": 0.022565553896129135,
                            "split_gain": 0.01965591357829838,
                            "internal_value": 0.03585053174863353,
                            "internal_count": 113,
                            "id": "split9",
                            "children": [
                                {
                                    "label": "\"split_feature_name:stk5_30\nthreshold:0.07144488021731378\nsplit_gain:0.024808902284069012\ninternal_value:0.044502866391701874\ninternal_count:79\"",
                                    "name": "split10",
                                    "split_feature_name": "stk5_30",
                                    "threshold": 0.07144488021731378,
                                    "split_gain": 0.024808902284069012,
                                    "internal_value": 0.044502866391701874,
                                    "internal_count": 79,
                                    "id": "split10",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:2\nleaf_value:0.007493982380256056\nleaf_count:20\"",
                                            "name": "leaf2",
                                            "leaf_index": 2.0,
                                            "leaf_value": 0.007493982380256056,
                                            "size": 0.007493982380256056,
                                            "leaf_count": 20,
                                            "id": "leaf2"
                                        },
                                        {
                                            "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:134303.56250000003\nsplit_gain:0.013876946212519073\ninternal_value:0.03418525371005486\ninternal_count:59\"",
                                            "name": "split15",
                                            "split_feature_name": "avg_dolvol2_5",
                                            "threshold": 134303.56250000003,
                                            "split_gain": 0.013876946212519073,
                                            "internal_value": 0.03418525371005486,
                                            "internal_count": 59,
                                            "id": "split15",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:11\nleaf_value:0.002235942933455934\nleaf_count:37\"",
                                                    "name": "leaf11",
                                                    "leaf_index": 11.0,
                                                    "leaf_value": 0.002235942933455934,
                                                    "size": 0.002235942933455934,
                                                    "leaf_count": 37,
                                                    "id": "leaf11"
                                                },
                                                {
                                                    "label": "\"leaf_index:16\nleaf_value:0.005407414015975188\nleaf_count:22\"",
                                                    "name": "leaf16",
                                                    "leaf_index": 16.0,
                                                    "leaf_value": 0.005407414015975188,
                                                    "size": 0.005407414015975188,
                                                    "leaf_count": 22,
                                                    "id": "leaf16"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"leaf_index:10\nleaf_value:0.0015746577725033548\nleaf_count:34\"",
                                    "name": "leaf10",
                                    "leaf_index": 10.0,
                                    "leaf_value": 0.0015746577725033548,
                                    "size": 0.0015746577725033548,
                                    "leaf_count": 34,
                                    "id": "leaf10"
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.03021597561507553\ninternal_value:-0.00048712401168499755\ninternal_count:23728\"",
                    "name": "split3",
                    "split_feature_name": "daytime",
                    "threshold": 15.250000000000002,
                    "split_gain": 0.03021597561507553,
                    "internal_value": -0.00048712401168499755,
                    "internal_count": 23728,
                    "id": "split3",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.024316595136130683\ninternal_value:-0.0008086854083065149\ninternal_count:21946\"",
                            "name": "split5",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.024316595136130683,
                            "internal_value": -0.0008086854083065149,
                            "internal_count": 21946,
                            "id": "split5",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:0.0602104663848877\nsplit_gain:0.14613132782765095\ninternal_value:-0.004268808425388319\ninternal_count:1859\"",
                                    "name": "split6",
                                    "split_feature_name": "day_delta",
                                    "threshold": 0.0602104663848877,
                                    "split_gain": 0.14613132782765095,
                                    "internal_value": -0.004268808425388319,
                                    "internal_count": 1859,
                                    "id": "split6",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:-0.02029722929000854\nsplit_gain:0.06528676252479315\ninternal_value:-0.002132587447720846\ninternal_count:1757\"",
                                            "name": "split7",
                                            "split_feature_name": "day_delta",
                                            "threshold": -0.02029722929000854,
                                            "split_gain": 0.06528676252479315,
                                            "internal_value": -0.002132587447720846,
                                            "internal_count": 1757,
                                            "id": "split7",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:-0.052925586700439446\nsplit_gain:0.010640986605862008\ninternal_value:0.008381665661072145\ninternal_count:442\"",
                                                    "name": "split24",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": -0.052925586700439446,
                                                    "split_gain": 0.010640986605862008,
                                                    "internal_value": 0.008381665661072145,
                                                    "internal_count": 442,
                                                    "id": "split24",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:1\nleaf_value:0.0016195324376225473\nleaf_count:125\"",
                                                            "name": "leaf1",
                                                            "leaf_index": 1.0,
                                                            "leaf_value": 0.0016195324376225473,
                                                            "size": 0.0016195324376225473,
                                                            "leaf_count": 125,
                                                            "id": "leaf1"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:25\nleaf_value:0.0005300569953204116\nleaf_count:317\"",
                                                            "name": "leaf25",
                                                            "leaf_index": 25.0,
                                                            "leaf_value": 0.0005300569953204116,
                                                            "size": 0.0005300569953204116,
                                                            "leaf_count": 317,
                                                            "id": "leaf25"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:9.999999682655225e-21\nsplit_gain:0.017681932593397037\ninternal_value:-0.005666655793033775\ninternal_count:1315\"",
                                                    "name": "split12",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": 9.999999682655225e-21,
                                                    "split_gain": 0.017681932593397037,
                                                    "internal_value": -0.005666655793033775,
                                                    "internal_count": 1315,
                                                    "id": "split12",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:8\nleaf_value:-0.00015514412291090548\nleaf_count:582\"",
                                                            "name": "leaf8",
                                                            "leaf_index": 8.0,
                                                            "leaf_value": -0.00015514412291090548,
                                                            "size": -0.00015514412291090548,
                                                            "leaf_count": 582,
                                                            "id": "leaf8"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.1182611435651779\nsplit_gain:0.01779514993250847\ninternal_value:-0.008934124928373732\ninternal_count:733\"",
                                                            "name": "split13",
                                                            "split_feature_name": "low2_5_30",
                                                            "threshold": -0.1182611435651779,
                                                            "split_gain": 0.01779514993250847,
                                                            "internal_value": -0.008934124928373732,
                                                            "internal_count": 733,
                                                            "id": "split13",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:13\nleaf_value:-0.0027144722118973737\nleaf_count:50\"",
                                                                    "name": "leaf13",
                                                                    "leaf_index": 13.0,
                                                                    "leaf_value": -0.0027144722118973737,
                                                                    "size": -0.0027144722118973737,
                                                                    "leaf_count": 50,
                                                                    "id": "leaf13"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:14\nleaf_value:-0.0007600991898315167\nleaf_count:683\"",
                                                                    "name": "leaf14",
                                                                    "leaf_index": 14.0,
                                                                    "leaf_value": -0.0007600991898315167,
                                                                    "size": -0.0007600991898315167,
                                                                    "leaf_count": 683,
                                                                    "id": "leaf14"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:0.12474024295806886\nsplit_gain:0.04419146681276043\ninternal_value:-0.04106626193285646\ninternal_count:102\"",
                                            "name": "split8",
                                            "split_feature_name": "day_delta",
                                            "threshold": 0.12474024295806886,
                                            "split_gain": 0.04419146681276043,
                                            "internal_value": -0.04106626193285646,
                                            "internal_count": 102,
                                            "id": "split8",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:7\nleaf_value:-0.003015096713497769\nleaf_count:80\"",
                                                    "name": "leaf7",
                                                    "leaf_index": 7.0,
                                                    "leaf_value": -0.003015096713497769,
                                                    "size": -0.003015096713497769,
                                                    "leaf_count": 80,
                                                    "id": "leaf7"
                                                },
                                                {
                                                    "label": "\"leaf_index:9\nleaf_value:-0.008075824301605198\nleaf_count:22\"",
                                                    "name": "leaf9",
                                                    "leaf_index": 9.0,
                                                    "leaf_value": -0.008075824301605198,
                                                    "size": -0.008075824301605198,
                                                    "leaf_count": 22,
                                                    "id": "leaf9"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:stk2_5\nthreshold:-0.1498427242040634\nsplit_gain:0.012616364730884129\ninternal_value:-0.0004884599545924175\ninternal_count:20087\"",
                                    "name": "split16",
                                    "split_feature_name": "stk2_5",
                                    "threshold": -0.1498427242040634,
                                    "split_gain": 0.012616364730884129,
                                    "internal_value": -0.0004884599545924175,
                                    "internal_count": 20087,
                                    "id": "split16",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:6\nleaf_value:0.0012044555367901923\nleaf_count:80\"",
                                            "name": "leaf6",
                                            "leaf_index": 6.0,
                                            "leaf_value": 0.0012044555367901923,
                                            "size": 0.0012044555367901923,
                                            "leaf_count": 80,
                                            "id": "leaf6"
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.2672511935234069\nsplit_gain:0.012031162544754878\ninternal_value:-0.0005385744757999722\ninternal_count:20007\"",
                                            "name": "split20",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.2672511935234069,
                                            "split_gain": 0.012031162544754878,
                                            "internal_value": -0.0005385744757999722,
                                            "internal_count": 20007,
                                            "id": "split20",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:stk1_2\nthreshold:0.03938755579292775\nsplit_gain:0.012497961906759841\ninternal_value:-0.007181176651396\ninternal_count:269\"",
                                                    "name": "split21",
                                                    "split_feature_name": "stk1_2",
                                                    "threshold": 0.03938755579292775,
                                                    "split_gain": 0.012497961906759841,
                                                    "internal_value": -0.007181176651396,
                                                    "internal_count": 269,
                                                    "id": "split21",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:17\nleaf_value:-0.00047211725753438545\nleaf_count:238\"",
                                                            "name": "leaf17",
                                                            "leaf_index": 17.0,
                                                            "leaf_value": -0.00047211725753438545,
                                                            "size": -0.00047211725753438545,
                                                            "leaf_count": 238,
                                                            "id": "leaf17"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:22\nleaf_value:-0.0026067659557860857\nleaf_count:31\"",
                                                            "name": "leaf22",
                                                            "leaf_index": 22.0,
                                                            "leaf_value": -0.0026067659557860857,
                                                            "size": -0.0026067659557860857,
                                                            "leaf_count": 31,
                                                            "id": "leaf22"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_2_5\nthreshold:-0.005035297013819217\nsplit_gain:0.009754941913607474\ninternal_value:-0.0004480455475785044\ninternal_count:19738\"",
                                                    "name": "split25",
                                                    "split_feature_name": "low2_2_5",
                                                    "threshold": -0.005035297013819217,
                                                    "split_gain": 0.009754941913607474,
                                                    "internal_value": -0.0004480455475785044,
                                                    "internal_count": 19738,
                                                    "id": "split25",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:22791.251953125004\nsplit_gain:0.010329817934886538\ninternal_value:-0.0011928254408131353\ninternal_count:9300\"",
                                                            "name": "split26",
                                                            "split_feature_name": "avg_dolvol2_5",
                                                            "threshold": 22791.251953125004,
                                                            "split_gain": 0.010329817934886538,
                                                            "internal_value": -0.0011928254408131353,
                                                            "internal_count": 9300,
                                                            "id": "split26",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:21\nleaf_value:-0.00019991947228712337\nleaf_count:5866\"",
                                                                    "name": "leaf21",
                                                                    "leaf_index": 21.0,
                                                                    "leaf_value": -0.00019991947228712337,
                                                                    "size": -0.00019991947228712337,
                                                                    "leaf_count": 5866,
                                                                    "id": "leaf21"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:27\nleaf_value:1.846242413513386e-05\nleaf_count:3434\"",
                                                                    "name": "leaf27",
                                                                    "leaf_index": 27.0,
                                                                    "leaf_value": 1.846242413513386e-05,
                                                                    "size": 1.846242413513386e-05,
                                                                    "leaf_count": 3434,
                                                                    "id": "leaf27"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:day_delta\nthreshold:0.13921177387237552\nsplit_gain:0.009596361608854192\ninternal_value:0.00021553492828680203\ninternal_count:10438\"",
                                                            "name": "split27",
                                                            "split_feature_name": "day_delta",
                                                            "threshold": 0.13921177387237552,
                                                            "split_gain": 0.009596361608854192,
                                                            "internal_value": 0.00021553492828680203,
                                                            "internal_count": 10438,
                                                            "id": "split27",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:26\nleaf_value:3.107856975074349e-05\nleaf_count:10336\"",
                                                                    "name": "leaf26",
                                                                    "leaf_index": 26.0,
                                                                    "leaf_value": 3.107856975074349e-05,
                                                                    "size": 3.107856975074349e-05,
                                                                    "leaf_count": 10336,
                                                                    "id": "leaf26"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:28\nleaf_value:-0.0009436543019403997\nleaf_count:102\"",
                                                                    "name": "leaf28",
                                                                    "leaf_index": 28.0,
                                                                    "leaf_value": -0.0009436543019403997,
                                                                    "size": -0.0009436543019403997,
                                                                    "leaf_count": 102,
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
                        },
                        {
                            "label": "\"split_feature_name:dayofweek\nthreshold:3.5000000000000004\nsplit_gain:0.019312213821662406\ninternal_value:0.003473025489019727\ninternal_count:1782\"",
                            "name": "split11",
                            "split_feature_name": "dayofweek",
                            "threshold": 3.5000000000000004,
                            "split_gain": 0.019312213821662406,
                            "internal_value": 0.003473025489019727,
                            "internal_count": 1782,
                            "id": "split11",
                            "children": [
                                {
                                    "label": "\"split_feature_name:high2_5_30\nthreshold:-0.004207816906273364\nsplit_gain:0.012476882604795797\ninternal_value:0.001845511635708882\ninternal_count:1432\"",
                                    "name": "split17",
                                    "split_feature_name": "high2_5_30",
                                    "threshold": -0.004207816906273364,
                                    "split_gain": 0.012476882604795797,
                                    "internal_value": 0.001845511635708882,
                                    "internal_count": 1432,
                                    "id": "split17",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:4\nleaf_value:0.0017869015637304673\nleaf_count:47\"",
                                            "name": "leaf4",
                                            "leaf_index": 4.0,
                                            "leaf_value": 0.0017869015637304673,
                                            "size": 0.0017869015637304673,
                                            "leaf_count": 47,
                                            "id": "leaf4"
                                        },
                                        {
                                            "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:51898.33984375001\nsplit_gain:0.012989994966802167\ninternal_value:0.0013017537381818046\ninternal_count:1385\"",
                                            "name": "split18",
                                            "split_feature_name": "avg_dolvol1_2",
                                            "threshold": 51898.33984375001,
                                            "split_gain": 0.012989994966802167,
                                            "internal_value": 0.0013017537381818046,
                                            "internal_count": 1385,
                                            "id": "split18",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_5_30\nthreshold:0.17994298785924914\nsplit_gain:0.011042705401187566\ninternal_value:0.0025562339016164475\ninternal_count:1186\"",
                                                    "name": "split23",
                                                    "split_feature_name": "high2_5_30",
                                                    "threshold": 0.17994298785924914,
                                                    "split_gain": 0.011042705401187566,
                                                    "internal_value": 0.0025562339016164475,
                                                    "internal_count": 1186,
                                                    "id": "split23",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:low2_2_5\nthreshold:-0.0016638922388665376\nsplit_gain:0.007492829216483951\ninternal_value:0.0020817514723548403\ninternal_count:1158\"",
                                                            "name": "split29",
                                                            "split_feature_name": "low2_2_5",
                                                            "threshold": -0.0016638922388665376,
                                                            "split_gain": 0.007492829216483951,
                                                            "internal_value": 0.0020817514723548403,
                                                            "internal_count": 1158,
                                                            "id": "split29",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:18\nleaf_value:-1.0843591785795385e-05\nleaf_count:665\"",
                                                                    "name": "leaf18",
                                                                    "leaf_index": 18.0,
                                                                    "leaf_value": -1.0843591785795385e-05,
                                                                    "size": -1.0843591785795385e-05,
                                                                    "leaf_count": 665,
                                                                    "id": "leaf18"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:30\nleaf_value:0.0005036061035217941\nleaf_count:493\"",
                                                                    "name": "leaf30",
                                                                    "leaf_index": 30.0,
                                                                    "leaf_value": 0.0005036061035217941,
                                                                    "size": 0.0005036061035217941,
                                                                    "leaf_count": 493,
                                                                    "id": "leaf30"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:24\nleaf_value:0.0022179471511792922\nleaf_count:28\"",
                                                            "name": "leaf24",
                                                            "leaf_index": 24.0,
                                                            "leaf_value": 0.0022179471511792922,
                                                            "size": 0.0022179471511792922,
                                                            "leaf_count": 28,
                                                            "id": "leaf24"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:0.03061226010322571\nsplit_gain:0.013474513002042544\ninternal_value:-0.006174695879071897\ninternal_count:199\"",
                                                    "name": "split19",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": 0.03061226010322571,
                                                    "split_gain": 0.013474513002042544,
                                                    "internal_value": -0.006174695879071897,
                                                    "internal_count": 199,
                                                    "id": "split19",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:19\nleaf_value:0.00015328930160237331\nleaf_count:106\"",
                                                            "name": "leaf19",
                                                            "leaf_index": 19.0,
                                                            "leaf_value": 0.00015328930160237331,
                                                            "size": 0.00015328930160237331,
                                                            "leaf_count": 106,
                                                            "id": "leaf19"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:20\nleaf_value:-0.001495968967348197\nleaf_count:93\"",
                                                            "name": "leaf20",
                                                            "leaf_index": 20.0,
                                                            "leaf_value": -0.001495968967348197,
                                                            "size": -0.001495968967348197,
                                                            "leaf_count": 93,
                                                            "id": "leaf20"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.06425712630152701\nsplit_gain:0.015873376764040756\ninternal_value:0.010131882168851527\ninternal_count:350\"",
                                    "name": "split14",
                                    "split_feature_name": "low2_5_30",
                                    "threshold": -0.06425712630152701,
                                    "split_gain": 0.015873376764040756,
                                    "internal_value": 0.010131882168851527,
                                    "internal_count": 350,
                                    "id": "split14",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:12\nleaf_value:0.0022022765397131856\nleaf_count:85\"",
                                            "name": "leaf12",
                                            "leaf_index": 12.0,
                                            "leaf_value": 0.0022022765397131856,
                                            "size": 0.0022022765397131856,
                                            "leaf_count": 85,
                                            "id": "leaf12"
                                        },
                                        {
                                            "label": "\"leaf_index:15\nleaf_value:0.000631782528430878\nleaf_count:265\"",
                                            "name": "leaf15",
                                            "leaf_index": 15.0,
                                            "leaf_value": 0.000631782528430878,
                                            "size": 0.000631782528430878,
                                            "leaf_count": 265,
                                            "id": "leaf15"
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
                "split9": ">"
            },
            "split2": {
                "split4": ">"
            },
            "split4": {
                "leaf5": ">"
            },
            "split22": {
                "split28": ">"
            },
            "split28": {
                "leaf29": ">"
            },
            "split9": {
                "leaf10": ">"
            },
            "split10": {
                "split15": ">"
            },
            "split15": {
                "leaf16": ">"
            },
            "split3": {
                "split11": ">"
            },
            "split5": {
                "split16": ">"
            },
            "split6": {
                "split8": ">"
            },
            "split7": {
                "split12": ">"
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
            "split8": {
                "leaf9": ">"
            },
            "split16": {
                "split20": ">"
            },
            "split20": {
                "split25": ">"
            },
            "split21": {
                "leaf22": ">"
            },
            "split25": {
                "split27": ">"
            },
            "split26": {
                "leaf27": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split11": {
                "split14": ">"
            },
            "split17": {
                "split18": ">"
            },
            "split18": {
                "split19": ">"
            },
            "split23": {
                "leaf24": ">"
            },
            "split29": {
                "leaf30": ">"
            },
            "split19": {
                "leaf20": ">"
            },
            "split14": {
                "leaf15": ">"
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.128958523273468\nsplit_gain:0.10942533933445411\ninternal_value:0\ninternal_count:24771\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.128958523273468,
            "split_gain": 0.10942533933445411,
            "internal_value": 0.0,
            "internal_count": 24771,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.05322744314707632\ninternal_value:0.011845886808996078\ninternal_count:756\"",
                    "name": "split1",
                    "split_feature_name": "daytime",
                    "threshold": 15.250000000000002,
                    "split_gain": 0.05322744314707632,
                    "internal_value": 0.011845886808996078,
                    "internal_count": 756,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:high2_2_5\nthreshold:-0.07020704075694083\nsplit_gain:0.044304192051701205\ninternal_value:0.00885943777629937\ninternal_count:671\"",
                            "name": "split2",
                            "split_feature_name": "high2_2_5",
                            "threshold": -0.07020704075694083,
                            "split_gain": 0.044304192051701205,
                            "internal_value": 0.00885943777629937,
                            "internal_count": 671,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"split_feature_name:stk1_2\nthreshold:0.006136327050626279\nsplit_gain:0.018974283533906247\ninternal_value:0.02475623250876138\ninternal_count:139\"",
                                    "name": "split11",
                                    "split_feature_name": "stk1_2",
                                    "threshold": 0.006136327050626279,
                                    "split_gain": 0.018974283533906247,
                                    "internal_value": 0.02475623250876138,
                                    "internal_count": 139,
                                    "id": "split11",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:0\nleaf_value:0.005169991073621945\nleaf_count:22\"",
                                            "name": "leaf0",
                                            "leaf_index": 0.0,
                                            "leaf_value": 0.005169991073621945,
                                            "size": 0.005169991073621945,
                                            "leaf_count": 22,
                                            "id": "leaf0"
                                        },
                                        {
                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:16444.453125000004\nsplit_gain:0.009476745823544422\ninternal_value:0.01968989985060687\ninternal_count:117\"",
                                            "name": "split18",
                                            "split_feature_name": "avg_dolvol5_30",
                                            "threshold": 16444.453125000004,
                                            "split_gain": 0.009476745823544422,
                                            "internal_value": 0.01968989985060687,
                                            "internal_count": 117,
                                            "id": "split18",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:12\nleaf_value:0.0033189718812031465\nleaf_count:36\"",
                                                    "name": "leaf12",
                                                    "leaf_index": 12.0,
                                                    "leaf_value": 0.0033189718812031465,
                                                    "size": 0.0033189718812031465,
                                                    "leaf_count": 36,
                                                    "id": "leaf12"
                                                },
                                                {
                                                    "label": "\"leaf_index:19\nleaf_value:0.0013689980312195941\nleaf_count:81\"",
                                                    "name": "leaf19",
                                                    "leaf_index": 19.0,
                                                    "leaf_value": 0.0013689980312195941,
                                                    "size": 0.0013689980312195941,
                                                    "leaf_count": 81,
                                                    "id": "leaf19"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"leaf_index:3\nleaf_value:0.0004705951934547078\nleaf_count:532\"",
                                    "name": "leaf3",
                                    "leaf_index": 3.0,
                                    "leaf_value": 0.0004705951934547078,
                                    "size": 0.0004705951934547078,
                                    "leaf_count": 532,
                                    "id": "leaf3"
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:stk1_2\nthreshold:-0.0015001218416728077\nsplit_gain:0.03218741232784886\ninternal_value:0.03542126682004891\ninternal_count:85\"",
                            "name": "split3",
                            "split_feature_name": "stk1_2",
                            "threshold": -0.0015001218416728077,
                            "split_gain": 0.03218741232784886,
                            "internal_value": 0.03542126682004891,
                            "internal_count": 85,
                            "id": "split3",
                            "children": [
                                {
                                    "label": "\"leaf_index:2\nleaf_value:0.007050253215129487\nleaf_count:20\"",
                                    "name": "leaf2",
                                    "leaf_index": 2.0,
                                    "leaf_value": 0.007050253215129487,
                                    "size": 0.007050253215129487,
                                    "leaf_count": 20,
                                    "id": "leaf2"
                                },
                                {
                                    "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:91135.77343750001\nsplit_gain:0.017514747355742835\ninternal_value:0.024627031333511695\ninternal_count:65\"",
                                    "name": "split12",
                                    "split_feature_name": "avg_dolvol5_30",
                                    "threshold": 91135.77343750001,
                                    "split_gain": 0.017514747355742835,
                                    "internal_value": 0.024627031333511695,
                                    "internal_count": 65,
                                    "id": "split12",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.22388353198766706\nsplit_gain:0.016006262991078567\ninternal_value:0.013683587804229723\ninternal_count:45\"",
                                            "name": "split15",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.22388353198766706,
                                            "split_gain": 0.016006262991078567,
                                            "internal_value": 0.013683587804229723,
                                            "internal_count": 45,
                                            "id": "split15",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:4\nleaf_value:-0.0003185193613171578\nleaf_count:25\"",
                                                    "name": "leaf4",
                                                    "leaf_index": 4.0,
                                                    "leaf_value": -0.0003185193613171578,
                                                    "size": -0.0003185193613171578,
                                                    "leaf_count": 25,
                                                    "id": "leaf4"
                                                },
                                                {
                                                    "label": "\"leaf_index:16\nleaf_value:0.003476956457598135\nleaf_count:20\"",
                                                    "name": "leaf16",
                                                    "leaf_index": 16.0,
                                                    "leaf_value": 0.003476956457598135,
                                                    "size": 0.003476956457598135,
                                                    "leaf_count": 20,
                                                    "id": "leaf16"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:13\nleaf_value:0.0049249779274396135\nleaf_count:20\"",
                                            "name": "leaf13",
                                            "leaf_index": 13.0,
                                            "leaf_value": 0.0049249779274396135,
                                            "size": 0.0049249779274396135,
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
                    "label": "\"split_feature_name:day_delta\nthreshold:-0.045169234275817864\nsplit_gain:0.031467023920343666\ninternal_value:-0.00037291238109556584\ninternal_count:24015\"",
                    "name": "split4",
                    "split_feature_name": "day_delta",
                    "threshold": -0.045169234275817864,
                    "split_gain": 0.031467023920343666,
                    "internal_value": -0.00037291238109556584,
                    "internal_count": 24015,
                    "id": "split4",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.02807307758153264\ninternal_value:0.0028663433492447307\ninternal_count:2666\"",
                            "name": "split9",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.02807307758153264,
                            "internal_value": 0.0028663433492447307,
                            "internal_count": 2666,
                            "id": "split9",
                            "children": [
                                {
                                    "label": "\"leaf_index:1\nleaf_value:0.0014260874989704463\nleaf_count:200\"",
                                    "name": "leaf1",
                                    "leaf_index": 1.0,
                                    "leaf_value": 0.0014260874989704463,
                                    "size": 0.0014260874989704463,
                                    "leaf_count": 200,
                                    "id": "leaf1"
                                },
                                {
                                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.029011529420450086\ninternal_value:0.0019422126403672183\ninternal_count:2466\"",
                                    "name": "split10",
                                    "split_feature_name": "daytime",
                                    "threshold": 15.250000000000002,
                                    "split_gain": 0.029011529420450086,
                                    "internal_value": 0.0019422126403672183,
                                    "internal_count": 2466,
                                    "id": "split10",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:10\nleaf_value:8.687294690445822e-05\nleaf_count:2246\"",
                                            "name": "leaf10",
                                            "leaf_index": 10.0,
                                            "leaf_value": 8.687294690445822e-05,
                                            "size": 8.687294690445822e-05,
                                            "leaf_count": 2246,
                                            "id": "leaf10"
                                        },
                                        {
                                            "label": "\"split_feature_name:stk5_30\nthreshold:0.16382580250501635\nsplit_gain:0.009151760513110688\ninternal_value:0.012901499925779221\ninternal_count:220\"",
                                            "name": "split19",
                                            "split_feature_name": "stk5_30",
                                            "threshold": 0.16382580250501635,
                                            "split_gain": 0.009151760513110688,
                                            "internal_value": 0.012901499925779221,
                                            "internal_count": 220,
                                            "id": "split19",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:dayofweek\nthreshold:3.5000000000000004\nsplit_gain:0.008658030562934668\ninternal_value:0.014941081045108148\ninternal_count:200\"",
                                                    "name": "split22",
                                                    "split_feature_name": "dayofweek",
                                                    "threshold": 3.5000000000000004,
                                                    "split_gain": 0.008658030562934668,
                                                    "internal_value": 0.014941081045108148,
                                                    "internal_count": 200,
                                                    "id": "split22",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:11\nleaf_value:0.001104107416157038\nleaf_count:148\"",
                                                            "name": "leaf11",
                                                            "leaf_index": 11.0,
                                                            "leaf_value": 0.001104107416157038,
                                                            "size": 0.001104107416157038,
                                                            "leaf_count": 148,
                                                            "id": "leaf11"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.08015161007642745\nsplit_gain:0.0072363426855933805\ninternal_value:0.026041100636715643\ninternal_count:52\"",
                                                            "name": "split27",
                                                            "split_feature_name": "low2_5_30",
                                                            "threshold": -0.08015161007642745,
                                                            "split_gain": 0.0072363426855933805,
                                                            "internal_value": 0.026041100636715643,
                                                            "internal_count": 52,
                                                            "id": "split27",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:23\nleaf_value:0.0036546747778253307\nleaf_count:29\"",
                                                                    "name": "leaf23",
                                                                    "leaf_index": 23.0,
                                                                    "leaf_value": 0.0036546747778253307,
                                                                    "size": 0.0036546747778253307,
                                                                    "leaf_count": 29,
                                                                    "id": "leaf23"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:28\nleaf_value:0.0012794849893037717\nleaf_count:23\"",
                                                                    "name": "leaf28",
                                                                    "leaf_index": 28.0,
                                                                    "leaf_value": 0.0012794849893037717,
                                                                    "size": 0.0012794849893037717,
                                                                    "leaf_count": 23,
                                                                    "id": "leaf28"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:20\nleaf_value:-0.0007494311267510057\nleaf_count:20\"",
                                                    "name": "leaf20",
                                                    "leaf_index": 20.0,
                                                    "leaf_value": -0.0007494311267510057,
                                                    "size": -0.0007494311267510057,
                                                    "leaf_count": 20,
                                                    "id": "leaf20"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.041819854941264015\ninternal_value:-0.0007774210595857636\ninternal_count:21349\"",
                            "name": "split5",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.041819854941264015,
                            "internal_value": -0.0007774210595857636,
                            "internal_count": 21349,
                            "id": "split5",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:0.0679869055747986\nsplit_gain:0.10912789159008468\ninternal_value:-0.00556172158323682\ninternal_count:1683\"",
                                    "name": "split6",
                                    "split_feature_name": "day_delta",
                                    "threshold": 0.0679869055747986,
                                    "split_gain": 0.10912789159008468,
                                    "internal_value": -0.00556172158323682,
                                    "internal_count": 1683,
                                    "id": "split6",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:9.999999682655225e-21\nsplit_gain:0.03056988858960646\ninternal_value:-0.003762833865496584\ninternal_count:1603\"",
                                            "name": "split7",
                                            "split_feature_name": "day_delta",
                                            "threshold": 9.999999682655225e-21,
                                            "split_gain": 0.03056988858960646,
                                            "internal_value": -0.003762833865496584,
                                            "internal_count": 1603,
                                            "id": "split7",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.02997459843754768\nsplit_gain:0.009073658608089088\ninternal_value:0.0003577211452920892\ninternal_count:848\"",
                                                    "name": "split21",
                                                    "split_feature_name": "high2_2_5",
                                                    "threshold": -0.02997459843754768,
                                                    "split_gain": 0.009073658608089088,
                                                    "internal_value": 0.0003577211452920892,
                                                    "internal_count": 848,
                                                    "id": "split21",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:5\nleaf_value:-0.0009076814616551868\nleaf_count:91\"",
                                                            "name": "leaf5",
                                                            "leaf_index": 5.0,
                                                            "leaf_value": -0.0009076814616551868,
                                                            "size": -0.0009076814616551868,
                                                            "leaf_count": 91,
                                                            "id": "leaf5"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:22\nleaf_value:0.0001491859526174256\nleaf_count:757\"",
                                                            "name": "leaf22",
                                                            "leaf_index": 22.0,
                                                            "leaf_value": 0.0001491859526174256,
                                                            "size": 0.0001491859526174256,
                                                            "leaf_count": 757,
                                                            "id": "leaf22"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.1182611435651779\nsplit_gain:0.014820738999913721\ninternal_value:-0.008390953930594325\ninternal_count:755\"",
                                                    "name": "split16",
                                                    "split_feature_name": "low2_5_30",
                                                    "threshold": -0.1182611435651779,
                                                    "split_gain": 0.014820738999913721,
                                                    "internal_value": -0.008390953930594325,
                                                    "internal_count": 755,
                                                    "id": "split16",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:8\nleaf_value:-0.002451566995982573\nleaf_count:53\"",
                                                            "name": "leaf8",
                                                            "leaf_index": 8.0,
                                                            "leaf_value": -0.002451566995982573,
                                                            "size": -0.002451566995982573,
                                                            "leaf_count": 53,
                                                            "id": "leaf8"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:stk5_30\nthreshold:-0.07407404482364653\nsplit_gain:0.008294166575947032\ninternal_value:-0.007173560840068308\ninternal_count:702\"",
                                                            "name": "split25",
                                                            "split_feature_name": "stk5_30",
                                                            "threshold": -0.07407404482364653,
                                                            "split_gain": 0.008294166575947032,
                                                            "internal_value": -0.007173560840068308,
                                                            "internal_count": 702,
                                                            "id": "split25",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:17\nleaf_value:-0.001482042262457179\nleaf_count:118\"",
                                                                    "name": "leaf17",
                                                                    "leaf_index": 17.0,
                                                                    "leaf_value": -0.001482042262457179,
                                                                    "size": -0.001482042262457179,
                                                                    "leaf_count": 118,
                                                                    "id": "leaf17"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:26\nleaf_value:-0.0005628475753473426\nleaf_count:584\"",
                                                                    "name": "leaf26",
                                                                    "leaf_index": 26.0,
                                                                    "leaf_value": -0.0005628475753473426,
                                                                    "size": -0.0005628475753473426,
                                                                    "leaf_count": 584,
                                                                    "id": "leaf26"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:0.12474024295806886\nsplit_gain:0.0293035693460241\ninternal_value:-0.0416069342274568\ninternal_count:80\"",
                                            "name": "split8",
                                            "split_feature_name": "day_delta",
                                            "threshold": 0.12474024295806886,
                                            "split_gain": 0.0293035693460241,
                                            "internal_value": -0.0416069342274568,
                                            "internal_count": 80,
                                            "id": "split8",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:7\nleaf_value:-0.0029819681052247003\nleaf_count:58\"",
                                                    "name": "leaf7",
                                                    "leaf_index": 7.0,
                                                    "leaf_value": -0.0029819681052247003,
                                                    "size": -0.0029819681052247003,
                                                    "leaf_count": 58,
                                                    "id": "leaf7"
                                                },
                                                {
                                                    "label": "\"leaf_index:9\nleaf_value:-0.0072682419871191745\nleaf_count:22\"",
                                                    "name": "leaf9",
                                                    "leaf_index": 9.0,
                                                    "leaf_value": -0.0072682419871191745,
                                                    "size": -0.0072682419871191745,
                                                    "leaf_count": 22,
                                                    "id": "leaf9"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.01677731145173311\nsplit_gain:0.01662177849322988\ninternal_value:-0.000367984581333718\ninternal_count:19666\"",
                                    "name": "split13",
                                    "split_feature_name": "low2_5_30",
                                    "threshold": -0.01677731145173311,
                                    "split_gain": 0.01662177849322988,
                                    "internal_value": -0.000367984581333718,
                                    "internal_count": 19666,
                                    "id": "split13",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:stk1_2\nthreshold:-0.09349579736590384\nsplit_gain:0.016129005622967152\ninternal_value:-0.001250306755848565\ninternal_count:10237\"",
                                            "name": "split14",
                                            "split_feature_name": "stk1_2",
                                            "threshold": -0.09349579736590384,
                                            "split_gain": 0.016129005622967152,
                                            "internal_value": -0.001250306755848565,
                                            "internal_count": 10237,
                                            "id": "split14",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:6\nleaf_value:0.0024118663761764766\nleaf_count:25\"",
                                                    "name": "leaf6",
                                                    "leaf_index": 6.0,
                                                    "leaf_value": 0.0024118663761764766,
                                                    "size": 0.0024118663761764766,
                                                    "leaf_count": 25,
                                                    "id": "leaf6"
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.2672511935234069\nsplit_gain:0.00914567395373856\ninternal_value:-0.001312412539528582\ninternal_count:10212\"",
                                                    "name": "split20",
                                                    "split_feature_name": "low2_5_30",
                                                    "threshold": -0.2672511935234069,
                                                    "split_gain": 0.00914567395373856,
                                                    "internal_value": -0.001312412539528582,
                                                    "internal_count": 10212,
                                                    "id": "split20",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:stk2_5\nthreshold:-0.09375209733843802\nsplit_gain:0.008434140205211372\ninternal_value:-0.008377376705498641\ninternal_count:180\"",
                                                            "name": "split23",
                                                            "split_feature_name": "stk2_5",
                                                            "threshold": -0.09375209733843802,
                                                            "split_gain": 0.008434140205211372,
                                                            "internal_value": -0.008377376705498641,
                                                            "internal_count": 180,
                                                            "id": "split23",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:15\nleaf_value:0.0009966932353563608\nleaf_count:22\"",
                                                                    "name": "leaf15",
                                                                    "leaf_index": 15.0,
                                                                    "leaf_value": 0.0009966932353563608,
                                                                    "size": 0.0009966932353563608,
                                                                    "leaf_count": 22,
                                                                    "id": "leaf15"
                                                                },
                                                                {
                                                                    "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:330673.09375000006\nsplit_gain:0.009235515804560463\ninternal_value:-0.010931647587140221\ninternal_count:158\"",
                                                                    "name": "split24",
                                                                    "split_feature_name": "avg_dolvol1_2",
                                                                    "threshold": 330673.09375000006,
                                                                    "split_gain": 0.009235515804560463,
                                                                    "internal_value": -0.010931647587140221,
                                                                    "internal_count": 158,
                                                                    "id": "split24",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"split_feature_name:stk5_30\nthreshold:0.37985301017761236\nsplit_gain:0.0072159473261720845\ninternal_value:-0.007775923184170905\ninternal_count:135\"",
                                                                            "name": "split28",
                                                                            "split_feature_name": "stk5_30",
                                                                            "threshold": 0.37985301017761236,
                                                                            "split_gain": 0.0072159473261720845,
                                                                            "internal_value": -0.007775923184170905,
                                                                            "internal_count": 135,
                                                                            "id": "split28",
                                                                            "children": [
                                                                                {
                                                                                    "label": "\"leaf_index:24\nleaf_value:-0.0003868002228860167\nleaf_count:105\"",
                                                                                    "name": "leaf24",
                                                                                    "leaf_index": 24.0,
                                                                                    "leaf_value": -0.0003868002228860167,
                                                                                    "size": -0.0003868002228860167,
                                                                                    "leaf_count": 105,
                                                                                    "id": "leaf24"
                                                                                },
                                                                                {
                                                                                    "label": "\"leaf_index:29\nleaf_value:-0.002145364652775849\nleaf_count:30\"",
                                                                                    "name": "leaf29",
                                                                                    "leaf_index": 29.0,
                                                                                    "leaf_value": -0.002145364652775849,
                                                                                    "size": -0.002145364652775849,
                                                                                    "leaf_count": 30,
                                                                                    "id": "leaf29"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:25\nleaf_value:-0.0029454377778481856\nleaf_count:23\"",
                                                                            "name": "leaf25",
                                                                            "leaf_index": 25.0,
                                                                            "leaf_value": -0.0029454377778481856,
                                                                            "size": -0.0029454377778481856,
                                                                            "leaf_count": 23,
                                                                            "id": "leaf25"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:low2_2_5\nthreshold:-0.019903366453945633\nsplit_gain:0.007812514021916168\ninternal_value:-0.0011856488284166789\ninternal_count:10032\"",
                                                            "name": "split26",
                                                            "split_feature_name": "low2_2_5",
                                                            "threshold": -0.019903366453945633,
                                                            "split_gain": 0.007812514021916168,
                                                            "internal_value": -0.0011856488284166789,
                                                            "internal_count": 10032,
                                                            "id": "split26",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:21\nleaf_value:-0.0002771048664016738\nleaf_count:2373\"",
                                                                    "name": "leaf21",
                                                                    "leaf_index": 21.0,
                                                                    "leaf_value": -0.0002771048664016738,
                                                                    "size": -0.0002771048664016738,
                                                                    "leaf_count": 2373,
                                                                    "id": "leaf21"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:27\nleaf_value:-6.944419071633901e-05\nleaf_count:7659\"",
                                                                    "name": "leaf27",
                                                                    "leaf_index": 27.0,
                                                                    "leaf_value": -6.944419071633901e-05,
                                                                    "size": -6.944419071633901e-05,
                                                                    "leaf_count": 7659,
                                                                    "id": "leaf27"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:stk2_5\nthreshold:-0.1498427242040634\nsplit_gain:0.010123986745346841\ninternal_value:0.0005899464930653156\ninternal_count:9429\"",
                                            "name": "split17",
                                            "split_feature_name": "stk2_5",
                                            "threshold": -0.1498427242040634,
                                            "split_gain": 0.010123986745346841,
                                            "internal_value": 0.0005899464930653156,
                                            "internal_count": 9429,
                                            "id": "split17",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:14\nleaf_value:0.0014243060740732796\nleaf_count:54\"",
                                                    "name": "leaf14",
                                                    "leaf_index": 14.0,
                                                    "leaf_value": 0.0014243060740732796,
                                                    "size": 0.0014243060740732796,
                                                    "leaf_count": 54,
                                                    "id": "leaf14"
                                                },
                                                {
                                                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.007096099390974337\ninternal_value:0.000511304554998751\ninternal_count:9375\"",
                                                    "name": "split29",
                                                    "split_feature_name": "daytime",
                                                    "threshold": 15.250000000000002,
                                                    "split_gain": 0.007096099390974337,
                                                    "internal_value": 0.000511304554998751,
                                                    "internal_count": 9375,
                                                    "id": "split29",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:18\nleaf_value:2.54009726566209e-05\nleaf_count:8621\"",
                                                            "name": "leaf18",
                                                            "leaf_index": 18.0,
                                                            "leaf_value": 2.54009726566209e-05,
                                                            "size": 2.54009726566209e-05,
                                                            "leaf_count": 8621,
                                                            "id": "leaf18"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:30\nleaf_value:0.0003453133090697616\nleaf_count:754\"",
                                                            "name": "leaf30",
                                                            "leaf_index": 30.0,
                                                            "leaf_value": 0.0003453133090697616,
                                                            "size": 0.0003453133090697616,
                                                            "leaf_count": 754,
                                                            "id": "leaf30"
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
                "leaf3": ">"
            },
            "split11": {
                "split18": ">"
            },
            "split18": {
                "leaf19": ">"
            },
            "split3": {
                "split12": ">"
            },
            "split12": {
                "leaf13": ">"
            },
            "split15": {
                "leaf16": ">"
            },
            "split4": {
                "split5": ">"
            },
            "split9": {
                "split10": ">"
            },
            "split10": {
                "split19": ">"
            },
            "split19": {
                "leaf20": ">"
            },
            "split22": {
                "split27": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split5": {
                "split13": ">"
            },
            "split6": {
                "split8": ">"
            },
            "split7": {
                "split16": ">"
            },
            "split21": {
                "leaf22": ">"
            },
            "split16": {
                "split25": ">"
            },
            "split25": {
                "leaf26": ">"
            },
            "split8": {
                "leaf9": ">"
            },
            "split13": {
                "split17": ">"
            },
            "split14": {
                "split20": ">"
            },
            "split20": {
                "split26": ">"
            },
            "split23": {
                "split24": ">"
            },
            "split24": {
                "leaf25": ">"
            },
            "split28": {
                "leaf29": ">"
            },
            "split26": {
                "leaf27": ">"
            },
            "split17": {
                "split29": ">"
            },
            "split29": {
                "leaf30": ">"
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.09759795665740965\nsplit_gain:0.08904370458818146\ninternal_value:0\ninternal_count:24771\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.09759795665740965,
            "split_gain": 0.08904370458818146,
            "internal_value": 0.0,
            "internal_count": 24771,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.05196535112014068\ninternal_value:0.00828033326301021\ninternal_count:1234\"",
                    "name": "split1",
                    "split_feature_name": "daytime",
                    "threshold": 15.250000000000002,
                    "split_gain": 0.05196535112014068,
                    "internal_value": 0.00828033326301021,
                    "internal_count": 1234,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.03756620995350322\ninternal_value:0.006063091402238857\ninternal_count:1105\"",
                            "name": "split2",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.03756620995350322,
                            "internal_value": 0.006063091402238857,
                            "internal_count": 1105,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:89532.21875000001\nsplit_gain:0.00694758864013266\ninternal_value:0.029385722503782463\ninternal_count:65\"",
                                    "name": "split26",
                                    "split_feature_name": "avg_dolvol2_5",
                                    "threshold": 89532.21875000001,
                                    "split_gain": 0.00694758864013266,
                                    "internal_value": 0.029385722503782463,
                                    "internal_count": 65,
                                    "id": "split26",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:0\nleaf_value:0.0021735049457111883\nleaf_count:42\"",
                                            "name": "leaf0",
                                            "leaf_index": 0.0,
                                            "leaf_value": 0.0021735049457111883,
                                            "size": 0.0021735049457111883,
                                            "leaf_count": 42,
                                            "id": "leaf0"
                                        },
                                        {
                                            "label": "\"leaf_index:27\nleaf_value:0.004335651676292005\nleaf_count:23\"",
                                            "name": "leaf27",
                                            "leaf_index": 27.0,
                                            "leaf_value": 0.004335651676292005,
                                            "size": 0.004335651676292005,
                                            "leaf_count": 23,
                                            "id": "leaf27"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.02997459843754768\nsplit_gain:0.022789177408708984\ninternal_value:0.004605426958392382\ninternal_count:1040\"",
                                    "name": "split3",
                                    "split_feature_name": "high2_2_5",
                                    "threshold": -0.02997459843754768,
                                    "split_gain": 0.022789177408708984,
                                    "internal_value": 0.004605426958392382,
                                    "internal_count": 1040,
                                    "id": "split3",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:stk1_2\nthreshold:-0.005025835940614342\nsplit_gain:0.010301935330829959\ninternal_value:0.010878269934906828\ninternal_count:372\"",
                                            "name": "split18",
                                            "split_feature_name": "stk1_2",
                                            "threshold": -0.005025835940614342,
                                            "split_gain": 0.010301935330829959,
                                            "internal_value": 0.010878269934906828,
                                            "internal_count": 372,
                                            "id": "split18",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:3\nleaf_value:0.0030917080550959025\nleaf_count:24\"",
                                                    "name": "leaf3",
                                                    "leaf_index": 3.0,
                                                    "leaf_value": 0.0030917080550959025,
                                                    "size": 0.0030917080550959025,
                                                    "leaf_count": 24,
                                                    "id": "leaf3"
                                                },
                                                {
                                                    "label": "\"leaf_index:19\nleaf_value:0.0009496282995868747\nleaf_count:348\"",
                                                    "name": "leaf19",
                                                    "leaf_index": 19.0,
                                                    "leaf_value": 0.0009496282995868747,
                                                    "size": 0.0009496282995868747,
                                                    "leaf_count": 348,
                                                    "id": "leaf19"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:4\nleaf_value:0.00011121670972196665\nleaf_count:668\"",
                                            "name": "leaf4",
                                            "leaf_index": 4.0,
                                            "leaf_value": 0.00011121670972196665,
                                            "size": 0.00011121670972196665,
                                            "leaf_count": 668,
                                            "id": "leaf4"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.3163991570472717\nsplit_gain:0.015693722358003384\ninternal_value:0.027272986411477997\ninternal_count:129\"",
                            "name": "split9",
                            "split_feature_name": "low2_5_30",
                            "threshold": -0.3163991570472717,
                            "split_gain": 0.015693722358003384,
                            "internal_value": 0.027272986411477997,
                            "internal_count": 129,
                            "id": "split9",
                            "children": [
                                {
                                    "label": "\"leaf_index:2\nleaf_value:0.0007236337087427576\nleaf_count:30\"",
                                    "name": "leaf2",
                                    "leaf_index": 2.0,
                                    "leaf_value": 0.0007236337087427576,
                                    "size": 0.0007236337087427576,
                                    "leaf_count": 30,
                                    "id": "leaf2"
                                },
                                {
                                    "label": "\"split_feature_name:stk5_30\nthreshold:0.05506283789873124\nsplit_gain:0.013714490612337912\ninternal_value:0.03334469832785691\ninternal_count:99\"",
                                    "name": "split12",
                                    "split_feature_name": "stk5_30",
                                    "threshold": 0.05506283789873124,
                                    "split_gain": 0.013714490612337912,
                                    "internal_value": 0.03334469832785691,
                                    "internal_count": 99,
                                    "id": "split12",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:10\nleaf_value:0.005208697748353838\nleaf_count:28\"",
                                            "name": "leaf10",
                                            "leaf_index": 10.0,
                                            "leaf_value": 0.005208697748353838,
                                            "size": 0.005208697748353838,
                                            "leaf_count": 28,
                                            "id": "leaf10"
                                        },
                                        {
                                            "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:40152.41796875001\nsplit_gain:0.010993305652367093\ninternal_value:0.025953376970686753\ninternal_count:71\"",
                                            "name": "split16",
                                            "split_feature_name": "avg_dolvol2_5",
                                            "threshold": 40152.41796875001,
                                            "split_gain": 0.010993305652367093,
                                            "internal_value": 0.025953376970686753,
                                            "internal_count": 71,
                                            "id": "split16",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:13\nleaf_value:0.0014025213738047594\nleaf_count:37\"",
                                                    "name": "leaf13",
                                                    "leaf_index": 13.0,
                                                    "leaf_value": 0.0014025213738047594,
                                                    "size": 0.0014025213738047594,
                                                    "leaf_count": 37,
                                                    "id": "leaf13"
                                                },
                                                {
                                                    "label": "\"leaf_index:17\nleaf_value:0.0038934025194441134\nleaf_count:34\"",
                                                    "name": "leaf17",
                                                    "leaf_index": 17.0,
                                                    "leaf_value": 0.0038934025194441134,
                                                    "size": 0.0038934025194441134,
                                                    "leaf_count": 34,
                                                    "id": "leaf17"
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
                    "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.020530454472287664\ninternal_value:-0.0004341220299330383\ninternal_count:23537\"",
                    "name": "split4",
                    "split_feature_name": "daytime",
                    "threshold": 9.750000000000002,
                    "split_gain": 0.020530454472287664,
                    "internal_value": -0.0004341220299330383,
                    "internal_count": 23537,
                    "id": "split4",
                    "children": [
                        {
                            "label": "\"split_feature_name:day_delta\nthreshold:0.05940595269203187\nsplit_gain:0.09616722791647349\ninternal_value:-0.00363557898389024\ninternal_count:1846\"",
                            "name": "split5",
                            "split_feature_name": "day_delta",
                            "threshold": 0.05940595269203187,
                            "split_gain": 0.09616722791647349,
                            "internal_value": -0.00363557898389024,
                            "internal_count": 1846,
                            "id": "split5",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:-0.02029722929000854\nsplit_gain:0.040586064156092325\ninternal_value:-0.0018275264702645947\ninternal_count:1737\"",
                                    "name": "split6",
                                    "split_feature_name": "day_delta",
                                    "threshold": -0.02029722929000854,
                                    "split_gain": 0.040586064156092325,
                                    "internal_value": -0.0018275264702645947,
                                    "internal_count": 1737,
                                    "id": "split6",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:1\nleaf_value:0.0006612888234733625\nleaf_count:429\"",
                                            "name": "leaf1",
                                            "leaf_index": 1.0,
                                            "leaf_value": 0.0006612888234733625,
                                            "size": 0.0006612888234733625,
                                            "leaf_count": 429,
                                            "id": "leaf1"
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.1182611435651779\nsplit_gain:0.01130478991193247\ninternal_value:-0.004595827623509424\ninternal_count:1308\"",
                                            "name": "split15",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.1182611435651779,
                                            "split_gain": 0.01130478991193247,
                                            "internal_value": -0.004595827623509424,
                                            "internal_count": 1308,
                                            "id": "split15",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:-0.0009407401084899901\nsplit_gain:0.0066682447634712864\ninternal_value:-0.015609333340908887\ninternal_count:87\"",
                                                    "name": "split27",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": -0.0009407401084899901,
                                                    "split_gain": 0.0066682447634712864,
                                                    "internal_value": -0.015609333340908887,
                                                    "internal_count": 87,
                                                    "id": "split27",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:7\nleaf_value:-0.0003228178989706192\nleaf_count:29\"",
                                                            "name": "leaf7",
                                                            "leaf_index": 7.0,
                                                            "leaf_value": -0.0003228178989706192,
                                                            "size": -0.0003228178989706192,
                                                            "leaf_count": 29,
                                                            "id": "leaf7"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:28\nleaf_value:-0.0021799910516510238\nleaf_count:58\"",
                                                            "name": "leaf28",
                                                            "leaf_index": 28.0,
                                                            "leaf_value": -0.0021799910516510238,
                                                            "size": -0.0021799910516510238,
                                                            "leaf_count": 58,
                                                            "id": "leaf28"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:9.999999682655225e-21\nsplit_gain:0.007383882177540647\ninternal_value:-0.003811081515881452\ninternal_count:1221\"",
                                                    "name": "split24",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": 9.999999682655225e-21,
                                                    "split_gain": 0.007383882177540647,
                                                    "internal_value": -0.003811081515881452,
                                                    "internal_count": 1221,
                                                    "id": "split24",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:16\nleaf_value:-0.00010631906577110683\nleaf_count:543\"",
                                                            "name": "leaf16",
                                                            "leaf_index": 16.0,
                                                            "leaf_value": -0.00010631906577110683,
                                                            "size": -0.00010631906577110683,
                                                            "leaf_count": 543,
                                                            "id": "leaf16"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:25\nleaf_value:-0.0006011825964239149\nleaf_count:678\"",
                                                            "name": "leaf25",
                                                            "leaf_index": 25.0,
                                                            "leaf_value": -0.0006011825964239149,
                                                            "size": -0.0006011825964239149,
                                                            "leaf_count": 678,
                                                            "id": "leaf25"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:0.12474024295806886\nsplit_gain:0.029954290412365872\ninternal_value:-0.03244830573772277\ninternal_count:109\"",
                                    "name": "split7",
                                    "split_feature_name": "day_delta",
                                    "threshold": 0.12474024295806886,
                                    "split_gain": 0.029954290412365872,
                                    "internal_value": -0.03244830573772277,
                                    "internal_count": 109,
                                    "id": "split7",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:6\nleaf_value:-0.002411210847130024\nleaf_count:87\"",
                                            "name": "leaf6",
                                            "leaf_index": 6.0,
                                            "leaf_value": -0.002411210847130024,
                                            "size": -0.002411210847130024,
                                            "leaf_count": 87,
                                            "id": "leaf6"
                                        },
                                        {
                                            "label": "\"leaf_index:8\nleaf_value:-0.006541417674584823\nleaf_count:22\"",
                                            "name": "leaf8",
                                            "leaf_index": 8.0,
                                            "leaf_value": -0.006541417674584823,
                                            "size": -0.006541417674584823,
                                            "leaf_count": 22,
                                            "id": "leaf8"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.016849152150957877\ninternal_value:-0.000161663888906576\ninternal_count:21691\"",
                            "name": "split8",
                            "split_feature_name": "daytime",
                            "threshold": 15.250000000000002,
                            "split_gain": 0.016849152150957877,
                            "internal_value": -0.000161663888906576,
                            "internal_count": 21691,
                            "id": "split8",
                            "children": [
                                {
                                    "label": "\"split_feature_name:stk1_2\nthreshold:-0.07395678386092185\nsplit_gain:0.01133919915141628\ninternal_value:-0.0004240527675072222\ninternal_count:19925\"",
                                    "name": "split13",
                                    "split_feature_name": "stk1_2",
                                    "threshold": -0.07395678386092185,
                                    "split_gain": 0.01133919915141628,
                                    "internal_value": -0.0004240527675072222,
                                    "internal_count": 19925,
                                    "id": "split13",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:5\nleaf_value:0.0008417629453156729\nleaf_count:144\"",
                                            "name": "leaf5",
                                            "leaf_index": 5.0,
                                            "leaf_value": 0.0008417629453156729,
                                            "size": 0.0008417629453156729,
                                            "leaf_count": 144,
                                            "id": "leaf5"
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.3163991570472717\nsplit_gain:0.011328039760295412\ninternal_value:-0.0004884176752356287\ninternal_count:19781\"",
                                            "name": "split14",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.3163991570472717,
                                            "split_gain": 0.011328039760295412,
                                            "internal_value": -0.0004884176752356287,
                                            "internal_count": 19781,
                                            "id": "split14",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:daytime\nthreshold:10.750000000000002\nsplit_gain:0.010333723392491135\ninternal_value:-0.009516959743872365\ninternal_count:138\"",
                                                    "name": "split17",
                                                    "split_feature_name": "daytime",
                                                    "threshold": 10.750000000000002,
                                                    "split_gain": 0.010333723392491135,
                                                    "internal_value": -0.009516959743872365,
                                                    "internal_count": 138,
                                                    "id": "split17",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:14\nleaf_value:-0.0021557906616548514\nleaf_count:47\"",
                                                            "name": "leaf14",
                                                            "leaf_index": 14.0,
                                                            "leaf_value": -0.0021557906616548514,
                                                            "size": -0.0021557906616548514,
                                                            "leaf_count": 47,
                                                            "id": "leaf14"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:18\nleaf_value:-0.0003298009161281388\nleaf_count:91\"",
                                                            "name": "leaf18",
                                                            "leaf_index": 18.0,
                                                            "leaf_value": -0.0003298009161281388,
                                                            "size": -0.0003298009161281388,
                                                            "leaf_count": 91,
                                                            "id": "leaf18"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.007003841688856482\nsplit_gain:0.0076627434604933185\ninternal_value:-0.00042498852462361067\ninternal_count:19643\"",
                                                    "name": "split23",
                                                    "split_feature_name": "low2_5_30",
                                                    "threshold": -0.007003841688856482,
                                                    "split_gain": 0.0076627434604933185,
                                                    "internal_value": -0.00042498852462361067,
                                                    "internal_count": 19643,
                                                    "id": "split23",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:day_delta\nthreshold:-0.021852016448974606\nsplit_gain:0.006558629287695869\ninternal_value:-0.0008401318778644665\ninternal_count:13624\"",
                                                            "name": "split28",
                                                            "split_feature_name": "day_delta",
                                                            "threshold": -0.021852016448974606,
                                                            "split_gain": 0.006558629287695869,
                                                            "internal_value": -0.0008401318778644665,
                                                            "internal_count": 13624,
                                                            "id": "split28",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:15\nleaf_value:2.0421297625139066e-05\nleaf_count:4172\"",
                                                                    "name": "leaf15",
                                                                    "leaf_index": 15.0,
                                                                    "leaf_value": 2.0421297625139066e-05,
                                                                    "size": 2.0421297625139066e-05,
                                                                    "leaf_count": 4172,
                                                                    "id": "leaf15"
                                                                },
                                                                {
                                                                    "label": "\"split_feature_name:low2_2_5\nthreshold:-0.013891600072383879\nsplit_gain:0.009573775968718466\ninternal_value:-0.001301093233278279\ninternal_count:9452\"",
                                                                    "name": "split29",
                                                                    "split_feature_name": "low2_2_5",
                                                                    "threshold": -0.013891600072383879,
                                                                    "split_gain": 0.009573775968718466,
                                                                    "internal_value": -0.001301093233278279,
                                                                    "internal_count": 9452,
                                                                    "id": "split29",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:29\nleaf_value:-0.0003045742514166443\nleaf_count:2360\"",
                                                                            "name": "leaf29",
                                                                            "leaf_index": 29.0,
                                                                            "leaf_value": -0.0003045742514166443,
                                                                            "size": -0.0003045742514166443,
                                                                            "leaf_count": 2360,
                                                                            "id": "leaf29"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:30\nleaf_value:-7.205274827289183e-05\nleaf_count:7092\"",
                                                                            "name": "leaf30",
                                                                            "leaf_index": 30.0,
                                                                            "leaf_value": -7.205274827289183e-05,
                                                                            "size": -7.205274827289183e-05,
                                                                            "leaf_count": 7092,
                                                                            "id": "leaf30"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:24\nleaf_value:5.146880071181104e-05\nleaf_count:6019\"",
                                                            "name": "leaf24",
                                                            "leaf_index": 24.0,
                                                            "leaf_value": 5.146880071181104e-05,
                                                            "size": 5.146880071181104e-05,
                                                            "leaf_count": 6019,
                                                            "id": "leaf24"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:dayofweek\nthreshold:3.5000000000000004\nsplit_gain:0.014752283365696818\ninternal_value:0.00279875423460298\ninternal_count:1766\"",
                                    "name": "split10",
                                    "split_feature_name": "dayofweek",
                                    "threshold": 3.5000000000000004,
                                    "split_gain": 0.014752283365696818,
                                    "internal_value": 0.00279875423460298,
                                    "internal_count": 1766,
                                    "id": "split10",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:173476.47656250003\nsplit_gain:0.009409866553349806\ninternal_value:0.001377199139131056\ninternal_count:1422\"",
                                            "name": "split20",
                                            "split_feature_name": "avg_dolvol5_30",
                                            "threshold": 173476.47656250003,
                                            "split_gain": 0.009409866553349806,
                                            "internal_value": 0.001377199139131056,
                                            "internal_count": 1422,
                                            "id": "split20",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:0.0472380742430687\nsplit_gain:0.008092129663379424\ninternal_value:0.002136633927850632\ninternal_count:1308\"",
                                                    "name": "split21",
                                                    "split_feature_name": "high2_2_5",
                                                    "threshold": 0.0472380742430687,
                                                    "split_gain": 0.008092129663379424,
                                                    "internal_value": 0.002136633927850632,
                                                    "internal_count": 1308,
                                                    "id": "split21",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:9\nleaf_value:0.00017122532215417427\nleaf_count:1271\"",
                                                            "name": "leaf9",
                                                            "leaf_index": 9.0,
                                                            "leaf_value": 0.00017122532215417427,
                                                            "size": 0.00017122532215417427,
                                                            "leaf_count": 1271,
                                                            "id": "leaf9"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:22\nleaf_value:0.0016714684677001945\nleaf_count:37\"",
                                                            "name": "leaf22",
                                                            "leaf_index": 22.0,
                                                            "leaf_value": 0.0016714684677001945,
                                                            "size": 0.0016714684677001945,
                                                            "leaf_count": 37,
                                                            "id": "leaf22"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_2_5\nthreshold:0.006026265444234014\nsplit_gain:0.00778640279526201\ninternal_value:-0.007336315805125132\ninternal_count:114\"",
                                                    "name": "split22",
                                                    "split_feature_name": "low2_2_5",
                                                    "threshold": 0.006026265444234014,
                                                    "split_gain": 0.00778640279526201,
                                                    "internal_value": -0.007336315805125132,
                                                    "internal_count": 114,
                                                    "id": "split22",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:103304.61718750001\nsplit_gain:0.007170616762713121\ninternal_value:-0.0029561453802364594\ninternal_count:89\"",
                                                            "name": "split25",
                                                            "split_feature_name": "avg_dolvol1_2",
                                                            "threshold": 103304.61718750001,
                                                            "split_gain": 0.007170616762713121,
                                                            "internal_value": -0.0029561453802364594,
                                                            "internal_count": 89,
                                                            "id": "split25",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:21\nleaf_value:-0.0011831860083879697\nleaf_count:45\"",
                                                                    "name": "leaf21",
                                                                    "leaf_index": 21.0,
                                                                    "leaf_value": -0.0011831860083879697,
                                                                    "size": -0.0011831860083879697,
                                                                    "leaf_count": 45,
                                                                    "id": "leaf21"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:26\nleaf_value:0.0006121290112125941\nleaf_count:44\"",
                                                                    "name": "leaf26",
                                                                    "leaf_index": 26.0,
                                                                    "leaf_value": 0.0006121290112125941,
                                                                    "size": 0.0006121290112125941,
                                                                    "leaf_count": 44,
                                                                    "id": "leaf26"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:23\nleaf_value:-0.0022929722517728806\nleaf_count:25\"",
                                                            "name": "leaf23",
                                                            "leaf_index": 23.0,
                                                            "leaf_value": -0.0022929722517728806,
                                                            "size": -0.0022929722517728806,
                                                            "leaf_count": 25,
                                                            "id": "leaf23"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:high2_5_30\nthreshold:0.12288127094507219\nsplit_gain:0.015504049017515176\ninternal_value:0.008675066286234014\ninternal_count:344\"",
                                            "name": "split11",
                                            "split_feature_name": "high2_5_30",
                                            "threshold": 0.12288127094507219,
                                            "split_gain": 0.015504049017515176,
                                            "internal_value": 0.008675066286234014,
                                            "internal_count": 344,
                                            "id": "split11",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:-0.02889531850814819\nsplit_gain:0.009484227169111233\ninternal_value:0.0067157903881262465\ninternal_count:317\"",
                                                    "name": "split19",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": -0.02889531850814819,
                                                    "split_gain": 0.009484227169111233,
                                                    "internal_value": 0.0067157903881262465,
                                                    "internal_count": 317,
                                                    "id": "split19",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:11\nleaf_value:0.0018036203592782841\nleaf_count:60\"",
                                                            "name": "leaf11",
                                                            "leaf_index": 11.0,
                                                            "leaf_value": 0.0018036203592782841,
                                                            "size": 0.0018036203592782841,
                                                            "leaf_count": 60,
                                                            "id": "leaf11"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:20\nleaf_value:0.0004072892363692801\nleaf_count:257\"",
                                                            "name": "leaf20",
                                                            "leaf_index": 20.0,
                                                            "leaf_value": 0.0004072892363692801,
                                                            "size": 0.0004072892363692801,
                                                            "leaf_count": 257,
                                                            "id": "leaf20"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:12\nleaf_value:0.0031678416645499296\nleaf_count:27\"",
                                                    "name": "leaf12",
                                                    "leaf_index": 12.0,
                                                    "leaf_value": 0.0031678416645499296,
                                                    "size": 0.0031678416645499296,
                                                    "leaf_count": 27,
                                                    "id": "leaf12"
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
                "split9": ">"
            },
            "split2": {
                "split3": ">"
            },
            "split26": {
                "leaf27": ">"
            },
            "split3": {
                "leaf4": ">"
            },
            "split18": {
                "leaf19": ">"
            },
            "split9": {
                "split12": ">"
            },
            "split12": {
                "split16": ">"
            },
            "split16": {
                "leaf17": ">"
            },
            "split4": {
                "split8": ">"
            },
            "split5": {
                "split7": ">"
            },
            "split6": {
                "split15": ">"
            },
            "split15": {
                "split24": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split24": {
                "leaf25": ">"
            },
            "split7": {
                "leaf8": ">"
            },
            "split8": {
                "split10": ">"
            },
            "split13": {
                "split14": ">"
            },
            "split14": {
                "split23": ">"
            },
            "split17": {
                "leaf18": ">"
            },
            "split23": {
                "leaf24": ">"
            },
            "split28": {
                "split29": ">"
            },
            "split29": {
                "leaf30": ">"
            },
            "split10": {
                "split11": ">"
            },
            "split20": {
                "split22": ">"
            },
            "split21": {
                "leaf22": ">"
            },
            "split22": {
                "leaf23": ">"
            },
            "split25": {
                "leaf26": ">"
            },
            "split11": {
                "leaf12": ">"
            },
            "split19": {
                "leaf20": ">"
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.128958523273468\nsplit_gain:0.07575431019861653\ninternal_value:0\ninternal_count:24771\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.128958523273468,
            "split_gain": 0.07575431019861653,
            "internal_value": 0.0,
            "internal_count": 24771,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.036848355384276624\ninternal_value:0.009856263420301705\ninternal_count:756\"",
                    "name": "split1",
                    "split_feature_name": "daytime",
                    "threshold": 15.250000000000002,
                    "split_gain": 0.036848355384276624,
                    "internal_value": 0.009856263420301705,
                    "internal_count": 756,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:high2_2_5\nthreshold:-0.07020704075694083\nsplit_gain:0.0322674140391381\ninternal_value:0.007371435263469459\ninternal_count:671\"",
                            "name": "split2",
                            "split_feature_name": "high2_2_5",
                            "threshold": -0.07020704075694083,
                            "split_gain": 0.0322674140391381,
                            "internal_value": 0.007371435263469459,
                            "internal_count": 671,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"split_feature_name:stk1_2\nthreshold:0.006136327050626279\nsplit_gain:0.013823241178464\ninternal_value:0.020937979548343328\ninternal_count:139\"",
                                    "name": "split12",
                                    "split_feature_name": "stk1_2",
                                    "threshold": 0.006136327050626279,
                                    "split_gain": 0.013823241178464,
                                    "internal_value": 0.020937979548343328,
                                    "internal_count": 139,
                                    "id": "split12",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:0\nleaf_value:0.004393540040837252\nleaf_count:22\"",
                                            "name": "leaf0",
                                            "leaf_index": 0.0,
                                            "leaf_value": 0.004393540040837252,
                                            "size": 0.004393540040837252,
                                            "leaf_count": 22,
                                            "id": "leaf0"
                                        },
                                        {
                                            "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:17249.585937500004\nsplit_gain:0.008078337013879347\ninternal_value:0.016613678190047238\ninternal_count:117\"",
                                            "name": "split20",
                                            "split_feature_name": "avg_dolvol2_5",
                                            "threshold": 17249.585937500004,
                                            "split_gain": 0.008078337013879347,
                                            "internal_value": 0.016613678190047238,
                                            "internal_count": 117,
                                            "id": "split20",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:13\nleaf_value:0.003491316548315808\nleaf_count:20\"",
                                                    "name": "leaf13",
                                                    "leaf_index": 13.0,
                                                    "leaf_value": 0.003491316548315808,
                                                    "size": 0.003491316548315808,
                                                    "leaf_count": 20,
                                                    "id": "leaf13"
                                                },
                                                {
                                                    "label": "\"leaf_index:21\nleaf_value:0.0012840588026519233\nleaf_count:97\"",
                                                    "name": "leaf21",
                                                    "leaf_index": 21.0,
                                                    "leaf_value": 0.0012840588026519233,
                                                    "size": 0.0012840588026519233,
                                                    "leaf_count": 97,
                                                    "id": "leaf21"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"leaf_index:3\nleaf_value:0.00038267930536997835\nleaf_count:532\"",
                                    "name": "leaf3",
                                    "leaf_index": 3.0,
                                    "leaf_value": 0.00038267930536997835,
                                    "size": 0.00038267930536997835,
                                    "leaf_count": 532,
                                    "id": "leaf3"
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:stk1_2\nthreshold:-0.0015001218416728077\nsplit_gain:0.025066244500662846\ninternal_value:0.02947178922305979\ninternal_count:85\"",
                            "name": "split3",
                            "split_feature_name": "stk1_2",
                            "threshold": -0.0015001218416728077,
                            "split_gain": 0.025066244500662846,
                            "internal_value": 0.02947178922305979,
                            "internal_count": 85,
                            "id": "split3",
                            "children": [
                                {
                                    "label": "\"leaf_index:2\nleaf_value:0.006043007132830099\nleaf_count:20\"",
                                    "name": "leaf2",
                                    "leaf_index": 2.0,
                                    "leaf_value": 0.006043007132830099,
                                    "size": 0.006043007132830099,
                                    "leaf_count": 20,
                                    "id": "leaf2"
                                },
                                {
                                    "label": "\"split_feature_name:dayofweek\nthreshold:9.999999682655225e-21\nsplit_gain:0.014756389022674277\ninternal_value:0.01994616395990866\ninternal_count:65\"",
                                    "name": "split11",
                                    "split_feature_name": "dayofweek",
                                    "threshold": 9.999999682655225e-21,
                                    "split_gain": 0.014756389022674277,
                                    "internal_value": 0.01994616395990866,
                                    "internal_count": 65,
                                    "id": "split11",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:4\nleaf_value:-4.146012968545699e-05\nleaf_count:23\"",
                                            "name": "leaf4",
                                            "leaf_index": 4.0,
                                            "leaf_value": -4.146012968545699e-05,
                                            "size": -4.146012968545699e-05,
                                            "leaf_count": 23,
                                            "id": "leaf4"
                                        },
                                        {
                                            "label": "\"leaf_index:12\nleaf_value:0.0031096106838612333\nleaf_count:42\"",
                                            "name": "leaf12",
                                            "leaf_index": 12.0,
                                            "leaf_value": 0.0031096106838612333,
                                            "size": 0.0031096106838612333,
                                            "leaf_count": 42,
                                            "id": "leaf12"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "\"split_feature_name:day_delta\nthreshold:-0.04749780893325805\nsplit_gain:0.02135016464618338\ninternal_value:-0.0003102783749528869\ninternal_count:24015\"",
                    "name": "split4",
                    "split_feature_name": "day_delta",
                    "threshold": -0.04749780893325805,
                    "split_gain": 0.02135016464618338,
                    "internal_value": -0.0003102783749528869,
                    "internal_count": 24015,
                    "id": "split4",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.01987719794998726\ninternal_value:0.0024681929332187325\ninternal_count:2480\"",
                            "name": "split9",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.01987719794998726,
                            "internal_value": 0.0024681929332187325,
                            "internal_count": 2480,
                            "id": "split9",
                            "children": [
                                {
                                    "label": "\"leaf_index:1\nleaf_value:0.0012498325976171617\nleaf_count:183\"",
                                    "name": "leaf1",
                                    "leaf_index": 1.0,
                                    "leaf_value": 0.0012498325976171617,
                                    "size": 0.0012498325976171617,
                                    "leaf_count": 183,
                                    "id": "leaf1"
                                },
                                {
                                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.018902512664032717\ninternal_value:0.0016691009232664563\ninternal_count:2297\"",
                                    "name": "split10",
                                    "split_feature_name": "daytime",
                                    "threshold": 15.250000000000002,
                                    "split_gain": 0.018902512664032717,
                                    "internal_value": 0.0016691009232664563,
                                    "internal_count": 2297,
                                    "id": "split10",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:10\nleaf_value:7.687001381311843e-05\nleaf_count:2091\"",
                                            "name": "leaf10",
                                            "leaf_index": 10.0,
                                            "leaf_value": 7.687001381311843e-05,
                                            "size": 7.687001381311843e-05,
                                            "leaf_count": 2091,
                                            "id": "leaf10"
                                        },
                                        {
                                            "label": "\"split_feature_name:stk5_30\nthreshold:0.16382580250501635\nsplit_gain:0.007620082537229844\ninternal_value:0.010808605980149242\ninternal_count:206\"",
                                            "name": "split21",
                                            "split_feature_name": "stk5_30",
                                            "threshold": 0.16382580250501635,
                                            "split_gain": 0.007620082537229844,
                                            "internal_value": 0.010808605980149242,
                                            "internal_count": 206,
                                            "id": "split21",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:11\nleaf_value:0.0012802971482190231\nleaf_count:186\"",
                                                    "name": "leaf11",
                                                    "leaf_index": 11.0,
                                                    "leaf_value": 0.0012802971482190231,
                                                    "size": 0.0012802971482190231,
                                                    "leaf_count": 186,
                                                    "id": "leaf11"
                                                },
                                                {
                                                    "label": "\"leaf_index:22\nleaf_value:-0.0007738993188831955\nleaf_count:20\"",
                                                    "name": "leaf22",
                                                    "leaf_index": 22.0,
                                                    "leaf_value": -0.0007738993188831955,
                                                    "size": -0.0007738993188831955,
                                                    "leaf_count": 20,
                                                    "id": "leaf22"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.027016756017609805\ninternal_value:-0.0006302509240248914\ninternal_count:21535\"",
                            "name": "split5",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.027016756017609805,
                            "internal_value": -0.0006302509240248914,
                            "internal_count": 21535,
                            "id": "split5",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:0.0679869055747986\nsplit_gain:0.07277623304528548\ninternal_value:-0.004456170213727947\ninternal_count:1700\"",
                                    "name": "split6",
                                    "split_feature_name": "day_delta",
                                    "threshold": 0.0679869055747986,
                                    "split_gain": 0.07277623304528548,
                                    "internal_value": -0.004456170213727947,
                                    "internal_count": 1700,
                                    "id": "split6",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:-0.0009407401084899901\nsplit_gain:0.020645016224264595\ninternal_value:-0.0030021922926197825\ninternal_count:1620\"",
                                            "name": "split8",
                                            "split_feature_name": "day_delta",
                                            "threshold": -0.0009407401084899901,
                                            "split_gain": 0.020645016224264595,
                                            "internal_value": -0.0030021922926197825,
                                            "internal_count": 1620,
                                            "id": "split8",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:5\nleaf_value:0.00010241341712978652\nleaf_count:713\"",
                                                    "name": "leaf5",
                                                    "leaf_index": 5.0,
                                                    "leaf_value": 0.00010241341712978652,
                                                    "size": 0.00010241341712978652,
                                                    "leaf_count": 713,
                                                    "id": "leaf5"
                                                },
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:107451.97265625001\nsplit_gain:0.012497179305682796\ninternal_value:-0.006167319931840601\ninternal_count:907\"",
                                                    "name": "split13",
                                                    "split_feature_name": "avg_dolvol1_2",
                                                    "threshold": 107451.97265625001,
                                                    "split_gain": 0.012497179305682796,
                                                    "internal_value": -0.006167319931840601,
                                                    "internal_count": 907,
                                                    "id": "split13",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:9\nleaf_value:-0.0004950568846907873\nleaf_count:819\"",
                                                            "name": "leaf9",
                                                            "leaf_index": 9.0,
                                                            "leaf_value": -0.0004950568846907873,
                                                            "size": -0.0004950568846907873,
                                                            "leaf_count": 819,
                                                            "id": "leaf9"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:14\nleaf_value:-0.001749140105183952\nleaf_count:88\"",
                                                            "name": "leaf14",
                                                            "leaf_index": 14.0,
                                                            "leaf_value": -0.001749140105183952,
                                                            "size": -0.001749140105183952,
                                                            "leaf_count": 88,
                                                            "id": "leaf14"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:95441.09765625001\nsplit_gain:0.025934964248199313\ninternal_value:-0.03389922311616829\ninternal_count:80\"",
                                            "name": "split7",
                                            "split_feature_name": "avg_dolvol2_5",
                                            "threshold": 95441.09765625001,
                                            "split_gain": 0.025934964248199313,
                                            "internal_value": -0.03389922311616829,
                                            "internal_count": 80,
                                            "id": "split7",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:7\nleaf_value:-0.002315731396922305\nleaf_count:59\"",
                                                    "name": "leaf7",
                                                    "leaf_index": 7.0,
                                                    "leaf_value": -0.002315731396922305,
                                                    "size": -0.002315731396922305,
                                                    "leaf_count": 59,
                                                    "id": "leaf7"
                                                },
                                                {
                                                    "label": "\"leaf_index:8\nleaf_value:-0.006407887262425253\nleaf_count:21\"",
                                                    "name": "leaf8",
                                                    "leaf_index": 8.0,
                                                    "leaf_value": -0.006407887262425253,
                                                    "size": -0.006407887262425253,
                                                    "leaf_count": 21,
                                                    "id": "leaf8"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:stk2_5\nthreshold:-0.1498427242040634\nsplit_gain:0.01226437540456499\ninternal_value:-0.0003023425402338555\ninternal_count:19835\"",
                                    "name": "split14",
                                    "split_feature_name": "stk2_5",
                                    "threshold": -0.1498427242040634,
                                    "split_gain": 0.01226437540456499,
                                    "internal_value": -0.0003023425402338555,
                                    "internal_count": 19835,
                                    "id": "split14",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:6\nleaf_value:0.0011902051496535267\nleaf_count:82\"",
                                            "name": "leaf6",
                                            "leaf_index": 6.0,
                                            "leaf_value": 0.0011902051496535267,
                                            "size": 0.0011902051496535267,
                                            "leaf_count": 82,
                                            "id": "leaf6"
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_2_5\nthreshold:-0.010398683138191698\nsplit_gain:0.011846912633097494\ninternal_value:-0.0003530062526327351\ninternal_count:19753\"",
                                            "name": "split15",
                                            "split_feature_name": "low2_2_5",
                                            "threshold": -0.010398683138191698,
                                            "split_gain": 0.011846912633097494,
                                            "internal_value": -0.0003530062526327351,
                                            "internal_count": 19753,
                                            "id": "split15",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:13523.875976562502\nsplit_gain:0.007482556416900538\ninternal_value:-0.0015366772882470878\ninternal_count:5921\"",
                                                    "name": "split25",
                                                    "split_feature_name": "avg_dolvol5_30",
                                                    "threshold": 13523.875976562502,
                                                    "split_gain": 0.007482556416900538,
                                                    "internal_value": -0.0015366772882470878,
                                                    "internal_count": 5921,
                                                    "id": "split25",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:15\nleaf_value:-0.0002742183723816912\nleaf_count:2754\"",
                                                            "name": "leaf15",
                                                            "leaf_index": 15.0,
                                                            "leaf_value": -0.0002742183723816912,
                                                            "size": -0.0002742183723816912,
                                                            "leaf_count": 2754,
                                                            "id": "leaf15"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.008587688366092666\ninternal_value:-0.0004883777228668241\ninternal_count:3167\"",
                                                            "name": "split26",
                                                            "split_feature_name": "daytime",
                                                            "threshold": 15.250000000000002,
                                                            "split_gain": 0.008587688366092666,
                                                            "internal_value": -0.0004883777228668241,
                                                            "internal_count": 3167,
                                                            "id": "split26",
                                                            "children": [
                                                                {
                                                                    "label": "\"split_feature_name:stk5_30\nthreshold:0.22684168070554736\nsplit_gain:0.007444322132753745\ninternal_value:-0.0009746289634928902\ninternal_count:2913\"",
                                                                    "name": "split27",
                                                                    "split_feature_name": "stk5_30",
                                                                    "threshold": 0.22684168070554736,
                                                                    "split_gain": 0.007444322132753745,
                                                                    "internal_value": -0.0009746289634928902,
                                                                    "internal_count": 2913,
                                                                    "id": "split27",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:26\nleaf_value:-6.795185534101014e-05\nleaf_count:2817\"",
                                                                            "name": "leaf26",
                                                                            "leaf_index": 26.0,
                                                                            "leaf_value": -6.795185534101014e-05,
                                                                            "size": -6.795185534101014e-05,
                                                                            "leaf_count": 2817,
                                                                            "id": "leaf26"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:28\nleaf_value:-0.0009634275059359729\nleaf_count:96\"",
                                                                            "name": "leaf28",
                                                                            "leaf_index": 28.0,
                                                                            "leaf_value": -0.0009634275059359729,
                                                                            "size": -0.0009634275059359729,
                                                                            "leaf_count": 96,
                                                                            "id": "leaf28"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:27\nleaf_value:0.0005088196544628178\nleaf_count:254\"",
                                                                    "name": "leaf27",
                                                                    "leaf_index": 27.0,
                                                                    "leaf_value": 0.0005088196544628178,
                                                                    "size": 0.0005088196544628178,
                                                                    "leaf_count": 254,
                                                                    "id": "leaf27"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:36640.33593750001\nsplit_gain:0.01034819193007674\ninternal_value:0.00015368231025568178\ninternal_count:13832\"",
                                                    "name": "split16",
                                                    "split_feature_name": "avg_dolvol5_30",
                                                    "threshold": 36640.33593750001,
                                                    "split_gain": 0.01034819193007674,
                                                    "internal_value": 0.00015368231025568178,
                                                    "internal_count": 13832,
                                                    "id": "split16",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.011800948452049015\ninternal_value:0.0006567184752038504\ninternal_count:10336\"",
                                                            "name": "split17",
                                                            "split_feature_name": "daytime",
                                                            "threshold": 15.250000000000002,
                                                            "split_gain": 0.011800948452049015,
                                                            "internal_value": 0.0006567184752038504,
                                                            "internal_count": 10336,
                                                            "id": "split17",
                                                            "children": [
                                                                {
                                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:0.03152338787913323\nsplit_gain:0.008945262858617522\ninternal_value:0.0003391261727919064\ninternal_count:9497\"",
                                                                    "name": "split18",
                                                                    "split_feature_name": "high2_2_5",
                                                                    "threshold": 0.03152338787913323,
                                                                    "split_gain": 0.008945262858617522,
                                                                    "internal_value": 0.0003391261727919064,
                                                                    "internal_count": 9497,
                                                                    "id": "split18",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:16\nleaf_value:-9.788790823467484e-06\nleaf_count:7896\"",
                                                                            "name": "leaf16",
                                                                            "leaf_index": 16.0,
                                                                            "leaf_value": -9.788790823467484e-06,
                                                                            "size": -9.788790823467484e-06,
                                                                            "leaf_count": 7896,
                                                                            "id": "leaf16"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:19\nleaf_value:0.00024944435892727845\nleaf_count:1601\"",
                                                                            "name": "leaf19",
                                                                            "leaf_index": 19.0,
                                                                            "leaf_value": 0.00024944435892727845,
                                                                            "size": 0.00024944435892727845,
                                                                            "leaf_count": 1601,
                                                                            "id": "leaf19"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "label": "\"split_feature_name:high2_5_30\nthreshold:0.12092357501387598\nsplit_gain:0.008519608156808595\ninternal_value:0.004251681640884699\ninternal_count:839\"",
                                                                    "name": "split19",
                                                                    "split_feature_name": "high2_5_30",
                                                                    "threshold": 0.12092357501387598,
                                                                    "split_gain": 0.008519608156808595,
                                                                    "internal_value": 0.004251681640884699,
                                                                    "internal_count": 839,
                                                                    "id": "split19",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:18\nleaf_value:0.00035110427316388054\nleaf_count:796\"",
                                                                            "name": "leaf18",
                                                                            "leaf_index": 18.0,
                                                                            "leaf_value": 0.00035110427316388054,
                                                                            "size": 0.00035110427316388054,
                                                                            "leaf_count": 796,
                                                                            "id": "leaf18"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:20\nleaf_value:0.0017962113542273794\nleaf_count:43\"",
                                                                            "name": "leaf20",
                                                                            "leaf_index": 20.0,
                                                                            "leaf_value": 0.0017962113542273794,
                                                                            "size": 0.0017962113542273794,
                                                                            "leaf_count": 43,
                                                                            "id": "leaf20"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:day_delta\nthreshold:0.07737520337104799\nsplit_gain:0.0076002537290862215\ninternal_value:-0.001333555046982382\ninternal_count:3496\"",
                                                            "name": "split22",
                                                            "split_feature_name": "day_delta",
                                                            "threshold": 0.07737520337104799,
                                                            "split_gain": 0.0076002537290862215,
                                                            "internal_value": -0.001333555046982382,
                                                            "internal_count": 3496,
                                                            "id": "split22",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:17\nleaf_value:-7.361427921493138e-05\nleaf_count:3003\"",
                                                                    "name": "leaf17",
                                                                    "leaf_index": 17.0,
                                                                    "leaf_value": -7.361427921493138e-05,
                                                                    "size": -7.361427921493138e-05,
                                                                    "leaf_count": 3003,
                                                                    "id": "leaf17"
                                                                },
                                                                {
                                                                    "label": "\"split_feature_name:stk2_5\nthreshold:-0.06997897103428839\nsplit_gain:0.01425159751525919\ninternal_value:-0.0049725591063408065\ninternal_count:493\"",
                                                                    "name": "split23",
                                                                    "split_feature_name": "stk2_5",
                                                                    "threshold": -0.06997897103428839,
                                                                    "split_gain": 0.01425159751525919,
                                                                    "internal_value": -0.0049725591063408065,
                                                                    "internal_count": 493,
                                                                    "id": "split23",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"split_feature_name:stk1_2\nthreshold:-0.029451384209096428\nsplit_gain:0.015883362741431973\ninternal_value:0.006252447037695674\ninternal_count:92\"",
                                                                            "name": "split24",
                                                                            "split_feature_name": "stk1_2",
                                                                            "threshold": -0.029451384209096428,
                                                                            "split_gain": 0.015883362741431973,
                                                                            "internal_value": 0.006252447037695674,
                                                                            "internal_count": 92,
                                                                            "id": "split24",
                                                                            "children": [
                                                                                {
                                                                                    "label": "\"leaf_index:23\nleaf_value:0.0027186947743197943\nleaf_count:26\"",
                                                                                    "name": "leaf23",
                                                                                    "leaf_index": 23.0,
                                                                                    "leaf_value": 0.0027186947743197943,
                                                                                    "size": 0.0027186947743197943,
                                                                                    "leaf_count": 26,
                                                                                    "id": "leaf23"
                                                                                },
                                                                                {
                                                                                    "label": "\"leaf_index:25\nleaf_value:-0.0001994477482653703\nleaf_count:66\"",
                                                                                    "name": "leaf25",
                                                                                    "leaf_index": 25.0,
                                                                                    "leaf_value": -0.0001994477482653703,
                                                                                    "size": -0.0001994477482653703,
                                                                                    "leaf_count": 66,
                                                                                    "id": "leaf25"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "label": "\"split_feature_name:vol1_10\nthreshold:0.31104147434234625\nsplit_gain:0.007277689891378378\ninternal_value:-0.007547872236643441\ninternal_count:401\"",
                                                                            "name": "split28",
                                                                            "split_feature_name": "vol1_10",
                                                                            "threshold": 0.31104147434234625,
                                                                            "split_gain": 0.007277689891378378,
                                                                            "internal_value": -0.007547872236643441,
                                                                            "internal_count": 401,
                                                                            "id": "split28",
                                                                            "children": [
                                                                                {
                                                                                    "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:95441.09765625001\nsplit_gain:0.007802703114670351\ninternal_value:-0.010481702538313317\ninternal_count:272\"",
                                                                                    "name": "split29",
                                                                                    "split_feature_name": "avg_dolvol2_5",
                                                                                    "threshold": 95441.09765625001,
                                                                                    "split_gain": 0.007802703114670351,
                                                                                    "internal_value": -0.010481702538313317,
                                                                                    "internal_count": 272,
                                                                                    "id": "split29",
                                                                                    "children": [
                                                                                        {
                                                                                            "label": "\"leaf_index:24\nleaf_value:-0.0005651421774770522\nleaf_count:150\"",
                                                                                            "name": "leaf24",
                                                                                            "leaf_index": 24.0,
                                                                                            "leaf_value": -0.0005651421774770522,
                                                                                            "size": -0.0005651421774770522,
                                                                                            "leaf_count": 150,
                                                                                            "id": "leaf24"
                                                                                        },
                                                                                        {
                                                                                            "label": "\"leaf_index:30\nleaf_value:-0.0016420572329554459\nleaf_count:122\"",
                                                                                            "name": "leaf30",
                                                                                            "leaf_index": 30.0,
                                                                                            "leaf_value": -0.0016420572329554459,
                                                                                            "size": -0.0016420572329554459,
                                                                                            "leaf_count": 122,
                                                                                            "id": "leaf30"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "label": "\"leaf_index:29\nleaf_value:-0.00013618114455255623\nleaf_count:129\"",
                                                                                    "name": "leaf29",
                                                                                    "leaf_index": 29.0,
                                                                                    "leaf_value": -0.00013618114455255623,
                                                                                    "size": -0.00013618114455255623,
                                                                                    "leaf_count": 129,
                                                                                    "id": "leaf29"
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
                "leaf3": ">"
            },
            "split12": {
                "split20": ">"
            },
            "split20": {
                "leaf21": ">"
            },
            "split3": {
                "split11": ">"
            },
            "split11": {
                "leaf12": ">"
            },
            "split4": {
                "split5": ">"
            },
            "split9": {
                "split10": ">"
            },
            "split10": {
                "split21": ">"
            },
            "split21": {
                "leaf22": ">"
            },
            "split5": {
                "split14": ">"
            },
            "split6": {
                "split7": ">"
            },
            "split8": {
                "split13": ">"
            },
            "split13": {
                "leaf14": ">"
            },
            "split7": {
                "leaf8": ">"
            },
            "split14": {
                "split15": ">"
            },
            "split15": {
                "split16": ">"
            },
            "split25": {
                "split26": ">"
            },
            "split26": {
                "leaf27": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split16": {
                "split22": ">"
            },
            "split17": {
                "split19": ">"
            },
            "split18": {
                "leaf19": ">"
            },
            "split19": {
                "leaf20": ">"
            },
            "split22": {
                "split23": ">"
            },
            "split23": {
                "split28": ">"
            },
            "split24": {
                "leaf25": ">"
            },
            "split28": {
                "leaf29": ">"
            },
            "split29": {
                "leaf30": ">"
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.128958523273468\nsplit_gain:0.0613609920971777\ninternal_value:0\ninternal_count:24771\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.128958523273468,
            "split_gain": 0.0613609920971777,
            "internal_value": 0.0,
            "internal_count": 24771,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.02984716929779818\ninternal_value:0.008870637136212844\ninternal_count:756\"",
                    "name": "split1",
                    "split_feature_name": "daytime",
                    "threshold": 15.250000000000002,
                    "split_gain": 0.02984716929779818,
                    "internal_value": 0.008870637136212844,
                    "internal_count": 756,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:high2_2_5\nthreshold:-0.07020704075694083\nsplit_gain:0.026136605446935617\ninternal_value:0.00663429174124655\ninternal_count:671\"",
                            "name": "split2",
                            "split_feature_name": "high2_2_5",
                            "threshold": -0.07020704075694083,
                            "split_gain": 0.026136605446935617,
                            "internal_value": 0.00663429174124655,
                            "internal_count": 671,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:16444.453125000004\nsplit_gain:0.011567250928322594\ninternal_value:0.018844181615206006\ninternal_count:139\"",
                                    "name": "split13",
                                    "split_feature_name": "avg_dolvol5_30",
                                    "threshold": 16444.453125000004,
                                    "split_gain": 0.011567250928322594,
                                    "internal_value": 0.018844181615206006,
                                    "internal_count": 139,
                                    "id": "split13",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:0\nleaf_value:0.0031815085366479648\nleaf_count:46\"",
                                            "name": "leaf0",
                                            "leaf_index": 0.0,
                                            "leaf_value": 0.0031815085366479648,
                                            "size": 0.0031815085366479648,
                                            "leaf_count": 46,
                                            "id": "leaf0"
                                        },
                                        {
                                            "label": "\"leaf_index:14\nleaf_value:0.0012428465781242697\nleaf_count:93\"",
                                            "name": "leaf14",
                                            "leaf_index": 14.0,
                                            "leaf_value": 0.0012428465781242697,
                                            "size": 0.0012428465781242697,
                                            "leaf_count": 93,
                                            "id": "leaf14"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"leaf_index:3\nleaf_value:0.00034441137478624065\nleaf_count:532\"",
                                    "name": "leaf3",
                                    "leaf_index": 3.0,
                                    "leaf_value": 0.00034441137478624065,
                                    "size": 0.00034441137478624065,
                                    "leaf_count": 532,
                                    "id": "leaf3"
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:stk5_30\nthreshold:0.07543436810374261\nsplit_gain:0.021093994640392105\ninternal_value:0.026524610783535\ninternal_count:85\"",
                            "name": "split3",
                            "split_feature_name": "stk5_30",
                            "threshold": 0.07543436810374261,
                            "split_gain": 0.021093994640392105,
                            "internal_value": 0.026524610783535,
                            "internal_count": 85,
                            "id": "split3",
                            "children": [
                                {
                                    "label": "\"leaf_index:2\nleaf_value:0.005492417220957578\nleaf_count:20\"",
                                    "name": "leaf2",
                                    "leaf_index": 2.0,
                                    "leaf_value": 0.005492417220957578,
                                    "size": 0.005492417220957578,
                                    "leaf_count": 20,
                                    "id": "leaf2"
                                },
                                {
                                    "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:95441.09765625001\nsplit_gain:0.02027093345347405\ninternal_value:0.01778628419090707\ninternal_count:65\"",
                                    "name": "split4",
                                    "split_feature_name": "avg_dolvol2_5",
                                    "threshold": 95441.09765625001,
                                    "split_gain": 0.02027093345347405,
                                    "internal_value": 0.01778628419090707,
                                    "internal_count": 65,
                                    "id": "split4",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:35908.86718750001\nsplit_gain:0.007896236944307359\ninternal_value:0.003825165981106693\ninternal_count:40\"",
                                            "name": "split17",
                                            "split_feature_name": "avg_dolvol5_30",
                                            "threshold": 35908.86718750001,
                                            "split_gain": 0.007896236944307359,
                                            "internal_value": 0.003825165981106693,
                                            "internal_count": 40,
                                            "id": "split17",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:4\nleaf_value:0.001787528781715082\nleaf_count:20\"",
                                                    "name": "leaf4",
                                                    "leaf_index": 4.0,
                                                    "leaf_value": 0.001787528781715082,
                                                    "size": 0.001787528781715082,
                                                    "leaf_count": 20,
                                                    "id": "leaf4"
                                                },
                                                {
                                                    "label": "\"leaf_index:18\nleaf_value:-0.0010224955854937435\nleaf_count:20\"",
                                                    "name": "leaf18",
                                                    "leaf_index": 18.0,
                                                    "leaf_value": -0.0010224955854937435,
                                                    "size": -0.0010224955854937435,
                                                    "leaf_count": 20,
                                                    "id": "leaf18"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:5\nleaf_value:0.004012407332658768\nleaf_count:25\"",
                                            "name": "leaf5",
                                            "leaf_index": 5.0,
                                            "leaf_value": 0.004012407332658768,
                                            "size": 0.004012407332658768,
                                            "leaf_count": 25,
                                            "id": "leaf5"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "\"split_feature_name:day_delta\nthreshold:-0.045169234275817864\nsplit_gain:0.01739978049306738\ninternal_value:-0.0002792505418688965\ninternal_count:24015\"",
                    "name": "split5",
                    "split_feature_name": "day_delta",
                    "threshold": -0.045169234275817864,
                    "split_gain": 0.01739978049306738,
                    "internal_value": -0.0002792505418688965,
                    "internal_count": 24015,
                    "id": "split5",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.015636068389398586\ninternal_value:0.002129485912086585\ninternal_count:2666\"",
                            "name": "split9",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.015636068389398586,
                            "internal_value": 0.002129485912086585,
                            "internal_count": 2666,
                            "id": "split9",
                            "children": [
                                {
                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.08171082660555838\nsplit_gain:0.0061182995842376554\ninternal_value:0.01063332916399304\ninternal_count:200\"",
                                    "name": "split27",
                                    "split_feature_name": "high2_2_5",
                                    "threshold": -0.08171082660555838,
                                    "split_gain": 0.0061182995842376554,
                                    "internal_value": 0.01063332916399304,
                                    "internal_count": 200,
                                    "id": "split27",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:1\nleaf_value:-0.000509921763031426\nleaf_count:22\"",
                                            "name": "leaf1",
                                            "leaf_index": 1.0,
                                            "leaf_value": -0.000509921763031426,
                                            "size": -0.000509921763031426,
                                            "leaf_count": 22,
                                            "id": "leaf1"
                                        },
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:-0.08211588859558104\nsplit_gain:0.00844067443309653\ninternal_value:0.012577801239693941\ninternal_count:178\"",
                                            "name": "split28",
                                            "split_feature_name": "day_delta",
                                            "threshold": -0.08211588859558104,
                                            "split_gain": 0.00844067443309653,
                                            "internal_value": 0.012577801239693941,
                                            "internal_count": 178,
                                            "id": "split28",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:28\nleaf_value:0.0025165517030783548\nleaf_count:41\"",
                                                    "name": "leaf28",
                                                    "leaf_index": 28.0,
                                                    "leaf_value": 0.0025165517030783548,
                                                    "size": 0.0025165517030783548,
                                                    "leaf_count": 41,
                                                    "id": "leaf28"
                                                },
                                                {
                                                    "label": "\"leaf_index:29\nleaf_value:0.0008810674616083185\nleaf_count:137\"",
                                                    "name": "leaf29",
                                                    "leaf_index": 29.0,
                                                    "leaf_value": 0.0008810674616083185,
                                                    "size": 0.0008810674616083185,
                                                    "leaf_count": 137,
                                                    "id": "leaf29"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.015630145586206328\ninternal_value:0.0014397987059303439\ninternal_count:2466\"",
                                    "name": "split10",
                                    "split_feature_name": "daytime",
                                    "threshold": 15.250000000000002,
                                    "split_gain": 0.015630145586206328,
                                    "internal_value": 0.0014397987059303439,
                                    "internal_count": 2466,
                                    "id": "split10",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:10\nleaf_value:6.51861805070039e-05\nleaf_count:2246\"",
                                            "name": "leaf10",
                                            "leaf_index": 10.0,
                                            "leaf_value": 6.51861805070039e-05,
                                            "size": 6.51861805070039e-05,
                                            "leaf_count": 2246,
                                            "id": "leaf10"
                                        },
                                        {
                                            "label": "\"leaf_index:11\nleaf_value:0.0009483918157440546\nleaf_count:220\"",
                                            "name": "leaf11",
                                            "leaf_index": 11.0,
                                            "leaf_value": 0.0009483918157440546,
                                            "size": 0.0009483918157440546,
                                            "leaf_count": 220,
                                            "id": "leaf11"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.02252888514524845\ninternal_value:-0.0005800464286198129\ninternal_count:21349\"",
                            "name": "split6",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.02252888514524845,
                            "internal_value": -0.0005800464286198129,
                            "internal_count": 21349,
                            "id": "split6",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:0.08991083502769472\nsplit_gain:0.05980397009814832\ninternal_value:-0.004091581750699404\ninternal_count:1683\"",
                                    "name": "split7",
                                    "split_feature_name": "day_delta",
                                    "threshold": 0.08991083502769472,
                                    "split_gain": 0.05980397009814832,
                                    "internal_value": -0.004091581750699404,
                                    "internal_count": 1683,
                                    "id": "split7",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:0.034146338701248176\nsplit_gain:0.023292192879541544\ninternal_value:-0.0031379223273234223\ninternal_count:1641\"",
                                            "name": "split8",
                                            "split_feature_name": "day_delta",
                                            "threshold": 0.034146338701248176,
                                            "split_gain": 0.023292192879541544,
                                            "internal_value": -0.0031379223273234223,
                                            "internal_count": 1641,
                                            "id": "split8",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:-0.01267951726913452\nsplit_gain:0.009123324806293274\ninternal_value:-0.0016438720431324327\ninternal_count:1418\"",
                                                    "name": "split15",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": -0.01267951726913452,
                                                    "split_gain": 0.009123324806293274,
                                                    "internal_value": -0.0016438720431324327,
                                                    "internal_count": 1418,
                                                    "id": "split15",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:high2_2_5\nthreshold:-0.02997459843754768\nsplit_gain:0.0076504319627112745\ninternal_value:0.0022138787192395462\ninternal_count:428\"",
                                                            "name": "split18",
                                                            "split_feature_name": "high2_2_5",
                                                            "threshold": -0.02997459843754768,
                                                            "split_gain": 0.0076504319627112745,
                                                            "internal_value": 0.0022138787192395462,
                                                            "internal_count": 428,
                                                            "id": "split18",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:6\nleaf_value:-0.0007777323022198218\nleaf_count:65\"",
                                                                    "name": "leaf6",
                                                                    "leaf_index": 6.0,
                                                                    "leaf_value": -0.0007777323022198218,
                                                                    "size": -0.0007777323022198218,
                                                                    "leaf_count": 65,
                                                                    "id": "leaf6"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:19\nleaf_value:0.0004002936882306915\nleaf_count:363\"",
                                                                    "name": "leaf19",
                                                                    "leaf_index": 19.0,
                                                                    "leaf_value": 0.0004002936882306915,
                                                                    "size": 0.0004002936882306915,
                                                                    "leaf_count": 363,
                                                                    "id": "leaf19"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:high2_2_5\nthreshold:-0.005881405435502528\nsplit_gain:0.007165780658599821\ninternal_value:-0.0033116673222185005\ninternal_count:990\"",
                                                            "name": "split22",
                                                            "split_feature_name": "high2_2_5",
                                                            "threshold": -0.005881405435502528,
                                                            "split_gain": 0.007165780658599821,
                                                            "internal_value": -0.0033116673222185005,
                                                            "internal_count": 990,
                                                            "id": "split22",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:16\nleaf_value:-0.000846556777544737\nleaf_count:212\"",
                                                                    "name": "leaf16",
                                                                    "leaf_index": 16.0,
                                                                    "leaf_value": -0.000846556777544737,
                                                                    "size": -0.000846556777544737,
                                                                    "leaf_count": 212,
                                                                    "id": "leaf16"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:23\nleaf_value:-0.0001907262571467189\nleaf_count:778\"",
                                                                    "name": "leaf23",
                                                                    "leaf_index": 23.0,
                                                                    "leaf_value": -0.0001907262571467189,
                                                                    "size": -0.0001907262571467189,
                                                                    "leaf_count": 778,
                                                                    "id": "leaf23"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:17741.074218750004\nsplit_gain:0.008007063670157799\ninternal_value:-0.012638206197201554\ninternal_count:223\"",
                                                    "name": "split16",
                                                    "split_feature_name": "avg_dolvol5_30",
                                                    "threshold": 17741.074218750004,
                                                    "split_gain": 0.008007063670157799,
                                                    "internal_value": -0.012638206197201554,
                                                    "internal_count": 223,
                                                    "id": "split16",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:9\nleaf_value:-0.0006111759299814117\nleaf_count:102\"",
                                                            "name": "leaf9",
                                                            "leaf_index": 9.0,
                                                            "leaf_value": -0.0006111759299814117,
                                                            "size": -0.0006111759299814117,
                                                            "leaf_count": 102,
                                                            "id": "leaf9"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:17\nleaf_value:-0.0018139839118966172\nleaf_count:121\"",
                                                            "name": "leaf17",
                                                            "leaf_index": 17.0,
                                                            "leaf_value": -0.0018139839118966172,
                                                            "size": -0.0018139839118966172,
                                                            "leaf_count": 121,
                                                            "id": "leaf17"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:117237.47656250001\nsplit_gain:0.014294245476472386\ninternal_value:-0.04135241779260382\ninternal_count:42\"",
                                            "name": "split11",
                                            "split_feature_name": "avg_dolvol1_2",
                                            "threshold": 117237.47656250001,
                                            "split_gain": 0.014294245476472386,
                                            "internal_value": -0.04135241779260382,
                                            "internal_count": 42,
                                            "id": "split11",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:8\nleaf_value:-0.0022003694428713062\nleaf_count:20\"",
                                                    "name": "leaf8",
                                                    "leaf_index": 8.0,
                                                    "leaf_value": -0.0022003694428713062,
                                                    "size": -0.0022003694428713062,
                                                    "leaf_count": 20,
                                                    "id": "leaf8"
                                                },
                                                {
                                                    "label": "\"leaf_index:12\nleaf_value:-0.005894216630523178\nleaf_count:22\"",
                                                    "name": "leaf12",
                                                    "leaf_index": 12.0,
                                                    "leaf_value": -0.005894216630523178,
                                                    "size": -0.005894216630523178,
                                                    "leaf_count": 22,
                                                    "id": "leaf12"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:stk1_2\nthreshold:-0.0586415734142065\nsplit_gain:0.011571823816368006\ninternal_value:-0.0002795321426918178\ninternal_count:19666\"",
                                    "name": "split12",
                                    "split_feature_name": "stk1_2",
                                    "threshold": -0.0586415734142065,
                                    "split_gain": 0.011571823816368006,
                                    "internal_value": -0.0002795321426918178,
                                    "internal_count": 19666,
                                    "id": "split12",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:stk2_5\nthreshold:-0.06542306393384932\nsplit_gain:0.006617424008719144\ninternal_value:0.006023762697588311\ninternal_count:287\"",
                                            "name": "split23",
                                            "split_feature_name": "stk2_5",
                                            "threshold": -0.06542306393384932,
                                            "split_gain": 0.006617424008719144,
                                            "internal_value": 0.006023762697588311,
                                            "internal_count": 287,
                                            "id": "split23",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:7\nleaf_value:0.0023113473124491673\nleaf_count:21\"",
                                                    "name": "leaf7",
                                                    "leaf_index": 7.0,
                                                    "leaf_value": 0.0023113473124491673,
                                                    "size": 0.0023113473124491673,
                                                    "leaf_count": 21,
                                                    "id": "leaf7"
                                                },
                                                {
                                                    "label": "\"split_feature_name:stk2_5\nthreshold:0.03704130090773106\nsplit_gain:0.007366125957568039\ninternal_value:0.004674575032306467\ninternal_count:266\"",
                                                    "name": "split24",
                                                    "split_feature_name": "stk2_5",
                                                    "threshold": 0.03704130090773106,
                                                    "split_gain": 0.007366125957568039,
                                                    "internal_value": 0.004674575032306467,
                                                    "internal_count": 266,
                                                    "id": "split24",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:high2_5_30\nthreshold:0.27082656323909765\nsplit_gain:0.0065360682948626524\ninternal_value:0.0019571152945857084\ninternal_count:210\"",
                                                            "name": "split25",
                                                            "split_feature_name": "high2_5_30",
                                                            "threshold": 0.27082656323909765,
                                                            "split_gain": 0.0065360682948626524,
                                                            "internal_value": 0.0019571152945857084,
                                                            "internal_count": 210,
                                                            "id": "split25",
                                                            "children": [
                                                                {
                                                                    "label": "\"split_feature_name:stk1_2\nthreshold:-0.09349579736590384\nsplit_gain:0.007443158918820237\ninternal_value:0.004007960036078412\ninternal_count:185\"",
                                                                    "name": "split26",
                                                                    "split_feature_name": "stk1_2",
                                                                    "threshold": -0.09349579736590384,
                                                                    "split_gain": 0.007443158918820237,
                                                                    "internal_value": 0.004007960036078412,
                                                                    "internal_count": 185,
                                                                    "id": "split26",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:24\nleaf_value:0.0016483508588096716\nleaf_count:38\"",
                                                                            "name": "leaf24",
                                                                            "leaf_index": 24.0,
                                                                            "leaf_value": 0.0016483508588096716,
                                                                            "size": 0.0016483508588096716,
                                                                            "leaf_count": 38,
                                                                            "id": "leaf24"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:27\nleaf_value:7.829883015430676e-05\nleaf_count:147\"",
                                                                            "name": "leaf27",
                                                                            "leaf_index": 27.0,
                                                                            "leaf_value": 7.829883015430676e-05,
                                                                            "size": 7.829883015430676e-05,
                                                                            "leaf_count": 147,
                                                                            "id": "leaf27"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:26\nleaf_value:-0.0013219135792460293\nleaf_count:25\"",
                                                                    "name": "leaf26",
                                                                    "leaf_index": 26.0,
                                                                    "leaf_value": -0.0013219135792460293,
                                                                    "size": -0.0013219135792460293,
                                                                    "leaf_count": 25,
                                                                    "id": "leaf26"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:25\nleaf_value:0.001486504904875931\nleaf_count:56\"",
                                                            "name": "leaf25",
                                                            "leaf_index": 25.0,
                                                            "leaf_value": 0.001486504904875931,
                                                            "size": 0.001486504904875931,
                                                            "leaf_count": 56,
                                                            "id": "leaf25"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.01677731145173311\nsplit_gain:0.010543082880025374\ninternal_value:-0.00037288296673642263\ninternal_count:19379\"",
                                            "name": "split14",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.01677731145173311,
                                            "split_gain": 0.010543082880025374,
                                            "internal_value": -0.00037288296673642263,
                                            "internal_count": 19379,
                                            "id": "split14",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.21198043972253797\nsplit_gain:0.00750059870290814\ninternal_value:-0.0010779662992140492\ninternal_count:10126\"",
                                                    "name": "split19",
                                                    "split_feature_name": "low2_5_30",
                                                    "threshold": -0.21198043972253797,
                                                    "split_gain": 0.00750059870290814,
                                                    "internal_value": -0.0010779662992140492,
                                                    "internal_count": 10126,
                                                    "id": "split19",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:stk2_5\nthreshold:0.0009975224384106698\nsplit_gain:0.00782028605313101\ninternal_value:-0.006126247479664448\ninternal_count:286\"",
                                                            "name": "split20",
                                                            "split_feature_name": "stk2_5",
                                                            "threshold": 0.0009975224384106698,
                                                            "split_gain": 0.00782028605313101,
                                                            "internal_value": -0.006126247479664448,
                                                            "internal_count": 286,
                                                            "id": "split20",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:13\nleaf_value:-0.00011819258544700828\nleaf_count:151\"",
                                                                    "name": "leaf13",
                                                                    "leaf_index": 13.0,
                                                                    "leaf_value": -0.00011819258544700828,
                                                                    "size": -0.00011819258544700828,
                                                                    "leaf_count": 151,
                                                                    "id": "leaf13"
                                                                },
                                                                {
                                                                    "label": "\"split_feature_name:low2_2_5\nthreshold:0.0064724995754659185\nsplit_gain:0.007899434718487856\ninternal_value:-0.011656562778955925\ninternal_count:135\"",
                                                                    "name": "split21",
                                                                    "split_feature_name": "low2_2_5",
                                                                    "threshold": 0.0064724995754659185,
                                                                    "split_gain": 0.007899434718487856,
                                                                    "internal_value": -0.011656562778955925,
                                                                    "internal_count": 135,
                                                                    "id": "split21",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:21\nleaf_value:-0.0007920582733076859\nleaf_count:109\"",
                                                                            "name": "leaf21",
                                                                            "leaf_index": 21.0,
                                                                            "leaf_value": -0.0007920582733076859,
                                                                            "size": -0.0007920582733076859,
                                                                            "leaf_count": 109,
                                                                            "id": "leaf21"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:22\nleaf_value:-0.002731894066360278\nleaf_count:26\"",
                                                                            "name": "leaf22",
                                                                            "leaf_index": 22.0,
                                                                            "leaf_value": -0.002731894066360278,
                                                                            "size": -0.002731894066360278,
                                                                            "leaf_count": 26,
                                                                            "id": "leaf22"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:20\nleaf_value:-9.312378014895762e-05\nleaf_count:9840\"",
                                                            "name": "leaf20",
                                                            "leaf_index": 20.0,
                                                            "leaf_value": -9.312378014895762e-05,
                                                            "size": -9.312378014895762e-05,
                                                            "leaf_count": 9840,
                                                            "id": "leaf20"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:stk2_5\nthreshold:-0.1498427242040634\nsplit_gain:0.005968818124434363\ninternal_value:0.0003987234122399577\ninternal_count:9253\"",
                                                    "name": "split29",
                                                    "split_feature_name": "stk2_5",
                                                    "threshold": -0.1498427242040634,
                                                    "split_gain": 0.005968818124434363,
                                                    "internal_value": 0.0003987234122399577,
                                                    "internal_count": 9253,
                                                    "id": "split29",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:15\nleaf_value:0.001140633652138771\nleaf_count:49\"",
                                                            "name": "leaf15",
                                                            "leaf_index": 15.0,
                                                            "leaf_value": 0.001140633652138771,
                                                            "size": 0.001140633652138771,
                                                            "leaf_count": 49,
                                                            "id": "leaf15"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:30\nleaf_value:3.401213867783932e-05\nleaf_count:9204\"",
                                                            "name": "leaf30",
                                                            "leaf_index": 30.0,
                                                            "leaf_value": 3.401213867783932e-05,
                                                            "size": 3.401213867783932e-05,
                                                            "leaf_count": 9204,
                                                            "id": "leaf30"
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
                "split3": ">"
            },
            "split2": {
                "leaf3": ">"
            },
            "split13": {
                "leaf14": ">"
            },
            "split3": {
                "split4": ">"
            },
            "split4": {
                "leaf5": ">"
            },
            "split17": {
                "leaf18": ">"
            },
            "split5": {
                "split6": ">"
            },
            "split9": {
                "split10": ">"
            },
            "split27": {
                "split28": ">"
            },
            "split28": {
                "leaf29": ">"
            },
            "split10": {
                "leaf11": ">"
            },
            "split6": {
                "split12": ">"
            },
            "split7": {
                "split11": ">"
            },
            "split8": {
                "split16": ">"
            },
            "split15": {
                "split22": ">"
            },
            "split18": {
                "leaf19": ">"
            },
            "split22": {
                "leaf23": ">"
            },
            "split16": {
                "leaf17": ">"
            },
            "split11": {
                "leaf12": ">"
            },
            "split12": {
                "split14": ">"
            },
            "split23": {
                "split24": ">"
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
            "split14": {
                "split29": ">"
            },
            "split19": {
                "leaf20": ">"
            },
            "split20": {
                "split21": ">"
            },
            "split21": {
                "leaf22": ">"
            },
            "split29": {
                "leaf30": ">"
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.128958523273468\nsplit_gain:0.049702403496194196\ninternal_value:0\ninternal_count:24771\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.128958523273468,
            "split_gain": 0.049702403496194196,
            "internal_value": 0.0,
            "internal_count": 24771,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.02417620725566115\ninternal_value:0.007983573410494799\ninternal_count:756\"",
                    "name": "split1",
                    "split_feature_name": "daytime",
                    "threshold": 15.250000000000002,
                    "split_gain": 0.02417620725566115,
                    "internal_value": 0.007983573410494799,
                    "internal_count": 756,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:high2_2_5\nthreshold:-0.07020704075694083\nsplit_gain:0.02117065066438455\ninternal_value:0.00597086254984502\ninternal_count:671\"",
                            "name": "split2",
                            "split_feature_name": "high2_2_5",
                            "threshold": -0.07020704075694083,
                            "split_gain": 0.02117065066438455,
                            "internal_value": 0.00597086254984502,
                            "internal_count": 671,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"split_feature_name:stk1_2\nthreshold:0.006136327050626279\nsplit_gain:0.01093905170372022\ninternal_value:0.016959763501905634\ninternal_count:139\"",
                                    "name": "split12",
                                    "split_feature_name": "stk1_2",
                                    "threshold": 0.006136327050626279,
                                    "split_gain": 0.01093905170372022,
                                    "internal_value": 0.016959763501905634,
                                    "internal_count": 139,
                                    "id": "split12",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:0\nleaf_value:0.0037417803711088543\nleaf_count:22\"",
                                            "name": "leaf0",
                                            "leaf_index": 0.0,
                                            "leaf_value": 0.0037417803711088543,
                                            "size": 0.0037417803711088543,
                                            "leaf_count": 22,
                                            "id": "leaf0"
                                        },
                                        {
                                            "label": "\"split_feature_name:daytime\nthreshold:13.250000000000002\nsplit_gain:0.007212821880498259\ninternal_value:0.013112952522401156\ninternal_count:117\"",
                                            "name": "split20",
                                            "split_feature_name": "daytime",
                                            "threshold": 13.250000000000002,
                                            "split_gain": 0.007212821880498259,
                                            "internal_value": 0.013112952522401156,
                                            "internal_count": 117,
                                            "id": "split20",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:13\nleaf_value:0.0009124321897635587\nleaf_count:93\"",
                                                    "name": "leaf13",
                                                    "leaf_index": 13.0,
                                                    "leaf_value": 0.0009124321897635587,
                                                    "size": 0.0009124321897635587,
                                                    "leaf_count": 93,
                                                    "id": "leaf13"
                                                },
                                                {
                                                    "label": "\"leaf_index:21\nleaf_value:0.002856889619336774\nleaf_count:24\"",
                                                    "name": "leaf21",
                                                    "leaf_index": 21.0,
                                                    "leaf_value": 0.002856889619336774,
                                                    "size": 0.002856889619336774,
                                                    "leaf_count": 24,
                                                    "id": "leaf21"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"leaf_index:3\nleaf_value:0.0003099702338686325\nleaf_count:532\"",
                                    "name": "leaf3",
                                    "leaf_index": 3.0,
                                    "leaf_value": 0.0003099702338686325,
                                    "size": 0.0003099702338686325,
                                    "leaf_count": 532,
                                    "id": "leaf3"
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:stk1_2\nthreshold:-0.0015001218416728077\nsplit_gain:0.019889707371046374\ninternal_value:0.023872149733977173\ninternal_count:85\"",
                            "name": "split3",
                            "split_feature_name": "stk1_2",
                            "threshold": -0.0015001218416728077,
                            "split_gain": 0.019889707371046374,
                            "internal_value": 0.023872149733977173,
                            "internal_count": 85,
                            "id": "split3",
                            "children": [
                                {
                                    "label": "\"leaf_index:2\nleaf_value:0.0051449111336842185\nleaf_count:20\"",
                                    "name": "leaf2",
                                    "leaf_index": 2.0,
                                    "leaf_value": 0.0051449111336842185,
                                    "size": 0.0051449111336842185,
                                    "leaf_count": 20,
                                    "id": "leaf2"
                                },
                                {
                                    "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:91135.77343750001\nsplit_gain:0.012097700162202834\ninternal_value:0.01538693077924948\ninternal_count:65\"",
                                    "name": "split11",
                                    "split_feature_name": "avg_dolvol5_30",
                                    "threshold": 91135.77343750001,
                                    "split_gain": 0.012097700162202834,
                                    "internal_value": 0.01538693077924948,
                                    "internal_count": 65,
                                    "id": "split11",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.22388353198766706\nsplit_gain:0.010293360204394954\ninternal_value:0.006291914707334298\ninternal_count:45\"",
                                            "name": "split13",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.22388353198766706,
                                            "split_gain": 0.010293360204394954,
                                            "internal_value": 0.006291914707334298,
                                            "internal_count": 45,
                                            "id": "split13",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:4\nleaf_value:-0.0007235578419640661\nleaf_count:25\"",
                                                    "name": "leaf4",
                                                    "leaf_index": 4.0,
                                                    "leaf_value": -0.0007235578419640661,
                                                    "size": -0.0007235578419640661,
                                                    "leaf_count": 25,
                                                    "id": "leaf4"
                                                },
                                                {
                                                    "label": "\"leaf_index:14\nleaf_value:0.0023201281116053\nleaf_count:20\"",
                                                    "name": "leaf14",
                                                    "leaf_index": 14.0,
                                                    "leaf_value": 0.0023201281116053,
                                                    "size": 0.0023201281116053,
                                                    "leaf_count": 20,
                                                    "id": "leaf14"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:12\nleaf_value:0.003585071694105864\nleaf_count:20\"",
                                            "name": "leaf12",
                                            "leaf_index": 12.0,
                                            "leaf_value": 0.003585071694105864,
                                            "size": 0.003585071694105864,
                                            "leaf_count": 20,
                                            "id": "leaf12"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.33782787621021265\nsplit_gain:0.014742576255399516\ninternal_value:-0.00025132549128582094\ninternal_count:24015\"",
                    "name": "split4",
                    "split_feature_name": "low2_5_30",
                    "threshold": -0.33782787621021265,
                    "split_gain": 0.014742576255399516,
                    "internal_value": -0.00025132549128582094,
                    "internal_count": 24015,
                    "id": "split4",
                    "children": [
                        {
                            "label": "\"leaf_index:1\nleaf_value:-0.0010304138498759131\nleaf_count:145\"",
                            "name": "leaf1",
                            "leaf_index": 1.0,
                            "leaf_value": -0.0010304138498759131,
                            "size": -0.0010304138498759131,
                            "leaf_count": 145,
                            "id": "leaf1"
                        },
                        {
                            "label": "\"split_feature_name:day_delta\nthreshold:-0.04749780893325805\nsplit_gain:0.016011899182135515\ninternal_value:-0.00019025896903682093\ninternal_count:23870\"",
                            "name": "split5",
                            "split_feature_name": "day_delta",
                            "threshold": -0.04749780893325805,
                            "split_gain": 0.016011899182135515,
                            "internal_value": -0.00019025896903682093,
                            "internal_count": 23870,
                            "id": "split5",
                            "children": [
                                {
                                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.013579575971510941\ninternal_value:0.002246439457102603\ninternal_count:2423\"",
                                    "name": "split9",
                                    "split_feature_name": "daytime",
                                    "threshold": 15.250000000000002,
                                    "split_gain": 0.013579575971510941,
                                    "internal_value": 0.002246439457102603,
                                    "internal_count": 2423,
                                    "id": "split9",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.014112105278673417\ninternal_value:0.001530563248691472\ninternal_count:2220\"",
                                            "name": "split10",
                                            "split_feature_name": "daytime",
                                            "threshold": 9.750000000000002,
                                            "split_gain": 0.014112105278673417,
                                            "internal_value": 0.001530563248691472,
                                            "internal_count": 2220,
                                            "id": "split10",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:5\nleaf_value:0.0010230581612674097\nleaf_count:172\"",
                                                    "name": "leaf5",
                                                    "leaf_index": 5.0,
                                                    "leaf_value": 0.0010230581612674097,
                                                    "size": 0.0010230581612674097,
                                                    "leaf_count": 172,
                                                    "id": "leaf5"
                                                },
                                                {
                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.016065604053437706\nsplit_gain:0.00788177368415244\ninternal_value:0.0007998976439038685\ninternal_count:2048\"",
                                                    "name": "split18",
                                                    "split_feature_name": "high2_2_5",
                                                    "threshold": -0.016065604053437706,
                                                    "split_gain": 0.00788177368415244,
                                                    "internal_value": 0.0007998976439038685,
                                                    "internal_count": 2048,
                                                    "id": "split18",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:stk1_2\nthreshold:0.04716272465884686\nsplit_gain:0.007521200711489033\ninternal_value:0.003638467748256033\ninternal_count:662\"",
                                                            "name": "split19",
                                                            "split_feature_name": "stk1_2",
                                                            "threshold": 0.04716272465884686,
                                                            "split_gain": 0.007521200711489033,
                                                            "internal_value": 0.003638467748256033,
                                                            "internal_count": 662,
                                                            "id": "split19",
                                                            "children": [
                                                                {
                                                                    "label": "\"split_feature_name:stk2_5\nthreshold:0.017355827614665035\nsplit_gain:0.007177824666708469\ninternal_value:0.0056119557355793145\ninternal_count:493\"",
                                                                    "name": "split21",
                                                                    "split_feature_name": "stk2_5",
                                                                    "threshold": 0.017355827614665035,
                                                                    "split_gain": 0.007177824666708469,
                                                                    "internal_value": 0.0056119557355793145,
                                                                    "internal_count": 493,
                                                                    "id": "split21",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:11\nleaf_value:0.0010269439782602762\nleaf_count:198\"",
                                                                            "name": "leaf11",
                                                                            "leaf_index": 11.0,
                                                                            "leaf_value": 0.0010269439782602762,
                                                                            "size": 0.0010269439782602762,
                                                                            "leaf_count": 198,
                                                                            "id": "leaf11"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:22\nleaf_value:0.00024859155955432393\nleaf_count:295\"",
                                                                            "name": "leaf22",
                                                                            "leaf_index": 22.0,
                                                                            "leaf_value": 0.00024859155955432393,
                                                                            "size": 0.00024859155955432393,
                                                                            "leaf_count": 295,
                                                                            "id": "leaf22"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:20\nleaf_value:-0.00021185120017462022\nleaf_count:169\"",
                                                                    "name": "leaf20",
                                                                    "leaf_index": 20.0,
                                                                    "leaf_value": -0.00021185120017462022,
                                                                    "size": -0.00021185120017462022,
                                                                    "leaf_count": 169,
                                                                    "id": "leaf20"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:19\nleaf_value:-5.5589846654427935e-05\nleaf_count:1386\"",
                                                            "name": "leaf19",
                                                            "leaf_index": 19.0,
                                                            "leaf_value": -5.5589846654427935e-05,
                                                            "size": -5.5589846654427935e-05,
                                                            "leaf_count": 1386,
                                                            "id": "leaf19"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:dayofweek\nthreshold:3.5000000000000004\nsplit_gain:0.006171669728677876\ninternal_value:0.010075233460416453\ninternal_count:203\"",
                                            "name": "split23",
                                            "split_feature_name": "dayofweek",
                                            "threshold": 3.5000000000000004,
                                            "split_gain": 0.006171669728677876,
                                            "internal_value": 0.010075233460416453,
                                            "internal_count": 203,
                                            "id": "split23",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:day_delta_rank\nthreshold:0.5833333432674409\nsplit_gain:0.005242094232783364\ninternal_value:0.006881368030271436\ninternal_count:152\"",
                                                    "name": "split27",
                                                    "split_feature_name": "day_delta_rank",
                                                    "threshold": 0.5833333432674409,
                                                    "split_gain": 0.005242094232783364,
                                                    "internal_value": 0.006881368030271436,
                                                    "internal_count": 152,
                                                    "id": "split27",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:vol1_10\nthreshold:-0.21324591338634488\nsplit_gain:0.005336388031522731\ninternal_value:0.0033122487955814257\ninternal_count:111\"",
                                                            "name": "split28",
                                                            "split_feature_name": "vol1_10",
                                                            "threshold": -0.21324591338634488,
                                                            "split_gain": 0.005336388031522731,
                                                            "internal_value": 0.0033122487955814257,
                                                            "internal_count": 111,
                                                            "id": "split28",
                                                            "children": [
                                                                {
                                                                    "label": "\"split_feature_name:day_delta\nthreshold:-0.06755673885345458\nsplit_gain:0.005971801277003209\ninternal_value:0.0101837170206766\ninternal_count:56\"",
                                                                    "name": "split29",
                                                                    "split_feature_name": "day_delta",
                                                                    "threshold": -0.06755673885345458,
                                                                    "split_gain": 0.005971801277003209,
                                                                    "internal_value": 0.0101837170206766,
                                                                    "internal_count": 56,
                                                                    "id": "split29",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:10\nleaf_value:0.0021682966672815383\nleaf_count:25\"",
                                                                            "name": "leaf10",
                                                                            "leaf_index": 10.0,
                                                                            "leaf_value": 0.0021682966672815383,
                                                                            "size": 0.0021682966672815383,
                                                                            "leaf_count": 25,
                                                                            "id": "leaf10"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:30\nleaf_value:9.10128591532421e-05\nleaf_count:31\"",
                                                                            "name": "leaf30",
                                                                            "leaf_index": 30.0,
                                                                            "leaf_value": 9.10128591532421e-05,
                                                                            "size": 9.10128591532421e-05,
                                                                            "leaf_count": 31,
                                                                            "id": "leaf30"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:29\nleaf_value:-0.00036841552154245704\nleaf_count:55\"",
                                                                    "name": "leaf29",
                                                                    "leaf_index": 29.0,
                                                                    "leaf_value": -0.00036841552154245704,
                                                                    "size": -0.00036841552154245704,
                                                                    "leaf_count": 55,
                                                                    "id": "leaf29"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:28\nleaf_value:0.0016544105470529759\nleaf_count:41\"",
                                                            "name": "leaf28",
                                                            "leaf_index": 28.0,
                                                            "leaf_value": 0.0016544105470529759,
                                                            "size": 0.0016544105470529759,
                                                            "leaf_count": 41,
                                                            "id": "leaf28"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_2_5\nthreshold:-0.009389712475240229\nsplit_gain:0.007062858681703484\ninternal_value:0.019594204938495716\ninternal_count:51\"",
                                                    "name": "split24",
                                                    "split_feature_name": "low2_2_5",
                                                    "threshold": -0.009389712475240229,
                                                    "split_gain": 0.007062858681703484,
                                                    "internal_value": 0.019594204938495716,
                                                    "internal_count": 51,
                                                    "id": "split24",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:24\nleaf_value:0.0010141865233890713\nleaf_count:31\"",
                                                            "name": "leaf24",
                                                            "leaf_index": 24.0,
                                                            "leaf_value": 0.0010141865233890713,
                                                            "size": 0.0010141865233890713,
                                                            "leaf_count": 31,
                                                            "id": "leaf24"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:25\nleaf_value:0.0034245331480633467\nleaf_count:20\"",
                                                            "name": "leaf25",
                                                            "leaf_index": 25.0,
                                                            "leaf_value": 0.0034245331480633467,
                                                            "size": 0.0034245331480633467,
                                                            "leaf_count": 20,
                                                            "id": "leaf25"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.014692968120210027\ninternal_value:-0.0004655478339846376\ninternal_count:21447\"",
                                    "name": "split6",
                                    "split_feature_name": "daytime",
                                    "threshold": 9.750000000000002,
                                    "split_gain": 0.014692968120210027,
                                    "internal_value": -0.0004655478339846376,
                                    "internal_count": 21447,
                                    "id": "split6",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:0.04086458683013917\nsplit_gain:0.03726355658595734\ninternal_value:-0.0033037742058145613\ninternal_count:1681\"",
                                            "name": "split7",
                                            "split_feature_name": "day_delta",
                                            "threshold": 0.04086458683013917,
                                            "split_gain": 0.03726355658595734,
                                            "internal_value": -0.0033037742058145613,
                                            "internal_count": 1681,
                                            "id": "split7",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:-0.003277063369750976\nsplit_gain:0.008442303692044852\ninternal_value:-0.0015491179595099108\ninternal_count:1476\"",
                                                    "name": "split14",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": -0.003277063369750976,
                                                    "split_gain": 0.008442303692044852,
                                                    "internal_value": -0.0015491179595099108,
                                                    "internal_count": 1476,
                                                    "id": "split14",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:6\nleaf_value:0.00010956116751946089\nleaf_count:664\"",
                                                            "name": "leaf6",
                                                            "leaf_index": 6.0,
                                                            "leaf_value": 0.00010956116751946089,
                                                            "size": 0.00010956116751946089,
                                                            "leaf_count": 664,
                                                            "id": "leaf6"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:high2_2_5\nthreshold:-0.010929024778306482\nsplit_gain:0.00791445152073982\ninternal_value:-0.003711803276558927\ninternal_count:812\"",
                                                            "name": "split17",
                                                            "split_feature_name": "high2_2_5",
                                                            "threshold": -0.010929024778306482,
                                                            "split_gain": 0.00791445152073982,
                                                            "internal_value": -0.003711803276558927,
                                                            "internal_count": 812,
                                                            "id": "split17",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:15\nleaf_value:-0.0012902711799792346\nleaf_count:84\"",
                                                                    "name": "leaf15",
                                                                    "leaf_index": 15.0,
                                                                    "leaf_value": -0.0012902711799792346,
                                                                    "size": -0.0012902711799792346,
                                                                    "leaf_count": 84,
                                                                    "id": "leaf15"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:18\nleaf_value:-0.0002651313831570456\nleaf_count:728\"",
                                                                    "name": "leaf18",
                                                                    "leaf_index": 18.0,
                                                                    "leaf_value": -0.0002651313831570456,
                                                                    "size": -0.0002651313831570456,
                                                                    "leaf_count": 728,
                                                                    "id": "leaf18"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:333821.78125000006\nsplit_gain:0.01370247454539953\ninternal_value:-0.015937299179208046\ninternal_count:205\"",
                                                    "name": "split8",
                                                    "split_feature_name": "avg_dolvol5_30",
                                                    "threshold": 333821.78125000006,
                                                    "split_gain": 0.01370247454539953,
                                                    "internal_value": -0.015937299179208046,
                                                    "internal_count": 205,
                                                    "id": "split8",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:20530.484375000004\nsplit_gain:0.007129057741349087\ninternal_value:-0.01310259093349755\ninternal_count:183\"",
                                                            "name": "split22",
                                                            "split_feature_name": "avg_dolvol1_2",
                                                            "threshold": 20530.484375000004,
                                                            "split_gain": 0.007129057741349087,
                                                            "internal_value": -0.01310259093349755,
                                                            "internal_count": 183,
                                                            "id": "split22",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:8\nleaf_value:-0.0005612764264042199\nleaf_count:75\"",
                                                                    "name": "leaf8",
                                                                    "leaf_index": 8.0,
                                                                    "leaf_value": -0.0005612764264042199,
                                                                    "size": -0.0005612764264042199,
                                                                    "leaf_count": 75,
                                                                    "id": "leaf8"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:23\nleaf_value:-0.0018303859453952657\nleaf_count:108\"",
                                                                    "name": "leaf23",
                                                                    "leaf_index": 23.0,
                                                                    "leaf_value": -0.0018303859453952657,
                                                                    "size": -0.0018303859453952657,
                                                                    "leaf_count": 108,
                                                                    "id": "leaf23"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:9\nleaf_value:-0.003951691776852717\nleaf_count:22\"",
                                                            "name": "leaf9",
                                                            "leaf_index": 9.0,
                                                            "leaf_value": -0.003951691776852717,
                                                            "size": -0.003951691776852717,
                                                            "leaf_count": 22,
                                                            "id": "leaf9"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.007003841688856482\nsplit_gain:0.00829460025254353\ninternal_value:-0.000224170796088953\ninternal_count:19766\"",
                                            "name": "split15",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.007003841688856482,
                                            "split_gain": 0.00829460025254353,
                                            "internal_value": -0.000224170796088953,
                                            "internal_count": 19766,
                                            "id": "split15",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:stk1_2\nthreshold:-0.09349579736590384\nsplit_gain:0.009345753733526047\ninternal_value:-0.0006822491980304867\ninternal_count:13177\"",
                                                    "name": "split16",
                                                    "split_feature_name": "stk1_2",
                                                    "threshold": -0.09349579736590384,
                                                    "split_gain": 0.009345753733526047,
                                                    "internal_value": -0.0006822491980304867,
                                                    "internal_count": 13177,
                                                    "id": "split16",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:7\nleaf_value:0.001991138429465619\nleaf_count:22\"",
                                                            "name": "leaf7",
                                                            "leaf_index": 7.0,
                                                            "leaf_value": 0.001991138429465619,
                                                            "size": 0.001991138429465619,
                                                            "leaf_count": 22,
                                                            "id": "leaf7"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:day_delta\nthreshold:0.07943105697631837\nsplit_gain:0.006099101010080812\ninternal_value:-0.000716689330059305\ninternal_count:13155\"",
                                                            "name": "split25",
                                                            "split_feature_name": "day_delta",
                                                            "threshold": 0.07943105697631837,
                                                            "split_gain": 0.006099101010080812,
                                                            "internal_value": -0.000716689330059305,
                                                            "internal_count": 13155,
                                                            "id": "split25",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:17\nleaf_value:-5.944093057711346e-05\nleaf_count:12744\"",
                                                                    "name": "leaf17",
                                                                    "leaf_index": 17.0,
                                                                    "leaf_value": -5.944093057711346e-05,
                                                                    "size": -5.944093057711346e-05,
                                                                    "leaf_count": 12744,
                                                                    "id": "leaf17"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:26\nleaf_value:-0.00045082626379144017\nleaf_count:411\"",
                                                                    "name": "leaf26",
                                                                    "leaf_index": 26.0,
                                                                    "leaf_value": -0.00045082626379144017,
                                                                    "size": -0.00045082626379144017,
                                                                    "leaf_count": 411,
                                                                    "id": "leaf26"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:stk2_5\nthreshold:0.03601805120706559\nsplit_gain:0.005880326409149704\ninternal_value:0.0006919164861061582\ninternal_count:6589\"",
                                                    "name": "split26",
                                                    "split_feature_name": "stk2_5",
                                                    "threshold": 0.03601805120706559,
                                                    "split_gain": 0.005880326409149704,
                                                    "internal_value": 0.0006919164861061582,
                                                    "internal_count": 6589,
                                                    "id": "split26",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:16\nleaf_value:5.9123500100109446e-05\nleaf_count:6515\"",
                                                            "name": "leaf16",
                                                            "leaf_index": 16.0,
                                                            "leaf_value": 5.9123500100109446e-05,
                                                            "size": 5.9123500100109446e-05,
                                                            "leaf_count": 6515,
                                                            "id": "leaf16"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:27\nleaf_value:0.0009555968857180357\nleaf_count:74\"",
                                                            "name": "leaf27",
                                                            "leaf_index": 27.0,
                                                            "leaf_value": 0.0009555968857180357,
                                                            "size": 0.0009555968857180357,
                                                            "leaf_count": 74,
                                                            "id": "leaf27"
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
                "leaf3": ">"
            },
            "split12": {
                "split20": ">"
            },
            "split20": {
                "leaf21": ">"
            },
            "split3": {
                "split11": ">"
            },
            "split11": {
                "leaf12": ">"
            },
            "split13": {
                "leaf14": ">"
            },
            "split4": {
                "split5": ">"
            },
            "split5": {
                "split6": ">"
            },
            "split9": {
                "split23": ">"
            },
            "split10": {
                "split18": ">"
            },
            "split18": {
                "leaf19": ">"
            },
            "split19": {
                "leaf20": ">"
            },
            "split21": {
                "leaf22": ">"
            },
            "split23": {
                "split24": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split28": {
                "leaf29": ">"
            },
            "split29": {
                "leaf30": ">"
            },
            "split24": {
                "leaf25": ">"
            },
            "split6": {
                "split15": ">"
            },
            "split7": {
                "split8": ">"
            },
            "split14": {
                "split17": ">"
            },
            "split17": {
                "leaf18": ">"
            },
            "split8": {
                "leaf9": ">"
            },
            "split22": {
                "leaf23": ">"
            },
            "split15": {
                "split26": ">"
            },
            "split16": {
                "split25": ">"
            },
            "split25": {
                "leaf26": ">"
            },
            "split26": {
                "leaf27": ">"
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.14854216575622556\nsplit_gain:0.04031785587732377\ninternal_value:0\ninternal_count:24771\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.14854216575622556,
            "split_gain": 0.04031785587732377,
            "internal_value": 0.0,
            "internal_count": 24771,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.015310832595824587\ninternal_value:0.008342981355697818\ninternal_count:566\"",
                    "name": "split1",
                    "split_feature_name": "daytime",
                    "threshold": 15.250000000000002,
                    "split_gain": 0.015310832595824587,
                    "internal_value": 0.008342981355697818,
                    "internal_count": 566,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:high2_2_5\nthreshold:-0.07020704075694083\nsplit_gain:0.014680615245140773\ninternal_value:0.006373201175312825\ninternal_count:495\"",
                            "name": "split4",
                            "split_feature_name": "high2_2_5",
                            "threshold": -0.07020704075694083,
                            "split_gain": 0.014680615245140773,
                            "internal_value": 0.006373201175312825,
                            "internal_count": 495,
                            "id": "split4",
                            "children": [
                                {
                                    "label": "\"split_feature_name:stk1_2\nthreshold:0.05296518281102181\nsplit_gain:0.010388126839748414\ninternal_value:0.01610737731029446\ninternal_count:118\"",
                                    "name": "split11",
                                    "split_feature_name": "stk1_2",
                                    "threshold": 0.05296518281102181,
                                    "split_gain": 0.010388126839748414,
                                    "internal_value": 0.01610737731029446,
                                    "internal_count": 118,
                                    "id": "split11",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:0\nleaf_value:0.0027241451827203678\nleaf_count:49\"",
                                            "name": "leaf0",
                                            "leaf_index": 0.0,
                                            "leaf_value": 0.0027241451827203678,
                                            "size": 0.0027241451827203678,
                                            "leaf_count": 49,
                                            "id": "leaf0"
                                        },
                                        {
                                            "label": "\"leaf_index:12\nleaf_value:0.0008200570769300954\nleaf_count:69\"",
                                            "name": "leaf12",
                                            "leaf_index": 12.0,
                                            "leaf_value": 0.0008200570769300954,
                                            "size": 0.0008200570769300954,
                                            "leaf_count": 69,
                                            "id": "leaf12"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"leaf_index:5\nleaf_value:0.00033264298651594236\nleaf_count:377\"",
                                    "name": "leaf5",
                                    "leaf_index": 5.0,
                                    "leaf_value": 0.00033264298651594236,
                                    "size": 0.00033264298651594236,
                                    "leaf_count": 377,
                                    "id": "leaf5"
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:dayofweek\nthreshold:9.999999682655225e-21\nsplit_gain:0.01511011080710737\ninternal_value:0.022075955852748116\ninternal_count:71\"",
                            "name": "split2",
                            "split_feature_name": "dayofweek",
                            "threshold": 9.999999682655225e-21,
                            "split_gain": 0.01511011080710737,
                            "internal_value": 0.022075955852748116,
                            "internal_count": 71,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"leaf_index:2\nleaf_value:3.0430556084452708e-05\nleaf_count:22\"",
                                    "name": "leaf2",
                                    "leaf_index": 2.0,
                                    "leaf_value": 3.0430556084452708e-05,
                                    "size": 3.0430556084452708e-05,
                                    "leaf_count": 22,
                                    "id": "leaf2"
                                },
                                {
                                    "label": "\"split_feature_name:high2_5_30\nthreshold:-0.02560266852378845\nsplit_gain:0.015518989103681373\ninternal_value:0.03185098251441912\ninternal_count:49\"",
                                    "name": "split3",
                                    "split_feature_name": "high2_5_30",
                                    "threshold": -0.02560266852378845,
                                    "split_gain": 0.015518989103681373,
                                    "internal_value": 0.03185098251441912,
                                    "internal_count": 49,
                                    "id": "split3",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:3\nleaf_value:0.0047263170792055985\nleaf_count:28\"",
                                            "name": "leaf3",
                                            "leaf_index": 3.0,
                                            "leaf_value": 0.0047263170792055985,
                                            "size": 0.0047263170792055985,
                                            "leaf_count": 28,
                                            "id": "leaf3"
                                        },
                                        {
                                            "label": "\"leaf_index:4\nleaf_value:0.0011301398144236633\nleaf_count:21\"",
                                            "name": "leaf4",
                                            "leaf_index": 4.0,
                                            "leaf_value": 0.0011301398144236633,
                                            "size": 0.0011301398144236633,
                                            "leaf_count": 21,
                                            "id": "leaf4"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "\"split_feature_name:day_delta\nthreshold:-0.052925586700439446\nsplit_gain:0.014144083868486961\ninternal_value:-0.0001950889102930801\ninternal_count:24205\"",
                    "name": "split5",
                    "split_feature_name": "day_delta",
                    "threshold": -0.052925586700439446,
                    "split_gain": 0.014144083868486961,
                    "internal_value": -0.0001950889102930801,
                    "internal_count": 24205,
                    "id": "split5",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.013368717438457108\ninternal_value:0.0021702458684123146\ninternal_count:2289\"",
                            "name": "split9",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.013368717438457108,
                            "internal_value": 0.0021702458684123146,
                            "internal_count": 2289,
                            "id": "split9",
                            "children": [
                                {
                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.08171082660555838\nsplit_gain:0.007089208227135772\ninternal_value:0.010985804030678992\ninternal_count:160\"",
                                    "name": "split25",
                                    "split_feature_name": "high2_2_5",
                                    "threshold": -0.08171082660555838,
                                    "split_gain": 0.007089208227135772,
                                    "internal_value": 0.010985804030678992,
                                    "internal_count": 160,
                                    "id": "split25",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:1\nleaf_value:-0.0004859577779522321\nleaf_count:24\"",
                                            "name": "leaf1",
                                            "leaf_index": 1.0,
                                            "leaf_value": -0.0004859577779522321,
                                            "size": -0.0004859577779522321,
                                            "leaf_count": 24,
                                            "id": "leaf1"
                                        },
                                        {
                                            "label": "\"leaf_index:26\nleaf_value:0.0013782047879538047\nleaf_count:136\"",
                                            "name": "leaf26",
                                            "leaf_index": 26.0,
                                            "leaf_value": 0.0013782047879538047,
                                            "size": 0.0013782047879538047,
                                            "leaf_count": 136,
                                            "id": "leaf26"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.01184737942797132\ninternal_value:0.0015077332775421085\ninternal_count:2129\"",
                                    "name": "split10",
                                    "split_feature_name": "daytime",
                                    "threshold": 15.250000000000002,
                                    "split_gain": 0.01184737942797132,
                                    "internal_value": 0.0015077332775421085,
                                    "internal_count": 2129,
                                    "id": "split10",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:4743.288818359376\nsplit_gain:0.0071353385811198855\ninternal_value:0.0007650406342725261\ninternal_count:1937\"",
                                            "name": "split23",
                                            "split_feature_name": "avg_dolvol1_2",
                                            "threshold": 4743.288818359376,
                                            "split_gain": 0.0071353385811198855,
                                            "internal_value": 0.0007650406342725261,
                                            "internal_count": 1937,
                                            "id": "split23",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:0.027078457176685337\nsplit_gain:0.007248840498595164\ninternal_value:-0.003827537634404305\ninternal_count:288\"",
                                                    "name": "split24",
                                                    "split_feature_name": "high2_2_5",
                                                    "threshold": 0.027078457176685337,
                                                    "split_gain": 0.007248840498595164,
                                                    "internal_value": -0.003827537634404305,
                                                    "internal_count": 288,
                                                    "id": "split24",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:10\nleaf_value:-0.0005407963236178474\nleaf_count:262\"",
                                                            "name": "leaf10",
                                                            "leaf_index": 10.0,
                                                            "leaf_value": -0.0005407963236178474,
                                                            "size": -0.0005407963236178474,
                                                            "leaf_count": 262,
                                                            "id": "leaf10"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:25\nleaf_value:0.0012098289583473863\nleaf_count:26\"",
                                                            "name": "leaf25",
                                                            "leaf_index": 25.0,
                                                            "leaf_value": 0.0012098289583473863,
                                                            "size": 0.0012098289583473863,
                                                            "leaf_count": 26,
                                                            "id": "leaf25"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:24\nleaf_value:0.00015671404167946168\nleaf_count:1649\"",
                                                    "name": "leaf24",
                                                    "leaf_index": 24.0,
                                                    "leaf_value": 0.00015671404167946168,
                                                    "size": 0.00015671404167946168,
                                                    "leaf_count": 1649,
                                                    "id": "leaf24"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_2_5\nthreshold:-0.04879018105566501\nsplit_gain:0.0074375639322267085\ninternal_value:0.009000418954694092\ninternal_count:192\"",
                                            "name": "split21",
                                            "split_feature_name": "low2_2_5",
                                            "threshold": -0.04879018105566501,
                                            "split_gain": 0.0074375639322267085,
                                            "internal_value": 0.009000418954694092,
                                            "internal_count": 192,
                                            "id": "split21",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:11\nleaf_value:-0.0009251728438539431\nleaf_count:20\"",
                                                    "name": "leaf11",
                                                    "leaf_index": 11.0,
                                                    "leaf_value": -0.0009251728438539431,
                                                    "size": -0.0009251728438539431,
                                                    "leaf_count": 20,
                                                    "id": "leaf11"
                                                },
                                                {
                                                    "label": "\"split_feature_name:high2_5_30\nthreshold:-0.004207816906273364\nsplit_gain:0.007683645874852072\ninternal_value:0.011122761674837526\ninternal_count:172\"",
                                                    "name": "split22",
                                                    "split_feature_name": "high2_5_30",
                                                    "threshold": -0.004207816906273364,
                                                    "split_gain": 0.007683645874852072,
                                                    "internal_value": 0.011122761674837526,
                                                    "internal_count": 172,
                                                    "id": "split22",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:22\nleaf_value:0.002346554098729916\nleaf_count:39\"",
                                                            "name": "leaf22",
                                                            "leaf_index": 22.0,
                                                            "leaf_value": 0.002346554098729916,
                                                            "size": 0.002346554098729916,
                                                            "leaf_count": 39,
                                                            "id": "leaf22"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:stk5_30\nthreshold:0.13955286890268329\nsplit_gain:0.006165333577728204\ninternal_value:0.007503450447875093\ninternal_count:133\"",
                                                            "name": "split29",
                                                            "split_feature_name": "stk5_30",
                                                            "threshold": 0.13955286890268329,
                                                            "split_gain": 0.006165333577728204,
                                                            "internal_value": 0.007503450447875093,
                                                            "internal_count": 133,
                                                            "id": "split29",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:23\nleaf_value:0.0010367814701478578\nleaf_count:113\"",
                                                                    "name": "leaf23",
                                                                    "leaf_index": 23.0,
                                                                    "leaf_value": 0.0010367814701478578,
                                                                    "size": 0.0010367814701478578,
                                                                    "leaf_count": 113,
                                                                    "id": "leaf23"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:30\nleaf_value:-0.0008680207584984602\nleaf_count:20\"",
                                                                    "name": "leaf30",
                                                                    "leaf_index": 30.0,
                                                                    "leaf_value": -0.0008680207584984602,
                                                                    "size": -0.0008680207584984602,
                                                                    "leaf_count": 20,
                                                                    "id": "leaf30"
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
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.013755220775713787\ninternal_value:-0.0004421345075031845\ninternal_count:21916\"",
                            "name": "split6",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.013755220775713787,
                            "internal_value": -0.0004421345075031845,
                            "internal_count": 21916,
                            "id": "split6",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:0.12474024295806886\nsplit_gain:0.04490939728348524\ninternal_value:-0.0031449144736707723\ninternal_count:1734\"",
                                    "name": "split7",
                                    "split_feature_name": "day_delta",
                                    "threshold": 0.12474024295806886,
                                    "split_gain": 0.04490939728348524,
                                    "internal_value": -0.0031449144736707723,
                                    "internal_count": 1734,
                                    "id": "split7",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:0.034146338701248176\nsplit_gain:0.0205296738308158\ninternal_value:-0.002568010504525973\ninternal_count:1712\"",
                                            "name": "split8",
                                            "split_feature_name": "day_delta",
                                            "threshold": 0.034146338701248176,
                                            "split_gain": 0.0205296738308158,
                                            "internal_value": -0.002568010504525973,
                                            "internal_count": 1712,
                                            "id": "split8",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:-0.02029722929000854\nsplit_gain:0.007647778527843878\ninternal_value:-0.001159593099191346\ninternal_count:1469\"",
                                                    "name": "split20",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": -0.02029722929000854,
                                                    "split_gain": 0.007647778527843878,
                                                    "internal_value": -0.001159593099191346,
                                                    "internal_count": 1469,
                                                    "id": "split20",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:6\nleaf_value:0.00031900473819370875\nleaf_count:317\"",
                                                            "name": "leaf6",
                                                            "leaf_index": 6.0,
                                                            "leaf_value": 0.00031900473819370875,
                                                            "size": 0.00031900473819370875,
                                                            "leaf_count": 317,
                                                            "id": "leaf6"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:low2_2_5\nthreshold:-0.03933293186128139\nsplit_gain:0.006356757308402127\ninternal_value:-0.002356499377418528\ninternal_count:1152\"",
                                                            "name": "split27",
                                                            "split_feature_name": "low2_2_5",
                                                            "threshold": -0.03933293186128139,
                                                            "split_gain": 0.006356757308402127,
                                                            "internal_value": -0.002356499377418528,
                                                            "internal_count": 1152,
                                                            "id": "split27",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:21\nleaf_value:-0.0011591909503372985\nleaf_count:70\"",
                                                                    "name": "leaf21",
                                                                    "leaf_index": 21.0,
                                                                    "leaf_value": -0.0011591909503372985,
                                                                    "size": -0.0011591909503372985,
                                                                    "leaf_count": 70,
                                                                    "id": "leaf21"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:28\nleaf_value:-0.00017590144339649127\nleaf_count:1082\"",
                                                                    "name": "leaf28",
                                                                    "leaf_index": 28.0,
                                                                    "leaf_value": -0.00017590144339649127,
                                                                    "size": -0.00017590144339649127,
                                                                    "leaf_count": 1082,
                                                                    "id": "leaf28"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:stk1_2\nthreshold:-0.014888633508235214\nsplit_gain:0.00888954829537959\ninternal_value:-0.011082270456939828\ninternal_count:243\"",
                                                    "name": "split12",
                                                    "split_feature_name": "stk1_2",
                                                    "threshold": -0.014888633508235214,
                                                    "split_gain": 0.00888954829537959,
                                                    "internal_value": -0.011082270456939828,
                                                    "internal_count": 243,
                                                    "id": "split12",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:9\nleaf_value:-0.002935288463292333\nleaf_count:24\"",
                                                            "name": "leaf9",
                                                            "leaf_index": 9.0,
                                                            "leaf_value": -0.002935288463292333,
                                                            "size": -0.002935288463292333,
                                                            "leaf_count": 24,
                                                            "id": "leaf9"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:13\nleaf_value:-0.0009080011369160814\nleaf_count:219\"",
                                                            "name": "leaf13",
                                                            "leaf_index": 13.0,
                                                            "leaf_value": -0.0009080011369160814,
                                                            "size": -0.0009080011369160814,
                                                            "leaf_count": 219,
                                                            "id": "leaf13"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:8\nleaf_value:-0.004803853243621151\nleaf_count:22\"",
                                            "name": "leaf8",
                                            "leaf_index": 8.0,
                                            "leaf_value": -0.004803853243621151,
                                            "size": -0.004803853243621151,
                                            "leaf_count": 22,
                                            "id": "leaf8"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:stk1_2\nthreshold:-0.0586415734142065\nsplit_gain:0.008710883876571105\ninternal_value:-0.00020991666678697214\ninternal_count:20182\"",
                                    "name": "split13",
                                    "split_feature_name": "stk1_2",
                                    "threshold": -0.0586415734142065,
                                    "split_gain": 0.008710883876571105,
                                    "internal_value": -0.00020991666678697214,
                                    "internal_count": 20182,
                                    "id": "split13",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:vol1_10\nthreshold:-0.8113108277320861\nsplit_gain:0.0062498534417932995\ninternal_value:0.005259991493432025\ninternal_count:287\"",
                                            "name": "split28",
                                            "split_feature_name": "vol1_10",
                                            "threshold": -0.8113108277320861,
                                            "split_gain": 0.0062498534417932995,
                                            "internal_value": 0.005259991493432025,
                                            "internal_count": 287,
                                            "id": "split28",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:7\nleaf_value:0.0022310392640065404\nleaf_count:20\"",
                                                    "name": "leaf7",
                                                    "leaf_index": 7.0,
                                                    "leaf_value": 0.0022310392640065404,
                                                    "size": 0.0022310392640065404,
                                                    "leaf_count": 20,
                                                    "id": "leaf7"
                                                },
                                                {
                                                    "label": "\"leaf_index:29\nleaf_value:0.00039828078869426337\nleaf_count:267\"",
                                                    "name": "leaf29",
                                                    "leaf_index": 29.0,
                                                    "leaf_value": 0.00039828078869426337,
                                                    "size": 0.00039828078869426337,
                                                    "leaf_count": 267,
                                                    "id": "leaf29"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:stk2_5\nthreshold:-0.1498427242040634\nsplit_gain:0.008412439110848257\ninternal_value:-0.0002888241129786209\ninternal_count:19895\"",
                                            "name": "split14",
                                            "split_feature_name": "stk2_5",
                                            "threshold": -0.1498427242040634,
                                            "split_gain": 0.008412439110848257,
                                            "internal_value": -0.0002888241129786209,
                                            "internal_count": 19895,
                                            "id": "split14",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:14\nleaf_value:0.001021199235171815\nleaf_count:76\"",
                                                    "name": "leaf14",
                                                    "leaf_index": 14.0,
                                                    "leaf_value": 0.001021199235171815,
                                                    "size": 0.001021199235171815,
                                                    "leaf_count": 76,
                                                    "id": "leaf14"
                                                },
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:0.13921177387237552\nsplit_gain:0.009737883052357526\ninternal_value:-0.0003290916366335457\ninternal_count:19819\"",
                                                    "name": "split15",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": 0.13921177387237552,
                                                    "split_gain": 0.009737883052357526,
                                                    "internal_value": -0.0003290916366335457,
                                                    "internal_count": 19819,
                                                    "id": "split15",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:low2_2_5\nthreshold:-0.004661199171096086\nsplit_gain:0.007912649467950781\ninternal_value:-0.00026645515011420874\ninternal_count:19662\"",
                                                            "name": "split18",
                                                            "split_feature_name": "low2_2_5",
                                                            "threshold": -0.004661199171096086,
                                                            "split_gain": 0.007912649467950781,
                                                            "internal_value": -0.00026645515011420874,
                                                            "internal_count": 19662,
                                                            "id": "split18",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:15\nleaf_value:-9.450897021922435e-05\nleaf_count:9169\"",
                                                                    "name": "leaf15",
                                                                    "leaf_index": 15.0,
                                                                    "leaf_value": -9.450897021922435e-05,
                                                                    "size": -9.450897021922435e-05,
                                                                    "leaf_count": 9169,
                                                                    "id": "leaf15"
                                                                },
                                                                {
                                                                    "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:10045.200195312502\nsplit_gain:0.00968140467576091\ninternal_value:0.0003265497300919764\ninternal_count:10493\"",
                                                                    "name": "split19",
                                                                    "split_feature_name": "avg_dolvol1_2",
                                                                    "threshold": 10045.200195312502,
                                                                    "split_gain": 0.00968140467576091,
                                                                    "internal_value": 0.0003265497300919764,
                                                                    "internal_count": 10493,
                                                                    "id": "split19",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"split_feature_name:low2_2_5\nthreshold:0.011030348017811777\nsplit_gain:0.0063666013214507666\ninternal_value:0.0013399026543791743\ninternal_count:4966\"",
                                                                            "name": "split26",
                                                                            "split_feature_name": "low2_2_5",
                                                                            "threshold": 0.011030348017811777,
                                                                            "split_gain": 0.0063666013214507666,
                                                                            "internal_value": 0.0013399026543791743,
                                                                            "internal_count": 4966,
                                                                            "id": "split26",
                                                                            "children": [
                                                                                {
                                                                                    "label": "\"leaf_index:19\nleaf_value:7.809728932418651e-05\nleaf_count:3993\"",
                                                                                    "name": "leaf19",
                                                                                    "leaf_index": 19.0,
                                                                                    "leaf_value": 7.809728932418651e-05,
                                                                                    "size": 7.809728932418651e-05,
                                                                                    "leaf_count": 3993,
                                                                                    "id": "leaf19"
                                                                                },
                                                                                {
                                                                                    "label": "\"leaf_index:27\nleaf_value:0.0003633640101677506\nleaf_count:973\"",
                                                                                    "name": "leaf27",
                                                                                    "leaf_index": 27.0,
                                                                                    "leaf_value": 0.0003633640101677506,
                                                                                    "size": 0.0003633640101677506,
                                                                                    "leaf_count": 973,
                                                                                    "id": "leaf27"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:20\nleaf_value:-5.839461305937891e-05\nleaf_count:5527\"",
                                                                            "name": "leaf20",
                                                                            "leaf_index": 20.0,
                                                                            "leaf_value": -5.839461305937891e-05,
                                                                            "size": -5.839461305937891e-05,
                                                                            "leaf_count": 5527,
                                                                            "id": "leaf20"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:high2_5_30\nthreshold:0.2222763299942017\nsplit_gain:0.016724267636074007\ninternal_value:-0.008173413916526564\ninternal_count:157\"",
                                                            "name": "split16",
                                                            "split_feature_name": "high2_5_30",
                                                            "threshold": 0.2222763299942017,
                                                            "split_gain": 0.016724267636074007,
                                                            "internal_value": -0.008173413916526564,
                                                            "internal_count": 157,
                                                            "id": "split16",
                                                            "children": [
                                                                {
                                                                    "label": "\"split_feature_name:low2_2_5\nthreshold:0.02451047766953707\nsplit_gain:0.009697929590139365\ninternal_value:-0.022631222252044298\ninternal_count:53\"",
                                                                    "name": "split17",
                                                                    "split_feature_name": "low2_2_5",
                                                                    "threshold": 0.02451047766953707,
                                                                    "split_gain": 0.009697929590139365,
                                                                    "internal_value": -0.022631222252044298,
                                                                    "internal_count": 53,
                                                                    "id": "split17",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:16\nleaf_value:-0.0011235756715083677\nleaf_count:31\"",
                                                                            "name": "leaf16",
                                                                            "leaf_index": 16.0,
                                                                            "leaf_value": -0.0011235756715083677,
                                                                            "size": -0.0011235756715083677,
                                                                            "leaf_count": 31,
                                                                            "id": "leaf16"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:18\nleaf_value:-0.0038688469145034274\nleaf_count:22\"",
                                                                            "name": "leaf18",
                                                                            "leaf_index": 18.0,
                                                                            "leaf_value": -0.0038688469145034274,
                                                                            "size": -0.0038688469145034274,
                                                                            "leaf_count": 22,
                                                                            "id": "leaf18"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:17\nleaf_value:-8.054923609261795e-05\nleaf_count:104\"",
                                                                    "name": "leaf17",
                                                                    "leaf_index": 17.0,
                                                                    "leaf_value": -8.054923609261795e-05,
                                                                    "size": -8.054923609261795e-05,
                                                                    "leaf_count": 104,
                                                                    "id": "leaf17"
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
            "split4": {
                "leaf5": ">"
            },
            "split11": {
                "leaf12": ">"
            },
            "split2": {
                "split3": ">"
            },
            "split3": {
                "leaf4": ">"
            },
            "split5": {
                "split6": ">"
            },
            "split9": {
                "split10": ">"
            },
            "split25": {
                "leaf26": ">"
            },
            "split10": {
                "split21": ">"
            },
            "split23": {
                "leaf24": ">"
            },
            "split24": {
                "leaf25": ">"
            },
            "split21": {
                "split22": ">"
            },
            "split22": {
                "split29": ">"
            },
            "split29": {
                "leaf30": ">"
            },
            "split6": {
                "split13": ">"
            },
            "split7": {
                "leaf8": ">"
            },
            "split8": {
                "split12": ">"
            },
            "split20": {
                "split27": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split12": {
                "leaf13": ">"
            },
            "split13": {
                "split14": ">"
            },
            "split28": {
                "leaf29": ">"
            },
            "split14": {
                "split15": ">"
            },
            "split15": {
                "split16": ">"
            },
            "split18": {
                "split19": ">"
            },
            "split19": {
                "leaf20": ">"
            },
            "split26": {
                "leaf27": ">"
            },
            "split16": {
                "leaf17": ">"
            },
            "split17": {
                "leaf18": ">"
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.093896746635437\nsplit_gain:0.03298583577473495\ninternal_value:0\ninternal_count:24771\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.093896746635437,
            "split_gain": 0.03298583577473495,
            "internal_value": 0.0,
            "internal_count": 24771,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.01883002523274329\ninternal_value:0.004848412175467236\ninternal_count:1328\"",
                    "name": "split1",
                    "split_feature_name": "daytime",
                    "threshold": 15.250000000000002,
                    "split_gain": 0.01883002523274329,
                    "internal_value": 0.004848412175467236,
                    "internal_count": 1328,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.01938482629784092\ninternal_value:0.0035817142015722872\ninternal_count:1193\"",
                            "name": "split2",
                            "split_feature_name": "daytime",
                            "threshold": 9.750000000000002,
                            "split_gain": 0.01938482629784092,
                            "internal_value": 0.0035817142015722872,
                            "internal_count": 1193,
                            "id": "split2",
                            "children": [
                                {
                                    "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:89532.21875000001\nsplit_gain:0.006694136599941381\ninternal_value:0.019977511478560594\ninternal_count:68\"",
                                    "name": "split22",
                                    "split_feature_name": "avg_dolvol2_5",
                                    "threshold": 89532.21875000001,
                                    "split_gain": 0.006694136599941381,
                                    "internal_value": 0.019977511478560594,
                                    "internal_count": 68,
                                    "id": "split22",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:0\nleaf_value:0.0012649736721703614\nleaf_count:44\"",
                                            "name": "leaf0",
                                            "leaf_index": 0.0,
                                            "leaf_value": 0.0012649736721703614,
                                            "size": 0.0012649736721703614,
                                            "leaf_count": 44,
                                            "id": "leaf0"
                                        },
                                        {
                                            "label": "\"leaf_index:23\nleaf_value:0.003341176519946506\nleaf_count:24\"",
                                            "name": "leaf23",
                                            "leaf_index": 23.0,
                                            "leaf_value": 0.003341176519946506,
                                            "size": 0.003341176519946506,
                                            "leaf_count": 24,
                                            "id": "leaf23"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:high2_2_5\nthreshold:-0.022995148785412308\nsplit_gain:0.012271787712051629\ninternal_value:0.002590679343940994\ninternal_count:1125\"",
                                    "name": "split4",
                                    "split_feature_name": "high2_2_5",
                                    "threshold": -0.022995148785412308,
                                    "split_gain": 0.012271787712051629,
                                    "internal_value": 0.002590679343940994,
                                    "internal_count": 1125,
                                    "id": "split4",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:stk1_2\nthreshold:0.040959103032946594\nsplit_gain:0.005855580963395869\ninternal_value:0.006628242540534933\ninternal_count:451\"",
                                            "name": "split26",
                                            "split_feature_name": "stk1_2",
                                            "threshold": 0.040959103032946594,
                                            "split_gain": 0.005855580963395869,
                                            "internal_value": 0.006628242540534933,
                                            "internal_count": 451,
                                            "id": "split26",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:3\nleaf_value:0.0009674718634774251\nleaf_count:263\"",
                                                    "name": "leaf3",
                                                    "leaf_index": 3.0,
                                                    "leaf_value": 0.0009674718634774251,
                                                    "size": 0.0009674718634774251,
                                                    "leaf_count": 263,
                                                    "id": "leaf3"
                                                },
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol2_5\nthreshold:13760.861328125002\nsplit_gain:0.012726544701703294\ninternal_value:0.002366416940615036\ninternal_count:188\"",
                                                    "name": "split27",
                                                    "split_feature_name": "avg_dolvol2_5",
                                                    "threshold": 13760.861328125002,
                                                    "split_gain": 0.012726544701703294,
                                                    "internal_value": 0.002366416940615036,
                                                    "internal_count": 188,
                                                    "id": "split27",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:27\nleaf_value:0.002245768670534879\nleaf_count:27\"",
                                                            "name": "leaf27",
                                                            "leaf_index": 27.0,
                                                            "leaf_value": 0.002245768670534879,
                                                            "size": 0.002245768670534879,
                                                            "leaf_count": 27,
                                                            "id": "leaf27"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:28\nleaf_value:-0.0001002926436079444\nleaf_count:161\"",
                                                            "name": "leaf28",
                                                            "leaf_index": 28.0,
                                                            "leaf_value": -0.0001002926436079444,
                                                            "size": -0.0001002926436079444,
                                                            "leaf_count": 161,
                                                            "id": "leaf28"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:5\nleaf_value:-1.1101353686592947e-05\nleaf_count:674\"",
                                            "name": "leaf5",
                                            "leaf_index": 5.0,
                                            "leaf_value": -1.1101353686592947e-05,
                                            "size": -1.1101353686592947e-05,
                                            "leaf_count": 674,
                                            "id": "leaf5"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.3163991570472717\nsplit_gain:0.012327422311770184\ninternal_value:0.01604226908551667\ninternal_count:135\"",
                            "name": "split3",
                            "split_feature_name": "low2_5_30",
                            "threshold": -0.3163991570472717,
                            "split_gain": 0.012327422311770184,
                            "internal_value": 0.01604226908551667,
                            "internal_count": 135,
                            "id": "split3",
                            "children": [
                                {
                                    "label": "\"leaf_index:2\nleaf_value:-0.00018350863596424462\nleaf_count:30\"",
                                    "name": "leaf2",
                                    "leaf_index": 2.0,
                                    "leaf_value": -0.00018350863596424462,
                                    "size": -0.00018350863596424462,
                                    "leaf_count": 30,
                                    "id": "leaf2"
                                },
                                {
                                    "label": "\"split_feature_name:stk5_30\nthreshold:0.05506283789873124\nsplit_gain:0.00717095209004745\ninternal_value:0.021150084926990702\ninternal_count:105\"",
                                    "name": "split11",
                                    "split_feature_name": "stk5_30",
                                    "threshold": 0.05506283789873124,
                                    "split_gain": 0.00717095209004745,
                                    "internal_value": 0.021150084926990702,
                                    "internal_count": 105,
                                    "id": "split11",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:4\nleaf_value:0.003391825838104611\nleaf_count:31\"",
                                            "name": "leaf4",
                                            "leaf_index": 4.0,
                                            "leaf_value": 0.003391825838104611,
                                            "size": 0.003391825838104611,
                                            "leaf_count": 31,
                                            "id": "leaf4"
                                        },
                                        {
                                            "label": "\"split_feature_name:vol1_10\nthreshold:0.6863567233085633\nsplit_gain:0.009654437037538367\ninternal_value:0.015801255507048573\ninternal_count:74\"",
                                            "name": "split12",
                                            "split_feature_name": "vol1_10",
                                            "threshold": 0.6863567233085633,
                                            "split_gain": 0.009654437037538367,
                                            "internal_value": 0.015801255507048573,
                                            "internal_count": 74,
                                            "id": "split12",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:stk2_5\nthreshold:0.0033085390459746127\nsplit_gain:0.005898265675195921\ninternal_value:0.00861141378310386\ninternal_count:53\"",
                                                    "name": "split24",
                                                    "split_feature_name": "stk2_5",
                                                    "threshold": 0.0033085390459746127,
                                                    "split_gain": 0.005898265675195921,
                                                    "internal_value": 0.00861141378310386,
                                                    "internal_count": 53,
                                                    "id": "split24",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:12\nleaf_value:0.0020659579705629176\nleaf_count:23\"",
                                                            "name": "leaf12",
                                                            "leaf_index": 12.0,
                                                            "leaf_value": 0.0020659579705629176,
                                                            "size": 0.0020659579705629176,
                                                            "leaf_count": 23,
                                                            "id": "leaf12"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:25\nleaf_value:-6.25513424165547e-05\nleaf_count:30\"",
                                                            "name": "leaf25",
                                                            "leaf_index": 25.0,
                                                            "leaf_value": -6.25513424165547e-05,
                                                            "size": -6.25513424165547e-05,
                                                            "leaf_count": 30,
                                                            "id": "leaf25"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:13\nleaf_value:0.003394704652462332\nleaf_count:21\"",
                                                    "name": "leaf13",
                                                    "leaf_index": 13.0,
                                                    "leaf_value": 0.003394704652462332,
                                                    "size": 0.003394704652462332,
                                                    "leaf_count": 21,
                                                    "id": "leaf13"
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
                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.01017641408523672\ninternal_value:-0.000274653042392315\ninternal_count:23443\"",
                    "name": "split5",
                    "split_feature_name": "daytime",
                    "threshold": 15.250000000000002,
                    "split_gain": 0.01017641408523672,
                    "internal_value": -0.000274653042392315,
                    "internal_count": 23443,
                    "id": "split5",
                    "children": [
                        {
                            "label": "\"split_feature_name:high2_5_30\nthreshold:-0.09802618250250815\nsplit_gain:0.009743056099730488\ninternal_value:-0.00046236305567434467\ninternal_count:21683\"",
                            "name": "split7",
                            "split_feature_name": "high2_5_30",
                            "threshold": -0.09802618250250815,
                            "split_gain": 0.009743056099730488,
                            "internal_value": -0.00046236305567434467,
                            "internal_count": 21683,
                            "id": "split7",
                            "children": [
                                {
                                    "label": "\"leaf_index:1\nleaf_value:-0.001567841331208391\nleaf_count:42\"",
                                    "name": "leaf1",
                                    "leaf_index": 1.0,
                                    "leaf_value": -0.001567841331208391,
                                    "size": -0.001567841331208391,
                                    "leaf_count": 42,
                                    "id": "leaf1"
                                },
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:-0.01497364044189453\nsplit_gain:0.006741100022416674\ninternal_value:-0.0004328323449507551\ninternal_count:21641\"",
                                    "name": "split14",
                                    "split_feature_name": "day_delta",
                                    "threshold": -0.01497364044189453,
                                    "split_gain": 0.006741100022416674,
                                    "internal_value": -0.0004328323449507551,
                                    "internal_count": 21641,
                                    "id": "split14",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:high2_5_30\nthreshold:0.1856869384646416\nsplit_gain:0.007019911382116091\ninternal_value:0.0004981946658874399\ninternal_count:5721\"",
                                            "name": "split21",
                                            "split_feature_name": "high2_5_30",
                                            "threshold": 0.1856869384646416,
                                            "split_gain": 0.007019911382116091,
                                            "internal_value": 0.0004981946658874399,
                                            "internal_count": 5721,
                                            "id": "split21",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:8\nleaf_value:4.1382098092047124e-05\nleaf_count:5688\"",
                                                    "name": "leaf8",
                                                    "leaf_index": 8.0,
                                                    "leaf_value": 4.1382098092047124e-05,
                                                    "size": 4.1382098092047124e-05,
                                                    "leaf_count": 5688,
                                                    "id": "leaf8"
                                                },
                                                {
                                                    "label": "\"leaf_index:22\nleaf_value:0.0015041149820194044\nleaf_count:33\"",
                                                    "name": "leaf22",
                                                    "leaf_index": 22.0,
                                                    "leaf_value": 0.0015041149820194044,
                                                    "size": 0.0015041149820194044,
                                                    "leaf_count": 33,
                                                    "id": "leaf22"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.018205185176508133\ninternal_value:-0.0007674055565716919\ninternal_count:15920\"",
                                            "name": "split15",
                                            "split_feature_name": "daytime",
                                            "threshold": 9.750000000000002,
                                            "split_gain": 0.018205185176508133,
                                            "internal_value": -0.0007674055565716919,
                                            "internal_count": 15920,
                                            "id": "split15",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:day_delta\nthreshold:0.08991083502769472\nsplit_gain:0.02837543701056355\ninternal_value:-0.0043356490394788165\ninternal_count:1312\"",
                                                    "name": "split16",
                                                    "split_feature_name": "day_delta",
                                                    "threshold": 0.08991083502769472,
                                                    "split_gain": 0.02837543701056355,
                                                    "internal_value": -0.0043356490394788165,
                                                    "internal_count": 1312,
                                                    "id": "split16",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:day_delta\nthreshold:0.04018980264663697\nsplit_gain:0.00865545157673477\ninternal_value:-0.00350038551774942\ninternal_count:1271\"",
                                                            "name": "split17",
                                                            "split_feature_name": "day_delta",
                                                            "threshold": 0.04018980264663697,
                                                            "split_gain": 0.00865545157673477,
                                                            "internal_value": -0.00350038551774942,
                                                            "internal_count": 1271,
                                                            "id": "split17",
                                                            "children": [
                                                                {
                                                                    "label": "\"split_feature_name:low2_2_5\nthreshold:-0.00956259574741125\nsplit_gain:0.005883821145685167\ninternal_value:-0.002461079598909526\ninternal_count:1097\"",
                                                                    "name": "split25",
                                                                    "split_feature_name": "low2_2_5",
                                                                    "threshold": -0.00956259574741125,
                                                                    "split_gain": 0.005883821145685167,
                                                                    "internal_value": -0.002461079598909526,
                                                                    "internal_count": 1097,
                                                                    "id": "split25",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:15\nleaf_value:-0.000539009785455496\nleaf_count:422\"",
                                                                            "name": "leaf15",
                                                                            "leaf_index": 15.0,
                                                                            "leaf_value": -0.000539009785455496,
                                                                            "size": -0.000539009785455496,
                                                                            "leaf_count": 422,
                                                                            "id": "leaf15"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:26\nleaf_value:-6.299007783430473e-05\nleaf_count:675\"",
                                                                            "name": "leaf26",
                                                                            "leaf_index": 26.0,
                                                                            "leaf_value": -6.299007783430473e-05,
                                                                            "size": -6.299007783430473e-05,
                                                                            "leaf_count": 675,
                                                                            "id": "leaf26"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:18\nleaf_value:-0.0010052791224458408\nleaf_count:174\"",
                                                                    "name": "leaf18",
                                                                    "leaf_index": 18.0,
                                                                    "leaf_value": -0.0010052791224458408,
                                                                    "size": -0.0010052791224458408,
                                                                    "leaf_count": 174,
                                                                    "id": "leaf18"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:117237.47656250001\nsplit_gain:0.007655710645810776\ninternal_value:-0.03022881821309012\ninternal_count:41\"",
                                                            "name": "split20",
                                                            "split_feature_name": "avg_dolvol1_2",
                                                            "threshold": 117237.47656250001,
                                                            "split_gain": 0.007655710645810776,
                                                            "internal_value": -0.03022881821309012,
                                                            "internal_count": 41,
                                                            "id": "split20",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:17\nleaf_value:-0.0016226644010748715\nleaf_count:20\"",
                                                                    "name": "leaf17",
                                                                    "leaf_index": 17.0,
                                                                    "leaf_value": -0.0016226644010748715,
                                                                    "size": -0.0016226644010748715,
                                                                    "leaf_count": 20,
                                                                    "id": "leaf17"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:21\nleaf_value:-0.004356422221532002\nleaf_count:21\"",
                                                                    "name": "leaf21",
                                                                    "leaf_index": 21.0,
                                                                    "leaf_value": -0.004356422221532002,
                                                                    "size": -0.004356422221532002,
                                                                    "leaf_count": 21,
                                                                    "id": "leaf21"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_2_5\nthreshold:-0.013891600072383879\nsplit_gain:0.008500034387272561\ninternal_value:-0.00044692804770161054\ninternal_count:14608\"",
                                                    "name": "split18",
                                                    "split_feature_name": "low2_2_5",
                                                    "threshold": -0.013891600072383879,
                                                    "split_gain": 0.008500034387272561,
                                                    "internal_value": -0.00044692804770161054,
                                                    "internal_count": 14608,
                                                    "id": "split18",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:high2_5_30\nthreshold:0.054609833285212524\nsplit_gain:0.007961341135365188\ninternal_value:-0.002122829297101724\ninternal_count:2507\"",
                                                            "name": "split19",
                                                            "split_feature_name": "high2_5_30",
                                                            "threshold": 0.054609833285212524,
                                                            "split_gain": 0.007961341135365188,
                                                            "internal_value": -0.002122829297101724,
                                                            "internal_count": 2507,
                                                            "id": "split19",
                                                            "children": [
                                                                {
                                                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.2672511935234069\nsplit_gain:0.00665419016692231\ninternal_value:-0.003862017842331927\ninternal_count:1284\"",
                                                                    "name": "split23",
                                                                    "split_feature_name": "low2_5_30",
                                                                    "threshold": -0.2672511935234069,
                                                                    "split_gain": 0.00665419016692231,
                                                                    "internal_value": -0.003862017842331927,
                                                                    "internal_count": 1284,
                                                                    "id": "split23",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:16\nleaf_value:-0.0020017054690979422\nleaf_count:25\"",
                                                                            "name": "leaf16",
                                                                            "leaf_index": 16.0,
                                                                            "leaf_value": -0.0020017054690979422,
                                                                            "size": -0.0020017054690979422,
                                                                            "leaf_count": 25,
                                                                            "id": "leaf16"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:24\nleaf_value:-0.0003541226800857593\nleaf_count:1259\"",
                                                                            "name": "leaf24",
                                                                            "leaf_index": 24.0,
                                                                            "leaf_value": -0.0003541226800857593,
                                                                            "size": -0.0003541226800857593,
                                                                            "leaf_count": 1259,
                                                                            "id": "leaf24"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:20\nleaf_value:-2.9689463473411945e-05\nleaf_count:1223\"",
                                                                    "name": "leaf20",
                                                                    "leaf_index": 20.0,
                                                                    "leaf_value": -2.9689463473411945e-05,
                                                                    "size": -2.9689463473411945e-05,
                                                                    "leaf_count": 1223,
                                                                    "id": "leaf20"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:19\nleaf_value:-9.972662366673037e-06\nleaf_count:12101\"",
                                                            "name": "leaf19",
                                                            "leaf_index": 19.0,
                                                            "leaf_value": -9.972662366673037e-06,
                                                            "size": -9.972662366673037e-06,
                                                            "leaf_count": 12101,
                                                            "id": "leaf19"
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
                            "label": "\"split_feature_name:stk1_2\nthreshold:-0.039595657959580415\nsplit_gain:0.012524168733816773\ninternal_value:0.0020379129905589623\ninternal_count:1760\"",
                            "name": "split6",
                            "split_feature_name": "stk1_2",
                            "threshold": -0.039595657959580415,
                            "split_gain": 0.012524168733816773,
                            "internal_value": 0.0020379129905589623,
                            "internal_count": 1760,
                            "id": "split6",
                            "children": [
                                {
                                    "label": "\"leaf_index:6\nleaf_value:0.002631285855923558\nleaf_count:21\"",
                                    "name": "leaf6",
                                    "leaf_index": 6.0,
                                    "leaf_value": 0.002631285855923558,
                                    "size": 0.002631285855923558,
                                    "leaf_count": 21,
                                    "id": "leaf6"
                                },
                                {
                                    "label": "\"split_feature_name:dayofweek\nthreshold:3.5000000000000004\nsplit_gain:0.00964085166844095\ninternal_value:0.0017447710371706882\ninternal_count:1739\"",
                                    "name": "split8",
                                    "split_feature_name": "dayofweek",
                                    "threshold": 3.5000000000000004,
                                    "split_gain": 0.00964085166844095,
                                    "internal_value": 0.0017447710371706882,
                                    "internal_count": 1739,
                                    "id": "split8",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:386084.65625000006\nsplit_gain:0.012135074262394812\ninternal_value:0.0005882668966250517\ninternal_count:1401\"",
                                            "name": "split9",
                                            "split_feature_name": "avg_dolvol5_30",
                                            "threshold": 386084.65625000006,
                                            "split_gain": 0.012135074262394812,
                                            "internal_value": 0.0005882668966250517,
                                            "internal_count": 1401,
                                            "id": "split9",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_5_30\nthreshold:-0.004207816906273364\nsplit_gain:0.005789453681117653\ninternal_value:0.0010008302679125336\ninternal_count:1374\"",
                                                    "name": "split28",
                                                    "split_feature_name": "high2_5_30",
                                                    "threshold": -0.004207816906273364,
                                                    "split_gain": 0.005789453681117653,
                                                    "internal_value": 0.0010008302679125336,
                                                    "internal_count": 1374,
                                                    "id": "split28",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:7\nleaf_value:0.001242120160658974\nleaf_count:43\"",
                                                            "name": "leaf7",
                                                            "leaf_index": 7.0,
                                                            "leaf_value": 0.001242120160658974,
                                                            "size": 0.001242120160658974,
                                                            "leaf_count": 43,
                                                            "id": "leaf7"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:stk2_5\nthreshold:-0.021506172604858872\nsplit_gain:0.006462700134197941\ninternal_value:0.0006318776251152986\ninternal_count:1331\"",
                                                            "name": "split29",
                                                            "split_feature_name": "stk2_5",
                                                            "threshold": -0.021506172604858872,
                                                            "split_gain": 0.006462700134197941,
                                                            "internal_value": 0.0006318776251152986,
                                                            "internal_count": 1331,
                                                            "id": "split29",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:29\nleaf_value:0.0006031756231899828\nleaf_count:190\"",
                                                                    "name": "leaf29",
                                                                    "leaf_index": 29.0,
                                                                    "leaf_value": 0.0006031756231899828,
                                                                    "size": 0.0006031756231899828,
                                                                    "leaf_count": 190,
                                                                    "id": "leaf29"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:30\nleaf_value:-2.6731337864373762e-05\nleaf_count:1141\"",
                                                                    "name": "leaf30",
                                                                    "leaf_index": 30.0,
                                                                    "leaf_value": -2.6731337864373762e-05,
                                                                    "size": -2.6731337864373762e-05,
                                                                    "leaf_count": 1141,
                                                                    "id": "leaf30"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:10\nleaf_value:-0.002040662466444903\nleaf_count:27\"",
                                                    "name": "leaf10",
                                                    "leaf_index": 10.0,
                                                    "leaf_value": -0.002040662466444903,
                                                    "size": -0.002040662466444903,
                                                    "leaf_count": 27,
                                                    "id": "leaf10"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:high2_5_30\nthreshold:0.11937574297189714\nsplit_gain:0.009241352851352152\ninternal_value:0.006538446483633519\ninternal_count:338\"",
                                            "name": "split10",
                                            "split_feature_name": "high2_5_30",
                                            "threshold": 0.11937574297189714,
                                            "split_gain": 0.009241352851352152,
                                            "internal_value": 0.006538446483633519,
                                            "internal_count": 338,
                                            "id": "split10",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:588.4179992675782\nsplit_gain:0.007146924338988728\ninternal_value:0.005028996235328356\ninternal_count:312\"",
                                                    "name": "split13",
                                                    "split_feature_name": "avg_dolvol1_2",
                                                    "threshold": 588.4179992675782,
                                                    "split_gain": 0.007146924338988728,
                                                    "internal_value": 0.005028996235328356,
                                                    "internal_count": 312,
                                                    "id": "split13",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:9\nleaf_value:0.0022845362914570917\nleaf_count:21\"",
                                                            "name": "leaf9",
                                                            "leaf_index": 9.0,
                                                            "leaf_value": 0.0022845362914570917,
                                                            "size": 0.0022845362914570917,
                                                            "leaf_count": 21,
                                                            "id": "leaf9"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:14\nleaf_value:0.0003743279052290233\nleaf_count:291\"",
                                                            "name": "leaf14",
                                                            "leaf_index": 14.0,
                                                            "leaf_value": 0.0003743279052290233,
                                                            "size": 0.0003743279052290233,
                                                            "leaf_count": 291,
                                                            "id": "leaf14"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:11\nleaf_value:0.002465184946329548\nleaf_count:26\"",
                                                    "name": "leaf11",
                                                    "leaf_index": 11.0,
                                                    "leaf_value": 0.002465184946329548,
                                                    "size": 0.002465184946329548,
                                                    "leaf_count": 26,
                                                    "id": "leaf11"
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
                "split3": ">"
            },
            "split2": {
                "split4": ">"
            },
            "split22": {
                "leaf23": ">"
            },
            "split4": {
                "leaf5": ">"
            },
            "split26": {
                "split27": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split3": {
                "split11": ">"
            },
            "split11": {
                "split12": ">"
            },
            "split12": {
                "leaf13": ">"
            },
            "split24": {
                "leaf25": ">"
            },
            "split5": {
                "split6": ">"
            },
            "split7": {
                "split14": ">"
            },
            "split14": {
                "split15": ">"
            },
            "split21": {
                "leaf22": ">"
            },
            "split15": {
                "split18": ">"
            },
            "split16": {
                "split20": ">"
            },
            "split17": {
                "leaf18": ">"
            },
            "split25": {
                "leaf26": ">"
            },
            "split20": {
                "leaf21": ">"
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
            "split6": {
                "split8": ">"
            },
            "split8": {
                "split10": ">"
            },
            "split9": {
                "leaf10": ">"
            },
            "split28": {
                "split29": ">"
            },
            "split29": {
                "leaf30": ">"
            },
            "split10": {
                "leaf11": ">"
            },
            "split13": {
                "leaf14": ">"
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
            "label": "\"split_feature_name:day_delta\nthreshold:-0.14854216575622556\nsplit_gain:0.029115712409202858\ninternal_value:0\ninternal_count:24771\"",
            "name": "split0",
            "split_feature_name": "day_delta",
            "threshold": -0.14854216575622556,
            "split_gain": 0.029115712409202858,
            "internal_value": 0.0,
            "internal_count": 24771,
            "id": "split0",
            "children": [
                {
                    "label": "\"split_feature_name:vol1_10\nthreshold:-0.6247489452362059\nsplit_gain:0.01157275088819672\ninternal_value:0.007089837314545905\ninternal_count:566\"",
                    "name": "split1",
                    "split_feature_name": "vol1_10",
                    "threshold": -0.6247489452362059,
                    "split_gain": 0.01157275088819672,
                    "internal_value": 0.007089837314545905,
                    "internal_count": 566,
                    "id": "split1",
                    "children": [
                        {
                            "label": "\"leaf_index:0\nleaf_value:0.00307159031755873\nleaf_count:20\"",
                            "name": "leaf0",
                            "leaf_index": 0.0,
                            "leaf_value": 0.00307159031755873,
                            "size": 0.00307159031755873,
                            "leaf_count": 20,
                            "id": "leaf0"
                        },
                        {
                            "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.009331295113416602\ninternal_value:0.0062244136566323004\ninternal_count:546\"",
                            "name": "split5",
                            "split_feature_name": "daytime",
                            "threshold": 15.250000000000002,
                            "split_gain": 0.009331295113416602,
                            "internal_value": 0.0062244136566323004,
                            "internal_count": 546,
                            "id": "split5",
                            "children": [
                                {
                                    "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:13815.243652343752\nsplit_gain:0.009578505002585176\ninternal_value:0.0047180108752294305\ninternal_count:482\"",
                                    "name": "split8",
                                    "split_feature_name": "avg_dolvol5_30",
                                    "threshold": 13815.243652343752,
                                    "split_gain": 0.009578505002585176,
                                    "internal_value": 0.0047180108752294305,
                                    "internal_count": 482,
                                    "id": "split8",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:2\nleaf_value:0.0016654305333682036\nleaf_count:59\"",
                                            "name": "leaf2",
                                            "leaf_index": 2.0,
                                            "leaf_value": 0.0016654305333682036,
                                            "size": 0.0016654305333682036,
                                            "leaf_count": 59,
                                            "id": "leaf2"
                                        },
                                        {
                                            "label": "\"leaf_index:9\nleaf_value:0.000305313765289207\nleaf_count:423\"",
                                            "name": "leaf9",
                                            "leaf_index": 9.0,
                                            "leaf_value": 0.000305313765289207,
                                            "size": 0.000305313765289207,
                                            "leaf_count": 423,
                                            "id": "leaf9"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:stk1_2\nthreshold:0.022565553896129135\nsplit_gain:0.019483900614408002\ninternal_value:0.017569509604072664\ninternal_count:64\"",
                                    "name": "split6",
                                    "split_feature_name": "stk1_2",
                                    "threshold": 0.022565553896129135,
                                    "split_gain": 0.019483900614408002,
                                    "internal_value": 0.017569509604072664,
                                    "internal_count": 64,
                                    "id": "split6",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:high2_5_30\nthreshold:-0.02560266852378845\nsplit_gain:0.017857088455133487\ninternal_value:0.029762869300104158\ninternal_count:43\"",
                                            "name": "split7",
                                            "split_feature_name": "high2_5_30",
                                            "threshold": -0.02560266852378845,
                                            "split_gain": 0.017857088455133487,
                                            "internal_value": 0.029762869300104158,
                                            "internal_count": 43,
                                            "id": "split7",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:6\nleaf_value:0.0051616319734603166\nleaf_count:20\"",
                                                    "name": "leaf6",
                                                    "leaf_index": 6.0,
                                                    "leaf_value": 0.0051616319734603166,
                                                    "size": 0.0051616319734603166,
                                                    "leaf_count": 20,
                                                    "id": "leaf6"
                                                },
                                                {
                                                    "label": "\"leaf_index:8\nleaf_value:0.0010759868922278933\nleaf_count:23\"",
                                                    "name": "leaf8",
                                                    "leaf_index": 8.0,
                                                    "leaf_value": 0.0010759868922278933,
                                                    "size": 0.0010759868922278933,
                                                    "leaf_count": 23,
                                                    "id": "leaf8"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:7\nleaf_value:-0.0007397845963991825\nleaf_count:21\"",
                                            "name": "leaf7",
                                            "leaf_index": 7.0,
                                            "leaf_value": -0.0007397845963991825,
                                            "size": -0.0007397845963991825,
                                            "leaf_count": 21,
                                            "id": "leaf7"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "\"split_feature_name:daytime\nthreshold:15.250000000000002\nsplit_gain:0.010228193455896097\ninternal_value:-0.00016578588991647628\ninternal_count:24205\"",
                    "name": "split2",
                    "split_feature_name": "daytime",
                    "threshold": 15.250000000000002,
                    "split_gain": 0.010228193455896097,
                    "internal_value": -0.00016578588991647628,
                    "internal_count": 24205,
                    "id": "split2",
                    "children": [
                        {
                            "label": "\"split_feature_name:day_delta\nthreshold:0.19088137149810794\nsplit_gain:0.007583233254402586\ninternal_value:-0.00035136094439872545\ninternal_count:22381\"",
                            "name": "split10",
                            "split_feature_name": "day_delta",
                            "threshold": 0.19088137149810794,
                            "split_gain": 0.007583233254402586,
                            "internal_value": -0.00035136094439872545,
                            "internal_count": 22381,
                            "id": "split10",
                            "children": [
                                {
                                    "label": "\"split_feature_name:day_delta\nthreshold:-0.02029722929000854\nsplit_gain:0.006192976621449376\ninternal_value:-0.0003173833094436389\ninternal_count:22305\"",
                                    "name": "split19",
                                    "split_feature_name": "day_delta",
                                    "threshold": -0.02029722929000854,
                                    "split_gain": 0.006192976621449376,
                                    "internal_value": -0.0003173833094436389,
                                    "internal_count": 22305,
                                    "id": "split19",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:daytime\nthreshold:9.750000000000002\nsplit_gain:0.010175256266001286\ninternal_value:0.0005950862393645216\ninternal_count:5578\"",
                                            "name": "split21",
                                            "split_feature_name": "daytime",
                                            "threshold": 9.750000000000002,
                                            "split_gain": 0.010175256266001286,
                                            "internal_value": 0.0005950862393645216,
                                            "internal_count": 5578,
                                            "id": "split21",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:14720.780761718752\nsplit_gain:0.0058314545930379675\ninternal_value:0.005011826857462705\ninternal_count:477\"",
                                                    "name": "split29",
                                                    "split_feature_name": "avg_dolvol5_30",
                                                    "threshold": 14720.780761718752,
                                                    "split_gain": 0.0058314545930379675,
                                                    "internal_value": 0.005011826857462705,
                                                    "internal_count": 477,
                                                    "id": "split29",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:1\nleaf_value:8.252951582256416e-05\nleaf_count:196\"",
                                                            "name": "leaf1",
                                                            "leaf_index": 1.0,
                                                            "leaf_value": 8.252951582256416e-05,
                                                            "size": 8.252951582256416e-05,
                                                            "leaf_count": 196,
                                                            "id": "leaf1"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:30\nleaf_value:0.000793196996440386\nleaf_count:281\"",
                                                            "name": "leaf30",
                                                            "leaf_index": 30.0,
                                                            "leaf_value": 0.000793196996440386,
                                                            "size": 0.000793196996440386,
                                                            "leaf_count": 281,
                                                            "id": "leaf30"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:22\nleaf_value:1.820720706068596e-05\nleaf_count:5101\"",
                                                    "name": "leaf22",
                                                    "leaf_index": 22.0,
                                                    "leaf_value": 1.820720706068596e-05,
                                                    "size": 1.820720706068596e-05,
                                                    "leaf_count": 5101,
                                                    "id": "leaf22"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.05306113883852958\nsplit_gain:0.01231578565058359\ninternal_value:-0.0006216671106782847\ninternal_count:16727\"",
                                            "name": "split20",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.05306113883852958,
                                            "split_gain": 0.01231578565058359,
                                            "internal_value": -0.0006216671106782847,
                                            "internal_count": 16727,
                                            "id": "split20",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_2_5\nthreshold:0.11739014461636545\nsplit_gain:0.008558681852205468\ninternal_value:-0.0026538320540274605\ninternal_count:2531\"",
                                                    "name": "split22",
                                                    "split_feature_name": "high2_2_5",
                                                    "threshold": 0.11739014461636545,
                                                    "split_gain": 0.008558681852205468,
                                                    "internal_value": -0.0026538320540274605,
                                                    "internal_count": 2531,
                                                    "id": "split22",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.33782787621021265\nsplit_gain:0.009881928035658894\ninternal_value:-0.002901239669518933\ninternal_count:2486\"",
                                                            "name": "split23",
                                                            "split_feature_name": "low2_5_30",
                                                            "threshold": -0.33782787621021265,
                                                            "split_gain": 0.009881928035658894,
                                                            "internal_value": -0.002901239669518933,
                                                            "internal_count": 2486,
                                                            "id": "split23",
                                                            "children": [
                                                                {
                                                                    "label": "\"split_feature_name:daytime\nthreshold:10.750000000000002\nsplit_gain:0.007600537020651877\ninternal_value:-0.0162812111170583\ninternal_count:54\"",
                                                                    "name": "split24",
                                                                    "split_feature_name": "daytime",
                                                                    "threshold": 10.750000000000002,
                                                                    "split_gain": 0.007600537020651877,
                                                                    "internal_value": -0.0162812111170583,
                                                                    "internal_count": 54,
                                                                    "id": "split24",
                                                                    "children": [
                                                                        {
                                                                            "label": "\"leaf_index:20\nleaf_value:-0.002905895721167326\nleaf_count:25\"",
                                                                            "name": "leaf20",
                                                                            "leaf_index": 20.0,
                                                                            "leaf_value": -0.002905895721167326,
                                                                            "size": -0.002905895721167326,
                                                                            "leaf_count": 25,
                                                                            "id": "leaf20"
                                                                        },
                                                                        {
                                                                            "label": "\"leaf_index:25\nleaf_value:-0.0005265912759631616\nleaf_count:29\"",
                                                                            "name": "leaf25",
                                                                            "leaf_index": 25.0,
                                                                            "leaf_value": -0.0005265912759631616,
                                                                            "size": -0.0005265912759631616,
                                                                            "leaf_count": 29,
                                                                            "id": "leaf25"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:24\nleaf_value:-0.0002604151487706792\nleaf_count:2432\"",
                                                                    "name": "leaf24",
                                                                    "leaf_index": 24.0,
                                                                    "leaf_value": -0.0002604151487706792,
                                                                    "size": -0.0002604151487706792,
                                                                    "leaf_count": 2432,
                                                                    "id": "leaf24"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:23\nleaf_value:0.0011014064215123655\nleaf_count:45\"",
                                                            "name": "leaf23",
                                                            "leaf_index": 23.0,
                                                            "leaf_value": 0.0011014064215123655,
                                                            "size": 0.0011014064215123655,
                                                            "leaf_count": 45,
                                                            "id": "leaf23"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:daytime\nthreshold:10.250000000000002\nsplit_gain:0.007456586492062577\ninternal_value:-0.00025935311577713195\ninternal_count:14196\"",
                                                    "name": "split25",
                                                    "split_feature_name": "daytime",
                                                    "threshold": 10.250000000000002,
                                                    "split_gain": 0.007456586492062577,
                                                    "internal_value": -0.00025935311577713195,
                                                    "internal_count": 14196,
                                                    "id": "split25",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:288924.68750000006\nsplit_gain:0.013915501336259371\ninternal_value:-0.001943571555853925\ninternal_count:2218\"",
                                                            "name": "split26",
                                                            "split_feature_name": "avg_dolvol5_30",
                                                            "threshold": 288924.68750000006,
                                                            "split_gain": 0.013915501336259371,
                                                            "internal_value": -0.001943571555853925,
                                                            "internal_count": 2218,
                                                            "id": "split26",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:21\nleaf_value:-0.00015516694093046715\nleaf_count:2165\"",
                                                                    "name": "leaf21",
                                                                    "leaf_index": 21.0,
                                                                    "leaf_value": -0.00015516694093046715,
                                                                    "size": -0.00015516694093046715,
                                                                    "leaf_count": 2165,
                                                                    "id": "leaf21"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:27\nleaf_value:-0.0017952404523384757\nleaf_count:53\"",
                                                                    "name": "leaf27",
                                                                    "leaf_index": 27.0,
                                                                    "leaf_value": -0.0017952404523384757,
                                                                    "size": -0.0017952404523384757,
                                                                    "leaf_count": 53,
                                                                    "id": "leaf27"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:high2_2_5\nthreshold:0.023710951209068302\nsplit_gain:0.007098974270014995\ninternal_value:5.2518356930359056e-05\ninternal_count:11978\"",
                                                            "name": "split27",
                                                            "split_feature_name": "high2_2_5",
                                                            "threshold": 0.023710951209068302,
                                                            "split_gain": 0.007098974270014995,
                                                            "internal_value": 5.2518356930359056e-05,
                                                            "internal_count": 11978,
                                                            "id": "split27",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:26\nleaf_value:-3.657577523573341e-05\nleaf_count:9248\"",
                                                                    "name": "leaf26",
                                                                    "leaf_index": 26.0,
                                                                    "leaf_value": -3.657577523573341e-05,
                                                                    "size": -3.657577523573341e-05,
                                                                    "leaf_count": 9248,
                                                                    "id": "leaf26"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:28\nleaf_value:0.00014694478289789255\nleaf_count:2730\"",
                                                                    "name": "leaf28",
                                                                    "leaf_index": 28.0,
                                                                    "leaf_value": 0.00014694478289789255,
                                                                    "size": 0.00014694478289789255,
                                                                    "leaf_count": 2730,
                                                                    "id": "leaf28"
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
                                    "label": "\"split_feature_name:stk2_5\nthreshold:-0.06542306393384932\nsplit_gain:0.02354540541079138\ninternal_value:-0.010323349729572473\ninternal_count:76\"",
                                    "name": "split11",
                                    "split_feature_name": "stk2_5",
                                    "threshold": -0.06542306393384932,
                                    "split_gain": 0.02354540541079138,
                                    "internal_value": -0.010323349729572473,
                                    "internal_count": 76,
                                    "id": "split11",
                                    "children": [
                                        {
                                            "label": "\"leaf_index:11\nleaf_value:0.0012722243562166115\nleaf_count:28\"",
                                            "name": "leaf11",
                                            "leaf_index": 11.0,
                                            "leaf_value": 0.0012722243562166115,
                                            "size": 0.0012722243562166115,
                                            "leaf_count": 28,
                                            "id": "leaf11"
                                        },
                                        {
                                            "label": "\"leaf_index:12\nleaf_value:-0.002376661248308665\nleaf_count:48\"",
                                            "name": "leaf12",
                                            "leaf_index": 12.0,
                                            "leaf_value": -0.002376661248308665,
                                            "size": -0.002376661248308665,
                                            "leaf_count": 48,
                                            "id": "leaf12"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "\"split_feature_name:dayofweek\nthreshold:3.5000000000000004\nsplit_gain:0.010876719919584305\ninternal_value:0.002111272933749762\ninternal_count:1824\"",
                            "name": "split3",
                            "split_feature_name": "dayofweek",
                            "threshold": 3.5000000000000004,
                            "split_gain": 0.010876719919584305,
                            "internal_value": 0.002111272933749762,
                            "internal_count": 1824,
                            "id": "split3",
                            "children": [
                                {
                                    "label": "\"split_feature_name:high2_2_5\nthreshold:0.05800935439765454\nsplit_gain:0.007481394898582207\ninternal_value:0.0008982528440401967\ninternal_count:1463\"",
                                    "name": "split12",
                                    "split_feature_name": "high2_2_5",
                                    "threshold": 0.05800935439765454,
                                    "split_gain": 0.007481394898582207,
                                    "internal_value": 0.0008982528440401967,
                                    "internal_count": 1463,
                                    "id": "split12",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:day_delta\nthreshold:0.08202725648880006\nsplit_gain:0.009301380480583786\ninternal_value:0.0006000857670481642\ninternal_count:1438\"",
                                            "name": "split13",
                                            "split_feature_name": "day_delta",
                                            "threshold": 0.08202725648880006,
                                            "split_gain": 0.009301380480583786,
                                            "internal_value": 0.0006000857670481642,
                                            "internal_count": 1438,
                                            "id": "split13",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:high2_5_30\nthreshold:-0.004207816906273364\nsplit_gain:0.006943969450001908\ninternal_value:0.0012494206193551455\ninternal_count:1350\"",
                                                    "name": "split17",
                                                    "split_feature_name": "high2_5_30",
                                                    "threshold": -0.004207816906273364,
                                                    "split_gain": 0.006943969450001908,
                                                    "internal_value": 0.0012494206193551455,
                                                    "internal_count": 1350,
                                                    "id": "split17",
                                                    "children": [
                                                        {
                                                            "label": "\"split_feature_name:low2_2_5\nthreshold:-0.03419137746095657\nsplit_gain:0.008800461771937905\ninternal_value:0.011765557889884804\ninternal_count:60\"",
                                                            "name": "split18",
                                                            "split_feature_name": "low2_2_5",
                                                            "threshold": -0.03419137746095657,
                                                            "split_gain": 0.008800461771937905,
                                                            "internal_value": 0.011765557889884804,
                                                            "internal_count": 60,
                                                            "id": "split18",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:3\nleaf_value:-0.00047388428966293024\nleaf_count:21\"",
                                                                    "name": "leaf3",
                                                                    "leaf_index": 3.0,
                                                                    "leaf_value": -0.00047388428966293024,
                                                                    "size": -0.00047388428966293024,
                                                                    "leaf_count": 21,
                                                                    "id": "leaf3"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:19\nleaf_value:0.0020652542928777016\nleaf_count:39\"",
                                                                    "name": "leaf19",
                                                                    "leaf_index": 19.0,
                                                                    "leaf_value": 0.0020652542928777016,
                                                                    "size": 0.0020652542928777016,
                                                                    "leaf_count": 39,
                                                                    "id": "leaf19"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "label": "\"leaf_index:18\nleaf_value:7.602979556095801e-05\nleaf_count:1290\"",
                                                            "name": "leaf18",
                                                            "leaf_index": 18.0,
                                                            "leaf_value": 7.602979556095801e-05,
                                                            "size": 7.602979556095801e-05,
                                                            "leaf_count": 1290,
                                                            "id": "leaf18"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.024163809604942795\nsplit_gain:0.01259004053745759\ninternal_value:-0.009361301171752117\ninternal_count:88\"",
                                                    "name": "split14",
                                                    "split_feature_name": "low2_5_30",
                                                    "threshold": -0.024163809604942795,
                                                    "split_gain": 0.01259004053745759,
                                                    "internal_value": -0.009361301171752117,
                                                    "internal_count": 88,
                                                    "id": "split14",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:14\nleaf_value:-0.002687060334054487\nleaf_count:28\"",
                                                            "name": "leaf14",
                                                            "leaf_index": 14.0,
                                                            "leaf_value": -0.002687060334054487,
                                                            "size": -0.002687060334054487,
                                                            "leaf_count": 28,
                                                            "id": "leaf14"
                                                        },
                                                        {
                                                            "label": "\"split_feature_name:avg_dolvol5_30\nthreshold:74880.56250000001\nsplit_gain:0.005999306617213126\ninternal_value:-0.001190293492982164\ninternal_count:60\"",
                                                            "name": "split28",
                                                            "split_feature_name": "avg_dolvol5_30",
                                                            "threshold": 74880.56250000001,
                                                            "split_gain": 0.005999306617213126,
                                                            "internal_value": -0.001190293492982164,
                                                            "internal_count": 60,
                                                            "id": "split28",
                                                            "children": [
                                                                {
                                                                    "label": "\"leaf_index:15\nleaf_value:0.0005880365727352911\nleaf_count:40\"",
                                                                    "name": "leaf15",
                                                                    "leaf_index": 15.0,
                                                                    "leaf_value": 0.0005880365727352911,
                                                                    "size": 0.0005880365727352911,
                                                                    "leaf_count": 40,
                                                                    "id": "leaf15"
                                                                },
                                                                {
                                                                    "label": "\"leaf_index:29\nleaf_value:-0.0015331611933652313\nleaf_count:20\"",
                                                                    "name": "leaf29",
                                                                    "leaf_index": 29.0,
                                                                    "leaf_value": -0.0015331611933652313,
                                                                    "size": -0.0015331611933652313,
                                                                    "leaf_count": 20,
                                                                    "id": "leaf29"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"leaf_index:13\nleaf_value:0.0018048823112621903\nleaf_count:25\"",
                                            "name": "leaf13",
                                            "leaf_index": 13.0,
                                            "leaf_value": 0.0018048823112621903,
                                            "size": 0.0018048823112621903,
                                            "leaf_count": 25,
                                            "id": "leaf13"
                                        }
                                    ]
                                },
                                {
                                    "label": "\"split_feature_name:low2_5_30\nthreshold:-0.10361137613654135\nsplit_gain:0.011454637421425107\ninternal_value:0.007027196455204316\ninternal_count:361\"",
                                    "name": "split4",
                                    "split_feature_name": "low2_5_30",
                                    "threshold": -0.10361137613654135,
                                    "split_gain": 0.011454637421425107,
                                    "internal_value": 0.007027196455204316,
                                    "internal_count": 361,
                                    "id": "split4",
                                    "children": [
                                        {
                                            "label": "\"split_feature_name:low2_5_30\nthreshold:-0.14212486147880551\nsplit_gain:0.008311185099759238\ninternal_value:0.022146798668969\ninternal_count:44\"",
                                            "name": "split9",
                                            "split_feature_name": "low2_5_30",
                                            "threshold": -0.14212486147880551,
                                            "split_gain": 0.008311185099759238,
                                            "internal_value": 0.022146798668969,
                                            "internal_count": 44,
                                            "id": "split9",
                                            "children": [
                                                {
                                                    "label": "\"leaf_index:4\nleaf_value:0.0007091278600273654\nleaf_count:20\"",
                                                    "name": "leaf4",
                                                    "leaf_index": 4.0,
                                                    "leaf_value": 0.0007091278600273654,
                                                    "size": 0.0007091278600273654,
                                                    "leaf_count": 20,
                                                    "id": "leaf4"
                                                },
                                                {
                                                    "label": "\"leaf_index:10\nleaf_value:0.0034693065392881785\nleaf_count:24\"",
                                                    "name": "leaf10",
                                                    "leaf_index": 10.0,
                                                    "leaf_value": 0.0034693065392881785,
                                                    "size": 0.0034693065392881785,
                                                    "leaf_count": 24,
                                                    "id": "leaf10"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "\"split_feature_name:low2_2_5\nthreshold:0.009182791691273453\nsplit_gain:0.00701273114024158\ninternal_value:0.004928576589571364\ninternal_count:317\"",
                                            "name": "split15",
                                            "split_feature_name": "low2_2_5",
                                            "threshold": 0.009182791691273453,
                                            "split_gain": 0.00701273114024158,
                                            "internal_value": 0.004928576589571364,
                                            "internal_count": 317,
                                            "id": "split15",
                                            "children": [
                                                {
                                                    "label": "\"split_feature_name:avg_dolvol1_2\nthreshold:710.071502685547\nsplit_gain:0.007561346140223579\ninternal_value:0.003271573068237003\ninternal_count:282\"",
                                                    "name": "split16",
                                                    "split_feature_name": "avg_dolvol1_2",
                                                    "threshold": 710.071502685547,
                                                    "split_gain": 0.007561346140223579,
                                                    "internal_value": 0.003271573068237003,
                                                    "internal_count": 282,
                                                    "id": "split16",
                                                    "children": [
                                                        {
                                                            "label": "\"leaf_index:5\nleaf_value:0.0019519887479523626\nleaf_count:26\"",
                                                            "name": "leaf5",
                                                            "leaf_index": 5.0,
                                                            "leaf_value": 0.0019519887479523626,
                                                            "size": 0.0019519887479523626,
                                                            "leaf_count": 26,
                                                            "id": "leaf5"
                                                        },
                                                        {
                                                            "label": "\"leaf_index:17\nleaf_value:0.00016213536358407056\nleaf_count:256\"",
                                                            "name": "leaf17",
                                                            "leaf_index": 17.0,
                                                            "leaf_value": 0.00016213536358407056,
                                                            "size": 0.00016213536358407056,
                                                            "leaf_count": 256,
                                                            "id": "leaf17"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "\"leaf_index:16\nleaf_value:0.0018279290675751068\nleaf_count:35\"",
                                                    "name": "leaf16",
                                                    "leaf_index": 16.0,
                                                    "leaf_value": 0.0018279290675751068,
                                                    "size": 0.0018279290675751068,
                                                    "leaf_count": 35,
                                                    "id": "leaf16"
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
                "split2": ">"
            },
            "split1": {
                "split5": ">"
            },
            "split5": {
                "split6": ">"
            },
            "split8": {
                "leaf9": ">"
            },
            "split6": {
                "leaf7": ">"
            },
            "split7": {
                "leaf8": ">"
            },
            "split2": {
                "split3": ">"
            },
            "split10": {
                "split11": ">"
            },
            "split19": {
                "split20": ">"
            },
            "split21": {
                "leaf22": ">"
            },
            "split29": {
                "leaf30": ">"
            },
            "split20": {
                "split25": ">"
            },
            "split22": {
                "leaf23": ">"
            },
            "split23": {
                "leaf24": ">"
            },
            "split24": {
                "leaf25": ">"
            },
            "split25": {
                "split27": ">"
            },
            "split26": {
                "leaf27": ">"
            },
            "split27": {
                "leaf28": ">"
            },
            "split11": {
                "leaf12": ">"
            },
            "split3": {
                "split4": ">"
            },
            "split12": {
                "leaf13": ">"
            },
            "split13": {
                "split14": ">"
            },
            "split17": {
                "leaf18": ">"
            },
            "split18": {
                "leaf19": ">"
            },
            "split14": {
                "split28": ">"
            },
            "split28": {
                "leaf29": ">"
            },
            "split4": {
                "split15": ">"
            },
            "split9": {
                "leaf10": ">"
            },
            "split15": {
                "leaf16": ">"
            },
            "split16": {
                "leaf17": ">"
            }
        }
    }
}
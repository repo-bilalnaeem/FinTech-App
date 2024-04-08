import { ExpoRequest, ExpoResponse } from 'expo-router/server';

export async function GET(request: ExpoRequest) {
  const response = await fetch(
    `https://api.coinpaprika.com/v1/tickers/btc-bitcoin/historical?start=2024-01-01&interval=1d`
  );

  const res = await response.json();
  // console.log(res)
  return ExpoResponse.json(res);
  // return ExpoResponse.json(data);
}

// const data = [
//   {
//       "timestamp": "2024-01-01T00:00:00Z",
//       "price": 42850.26,
//       "volume_24h": 12058361624,
//       "market_cap": 839292148428
//   },
//   {
//       "timestamp": "2024-01-02T00:00:00Z",
//       "price": 45285.22,
//       "volume_24h": 26322994437,
//       "market_cap": 887025221780
//   },
//   {
//       "timestamp": "2024-01-03T00:00:00Z",
//       "price": 43976.55,
//       "volume_24h": 29942388903,
//       "market_cap": 861431009601
//   },
//   {
//       "timestamp": "2024-01-04T00:00:00Z",
//       "price": 43532.22,
//       "volume_24h": 29754873104,
//       "market_cap": 852771850034
//   },
//   {
//       "timestamp": "2024-01-05T00:00:00Z",
//       "price": 43841.79,
//       "volume_24h": 24271454099,
//       "market_cap": 858879240517
//   },
//   {
//       "timestamp": "2024-01-06T00:00:00Z",
//       "price": 43908.65,
//       "volume_24h": 18248808441,
//       "market_cap": 860227941216
//   },
//   {
//       "timestamp": "2024-01-07T00:00:00Z",
//       "price": 44136.6,
//       "volume_24h": 11455711529,
//       "market_cap": 864729684233
//   },
//   {
//       "timestamp": "2024-01-08T00:00:00Z",
//       "price": 44897.76,
//       "volume_24h": 21758384796,
//       "market_cap": 879675185474
//   },
//   {
//       "timestamp": "2024-01-09T00:00:00Z",
//       "price": 46685.2,
//       "volume_24h": 34144879041,
//       "market_cap": 914736088666
//   },
//   {
//       "timestamp": "2024-01-10T00:00:00Z",
//       "price": 45853.39,
//       "volume_24h": 31770588758,
//       "market_cap": 898478024808
//   },
//   {
//       "timestamp": "2024-01-11T00:00:00Z",
//       "price": 46596.17,
//       "volume_24h": 46021582608,
//       "market_cap": 913078868554
//   },
//   {
//       "timestamp": "2024-01-12T00:00:00Z",
//       "price": 45127.31,
//       "volume_24h": 35655156245,
//       "market_cap": 884340355982
//   },
//   {
//       "timestamp": "2024-01-13T00:00:00Z",
//       "price": 42899.19,
//       "volume_24h": 32912511370,
//       "market_cap": 840721784354
//   },
//   {
//       "timestamp": "2024-01-14T00:00:00Z",
//       "price": 42811.04,
//       "volume_24h": 12765033700,
//       "market_cap": 839032860956
//   },
//   {
//       "timestamp": "2024-01-15T00:00:00Z",
//       "price": 42653.06,
//       "volume_24h": 16966173676,
//       "market_cap": 835969337163
//   },
//   {
//       "timestamp": "2024-01-16T00:00:00Z",
//       "price": 42973.84,
//       "volume_24h": 18175623271,
//       "market_cap": 842291564775
//   },
//   {
//       "timestamp": "2024-01-17T00:00:00Z",
//       "price": 42759.43,
//       "volume_24h": 18685910072,
//       "market_cap": 838118506486
//   },
//   {
//       "timestamp": "2024-01-18T00:00:00Z",
//       "price": 42273.12,
//       "volume_24h": 16741348168,
//       "market_cap": 828620567137
//   },
//   {
//       "timestamp": "2024-01-19T00:00:00Z",
//       "price": 41315.59,
//       "volume_24h": 19963650769,
//       "market_cap": 809889152645
//   },
//   {
//       "timestamp": "2024-01-20T00:00:00Z",
//       "price": 41657.69,
//       "volume_24h": 14515463486,
//       "market_cap": 816631375273
//   },
//   {
//       "timestamp": "2024-01-21T00:00:00Z",
//       "price": 41750.04,
//       "volume_24h": 6685208959,
//       "market_cap": 818477388802
//   },
//   {
//       "timestamp": "2024-01-22T00:00:00Z",
//       "price": 40774.92,
//       "volume_24h": 12974348357,
//       "market_cap": 799398998012
//   },
//   {
//       "timestamp": "2024-01-23T00:00:00Z",
//       "price": 39450.13,
//       "volume_24h": 22098758345,
//       "market_cap": 773465605710
//   },
//   {
//       "timestamp": "2024-01-24T00:00:00Z",
//       "price": 39941.79,
//       "volume_24h": 21321888504,
//       "market_cap": 783142014099
//   },
//   {
//       "timestamp": "2024-01-25T00:00:00Z",
//       "price": 39972.74,
//       "volume_24h": 16924638069,
//       "market_cap": 783791225090
//   },
//   {
//       "timestamp": "2024-01-26T00:00:00Z",
//       "price": 40953.08,
//       "volume_24h": 18194723196,
//       "market_cap": 803055378306
//   },
//   {
//       "timestamp": "2024-01-27T00:00:00Z",
//       "price": 41842.32,
//       "volume_24h": 17251853011,
//       "market_cap": 820534883639
//   },
//   {
//       "timestamp": "2024-01-28T00:00:00Z",
//       "price": 42249.79,
//       "volume_24h": 12087864476,
//       "market_cap": 828568727732
//   },
//   {
//       "timestamp": "2024-01-29T00:00:00Z",
//       "price": 42483.84,
//       "volume_24h": 14196966845,
//       "market_cap": 833202137696
//   },
//   {
//       "timestamp": "2024-01-30T00:00:00Z",
//       "price": 43427.48,
//       "volume_24h": 19892943249,
//       "market_cap": 851749640553
//   },
//   {
//       "timestamp": "2024-01-31T00:00:00Z",
//       "price": 42932.46,
//       "volume_24h": 20269377121,
//       "market_cap": 842077065885
//   },
//   {
//       "timestamp": "2024-02-01T00:00:00Z",
//       "price": 42462.84,
//       "volume_24h": 21095877892,
//       "market_cap": 832902642750
//   },
//   {
//       "timestamp": "2024-02-02T00:00:00Z",
//       "price": 43074.97,
//       "volume_24h": 17004038259,
//       "market_cap": 844956366996
//   },
//   {
//       "timestamp": "2024-02-03T00:00:00Z",
//       "price": 43119.55,
//       "volume_24h": 11943154537,
//       "market_cap": 845877384607
//   },
//   {
//       "timestamp": "2024-02-04T00:00:00Z",
//       "price": 42928.1,
//       "volume_24h": 7935435046,
//       "market_cap": 842162939955
//   },
//   {
//       "timestamp": "2024-02-05T00:00:00Z",
//       "price": 42801.74,
//       "volume_24h": 13126499866,
//       "market_cap": 839725812678
//   },
//   {
//       "timestamp": "2024-02-06T00:00:00Z",
//       "price": 42954.87,
//       "volume_24h": 15510434059,
//       "market_cap": 842772455302
//   },
//   {
//       "timestamp": "2024-02-07T00:00:00Z",
//       "price": 43267.78,
//       "volume_24h": 15112954527,
//       "market_cap": 848956449785
//   },
//   {
//       "timestamp": "2024-02-08T00:00:00Z",
//       "price": 44880.71,
//       "volume_24h": 22684941210,
//       "market_cap": 880646467456
//   },
//   {
//       "timestamp": "2024-02-09T00:00:00Z",
//       "price": 46769.61,
//       "volume_24h": 28424692985,
//       "market_cap": 917754539372
//   },
//   {
//       "timestamp": "2024-02-10T00:00:00Z",
//       "price": 47365.65,
//       "volume_24h": 25293454828,
//       "market_cap": 929497130649
//   },
//   {
//       "timestamp": "2024-02-11T00:00:00Z",
//       "price": 48150.61,
//       "volume_24h": 16793665536,
//       "market_cap": 944944706107
//   },
//   {
//       "timestamp": "2024-02-12T00:00:00Z",
//       "price": 48777.79,
//       "volume_24h": 21781976970,
//       "market_cap": 957302696346
//   },
//   {
//       "timestamp": "2024-02-13T00:00:00Z",
//       "price": 49637.42,
//       "volume_24h": 30917159837,
//       "market_cap": 974220708841
//   },
//   {
//       "timestamp": "2024-02-14T00:00:00Z",
//       "price": 50858.76,
//       "volume_24h": 28645209724,
//       "market_cap": 998235637168
//   },
//   {
//       "timestamp": "2024-02-15T00:00:00Z",
//       "price": 52096.34,
//       "volume_24h": 31385312931,
//       "market_cap": 1022575737668
//   },
//   {
//       "timestamp": "2024-02-16T00:00:00Z",
//       "price": 52055.94,
//       "volume_24h": 28292856358,
//       "market_cap": 1021828804743
//   },
//   {
//       "timestamp": "2024-02-17T00:00:00Z",
//       "price": 51665.52,
//       "volume_24h": 18506511430,
//       "market_cap": 1013501646162
//   },
//   {
//       "timestamp": "2024-02-18T00:00:00Z",
//       "price": 51780.55,
//       "volume_24h": 15933733925,
//       "market_cap": 1016512308288
//   },
//   {
//       "timestamp": "2024-02-19T00:00:00Z",
//       "price": 52155.6,
//       "volume_24h": 17189537561,
//       "market_cap": 1023917687978
//   },
//   {
//       "timestamp": "2024-02-20T00:00:00Z",
//       "price": 51918.59,
//       "volume_24h": 23465686169,
//       "market_cap": 1019308399023
//   },
//   {
//       "timestamp": "2024-02-21T00:00:00Z",
//       "price": 51518.94,
//       "volume_24h": 27704601251,
//       "market_cap": 1011508294877
//   },
//   {
//       "timestamp": "2024-02-22T00:00:00Z",
//       "price": 51606.6,
//       "volume_24h": 25079609089,
//       "market_cap": 1013272679613
//   },
//   {
//       "timestamp": "2024-02-23T00:00:00Z",
//       "price": 51125.41,
//       "volume_24h": 20956829269,
//       "market_cap": 1003871577747
//   },
//   {
//       "timestamp": "2024-02-24T00:00:00Z",
//       "price": 51210.14,
//       "volume_24h": 15246612933,
//       "market_cap": 1005580456875
//   },
//   {
//       "timestamp": "2024-02-25T00:00:00Z",
//       "price": 51697.2,
//       "volume_24h": 11667250313,
//       "market_cap": 1015193405672
//   },
//   {
//       "timestamp": "2024-02-26T00:00:00Z",
//       "price": 52360.57,
//       "volume_24h": 17510163637,
//       "market_cap": 1028270731889
//   },
//   {
//       "timestamp": "2024-02-27T00:00:00Z",
//       "price": 56499.49,
//       "volume_24h": 38475364003,
//       "market_cap": 1109598908583
//   },
//   {
//       "timestamp": "2024-02-28T00:00:00Z",
//       "price": 59302.38,
//       "volume_24h": 40170552872,
//       "market_cap": 1164697526078
//   },
//   {
//       "timestamp": "2024-02-29T00:00:00Z",
//       "price": 62101.45,
//       "volume_24h": 65757133115,
//       "market_cap": 1219723680357
//   },
//   {
//       "timestamp": "2024-03-01T00:00:00Z",
//       "price": 61904.78,
//       "volume_24h": 41813422665,
//       "market_cap": 1215917487798
//   },
//   {
//       "timestamp": "2024-03-02T00:00:00Z",
//       "price": 62055.01,
//       "volume_24h": 27540459281,
//       "market_cap": 1218922657833
//   },
//   {
//       "timestamp": "2024-03-03T00:00:00Z",
//       "price": 62278.41,
//       "volume_24h": 16630916714,
//       "market_cap": 1223367166324
//   },
//   {
//       "timestamp": "2024-03-04T00:00:00Z",
//       "price": 65381.54,
//       "volume_24h": 39816706055,
//       "market_cap": 1284379118156
//   },
//   {
//       "timestamp": "2024-03-05T00:00:00Z",
//       "price": 66231.42,
//       "volume_24h": 71646839317,
//       "market_cap": 1301136217279
//   },
//   {
//       "timestamp": "2024-03-06T00:00:00Z",
//       "price": 65967.28,
//       "volume_24h": 83579811918,
//       "market_cap": 1295140803705
//   },
//   {
//       "timestamp": "2024-03-07T00:00:00Z",
//       "price": 66863,
//       "volume_24h": 49265715529,
//       "market_cap": 1313675687104
//   },
//   {
//       "timestamp": "2024-03-08T00:00:00Z",
//       "price": 67779.98,
//       "volume_24h": 43090760490,
//       "market_cap": 1331760711857
//   },
//   {
//       "timestamp": "2024-03-09T00:00:00Z",
//       "price": 68413.63,
//       "volume_24h": 44516079008,
//       "market_cap": 1344280727872
//   },
//   {
//       "timestamp": "2024-03-10T00:00:00Z",
//       "price": 69414.36,
//       "volume_24h": 25786485181,
//       "market_cap": 1364008786938
//   },
//   {
//       "timestamp": "2024-03-11T00:00:00Z",
//       "price": 71012.88,
//       "volume_24h": 45768614399,
//       "market_cap": 1395492712945
//   },
//   {
//       "timestamp": "2024-03-12T00:00:00Z",
//       "price": 71687.68,
//       "volume_24h": 54107318959,
//       "market_cap": 1408820787935
//   },
//   {
//       "timestamp": "2024-03-13T00:00:00Z",
//       "price": 72746.04,
//       "volume_24h": 52978590146,
//       "market_cap": 1429688119834
//   },
//   {
//       "timestamp": "2024-03-14T00:00:00Z",
//       "price": 72227.42,
//       "volume_24h": 45842479040,
//       "market_cap": 1419564878276
//   },
//   {
//       "timestamp": "2024-03-15T00:00:00Z",
//       "price": 68627.54,
//       "volume_24h": 63663153366,
//       "market_cap": 1348869715413
//   },
//   {
//       "timestamp": "2024-03-16T00:00:00Z",
//       "price": 68303.31,
//       "volume_24h": 47457771116,
//       "market_cap": 1342552531250
//   },
//   {
//       "timestamp": "2024-03-17T00:00:00Z",
//       "price": 67117.63,
//       "volume_24h": 45108106113,
//       "market_cap": 1319309446407
//   },
//   {
//       "timestamp": "2024-03-18T00:00:00Z",
//       "price": 67816.23,
//       "volume_24h": 37740389963,
//       "market_cap": 1333104505213
//   },
//   {
//       "timestamp": "2024-03-19T00:00:00Z",
//       "price": 64413.78,
//       "volume_24h": 51765504492,
//       "market_cap": 1266276739353
//   },
//   {
//       "timestamp": "2024-03-20T00:00:00Z",
//       "price": 63890.66,
//       "volume_24h": 53926741443,
//       "market_cap": 1256059801331
//   },
//   {
//       "timestamp": "2024-03-21T00:00:00Z",
//       "price": 66704.8,
//       "volume_24h": 42123245438,
//       "market_cap": 1311438226708
//   },
//   {
//       "timestamp": "2024-03-22T00:00:00Z",
//       "price": 64712.71,
//       "volume_24h": 29871437031,
//       "market_cap": 1272322642855
//   },
//   {
//       "timestamp": "2024-03-23T00:00:00Z",
//       "price": 64627.39,
//       "volume_24h": 24955250081,
//       "market_cap": 1270702642708
//   },
//   {
//       "timestamp": "2024-03-24T00:00:00Z",
//       "price": 65281.54,
//       "volume_24h": 16736945765,
//       "market_cap": 1283635390276
//   },
//   {
//       "timestamp": "2024-03-25T00:00:00Z",
//       "price": 68347.88,
//       "volume_24h": 25716214932,
//       "market_cap": 1343991153985
//   },
//   {
//       "timestamp": "2024-03-26T00:00:00Z",
//       "price": 70370.14,
//       "volume_24h": 33106775060,
//       "market_cap": 1383814888401
//   },
//   {
//       "timestamp": "2024-03-27T00:00:00Z",
//       "price": 69805.62,
//       "volume_24h": 27778141259,
//       "market_cap": 1372774417110
//   },
//   {
//       "timestamp": "2024-03-28T00:00:00Z",
//       "price": 70432.32,
//       "volume_24h": 29938261599,
//       "market_cap": 1385162815268
//   },
//   {
//       "timestamp": "2024-03-29T00:00:00Z",
//       "price": 70100.06,
//       "volume_24h": 22245354185,
//       "market_cap": 1378690598287
//   },
//   {
//       "timestamp": "2024-03-30T00:00:00Z",
//       "price": 70076.47,
//       "volume_24h": 16070611093,
//       "market_cap": 1378295102135
//   },
//   {
//       "timestamp": "2024-03-31T00:00:00Z",
//       "price": 70513.41,
//       "volume_24h": 12758559761,
//       "market_cap": 1386951927080
//   },
//   {
//       "timestamp": "2024-04-01T00:00:00Z",
//       "price": 69780.89,
//       "volume_24h": 20398618385,
//       "market_cap": 1372605753319
//   },
//   {
//       "timestamp": "2024-04-02T00:00:00Z",
//       "price": 66425.64,
//       "volume_24h": 32081115062,
//       "market_cap": 1306669996299
//   },
//   {
//       "timestamp": "2024-04-03T00:00:00Z",
//       "price": 66090.55,
//       "volume_24h": 32616847096,
//       "market_cap": 1299232943548
//   },
//   {
//       "timestamp": "2024-04-04T00:00:00Z",
//       "price": 66952.81,
//       "volume_24h": 28610189336,
//       "market_cap": 1317159507549
//   },
//   {
//       "timestamp": "2024-04-05T00:00:00Z",
//       "price": 67541.82,
//       "volume_24h": 33183978988,
//       "market_cap": 1328806666535
//   },
//   {
//       "timestamp": "2024-04-06T00:00:00Z",
//       "price": 68089.87,
//       "volume_24h": 22642054502,
//       "market_cap": 1339654448598
//   },
//   {
//       "timestamp": "2024-04-07T00:00:00Z",
//       "price": 69444.38,
//       "volume_24h": 17988153720,
//       "market_cap": 1366372841882
//   },
//   {
//       "timestamp": "2024-04-08T00:00:00Z",
//       "price": 71005.26,
//       "volume_24h": 25534117263,
//       "market_cap": 1397153811967
//   }
// ]
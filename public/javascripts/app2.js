// // Using IIFE for Implementing Module Pattern to keep the Local Space for the JS Variables
// (function() {
//     // Enable pusher logging - don't include this in production
//     // Pusher.logToConsole = true;
//     const URL="https://api.thingspeak.com/channels/630877/feeds.json?api_key=0BRAX0Z4SLV1LE27&results=20";
//     display();
//     function display(){
//       $.ajax({
//         url:URL,
//         method:'GET',
//         success:function(data){
//           console.log(data);
//         }
//       })
//       // xhr.open(method, URL, true);
//     // }
  
//     // var serverUrl = "/",
//     //   members = [],
//     //   pusher = new Pusher("d99dca5d5ba5eddba9a2", {
//     //     cluster: "ap2",
//     //     forceTLS: true
//     //   }),
//     //   channel,
//     //   weatherChartRef;
  
//     // function showEle(elementId) {
//     //   document.getElementById(elementId).style.display = "flex";
//     // }
  
//     // function hideEle(elementId) {
//     //   document.getElementById(elementId).style.display = "none";
//     // }
  
//     // function ajax(url, method, payload, successCallback) {
//     //   var xhr = new XMLHttpRequest();
//     //   xhr.open(method, url, true);
//     //   xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     //   xhr.onreadystatechange = function() {
//     //     if (xhr.readyState != 4 || xhr.status != 200) return;
//     //     successCallback(xhr.responseText);
//     //   };
//     //   xhr.send(JSON.stringify(payload));
//     // }
  
//     // function renderWeatherChart(weatherData) {
//     //   var ctx = document.getElementById("weatherChart").getContext("2d");
//     //   var options = {
//     //     scales: {
//     //       yAxes: [
//     //         {
//     //           ticks: {
//     //             beginAtZero: true
//     //           }
//     //         }
//     //       ],
//     //       yAxes: [
//     //         {
//     //           ticks: {
//     //             fontSize: 20
//     //           }
//     //         }
//     //       ]
//     //     }
//     //   };
//     //   weatherChartRef = new Chart(ctx, {
//     //     type: "line",
//     //     data: weatherData,
//     //     options: options
//     //   });
//     // }
  
//     // var chartConfig = {
//     //   labels: [],
//     //   datasets: [
//     //     {
//     //       label: "ECG Data",
//     //       fill: false,
//     //       lineTension: 0.1,
//     //       backgroundColor: "rgba(75,192,192,0.4)",
//     //       borderColor: "rgba(75,192,192,1)",
//     //       borderCapStyle: "butt",
//     //       borderDash: [],
//     //       borderDashOffset: 0.0,
//     //       borderJoinStyle: "miter",
//     //       pointBorderColor: "rgba(75,192,192,1)",
//     //       pointBackgroundColor: "#fff",
//     //       pointBorderWidth: 1,
//     //       pointHoverRadius: 5,
//     //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
//     //       pointHoverBorderColor: "rgba(220,220,220,1)",
//     //       pointHoverBorderWidth: 2,
//     //       pointRadius: 1,
//     //       pointHitRadius: 10,
//     //       data: [],
//     //       spanGaps: false
//     //     }
//     //   ]
//     // };
  
//     // ajax("/getTemperature", "GET", {}, onFetchTempSuccess);
  
//     // function onFetchTempSuccess(response) {
//     //   hideEle("loader");
//     //   var respData = JSON.parse(response);
//     //   chartConfig.labels = respData.dataPoints.map(dataPoint => dataPoint.time);
//     //   chartConfig.datasets[0].data = respData.dataPoints.map(
//     //     dataPoint => dataPoint.temperature
//     //   );
//     //   renderWeatherChart(chartConfig);
//     // }
  
//     // channel = pusher.subscribe("london-temp-chart");
//     // channel.bind("new-temperature", function(data) {
//     //   var newTempData = data.dataPoint;
//     //   if (weatherChartRef.data.labels.length > 15) {
//     //     weatherChartRef.data.labels.shift();
//     //     weatherChartRef.data.datasets[0].data.shift();
//     //   }
//     //   weatherChartRef.data.labels.push(newTempData.time);
//     //   weatherChartRef.data.datasets[0].data.push(newTempData.temperature);
//     //   weatherChartRef.update();
//     // });
  
//     // /* TEMP CODE FOR TESTING */
//     // var dummyTime = 1500;
//     // setInterval(function() {
//     //   dummyTime = dummyTime + 10;
//     //   ajax(
//     //     "/addTemperature?temperature=" +
//     //       getRandomInt(10, 20) +
//     //       "&time=" +
//     //       dummyTime,
//     //     "GET",
//     //     {},
//     //     () => {}
//     //   );
//     // }, 1000);
  
//     // function getRandomInt(min, max) {
//     //   return Math.floor(Math.random() * (max - min + 1)) + min;
//     // }
//     // /* TEMP CODE ENDS */
//   })();
$(document).ready(function(){
  const URL='https://api.thingspeak.com/channels/630877/feeds.json?api_key=0BRAX0Z4SLV1LE27&results=20';
   let myChart=document.getElementById('myChart').getContext('2d');
   let anChart=document.getElementById('anChart').getContext('2d');

   mineInfo();


   Chart.defaults.global.defaultFontFamily='Lato',
   Chart.defaults.global.defaultFontSize=16;


   function mineInfo(){
       $.ajax({
           url:URL,
           method:'GET',
           success:function(dataTemp){
               displayMine(dataTemp);
               console.log(dataTemp)
           }
       })
   }
   function displayMine(dataTemp){
       let barchart=new Chart(myChart,{
           type:'line',//bar,hori bar, pie line, doughnuts ,polar,radar
           data:{
               labels:[dataTemp.feeds[0].created_at,
                       dataTemp.feeds[1].created_at,
                       dataTemp.feeds[2].created_at,
                       dataTemp.feeds[3].created_at,
                       dataTemp.feeds[4].created_at,
                       dataTemp.feeds[5].created_at,
                       dataTemp.feeds[6].created_at,
                       dataTemp.feeds[7].created_at,
                       dataTemp.feeds[8].created_at,
                       dataTemp.feeds[9].created_at,
                       dataTemp.feeds[10].created_at,
                       dataTemp.feeds[11].created_at,
                       dataTemp.feeds[12].created_at,
                       dataTemp.feeds[13].created_at,
                       dataTemp.feeds[14].created_at,
                       dataTemp.feeds[15].created_at,
                       dataTemp.feeds[16].created_at,
                       dataTemp.feeds[17].created_at,
                       dataTemp.feeds[18].created_at,
                       dataTemp.feeds[19].created_at,
                      ],
               datasets:[{
                   label:'ECG Data',
                   data:[
                       dataTemp.feeds[0].field1,
                       dataTemp.feeds[1].field1,
                       dataTemp.feeds[2].field1,
                       dataTemp.feeds[3].field1,
                       dataTemp.feeds[4].field1,
                       dataTemp.feeds[5].field1,
                       dataTemp.feeds[6].field1,
                       dataTemp.feeds[7].field1,
                       dataTemp.feeds[8].field1,
                       dataTemp.feeds[9].field1,
                       dataTemp.feeds[10].field1,
                       dataTemp.feeds[11].field1,
                       dataTemp.feeds[12].field1,
                       dataTemp.feeds[13].field1,
                       dataTemp.feeds[14].field1,
                       dataTemp.feeds[15].field1,
                       dataTemp.feeds[16].field1,
                       dataTemp.feeds[17].field1,
                       dataTemp.feeds[18].field1,
                       dataTemp.feeds[19].field1,
              
                   ],
               borderWidth:9,
               borderColor:"black",
               hoverBorderColor:"gold",
               }]
           },
           options:{
               title:{
                   display:true,
                   text:'ECG GRAPH',
                   fontSize:25
               },
               legend:{
                   position:'right',
                   display:false
               },
               layout:{
                   padding:{
                       left:50,
                       right:0
   
                   }
               },
               tooltips:{
                   enabled:true
               }
           }
       });

       let barrchart=new Chart(anChart,{
        type:'line',//bar,hori bar, pie line, doughnuts ,polar,radar
        data:{
            labels:[dataTemp.feeds[0].created_at,
                    dataTemp.feeds[1].created_at,
                    dataTemp.feeds[2].created_at,
                    dataTemp.feeds[3].created_at,
                    dataTemp.feeds[4].created_at,
                    dataTemp.feeds[5].created_at,
                    dataTemp.feeds[6].created_at,
                    dataTemp.feeds[7].created_at,
                    dataTemp.feeds[8].created_at,
                    dataTemp.feeds[9].created_at,
                    dataTemp.feeds[10].created_at,
                    dataTemp.feeds[11].created_at,
                    dataTemp.feeds[12].created_at,
                    dataTemp.feeds[13].created_at,
                    dataTemp.feeds[14].created_at,
                    dataTemp.feeds[15].created_at,
                    dataTemp.feeds[16].created_at,
                    dataTemp.feeds[17].created_at,
                    dataTemp.feeds[18].created_at,
                    dataTemp.feeds[19].created_at,
                   ],
            datasets:[{
                label:'temperature',
                data:[
                    dataTemp.feeds[0].field2,
                    dataTemp.feeds[1].field2,
                    dataTemp.feeds[2].field2,
                    dataTemp.feeds[3].field2,
                    dataTemp.feeds[4].field2,
                    dataTemp.feeds[5].field2,
                    dataTemp.feeds[6].field2,
                    dataTemp.feeds[7].field2,
                    dataTemp.feeds[8].field2,
                    dataTemp.feeds[9].field2,
                    dataTemp.feeds[10].field2,
                    dataTemp.feeds[11].field2,
                    dataTemp.feeds[12].field2,
                    dataTemp.feeds[13].field2,
                    dataTemp.feeds[14].field2,
                    dataTemp.feeds[15].field2,
                    dataTemp.feeds[16].field2,
                    dataTemp.feeds[17].field2,
                    dataTemp.feeds[18].field2,
                    dataTemp.feeds[19].field2,
           
                ],
            borderWidth:9,
            borderColor:"black",
            hoverBorderColor:"gold",
            }]
        },
        options:{
            title:{
                display:true,
                text:'Body Temperature',
                fontSize:25
            },
            legend:{
                position:'right',
                display:false
            },
            layout:{
                padding:{
                    left:50,
                    right:0

                }
            },
            tooltips:{
                enabled:true
            }
        }
    });
   }
  
   
  
   })
  
//일령별 체중증가 및 사료섭취 증가율
const ChartA = document.getElementById('uaChart01');
const  uaChart01= new Chart(ChartA, {
    type: 'line',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['1일령', '7일령', '14일령', '21일령', '28일령','35일령','42일령'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '사료소비량',
            // ⑥dataset값(Array)
            data: [60, 62, 70, 75, 78, 80, 85],

            // ⑦dataset의 배경색(rgba값을 String으로 표현)
            backgroundColor: 'rgba(22, 114, 236, 1)',
            // ⑧dataset의 선 색(rgba값을 String으로 표현)
            borderColor: 'rgba(22, 114, 236, 1)',
            // ⑨dataset의 선 두께(Number)
            borderWidth: 1,
            tension: 0.5
        },
        {
             // ⑤dataset의 이름(String)
             label: '체중',
             // ⑥dataset값(Array)
             data: [550, 570, 580, 600, 620, 660, 760],
             // ⑦dataset의 배경색(rgba값을 String으로 표현)
             backgroundColor:['rgba(90, 22, 236, 1)'], 
             // ⑧dataset의 선 색(rgba값을 String으로 표현)
             borderColor: 
             ['rgba(90, 22, 236, 1)'],
             // ⑨dataset의 선 두께(Number)
             borderWidth: 1 ,
             tension: 0.5
        }
    ]
},
    options: {
        scales: {
           
            y: {
                beginAtZero: true,
            }
        },
        plugins: {
            legend: {
              display: true,
              position: 'bottom'
            },
            title: {
                display: true,
                position:'top',
                text: "일령별 체중증가 및 사료섭취 증가율",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});

//온도예 따른 사료 섭취량
const ChartB = document.getElementById('uaChart02');
const  uaChart02= new Chart(ChartB, {
    type: 'line',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['8℃', '12℃', '16℃', '20℃', '24℃','32℃','36℃'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '증체',
            // ⑥dataset값(Array)
            data: [10, 17, 18, 10, 13, 14, 15],

            // ⑦dataset의 배경색(rgba값을 String으로 표현)
            backgroundColor: 'rgba(22, 114, 236, 1)',
            // ⑧dataset의 선 색(rgba값을 String으로 표현)
            borderColor: 'rgba(22, 114, 236, 1)',
            // ⑨dataset의 선 두께(Number)
            borderWidth: 1,
            tension: 0.5
        },
        {
             // ⑤dataset의 이름(String)
             label: '사료섭취',
             // ⑥dataset값(Array)
             data: [70, 75, 72, 68, 72, 75, 78],
             // ⑦dataset의 배경색(rgba값을 String으로 표현)
             backgroundColor:['rgba(90, 22, 236, 1)'], 
             // ⑧dataset의 선 색(rgba값을 String으로 표현)
             borderColor: 
             ['rgba(90, 22, 236, 1)'],
             // ⑨dataset의 선 두께(Number)
             borderWidth: 1 ,
             tension: 0.5
        }
    ]
},
    options: {
        scales: {
           
            y: {
                beginAtZero: true,
            }
        },
        plugins: {
            legend: {
              display: true,
              position: 'bottom'
            },
            title: {
                display: true,
                position:'top',
                text: "온도에 따른 사료 섭취량",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});

//도폐사그래프
const ChartC = document.getElementById('uaChart03');
const  uaChart03= new Chart(ChartC, {
    type: 'line',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['1일', '2일', '3일', '4일', '5일','6일','7일'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '도태',
            // ⑥dataset값(Array)
            data: [50, 25, 40, 32, 42, 12, 25],

            // ⑦dataset의 배경색(rgba값을 String으로 표현)
            backgroundColor: 'rgba(22, 114, 236, 1)',
            // ⑧dataset의 선 색(rgba값을 String으로 표현)
            borderColor: 'rgba(22, 114, 236, 1)',
            // ⑨dataset의 선 두께(Number)
            borderWidth: 1,
            tension: 0.5
        },
        {
             // ⑤dataset의 이름(String)
             label: '폐사',
             // ⑥dataset값(Array)
             data: [45, 15, 30, 20, 25, 12, 30],
             // ⑦dataset의 배경색(rgba값을 String으로 표현)
             backgroundColor:['rgba(90, 22, 236, 1)'], 
             // ⑧dataset의 선 색(rgba값을 String으로 표현)
             borderColor: 
             ['rgba(90, 22, 236, 1)'],
             // ⑨dataset의 선 두께(Number)
             borderWidth: 1 ,
             tension: 0.5
        }
    ]
},
    options: {
        scales: {
           
            y: {
                beginAtZero: true,
            }
        },
        plugins: {
            legend: {
              display: true,
              position: 'bottom'
            },
            title: {
                display: true,
                position:'top',
                text: "도폐사율",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});

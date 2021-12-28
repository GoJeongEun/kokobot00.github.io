// {이력제관리 - 닭입출고 이력제관리 라인차트}

const ChartI = document.getElementById('chickenInoutChart');
const  chickenInoutChart= new Chart(ChartI, {
    type: 'bar',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['1일', '2일', '3일', '4일', '5일', '6일','7일'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '입고',
            // ⑥dataset값(Array)
            data: [85, 82, 90, 92, 95, 88, 95],

            // ⑦dataset의 배경색(rgba값을 String으로 표현)
            backgroundColor: 'rgba(127, 127, 213, 1)',
            // ⑧dataset의 선 색(rgba값을 String으로 표현)
            borderColor: 'rgba(127, 127, 213, 1)',
            // ⑨dataset의 선 두께(Number)
            borderWidth: 1,
            tension: 0.5
        },
        {
             // ⑤dataset의 이름(String)
             label: '출고',
             // ⑥dataset값(Array)
             data: [79, 81, 86, 84, 90, 92, 95],
             // ⑦dataset의 배경색(rgba값을 String으로 표현)
             backgroundColor:['rgba(213, 127, 194, 1)'], 
             // ⑧dataset의 선 색(rgba값을 String으로 표현)
             borderColor: 
             ['rgba(213, 127, 194, 1)'],
             // ⑨dataset의 선 두께(Number)
             borderWidth: 1 ,
             tension: 0.5
        }]
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
                text: "닭 입출고 이력제 처리내역",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});

// {이력제관리 - 닭입출고 이력제관리 라인차트}

const ChartJ = document.getElementById('eggInoutChart');
const  eggInoutChart= new Chart(ChartJ, {
    type: 'bar',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['1일', '2일', '3일', '4일', '5일', '6일','7일'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '입고',
            // ⑥dataset값(Array)
            data: [75, 85, 87, 92, 82, 87, 96],

            // ⑦dataset의 배경색(rgba값을 String으로 표현)
            backgroundColor: 'rgba(127, 127, 213, 1)',
            // ⑧dataset의 선 색(rgba값을 String으로 표현)
            borderColor: 'rgba(127, 127, 213, 1)',
            // ⑨dataset의 선 두께(Number)
            borderWidth: 1,
            tension: 0.5
        },
        {
             // ⑤dataset의 이름(String)
             label: '출고',
             // ⑥dataset값(Array)
             data: [75, 85, 95, 100, 87, 92, 91],
             // ⑦dataset의 배경색(rgba값을 String으로 표현)
             backgroundColor:['rgba(213, 127, 194, 1)'], 
             // ⑧dataset의 선 색(rgba값을 String으로 표현)
             borderColor: 
             ['rgba(213, 127, 194, 1)'],
             // ⑨dataset의 선 두께(Number)
             borderWidth: 1 ,
             tension: 0.5
        }]
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
                text: "계란 입출고 이력제 처리내역",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});

// {이력제관리 - 이력제신고관리 라인차트}

const ChartK = document.getElementById('traceabilttyChart');
const  traceabilttyChart= new Chart(ChartK, {
    type: 'bar',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['1일', '2일', '3일', '4일', '5일', '6일','7일'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '입고',
            // ⑥dataset값(Array)
            data: [80, 85, 82, 93, 96, 91, 87],

            // ⑦dataset의 배경색(rgba값을 String으로 표현)
            backgroundColor: 'rgba(127, 127, 213, 1)',
            // ⑧dataset의 선 색(rgba값을 String으로 표현)
            borderColor: 'rgba(127, 127, 213, 1)',
            // ⑨dataset의 선 두께(Number)
            borderWidth: 1,
            tension: 0.5
        },
        {
             // ⑤dataset의 이름(String)
             label: '출고',
             // ⑥dataset값(Array)
             data: [90, 85, 88, 90, 92, 85, 82],
             // ⑦dataset의 배경색(rgba값을 String으로 표현)
             backgroundColor:['rgba(213, 127, 194, 1)'], 
             // ⑧dataset의 선 색(rgba값을 String으로 표현)
             borderColor: 
             ['rgba(213, 127, 194, 1)'],
             // ⑨dataset의 선 두께(Number)
             borderWidth: 1 ,
             tension: 0.5
        }]
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
                text: "이력 신고 처리내역",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});

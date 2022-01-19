// {GP관리 - 정상란 재고 바차트}

const ChartA = document.getElementById('normaleggChart');
const  normaleggChart= new Chart(ChartA, {
    type: 'bar',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['11.01', '11.02', '11.03', '11.04', '11.05', '11.06','11.07'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '실재고량',
            // ⑥dataset값(Array)
            data: [1500, 1800, 1190, 1092, 1095, 1088, 1095],

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
             label: '총 재고량',
             // ⑥dataset값(Array)
             data: [1879, 1981, 1786, 1884, 1890, 1492, 1595],
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
                text: "정산란 재고 현황",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});

// {GP관리 - 비정상란 바 차트}

const ChartB = document.getElementById('abnormaleggChart');
const  abnormaleggChart= new Chart(ChartB, {
    type: 'bar',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['11.01', '11.02', '11.03', '11.04', '11.05', '11.06','11.07'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '실재고량',
            // ⑥dataset값(Array)
            data: [575, 485, 287, 192, 682, 487, 196],

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
             label: '총 재고량',
             // ⑥dataset값(Array)
             data: [475, 485, 295, 200, 707, 592, 291],
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
                text: "비정산란 재고 현황",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});

// gp 도넛차트 HD, HH

const ChartC = document.getElementById('HDchart');
const HDchart = new Chart(ChartC, {
    type: 'doughnut',
    data: {
        labels: ['HD산란율', 'none'],
        datasets: [{
            label: '',
            data: [90, 10],
            backgroundColor: [
               
                'rgba(90, 22, 236, 0.5)',
                'rgba(211, 211, 211, 0.2)'
               
            ],
            borderColor: [
                'rgba(90, 22, 236, 1)',
                'rgba(211, 211, 211, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
           
            y: {
                beginAtZero: true,
                display:false
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
                text: "HD산란율",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});
// gp 도넛 HH차트
const ChartD = document.getElementById('HHchart');
const HHchart = new Chart(ChartD, {
    type: 'doughnut',
    data: {
        labels: ['HH산란율'],
        datasets: [{
            label: '',
            data: [90, 10],
            backgroundColor: [
               
                'rgba(34, 49, 137, 0.5)',
                'rgba(211, 211, 211, 0.2)'
               
            ],
            borderColor: [
                'rgba(34, 49, 137, 1)',
                'rgba(211, 211, 211, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
           
            y: {
                beginAtZero: true,
                display:false
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
                text: "HH산란율",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});
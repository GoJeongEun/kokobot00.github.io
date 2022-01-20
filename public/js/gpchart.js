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
        labels: ['HD산란율'],
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
// gp 라인 사료음수비 생산량
const ChartE = document.getElementById('Feedchart');
const Feedchart = new Chart(ChartE, {
    type: 'line',
    data: {
        labels: ['1일','2일','3일','4일','5일','6일','7일'],
        datasets: [{
            label: '생산량',
            data: [900, 1000, 1500, 1400, 1200, 1300, 1250],
            backgroundColor: [
               
                'rgba(255, 24, 163, 1)',
               
            ],
            borderColor: [
                'rgba(255, 24, 163, 1)',
            ],
            borderWidth: 1,
            tension: 0.4
        },
        {
            label: '사료',
            data: [600, 700, 600, 700, 700, 650, 700],
            backgroundColor: [
               
                'rgba(95, 46, 234, 1)',
               
            ],
            borderColor: [
                'rgba(95, 46, 234, 1)',
            ],
            borderWidth: 1,
            tension: 0.4
        },
        {
            label: '음수',
            data: [1200, 1150, 1200, 1150, 1120, 1130, 1200],
            backgroundColor: [
               
                'rgba(22, 114, 236, 1)',
               
            ],
            borderColor: [
                'rgba(22, 114, 236, 1)',
            ],
            borderWidth: 1,
            tension: 0.4
        },
    ]
    },
    options: {
        scales: {
           
            y: {
                beginAtZero: true,
            }
        },
        plugins: {
            title: {
              display: true,
              text: "사료음수현황",
              font: {
                size: 18
              }
            },
            legend: {
                display: true,
                position: 'top'
              }
          }
    }
});

// gp 라인 생산능력 차트
const ChartF = document.getElementById('PDTchart');
const PDTchart = new Chart(ChartF, {
    type: 'line',
    data: {
        labels: ['16주','18주','22주','24주','26주','28주','30주'],
        datasets: [{
            label: '오늘 산란수',
            yAxisID: 'A',
            data: [900, 1000, 1500, 1400, 1200, 1300, 1250],
            backgroundColor: [
               
                'rgba(31, 139, 36, 1)',
               
            ],
            borderColor: [
                'rgba(31, 139, 36, 1)',
            ],
            borderWidth: 1,
            tension: 0.4
        },
        {
            label: '주평균산란율',
            yAxisID: 'B',
            data: [70, 75, 78, 80, 82, 80, 85],
            backgroundColor: [
               
                'rgba(95, 46, 234, 1)',
               
            ],
            borderColor: [
                'rgba(95, 46, 234, 1)',
            ],
            borderWidth: 1,
            tension: 0.4
        },
        {
            label: '달평균산란율',
            yAxisID: 'B',
            data: [75, 78, 80, 82, 85, 85, 87],
            backgroundColor: [
               
                'rgba(22, 114, 236, 1)',
               
            ],
            borderColor: [
                'rgba(22, 114, 236, 1)',
            ],
            borderWidth: 1,
            tension: 0.4
        },
    ]
    },
    options: {
        scales: {
           
            yAxes: {
                id:'B',
                type:'linear',
                beginAtZero: true,
                position:'right',
                ticks: {
                    min:0,
                    max:100,
                    
                    fontColor:'#333333',
                    callback:function(value, index, values) {
                        return value + '%';
                    }
                }
            },
        },
        plugins: {
            title: {
              display: true,
              text: "사료음수현황",
              font: {
                size: 18
              }
            },
            legend: {
                display: true,
                position: 'top'
              }
          },
    }
});

// {각 동  - 현재 수수 도넛차트}

const ChartA = document.getElementById('dongChart');
const dongChart = new Chart(ChartA, {
    type: 'doughnut',
    data: {
        labels: ['현재 수수', '도폐사'],
        datasets: [{
            label: '',
            data: [90, 10],
            backgroundColor: [
               
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)'
               
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)'
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
                text: "현재 수수",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});

// {각 동  - 생존율 도넛차트}

const ChartB = document.getElementById('survivalChart');
const  survivalChart= new Chart(ChartB, {
    type: 'doughnut',
    data: {
        labels: ['현재 수수', '도폐사'],
        datasets: [{
            label: '',
            data: [90, 10],
            backgroundColor: [
               
                'rgba(95, 46, 234, 0.2)',
                'rgba(255, 99, 132, 0.2)'
               
            ],
            borderColor: [
                'rgba(95, 46, 234, 1)',
                'rgba(255, 99, 132, 1)'
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
                text: "생존율",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});

// {각 동  - 도태/폐사 라인차트}

const ChartC = document.getElementById('dieoutChart');
const  dieoutChart= new Chart(ChartC, {
    type: 'line',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['1일', '2일', '3일', '4일', '5일', '6일','7일'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '도태',
            // ⑥dataset값(Array)
            data: [30, 25, 10, 15, 12, 13, 10],

            // ⑦dataset의 배경색(rgba값을 String으로 표현)
            backgroundColor: 'rgba(95, 46, 234, 1)',
            // ⑧dataset의 선 색(rgba값을 String으로 표현)
            borderColor: 'rgba(95, 46, 234, 1)',
            // ⑨dataset의 선 두께(Number)
            borderWidth: 1,
            tension: 0.5
        },
        {
             // ⑤dataset의 이름(String)
             label: '폐사',
             // ⑥dataset값(Array)
             data: [25, 38, 24, 20, 21, 23, 12],
             // ⑦dataset의 배경색(rgba값을 String으로 표현)
             backgroundColor:['rgba(22, 114, 236, 1)'], 
             // ⑧dataset의 선 색(rgba값을 String으로 표현)
             borderColor: 
             ['rgba(22, 114, 236, 1)'],
             // ⑨dataset의 선 두께(Number)
             borderWidth: 1 ,
             tension: 0.5
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
                text: "도태/폐사",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});
// {각 동  - 체중 라인차트}

const ChartD = document.getElementById('WeightChart');
const  WeightChart= new Chart(ChartD, {
    type: 'line',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['1일', '2일', '3일', '4일', '5일', '6일','7일'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '체중',
            // ⑥dataset값(Array)
            data: [150, 155, 160, 165, 170, 175, 170],

            // ⑦dataset의 배경색(rgba값을 String으로 표현)
            backgroundColor: 'rgba(95, 46, 234, 1)',
            // ⑧dataset의 선 색(rgba값을 String으로 표현)
            borderColor: 'rgba(95, 46, 234, 1)',
            // ⑨dataset의 선 두께(Number)
            borderWidth: 1,
            tension: 0.5
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
                text: "체중",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});

// {각 동  - 사료 라인차트}

const ChartE = document.getElementById('feedChart');
const  feedChart= new Chart(ChartE, {
    type: 'line',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['1일', '2일', '3일', '4일', '5일', '6일','7일'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '사료',
            // ⑥dataset값(Array)
            data: [150, 155, 160, 165, 170, 175, 170],

            // ⑦dataset의 배경색(rgba값을 String으로 표현)
            backgroundColor: 'rgba(95, 46, 234, 1)',
            // ⑧dataset의 선 색(rgba값을 String으로 표현)
            borderColor: 'rgba(95, 46, 234, 1)',
            // ⑨dataset의 선 두께(Number)
            borderWidth: 1,
            tension: 0.5
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
                text: "사료마리당",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});
// {각 동  - 음수 라인차트}

const ChartF = document.getElementById('waterChart');
const  waterChart= new Chart(ChartF, {
    type: 'line',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['1일', '2일', '3일', '4일', '5일', '6일','7일'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '음수',
            // ⑥dataset값(Array)
            data: [500, 550, 600, 650, 700, 175, 170],

            // ⑦dataset의 배경색(rgba값을 String으로 표현)
            backgroundColor: 'rgba(22, 114, 236, 1)',
            // ⑧dataset의 선 색(rgba값을 String으로 표현)
            borderColor: 'rgba(22, 114, 236, 1)',
            // ⑨dataset의 선 두께(Number)
            borderWidth: 1,
            tension: 0.5
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
                text: "음수마리당",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});

// {각 동  - 온도 라인차트}

const ChartG = document.getElementById('temperatureChart');
const  temperatureChart= new Chart(ChartG, {
    type: 'line',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['1일', '2일', '3일', '4일', '5일', '6일','7일'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '온도',
            // ⑥dataset값(Array)
            data: [25, 26, 25.5, 26, 26.5, 25.5, 25],

            // ⑦dataset의 배경색(rgba값을 String으로 표현)
            backgroundColor: 'rgba(95, 46, 234, 1)',
            // ⑧dataset의 선 색(rgba값을 String으로 표현)
            borderColor: 'rgba(95, 46, 234, 1)',
            // ⑨dataset의 선 두께(Number)
            borderWidth: 1,
            tension: 0.5
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
                text: "온도",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});
// {각 동  - 습도도 라인차트}

const ChartH = document.getElementById('humidityChart');
const  humidityChart= new Chart(ChartH, {
    type: 'line',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['1일', '2일', '3일', '4일', '5일', '6일','7일'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '습도',
            // ⑥dataset값(Array)
            data: [25, 26, 25.5, 26, 26.5, 25.5, 25],

            // ⑦dataset의 배경색(rgba값을 String으로 표현)
            backgroundColor: 'rgba(22, 114, 236, 1)',
            // ⑧dataset의 선 색(rgba값을 String으로 표현)
            borderColor: 'rgba(22, 114, 236, 1)',
            // ⑨dataset의 선 두께(Number)
            borderWidth: 1,
            tension: 0.5
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
                text: "습도",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});

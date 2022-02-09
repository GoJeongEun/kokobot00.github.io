// 경영관리 차트

//수입 바 그래프 
const ChartA = document.getElementById('managementChart01');
const  managementChart01= new Chart(ChartA, {
    type: 'bar',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['21.05', '21.06', '21.07', '21.08', '21.09', '21.10','21.11','21.12'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '계란판매',
            // ⑥dataset값(Array)
            data: [45000, 60000, 42000, 45000, 35000, 35000, 30000,32000],

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
             label: '닭판매',
             // ⑥dataset값(Array)
             data: [60000, 55000, 50000, 45000, 52000, 51000, 50000, 51500],
             // ⑦dataset의 배경색(rgba값을 String으로 표현)
             backgroundColor:['rgba(213, 127, 194, 1)'], 
             // ⑧dataset의 선 색(rgba값을 String으로 표현)
             borderColor: 
             ['rgba(213, 127, 194, 1)'],
             // ⑨dataset의 선 두께(Number)
             borderWidth: 1 ,
             tension: 0.5
        },
        {
            // ⑤dataset의 이름(String)
            label: '기타',
            // ⑥dataset값(Array)
            data: [35000, 38000, 40000, 42000, 41000, 38000, 38000, 42000],
            // ⑦dataset의 배경색(rgba값을 String으로 표현)
            backgroundColor:['rgba(134, 173, 231, 1)'], 
            // ⑧dataset의 선 색(rgba값을 String으로 표현)
            borderColor: 
            ['rgba(134, 173, 231, 1)'],
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
                text: "수입 그래프",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});

//지출 바 그래프 
const ChartB = document.getElementById('managementChart02');
const  managementChart02= new Chart(ChartB, {
    type: 'bar',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['21.05', '21.06', '21.07', '21.08', '21.09', '21.10','21.11','21.12'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '사료',
            // ⑥dataset값(Array)
            data: [4500000, 6000000, 4200000, 4500000, 3500000, 3500000, 3000000,3500000],

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
             label: '약품',
             // ⑥dataset값(Array)
             data: [600000, 550000, 500000, 450000, 520000, 510000, 500000,520000],
             // ⑦dataset의 배경색(rgba값을 String으로 표현)
             backgroundColor:['rgba(213, 127, 194, 1)'], 
             // ⑧dataset의 선 색(rgba값을 String으로 표현)
             borderColor: 
             ['rgba(213, 127, 194, 1)'],
             // ⑨dataset의 선 두께(Number)
             borderWidth: 1 ,
             tension: 0.5
        },
        {
            // ⑤dataset의 이름(String)
            label: '기타',
            // ⑥dataset값(Array)
            data: [35000, 38000, 40000, 42000, 41000, 38000, 38000,50000],
            // ⑦dataset의 배경색(rgba값을 String으로 표현)
            backgroundColor:['rgba(134, 173, 231, 1)'], 
            // ⑧dataset의 선 색(rgba값을 String으로 표현)
            borderColor: 
            ['rgba(134, 173, 231, 1)'],
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
                text: "지출 그래프",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});
//수당 수익율 그래프 
const ChartC = document.getElementById('managementLineChart03');
const  managementChart03= new Chart(ChartC, {
    type: 'line',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['10월', '11월', '12월'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '닭',
            // ⑥dataset값(Array)
            data: [60, 62, 70],

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
             label: '계란',
             // ⑥dataset값(Array)
             data: [70, 72, 75],
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
                text: "수당 수익율 그래프",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});

//수입 바 그래프 
const ChartD = document.getElementById('managementChart04');
const  managementChart04= new Chart(ChartD, {
    type: 'bar',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['사료비', '약품비', '노임', '광열비', '수선비', '기타'],
        // ④실제 차트에 표시할 데이터들( Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '비용',
            // ⑥dataset값(Array)
            data: [400000, 600000, 420000, 450000, 350000, 350000, 300000],

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
             label: '누적',
             // ⑥dataset값(Array)
             data: [600000, 700000, 720000, 730000, 750000, 780000, 800000],
             // ⑦dataset의 배경색(rgba값을 String으로 표현)
             backgroundColor:['rgba(213, 127, 194, 1)'], 
             // ⑧dataset의 선 색(rgba값을 String으로 표현)
             borderColor: 
             ['rgba(213, 127, 194, 1)'],
             // ⑨dataset의 선 두께(Number)
             borderWidth: 1 ,
             tension: 0.5
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
            legend: {
              display: true,
              position: 'bottom'
            },
            title: {
                display: true,
                position:'top',
                text: "생산비 그래프",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});
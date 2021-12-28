
// 전체농장현황 도넛 그래프
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['출하', '이동', '추가', '도태'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
               
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)'
               
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
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
                text: "전체농장현황",
                font: {
                  size: 18,
                  color:'black'
                }
              }
          }
    }
});
// 사료음수현황
const chartArea = document.getElementById('myLineChart').getContext('2d');
// 차트를 생성한다. 
const myLineChart = new Chart(chartArea, {
    // ①차트의 종류(String)
    type: 'line',
    // ②차트의 데이터(Object)
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['1일', '2일', '3일', '4일', '5일', '6일'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '사료',
            // ⑥dataset값(Array)
            data: [12, 19, 3, 5, 2, 3],

            // ⑦dataset의 배경색(rgba값을 String으로 표현)
            backgroundColor: 'rgba(95, 46, 234, 1)',
            // ⑧dataset의 선 색(rgba값을 String으로 표현)
            borderColor: 'rgba(95, 46, 234, 1)',
            // ⑨dataset의 선 두께(Number)
            borderWidth: 1,
            tension: 0.4
        },
        {
             // ⑤dataset의 이름(String)
             label: '음수',
             // ⑥dataset값(Array)
             data: [25, 38, 24, 20, 21, 23],
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
    // ⑩차트의 설정(Object)
    options: {
        // ⑪축에 관한 설정(Object)
        scales: {
            // ⑫y축에 대한 설정(Object)
            y: {
                // ⑬시작을 0부터 하게끔 설정(최소값이 0보다 크더라도)(boolean)
                beginAtZero: true
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

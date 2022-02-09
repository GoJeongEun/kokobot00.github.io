// {약품관리 -   약품사용 그래프 차트}

const ChartA = document.getElementById('medicineChart');
const  medicineChart= new Chart(ChartA, {
    type: 'bar',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['0-3일령', '4-7일령', '8-14일령', '15-21일령', '22-28일령', '29-35일령','42-48일령'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{  
            // ⑤dataset의 이름(String)
            label: '생존율',
            type:'line',
            // ⑥dataset값(Array)
            data: [99, 97, 96, 95, 94, 93, 92],

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
             label: '접종률',
             // ⑥dataset값(Array)
             data: [50, 55, 60, 68, 75, 78, 85],
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
                text: "약품 사용 그래프",
                font: {
                  size: 15,
                  color:'black'
                }
              }
          }
    }
});
// haccp 생산 목표 도넛차트

const ChartA = document.getElementById('haccpChart01');
const haccpChart01 = new Chart(ChartA, {
    type: 'doughnut',
    data: {
        labels: ['생산목표'],
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
                display: false
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                position: 'top',
                text: "생산목표",
                font: {
                    size: 15,
                    color: 'black'
                }
            }
        }
    },

});
// haccp 생산량 도넛차트
const ChartB = document.getElementById('haccpChart02');
const HHchart = new Chart(ChartB, {
    type: 'doughnut',
    data: {
        labels: ['생산량'],
        datasets: [{
            label: '',
            data: [80, 10],
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
                display: false
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                position: 'top',
                text: "생산량",
                font: {
                    size: 15,
                    color: 'black',
                    text: "80%",
                    position: 'center',
                }
            }
        }
    }
});
// haccp 생산현황 및 불량률 믹스차트

const ChartC = document.getElementById('haccplineChart');
const haccplineChart = new Chart(ChartC, {
    type: 'bar',
    data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['21.05.10', '21.06.10', '21.07.10', '21.08.10', '21.09.10', '21.10.10', '21.11.10', '21.12.10'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{
                // ⑤dataset의 이름(String)
                label: '불량률',
                type: 'line',
                yAxisID: 'B',
                // ⑥dataset값(Array)
                data: [7, 8, 9, 7, 8, 9, 7, 8],

                // ⑦dataset의 배경색(rgba값을 String으로 표현)
                backgroundColor: 'rgba(197, 220, 250, 1)',
                // ⑧dataset의 선 색(rgba값을 String으로 표현)
                borderColor: 'rgba(197, 220, 250, 1)',
                // ⑨dataset의 선 두께(Number)
                borderWidth: 1,
                tension: 0.5
            },
            {
                // ⑤dataset의 이름(String)
                label: '생산량',
                yAxisID: 'A',
                // ⑥dataset값(Array)
                data: [5200000, 5500000, 6000000, 6800000, 7500000, 7800000, 8500000,8200000],
                // ⑦dataset의 배경색(rgba값을 String으로 표현)
                backgroundColor: ['rgba(22, 114, 236, 1)'],
                // ⑧dataset의 선 색(rgba값을 String으로 표현)
                borderColor: ['rgba(22, 114, 236, 1)'],
                // ⑨dataset의 선 두께(Number)
                borderWidth: 1,
                tension: 0.5
            },
            {
                // ⑤dataset의 이름(String)
                label: '정상란',
                yAxisID: 'A',
                // ⑥dataset값(Array)
                data: [5000000, 5000000, 5800000, 6200000, 7200000, 7500000, 8200000,8000000],
                // ⑦dataset의 배경색(rgba값을 String으로 표현)
                backgroundColor: ['rgba(90, 22, 236, 1)'],
                // ⑧dataset의 선 색(rgba값을 String으로 표현)
                borderColor: ['rgba(90, 22, 236, 1)'],
                // ⑨dataset의 선 두께(Number)
                borderWidth: 1,
                tension: 0.5
            },
            {
                // ⑤dataset의 이름(String)
                label: '오란',
                yAxisID: 'A',
                // ⑥dataset값(Array)
                data: [100000, 250000, 100000, 300000, 150000, 150000, 150000,100000],
                // ⑦dataset의 배경색(rgba값을 String으로 표현)
                backgroundColor: ['rgba(78, 106, 255, 1)'],
                // ⑧dataset의 선 색(rgba값을 String으로 표현)
                borderColor: ['rgba(78, 106, 255, 1)'],
                // ⑨dataset의 선 두께(Number)
                borderWidth: 1,
                tension: 0.5
            },
            {
                label: '폐기란',
                yAxisID: 'A',
                data: [100000, 250000, 100000, 300000, 150000, 150000, 150000,100000],
                backgroundColor: ['rgba(10, 57, 119, 1)'],
                borderColor: ['rgba(10, 57, 119, 1)'],
                borderWidth: 1,
                tension: 0.5
            }
        ]
    },
    options: {
        scales: {
            // y: {
            //     beginAtZero: true,
            // },
            yAxes: {
                id:'B',
                type:'linear',
                beginAtZero: true,
                position:'right',
                ticks: {
                    beginAtZero:true,
                    suggestedMin: 0,
                    scaleStartValue : 0,
                    suggestedMax: 100,
                    callback:function(value, index, values) {
                        return value + '%';
                    }
                }
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                position: 'top',
                text: "생산현황 및 불량률",
                font: {
                    size: 15,
                    color: 'black',
                    weight: 'bold',
                }
            }
        }
    }
});
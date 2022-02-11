// haccp 생산 목표 도넛차트

const chartE = document.getElementById('gaugeChart01');
const gaugeChart01 = new Chart(chartE, {
    type: 'doughnut',
    data: {
        labels: ['낮음','보통','높음'],
        datasets: [{
            label: '',
            data: [1, 2, 3, 4],
            backgroundColor: ['#FBE5C9', '#C5F2C7', '#FCD0CF'],
            borderWidth: 1
        }]
    },
    options: {
        cutout: 60,
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
                    size: 18,
                    color: 'black',
                    text: "80%",
                    position: 'center',
                }
            },
           
        }
    }

});


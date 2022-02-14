// 1번차트
var myConfig = {
  "type": "gauge",
  "scale-r": {
      "aperture": 200, //Scale Range
      "values": "0:100:20" //and minimum, maximum, and step scale values.
  },
  "series": [{
      "values": [40]
  }]
};

zingchart.render({
  id: 'gaugeChart01',
  data: myConfig,
  height: 300,
  width: "100%"
});
// 2번차트
var myConfig = {
  "type": "gauge",
  "scale-r": {
      "aperture": 200, //Scale Range
      "values": "0:100:20" //and minimum, maximum, and step scale values.
  },
  "series": [{
      "values": [50]
  }]
};

zingchart.render({
  id: 'gaugeChart02',
  data: myConfig,
  height: 300,
  width: "100%"
});
// 3번차트
var myConfig = {
  "type": "gauge",
  "scale-r": {
      "aperture": 200, //Scale Range
      "values": "0:100:20" //and minimum, maximum, and step scale values.
  },
  "series": [{
      "values": [50]
  }]
};

zingchart.render({
  id: 'gaugeChart03',
  data: myConfig,
  height: 300,
  width: "100%"
});

// 4번차트
var myConfig = {
  "type": "gauge",
  "scale-r": {
      "aperture": 200, //Scale Range
      "values": "0:100:20" //and minimum, maximum, and step scale values.
  },
  labels: ['낮음', '보통' ,' 높음'],
  "series": [{
      "values": [60]
  }]
};

zingchart.render({
  id: 'gaugeChart04',
  data: myConfig,
  height: 300,
  width: "100%"
});
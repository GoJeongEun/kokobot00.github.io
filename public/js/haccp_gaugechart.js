// 1번차트
var myConfig = {
  "type": "gauge",
  "scale-r": {
    "aperture": 200,
    "values": "0:100:20",
    "center": {
      "size": 5,
      "background-color": "#ffffff",
      "border-color": "none"
    },
    "ring": { //Ring with Rules
      "size": 10,
      "rules": [{
          "rule": "%v >= 0 && %v <= 40",
          "background-color": "#FBE5C9",
        },
        {
          "rule": "%v >= 40 && %v <= 80",
          "background-color": "#C5F2C7"
        },
        {
          "rule": "%v >= 80 && %v <= 100",
          "background-color": "#FCD0CF"
        }
      ]
    }
  },
  "plot": {
    "csize": "10%",
    "size": "100%",
    "background-color": "#1672EC"
  },
  "series": [{
    "values": [87]
  }]
};
 
zingchart.render({
  id: 'gaugeChart01',
  data: myConfig,
  height: "250px",
  width: "100%"
});
// 2번차트
var myConfig = {
  "type": "gauge",
  "scale-r": {
    "aperture": 200,
    "values": "0:100:20",
    "center": {
      "size": 5,
      "background-color": "#ffffff",
      "border-color": "none"
    },
    "ring": { //Ring with Rules
      "size": 10,
      "rules": [{
          "rule": "%v >= 0 && %v <= 40",
          "background-color": "#FBE5C9"
        },
        {
          "rule": "%v >= 40 && %v <= 80",
          "background-color": "#C5F2C7"
        },
        {
          "rule": "%v >= 80 && %v <= 100",
          "background-color": "#FCD0CF"
        }
      ]
    }
  },
  "plot": {
    "csize": "10%",
    "size": "100%",
    "background-color": "#1672EC"
  },
  "series": [{
    "values": [55]
  }]
};
 
zingchart.render({
  id: 'gaugeChart02',
  data: myConfig,
  height: "250px",
  width: "100%"
});

// 3번차트
var myConfig = {
  "type": "gauge",
  "scale-r": {
    "aperture": 200,
    "values": "0:100:20",
    "center": {
      "size": 5,
      "background-color": "#ffffff",
      "border-color": "none"
    },
    "ring": { //Ring with Rules
      "size": 10,
      "rules": [{
          "rule": "%v >= 0 && %v <= 40",
          "background-color": "#FBE5C9"
        },
        {
          "rule": "%v >= 40 && %v <= 80",
          "background-color": "#C5F2C7"
        },
        {
          "rule": "%v >= 80 && %v <= 100",
          "background-color": "#FCD0CF"
        }
      ]
    }
  },
  "plot": {
    "csize": "10%",
    "size": "100%",
    "background-color": "#1672EC"
  },
  "series": [{
    "values": [55]
  }]
};
 
zingchart.render({
  id: 'gaugeChart03',
  data: myConfig,
  height: "250px",
  width: "100%"
});
// 4번차트
var myConfig = {
  "type": "gauge",
  "scale-r": {
    "aperture": 200,
    "values": "0:100:20",
    "center": {
      "size": 5,
      "background-color": "#ffffff",
      "border-color": "none"
    },
    "ring": { //Ring with Rules
      "size": 10,
      "rules": [{
          "rule": "%v >= 0 && %v <= 40",
          "background-color": "#FBE5C9"
        },
        {
          "rule": "%v >= 40 && %v <= 80",
          "background-color": "#C5F2C7"
        },
        {
          "rule": "%v >= 80 && %v <= 100",
          "background-color": "#FCD0CF"
        }
      ]
    }
  },
  "plot": {
    "csize": "10%",
    "size": "100%",
    "background-color": "#1672EC"
  },
  "series": [{
    "values": [55]
  }]
};
 
zingchart.render({
  id: 'gaugeChart04',
  data: myConfig,
  height: "250px",
  width: "100%"
});
// 5번차트
var myConfig = {
  "type": "gauge",
  "scale-r": {
    "aperture": 200,
    "values": "0:100:20",
    "center": {
      "size": 5,
      "background-color": "#ffffff",
      "border-color": "none"
    },
    "ring": { //Ring with Rules
      "size": 10,
      "rules": [{
          "rule": "%v >= 0 && %v <= 40",
          "background-color": "#FBE5C9",
          "text":'가능성'
        },
        {
          "rule": "%v >= 40 && %v <= 80",
          "background-color": "#C5F2C7",
          "text":'가능성'
        },
        {
          "rule": "%v >= 80 && %v <= 100",
          "background-color": "#FCD0CF",
          "text":'가능성'
        }
      ]
    }
  },
  "plot": {
    "csize": "10%",
    "size": "100%",
    "background-color": "#1672EC"
  },
  "series": [{
    "values": [55]
  }]
};
 
zingchart.render({
  id: 'gaugeChart05',
  data: myConfig,
  height: "250px",
  width: "100%"
});

// 6번차트
var myConfig = {
  "type": "gauge",
  "scale-r": {
    "aperture": 200,
    "values": "0:100:20",
    "center": {
      "size": 5,
      "background-color": "#ffffff",
      "border-color": "none"
    },
    "ring": { //Ring with Rules
      "size": 10,
      "rules": [{
          "rule": "%v >= 0 && %v <= 40",
          "background-color": "#FBE5C9"
         
        },
        {
          "rule": "%v >= 40 && %v <= 80",
          "background-color": "#C5F2C7"
        },
        {
          "rule": "%v >= 80 && %v <= 100",
          "background-color": "#FCD0CF"
        }
      ]
    }
  },
  "plot": {
    "csize": "10%",
    "size": "100%",
    "background-color": "#1672EC"
  },
  "series": [{
    "values": [55]
  }]
};
 
zingchart.render({
  id: 'gaugeChart06',
  data: myConfig,
  height: "250px",
  width: "100%"
});
// 7번차트
var myConfig = {
  "type": "gauge",
  "scale-r": {
    "aperture": 200,
    "values": "0:100:20",
    "center": {
      "size": 5,
      "background-color": "#ffffff",
      "border-color": "none"
    },
    "ring": { //Ring with Rules
      "size": 10,
      "rules": [{
          "rule": "%v >= 0 && %v <= 40",
          "background-color": "#FBE5C9"
        },
        {
          "rule": "%v >= 40 && %v <= 80",
          "background-color": "#C5F2C7"
        },
        {
          "rule": "%v >= 80 && %v <= 100",
          "background-color": "#FCD0CF"
        }
      ]
    }
  },
  "plot": {
    "csize": "10%",
    "size": "100%",
    "background-color": "#1672EC"
  },
  "series": [{
    "values": [55]
  }]
};
 
zingchart.render({
  id: 'gaugeChart07',
  data: myConfig,
  height: "250px",
  width: "100%"
});
// 8번차트
var myConfig = {
  "type": "gauge",
  "scale-r": {
    "aperture": 200,
    "values": "0:100:20",
    "center": {
      "size": 5,
      "background-color": "#ffffff",
      "border-color": "none"
    },
    "ring": { //Ring with Rules
      "size": 10,
      "rules": [{
          "rule": "%v >= 0 && %v <= 40",
          "background-color": "#FBE5C9"
        },
        {
          "rule": "%v >= 40 && %v <= 80",
          "background-color": "#C5F2C7"
        },
        {
          "rule": "%v >= 80 && %v <= 100",
          "background-color": "#FCD0CF"
        }
      ]
    }
  },
  "plot": {
    "csize": "10%",
    "size": "100%",
    "background-color": "#1672EC"
  },
  "series": [{
    "values": [55]
  }]
};
 
zingchart.render({
  id: 'gaugeChart08',
  data: myConfig,
  height: "250px",
  width: "100%"
});
// 9번차트
var myConfig = {
  "type": "gauge",
  "scale-r": {
    "aperture": 200,
    "values": "0:100:20",
    "center": {
      "size": 5,
      "background-color": "#ffffff",
      "border-color": "none"
    },
    "ring": { //Ring with Rules
      "size": 10,
      "rules": [{
          "rule": "%v >= 0 && %v <= 40",
          "background-color": "#FBE5C9"
        },
        {
          "rule": "%v >= 40 && %v <= 80",
          "background-color": "#C5F2C7"
        },
        {
          "rule": "%v >= 80 && %v <= 100",
          "background-color": "#FCD0CF"
        }
      ]
    }
  },
  "plot": {
    "csize": "10%",
    "size": "100%",
    "background-color": "#1672EC"
  },
  "series": [{
    "values": [55]
  }]
};
 
zingchart.render({
  id: 'gaugeChart09',
  data: myConfig,
  height: "250px",
  width: "100%"
});

// 10번차트
var myConfig = {
  "type": "gauge",
  "scale-r": {
    "aperture": 200,
    "values": "0:100:20",
    "center": {
      "size": 5,
      "background-color": "#ffffff",
      "border-color": "none"
    },
    "ring": { //Ring with Rules
      "size": 10,
      "rules": [{
          "rule": "%v >= 0 && %v <= 40",
          "background-color": "#FBE5C9",
          "text":'낮음'
        },
        {
          "rule": "%v >= 40 && %v <= 80",
          "background-color": "#C5F2C7",
          "text":'보통'
        },
        {
          "rule": "%v >= 80 && %v <= 100",
          "background-color": "#FCD0CF",
          "text":'높음'
        }
      ]
    },
  },
  "plot": {
    "csize": "10%",
    "size": "100%",
    "background-color": "#1672EC"
  },
  "series": [{
    "values": [55]
  }]
};
 
zingchart.render({
  id: 'gaugeChart10',
  data: myConfig,
  height: "250px",
  width: "100%"
});
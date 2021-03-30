var myChart = echarts.init(document.getElementById('main'));  
  let xDate=[],
      yDate=[];

for(let i=0;i<+1;i+=0.1){
  xDate.push(i);
  yDate.push(h(i));
}

function h(p){
  return -1*p*Math.log2(p)-(1-p)*Math.log2(1-p);
}

var option = {
  title: {
  text: '二进熵函数'
  },
  tooltip: {},
  legend: {
    data:['H(X)']
  },
  xAxis: {
    data: xDate
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'line',
    smooth:true,
    data: yDate
  }]
};

  myChart.setOption(option);

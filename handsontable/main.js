var data = [
  ["Java", 1, "降", "-0.01%"],
  ["C", 2,"升","+2.44%"],
  ["Python", 3, "升","+1.41%"],
  ["C++", 4,"降","-2.58%"],
  ["C#",5,"升","+2.07%"],
  ["Visual Basic .NET",6,"降","-1.17%"],
  ["JavaScript",7,"降","-0.85%"]

];
var container = document.getElementById('example');
var hot = new Handsontable(container, {
  data: data,
  rowHeaders: false,
  colHeaders: ["语言名称","排名","升或降","变化幅度"],
  contextMenu: true,
  width: '100%',
  height: '70%',
  rowHeights: 30,
  colWidths: 150,
  licenseKey: 'non-commercial-and-evaluation'
});




var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  title:{
    text: 'JavaScript语言排名变化'
  },
  tooltip:{},
  legend:{
    data:['排名']
  },
  xAxis: {
    type: 'category',
    data: ['2000', '2005', '2010', '2015', '2020']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [6, 9, 8, 8, 7],
    type: 'line',
    name:'排名',
  }]


};

option && myChart.setOption(option);

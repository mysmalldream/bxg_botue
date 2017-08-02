$(function() {
  $("#toggle").css("display", "none");
  $("#slide").click(function() {
    $("#toggle").stop().slideToggle(250);
    $(".ullis>li").addClass(".ullis");
  });

  $(".ullis li a").click(function() {
    $(this).css("backgroundColor", "#243443");
    $(this).parent().siblings().children().css("backgroundColor", "#2F4050");
  });

  //条形统计图表
  // 路径配置
  require.config({
    paths: {
      echarts: "lib/dist"
    }
  });

  // 使用
  require([
    "echarts",
    "echarts/chart/bar" // 使用柱状图就加载bar模块，按需加载
  ], function(ec) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = ec.init(document.getElementById("main"));

    var option = {
      title: {
        text: "课程数量"
      },
      tooltip: {
        show: true
      },
      legend: {
        data: ["数量"]
      },
      xAxis: [
        {
          type: "category",
          data: ["HTML", "CSS", "Mobile", "Angular", "vue", "Node.js"]
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "数量",
          type: "bar",
          data: [5, 20, 40, 10, 10, 20]
        }
      ]
    };

    // 为echarts对象加载数据
    myChart.setOption(option);
  });
});

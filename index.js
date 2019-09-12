
var parseDate = d3.timeFormat("%I%p");
var lineGen = d3.line()
.x(function(d) {
  var timeOnly = parseDate(new Date(String(d.timestamp.toString())));
  return xScale(timeOnly);
})
.y(function(d) {
  return yScale(d.darkvalue);
});
// var timeBegin = parseDate("2019-08-15 14:11:29.271527");
// var timeEnd = parseDate("2019-08-22 07:39:38.521612");

var vis = d3.select("#visualisation"),
    WIDTH = 1000,
    HEIGHT = 500,
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },
    xScale = d3.scaleOrdinal().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(data, function(d) { return parseDate(new Date(d.timestamp)); }), d3.max(data, function(d) { return parseDate(new Date(d.timestamp)); })]),
    yScale = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, d3.max(data, function(d) { return d.darkvalue; })]);
    
xAxis = d3.axisBottom(xScale);

  vis.append("svg:g")
  .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
  .call(xAxis);

yAxis = d3.axisLeft(yScale);

  vis.append("svg:g")
  .attr("transform", "translate(" + (MARGINS.left) + ",0)")
  .call(yAxis);

  //Dataset 1
  vis.append('svg:path')
  .attr('d', lineGen(data))
  .attr('stroke', 'green')
  .attr('stroke-width', 2)
  .attr('fill', 'none');

  //Dataset 2
  vis.append('svg:path')
  .attr('d', lineGen(data2))
  .attr('stroke', 'blue')
  .attr('stroke-width', 2)
  .attr('fill', 'none');

    //Grab from CSV
//timestamp,darkvalue: "2019-08-15 14:11:29.271527,31"

d3.csv("http://127.0.0.1:8080/result1.csv", function(error, rows) {
  if (error) throw error;
  rows.forEach(function(d) {
    d.Timestamp = d.timestamp;
    d.DarkValue = d.darkvalue  });
  console.log(rows[0]);
});

var div = d3.select("body").append("div");
div.html("Hello, world!");

var dataset = [];                        //Initialize empty array
        for (var i = 0; i < 25; i++) {           //Loop 25 times
            var newNumber = Math.random() * 30;  //New random number (0-30)
            dataset.push(newNumber);       
        }      //Add new number to array
        //d3.select("body").selectAll("div")
        d3.select("#my_rect")
            .data(dataset)  // <-- The answer is here!
            .enter()
            .append("div")
            .attr("class", "bar")
            .style("height", function(d) {
                var barHeight = d * 5;
                return barHeight + "px";
            });

var data = [{x: 100, y: 100}, {x: 200, y: 200}, {x: 300, y: 300}]

var svg = d3.select("body");
svg.select("#my_rect")
.data(data)
.enter().append("circle")
.attr("cx", function(d) { return d.x; })
.attr("cy", function(d) { return d.y; }) 
.attr("r", 2.5);

function chart(config) {
    var width = 720, // default width
    height = 80; // default height

    function my(selection) {
        selection.each(function(d, i) {
          // generate chart here; `d` is the data and `this` is the element
        });
      }

    my.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    return my;
    };

    my.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    return my;
    };

    return my;
}
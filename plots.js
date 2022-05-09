function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
 
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
   
    console.log("hello");
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samples=data.samples;

    console.log(samples);
    

    // 4. Create a variable that filters the samples for the object with the desired sample number.

    const result = samples.filter(word=>word.id==sample);
    console.log(sample)
    console.log(result)

  //  console.log(des_sample)

    //  5. Create a variable that holds the first sample in the array.
var des_sample=result[0]
console.log(des_sample)

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
var des_sample_otu_ids=des_sample.otu_ids
var des_sample_otu_labels=des_sample.otu_labels
var des_sample_sample_values=des_sample.sample_values

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 
var yticks = des_sample_otu_ids.sort((a,b) => b-a).slice(0,10)
console.log(yticks)

    //var yticks = 

    // 8. Create the trace for the bar chart. 
    var barData = [
      
    ];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
     
    };
    // 10. Use Plotly to plot the data with the layout. 
    // Bar and Bubble charts
// Create the buildCharts function.
(function buildCharts() {
  // Use d3.json to load and retrieve the samples.json file 
  // d3.json("samples.json").then((data) => {
    
    // var trace1 = {
    //   x: [1, 2, 3, 4],
    //   y: [10, 11, 12, 13],
    //   text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
    //   mode: 'markers',
    //   marker: {
    //     color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
    //     size: [40, 60, 80, 100]
    //   }
    // };
    
    // var data = [trace1];
    
    // var layout = {
    //   title: 'Bubble Chart Hover Text',
    //   showlegend: false,
    //   height: 600,
    //   width: 600
    // };
    
    // Plotly.newPlot('bubble', data, layout);
    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    console.log(des_sample_sample_values)
    var trace1 = {
      x: des_sample_otu_ids,
      y: des_sample_sample_values,
      text: des_sample_otu_labels,
      mode: "markers",
      marker: {
        color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
        size: [40, 60, 80, 100]
      }
    }
    var data = [trace1]
    var layout = {
      title: 'Bubble Chart Hover Text',
      showlegend: false,
      height: 600,
      width: 600
    };
    Plotly.newPlot("bubble",data,layout); 

    // 1. Create the trace for the bubble chart.
    var bubbleData = [
   
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      
    };

    // 3. Use Plotly to plot the data with the layout.
    // Plotly.newPlot(); 
  // });
})()
  });
}


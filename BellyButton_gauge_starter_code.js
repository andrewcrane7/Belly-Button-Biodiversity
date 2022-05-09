// Create the buildChart function.
(function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
var samples = [];
    // Create a variable that filters the samples for the object with the desired sample number.
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.

    samples.filter(sample=>sample.id == data)
    // Create a variable that holds the first sample in the array.
  

    // 2. Create a variable that holds the first sample in the metadata array.
    var result = samples[0]

    // Create variables that hold the otu_ids, otu_labels, and sample_values.

    var des_sample_otu_ids=result.otu_ids
    var des_sample_otu_labels=result.otu_labels
    var des_sample_sample_values=result.sample_values
    console.log(des_sample_otu_ids)
    console.log(des_sample_otu_labels)
    console.log(des_sample_sample_values)

    // 3. Create a variable that holds the washing frequency.
   
    // Create the yticks for the bar chart.

    var yticks = des_sample_otu_ids.sort((a,b) => b-a).slice(0,10)
    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    
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
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
     
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    var data = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: 270,
        title: { text: "Speed" },
        type: "indicator",
        mode: "gauge+number"
      }
    ];
    
    var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', data, layout);
  });
})()

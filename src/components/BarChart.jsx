import React from 'react';
import Plot from 'react-plotly.js';

const BarChart = (props) => {
    return (
        <Plot
            data={[

                { type: 'bar', x: props.repoNames, y: props.repoSize, marker: { color: '#7757B9' } },
            ]}
            layout={{ width: 750, height: 550, paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)' }}
        />
    );

}
export default BarChart;
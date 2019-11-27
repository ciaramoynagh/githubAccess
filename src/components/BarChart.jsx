import React from 'react';
import Plot from 'react-plotly.js';

const BarChart = (props) => {
    return (
        <Plot
            data={[

                { type: 'bar', x: props.repoNames, y: props.repoSize },
            ]}
            layout={{ width: 500, height: 240, title: 'Languages' }}
        />
    );

}
export default BarChart;
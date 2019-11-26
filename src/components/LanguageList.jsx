import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart.jsx';

let i = '';
let languages = '';

const LanguageList = (props) => {
    if (props.langslist) {
        { var total = 
            Object.entries(props.langslist).map(([key, value]) =>
                (value)).reduce((pv, cv) => pv + cv, 0)
        }
        return (
            <ul>
                {Object.entries(props.langslist).map(([key, value]) =>
                    <li key={key}>
                        {key} - {Math.round(100*value/total)}%
                        {console.log(i = i + value)}
                        {console.log(languages=languages+key+",")}

                    </li>

                )}
                <div className='Chart'>
                    <div>
                        {(i != '') ?
                            <div>
                            <h4>Chart Representation of Language Count</h4>

                            <div>

                                <PieChart repoSize={i.split('')} repoNames={languages.split(',')} />

                                <BarChart data={i.split('')} size={[500, 500]} />
                                {i = ''}
                                {languages = ''}
                                </div>
                                </div>:
                            <div></div>
                        }
                </div>
         

                    </div>

            </ul>
        )
    } else { return null; }
};
export default LanguageList;
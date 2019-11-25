import React from 'react';
import BarChart from './BarChart';

let x = [];
let i = '';


const LanguageList = (props) => {
    if (props.langslist) {
        return (
            <ul>
                {Object.entries(props.langslist).map(([key, value]) =>
                    <li key={key}>
                        {key} - {value}
                        {console.log(i = i + value)}

                    </li>

                )}
                <div className='barChart'>
                    <div>
                    <h4>Bar Chart of Languages Used</h4>
                </div>
                <div>
                    <BarChart data={i.split('')} size={[500, 500]} />
                    {i = ''};
                </div>
                    </div>

            </ul>
        )
    } else { return null; }
};
export default LanguageList;
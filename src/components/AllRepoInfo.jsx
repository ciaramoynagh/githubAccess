import React from 'react';
import PieChart from './graphs/PieChart';

var repoSize = [];
var repoNames = [];

class AllRepoInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            gitun: "",
            repos: "",
        }
    }


    //get all repos for the user specified at the beginning
    getReposForUser() {
        if (this.props) {
            //use the map function to move through all the object
            this.props.repitems.map((repitem) => {
                repoSize.push(repitem.size);
                repoNames.push(repitem.name);
            })
        }

    }


    render() {
        //works as far as i know yeet
        if (this.props.repitems) {
            this.getReposForUser();
            return (
                <div class="slide-in-blurred-right" >
                    <PieChart repoSize={repoSize} repoNames={repoNames} />
                </div>
            );
        } else {
            return (
                <h1>Error No info</h1>
            );
        }
    }
}

export default AllRepoInfo;
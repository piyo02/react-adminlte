import React, {Component} from 'react';

import { PlainContent, Template } from '../../templates';
import { InfoBox } from '../../../components';

class Dashboard extends Component {
    state = {
        header: "Beranda",
        headers: {
            "task": "Task",
            "progress": "Progress",
        }
    }

    render() {
        return(
            <PlainContent header={this.state.header}>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <InfoBox count={150} color="info" icon="fas fa-shopping-cart" topic="New Orders" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <InfoBox count={53} color="success" icon="ion ion-stats-bars" topic="Bounce Rate" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <InfoBox count={44} color="warning" icon="fas fa-user-plus" topic="User Registrations" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <InfoBox count={65} color="danger" icon="fas fa-chart-pie" topic="Unique Visitors" />
                    </div>
                </div>
            </PlainContent>
        )
    }
}

export default Template(Dashboard);
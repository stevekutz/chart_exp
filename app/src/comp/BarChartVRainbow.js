import React from 'react';
import { Chart, Dataset, ButtonGroup, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 600,
};

class BarChartExample extends React.Component {
    constructor(props) {
        super(props);
        this.titles = ['Data-Blue', 'Data-Purple', 'Data-Dark'];
        this.colors = ['#01b6f5', '#663398', '#061c3f'];
        this.months = ['July', 'August', 'September', 'October', 'November', 'December'];
        this.state = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    title: 'Data-Red',
                    backgroundColor: '#fe4849',
                    values: [18, 42, 58, 50, 19, undefined],
                },
                {
                    title: 'Data-Orange',
                    backgroundColor: '#ff6837',
                    values: [undefined, 40, undefined, 45, 95, 33],
                },
                {
                    title: 'Data-Yellow',
                    backgroundColor: '#ffcc00',
                    values: [undefined, 30, 80, undefined, 65, 50],
                },
                {
                    title: 'Data-Green',
                    backgroundColor: '#1ad1a3',
                    values: [undefined, 15, undefined, 60, 45, 85],
                },
            ],
        };
    }

    addDataset() {
        const { labels, datasets } = this.state;
        const newValues = labels.map(label => Math.round(Math.random() * 100));
        const newDatasets = datasets.concat({
            title: this.titles.shift(),
            values: newValues,
            backgroundColor: this.colors.shift(),
        });
        this.setState({ datasets: newDatasets });
    }

    removeDataset() {
        const { datasets } = this.state;
        const dataset = datasets[datasets.length - 1];
        this.titles.unshift(dataset.title);
        this.colors.unshift(dataset.backgroundColor);
        const newDatasets = datasets.filter(d => d.title !== dataset.title);
        this.setState({ datasets: newDatasets });
    }

    addMonth() {
        const { labels, datasets } = this.state;
        const newlabels = labels.concat(this.months.shift());
        const newDatasets = datasets.map(dataset => {
            const { values, ...rest } = dataset;
            const newValues = values.concat(Math.round(Math.random() * 100));
            return {
                ...rest,
                values: newValues,
            };
        });
        this.setState({ labels: newlabels, datasets: newDatasets });
    }

    removeMonth() {
        const { labels, datasets } = this.state;
        const label = labels[labels.length - 1];
        this.months.unshift(label);
        const newLabels = labels.filter(l => l !== label);
        const newDatasets = datasets.map(dataset => {
            const { values, ...rest } = dataset;
            const newValues = values.slice(0, values.length - 1);
            return {
                ...rest,
                values: newValues,
            };
        });
        this.setState({ labels: newLabels, datasets: newDatasets });
    }

    renderDatasets() {
        const { datasets } = this.state;
        return datasets.map(({ title, values, backgroundColor }) => (
            <Dataset key={title} title={title} values={values} backgroundColor={backgroundColor} />
        ));
    }

    render() {
        const { labels, datasets } = this.state;

        const noMoreTitles = this.titles.length === 0;
        const noMoreDatasets = datasets.length === 0;
        const noMoreMonths = this.months.length === 0;
        const noMoreLabels = labels.length === 0;

        return (
            <div className="rainbow-p-vertical_large">
                <div className="rainbow-align-content_center rainbow-flex_wrap">
                    <ButtonGroup className="rainbow-m-horizontal_large rainbow-m-vertical_small">
                        <Button onClick={() => this.addDataset()} disabled={noMoreTitles}>
                            <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" />{' '}
                            Data
                        </Button>
                        <Button onClick={() => this.removeDataset()} disabled={noMoreDatasets}>
                            <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" />{' '}
                            Data
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className="rainbow-m-horizontal_large rainbow-m-vertical_small">
                        <Button onClick={() => this.addMonth()} disabled={noMoreMonths}>
                            <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" />{' '}
                            Month
                        </Button>
                        <Button onClick={() => this.removeMonth()} disabled={noMoreLabels}>
                            <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" />{' '}
                            Month
                        </Button>
                    </ButtonGroup>
                </div>
                <div
                    style={containerStyles}
                    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-m_auto"
                >
                    <Chart labels={labels} type="bar">
                        {this.renderDatasets()}
                    </Chart>
                </div>
            </div>
        );
    }
}

// <BarChartExample />;

export default BarChartExample;
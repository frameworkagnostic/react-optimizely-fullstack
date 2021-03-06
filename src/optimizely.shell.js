
import React from 'react';
import fetchDatafile from './fetch-datafile';
import PropTypes from 'prop-types';

class ComponentShellOptimizely extends React.Component {
    constructor(props) {
        super(props);
        this.component = null;
        this.state = null;
    }

    componentDidMount() {
        const {
            optimizely,
            uniqueId,
            projectId,
            experiment,
            component,
            ...properties
        } = this.props;

        const url = `https://cdn.optimizely.com/json/${projectId}.json`;
        fetchDatafile(optimizely, uniqueId, url, experiment)
            .then((response) => {
                const props = properties || {};
                this.component = component;
                this.setState(function() {
                    props.variant = response.variation;
                    return props;
                });
            });
    }

    render() {
        if(!this.component || !this.state) { return null; }
        return React.createElement(this.component, this.state);
    }
}

ComponentShellOptimizely.propTypes = {
    optimizely: PropTypes.object,
    uniqueId: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    projectId: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    experiment: PropTypes.string,
    component: PropTypes.object
};

export default ComponentShellOptimizely;

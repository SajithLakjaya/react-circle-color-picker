import React from 'react';
import PropTypes from 'prop-types';
import Circle from './components/circle';

class ReactCircleColorPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentColors: props.colors.map(color => {
                return {
                    hex: color,
                    selected: false
                }
            })
        };
        this.onChangeColor = this.onChangeColor.bind(this);
    }

    onChangeColor(colorHex) {
        let currentColors = this.state.currentColors;
        let selectedColor = currentColors.filter((color) => { return color.hex == colorHex; })[0];

        if (selectedColor) {
            selectedColor.selected = !selectedColor.selected;
            this.setState({
                currentColors: currentColors
            });
        }

        if (this.props.onChange) {
            let selectedHex = this.state.currentColors.filter((color) => {
                return color.selected
            });
            this.props.onChange(selectedHex);
        }
    }

    renderColors() {
        return this.state.currentColors.map((color, index) => {
            return <Circle circleSize={this.props.circleSize} circleSpacing={this.props.circleSpacing}
                key={index} onChange={this.onChangeColor} selected={color.selected} color={color.hex} />
        });
    }

    render() {
        var componentStyle = {
            display: 'flex',
            flexWrap: 'wrap'
        }

        return <div style={componentStyle}>
            {this.renderColors()}
        </div>;
    }

}

ReactCircleColorPicker.propTypes = {
    colors: PropTypes.array,
    circleSize: PropTypes.number,
    circleSpacing: PropTypes.number,
    onChange: PropTypes.func
}

ReactCircleColorPicker.defaultProps = {
    colors: [],
    circleSize: 28,
    circleSpacing: 3,
}

export default ReactCircleColorPicker;
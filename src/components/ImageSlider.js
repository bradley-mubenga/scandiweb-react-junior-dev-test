import React, { Component } from 'react';
//Assets
import rightChevron from '../assets/images/chevron-right.png';
import leftChevron from '../assets/images/chevron-left.png';

export default class ImageSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentImage: 0
        }
    }

    nextImage = (index) => {
        let nthIndex = this.props.images.length - 1;
        console.log(nthIndex)

        if (this.state.currentImage === nthIndex) {
            this.setState({
                currentImage: 0
            })
        }

        else {
            this.setState({
                currentImage: 2
            })
        }
    }

    prevImage = (index) => {
        let length = this.props.images.length - 1;
        console.log("state", this.state.currentImage)
        this.state.currentImage === length 
        ? (this.setState({ currentImage: index++ }))
        : (this.setState({ currentImage: index++ }))
    }

    render() {
        return (
            <div>
                <div className="sliderWrapper">
                        <div
                        className="chevron"
                        >
                            <img 
                                src={rightChevron}
                                onClick={() => this.nextImage(this.state.currentImage)}
                            />
                        </div>

                        <div className="middleImage">
                            <img 
                                src={this.props.images[this.state.currentImage]}
                            />
                        </div>

                        <div 
                        className="chevron"
                        onClick={() => this.prevImage(this.state.currentImage)}
                        >
                            <img src={leftChevron}/>
                        </div>
                </div>
            </div>
        )
    }
}

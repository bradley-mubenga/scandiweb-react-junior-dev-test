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

    nextImage = () => {
        let nthIndex = this.props.images.length - 1;

        if (this.state.currentImage === nthIndex) {
            this.setState({
                currentImage: 0
            })
        }

        else if (this.state.currentImage < nthIndex) {
            let num = this.state.currentImage;
            num++;

            this.setState({
                currentImage: num
            })
        }
    }

    prevImage = () => {
        let nthIndex = this.props.images.length - 1;

        if (this.state.currentImage === 0) {
            this.setState({
                currentImage: nthIndex
            })
        }

        else if (this.state.currentImage > 0) {
            let num = this.state.currentImage;
            num--;

            this.setState({
                currentImage: num
            })
        }
    }

    render() {
        return (
            <div>
                <div className="sliderWrapper">
                        <div
                        className="chevron"
                        onClick={() => this.prevImage(this.state.currentImage)}
                        >
                            <img 
                                src={rightChevron}
                                alt="chevron-right"
                            />
                        </div>

                        <div className="middleImage">
                            <img 
                                src={this.props.images[this.state.currentImage]}
                                alt="product"
                            />
                        </div>

                        <div 
                        className="chevron"
                        onClick={() => this.nextImage(this.state.currentImage)}
                        >
                            <img src={leftChevron} alt="chevron-left"/>
                        </div>
                </div>
            </div>
        )
    }
}

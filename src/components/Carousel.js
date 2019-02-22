import React, { Component } from 'react';
import axios from 'axios';

class Carousel extends Component {
    state = {
        data: {}
    }

    componentWillMount() {
        this.getCarouselItems();
    }

    getCarouselItems() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://nb6qi70oo0.execute-api.us-west-2.amazonaws.com/default/products`)
            .then(res => {
                this.setState({data: res.data.itemData}, () =>
                {
                    // console.log(this.state);
                })

            })
            .catch(err => console.log('error',err));
    }

    render() {
        const carouselItems = Object.entries(this.state.data).map(([key, data], i) => {
            const makeActive = i === 0 ? 'active' : '';
            const reviewCount = data.review === undefined ? 'none' : data.review.numberOfReviews;
            return (
                <div key={key} className={makeActive+' carousel-item'}>
                    <img src={data.bestImage.url} className="float-none w-100" alt={data.itemData.title} />
                    <div>
                        <h4>{data.itemData.title}</h4>
                        Price: {data.price.maxBuyingPrice}<br />
                        Reviews: {reviewCount}
                    </div>
                </div>
            )
        });

        return (
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {carouselItems}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Carousel;
import React from "react";
import "./featuredList.css";

const FeaturedList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img
                    src="https://images.trvl-media.com/hotels/1000000/30000/28200/28110/5e2d533a_w.jpg"
                    alt="hotel"
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    src="https://teja12.kuikr.com/is/a/c/880x425/gallery_images/original/cf61baeeea1dfe9.gif"
                    alt="appartments"
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Appartments</h1>
                    <h2>524 appartments</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    src="https://atmosphereresorts.com/wp-content/uploads/2020/03/Main-pool-and-beach-at-Atmosphere-Resorts-Spa.jpg"
                    alt="resorts"
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>313 resorts</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    src="https://images.prismic.io/villaplus/6b5c9ce5-a612-485a-8b31-db33563c3bfa_480+%283840+%C3%97+2553px%29.jpg"
                    alt="villas"
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    src="https://media-cdn.tripadvisor.com/media/vr-splice-j/06/64/99/bb.jpg"
                    alt="cabins"
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>
        </div>
    )
};


export default FeaturedList;
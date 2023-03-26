import React from "react";
import "./featured.css";


const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                    src="https://static.nationalgeographic.co.uk/files/styles/image_3200/public/gettyimages-639636822.jpg?w=1600&h=900"
                    alt="dublin"
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://traveler.marriott.com/wp-content/uploads/2022/02/downtown-austin-texas.jpg"
                    alt="Austin"
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>532 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://content.r9cdn.net/rimg/dimg/97/b0/961eb3a8-city-7128-16764004bcf.jpg?width=1366&height=768&xhint=1740&yhint=2462&crop=true"
                    alt="reno"
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>537 properties</h2>
                </div>
            </div>
        </div>
    )
};


export default Featured;
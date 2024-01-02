import React from "react";

export default function NewsCard(data){
    const { headerImg, category, date, mainText, authorImg, authorName } = data;
    return(
        <div className="news-card">
            <img src={headerImg} alt="" />
            {/* <div className="flex gap-x-1 category">
                <p className="text-1">{category}</p>
                <p className="text-2">{date}</p>
            </div> */}
            <p className="main-text">{mainText}</p>
            {/* <div className="flex author gap-x-3 items-center">
                <img src={authorImg} alt="" />
                <p>{authorName}</p>
            </div> */}
        </div>
    )
}

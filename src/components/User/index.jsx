import React from 'react'
import "./User.css"

export const User = ({data}) => {
    return (
        <div className = 'mom'>
            <div className = 'block'>
                <div>{data.full_name}</div>
                <div>{data.age}</div>
                <div>{data.country}</div>
                <img src={data.img} alt="сорри нет фото" className="img"/>
            </div>
        </div>
    )
}
import React from 'react'
import { Link } from "react-router-dom";
import CartBtn from './CartBtn';

const BlogPreviewCard = (props) => {
    return (
        <div className="bg-white flex flex-col md:flex-row rounded-lg">
            <div className="flex w-84 h-60 md:h-112 md:w-70 overflow-hidden md:overflow-visible">
                <img className="object-cover rounded-t-lg md:rounded-none object-center w-84 md:w-70 md:h-full" src={props.imgSrcDesktop} alt="Product Image" />
            </div>
        
            <div className="flex flex-col gap-3 md:gap-5.25 w-84 md:w-68 p-6 md:pl-7 md:pr-7">
                <div className="inline text-custom-gray text-sm md:text-xs">{props.productType}</div>
                <div className="inline text-custom-black text-3xl font-bold font-fraunces">{props.productName}</div>
                <div className="inline text-custom-gray text-[0.875rem] ">{props.productDesc}</div>
                <div className="flex flex-wrap gap-4 items-center">
                    <span className="inline-block text-custom-green-500 text-3xl font-bold font-fraunces">{props.productPrice}</span>
                    <span className="inline-block line-through text-custom-gray text-sm font-fraunces">{props.productPrice}</span>
                </div>
                <div className="inline text-custom-gray text-sm">
                    <CartBtn>
                        <img className="inline w-5 md:w-4 h-full" src={props.iconSrc} alt="Product Image" />
                         <span className="ml-3">Add To Cart</span>
                    </CartBtn>
    
                </div>
            </div>
        </div>
    )
}

export default BlogPreviewCard

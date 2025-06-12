import ProductPreviewCard from './ProductPreviewCard'
import { products } from '../objects/products'

const CardContainer = () => {
    return (
        <div className="container w-full min-h-screen flex flex-wrap justify-center items-center gap-6 py-6 md:py-10 px-4 md:px-10">

            {products.map((props, index) => {
                return (
                    <ProductPreviewCard
                        key={index}
                        imgSrcDesktop={props.imgSrcDesktop} 
                        imgSrcMobile={props.imgSrcMobile} 
                        iconSrc={props.iconSrc} 
                        productType={props.productType}
                        productName={props.productName}
                        productDesc={props.productDesc}
                        productPrice={props.productPrice}
                        productDiscount={props.productDiscount}
                    />
                )
            })}
        </div>
    )
}

export default CardContainer

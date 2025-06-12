import React from 'react'

/* filtros https://tailwindcss.com/docs/filter-brightness */

const CartBtn = (props) => {
  return (
    <button className="w-full rounded-lg items-center justify-center p-4 md:p-3 bg-custom-green-500 text-custom-white text-sm md:text-xs font-bold
        hover:bg-custom-green-700 hover:transition hover:duration-400 hover:cursor-pointer active:scale-95 active:brightness-80"> 
        <span>{props.children != null ? props.children : props.text}</span>
        {/* aqui a props.children é o texto dentro dos <>'txt'</> do componente */}
    </button> 
  )
}

export default CartBtn

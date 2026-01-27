import React from 'react'

function Card({items}) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-full shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={items.image}
              alt={items.name}
              className="h-60 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {items.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{items.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{items.price} Rs</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card
import React from 'react'

const ListCards = ({title,member,className}) => {
    return (
        <div className={` ${className} bg-center bg-cover px-5 py-8 rounded-3xl bg-gray-100 overflow-hidden shadow-md`}  >
            <div>
                <h2 className='font-medium text-xl' >{title}</h2>
                <h3 className='font-medium text-4xl ' >{member}</h3>
            </div>
        </div>

    )
}

export default ListCards
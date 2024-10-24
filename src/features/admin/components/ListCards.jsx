import React from 'react'

const ListCards = ({title,member,className}) => {
    return (
        <div className={` ${className} bg-center bg-cover px-5 py-8 rounded-3xl bg-gray-100 overflow-hidden shadow-md`}  >
            <div>
                <h4 className='font-medium text-xl' >{title}</h4>
                <h5 className='font-medium text-4xl ' >{member}</h5>
            </div>
        </div>

    )
}

export default ListCards
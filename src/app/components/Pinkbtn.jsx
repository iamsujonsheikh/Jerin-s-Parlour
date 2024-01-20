import Link from 'next/link';
import React from 'react'

const Pinkbtn = ({ title, href }) => {
    return (
        <button className='py-2 px-4 text-slate-100 rounded-md bg-pink-500'>
            <Link href={href}></Link>
            {title}
        </button>
    )
}

export default Pinkbtn;
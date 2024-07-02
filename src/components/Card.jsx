import React, { useState } from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data, reference, onDelete }) => {
    const [desc, setDesc] = useState(data.desc);
    const [editing, setEditing] = useState(false);

    return (
        <motion.div
            drag
            dragConstraints={reference}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
            whileDrag={{ scale: 1.2 }}
            className='flex-shrink relative w-60 h-[290px] rounded-[45px] bg-zinc-800/90 text-white px-8 py-10 overflow-hidden'>
            <FaRegFileAlt />
            {editing ? (
                <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    onBlur={() => setEditing(false)}
                    autoFocus
                    className='w-full mt-5 bg-transparent outline-none text-sm leading-tight font-semibold'
                />
            ) : (
                <p
                    className='text-sm leading-tight mt-5 font-semibold'
                    onDoubleClick={() => setEditing(true)}>
                    {desc}
                </p>
            )}
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between px-8 py-3 mb-5'>
                    <h5>{data.filesize}</h5>
                    <span
                        onClick={onDelete} // Call delete function on click
                        className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer'>
                        {data.close ? <IoClose /> : <MdOutlineFileDownload size="1.1em" color='#fff' />}
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div
                            className={`tag w-full py-4 
                            ${data.tag.tagColor === 'blue' ? "bg-blue-600" : "bg-green-600"} 
                            flex items-center justify-center`}>
                            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                        </div>
                    )
                }
            </div>
        </motion.div>
    )
}

export default Card

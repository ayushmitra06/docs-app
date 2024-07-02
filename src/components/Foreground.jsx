import React, { useRef, useState } from 'react'
import Card from './Card'
import { IoAddCircleOutline } from "react-icons/io5"

const Foreground = () => {
    const ref = useRef(null)
    const [cards, setCards] = useState([
        {
            id: 1,
            desc: "This is the Default Card Description, ALL THE CARDS ARE DRAGGABLE.",
            filesize: ".9 mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            id: 2,
            desc: "This website is maade with Vite.Js(React) which is a next-generation frontend tooling framework.",
            filesize: "1.5 mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "blue"
            }
        },
        {
            id: 3,
            desc: "Framer Motion is a powerful library for creating smooth animations and gestures in React applications.",
            filesize: "4.6 mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
    ]);

    const addCard = () => {
        setCards([
            ...cards,
            {
                id: cards.length + 1, // Ensure a unique ID for each card
                desc: "Edit this description...",
                filesize: "0 mb",
                close: true,
                tag: {
                    isOpen: true,
                    tagTitle: "New Tag",
                    tagColor: "gray"
                }
            }
        ]);
    }

    const deleteCard = (id) => {
        setCards(cards.filter(card => card.id !== id));
    }

    return (
        <div ref={ref} className='flex gap-10 flex-wrap fixed z-[3] top-0 left-0 w-full h-full p-7'>
            {cards.map((item) => (
                <Card
                    key={item.id}
                    reference={ref}
                    data={item}
                    onDelete={() => deleteCard(item.id)} // Pass delete function
                />
            ))}
            <span
                onClick={addCard}
                className='fixed bottom-20 right-20 cursor-pointer hover:scale-105 transition-transform duration-200'>
                <IoAddCircleOutline size="5em" color='gray' />
            </span>
        </div>
    )
}

export default Foreground

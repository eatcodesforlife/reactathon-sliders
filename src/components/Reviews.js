import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'

const Reviews = ({users}) => {

    const [ index, setIndex ] = useState(0)

    const prevButton = (currentIndex) => {
        currentIndex--
        if(currentIndex === -1 ) currentIndex = users.length - 1
        setIndex(currentIndex)
    }
    const nextButton = (currentIndex) => {
        currentIndex++
        if(currentIndex === users.length ) currentIndex = 0
        setIndex(currentIndex)
    }

    useEffect(() => {
        
        let slider = setInterval(() => {
            let nextSlide = index + 1
            if( nextSlide === users.length ) nextSlide = 0
            setIndex( nextSlide )

        }, 4000)

        return () => clearInterval(slider)

    }, [index, users.length])

    return (
        <div className='section-center'>
            {
                users.map(( user, userIndex ) => {
                    const { name, id, image, text, job } = user

                    let position = 'nextSlide'
                    if( index === userIndex ){
                        position = 'activeSlide'
                    }
                    if( userIndex === index - 1 || (index === 0 && userIndex === users.length - 1)){
                        position = 'lastSlide'
                    }
                    return <article key={id} className={position}>
                        <img src={image} alt={name} className='person-img'/>
                        <h4>{name}</h4>
                        <p className="title">{job}</p>
                        <p className="text">{text}</p>
                        <FaQuoteRight className='icon'/>
                    </article>
                    
                })
            }
            <button className="prev">
                <FiChevronLeft  onClick={() => prevButton(index)}/>
            </button>
            <button className="next">
                <FiChevronRight onClick={() => nextButton(index)}/>
            </button>
        </div>
    )
}

export default Reviews

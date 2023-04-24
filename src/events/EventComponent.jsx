import React from 'react'
import SmallCard from './SmallCard'
const EventComponent = ({data}) => {
    console.log('EventComponent',data);
  return (
    <>
        <div className='lg:w-[90%] mx-auto w-full bg-[#f6f8fa]'>
            
            {/* for small card rendering */}

             <div className='w-[30%] overflow-y-auto overflow-x-hidden flex flex-col gap-3'>
                 {
                    data.map((item,index)=>(
                        
                        <SmallCard 
                          key={index}
                          item={item}
                        />
                    ))


                 }
             </div>
            
            {/* details card */}

            <div>
                 
            </div>


        </div>
    </>
  )
}

export default EventComponent
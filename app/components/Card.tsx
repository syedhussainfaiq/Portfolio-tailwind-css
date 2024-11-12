import React from "react";
import Image from "next/image";
import { FiDivideCircle } from 'react-icons/fi';


interface propsType {
    title : string;
    desc : string;
    
    tags : string[];
}

const Card: React.FC<propsType> = ({desc,tags}) => {
  return (
    <div className='border border-accent w-[300px] sm:[350px]'data-aos="zoom-in-down">
        <div>
        <image className='w-[300px] sm-w-[350px] h-auto'
        
        width={350}
        height={350}
        
        /><FiDivideCircle/>
        </div>
        <div className='p-4 space-y-4'>
            <div className='text-4xl font-extralight'></div>
            <div>{desc}</div>
            <div>
                {tags.map((el) =>(
                    <div className='tags' key={el}>
                        {el}

                    </div>))}
            </div>
          </div>
      
    </div>
  )
}

export default Card

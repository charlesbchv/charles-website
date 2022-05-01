import React from 'react';
import SliderContainer, { SliderItem } from './slider'
import Image from 'next/image'


const ClientLogos: React.FC = () => (
    <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={150}>
            <Image 
                src="/assets/trusted/audubon.png" 
                width={150} 
                height={50} 
                alt="Audubon" 
                objectFit="contain"
            />
        </SliderItem>
        <SliderItem width={150}>
            <Image 
                src="/assets/trusted/netflix.png" 
                width={200} 
                height={50} 
                alt="netflix" 
                objectFit="contain"
            />
        </SliderItem>
        <SliderItem width={150}>
            <Image 
                src="/assets/trusted/american_express.png" 
                width={200} 
                height={50} 
                alt="american_express" 
                objectFit="contain"
            />
        </SliderItem>
    </SliderContainer>

    </>

)

export default ClientLogos
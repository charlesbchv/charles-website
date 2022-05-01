import React from "react";
import CarouselItem from "./carousel-item";
import Carousel from "./carousel"
import Review from "./review"


const Testimonials: React.FC = () =>(
    <Carousel className="bg-black text-white py-10 lg:py-20">
        <CarouselItem index={0}>
            <Review by="Axel (showtime)">
                Margelo and Showtime both share the love for high- quality  software and 
                the passion for building something people want.
            </Review>
        </CarouselItem>
    <CarouselItem index={1}>
        <Review by="Axel (showtime)">
            Margelo and Showtime both share the love for high- quality  software and 
            the passion for building something people want.
        </Review>
    </CarouselItem>
    <CarouselItem index={2}>
        <Review by="Axel (showtime)">
            Margelo and Showtime both share the love for high- quality  software and 
            the passion for building something people want.
        </Review>
    </CarouselItem>
    <CarouselItem index={3}>
        <Review by="Axel (showtime)">
            Margelo and Showtime both share the love for high- quality  software and 
            the passion for building something people want.
        </Review>
    </CarouselItem>

    </Carousel>
)

export default Testimonials
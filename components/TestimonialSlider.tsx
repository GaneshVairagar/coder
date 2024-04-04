import  Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"// requires a loader
import ClientReview from "./ClientReview";



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slideToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slideToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slideToSlide: 1
    }
};

export const TestimonialSlider = () => {
  return (
    <div>
        <Carousel
            //additionalTransform={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            //centerMode={false}
            infinite
            responsive={responsive}
            itemClass="item"
        >
            {/* clentreviews */}
            <ClientReview image="/images/avatar-2.png" name="Seed Infotech" role="Full Stack Developer" />
            <ClientReview image="/images/avatar-1.png" name="NPIT Soltions" role="Software Developer"/>
            <ClientReview image="/images/avatar-3.png" name="Future Ready Talent" role="Cloud Developer"/>
           

        </Carousel>
    </div>
  )
}

export default TestimonialSlider
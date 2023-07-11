import HeroSlider, {Slider} from 'hero-slider';


const img1 = "https://res.cloudinary.com/dnvhl9pru/image/upload/v1689051263/FoodW/1_hwj4a6.png";
const img2 = "https://res.cloudinary.com/dnvhl9pru/image/upload/v1689051263/FoodW/2_ln8hym.jpg";
const img3 = "https://res.cloudinary.com/dnvhl9pru/image/upload/v1689051263/FoodW/3_pmccid.png";
const img4 = "https://res.cloudinary.com/dnvhl9pru/image/upload/v1689051245/FoodW/4_lvjfn7.png";
const ImgSlider = () => {
    return(
        <HeroSlider
            slideingAnimation="left_to_right"
            orientation="horizontal"
            initialSlide={1}
            onBeforeChange={(previousSlide, nextSlide)=> console.log("onBeforeChange", previousSlide, nextSlide)}
            onChange={nextSlide=>console.log("onChange", nextSlide)}
            onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
            style={{
                backgroundColor:"rgba(0, 0, 0, 0.33"
            }}
            settings={{
                slidingDuration: 250,
                slidingDelay:100,
                shouldAutoplay:true,
                shouldDisplayButtons:true,
                autoplayDuration: 5000,
                height:"100vh"
            }}
        >
            <Slider
                background={{backgroundImage: img1,
                backgroundAttachment: "fixed"
                }}
            />
            <Slider
                background={{backgroundImage: img2,
                backgroundAttachment: "fixed"
                }}
            />
            <Slider
                background={{backgroundImage: img3,
                backgroundAttachment: "fixed"
                }}
            />
            <Slider
                background={{backgroundImage: img4,
                backgroundAttachment: "fixed"
                }}
            />
        </HeroSlider>
    )
}

export default ImgSlider;
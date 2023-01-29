import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const Carousel = () => {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <StaticImage
                src="../images/slide-1.jpg"
                loading="eager"
                width={1920}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="first slide"
                style={{ marginBottom: `var(--space-3)` }}
            />
            {/* <img
            className="d-block w-100"
            src="../images/example.png"
            alt="first slide"
            /> */}
            </div>
            <div className="carousel-item">
            <StaticImage
                src="../images/slide-2.jpg"
                loading="eager"
                width={1920}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Second"
                style={{ marginBottom: `var(--space-3)` }}
            />
            </div>
            <div className="carousel-item">
            <StaticImage
                src="../images/slide-3.jpg"
                loading="eager"
                width={1920}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Third"
                style={{ marginBottom: `var(--space-3)` }}
            />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</>
  )
}

export default Carousel
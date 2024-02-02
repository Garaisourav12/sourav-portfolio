import React from 'react'
import './style.scss'
import ProjectCard from './projectCard/ProjectCard'
import Wrapper from '../wrapper/Wrapper'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

function Projects() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <IoIosArrowDropleft className='slick-arrow' />,
        nextArrow: <IoIosArrowDropright className='slick-arrow' />
    };

    return (
        <Wrapper>
            <div className='projects'>
                <h2>My Latest Projects</h2>
                <Slider {...settings}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </Slider>
            </div>
        </Wrapper>
    )
}

export default Projects
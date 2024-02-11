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
        dots: true,
        customPaging: (index) => (
            <button className='pointers'>
                <div></div>
            </button>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <IoIosArrowDropleft className='slick-arrow pointers' />,
        nextArrow: <IoIosArrowDropright className='slick-arrow pointers' />
    };

    return (
        <Wrapper>
            <section className='projects' id='projects' name='projects'>
                <h2>Explore My Latest Work</h2>
                <Slider {...settings}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </Slider>
            </section>
        </Wrapper>
    )
}

export default Projects
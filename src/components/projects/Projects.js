import React from 'react'
import './style.scss'
import ProjectCard from './projectCard/ProjectCard'
import Wrapper from '../wrapper/Wrapper'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import yt from '../../assets/yt.png';
import fp from '../../assets/flickipedia.png';
import imb from '../../assets/imagebazzer.png';
import pp from '../../assets/podpulse.png';
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

function Projects() {
    const projects = [
        {
            title: 'Podpulse',
            description: 'PodPulse redefines the podcasting experience, offering users a seamless platform to create, share, and listen to podcasts.',
            image: pp,
            repo_link: 'https://github.com/Garaisourav12/Podpulse',
            live_link: 'https://podpulse-rho.vercel.app/'
        },
        {
            title: 'Flickipedia',
            description: 'A comprehensive movie & tv show information app using React, offering users detailed insights, ratings, trailer and search capabilities for an enriched cinematic experience.',
            image: fp,
            repo_link: 'https://github.com/Garaisourav12/Flickipedia',
            live_link: 'https://flickipedia.vercel.app/'
        },
        {
            title: 'Image Bazzer',
            description: 'The React ImageBazzer project leverages the Unsplash API to dynamically fetch and display a wide array of high-quality images. Users can search for specific images, explore curated collections.',
            image: imb,
            repo_link: 'https://github.com/Garaisourav12/Image-Bazzer',
            live_link: 'https://image-bazzer.vercel.app/'
        },
        {
            title: 'YouTube Clone',
            description: 'YouTube Clone with JavaScript, utilizing APIs to replicate key functionalities of the popular video-sharing platform, including video playback, search.',
            image: yt,
            repo_link: 'https://github.com/Garaisourav12/youtube-clone',
            live_link: 'https://Garaisourav12.github.io/youtube-clone'
        },
    ]

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
        prevArrow: <HiArrowSmLeft className='slick-arrow pointers' />,
        nextArrow: <HiArrowSmRight  className='slick-arrow pointers' />
    };

    return (
        <Wrapper>
            <section className='projects' id='projects' name='projects'>
                <h2>Explore My Latest Work</h2>
                <Slider {...settings}>
                    {
                        projects.map((project, i) => (
                            <ProjectCard project={project} />
                        ))
                    }
                </Slider>
            </section>
        </Wrapper>
    )
}

export default Projects
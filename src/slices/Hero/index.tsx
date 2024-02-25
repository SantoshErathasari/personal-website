'use client';

import { useEffect, useRef } from 'react';
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import gsap from 'gsap';

/**
 * Props for `Hero`.
 */

//47:43
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null)

   useEffect(()=>{
     let ctx = gsap.context(()=>{

      const tl = gsap.timeline()
      tl.fromTo(".name-animation",{
        x: -100, opacity: 0, rotate: -10
      },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        ease: "bounce.out",
        duration: 1,
        transformformOrigin: 'left top',
        delay: 0.5,
        stagger: {
          each: 0.07,
          from: 'random',
        },

      }
      );

      tl.fromTo(".job-title", {
        y:20,
        opacity:0,
        scale:1.2,
      }, {
        opacity: 1,
        y:0,
        duration: 1,
        scale:1,
        ease: "bounce.out",


      })


     }, component)
     return () => ctx.revert();
     }, []);

  //function that makes every letter with individual span

  const renderLetters = (name:KeyTextField, key:string)=>{
    if(!name) return;
    return name.split("").map((letter, index)=>(
      <span key={index} className={'name-animation name-animation-${key} inline-block opacity-0'}>
        {letter}
      </span>
    ))
  }


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className= 'grid min-height-[70vh] grid-cols-1 md:grid-cols-2 items-center'>
        <div className ='col-start-1 md:row-start-1'>

          <h1 className ='mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter' aria-label={slice.primary.santosh + '' + slice.primary.erathasari}>
          <span className ='block text-green-300'>{renderLetters(slice.primary.santosh ,'first')}</span>
          <span className ='-mt-[.2em] block text-green-500'>{renderLetters(slice.primary.erathasari, 'first')}</span>
          </h1>

          <span className='job-title block bg-gradient-to-tr from-green-500 via-lime-200 to-green-500 bg-clip-text text-2x1 font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4x1'>
            {slice.primary.dedicated_student}
            </span>

        </div>
      </div>
    </section>
  );
};


export default Hero;

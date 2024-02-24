import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {

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
    >
      <div className= 'grid min-height-[70vh] grid-cols-1 md:grid-cols-2 items-center'>
        <div className ='col-start-1 md:row-start-1'>

          <h1 className ='mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter' aria-label={slice.primary.santosh + '' + slice.primary.erathasari}>
          <span className ='block text-slate-300'>{renderLetters(slice.primary.santosh ,'first')}</span>
          <span className ='-mt-[.2em] block text-slate-500'>{renderLetters(slice.primary.erathasari, 'first')}</span>
          </h1>

          <span className='block bg-gradient-to-tr from-yellow-500 via-red-200 to-yellow-500 bg-clip-text text-2x1 font-bold uppercase tracking-[.2em] text-transparent opacity-100 md:text-4x1'>{slice.primary.dedicated_student}</span>

        </div>
      </div>
    </section>
  );
};


export default Hero;

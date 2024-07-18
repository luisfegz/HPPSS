import React from 'react';
import Center from './Center';
import Wrapper from './Featured/Wrapper';
import CartIcon from '../icons/CartIcon';
import Link from 'next/link';
import Image from 'next/image';

function Featured({product}) {
  return (
    <div className='bg-black'>
      <Center>
        <Wrapper>
          <div className='flex items-center'>
            <div>
              <h1 className='font-bold md:font-black mb-2 text-lg md:text-xl lg:text-2xl text-white'>
                About Us
              </h1>
              <p className='text-[.6rem] text-white md:text-[1.1rem] lg:text-[1.3rem]'>
                HPPS is an innovative project created by three dedicated students from the 
                Pontificia Universidad Javeriana Cali. Our mission is to revolutionize aquaculture
                by providing a state-of-the-art pisciculture system that caters to both freshwater
                 and saltwater fish.
              </p>
              
            </div>
          </div>
          <div>
            <Image width={400} height={400} className='max-w-[100%] object-cover border-zinc-800 border-4 rounded-2xl' src="FISTER.jpg" alt="Image" />
          </div>
        </Wrapper>
      </Center>
    </div>
  );
}

export default Featured;

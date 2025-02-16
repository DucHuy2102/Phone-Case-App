import Image from 'next/image';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { Check, Star } from 'lucide-react';
import Phone from '../Phone';

const PRText = [
    'High quality, durable material',
    '5 years print warranty',
    'Modern IPhone models supported',
];

const ImageUser = [
    '/users/user-1.png',
    '/users/user-2.png',
    '/users/user-3.png',
    '/users/user-4.jpg',
    '/users/user-5.jpg',
];

export default function Top() {
    return (
        <section>
            <MaxWidthWrapper
                className='pb-24 pt-10 sm:pb-32 lg:pt-24 lg:pb-52
                  lg:grid lg:grid-cols-3 lg:gap-x-0 xl:gap-x-8 xl:pt-32'
            >
                {/* left */}
                <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
                    <div
                        className='relative mx-auto text-center lg:text-left 
                        flex flex-col items-center lg:items-start'
                    >
                        {/* logo phone case app */}
                        <div className='absolute left-0 w-28 -top-20 hidden lg:block'>
                            <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28' />
                            <Image
                                src='/snake-1.png'
                                alt='Logo Snake App'
                                width={150}
                                height={150}
                            />
                        </div>

                        <h1
                            className='relative w-fit tracking-tight text-balance mt-16 
                            font-bold !leading-tight text-5xl text-gray-900 md:text-6xl lg:text-7xl'
                        >
                            Your Image on a{' '}
                            <span className='bg-green-600 px-4 italic text-white rounded-lg p-1'>
                                Custom
                            </span>{' '}
                            Phone Case
                        </h1>
                        <p
                            className='mt-8 text-lg lg:pr-10 max-w-prose text-center 
                            lg:text-left text-balance md:text-wrap'
                        >
                            Capture your favorite moments with your own,{' '}
                            <span className='font-semibold'>one-of-one</span> phone case. CaseCobra
                            allows you to protect your phone with a case that is as unique as you
                            are.
                        </p>

                        {/* features */}
                        <ul
                            className='mt-8 space-y-2 text-left font-medium 
                            flex flex-col items-center sm:items-start'
                        >
                            <div className='space-y-2'>
                                {PRText.map((text, index) => (
                                    <li key={index} className='flex gap-1.5 items-center text-left'>
                                        <Check className='h-5 w-5 shrink-0 text-green-600' />
                                        {text}
                                    </li>
                                ))}
                            </div>
                        </ul>

                        {/* users */}
                        <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                            <div className='flex -space-x-3'>
                                {ImageUser.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image}
                                        width={40}
                                        height={40}
                                        className='inline-block object-cover rounded-full ring-2 ring-slate-100'
                                        alt='Image user'
                                    />
                                ))}
                            </div>

                            <div className='flex flex-col justify-between items-center gap-y-1 sm:items-start'>
                                <div className='flex gap-0.5'>
                                    {[...Array(5)].map((_, index) => (
                                        <Star
                                            key={index}
                                            className='h-4 w-4 text-green-600 fill-green-600'
                                        />
                                    ))}
                                </div>
                                <p>
                                    <span className='font-semibold'>3.697</span> happy customers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div
                    className='w-full h-fit col-span-full lg:col-span-1 flex justify-center 
                    px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20'
                >
                    <div className='relative md:max-w-xl'>
                        <Image
                            src='/your-image.png'
                            alt='Your image'
                            width={160}
                            height={160}
                            className='absolute lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
                        />
                        <Image
                            src='/line.png'
                            alt='Line'
                            width={80}
                            height={80}
                            className='absolute -left-6 -bottom-6 select-none'
                        />
                        <Phone className='w-64' imgSrc='/testimonials/1.jpg' />
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

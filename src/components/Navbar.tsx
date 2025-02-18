import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
    const user = undefined;
    const isAdmin = undefined;

    return (
        <nav
            className='sticky z-[100] w-full h-14 inset-x-0 top-0 
        border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'
        >
            <MaxWidthWrapper>
                <div className='flex items-center justify-between h-full w-full'>
                    <Link
                        href={'/'}
                        className='flex text-sm md:text-lg lg:text-xl xl:text-2xl z-40 font-semibold'
                    >
                        case
                        <span className='text-green-600'>cobra</span>
                    </Link>

                    <div className='h-full flex items-center space-x-4'>
                        {user ? (
                            <>
                                <Link
                                    href={'/api/auth/logout'}
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        size: 'sm',
                                    })}
                                >
                                    Sign out
                                </Link>
                                {isAdmin && (
                                    <Link
                                        href={'/api/auth/logout'}
                                        className={buttonVariants({
                                            variant: 'ghost',
                                            size: 'sm',
                                        })}
                                    >
                                        Dashboard ✨
                                    </Link>
                                )}
                                <Link
                                    href={'/configure/upload'}
                                    className={buttonVariants({
                                        className: 'hidden sm:flex items-center gap-1',
                                        size: 'sm',
                                    })}
                                >
                                    Create a case
                                    <ArrowRight className='ml-1.5 h-5 w-5' />
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href='/api/auth/register'
                                    className={buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost',
                                    })}
                                >
                                    Sign up
                                </Link>

                                <Link
                                    href='/api/auth/login'
                                    className={buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost',
                                    })}
                                >
                                    Login
                                </Link>

                                <div className='h-8 w-px bg-zinc-200 hidden sm:block' />

                                <Link
                                    href='/configure/upload'
                                    className={buttonVariants({
                                        size: 'sm',
                                        className: 'hidden sm:flex items-center gap-1',
                                    })}
                                >
                                    Create a case
                                    <ArrowRight className='ml-1.5 h-5 w-5' />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
}

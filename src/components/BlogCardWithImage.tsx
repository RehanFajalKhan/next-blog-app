import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import gitbook from '../../public/gitbook.svg'
interface IPropType {
    article: IArticle;
}

const BlogCardWithImage = ({article}: IPropType) => {
  return (
    <div className='bg-gradient-to-r from-primary-dark to-primary  rounded-md flex items-center justify-evenly h-44'>  {/*from-violet-500 to-violet-900*/}
            <Link href='#'>
                <span className='text-2xl w-2/3 text-white font-bold after:content-[""] after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:mt-2 cursor-pointer '>
                    {article.attributes.Title}
                </span>
            </Link>
            <Image src={gitbook} width={140} height={140} alt='images'/>
    </div>
  )
  
}

export default BlogCardWithImage
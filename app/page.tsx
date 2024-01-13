import Image from 'next/image';
import blogimage from './assets/illustration-article.svg'
import avatar from './assets/image-avatar.webp'
import './globals.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-40">
    <div className='bg-white rounded-xl border hover-shadow border-black h-96 w-72 p-4 space-y-2 custom-box-shadow'>
        <div className='rounded-xl'>
          <Image 
            src={blogimage}
            alt="Illustration"
            width={256} // Set the desired width
            height={256} // Set the desired height
            layout="responsive" // This makes the image responsive
            className='rounded-md mb-6'
          />
        </div>
        <div>
        <div className='bg-[color:hsl(47,88%,63%)] rounded font-bold px-3 p-1 text-sm inline-flex flex-row'>Learning</div>
        </div>
        <div className='text-xs'>Published 21 Dec 2023</div>
        <button className='font-extrabold hover:text-[color:hsl(47,88%,63%)]'>HTML & CSS foundations</button>
        <div className='text-xs font-thin mb-2'>These languages are the backbone of every website, defining structure, content, and presentation. </div>
        <div className='py-2'>
        <div className='flex flex-row items-center text-center text-xs h-5 w-5 gap-2'>
          <Image 
            src={avatar}
            alt="Avatar"            
            layout="responsive"
            className="flex-shrink-0"
          />
          <span className="whitespace-nowrap font-extrabold">Greg Hooper</span>
          </div>
        </div>
      </div>
    </main>
  );
}

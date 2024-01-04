import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-[90vh] bg-[url("/assets/banner2.jpg")] bg-no-repeat bg-cover '>
      <div className='mx-auto max-w-[1280px] w-full text-center flex flex-col py-20 px-2 text-white'>
      <h1 className='text-4xl font-extrabold py-4'>FIND THE <span className='text-orange-600'>BEST SCHOOL</span> FOR YOU</h1>
      <p className='text-xl leading-9'>Search the best schools from a list of 25,000 plus schools located across India. Edustoke offers personalized <br /> counseling support to help you find exactly what you're looking for.</p>
      <button className='bg-orange-600 w-max mx-auto mt-10 py-2 px-5 text-xl font-semibold rounded-xl'>Search School</button>
      </div>
    </div>
  )
}

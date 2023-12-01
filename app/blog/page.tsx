import Image from "next/image";
import HomeImage from '../../public/assests/homeImage.png'
import Link from "next/link";
import data from '../../public/blogData'
export default function Blog() {
  return (
    <>
      <div className="lg:mx-[245px]">
        <Image src={HomeImage} alt="HomeImage" className="mt-14 " />
        <p className="mt-10 text-black text-center font-newl text-3xl md:text-4xl lg:text-5xl font-bold leading-normal">A few words about this blog platform, Ghost, and how this site was made</p>
        <p className=" mt-6 mb-12 text-black text-center font-sfmono text-sm md:text-base font-normal leading-[170%]">Why Ghost (& Figma) instead of Medium, <br /> WordPress or other options? </p>
        <hr className="border-[2px] border-black md:w-[640px] md:mx-[100px]" />
        <h1 className="text-black text-center font-newl font-bold text-3xl sm:text-5xl mt-14 mb-7 sm:mt-16 sm:mb-10">All articles</h1>
        {/* Blog Post Starts Here */}
        <div>
          {data.map((post) => (
            <div key={post.id} className="mb-6">
              <Link href={`/blog/${post.slug}`}>

                <div>
                  <div><div className="">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={304} // adjust the width as needed
                      height={176} // adjust the height as needed
                      className="mr-4 text-center md:mx-[250px]"
                    />
                    <ul><li className=" w-[304px] md:mx-[250px] text-black font-sfdisplayh text-xl font-medium leading-[150%] text-center">{post.title}</li>
                    </ul>  </div></div>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

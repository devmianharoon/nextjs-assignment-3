import Image from "next/image";
import HomeImage from '../../public/assests/homeimage.png'
import Link from "next/link";
import client from "./../lib/contentfulClient";


const fetchBlogData = async () => {
  let blogData = await client.getEntries({ content_type: 'blog' })
  // console.log('bolg Data ', blogData.items[0].fields.title);
  const data = blogData.items.map((item: any) => {
    return {
      image: item.fields.image.fields.file.url,
      title: item.fields.title,
      description: item.fields.description,
      slug:item.fields.slug
    }
  })
  return data
}

export default async function Blog() {
  const data = await fetchBlogData()
  console.log(data);

  return (
    <>
      <div className="lg:mx-[245px]">
        <Image src={HomeImage} alt="HomeImage" className="mt-14 " />
        <p className="mt-10 text-black text-center font-newl text-3xl md:text-4xl lg:text-5xl font-bold leading-normal">A few words about this blog platform, Ghost, and how this site was made</p>
        <p className=" mt-6 mb-12 text-black text-center font-sfmono text-sm md:text-base font-normal leading-[170%]">Why Ghost (& Figma) instead of Medium, <br /> WordPress or other options? </p>
        <hr className="border-[2px] border-black md:w-[640px] md:mx-[100px]" />
        <h1 className="text-black text-center font-newl font-bold text-3xl sm:text-5xl mt-14 mb-7 sm:mt-16 sm:mb-10">All articles</h1>
        {/* Blog Post Starts Here */}

        <div className="grid grid-cols-2">
          {data.map((post: any) => (
            <div key={post.id} className="mb-6">
              <Link href={`/blog/${post.slug}`}>
                  <div className="">
                    <Image
                      src={`https://${post.image}`}
                      alt={post.title}
                      width={404} 
                      height={240} 
                    />
                      <h1 className="text-center  text-black font-sfdisplayh text-xl font-medium leading-[150%] ">{post.title}</h1>
                  </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

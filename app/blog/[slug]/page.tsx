import HomeComp from "../../(componant)/homeComp/pag";
import Image from "next/image";
import auther from '../../../public/assests/auther.png'
import Twiter from '../../../public/assests/vector.svg'
import fb from '../../../public/assests/facebook1.svg'
import Reactangel from '../../../public/assests/Rectangle8.png'
import client from "./../../lib/contentfulClient";

const fetchBlogData = async () => {
    let blogData = await client.getEntries({ content_type: 'blog' })
    const data = blogData.items.map((item: any) => {
        return {
            image: item.fields.image.fields.file.url,
            title: item.fields.title,
            description: item.fields.description,
            slug: item.fields.slug
        }
    })
    return data
}

export default async function Blogs({ params }: any) {

    const data = await fetchBlogData();
    const post: any = data.find((p: any) => (p.slug) === params.slug)
    console.log(post);
    console.log(params.slug);
    return (
        <>
            <HomeComp />

            <div className="lg:mx-[245px]">
                <h1 className="text-center text-balack font-sfdisplayh font-bold text-3xl laeading-[160%] mt-14 mb-6">
                    {post.title}
                </h1>
                <Image
                      src={`https://${post.image}`}
                      alt={post.title}
                      width={604} 
                      height={376} 
                    />
                <p className="font-new text-black font-normal text-xl  leading-[170%] my-14">
                    {post.description}
                </p>
                <div className=" flex justify-between">

                    <div className="flex gap-4">
                        <div >
                            <Image src={auther} alt="auther"></Image>
                        </div>
                        <div>
                            <p className="text-black font-sfdisplayh font-bold text-base uppercase">Mika MAtikainen</p>
                            <p className="text-black font-sfdisplayl font-normal  text-base ">Apr 15, 2020 · 4 min read</p>
                        </div>
                    </div>
                    <div className="flex gap-[50px]">
                        <Image src={fb} alt="FbLogo"></Image>
                        <Image src={Twiter} alt="twiterLogo"></Image>
                    </div>
                </div>



                {/* <Image src={Reactangel} alt="Reactangel"></Image> */}
                <p className="font-new text-black font-normal text-xl  leading-[170%] my-14">Thanks for reading, <br />Mika</p>
                <div className="flex justify-around">
                    <div className="flex  gap-2">
                        <Image src={fb} alt="fb "></Image>
                        <p className="text-black font-sfdisplayh font-medium leading-[160%] text-base">Share on Facebook</p>
                    </div>
                    <div className="flex gap-2">
                        <Image src={Twiter} alt="fb "></Image>
                        <p className="text-black font-sfdisplayh font-medium leading-[160%] text-base">Share on Twitter</p>
                    </div>
                </div>
            </div>
        </>
    )
}
import HomeComp from "../../(componant)/homeComp/pag";
import Image from "next/image";
import auther from '../../../public/assests/auther.png'
import Twiter from '../../../public/assests/vector.svg'
import fb from '../../../public/assests/facebook 1.svg'
import Reactangel from '../../../public/assests/Rectangle 8.png'

export default function Blogs() {

    return (
        <>
            <HomeComp />
            <div className="lg:mx-[245px]">
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
                <p className="font-new text-black font-normal text-xl  leading-[170%] my-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus. </p>
                <h1 className="text-balack font-sfdisplayh font-bold text-3xl laeading-[160%] mt-14 mb-6">Next on the pipeline</h1>
                <p className="font-new text-black font-normal text-xl  leading-[170%] my-14">Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <br /> Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. </p>
                <Image src={Reactangel} alt="Reactangel"></Image>
                <p className="font-new text-black font-normal text-xl  leading-[170%] my-14">Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
                <br /> <br /> In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.</p>
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
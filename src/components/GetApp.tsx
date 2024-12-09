import styles, { layout } from "@/styles"
import Button from "./Button"

const GetApp = () => {
    return (
        <section id="About" className={`${layout.sectionReverse} items-center justify-around xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-col mx-4 ml-8">
                <h3 className="font-outfit font-semibold tracking-widest uppercase sm:text-[18px] text-[16px]
                 text-tertiary sm:leading-[27.8px] leading-[20px]">
                    Get our app
                </h3>
                <h2 className={`${styles.heading2} md:text-[56px] text-[50px] font-semibold sm:leading-[90px] leading-[70px] capitalize`}>
                    Get our app
                </h2>
                <p className={`${styles.paragraph} text-dimWhite mx-4 mt-4 mb-6`}>
                    With our easy-to-use platform, you can <br className="ss:block hidden" />
                    buy or sell assets from anywhere in the  <br className="ss:block hidden" />
                    world, at any time.
                </p>
                <Button
                    text="VIEW OUR PRICING"
                    bgColor="bg-secondary"
                    textColor="text-white"
                    borderRadius="50px"
                    minWidth="250px"
                    maxWidth="350px"
                />
            </div>
            <img src="/icons/mobile.svg" alt="analytics" className="w-[528px] object-contain" />
        </section >
    )
}

export default GetApp

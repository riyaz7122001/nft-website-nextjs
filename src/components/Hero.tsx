import styles from "@/styles";
import Button from "./Button";

const Hero = () => {
    return (
        <section id="Home" className={`flex md:flex-row flex-col ${styles.paddingY} md:my-16 my-0`} >
            <div className="flex flex-1 w-full  flex-col justify-between items-start xl:px-0 sm:px-16 px-6 md:gap-6 gap-8">
                <h1 className={`${styles.heading2} sm:text-[84px] text-[70px] font-semibold sm:leading-[116px] leading-[70px]`}>
                    Discover <br className="ss:block hidden" />
                    And Collect <br className="ss:block hidden" />
                    Rare NFTs
                </h1>
                <p className={`${styles.paragraph} text-dimWhite`}>
                    The most secure marketplace for buying <br className="ss:block hidden" />
                    and selling unique crypto assets.
                </p>
                <div className="flex md:flex-row flex-wrap gap-10 mt-4">
                    <Button
                        text="BUY NFTS"
                        bgColor="bg-secondary"
                        textColor="text-white"
                        borderRadius="50px"
                    />
                    <Button
                        text="SELL NFTS"
                        bgColor="transparent"
                        textColor="text-white"
                        borderRadius="50px"
                        variant="secondary"
                    />
                </div>
            </div>
            <div className="flex flex-1 w-full justify-center items-center xl:px-0 sm:px-16 px-6">
                <img src="/icons/hero.svg" alt="hero" />
            </div>
            <div className="absolute z-[1] w-[40%] h-[35%] left-[-10%] top-[-20%] pink__gradient"></div>
            <div className="absolute z-[2] w-[30%] h-[35%] top-10 white__gradient"></div>

        </section >
    )
}

export default Hero;

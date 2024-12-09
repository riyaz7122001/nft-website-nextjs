import styles, { layout } from "@/styles"
import Button from "./Button"

const Analytics = () => {
    return (
        <section id="About" className={`${layout.section} items-center justify-around xl:px-0 sm:px-16 px-6`}>
            <img src="/icons/analytics.svg" alt="analytics" className="w-[528px] object-contain" />
            <div className="flex flex-col mx-4 ml-8">
                <h3 className="font-outfit font-semibold tracking-widest uppercase sm:text-[18px] text-[16px]
                 text-tertiary sm:leading-[27.8px] leading-[20px]">
                    Analytics
                </h3>
                <h2 className={`${styles.heading2} md:text-[56px] text-[50px] font-semibold sm:leading-[90px] leading-[70px]`}>
                    Built-In Analytics To <br className="md:block hidden" />
                    Track Your Nfts <br className="md:block hidden" />
                </h2>
                <p className={`${styles.paragraph} text-dimWhite mx-4 mt-4 mb-6`}>
                    Use our built-in analytics dashboard to <br className="ss:block hidden" />
                    pull valuable insights and monitor the <br className="ss:block hidden" />
                    value of your Krypto portfolio over time.
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
        </section >
    )
}

export default Analytics

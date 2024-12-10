import styles from "@/styles";
import Button from "./Button";

const CallToAction = () => {
    return (
        <section className="flex flex-1 flex-col sm:py-16 py-6 mt-[76px] sm:px-16 px-6 xl:px-0 relative md:my-16 my-6">
            <div className="shadow-xl rounded-xl blue-card w-full max-h-[416px] flex flex-col justify-center items-center sm:py-16 py-8">
                <h3 className="font-outfit font-semibold tracking-widest uppercase sm:text-[18px] text-[15px]
                 text-black sm:leading-[27.8px] leading-[20px]">
                    Are you ready
                </h3>
                <h2 className={`${styles.heading2} text-center md:text-[56px] text-[40px] font-semibold sm:leading-[90px] leading-[70px] capitalize mb-6`}>
                    Be a part of the <br className="sm:block" />
                    Next big thing
                </h2>
                <Button
                    text="GET STARTED"
                    bgColor="bg-primary"
                    textColor="text-white"
                    borderRadius="50px"
                    minWidth="250px"
                />
            </div>
        </section>
    )
}

export default CallToAction;

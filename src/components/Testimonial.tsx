import styles, { layout } from "@/styles";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
        <section className={`flex flex-col justify-center items-center w-full ${styles.marginY} ${styles.paddingY} mt-[76px]`}>
            <h3 className="font-outfit font-semibold tracking-widest uppercase sm:text-[18px] text-[16px]
                 text-tertiary sm:leading-[27.8px] leading-[20px]">
                testimonials
            </h3>
            <h2 className={`${styles.heading2} text-center md:text-[56px] text-[50px] font-semibold sm:leading-[90px] leading-[70px] capitalize`}>
                Read what others <br className="sm:block hidden" />
                have to say
            </h2>
            <div className="flex sm:flex-row flex-col flex-wrap justify-between gap-6 mt-12">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </section>
    )
}

export default Testimonials;

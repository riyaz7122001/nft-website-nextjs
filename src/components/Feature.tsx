const Feature = () => {
    return (
        <section id="Feature" className="flex flex-col flex-wrap w-full md:my-16 my-6 relative xl:px-0 sm:px-16 px-6">
            <div>
                <h3 className="font-outfit font-semibold tracking-widest uppercase sm:text-[18px] text-[16px]
                 text-tertiary sm:leading-[27.8px] leading-[20px]">
                    Featured On
                </h3>
                <div className="flex flex-1 flex-wrap justify-around sm:py-6 sm:px-8 px-6 py-4 gap-4 rounded-lg my-4 feedback-card shadow-lg">
                    <img src="/icons/brand1.svg" alt="brand1" />
                    <img src="/icons/brand2.svg" alt="brand2" />
                    <img src="/icons/brand3.svg" alt="brand3" />
                    <img src="/icons/brand4.svg" alt="brand4" />
                </div>
            </div>
        </section>
    )
}

export default Feature;

const TestimonialCard = () => {
    return (
        <div className="mx-6 max-w-[350px] mt-[76px]">
            <div className="relative flex flex-col bg-[#302863] py-16 px-8 rounded-2xl gap-6 text-center">
                <img
                    className="rounded-full w-[160px] h-[160px] object-contain bg-transparent absolute opacity-[0.7] z-[3]
                     top-[-80px] left-1/2 transform -translate-x-1/2"
                    src="/icons/people.png"
                    alt="Person"
                />
                <div
                    className="absolute w-[40px] h-[40px] bg-[#85CECF] rounded-full top-[-90px] left-[60%] shadow-sm z-[2]"
                />
                <h4 className="font-semibold text-[18px] sm:leading-[27.8px] leading-[24px] uppercase mt-8">
                    Olivia Cole
                </h4>
                <p className="font-normal text-dimWhite text-[16px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quam sequi voluptate magnam
                    porro repudiandae aut sed accusantium consequatur nesciunt placeat a, praesentium ipsam eveniet.
                </p>
            </div>
        </div>
    );
};

export default TestimonialCard;

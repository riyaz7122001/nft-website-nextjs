import Button from "./Button";

const Footer = () => {
    return (
        <footer id="footer" className="sm:py-16 py-6 xl:px-0 sm:px-16 px-6 mt-[76px] gap-20 flex md:flex-row flex-col w-full">
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col flex-wrap justify-between items-start">
                    <h4>Krypto</h4>
                </div>
                <div className="flex flex-col flex-wrap items-start gap-4">
                    <h4>Krypto</h4>
                    <ul className="flex flex-col justify-between gap-4">
                        <li>Home</li>
                        <li>About</li>
                        <li>Buy Nfts</li>
                        <li>Sell Nfts</li>
                    </ul>
                </div>
                <div className="flex flex-col flex-wrap items-start gap-4">
                    <h4>Market</h4>
                    <ul className="flex flex-col justify-between gap-4">
                        <li>Browse Nfts</li>
                        <li>Buy Nfts</li>
                        <li>Sell Nfts</li>
                    </ul>
                </div>
                <div className="flex flex-col flex-wrap items-start gap-4">
                    <h4>Contact</h4>
                    <ul className="flex flex-col justify-between gap-4">
                        <li>Email</li>
                        <li>Linkedin</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col flex-wrap items-start gap-4 w-full">
                <h4 className="capitalize">Join our newsletter</h4>
                <div className="bg-[#302863] rounded-full py-[18px] px-10 min-w-[340px] w-full relative">
                    <span className="text-tertiary">Email Address</span>
                    <Button
                        text="Submit"
                        styles="absolute right-0 top-1/2 transform -translate-y-1/2"
                        height="50"
                        width="70"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

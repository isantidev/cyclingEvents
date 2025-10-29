import Button from "@modules/web/components/Button/Button";

type RaceCaptionProps = {
    title?: string;
    date?: string;
    className?: string;
    href?: string;
};

const RaceCaption = ({
    title = "Lorem ipsum dolor sit",
    date = "veniam eligendi corporis ",
    className = "",
    href,
}: RaceCaptionProps) => {
    return (
        <>
            <div
                className={
                    "absolute bottom-0 left-0 flex flex-col w-full p-6 md:p-10 gap-2 justify-end" +
                    " " +
                    className
                }
            >
                <h3
                    aria-label="race-title"
                    className="font-extrabold text-4xl md:text-5xl xl:text-6xl tracking-tight text-white"
                >
                    {title}
                </h3>
                <p
                    aria-label="race-date"
                    className="font-light text-lg md:text-2xl text-white/80 pb-2 md:pb-4"
                >
                    {date}
                </p>
                <Button href={href}>Conoce más...</Button>
            </div>
        </>
    );
};

const HeroBanner = () => {
    return (
        <section className="relative max-w-[1600px] w-full aspect-3/5 md:aspect-video xl:aspect-9/4 overflow-hidden rounded-xl">
            <picture className="absolute inset-0 size-full">
                <source
                    srcSet="https://imgs.search.brave.com/-uouqoCsoDhSOT20M6aCLYmobYMV0JJh5yHGXUt5mJ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5qRTFORE00/WWprdE5EWmhOeTAw/WVRCakxUaGxObVV0/Wm1Vd01HSXpZV1Zr/TURNeVhrRXlYa0Zx/Y0djQC5qcGc"
                    media="(width <= 767px)"
                />
                <img
                    src="https://imgs.search.brave.com/OmSvzmQH1CIk1KjxWa6au7BmRqmXx_rRydK3Owh9IsY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcGly/b2JpY3ljbGVzLmNv/bS9jZG4vc2hvcC9m/aWxlcy9qcGVnLW9w/dGltaXplcl9iaWNp/Y2xldGFfbXRiX291/dGRvb3JfLTEyLmpw/Zz9jcm9wPWNlbnRl/ciZoZWlnaHQ9MjQ4/OCZ2PTE3NTMwNTQ5/NTQmd2lkdGg9Mzcz/Mg"
                    alt=""
                    className="size-full object-cover"
                />
            </picture>
            <span className="absolute size-full bg-linear-to-tr from-zinc-950 to-transparent"></span>
            <RaceCaption />
        </section>
    );
};

export default HeroBanner;

import { Division, CustomImage, Text } from "../../atoms";
import { Button, CircleButton } from "../../molecules"
import Link from "next/link";
import bg_ticket from "../../../media/bg-ticket.png";
import calaender from "../../../media/Icon awesome-calendar-check.svg";
import location from "../../../media/Icon material-location-on.svg";
import next from "../../../media/next.png";

export const Announcement = props => {
    return (
        <Division divVariant="announcement-ticket-wrapper bg-image">
            <Division divVariant="flex lg:flex-row md:flex-row xs:flex-col sm:flex-col justify-evenly pt-3 pb-10 px-30 lg:items-end md:items-end sm:items-center announcement-ticket-container">
                <Division divVariant="flex flex-col announcement-ticket-col1">
                    <Division divVariant="flex flex-row md:justify-end justify-center items-center gap-1 announce-counter">
                        <Division divVariant="flex flex-col items-center lg:leading-8">
                            <Text textVariant="font-extrabold counter-text">89</Text>
                            <Text textVariant="font-bold counter-slogan">DAYS</Text>
                        </Division>
                        <Division divVariant="flex flex-col items-center lg:leading-8">
                            <Text textVariant="font-extrabold counter-text">11</Text>
                            <Text textVariant="font-bold counter-slogan">HOURS</Text>
                        </Division>
                        <Division divVariant="flex flex-col items-center lg:leading-8">
                            <Text textVariant="font-extrabold counter-text">11</Text>
                            <Text textVariant="font-bold counter-slogan">MINUTES</Text>
                        </Division>
                        <Division divVariant="flex flex-col items-center lg:leading-8">
                            <Text textVariant="font-extrabold counter-text">25</Text>
                            <Text textVariant="font-bold counter-slogan">SECONDS</Text>
                        </Division>
                    </Division>
                    <Division divVariant="md:text-right text-center announce-last-date">
                        <Text textVariant="font-extrabold text-blue-40 submission-text font-worksans">Last Date of Application Submission is 15th august 2022</Text>
                    </Division>
                    <Division divVariant="flex flex-col md:items-end items-center announcement-ticket-calender">
                        <Division divVariant="flex flex-row gap-1">
                            <Text textVariant="font-worksans font-normal">17th - 19th Sep 2022</Text>
                            <CustomImage imageVariant="" href={calaender} />
                        </Division>
                        <Division divVariant="flex flex-row gap-1">
                            <Text textVariant="font-worksans font-normal">Silicon Valley, Santa Clara USA</Text>
                            <CustomImage imageVariant="" href={location} />
                        </Division>
                    </Division>
                </Division>
                <Division divVariant="announcement-ticket-col2">
                    <Link href="/register">
                        <Button buttonVariant="font-bold font-robotoCondensed rounded btn-bn-announce cursor-pointer bg-blue-20 text-hr hover:text-white duration-500">
                            BOOK NOW
                        </Button>
                    </Link>
                </Division>
            </Division>
        </Division>
    );
};



export const AnnouncementSecondary = props => {
    return (
        <Division divVariant={` flex flex-row justify-center items-center sm:px-10 md:px-16 lg:px-20 3xl:px-39 bg-blue-20`}>
            <Division divVariant="flex flex-col justify-center items-left bg-image-secondary sm:px-5 gap-2">

                <Division divVariant="flex flex-col lg:flex-row items-center lg:justify-end lg:gap-2">
                    <Division divVariant="flex flex-row gap-1">
                        <Text textVariant="font-worksans font-normal text-date_color text-14px xs:text-16px">17th - 19th Sep 2022</Text>
                        <CustomImage imageVariant="" href={calaender} />
                    </Division>
                    <Division divVariant="flex flex-row gap-1">
                        <Text textVariant="font-worksans font-normal text-date_color text-14px xs:text-16px">Silicon Valley, Santa Clara USA</Text>
                        <CustomImage imageVariant="" href={location} />
                    </Division>
                </Division>

                {/* text-20px sm:text-25px md:text-30px lg:text-36px 2xl:text-50px */}
                {/* style={{ fontSize: '3.0vw' }} */}
                <Division divVariant="flex flex-wrap justify-center lg:pl-10">
                    <Text textVariant="font-extrabold text-blue-40 text-20px sm:text-25px md:text-30px lg:text-36px 2xl:text-50px text-center lg:text-right">Last Date of Application Submission is 15th august 2022</Text>
                </Division>

                <Division divVariant="flex flex-row justify-center lg:justify-end items-center gap-1 xs:gap-4">
                    <Division divVariant="flex flex-row justify-center items-center gap-1">
                        <Division divVariant="flex flex-col items-center lg:leading-8">
                            <Text textVariant="font-extrabold lg:text-36px text-20px text-blue-20">89</Text>
                            <Text textVariant="font-normal lg:text-12px text-6px text-date_color">DAYS</Text>
                        </Division>
                        <Division divVariant="flex flex-col items-center lg:leading-8">
                            <Text textVariant="font-extrabold lg:text-36px text-20px text-blue-20">11</Text>
                            <Text textVariant="font-normal lg:text-12px text-6px text-date_color">HOURS</Text>
                        </Division>
                        <Division divVariant="flex flex-col items-center lg:leading-8">
                            <Text textVariant="font-extrabold lg:text-36px text-20px text-blue-20">11</Text>
                            <Text textVariant="font-normal lg:text-12px text-6px text-date_color">MINUTES</Text>
                        </Division>
                        <Division divVariant="flex flex-col items-center lg:leading-8">
                            <Text textVariant="font-extrabold lg:text-36px text-20px text-blue-20">25</Text>
                            <Text textVariant="font-normal text-6px lg:text-12px text-date_color">SECONDS</Text>
                        </Division>

                    </Division>
                    <Division divVariant="flex justify-end items-center gap-1 max-w-340 w-full">
                        <Button className="flex flex-row items-center justify-center w-full py-1 sm:py-1-2 text-hr font-bold font-robotoCondensed bg-blue-20 rounded text-14px lg:text-20px cursor-pointer buttonTertiaryAnimation">
                            BOOK NOW
                        </Button>
                    </Division>

                    {/* px-2 sm:px-5 lg:px-8 py-1 sm:py-1-2 */}
                </Division>
            </Division>
        </Division>
    );
};
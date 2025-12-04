"use client";

import review from "../data/reviews.json";
import Marquee from "./ui/marquee";
import { cn } from "@/lib/utils";

const firstRow = review.slice(0, review.length / 2);
const secondRow = review.slice(review.length / 2);

interface ReviewCardProps {
    img: string;
    name: string;
    username: string;
    body: string;
}

const ReviewCard = ({ img, name, username, body }: ReviewCardProps) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer h-48 sm:h-52 overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gradient-to-br from-sky-100 to-orange-100 hover:bg-gray-950/[.02]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.05] dark:hover:bg-gray-50/[.1]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="Testimonial" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-4 text-xs sm:text-sm leading-relaxed">{body}</blockquote>
        </figure>
    );
};

export function Testimonials() {
    return (
        <div className="relative flex h-auto mt-2 sm:mt-10 w-full flex-col overflow-hidden rounded-lg">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 sm:w-1/3 bg-gradient-to-r from-blue-100 dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 sm:w-1/3 bg-gradient-to-l from-blue-100 dark:from-background"></div>
        </div>
    );
}


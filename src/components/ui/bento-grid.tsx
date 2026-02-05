"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className={cn(
                "row-span-1 rounded-3xl group/bento hover:shadow-2xl transition duration-300 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 shadow-blue-500/10",
                "glass-panel border-white/5", // Kept previous glass style
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="flex items-center gap-2">
                    {icon}
                    <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
                        {title}
                    </div>
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-gray-400 mt-2">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};

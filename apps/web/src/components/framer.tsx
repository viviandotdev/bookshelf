'use client';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { ReactNode, useState } from 'react';
import { Tab } from '@/hooks/use-tabs';
import classNames from 'classnames';
import { cn } from '../lib/utils';

const transition = {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.15,
};

type Props = {
    selectedTabIndex: number;
    tabs: Tab[];
    setSelectedTab: (input: [number, number]) => void;
};

export const Tabs = ({
    tabs,
    selectedTabIndex,
    setSelectedTab,
}: Props): JSX.Element => {
    const [hoveredTab, setHoveredTab] = useState<number | null>(null);
    return (
        <motion.nav
            className='relative z-0 flex shrink-0 items-center justify-start border-b py-2'
            onHoverEnd={() => setHoveredTab(null)}
        >
            <LayoutGroup id='tabs'>
                {tabs.map((item, i) => {
                    return (
                        <motion.button
                            key={i}
                            className={classNames(
                                'text-md relative flex h-8 cursor-pointer select-none items-center justify-center rounded-md px-4 text-sm transition-colors',
                                {
                                    'text-beige-700': hoveredTab === i || selectedTabIndex === i,
                                }
                            )}
                            onHoverStart={() => setHoveredTab(i)}
                            onFocus={() => setHoveredTab(i)}
                            onClick={() => {
                                setSelectedTab([i, i > selectedTabIndex ? 1 : -1]);
                            }}
                        >
                            <span className='z-20'>{item.label}</span>

                            <AnimatePresence>
                                {i === selectedTabIndex ? (
                                    <div className=''>
                                        <motion.div
                                            transition={transition}
                                            layoutId='underline'
                                            className={cn(
                                                'absolute bottom-[-9.5px] left-0 right-0 z-10 mr-0 border-b-2 border-beige-700'
                                            )}
                                        />
                                    </div>
                                ) : null}
                                {i === hoveredTab ? (
                                    <motion.div
                                        className='absolute bottom-0 left-0 right-0 top-0 z-10 rounded-md bg-beige-100'
                                        initial={false}
                                        animate={{
                                            opacity: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                        }}
                                        transition={transition}
                                        layoutId='hover'
                                    />
                                ) : null}
                            </AnimatePresence>
                        </motion.button>
                    );
                })}
            </LayoutGroup>
        </motion.nav>
    );
};

const Content = ({
    children,
    className,
    selectedTabIndex,
    direction,
}: {
    direction: number;
    selectedTabIndex: number;
    children: ReactNode;
    className?: string;
}): JSX.Element => {
    return (
        // <AnimatePresence mode='wait' custom={direction}>
        <motion.div
            key={selectedTabIndex}
            // variants={{
            //   enter: (direction) => ({
            //     opacity: 0,
            //     x: direction > 0 ? 100 : -100,
            //     scale: 0.8,
            //   }),
            //   center: { opacity: 1, x: 0, scale: 1, rotate: 0 },
            //   exit: (direction) => ({
            //     opacity: 0,
            //     x: direction > 0 ? -100 : 100,
            //     scale: 0.8,
            //     position: 'absolute',
            //   }),
            // }}
            // transition={{ duration: 0.25 }}
            initial={false}
            // animate={'center'}
            // exit={'exit'}
            // custom={direction}
            className={className}
        >
            {children}
        </motion.div>
        // </AnimatePresence>
    );
};

export const FramerLayout = { Tabs, Content };

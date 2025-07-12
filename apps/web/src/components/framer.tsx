'use client';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { JSX, ReactNode, useState } from 'react';
import { Tab } from '@/hooks/use-tabs';
import classNames from 'classnames';
import { cn } from '../lib/utils';

const transition = {
    type: 'tween' as const,
    ease: 'easeOut' as const,
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
                        <div key={i + item.label}>
                            <motion.button
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
                                        <motion.div
                                            key={'selected' + i + item.id}
                                            transition={transition}
                                            layoutId='underline'
                                            className={cn(
                                                'absolute bottom-[-9.5px] left-0 right-0 z-10 mr-0 border-b-2 border-beige-700'
                                            )}
                                        />
                                    ) : null}
                                    {i === hoveredTab ? (
                                        <motion.div
                                            key={'hovered' + i + item.id}
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
                        </div>

                    );
                })}
            </LayoutGroup>
        </motion.nav >
    );
};

const Content = ({
    children,
    className,
    selectedTabIndex,
}: {
    selectedTabIndex: number;
    children: ReactNode;
    className?: string;
}): JSX.Element => {
    return (
        <motion.div
            key={selectedTabIndex}
            initial={false}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const FramerLayout = { Tabs, Content };

import clsx from 'clsx';
import React from 'react'

type TypographyProps = {
    tag?: string;
    variant: keyof typeof variants;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const variants = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    h5: 'text-lg font-bold',
    h6: 'text-base font-bold',
    subtitle: 'text-lg font-medium',
    body: 'text-base',
    caption: 'text-xs',
    overline: 'text-xs uppercase',
};

const validTextTags = [
    'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'strong', 'em', 'small', 'mark', 'del', 'ins', 'sub', 'sup', 'blockquote', 'q', 'cite', 'abbr', 'time', 'code', 'var', 'samp', 'kbd'
];

const Typography = ({tag = "p", children, variant, ...props}: TypographyProps) => {
    if(tag && !validTextTags.includes(tag)) {
        tag = "p";
    }
    const Tag = tag as keyof JSX.IntrinsicElements;
    return (
        <Tag className={clsx(variants[variant], props.className)}>
            {children}
        </Tag>
    )
}

export default Typography
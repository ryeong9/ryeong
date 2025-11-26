'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Markdown({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          strong: (props) => (
            <strong
              className='font-semibold'
              {...props}
            />
          ),
          ul: (props) => (
            <ul
              className='list-disc ml-5 space-y-1'
              {...props}
            />
          ),
          li: (props) => (
            <li
              className='leading-7'
              {...props}
            />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

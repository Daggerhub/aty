import { ReactNode } from 'react';

interface PaperProps {
  children?: ReactNode;
}

export default function Paper(props: PaperProps) {
  return <div className="p-4 w-full rounded-lg border border-[#35373B] bg-[#27292D]">{props.children}</div>;
}
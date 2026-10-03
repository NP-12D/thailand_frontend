import { ButtonHTMLAttributes } from 'react';
export default function Button({children,className='',...props}:ButtonHTMLAttributes<HTMLButtonElement>){return <button className={`rounded-lg bg-[#f9df68] px-4 py-2 text-[#121010] transition hover:shadow-[0_0_10px_#f9df68,0_0_24px_#f5d15a33] ${className}`} {...props}>{children}</button>}

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/carousel.module.css';


const Footer: React.FC = () => (
    <footer className="min-h-full flex gap-8 items-center justify-center bg-black text-white p-20">
        <Image src="/assets/logo.png" width={18} height={18} alt="logo"/>
            <Link href="/iterms">Terms</Link>
            <Link href="/privacy">Privacy Policy</Link>
    </footer>
)

export default Footer
import React from 'react';
import Link from 'next/link';

const Navbar = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/men"><a>Men</a></Link></li>
            <li><Link href="/women"><a>Women</a></Link></li>
        </ul>
    </div>
);

export default Navbar;

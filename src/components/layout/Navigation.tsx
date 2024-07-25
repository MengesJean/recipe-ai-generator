"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import Button from '../ui/Button';

const Navigation = () => {
  return (
    <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
            <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-gray-800">Logo</Link>
            </div>
            <div className='flex items-center space-x-4'>
                <div className='flex items-center space-x-4 mr-8'>
                    <NavigationLink href="/features">Features</NavigationLink>
                    <NavigationLink href="/pricing">Pricing</NavigationLink>
                    <NavigationLink href="/docs">Docs</NavigationLink>
                    <SignedIn>
                        <NavigationLink href="/dashboard">Dashboard</NavigationLink>
                    </SignedIn>
                </div>
                <div className='flex items-center space-x-4'>
                    <SignedOut>
                        <SignInButton>
                            <Button variant="primary">
                                Sign In    
                            </Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                </div>
            </div>
        </div>
    </div>
  )
}

const NavigationLink = ({href, children}: {href: string, children: React.ReactNode}) => {
    return (
        <Link href={href} className="text-gray-800 hover:text-indigo-600 transition">{children}</Link>
    )
}

export default Navigation
'use client'

import { ProposalsProvider } from "@/context/proposals-context"

import logo from '@/app/assets/images/logo.png'
import Image from "next/image"
import Link from "next/link"

interface MobileFormLayoutProps {
  children: React.ReactNode
}

export default function MobileFormLayout({ children }: MobileFormLayoutProps) {
  return (
    <ProposalsProvider>
      <div className="min-h-screen w-full flex justify-center items-center overflow-hidden sm:hidden">
        <div className="grid grid-cols-1">
          <Link className="flex justify-center items-center pb-24" href="/">
            <Image
              src={logo}
              width={487}
              height={185}
              className="w-32"
              alt="Smartconsig logo"
            />
          </Link>
          {children}
        </div>
      </div>
    </ProposalsProvider>
  )
}


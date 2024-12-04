'use client'

import { ProposalsProvider } from "@/context/proposals-context"
import { UtmProviderSuspense } from "@/context/utm-context"

import logo from '@/app/assets/images/logo.png'
import Image from "next/image"
import Link from "next/link"

interface MobileFormLayoutProps {
  children: React.ReactNode
}

export default function MobileFormLayout({ children }: MobileFormLayoutProps) {
  return (
    <UtmProviderSuspense>
      <ProposalsProvider>
        <div className="min-h-screen w-full flex justify-center items-center overflow-hidden sm:hidden">
          <div className="grid grid-cols-1">
            <Link className="flex justify-center items-center p-12" href="/">
              <Image
                src={logo}
                width={450}
                height={253}
                className="w-32"
                alt="Smartconsig logo"
              />
            </Link>
            {children}
          </div>
        </div>
      </ProposalsProvider>
    </UtmProviderSuspense>
  )
}


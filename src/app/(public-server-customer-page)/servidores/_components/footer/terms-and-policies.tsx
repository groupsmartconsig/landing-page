"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useState } from "react"

export function PublicServerCustomerTermsAndPolicies() {
  const [isOpen, setIsOpen] = useState(false)
  const [zoom, setZoom] = useState(100)
  const [rotation, setRotation] = useState(0)

  const pdfUrl = "/politica-de-privacidade.pdf"

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <p className="underline text-muted-foreground hover:text-primary text-[11px] text-balance">
          Termos de Serviço e Política de Privacidade
        </p>
      </DialogTrigger>
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
          <DialogTitle>
            Termos de Serviço e Política de Privacidade
          </DialogTitle>
          <DialogDescription>
            Informações sobre nossa política de privacidade e termos de serviços no site.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 min-h-0 overflow-hidden">
          <div
            className="size-full flex justify-center"
            style={{
              transform: `rotate(${rotation}deg)`,
              transformOrigin: 'center center'
            }}
          >
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&zoom=${zoom}`}
              className="border rounded"
              style={{
                width: `${zoom}%`,
                height: `${zoom}%`,
                minHeight: '600px'
              }}
              title="Advanced PDF Preview"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
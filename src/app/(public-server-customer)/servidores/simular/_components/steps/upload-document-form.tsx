"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStepper } from "@/hooks/use-stepper";
import { CloudUploadIcon } from "lucide-react";
import { useState } from "react";

export function PublicServerCustomerUploadDocumentForm() {
  const [_, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const { nextStep } = useStepper();

  return (
    <div className="grid grid-cols-1 items-center py-6 sm:py-12 md:py-16">
      <h1 className="text-xl font-medium px-2">
        Anexe seu contracheque
      </h1>

      <div className="px-2 mt-4">
        <div
          className={`border-2 ${isDragging ? "border-secondary-red" : "border-muted-"} rounded-lg p-6 flex flex-col items-center justify-center`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <CloudUploadIcon className="text-secondary-red size-12" />

          <span className="text-[#555] text-xl font-medium mb-1">
            Arraste o arquivo aqui
          </span>

          <p className="w-64 text-muted-foreground text-xs text-center mb-4">
            Arraste e solte o arquivo aqui ou navegue pelo seu dispositivo
          </p>

          <Label htmlFor="file-upload">
            <div className="bg-secondary-red text-xs text-white px-4 py-2 rounded cursor-pointer">
              Procurar arquivo
            </div>

            <Input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </Label>
        </div>
      </div>

      <p className="text-xs text-muted-foreground py-6">
        <strong className="text-black">
          Anexe seu contracheque mais recente:
        </strong> <br />
        Utilizaremos este documento apenas para validar os dados do seu contrato consignado. Garantimos o uso seguro e sigiloso das suas informações.
      </p>

      <div className="w-full sm:flex sm:justify-center sm:items-center sm:mt-6">
        <Button
          type="button"
          size="lg"
          className="w-full h-14 bg-secondary-red rounded-sm mt-6 sm:h-10 sm:w-72 sm:text-sm sm:rounded sm:mt-12"
          onClick={() => nextStep()}
        >
          Próximo
        </Button>
      </div>
    </div>
  )
}
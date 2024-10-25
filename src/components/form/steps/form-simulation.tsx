import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DrawerDescription, DrawerTitle } from "@/components/ui/drawer";
import { CircleDollarSignIcon } from "lucide-react";

export function FormSimulation() {
  return (
    <>
      <div className="flex justify-center items-center space-x-4 pt-8 pb-4">
        <span className="p-3 border rounded-2xl">
          <CircleDollarSignIcon className="text-green-500" />
        </span>
        <div>
          <DrawerTitle className="text-lg">
            Resultado da sua simulação
          </DrawerTitle>
          <DrawerDescription className="max-w-64 text-sm">
            Visualize as propostas disponíveis.
          </DrawerDescription>
        </div>
      </div>

      <Carousel className="w-full max-w-72 mx-auto py-12">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="aspect-square flex flex-col items-center p-6">
                    <Badge className="bg-black text-white">
                      Proposta {index + 1}
                    </Badge>
                    <div>

                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="w-full flex flex-col items-center space-y-6 border-t p-8">
        <Button
          type="button"
          className="w-full px-6 hover:bg-black hover:text-primary"
        >
          Quero fazer a portabilidade
        </Button>
      </div>
    </>
  )
}

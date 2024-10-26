import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonDetails } from "@/types/proposals";
import { EyeIcon } from "lucide-react";

interface PersonDataProps {
  personData: PersonDetails;
}

export function PersonData({ personData }: PersonDataProps) {
  return (
    <Dialog>
      <div className="w-full py-2">
        <DialogTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center gap-2"
          >
            <EyeIcon className="size-4" />
            Ver todos os detalhes
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent className="max-w-96 rounded-2xl px-0">
        <DialogHeader className="border-b pb-6 px-6 text-left">
          <DialogTitle>Ficha completa da simulação</DialogTitle>
          <DialogDescription className="sr-only">
            Acompanhe o retorno da sua simulação.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="person-data" className="px-4">
          <TabsList>
            <TabsTrigger value="person-data">Dados pessoais</TabsTrigger>
            <TabsTrigger value="portability-data">Dados portabilidade</TabsTrigger>
          </TabsList>
          <TabsContent value="person-data">
            <div className="grid grid-cols-1 gap-y-3 p-3">
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold">
                  Nome completo
                </span>
                <p className="text-sm">
                  {personData.nome}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-semibold">
                    CPF
                  </span>
                  <p className="text-sm">
                    {personData.cpf}
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-semibold">
                    Cidade
                  </span>
                  <p className="text-sm">
                    {personData.cidade} - {personData.uf}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-semibold">
                    Data de nascimento
                  </span>
                  <p className="text-sm">
                    {personData.dataNascimento}
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-semibold">
                    Idade
                  </span>
                  <p className="text-sm">
                    {personData.idade}
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold">
                  Benêficio
                </span>
                <p className="text-sm">
                  {personData.beneficioEspecie}
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="portability-data">
            <div className="grid grid-cols-1 gap-y-3 p-3">
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold">
                  Banco atual
                </span>
                <p className="text-sm">
                  {personData.banco}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-semibold">
                    Meio de pagamento
                  </span>
                  <p className="text-sm">
                    {personData.meioPagamento}
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-semibold">
                    Benêficio
                  </span>
                  <p className="text-sm">
                    {personData.numeroBeneficio}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-semibold">
                    Agência
                  </span>
                  <p className="text-sm">
                    {personData.agBanco}
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-semibold">
                    Conta corrente
                  </span>
                  <p className="text-sm">
                    {personData.contaCorrente}
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="border-t pt-6 px-6">
          <DialogClose asChild>
            <Button type="button">Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
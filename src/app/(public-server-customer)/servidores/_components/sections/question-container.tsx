import { Button } from "@/components/ui/button";

export function PublicServerCustomerQuestionContainer() {
  return (
    <div className="bg-[#121212] w-full">
      <section className="p-6 md:max-w-5xl md:w-full md:mx-auto">
        <div className="flex flex-col space-y-6 py-6 md:flex-row md:justify-center md:items-center md:space-x-6 md:space-y-0">
          <h2 className="max-w-xs w-full text-lg text-white font-medium">
            Tem dúvidas ou desconfiou de algo?
          </h2>

          <Button type="button" className="w-full bg-secondary-red rounded md:w-80">
            Falar com a Smart Consig
          </Button>
        </div>
      </section>
    </div>
  )
}
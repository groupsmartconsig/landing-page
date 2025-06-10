import { Button } from "@/components/ui/button";

export function PublicServerCustomerQuestionContainer() {
  return (
    <section className="bg-[#121212] p-6">
      <div className="flex flex-col space-y-6 py-6">
        <h2 className="max-w-xs w-full text-lg text-white font-medium">
          Tem dúvidas ou desconfiou de algo?
        </h2>

        <Button type="button" className="w-full bg-secondary-red rounded">
          Falar com a Smart Consig
        </Button>
      </div>
    </section>
  )
}
import { InfiniteSlider } from '../components/infinite-slider'

const banks = [
  { name: 'banrisul', alt: 'Banco Banrisul' },
  { name: 'bmg', alt: 'Banco BMG' },
  { name: 'bradesco', alt: 'Banco Bradesco' },
  { name: 'c6', alt: 'Banco C6' },
  { name: 'caixa', alt: 'Banco Caixa' },
  { name: 'crefisa', alt: 'Banco Crefisa' },
  { name: 'daycoval', alt: 'Banco Daycoval' },
  { name: 'itau', alt: 'Banco Itaú' },
  { name: 'pan', alt: 'Banco Pan' },
  { name: 'safra', alt: 'Banco Safra' },
  { name: 'santander', alt: 'Banco Santander' },
]

export default function InfiniteSliderContainer() {
  return (
    <div className="bg-gray-200 py-6 sm:bg-white sm:py-12">
      <div className="w-full flex flex-col items-center space-y-6 py-6">
        <h2 className="max-w-80 mx-auto text-3xl text-center font-bold sm:w-full sm:text-4xl sm:text-center sm:font-bold">
          Única instituição autorizada por todos os Bancos.
        </h2>
        <p className="w-full text-center text-base font-medium px-6 sm:max-w-5xl">
          Somos a única instituição autorizada por todos os bancos para garantir segurança e
          confiança nas suas operações financeiras. Com a nossa expertise, você tem a tranquilidade
          de contar com as melhores condições de mercado.
        </p>
      </div>
      <InfiniteSlider banks={banks} />
    </div>
  )
}
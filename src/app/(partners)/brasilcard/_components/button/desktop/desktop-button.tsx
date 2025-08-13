import { Button } from "@/components/ui/button"



export function DesktopButton({label, className}: {label:string, className?: string}){
    return(
        <Button className={className ||"w-full h-12 bg-white text-primary text-lg font-bold hover:bg-black hover:opacity-90"}>
            {label}
        </Button>
    )
}
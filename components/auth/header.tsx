import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const Font = Poppins({
    subsets: ['latin'],
    weight: ['600']
})


interface HeaderProps {
    label: string
}

export const AuthHeader = ( {label} : HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <h1 className={cn("text-3xl font-bold" , Font.className)}>Isys</h1>
            <p className="text-muted-foreground">{label}</p>
        </div>
    )
}
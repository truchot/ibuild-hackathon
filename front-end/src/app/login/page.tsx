import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ConnectWallet } from "@/components/connect-wallet";
import { Logo } from "@/components/logo";
import Link from "next/link";

export default function LoginPage() {


    return (
        <div className="w-full lg:grid h-screen lg:grid-cols-2 border">

            <div class="relative hidden h-full flex-col bg-muted p-10 lg:flex dark:border-r">
                <div class="relative z-20 flex items-center text-lg font-medium gap-2">
                    <Logo className="h-6 w-6" />
                    iBuild Hackathon
                </div>
                <div class="relative z-20 mt-auto">
                    <blockquote className="flex flex-col gap-4">
                        <p class="text-2xl">“This library has saved me countless hours of
                        work and helped me deliver stunning designs to my clients faster than ever before.”</p>
                        <cite class="text-sm not-italic">Sofia Davis</cite>
                    </blockquote>
                </div>
            </div>

            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <ConnectWallet />
                    {/*<Button variant="outline" className="w-full">*/}
                    {/*    Login with Google*/}
                    {/*</Button>*/}
                </div>
            </div>
        </div>
    )
}

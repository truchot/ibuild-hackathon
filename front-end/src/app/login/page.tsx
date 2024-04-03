import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function LoginPage() {
    return (
        <div className="w-full lg:grid min-h-screen lg:grid-cols-2">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <Button type="submit" className="w-full">
                        Login with Wallet
                    </Button>
                    <Button variant="outline" className="w-full">
                        Login with Google
                    </Button>
                </div>
            </div>
            <figure className="hidden bg-muted lg:block">
                <Image
                    src="/placeholder.svg"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </figure>
        </div>
    )
}

import { FC, ReactNode, useEffect } from "react"
import { helper } from '@qubiform/utils'
import Logo from '@/assets/logo.svg?react'

interface AuthLayoutProps {
    options?: Record<string, any>
    children?: ReactNode
}

export const AuthLayout: FC<AuthLayoutProps> = ({ options, children }) => {
    useEffect(() => {
        if (helper.isValid(options?.title)) {
            document.title = `${options!.title} - Qubiform`
        }
    }, [options])

    return (
        <div className="bg-foreground flex min-h-screen flex-col">
            <div className="bg-foreground sticky top-0 flex items-center justify-between p-4">
                <a href="/" className="flex items-center gap-2" title="HeyForm">
                    <Logo className="h-8 w-auto" />
                    <span className="text-xl font-medium">Qubiform</span>
                </a>

                {/* <LanguageSwitcher /> */}
            </div>

            <div className="flex flex-1 flex-col justify-center p-4 lg:p-12">{children}</div>
        </div>
    )
}
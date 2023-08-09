import { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode
};

export default function AuthLayout({children} : AuthLayoutProps){
    return (
        <div>
            <h2>Auth</h2>
            {children}
        </div>
    )
}
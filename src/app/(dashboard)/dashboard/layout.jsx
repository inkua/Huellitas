"use client";

import Navigation from "./components/Navigation/Navigation";
import RouterSecurity from "@/components/RouterSecurity";

export default function layout({ children }) {
    return (
        <body className="min-h-full">
            <RouterSecurity>

                    <Navigation />
                    <main>
                        <div className="mx-auto max-w-7xl py-6 px-6 sm:px-6 lg:px-8">
                            {children}
                        </div>
                    </main>

            </RouterSecurity>
        </body>
    );
}

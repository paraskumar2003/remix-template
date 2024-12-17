import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutComponent {
    children: React.ReactNode
}

export const PageLayout: React.FC<PageLayoutComponent> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-grow bg-s-white">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

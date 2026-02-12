import { usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';
import Sidebar from '@/Components/Common/Sidebar';
import Header from '@/Components/Common/Header';
import Footer from '@/Components/Common/Footer';
import { Toaster } from 'react-hot-toast';

export default function AdminLayout({ children }) {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    useEffect(() => {
        // Ensure the loader is removed if it's still there
        const loader = document.querySelector('.loader-bg');
        if (loader) {
            setTimeout(() => {
                loader.remove();
            }, 400);
        }

        // Initialize any other layout specific scripts if needed
        if (window.pcoded) {
            // Re-run some initializations if they are safely exposed
        }
    }, []);

    return (
        <div
            data-pc-preset="preset-1"
            data-pc-sidebar-caption="true"
            data-pc-direction="ltr"
            data-pc-theme_contrast=""
            data-pc-theme="light"
        >
            <Toaster
                position="top-center"
                containerStyle={{
                    top: 80,
                }}
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#fff',
                        color: '#1f2937',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
                        borderRadius: '12px',
                        padding: '0',
                        border: '1px solid #f3f4f6',
                    },
                    success: {
                        iconTheme: {
                            primary: '#10b981',
                            secondary: '#fff',
                        },
                        style: {
                            padding: '12px 16px',
                        },
                    },
                    error: {
                        iconTheme: {
                            primary: '#ef4444',
                            secondary: '#fff',
                        },
                        style: {
                            padding: '12px 16px',
                        },
                    },
                    loading: {
                        iconTheme: {
                            primary: '#3b82f6',
                            secondary: '#fff',
                        },
                        style: {
                            padding: '12px 16px',
                        },
                    },
                }}
            />
            <Sidebar />
            <Header />
            <div className="pc-container">
                <div className="pc-content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

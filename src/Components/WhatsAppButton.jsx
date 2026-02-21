import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const phoneNumber = "919942000371";
    const message = "Hello Team Excellent! I'm interested in your programs. Can you please guide me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[99] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 hover:bg-[#128C7E] transition-all duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            {/* Pulsing Effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:hidden"></span>

            <MessageCircle size={32} />

            {/* Tooltip */}
            <span className="absolute right-16 bg-white text-gray-800 text-sm font-bold py-2 px-4 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap border border-gray-100">
                Chat with us!
            </span>
        </a>
    );
}

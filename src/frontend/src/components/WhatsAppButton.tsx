import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/61488841883"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.button"
      aria-label="Contact Tru Bond Cleaning on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full whatsapp-btn shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 group"
    >
      <SiWhatsapp className="w-7 h-7 text-white" />
      <span className="absolute right-16 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}

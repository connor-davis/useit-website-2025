import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contact-us')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col w-full h-auto space-y-8 sm:space-y-16 lg:space-y-32 pb-8 sm:pb-16 lg:pb-32">
      <div className="flex flex-col w-full h-auto space-y-5 bg-primary px-4 sm:px-6 lg:px-32">
        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-32 py-8 sm:py-16 lg:py-32">
          <img
            src="/assets/contact_one.png"
            className="w-full rounded-2xl shadow-lg"
          />

          <div className="flex flex-col w-full h-auto space-y-4 sm:space-y-5 text-white">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Connect With Us
            </div>

            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight">
              Visit Our World-Class Operation
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-32">
        <div className="flex flex-col w-full h-auto space-y-3 sm:space-y-4 items-center justify-center">
          <div className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
            Contact Us
          </div>
          <div className="w-24 sm:w-32 h-1.5 sm:h-2 bg-amber-200 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-auto gap-6 sm:gap-8 lg:gap-12">
          <div className="flex flex-col w-full h-auto space-y-4 sm:space-y-6">
            <a
              href="mailto:info@use-it.co.za"
              className="flex items-center space-x-4 sm:space-x-5 bg-amber-200 text-black p-4 sm:p-5 lg:p-6 rounded-lg hover:bg-amber-300 transition-colors duration-200 text-base sm:text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail-question w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0"
              >
                <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                <path d="M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
                <path d="M20 22v.01" />
              </svg>
              <p className="font-medium">Email Us</p>
            </a>

            <a
              href="https://wa.me/+27670300360"
              className="flex items-center space-x-4 sm:space-x-5 bg-amber-200 text-black p-4 sm:p-5 lg:p-6 rounded-lg hover:bg-amber-300 transition-colors duration-200 text-base sm:text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              <p className="font-medium">Whatsapp Us</p>
            </a>

            <a
              href="tel:+27317652349"
              className="flex items-center space-x-4 sm:space-x-5 bg-amber-200 text-black p-4 sm:p-5 lg:p-6 rounded-lg hover:bg-amber-300 transition-colors duration-200 text-base sm:text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <p className="font-medium">Call Us</p>
            </a>
          </div>

          <iframe
            src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=21%20Buthelezi%20Road,%20Mpumalanga%20F,%20Hammarsdale,%20Hammarsdale,%20South%20Africa+(Use%20IT)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            className="w-full h-64 sm:h-80 lg:h-96 xl:h-[400px] rounded-lg shadow-lg"
            title="Use IT Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="flex flex-col w-full h-auto bg-neutral-950 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 sm:p-6 lg:p-8 gap-4 sm:gap-6 lg:gap-8">
        <div className="flex flex-col w-full h-auto space-y-3 sm:space-y-4">
          <div className="text-lg sm:text-xl lg:text-2xl font-semibold">
            About Us
          </div>
          <div className="text-sm sm:text-base leading-relaxed">
            USE-IT is a Non-Profit Organisation with registered PBO status with
            the express aim of diverting waste and creating jobs.
          </div>
        </div>

        <div className="flex flex-col w-full h-auto space-y-3 sm:space-y-4 items-start lg:items-center">
          <div className="text-lg sm:text-xl lg:text-2xl font-semibold">
            Social Links
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a
              href="https://web.facebook.com/useitkzn"
              className="flex flex-col items-center justify-center p-2.5 sm:p-3 bg-amber-200 rounded-full text-black hover:bg-amber-300 transition-colors"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook sm:w-6 sm:h-6"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://wa.me/+27670300360"
              className="flex flex-col items-center justify-center p-2.5 sm:p-3 bg-amber-200 rounded-full text-black hover:bg-amber-300 transition-colors"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle sm:w-6 sm:h-6"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/use-it-ethekwini-waste-materials-recovery-industry-development-cluster/"
              className="flex flex-col items-center justify-center p-2.5 sm:p-3 bg-amber-200 rounded-full text-black hover:bg-amber-300 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin sm:w-6 sm:h-6"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col w-full h-auto space-y-3 sm:space-y-4 col-span-1 md:col-span-2 lg:col-span-1">
          <div className="text-lg sm:text-xl lg:text-2xl font-semibold">
            Follow Us On Facebook
          </div>
          <div className="w-full">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fuseitkzn%3Fref%3Dembed_page&amp;tabs=timeline&amp;width=380&amp;height=280&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
              className="w-full h-40 sm:h-48 lg:h-52"
              style={{
                border: 'none',
                overflow: 'hidden',
              }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="text-neutral-400 p-4 sm:p-6 lg:p-6 w-full text-center lg:text-left text-xs sm:text-sm lg:text-base border-t border-neutral-800">
        &copy; Copyright 2025 USE-IT Waste Benefication all rights reserved{' '}
        <span className="text-amber-200">|</span> Designed by LoneWolf Software
      </div>
    </div>
  );
}

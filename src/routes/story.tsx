import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/story')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col w-full h-auto space-y-8 sm:space-y-16 lg:space-y-32 pb-8 sm:pb-16 lg:pb-32">
      <div className="flex flex-col w-full h-auto space-y-5 bg-primary px-4 sm:px-6 lg:px-32">
        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-32 py-8 sm:py-16 lg:py-32">
          <div className="flex flex-col w-full h-auto space-y-4 sm:space-y-5 text-white">
            <div className="text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Partner With An <span className="font-bold">Award Winning</span>{' '}
              Waste Beneficiation NPO
            </div>
          </div>

          <img
            src="/assets/our_story_partner.jpg"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-32">
        <div className="flex flex-col w-full h-auto space-y-3 sm:space-y-4 items-center justify-center">
          <div className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
            Our Mandate
          </div>
          <div className="w-24 sm:w-32 h-1.5 sm:h-2 bg-amber-200 rounded"></div>
        </div>

        <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
          USE-IT has been established as a non-profit organisation to research
          and develop waste beneficiation technologies with the aim of diverting
          waste from landfill and creating jobs in the green economy. Our
          primary funding and mandate is in the eThekwini area in association
          with the Economic Development Unit.
        </div>

        <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
          USE-IT is a special purpose vehicle, designed to act as a cluster for
          the waste materials recovery industry in eThekwini Municipality. In
          terms of Governance USE-IT is overseen by a board of directors made up
          of members from a diverse range of backgrounds in the waste material
          recovery, business and environmental management backgrounds.
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-32">
        <div className="flex flex-col w-full h-auto space-y-3 sm:space-y-4 items-center justify-center">
          <div className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
            Vision & Strategy
          </div>
          <div className="w-24 sm:w-32 h-1.5 sm:h-2 bg-amber-200 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="flex flex-col w-full p-6 sm:p-8 lg:p-12 xl:p-16 space-y-4 items-center justify-center text-center bg-primary rounded-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-leaf sm:w-16 sm:h-16"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>

            <div className="text-xl sm:text-2xl font-bold">Our Vision</div>

            <div className="text-sm sm:text-base leading-relaxed">
              USE-IT is the leading authority on driving economic opportunities
              in waste diversion and beneficiation to support the circular
              economy.
            </div>
          </div>

          <div className="flex flex-col w-full p-6 sm:p-8 lg:p-12 xl:p-16 space-y-4 items-center justify-center text-center bg-primary rounded-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star sm:w-16 sm:h-16"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>

            <div className="text-xl sm:text-2xl font-bold">Our Strategy</div>

            <div>
              Developing partnerships to grow and succeed within the green
              economy.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-8 px-5 lg:px-32 items-center justify-center">
        <div className="flex flex-col w-full h-auto space-y-4 items-center justify-center">
          <div className="font-bold text-4xl text-center">Our Strategy</div>
          <div className="w-32 h-2 bg-amber-200"></div>
        </div>

        <img src="/assets/story_strategy.png" className="w-full lg:w-[50%]" />
      </div>

      <div className="flex flex-col w-full h-auto space-y-8 px-5 lg:px-32">
        <div className="flex flex-col w-full h-auto space-y-4 items-center justify-center">
          <div className="font-bold text-4xl text-center">Our Goals</div>
          <div className="w-32 h-2 bg-amber-200"></div>
        </div>

        <div className="grid w-full grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="flex flex-col w-full p-10 lg:p-32 space-y-4 items-center justify-center text-center bg-primary rounded-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-earth"
            >
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
              <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
              <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
              <circle cx="12" cy="12" r="10" />
            </svg>

            <div className="text-2xl font-bold">EMPOWERING PEOPLE</div>

            <div>Skills development Incubation</div>
          </div>

          <div className="flex flex-col w-full p-10 lg:p-32 space-y-4 items-center justify-center text-center bg-primary rounded-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-check-big"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
              <path d="m9 11 3 3L22 4" />
            </svg>

            <div className="text-2xl font-bold">DO WHAT IS RIGHT</div>

            <div>Transparent, credible represent</div>
          </div>

          <div className="flex flex-col w-full p-10 lg:p-32 space-y-4 items-center justify-center text-center bg-primary rounded-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-settings"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>

            <div className="text-2xl font-bold">GROUND TRUTH SOLUTIONS</div>

            <div>Provide solutions based on the real life scenarios</div>
          </div>

          <div className="flex flex-col w-full p-10 lg:p-32 space-y-4 items-center justify-center text-center bg-primary rounded-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-message-circle"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>

            <div className="text-2xl font-bold">LEARN AND COLLABORATE</div>

            <div>Effective learning strategies and collaboration</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-8 px-5 lg:px-32">
        <div className="flex flex-col w-full h-auto space-y-4 items-center justify-center">
          <div className="font-bold text-4xl text-center">
            Our Board Members
          </div>
          <div className="w-32 h-2 bg-amber-200"></div>
        </div>

        <div className="grid w-full grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="flex flex-col w-full p-5 space-y-4 items-center justify-center text-center bg-primary rounded-lg text-white">
            <img
              src="/assets/paulos_ngcobo.png"
              className="rounded-full w-1/3"
            />

            <div className="text-2xl font-bold capitalize shrink-0 w-full text-center">
              Paulos Ngcobo
            </div>

            <div className="text-neutral-400">Chairman</div>

            <div className="relative group">
              <button className="block w-32 text-center underline bg-amber-200 text-black p-2 rounded-md">
                View Info
              </button>

              <div className="absolute hidden group-hover:block w-[300px] max-h-[350px] overflow-y-auto p-5 mt-2 bg-white text-black text-left rounded-md shadow-lg z-10 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                <p>
                  Paulos Ngcobo has been a Director with USE-IT since 2015. He
                  currently hold the position of Chairman of the Board. He
                  worked for NUMSA from 1982 to 1993 as a Union Organiser. In
                  1993 and 1999 he served as COSATU’s Provincial Secretary
                  whereafter he joined the Kwa-Zulu Natal Parliament where he
                  served in the following committees: Premier, Finance &
                  Economic, Transport, Agriculture, Public Works, Sports &
                  Recreation. Paulos currently works in the private sector and
                  is seated on various corporate boards.
                </p>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/paulos-ngcobo-0980b1103/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col w-full p-5 space-y-4 items-center justify-center text-center bg-primary rounded-lg text-white">
            <img
              src="/assets/belinda_putterill.jpg"
              className="rounded-full w-1/3"
            />

            <div className="text-2xl font-bold capitalize shrink-0 w-full text-center">
              Belinda Putterill
            </div>

            <div className="text-neutral-400">Managing Director</div>

            <div className="relative group">
              <button className="block w-32 text-center underline bg-amber-200 text-black p-2 rounded-md">
                View Info
              </button>

              <div className="absolute hidden group-hover:block w-[300px] max-h-[350px] overflow-y-auto p-5 mt-2 bg-white text-black text-left rounded-md shadow-lg z-10 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                <p>
                  Belinda has been with USE-IT since 2016. Belinda was appointed
                  as USE-IT’s Managing Director in 2022. Experienced Operations
                  Manager with a demonstrated history of working in the
                  non-profit industry. She has experience in various industry
                  sectors ranging from sales, operations, business analysis,
                  construction industry, civil engineering industry and local
                  government. She also has long-standing experience in working
                  with local government.
                </p>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/belinda-putterill-834089110/?originalSubdomain=za">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col w-full p-5 space-y-4 items-center justify-center text-center bg-primary rounded-lg text-white">
            <img
              src="/assets/adrienne_brown.png"
              className="rounded-full w-1/3"
            />

            <div className="text-2xl font-bold capitalize shrink-0 w-full text-center">
              Adrienne Brown
            </div>

            <div className="text-neutral-400">Finance</div>

            <div className="relative group">
              <button className="block w-32 text-center underline bg-amber-200 text-black p-2 rounded-md">
                View Info
              </button>

              <div className="absolute hidden group-hover:block w-[300px] max-h-[350px] overflow-y-auto p-5 mt-2 bg-white text-black text-left rounded-md shadow-lg z-10 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                <p>
                  Adrienne has been with USE-IT since 2022. An entrepreneurial
                  accountant and coach who completed her Articles with Grant
                  Thornton in 2004 BCompt-UNISA degree and a strong passion for
                  assisting entrepreneurs and businesses with the A-Z of running
                  their business financially.
                </p>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/adrienne-brown-sa/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col w-full p-5 space-y-4 items-center justify-center text-center bg-primary rounded-lg text-white">
            <img
              src="/assets/portio_dlamini.jpg"
              className="rounded-full w-1/3"
            />

            <div className="text-2xl font-bold capitalize shrink-0 w-full text-center">
              Portio Dlamini
            </div>

            <div className="text-neutral-400">Director</div>

            <div className="relative group">
              <button className="block w-32 text-center underline bg-amber-200 text-black p-2 rounded-md">
                View Info
              </button>

              <div className="absolute hidden group-hover:block w-[300px] max-h-[350px] overflow-y-auto p-5 mt-2 bg-white text-black text-left rounded-md shadow-lg z-10 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                <p>
                  Portio Dlamini is currently the Managing Director of Emakheni
                  Group, a company she started 9 years ago. She is a Chemical
                  Process Engineer by profession, with more than 10 years’
                  experience in the Manufacturing industry. She is a dynamic
                  woman whose experience in the industry gave her the ability to
                  understand systems and people and how these can work together
                  to maximise output and increase margins. Running her own
                  business has given her the ability to dream, solve problems
                  and dive into different roles as a leader and change agent.
                </p>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/emakheni?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col w-full p-5 space-y-4 items-center justify-center text-center bg-primary rounded-lg text-white">
            <img
              src="/assets/devon_de_sousa.png"
              className="rounded-full w-1/3"
            />

            <div className="text-2xl font-bold capitalize shrink-0 w-full text-center">
              Devon de Sousa
            </div>

            <div className="text-neutral-400">Legal & HR</div>

            <div className="relative group">
              <button className="block w-32 text-center underline bg-amber-200 text-black p-2 rounded-md">
                View Info
              </button>

              <div className="absolute hidden group-hover:block w-[300px] max-h-[350px] overflow-y-auto p-5 mt-2 bg-white text-black text-left rounded-md shadow-lg z-10 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                <p>
                  A seasoned legal executive committed to ensuring and
                  equitable, diverse and high performing culture by providing
                  expert advice and quality services. Devon is a strategic
                  leader who obtains business objectives through training and
                  development initiatives, focused on entrepreneurship. He has
                  exceptional relationship building skills, strong interpersonal
                  abilities with a background in Human Resources focused on
                  legal compliance, leading people, processes and outcomes and
                  improving business agility.
                </p>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/devon-de-sousa-a1480235/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col w-full p-5 space-y-4 items-center justify-center text-center bg-primary rounded-lg text-white">
            <img
              src="/assets/gerald_chotu.png"
              className="rounded-full w-1/3"
            />

            <div className="text-2xl font-bold capitalize shrink-0 w-full text-center">
              Gerald Chotu
            </div>

            <div className="text-neutral-400">
              Circular Economy Sustainability
            </div>

            <div className="relative group">
              <button className="block w-32 text-center underline bg-amber-200 text-black p-2 rounded-md">
                View Info
              </button>

              <div className="absolute hidden group-hover:block w-[300px] max-h-[350px] overflow-y-auto p-5 mt-2 bg-white text-black text-left rounded-md shadow-lg z-10 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                <p>
                  Gerald has served in the major plastics and manufacturing
                  industries as an executive for over 25 years. Waste has not
                  only been a personal passion but also giving back to the
                  community is key to some of his activities. Gerald has worked
                  on several projects to help make waste a solution and not a
                  problem. Gerald also has experience with working with
                  Parliamentary structure.
                </p>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/gerald-chotu-8985089/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col w-full p-5 space-y-4 items-center justify-center text-center bg-primary rounded-lg text-white">
            <img src="/assets/heidi_cox.png" className="rounded-full w-1/3" />

            <div className="text-2xl font-bold capitalize shrink-0 w-full text-center">
              Heidi Cox
            </div>

            <div className="text-neutral-400">Textile Sustainability</div>

            <div className="relative group">
              <button className="block w-32 text-center underline bg-amber-200 text-black p-2 rounded-md">
                View Info
              </button>

              <div className="absolute hidden group-hover:block w-[300px] max-h-[350px] overflow-y-auto p-5 mt-2 bg-white text-black text-left rounded-md shadow-lg z-10 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                <p>
                  Heidi is a long standing board member of USE-IT and a
                  qualified textile technologist. She has over 20 years’
                  technical manufacturing experience in the textile industry and
                  has always had a keen interest in conservation and the
                  environment. Heidi has also researched the in-factory
                  requirements of post-consumer waste to be used as raw
                  materials for recycled products. She has visited schools,
                  communities and hosted workshops to create public awareness of
                  good practices within waste management, with a focus on
                  textile waste. Heidi is also the Chairperson of the South
                  African Dyers and Finishers (a national association for
                  textile professionals) and is the chairperson of the Mountain
                  Backpackers’ Club.
                </p>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/heidi-cox-4b8a8b1a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col w-full p-5 space-y-4 items-center justify-center text-center bg-primary rounded-lg text-white">
            <img src="/assets/anuka_brown.png" className="rounded-full w-1/3" />

            <div className="text-2xl font-bold capitalize shrink-0 w-full text-center">
              Anuka Brown
            </div>

            <div className="text-neutral-400">
              Flexing Packaging Sustainability
            </div>

            <div className="relative group">
              <button className="block w-32 text-center underline bg-amber-200 text-black p-2 rounded-md">
                View Info
              </button>

              <div className="absolute hidden group-hover:block w-[300px] max-h-[350px] overflow-y-auto p-5 mt-2 bg-white text-black text-left rounded-md shadow-lg z-10 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                <p>
                  Experienced Quality Assurance Manager with a demonstrated
                  history of working the packing industry. Skilled in
                  manufacturing, Operations Management, Packaging Design,
                  Management and lean manufacturing. She is a strong quality
                  assurance professional who graduated from the University of
                  Natal with BSC Chemistry..
                </p>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/anuka-brown-cpp-a057baa4/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

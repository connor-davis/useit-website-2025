import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/media')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col w-full h-auto space-y-8 sm:space-y-16 lg:space-y-32 pb-8 sm:pb-16 lg:pb-32">
      <div className="flex flex-col w-full h-auto space-y-6 sm:space-y-8 bg-primary px-4 sm:px-6 lg:px-32">
        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-32 py-8 sm:py-16 lg:py-32">
          <img
            src="/assets/media_one.jpg"
            className="w-full rounded-2xl shadow-lg"
          />

          <div className="flex flex-col w-full h-auto space-y-4 sm:space-y-6 text-white">
            <div className="text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Navigating the path of{' '}
              <span className="font-bold">Good Governance</span> one decision at
              a time
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-32">
        <div className="flex flex-col w-full h-auto space-y-3 sm:space-y-4 items-center justify-center">
          <div className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
            Our Mandate
          </div>
          <div className="w-24 sm:w-32 h-1.5 sm:h-2 bg-amber-200 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-auto gap-6 sm:gap-8">
          <div className="flex flex-col w-full h-auto space-y-4 sm:space-y-5">
            <div className="text-xl sm:text-2xl font-semibold">
              Current & Past Annual Reports
            </div>

            <ul className="list-disc px-4 sm:px-6 space-y-2 text-sm sm:text-base">
              <li>
                <a
                  href="https://use-it.co.za/assets/img/Annual%20Report%202022%202023%20Final.pdf"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  2023 Report
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  2022 Report
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  2021 Report
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  2020 Report
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  2019 Report
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  2018 Report
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  2017 Report
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full h-auto space-y-4 sm:space-y-5">
            <div className="text-xl sm:text-2xl font-semibold">
              Promoting Green Environment
            </div>

            <ul className="list-disc px-4 sm:px-6 space-y-2 text-sm sm:text-base">
              <li>
                <a
                  href="https://156c9157-d9cf-4d98-a423-ffd1268d3ad9.filesusr.com/ugd/9d400e_d7079c949e4b4c34a77d5827385ce66c.pdf"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  Greener Livable City - Water and Sanitation Presentation
                </a>
              </li>

              <li>
                <a
                  href="https://156c9157-d9cf-4d98-a423-ffd1268d3ad9.filesusr.com/ugd/9d400e_cfd48ce0129448c2a9de562c7329d5d6.pdf"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  National Recycling Forum Presentation: Jacques Lightfoot
                </a>
              </li>

              <li>
                <a
                  href="https://156c9157-d9cf-4d98-a423-ffd1268d3ad9.filesusr.com/ugd/9d400e_18095b0ab8244078bd2e25e7bba518f2.pdf"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  Maximising the Value of Waste: Chris Whyte
                </a>
              </li>

              <li>
                <a
                  href="https://156c9157-d9cf-4d98-a423-ffd1268d3ad9.filesusr.com/ugd/9d400e_f9d5903af8714fe792d73d43c8c0b510.pdf"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  International Good Practice Presentation: Phakamile Mbonambi
                </a>
              </li>

              <li>
                <a
                  href="https://156c9157-d9cf-4d98-a423-ffd1268d3ad9.filesusr.com/ugd/9d400e_dcdcfd5ec32c41e284fe2c4a6c44b0a0.pdf"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  Institute of Waste Management of Southern Africa Presentation:
                  Aubrey Muswema
                </a>
              </li>

              <li>
                <a
                  href="https://www.citizen.co.za/highway-mail/news-headlines/advertorial/2023/09/06/key-bricks-unlocking-the-future-of-building-on-the-african-continent/"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  Key Bricks - unlocking the future of building on the african
                  continent
                </a>
              </li>

              <li>
                <a
                  href="https://www.citizen.co.za/highway-mail/?p=489648"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  Recycling center blossoms into a bright 2024 highway mail
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full h-auto space-y-4 sm:space-y-5">
            <div className="text-xl sm:text-2xl font-semibold">
              Our Development Strategy
            </div>

            <ul className="list-disc px-4 sm:px-6 space-y-2 text-sm sm:text-base">
              <li>
                <a
                  href="https://156c9157-d9cf-4d98-a423-ffd1268d3ad9.filesusr.com/ugd/9d400e_e4c6c5a3a23e4b36a82b01436614945a.pdf"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  eThekwini Long Term Development Plan 2006-2016: Imagine Durban
                  Presentation
                </a>
              </li>

              <li>
                <a
                  href="https://156c9157-d9cf-4d98-a423-ffd1268d3ad9.filesusr.com/ugd/9d400e_91ef490b0d04406bb915a842c246918f.pdf"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  National Empowerment Fund Presentation: Phakamile Madonsela
                </a>
              </li>

              <li>
                <a
                  href="https://156c9157-d9cf-4d98-a423-ffd1268d3ad9.filesusr.com/ugd/9d400e_f7e8dc24382540cfab3d01cfbb3a016f.pdf"
                  className="text-primary hover:text-primary-dark underline transition-colors duration-200"
                >
                  An Introduction to the IWMSA Presentation Lindsay Strachan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-32">
        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-32 py-4 sm:py-8 lg:py-16">
          <div className="flex flex-col w-full h-auto space-y-4 sm:space-y-5">
            <div className="text-2xl sm:text-3xl lg:text-4xl leading-tight">
              <span className="font-bold">Leveraging Resources</span> To Build
              Opportunities In The{' '}
              <span className="font-bold">Green Economy</span>
            </div>
          </div>

          <img
            src="/assets/media_three.jpg"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-32">
        <div className="flex flex-col w-full h-auto space-y-3 sm:space-y-4 items-center justify-center">
          <div className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
            FAQ
          </div>
          <div className="w-24 sm:w-32 h-1.5 sm:h-2 bg-amber-200 rounded"></div>
        </div>

        <div className="w-full">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <label
                htmlFor="accordion-1"
                className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base sm:text-lg font-semibold pr-4">
                  How can I become involved in a project?
                </span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <input type="checkbox" id="accordion-1" className="hidden peer" />
              <div className="p-4 sm:p-6 bg-gray-50 peer-checked:block hidden">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Contact USE-IT and speak with a specialist who can provide you
                  with information email info@use-it.co.za or contact our office
                  +27 31 765 2349
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <label
                htmlFor="accordion-2"
                className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base sm:text-lg font-semibold pr-4">
                  How can Use-IT help to decrease your waste management costs?
                </span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <input type="checkbox" id="accordion-2" className="hidden peer" />
              <div className="p-4 sm:p-6 bg-gray-50 peer-checked:block hidden">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  USE-IT has developed methodologies that allow companies to
                  reduce waste management costs through innovative project
                  development and technological applications. This has allowed a
                  number of organisations to convert the grudge spend on waste
                  management into cost negative projects with a mutlitude of
                  postive spin-offs, from a Marketing, CSI, Enterprise
                  Development and Triple Bottom Line Reporting outcome. Contact
                  us for more information: info@use-it.co.za or telephone +27 31
                  765 2349
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <label
                htmlFor="accordion-3"
                className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base sm:text-lg font-semibold pr-4">
                  Can Use-IT help to maximize your BEE Rating?
                </span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <input type="checkbox" id="accordion-3" className="hidden peer" />
              <div className="p-4 sm:p-6 bg-gray-50 peer-checked:block hidden">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Yes! If your business model is compatible, USE-IT can help you
                  to develop projects that will increase your companies B-BBEE
                  score, through a variety fo supplier development programs and
                  enterprise development mechanisms. "Company waste streams can
                  be an opportunity to unlock sustainability initiatives and
                  B-BBEE points". Contact us for more information:
                  info@use-it.co.za or telephone +27 31 765 2349
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <label
                htmlFor="accordion-4"
                className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base sm:text-lg font-semibold pr-4">
                  Does Use-IT Recycle?
                </span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <input type="checkbox" id="accordion-4" className="hidden peer" />
              <div className="p-4 sm:p-6 bg-gray-50 peer-checked:block hidden">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  No! USE-IT does not actively collect waste for recycling,
                  please go to: www.recyclereconnect.co.za To find someone close
                  to you who can assist you with your waste disposal.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <label
                htmlFor="accordion-5"
                className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base sm:text-lg font-semibold pr-4">
                  I want to start a recycling business!
                </span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <input type="checkbox" id="accordion-5" className="hidden peer" />
              <div className="p-4 sm:p-6 bg-gray-50 peer-checked:block hidden">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Congratulations on your initiative and your commitment to
                  recycling and community upliftment. You have taken the first
                  of many important steps in getting started with a recycling
                  business. As with any new company or business venture the
                  first step is to gather information about the opportunity
                  before you and in this industry this can often only be
                  achieved by getting stuck into the process of collection and
                  understanding “what is out there”? At this stage it is
                  virtually impossible to support a new business as we have no
                  idea where you are, what infrastructure is in the area, the
                  current status of waste management in the area, what resources
                  you have, what you intend to collect, where the markets are,
                  etc. There is information available to assist you to get going
                  like the attached information booklet, but also information on
                  websites such as www.recycling.co.za and www.use-it.co.za Once
                  you have been active for 8 to 12 months you will have a better
                  idea of what can be collected in your area and what markets
                  there are for the product. You need to determine this yourself
                  as one can only help those that help themselves first. When
                  you have a better idea of current and potential volumes of
                  recyclables then we can collectively determine what your needs
                  are in terms of infrastructure, resources, equipment and
                  access to markets. At that point then we can determine whether
                  you need assistance with PET, cans, PE &PP, PS, glass or
                  cardboard. Then we can put you in touch with the industry
                  association that support the collection of these materials.
                  Keep accurate records of what you are collecting and selling,
                  your cash-flow, salaries, costs, etc as these can then be
                  built into a cash-flow forecast to assist in understanding and
                  motivating for the financial needs of your organisation. If
                  you show determination and commitment over a period of time
                  that shows growth and potential for investment then you will
                  never look back. Obviously we cannot support everyone who is
                  starting up, or thinking about starting up, as our own time
                  and resources are limited, and we have no idea what your real
                  needs are. That is why we – and just about any other private
                  or government organisation – will gladly assist you once you
                  have shown the initiative and commitment and prove that you
                  can recycle. The information sources on the websites provided
                  will give you more than enough information to get started,
                  then keep in touch as you achieve new targets and ask for
                  advice when needed. Once you show us what you can achieve on a
                  small-scale, then we will do whatever possible in our means to
                  then assist you through to creating a successful and
                  profitable company in the recycling sector.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <label
                htmlFor="accordion-6"
                className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base sm:text-lg font-semibold pr-4">
                  Does Use-IT help create jobs?
                </span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <input type="checkbox" id="accordion-6" className="hidden peer" />
              <div className="p-4 sm:p-6 bg-gray-50 peer-checked:block hidden">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Yes! USE-IT has been instrumental in a range of projects using
                  innovative waste benefication techniques. Through various
                  efforts USE-IT has created over 2300 jobs in the recycling and
                  waste benefication sectors and it has plans in place for
                  thousands more. Contact us for more information:
                  info@use-it.co.za or telephone +27 31 765 2349
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

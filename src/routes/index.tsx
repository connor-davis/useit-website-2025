import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className="flex flex-col w-full h-auto space-y-8 sm:space-y-16 lg:space-y-32 pb-16 sm:pb-24 lg:pb-32">
      <div className="flex flex-col w-full h-auto space-y-5 bg-primary px-4 sm:px-6 lg:px-32">
        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-32 py-8 sm:py-16 lg:py-32">
          <div className="flex flex-col w-full h-auto space-y-4 sm:space-y-5 text-primary-foreground">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              eThekwini waste material recovery industry development cluster
            </div>
            <div className="text-base sm:text-lg lg:text-xl leading-relaxed">
              Diverting waste from landfill by creating employment opportunities
              in the green economy. Building successful future entrepreneurs.
            </div>

            <div className="flex items-center justify-center lg:justify-start pt-2">
              <Link
                to="/story"
                className="block w-full sm:w-auto text-center underline bg-amber-200 text-black px-6 py-3 rounded-md hover:bg-amber-300 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>

          <img
            src="/assets/home_page_one.png"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-auto items-center justify-center">
        <div className="flex flex-col w-full h-auto space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-32 lg:w-4/5 xl:w-3/4">
          <div className="flex flex-col w-full h-auto space-y-3 sm:space-y-4 items-center justify-center">
            <div className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
              Our History
            </div>
            <div className="w-24 sm:w-32 h-1.5 sm:h-2 bg-amber-200 rounded"></div>
          </div>

          <div className="text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left">
            USE-IT has constructed a world-className facility in Hammarsdale
            that houses 10 incubators for training and skills development to
            develop SME's within the upcycling and recycling industry.
          </div>

          <div className="text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left">
            Additional source of funding for the operation of the site is
            obtained through tenancy on site and partnerships created with the
            aim of ensuring sustainable enterprises to operate under the waste
            license held by USE-IT.
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className="flex flex-col w-full h-auto space-y-5 lg:space-y-32 pb-32">
      <div className="flex flex-col w-full h-auto space-y-5 bg-primary px-5 lg:px-32">
        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-5 lg:gap-32 py-5 lg:py-32">
          <div className="flex flex-col w-full h-auto space-y-5 text-primary-foreground">
            <div className="text-4xl font-bold">
              eThekwini waste material recovery industry development cluster
            </div>
            <div className="text-xl">
              Diverting waste from landfill by creating employment opportunities
              in the green economy. Building successful future entrepreneurs.
            </div>

            <div className="flex items-center justify-center lg:justify-start">
              <Link
                to="/story"
                className="block w-32 text-center underline bg-amber-200 text-black p-2 rounded-md"
              >
                Read More
              </Link>
            </div>
          </div>

          <img src="/assets/home_page_one.png" className="w-full rounded-2xl" />
        </div>
      </div>

      <div className="flex flex-col w-full h-auto items-center justify-center">
        <div className="flex flex-col w-full h-auto space-y-8 px-5 lg:px-32 lg:w-1/2">
          <div className="flex flex-col w-full h-auto space-y-4 items-center justify-center">
            <div className="font-bold text-4xl text-center">Our History</div>
            <div className="w-32 h-2 bg-amber-200"></div>
          </div>

          <div>
            USE-IT has constructed a world-className facility in Hammarsdale
            that houses 10 incubators for training and skills development to
            develop SME's within the upcycling and recycling industry.
          </div>

          <div>
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

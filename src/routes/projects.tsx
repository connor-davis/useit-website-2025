import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col w-full h-auto space-y-32 pb-5 lg:pb-32">
      <div className="flex flex-col w-full h-auto space-y-5 bg-primary px-5 lg:px-32">
        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-5 lg:gap-32 py-5 lg:py-32">
          <div className="flex flex-col w-full h-auto space-y-5 text-white">
            <div className="text-4xl">
              Supporting <span className="font-bold">Green SMME'S</span> and
              Entrepreneurs
            </div>
          </div>

          <img
            src="/assets/projects_business_development_one.jpg"
            className="w-full rounded-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-8 px-5 lg:px-32">
        <div className="flex flex-col w-full h-auto space-y-4 items-center justify-center">
          <div className="font-bold text-4xl text-center">
            Business Development
          </div>
          <div className="w-32 h-2 bg-amber-200"></div>
        </div>

        <div>
          The waste beneficiation centre based in Hammarsdale is aimed at
          fostering innovation and entrepreneurship within the Green Economy.
          Through the development of these innovations, we have successfully
          hosted and incubated small business that now operate independently off
          site. USE-IT continues to contribute towards the reduction of waste to
          landfill.
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-5 bg-primary px-5 lg:px-32">
        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-5 lg:gap-32 py-5 lg:py-32">
          <div className="flex flex-col w-full h-auto space-y-5 text-white">
            <div className="text-4xl text-center">Our Projects</div>

            <div>
              Currently the principal focus of the beneficiation centre is
              around Green Jobs and Skills Development. USE-IT has successfully
              partnered with industry partners to complete the following
              activities over the past year. There relate to the following:
            </div>

            <div>Business Incubation:</div>

            <ul className="list-disc px-4">
              <li>Owethu Sewing Project</li>
              <li>Educational Toy Project</li>
              <li>Home Deco Tech</li>
              <li>Bowisolve</li>
              <li>Clothing 4 Repurpose</li>
            </ul>

            <div>Green Skills Training:</div>

            <ul className="list-disc px-4">
              <li>Waste Woodwork (Artisanry)</li>
              <li>Waste Classification & Sorting</li>
              <li>Glass Crushing & Operation</li>
              <li>Green Brick Manufacture & Operation</li>
              <li>Landscaping & Biodiversity</li>
              <li>Composting & Organic Gardening</li>
            </ul>
          </div>

          <img
            src="/assets/projects_business_development_two.jpg"
            className="w-full rounded-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-8 px-5 lg:px-32">
        <div className="flex flex-col w-full h-auto space-y-4 items-center justify-center">
          <div className="font-bold text-4xl text-center">
            Our Partner Incubation Programs
          </div>
          <div className="w-32 h-2 bg-amber-200"></div>
        </div>

        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-5 lg:gap-32 py-5 lg:py-32">
          <div className="flex flex-col w-full h-auto space-y-5">
            <div className="text-4xl">Owethu Sewing Project</div>

            <div>
              Born and bred in Hammasdale, Owethu Umqhele is a co-operative made
              up of a group of women from our community who had a vision that
              required nurturing. This vision fueled their determination to turn
              a small sewing business into a manufacturing powerhouse. The co-
              operative makes products such as umbrellas, school bags,
              graduation gowns, pillowcases and waste collection bags. With
              their unique style and quality fabrics, Owethu Umqhele now
              supplies its products to international clients.
            </div>
          </div>

          <img
            src="/assets/owethu_sewing_project.jpg"
            className="w-full max-h-[500px] object-cover rounded-2xl"
          />
        </div>

        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-5 lg:gap-32 py-5 lg:py-32">
          <div className="flex flex-col w-full h-auto space-y-5">
            <div className="text-4xl">Educational Toy Project</div>

            <div>
              Cultivating great partnerships is one of the best strategies for
              any business. Nokulunga Ngcobo and Cebo Cele have been a great
              example of this value, a testament to the power of partnerships,
              persistence, innovation and the belief that starting small can
              lead into something extraordinary. Home Deco Tech specializes in
              manufacturing ECD toys, using waste wood sponsored by CHEP. The
              importance of motor skill development in early childhood
              development is instilled into the fabric of this project. Home
              Deco Tech also has a showroom on site to display their custom-made
              furniture, which is another income stream to the project.
            </div>
          </div>

          <img
            src="/assets/educational_toy_project.jpg"
            className="w-full max-h-[500px] object-cover rounded-2xl"
          />
        </div>

        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-5 lg:gap-32 py-5 lg:py-32">
          <div className="flex flex-col w-full h-auto space-y-5">
            <div className="text-4xl">Ikhwezi Bakery</div>

            <div>
              Serving both corporate and local consumers, Ikhwezi Bakery has
              become a specialist in delicious pasties and treats. The bakery is
              owned by Phindile Zungu who is very passionate about her business.
              Just like all start-ups Ikhwezi Bakery also faced challenges that
              tested our resilience with Covid19, but their resilience became
              the seeds in which the business roots have been built on. The
              bakery produces products such as bread, birthday cakes, muffins,
              cupcakes, doughnut’s, cream cakes and is a bread supplier to a
              number of retailers.
            </div>
          </div>

          <img
            src="/assets/ikhwezi_bakery_project.jpg"
            className="w-full max-h-[500px] object-cover rounded-2xl"
          />
        </div>

        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-5 lg:gap-32 py-5 lg:py-32">
          <div className="flex flex-col w-full h-auto space-y-5">
            <div className="text-4xl">Clothing 4 Repurpose</div>

            <div>
              Crafting has been one of our key projects in our drive for
              upcycling. When learnership opportunities came through our
              sponsors, Nkanyiso Ntanzi and Noxolo Madela were the first to grab
              this opportunities with both hands and have been involved in
              crafting fashion products using waste. With their vision to
              redefine waste, celebrate creativity, and fashion a world where
              every discarded item is an opportunity for beauty and purpose,
              this partnership, armed with creativity and a passion for
              sustainability, have seen potential where others see only trash.
              Over the next years we hope the Clothing Repurpose project will
              grow from strength.
            </div>
          </div>

          <img
            src="/assets/clothing_for_repurpose_project.jpg"
            className="w-full max-h-[500px] object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-5 bg-primary px-5 lg:px-32">
        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-5 lg:gap-32 py-5 lg:py-32">
          <div className="flex flex-col w-full h-auto space-y-5 text-white">
            <div className="text-4xl">
              Driving <span className="font-bold">Economic Opportunities</span>{' '}
              in <span className="font-bold">Waste</span>
              Diversion
            </div>
          </div>

          <img
            src="/assets/projects_innovation_in_waste.jpg"
            className="w-full rounded-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-auto items-center justify-center">
        <div className="flex flex-col w-full h-auto space-y-8 px-5 lg:px-32 lg:w-1/2">
          <div className="flex flex-col w-full h-auto space-y-4 items-center justify-center">
            <div className="font-bold text-4xl text-center">
              Innovation in Waste
            </div>
            <div className="w-32 h-2 bg-amber-200"></div>
          </div>

          <div>
            USE-IT is a Section 21 Non-Profit Organisation with PBO status. The
            focus of diverting waste from landfill through innovative solutions
            to create employers utilizing waste as a resource has secured USE-IT
            with award winning and accredited technologies, that are small scale
            and easy to replicate. By partnering with USE-IT we can help you
            understand your own waste streams and where to divert it within the
            waste value chain, the collaboration of producers of waste and
            diversion to waste economies will provide your business with
            enterprise development opportunities. USE-IT provides robust
            reporting on beneficiaries, impact and sustainability.
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-8 px-5 lg:px-32">
        <div className="flex flex-col w-full h-auto space-y-4 items-center justify-center">
          <div className="font-bold text-4xl text-center">
            Our Innovation Projects
          </div>
          <div className="w-32 h-2 bg-amber-200"></div>
        </div>

        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-5 lg:gap-32 py-5 lg:py-32">
          <div className="flex flex-col w-full h-auto space-y-5">
            <div className="text-4xl">Good Economy Project</div>

            <div>
              Although USE-IT did not receive any direct funding through the
              project we utilized the opportunity to partner with Litter4Tokens
              in 2022 to stimulate the economy through waste collection. The
              project provided 300 waste collectors with a monthly stipend for 3
              days work with a target of a number of bags attached to the
              payment. This project has injected over R5 million back into the
              economy of Durban.
            </div>
          </div>

          <img
            src="/assets/goodeconomy_project.png"
            className="w-full max-h-[500px] object-cover rounded-2xl"
          />
        </div>

        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-5 lg:gap-32 py-5 lg:py-32">
          <div className="flex flex-col w-full h-auto space-y-5">
            <div className="text-4xl">Establishment of Buy-Back Centres</div>

            <div className="text-xl">Kwandengezi Waste Collectors Network</div>

            <div>
              We have experienced some challenges in securing a suitable work
              site in Kwandengezi, however engagements with the City is ongoing.
              We have however continued to service waste diversion in the area
              through a network collection program with Outer West Recycling and
              PAT Recycling who currently collect waste from 120 project
              participants on a weekly basis.
            </div>
          </div>

          <img
            src="/assets/wastcollector_project.png"
            className="w-full max-h-[500px] object-cover rounded-2xl"
          />
        </div>

        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-5 lg:gap-32 py-5 lg:py-32">
          <div className="flex flex-col w-full h-auto space-y-5">
            <div className="text-4xl">Establishment of Buy-Back Centres</div>

            <div className="text-xl">
              Clermont / New Germany - Big Start Recycling
            </div>

            <div>
              Starting with just a fence, a container and shaded roof covering
              we engaged with Big Start Training to establish a collection site
              and incorporated 135 waste collectors through the Good Economy
              Project, supplying waste to this site. This provided Big Start
              with free waste and paid 135 waste collectors a stipend on a
              monthly basis. This venture attracted additional investment
              through Inkwazi Isu and associated partners and Big Start now turn
              over 30 tons a month of waste into the recycling value chain. They
              have now also received additional support from Polyco and
              Pack-a-Ching.
            </div>
          </div>

          <img
            src="/assets/bigstart_wastcollector_project.png"
            className="w-full max-h-[500px] object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-auto items-center justify-center space-y-8 px-5 lg:px-32">
        <div className="flex flex-col w-full h-auto space-y-8 lg:w-1/2">
          <div className="flex flex-col w-full h-auto space-y-4 items-center justify-center">
            <div className="font-bold text-4xl text-center">
              Waste Diversion
            </div>
            <div className="w-32 h-2 bg-amber-200"></div>
          </div>

          <div>
            Through collaboration with our partners, USE-IT has facilitated the
            diversion of waste from landfill at the Hammarsdale facility, this
            equates to R3,388,140.00 cost to landfill savings, which is a return
            of investment of 41% to the eThekwini Municipality Grant funding.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 w-full h-auto gap-5">
          <div className="flex flex-col w-full h-auto items-center justify-center bg-primary text-white p-5 rounded-2xl space-y-5">
            <div className="text-4xl font-bold">Glass</div>

            <div className="text-4xl">833.9 tons</div>
          </div>

          <div className="flex flex-col w-full h-auto items-center justify-center bg-primary text-white p-5 rounded-2xl space-y-5">
            <div className="text-4xl font-bold">Waste</div>

            <div className="text-4xl">844.9 tons</div>
          </div>

          <div className="flex flex-col w-full h-auto items-center justify-center bg-primary text-white p-5 rounded-2xl space-y-5">
            <div className="text-4xl font-bold">Upcycling</div>

            <div className="text-4xl">4 tons</div>
          </div>

          <div className="flex flex-col w-full h-auto items-center justify-center bg-primary text-white p-5 rounded-2xl space-y-5">
            <div className="text-4xl font-bold">Food Waste</div>

            <div className="text-4xl">77.9 tons</div>
          </div>
        </div>

        <div className="text-2xl">Total of 1,760.70 tons of waste diverted</div>

        <div className="grid grid-cols-1 lg:grid-cols-4 w-full h-auto gap-5">
          <div className="flex flex-col w-full h-auto items-center justify-center bg-primary text-white p-5 rounded-2xl space-y-5">
            <div className="text-4xl font-bold">R1.5m</div>
          </div>

          <div className="flex flex-col w-full h-auto items-center justify-center bg-primary text-white p-5 rounded-2xl space-y-5">
            <div className="text-4xl font-bold">R1.5m</div>
          </div>

          <div className="flex flex-col w-full h-auto items-center justify-center bg-primary text-white p-5 rounded-2xl space-y-5">
            <div className="text-4xl font-bold">R7k</div>
          </div>

          <div className="flex flex-col w-full h-auto items-center justify-center bg-primary text-white p-5 rounded-2xl space-y-5">
            <div className="text-4xl font-bold">R1.40k</div>
          </div>
        </div>

        <div className="text-2xl">
          Total of R1,800.00 per ton = R3,169 260.00 cost to landfill (savings)
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 w-full h-auto gap-5">
          <div className="flex flex-col w-full h-auto items-center justify-center bg-primary text-white p-5 rounded-2xl space-y-5">
            <div className="text-4xl font-bold">R333k</div>
          </div>

          <div className="flex flex-col w-full h-auto items-center justify-center bg-primary text-white p-5 rounded-2xl space-y-5">
            <div className="text-4xl font-bold">R1.2m</div>
          </div>

          <div className="flex flex-col w-full h-auto items-center justify-center bg-primary text-white p-5 rounded-2xl space-y-5">
            <div className="text-4xl font-bold">R4k</div>
          </div>

          <div className="flex flex-col w-full h-auto items-center justify-center bg-primary text-white p-5 rounded-2xl space-y-5">
            <div className="text-4xl font-bold">R0</div>
          </div>
        </div>

        <div className="text-2xl">
          Total of R1,533,004.00 earned by Waste Collectors
        </div>

        <div className="text-2xl">Return on investment: R4,702,264.00</div>

        <div className="flex flex-col w-full h-auto space-y-8 px-5 lg:px-32 items-center justify-center">
          <img
            src="/assets/waste_diversion_graph.png"
            className="w-full lg:w-[50%]"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-5 bg-primary px-5 lg:px-32">
        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-5 lg:gap-32 py-5 lg:py-32">
          <div className="flex flex-col w-full h-auto space-y-5 text-white">
            <div className="text-4xl">
              Reshaping Outer West Recycling & Key Bricks Pty Ltd
            </div>
          </div>

          <img
            src="/assets/projects_smme.jpeg"
            className="w-full rounded-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-8 px-5 lg:px-32">
        <div className="flex flex-col w-full h-auto space-y-4 items-center justify-center">
          <div className="font-bold text-4xl text-center">SMME Development</div>
          <div className="w-32 h-2 bg-amber-200"></div>
        </div>

        <div>
          A partnership has been established to support the growth of Outer West
          Recycling, a local SMME that collects waste and consolidates for
          volumetric sale into recycling. Musa Gwala who runs the business has
          partnered with USE-IT under a business incubation program and collects
          waste from Kwandengezi, Dassenhoek, Tshelinyama and Hammarsdale under
          the USE-IT programs.
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-8 px-5 lg:px-32">
        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-5 lg:gap-32 py-5 lg:py-32">
          <div className="flex flex-col w-full h-auto space-y-5">
            <div className="text-4xl">KEY Bricks (Pty) Ltd:</div>

            <div>
              USE-IT has entered into a collaboration with the CSIR and KEY
              Bricks to establish a demonstration site at the Hammarsdale Waste
              Beneficiation Centre. The development of a green interlocking
              block, utilising both glass and building rubble as part of the
              material provides as solution to glass beneficiation and building
              rubble to Durban. With the establishment of the demonstration site
              we aim to enter the market with a sustainable, circular
              alternative building material to solve the current housing
              backlog. The intention is to replicate the operations through SMME
              development into other areas.
            </div>
          </div>

          <img
            src="/assets/projects_keybricks_smme.png"
            className="w-full max-h-[500px] object-cover rounded-2xl"
          />
        </div>

        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-2 gap-5 lg:gap-32 py-5 lg:py-32">
          <div className="flex flex-col w-full h-auto space-y-5">
            <div className="text-4xl">Outer West & Recycling:</div>

            <div>
              A partnership has been established to support the growth of Outer
              West Recycling, a local SMME that collects waste and consolidates
              for volumetric sale into recycling. Musa Gwala who runs the
              business has partnered with USE-IT under a business incubation
              program and collects waste from Kwandengezi, Dassenhoek,
              Tshelinyama and Hammarsdale under the USE-IT programs
            </div>
          </div>

          <img
            src="/assets/projects_outerwest_smme.jpeg"
            className="w-full max-h-[500px] object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-auto space-y-8 px-5 lg:px-32">
        <div className="flex flex-col w-full h-auto space-y-4 items-center justify-center">
          <div className="font-bold text-4xl text-center">Our Partners</div>
          <div className="w-32 h-2 bg-amber-200"></div>
        </div>

        <div className="grid grid-cols-1 w-full items-center h-auto lg:grid-cols-3 2xl:grid-cols-5 gap-5 py-5 lg:py-32">
          <div className="flex flex-col w-full items-center justify-center">
            <img
              src="/assets/outer_west_recycling_partner.png"
              className="w-auto"
            />
          </div>

          <div className="flex flex-col w-full items-center justify-center">
            <img src="/assets/bugology_partner.png" className="w-auto" />
          </div>

          <div className="flex flex-col w-full items-center justify-center">
            <img src="/assets/keybricks_partner.png" className="w-auto" />
          </div>

          <div className="flex flex-col w-full items-center justify-center">
            <img src="/assets/niya_consulting_partner.jpg" className="w-auto" />
          </div>

          <div className="flex flex-col w-full items-center justify-center">
            <img
              src="/assets/ethekwini_municipality_partner.jpg"
              className="w-auto"
            />
          </div>

          <div className="flex flex-col w-full items-center justify-center">
            <img src="/assets/bowisolve_partner.jpg" className="w-auto" />
          </div>

          <div className="flex flex-col w-full items-center justify-center">
            <img src="/assets/csir_partner.png" className="w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

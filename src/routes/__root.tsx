import { Outlet, createRootRoute } from '@tanstack/react-router';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});

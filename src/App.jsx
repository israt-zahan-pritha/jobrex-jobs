// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "./components/ui/button";
import { ThemeProvider } from "./components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import About from "./pages/About";

// import AllJobs from "./pages/AllJobs";
const router = createBrowserRouter([
  {
    // path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  // {
  //   path: "/jobs",
  //   element: <AllJobs />,
  // },
]);

export default function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {" "}
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
{
  /* <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button>Learn More</Button>
        </div> */
}

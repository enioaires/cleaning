import { Banner } from "@/components/layout/banner";
import { Contact } from "@/components/layout/contact";
import { Display } from "@/components/layout/display";
import { Services } from "@/components/layout/services";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="py-4 sm:py-8" />
      <Banner />
      <div className="py-6 sm:py-12" />
      <Services />
      <div className="py-6 sm:py-8" />
      <Display />
      <div className="py-6 sm:py-8" />
      <Contact />
    </div>
  );
}

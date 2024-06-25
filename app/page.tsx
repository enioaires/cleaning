import { Banner } from "@/components/layout/banner";
import { Contact } from "@/components/layout/contact";
import { Display } from "@/components/layout/display";
import { Header } from "@/components/layout/header";
import { Services } from "@/components/layout/services";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-2 mb-12">
      <div className="py-4" />
      <Banner />
      <div className="py-12" />
      <Services />
      <div className="py-8" />
      <Contact />
      <div className="py-8" />
      <Display />
    </div>
  );
}

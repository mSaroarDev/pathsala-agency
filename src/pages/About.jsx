import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import TechnologyCard from "../components/TechnologyCard";
import pricingPackage from "../data/pricing";
import PricingCard from "../components/PricingCard";

const AboutPage = () => {
  const pricingPlans = pricingPackage;
  return (
    <>
      {/* about section start */}
      <section className="bg-[#FFF8FE] font-ador-noirrit-regular overflow-hidden">
        <main className="px-5 flex flex-wrap lg:flex-nowrap items-center justify-between">
          <div className="h-[600px] flex w-full items-center">
            <div className="flex items-end justify-end z-10">
              <img src="/hero-image.svg" alt="" className="scale-110" />
            </div>
            <div className="z-40 text-center lg:text-left">
              <h1 className="text-[40px] lg:text-[60px] font-bold">
                আমাদের সম্পর্কে
              </h1>
              <p className="mt-3">
                পাঠশালা হলো একটি অনলাইন ডিজিটাল এজেন্সী। যা একটি স্কুল, কলেজ
                অথবা কোচিং সেন্টারের জন্য একটি যুগোপযোগী Software as a Service
                (SAAS) প্রডাক্ট হিসেবে সেবা দিয়ে থাকে।
              </p>
              <Link to="/about" href="#package-section" className="button-main">
                প্যাকেজ গুলো দেখুন
              </Link>
            </div>
          </div>
        </main>
      </section>
      {/* about section end */}

      {/* our services section start */}
      <section className="py-20 font-ador-noirrit-regular">
        <main className="px-5">
          <div className="__section_title text-center">
            <h2 className="text-[28px] font-semibold">আমাদের কার্যক্রম সমূহ</h2>

            <div className="mt-10 text-[18px] flex flex-col gap-y-3">
              <p className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#ff5800]" />
                <span>
                  স্কুল, কলেজ, বিশ্ববিদ্যালয় এবং কোচিং সেন্টারের জন্য ওয়েবসাইট
                  তৈরী করা।
                </span>
              </p>

              <p className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#ff5800]" />
                <span>শিক্ষা ম্যানেজমেন্ট অ্যাপ্লিকেশন তৈরী করা।</span>
              </p>

              <p className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#ff5800]" />
                <span>বিভিন্ন ধরনের SAAS প্রডাক্ট তৈরী করা।</span>
              </p>
            </div>
          </div>

          <div className="__section_title text-center">
            <h2 className="text-[28px] font-semibold">এছাড়াও আমরা যা করি</h2>

            <div className="mt-10 text-[18px] flex flex-col gap-y-3">
              <p className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#ff5800]" />
                <span>সব ধরনের ওয়েবসাইট তৈরী করা।</span>
              </p>

              <p className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#ff5800]" />
                <span>সব ধরনের সফটওয়ার তৈরী করা।</span>
              </p>

              <p className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#ff5800]" />
                <span>অনলাইনে কম্পিউটার ট্রেনিং দেওয়া।</span>
              </p>
            </div>
          </div>
        </main>
      </section>
      {/* our services section end */}

      {/* out technologies section start */}
      <section className="py-20 font-ador-noirrit-regular">
        <main className="px-5">
          <div className="__section_title text-center">
            <h2 className="text-[28px] font-semibold">
              আমরা কাজ করছি ১০+ টেকনোলজি নিয়ে
            </h2>
            <p className="mt-5">
              আমরা কাজ করছি সব Latest Features সমূহ নিয়ে। যার ফলশ্রূতিতে
              ওয়েবসাইট লোড হয় দ্রুত। <br /> এবং ব্যবহারকারী পায় একটি Smooth
              ব্রাউজিং Experience
            </p>
          </div>

          <div className="__items flex flex-wrap items-center justify-center gap-x-10 gap-y-5 mt-10">
            <TechnologyCard image="/JavaScript-js-logo.png" text="JavaScript" />
            <TechnologyCard image="/react.png" text="React JS" />
            <TechnologyCard image="/next-js.svg" text="Next.js" />
            <TechnologyCard image="/node.png" text="Node JS" />
            <TechnologyCard image="/prisma.png" text="Prisma" />
            <TechnologyCard image="/mongodb.svg" text="MongoDB" />
            <TechnologyCard image="/mysql.png" text="MySql" />
          </div>
        </main>
      </section>
      {/* out technologies section end */}

      {/* package section scroll */}
      <div id="package-section"></div>
      {/* price plan start */}
      <section className="py-20 font-ador-noirrit-regular">
        <main className="px-5">
          <div className="__section_title text-center">
            <h2 className="text-[28px] font-semibold">আমাদের প্যাকেজ সমূহ</h2>
            <p className="mt-5">
              এক নজরে আমাদের চলমান প্যাকেজ সমুহ। যা বিভিন্ন ধরনের সুবিধা প্রদান
              করে।
            </p>
          </div>

          <div className="__cards grid grid-cols-12 gap-10 mt-10">
            {pricingPlans &&
              pricingPlans.map((plan, i) => (
                <PricingCard key={i} data={plan} />
              ))}
          </div>
        </main>
      </section>
      {/* price plan end */}
    </>
  );
};

export default AboutPage;

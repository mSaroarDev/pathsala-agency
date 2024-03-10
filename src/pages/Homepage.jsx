import PricingCard from "../components/PricingCard";
import SendMessageModal from "../components/SendMessageModal";
import TechnologyCard from "../components/TechnologyCard";
import pricingPackage from "../data/pricing";

const Homepage = () => {
  const pricingPlans = pricingPackage;

  return (
    <>
      {/* <Nav /> */}

      {/* hero section start */}
      <section className="bg-[#FFF8FE] font-ador-noirrit-regular overflow-hidden">
        <main className="px-5 flex flex-wrap lg:flex-nowrap items-center justify-between">
          <div className="h-[600px] flex w-full items-center">
            <div className="z-40 text-center lg:text-left">
              <h1 className="text-[40px] lg:text-[60px] font-bold">
                স্কুল ম্যানেজমেন্ট সার্ভিস
              </h1>
              <p className="mt-3">
                এক প্যকেজে ওয়েবসাইট, শিক্ষক ড্যাশবোর্ড, পরীক্ষার ফলাফল, ম্যাপ
                সবকিছু, গ্যালারী, শিক্ষক প্যানেল, শিক্ষার্থী প্যানেল সবকিছুই।
                সাথে নতুন ফিচারস সমূহ অ্যাড হয়ে যাবে অটোমেটিক্যালী।
              </p>
              <a href="#package-section" className="button-main mt-5">
                মাত্র ২৯৯/- টাকা থেকে শুরু
              </a>
            </div>
          </div>
          <div className="flex items-end justify-end z-10">
            <img src="/hero-image.svg" alt="" className="scale-110" />
          </div>
        </main>
      </section>
      {/* hero section end */}

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

      {/* super fast section start */}
      <section className="py-20">
        <main className="px-5">
          <div className="flex items-center justify-between gap-10">
            <div className="w-full hidden lg:block">
              <img src="/about.webp" alt="" />
            </div>
            <div className="w-full">
              <h2 className="font-semibold text-[50px] leading-[45px] mb-5 font-ador-noirrit-semibold">
                Superfast স্পিডের সাথে Super Smooth Experience
              </h2>
              <p className="font-ador-noirrit-regular text-[17px]">
                আমরা ব্যবহার করেছি সুপার ফাস্ট Singapore Server Vertual Private
                Server. যাতে করে প্রতিটা ইউজার পাবে মনে রাখার মতো এক্সপেরিয়েন্স।
                এবং ডাটা ম্যানেজমেন্ট এর জন্য ব্যবহার করা হয়েছে সর্বাধিক জনপ্রিয়
                MongoDB এবং MySql ডাটাবেজ।
              </p>

              <a
                href="#package-section"
                className="button-main font-ador-noirrit-semibold mt-5"
              >
                অর্ডার করুন
              </a>
            </div>
          </div>
        </main>
      </section>
      {/* super fast section end */}

      {/* accordion section start */}
      <section className="py-20 font-ador-noirrit-regular">
        <main className="px-5">
          <div className="__section_title text-center">
            <h2 className="text-[28px] font-semibold">
              সর্বাধিক জিজ্ঞাসিত প্রশ্নাবলী
            </h2>
            <p className="mt-5">
              সার্ভিস নেওয়ার আগে প্রয়োজনীয় কিছু প্রশ্নাবলী যা অবশ্যই জানা উচিত
            </p>
          </div>

          <div className="__faqs flex items-start justify-between gap-7 mt-7 font-ador-noirrit-regular">
            <div className="flex flex-col gap-3 w-full">
              <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-bold">
                  সার্ভিস চার্জ কিভাবে নেওয়া হয়?
                </div>
                <div className="collapse-content">
                  <p>
                    প্রতি প্যাকেজের সাথে উল্লিখিত চার্জ প্রতি মাসে অগ্রীম নেওয়া
                    হয়। এছাড়া অন্য কোন চার্জ নেওয়া হয় না।
                  </p>
                </div>
              </div>
              <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-bold">
                  সার্ভিস ফি কিভাবে পেমেন্ট করবো?
                </div>
                <div className="collapse-content">
                  <p>
                    প্রতি মাসের ফি প্রতি মাসে পেমেন্ট করতে হয়। আপনি বিকাশ, রকেট,
                    নগদের মাধ্যমে আমাদের বিজনেস নম্বরে অথবা পারসোনাল নম্বরে
                    প্রেরন করতে হয়।
                  </p>
                </div>
              </div>
              <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-bold">
                  উল্লিখিত প্যাকেজ এর সার্ভিস চার্জ ছাড়া কি অন্য কোন ফি নেওয়া
                  হয়?
                </div>
                <div className="collapse-content">
                  <p>
                    না। প্যাকেজের সাথে উল্লিখিত চার্জ ছাড়া অন্য কোন Hidden চার্জ
                    নাই।{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-bold">
                  প্রতি মাসের কত তারিখের মধ্যে পেমেন্ট করতে হবে?
                </div>
                <div className="collapse-content">
                  <p>
                    প্রতি মাসের ০১ তারিখের মধ্যেই পেমেন্ট সম্পন্ন করতে হবে।
                    তাছাড়া আপনার সার্ভিসটি অটোমেটিক বন্ধ হয়ে যাবে।
                  </p>
                </div>
              </div>
              <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-bold">
                  নতুন ফিচারস সমূহ কিভাবে যুক্ত হবে?
                </div>
                <div className="collapse-content">
                  <p>
                    নতুন কোন ফিচারস আসার সাথে সাথেই আপনার ওয়েবসাইট এ অটোমেটিক তা
                    যুক্ত হয়ে যাবে। এবং এই ব্যাপারে আপনাকে নোটিফিকেশন এর মাধ্যমে{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      {/* accordion section end */}

      {/* ready to help section start */}
      <section className="py-20">
        <main className="px-5">
          <div className="flex items-center justify-between gap-10">
            <div className="w-full">
              <h2 className="font-semibold text-[50px] leading-[50px] mb-5 font-ador-noirrit-semibold">
                আমাদের সার্ভিস দিয়ে আপনাকে শতভাগ সন্তুষ্ট করতে আমরা দৃঢ়
                প্রতিজ্ঞাবদ্ধ
              </h2>
              <p className="font-ador-noirrit-regular text-[17px]">
                কোন Hidden চার্জ ছাড়াই আপনার সার্ভিস নিয়ে নিন আজই। এখনই আমাদের
                মেসেজ দিন। আর ২৪ ঘন্টার মধ্যে আপনার ওয়েবসাইট লাইভ করুন।
              </p>

              <SendMessageModal />
            </div>
            <div className="w-full hidden lg:block">
              <img src="/ready.webp" alt="" />
            </div>
          </div>
        </main>
      </section>
      {/* ready to help section end */}

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

      {/* start talking section */}
      <section className="py-20 bg-[#433E89] font-ador-noirrit-regular text-white">
        <main className="px-5 flex items-center justify-between gap-5">
          <div>
            <h1 className="font-bold text-[35px]">
              প্রজেক্ট শুরু করতে আমাদের সাথে কথা বলুন
            </h1>
            <p>
              যেকোন ধরনের প্রজেক্ট অথবা অর্ডার করার জন্য শুরুতে আমাদের সাথে কথা
              বলার জন্য বিশেষভাবে অনুরোধ করছি। <br /> যাতে করে পরবর্তীতে কোন
              পক্ষকেই কোন প্রকার ভুল বুঝাবুঝির মধ্যে পড়তে না হয়।
            </p>
          </div>
          <div>
            <button className="bg-transparent border-[2px] border-white rounded-full px-5 py-2">
              আমাদের সাথে কথা বলুন
            </button>
          </div>
        </main>
      </section>
      {/* start talking section */}

      {/* <Footer /> */}
    </>
  );
};

export default Homepage;

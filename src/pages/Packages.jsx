import PricingCard from "../components/PricingCard";
import pricingPackage from "../data/pricing";

const PackagesPage = () => {
  const pricingPlans = pricingPackage;

  return (
    <>
      {/* package section scroll */}
      <div id="package-section" className="mt-24"></div>
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

export default PackagesPage;

import { CheckCircle, X } from "lucide-react";

const PricingCard = ({ data }) => {
  return (
    <>
      <div className="col-span-12 lg:col-span-4 bg-[#FFF8FE] p-7 rounded-md">
        <div className="h-[450px] w-full flex flex-col items-start justify-between">
          <div className="w-full flex flex-col items-start justify-start gap-3">
            <h3 className="px-4 py-1 border-[2px] border-[#292929] rounded-full uppercase">
              {data?.packageName}
            </h3>

            <h3 className="font-bold">
              <span className="text-[#ff5800] text-[30px]">
                {" "}
                ৳ {data?.price}/- টাকা
              </span>{" "}
              / <span className="text-[#ff5800] text-[18px"> প্রতি মাস</span>
            </h3>
            <hr />
            <div className="__items flex flex-col gap-4">
              {data?.features &&
                data?.features.map((feature, i) => {
                  return (
                    <h4 key={i} className="flex items-center gap-3">
                      {feature?.serviceGiven == true ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <X className="h-5 w-5 text-red-600" />
                      )}
                      <span className="w-full">{feature?.text}</span>
                    </h4>
                  );
                })}
            </div>
          </div>

          <div>
            <a href="#" className="button-main w-full">
              অর্ডার করুন
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;

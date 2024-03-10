const SendMessageModal = () => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="button-main font-ador-noirrit-semibold mt-5"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        এখনই মেসেজ করুন
      </button>
      <dialog id="my_modal_3" className="modal font-ador-noirrit-regular">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">
            মেসেজ করতে নিচের তথ্যগুলো পুরন করুন।
          </h3>
          <p className="py-4">
            <form className="w-full flex flex-col items-start gap-2">
              <label htmlFor="text">আপনার ইমেইল দিন</label>
              <input type="text" placeholder="email@gmail.com" />
              <label htmlFor="text">আপনার নাম</label>
              <input type="text" placeholder="Saroar Jahan" />
              <label htmlFor="text">মোবাইল নম্বর</label>
              <input type="text" placeholder="017********" />
              <label htmlFor="text">মেসেজ</label>
              <textarea cols="30" rows="3" className="resize-none"></textarea>

              <button className="button-main">সেন্ড করুন</button>
            </form>
          </p>
        </div>
      </dialog>
    </>
  );
};

export default SendMessageModal;

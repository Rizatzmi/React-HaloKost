import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar />
      <div className="h-64 bg-[url('/public/Contact.jpg')] bg-cover bg-center"></div>
      <div className="grid grid-cols-3 px-28 py-8">
        <div className="col-span-1 pr-8">
          <h2 className="text-2xl font-semibold mb-4">Informasi Kontak</h2>
          <div>
            <p className="text-gray-600">Email: support@halokost.com</p>
            <p className="text-gray-600">Telepon: (123) 456-7890</p>
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Hubungi Kami</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">
                Nama
              </label>
              <input
                type="text"
                className="border-[1px] border-gray-300 p-2 w-full rounded-md"
                placeholder="Nama Anda"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="border-[1px] border-gray-300 p-2 w-full rounded-md"
                placeholder="Email Anda"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">
                Pesan
              </label>
              <textarea
                className="border-[1px] border-gray-300 p-2 w-full rounded-md h-32"
                placeholder="Tulis pesan Anda..."
              />
            </div>
            <button
              className="bg-sky-800 text-white px-8 py-2 rounded-sm"
              type="submit"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

import React, { useEffect } from "react";
import Navbar from "./Navbar";
import {
  FaCoins,
  FaHeadset,
  FaMagnifyingGlass,
  FaMessage,
} from "react-icons/fa6";
import kosts from "./DataKost";
import KostCard from "./KostCard";
import FAQS from "./FAQ";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar isHome={true} />
      <div className="relative h-screen flex flex-col justify-center items-center text-white text-center bg-[url('/public/background.jpg')] bg-cover">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-4xl font-semibold z-10 mb-3">
          Selamat Datang di HaloKost, Persembahan dari ItProper
        </h1>
        <p className="text-xl line-clamp-2 w-1/2 z-10 mb-5">
          Temukan kost dalam transparansi keterjangkauan dan kenyamanan yang
          disesuaikan dengan kebutuhan Anda.
        </p>
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Cari kost..."
            className="bg-slate-50 bg-opacity-10 backdrop-filter backdrop-blur-sm w-80 px-2 pl-5 py-3 border-2 border-white text-white focus:outline-none rounded-full placeholder:text-white"
          />
          <NavLink to="/gallery">
            <button className="absolute right-5 bottom-1/2 translate-y-1/2">
              <FaMagnifyingGlass />
            </button>
          </NavLink>
        </div>
      </div>
      <div className="mt-10 px-28 flex flex-col gap-3 items-center">
        <h1 className="text-black font-semibold text-4xl text-center">
          Kost Unggulan
        </h1>
        <div className="mt-5 grid grid-cols-4 gap-5">
          {kosts.slice(0, 4).map((kost) => (
            <KostCard
              key={kost.id}
              judul={kost.judul}
              alamat={kost.alamat}
              harga={kost.harga}
              tipe={kost.tipe}
              gambar={kost.gambar_kamartidur}
            />
          ))}
        </div>
        <NavLink to="/gallery">
          <button className="bg-sky-800 rounded-md px-3 py-2 mt-6 text-white font-medium">
            Temukan Kost Lainnya
          </button>
        </NavLink>
      </div>
      <div className="py-10 px-28">
        <h1 className="font-semibold text-4xl text-center">
          Mengapa Memilih Kami?
        </h1>
        <div className="grid grid-cols-3 gap-2 mt-10">
          <div className="text-center items-center flex flex-col gap-3">
            <FaMessage className="text-sky-800 text-6xl" />
            <h1 className="text-lg font-semibold">Transparansi Informasi</h1>
            <p className="text-sm px-5">
              Kami mengutamakan keterbukaan. Setiap informasi yang kami sajikan
              merupakan data apa adanya, memastikan kehadiran transparansi.
            </p>
          </div>
          <div className="text-center items-center flex flex-col gap-3">
            <FaHeadset className="text-sky-800 text-6xl" />
            <h1 className="text-lg font-semibold">Konsultasi Professional</h1>
            <p className="text-sm px-5">
              Didukung oleh ItProper, konsultan properti terpercaya Anda.
              Manfaatkan saran dan wawasan yang transparan untuk membuat
              keputusan yang terinformasi tentang kost Anda.
            </p>
          </div>
          <div className="text-center items-center flex flex-col gap-3">
            <FaCoins className="text-sky-800 text-6xl" />
            <h1 className="text-lg font-semibold">Tanpa Biaya Tersembunyi</h1>
            <p className="text-sm px-5">
              Kami percaya pada harga yang jelas dan tetap. Tidak ada biaya
              tersembunyi atau tambahan. Harga yang Anda lihat adalah harga yang
              Anda bayarkan, menormalisasi transaksi yang jujur dan terbuka.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 px-40 bg-sky-800">
        <div className="bg-[#EAF1F5] px-28 py-12">
          <h1 className="text-black font-semibold text-4xl text-center">
            Misi Kami
          </h1>
          <p className="mt-5 text-black font-normal italic text-lg mb-8 text-center px-10">
            HaloKost hadir dengan misi utama untuk membawa transparansi ke dalam
            pengalaman pencarian kost yang terjangkau dan nyaman. Kami
            berkomitmen menyediakan pilihan kost yang transparan dan terseleksi
            sesuai dengan kebutuhan Anda. Dihadirkan oleh ItProper, konsultan
            properti terpercaya, kami menekankan transparansi dalam setiap
            langkah pencarian, memberikan informasi jelas dan terpercaya.
            HaloKost membawa kost sesuai gaya hidup Anda dengan jujur dan
            transparan, menjadikan pengalaman pencarian Anda lebih mudah dan
            terpercaya.
          </p>
        </div>
      </div>
      <div className="px-28 py-16">
        <h1 className="font-semibold text-4xl text-center">
          Bagaimana Cara Kerjanya?
        </h1>
        <FAQS />
      </div>
      <Footer />
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import kosts from "./DataKost";
import KostCard from "./KostCard";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  const filteredKosts = kosts.filter((kost) =>
    kost.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar isHome={false} />
      <div className="px-28 py-28">
        <h1 className="text-3xl font-semibold">Temukan Kost Impianmu</h1>
        <div className="flex mt-5 gap-3">
          <input
            type="text"
            placeholder="Cari kost..."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSearch();
              }
            }}
            className="bg-white px-2 pl-5 py-3 flex-grow focus:outline-none rounded-md"
          />
          <button
            onClick={handleSearch}
            className="bg-sky-800 px-6 text-white font-medium rounded-md"
          >
            Cari
          </button>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-5">
          {filteredKosts.map((kost) => (
            <Link to={`/gallery/${kost.id}`} key={kost.id}>
              <KostCard
                judul={kost.judul}
                alamat={kost.alamat}
                harga={kost.harga}
                tipe={kost.tipe}
                gambar={kost.gambar_kamartidur}
              />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;

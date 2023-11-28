import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import kosts from "./DataKost";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { FaHouzz, FaLeaf, FaLightbulb, FaWater, FaWind } from "react-icons/fa6";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Detail = () => {
  const { id } = useParams();
  const kost = kosts.find((k) => k.id === parseInt(id));
  const [location, setLocation] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const lat = kost.lat;
    const lng = kost.long;
    setLocation({ lat, lng });
  }, [kost]);

  if (!kost) {
    return <div>Kost tidak ditemukan</div>;
  }

  return (
    <>
      <Navbar isHome={false} />
      <div className="px-28 py-28">
        <div className="grid grid-cols-3 gap-5">
          <img
            src={`/${kost.gambar_kamartidur}`}
            alt={`Gambar ${kost.judul}`}
            className="col-span-2 rounded-md h-96 w-full object-cover object-center"
          />
          <img
            src={`/${kost.gambar_kamarmandi}`}
            alt={`Gambar ${kost.judul}`}
            className="col-span-1 rounded-md h-96 w-full object-cover object-center"
          />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-5">
          <div className="col-span-2">
            <h1 className="text-3xl font-semibold">{kost.judul}</h1>
            <h1 className="mt-1">{kost.tipe}</h1>
            <div className="flex gap-28 mt-2">
              <div className="flex items-center gap-2 text-xl">
                <FaHouzz className="text-sky-800" />
                <h1>{kost.kepadatan}</h1>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <FaLeaf className="text-sky-800" />
                <h1>{kost.kelayakan_tinggal}%</h1>
              </div>
            </div>
            <h1 className="text-2xl font-semibold mt-5">Kelayakan Tinggal</h1>
            <div className="flex items-center gap-2 text-xl mt-3">
              <FaLightbulb className="text-sky-800" />
              <h1>{kost.listrik}</h1>
            </div>
            <div className="flex items-center gap-2 text-xl mt-2">
              <FaWater className="text-sky-800" />
              <h1>{kost.air}</h1>
            </div>
            <div className="flex items-center gap-2 text-xl mt-2">
              <FaWind className="text-sky-800" />
              <h1>{kost.bau}</h1>
            </div>
            <h1 className="text-2xl font-semibold mt-5 mb-3">Lokasi</h1>
            {location && (
              <LoadScript googleMapsApiKey="AIzaSyACKDQa-MP9N0YEEX-s2v0nXdnfVCKZGcQ">
                <GoogleMap
                  center={location}
                  zoom={15}
                  mapContainerStyle={{ height: "400px", width: "100%" }}
                >
                  <Marker position={location} label={kost.judul} />
                </GoogleMap>
              </LoadScript>
            )}
          </div>
          <div className="col-span-1 h-fit bg-white rounded-sm shadow-md p-4">
            <h1 className="text-3xl text-center font-semibold">
              IDR {kost.harga}
            </h1>
            <a href={kost.kontak}>
              <button className="bg-sky-800 rounded-sm w-full py-2 px-3 mt-5 text-white text-xl font-semibold">
                Sewa
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;

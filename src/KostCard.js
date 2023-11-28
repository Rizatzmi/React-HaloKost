import React from "react";

const KostCard = ({ judul, tipe, alamat, harga, gambar }) => {
  return (
    <div className="rounded-md bg-white h-[500px] overflow-hidden">
      <img src={gambar} alt={judul} className="w-full h-4/6 object-cover" />
      <div className="px-5 py-3">
        <h1 className="font-medium text-lg">{judul}</h1>
        <div className="px-3 py-2 text-xs font-medium rounded-md bg-gray-300 text-black w-fit mt-2">
          {tipe}
        </div>
        <p className="text-base mt-3">{alamat}</p>
        <h1 className="text-lg mt-3">IDR {harga}</h1>
      </div>
    </div>
  );
};

export default KostCard;

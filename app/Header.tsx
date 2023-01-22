"use client";
import data from "../mockup/data.json";

const Header = () => {
  const first = data[0].time[data[0].time.length - 1].substr(0, 5);
  const end = data[data.length - 1].time[
    data[data.length - 1].time.length - 1
  ].substr(0, 5);
  return (
    <header className="p-5 bg-blue-300 text-center">
      <p className="text-[2.5rem]">Update Checker</p>
      <p className="text-pink-700">6시간 마다 업데이트 예정</p>
      <p>
        {end} ~ {first}
      </p>
    </header>
  );
};

export default Header;

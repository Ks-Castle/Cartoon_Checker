"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import data from "../mockup/data.json";

const Home = () => {
  const [hide, setHide] = useState(false);
  const [search, setSearch] = useDebounce("", 200);
  const [title, setTitle] = useState("");
  const showData = data?.filter((v, i) => {
    return (
      v.title.includes("원피스") ||
      v.title.includes("원펀맨") ||
      v.title.includes("피안도") ||
      v.title.includes("켄간")
    );
  });

  useEffect(() => {
    hide ? setTitle("감추기") : setTitle("전체보기");
  }, [hide]);

  const filteredData = data?.filter((v, i) => {
    return v.title.toLowerCase().includes(search);
  });
  const onClickButton = useCallback(() => {
    setHide((v) => !v);
  }, []);

  return (
    <div className="wrap">
      <div className="flexBox">
        <p className="subTitle"></p>
      </div>
      {data.length === 0 && <p>데이터가 없습니다</p>}
      <div className="main">
        <ul>
          <div className="w-full text-center p-4">
            <p
              onClick={onClickButton}
              className="text-[1.5rem] cursor-pointer hover:bg-pink-100"
            >
              {title}
            </p>
            {hide && (
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="제목을 검색하세요"
                className="focus:outline-0 w-[300px] h-[30px] text-center"
              />
            )}
          </div>

          {hide
            ? filteredData.map((v: any, i) => {
                return (
                  <a href={v.link} target="_blank" className="url" key={i}>
                    <li className="content">
                      <div>
                        {i + 1}: {v.title}
                      </div>
                      <p>
                        마지막 업데이트: &nbsp;
                        <span style={{ color: `red` }}>
                          {v.time[v.time.length - 1].substr(0, 5)}
                        </span>
                      </p>
                    </li>
                  </a>
                );
              })
            : showData.map((v: any, i) => {
                return (
                  <a href={v.link} target="_blank" className="url" key={i}>
                    <li className="content">
                      <div>
                        {i + 1}: {v.title}
                      </div>
                      <p>
                        마지막 업데이트: &nbsp;
                        <span style={{ color: `red` }}>
                          {v.time[v.time.length - 1].substr(0, 5)}
                        </span>
                      </p>
                    </li>
                  </a>
                );
              })}
        </ul>
      </div>
      <style jsx>{`
        .wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .main {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
        }
        .content {
          font-size: 1.2rem;
          margin: 1rem;
          border: 1px solid black;
          padding: 1rem;
          display: flex;
          flex-direction: column;
        }
        .content:hover {
          opacity: 50%;
        }
        .link:hover {
          opacity: 50%;
        }
        .flexBox {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .flexRow {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .subTitle:nth-of-type(2) {
          font-size: 1.5rem;
          color: rgb(240, 110, 132);
        }
      `}</style>
    </div>
  );
};

export default Home;

"use client";

import data from "../mockup/data.json";

const Home = () => {
  return (
    <div className="wrap">
      <div className="flexBox">
        <p className="subTitle"></p>
      </div>
      {data.length === 0 && <p>데이터가 없습니다</p>}
      <div className="main">
        <ul>
          {data.map((v: any, i) => {
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
          background: rgb(237, 178, 231);
          background: linear-gradient(
            80deg,
            rgba(237, 178, 231, 1) 0%,
            rgb(249, 253, 228) 100%
          );
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
          border: 3px solid black;
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

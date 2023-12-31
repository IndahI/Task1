import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Index1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    // Please sync "MacBook Pro 14" - 2" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFrame1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onInstagram1IconClick = useCallback(() => {
    window.location.href = "https://www.instagram.com/indah_kharomi/";
  }, []);

  const onWhatsapp1IconClick = useCallback(() => {
    window.location.href = "https://wa.me/6281913206707";
  }, []);

  return (
    <div className="relative bg-gray-200 w-full h-[774px] overflow-hidden flex flex-col items-center justify-center gap-[55px]">
      <header className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[29px] px-[30px] text-left text-31xl text-white font-limelight">
        <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-center gap-[850px]">
          <h1 className="m-0 relative text-inherit font-normal font-inherit">
            Books
          </h1>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[158px] h-[69px] overflow-hidden shrink-0"
            onClick={onFrameButtonClick}
          >
            <div
              className="absolute top-[6px] left-[6px] rounded-2xl bg-crimson w-[146px] h-[45px] cursor-pointer"
              onClick={onRectangleClick}
            />
            <div className="absolute top-[17px] left-[51px] text-xl font-extrabold font-roboto text-white text-left">
              Log In
            </div>
          </button>
        </div>
      </header>
      <main className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start py-0 pr-1 pl-0 gap-[70px] text-left text-11xl text-white font-roboto">
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-center pt-[38px] px-[55px] pb-[34px] gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-center h-[140px] ml-0">
            <h1 className="m-0 relative text-inherit font-normal font-inherit">
              <p className="m-0">{`The more that you read, the more `}</p>
              <p className="m-0">{`things you will know. The more `}</p>
              <p className="m-0">{`that you learn, the more places `}</p>
              <p className="m-0">you'll go.</p>
            </h1>
          </div>
          <div className="w-[170px] h-24 overflow-hidden shrink-0 flex flex-col items-start justify-center pt-[5px] pb-[3px] pr-[5px] pl-[9px] box-border gap-[10px] text-6xl">
            <div className="w-[150px] overflow-hidden flex flex-col items-end justify-center">
              <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block w-[150px]">
                - Dr. Seuss
              </h3>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-crimson rounded-2xl w-[156px] h-[49px] overflow-hidden shrink-0 flex flex-col items-center justify-center"
              onClick={onFrame1Click}
            >
              <div className="relative text-6xl font-extrabold font-roboto text-white text-left">
                Log In
              </div>
            </button>
          </div>
        </div>
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/row2@2x.png"
        />
      </main>
      <footer className="self-stretch bg-gainsboro h-[86px] overflow-hidden shrink-0 flex flex-row items-center justify-start pt-px px-[15px] pb-0 box-border gap-[777px] text-left text-6xl text-gray-200 font-roboto">
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-0 px-2.5">
          <div className="flex-1 w-[210px] overflow-hidden flex flex-col items-start justify-center">
            <h1 className="m-0 relative text-inherit font-extrabold font-inherit">
              Get In Touch
            </h1>
            <div className="w-[85px] h-7 overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pr-[9px] pl-0 box-border gap-[15px]">
              <img
                className="relative w-[29px] h-[27px] object-cover cursor-pointer"
                alt=""
                src="/instagram-1@2x.png"
                onClick={onInstagram1IconClick}
              />
              <img
                className="relative w-[29px] h-7 object-cover cursor-pointer"
                alt=""
                src="/whatsapp-1@2x.png"
                onClick={onWhatsapp1IconClick}
              />
            </div>
          </div>
        </div>
        <div className="w-[199px] overflow-hidden shrink-0 flex flex-col items-end justify-start text-mini text-black">
          <div className="relative">December 2023</div>
          <h2 className="m-0 relative text-xl font-normal font-inherit whitespace-pre-wrap">{`Powered by © Next JS  `}</h2>
        </div>
      </footer>
    </div>
  );
};

export default Index1;

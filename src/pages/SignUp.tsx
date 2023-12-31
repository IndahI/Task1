import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignUp: FunctionComponent = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  const [frameInput1Value, setFrameInput1Value] = useState("");
  const [frameInput2Value, setFrameInput2Value] = useState("");
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onInstagram1IconClick = useCallback(() => {
    window.location.href = "https://www.instagram.com/indah_kharomi/";
  }, []);

  const onWhatsapp1IconClick = useCallback(() => {
    window.location.href = "https://wa.me/6281913206707";
  }, []);

  return (
    <div className="relative bg-gray-200 w-full h-[806px] overflow-hidden flex flex-col items-center justify-start">
      <main className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-center">
        <section className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-center text-left text-36xl text-white font-limelight">
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-end gap-[14px]">
            <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block w-[596px]">
              Books
            </h2>
            <img
              className="relative w-[602px] h-[621px] object-cover"
              alt=""
              src="/layer-2@2x.png"
            />
          </div>
          <div className="self-stretch flex-1 rounded-tl-mini rounded-tr-none rounded-br-none rounded-bl-mini bg-gainsboro overflow-hidden flex flex-col items-start justify-center py-[148px] px-[76px] text-center text-21xl text-black font-roboto">
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-0 px-[15px]">
              <div className="overflow-hidden flex flex-col items-start justify-start gap-[25px]">
                <div className="w-[399px] h-[59px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
                  <div className="w-96 overflow-hidden flex flex-col items-center justify-center h-[47px] ml-px">
                    <h2 className="m-0 relative text-inherit font-bold font-inherit">
                      CREATE ACCOUNT
                    </h2>
                  </div>
                </div>
                <div className="relative w-[399px] h-[248px] overflow-hidden shrink-0">
                  <div className="absolute top-[1px] left-[0px] w-[422px] h-[73px] overflow-hidden flex flex-row items-start justify-start">
                    <div className="w-[399px] h-[73px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                      <input
                        className="[border:none] [outline:none] font-roboto text-11xl bg-white rounded-lg w-[399px] h-[57px] flex flex-col items-start justify-center py-[11px] px-[18px] box-border text-gray-100"
                        placeholder="username"
                        type="text"
                        value={frameInputValue}
                        onChange={(event) =>
                          setFrameInputValue(event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="absolute top-[69px] left-[0px] w-[422px] h-[73px] overflow-hidden flex flex-row items-start justify-start">
                    <div className="w-[399px] h-[73px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                      <input
                        className="[border:none] [outline:none] font-roboto text-11xl bg-white rounded-lg w-[399px] h-[57px] flex flex-col items-start justify-center py-[11px] px-[18px] box-border text-gray-100"
                        placeholder="email"
                        type="text"
                        value={frameInput1Value}
                        onChange={(event) =>
                          setFrameInput1Value(event.target.value)
                        }
                      />
                    </div>
                    <div className="relative w-[401px] h-[51px] overflow-hidden shrink-0 ml-[-378px]" />
                  </div>
                  <div className="absolute top-[138px] left-[0px] w-[422px] h-[73px] overflow-hidden flex flex-row items-start justify-start">
                    <div className="w-[399px] h-[73px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                      <input
                        className="[border:none] [outline:none] font-roboto text-11xl bg-white rounded-lg w-[399px] h-[57px] flex flex-col items-start justify-center py-[11px] px-[18px] box-border text-gray-100"
                        placeholder="password"
                        type="text"
                        value={frameInput2Value}
                        onChange={(event) =>
                          setFrameInput2Value(event.target.value)
                        }
                      />
                    </div>
                    <div className="relative w-[401px] h-[51px] overflow-hidden shrink-0 ml-[-378px]" />
                  </div>
                </div>
                <button
                  className="cursor-pointer [border:none] py-[15px] px-[152px] bg-crimson w-[399px] flex flex-col items-center justify-center box-border"
                  onClick={onFrameButtonClick}
                >
                  <div className="self-stretch relative text-11xl font-semibold font-roboto text-white text-left">
                    Sign In
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="self-stretch bg-gainsboro h-[86px] overflow-hidden shrink-0 flex flex-row items-center justify-start pt-px px-[15px] pb-0 box-border gap-[777px] mt-[-2px] text-left text-6xl text-gray-200 font-roboto">
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

export default SignUp;

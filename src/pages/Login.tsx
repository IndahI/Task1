import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Login: FunctionComponent = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  const [frameInput1Value, setFrameInput1Value] = useState("");
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onInstagram1IconClick = useCallback(() => {
    window.location.href = "https://www.instagram.com/indah_kharomi/";
  }, []);

  const onWhatsapp1IconClick = useCallback(() => {
    window.location.href = "https://wa.me/6281913206707";
  }, []);

  return (
    <div className="relative bg-gray-200 w-full h-[802px] overflow-hidden flex flex-col items-start justify-start">
      <section className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-center">
        <section className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-center text-left text-36xl text-white font-limelight">
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-end gap-[14px]">
            <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block w-[596px]">
              Books
            </h2>
            <img
              className="relative w-[596px] h-[621px] object-cover"
              alt=""
              src="/gambar2@2x.png"
            />
          </div>
          <div className="self-stretch flex-1 rounded-tl-mini rounded-tr-none rounded-br-none rounded-bl-mini bg-gainsboro overflow-hidden flex flex-col items-start justify-center py-[148px] px-[76px] text-center text-21xl text-black font-roboto">
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-0 px-[15px]">
              <div className="h-[423px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[25px]">
                <div className="w-[399px] h-[59px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
                  <div className="w-[385px] overflow-hidden flex flex-col items-center justify-center">
                    <div className="w-96 overflow-hidden flex flex-col items-center justify-center">
                      <h2 className="m-0 relative text-inherit font-bold font-inherit">
                        WELCOME
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative h-[152px] overflow-hidden shrink-0">
                  <div className="absolute top-[1px] left-[0px] w-[422px] h-[73px] overflow-hidden flex flex-row items-start justify-start">
                    <div className="w-[399px] h-[73px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                      <input
                        className="[border:none] [outline:none] font-roboto text-11xl bg-white rounded-lg w-[399px] h-[57px] flex flex-col items-start justify-center py-[11px] px-[18px] box-border text-gray-100"
                        placeholder="email"
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
                        placeholder="password"
                        type="text"
                        value={frameInput1Value}
                        onChange={(event) =>
                          setFrameInput1Value(event.target.value)
                        }
                      />
                    </div>
                    <div className="relative w-[401px] h-[51px] overflow-hidden shrink-0 ml-[-378px]" />
                  </div>
                </div>
                <button
                  className="cursor-pointer [border:none] py-[15px] px-[152px] bg-crimson self-stretch flex flex-col items-center justify-center"
                  onClick={onFrameButtonClick}
                >
                  <div className="self-stretch relative text-11xl font-semibold font-roboto text-white text-left">
                    Log In
                  </div>
                </button>
                <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-between text-left text-6xl text-dimgray-200">
                  <h1 className="m-0 relative text-inherit font-normal font-inherit">
                    New to Book?
                  </h1>
                  <h1
                    className="m-0 relative text-inherit font-bold font-inherit text-black cursor-pointer"
                    onClick={onSignUpClick}
                  >
                    Sign up
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <footer className="self-stretch bg-gainsboro h-20 overflow-hidden shrink-0 flex flex-row items-center justify-between pt-px px-[15px] pb-0 box-border text-left text-6xl text-gray-200 font-roboto">
        <div className="w-[230px] h-16 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2.5 px-2.5 pb-0 box-border gap-[8px]">
          <div className="self-stretch h-[18px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
            <h1 className="m-0 relative text-inherit font-extrabold font-inherit">
              Get In Touch
            </h1>
          </div>
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
        <div className="w-[199px] overflow-hidden shrink-0 flex flex-col items-end justify-start text-mini text-black">
          <div className="relative">December 2023</div>
          <h2 className="m-0 self-stretch relative text-xl font-normal font-inherit whitespace-pre-wrap">{`Powered by © Next JS  `}</h2>
        </div>
      </footer>
    </div>
  );
};

export default Login;

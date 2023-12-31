import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface BookData {
  title: string;
  author: string;
  published: string;
  publisher: string;
  pages: number;
  description: string;
  website: string;
}

const BookBrief: FunctionComponent = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [bookData, setBookData] = useState<BookData>({
    title: "",
    author: "",
    published: "",
    publisher: "",
    pages: 0,
    description: "",
    website: "",
  });

  useEffect(() => {
    // Load book data from the API when the component mounts
    const fetchBookData = async () => {
      try {
        const response = await axios.get(
          `https://example.com/api/books/${bookId}`
        );

        // Set book data to state
        setBookData(response.data);
      } catch (error) {
        console.error('Failed to fetch book data:', error);
        // Handle error, show error message, etc.
      }
    };

    fetchBookData();
  }, [bookId]);

  const onFrameButtonClick = useCallback(() => {
    // Please sync "MacBook Pro 14" - 2" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onBackIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate(`/edit-book/${bookId}`);
  }, [navigate, bookId]);

  const onFrameButton2Click = useCallback(async () => {
    try {
      await axios.delete(`https://book-crud-service-6dmqxfovfq-et.a.run.app/api/books/${bookId}`);
      navigate("/home");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }, [navigate, bookId]);

  const onInstagram1IconClick = useCallback(() => {
    window.location.href = "https://www.instagram.com/indah_kharomi/";
  }, []);

  const onWhatsapp1IconClick = useCallback(() => {
    window.location.href = "https://wa.me/6281913206707";
  }, []);

  return (
    <div className="relative bg-gray-200 w-full h-[840px] overflow-hidden flex flex-col items-center justify-start gap-[30px]">
      <header className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[29px] px-[30px] text-left text-31xl text-white font-limelight">
        <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-center gap-[850px]">
          <h1 className="m-0 relative text-inherit font-normal font-inherit">
            Books
          </h1>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[158px] h-[69px] overflow-hidden shrink-0"
            onClick={onRectangleClick}
          >
            <div
              className="absolute top-[6px] left-[6px] rounded-2xl bg-crimson w-[146px] h-[45px] cursor-pointer"/>
            <div className="absolute top-[17px] left-[43px] text-xl font-extrabold font-roboto text-white text-left">
              Log Out
            </div>
          </button>
        </div>
      </header>
      <main className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start py-0 px-[50px]">
        <section className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-center">
          <main className="self-stretch flex-1 rounded-mini bg-whitesmoke overflow-hidden flex flex-col items-end justify-end pt-[15px] pb-3.5 pr-7 pl-[37px] gap-[14px] text-left text-11xl text-black font-roboto">
          <div className="self-stretch h-[63px] overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 box-border gap-[690px]">
              <div className="overflow-hidden flex flex-row items-center justify-center gap-[10px]">
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[29px] h-[29px] bg-cover bg-no-repeat bg-[top]"
                  onClick={onBackIconClick} 
                  >
                    <img
                    className="relative w-[29px] h-[29px] object-cover"
                    alt=""
                    src="/backicon@3x.png">
                    </img>
                  </button>
                <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block w-[133px] shrink-0">
                  Buku
                </h2>
              </div>
              <div className="w-[228px] overflow-hidden shrink-0 flex flex-row items-center justify-between">
                <button
                  className="cursor-pointer [border:none] py-0 px-9 bg-deepskyblue rounded-2xl w-[108px] h-[34px] flex flex-col items-start justify-center box-border"
                  onClick={onFrameButton1Click}
                >
                  <div className="relative text-xl font-semibold font-roboto text-white text-left">
                    Edit
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] p-0 bg-crimson rounded-2xl w-[108px] h-[34px] flex flex-col items-center justify-center"
                  onClick={onFrameButton2Click}
                >
                  <div className="relative text-xl font-semibold font-roboto text-white text-left">
                    Delete
                  </div>
                </button>
              </div>
            </div>

            <section className="self-stretch flex-1 relative overflow-hidden text-left text-xl text-black font-roboto">
              <div className="absolute top-[0px] left-[5px] font-semibold">
                Judul
              </div>
              <div className="absolute top-[28px] left-[5px] bg-white w-[1110px] h-[27px] overflow-hidden flex flex-col items-start justify-center py-0 px-2.5 box-border text-dimgray-100">
                <div className="relative font-semibold">{bookData.title}</div>
              </div>
              <div className="absolute top-[60px] left-[5px] font-semibold">
                Penulis
              </div>
              <div className="absolute top-[88px] left-[5px] bg-white w-[1110px] h-[27px] overflow-hidden flex flex-col items-start justify-center py-0 px-2.5 box-border text-dimgray-100">
                <div className="relative font-semibold">{bookData.author}</div>
              </div>
              <div className="absolute top-[129px] left-[5px] font-semibold">
                Diterbitkan
              </div>
              <div className="absolute top-[157px] left-[5px] bg-white w-[1110px] h-[27px] overflow-hidden flex flex-col items-start justify-center py-0 px-2.5 box-border text-dimgray-100">
                <div className="relative font-semibold">{bookData.published}</div>
              </div>
              <div className="absolute top-[196px] left-[5px] font-semibold">
                Penerbit
              </div>
              <div className="absolute top-[224px] left-[5px] bg-white w-[1110px] h-[27px] overflow-hidden flex flex-col items-start justify-center py-0 px-2.5 box-border text-dimgray-100">
                <div className="relative font-semibold">{bookData.publisher}</div>
              </div>
              <div className="absolute top-[263px] left-[5px] font-semibold">
                Halaman
              </div>
              <div className="absolute top-[291px] left-[5px] bg-white w-[1110px] h-[27px] overflow-hidden flex flex-col items-start justify-center py-0 px-2.5 box-border text-dimgray-100">
                <div className="relative font-semibold">{bookData.pages}</div>
              </div>
              <div className="absolute top-[330px] left-[5px] font-semibold">
                Deskripsi
              </div>
              <div className="absolute top-[358px] left-[5px] bg-white w-[1110px] h-[27px] overflow-hidden flex flex-col items-start justify-center py-0 px-2.5 box-border text-dimgray-100">
                <div className="relative font-semibold inline-block w-[63px]">{bookData.description}</div>
              </div>
              <div className="absolute top-[397px] left-[5px] font-semibold">
                Website
              </div>
              <div className="absolute top-[425px] left-[5px] bg-white w-[1110px] h-[27px] overflow-hidden flex flex-col items-start justify-center py-0 px-2.5 box-border text-dimgray-100">
                <div className="relative font-semibold">{bookData.website}</div>
              </div>
            </section>
          </main>
        </section>
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

export default BookBrief;

import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Book {
  id: number;
  title: string;
}

const Home: FunctionComponent = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // Fetch the list of books from your API endpoint
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://example.com/api/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const onFrameButtonClick = useCallback(() => {
    // Please sync "MacBook Pro 14" - 2" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/add-book");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/book-brief");
  }, [navigate]);

  const onFrameContainerClick = useCallback((bookId: number) => {
    navigate(`/book-brief/${bookId}`);
  }, [navigate]);

  const onInstagram1IconClick = useCallback(() => {
    window.location.href = "https://www.instagram.com/indah_kharomi/";
  }, []);

  const onWhatsapp1IconClick = useCallback(() => {
    window.location.href = "https://wa.me/6281913206707";
  }, []);

  return (
    <div className="relative bg-gray-200 w-full h-[806px] overflow-hidden flex flex-col items-center justify-center gap-[20px]">
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
            <div className="absolute top-[17px] left-[43px] text-xl font-extrabold font-roboto text-white text-left">
              Log Out
            </div>
          </button>
        </div>
      </header>
      <section className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center text-left text-26xl text-black font-roboto">
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-center py-[7px] px-10 gap-[41px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[163px] h-[75px] overflow-hidden shrink-0"
            onClick={onFrameButton1Click}
          >
            <div className="absolute top-[12px] left-[6px] rounded-2xl bg-deepskyblue w-[151px] h-[51px]" />
            <div className="absolute top-[23px] left-[26px] text-6xl font-extrabold font-roboto text-white text-left">
              Add Book
            </div>
          </button>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start gap-[35px]">
            {books.map((book) => (
              <div
                key={book.id}
                className="flex-1 bg-gainsboro h-[107px] flex flex-col items-center justify-center cursor-pointer"
                onClick={() => onFrameContainerClick(book.id)}
              >
                <div className="relative font-semibold inline-block w-[198px]">
                  {book.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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

export default Home;

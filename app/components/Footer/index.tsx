<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;

export default function Footer() {
  return (
    <footer className="h-60 bg-neutral-800 text-white">
      <div>
        <p className="text-2xm my-2 p-2 text-left font-black">
          ©️ 2023 Dobu Martial Art
        </p>
        <p className="text-2xm  p-5 text-left font-black">Social Media:</p>
        <a
          className="text-2xm  p-5 text-left font-black"
          href="https://www.facebook.com//"
        >
          Facebook
        </a>

        <a
          className="text-2xm  p-5 text-left font-black"
          href="https://www.facebook.com//"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}

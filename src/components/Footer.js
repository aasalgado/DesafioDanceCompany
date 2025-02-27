import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-primary text-primary-foreground py-8 sm:py-12 min-h-[85dvh] sm:min-h-0"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <WhiteLogo />
        </div>
        <div className="space-y-0 sm:space-y-2 flex flex-col items-center sm:items-start">
          <div>1122 E Washington Blvd Suite B,</div>
          <div>Montebello, CA 90640</div>
          <div>info@desafiodance.com</div>
          <div>(404) 408-6656</div>
        </div>
        <div className="space-y-2 flex flex-col items-center sm:items-start">
          <div>Follow us:</div>
          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <Link
              href="https://www.instagram.com/desafio.dance.company/"
              aria-label="Instagram"
              prefetch={false}
              target="_blank"
            >
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.youtube.com/@DesafioDanceCompany"
              aria-label="YouTube"
              prefetch={false}
              target="_blank"
            >
              <YoutubeIcon className="h-8 w-8" />
            </Link>
          </div>
        </div>
        <div className="text-center sm:text-right col-span-1 sm:col-span-2 lg:col-span-1">
          &copy; 2024 Desafio Dance Company. <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function WhiteLogo() {
  return (
    <img
      src="/images/logo-white.png"
      width={200}
      height={100}
      alt="Desafio Dance Company Logo"
      className="rounded-xl object-cover"
      style={{ aspectRatio: "auto", objectFit: "cover" }}
    />
  );
}

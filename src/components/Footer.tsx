import Link from "next/link";
import { useRouter } from "next/router";
import { useLocale } from "@/locales";

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Link
      className={router.pathname == encodeURI(href) ? "text-cerise" : ""}
      href={href}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const { footer } = useLocale();

  return (
    <footer className="
      w-full flex justify-center
      font-['NeueHaasDisplay']
      bg-fill bg-[#2D2D2D]
    ">
      <div
        className="relative w-full  h-[400px] md:h-[300px] bottom-[0px] md:bottom-[40px] px-[0px] pt-[20px] md:pt-[80px] md:py-[10px] flex flex-col 
      md:flex-row r items-center md:items-stretch md:justify-between md:px-[100px]"
      >
        <div className="
          flex flex-col md:border-r-[1px] border-[#636363]
          pl-[15%] md:pl-[0px] md:pr-[20px] order-last md:order-first w-[95%] md:w-max md:items-center
        ">
          <p className="font-['NeueHaasDisplay'] w-[220px] md:w-[230px] font-bold text-[#DADADA] text-xs md:pr-[20px]">
            {footer.header}
          </p>
          <p className="font-['NeueHaasDisplay'] w-[180px] mb-7 text-[#DADADA] text-xs md:w-[228px]">
            {footer.about}
          </p>

          <div className="flex md:pr-[30px]">
            <a target="_blank" href="https://datasektionen.se/">
              <img
                src="/img/shield.svg"
                className="hover:brightness-50 h-[50px] md:h-[50px] mr-[10px] mt-[0px] "
              ></img>
            </a>
            <a target="_blank" href="https://ddagen.se/">
              <img
                src="/img/dFluga.svg"
                className="hover:brightness-50 h-[50px] md:h-[50px] pb-[0px] pr-[0px]"
              ></img>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:border-l-[1px] border-[#636363] pb-[0px] md:pl-[40px] w-[95%] md:w-max">
          <div className="px-[15%] md:px-0 flex justify-between border-b-[0.5px] border-[#636363] md:h-[40px] mb-3 md:w-[130px]">
            <a
              target="_blank"
              href="https://se.linkedin.com/company/kongligddagen"
            >
              <img
                src="/img/linkedinLogo.svg"
                className="hover:brightness-50 mb-2 h-[30px] md:h-[30px] md:mr-[6px]"
              ></img>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/ddagenkth/?hl=en"
            >
              <img
                src="/img/instagramLogo.svg"
                className="hover:brightness-50 h-[30px] md:h-[30px] md:mr-[0px]"
              ></img>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/kongligddagen/?locale=sv_SE"
            >
              <img
                src="/img/fbLogo.svg"
                className="hover:brightness-50 h-[30px] md:h-[30px]"
              ></img>
            </a>
          </div>
          <div className="
            border-b-[0.5px] md:border-b-[0px] border-[#636363] pb-4 mb-2
            grid auto-cols-max gap-x-1 text-xs text-[#dadada] px-[15%] md:px-0
          ">
            <p className="font-bold text-xs text-white col-span-2">
              {footer.contactHeader}
            </p>
            <span>{footer.responsible}:</span>
            <a className="text-cerise" href="mailto:ansvarig@ddagen.se">ansvarig@ddagen.se</a>
            <span>{footer.salesGroup}:</span>
            <a className="text-cerise" href="mailto:sales@ddagen.se">sales@ddagen.se</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

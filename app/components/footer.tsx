import Image from "next/image";
import beelockImg from "../../public/assets/images/footer-bg-text.png";
const Footer = () => {
  const FacebookIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.5 7.75C15.5 11.625 12.6562 14.8438 8.9375 15.4062V10H10.75L11.0938 7.75H8.9375V6.3125C8.9375 5.6875 9.25 5.09375 10.2188 5.09375H11.1875V3.1875C11.1875 3.1875 10.3125 3.03125 9.4375 3.03125C7.6875 3.03125 6.53125 4.125 6.53125 6.0625V7.75H4.5625V10H6.53125V15.4062C2.8125 14.8438 0 11.625 0 7.75C0 3.46875 3.46875 0 7.75 0C12.0312 0 15.5 3.46875 15.5 7.75Z"
        fill="white"
      />
    </svg>
  );

  const TwitterIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.5 7.75C15.5 11.625 12.6562 14.8438 8.9375 15.4062V10H10.75L11.0938 7.75H8.9375V6.3125C8.9375 5.6875 9.25 5.09375 10.2188 5.09375H11.1875V3.1875C11.1875 3.1875 10.3125 3.03125 9.4375 3.03125C7.6875 3.03125 6.53125 4.125 6.53125 6.0625V7.75H4.5625V10H6.53125V15.4062C2.8125 14.8438 0 11.625 0 7.75C0 3.46875 3.46875 0 7.75 0C12.0312 0 15.5 3.46875 15.5 7.75Z"
        fill="white"
      />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 0C13.5312 0 14 0.46875 14 1.03125V13C14 13.5625 13.5312 14 13 14H0.96875C0.4375 14 0 13.5625 0 13V1.03125C0 0.46875 0.4375 0 0.96875 0H13ZM4.21875 12V5.34375H2.15625V12H4.21875ZM3.1875 4.40625C3.84375 4.40625 4.375 3.875 4.375 3.21875C4.375 2.5625 3.84375 2 3.1875 2C2.5 2 1.96875 2.5625 1.96875 3.21875C1.96875 3.875 2.5 4.40625 3.1875 4.40625ZM12 12V8.34375C12 6.5625 11.5938 5.15625 9.5 5.15625C8.5 5.15625 7.8125 5.71875 7.53125 6.25H7.5V5.34375H5.53125V12H7.59375V8.71875C7.59375 7.84375 7.75 7 8.84375 7C9.90625 7 9.90625 8 9.90625 8.75V12H12Z"
        fill="white"
      />
    </svg>
  );
  const LocationIcon = () => (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_517_6869)">
        <g clipPath="url(#clip1_517_6869)">
          <path
            d="M21.4791 8.80144C20.3854 3.98894 16.1875 1.82227 12.5 1.82227C12.5 1.82227 12.5 1.82227 12.4896 1.82227C8.81248 1.82227 4.60414 3.97852 3.51039 8.79102C2.29164 14.166 5.58331 18.7181 8.56248 21.5827C9.66664 22.6452 11.0833 23.1764 12.5 23.1764C13.9166 23.1764 15.3333 22.6452 16.4271 21.5827C19.4062 18.7181 22.6979 14.1764 21.4791 8.80144ZM12.5 14.0202C10.6875 14.0202 9.21873 12.5514 9.21873 10.7389C9.21873 8.92644 10.6875 7.45769 12.5 7.45769C14.3125 7.45769 15.7812 8.92644 15.7812 10.7389C15.7812 12.5514 14.3125 14.0202 12.5 14.0202Z"
            fill="#00FF97"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_517_6869">
          <rect width="25" height="25" fill="white" />
        </clipPath>
        <clipPath id="clip1_517_6869">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_517_6880)">
        <g clipPath="url(#clip1_517_6880)">
          <path
            d="M18.3568 11.1986C17.9089 11.1986 17.5547 10.834 17.5547 10.3965C17.5547 10.0111 17.1693 9.20898 16.5235 8.51106C15.888 7.83398 15.1901 7.43814 14.6068 7.43814C14.1589 7.43814 13.8047 7.07356 13.8047 6.63606C13.8047 6.19856 14.1693 5.83398 14.6068 5.83398C15.6485 5.83398 16.7422 6.39648 17.7005 7.4069C18.5964 8.35481 19.1693 9.5319 19.1693 10.3861C19.1693 10.834 18.8047 11.1986 18.3568 11.1986Z"
            fill="#00FF97"
          />
          <path
            d="M22.1146 11.1986C21.6667 11.1986 21.3125 10.834 21.3125 10.3965C21.3125 6.69856 18.3021 3.69856 14.6146 3.69856C14.1667 3.69856 13.8125 3.33398 13.8125 2.89648C13.8125 2.45898 14.1667 2.08398 14.6042 2.08398C19.1875 2.08398 22.9167 5.81314 22.9167 10.3965C22.9167 10.834 22.5521 11.1986 22.1146 11.1986Z"
            fill="#00FF97"
          />
          <path
            d="M12.2839 14.8027L8.87761 18.209C8.50261 17.8757 8.13802 17.5319 7.78386 17.1777C6.71094 16.0944 5.74219 14.959 4.87761 13.7715C4.02344 12.584 3.33594 11.3965 2.83594 10.2194C2.33594 9.03189 2.08594 7.89648 2.08594 6.81314C2.08594 6.10481 2.21094 5.42773 2.46094 4.80273C2.71094 4.16731 3.10678 3.58398 3.65886 3.06314C4.32553 2.40689 5.05469 2.08398 5.82553 2.08398C6.11719 2.08398 6.40886 2.14648 6.66928 2.27148C6.94011 2.39648 7.17969 2.58398 7.36719 2.85481L9.78386 6.26106C9.97136 6.52148 10.1068 6.76106 10.2005 6.99023C10.2943 7.20898 10.3464 7.42773 10.3464 7.62564C10.3464 7.87564 10.2735 8.12564 10.1276 8.36523C9.99219 8.60481 9.79427 8.85481 9.54427 9.10481L8.75261 9.92773C8.63802 10.0423 8.58594 10.1777 8.58594 10.3444C8.58594 10.4277 8.59636 10.5007 8.61719 10.584C8.64844 10.6673 8.67969 10.7298 8.70053 10.7923C8.88803 11.1361 9.21094 11.584 9.66927 12.1257C10.138 12.6673 10.638 13.2194 11.1797 13.7715C11.5547 14.1361 11.9193 14.4902 12.2839 14.8027Z"
            fill="#00FF97"
          />
          <path
            d="M22.8854 19.0937C22.8854 19.3854 22.8333 19.6875 22.7292 19.9792C22.6979 20.0625 22.6667 20.1458 22.625 20.2292C22.4479 20.6042 22.2188 20.9583 21.9167 21.2917C21.4063 21.8542 20.8438 22.2604 20.2083 22.5208C20.1979 22.5208 20.1875 22.5312 20.1771 22.5312C19.5625 22.7812 18.8958 22.9167 18.1771 22.9167C17.1146 22.9167 15.9792 22.6667 14.7812 22.1563C13.5833 21.6458 12.3854 20.9583 11.1979 20.0938C10.7917 19.7917 10.3854 19.4896 10 19.1667L13.4062 15.7604C13.6979 15.9792 13.9583 16.1458 14.1771 16.2604C14.2292 16.2812 14.2917 16.3125 14.3646 16.3437C14.4479 16.375 14.5312 16.3854 14.625 16.3854C14.8021 16.3854 14.9375 16.3229 15.0521 16.2083L15.8438 15.4271C16.1042 15.1667 16.3542 14.9688 16.5938 14.8438C16.8333 14.6979 17.0729 14.625 17.3333 14.625C17.5312 14.625 17.7396 14.6667 17.9688 14.7604C18.1979 14.8542 18.4375 14.9896 18.6979 15.1667L22.1458 17.6146C22.4167 17.8021 22.6042 18.0208 22.7188 18.2812C22.8229 18.5417 22.8854 18.8021 22.8854 19.0937Z"
            fill="#00FF97"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_517_6880">
          <rect width="25" height="25" fill="white" />
        </clipPath>
        <clipPath id="clip1_517_6880">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  const ArrowIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.7562 5.97763L5.0625 19.2773L6.75135 21.2702L22.445 7.97048L20.7562 5.97763Z" fill="white" />
      <path d="M9.96159 4.85607L7.96875 6.54492L9.6576 8.53777L11.6504 6.84892L9.96159 4.85607Z" fill="white" />
      <path d="M13.6491 5.15881L11.6562 6.84766L13.3451 8.8405L15.3379 7.15165L13.6491 5.15881Z" fill="white" />
      <path d="M17.3288 5.4635L15.3359 7.15234L17.0248 9.14519L19.0176 7.45634L17.3288 5.4635Z" fill="white" />
      <path d="M20.7038 9.44787L18.7109 11.1367L20.3998 13.1296L22.3926 11.4407L20.7038 9.44787Z" fill="white" />
      <path d="M20.3991 13.1315L18.4062 14.8203L20.0951 16.8132L22.0879 15.1243L20.3991 13.1315Z" fill="white" />
      <path d="M20.0944 16.8131L18.1016 18.502L19.7904 20.4948L21.7833 18.806L20.0944 16.8131Z" fill="white" />
    </svg>
  );
  return (
    <footer className="relative h-screen w-full bg-[#00020f] overflow-hidden flex flex-col items-center">
      {/* Background text */}
      <img
        src="assets/images/footer-bg-text.png"
        alt="Beelock"
        className="absolute  w-[80%] h-96"
       
      
      />
      <p><span className="text-[#1BFFE1]">Beelockchain- he World’s First AI-Centered Blockchain Development Company</span><br/>Future-ready blockchain development, smart contract solutions, Web3 ecosystems, and AI-powered<br/>automation all under one roof.
</p>

      {/* Email CTA */}
      <div className="absolute left-[400px] top-[150px] w-[518px] h-[78px] rounded-[61px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3adcff] to-[#1bffe1]" />

        {/* Mail Icon */}

        <svg
          className="absolute left-10 top-[20px]"
          width="52"
          height="46"
          viewBox="0 0 52 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_517_6794)">
            <g clipPath="url(#clip1_517_6794)">
              <path
                d="M31.7011 24.5996L28.4733 27.8383C27.1644 29.1518 24.8614 29.1801 23.5242 27.8383L20.2962 24.5996L8.70312 36.2304C9.13467 36.43 9.61046 36.549 10.1162 36.549H41.8812C42.3871 36.549 42.8627 36.4301 43.2941 36.2305L31.7011 24.5996Z"
                fill="black"
              />
              <path
                d="M41.8811 9.45117H10.1161C9.61031 9.45117 9.13451 9.57025 8.70312 9.7698L21.0912 22.199L25.1229 26.2442C25.5507 26.672 26.4466 26.672 26.8745 26.2442L30.9061 22.199L43.294 9.76973C42.8626 9.5701 42.3869 9.45117 41.8811 9.45117Z"
                fill="black"
              />
              <path
                d="M7.09464 11.3477C6.87138 11.7992 6.73438 12.3004 6.73438 12.8372V33.1608C6.73438 33.6976 6.87122 34.1988 7.09455 34.6503L18.7079 22.9994L7.09464 11.3477Z"
                fill="black"
              />
              <path
                d="M44.91 11.3477L33.2969 22.9995L44.91 34.6506C45.1333 34.1991 45.2703 33.6979 45.2703 33.1609V12.8374C45.2703 12.3004 45.1333 11.7992 44.91 11.3477Z"
                fill="black"
              />
            </g>
          </g>

          <defs>
            <clipPath id="clip0_517_6794">
              <rect width="52" height="46" fill="white" />
            </clipPath>
            <clipPath id="clip1_517_6794">
              <rect width="52" height="46" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className="absolute left-[107px] top-[20px] text-[32px] text-black">Info@beelockchain.com</p>
      </div>

      {/* Navigation blocks */}
      <div className="absolute top-[439px] left-0 w-full flex justify-center gap-[90px]">
        {[
          { label: "What we do?", value: "Services" },
          { label: "Who we are?", value: "About us" },
          { label: "How we deliver", value: "Contact us" },
          { label: "What we're good at?", value: "Our project" },
          { label: "News?", value: "News" },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-base  uppercase text-[#b2b3b7]">{item.label}</p>
            <p className="text-[38px] capitalize text-white mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="absolute top-[615px] w-full border-t border-[#262833]" />

      {/* Social links */}
      <div className="absolute top-[615px] left-1/2 -translate-x-1/2 w-full flex">
        {[
          { name: "Facebook", icon: FacebookIcon },
          { name: "Twitter", icon: TwitterIcon },
          { name: "LinkedIn", icon: LinkedInIcon },
        ].map(({ name, icon: Icon }, i) => (
          <div
            key={i}
            className="flex items-center justify-between w-1/3 h-[60px] border-r border-[#262833] px-6 text-white"
          >
            <div className="flex items-center gap-4">
              <Icon />
              <span className=" uppercase text-sm">{name}</span>
            </div>

            <ArrowIcon />
          </div>
        ))}
      </div>

      {/* Top divider above bottom section */}
      <div className="absolute top-[675px] w-full border-t border-[#262833]" />
      {/* Bottom section */}
      <div className="absolute top-[677px] w-full flex justify-center items-center text-white">
        {/* Location */}
        <div className="flex items-center gap-3 px-10 h-[60px] border-r border-[#262833]">
          <LocationIcon />
          <p className="text-2xl">4517 Washington, USA</p>
        </div>

        {/* Copyright */}
        <div className="flex items-center px-40 h-[60px] border-r border-[#262833]">
          <p className="text-base opacity-80">Copyright © 2025 beelockchain, All rights reserved.</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 px-10 h-[60px]">
          <PhoneIcon />
          <p className="text-2xl">+(1)1230 452 8597</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

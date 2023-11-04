"use client";
import React,{useState} from "react";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const [show,setShow]=useState(false)

  return (
    <div className="h-full relative flex flex-col">
      <div className="flex items-center justify-between">
        <Button onClick={() => router.push('/list')}  variant="ghost" className="hover:bg-[#efefef36] px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={39}
            height={39}
            className="shrink-0"
            viewBox="0 0 39 39"
            fill="none"
          >
            <path
              d="M18.625 32.5H5.875C5.32272 32.5 4.875 32.0523 4.875 31.5V10.5C4.875 8.29086 6.66586 6.5 8.875 6.5H30.125C32.3341 6.5 34.125 8.29086 34.125 10.5V18.5"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M11.375 22.75H16.25" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M11.375 16.25H21.125"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="26.8125" cy="25.1875" r="4.4375" stroke="white" strokeWidth="2.5" />
            <path d="M30.0625 28.4375L34.9375 33.3125" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </Button>
        <div>
          <Button variant="link" className="hover:no-underline px-2" onClick={()=>setShow(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
              <g clipPath="url(#clip0_371_1217)">
                <path
                  d="M0.99995 5.07465H23.3582C23.9104 5.07465 24.3582 5.52236 24.3582 6.07465V6.1045C24.3582 6.65678 23.9104 7.1045 23.3582 7.1045H0.99995C0.447666 7.1045 -4.95911e-05 6.65678 -4.95911e-05 6.1045V6.07465C-4.95911e-05 5.52236 0.447664 5.07465 0.99995 5.07465Z"
                  fill="white"
                />
                <path
                  d="M4.0447 11.1642H20.3134C20.8656 11.1642 21.3134 11.6119 21.3134 12.1642V12.194C21.3134 12.7463 20.8656 13.194 20.3134 13.194H4.0447C3.49242 13.194 3.0447 12.7463 3.0447 12.194V12.1642C3.0447 11.6119 3.49241 11.1642 4.0447 11.1642Z"
                  fill="white"
                />
                <path
                  d="M8.10441 17.2537H16.2537C16.8059 17.2537 17.2537 17.7014 17.2537 18.2537V18.2836C17.2537 18.8359 16.8059 19.2836 16.2537 19.2836H8.10441C7.55213 19.2836 7.10441 18.8359 7.10441 18.2836V18.2537C7.10441 17.7014 7.55212 17.2537 8.10441 17.2537Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_371_1217">
                  <rect width="24.3582" height="24.3582" fill="white" transform="matrix(-1 0 0 1 24.3582 0)" />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </div>
      </div>

      <div className="flex-auto flex flex-col justify-center items-center">
        <div className="text-center mt-10">
          <div className="font-abel text-[32px] font-normal text-3xl">Shelter name</div>
          <div className="flex flex-row flex-nowrap justify-center items-end mt-3">
            <div className="text-6xl text-white">304</div>
            <div className="text-4xl text-[#4F5794]">
              <span className="text-white">/</span>500
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-nowrap justify-evenly gap-5 mt-11 w-full">
          <div className="flex flex-col flex-nowrap items-center gap-3">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width={39} height={59} viewBox="0 0 39 59" fill="none">
                <path
                  d="M33.0752 33.0648C40.6315 25.5108 40.6315 13.2195 33.0752 5.66557C25.5188 -1.88852 13.2238 -1.88852 5.66728 5.66557C-1.88909 13.2195 -1.88909 25.5108 5.66728 33.0648C8.86581 36.2623 12.9134 38.1059 17.0911 38.5965V45.0828H12.5311C11.2718 45.0828 10.2511 46.1033 10.2511 47.3621C10.2511 48.6209 11.2718 49.6414 12.5311 49.6414H17.0911V56.0622C17.0912 57.321 18.1119 58.3415 19.3713 58.3415C20.6305 58.3415 21.6513 57.321 21.6513 56.0622V49.6414H26.2114C27.4706 49.6414 28.4914 48.6209 28.4914 47.3621C28.4914 46.1033 27.4706 45.0828 26.2114 45.0828H21.6513V38.5966C25.8291 38.1059 29.8766 36.2623 33.0752 33.0648ZM8.89179 29.8413C3.11335 24.0647 3.11335 14.6655 8.89179 8.88894C14.6701 3.11256 24.0721 3.11221 29.8508 8.88894C35.6292 14.6655 35.6292 24.0647 29.8508 29.8413C24.0723 35.6178 14.6702 35.6178 8.89179 29.8413Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-3xl text-[32px]">104</div>
          </div>

          <div className="flex flex-col flex-nowrap items-center gap-3">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width={53} height={59} viewBox="0 0 52 51" fill="none">
                <path
                  d="M47.632 1.73401H33.28C31.824 1.73401 30.68 2.85601 30.68 4.28401C30.68 5.71201 31.824 6.83401 33.28 6.83401H41.288L31.72 16.218C24.336 10.812 13.832 11.322 7.176 17.85C-0.103997 24.99 -0.103997 36.72 7.176 43.86C14.456 51 26.416 51 33.696 43.86C40.352 37.332 40.976 26.928 35.36 19.788L44.928 10.404V18.36C44.928 19.788 46.072 20.91 47.528 20.91C48.984 20.91 50.128 19.788 50.128 18.36V4.28401C50.232 2.85601 49.088 1.73401 47.632 1.73401ZM30.16 40.29C24.856 45.492 16.224 45.492 10.92 40.29C5.616 35.088 5.616 26.622 10.92 21.42C16.224 16.218 24.856 16.218 30.16 21.42C35.464 26.622 35.464 35.088 30.16 40.29Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-3xl text-[32px] self-end">200</div>
          </div>
        </div>

        <div className="mt-11 w-full">
          <div className="flex flex-row flex-nowrap justify-evenly">
            <div className="flex flex-row flex-nowrap gap-3 items-center min-w-[120px]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={35}
                  height={35}
                  fill="currentColor"
                  className="shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                </svg>
              </div>
              <div className="text-xl font-normal">15-</div>
            </div>
            <div className="min-w-[100px] text-center text-3xl text-[32px] font-normal border-l-2 border-[#1A2368] py-2">
              55
            </div>
          </div>

          <div className="flex flex-row flex-nowrap justify-evenly">
            <div className="flex flex-row flex-nowrap gap-3 items-center min-w-[120px]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={35}
                  height={35}
                  fill="currentColor"
                  className="shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                </svg>
              </div>
              <div className="text-xl font-normal">16-40</div>
            </div>
            <div className="min-w-[100px] text-center text-3xl text-[32px] font-normal border-l-2 border-[#1A2368] py-2">
              190
            </div>
          </div>

          <div className="flex flex-row flex-nowrap justify-evenly">
            <div className="flex flex-row flex-nowrap gap-3 items-center min-w-[120px]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={35}
                  height={35}
                  fill="currentColor"
                  className="shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                </svg>
              </div>
              <div className="text-xl font-normal">40+</div>
            </div>
            <div className="min-w-[100px] text-center text-3xl text-[32px] font-normal border-l-2 border-[#1A2368] py-2">
              59
            </div>
          </div>
        </div>

        <div className="text-center mt-14">
          <Button  onClick={() => router.push('/scanner')} variant="link" className="hover:no-underline px-2">
            <svg xmlns="http://www.w3.org/2000/svg" width={54} height={54} viewBox="0 0 54 54" fill="none">
              <path
                d="M6.75 22.1717C6.75 22.0123 6.75 21.9326 6.75227 21.8651C6.82322 19.7618 8.51183 18.0732 10.6151 18.0023C10.6826 18 10.7623 18 10.9217 18V18C11.0242 18 11.0754 18 11.1229 17.9989C12.5693 17.9645 13.8844 17.1517 14.5621 15.8734C14.5843 15.8314 14.6072 15.7856 14.653 15.6939L16.8944 11.2111C17.4323 10.1353 17.7013 9.5974 18.1846 9.2987C18.6679 9 19.2693 9 20.4721 9H33.5279C34.7307 9 35.3321 9 35.8154 9.2987C36.2987 9.5974 36.5677 10.1353 37.1056 11.2111L39.347 15.6939C39.3928 15.7856 39.4157 15.8314 39.4379 15.8734C40.1156 17.1517 41.4307 17.9645 42.8771 17.9989C42.9246 18 42.9758 18 43.0783 18V18C43.2377 18 43.3174 18 43.3849 18.0023C45.4882 18.0732 47.1768 19.7618 47.2477 21.8651C47.25 21.9326 47.25 22.0123 47.25 22.1717V39C47.25 41.8284 47.25 43.2426 46.3713 44.1213C45.4926 45 44.0784 45 41.25 45H12.75C9.92157 45 8.50736 45 7.62868 44.1213C6.75 43.2426 6.75 41.8284 6.75 39V22.1717Z"
                stroke="white"
                strokeWidth={3}
              />
              <circle cx={27} cy="29.25" r={8} stroke="white" strokeWidth={2} />
            </svg>
          </Button>
        </div>
      </div>

      <div className={`h-full absolute z-50 inset-0 bg-[#343B71] flex flex-col origin-bottom  canvas-transition -translate-y-full ${show ?"sheet-show":"invisible" }  `}>
        <div className="text-end">
          <Button variant="ghost" className="hover:bg-gray-500/40 hover:text-gray-100 w-10 h-10" onClick={()=>setShow(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              className="shrink-0"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_371_1498)">
                <path
                  d="M23.4546 1.63615C23.7558 1.33495 23.7558 0.846592 23.4546 0.545384C23.1534 0.244177 22.6651 0.244177 22.3638 0.545384L12 10.9092L1.63615 0.545384C1.33495 0.244177 0.846592 0.244177 0.545384 0.545384C0.244177 0.846592 0.244177 1.33495 0.545384 1.63615L10.9092 12L0.545384 22.3638C0.244177 22.6651 0.244177 23.1534 0.545384 23.4546C0.846592 23.7558 1.33495 23.7558 1.63615 23.4546L12 13.0908L22.3638 23.4546C22.6651 23.7558 23.1534 23.7558 23.4546 23.4546C23.7558 23.1534 23.7558 22.6651 23.4546 22.3638L13.0908 12L23.4546 1.63615Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_371_1498">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </div>
        <div className="flex-auto flex items-end">
          <div className="w-full space-y-3">
            <Button
              variant="ghost"
              className="hover:bg-gray-500/40 hover:text-gray-100 h-9 space-x-4 w-full justify-normal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                <path
                  d="M3.26337 22.0956C3.26337 22.0956 3.24205 22.6321 3.7661 22.6321C4.41807 22.6321 9.81584 22.625 9.81584 22.625L9.82473 17.6678C9.82473 17.6678 9.73946 16.8506 10.5326 16.8506H13.0428C13.9808 16.8506 13.923 17.6678 13.923 17.6678L13.9124 22.609C13.9124 22.609 19.0304 22.609 19.8342 22.609C20.4995 22.609 20.4693 21.9411 20.4693 21.9411V12.8021L12.1235 5.37823L3.26337 12.8021V22.0956Z"
                  fill="white"
                />
                <path
                  d="M0 12.111C0 12.111 0.752332 13.4976 2.39289 12.111L12.1972 3.81673L21.3895 12.0595C23.2885 13.4292 24 12.0595 24 12.0595L12.1972 1.36787L0 12.111Z"
                  fill="white"
                />
                <path d="M21.1665 3.79718H18.8021L18.8118 6.66439L21.1665 8.66202V3.79718Z" fill="white" />
              </svg>
              <span>Home</span>
            </Button>

            <Button
              variant="ghost"
              className="hover:bg-gray-500/40 hover:text-gray-100 h-9 space-x-4 w-full justify-normal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_371_1450)">
                  <path
                    d="M16 18.2222V20H0.444444C0.198667 20 0 20.1991 0 20.4444C0 20.6898 0.198667 20.8889 0.444444 20.8889H16V22.6667C16 22.912 16.1987 23.1111 16.4444 23.1111H21.7778C22.0236 23.1111 22.2222 22.912 22.2222 22.6667V20.8889H23.5556C23.8013 20.8889 24 20.6898 24 20.4444C24 20.1991 23.8013 20 23.5556 20H22.2222V18.2222C22.2222 17.9769 22.0236 17.7778 21.7778 17.7778H16.4444C16.1987 17.7778 16 17.9769 16 18.2222Z"
                    fill="white"
                  />
                  <path
                    d="M8.88889 9.77777V11.5555H0.444444C0.198667 11.5555 0 11.7547 0 12C0 12.2453 0.198667 12.4444 0.444444 12.4444H8.88889V14.2222C8.88889 14.4675 9.08756 14.6667 9.33333 14.6667H14.6667C14.9124 14.6667 15.1111 14.4675 15.1111 14.2222V12.4444H23.5556C23.8013 12.4444 24 12.2453 24 12C24 11.7547 23.8013 11.5555 23.5556 11.5555H15.1111V9.77777C15.1111 9.53244 14.9124 9.33333 14.6667 9.33333H9.33333C9.08756 9.33333 8.88889 9.53244 8.88889 9.77777Z"
                    fill="white"
                  />
                  <path
                    d="M1.77778 1.33333V3.11111H0.444444C0.198667 3.11111 0 3.31022 0 3.55555C0 3.80089 0.198667 4 0.444444 4H1.77778V5.77777C1.77778 6.02311 1.97644 6.22222 2.22222 6.22222H7.55556C7.80133 6.22222 8 6.02311 8 5.77777V4H23.5556C23.8013 4 24 3.80089 24 3.55555C24 3.31022 23.8013 3.11111 23.5556 3.11111H8V1.33333C8 1.088 7.80133 0.888885 7.55556 0.888885H2.22222C1.97644 0.888885 1.77778 1.088 1.77778 1.33333Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_371_1450">
                    <rect width={24} height={24} fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span>Setting</span>
            </Button>

            <Button
              variant="ghost"
              className="hover:bg-gray-500/40 hover:text-gray-100 h-9 space-x-4 w-full justify-normal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_371_1457)">
                  <path
                    d="M12 0C5.3832 0 0 5.38327 0 12.0001C0 18.6169 5.3832 24 12 24C18.6168 24 24 18.6169 24 12.0001C24 5.38327 18.6168 0 12 0ZM12 21.8182C6.58618 21.8182 2.18182 17.4138 2.18182 12.0001C2.18182 6.58633 6.58618 2.18182 12 2.18182C17.4138 2.18182 21.8182 6.58633 21.8182 12.0001C21.8182 17.4138 17.4137 21.8182 12 21.8182Z"
                    fill="white"
                  />
                  <path
                    d="M11.9998 5.09087C11.198 5.09087 10.5456 5.74367 10.5456 6.54607C10.5456 7.34774 11.198 7.99996 11.9998 7.99996C12.8017 7.99996 13.4541 7.34774 13.4541 6.54607C13.4541 5.74367 12.8017 5.09087 11.9998 5.09087Z"
                    fill="white"
                  />
                  <path
                    d="M12 10.1817C11.3976 10.1817 10.9091 10.6702 10.9091 11.2726V17.8181C10.9091 18.4206 11.3976 18.909 12 18.909C12.6025 18.909 13.0909 18.4206 13.0909 17.8181V11.2726C13.0909 10.6702 12.6025 10.1817 12 10.1817Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_371_1457">
                    <rect width={24} height={24} fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span>About App</span>
            </Button>

            <Button
              variant="ghost"
              className="hover:bg-gray-500/40 hover:text-gray-100 h-9 space-x-4 w-full justify-normal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_371_1464)">
                  <path
                    d="M11.9602 21.9669H2.99002C2.43984 21.9669 1.99336 21.5203 1.99336 20.9702V3.02998C1.99336 2.47981 2.43989 2.03333 2.99002 2.03333H11.9602C12.5113 2.03333 12.9568 1.58783 12.9568 1.03667C12.9568 0.485515 12.5113 0.0399209 11.9602 0.0399209H2.99002C1.34152 0.0399209 0 1.38148 0 3.02998V20.9702C0 22.6187 1.34152 23.9602 2.99002 23.9602H11.9602C12.5113 23.9602 12.9568 23.5147 12.9568 22.9635C12.9568 22.4124 12.5113 21.9669 11.9602 21.9669Z"
                    fill="white"
                  />
                  <path
                    d="M23.703 11.2904L17.6432 5.31034C17.2525 4.92362 16.6206 4.92863 16.2339 5.32032C15.8472 5.71201 15.8512 6.3429 16.2439 6.72962L20.5744 11.0034H8.97011C8.41895 11.0034 7.97345 11.4489 7.97345 12C7.97345 12.5512 8.41895 12.9967 8.97011 12.9967H20.5744L16.2439 17.2704C15.8512 17.6572 15.8482 18.2881 16.2339 18.6797C16.4292 18.8771 16.6864 18.9767 16.9435 18.9767C17.1967 18.9767 17.4498 18.8811 17.6432 18.6897L23.703 12.7096C23.8924 12.5222 24 12.2671 24 12C24 11.733 23.8934 11.4788 23.703 11.2904Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_371_1464">
                    <rect width={24} height={24} fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span>Log Out</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

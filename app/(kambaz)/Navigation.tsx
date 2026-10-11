"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { FaCircleQuestion, FaRegCircleUser, FaInbox } from "react-icons/fa6";
import Link from "next/link";

export default function KambazNavigation() {
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <img 
        src={'/images/NEU.png'}
        height="80px"
        width="120px"/>
      <Link
        href="/account"
        id="wd-account-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaRegCircleUser className="inline-block text-3xl text-red-500" />
        <br />
        Account
      </Link>
      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className="block bg-white py-3 text-center text-sm text-red-600 no-underline"
      >
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
        <br />
        Dashboard
      </Link>
        <br />
      <Link href="/dashboard" id="wd-course-link">
        Courses
      </Link>
      <br />
      <Link href="/calendar" id="wd-calendar-link">
        Calendar
      </Link>
      <br />
      <Link href="/inbox" id="wd-inbox-link"
      className="block bg-black py-3 text-center text-sm text-white no-underline">
        <FaInbox className="inline-block text-3xl text-red-600"/> 
        <br />
        Inbox
      </Link>
      <br />
      <Link
        href="/labs"
        id="wd-ai-nav-help"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaCircleQuestion className="inline-block text-3xl text-red-500" />
        <br />
        Labs
      </Link>
      <br />
    </nav>
  );
}

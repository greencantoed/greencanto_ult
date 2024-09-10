/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/w7Y0KEZ5Qee
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Manrope } from 'next/font/google'
import { Syne } from 'next/font/google'

manrope({
  subsets: ['latin'],
  display: 'swap',
})

syne({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

export function sicily() {
  return (
    <div className="flex min-h-screen bg-[#2D677D] text-white">
      <div className="hidden w-1/2 lg:block">
        <div className="h-full w-full overflow-hidden">
          <div className="h-[6480px] w-full animate-[carousel_30s_linear_infinite]">
            <img
              src="/placeholder.svg"
              width={1920}
              height={960}
              alt="Carousel Image 1"
              className="h-[960px] w-full object-cover"
              style={{ aspectRatio: "1920/960", objectFit: "cover" }}
            />
            <img
              src="/placeholder.svg"
              width={1920}
              height={960}
              alt="Carousel Image 2"
              className="h-[960px] w-full object-cover"
              style={{ aspectRatio: "1920/960", objectFit: "cover" }}
            />
            <img
              src="/placeholder.svg"
              width={1920}
              height={960}
              alt="Carousel Image 3"
              className="h-[960px] w-full object-cover"
              style={{ aspectRatio: "1920/960", objectFit: "cover" }}
            />
            <img
              src="/placeholder.svg"
              width={1920}
              height={960}
              alt="Carousel Image 4"
              className="h-[960px] w-full object-cover"
              style={{ aspectRatio: "1920/960", objectFit: "cover" }}
            />
            <img
              src="/placeholder.svg"
              width={1920}
              height={960}
              alt="Carousel Image 5"
              className="h-[960px] w-full object-cover"
              style={{ aspectRatio: "1920/960", objectFit: "cover" }}
            />
            <img
              src="/placeholder.svg"
              width={1920}
              height={960}
              alt="Carousel Image 6"
              className="h-[960px] w-full object-cover"
              style={{ aspectRatio: "1920/960", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between lg:w-1/2">
        <header className="px-8 pt-8 lg:px-16 lg:pt-16">
          <div className="flex items-center justify-between">
            <Link href="#" prefetch={false}>
              <MountainIcon className="h-8 w-8 text-[#CEF1BD]" />
              <span className="sr-only">Greencanto</span>
            </Link>
            <nav className="hidden space-x-6 lg:flex">
              <Link href="#" className="text-sm font-medium text-[#CEF1BD] hover:underline" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-sm font-medium text-[#CEF1BD] hover:underline" prefetch={false}>
                Our Mission
              </Link>
              <Link href="#" className="text-sm font-medium text-[#CEF1BD] hover:underline" prefetch={false}>
                Who are we
              </Link>
              <Link href="#" className="text-sm font-medium text-[#CEF1BD] hover:underline" prefetch={false}>
                Join us now!
              </Link>
              <Link href="#" className="text-sm font-medium text-[#CEF1BD] hover:underline" prefetch={false}>
                Contacts
              </Link>
              <Link href="#" className="text-sm font-medium text-[#CEF1BD] hover:underline" prefetch={false}>
                FAQ
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 px-8 pt-24 pb-32 lg:px-16 lg:pt-32 lg:pb-48">
          <section id="home" className="space-y-8 lg:space-y-12">
            <h1 className="text-4xl font-bold lg:text-6xl">Reviving Sicily's Abandoned Lands</h1>
            <p className="text-lg text-[#FAF0E6] lg:text-xl">
              Greencanto is a social impact foundation dedicated to developing agrivoltaics projects in Sicily,
              combating land abandonment and creating sustainable communities.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-[#CEF1BD] px-6 py-3 text-sm font-medium text-[#2D677D] transition-colors hover:bg-[#b9e4a4]"
                prefetch={false}
              >
                Learn More
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-[#CEF1BD] bg-transparent px-6 py-3 text-sm font-medium text-[#CEF1BD] transition-colors hover:bg-[#CEF1BD] hover:text-[#2D677D]"
                prefetch={false}
              >
                Donate
              </Link>
            </div>
          </section>
          <section id="mission" className="mt-32 space-y-8 lg:mt-48 lg:space-y-12">
            <h2 className="text-3xl font-bold lg:text-4xl">Our Mission</h2>
            <p className="text-lg text-[#FAF0E6] lg:text-xl">
              La nostra missione è chiara: rigenerare terreni abbandonati e farli rifiorire grazie a investimenti
              sostenibili. Offriamo agli utenti l'opportunità di acquistare quote di aziende agricole, promuovendo
              un'agricoltura innovativa e sostenibile. Parallelamente, sosteniamo progetti di riqualificazione
              ambientale, con un focus speciale sulla Sicilia.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-md bg-[#CEF1BD] p-6 text-[#2D677D]">
                <LeafIcon className="mb-4 h-8 w-8" />
                <h3 className="mb-2 text-xl font-bold">Sustainable Agriculture</h3>
                <p>
                  Our agrivoltaics projects integrate solar energy production with sustainable farming, reviving
                  abandoned lands and creating new economic opportunities.
                </p>
              </div>
              <div className="rounded-md bg-[#CEF1BD] p-6 text-[#2D677D]">
                <ZapIcon className="mb-4 h-8 w-8" />
                <h3 className="mb-2 text-xl font-bold">Renewable Energy</h3>
                <p>
                  By combining solar energy production with agriculture, we generate clean, renewable power to power
                  local communities.
                </p>
              </div>
              <div className="rounded-md bg-[#CEF1BD] p-6 text-[#2D677D]">
                <UsersIcon className="mb-4 h-8 w-8" />
                <h3 className="mb-2 text-xl font-bold">Community Development</h3>
                <p>
                  Our projects create new jobs and economic opportunities, revitalizing rural communities and combating
                  land abandonment.
                </p>
              </div>
            </div>
          </section>
          <section id="about" className="mt-32 space-y-8 lg:mt-48 lg:space-y-12">
            <h2 className="text-3xl font-bold lg:text-4xl">Who are we</h2>
            <p className="text-lg text-[#FAF0E6] lg:text-xl">
              Greencanto è nata dalla visione di Edoardo Cumitini e Giuseppe Marletta, professionisti con esperienza in
              agricoltura, finanza e sostenibilità.
            </p>
          </section>
          <section id="join" className="mt-32 space-y-8 lg:mt-48 lg:space-y-12">
            <h2 className="text-3xl font-bold lg:text-4xl">Join us now!</h2>
            <p className="text-lg text-[#FAF0E6] lg:text-xl">
              Become part of our mission to revive Sicily's abandoned lands. Invest in our sustainable agrivoltaics
              projects and help create a brighter future.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-[#CEF1BD] px-6 py-3 text-sm font-medium text-[#2D677D] transition-colors hover:bg-[#b9e4a4]"
                prefetch={false}
              >
                Invest Now
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-[#CEF1BD] bg-transparent px-6 py-3 text-sm font-medium text-[#CEF1BD] transition-colors hover:bg-[#CEF1BD] hover:text-[#2D677D]"
                prefetch={false}
              >
                Volunteer
              </Link>
            </div>
          </section>
          <section id="contact" className="mt-32 space-y-8 lg:mt-48 lg:space-y-12">
            <h2 className="text-3xl font-bold lg:text-4xl">Contacts</h2>
            <p className="text-lg text-[#FAF0E6] lg:text-xl">
              Get in touch with us to learn more about our projects and how you can get involved.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-[#CEF1BD] px-6 py-3 text-sm font-medium text-[#2D677D] transition-colors hover:bg-[#b9e4a4]"
                prefetch={false}
              >
                Email Us
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-[#CEF1BD] bg-transparent px-6 py-3 text-sm font-medium text-[#CEF1BD] transition-colors hover:bg-[#CEF1BD] hover:text-[#2D677D]"
                prefetch={false}
              >
                Call Us
              </Link>
            </div>
          </section>
          <section className="mt-32 space-y-8 lg:mt-48 lg:space-y-12">
            <h2 className="text-3xl font-bold lg:text-4xl">FAQ</h2>
            <p className="text-lg text-[#FAF0E6] lg:text-xl">
              Find answers to your questions about our projects and how you can get involved.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-md bg-[#CEF1BD] p-6 text-[#2D677D]">
                <h3 className="mb-2 text-xl font-bold">What is Greencanto's mission?</h3>
                <p>
                  Greencanto's mission is to revive Sicily's abandoned lands through innovative agrivoltaics projects,
                  creating sustainable communities and combating land abandonment.
                </p>
              </div>
              <div className="rounded-md bg-[#CEF1BD] p-6 text-[#2D677D]">
                <h3 className="mb-2 text-xl font-bold">How can I get involved with Greencanto?</h3>
                <p>
                  You can get involved by investing in our sustainable agrivoltaics projects, volunteering your time and
                  skills, or simply spreading the word about our mission.
                </p>
              </div>
              <div className="rounded-md bg-[#CEF1BD] p-6 text-[#2D677D]">
                <h3 className="mb-2 text-xl font-bold">What are the benefits of Greencanto's projects?</h3>
                <p>
                  Greencanto's projects provide sustainable agriculture, renewable energy, and community development,
                  revitalizing rural areas and creating new economic opportunities.
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer className="border-t border-[#FAF0E6]/20 px-8 py-6 lg:px-16 lg:py-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#FAF0E6]">&copy; 2024 Greencanto. All rights reserved.</p>
            <nav className="hidden space-x-4 lg:flex">
              <Link href="#" className="text-sm font-medium text-[#CEF1BD] hover:underline" prefetch={false}>
                Privacy
              </Link>
              <Link href="#" className="text-sm font-medium text-[#CEF1BD] hover:underline" prefetch={false}>
                Terms
              </Link>
              <Link href="#" className="text-sm font-medium text-[#CEF1BD] hover:underline" prefetch={false}>
                Contact
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  )
}

function LeafIcon(props) {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function ZapIcon(props) {
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
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  )
}

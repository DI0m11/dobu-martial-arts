import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import heroImage from "~/assets/jpg/karate-hero-image.jpg";

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
      <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover object-center"
                  src={heroImage}
                  alt="Karate Lesson"
                />
              </div>
              <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
                <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-8xl">
                  <span className="block uppercase text-red-700 drop-shadow-md">
                    Dobu Martial arts
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl"></p>
                <div className="mx-auto mt-32 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  {user ? (
                    <Link
                      to="/notes"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                    >
                      View Notes for {user.email}
                    </Link>
                  ) : (
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <Link
                        to="/join"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-red-500 shadow-sm hover:bg-yellow-50 sm:px-8"
                      >
                        Sign up
                      </Link>
                      <Link
                        to="/login"
                        className="flex items-center justify-center rounded-md bg-red-500 px-4 py-3 font-medium text-white hover:bg-yellow-600"
                      >
                        Log In
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <h1 className="my-0 text-center text-5xl font-black">
        Welcome to the Dobu Martial Arts
      </h1>
      <p className="my-10 text-center text-3xl font-black">
        The dobu martial arts gym offers a list of the following martial arts:
      </p>
      <p className="my-2 text-center text-3xl font-black">Judo</p>
      <p className="my-2 text-center text-3xl font-black">Karate</p>
      <p className="my-2 text-center text-3xl font-black">Jiu-jitsu</p>
      <p className="my-2 text-center text-3xl font-black">Muay Thai</p>
      <p className="my-5 p-14 text-left text-2xl font-black">
        The gym dosent only offer martial arts it offers a gym. The gym offers
        classes in a number of different martial arts, as well as fitness
        training and self-defence courses. The gym has a large, matted martial
        arts area, a fully-equipped gym, a sauna, a steam room and changing and
        shower facilities.
      </p>
    </>
  );
}

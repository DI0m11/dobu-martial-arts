import logo from "~/assets/jpg/Timetable.jpg";

export default function Classes() {
  return (
    <>
      <h1 className="my-8 text-center text-2xl font-black">
        TimeTable for the Classes
      </h1>

      <div className="mx-auto mb-8 max-w-xl">
        <img src={logo} alt="Dobu Martial Arts Gym" />
      </div>
    </>
  );
}

export default function Memberships() {
  return (
    <div className="bg-white-200 min-h-screen p-4">
      <h1 className="text-red mb-4 text-center font-serif text-4xl font-extrabold">
        Memberships
      </h1>
      <ul className="mx-auto max-w-xl p-4">
        <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
          <h2 className="mb-4 font-serif text-2xl font-extrabold tracking-wide text-red-700">
            Basic
          </h2>
          <dl>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Description
            </dt>
            <dd className="mb-3 text-neutral-600">
              1 martial art - 2 sessions per week. Monthly fee.
            </dd>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Price
            </dt>
            <dd className="mb-3 font-serif text-xl font-extrabold text-red-700">
              £25.00
            </dd>
          </dl>
        </li>
        <li className="bg-red mb-4 rounded-lg p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
          <h2 className="mb-3 font-serif text-2xl font-extrabold tracking-wide text-red-700">
            Intermediate
          </h2>
          <dl>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Description
            </dt>
            <dd className="mb-3 text-neutral-600">
              1 martial art - 3 sessions per week. Monthly fee.
            </dd>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Price
            </dt>
            <dd className="mb-3 font-serif text-xl font-extrabold text-red-700">
              £35.00
            </dd>
          </dl>
        </li>
        <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
          <h2 className="mb-3 font-serif text-2xl font-extrabold tracking-wide text-red-700">
            Advanced
          </h2>
          <dl>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Description
            </dt>
            <dd className="mb-3 text-neutral-600">
              Any 2 martial arts - 5 sessions per week. Monthly fee.
            </dd>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Price
            </dt>
            <dd className="mb-3 font-serif text-xl font-extrabold text-red-700">
              £45.00
            </dd>
          </dl>
        </li>
        <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
          <h2 className="mb-3 font-serif text-2xl font-extrabold tracking-wide text-red-700">
            Elite
          </h2>
          <dl>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Description
            </dt>
            <dd className="mb-3 text-neutral-600">Unlimited classes.</dd>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Price
            </dt>
            <dd className="mb-3 font-serif text-xl font-extrabold text-red-700">
              £60.00
            </dd>
          </dl>
        </li>
        <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
          <h2 className="mb-3 font-serif text-2xl font-extrabold tracking-wide text-red-700">
            Private Martial Arts Tuition
          </h2>
          <dl>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Description
            </dt>
            <dd className="mb-3 text-neutral-600">
              Private lessons for any martial art.
            </dd>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Price
            </dt>
            <dd className="mb-3 font-serif text-xl font-extrabold text-red-700">
              £15.00
            </dd>
          </dl>
        </li>
        <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
          <h2 className="mb-3 font-serif text-2xl font-extrabold tracking-wide text-red-700">
            Junior Membership
          </h2>
          <dl>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Description
            </dt>
            <dd className="mb-3 text-neutral-600">
              Can attend all-kids martial arts sessions.
            </dd>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Price
            </dt>
            <dd className="mb-3 font-serif text-xl font-extrabold text-red-700">
              £25.00
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  );
}

import MembershipCard from "~/components/Membership/MembershipCard";
import { LoaderArgs } from "@remix-run/node";
import { useUser } from "~/utils";

import { requireUserId } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);

  return null;
};

export default function Memberships() {
  return (
    <div className="min-h-screen bg-white p-4">
      <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-red-900">
        Membership Page
      </h1>
      <ul className="mx-auto max-w-xl p-4">
        <MembershipCard
          level="Basic"
          description="1 martial art - 2 sessions per week. Monthly fee."
          price="£25.00"
        />
        <MembershipCard
          level="Intermediate"
          description="1 martial art - 3 sessions per week. Monthly fee."
          price="£35.00"
        />
        <MembershipCard
          level="Advanced"
          description="Any 2 martial arts - 5 sessions per week. Monthly fee."
          price="£45.00"
        />
        <MembershipCard
          level="Elite"
          description="Unlimited classes"
          price="£60.00"
        />
        <MembershipCard
          level="Private Martial Arts Tuition"
          description="Private one to one sessions"
          price="£15.00"
        />
        <MembershipCard
          level="Junior Membership"
          description="Can attend all-kids martial arts
          sessions"
          price="£25.00"
        />
      </ul>
    </div>
  );
}

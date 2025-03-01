import { getServerSession } from "next-auth";

// components
import WhoAmIButton from "./WhoAmIButton";

export default async function ServerActionPage() {
  const whoAmI = async () => {
    "use server"
    const session = await getServerSession();
    return session?.user?.name || "Not logged In";
  };
  return(
    <div>
      <WhoAmIButton whoAmIAction={whoAmI} />
    </div>
  );
}


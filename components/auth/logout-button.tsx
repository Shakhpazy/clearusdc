import { supabase } from "@/lib/supabase/client";
import { Button } from "../ui/button";

function LogoutButton() {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    }

    console.log("User signed out successfully.");
  };

  return (
    <Button type="button" variant="destructive" size="lg" className="h-9 px-3 text-sm"  onClick={handleLogout}>
      Sign out
    </Button>
  );
}

export default LogoutButton;

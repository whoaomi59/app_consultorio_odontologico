import AdminPanel from "../../components/AdminPanel";
import DentalAdminPanel from "../../components/DentalAdminPanel";
import DentalFooter from "../../components/DentalFooter";
import DentalHero from "../../components/DentalHero";
import HomePage from "../../components/HomePage";
import NavBar from "../../components/NavBar";
import TeamMemberCard from "../../components/TeamMemberCard";

export default function Home() {
  return (
    <>
      <NavBar />
      <DentalAdminPanel />
      <DentalHero />
      <HomePage />
      <AdminPanel />
      <TeamMemberCard
        name={"jhon"}
        role={"admin"}
        image={"https://cdn-icons-png.flaticon.com/512/5825/5825296.png"}
        bio={"asdasdasdasd"}
      />
      <DentalFooter />
    </>
  );
}

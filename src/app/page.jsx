import ApplicantForm from "@/components/layout/ApplicantForm";
import HeaderDescription from "@/components/ui/HeaderDescription";
import Logo from "@/components/ui/Logo";
import Title from "@/components/ui/Title";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <div className="form-section border-[1px] border-dashed border-zinc-700 p-10 rounded-xl">
        {/* form header section */}
        <div className="form-header mb-6">
          <Title>Welcome to <Logo /> </Title>
          <HeaderDescription>Intern software engineer</HeaderDescription>
        </div>

        {/* form section */}
        <div className="applicant-form">
          <ApplicantForm />
        </div>
        
      </div>
    </div>
  );
}

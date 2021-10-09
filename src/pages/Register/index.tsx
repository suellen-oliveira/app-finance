import Button from "../../components/atoms/Button";
import InputText from "../../components/molecules/InputText";
import Sidebar from "../../components/organism/SidebarHero";
import {
  TemplateContainer,
  TemplateContent,
  TemplateMainHeroSection,
} from "../../components/templates";
import Link from "./../../components/molecules/Link";

const Register = () => {
  return (
    <TemplateContainer>
      <TemplateContent>
        <Sidebar />
        <TemplateMainHeroSection>
          <h1 className="font-bold text-3xl">Crie sua conta</h1>
          <form className="flex flex-col w-full gap-4 max-w-xs">
            <InputText label="Email" type="email" />
            <InputText label="Senha" type="password" />

            <Button disabled>Criar Conta</Button>
          </form>
          <Link url="/">Já possuo uma conta</Link>
        </TemplateMainHeroSection>
      </TemplateContent>
    </TemplateContainer>
  );
};

export default Register;

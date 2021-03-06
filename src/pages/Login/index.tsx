import Button from "../../components/atoms/Button";
import InputText from "../../components/molecules/InputText";
import Sidebar from "../../components/organism/SidebarHero";
import {
  TemplateContainer,
  TemplateContent,
  TemplateMainHeroSection,
} from "../../components/templates";
import Link from "./../../components/molecules/Link";

const Login = () => {
  return (
    <TemplateContainer>
      <TemplateContent>
        <Sidebar />
        <TemplateMainHeroSection>
          <h1 className="font-bold text-3xl">Acesse sua conta</h1>
          <form className="flex flex-col w-full gap-4 max-w-xs">
            <InputText label="Email" type="email" />
            <InputText label="Senha" type="password" />

            <Button disabled>Entrar</Button>
          </form>
          <Link url="/register">Criar conta</Link>
        </TemplateMainHeroSection>
      </TemplateContent>
    </TemplateContainer>
  );
};

export default Login;

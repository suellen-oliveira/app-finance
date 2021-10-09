import Button from "../../components/atoms/Button";
import { TemplateContainer } from "../../components/templates";

const Dashboard = () => {
  return (
    <TemplateContainer>
      <header className="w-full max-w-screen-lg flex justify-between items-center h-1/6">
        <span className="font-bold text-2xl">Expanse Tracker</span>
        <nav className="flex gap-4">
          <Button>Adicionar Nova Conta</Button>
          <Button variant="ghost">Sair</Button>
        </nav>
      </header>
      <main className="w-full max-w-screen-lg bg-purple-50 h-5/6 grid grid-cols-3 gap-4 p-4">
        
          <article className="bg-white p-4 shadow-lg h-40 relative flex flex-col justify-center gap-2">
            <h2 className="font-bold text-xl">Netflix</h2>
            <p className="px-2 bg-purple-100 self-start ">Streaming</p>
            <p>54,90</p>
          </article>

      </main>
    </TemplateContainer>
  );
};

export default Dashboard;

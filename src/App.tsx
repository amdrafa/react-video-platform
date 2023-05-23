"use client";
import { useState } from 'react';
import test8 from './images/logo.png';
import test3 from './images/test3.jpg';
import test2 from './images/test2.jpg';
import test7 from './images/test7.jpg';
import test6 from './images/test6.jpg';
import test4 from './images/test4.jpg';
import test5 from './images/test5.jpg';



import './App.css';
import Header from './header/header';
import ModelCard from './components/model-card.tsx/model-card';
import './global.css';

export default function App() {

  const [selectedFilterOption, setSelectedFilterOption] = useState("Mulheres")

  return (
    <div>
      <Header />
      <div className={`w-full bg-stone-900 my-4 p-4 space-x-4 overflow-x-auto whitespace-nowrap`}>
        <button
          className={` ${selectedFilterOption === "Mulheres" ? "bg-pink-700" : "bg-stone-950"} py-2 px-8 rounded-xl focus:outline-green-500`}
          onClick={() => setSelectedFilterOption("Mulheres")}
        >
          Mulheres
        </button>
        <button
          className={`${selectedFilterOption === "Transex" ? "bg-pink-700" : "bg-stone-950"} py-2 px-8 rounded-xl`}
          onClick={() => setSelectedFilterOption("Transex")}
        >
          Transex
        </button>
        <button
          className={`${selectedFilterOption === "Homens" ? "bg-pink-700" : "bg-stone-950"} py-2 px-8 rounded-xl`}
          onClick={() => setSelectedFilterOption("Homens")}
        >
          Homens
        </button>
        <button
          className={`${selectedFilterOption === "Transboy" ? "bg-pink-700" : "bg-stone-950"} py-2 px-8 rounded-xl`}
          onClick={() => setSelectedFilterOption("Transboy")}
        >
          Transboy
        </button>
      </div>

      <div className="w-full bg-red-600 text-lg my-6">
        <div className="p-4 flex justify-center">
          <div>
            <div className="flex justify-center items-center w-full">
              Chamadas de vídeo íntimas.
            </div>

            <div className="flex justify-center text-1xl font-bold">
              CONTEÚDO PAGO! (SOMENTE PIX)
            </div>
          </div>
        </div>

      </div>

      {selectedFilterOption === "Mulheres" ? (
        <div className="grid grid-cols-2 tablet:grid-cols-6">


          <ModelCard
            isOnline={true}
            name="Larissa Silva"
            whatsappLink="https://api.whatsapp.com/send?phone=5547992479009&text=Oi,%20quero%20fazer%20uma%20chamada%20de%20v%C3%ADdeo%20com%20voc%C3%AA.%20Como%20posso%20fazer%20o%20pagamento?"
            image="https://i.imgur.com/PWIV2js.jpeg"
            price="R$49,00"
            city="Florianópolis"
          />
          <ModelCard
            isOnline={false}
            name="Amanda Schutz"
            whatsappLink="https://api.whatsapp.com/send?phone=5547992479009&text=Oi,%20quero%20fazer%20uma%20chamada%20de%20v%C3%ADdeo%20com%20voc%C3%AA.%20Como%20posso%20fazer%20o%20pagamento?"
            image={test8}
            price="R$29,00"
            city="São Paulo"
          />
          <ModelCard
            isOnline={true}
            name="Julia Silva"
            whatsappLink="https://api.whatsapp.com/send?phone=5547992479009&text=Oi,%20quero%20fazer%20uma%20chamada%20de%20v%C3%ADdeo%20com%20voc%C3%AA.%20Como%20posso%20fazer%20o%20pagamento?"
            image={test2}
            price="R$49,00"
            city="Maringá"
          />

          <ModelCard
            isOnline={true}
            name="Julia Silva"
            whatsappLink="https://api.whatsapp.com/send?phone=5547992479009&text=Oi,%20quero%20fazer%20uma%20chamada%20de%20v%C3%ADdeo%20com%20voc%C3%AA.%20Como%20posso%20fazer%20o%20pagamento?"
            image={test7}
            price="R$49,00"
            city="Porto Alegre"
          />
          <ModelCard
            isOnline={true}
            name="Vanessa Lucrezia"
            whatsappLink="https://api.whatsapp.com/send?phone=5547992479009&text=Oi,%20quero%20fazer%20uma%20chamada%20de%20v%C3%ADdeo%20com%20voc%C3%AA.%20Como%20posso%20fazer%20o%20pagamento?"
            image={test5}
            price="R$49,00"
            city="Balneário"
          />
          <ModelCard
            isOnline={false}
            name="Laisa Eduarda"
            whatsappLink="https://api.whatsapp.com/send?phone=5547992479009&text=Oi,%20quero%20fazer%20uma%20chamada%20de%20v%C3%ADdeo%20com%20voc%C3%AA.%20Como%20posso%20fazer%20o%20pagamento?"
            image={test6}
            price="R$29,00"
            city="Florianópolis"
          />
          <ModelCard
            isOnline={true}
            name="Gigi Amaral"
            whatsappLink="https://api.whatsapp.com/send?phone=5547992479009&text=Oi,%20quero%20fazer%20uma%20chamada%20de%20v%C3%ADdeo%20com%20voc%C3%AA.%20Como%20posso%20fazer%20o%20pagamento?"
            image={test4}
            price="R$49,00"
            city="São Paulo"
          />
        </div>
      ) : (
        <div className="flex w-full justify-center py-6 text-lg">
          Esta categoria não possui anunciantes.
        </div>
      )}

    </div>
  )
}

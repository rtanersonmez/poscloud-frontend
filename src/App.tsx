import React, {useEffect} from 'react';
import './output.css';
import logo from './assets/img/restaurant-logo-white.png'

let restaurantLogo = 'npx tailwindcss -i ./src/index.css -o ./src/output.css --watch'

function App() {
    useEffect(() => {
        document.body.classList.add('body');
        document.documentElement.classList.add('html')
    })
    return (
        <>

            <section className="text-custom-orange font-login text-pos-18rem font-normal leading-1-4 fixed right-[10px] top-[10px]">v1.8.516</section>

            <main className="font-normal left-[50%] absolute w-[504px] translate-y-[-50%] top-[35%] ml-[-252px]">

                <img src="assets/img/restaurant-logo-white.png" alt=""
                     className="w-full mt-0 mb-13 ml-auto mr-auto block pt-0 pb-0 pr-56 pl-56"/>

                <form action="#" method="post" className="relative mt-0 mb-0 mr-auto ml-auto w-full">

                    <input name="_token" type="hidden" value="2407HMMhfszl4jgFdU5uf28DqP64BBYs7oFbeWr2"/>

                    <div className="float-left w-[354px]">
                        <input type="text" name="username" placeholder="E-mail" className="rounded-tl-[10px] login-form-inputs border-b"/>
                        <input type="password" name="mail" placeholder="Password / Şifre" className="rounded-bl-[10px] login-form-inputs"/>
                    </div>

                    <button type="submit" className="bg-pos-green border-none p-[41px] rounded-tr-[10px] rounded-br-[10px] float-left">
                        <img src="assets/img/check.svg" alt="" className="w-[68px] h-[68px] fill-black"/>
                    </button>

                </form>
            </main>
        </>

    );
}

export default App;

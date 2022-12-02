import React from "react";

export default function () {
    return (
        <form action="#" method="post" className="relative mt-0 mb-0 mr-auto ml-auto w-full">

            <div className="float-left w-[354px]">
                <input type="text" name="username" placeholder="E-mail"
                       className="rounded-tl-[10px] login-form-inputs border-b"/>
                <input type="password" name="mail" placeholder="Password / Şifre"
                       className="rounded-bl-[10px] login-form-inputs"/>
            </div>

            <button type="submit"
                    className="bg-pos-green border-none p-[41px] rounded-tr-[10px] rounded-br-[10px] float-left">
                <img src="assets/img/check.svg" alt="" className="w-[68px] h-[68px] fill-black"/>
            </button>

        </form>
    )
}
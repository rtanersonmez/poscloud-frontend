import React from "react";
import Version from "./_partials/Version";
import Form from "./_partials/Form"

export default function () {
    return (
        <>
            <Version/>
            <main className="font-normal left-[50%] absolute w-[504px] translate-y-[-50%] top-[35%] ml-[-252px] ">
                <img src="assets/img/restaurant-logo-white.png" alt=""
                     className="w-[100%] mt-0 mb-[53px] ml-auto mr-auto block pt-0 pb-0 pr-56 pl-56"/>

                <Form/>
            </main>
        </>
    )
}
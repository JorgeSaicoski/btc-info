import {useState, useEffect} from 'react'
import Link from 'next/link'
import Fast from "./Fast"
import Cheap from "./Cheap"
import Anon from "./Anon"


function Start() {
  const [pref, setPref] = useState("");
  const handleChange=(e)=>{
        setPref(e.target.value)
    }



  return (
    <div className="p-10 flex flex-col justify-between text-justify">
      <div className="bg-secondColor m-1.5 p-4 rounded-2xl text-tex">
        <div className="p-11 rounded-3xl flex flex-col justify-between min-h-[50vh]">
            <p>The first step to have a security Bitcoin is create a security wallet</p>
            <div>
              <p className="p-1">How can I know if my wallet is security?</p>
              <ul className="list-disc pl-10">
                <li>You have the seed</li>
                <li>You have the control about the fees</li>
                <li>You can do a Adress to receive payments</li>
              </ul>
            </div>
            <p>There is a many of posibilitys to create a security wallet, you can see the option in the <Link href="https://bitcoin.org/en/choose-your-wallet"><strong className="text-atentionColor cursor-pointer">oficial website</strong></Link></p>
            <p>My advice is to use the <Link href="https://electrum.org/"><strong className="text-atentionColor cursor-pointer">Electrum</strong></Link>. It is open source and gives to you security and control of your BTC wallet</p>
        </div>
        <div>
          <fieldset className="mb-5">
            <legend className="sr-only">
                What is your preference?
            </legend>

            <div className="flex flex-row justify-evenly items-start mb-4">
                <div className="flex flex-row">
                  <input id="country-option-1" type="radio" name="preference" value="FAST" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" onChange={handleChange}></input>
                  <label className="text-sm font-medium text-gray-900 ml-2 block">
                    Be fast
                  </label>
                </div>
                <div className="flex flex-row">
                  <input id="country-option-1" type="radio" name="preference" value="CHEAP" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" onChange={handleChange} ></input>
                  <label className="text-sm font-medium text-gray-900 ml-2 block">
                    Be cheap
                  </label>
                </div>
                <div className="flex flex-row">
                  <input id="country-option-1" type="radio" name="preference" value="ANON" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" onChange={handleChange} ></input>
                  <label className="text-sm font-medium text-gray-900 ml-2 block">
                    Be Anonymus
                  </label>
                </div>
            </div>
          </fieldset>
        </div>
      </div>
      {
        (pref === "FAST") ?
        <Fast/>
        :
        (pref === "CHEAP") ?
        <Cheap/>
        :
        (pref === "ANON") ?
        <Anon/>
        :
        <div></div>

      }
    </div>
  )
}

export default Start

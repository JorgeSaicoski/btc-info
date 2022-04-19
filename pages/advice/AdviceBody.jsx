import React from 'react'

function AdviceBody({id}) {

  return (
    <div>
      <h2 className="text-center rounded-b-full text-3xl bg-extraColor text-textColor mb-1">{id.name}</h2>
      <div className="bg-principalColor sticky top-[15%] h-2 m-10 rounded-full"></div>
      {
        (id.id === 1) ?
        <div className="p-10 m-10 rounded-2xl bg-secondColor min-h-screen flex flex-col justify-around border-2 border-extraColor">
          <p className="hover:bg-atentionColor p-2 rounded">For any investiment you must to know that it have risk.</p>
          <p className="hover:bg-atentionColor p-2 rounded">Anything that you do have a risk. May the company that you bought a stock break. May the country that you invest (tesoury or anything) print a lot of money and your investiment will lost the value.</p>
          <p className="hover:bg-atentionColor p-2 rounded">So, you must to study the investiment, and when you have the knowlagde about the risks you are able to do this investiment.</p>
          <p className="hover:bg-atentionColor p-2 rounded">There is a good practice, you can do a test with little % of your capacity. Then you will have experience and you can do a better investiment in this option.</p>
          <p className="hover:bg-atentionColor p-2 rounded">If you want to not lost your money you must to be calm. Dont do any investiment if you have no time to study this.</p>
          <p className="hover:bg-atentionColor p-2 rounded">Just do a quicly investiment when you will put a  little amount.</p>
        </div>
        :
        (id.id === 2) ?
        <p></p>
        :
        <p></p>
      }
    </div>
  )
}

export default AdviceBody

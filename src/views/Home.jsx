import tortaImg from "../assets/img/torta-chocolate.png"

const Home = () => {
  return (
    <>
     <div className="flex justify-center items-center flex-col  mt-36 text-center">
     <h1>Bienvenido a <span className=' text-red-500'>Happy Cake</span></h1>
            <h6>El lugar de los pasteles felices</h6>
             <img src={tortaImg} alt="Imagen Torta" className='w-50 pt-5'/> 

     </div>
    
    </>
  )
}

export default Home
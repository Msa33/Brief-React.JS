export default function Hero (){

    return (
        <section className="py-10 sm:py-16 lg:py-24 bg-white shadow-sm border-b border-gray-200">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                                Bienvenue sur 
                                    <h1 className="text-4xl font-bold text-green-600 sm:text-6xl lg:text-7xl">Sésara Marcket.</h1>
                            </h1>
                            <p className="mt-8 text-base text-black sm:text-xl">Découvrez le meilleur du sésame et de l'arachide, cultivés avec passion. Des produits frais et authentiques,
                                   livrés chez directement vous pour une alimentation saine et savoureuse. Votre goût, notre engagement.</p>
                            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                                <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-green-600 hover:bg-white hover:text-gray-600 border-green-600 border-2 focus:bg-green-600 rounded-md" role="button"> Commander Maintenant</a>
                                <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-gray-600 transition-all duration-200 border-green-600 border-2 hover:bg-green-600 hover:text-white focus:bg-green-600 rounded-md" role="button"> Cliquer ici</a>
                            </div>
                        </div>
                        <div className="relative hover:scale-115">
                            <div className="w-98 h-90 bg-gradient-to-br from-green-600 to-green-300 rounded-t-4xl rounded-b-full shadow-2xl flex items-center justify-center">
                                <div className="absolute -top-0  w-70 h-30 justify-center items-center bg-white rounded-b-full"></div>
                                <div className="w-24 h-24 bg-green-200 bg-opacity-20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                                    <div className="w-12 h-12 bg-black opacity-40 rounded-xl"></div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -left-7 w-13 h-13 bg-black rounded-full opacity-60"></div>
                            <div className="absolute -bottom-12 left-60 w-16 h-16 bg-amber-200 rounded-full "></div>
                            <div className="absolute -bottom-12 left-23 w-16 h-16 bg-amber-200 rounded-full "></div>
                        </div>
                    </div>
                </div>
                
        </section>
  )  
}


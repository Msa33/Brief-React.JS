import SBlanc from '../assets/SBlanc.png'
import Sdoré from '../assets/Sdoré.png'
import sésaNoir from '../assets/sésaNoir.png'
import Arachide from '../assets/Arachide.png'

export default function Feature() {

    const handleAddToCart = (productId: string) => {
        console.log(`Produit ajouté au panier : ${productId}`);
        // logique d'ajout au panier
    }

    return (
        <>
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Nos Produits</h2>
                    <p className="mt-4 text-base font-normal leading-7 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-3">

                    {/* Produit : Sésame Noir */}
                    <div className="relative group shadow-xl/20 rounded-3xl">
                        <div className="overflow-hidden aspect-w-1 aspect-h-1 relative">
                            <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={sésaNoir} alt="Sésame Noir" />
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                                <button
                                    onClick={() => handleAddToCart("sesame_noir")}
                                    className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-600">
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                            
                            <div className="flex items-start justify-center mt-4 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">Sésame Noir</h3>
                                    <p className="sm:px-3 sm:py-1 px-1 py-1 w-15 text-[6px] sm:text-xs font-bold tracking-wide text-white bg-gray-900 rounded-full">50 Kg</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">40.000 XAF</p>
                                    <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500"> 60.000 XAF</del>
                                </div>
                            </div>
                        </div>

                    {/* Produit : Arachide */}
                    <div className="relative group shadow-xl/20 rounded-3xl">
                        <div className="overflow-hidden aspect-w-1 aspect-h-1 relative">
                            <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={Arachide} alt="Arachide" />
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                                <button
                                    onClick={() => handleAddToCart("arachide")}
                                    className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-600"
                                >
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                        <div className="flex items-start justify-center mt-4 space-x-4">
                            <div>
                                <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">Arachide</h3>
                                <p className="sm:px-3 sm:py-1 px-1 py-1 w-15 text-[6px] sm:text-xs font-bold tracking-wide text-white bg-gray-900 rounded-full">50 Kg</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">25.000 XAF</p>
                                <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500"> 45.000 XAF</del>
                            </div>
                        </div>
                    </div>

                    {/* Produit : Sésame Doré */}
                    <div className="relative group shadow-xl/20 rounded-3xl">
                        <div className="overflow-hidden aspect-w-1 aspect-h-1 relative">
                            <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={Sdoré} alt="Sésame Doré" />
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                                <button
                                    onClick={() => handleAddToCart("sesame_dore")}
                                    className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-600">
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                        <div className="absolute left-3 top-3">
                        </div>
                        <div className="flex items-start justify-center mt-4 space-x-4">
                            <div>
                                <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">Sésame Doré</h3>
                                <p className="sm:px-3 sm:py-1 px-1 py-1 w-15 text-[6px] sm:text-xs font-bold tracking-wide text-white bg-gray-900 rounded-full">50 Kg</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">40.000 XAF</p>
                                <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500"> 60. 000 XAF</del>
                            </div>
                        </div>
                    </div>

                     {/* Produit : Sésame Doré */}
                    <div className="relative group shadow-xl/20 rounded-3xl">
                        <div className="overflow-hidden aspect-w-1 aspect-h-1 relative">
                            <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={Sdoré} alt="Sésame Doré" />
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                                <button
                                    onClick={() => handleAddToCart("sesame_dore")}
                                    className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-600">
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                        <div className="absolute left-3 top-3">
                        </div>
                        <div className="flex items-start justify-center mt-4 space-x-4">
                            <div>
                                <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">Sésame Doré</h3>
                                <p className="sm:px-3 sm:py-1 px-1 py-1 w-15 text-[6px] sm:text-xs font-bold tracking-wide text-white bg-gray-900 rounded-full">50 Kg</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">40.000 XAF</p>
                                <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500"> 60. 000 XAF</del>
                            </div>
                        </div>
                    </div>

                     {/* Produit : Sésame Doré */}
                    <div className="relative group shadow-xl/20 rounded-3xl">
                        <div className="overflow-hidden aspect-w-1 aspect-h-1 relative">
                            <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={Sdoré} alt="Sésame Doré" />
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                                <button
                                    onClick={() => handleAddToCart("sesame_dore")}
                                    className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-600">
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                        <div className="absolute left-3 top-3">
                        </div>
                        <div className="flex items-start justify-center mt-4 space-x-4">
                            <div>
                                <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">Sésame Doré</h3>
                                <p className="sm:px-3 sm:py-1 px-1 py-1 w-15 text-[6px] sm:text-xs font-bold tracking-wide text-white bg-gray-900 rounded-full">50 Kg</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">40.000 XAF</p>
                                <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500"> 60. 000 XAF</del>
                            </div>
                        </div>
                    </div>

                    
                    {/* Produit : Sésame Blanc */}
                    <div className="relative group shadow-xl/20 rounded-3xl">
                        <div className="overflow-hidden aspect-w-1 aspect-h-1 relative">
                            <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={SBlanc} alt="Sésame Blanc" />
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                                <button
                                    onClick={() => handleAddToCart("sesame_blanc")}
                                    className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-600"
                                >
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                        <div className="flex items-start justify-center mt-4 space-x-4">
                            <div>
                                <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">Sésame Blanc</h3>
                                <p className="sm:px-3 sm:py-1 px-1 py-1 w-15 text-[6px] sm:text-xs font-bold tracking-wide text-white bg-gray-900 rounded-full">50 Kg</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">40.000 XAF</p>
                                <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500"> 60. 000 XAF</del>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section>
            <div>
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2">200K+</div>
                                <div className="text-gray-600">Visiteurs</div>
                    </div>
                    <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                                <div className="text-gray-600">Livraison</div>
                    </div>
                    <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2">500K+</div>
                                <div className="text-gray-600">Commande</div>
                    </div>
                    <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                                <div className="text-gray-600">Assistance</div>
                    </div>
                </div>
            </div>
    </section>
</>
    )
}
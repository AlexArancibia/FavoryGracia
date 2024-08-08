import React from 'react'
import Boton from './Boton'
import BotonBlanco from './BotonBlanco'
import { Link } from 'react-router-dom'
import Cruz from '../assets/cruz.png'
import Mano from '../assets/mano.png'
import Galeria1 from '../assets/RECURSOSMesa-de-trabajo-9.jpg'
import Galeria2 from '../assets/RECURSOSMesa-de-trabajo-10.jpg'
import Galeria3 from '../assets/RECURSOSMesa-de-trabajo-11.jpg'
import Galeria4 from '../assets/RECURSOSMesa-de-trabajo-12.jpg'

import Conmutador from './Conmutador'

const content = [
    { titulo: 'La Biblia', 
      descripcion: 'Creemos que la Biblia es la palabra de Dios inspirada, infalible e inmutable desde Génesis hasta Apocalipsis. (2 Timoteo 3:16)'
    },
    { titulo: 'Un Dios en tres personas', 
      descripcion: 'Creemos en Dios Padre, Dios Hijo y Dios Espíritu Santo, y que los tres son uno. (1 Juan 5:7)' 
    },
    { titulo: 'La deidad de Jesucristo', 
      descripcion: 'Creemos que Jesucristo es el Unigénito Hijo de Dios, nacido de una mujer virgen; que fue crucificado, murió y resucitó al tercer día; ascendió a los cielos y ahora está sentado a la diestra de Dios Padre. (Isaías 7:14, Lucas 1:30-35)' 
    },
    { titulo: 'La Salvación', 
      descripcion: 'Creemos que la salvación se obtiene por medio del arrepentimiento y la confesión de pecados; es dada por gracia divina (no por obras) y se recibe por la fe en Cristo Jesús. Pues, Él es el único mediador entre Dios y los hombres. (Hechos 4:12)' 
    },
    { titulo: 'La resurrección de los muertos y la vida eterna', 
      descripcion: 'Creemos en la segunda venida de Cristo por su pueblo, que los muertos en Cristo resucitarán primero y los que estén vivos, serán arrebatados por Jesús, y que todos pasarán por el juicio de Dios. Los que estén inscritos en el libro de la vida resucitarán para vida eterna y los que no, para condenación eterna. (1 Tesalonicenses 4:13-17, Apocalipsis 20:11-15)' 
    },
    { titulo: 'La santificación', 
      descripcion: 'Creemos en la santificación como una obra hecha instantáneamente en el espíritu, pero que, también, debe ser desarrollada progresivamente en el alma y en el cuerpo de un hijo de Dios. (Hebreos 12:14, Romanos 6:19-22)' 
    },
    { titulo: 'El bautismo', 
      descripcion: 'Creemos en el bautismo en el Cuerpo de Cristo, por el cual la persona acepta a Jesús, tiene un nuevo nacimiento y pasa a formar parte del cuerpo de Cristo y de su vida eterna. Creemos en el bautismo en aguas como símbolo de identificación con la muerte (al pecado) y con la resurrección de Jesús para vida eterna. (Romanos 6:4) Creemos en el bautismo del Espíritu Santo con la evidencia de hablar en otras lenguas, y que, a través de este bautismo, se recibe el poder para ser testigo de Jesús a todo el mundo. (Hechos 1:8, Hechos 2:4, Marcos 16:17)' 
    },
    { titulo: 'La imposición de manos', 
      descripcion: 'Creemos que es una de las maneras de transmitir bendición, sanidad y poder de Dios de un ser humano a otro. (Hechos 8:15-20, 1 Timoteo 4:14, 2 Timoteo 1:6)' 
    },
    { titulo: 'Los cinco ministerios', 
      descripcion: 'Creemos en los cinco ministerios de Efesios 4.11, como los dones dados por Dios al cuerpo de Cristo. (Efesios 4:11)' 
    },
    { titulo: 'Los ministerios gubernamentales', 
      descripcion: 'Creemos que el apóstol y el profeta son ministerios gubernamentales que establecen el fundamento y la doctrina bíblica de la iglesia. (Efesios 3:5)' 
    },
    { titulo: 'El gobierno apostólico', 
      descripcion: 'Creemos en establecer el gobierno apostólico en la iglesia local con un apóstol como cabeza, un profeta como parte del gobierno, los ministros y los ancianos. (Efesios 4:11, Hechos 14:23)' 
    },
    { titulo: 'El reino de Dios', 
      descripcion: 'Creemos en el reino de Dios como gobierno y en la persona de Jesús como Rey, como dos verdades absolutas y máximas. (Hechos 8:12)' 
    },
    { titulo: 'El poder sanador y liberador del Reino', 
      descripcion: 'Creemos en el poder del Reino para sanar a los enfermos, echar fuera demonios y hacer milagros, maravillas, señales y prodigios. (Mateo 12:28)' 
    },
    { titulo: 'La Fe', 
      descripcion: 'Creemos que sin fe es imposible vivir una vida agradable a Dios y que por ella se heredan las promesas. (Hebreos 11:6)' 
    },
    { titulo: 'Predicar el evangelio', 
      descripcion: 'Creemos en expandir el evangelio del Reino de forma local, nacional y mundial, por todos los medios disponibles. (Mateo 24:14)' 
    },

  ];



function Creencias() {
  return (
    <>
		<div className=" px-6 py-12 md:px-8 md:py-16 lg:px-16 lg:py-24 flex m-0 ">
      <div className="max-w-screen-2xl fade-in mx-auto flex flex-wrap flex-grow justify-between ">
			<div className="lg:w-[30%] w-full lg:mb-0 mb-12 flex flex-col lg:gap-6 gap-2 justify-start  ">
					<h1 className='uppercase titulo text-slate-900'>Lo que creemos</h1>
					<h2 className='mt-2 texto text-slate-900 text-justify'>
						Creemos que Jesucristo es el Hijo Unigénito de Dios, nacido de una mujer virgen. Fue crucificado, murió y resucitó al tercer día. Ascendió a los cielos y ahora está sentado a la diestra de Dios Padre.
					</h2>

					<h2 className='mt-2 texto text-slate-900 font-semibold italic'>

						(Isaías 7:14, Luca 1:30-35)
					</h2>
				</div>

				<div className="lg:w-[30%] w-full lg:mb-0 mb-12 flex flex-col lg:gap-6  gap-2 justify-start  ">
					<h1 className='uppercase titulo text-slate-900'>Nuestros valores</h1>
					<h2 className='mt-2 texto text-slate-900 text-justify'>
					Nuestros valores son los pilares que mantienen la visión de Favor & Gracia Church. Estos valores reflejan nuestra prioridad de llegar a las personas con el Evangelio, mostrando el poder sobrenatural que cambia vidas.					</h2>

					<h2 className='mt-2 texto text-slate-900 font-semibold italic'>

						Desarrollando asi nuestra misión como iglesia.
					</h2>
				</div>

				<div className="lg:w-[30%] w-full lg:mb-0 mb-12 flex flex-col lg:gap-6 gap-2 justify-start  ">
					<h1 className='uppercase titulo text-slate-900'>Liderazgo</h1>
					<h2 className='my-2 texto text-slate-900 text-justify'>
						Conoce más acerca de los pastores principales quienes establecieron la visión y cuidan de nuestra hermosa <strong>familia de Favor & Gracias Church</strong>
					</h2>
					<div className={`flex items-center justify-start lg:mt-0 mt-4 `}>


						<BotonBlanco 
						text={'Conocenos'}
						color={'blue-950'}
						path={'#liderazgo'}></BotonBlanco>
							</div> 
 
				</div>

				<div className="lg:w-[48%] lg:mt-24 mt-4 w-full lg:mb-0 mb-12 flex flex-col lg:gap-6  gap-2 justify-start bg-[#f1f5f9ad] lg:p-10 px-6 py-10  rounded-lg ">
					<div className="flex flex-row gap-4 lg:mb-4 mb-8 ">
					<img src={Cruz} className='w-10 h-auto object-contain' />
					<div className="flex flex-col gap-0 justify-center items-center flex-grow pr-10">
						<h1 className=' text-2xl text-center font-bold text-slate-900'>Nuestras Creencias</h1>
						<hr className='border-t-[3px] w-[100px] border-y-orange-500 my-2' />
					</div>
					
					</div>
					<Conmutador content={content}></Conmutador>
					
					
					
 
				</div>

				<div className="lg:w-[48%] lg:mt-24 mt-0  w-full lg:mb-0 mb-4 flex flex-col lg:gap-6  gap-2 justify-start bg-[#f1f5f9ad] lg:p-10 px-6 py-10 rounded-lg ">
					<div className="flex flex-row gap-4 mb-4">
					<img src={Mano} className='w-16 h-auto object-contain' />
					<div className="flex flex-col gap-0 justify-center items-center flex-grow pr-10">
						<h1 className=' text-2xl text-center font-bold text-slate-900'>Misión y Visión</h1>
						<hr className='border-t-[3px] w-[100px] border-y-orange-500 my-2' />
						</div>
						
					
					</div>

					<h2 className="text-lg text-slate-900 font-bold">Nuestra Visíon</h2>
					<h3 className='text-[15px] text-justify'>
						Como pastor de esta casa, es mi llamado impartir la visión divina que Dios nos ha entregado, transmitiendo a cada persona que forma parte de Favor & Gracia Church. <br/><br/>Nuestra iglesia se caracteriza por la manifestación del poder y amor sobrenatural, instruyendo a cada miembro en su llamado a ser una bendición en esta tierra. Entendemos que nada podemos lograr por nuestra propia fuerza o capacidad humana; dependemos completamente del Espíritu Santo y de la gracia de Dios para llevar a cabo nuestra visión.</h3>
					<h2 className="text-lg text-slate-900 font-bold">Nuestra Visíon</h2>
					<h3 className='text-[15px] text-justify'>
					Consiste en cumplir nuestra asignación de evangelizar, afirmar, discipular y enviar. Es por medio de estos cuatro pilares que llevamos a cabo nuestra misión como iglesia. Enseñamos a cada nuevo creyente a desarrollar su potencial, su propósito y, sobre todo, su comunión con Dios.	
					</h3>

					<hr className="border-0 opacity-0 h-4" />

					<h3 className='text-[15px] text-right italic lg:pl-12 pl-0'>
					"Bendeciré a los que te dendijeren, y a los que te maldijeren maldeciré; y serán benditas en ti todas las familias de la tierra."	
					</h3>
					<h1 className=' text-lg text-right lg:-mt-4 font-bold text-slate-900'>Genesis 12:3</h1>

					<h3 className='text-[15px] text-right italic lg:pl-12 pl-0'>
					"Entonces respondió y me habló diciendo: Esta es la palabra de Jehová a Zorobabel, que dice: No con ejército, ni con fuerza, sino con mi Espiritu, ha dicho Jehová de los ejércitos."	
					</h3>
					<h1 className=' text-lg text-right lg:-mt-4 font-bold text-slate-900'>Zacarias 4:6</h1>
					<div className="flex flex-row flex-wrap justify-between mt-4">
						<img src={Galeria1} className='w-[49%] rounded-lg  '></img>
  
						<img src={Galeria4} className='w-[49%] rounded-lg'></img>

					</div>

					
					
 
				</div>
 
      </div>
    </div>
		
		 
		
		</>
  )
}

export default Creencias
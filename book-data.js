// Book Data File - Dedicated Chapter Title Pages & Zero-Scroll Body Pages
const BOOK_METADATA = {
    title: "El Silencio Que Aprendió a Abrazar",
    subtitle: "Una historia sobre encontrar paz en medio del ruido y elegirse todos los días",
    author: "Andre",
    date: "26 de Junio",
    chapters: [
    {
        "num": 1,
        "title": "Capítulo I: Y Entonces Apareciste",
        "startPage": 1
    },
    {
        "num": 2,
        "title": "Capítulo II: El Idioma de lo Cotidiano",
        "startPage": 65
    },
    {
        "num": 3,
        "title": "Capítulo III: Un Refugio Sin Ruido",
        "startPage": 130
    },
    {
        "num": 4,
        "title": "Capítulo IV: Elegirnos Todos los Días",
        "startPage": 190
    },
    {
        "num": 5,
        "title": "Capítulo V: Habitaciones y Miradas",
        "startPage": 252
    },
    {
        "num": 6,
        "title": "Capítulo VI: La Fogata que Permanece",
        "startPage": 317
    },
    {
        "num": 7,
        "title": "Capítulo VII: Sincera",
        "startPage": 381
    }
]
};

const BOOK_PAGES = [
    {
        "pageNumber": 1,
        "chapter": 1,
        "isChapterTitlePage": true,
        "content": ""
    },
    {
        "pageNumber": 2,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Hay días en los que uno cree tener la vida perfectamente acomodada en su cabeza. Hace planes, se convence de que entiende lo que quiere, incluso de cuánto está dispuesto a sentir. Yo era una de esas personas. Pensaba que este año iba a ser diferente, que estaría concentrado en mis cosas, que no iba a permitir que alguien llegara a mover todo lo que había construido dentro de mí. Me parecía una idea lógica. Tranquila. Segura.\n\nY entonces apareciste."
    },
    {
        "pageNumber": 3,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Todavía me causa gracia pensar que, sin hacer absolutamente nada extraordinario, terminaste cambiando un montón de cosas que llevaban mucho tiempo siendo iguales. No llegaste haciendo ruido, ni prometiendo cambiar mi mundo. Simplemente llegaste siendo tú. Creo que eso fue suficiente.\n\nNo esperaba enamorarme así. No de esta manera. No tan rápido. Mucho menos con una intensidad que, hasta el día de hoy, todavía me cuesta explicar. Si alguien me preguntara exactamente en qué momento empezó todo, probablemente no sabría responderle. Porque el amor no siempre tiene un instante exacto. A veces comienza tan despacio que uno no se da cuenta hasta que ya es demasiado tarde para imaginar una vida donde esa persona no exista."
    },
    {
        "pageNumber": 4,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Y qué curioso... porque nunca me molestó que arruinaras todos los planes que tenía para este año. De hecho, creo que fue lo mejor que pudo pasarme.\n\nAntes de conocerte veía muchas cosas como un desorden constante. No era una persona triste todo el tiempo, pero tampoco encontraba esa calma que hace sentir que todo está bien aunque el mundo siga igual. Vivía haciendo lo que tenía que hacer, cumpliendo con mis responsabilidades, siguiendo la rutina. Había días buenos y días malos, como cualquiera, pero nada terminaba de sentirse realmente completo.\n\nDespués llegaste tú."
    },
    {
        "pageNumber": 5,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Y no, no resolviste mi vida por arte de magia. No hiciste desaparecer los problemas. No cambiaste el mundo que existe afuera. Lo que cambiaste fue el lugar desde donde yo lo miraba."
    },
    {
        "pageNumber": 6,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Es extraño intentar explicar esto porque siento que las palabras siempre se quedan cortas. Es como querer guardar el cielo entero dentro de una caja. Nunca cabe. Siempre falta algo.\n\nPero si tuviera que intentarlo, diría que contigo descubrí algo que no conocía: el silencio bonito.\n\nPorque antes todo era ruido.\nRuido de preocupaciones.\nRuido de pensamientos.\nRuido de imaginar escenarios que nunca pasaban.\nRuido de cargar cosas que ni siquiera me correspondían.\n\nY entonces pasa algo que todavía hoy me deja pensando.\nTe abrazo.\nY todo deja de hacer ruido."
    },
    {
        "pageNumber": 7,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "No sé cómo explicarlo mejor.\nSimplemente ocurre.\nComo si alguien bajara el volumen del mundo entero.\nComo si por unos minutos el tiempo entendiera que no hace falta correr.\nComo si todas las cosas que hace un rato parecían enormes decidieran esperar.\n\nHay momentos en los que ni siquiera necesito hablar cuando estoy contigo. Me basta sentir que estás cerca para recordar que todavía existen lugares donde puedo descansar sin cerrar los ojos.\n\nNunca imaginé que unos brazos pudieran convertirse en el lugar donde más tranquilo me siento."
    },
    {
        "pageNumber": 8,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Suena exagerado cuando lo leo otra vez, pero es verdad.\nY si esta carta tiene algo, quiero que tenga precisamente eso: la verdad.\nNo quiero escribirte cosas bonitas solamente porque suenan bien.\nQuiero escribirte las que pesan.\nLas que cuestan.\nLas que normalmente uno guarda porque siente que no va a encontrar la forma correcta de decirlas.\n\nPor ejemplo..."
    },
    {
        "pageNumber": 9,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Nunca te he contado cuánto cambias incluso mis días más simples.\n\nHay tardes en las que no está pasando absolutamente nada especial. Estoy haciendo cualquier cosa, viendo el celular, escuchando música o simplemente sentado pensando en quién sabe qué. Y de repente apareces en mi cabeza.\n\nSin avisar.\n\nRecuerdo alguna risa tuya.\nAlguna forma en la que pronuncias ciertas palabras.\nLa manera en la que me miras.\nY, sin darme cuenta, ya estoy sonriendo como un tonto.\n\nEs curioso cómo alguien puede estar lejos y aun así cambiar completamente el ambiente donde uno está."
    },
    {
        "pageNumber": 10,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "También quiero confesarte algo.\nA veces me asusta sentir tanto.\nNo porque tú me des miedo.\nSino porque cuando una persona empieza a significar tanto, inevitablemente aparece ese pequeño temor de perderla.\n\nNunca había entendido por qué la gente decía que amar también vuelve vulnerable a alguien.\nAhora sí.\n\nPorque cuando te importan de verdad los días de otra persona, inevitablemente empiezas a imaginar qué pasaría si algún día ya no estuviera."
    },
    {
        "pageNumber": 11,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Y sí.\nMe da miedo.\nMe da miedo que un día te canses.\nQue encuentres a alguien mejor.\nQue dejes de verme con los mismos ojos.\nQue el tiempo haga lo que tantas veces hace con las personas: acostumbrarlas hasta volverlas indiferentes.\n\nNo quiero esconderte ese miedo porque sería mentirte.\nPero tampoco quiero que pienses que vivo con él.\nLa mayor parte del tiempo lo callo."
    },
    {
        "pageNumber": 12,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Porque prefiero disfrutar cada momento contigo antes que desperdiciarlo imaginando finales que todavía no existen.\n\nY mientras escribo esto me doy cuenta de algo.\nQué raro es el amor.\nPorque hace unos meses probablemente habría dicho que exageraban quienes escribían cartas largas.\nHoy entiendo perfectamente por qué existen.\n\nHay sentimientos que simplemente no caben en una conversación de cinco minutos.\nNi en un mensaje.\nNi siquiera en una noche completa.\nHay personas que obligan al corazón a aprender un idioma completamente nuevo.\nY tú hiciste exactamente eso conmigo."
    },
    {
        "pageNumber": 13,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Hay cosas que todavía no sé decirte cuando te tengo enfrente. No porque no quiera, sino porque cuando te miro siento que todas las palabras empiezan a estorbar. Como si cualquier intento de explicar lo que provocas fuera demasiado pequeño para todo lo que realmente pasa dentro de mí.\n\nPor eso escribo.\nPorque el papel no me interrumpe.\nNo me gana la pena.\nNo me hace olvidar lo que quería decir.\nAquí puedo quedarme el tiempo que haga falta intentando acercarme, aunque sea un poco, a todo eso que llevas despertando en mí desde que llegaste.\n\nY aun así, siento que apenas estoy empezando."
    },
    {
        "pageNumber": 14,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "A veces pienso que lo más bonito de todo esto es que nunca tuve que esforzarme por convertirme en alguien distinto cuando estoy contigo. Nunca sentí que debía medir cada palabra, aparentar ser más fuerte de lo que soy o esconder las partes de mí que normalmente no dejo que nadie vea. Contigo simplemente... existo. Y eso, aunque parezca algo pequeño, es una de las cosas más valiosas que alguien puede regalarle a otra persona."
    },
    {
        "pageNumber": 15,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Tú conoces una versión de mí que muy pocas personas llegan a ver. La mayoría conoce al Andre serio, al que parece que siempre está pensando en algo, al que muchas veces responde con pocas palabras, al que mantiene cierta distancia porque así aprendió a estar cómodo. Esa es la persona que casi todos ven.\n\nPero tú no.\n\nTú conociste al que sonríe por cosas simples. Al que puede pasar varios minutos abrazándote sin sentir la necesidad de hacer otra cosa. Al que se emociona cuando sabe que va a verte. Al que, aunque a veces quiera hacerse el fuerte, termina derritiéndose con una mirada tuya.\n\nY me gusta que seas tú quien conozca esa parte de mí."
    },
    {
        "pageNumber": 16,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Porque nunca sentí que tuviera que abrir esa puerta por obligación. Se abrió sola. Poco a poco. Sin que me dieras razones para desconfiar. Sin que me presionaras. Como si tu forma de estar conmigo me hubiera dicho desde el principio: \"Aquí puedes bajar la guardia.\"\n\nNo sé si eres consciente del efecto que tienes sobre mí.\nProbablemente no.\nY tal vez eso hace que todo sea todavía más bonito.\n\nHay personas que intentan impresionar al mundo entero. Tú, en cambio, haces cosas tan simples que parecen insignificantes... y aun así consigues quedarse viviendo en mi memoria durante días."
    },
    {
        "pageNumber": 17,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Cómo preguntas si ya comí.\nCómo buscas la manera de hacer espacio para hablar conmigo aunque tengas cosas que hacer.\nCómo, de una u otra forma, terminas encontrando un momento para estar presente.\n\nTal vez alguien más vería esos detalles como algo normal.\nYo no.\nPorque aprendí que el amor rara vez se demuestra con cosas enormes. Casi siempre vive escondido en lo cotidiano.\n\nEn un \"¿ya llegaste?\".\nEn un \"avísame cuando estés en casa\"."
    },
    {
        "pageNumber": 18,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "En un abrazo que dura unos segundos más de lo normal.\nEn una mirada que dice mucho más de lo que cualquier conversación podría explicar.\n\nY tú tienes una manera muy especial de hacer que esos pequeños momentos parezcan inmensos.\n\nHay veces en las que cierro los ojos y recuerdo nuestro primer beso.\nQué extraño pensar que un momento que duró tan poco pueda ocupar tanto espacio en mi cabeza."
    },
    {
        "pageNumber": 19,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Todavía puedo recordar los nervios.\nLas dudas.\nEse instante en el que parecía que el tiempo decidió caminar más despacio.\nNo sé si tú lo viviste igual que yo.\nPero para mí fue uno de esos recuerdos que uno guarda con muchísimo cuidado, como cuando encuentras algo tan valioso que automáticamente quieres protegerlo para que nunca se rompa.\n\nFue el veintiséis de junio.\nY desde entonces esa fecha dejó de ser un día cualquiera.\nNo porque el calendario haya cambiado.\nSino porque ahora, cuando llegue ese día cada año, inevitablemente voy a recordar cómo empezó una parte completamente nueva de mi vida."
    },
    {
        "pageNumber": 20,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "A veces me sorprendo reviviendo ese momento sin darme cuenta.\nEstoy caminando.\nO haciendo tarea.\nO entrenando.\nY de repente aparece en mi cabeza.\nComo una película que decide reproducirse sola.\nY siempre termina provocándome exactamente la misma sonrisa.\n\nEs curioso cómo funciona la memoria cuando alguien empieza a importar tanto.\nRecuerda cosas que antes habría dejado pasar.\nEl tono de una voz.\nLa forma de una risa."
    },
    {
        "pageNumber": 21,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "La manera en la que alguien acomoda su cabello.\nLa expresión que pone cuando está pensando.\n\nSon detalles que para cualquier otra persona pasarían desapercibidos.\nPero yo los guardo.\nNo porque quiera.\nSino porque mi corazón parece haber decidido hacerlo por su cuenta.\n\nY, mientras escribo todo esto, me doy cuenta de que probablemente nunca voy a terminar de conocerte.\nY eso me encanta."
    },
    {
        "pageNumber": 22,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Porque significa que todavía quedan muchísimas conversaciones.\nMuchísimas risas.\nMuchísimas historias.\nTodavía quedan preguntas que quiero hacerte.\nCosas que quiero descubrir.\nLugares a los que me gustaría llevarte.\nRecuerdos que todavía no existen, pero que algún día, si la vida nos lo permite, serán parte de nuestra historia."
    },
    {
        "pageNumber": 23,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Me ilusiona pensar en eso.\nMe ilusiona imaginar un día entero contigo.\nSin mirar la hora.\nSin preocuparnos por quién tiene que irse primero.\nSimplemente estar.\nCaminar sin rumbo.\nSentarnos en cualquier lugar.\nHablar de cualquier tontería.\nReírnos por cosas que seguramente nadie más entendería.\nY cuando ya no hubiera nada que decir... quedarnos en silencio."
    },
    {
        "pageNumber": 24,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Porque contigo el silencio nunca pesa.\nNunca incomoda.\nNunca obliga.\nEs un silencio que abraza."
    },
    {
        "pageNumber": 25,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Uno de esos silencios donde las palabras dejan de ser necesarias porque la presencia de la otra persona ya está diciendo todo.\n\nOjalá algún día podamos vivir muchos días así.\nNo porque necesitemos hacer algo extraordinario.\nSino porque contigo entendí que los momentos más felices casi nunca son los más espectaculares.\n\nSon los más sencillos.\nLos que nadie fotografía.\nLos que probablemente nadie más recordaría.\nPero que para nosotros significan el mundo entero.\n\nTambién quiero agradecerte algo que quizá nunca te he dicho de esta manera.\nGracias por llegar a mi vida a arreglar cosas que tú nunca rompiste."
    },
    {
        "pageNumber": 26,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Es una frase que puede sonar sencilla, pero para mí tiene un peso enorme.\nPorque había partes de mí que estaban cansadas sin que yo mismo me diera cuenta.\nHabía días donde sonreía por costumbre.\nDonde seguía adelante porque era lo que tocaba.\n\nY entonces apareciste tú, sin prometer cambiar nada, y de alguna forma hiciste que volver a ilusionarme dejara de dar miedo."
    },
    {
        "pageNumber": 27,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "No llegaste diciendo que ibas a salvarme.\nNi hacía falta.\nLo único que hiciste fue quedarte.\nY muchas veces eso es exactamente lo que una persona necesita.\nQue alguien decida quedarse.\nSin hacer ruido.\nSin pedir nada imposible.\nSimplemente estando.\n\nNo sabes cuánto vale eso para mí.\nPorque hay presencias que hacen mucho más que mil discursos.\nY la tuya es una de ellas."
    },
    {
        "pageNumber": 28,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "A veces pienso que, si algún día olvido muchas cosas de mi vida, hay algo que me gustaría conservar intacto: la sensación que tengo cuando estoy contigo.\n\nNo un recuerdo específico.\nNo una fecha.\nNo una fotografía.\nEsa sensación.\nEsa paz tan difícil de explicar.\nPorque creo que esa es la forma más pura que tiene el corazón de decir: \"Aquí estás bien.\"\n\nY, sinceramente, espero no dejar nunca de sentirla.\n\nHay algo que todavía no entiendo del todo, y es cómo una sola persona puede convertirse en refugio sin proponérselo.\nPorque eso eres para mí."
    },
    {
        "pageNumber": 29,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "No una solución mágica a todos los problemas, porque sé que la vida no funciona así. Los días difíciles siguen existiendo, las preocupaciones siguen llegando y las responsabilidades no desaparecen de un momento a otro. Pero contigo aprendí que incluso los días más pesados pueden sentirse un poco más ligeros cuando sé que al final voy a escuchar tu voz, voy a leerte o voy a poder abrazarte.\n\nY eso cambia muchas cosas.\nNo porque el mundo sea distinto.\nSino porque ya no lo enfrento completamente solo."
    },
    {
        "pageNumber": 30,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Hay noches en las que me quedo pensando demasiado. Siempre he sido así. Mi cabeza tiene esa costumbre de inventar escenarios, de darle demasiadas vueltas a situaciones que probablemente nunca pasen. A veces me desgasta. A veces quisiera apagar esos pensamientos como quien apaga una lámpara antes de dormir.\nPero no puedo.\nY supongo que ya forma parte de mí.\n\nLo curioso es que, incluso en medio de todo ese ruido que mi propia mente puede crear, apareces tú.\nNo necesariamente hablando."
    },
    {
        "pageNumber": 31,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "No necesariamente haciendo algo.\nSimplemente apareces.\nY por un momento todo baja de intensidad.\nEs como si mi cabeza recordara que existe un lugar donde no necesita defenderse de nada.\n\nNunca te lo había dicho así.\nPero muchas veces eres tú quien calma guerras que ni siquiera sabes que estaban ocurriendo dentro de mí.\n\nY eso me hace admirarte todavía más.\nNo porque tengas la obligación de cargar con mis días malos.\nJamás quisiera que sintieras ese peso.\nLo que admiro es que tu sola existencia consiga regalarme un poco de tranquilidad sin siquiera intentarlo."
    },
    {
        "pageNumber": 32,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Hay personas que llegan a la vida de uno dejando recuerdos.\nTú estás dejando una forma completamente distinta de sentir.\nY eso no se olvida.\n\nA veces intento imaginar cómo me verías tú si pudieras entrar un momento a mi cabeza.\nCreo que te sorprenderías.\nPorque descubrirías que apareces muchísimo más de lo que imaginas."
    },
    {
        "pageNumber": 33,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Estás cuando escucho una canción y pienso: \"Esta le gustaría.\"\nEstás cuando veo una película y me pregunto si te haría reír o llorar.\nEstás cuando paso por un lugar bonito y automáticamente pienso que sería mejor si estuvieras caminando a mi lado.\nEstás cuando veo una pareja de personas mayores tomándose de la mano y, sin querer, imagino que algún día nosotros también podríamos llegar a vivir algo así.\n\nY también estás en esos pequeños momentos completamente absurdos.\nCuando veo algo gracioso y mi primera reacción es querer enviártelo.\nCuando pasa algo curioso durante el día y pienso: \"Tengo que contarle esto.\"\nCuando encuentro cualquier pretexto para iniciar una conversación contigo, aunque realmente no tenga nada importante que decir."
    },
    {
        "pageNumber": 34,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Porque la verdad es que no siempre hace falta un gran motivo para querer hablar con alguien.\nA veces el motivo es simplemente que esa persona hace bonito el día.\nY tú haces eso con los míos.\n\nHay algo que me encanta de ti y que probablemente ni siquiera notas.\nTu forma de pensar.\nNo sé explicarlo exactamente.\nPero admiro mucho la manera en la que analizas las cosas antes de actuar.\nCómo buscas soluciones.\nCómo enfrentas los problemas.\nCómo intentas entender antes de juzgar."
    },
    {
        "pageNumber": 35,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Vivimos en un mundo donde muchas personas reaccionan antes de pensar.\nTú haces lo contrario.\nY esa tranquilidad que tienes para resolver las cosas es una de las razones por las que te admiro tanto."
    },
    {
        "pageNumber": 36,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "También admiro tu valentía.\nPorque ser valiente no significa no tener miedo.\nSignifica seguir avanzando incluso cuando sí lo hay.\nY tú lo haces.\nTal vez sin darte el crédito que mereces.\nPero yo lo veo.\nVeo el esfuerzo que haces.\nVeo las ganas que le pones a las cosas.\nVeo la persona en la que te estás convirtiendo.\nY me siento orgulloso de poder acompañarte mientras sigues creciendo."
    },
    {
        "pageNumber": 37,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "No quiero ser alguien que solo aparezca en los días fáciles.\nQuiero estar cuando las cosas salgan bien y cuando salgan mal.\nCuando tengas ganas de celebrar.\nY también cuando únicamente necesites que alguien se siente contigo sin hacer demasiadas preguntas.\n\nQuiero aprender cuál es la mejor manera de cuidarte."
    },
    {
        "pageNumber": 38,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "No porque piense que eres frágil.\nSino porque las personas que amamos también merecen descansar de vez en cuando.\n\nY, si algún día puedo convertirme en ese lugar donde tú también encuentres un poco de paz, sentiré que estoy haciendo las cosas bien.\n\nNo aspiro a ser perfecto para ti.\nLa perfección nunca me ha parecido real.\nAdemás, sé que voy a equivocarme.\nVoy a decir cosas en momentos incorrectos.\nHabrá días en los que esté cansado.\nDías en los que no sepa exactamente cómo ayudarte.\nMomentos en los que probablemente también necesite que seas tú quien me abrace.\n\nY espero que, cuando eso pase, podamos recordarnos que amar nunca ha significado hacerlo todo perfecto."
    },
    {
        "pageNumber": 39,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Amar también es aprender.\nEs corregir.\nEs escuchar.\nEs pedir perdón cuando haga falta.\nEs crecer al lado de la otra persona sin dejar de crecer como individuo.\n\nY si algún día tenemos diferencias, porque sé que las tendremos, me gustaría que nunca olvidáramos algo.\nQue siempre sea más importante encontrar una solución que encontrar un culpable.\n\nPorque tú nunca deberías sentir que estás compitiendo contra mí.\nQuiero que sintamos que estamos del mismo lado.\nContra los problemas.\nNo entre nosotros."
    },
    {
        "pageNumber": 40,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Hay una imagen que vuelve mucho a mi cabeza.\nNosotros caminando.\nNo importa dónde."
    },
    {
        "pageNumber": 41,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Ni siquiera importa el lugar.\nSolo caminando.\nHablando de cualquier cosa.\nInterrumpiéndonos para reír.\nSeñalando cosas tontas.\nDiscutiendo cuál canción poner.\nTomándonos de la mano como si ese simple gesto fuera suficiente para decir todo lo que sentimos.\n\nY creo que sí lo sería.\nPorque hay abrazos que hablan.\nHay miradas que hablan.\nHay manos que hablan.\nY contigo he descubierto que el amor tiene muchísimos idiomas que nunca aparecen en los libros."
    },
    {
        "pageNumber": 42,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Uno de ellos es quedarte unos segundos más cuando llega el momento de despedirse.\nOtro es buscar cualquier excusa para seguir la conversación.\nOtro es sonreír sin darte cuenta cuando ves aparecer el nombre de esa persona en la pantalla.\n\nY sí...\nConfieso que me pasa.\nMás de lo que quisiera admitir.\nPorque, aunque intente actuar como si nada, la verdad es que siempre consigues cambiarme el ánimo.\n\nNo importa si estaba teniendo un día pesado.\nNo importa si estaba cansado.\nNo importa si llevaba horas sin encontrar algo que realmente me hiciera sonreír.\nBasta con saber de ti para que algo dentro de mí se acomode otra vez."
    },
    {
        "pageNumber": 43,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Y quizá nunca encuentre una explicación lógica para eso.\nPero tampoco siento la necesidad de buscarla.\nHay cosas que son demasiado bonitas como para analizarlas tanto."
    },
    {
        "pageNumber": 44,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Solo se viven.\nSolo se agradecen.\nSolo se abrazan.\n\nY tú eres una de esas cosas que llegaron a mi vida para recordarme que, de vez en cuando, la felicidad también decide aparecer sin avisar.\n\nA veces me pregunto cómo me describirías tú si alguien llegara y te preguntara quién soy.\nNo por curiosidad solamente.\nSino porque me intriga saber qué versión de mí es la que has ido conociendo."
    },
    {
        "pageNumber": 45,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Yo sé quién era antes de ti.\nConozco perfectamente mis silencios, mis maneras de esconder lo que siento, mi costumbre de encerrarme cuando algo me preocupa. Sé que muchas veces doy la impresión de ser alguien distante, incluso un poco frío. Es una imagen que aprendí a construir con el tiempo, quizá porque era más sencillo que permitir que cualquiera supiera lo que realmente pasaba dentro de mí.\n\nPero contigo esa versión de mí ha ido perdiendo fuerza.\nY no porque me la hayas quitado.\nSimplemente porque ya no la necesito tanto.\n\nHay algo muy curioso que pasa cuando una persona te hace sentir seguro.\nDejas de actuar.\nEmpiezas a ser."
    },
    {
        "pageNumber": 46,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Y contigo me pasa exactamente eso.\nNo tengo que pensar demasiado qué decir para que no suene raro.\nNo tengo que aparentar que todo está bien cuando no lo está.\nNo tengo que esconder que te extraño.\nNo tengo que fingir que algo no me emociona.\nContigo siento que puedo vivir todo eso sin sentir vergüenza.\nY eso vale muchísimo.\n\nPorque vivimos en un mundo donde muchas personas tienen miedo de demostrar cuánto sienten.\nComo si querer mucho fuera un defecto."
    },
    {
        "pageNumber": 47,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Como si amar intensamente fuera motivo para avergonzarse.\nYo ya no quiero esconder eso.\nSi algún día me preguntas cuánto te quiero, probablemente vuelva a quedarme corto con las palabras.\nNo porque no exista una respuesta.\nSino porque siento que el idioma todavía no inventa suficientes maneras de explicar ciertas cosas.\n\nHay emociones que simplemente sobrepasan cualquier definición.\nY tú eres una de ellas.\n\nHay momentos en los que imagino cómo será leernos dentro de algunos años.\nQuizá estemos sentados en una sala.\nQuizá en un parque.\nQuizá riéndonos porque algunas cosas nos parecían enormes y hoy solo son anécdotas."
    },
    {
        "pageNumber": 48,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Me gusta pensar que vamos a sonreír al recordar estos primeros meses.\nPorque todo está naciendo.\nTodo está encontrando su lugar.\nTodavía estamos aprendiendo nuestras costumbres.\nNuestros tiempos.\nLas pequeñas cosas que nos hacen felices."
    },
    {
        "pageNumber": 49,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Y, aunque aún queda muchísimo por conocer, hay algo que ya tengo claro.\nQuiero seguir descubriéndote.\nNo quiero llegar a un punto donde crea que ya lo sé todo de ti.\nPrefiero sorprenderme una y otra vez.\nQue un día me cuentes una historia de tu infancia que nunca había escuchado.\nQue descubra una canción nueva que te encanta.\nQue me enseñes una comida que nunca había probado.\nQue aparezcan nuevos sueños.\nNuevas metas.\nNuevas versiones de nosotros.\nPorque las personas cambian."
    },
    {
        "pageNumber": 50,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Y me gustaría tener el privilegio de conocer cada una de las versiones que el tiempo vaya formando en ti.\nAsí como espero que tú también conozcas las mías.\n\nNo quiero que el tiempo nos vuelva desconocidos.\nQuiero que nos vuelva cómplices.\n\nHay una palabra que siempre me ha gustado mucho: \"acompañar\".\nPorque amar también es eso.\nNo significa caminar delante de la otra persona diciéndole por dónde ir.\nNi caminar detrás esperando alcanzarla.\nEs caminar al lado.\nRespetando su ritmo.\nEsperándola cuando esté cansada.\nDejándote ayudar cuando seas tú quien necesite detenerse."
    },
    {
        "pageNumber": 51,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Eso quiero hacer contigo.\nAcompañarte.\nEn tus días buenos.\nEn los malos.\nEn esos donde todo parece salir perfecto.\nY también en esos donde lo único que hace falta es alguien que permanezca ahí.\n\nNo quiero ser solamente quien celebre tus logros.\nQuiero ser también quien te recuerde lo mucho que vales cuando tú misma lo olvides."
    },
    {
        "pageNumber": 52,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Porque sé que todos tenemos momentos donde dudamos de nosotros.\nY si alguna vez llega uno de esos días para ti, quiero que recuerdes esto.\nNunca dejes que una mala tarde te convenza de que eres menos de lo que realmente eres.\nPorque yo veo una mujer fuerte.\nInteligente.\nValiente.\nCapaz."
    },
    {
        "pageNumber": 53,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Y con un corazón que pocas personas tienen la fortuna de conocer.\nOjalá nunca dejes de verte con los mismos ojos con los que yo te miro.\nAunque sé que eso es difícil.\nTodos somos mucho más duros con nosotros mismos.\nYo también lo soy.\nY quizá por eso entiendo tan bien lo importante que es tener a alguien que, de vez en cuando, nos recuerde quiénes somos cuando nosotros mismos empezamos a olvidarlo."
    },
    {
        "pageNumber": 54,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Hay otra confesión que quiero hacerte.\nCreo que nunca había disfrutado tanto algo tan simple como esperar.\nAntes, esperar me desesperaba.\nLos minutos parecían eternos.\nLas horas avanzaban lento.\nAhora sigo siendo impaciente... no voy a mentirte.\nPero hay una diferencia.\nCuando sé que la espera termina contigo, deja de sentirse como una carga.\n\nEmpiezo a imaginar cómo será verte.\nQué ropa llevarás.\nQué expresión tendrás cuando nos encontremos.\nSi voy a abrazarte primero o si tú vas a hacerlo antes."
    },
    {
        "pageNumber": 55,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Y sí...\nPienso esas cosas.\nMás seguido de lo que imaginas.\nPorque desde que llegaste descubrí que incluso la ilusión también puede convertirse en una rutina bonita.\nNo porque espere algo extraordinario.\nSino porque cualquier momento contigo termina siendo extraordinario sin proponérselo.\n\nTodavía recuerdo la primera vez que sentí que un abrazo tuyo duró exactamente lo que necesitaba durar.\nNi más."
    },
    {
        "pageNumber": 56,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Ni menos.\nFue uno de esos abrazos donde nadie tiene prisa por soltarse.\nDonde parece que los dos entienden, sin decir una sola palabra, que ese pequeño instante merece quedarse unos segundos más.\n\nNo sé si tú también lo recuerdas.\nYo sí.\nY no porque haya ocurrido algo espectacular.\nLo recuerdo porque, mientras te abrazaba, pensé algo que nunca te dije.\n\"Qué tranquilidad se siente estar aquí.\""
    },
    {
        "pageNumber": 57,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Fue un pensamiento muy simple.\nPero completamente sincero.\nY desde entonces esa sensación ha vuelto muchas veces.\nCada vez que estoy contigo.\nCada vez que nuestras manos se encuentran.\nCada vez que apoyas tu cabeza cerca de mí.\nCada vez que el mundo parece seguir corriendo mientras nosotros simplemente decidimos quedarnos quietos un momento.\n\nHay personas que buscan grandes aventuras para sentirse vivas.\nYo encontré algo distinto.\nEncontré paz.\nY jamás imaginé que la paz pudiera enamorar tanto."
    },
    {
        "pageNumber": 58,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Porque uno suele escuchar hablar del amor como algo intenso.\nComo mariposas.\nComo adrenalina.\nComo locura.\nY sí, claro que existe todo eso.\nPero nadie habla lo suficiente de la tranquilidad.\nDe esa sensación de respirar profundo y pensar:\n\"Aquí quiero quedarme un rato más.\"\n\nPara mí, esa tranquilidad lleva tu nombre."
    },
    {
        "pageNumber": 59,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Y, aunque probablemente nunca encuentre una forma perfecta de explicarlo, espero que cada palabra que escribo consiga acercarse, aunque sea un poco, a todo eso que haces sentir en mi corazón sin siquiera darte cuenta.\n\nHay una idea que me acompaña desde hace tiempo y cada vez toma más fuerza. No sé exactamente cuándo empezó, pero apareció un día cualquiera y desde entonces no se ha ido. Es una de esas ideas que llegan despacio, que no hacen ruido, pero que terminan ocupando un lugar muy importante dentro de uno."
    },
    {
        "pageNumber": 60,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Me gusta imaginar un futuro donde sigamos coincidiendo.\nNo hablo de un futuro perfecto, porque sé que eso no existe. Sería muy fácil escribirte que todo será sencillo, que nunca discutiremos, que jamás tendremos días complicados o momentos en los que alguno de los dos se sienta perdido. Pero la vida no funciona así, y precisamente por eso no quiero prometerte una fantasía.\n\nLo que sí puedo decirte es que me ilusiona pensar en un futuro donde, pase lo que pase, ambos decidamos seguir caminando en la misma dirección.\nNo porque sea fácil.\nSino porque valga la pena."
    },
    {
        "pageNumber": 61,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Hay una enorme diferencia entre quedarse por costumbre y quedarse por decisión.\nYo quiero lo segundo.\nQuiero que cada día podamos elegirnos otra vez.\nNo porque estemos obligados.\nNo porque tengamos miedo de estar solos.\nSino porque, después de todo lo vivido, sigamos sintiendo que el mejor lugar para descansar es al lado del otro.\n\nCreo que esa es una de las formas más bonitas de amar.\nElegir.\nVolver a elegir.\nY no dejar de hacerlo.\n\nA veces me descubro imaginando cosas muy simples.\nPreparar un café mientras tú haces cualquier otra cosa."
    },
    {
        "pageNumber": 62,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Esperarte unos minutos porque te tardaste arreglándote más de lo que habías dicho.\nEscucharte contarme cómo estuvo tu día mientras yo solo te observo, porque cuando hablas haces ciertos gestos con las manos que me parecen adorables.\nDiscutir por cuál película veremos sabiendo que probablemente terminaremos viendo otra completamente diferente.\nSalir a caminar sin un destino específico.\nPerdernos un poco.\nEncontrar una cafetería nueva.\nReírnos porque pedimos algo que ninguno de los dos había probado.\nRegresar a casa cansados, pero felices."
    },
    {
        "pageNumber": 63,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "Puede sonar extraño.\nHay personas que sueñan con viajes enormes o con momentos espectaculares.\nYo también quisiera vivir muchas cosas contigo.\nPero, si soy completamente sincero, lo que más ilusión me hace son esos días normales.\nPorque creo que ahí es donde realmente se construye una vida compartida.\n\nEn los martes cualquiera.\nEn los domingos tranquilos.\nEn las tardes donde no pasa absolutamente nada extraordinario y, aun así, uno termina pensando antes de dormir: \"Qué bonito fue hoy.\"\n\nMe gustaría que algún día pudiéramos acumular cientos de días así.\nTantos, que después sea imposible recordar cuál fue el mejor, porque todos tengan algo especial."
    },
    {
        "pageNumber": 64,
        "chapter": 1,
        "isChapterTitlePage": false,
        "content": "También quiero decirte algo que quizá nunca he sabido expresar.\nGracias por hacerme sentir esperado.\nPuede parecer una tontería.\nPero no lo es.\nHay una diferencia enorme entre sentir que uno simplemente aparece en la vida de alguien... y sentir que alguien realmente quería que llegaras.\nContigo he sentido eso muchas veces."
    },
    {
        "pageNumber": 65,
        "chapter": 2,
        "isChapterTitlePage": true,
        "content": ""
    },
    {
        "pageNumber": 66,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Cuando buscas la forma de verme.\nCuando encontramos un momento para coincidir aunque los dos tengamos cosas que hacer.\nCuando haces espacio para mí entre todas tus responsabilidades.\n\nNo sabes el valor que tienen esos pequeños esfuerzos.\nPorque el tiempo es lo único que nunca vuelve.\nY cuando alguien decide regalarte parte del suyo, en realidad está entregándote una parte de su vida.\nGracias por regalarme la tuya, aunque sea en pequeños momentos.\nYo intento hacer exactamente lo mismo.\nPorque cada minuto contigo siempre termina pareciéndome demasiado corto."
    },
    {
        "pageNumber": 67,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Es curioso.\nCuando estoy esperando para verte, el tiempo parece caminar despacio.\nPero cuando finalmente estoy contigo...\nCorre.\nSe escapa.\nComo si los minutos se pusieran de acuerdo para durar menos.\nY siempre pasa lo mismo.\nLlega el momento de despedirnos.\nY, aunque intento actuar con normalidad, por dentro siempre pienso: \"Ojalá pudiéramos quedarnos un ratito más.\""
    },
    {
        "pageNumber": 68,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Solo unos minutos.\nSolo otro abrazo.\nSolo otra conversación.\nSolo otra risa.\nNunca parece suficiente.\n\nY creo que eso también habla del cariño que te tengo.\nPorque cuando alguien nos da paz, nunca sentimos que el tiempo con esa persona sobre.\nAl contrario.\nSiempre hace falta un poco más."
    },
    {
        "pageNumber": 69,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Hay otra cosa que quiero confesarte.\nMe encanta observarte.\nNo de una manera extraña.\nSimplemente me gusta verte existir.\nCuando estás concentrada en algo.\nCuando hablas de algo que te emociona.\nCuando haces una pausa para pensar antes de responder.\nCuando sonríes sin darte cuenta.\nCuando frunces un poquito el ceño porque algo no salió como esperabas."
    },
    {
        "pageNumber": 70,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Son momentos pequeños.\nTan pequeños que probablemente tú ni siquiera notas que ocurren.\nPero yo sí.\nY no sabes cuánto me gusta descubrir esas versiones tuyas.\nPorque siento que, en esos instantes donde no intentas impresionar a nadie, aparece la esencia más bonita de quien eres.\n\nA veces pienso que las personas realmente se conocen en esos detalles.\nNo en las grandes conversaciones.\nNo en las fotografías.\nNo en las fechas importantes.\nSino en cómo reaccionan cuando creen que nadie las está mirando."
    },
    {
        "pageNumber": 71,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Y cada vez que descubro una de esas pequeñas cosas tuyas, termino admirándote un poquito más.\nNo porque seas perfecta.\nSino porque eres auténtica.\nY para mí eso vale muchísimo más.\n\nNunca quisiera que sintieras que necesitas cambiar para gustarme más.\nNo quiero una versión distinta de ti.\nNo quiero una versión que intente cumplir expectativas imposibles.\nQuiero seguir conociendo a la mujer que eres de verdad.\nCon tus días buenos.\nCon tus días malos."
    },
    {
        "pageNumber": 72,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Con tus fortalezas.\nCon tus inseguridades.\nCon tus sueños.\nCon tus miedos.\nCon todo aquello que forma la persona de la que me estoy enamorando cada día un poco más.\n\nPorque amar solo las partes fáciles sería demasiado sencillo.\nLo verdaderamente bonito es aprender a abrazar también aquello que la otra persona teme mostrar.\nY ojalá algún día tú también sientas que puedes enseñarme esas partes de ti sin miedo a ser juzgada.\nPorque prometo recibirlas con el mismo cariño con el que recibo cada sonrisa tuya."
    },
    {
        "pageNumber": 73,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Hay algo que me emociona muchísimo cuando lo pienso.\nTodavía nos quedan tantas conversaciones pendientes.\nTodavía hay tantas historias que no me has contado.\nTodavía existen lugares que no hemos visitado.\nFotografías que no hemos tomado.\nCanciones que aún no hemos escuchado juntos.\nFechas que todavía no aparecen en el calendario.\n\nY eso me llena de ilusión.\nPorque significa que nuestra historia todavía está escribiendo apenas sus primeras páginas."
    },
    {
        "pageNumber": 74,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Y, si algún día vuelves a leer esta carta, quiero que recuerdes esto:\nNo me enamoré solamente de los momentos bonitos que hemos vivido.\nMe enamoré de todo lo que todavía podemos llegar a construir.\nDe todo lo que aún no existe.\nDe todos esos recuerdos que hoy son únicamente una idea... pero que espero, con todo mi corazón, algún día podamos convertir en realidad.\n\nY mientras sigo escribiendo, me doy cuenta de algo que me hace sonreír."
    },
    {
        "pageNumber": 75,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "He pasado tanto tiempo intentando encontrar la mejor manera de decirte lo que siento que olvidé una cosa muy importante: quizá no exista una manera perfecta de hacerlo.\n\nTal vez el amor nunca se deja explicar por completo.\nTal vez por eso existen las cartas tan largas.\nPorque uno escribe una página pensando que ahora sí logró decirlo todo, y al terminar descubre que todavía quedan muchas cosas guardadas.\n\nEso mismo me está pasando ahora.\nSiento que cada párrafo abre la puerta a otro recuerdo.\nA otra emoción.\nA otra cosa que siempre quise contarte."
    },
    {
        "pageNumber": 76,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Hay ocasiones en las que me quedo viendo una conversación nuestra, sin escribir nada durante unos segundos. No porque no tenga qué responder, sino porque me gusta releer ciertas cosas. Hay mensajes tuyos que parecen muy normales, pero cuando los vuelvo a leer me hacen sentir exactamente lo mismo que la primera vez.\n\nEs raro.\nNunca había sido ese tipo de persona.\nJamás imaginé que iba a sonreír por leer un simple \"¿cómo estás?\" o un \"ya llegué\".\n\nPero cuando esas palabras vienen de ti, dejan de ser simples.\nSe convierten en una forma de saber que estás ahí.\nY aunque parezca exagerado, eso cambia mucho mi día."
    },
    {
        "pageNumber": 77,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "También me gusta imaginar qué pensarás tú de mí cuando no estoy.\nSi alguna vez aparezco en tu cabeza sin motivo.\nSi alguna canción te recuerda a mí.\nSi alguna vez sonríes cuando alguien menciona algo que hemos vivido.\n\nNo te lo pregunto porque necesite una respuesta.\nMe gusta dejar que esas preguntas existan.\nPorque también forman parte de enamorarse.\nNo saberlo todo."
    },
    {
        "pageNumber": 78,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "No tener todas las respuestas.\nY aun así sentir tranquilidad.\n\nHay una diferencia enorme entre la curiosidad y la desconfianza.\nYo solo tengo curiosidad.\nPorque descubrirte poco a poco se ha convertido en una de mis cosas favoritas.\nY espero que nunca deje de ser así.\n\nPorque, aunque llevemos mucho tiempo juntos algún día, quiero seguir teniendo ganas de preguntarte cómo estuvo tu día, aunque ya conozca tu rutina.\nQuiero seguir escuchando tus historias aunque algunas ya las haya oído antes.\nQuiero seguir riéndome de los mismos chistes aunque ya sepa cómo terminan.\nQuiero seguir sorprendiéndome contigo incluso cuando crea que ya conozco cada parte de ti."
    },
    {
        "pageNumber": 79,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "No quiero que el tiempo vuelva automático lo que hoy nos emociona.\nQuiero que el cariño siga teniendo la capacidad de sorprendernos.\n\nHay algo que aprendí desde que llegaste.\nAntes pensaba que demostrar cariño era hacer cosas enormes.\nPreparar grandes sorpresas.\nEncontrar las palabras perfectas.\nHacer regalos inolvidables.\nY sí, claro que esas cosas son bonitas.\nPero contigo entendí que el amor verdadero suele esconderse en lugares mucho más pequeños."
    },
    {
        "pageNumber": 80,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "En preguntar si ya descansaste.\nEn recordar algo que me contaste hace semanas.\nEn fijarme cuando estás más callada de lo normal.\nEn abrazarte un poquito más fuerte cuando siento que lo necesitas.\nEn caminar del lado donde pasan los coches sin siquiera pensarlo.\nEn acompañarte aunque no haya nada extraordinario que hacer.\n\nPorque al final, amar también consiste en hacer que la otra persona sienta que nunca tiene que enfrentar sola las cosas.\nY quiero que, cuando estés conmigo, siempre tengas esa tranquilidad."
    },
    {
        "pageNumber": 81,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Que sepas que puedes apoyarte en mí.\nQue no tienes que fingir que todo está bien.\nQue puedes llorar si un día hace falta.\nQue puedes reír tan fuerte como quieras.\nQue puedes quedarte en silencio.\nQue puedes decirme que estás cansada.\nQue puedes contarme aquello que te da vergüenza contarle a otros.\nPorque quiero que encuentres en mí un espacio donde nunca tengas miedo de ser tú.\nAsí como yo lo encontré contigo."
    },
    {
        "pageNumber": 82,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Hay días en los que pienso en el futuro y me emociono.\nOtros en los que me da un poco de miedo.\nY creo que ambas cosas pueden existir al mismo tiempo.\nPorque ilusionarse también significa aceptar que algo nos importa muchísimo.\nY todo aquello que importa... también puede asustarnos."
    },
    {
        "pageNumber": 83,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "No voy a mentirte.\nClaro que tengo miedo.\nNo del presente.\nDel futuro.\nTengo miedo de que la vida, con todas sus vueltas, quiera poner obstáculos donde hoy solo hay tranquilidad.\nTengo miedo de que aparezcan problemas que todavía no imaginamos.\nTengo miedo de no estar a la altura de lo que mereces.\nTengo miedo de equivocarme.\nTengo miedo de lastimarte sin querer algún día."
    },
    {
        "pageNumber": 84,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Son miedos que nunca había confesado de esta forma.\nPorque normalmente intento verme fuerte.\nIntento convencerme de que puedo con todo.\nPero contigo quiero ser completamente honesto.\nNo soy invencible.\nTambién me equivoco."
    },
    {
        "pageNumber": 85,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "También me da miedo perder.\nTambién tengo días donde necesito un abrazo más de lo normal.\n\nY quizá esa sea otra de las cosas que más me gustan de esto que estamos construyendo.\nQue siento que no necesito esconder esas partes de mí.\nPorque el amor, al menos el que yo quiero vivir contigo, no consiste en aparentar fortaleza todo el tiempo.\nConsiste en poder decir: \"Hoy no fue un buen día.\"\nY saber que la otra persona no va a juzgarte por eso."
    },
    {
        "pageNumber": 86,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Quiero que, si algún día tienes uno de esos días difíciles, recuerdes exactamente lo mismo.\nNo tienes que ser fuerte las veinticuatro horas.\nNo tienes que cargar todo sola.\nNo tienes que demostrarle al mundo que puedes con todo.\nSi alguna vez el peso se vuelve demasiado grande, ojalá me permitas ayudarte a cargar una parte.\n\nNo porque piense que eres débil.\nSino porque eso también significa amar.\nRepartir el peso cuando hace falta."
    },
    {
        "pageNumber": 87,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Hay personas que creen que el amor consiste únicamente en compartir la felicidad.\nYo creo que también consiste en compartir el cansancio.\nCompartir las dudas.\nCompartir los silencios.\nCompartir los miedos.\nY seguir tomándose de la mano incluso cuando ninguno de los dos tenga todas las respuestas.\n\nPorque, al final, no siempre necesitamos saber exactamente hacia dónde vamos.\nA veces basta con saber con quién queremos caminar."
    },
    {
        "pageNumber": 88,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Y, si hoy me preguntaran con quién quisiera recorrer todo lo que venga, mi respuesta saldría sin pensarlo dos veces.\nContigo.\n\nPorque, de todas las coincidencias que pudieron ocurrir en este año, la más bonita fue encontrarte.\nY todavía me sigue pareciendo increíble que, entre tantas personas, la vida haya decidido cruzar nuestros caminos justo cuando ninguno de los dos sabía que esa casualidad terminaría significando tanto.\n\nHay una costumbre que adopté sin darme cuenta desde que apareciste.\nAhora, cuando me pasa algo bonito, automáticamente pienso en contártelo.\nY cuando me pasa algo malo... también."
    },
    {
        "pageNumber": 89,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Antes era diferente.\nHabía muchas cosas que simplemente me guardaba. No porque no tuviera con quién compartirlas, sino porque sentía que no hacía falta. Aprendí a cargar muchas cosas solo y, con el tiempo, eso se volvió normal para mí.\nHasta que llegaste.\n\nY, sin pedírmelo, me enseñaste que compartir la vida también significa compartir los detalles.\nLos grandes.\nY los pequeños.\nPorque no todo lo importante tiene que ser extraordinario.\nA veces lo más importante es simplemente poder decir: \"Mira lo que me pasó hoy.\"\nY tener a alguien que realmente quiera escucharlo."
    },
    {
        "pageNumber": 90,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Gracias por escucharme.\nIncluso cuando hablo de cosas que probablemente no sean tan interesantes.\nGracias por hacerme sentir que lo que vivo también tiene un lugar en tu día.\nNo sabes cuánto significa eso para mí.\n\nHay veces en las que me descubro pensando en ti sin ninguna razón en específico.\nNo pasó nada."
    },
    {
        "pageNumber": 91,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "No vi una fotografía.\nNo escuché una canción.\nNo recordé una fecha.\nSimplemente apareces.\nComo aparecen los pensamientos bonitos cuando uno está tranquilo.\nY entonces sonrío.\n\nA veces hasta me río solo porque recuerdo alguna tontería que dijiste o alguna expresión que hiciste sin darte cuenta.\nOtras veces solo cierro los ojos un momento y vuelvo a sentir la tranquilidad de uno de tus abrazos.\n\nQué extraño es que un recuerdo pueda sentirse tan presente.\nSupongo que así funciona el cariño cuando empieza a echar raíces.\nPorque sí.\nCreo que eso está pasando."
    },
    {
        "pageNumber": 92,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Lo que siento por ti ya no es solamente emoción.\nEs algo que poco a poco se ha ido acomodando dentro de mí.\nComo esas cosas que dejan de sentirse nuevas porque ya forman parte de tu vida.\nY no porque pierdan importancia.\nTodo lo contrario.\nSe vuelven indispensables sin que te des cuenta.\n\nHay algo que nunca quisiera perder contigo.\nLa capacidad de sorprendernos.\nNo importa cuánto tiempo pase.\nNo importa cuántas veces caminemos por el mismo parque.\nNo importa cuántas veces nos abracemos.\nOjalá nunca dejemos de hacerlo con la misma intención."
    },
    {
        "pageNumber": 93,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Porque he visto cómo la costumbre puede hacer invisibles cosas que antes parecían un milagro.\nY yo nunca quiero acostumbrarme a ti de esa manera.\nQuiero seguir agradeciendo que estés."
    },
    {
        "pageNumber": 94,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Seguir sintiendo emoción cuando sé que voy a verte.\nSeguir sonriendo cuando aparezca una notificación tuya.\nSeguir sintiendo que cada abrazo tiene algo especial.\nNo quiero que el tiempo nos robe la capacidad de valorar lo cotidiano.\nPorque, siendo sincero, ya aprendí que ahí es donde vive la mayor parte de la felicidad.\n\nEn lo cotidiano.\nEn lo simple.\nEn lo que casi nadie presume."
    },
    {
        "pageNumber": 95,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Me hace ilusión imaginar que algún día tendremos nuestras propias costumbres.\nTal vez una cafetería favorita.\nUn lugar al que siempre volvamos.\nUna banca donde nos guste sentarnos.\nUna canción que automáticamente nos recuerde un momento específico.\nUna forma de despedirnos que solo nosotros entendamos.\nPequeñas tradiciones que nazcan sin planearlas.\n\nPorque las historias más bonitas casi nunca empiezan con grandes decisiones.\nEmpiezan con pequeños hábitos que un día, sin darte cuenta, se convierten en recuerdos.\nY me gustaría construir muchos de esos contigo."
    },
    {
        "pageNumber": 96,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Hay otra cosa que llevo tiempo pensando.\nNo quiero que sientas la presión de ser perfecta para mí.\nJamás.\nPorque si algún día tienes miedo de mostrarme tus errores, entonces habremos perdido algo muy importante.\n\nQuiero conocerte cuando estés feliz.\nPero también cuando estés frustrada.\nCuando todo te salga bien.\nY cuando sientas que nada está funcionando.\nQuiero conocer tus días donde tienes muchísima energía.\nY esos donde solo quieres descansar."
    },
    {
        "pageNumber": 97,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Porque el cariño verdadero no debería depender del estado de ánimo de una persona.\nNo quiero quererte únicamente cuando todo sea fácil.\nQuiero aprender a quererte también en los días difíciles.\nPorque esos días llegan para todos.\nY cuando lleguen, espero que nunca dudes de que sigo aquí.\n\nA veces pienso que el amor se parece mucho a cuidar una planta.\nNo basta con decir que te importa.\nHay que estar.\nHay que poner atención.\nHay que aprender cuándo necesita agua.\nCuándo necesita sol.\nCuándo simplemente necesita tiempo."
    },
    {
        "pageNumber": 98,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "No sirve de nada querer muchísimo algo si nunca lo cuidas.\nY yo quiero cuidar esto que estamos construyendo.\nCon paciencia.\nCon respeto.\nCon conversaciones.\nCon detalles.\nCon tiempo.\nPorque las cosas bonitas también necesitan que alguien las cuide para seguir creciendo."
    },
    {
        "pageNumber": 99,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Hay una imagen que vuelve constantemente a mi cabeza.\nNosotros dentro de algunos años.\nNo sé cuántos.\nNo importa.\nSolo imagino una tarde cualquiera.\nTú haciendo alguna cosa.\nYo haciendo otra.\nDe repente levanto la vista.\nTe veo."
    },
    {
        "pageNumber": 100,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Y pienso exactamente lo mismo que pienso hoy.\n\"Qué suerte la mía.\"\n\nNo porque crea que eres un premio.\nNi porque piense que no merezco estar contigo.\nSino porque encontrar a alguien que te dé paz es muchísimo más difícil de lo que imaginamos.\nY cuando la vida te regala una persona así, lo mínimo que puedes hacer es agradecerlo todos los días."
    },
    {
        "pageNumber": 101,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Eso quiero hacer.\nNo dar por hecho que estás.\nNo acostumbrarme al privilegio de tenerte cerca.\nPorque sé que las personas no son eternas.\nLos momentos tampoco.\nY quizá por eso intento disfrutarlos tanto cuando ocurren.\nPorque entiendo que precisamente esa fragilidad es la que los vuelve tan valiosos."
    },
    {
        "pageNumber": 102,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Hay veces en las que quisiera detener el tiempo.\nNo para vivir algo extraordinario.\nSimplemente para quedarme un rato más abrazándote.\nPorque hay abrazos tuyos que terminan demasiado pronto.\nNo importa cuánto duren.\nSiempre siento que podrían durar un poquito más."
    },
    {
        "pageNumber": 103,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Y creo que eso resume bastante bien lo que siento.\nContigo nunca tengo prisa.\nNunca estoy contando los minutos para hacer otra cosa.\nNunca estoy pensando en irme.\nAl contrario.\nSiempre estoy buscando cualquier excusa para quedarme.\nCinco minutos más.\nUna conversación más.\nUna sonrisa más."
    },
    {
        "pageNumber": 104,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Un abrazo más.\nComo si mi corazón entendiera algo que mi cabeza todavía intenta explicar.\nQue hay lugares donde uno no quiere salir corriendo.\n\nHay personas con las que el tiempo deja de sentirse como una cuenta regresiva.\nY tú te has convertido exactamente en eso para mí.\nEn ese lugar donde el reloj sigue avanzando... pero, por alguna razón, deja de importar."
    },
    {
        "pageNumber": 105,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Y mientras escribo todo esto, me pregunto si alguna vez alcanzarás a imaginar la cantidad de veces que apareces en mis pensamientos a lo largo del día.\nNo llevo la cuenta.\nCreo que sería imposible.\nPorque no sucede de una manera exagerada o dramática. No es que pase cada segundo pensando en ti. Es algo mucho más tranquilo que eso. Mucho más bonito.\n\nSimplemente apareces.\nComo cuando entra una brisa por una ventana abierta y cambia el ambiente de una habitación sin hacer ruido.\nAsí llegas a mi cabeza.\nSin avisar.\nY siempre dejas algo bonito antes de irte."
    },
    {
        "pageNumber": 106,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Hay ocasiones en las que estoy caminando por la calle y veo una pareja de ancianos tomados de la mano.\nNo sé quiénes son.\nNo sé cuánto tiempo llevan juntos.\nNo conozco su historia.\nPero siempre me quedo unos segundos mirándolos.\n\nY entonces pienso que el amor más bonito no siempre es el que hace más ruido.\nEs el que permanece.\nEl que sigue eligiendo.\nEl que aprende a quedarse incluso cuando ya pasaron los años, las dificultades y las etapas donde todo parecía nuevo.\n\nMe gusta imaginar algo así."
    },
    {
        "pageNumber": 107,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "No porque quiera me adelantar el tiempo.\nAl contrario.\nQuiero vivir cada etapa contigo con calma.\nPero me emociona pensar que quizá, si hacemos las cosas bien, un día podamos mirar hacia atrás y sonreír por todo lo que fuimos construyendo poco a poco.\n\nSin prisas.\nSin competencias.\nSin querer llegar antes que nadie.\nSolo nosotros.\nA nuestro ritmo."
    },
    {
        "pageNumber": 108,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Porque nunca me ha interesado vivir una historia perfecta.\nLas historias perfectas solo existen en los libros.\nYo quiero una historia real.\nDe esas donde algunos días nos reímos hasta que nos duele el estómago.\nY otros simplemente nos sentamos juntos porque ninguno tiene muchas ganas de hablar.\nDe esas donde aprendemos cosas nuevas el uno del otro incluso después de mucho tiempo.\nDonde seguimos haciéndonos preguntas.\nDonde todavía existe curiosidad.\nDonde nunca dejamos de ser novios, aunque los años pasen."
    },
    {
        "pageNumber": 109,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Hay una diferencia muy grande entre acostumbrarse a la presencia de alguien y dejar de valorarla.\nYo quiero acostumbrarme a tenerte cerca.\nClaro que sí.\nPero jamás quiero dejar de agradecer que estés.\nQuiero que cada vez que te vea siga sintiendo esa emoción tranquila que siento ahora.\nNo necesito fuegos artificiales cada vez que estamos juntos."
    },
    {
        "pageNumber": 110,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Me basta con esa sensación tan difícil de explicar que aparece cuando te veo acercarte.\nPorque ahí, en esos segundos antes de saludarte, siempre pasa algo curioso.\nTodo lo demás pierde importancia.\nEs como si mi atención decidiera concentrarse únicamente en ti.\nNo importa cuánta gente haya alrededor.\nNo importa cuánto ruido exista.\nSiempre termino buscándote con la mirada.\nY cuando finalmente te encuentro...\nTodo vuelve a estar bien.\n\nNo sé cómo lo haces.\nDe verdad no lo sé.\nPero contigo todo parece encontrar un equilibrio que antes no conocía."
    },
    {
        "pageNumber": 111,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Quizá esa sea una de las razones por las que disfruto tanto abrazarte.\nPorque en un abrazo no hacen falta explicaciones.\nNo importa si el día fue pesado.\nNo importa si hubo problemas.\nNo importa si ninguno de los dos sabe exactamente qué decir.\nA veces un abrazo resuelve cosas que una conversación completa no podría.\nY los tuyos tienen esa extraña capacidad de hacerme olvidar, aunque sea por unos minutos, todo aquello que me estaba preocupando.\n\nNo desaparecen los problemas.\nEso sería mentir.\nPero dejan de pesar igual.\nY ya es muchísimo."
    },
    {
        "pageNumber": 112,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Hay personas que dicen que uno encuentra paz cuando deja de buscarla.\nYo no sé si eso sea verdad.\nLo único que sé es que la encontré cuando menos lo esperaba.\nY llevaba tu nombre.\n\nHay algo que nunca quisiera que cambiaras.\nTu manera de cuidar."
    },
    {
        "pageNumber": 113,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Porque lo haces sin darte cuenta.\nNo necesito que estés preguntándome cada cinco minutos cómo me siento.\nNo necesito que resuelvas mis problemas.\nNo necesito que tengas respuestas para todo.\nLo único que haces es estar.\nY muchas veces eso basta.\n\nQué increíble es descubrir que la presencia correcta puede hacer tanto sin necesidad de decir demasiado.\n\nOjalá algún día yo también logre hacerte sentir esa misma tranquilidad.\nOjalá, cuando tengas un mal día, pienses en mí y sientas un poquito de calma.\nOjalá mis abrazos también puedan convertirse en un lugar seguro para ti.\nOjalá mi voz consiga acompañarte cuando te sientas cansada.\nOjalá mi compañía sea ese pequeño descanso que todos necesitamos de vez en cuando."
    },
    {
        "pageNumber": 114,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Porque si tú has logrado hacer todo eso conmigo, me gustaría devolverte aunque sea una parte.\nNo porque sienta que te debo algo.\nEl amor no es una deuda.\nEs un intercambio constante de cuidado.\nY cuidar de ti se ha convertido en una de las cosas que más ilusión me hacen."
    },
    {
        "pageNumber": 115,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "No porque piense que no puedes sola.\nSé perfectamente que puedes.\nLo he visto.\nHe visto la fuerza que tienes.\nLa forma en la que enfrentas las cosas.\nLas ganas que le pones a lo que quieres.\nY precisamente por eso quiero acompañarte.\nPorque las personas fuertes también merecen descansar en alguien de vez en cuando.\n\nHay un pensamiento que me visita seguido.\n¿Qué habría pasado si ese día nuestras vidas no se hubieran cruzado?"
    },
    {
        "pageNumber": 116,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Es una pregunta imposible de responder.\nProbablemente ambos seguiríamos con nuestra rutina.\nCon nuestras responsabilidades.\nCon nuestros planes.\nCreyendo que todo estaba exactamente donde debía estar.\nY, sin embargo, algo faltaría.\n\nTal vez nunca lo habríamos sabido.\nPorque uno no puede extrañar aquello que nunca conoció.\nPero ahora que te conozco...\nNo quiero imaginar un escenario donde no hubieras aparecido.\nPorque me cuesta muchísimo pensar en mis días sin incluirte de alguna manera."
    },
    {
        "pageNumber": 117,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Y eso no significa que mi vida dependa de ti.\nSignifica que la hiciste mucho más bonita.\nHay una diferencia enorme entre necesitar a alguien para existir y agradecer profundamente que exista.\nLo que siento se parece mucho más a lo segundo.\n\nPorque tú no llenaste un vacío.\nLlegaste a un lugar donde había espacio para construir algo completamente nuevo.\nY eso, para mí, hace que todo sea todavía más especial.\n\nNo llegaste para reparar una vida rota.\nLlegaste para compartir una vida que, desde que estás en ella, tiene muchísimos más motivos para sonreír."
    },
    {
        "pageNumber": 118,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Y si alguna vez llegas hasta este punto de la carta, probablemente te preguntes por qué sigo escribiendo.\nLa respuesta es muy sencilla.\nPorque todavía no termino.\nPorque todavía siento que me quedan demasiadas cosas por decirte.\nY porque, siendo completamente honesto, escribirte también se ha convertido en una forma de sentirte un poquito más cerca cuando no puedo verte.\n\nHay días como hoy."
    },
    {
        "pageNumber": 119,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Días en los que simplemente existo.\nNo podría decir que estoy bien.\nPero tampoco diría que estoy mal.\nEs una sensación extraña.\nComo si el cuerpo siguiera haciendo todo lo que tiene que hacer, mientras la cabeza camina más despacio.\n\nY creo que una gran parte de eso tiene que ver con que te extraño.\nNo de esa manera dramática que aparece en las películas.\nTe extraño de una forma mucho más silenciosa.\n\nExtraño saber que en algún momento del día voy a abrazarte.\nExtraño esa calma que aparece cuando estás cerca.\nExtraño la facilidad con la que haces que todo parezca un poco más sencillo."
    },
    {
        "pageNumber": 120,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Hay personas que piensan que extrañar significa sufrir.\nYo creo que también significa reconocer el lugar tan bonito que alguien ocupa en tu vida.\nPorque solamente extrañamos aquello que de verdad nos hace felices.\nY tú me haces feliz.\nMuchísimo más de lo que probablemente imaginas."
    },
    {
        "pageNumber": 121,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Hay una escena que se repite muchas veces en mi cabeza.\nNo importa dónde esté.\nLa imagino igual.\nVoy caminando.\nTe veo a lo lejos.\nTú también me ves.\nY los dos empezamos a acercarnos.\nNi siquiera hace falta correr.\nPorque sabemos que, en unos segundos, vamos a volver a encontrarnos.\n\nY cuando finalmente llegamos el uno al otro...\nAhí está ese abrazo.\nEse abrazo que siempre parece decir mucho más de lo que cualquiera de los dos pronuncia."
    },
    {
        "pageNumber": 122,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "No sé si te pasa igual.\nPero, cuando te abrazo, siento que mi cuerpo descansa.\nNo es solamente una sensación bonita.\nEs como si, durante unos instantes, dejara de estar alerta.\nComo si todo el peso del día encontrara un lugar donde apoyarse."
    },
    {
        "pageNumber": 123,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Hay abrazos que simplemente son abrazos.\nY luego están los tuyos.\nQue se sienten como volver a casa después de un día larguísimo.\nQuizá por eso nunca quiero soltarte tan rápido.\nPorque siempre siento que todavía falta un poquito más.\nUn segundo.\nDos.\nCinco.\nLos que sean.\nMientras pueda seguir sintiendo que estás ahí."
    },
    {
        "pageNumber": 124,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Hay otra cosa que me gusta mucho de ti.\nTu manera de escuchar.\nNo sé si alguna vez alguien te lo ha dicho.\nPero escuchar de verdad es mucho más difícil de lo que parece.\nLa mayoría de las personas escucha únicamente para responder.\nTú escuchas para entender.\nY créeme...\nEso se nota.\n\nSe nota cuando hablo contigo.\nSe nota cuando recuerdas cosas que te conté hace tiempo.\nSe nota cuando haces preguntas porque realmente quieres saber cómo me siento.\nY no sabes la tranquilidad que da sentirse escuchado."
    },
    {
        "pageNumber": 125,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Vivimos rodeados de personas que hablan muchísimo.\nPero muy pocas realmente prestan atención.\nTú eres una de esas pocas."
    },
    {
        "pageNumber": 126,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Y ojalá nunca dejes de ser así.\nPorque esa forma tan tuya de interesarte genuinamente por los demás dice muchísimo del corazón que tienes.\n\nA veces pienso que eres más fuerte de lo que tú misma crees.\nY también mucho más buena de lo que reconoces.\nHay personas que hacen el bien esperando que alguien lo note.\nTú muchas veces lo haces sin siquiera pensar en eso.\nSimplemente te nace."
    },
    {
        "pageNumber": 127,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Y creo que ahí está una de las cosas más bonitas de quien eres.\nNo haces las cosas para parecer una buena persona.\nLas haces porque realmente lo eres.\nY eso se refleja incluso en los detalles más pequeños.\nEn cómo hablas.\nEn cómo cuidas.\nEn cómo piensas.\nEn cómo haces sentir a quienes están cerca de ti."
    },
    {
        "pageNumber": 128,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Hay momentos en los que me quedo observándote mientras hablas.\nY no es porque deje de poner atención a lo que dices.\nEs porque me gusta la pasión con la que cuentas ciertas cosas.\nTus ojos cambian.\nTu expresión cambia.\nHasta tu manera de mover las manos cambia.\nY es imposible no sonreír al verte así.\n\nEs bonito descubrir aquello que hace brillar a una persona.\nY tú tienes muchas cosas que te hacen brillar.\nLo curioso es que probablemente ni siquiera eres consciente de varias de ellas."
    },
    {
        "pageNumber": 129,
        "chapter": 2,
        "isChapterTitlePage": false,
        "content": "Si pudieras verte durante unos minutos con los ojos con los que yo te veo...\nEntenderías por qué me cuesta tanto explicar todo lo que siento.\nPorque no se trata solamente de que seas bonita.\nClaro que me lo pareces.\nPero sería muy injusto resumirte únicamente en eso."
    },
    {
        "pageNumber": 130,
        "chapter": 3,
        "isChapterTitlePage": true,
        "content": ""
    },
    {
        "pageNumber": 131,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Lo que realmente me enamora es todo lo que existe detrás.\nTu forma de pensar.\nTu forma de enfrentar la vida.\nTu manera de demostrar cariño.\nTu paciencia.\nTu autenticidad.\nTu manera de seguir siendo tú incluso cuando podrías intentar parecer alguien diferente para me agradar a los demás.\n\nEso vale muchísimo.\nMuchísimo más de lo que imaginas."
    },
    {
        "pageNumber": 132,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Hay personas que pasan toda una vida buscando a alguien que les dé tranquilidad.\nYo tuve la enorme suerte de encontrarte cuando ni siquiera estaba buscando eso.\nY ahora que sé lo que se siente...\nNo quiero dejar de cuidarlo.\n\nPorque las cosas realmente valiosas casi nunca llegan haciendo ruido.\nLlegan despacio.\nComo llegaste tú.\nY, cuando uno menos se da cuenta, ya ocupan un lugar que sería imposible reemplazar."
    },
    {
        "pageNumber": 133,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Hay una frase que se forma en mi cabeza cada vez que pienso en nosotros.\nNo es una frase bonita.\nNi poética.\nEs mucho más sencilla.\n\"Qué bien se siente estar contigo.\"\nEso es.\nAsí de simple.\n\nPorque, al final, por más palabras que escriba, por más hojas que llene y por más intentos que haga de explicarlo, siempre termino llegando al mismo lugar.\nContigo estoy bien."
    },
    {
        "pageNumber": 134,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Y hay muy pocas cosas en esta vida que puedan decirse con tanta certeza como esa.\nY quizá eso sea lo que más me sorprende de todo.\nLa certeza.\n\nPorque yo nunca he sido una persona de certezas. Siempre he dudado de muchas cosas. Me cuestiono decisiones, pienso demasiado antes de actuar, le doy vueltas a conversaciones que ya terminaron y, a veces, hasta imagino problemas donde todavía no existen. Así ha sido mi cabeza desde hace mucho tiempo."
    },
    {
        "pageNumber": 135,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Pero contigo ocurre algo curioso.\nNo desaparecen todas esas dudas, porque siguen formando parte de mí.\nLo que cambia es que, cuando pienso en ti, todo se siente mucho más claro.\nNo necesito convencerme de que quiero estar contigo.\nNo necesito hacer una lista de razones.\nNo necesito preguntarme si esto vale la pena.\nSimplemente lo sé.\n\nY esa tranquilidad es algo que nunca había experimentado de esta manera.\n\nHay días en los que me descubro sonriendo antes de verte.\nNo porque ya estés conmigo.\nSino porque sé que dentro de unas horas voy a poder abrazarte.\nY me parece increíble que una sola idea tenga el poder de cambiarme el humor."
    },
    {
        "pageNumber": 136,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Es como cuando un niño sabe que falta poco para algo que lleva esperando mucho tiempo. No puede evitar emocionarse. Intenta seguir con lo que está haciendo, pero, muy en el fondo, toda su atención ya está puesta en ese momento que todavía no llega.\n\nAsí me pasa contigo.\nLas horas parecen tener otro ritmo cuando sé que voy a verte.\nY cuando por fin llega ese momento... siempre pienso exactamente lo mismo.\n\"Valió la pena esperar.\"\n\nPorque nunca he sentido que el tiempo invertido en ti sea tiempo perdido.\nAl contrario.\nEs el tiempo que más disfruto."
    },
    {
        "pageNumber": 137,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Hay una pequeña manía que tengo y no sé si la has notado.\nCuando estoy contigo, a veces me quedo mirándote unos segundos sin decir nada.\nY seguramente tú pensarás que estoy distraído.\nPero no.\nEn realidad estoy intentando guardar ese momento.\n\nHay escenas que uno sabe que no quiere olvidar.\nNo porque sean espectaculares.\nSino porque son sinceras.\nVerte reír.\nEscucharte contarme algo con entusiasmo.\nSentir tu mano cerca de la mía.\nMirarte mientras no te das cuenta de que te estoy mirando."
    },
    {
        "pageNumber": 138,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Son momentos tan simples que probablemente el resto del mundo los dejaría pasar.\nYo no.\nYo intento guardarlos todos.\nPorque no sé cuál de ellos será el que algún día vuelva a recordar con más fuerza.\nY prefiero que mi memoria tenga muchos lugares bonitos a los cuales regresar."
    },
    {
        "pageNumber": 139,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "¿Sabes qué me gusta pensar?\nQue dentro de algunos años quizá volvamos a leer esta carta.\nTal vez estemos en un lugar completamente diferente.\nCon otras responsabilidades.\nCon otras preocupaciones.\nCon muchas más historias encima.\nY me hace ilusión imaginar que, al llegar a estas páginas, podamos mirarnos y decir:\n\"Éramos nosotros empezando.\"\n\nPorque, aunque lo que siento hoy es enorme, también tengo la impresión de que apenas estamos descubriendo todo lo que podemos llegar a vivir juntos."
    },
    {
        "pageNumber": 140,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Eso me emociona muchísimo.\nPensar que todavía nos faltan primeras veces.\nNuestro primer viaje.\nLa primera vez que celebremos algún logro importante del otro.\nLa primera vez que pasemos un día entero sin preocuparnos por la hora.\nLas primeras fotografías que dentro de muchos años veremos con una sonrisa enorme.\n\nTodavía hay tantos recuerdos esperándonos que a veces siento que el futuro nos está haciendo señas desde lejos.\nComo diciendo:\n\"Tengan paciencia... todavía falta mucho por vivir.\"\nY quiero vivirlo contigo."
    },
    {
        "pageNumber": 141,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "No porque crea que la vida solo tiene sentido si estás.\nLa vida ya existía antes.\nPero desde que apareciste, tiene colores que antes no alcanzaba a ver.\nEs una diferencia difícil de explicar.\n\nEs como cuando durante mucho tiempo escuchas una canción con un solo audífono y un día, por primera vez, escuchas ambos.\nLa canción sigue siendo la misma.\nPero descubres sonidos que antes estaban escondidos.\nAsí siento mi vida desde que llegaste.\nNo cambió completamente.\nSimplemente empezó a sentirse más completa."
    },
    {
        "pageNumber": 142,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Hay algo que quiero agradecerte aunque quizá nunca sepas exactamente por qué.\nGracias por hacerme volver a ilusionar con cosas pequeñas.\nCon esperar un mensaje.\nCon contar los días para verte.\nCon imaginar planes sencillos.\nCon emocionarme por un abrazo.\nCon sonreír cuando aparece tu nombre."
    },
    {
        "pageNumber": 143,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Había olvidado que las cosas simples también podían hacer tan feliz a alguien.\nY tú me lo recordaste sin proponértelo.\nNo hiciste un gran discurso.\nNo intentaste convencerme de nada.\nSolo llegaste siendo tú.\nY fue suficiente."
    },
    {
        "pageNumber": 144,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "A veces pienso que el amor tiene una forma muy curiosa de aparecer.\nNo pregunta si es buen momento.\nNo revisa nuestros planes.\nNo espera a que todo esté perfectamente acomodado.\nSimplemente llega.\nSe sienta.\nEmpieza a hacer espacio.\nY cuando uno quiere darse cuenta...\nYa cambió la distribución completa del corazón.\n\nEso hiciste tú.\nLlegaste cuando menos lo esperaba.\nY, sin hacer ruido, terminaste ocupando un lugar que hoy me costaría muchísimo imaginar vacío."
    },
    {
        "pageNumber": 145,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "No porque dependiera de que alguien llegara.\nSino porque, ahora que estás aquí, me resulta imposible pensar en mis días sin incluirte de alguna manera.\n\nNo sé qué estará pasando por tu cabeza mientras lees esto.\nTal vez sonrías.\nTal vez te dé un poco de pena.\nTal vez pienses que exagero.\nY, siendo sincero...\nPuede que sí.\n\nPorque cuando uno quiere mucho a alguien, siempre termina exagerando un poquito.\nExagera las ganas de verla."
    },
    {
        "pageNumber": 146,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Exagera la felicidad cuando llega.\nExagera lo mucho que la extraña cuando no está.\nPero ¿sabes qué?\nCreo que esa es una exageración bonita.\nPorque nace del cariño.\n\nY nunca me dará vergüenza quererte mucho.\nNunca me dará vergüenza decirte que me haces falta.\nNunca me dará vergüenza emocionarme por verte.\nNunca me dará vergüenza abrazarte un segundo más.\nSi alguna vez dejo de hacer esas cosas, espero que seas tú quien me las recuerde."
    },
    {
        "pageNumber": 147,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Porque no quiero convertirme en alguien que dé por hecho tu presencia.\nQuiero seguir eligiendo demostrarte lo importante que eres para mí.\nNo solamente con estas palabras.\nSino también con mis acciones.\nCon mi tiempo.\nCon mi paciencia.\nCon mi forma de escucharte.\nCon mi manera de cuidarte.\n\nPorque escribir una carta es bonito.\nPero construir una historia donde cada día confirme lo que hoy escribo... eso sería todavía más bonito.\n\nY, si la vida nos regala la oportunidad, me gustaría que cada página que venga después de esta no se escriba con tinta.\nMe gustaría que se escriba con todos los momentos que todavía nos faltan por vivir juntos."
    },
    {
        "pageNumber": 148,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Hay algo que llevo un buen rato pensando mientras escribo todo esto.\nQuizá esta carta nunca termine de decir exactamente todo lo que siento.\nY no porque me falten palabras.\nSino porque tú siempre consigues provocar algo nuevo dentro de mí."
    },
    {
        "pageNumber": 149,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Es como intentar llenar una libreta mientras alguien, al mismo tiempo, sigue regalándote nuevos recuerdos.\nCuando creo que ya escribí todo, aparece otra cosa que también merece un espacio.\nOtra sensación.\nOtro pensamiento.\nOtra razón para agradecer que hayas llegado.\nY entonces vuelvo a empezar.\n\nSupongo que por eso las personas enamoradas escriben tanto.\nNo porque les guste hablar demasiado.\nSino porque el corazón siempre parece ir unos pasos adelante de la mano."
    },
    {
        "pageNumber": 150,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Hay algo que me da mucha paz.\nPensar que todavía nos estamos conociendo.\nY puede parecer extraño que diga que eso me tranquiliza.\nA muchos les desesperaría.\nA mí me emociona.\n\nPorque significa que todavía quedan muchas versiones tuyas por descubrir.\nTodavía hay canciones que no sé que te gustan.\nHistorias que nunca me has contado.\nComidas favoritas que aún no conozco.\nLugares que marcaron tu infancia.\nMiedos que quizá todavía no te animas a compartir.\nSueños que guardas únicamente para ti."
    },
    {
        "pageNumber": 151,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Y quiero conocer todo eso.\nNo porque sienta curiosidad por llenar espacios vacíos.\nSino porque todo lo que forma parte de ti empieza a importarme también.\nQuiero conocer la historia completa.\nNo solamente los capítulos bonitos.\nTambién aquellos donde hubo tristeza.\nAquellos donde hubo decepciones.\nLos momentos que te hicieron crecer."
    },
    {
        "pageNumber": 152,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Las veces que pensaste que ya no podías más.\nPorque todo eso también construyó a la mujer que hoy tengo enfrente.\nY, si admiro tanto quién eres, también quiero aprender a respetar todo lo que tuviste que vivir para llegar hasta aquí.\n\nA veces olvidamos que las personas no aparecen de la nada.\nTodos llegamos con cicatrices que casi nadie puede ver.\nCon inseguridades.\nCon recuerdos.\nCon miedos.\nCon ilusiones.\nCon heridas que aprendimos a esconder detrás de una sonrisa."
    },
    {
        "pageNumber": 153,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Y, si algún día decides enseñarme esas partes de ti, quiero que sepas que las voy a recibir con muchísimo cuidado.\nComo quien sostiene entre las manos algo muy valioso.\nPorque la confianza nunca debería tratarse como algo pequeño.\nSe construye lentamente.\nY puede romperse muy rápido.\n\nYo quiero construirla contigo.\nDespacio.\nSin prisas.\nSin obligarnos a nada.\nSimplemente dejando que el tiempo haga lo suyo mientras nosotros hacemos nuestra parte."
    },
    {
        "pageNumber": 154,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Hay una palabra que me gusta mucho.\n\"Coincidencia.\"\nPorque nuestra historia comenzó siendo exactamente eso.\nUna coincidencia.\nDos personas que, entre millones, terminaron cruzándose.\nY mira todo lo que puede nacer de algo que, en apariencia, parecía tan simple.\n\nA veces me gusta pensar en la cantidad de decisiones que tuvieron que ocurrir para que hoy pudiera estar escribiéndote esta carta."
    },
    {
        "pageNumber": 155,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Los lugares donde estuvimos.\nLas personas que conocimos.\nLas conversaciones que tuvimos.\nLos caminos que elegimos.\nTodo eso tuvo que pasar exactamente como pasó para que nuestras vidas coincidieran.\n\nY me parece increíble.\nPorque muchas veces creemos que un momento importante llega acompañado de algo enorme.\nCuando, en realidad, basta con una conversación para cambiar el rumbo de muchas cosas.\nNo sé si algún día dimensionemos por completo lo importante que fue ese primer paso.\nLo único que sé es que agradezco profundamente que haya existido."
    },
    {
        "pageNumber": 156,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "También me gusta pensar en la persona que eras antes de conocerme.\nPorque, aunque hoy compartimos muchas cosas, sé que tu vida ya tenía una historia antes de que yo apareciera.\nHabía personas importantes.\nHabía sueños.\nHabía problemas.\nHabía días felices.\nHabía días difíciles.\n\nY me parece bonito imaginar que, de alguna forma, nuestras historias comenzaron a escribirse por separado para después encontrarse en un mismo capítulo.\n\nNo quiero borrar nada de tu pasado.\nPorque todo eso también te convirtió en quien eres.\nY precisamente esa persona fue la que terminó robándose un lugar enorme dentro de mí.\n\nHay veces en las que me pregunto si algún día lograré hacerte sentir todo lo que tú me haces sentir."
    },
    {
        "pageNumber": 157,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Y esa pregunta me acompaña muy seguido.\nNo porque dude de lo que hago.\nSino porque siento que eres tan importante para mí que siempre quiero darte un poquito más.\n\nMás tiempo.\nMás atención.\nMás tranquilidad.\nMás apoyo.\nMás motivos para sonreír."
    },
    {
        "pageNumber": 158,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Sé que no siempre voy a acertar.\nHabrá días donde me equivoque.\nHabrá momentos donde no entienda exactamente qué necesitas.\nY seguramente también habrá ocasiones donde tenga que pedirte perdón.\nPero quiero que, incluso en esos días, nunca dudes de una cosa.\nTodo lo que haga, intentaré hacerlo desde el cariño.\nPorque eso es lo que siento por ti."
    },
    {
        "pageNumber": 159,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Un cariño que no nació de un momento espectacular.\nNació de muchas pequeñas cosas.\nDe conversaciones.\nDe miradas.\nDe silencios.\nDe abrazos.\nDe detalles que fueron creciendo hasta convertirse en algo muchísimo más grande de lo que imaginé.\n\nY qué curioso...\nPorque si alguien me hubiera dicho hace unos meses que iba a escribir una carta tan larga para alguien, probablemente me habría reído.\nHabría dicho que exageraban.\nQue nadie podía tener tantas cosas por decir.\nAhora entiendo que el problema nunca fue la cantidad de palabras."
    },
    {
        "pageNumber": 160,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "El problema era que todavía no había encontrado a la persona que me inspirara a escribirlas.\nY apareciste tú.\n\nDesde entonces siento que el corazón tiene conversaciones enteras que llevaba años esperando poder contar.\nA veces incluso me río solo mientras escribo.\nPorque pienso:\n\"Seguro cuando lea esto va a decir que hablo demasiado.\"\nY probablemente tengas razón."
    },
    {
        "pageNumber": 161,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Pero también creo que, si algún día dejo de decirte lo importante que eres para mí, sería como guardar un libro entero en un cajón solo por miedo a que alguien piense que tiene demasiadas páginas.\nPrefiero correr ese riesgo.\nPrefiero escribir de más.\nAbrazarte de más.\nDecirte que te extraño de más.\nDecirte que te quiero una vez más de las necesarias.\n\nPorque nunca he escuchado a alguien arrepentirse de haber querido demasiado a la persona correcta."
    },
    {
        "pageNumber": 162,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Y ojalá, con el paso del tiempo, tú nunca tengas dudas de cuánto espacio ocupas en mi corazón.\nNo porque te lo repita todos los días.\nSino porque espero que puedas verlo en cada pequeño gesto.\nEn cada vez que te escuche con atención.\nEn cada vez que recuerde algo que para ti era importante.\nEn cada vez que te abrace cuando más lo necesites.\nEn cada vez que decida quedarme.\n\nPorque, al final, el amor no se mide por las veces que alguien dice \"te quiero\".\nSe mide por todas las veces que demuestra, incluso sin hablar, que realmente lo siente.\n\nHay algo que me hace mucha gracia cuando lo pienso."
    },
    {
        "pageNumber": 163,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Si alguien me hubiera visto hace un tiempo y luego me viera ahora, probablemente pensaría que soy otra persona.\nY, en cierta parte, tendría razón.\nNo porque haya dejado de ser yo.\n\nSigo siendo el mismo Andre que se toma muchas cosas en serio, el que a veces parece demasiado callado, el que muchas veces prefiere observar antes de hablar. Esa parte de mí sigue aquí.\n\nPero ahora hay alguien que conoce una versión completamente distinta.\nLa que sonríe más.\nLa que espera con emoción un mensaje.\nLa que cuenta los días para volver a verte.\nLa que encuentra felicidad en cosas que antes parecían insignificantes."
    },
    {
        "pageNumber": 164,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Y me gusta que seas tú quien haya despertado esa parte.\nPorque nunca sentí que estuvieras intentando cambiarme.\nNunca me pediste que fuera diferente.\nSimplemente hiciste que ser diferente ocurriera de manera natural.\nY eso tiene muchísimo valor.\n\nPorque las mejores transformaciones nunca nacen de la obligación.\nNacen del cariño."
    },
    {
        "pageNumber": 165,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "A veces me pregunto si tú también habrás cambiado algunas cosas desde que nos conocimos.\nNo sé cuáles.\nTal vez ninguna.\nTal vez muchas.\nQuizá haya alguna canción que ahora escuches y te acuerdes de mí.\nQuizá haya algún lugar que ya no sientas igual porque alguna vez estuvimos ahí.\nQuizá haya pequeños hábitos que aparecieron sin que te dieras cuenta.\n\nMe gusta imaginar que, de alguna forma, también dejé un pedacito de mí en algunos de tus días.\nPorque tú definitivamente dejaste muchísimos en los míos."
    },
    {
        "pageNumber": 166,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Hay mañanas en las que despierto y lo primero que hago es revisar el celular.\nNo porque espere algo importante del mundo.\nSino porque una parte de mí siempre tiene la esperanza de encontrar algo tuyo.\nY cuando pasa...\nNo sé.\nEl día empieza diferente.\nComo si alguien hubiera abierto la ventana de un cuarto que llevaba horas cerrado.\n\nEs increíble cómo una persona puede cambiar el ambiente sin siquiera estar presente.\nEso haces tú.\nY creo que nunca te había dado el crédito suficiente por eso."
    },
    {
        "pageNumber": 167,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "También quiero confesarte algo que probablemente nunca te dije.\nHay veces en las que ensayé conversaciones contigo... dentro de mi cabeza.\nSí.\nAsí de raro soy.\nVoy caminando, estoy bañándome, haciendo cualquier cosa, y de repente imagino que estamos hablando.\nPienso en algo que quiero contarte.\nEn alguna pregunta que quiero hacerte.\nEn alguna tontería que seguramente terminaría haciéndonos reír.\n\nY luego, cuando finalmente estamos juntos...\nOlvido la mitad.\nPorque verte siempre termina desordenando un poquito todo lo que llevaba preparado."
    },
    {
        "pageNumber": 168,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Y, aunque antes eso me desesperaba, ahora me parece bonito.\nPorque significa que contigo nunca necesito seguir un guion.\nLas conversaciones simplemente nacen.\nComo nacen las risas.\nComo nacen los silencios.\nComo nacen los abrazos."
    },
    {
        "pageNumber": 169,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Todo ocurre con una naturalidad que todavía me sorprende.\nNo siento que tenga que buscar temas para llenar espacios.\nNunca.\nContigo incluso quedarse callados tiene sentido.\nY eso es muy raro.\n\nMuy pocas personas logran que un silencio se sienta cómodo.\nLa mayoría intenta llenarlo inmediatamente.\nNosotros no.\nY espero que nunca perdamos eso."
    },
    {
        "pageNumber": 170,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Porque hay silencios que hablan muchísimo.\nHablan cuando nuestras manos siguen juntas aunque ninguno diga nada.\nHablan cuando simplemente nos quedamos viendo el paisaje.\nHablan cuando apoyamos la cabeza en el hombro del otro.\nHablan cuando el mundo sigue haciendo ruido y nosotros decidimos regalarnos un pequeño momento de calma.\n\nEsos silencios también forman parte de nuestra historia.\nY me gustan tanto como nuestras conversaciones."
    },
    {
        "pageNumber": 171,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "¿Sabes qué otra cosa me encanta?\nQue todavía podamos sorprendernos.\nTodavía hay gestos tuyos que aparecen de repente y consiguen desarmarme por completo.\nUna sonrisa.\nUna mirada.\nUna forma de pronunciar mi nombre.\n\nHay cosas tan pequeñas que, si alguien más las viera, seguramente pensaría que no tienen importancia.\nPero para mí sí.\nPorque cuando el cariño crece, también aprende a fijarse en detalles que antes parecían invisibles.\n\nCreo que eso es enamorarse.\nEmpezar a notar cosas que el resto del mundo deja pasar."
    },
    {
        "pageNumber": 172,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Hay personas que buscan grandes señales para saber si están enamoradas.\nYo encontré las mías en momentos muy sencillos.\nEn querer contarte primero las noticias.\nEn imaginar cómo reaccionarías ante algo que me pasó.\nEn escuchar una canción y pensar que me gustaría compartirla contigo.\nEn ver un atardecer y sentir que sería mucho más bonito si estuvieras a mi lado.\nEn guardar una fotografía porque quiero enseñártela después.\nEn caminar por una tienda y pensar: \"Esto le gustaría.\"\n\nSon detalles tan cotidianos que incluso podrían parecer insignificantes.\nPero, cuando los juntas todos, forman algo enorme.\nForman una vida donde alguien empieza a estar presente incluso cuando físicamente no está.\nY eso me sigue pareciendo maravilloso."
    },
    {
        "pageNumber": 173,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "No sé si alguna vez te has detenido a pensar en la cantidad de pequeñas decisiones que tomamos cuando queremos mucho a alguien.\nEsperar unos minutos más para despedirse.\nCambiar una ruta solo para pasar un rato juntos.\nDormirse un poco más tarde porque la conversación estaba demasiado bonita para terminarla.\nBuscar un huequito en el día aunque esté lleno de pendientes.\n\nTodo eso también es amor.\nNo aparece en las películas.\nNo suele escribirse en los poemas.\nPero ahí está.\nEscondido en las pequeñas renuncias que hacemos con gusto porque la recompensa siempre termina siendo verte sonreír."
    },
    {
        "pageNumber": 174,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Y, si soy completamente sincero, jamás he sentido que hacer espacio para ti sea un sacrificio.\nAl contrario.\nEs una de las decisiones más fáciles que tomo.\nPorque nunca siento que estoy perdiendo tiempo."
    },
    {
        "pageNumber": 175,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Siempre siento que lo estoy invirtiendo en alguien que vale muchísimo la pena.\nOjalá nunca dejes de sentirte importante para mí.\nNo porque necesites que te lo recuerde constantemente.\nSino porque quiero que cada acción mía hable incluso cuando las palabras se queden cortas.\n\nQuiero que un día, muchos años después, si alguien te preguntara cómo sabía que te quería, no respondieras hablando de esta carta.\nMe gustaría que respondieras recordando todos esos pequeños momentos donde, sin necesidad de escribir nada, logré hacerte sentir amada.\n\nPorque esta carta podrá terminar algún día.\nPero mi mayor deseo es que todo lo que dice siga vivo mucho después de que la última página se haya cerrado."
    },
    {
        "pageNumber": 176,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Hay una cosa que nunca deja de sorprenderme.\nLo fácil que es sentirme tranquilo cuando estoy contigo.\nY no hablo de esa tranquilidad que aparece porque todo está saliendo bien. Esa cualquiera puede sentirla. Hablo de otra. De esa que llega incluso cuando el día fue pesado, cuando la cabeza está llena de pensamientos o cuando el cansancio parece no querer irse.\n\nContigo esa tranquilidad aparece de todas formas.\nComo si supiera exactamente dónde encontrarme.\n\nNo sé si alguna vez te has dado cuenta de que, cuando estoy contigo, muchas veces dejo de mirar el celular.\nY puede parecer una tontería.\nPero para mí significa mucho."
    },
    {
        "pageNumber": 177,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Vivimos tan acostumbrados a tener la atención repartida entre mil cosas que, cuando alguien consigue que olvides todo lo demás, es porque realmente importa.\nContigo no necesito estar revisando qué hora es.\nNo siento ansiedad por responder otros mensajes.\nNo estoy pensando en lo que sigue.\nEstoy donde quiero estar.\nY eso me pasa muy pocas veces."
    },
    {
        "pageNumber": 178,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Creo que por eso disfruto tanto simplemente verte.\nPorque cuando estoy contigo siento que, por fin, estoy completamente presente.\nNo tengo la cabeza en mañana.\nNo estoy atrapado en ayer.\nEstoy aquí.\nCon la persona que quiero.\nY eso basta.\n\nHay veces en las que me pregunto qué estará sintiendo tu corazón mientras vivimos todos estos momentos.\nPorque yo puedo escribirte páginas enteras sobre lo que pasa dentro del mío, pero el tuyo sigue siendo un misterio hermoso que poco a poco quiero ir descubriendo."
    },
    {
        "pageNumber": 179,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "No quiero apresurarme.\nNo quiero asumir cosas.\nPrefiero conocerte con calma.\nEscucharte.\nEntenderte.\nAprender qué cosas te hacen sentir segura.\nQué cosas te emocionan.\nQué cosas te ponen nerviosa.\nQué cosas te hacen reír hasta que te duela el estómago.\n\nQuiero conocer cada una de esas partes.\nPorque amar también es tener la curiosidad de seguir descubriendo a la otra persona incluso cuando crees conocerla bastante."
    },
    {
        "pageNumber": 180,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Y espero que nunca perdamos esa curiosidad.\nQue nunca lleguemos a pensar: \"Ya sé todo sobre ti.\"\nPorque siempre habrá algo nuevo.\nUna nueva meta.\nUna nueva ilusión.\nUn miedo diferente.\nUn sueño que apenas empieza a formarse."
    },
    {
        "pageNumber": 181,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Y quiero estar ahí para conocerlo también.\n\nHay un pensamiento que vuelve mucho a mi cabeza cuando pienso en nosotros.\nMe gustaría convertirme en alguien con quien siempre puedas sentirte en paz.\nNo en alguien perfecto.\nNo en alguien que nunca falle.\nEso sería imposible.\n\nMe gustaría ser esa persona con la que puedas quitarte el peso de encima por un rato.\nCon la que no tengas que fingir.\nCon la que puedas decir: \"Hoy no tengo ganas de ser fuerte.\"\nY que eso esté bien."
    },
    {
        "pageNumber": 182,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Porque todos nos cansamos.\nTodos tenemos días donde las fuerzas no alcanzan igual.\nY, si algún día la vida te pone uno de esos días enfrente, me gustaría ser uno de los lugares donde puedas descansar.\n\nNo porque crea que no puedes sola.\nAl contrario.\nSé que eres fuerte.\nPero incluso las personas más fuertes merecen alguien que les recuerde que no tienen que cargar todo por sí mismas.\n\nOjalá algún día mis abrazos también tengan ese efecto en ti.\nEl mismo que los tuyos tienen en mí.\nQue cuando el mundo parezca demasiado pesado, pienses: \"Solo quiero verlo.\"\nY que eso sea suficiente para sentir un poquito de calma."
    },
    {
        "pageNumber": 183,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Porque esa es exactamente la sensación que tú despiertas en mí.\nY es una de las cosas más bonitas que me han pasado.\n\nHay ocasiones en las que cierro los ojos e intento recordar con detalle el sonido de tu risa.\nNo porque tenga miedo de olvidarlo.\nSino porque me gusta.\nPorque tiene algo que hace que todo alrededor parezca más ligero."
    },
    {
        "pageNumber": 184,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Hay risas que simplemente se escuchan.\nLa tuya se contagia.\nHace que uno quiera seguir hablando contigo.\nSeguir haciendo cualquier tontería con tal de volver a escucharla.\n\nY, aunque quizá nunca te lo diga cuando pase, muchas veces me quedo pensando:\n\"Ojalá nunca deje de escuchar esa risa.\"\nPorque el mundo necesita más sonidos así.\nY yo quiero tener la suerte de seguir escuchándolos durante mucho tiempo.\n\nA veces también imagino cómo nos veremos dentro de algunos años.\nNo intento imaginar grandes cosas.\nCuriosamente, las escenas que aparecen en mi cabeza siempre son muy sencillas."
    },
    {
        "pageNumber": 185,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Tú leyendo algo mientras yo hago cualquier otra cosa.\nLos dos cocinando y riéndonos porque alguno hizo un desastre.\nSalir por un café solo porque sí.\nDiscutir durante diez minutos sobre qué pedir para terminar ordenando lo mismo de siempre.\nRegresar caminando despacio aunque podríamos llegar más rápido.\nSentarnos en una banca sin hablar mucho.\nEsperar un atardecer.\nCompartir un silencio.\nY volver a casa sintiendo que el día fue bonito aunque no haya ocurrido nada extraordinario."
    },
    {
        "pageNumber": 186,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Esos son los recuerdos que quiero construir contigo.\nPorque creo que la felicidad verdadera casi nunca hace ruido.\nNo necesita llamar la atención.\nSimplemente aparece en momentos tan normales que uno solo entiende su importancia cuando pasan los años.\n\nQuiero que tengamos muchos momentos así.\nTantos, que un día nos cueste decidir cuál fue nuestro favorito."
    },
    {
        "pageNumber": 187,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Y también quiero decirte algo que quizá no he sabido demostrar del todo.\nAdmiro mucho tus metas.\nMe gusta que tengas sueños.\nQue quieras seguir creciendo.\nQue no te conformes.\n\nVer a alguien luchar por convertirse en una mejor versión de sí mismo siempre me ha parecido algo muy bonito.\nY me emociona imaginar que algún día podré celebrar contigo cada una de esas metas cumplidas.\n\nNo quiero ser alguien que solo aparezca en las fotografías de tus logros.\nQuiero estar en los días donde parezca que las cosas no salen.\nQuiero estar cuando dudes.\nCuando necesites que alguien crea en ti incluso si tú misma estás batallando para hacerlo."
    },
    {
        "pageNumber": 188,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Porque estoy seguro de algo.\nHabrá momentos donde tú me recuerdes de lo que soy capaz.\nY habrá otros donde me tocará recordártelo a ti.\nAsí debería sentirse un equipo.\n\nNo empujándose para ver quién llega primero.\nSino caminando juntos para que ninguno tenga que quedarse atrás.\nY esa palabra me gusta cuando pienso en nosotros.\nEquipo."
    },
    {
        "pageNumber": 189,
        "chapter": 3,
        "isChapterTitlePage": false,
        "content": "Porque no imagino una historia bonita donde uno gane y el otro pierda.\nLa imagino así.\nLos dos aprendiendo.\nLos dos creciendo.\nLos dos equivocándonos.\nLos dos celebrando.\nLos dos encontrando maneras de construir algo que, poco a poco, se vuelva más fuerte.\nNo por la ausencia de problemas."
    },
    {
        "pageNumber": 190,
        "chapter": 4,
        "isChapterTitlePage": true,
        "content": ""
    },
    {
        "pageNumber": 191,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Sino porque aprendimos a enfrentarlos del mismo lado.\n\nY, mientras escribo esto, vuelvo a sentir exactamente lo mismo que al comenzar esta carta.\nUna enorme tranquilidad.\nPorque, aunque todavía no sé todo lo que el futuro tiene preparado para nosotros, hay algo que sí sé con absoluta certeza.\nHoy, en este momento, me hace inmensamente feliz que nuestros caminos se hayan encontrado.\n\nHay momentos en los que me pregunto si el destino existe de verdad.\nNunca he sabido responder esa pregunta.\nHay días en los que pienso que todo ocurre por casualidad.\nOtros en los que siento que algunas personas estaban destinadas a encontrarse, aunque el camino haya sido completamente inesperado."
    },
    {
        "pageNumber": 192,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "No sé cuál de las dos cosas sea cierta.\nY, siendo sincero, tampoco me preocupa demasiado descubrirlo.\nPorque, haya sido casualidad o haya sido destino, el resultado fue el mismo.\nTe conocí.\nY eso es suficiente para mí.\n\nA veces me gusta pensar en todas las versiones de nosotros que nunca llegaron a existir.\nLa versión donde nunca cruzamos una palabra.\nLa versión donde coincidimos una vez y jamás volvimos a vernos.\nLa versión donde nuestras vidas siguieron caminos completamente distintos.\nY, por alguna razón, todas esas posibilidades me hacen valorar muchísimo más la realidad que hoy tenemos."
    },
    {
        "pageNumber": 193,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Porque entre todas las historias que pudieron escribirse, la vida eligió esta.\nLa nuestra.\nY espero que todavía le falten muchísimas páginas.\n\nHay una cosa que aprendí hace tiempo.\nLas personas suelen creer que el amor aparece de golpe.\nComo un relámpago."
    },
    {
        "pageNumber": 194,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Como algo que sucede de un instante para otro.\nYo ya no pienso así.\nCreo que el amor se parece mucho más a un amanecer.\nNo notas exactamente cuándo empieza.\nAl principio todo parece igual.\nDespués aparece un poquito de luz.\nLuego otro poco.\nY, cuando quieres darte cuenta, todo el paisaje cambió sin que hubieras visto el momento exacto en que ocurrió."
    },
    {
        "pageNumber": 195,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Así te fuiste quedando dentro de mí.\nSin hacer ruido.\nSin pedir permiso.\nSin apresurar nada.\nY un día desperté entendiendo que ya no eras solamente alguien importante.\nEras la persona con la que más quería compartir mis días.\n\nHay una imagen que siempre vuelve cuando pienso en ti.\nNo es nuestro primer beso.\nNi un abrazo.\nNi un momento específico.\nEs algo mucho más simple.\nEs tu forma de caminar hacia mí cuando nos vemos."
    },
    {
        "pageNumber": 196,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "No sé por qué.\nPero me encanta ese instante.\nEsos segundos donde todavía hay unos metros entre los dos.\nDonde sé que en muy poco tiempo voy a poder abrazarte.\nSiempre siento algo en el pecho.\nUna mezcla entre emoción y tranquilidad.\nComo cuando alguien está esperando algo que lleva mucho tiempo deseando y, por fin, está ocurriendo.\n\nQuizá por eso nunca me canso de verte llegar.\nPorque cada encuentro tiene esa pequeña magia."
    },
    {
        "pageNumber": 197,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Y espero que nunca desaparezca.\nEspero que incluso dentro de muchos años siga sintiendo esas mismas ganas de caminar hacia ti.\n\nHay personas que dicen que el amor cambia con el tiempo.\nYo creo que sí.\nPero no porque se haga más pequeño.\nCreo que cambia porque deja de ser solamente emoción y empieza a convertirse en elección.\nEn cuidado.\nEn respeto.\nEn paciencia.\nEn compañía."
    },
    {
        "pageNumber": 198,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Y me gusta pensar que, si algún día llegamos a recorrer un camino muy largo juntos, nuestro amor también irá cambiando de esa manera.\nNo perderá intensidad.\nSolo encontrará nuevas formas de existir.\n\nHabrá días donde el mejor \"te quiero\" sea un café preparado antes de que despiertes.\nOtros donde sea esperar en silencio hasta que termines de contarme algo que necesitabas sacar.\nHabrá días donde sea darte un abrazo sin preguntarte qué pasó, porque tus ojos ya me lo habrán contado.\nHabrá otros donde simplemente sea caminar contigo sin necesidad de decir una sola palabra.\n\nY qué bonito sería descubrir todas esas formas nuevas de querernos."
    },
    {
        "pageNumber": 199,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Hay una pregunta que nunca te he hecho.\nNo porque no quiera.\nSimplemente porque creo que algunas respuestas llegan solas con el tiempo.\nMe pregunto cómo te sientes cuando estamos abrazados.\nYo ya te conté lo que pasa conmigo.\nTe dije que el mundo parece quedarse en silencio."
    },
    {
        "pageNumber": 200,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Que el tiempo deja de correr tan rápido.\nQue la cabeza, por fin, descansa.\nPero nunca te he preguntado qué pasa dentro de ti.\nY, aunque algún día seguramente lo haré, hay una parte de mí que disfruta no saberlo todavía.\n\nPorque todavía nos quedan muchas conversaciones pendientes.\nY eso significa que todavía tenemos muchísimo por descubrir.\n\nMe emociona pensar en todas las preguntas que todavía no nos hemos hecho.\n¿Cuál era tu lugar favorito cuando eras niña?\n¿Qué sueño todavía no le has contado a nadie?\n¿Qué miedo escondes detrás de una sonrisa?\n¿Cuál ha sido el día más feliz de tu vida?\n¿Qué canción te hace llorar aunque no quieras admitirlo?"
    },
    {
        "pageNumber": 201,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Quiero conocer todas esas respuestas.\nY también quiero que conozcas las mías.\nQuiero que un día puedas decir que sabes cosas de mí que nadie más sabe.\nNo porque sean secretos.\nSino porque la confianza nos llevó hasta ese lugar.\n\nHay algo que admiro profundamente de las relaciones que duran muchos años.\nNo es que nunca discutan.\nNo es que siempre estén de acuerdo.\nLo que admiro es que siguen teniendo curiosidad por la otra persona.\nSiguen preguntando.\nSiguen escuchando.\nSiguen interesándose."
    },
    {
        "pageNumber": 202,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Eso quiero que nunca perdamos.\nNo quiero dejar de preguntarte cómo te fue aunque crea saber la respuesta.\nNo quiero dejar de escuchar tus historias solo porque ya conozco a los personajes.\nNo quiero dejar de descubrirte."
    },
    {
        "pageNumber": 203,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Porque, mientras exista algo nuevo por aprender de ti, siempre habrá una razón más para seguir enamorándome.\n\nHay otra confesión que quiero hacerte.\nA veces me da miedo ilusionarme tanto.\nY sé que ya te hablé de algunos de mis miedos.\nPero este es diferente.\nNo es miedo a perderte solamente.\nEs miedo a que las expectativas hagan demasiado ruido."
    },
    {
        "pageNumber": 204,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Por eso intento recordarme constantemente algo muy importante.\nNo quiero enamorarme de una idea.\nQuiero enamorarme todos los días de la mujer real que eres.\nCon tus días donde todo sale bien.\nY también con esos donde el cansancio te gana.\nCon tus virtudes.\nY con esas pequeñas imperfecciones que nos hacen humanos.\n\nPorque no quiero construir un amor basado en una versión imaginaria de ti.\nQuiero construirlo contigo.\nCon quien eres de verdad.\nY eso, para mí, tiene muchísimo más valor que cualquier fantasía."
    },
    {
        "pageNumber": 205,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Porque las fantasías terminan.\nLas personas reales permanecen.\n\nY si algún día el tiempo pone algunas canas en nuestro cabello, cambia nuestras rutinas o hace que nuestras manos tengan más marcas que hoy, espero seguir encontrando la misma paz al entrelazar mis dedos con los tuyos.\nEspero seguir sintiendo esa tranquilidad que hoy siento cuando te abrazo.\nEspero seguir mirándote con la misma admiración.\nY, sobre todo, espero que nunca dejemos de elegirnos.\n\nPorque creo que ahí está el verdadero significado de construir una historia.\nNo en prometer que todo será perfecto.\nSino en decidir, una y otra vez, que vale la pena seguir escribiendo la siguiente página... juntos."
    },
    {
        "pageNumber": 206,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Hay una pregunta que me hice hace unos días y todavía sigue dando vueltas en mi cabeza.\n¿Qué fue exactamente lo primero que me enamoró de ti?\nY, por más que lo intento, no logro encontrar una sola respuesta.\n\nPorque sería muy fácil decir que fue tu forma de hablar, o tu manera de pensar, o la tranquilidad que transmites, o la forma en la que me haces sentir cuando estoy contigo.\nPero ninguna de esas respuestas estaría completa.\nCreo que me enamoré de un conjunto de cosas tan pequeñas que sería imposible separarlas.\n\nFue una conversación.\nDespués otra.\nUna sonrisa.\nUna coincidencia.\nUn detalle que probablemente tú ya olvidaste.\nOtro que yo sigo recordando."
    },
    {
        "pageNumber": 207,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Y así, poco a poco, sin darme cuenta, dejaste de ocupar un lugar en mis pensamientos para empezar a ocupar un lugar en mi vida.\n\nHay algo que me gusta mucho de recordar.\nNo porque viva atrapado en el pasado.\nSino porque me encanta descubrir cómo empezaron las cosas.\nA veces regreso mentalmente a nuestras primeras conversaciones y me da mucha ternura pensar que ninguno de los dos sabía hasta dónde iba a llegar todo esto.\n\nÉramos dos personas hablando.\nNada más.\nSin imaginar que, algún tiempo después, uno de nosotros estaría escribiendo decenas de páginas intentando explicar todo lo que siente por el otro.\n\nY me hace sonreír.\nPorque demuestra que las historias importantes casi nunca empiezan haciendo ruido."
    },
    {
        "pageNumber": 208,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Empiezan como empiezan casi todas las cosas bonitas.\nDespacio.\n\nHay veces en las que quisiera verme desde afuera.\nSolo por un momento.\nImaginar que soy otra persona observándonos.\nCreo que me daría cuenta de cosas que normalmente no noto.\n\nNotaría cómo cambia mi cara cuando apareces.\nCómo mi voz se escucha diferente cuando hablo contigo.\nCómo mis ojos te buscan aunque esté distraído.\nCómo mi cuerpo, sin pensarlo, siempre intenta acercarse un poquito más cuando estás cerca."
    },
    {
        "pageNumber": 209,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Hay sentimientos que uno cree esconder muy bien.\nPero estoy casi seguro de que el cuerpo siempre termina confesándolos.\nPorque el cariño tiene esa costumbre.\nSe escapa por las miradas.\nPor las sonrisas.\nPor la forma en la que alguien pronuncia un nombre.\nPor los pequeños gestos que uno hace sin darse cuenta.\n\nY si alguien me observara contigo, creo que descubriría muy rápido lo mucho que significas para mí."
    },
    {
        "pageNumber": 210,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Hay una cosa que admiro profundamente de los abrazos.\nNunca preguntan.\nNunca interrumpen.\nNunca juzgan.\nSimplemente están.\n\nY creo que esa es una de las razones por las que me gustan tanto los tuyos.\nPorque, cuando me abrazas, no siento que tengas expectativas sobre mí.\nNo importa si ese día fui fuerte o si estuve confundido.\nNo importa si tuve un buen día o uno complicado.\nEn ese momento no hace falta explicar absolutamente nada.\nSolo estamos tú y yo."
    },
    {
        "pageNumber": 211,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Y, aunque dure apenas unos segundos, siempre siento que esos segundos tienen un peso enorme.\n\nHay personas que creen que el tiempo se mide con relojes.\nYo creo que también se mide con momentos.\nPorque hay cinco minutos que parecen eternos.\nY hay horas completas que se pasan volando.\nContigo siempre ocurre lo segundo.\n\nNunca entiendo cómo se va tan rápido el tiempo cuando estoy a tu lado.\nEs casi injusto.\nUno espera tanto para poder verte.\nY, cuando por fin sucede, el reloj parece ponerse de acuerdo para avanzar más rápido que nunca."
    },
    {
        "pageNumber": 212,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "A veces quisiera detenerlo.\nNo para vivir siempre el mismo instante.\nSolo para regalarle unos minutos más a cada abrazo.\nA cada conversación.\nA cada mirada.\n\nPorque nunca siento que me sobre el tiempo contigo.\nSiempre siento que todavía falta un poquito más.\nQuizá por eso las despedidas nunca me gustan.\nNo porque sean tristes.\nSino porque siempre me dejan con esa sensación de que todavía tenía muchas cosas por decirte."
    },
    {
        "pageNumber": 213,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Muchas veces me despido de ti.\nEmpiezo a caminar.\nY, mientras voy de regreso, recuerdo algo que quería contarte y olvidé por completo.\nEntonces me río solo.\nY pienso:\n\"Se lo diré la próxima vez.\"\nLo curioso es que, cuando esa próxima vez llega..."
    },
    {
        "pageNumber": 214,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Vuelvo a olvidarlo.\nPorque verte siempre consigue desordenar todas las listas que llevaba preparadas dentro de mi cabeza.\nY, sinceramente...\nMe encanta que pase.\n\nPorque significa que contigo todo es mucho más espontáneo de lo que imaginé.\nNo necesito tener un plan.\nNo necesito preparar conversaciones perfectas.\nNo necesito impresionar.\nSolo necesito estar.\nY esa sensación de libertad es algo que agradezco muchísimo."
    },
    {
        "pageNumber": 215,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Hay otra cosa que jamás quisiera perder.\nLa capacidad de admirarte.\nPorque creo que muchas personas confunden el paso del tiempo con dejar de observar.\nEmpiezan a creer que ya conocen completamente a la otra persona.\nY dejan de sorprenderse.\n\nYo quiero hacer exactamente lo contrario.\nQuiero seguir encontrando cosas nuevas en ti.\nSeguir descubriendo pequeños detalles.\nSeguir escuchando tus ideas con la misma atención.\nSeguir emocionándome cuando me cuentes algún sueño nuevo.\nSeguir sintiendo orgullo cada vez que logres algo importante para ti."
    },
    {
        "pageNumber": 216,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Porque enamorarse una sola vez sería muy poco.\nMe gustaría tener la suerte de enamorarme de ti muchas veces.\nDe distintas maneras.\nEn distintas etapas.\nCon distintas versiones de nosotros.\nY que cada una tenga algo diferente que enseñarnos.\n\nHay ocasiones en las que imagino que esta carta termina llegando a tus manos después de mucho tiempo."
    },
    {
        "pageNumber": 217,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Quizá una tarde cualquiera.\nQuizá cuando menos lo esperes.\nY me gusta pensar en el momento en que empieces a leer.\n\nImagino que al principio vas a sonreír.\nDespués quizá te preguntes por qué escribí tanto.\nLuego empezarás a reconocer pequeños momentos que solamente nosotros entendemos.\nY, poco a poco, dejarás de estar leyendo una carta para empezar a recorrer nuestra historia.\n\nEso me emociona.\nPorque, más allá de todas estas palabras, lo que realmente quiero regalarte es un lugar al que puedas volver cada vez que tengas dudas sobre cuánto significas para mí."
    },
    {
        "pageNumber": 218,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Quiero que esta carta se convierta en un abrazo cuando yo no pueda estar contigo.\nEn una conversación cuando me extrañes.\nEn un recordatorio de todo lo bonito que siento por ti.\nY, sobre todo, en una prueba de que hubo un día donde alguien decidió sentarse durante horas, abrir completamente el corazón y escribir, sin miedo y sin esconder absolutamente nada, todo aquello que normalmente parecía imposible decir en voz alta."
    },
    {
        "pageNumber": 219,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Hay algo que nunca he entendido del todo.\n¿Por qué algunas personas tienen la capacidad de hacernos sentir en casa, incluso cuando estamos en un lugar completamente desconocido?\nHe pensado mucho en eso.\nY creo que la respuesta nunca ha tenido que ver con el lugar.\nTiene que ver con quién está a tu lado.\n\nPorque, si soy completamente sincero, no recuerdo cada rincón de los lugares donde hemos estado.\nLo que recuerdo es cómo me sentía.\nY eso cambia todo."
    },
    {
        "pageNumber": 220,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Puedo olvidar el color de una banca.\nLa hora exacta.\nLa ropa que llevaba puesta.\nPero jamás olvido la tranquilidad que sentía cuando estabas conmigo.\n\nEs curioso cómo la memoria funciona.\nNo guarda únicamente imágenes.\nTambién guarda emociones.\nY tú apareces en muchísimas de las emociones bonitas que llevo dentro."
    },
    {
        "pageNumber": 221,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Hay días en los que la vida parece ir demasiado rápido.\nLas responsabilidades.\nLos pendientes.\nLas preocupaciones.\nTodo ocurre al mismo tiempo.\nY uno termina sintiendo que apenas está sobreviviendo a la rutina."
    },
    {
        "pageNumber": 222,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Pero entonces apareces tú.\nY, aunque sea por un rato, todo vuelve a tener otro ritmo.\nEs como si alguien bajara el volumen del mundo.\nNo desaparecen los problemas.\nNo desaparecen las obligaciones.\nPero dejan de ocupar todo el espacio dentro de mi cabeza.\nY eso es un regalo enorme.\n\nPorque descansar no siempre significa dormir.\nA veces descansar significa llegar a una persona con la que ya no tienes que fingir que todo está bien."
    },
    {
        "pageNumber": 223,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Contigo siento que puedo ser completamente yo.\nSin intentar parecer más fuerte.\nMás interesante.\nMás divertido.\nMás seguro.\nSimplemente yo.\nY no sabes la paz que da sentirse aceptado sin tener que actuar."
    },
    {
        "pageNumber": 224,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Vivimos rodeados de personas que, muchas veces sin querer, esperan una versión específica de nosotros.\nQue siempre estemos bien.\nQue siempre tengamos una respuesta.\nQue siempre podamos con todo.\nTú nunca me has hecho sentir eso.\nNunca."
    },
    {
        "pageNumber": 225,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Y quizá por eso contigo respiro diferente.\nPorque no siento que tenga que demostrarte nada.\nSolo compartir quien soy.\nCon mis días buenos.\nCon mis días complicados.\nCon mis aciertos.\nY también con mis errores.\n\nPorque, si algún día esta historia sigue creciendo, quiero que sea una historia donde ambos podamos ser auténticos.\nNo perfectos.\nAuténticos."
    },
    {
        "pageNumber": 226,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Hay una imagen que siempre me ha gustado.\nImaginar dos árboles creciendo uno al lado del otro.\nNo compiten por ver cuál crece más rápido.\nNo intentan quitarse la luz.\nNo buscan ocupar el lugar del otro.\nSimplemente crecen.\nCada uno con sus propias raíces.\nPero compartiendo el mismo cielo."
    },
    {
        "pageNumber": 227,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Me gusta pensar que así debería sentirse una relación.\nNo como dos personas que dejan de existir para convertirse en una sola.\nSino como dos personas completas que deciden caminar juntas.\nQue respetan los sueños del otro.\nQue celebran los logros del otro."
    },
    {
        "pageNumber": 228,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Que están presentes incluso cuando el camino se vuelve difícil.\nEso quiero construir contigo.\nAlgo donde ninguno tenga que hacerse pequeño para que el otro brille.\nPorque tu luz nunca va a apagar la mía.\nY espero que la mía tampoco intente apagar la tuya.\n\nQuiero admirarte.\nQuiero impulsarte.\nQuiero aplaudirte.\nY quiero sentir que tú también puedes hacer lo mismo conmigo."
    },
    {
        "pageNumber": 229,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Hay veces en las que me imagino acompañándote en momentos importantes de tu vida.\nNo necesariamente en los más grandes.\nTambién en los pequeños.\nEsperarte mientras sales de algún lugar.\nEscuchar cómo te fue.\nCelebrar contigo una buena noticia.\nPrepararte algo cuando estés cansada.\nMandarte un mensaje solamente para hacerte sonreír en medio de un día pesado.\nRecordarte que estoy orgulloso de ti aunque tú sientas que todavía te falta mucho por lograr.\n\nPorque creo que el amor también vive ahí.\nEn todas esas cosas que parecen normales.\nPero que, cuando alguien las hace con el corazón, terminan significando muchísimo."
    },
    {
        "pageNumber": 230,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Hay una palabra que últimamente aparece mucho en mi cabeza.\nRefugio.\nPorque eso es lo que siento cuando pienso en ti.\nNo un lugar donde esconderme del mundo.\nSino un lugar donde puedo recuperar fuerzas para volver a enfrentarlo."
    },
    {
        "pageNumber": 231,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Y me encantaría que, si algún día la vida pesa demasiado sobre tus hombros, tú también puedas encontrar ese refugio en mí.\nNo quiero ser quien resuelva todos tus problemas.\nSería imposible.\nQuiero ser quien te recuerde que no tienes que enfrentarlos sola.\n\nCreo que existe una diferencia enorme entre salvar a alguien y acompañarlo.\nYo no quiero salvarte.\nQuiero caminar contigo.\nPorque sé que tú también tienes tu propia fuerza.\nTu propia manera de salir adelante.\nY eso es precisamente lo que admiro."
    },
    {
        "pageNumber": 232,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Hay algo que me emociona muchísimo.\nPensar en todas las conversaciones que todavía no hemos tenido.\nPorque siento que contigo siempre hay algo nuevo de qué hablar.\nPodemos pasar de un tema profundo a una tontería en cuestión de segundos.\nY, de alguna manera, todo tiene sentido.\n\nMe gusta esa facilidad.\nMe gusta que no tengamos que esforzarnos para mantener viva una conversación.\nPorque nunca siento que hablamos por compromiso.\nHablamos porque realmente queremos seguir conociéndonos.\nY espero que eso nunca cambie."
    },
    {
        "pageNumber": 233,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Que incluso cuando pasen los años, sigamos haciéndonos preguntas.\nSigamos riéndonos de cosas absurdas.\nSigamos compartiendo nuestros días como si todavía estuviéramos descubriendo un universo nuevo en la otra persona.\n\nPorque, siendo sincero, creo que una persona nunca termina de conocerse por completo.\nSiempre estamos cambiando.\nSiempre estamos aprendiendo.\nSiempre estamos creciendo."
    },
    {
        "pageNumber": 234,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Y eso significa que siempre habrá una nueva versión tuya de la que podré volver a enamorarme.\n\nHay noches en las que antes de dormir pienso en todo lo que ha pasado desde que llegaste.\nY me doy cuenta de algo muy sencillo.\nMi vida no se volvió perfecta.\nSigue habiendo días difíciles.\nSigue habiendo preocupaciones.\nSigue habiendo momentos donde me siento cansado o confundido.\nPero ahora existe una diferencia enorme.\nHay alguien cuya existencia hace que todo eso sea más llevadero."
    },
    {
        "pageNumber": 235,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Y esa diferencia cambia por completo la manera en la que enfrento cada día.\nPorque, aunque el camino siga teniendo obstáculos, ahora sé que hay una persona cuya sola presencia es capaz de recordarme que todavía existen muchísimas razones para sonreír.\n\nY, mientras escribo estas líneas, me doy cuenta de algo que quizá resume todo lo que llevo intentando decir desde la primera página.\nNo fue solamente que me enamoré de ti.\nFue que, sin buscarlo, encontré en ti una forma mucho más bonita de vivir mis propios días."
    },
    {
        "pageNumber": 236,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Y por eso, cada vez que pienso en el futuro, no imagino un camino perfecto.\nImagino un camino real.\nCon días buenos.\nCon días complicados.\nCon risas.\nCon silencios.\nCon abrazos.\nCon aprendizajes.\nY, sobre todo, contigo caminando a mi lado.\n\nPorque, si algo he aprendido desde que llegaste, es que no necesito que la vida sea extraordinaria todos los días."
    },
    {
        "pageNumber": 237,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Me basta con que, al final de cada uno de ellos, todavía pueda seguir encontrándote a ti.\n\nHay veces en las que intento imaginar cómo me describirías si alguien te preguntara por mí.\nY la verdad es que esa idea me da un poco de risa.\nPorque sé que no soy una persona fácil de entender.\nMuchas veces parezco más serio de lo que realmente soy.\nA veces me quedo callado cuando en realidad tengo mil cosas pasando por la cabeza.\nHay días en los que me cuesta expresar exactamente lo que siento, no porque no exista, sino porque encontrar las palabras correctas nunca ha sido mi mayor talento."
    },
    {
        "pageNumber": 238,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Quizá por eso terminé escribiendo una carta tan larga.\nPorque aquí no tengo prisa.\nAquí puedo borrar una idea, volver a escribirla, cambiar una palabra por otra y seguir intentando hasta que lo que lees se parezca, aunque sea un poquito, a todo lo que llevo dentro.\n\nY aun así siento que me sigo quedando corto.\nPorque hay emociones que parecen hechas para sentirse, no para explicarse."
    },
    {
        "pageNumber": 239,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Si alguna vez me hubieras conocido únicamente por cómo soy con el resto del mundo, probablemente jamás habrías imaginado la cantidad de ternura que soy capaz de sentir por ti.\nY no te culparía.\nYo mismo me habría sorprendido.\nPorque existe una versión de mí que aprendió a protegerse.\nA no mostrar demasiado.\nA guardar silencio cuando algo dolía.\nA resolver las cosas solo.\n\nY luego apareciste tú.\nNo llegaste exigiéndome que cambiara.\nNo intentaste abrir puertas a la fuerza."
    },
    {
        "pageNumber": 240,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Simplemente tuviste paciencia.\nY, poco a poco, sin que ninguno de los dos lo notara, empecé a bajar esas barreras que llevaba tanto tiempo construyendo.\nEso es algo que siempre voy a agradecerte.\n\nPorque abrir el corazón da miedo.\nMuchísimo.\nNunca sabes qué va a pasar cuando alguien entra.\nNunca sabes si cuidará lo que encuentre o si algún día decidirá irse dejando todo desordenado.\nY aun con ese miedo...\nContigo sentí que valía la pena intentarlo."
    },
    {
        "pageNumber": 241,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Hay personas que llegan a tu vida para enseñarte algo.\nCreo que tú me enseñaste que querer a alguien no significa dejar de ser uno mismo.\nAntes pensaba que amar implicaba renunciar a ciertas partes de uno.\nAhora entiendo que el amor sano hace exactamente lo contrario.\nTe permite ser más tú.\nPorque te sientes seguro.\nPorque sabes que no tienes que fingir.\nPorque encuentras un lugar donde tus defectos no son una sentencia, sino una parte más de quien eres.\n\nY eso cambia muchas cosas.\nNo sabes cuánto."
    },
    {
        "pageNumber": 242,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Hay algo que nunca quisiera que dejaras de hacer.\nMirarme como lo haces.\nNo sé si eres consciente de ello, pero hay momentos en los que tus ojos dicen muchísimo antes de que pronuncies una sola palabra.\nY yo me pierdo ahí.\nPorque hay miradas que simplemente observan.\nLas tuyas parecen escuchar.\nParecen abrazar."
    },
    {
        "pageNumber": 243,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Parecen decir: \"Estoy aquí.\"\nY quizá por eso me gustan tanto.\nPorque incluso cuando ninguno habla, siento que seguimos comunicándonos.\n\nHay un tipo de felicidad del que casi nadie habla.\nNo es la felicidad de las grandes noticias.\nNi la de los viajes.\nNi la de los momentos extraordinarios.\nEs una felicidad mucho más silenciosa.\nLa de sentirte exactamente donde quieres estar."
    },
    {
        "pageNumber": 244,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Eso me pasa contigo.\nNo necesito que ocurra algo espectacular para sentirme feliz.\nMuchas veces basta con sentarme a tu lado.\nEscuchar cómo transcurre una conversación cualquiera.\nCaminar sin rumbo.\nO simplemente saber que estás cerca.\n\nEs una felicidad tranquila.\nY creo que, con el paso del tiempo, esa termina siendo la más valiosa.\nPorque es la que permanece.\n\nHay ocasiones en las que imagino que, dentro de muchos años, alguien nos pregunta cuál fue el secreto para seguir juntos.\nY me gustaría responder algo muy sencillo.\n\"Nunca dejamos de tratarnos con cariño.\""
    },
    {
        "pageNumber": 245,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Porque pienso que ahí está gran parte de todo.\nEn no dejar que la costumbre nos vuelva indiferentes.\nEn seguir agradeciendo los pequeños detalles.\nEn seguir diciendo \"gracias\".\n\"Perdón.\"\n\"¿Cómo estás?\"\n\"¿Necesitas algo?\"\nPalabras tan simples...\nY, sin embargo, capaces de sostener una relación durante muchísimo tiempo."
    },
    {
        "pageNumber": 246,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Quiero que nunca perdamos esas pequeñas atenciones.\nQuiero seguir preguntándote cómo estuvo tu día aunque crea saber la respuesta.\nQuiero seguir escuchando tus historias con la misma curiosidad.\nQuiero seguir celebrando tus logros como si fueran también un poquito míos.\nPorque cuando alguien ama de verdad, la felicidad del otro también empieza a sentirse propia.\nY eso me parece precioso."
    },
    {
        "pageNumber": 247,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "A veces me da miedo que un día leas esta carta y pienses que exageré demasiado.\nQue puse demasiadas palabras donde bastaban unas cuantas.\nPero luego recuerdo algo.\nEl amor nunca ha sido un lugar donde existan medidas exactas.\nNo hay una cantidad correcta de abrazos.\nNo hay un número adecuado de veces para decir \"te extraño\".\nNo existe una regla que diga cuántas páginas merece alguien.\nY, si alguna vez dudé entre escribir una hoja o escribir cien, creo que ya sabes cuál fue mi decisión.\n\nPorque preferí correr el riesgo de decir demasiado antes que vivir con la sensación de haber callado algo importante."
    },
    {
        "pageNumber": 248,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Quiero que, si algún día vuelves a esta carta después de mucho tiempo, puedas sentir que cada página conserva exactamente la misma intención con la que nació.\nQue no fue escrita por obligación.\nNi por costumbre.\nNi porque fuera una fecha especial.\nFue escrita porque un día me senté, pensé en ti y entendí que el corazón llevaba demasiado tiempo queriendo hablar.\nAsí de simple.\nY así de sincero.\n\nHay una frase que llevo varias páginas evitando escribir porque sentía que todavía no era el momento."
    },
    {
        "pageNumber": 249,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Creo que ahora sí lo es.\nGracias.\nNo solamente por llegar.\nGracias por quedarte.\nGracias por hacer espacio para mí en tu vida.\nGracias por permitirme conocerte un poco más cada día.\nGracias por confiar.\nGracias por escuchar.\nGracias por abrazarme con esa calma que parece arreglar el ruido del mundo.\nGracias por aparecer en una etapa de mi vida donde ya no esperaba encontrar algo tan bonito.\n\nY, sobre todo...\nGracias por demostrarme que todavía existen personas capaces de querer sin hacer sentir miedo."
    },
    {
        "pageNumber": 250,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Eso vale más de lo que cualquier carta podría explicar.\nY quizá ese sea el mayor regalo que me has dado.\nNo solamente tu cariño.\nSino la tranquilidad de descubrir que amar también puede sentirse como respirar profundo después de haber contenido el aire durante demasiado tiempo.\n\nDesde que llegaste, esa sensación se volvió parte de mis días.\nY, sinceramente...\nEspero que nunca deje de ser así.\n\nA veces me pregunto si tú eres consciente del efecto que tienes en mi vida.\nY creo que la respuesta es no.\nNo porque seas distraída.\nSino porque las personas casi nunca alcanzan a dimensionar lo que provocan en el corazón de alguien más."
    },
    {
        "pageNumber": 251,
        "chapter": 4,
        "isChapterTitlePage": false,
        "content": "Tú probablemente piensas que solo me abrazas.\nYo siento que durante unos segundos el mundo entero deja de empujarme.\nTú probablemente piensas que solo me preguntas cómo estuvo mi día."
    },
    {
        "pageNumber": 252,
        "chapter": 5,
        "isChapterTitlePage": true,
        "content": ""
    },
    {
        "pageNumber": 253,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Yo siento que hay alguien que realmente quiere saber cómo estoy, más allá de la respuesta rápida que normalmente le damos a todos.\nTú probablemente piensas que solo sonríes.\nY yo siento que, por alguna razón, el día acaba de mejorar.\n\nEs curioso cómo una misma acción puede significar cosas completamente distintas dependiendo de quién venga.\nPorque estoy seguro de que muchas personas me han preguntado cómo estoy.\nMuchas personas me han sonreído.\nMuchas personas me han abrazado.\nPero ninguna de esas cosas se sintió igual.\nPorque eras tú quien faltaba.\n\nY ahora que estás aquí, entiendo que no siempre es el gesto lo que cambia las cosas.\nEs la persona."
    },
    {
        "pageNumber": 254,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay una costumbre que tengo desde hace tiempo.\nObservar.\nSiempre me ha gustado fijarme en detalles que la mayoría deja pasar.\nNo sé por qué.\nTal vez porque siento que las personas dicen mucho más con lo que hacen que con lo que hablan.\nY contigo pasa exactamente eso."
    },
    {
        "pageNumber": 255,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "He aprendido muchísimo de ti sin necesidad de que me lo expliques.\nHe visto la forma en que tratas a las personas.\nLa manera en que piensas antes de actuar.\nCómo intentas resolver las cosas.\nCómo cuidas.\nCómo escuchas.\nY cada uno de esos pequeños detalles fue haciendo que la admiración creciera poco a poco.\n\nPorque el amor puede nacer de muchas maneras.\nPero la admiración..."
    },
    {
        "pageNumber": 256,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "La admiración se construye.\nY tú la construyes todos los días sin siquiera darte cuenta.\n\nHay algo que nunca quisiera perder.\nLa capacidad de seguir aprendiendo de ti.\nPorque siento que todavía tienes muchísimas cosas por enseñarme.\nNo en una escuela.\nNo en un libro.\nSino en la vida.\nEn la forma de enfrentar ciertas situaciones.\nEn la manera de ver algunas cosas.\nEn esa tranquilidad que transmites cuando parece que todo está desordenado."
    },
    {
        "pageNumber": 257,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay personas que enseñan hablando.\nY otras que enseñan simplemente siendo quienes son.\nTú perteneces a las segundas.\nY creo que eso tiene muchísimo mérito.\nPorque no intentas convencer a nadie de nada.\nSolo eres tú.\nY, sin darte cuenta, inspiras.\n\nHay días en los que me descubro pensando en cosas que todavía no han ocurrido.\nNo porque quiera vivir en el futuro.\nSino porque me hace ilusión imaginarlo.\nImagino un día cualquiera donde alguno de los dos tenga una noticia importante.\nY el primero al que quiera correr a contársela sea el otro."
    },
    {
        "pageNumber": 258,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Imagino esas llamadas que empiezan con un:\n\"¿Estás ocupado? Necesito contarte algo.\"\nImagino esos mensajes largos donde uno intenta explicar una emoción que apenas acaba de sentir.\nImagino celebraciones pequeñas.\nFracasos compartidos.\nMetas cumplidas."
    },
    {
        "pageNumber": 259,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Planes que cambian sobre la marcha.\nY, en todos ellos, me gusta imaginarte ahí.\n\nPorque ya no pienso en el futuro únicamente como algo que me pertenece.\nEmpiezo a imaginarlo como un lugar donde ojalá también estés tú.\nY eso es completamente nuevo para mí.\nNunca antes había incluido a alguien con tanta naturalidad en mis pensamientos sobre el mañana.\n\nNo fue una decisión.\nSimplemente ocurrió.\nY, cuando me di cuenta, ya era demasiado tarde para evitarlo.\nPorque ya te habías convertido en parte de los planes que todavía ni siquiera existen."
    },
    {
        "pageNumber": 260,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay algo que me parece hermoso del paso del tiempo.\nNos obliga a descubrir si aquello que sentimos era solo emoción o si realmente tenía raíces.\nLas emociones intensas aparecen muy rápido.\nPero también pueden desaparecer igual de rápido.\nLo que permanece...\nEso es diferente.\nEso necesita tiempo."
    },
    {
        "pageNumber": 261,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Y, mientras más pasa, más tranquilo me siento.\nPorque, en lugar de disminuir, todo lo que siento por ti parece encontrar maneras nuevas de crecer.\nNo haciendo ruido.\nNo volviéndose exagerado.\nSimplemente haciéndose más profundo.\nMás estable.\nMás sereno.\nComo un río que ya no necesita correr con fuerza porque sabe perfectamente hacia dónde va.\nY me gusta esa sensación."
    },
    {
        "pageNumber": 262,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Porque significa que no estoy viviendo solamente un momento bonito.\nEstoy construyendo algo que, ojalá, tenga la oportunidad de durar muchísimo.\n\nSi algún día llegamos a discutir, porque seguramente pasará alguna vez, quiero que nunca olvidemos algo.\nNunca seremos enemigos.\nPodremos estar molestos.\nConfundidos.\nCansados.\nPero nunca deberíamos olvidar que estamos del mismo lado.\nPorque discutir no significa dejar de querer.\nSignifica que dos personas distintas están intentando entenderse.\nY creo que esa diferencia es importante."
    },
    {
        "pageNumber": 263,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "No quiero una relación donde nunca existan desacuerdos.\nQuiero una donde siempre exista respeto.\nDonde las palabras no se usen para herir.\nDonde el orgullo no gane.\nDonde pedir perdón no se sienta como perder.\nY donde escuchar sea tan importante como hablar.\n\nSi logramos cuidar eso, estoy seguro de que podremos superar muchísimas cosas.\nPorque el amor, por sí solo, no resuelve todos los problemas.\nPero el amor acompañado de respeto, paciencia y voluntad... puede construir cosas realmente increíbles."
    },
    {
        "pageNumber": 264,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay veces en las que cierro los ojos e intento imaginar cuál será el recuerdo que primero vendrá a mi mente cuando sea muy viejo.\nNo sé cuál será.\nPero me gustaría pensar que, entre todos los recuerdos que habré acumulado, aparecerá uno donde estés tú.\nQuizá un abrazo.\nQuizá una conversación.\nQuizá una tarde cualquiera."
    },
    {
        "pageNumber": 265,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Y sonreiré igual que sonrío ahora mientras escribo estas líneas.\nPorque hay personas que pasan por nuestra vida.\nY hay otras que terminan formando parte de nuestra historia para siempre.\n\nDesde hace mucho dejé de preguntarme a cuál de esos dos lugares perteneces.\nPorque, sin darme cuenta, ya encontraste el tuyo.\nY es un lugar del que, sinceramente, no quisiera que te fueras nunca.\n\nAsí que, mientras el tiempo siga avanzando y nosotros sigamos escribiendo nuevas páginas de esta historia, quiero hacer algo muy sencillo.\nSeguir eligiéndote.\nNo solamente en los días fáciles.\nTambién en los complicados.\nNo solamente cuando todo salga exactamente como imaginamos.\nTambién cuando tengamos que improvisar."
    },
    {
        "pageNumber": 266,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Porque creo que el amor más bonito no es el que nunca encuentra obstáculos.\nEs el que, aun encontrándolos, sigue tomando la mano de la otra persona y dice, con una tranquilidad inmensa:\n\"Vamos... todavía nos queda mucho camino por recorrer juntos.\"\n\nY mientras releo algunas de estas páginas, me doy cuenta de algo que me hace sonreír.\nEn ningún momento intenté convencerte de quererme.\nY creo que eso también dice mucho de lo que siento.\nPorque el amor, cuando es sincero, no necesita venderse.\nNo necesita adornarse para parecer más bonito.\nNo necesita me prometer imposibles.\nSolo necesita ser honesto."
    },
    {
        "pageNumber": 267,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Y eso es lo único que he intentado hacer desde la primera palabra de esta carta.\nSer completamente honesto contigo.\nPuede que algunas frases no sean perfectas.\nPuede que algún pensamiento haya quedado desordenado.\nPuede que en algún momento haya repetido una emoción con palabras distintas."
    },
    {
        "pageNumber": 268,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Pero así funciona un corazón cuando habla durante horas.\nVuelve sobre las mismas personas.\nSobre los mismos recuerdos.\nSobre las mismas emociones.\nNo porque no tenga nada nuevo que decir.\nSino porque hay sentimientos tan grandes que uno nunca termina de explicarlos del todo."
    },
    {
        "pageNumber": 269,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay una imagen que siempre me ha parecido bonita.\nPensar que cada persona es como una casa.\nNo por cómo se ve desde afuera.\nSino por todo lo que guarda dentro.\nHay habitaciones que cualquiera puede conocer.\nOtras permanecen cerradas durante años.\nY algunas solo se abren cuando llega alguien que inspira la suficiente confianza."
    },
    {
        "pageNumber": 270,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Tú has ido entrando poco a poco en muchas de esas habitaciones que durante mucho tiempo mantuve cerradas.\nNo lo hiciste empujando la puerta.\nNo exigiste respuestas.\nNo me hiciste sentir presionado.\nSimplemente esperaste.\nY un día me di cuenta de que ya no tenía miedo de dejarte entrar.\n\nEso, aunque parezca sencillo, ha significado muchísimo para mí.\nPorque confiar es una de las cosas más difíciles que he aprendido en la vida.\nY contigo ha sido sorprendentemente natural.\nNo porque seas perfecta.\nSino porque me haces sentir seguro."
    },
    {
        "pageNumber": 271,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Y la seguridad no siempre nace de las promesas.\nMuchas veces nace de los pequeños actos que se repiten una y otra vez.\nDe cumplir lo que dices.\nDe estar cuando puedes.\nDe escuchar sin juzgar."
    },
    {
        "pageNumber": 272,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "De demostrar con acciones lo que las palabras intentan explicar.\nEso es lo que tú has hecho.\nY quizá por eso mi corazón decidió bajar la guardia.\n\nHay una cosa que me encanta imaginar.\nQue dentro de muchos años podamos recordar esta etapa y reírnos de lo nerviosos que quizá éramos.\nDe las veces que buscábamos cualquier excusa para vernos.\nDe los abrazos que parecían durar muy poco.\nDe las despedidas donde siempre había un \"espérate tantito más\".\n\nMe gustaría que nunca perdiéramos esa capacidad de recordar con cariño nuestros comienzos.\nPorque, aunque el tiempo nos regale nuevas experiencias, nunca quiero olvidar la emoción de estas primeras páginas de nuestra historia."
    },
    {
        "pageNumber": 273,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay personas que creen que el romance desaparece cuando la relación madura.\nYo no quiero que eso nos pase.\nQuiero seguir invitándote a caminar sin necesidad de una fecha especial.\nQuiero seguir escribiéndote alguna carta de vez en cuando.\nQuiero seguir sorprendiéndome con la forma en que sonríes.\nQuiero seguir sintiendo esas ganas de abrazarte cuando te vea después de varios días.\n\nNo quiero que el amor se convierta únicamente en una costumbre.\nQuiero que también siga siendo una elección consciente.\nUna decisión que tomemos una y otra vez.\nPorque las cosas más valiosas de la vida no permanecen bonitas por accidente.\nPermanecen bonitas porque alguien decidió seguir cuidándolas."
    },
    {
        "pageNumber": 274,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Y yo quiero cuidar esto.\nCon paciencia.\nCon detalles.\nCon conversaciones incómodas cuando sean necesarias.\nCon risas cuando sobren.\nCon silencios cuando hagan falta."
    },
    {
        "pageNumber": 275,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Con abrazos cuando las palabras ya no alcancen.\n\nHay una parte de mí que siente muchísima curiosidad por descubrir quiénes seremos dentro de algunos años.\nPorque estoy seguro de que vamos a cambiar.\nLa vida siempre cambia a las personas.\nAprenderemos cosas nuevas.\nSuperaremos otras.\nQuizá aparezcan responsabilidades que hoy ni siquiera imaginamos.\nTal vez cambien nuestros gustos.\nNuestros horarios.\nNuestros planes."
    },
    {
        "pageNumber": 276,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Pero hay algo que espero que nunca cambie.\nLa forma en la que decidimos mirarnos.\nPorque una mirada puede decir muchísimo sobre una relación.\nY yo quiero seguir mirándote con la misma admiración que siento hoy.\nQuiero seguir viendo en ti a esa mujer que me inspira tranquilidad.\nQue me hace querer ser una mejor persona.\nQue consigue que incluso los días comunes tengan algo especial."
    },
    {
        "pageNumber": 277,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay ocasiones en las que me da miedo que la vida sea demasiado rápida.\nQue un día despertemos y hayan pasado meses sin darnos cuenta.\nO años.\nPor eso quiero aprender a vivir despacio contigo.\nA celebrar los martes normales.\nLos miércoles aburridos.\nLos domingos tranquilos.\nPorque la mayor parte de nuestra historia no estará hecha de fechas importantes.\nEstará hecha de días comunes.\nY si logramos hacer bonitos esos días, creo que habremos encontrado uno de los mayores secretos de la felicidad.\n\nNo quiero esperar a que llegue un viaje para sentir que somos felices."
    },
    {
        "pageNumber": 278,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "No quiero necesitar un acontecimiento enorme para abrazarte con emoción.\nQuiero que un café compartido, una caminata sin rumbo o una conversación antes de dormir también sean suficientes para hacernos sonreír.\nPorque ahí, en lo cotidiano, es donde realmente vive el amor.\n\nHay algo que nunca quisiera dejar de decirte.\nEstoy orgulloso de ti.\nNo solamente cuando logres algo grande.\nTambién cuando, a pesar del cansancio, decidas seguir adelante.\nPorque muchas veces el esfuerzo pasa desapercibido.\nTodos aplauden el resultado.\nMuy pocos reconocen todo lo que hubo detrás.\nYo quiero reconocer ambas cosas.\nQuiero celebrar el camino tanto como la meta."
    },
    {
        "pageNumber": 279,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Quiero recordarte lo valiosa que eres incluso esos días donde tú misma lo olvides por un momento.\nPorque estoy seguro de que habrá ocasiones donde me dudes de ti.\nY cuando eso pase, espero poder prestarte un poquito de la confianza que yo tengo en ti hasta que vuelvas a encontrar la tuya.\nEso también es acompañar.\nY eso también quiero hacerlo contigo."
    },
    {
        "pageNumber": 280,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "A veces pienso que esta carta, en realidad, no habla solamente del amor que siento por ti.\nTambién habla de la persona en la que me convierto cuando estoy contigo.\nPorque contigo descubrí una versión de mí que no conocía.\nUna versión que habla más de lo que imaginaba.\nQue escribe páginas enteras sin cansarse.\nQue encuentra belleza en detalles que antes pasaban desapercibidos.\nQue volvió a ilusionarse.\nQue volvió a esperar con emoción un encuentro.\nQue volvió a creer que todavía quedaban historias capaces de cambiarte la vida.\n\nY, sinceramente..."
    },
    {
        "pageNumber": 281,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Me gusta mucho esa versión de mí.\nPero no porque sea mejor.\nSino porque apareció gracias a ti.\nY eso hace que la valore todavía más.\n\nAsí que, si algún día alguien me preguntara qué fue lo más bonito que trajiste a mi vida, probablemente no respondería con una sola palabra.\nDiría que me regalaste algo mucho más difícil de encontrar.\nMe regalaste la tranquilidad de sentir que podía volver a abrir el corazón sin miedo.\nY créeme...\nEse regalo vale muchísimo más de lo que cualquier carta, por larga que sea, podrá explicar alguna vez."
    },
    {
        "pageNumber": 282,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay una idea que me acompaña desde hace varias páginas y, por alguna razón, siempre la dejo para después.\nQuizá porque sabía que todavía no encontraba la forma correcta de decirla.\nNo quiero que esta carta sea un ideal imposible.\nNo quiero que algún día la leas y sientas que espero que todo sea perfecto entre nosotros.\nPorque no es así."
    },
    {
        "pageNumber": 283,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "De hecho, una de las cosas que más deseo es que, cuando la vida nos ponga a prueba, podamos seguir reconociéndonos incluso en medio del cansancio.\nQue no olvidemos quiénes somos cuando estemos molestos.\nQue no dejemos que una discusión borre cien momentos bonitos.\nQue nunca permitamos que el orgullo hable más fuerte que el cariño.\nPorque, si algo he entendido, es que amar no consiste en evitar los problemas.\nConsiste en decidir que la relación vale más que la necesidad de tener siempre la razón.\nY esa es una decisión que espero tomar una y otra vez.\n\nHay personas que tienen miedo de mostrar sus partes más frágiles.\nYo también lo tuve.\nMuchísimo."
    },
    {
        "pageNumber": 284,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Durante mucho tiempo pensé que sentir demasiado era un problema.\nQue demostrar cariño era exponerse.\nQue querer intensamente solo aumentaba las posibilidades de salir lastimado.\nQuizá por eso aprendí a esconder tantas cosas.\nA guardar silencio.\nA parecer más frío de lo que realmente era.\nPero la verdad es que nunca fui frío.\nSolo era una persona que había aprendido a protegerse."
    },
    {
        "pageNumber": 285,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Y luego llegaste tú.\nNo rompiste esas barreras de golpe.\nNo hiciste un gran esfuerzo por convencerme de bajarlas.\nSimplemente fuiste constante.\nY hay algo muy poderoso en la constancia.\nPorque las personas podemos desconfiar de una promesa bonita.\nPero es muy difícil desconfiar de alguien que, día tras día, sigue actuando con el mismo cariño."
    },
    {
        "pageNumber": 286,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Eso hiciste.\nY, sin darme cuenta, empecé a sentir que podía dejar de esconder algunas partes de mí.\nQue podía hablarte de mis miedos.\nDe mis dudas.\nDe las cosas que normalmente prefiero guardar.\nY no sabes el alivio que eso representa.\nPorque cargar siempre con una armadura termina cansando.\nContigo siento que puedo quitármela por un rato.\nY respirar."
    },
    {
        "pageNumber": 287,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay veces en las que imagino que estamos sentados juntos muchos años después de haber empezado esta historia.\nQuizá alguno de los dos ya tenga algunas canas.\nQuizá nuestras manos ya no se vean exactamente igual.\nQuizá la vida nos haya cambiado en muchas cosas."
    },
    {
        "pageNumber": 288,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Pero me gusta pensar que todavía encontraremos momentos para mirarnos como ahora.\nCon calma.\nCon admiración.\nCon esa sensación tan bonita de pensar:\n\"Qué suerte que seguimos aquí.\"\n\nPorque, al final, creo que el verdadero milagro no es encontrar a alguien.\nEl verdadero milagro es seguir eligiéndolo cuando el tiempo deja de ser novedad y empieza a convertirse en historia.\nY yo quiero construir una historia.\nNo un momento.\nNo una etapa.\nUna historia."
    },
    {
        "pageNumber": 289,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay algo que jamás quisiera que sintieras a mi lado.\nLa necesidad de fingir.\nNo quiero que escondas tus lágrimas para no preocuparme.\nNo quiero que sonrías solamente porque crees que eso espero de ti.\nNo quiero que cargues sola con algo únicamente para demostrar que puedes.\nQuiero que sientas la libertad de ser completamente tú."
    },
    {
        "pageNumber": 290,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Porque la versión de ti que quiero no es una versión perfecta.\nEs la real.\nLa que se equivoca.\nLa que se ríe fuerte.\nLa que a veces tiene miedo.\nLa que se emociona.\nLa que duda.\nLa que sueña.\nLa que sigue intentando incluso cuando las cosas no salen como esperaba.\nEsa mujer es la que admiro.\nY esa mujer es la que quiero seguir conociendo todos los días.\n\nHay una costumbre que espero nunca perder."
    },
    {
        "pageNumber": 291,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Escucharte.\nY parece algo muy sencillo.\nPero escuchar de verdad es una forma de amar.\nEscuchar no solamente lo que dices.\nTambién lo que callas.\nNotar cuando tu sonrisa es distinta.\nCuando algo te preocupa aunque todavía no lo pongas en palabras.\nCuando necesitas un consejo.\nY cuando únicamente necesitas un abrazo."
    },
    {
        "pageNumber": 292,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Quiero aprender a conocerte tanto que pueda distinguir esas pequeñas diferencias.\nNo para adivinarte.\nSino para cuidarte mejor.\nPorque el cuidado también se aprende.\nY yo quiero seguir aprendiendo contigo."
    },
    {
        "pageNumber": 293,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay personas que miden el amor por las grandes demostraciones.\nYo, cada vez más, creo que se mide por la permanencia.\nPor quién sigue estando después de los días difíciles.\nPor quién sigue preguntando cómo estás incluso cuando la rutina se vuelve pesada.\nPor quién sigue teniendo paciencia cuando el otro no está en su mejor momento.\nEso es lo que admiro de las relaciones que duran.\nNo que nunca cambien.\nSino que aprenden a adaptarse sin dejar de cuidarse.\n\nY, sinceramente, ese tipo de amor me parece muchísimo más bonito que cualquier historia perfecta.\nPorque es real."
    },
    {
        "pageNumber": 294,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay noches en las que me cuesta dormir porque la cabeza decide empezar a pensar en todo al mismo tiempo.\nRecuerdos.\nPlanes."
    },
    {
        "pageNumber": 295,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Preocupaciones.\nIdeas.\nTodo llega junto.\nY, entre ese desorden, casi siempre apareces tú.\nNo como una preocupación.\nSino como una pausa.\nComo ese pensamiento que consigue ordenar un poquito todo el ruido."
    },
    {
        "pageNumber": 296,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Es curioso.\nIncluso cuando no estás físicamente conmigo, tu recuerdo tiene la capacidad de tranquilizarme.\nY no sé si alguna vez llegaré a entender completamente cómo lo haces.\nQuizá nunca.\nPero tampoco necesito entenderlo.\nMe basta con sentirlo.\n\nPorque algunas de las cosas más bonitas de la vida pierden parte de su magia cuando intentamos explicarlas demasiado.\nHay emociones que simplemente existen.\nY esta es una de ellas."
    },
    {
        "pageNumber": 297,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Mientras escribo estas páginas, me doy cuenta de que el tiempo ha pasado sin que lo notara.\nY creo que eso resume bastante bien lo que me ocurre contigo.\nLas horas dejan de sentirse pesadas.\nLas conversaciones nunca parecen suficientes.\nLos abrazos siempre terminan demasiado pronto.\nY las despedidas siempre incluyen una pequeña parte de mí que ya está esperando el próximo encuentro.\n\nEso me hace pensar que, tal vez, el amor no sea otra cosa que encontrar a alguien con quien el tiempo deja de ser una preocupación.\nPorque, cuando estoy contigo, nunca estoy mirando el reloj.\nEstoy mirando tus ojos.\nEscuchando tu voz."
    },
    {
        "pageNumber": 298,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Guardando un recuerdo más.\n\nY, aunque esta carta siga creciendo página tras página, sigo sintiendo exactamente lo mismo que sentía cuando escribí la primera línea.\nTodavía me cuesta encontrar palabras lo suficientemente grandes para describir todo lo que provocas en mí.\nPero, aun así, voy a seguir intentándolo.\nPorque, si existe alguien que merece cada uno de estos intentos... eres tú."
    },
    {
        "pageNumber": 299,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay una escena que todavía no ha ocurrido, pero que de vez en cuando aparece en mi imaginación con una claridad increíble.\nNo tiene nada de extraordinario.\nNi un viaje.\nNi una celebración enorme.\nNi un momento que cualquiera llamaría inolvidable.\nSimplemente imagino una tarde cualquiera.\nDe esas donde no hay prisa por llegar a ningún lado.\nEstamos caminando.\nNo hablamos demasiado.\nDe vez en cuando alguno comenta cualquier tontería y el otro se ríe.\nHay personas pasando a nuestro alrededor.\nAutos.\nRuido.\nLa ciudad sigue haciendo lo suyo.\nY, aun así, siento que nada de eso logra entrar en el pequeño mundo que vamos creando mientras caminamos juntos."
    },
    {
        "pageNumber": 300,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Siempre he pensado que la verdadera tranquilidad no consiste en que el mundo deje de hacer ruido.\nConsiste en encontrar a alguien cuyo lado haga que ese ruido deje de importar.\nY eso eres tú para mí.\n\nHay días en los que quisiera poder detenerme un momento y agradecerle a la vida por haber cruzado nuestros caminos.\nNo porque crea que todo pasa por alguna razón."
    },
    {
        "pageNumber": 301,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Sigo sin saber si eso es cierto.\nPero sí sé que hay coincidencias que terminan cambiando muchísimo más de lo que imaginábamos.\nY tú eres una de ellas.\n\nNo llegaste haciendo promesas.\nNo apareciste intentando convertirte en el centro de mi vida.\nSimplemente empezaste a formar parte de ella.\nY, poco a poco, ocupaste un espacio que nadie te pidió ocupar.\nPero que hoy no imagino vacío.\nEso es lo más curioso del cariño.\nNunca pregunta.\nSolo empieza a crecer."
    },
    {
        "pageNumber": 302,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay veces en las que me gustaría saber qué versión de mí conoces tú.\nPorque yo conozco todas mis inseguridades.\nConozco las veces que dudo.\nLas ocasiones en las que pienso demasiado.\nLos momentos donde siento que podría haber hecho las cosas mejor.\nConozco todas esas partes porque vivo con ellas todos los días.\n\nPero tú...\nTú me miras de una manera distinta.\nY me pregunto qué es exactamente lo que ves.\nPorque muchas veces siento que descubres cosas buenas en mí antes de que yo mismo sea capaz de encontrarlas."
    },
    {
        "pageNumber": 303,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Y eso también se siente bonito.\nSentir que alguien cree en ti incluso cuando tú todavía estás aprendiendo a hacerlo.\nOjalá algún día logre hacer exactamente lo mismo contigo.\nQue cuando dudes de alguna parte de ti, pueda recordarte todo aquello que quizá olvidaste mirar.\nPorque todos necesitamos a alguien que, de vez en cuando, nos recuerde el valor que tenemos cuando nosotros mismos dejamos de verlo con claridad."
    },
    {
        "pageNumber": 304,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay algo que nunca quisiera que cambiaras.\nTu capacidad de emocionarte.\nNo sé si lo notas, pero cuando algo realmente te hace ilusión, hay una luz diferente en tus ojos.\nY me encanta verla.\nPorque es imposible no contagiarse de esa emoción.\nEs una de esas cosas que no pueden fingirse.\nSimplemente aparecen.\nY espero que nunca desaparezcan."
    },
    {
        "pageNumber": 305,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Quiero seguir viendo esa chispa cuando me hables de algo que te apasiona.\nCuando cumplas una meta.\nCuando descubras algo nuevo.\nCuando la vida te sorprenda para bien.\nPorque una parte de mi felicidad también consiste en verte feliz.\nY esa es una sensación completamente nueva para mí.\n\nAntes pensaba que la felicidad era algo exclusivamente personal.\nAhora entiendo que también puede vivirse a través de alguien más.\nNo porque dependa de esa persona.\nSino porque verla sonreír también llena algo dentro de ti.\nEso me pasa contigo.\nY creo que es una de las formas más sinceras de querer."
    },
    {
        "pageNumber": 306,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay ocasiones en las que imagino que estamos recordando esta etapa dentro de muchos años.\nQuizá encontremos esta carta guardada entre otras cosas.\nLa abramos.\nY empecemos a leer.\nSeguramente nos dará risa descubrir lo mucho que escribí.\nTal vez tú me mires y digas:\n\"¿De verdad escribiste todo esto?\"\nY yo probablemente me ría también."
    },
    {
        "pageNumber": 307,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Pero, muy en el fondo, espero sentir exactamente el mismo orgullo que siento ahora.\nPorque no me avergüenza haber querido tanto.\nNunca me avergonzará.\n\nSi algo aprendí contigo es que el cariño no debe esconderse.\nLas personas pasan demasiado tiempo suponiendo que los demás ya saben cuánto significan para ellas.\nY, a veces, nunca llegan a decirlo.\nYo no quiero cometer ese error.\nPrefiero repetírtelo todas las veces que haga falta.\nNo por miedo.\nSino porque creo que las palabras bonitas también necesitan ser pronunciadas.\nPorque nadie se cansa de sentirse querido.\nNadie se cansa de saber que ocupa un lugar importante en la vida de alguien."
    },
    {
        "pageNumber": 308,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Y, si alguna vez esta carta consigue hacerte sonreír en un día difícil, entonces habrá cumplido una de las razones por las que nació.\n\nHay otra cosa que me gustaría confesarte.\nMuchas veces, cuando termino de verte, no regreso exactamente igual.\nSiempre hay algo que cambia.\nA veces vuelvo con más calma.\nOtras con más motivación.\nAlgunas veces simplemente regreso sonriendo sin una razón aparente.\nPero siempre vuelvo diferente.\nY creo que eso es una de las pruebas más bonitas de todo lo que provocas en mí."
    },
    {
        "pageNumber": 309,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Porque hay personas con las que pasas tiempo.\nY luego hay personas cuya compañía deja algo dentro de ti incluso después de que ya no están.\nTú perteneces al segundo grupo.\nHay una parte de ti que siempre se queda conmigo.\nEn mis pensamientos."
    },
    {
        "pageNumber": 310,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "En mis recuerdos.\nEn la tranquilidad que siento al final del día.\nY eso hace que la distancia nunca se sienta completamente vacía.\nPorque, aunque no estés aquí físicamente, dejaste muchas cosas bonitas dentro de mí."
    },
    {
        "pageNumber": 311,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Hay algo que admiro profundamente de los relojes.\nNunca se detienen.\nSin importar si el día fue bueno o malo.\nSiguen avanzando.\nY creo que el amor también debería parecerse un poco a eso.\nNo en el sentido de correr sin descanso.\nSino en el de seguir caminando.\nSeguir construyéndose.\nSeguir aprendiendo.\nSeguir creciendo."
    },
    {
        "pageNumber": 312,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Quiero que, pase lo que pase, nunca dejemos de avanzar.\nA nuestro ritmo.\nSin compararnos con nadie.\nSin intentar vivir la historia de otras personas.\nSolo la nuestra.\nCon nuestras conversaciones.\nNuestros errores.\nNuestros aprendizajes.\nNuestros silencios.\nNuestros abrazos."
    },
    {
        "pageNumber": 313,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Porque estoy convencido de algo.\nNo existe una historia de amor perfecta.\nPero sí existen historias profundamente sinceras.\nY, si algún día alguien me preguntara cómo describiría la nuestra, creo que elegiría exactamente esa palabra.\nSincera."
    },
    {
        "pageNumber": 314,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Porque desde el primer momento en que decidí abrirte el corazón, no he intentado parecer alguien distinto.\nTodo lo que has leído hasta aquí nació exactamente del mismo lugar.\nDe ese rincón de mi pecho donde, desde que llegaste, siempre encuentro una razón nueva para agradecer que existas.\n\nA veces me quedo pensando en todas las cosas que todavía no sabemos del otro.\nY, lejos de desesperarme, eso me emociona.\nPorque significa que aún nos quedan muchísimas conversaciones por tener.\nTodavía hay historias de tu infancia que no conozco.\nCanciones que marcaron alguna etapa de tu vida.\nMiedos que quizá nunca le has contado a nadie.\nSueños que todavía no te atreves a decir en voz alta."
    },
    {
        "pageNumber": 315,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Y yo quiero estar ahí para escucharlos todos.\nNo porque sienta curiosidad por saberlo todo.\nSino porque cada cosa que descubro de ti hace que te admire un poquito más.\n\nHay quienes creen que conocer a alguien consiste en aprenderse sus gustos, su comida favorita o el color que más le agrada.\nYo creo que conocer a alguien empieza cuando entiendes por qué sonríe de cierta manera.\nCuando reconoces el silencio que necesita compañía y el silencio que necesita espacio.\nCuando aprendes a notar que un \"estoy bien\" no siempre significa exactamente eso.\nCuando puedes distinguir una sonrisa de felicidad de una sonrisa que solo intenta ser fuerte."
    },
    {
        "pageNumber": 316,
        "chapter": 5,
        "isChapterTitlePage": false,
        "content": "Ese tipo de conocimiento no aparece en unos días.\nSe construye con tiempo.\nCon paciencia.\nCon atención.\nY yo quiero dedicarte ese tiempo."
    },
    {
        "pageNumber": 317,
        "chapter": 6,
        "isChapterTitlePage": true,
        "content": ""
    },
    {
        "pageNumber": 318,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Porque siento que vales cada minuto que invierta en seguir descubriéndote.\n\nHay algo que nunca te he dicho.\nO, al menos, nunca de esta forma.\nMe gusta la tranquilidad con la que llegaste a mi vida.\nNo fue una historia llena de prisas.\nNo sentí que tuviera que correr para alcanzarte.\nTodo fue ocurriendo poco a poco.\nY creo que precisamente por eso hoy puedo apreciar cada paso que hemos dado."
    },
    {
        "pageNumber": 319,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Porque cuando algo importante llega demasiado rápido, a veces uno olvida disfrutar el camino.\nContigo he aprendido a valorar el proceso.\nLas conversaciones que parecían simples.\nLas veces que solo compartimos un rato.\nLas miradas.\nLas pequeñas coincidencias.\nTodo eso terminó convirtiéndose en los cimientos de algo mucho más grande.\nY ahora, cuando miro hacia atrás, entiendo que ninguna de esas cosas era pequeña.\nSolo todavía no sabía la importancia que tendrían."
    },
    {
        "pageNumber": 320,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Hay noches en las que imagino cómo será tu voz cuando hables de nosotros dentro de algunos años.\nMe pregunto si recordarás estas primeras etapas con la misma ternura con la que yo las recuerdo mientras escribo.\nSi algún día alguien te pregunta cómo empezó todo, ¿qué será lo primero que vendrá a tu mente?\n¿Una conversación?\n¿Una sonrisa?\n¿Un abrazo?\n¿Una sensación?\nNo lo sé."
    },
    {
        "pageNumber": 321,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Y me gusta no saberlo.\nPorque esas respuestas solo te pertenecen a ti.\nY espero que algún día tengas ganas de contármelas.\n\nHay algo profundamente bonito en escuchar cómo otra persona vivió los mismos momentos que tú.\nPorque descubres que, aunque compartieron el mismo día, cada uno guardó recuerdos distintos.\nY eso hace que la historia se vuelva todavía más completa.\n\nSi algún día hablamos de nuestro primer abrazo, probablemente yo recuerde una cosa y tú otra.\nY las dos serán verdaderas.\nPorque el amor también consiste en aprender a mirar un mismo recuerdo desde dos corazones diferentes."
    },
    {
        "pageNumber": 322,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Hay personas que dicen que el tiempo pone todo en su lugar.\nYo creo que el tiempo, por sí solo, no hace mucho.\nLo que realmente cambia las cosas es lo que decidimos hacer mientras ese tiempo pasa.\n\nPodemos dejar que los días simplemente transcurran.\nO podemos llenarlos de pequeños momentos que, sin darnos cuenta, terminen convirtiéndose en recuerdos inolvidables.\nEso quiero hacer contigo.\nNo esperar únicamente las grandes ocasiones.\nQuiero encontrar belleza en un martes cualquiera.\nEn una caminata sin rumbo.\nEn una llamada inesperada.\nEn un mensaje de buenos días.\nEn una conversación antes de dormir."
    },
    {
        "pageNumber": 323,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Porque estoy convencido de que la vida se construye mucho más con esos instantes cotidianos que con los eventos extraordinarios.\nY, si logramos cuidar esos pequeños momentos, creo que todo lo demás encontrará su lugar por sí solo."
    },
    {
        "pageNumber": 324,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Hay una pregunta que me hice mientras escribía estas páginas.\n¿Qué es exactamente lo que más deseo para nosotros?\nY después de pensarlo mucho, descubrí que la respuesta no era un lugar específico.\nNi una fecha.\nNi una meta concreta.\nLo que más deseo es que nunca perdamos la paz que sentimos cuando estamos juntos."
    },
    {
        "pageNumber": 325,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Porque esa paz es difícil de encontrar.\nVivimos rodeados de prisas.\nDe preocupaciones.\nDe ruido.\nDe expectativas.\nY, aun así, existe un espacio donde todo eso parece disminuir.\nEse espacio eres tú."
    },
    {
        "pageNumber": 326,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Y ojalá yo también pueda convertirme en ese lugar para ti.\nHay días en los que imagino que llegas cansada.\nQue las cosas no salieron como esperabas.\nQue el mundo decidió ponerse un poco más pesado de lo normal.\nY, en esa imagen, no hago nada extraordinario.\nSimplemente estoy contigo.\nTe escucho.\nTe abrazo.\nEspero a que hables si quieres hacerlo.\nO guardo silencio si eso es lo que necesitas."
    },
    {
        "pageNumber": 327,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Porque he aprendido que amar no siempre significa encontrar soluciones.\nMuchas veces significa ofrecer compañía.\nY, sinceramente, me gustaría convertirme en esa compañía para ti.\nNo la que resuelva tu vida.\nSino la que haga que cargarla resulte un poquito menos difícil.\n\nHay otra confesión que quiero dejar escrita."
    },
    {
        "pageNumber": 328,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "No quiero que nunca sientas que tienes que ganarte mi cariño.\nNo quiero que pienses que depende de que siempre estés bien.\nO de que nunca te equivoques.\nO de que hagas todo perfectamente.\nPorque el cariño que siento por ti no nació de que fueras perfecta.\nNació de que eres tú.\nCon todo lo que eso implica."
    },
    {
        "pageNumber": 329,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Y espero que nunca olvides esa diferencia.\nPorque es enorme.\nNo quiero a una versión idealizada de ti.\nQuiero a la mujer real.\nLa que todavía sigue aprendiendo.\nLa que tiene días buenos y malos.\nLa que se ríe de cosas simples.\nLa que también se cansa.\nLa que sueña.\nLa que siente.\nLa que vive."
    },
    {
        "pageNumber": 330,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Esa es la persona que me hace escribir todas estas páginas.\nY esa es la persona que espero seguir descubriendo durante muchísimo tiempo.\n\nPorque, aunque ya llevamos tantas palabras compartidas en esta carta, todavía tengo la sensación de que apenas estoy empezando a conocerte.\nY, curiosamente...\nEsa idea no me asusta.\nMe ilusiona.\nPorque significa que todavía nos quedan muchísimas páginas por escribir, no solo en esta carta, sino también en la historia que, con un poco de suerte, seguiremos construyendo juntos.\n\nHay algo que me hace sonreír cada vez que lo pienso.\nEl hecho de que, sin darte cuenta, empezaste a formar parte de mis pensamientos más cotidianos."
    },
    {
        "pageNumber": 331,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "No hablo de esos momentos donde uno extraña a alguien de forma evidente.\nHablo de cosas mucho más pequeñas.\nDe repente veo algo curioso y mi primera reacción es pensar: \"Esto tengo que contárselo.\"\nEscucho una canción y me pregunto si te gustaría.\nPaso por algún lugar bonito e imagino cómo sería recorrerlo contigo.\nEncuentro una frase interesante y automáticamente me pregunto qué opinarías de ella.\n\nY es ahí cuando entiendo que ya no ocupas un espacio solamente en mi corazón.\nTambién ocupas un espacio en mi rutina.\nPorque ya no pienso únicamente en mí.\nSin darme cuenta, empecé a incluirte en mis días incluso cuando no estás presente."
    },
    {
        "pageNumber": 332,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Y, lejos de sentirse como una costumbre, se siente como una de las cosas más bonitas que me han pasado.\n\nHay personas que llegan y cambian grandes acontecimientos.\nTú cambiaste algo mucho más silencioso.\nCambiaste la forma en la que vivo los días normales.\nY creo que eso tiene un valor enorme.\nPorque los días extraordinarios son pocos.\nLos días comunes son casi toda la vida.\nY si alguien consigue hacer más bonitos esos días comunes, entonces también está haciendo más bonita tu vida.\n\nEso has hecho conmigo.\nQuizá sin proponértelo.\nQuizá sin siquiera notarlo.\nPero lo has hecho."
    },
    {
        "pageNumber": 333,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Hay veces en las que me descubro riéndome solo después de recordar alguna conversación contigo.\nY entonces pienso en lo extraño que resulta todo esto."
    },
    {
        "pageNumber": 334,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Antes de conocerte había días enteros que simplemente pasaban.\nAhora basta un recuerdo tuyo para cambiar por completo mi estado de ánimo.\nNo deja de sorprenderme.\nEs como si hubieras dejado pequeñas luces repartidas por distintos rincones de mi memoria.\nY, cuando menos lo espero, una de ellas se enciende.\nEntonces sonrío.\nY sigo con mi día sintiéndome un poco más ligero."
    },
    {
        "pageNumber": 335,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Hay quienes creen que enamorarse consiste únicamente en sentir mariposas.\nYo creo que también consiste en empezar a encontrar belleza donde antes no la veías.\nEn mirar un atardecer y desear compartirlo.\nEn escuchar una buena noticia y querer contársela primero a esa persona.\nEn imaginar un futuro donde ya no apareces únicamente tú.\nEso, para mí, también es amor.\nY contigo lo descubrí.\n\nHay una parte de mí que siempre intenta cuidar las palabras.\nNo porque crea que hablar bonito sea lo más importante.\nSino porque las palabras tienen un peso enorme.\nPueden quedarse viviendo dentro de alguien durante años."
    },
    {
        "pageNumber": 336,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Por eso quiero que, si algún día olvidas cómo te veo, vuelvas a esta carta.\nNo para recordar lo mucho que te quiero.\nEso espero demostrártelo siempre con acciones.\nQuiero que vuelvas para recordar cómo te admiró.\nCómo me inspiras.\nCómo logras sacar una versión de mí que ni yo sabía que existía.\nPorque a veces la vida nos hace olvidar nuestro propio valor.\nY, si en algún momento te ocurre, me gustaría que estas páginas sirvieran como un espejo donde puedas volver a encontrarte.\n\nHay una escena muy sencilla que me gusta imaginar.\nEstamos sentados en silencio."
    },
    {
        "pageNumber": 337,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Cada uno haciendo algo diferente.\nQuizá tú leyendo.\nYo escribiendo cualquier tontería.\nNo estamos hablando.\nNo pasa nada especial.\nY, aun así, el ambiente se siente lleno.\n\nSiempre pensé que el silencio era incómodo.\nHasta que entendí que solo es incómodo cuando estás con la persona equivocada.\nCon la persona correcta, el silencio también conversa.\nTambién acompaña.\nTambién abraza."
    },
    {
        "pageNumber": 338,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Y me gusta pensar que algún día podremos compartir muchísimos silencios de esos.\nNo porque ya no tengamos cosas que decirnos.\nSino porque habrá una confianza tan grande que las palabras dejarán de ser necesarias por momentos.\n\nHay algo que admiro profundamente de la naturaleza.\nLos árboles nunca tienen prisa por crecer.\nLas estaciones llegan cuando tienen que llegar.\nLas flores no florecen antes por desesperación.\nTodo ocurre a su tiempo.\nY creo que el amor también debería aprender un poco de eso."
    },
    {
        "pageNumber": 339,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "No quiero correr.\nNo quiero adelantarnos a etapas que todavía no hemos vivido.\nQuiero disfrutar exactamente el lugar donde estamos hoy.\nPorque este momento también merece ser recordado.\nLas primeras ilusiones.\nLos primeros planes.\nLas primeras veces imaginando un futuro juntos.\nTodo eso algún día será un recuerdo."
    },
    {
        "pageNumber": 340,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Y quiero vivirlo tan plenamente que, cuando miremos hacia atrás, podamos sonreír con la tranquilidad de saber que disfrutamos cada paso.\n\nHay ocasiones en las que pienso en la suerte.\nNo esa suerte de ganar algo.\nSino esa que consiste en encontrar a alguien que llegue justo cuando tu corazón estaba preparado para abrirse otra vez.\nNo sé si eso fue casualidad.\nNo sé si fue el momento correcto.\nNo sé si simplemente coincidimos.\nLo único que sé es que agradezco profundamente que haya ocurrido.\nPorque, desde entonces, mis días tienen una calma que antes no conocía.\nY eso vale muchísimo."
    },
    {
        "pageNumber": 341,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Hay algo que nunca quisiera dejar de hacer.\nEscuchar tus sueños.\nNo importa si cambian con el tiempo.\nNo importa si alguno parece difícil.\nNo importa si algún día decides empezar de nuevo.\nQuiero seguir siendo la persona que escuche tus ideas con emoción.\nLa que celebre tus avances.\nLa que te recuerde todo lo que eres capaz de lograr cuando tú misma empieces a dudar.\n\nPorque creo que amar también significa convertirse en un lugar donde los sueños del otro se sientan seguros.\nY, sinceramente, me encantaría ser ese lugar para ti."
    },
    {
        "pageNumber": 342,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Mientras escribo estas líneas, vuelvo a levantar la mirada unos segundos y sonrío.\nNo porque ya haya terminado de decir todo lo que siento.\nAl contrario.\nSonrío porque me doy cuenta de que todavía quedan muchísimas cosas por descubrir contigo.\nMuchísimas conversaciones."
    },
    {
        "pageNumber": 343,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Muchísimos abrazos.\nMuchísimas risas.\nMuchísimos días comunes esperando convertirse en recuerdos inolvidables.\n\nY pensar en todo eso, lejos de darme miedo, me llena de una ilusión muy tranquila.\nDe esa que no hace ruido.\nDe esa que no necesita prometer nada.\nSimplemente susurra, muy bajito, una idea que cada día siento más cierta.\nQue ojalá la vida siga regalándonos tiempo.\nPorque mientras exista tiempo para seguir caminando contigo, siempre habrá una razón nueva para volver a enamorarme de la persona que eres."
    },
    {
        "pageNumber": 344,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Hay una pregunta que nunca me había hecho hasta que apareciste en mi vida.\n¿Qué significa realmente compartir la vida con alguien?\nAntes tenía respuestas muy simples.\nPensaba en pasar tiempo juntos.\nEn salir.\nEn hablar todos los días.\nEn hacer planes.\nY sí, todo eso forma parte de una relación."
    },
    {
        "pageNumber": 345,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Pero ahora siento que compartir la vida va mucho más allá.\nEs permitir que alguien conozca versiones tuyas que ni siquiera tú entiendes por completo.\nEs dejar que vea tus días donde todo parece salir bien, pero también esos donde el ánimo pesa más de lo normal.\nEs aprender poco a poco cuáles son los silencios que necesitan compañía y cuáles necesitan respeto.\nEs recordar pequeños detalles que para el resto del mundo serían insignificantes, pero que para esa persona significan muchísimo.\n\nCreo que compartir la vida consiste en aprender a cuidar un corazón que decidió confiar en ti.\nY esa idea me parece tan bonita como delicada."
    },
    {
        "pageNumber": 346,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Porque cuando alguien deposita su confianza en tus manos, no está entregándote una obligación.\nEstá regalándote una parte muy valiosa de sí mismo.\nY yo quiero cuidar esa parte de ti con todo el cariño del que sea capaz.\n\nHay ocasiones en las que me sorprendo imaginando conversaciones que todavía no hemos tenido.\nNo conversaciones importantes.\nSimplemente esas pláticas que nacen sin planearse.\nLas que empiezan hablando de cualquier tontería y terminan, sin que uno se dé cuenta, tocando temas profundos."
    },
    {
        "pageNumber": 347,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Me ilusiona pensar que todavía nos esperan muchísimas de esas.\nPorque siento que contigo siempre existe algo nuevo por descubrir.\nNunca he sentido la necesidad de llenar los espacios únicamente por hablar.\nContigo las conversaciones fluyen.\nY cuando no fluyen...\nEl silencio tampoco pesa.\nEso es muy difícil de encontrar.\n\nHay personas con las que puedes hablar durante horas.\nPero muy pocas con las que también puedes guardar silencio sin sentir incomodidad.\nTú eres una de ellas.\nY eso hace que cada momento contigo tenga un equilibrio muy bonito."
    },
    {
        "pageNumber": 348,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Hay días en los que me pregunto cómo reaccionaría mi yo de hace algunos años si pudiera verme ahora.\nCreo que se sorprendería muchísimo.\nNo porque esté haciendo algo extraordinario.\nSino porque jamás imaginó que volvería a escribir tantas páginas por alguien.\nNunca pensó que volvería a ilusionarse de esta manera.\nNi que encontraría una tranquilidad tan sencilla en la compañía de otra persona.\nProbablemente sonreiría.\nY también sentiría alivio."
    },
    {
        "pageNumber": 349,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Porque durante mucho tiempo creyó que algunas cosas ya no volverían a pasar.\nY, sin embargo, aquí estoy.\nEscribiendo.\nPensando en ti.\nSonriendo mientras imagino que algún día leerás cada una de estas palabras."
    },
    {
        "pageNumber": 350,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Hay una imagen que siempre me acompaña cuando pienso en el amor.\nImagino una fogata.\nNo un incendio enorme que ilumina todo durante unos minutos y luego desaparece.\nPienso en una fogata que permanece encendida durante toda la noche.\nNo hace demasiado ruido.\nNo intenta llamar la atención.\nSimplemente sigue ahí.\nDando calor.\nDando luz.\nHaciendo más agradable el lugar donde está."
    },
    {
        "pageNumber": 351,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Me gustaría que lo nuestro fuera así.\nNo un sentimiento que dependa únicamente de la intensidad de los primeros días.\nSino uno que aprenda a permanecer.\nQue encuentre nuevas formas de mantenerse vivo.\nQue no necesite demostrar constantemente que existe, porque ambos podamos sentirlo incluso en las cosas más pequeñas.\n\nPorque, al final, las llamas más fuertes no siempre son las que duran más.\nLas que realmente permanecen son aquellas que alguien decide cuidar todos los días.\n\nY yo quiero cuidar esto.\nQuiero aprender a hacerlo bien.\nSeguramente me equivocaré alguna vez.\nDiré algo que no era.\nOlvidaré algún detalle."
    },
    {
        "pageNumber": 352,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Tendré días donde no encuentre las palabras correctas.\nSoy humano.\nY eso también forma parte de querer.\nPero incluso en esos momentos quiero que nunca dudes de una cosa.\nMi intención siempre será construir.\nNunca destruir."
    },
    {
        "pageNumber": 353,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Porque cuando alguien se vuelve importante para ti, también se vuelve importante la forma en la que lo haces sentir.\nY quiero que, cuando pienses en mí, la primera sensación que aparezca sea tranquilidad.\nNo incertidumbre.\nNo miedo.\nNo dudas.\nTranquilidad.\nEsa misma tranquilidad que tú has sembrado dentro de mí desde que llegaste."
    },
    {
        "pageNumber": 354,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Hay algo que me gusta muchísimo de las noches.\nCuando todo empieza a quedarse en silencio, uno termina escuchando pensamientos que durante el día pasan desapercibidos.\nY muchas veces, en medio de ese silencio, apareces tú.\nNo con una imagen espectacular.\nNo con una escena de película.\nSimplemente apareces siendo tú.\nSonriendo.\nHablando.\nMirándome."
    },
    {
        "pageNumber": 355,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Y es suficiente para que el día termine de una manera distinta.\nEs increíble cómo una sola persona puede convertirse en el último pensamiento bonito antes de dormir.\nNunca imaginé que eso pudiera pasarme.\nY ahora sucede con una naturalidad que todavía me sorprende.\nNo sé si algún día dejará de sorprenderme."
    },
    {
        "pageNumber": 356,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Ojalá que no.\nPorque creo que hay sentimientos que merecen conservar siempre un poquito de asombro.\nNo quiero acostumbrarme a tu presencia hasta el punto de dejar de valorarla.\nQuiero seguir sintiendo gratitud incluso por los momentos que parezcan más normales.\n\nPorque sé que nada es eterno.\nY precisamente por eso quiero aprender a apreciar cada instante mientras ocurre.\nNo esperar a extrañarlo para entender lo importante que era.\nQuiero vivirlo plenamente desde ahora.\n\nHay personas que esperan grandes señales para saber si están en el lugar correcto.\nYo encontré la mía en algo mucho más sencillo.\nLa paz."
    },
    {
        "pageNumber": 357,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Porque contigo no siento que tenga que demostrar constantemente quién soy.\nNo siento que deba competir por atención.\nNo siento miedo de ser suficiente.\nSimplemente siento que puedo existir.\nY eso, aunque parezca una frase muy simple, ha significado muchísimo para mí.\n\nPorque cuando encuentras a alguien con quien puedes ser tú sin estar cuidando cada palabra o cada gesto, entiendes que la tranquilidad también es una forma muy profunda de amor.\n\nY si algún día me preguntan qué fue lo primero que sentí al darme cuenta de que me estaba enamorando de ti, probablemente no responderé \"mariposas\".\nResponderé algo mucho más sencillo.\nSentí paz."
    },
    {
        "pageNumber": 358,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Y hay muy pocas cosas en esta vida que valgan tanto como eso.\nY quizá por eso esta carta ha terminado siendo tan larga."
    },
    {
        "pageNumber": 359,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Porque cuando uno encuentra algo que realmente vale la pena, las palabras dejan de sentirse suficientes.\n\nEs curioso.\nAntes de empezar a escribir pensé que quizá llegaría un momento en el que ya no sabría qué decir.\nImaginé que después de unas cuantas páginas empezaría a repetirme.\nPero ocurrió exactamente lo contrario.\nCada recuerdo me llevó a otro.\nCada pensamiento abrió la puerta a uno nuevo.\n\nY entendí que el problema nunca fue encontrar palabras.\nEl problema era atreverme a abrir completamente el corazón.\nUna vez que lo hice, ya no hubo forma de detenerlo."
    },
    {
        "pageNumber": 360,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Mientras escribo esto imagino el momento en que llegues a estas páginas.\nTal vez ya estés un poco cansada de leer.\nTal vez hayas sonreído varias veces.\nQuizá incluso te hayas detenido en algunos párrafos para volver a leerlos despacio.\n\nY no sabes cuánto me gusta imaginar eso.\nPorque significa que, durante un rato, todas estas horas que pasé escribiendo estarán acompañándote.\nY, de alguna manera, será como si estuviéramos teniendo una conversación larguísima sin necesidad de estar frente a frente."
    },
    {
        "pageNumber": 361,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Siempre he pensado que hay conversaciones que solo pueden existir cuando uno escribe.\nPorque al hablar, muchas veces el orgullo interrumpe.\nLos nervios cambian las palabras.\nEl tiempo se acaba.\nLas ideas se atropellan unas con otras.\nEn cambio aquí...\nAquí tuve la oportunidad de decir todo aquello que normalmente se queda atrapado en la garganta."
    },
    {
        "pageNumber": 362,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Y eso hace que esta carta tenga un valor enorme para mí.\nPorque no solamente habla de ti.\nTambién habla de una versión de mí que decidió dejar de esconder lo que sentía.\n\nHay una confesión que todavía no había hecho.\nMe gusta imaginar cómo será tu sonrisa cuando descubras pequeños detalles sobre mí con el paso del tiempo.\nNo esos datos que cualquiera puede conocer.\nSino esas costumbres tontas que solamente descubre alguien que realmente comparte tiempo contigo."
    },
    {
        "pageNumber": 363,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Qué hago cuando estoy nervioso.\nCómo reacciono cuando algo me emociona demasiado.\nQué expresión pongo cuando estoy concentrado.\nQué hago cuando intento recordar algo y no puedo.\nLas pequeñas manías que todos tenemos.\nPorque sé que tú también tienes las tuyas.\nY me hace muchísima ilusión descubrirlas una por una.\n\nNo para burlarme de ellas.\nSino porque esas pequeñas rarezas terminan convirtiéndose en algunas de las cosas más entrañables de la persona que amas.\nCreo que nadie se enamora únicamente de las grandes cualidades.\nTambién se enamora de esas pequeñas costumbres que hacen única a alguien."
    },
    {
        "pageNumber": 364,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Hay otra cosa que me emociona muchísimo.\nPensar que todavía no hemos vivido la mayor parte de nuestra historia.\nQué increíble es eso.\nTodo lo que hoy sentimos apenas pertenece a los primeros capítulos.\nTodavía faltan muchísimas páginas que aún no existen.\nTodavía hay abrazos que aún no nos damos.\nConversaciones que todavía no suceden.\nLugares que aún no conocemos juntos.\nFotografías que todavía no se toman.\nRisas que todavía no nacen."
    },
    {
        "pageNumber": 365,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Y saber que todo eso sigue esperándonos hace que el futuro deje de darme miedo y empiece a llenarme de ilusión.\nPorque cuando pienso en mañana, ya no imagino únicamente obligaciones, trabajo o responsabilidades.\nTambién imagino la posibilidad de seguir construyendo recuerdos contigo.\nY esa diferencia cambia completamente la forma en la que miro el tiempo.\n\nHay días en los que uno necesita escuchar que todo va a estar bien.\nNo porque realmente lo sepa.\nSino porque necesita sentir que no está solo.\nSi algún día tienes uno de esos días, espero que recuerdes algo."
    },
    {
        "pageNumber": 366,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "No tienes que cargar con todo tú sola.\nNo tienes que demostrar fortaleza cada segundo.\nNo tienes que sonreír únicamente para tranquilizar a los demás.\nPuedes cansarte.\nPuedes llorar.\nPuedes detenerte."
    },
    {
        "pageNumber": 367,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Y, si alguna vez necesitas un lugar donde descansar un poquito del peso que llevas encima, me gustaría que pensaras en mí.\nNo porque tenga todas las respuestas.\nProbablemente muchas veces tampoco las tenga.\nPero puedo ofrecerte algo que considero igual de importante.\nMi compañía.\nMi tiempo.\nMi paciencia.\nMi disposición para escucharte incluso cuando no sepa exactamente cómo ayudarte.\n\nPorque algunas personas creen que acompañar significa resolver.\nYo creo que muchas veces acompañar significa quedarse.\nY yo quiero quedarme."
    },
    {
        "pageNumber": 368,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Hay una frase que jamás quisiera que sintieras la necesidad de decirme.\n\"Ojalá hubiera podido contártelo.\""
    },
    {
        "pageNumber": 369,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Quiero que siempre sientas que puedes venir conmigo.\nCon una buena noticia.\nCon un miedo.\nCon una duda.\nCon una ilusión.\nCon un error.\nCon una idea absurda.\nCon cualquier cosa."
    },
    {
        "pageNumber": 370,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Porque no quiero ser solamente la persona que esté presente en los momentos fáciles.\nQuiero ser alguien con quien también puedas compartir aquello que te cuesta decir.\nEso, para mí, sería uno de los regalos más grandes que podrías hacerme.\nTu confianza.\nNo existe demostración de cariño más profunda que esa.\n\nMientras escribo estas líneas me doy cuenta de que he hablado mucho sobre el futuro.\nY es inevitable.\nPorque desde que llegaste empecé a me imaginarlo de una manera distinta.\nPero tampoco quiero olvidarme del presente.\nPorque todo lo que algún día recordaremos está ocurriendo ahora."
    },
    {
        "pageNumber": 371,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Este momento.\nEstas primeras ilusiones.\nEstas ganas de seguir conociéndonos.\nEstos nervios.\nEstas sonrisas.\nTodo esto también merece disfrutarse sin estar pensando únicamente en lo que vendrá después.\n\nQuiero aprender a vivir cada etapa contigo.\nSin querer correr.\nSin querer saltarnos capítulos."
    },
    {
        "pageNumber": 372,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Porque cada uno tendrá algo que enseñarnos.\nY cuando algún día miremos hacia atrás, quiero sentir la tranquilidad de saber que no dejamos pasar ninguno de esos momentos por estar demasiado ocupados esperando el siguiente.\n\nHay algo muy bonito en escribir una carta tan larga.\nY es que, poco a poco, deja de sentirse como una carta.\nEmpieza a sentirse como una parte de quien la escribió.\nCada página guarda una emoción distinta.\nUn recuerdo.\nUna esperanza.\nUna confesión.\nUn miedo.\nUna ilusión."
    },
    {
        "pageNumber": 373,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Y eso hace que, de alguna manera, quien termina esta carta también termine conociéndome un poco más.\nSi al terminar de leerla llegas a sentir que ahora entiendes mejor quién soy, entonces habrá cumplido otra de las razones por las que nació.\n\nPorque más allá de decirte cuánto te quiero...\nTambién quería mostrarte el lugar exacto desde donde nace todo ese cariño.\nY ese lugar eres tú, aunque todavía no seas completamente consciente de ello."
    },
    {
        "pageNumber": 374,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Hay una imagen que me acompaña desde hace varios días.\nNo sé exactamente por qué apareció, pero desde que llegó no ha querido irse.\nImagino una tarde de lluvia.\nNo una tormenta.\nSolo esa lluvia tranquila que hace que el mundo parezca moverse un poco más despacio.\nEstamos sentados junto a una ventana.\nCada uno con una taza entre las manos.\nAfuera el cielo está gris, pero, por alguna razón, adentro todo se siente cálido.\nNo hablamos durante un buen rato.\nNo porque falten temas."
    },
    {
        "pageNumber": 375,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Simplemente porque el silencio también puede ser una forma de compañía.\nY entonces volteo a verte.\nTú también volteas.\nSonreímos.\nY seguimos mirando la lluvia.\nNo pasa absolutamente nada extraordinario.\nY, sin embargo, siento que sería uno de esos recuerdos que guardaría para siempre.\n\nPorque contigo he aprendido que los momentos más importantes no siempre son los que cualquiera fotografiaría.\nMuchas veces son esos instantes pequeños que solo dos personas entienden.\nEsos que no llaman la atención de nadie más.\nPero que, cuando los recuerdas años después, siguen calentándote el corazón."
    },
    {
        "pageNumber": 376,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Hay una cosa que nunca quisiera dejar de hacer.\nSeguir sorprendiéndome contigo.\nPorque creo que el amor empieza a apagarse cuando uno deja de mirar con atención.\nCuando cree que ya conoce absolutamente todo de la otra persona.\nYo no quiero llegar nunca a ese punto.\nQuiero seguir preguntándote cosas.\nSeguir escuchando historias que quizá ya me contaste alguna vez.\nSeguir disfrutando la forma en que hablas de aquello que te emociona.\nSeguir descubriendo nuevos sueños.\nNuevas metas.\nNuevas ideas."
    },
    {
        "pageNumber": 377,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Porque estoy convencido de que las personas nunca dejamos de cambiar.\nY si tú cambias, yo quiero tener el privilegio de seguir conociendo cada nueva versión de ti.\nAsí como espero que tú también tengas la oportunidad de descubrir las mías.\n\nHay algo que me parece profundamente hermoso.\nPensar que dos personas pueden influirse mutuamente sin darse cuenta."
    },
    {
        "pageNumber": 378,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Estoy seguro de que tú ya cambiaste muchas cosas en mí.\nNo porque me lo pidieras.\nNi porque intentaras hacerlo.\nSimplemente porque tu manera de existir empezó a enseñarme otras formas de mirar la vida.\n\nAhora me detengo más en los pequeños momentos.\nAhora agradezco cosas que antes pasaban desapercibidas.\nAhora entiendo que la tranquilidad puede ser muchísimo más valiosa que cualquier emoción pasajera.\nY todo eso llegó contigo.\nNo en un solo día.\nFue ocurriendo poco a poco.\nComo la lluvia que empieza con unas cuantas gotas hasta que, cuando levantas la vista, todo el paisaje ya cambió."
    },
    {
        "pageNumber": 379,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Hay personas que aparecen como un relámpago.\nImpactan.\nSorprenden.\nY desaparecen igual de rápido.\nTú no.\nTú llegaste como la luz del amanecer.\nTan despacio que al principio ni siquiera noté cuánto estaba cambiando todo.\nY, cuando me di cuenta, ya no había oscuridad en muchos lugares donde antes la había."
    },
    {
        "pageNumber": 380,
        "chapter": 6,
        "isChapterTitlePage": false,
        "content": "Hay veces en las que imagino que algún día tendremos una conversación sobre esta carta.\nY me da mucha curiosidad saber qué será lo primero que me dirás.\nQuizá te rías porque escribí demasiado.\nQuizá me preguntes cuánto tiempo tardé.\nQuizá quieras saber en qué estaba pensando mientras escribía cada página.\nY creo que mi respuesta sería muy sencilla.\nEstaba pensando en ti."
    },
    {
        "pageNumber": 381,
        "chapter": 7,
        "isChapterTitlePage": true,
        "content": ""
    },
    {
        "pageNumber": 382,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "No en una versión perfecta.\nNo en una idea.\nEn ti.\nEn la mujer que conocí.\nEn la mujer que sigo conociendo.\nY en todas las versiones tuyas que todavía tengo la ilusión de descubrir.\n\nPorque, aunque esta carta hable muchísimo del futuro, en realidad nace del presente.\nDel enorme agradecimiento que siento por poder coincidir contigo aquí y ahora."
    },
    {
        "pageNumber": 383,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Hay una confesión que todavía no había escrito.\nMuchas veces, antes de dormir, repaso mentalmente algunos momentos del día.\nNo siempre fueron importantes.\nA veces solo recuerdo una conversación.\nUna risa.\nUna frase.\nY cuando apareces en esos recuerdos, siempre ocurre algo curioso.\nEl día termina sintiéndose un poco mejor de lo que realmente fue.\nEs como si tu presencia tuviera la capacidad de acomodar las cosas dentro de mí.\nDe poner un poco de orden donde antes había demasiado ruido.\nNo sé cómo explicarlo mejor.\nSolo sé que pasa.\nY que me gusta muchísimo que pase."
    },
    {
        "pageNumber": 384,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Hay personas que creen que el amor consiste en encontrar a alguien que complete lo que te falta.\nYo no pienso así.\nCreo que nadie viene a completar a nadie.\nTodos llegamos con nuestras propias historias.\nCon nuestras heridas.\nCon nuestros sueños.\nCon nuestras fortalezas."
    },
    {
        "pageNumber": 385,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Lo bonito ocurre cuando dos personas completas deciden caminar juntas sin intentar cambiar la esencia del otro.\nEso quiero contigo.\nNo quiero me moldearte para que encajes en mis expectativas.\nQuiero admirarte por quien eres.\nQuiero acompañarte mientras sigues creciendo.\nQuiero celebrar la persona en la que te conviertas con el paso de los años.\nY espero que tú también puedas hacer lo mismo conmigo.\n\nPorque amar también significa permitir que el otro cambie sin dejar de sentirse querido."
    },
    {
        "pageNumber": 386,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Hay noches en las que el futuro parece demasiado grande.\nY, sinceramente, eso antes me daba un poco de miedo.\nHoy ya no tanto.\nNo porque tenga todas las respuestas.\nSigo sin tenerlas.\nPero descubrí algo.\nNo necesito saber exactamente cómo será el camino para sentir ilusión por recorrerlo.\nMe basta con imaginar que, si la vida nos da la oportunidad, podremos seguir construyendo algo bonito paso a paso.\nSin prisa.\nSin compararnos con nadie.\nSin intentar demostrar nada.\nSolo viviendo nuestra historia al ritmo que nosotros decidamos."
    },
    {
        "pageNumber": 387,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Porque las historias más bonitas nunca fueron las más rápidas.\nFueron las que tuvieron tiempo para echar raíces.\nY, mientras escribo estas líneas, siento que eso es exactamente lo que deseo para nosotros.\nQue todo lo que nazca entre nosotros tenga raíces profundas.\nQue no dependa de un momento bonito.\nQue no dependa de la emoción del principio."
    },
    {
        "pageNumber": 388,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Que encuentre razones nuevas para seguir creciendo incluso cuando pasen los años.\nPorque hay sentimientos que brillan muchísimo durante un instante.\nY hay otros que aprenden a me iluminar toda una vida.\nSi algún día tengo la suerte de compartir ese camino contigo, no pediría nada más extraordinario que eso.\nSolo seguir encontrando, una y otra vez, la misma paz que encontré el día en que empezaste a formar parte de mi vida."
    },
    {
        "pageNumber": 389,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y, mientras sigo escribiendo, me doy cuenta de algo que probablemente debí entender desde hace mucho.\nEl amor no siempre llega para cambiar el mundo.\nA veces llega para cambiar la manera en la que tú lo miras.\nPorque el mundo sigue siendo exactamente el mismo.\nLas calles por donde camino siguen ahí.\nEl cielo continúa amaneciendo y oscureciendo todos los días.\nLas personas siguen con sus vidas.\nLas responsabilidades no desaparecieron.\nLos problemas tampoco."
    },
    {
        "pageNumber": 390,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y, aun así, algo es completamente distinto.\nMi forma de vivir todo eso.\nEs increíble cómo una sola persona puede cambiar la perspectiva desde la que observas la vida.\nAntes había días que simplemente pasaban.\nAhora hay días que quiero recordar.\nAntes las semanas eran solo semanas.\nAhora algunas tienen un significado especial porque sé que voy a verte.\nAntes los abrazos eran un gesto.\nAhora se convirtieron en un lugar.\nY nunca imaginé que pudiera existir una diferencia tan grande.\n\nHay una palabra que siempre me ha gustado.\nHogar."
    },
    {
        "pageNumber": 391,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Curiosamente, durante mucho tiempo pensé que un hogar era únicamente un lugar.\nCuatro paredes.\nUn techo.\nUna dirección.\nHoy ya no lo veo así.\nCreo que un hogar también puede ser una persona.\nNo porque vivas dentro de ella.\nSino porque, cuando estás a su lado, algo dentro de ti deja de sentirse perdido."
    },
    {
        "pageNumber": 392,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y eso es exactamente lo que me ocurre contigo.\nNo importa demasiado dónde estemos.\nLo importante es que estás.\nPorque cuando estás tú, cualquier lugar parece un poco más amable.\nMucho más tranquilo.\nMucho más bonito."
    },
    {
        "pageNumber": 393,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Hay algo que quiero confesarte y que quizá nunca habría dicho en voz alta.\nA veces tengo miedo de que las palabras no alcancen.\nNo solamente en esta carta.\nEn la vida.\nTengo miedo de que un día quiera explicarte todo lo que significas para mí y descubra que el idioma entero sigue siendo demasiado pequeño.\nPorque hay sentimientos que parecen vivir en un lugar donde las palabras ya no llegan.\nY eso me desespera un poco.\nNo porque me falten ganas de hablar.\nSino porque quisiera que pudieras sentir, aunque fuera durante unos segundos, exactamente lo que siento yo cuando te abrazo."
    },
    {
        "pageNumber": 394,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Creo que entonces entenderías por qué escribí todo esto.\nPorque descubrirías que cada página sigue siendo apenas un intento.\nUno muy sincero.\nPero un intento al fin y al cabo."
    },
    {
        "pageNumber": 395,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Hay ocasiones en las que imagino que alguien toma esta carta sin conocernos.\nEmpieza a leerla.\nY, poco a poco, termina sintiendo que nos conoce un poco.\nQue sabe quién eres.\nQue entiende quién soy cuando estoy contigo.\nY me gusta esa idea.\nPorque significaría que todo esto consiguió transmitir algo mucho más profundo que simples frases bonitas.\nConsiguió transmitir verdad."
    },
    {
        "pageNumber": 396,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y esa era mi intención desde el principio.\nNunca quise escribir la carta más romántica.\nQuise escribir la carta más honesta.\nLa que no necesitara exagerar para emocionar.\nLa que pudiera sostenerse únicamente sobre la sinceridad.\nPorque creo que no existe una palabra más bonita que aquella que nace directamente del corazón."
    },
    {
        "pageNumber": 397,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Hay algo que admiro muchísimo de las personas que aman de verdad.\nNo buscan cambiar al otro para sentirse cómodas.\nAprenden a querer incluso aquello que hace única a esa persona.\nY eso quiero hacer contigo.\nQuiero aprender tus costumbres.\nTus tiempos.\nTus formas de resolver las cosas.\nTus silencios.\nTus entusiasmos.\nTus pequeñas manías.\nTodo aquello que forma parte de ti."
    },
    {
        "pageNumber": 398,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Porque no quiero enamorarme de una idea.\nQuiero enamorarme de la realidad.\nY la realidad siempre tiene pequeños detalles que la hacen mucho más hermosa que cualquier fantasía."
    },
    {
        "pageNumber": 399,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Hay veces en las que pienso que, si la vida fuera un libro, este momento sería apenas el principio de un capítulo enorme.\nTodavía quedan muchas páginas en blanco.\nY eso, lejos de darme incertidumbre, me llena de emoción.\nPorque significa que todavía tenemos espacio para escribir muchísimas cosas.\n\nTodavía hay primeras veces que aún no llegan.\nTodavía hay conversaciones que todavía no nacen.\nTodavía hay días malos que aprenderemos a superar.\nTodavía hay metas que celebraremos.\nTodavía hay abrazos que todavía no existen."
    },
    {
        "pageNumber": 400,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y pensar en todo eso hace que el futuro deje de parecer una incógnita aterradora.\nEmpieza a parecer una promesa de oportunidades.\nNo una promesa asegurada.\nLa vida nunca asegura nada.\nPero sí una oportunidad.\nY me gustaría aprovecharla contigo."
    },
    {
        "pageNumber": 401,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Hay algo que nunca quisiera olvidar.\nLa manera en la que empezó todo.\nPorque muchas veces las personas recuerdan el resultado y olvidan el camino.\nYo quiero recordar ambas cosas.\nQuiero recordar los nervios.\nLas primeras conversaciones.\nLas primeras sonrisas.\nLas primeras dudas.\nLas primeras veces en las que empecé a sospechar que tú ibas a significar mucho más de lo que imaginaba.\n\nPorque ahí comenzó todo.\nY algún día, cuando nuestra historia tenga muchas más páginas que las que hoy podemos me imaginar, quiero volver a este principio con la misma ternura con la que hoy lo escribo."
    },
    {
        "pageNumber": 402,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Hay una tranquilidad muy extraña que siento mientras termino estas páginas.\nNo es la tranquilidad de quien ya dijo todo.\nPorque estoy seguro de que todavía me quedarían miles de cosas por escribir.\nEs la tranquilidad de saber que, por primera vez en mucho tiempo, no escondí absolutamente nada.\n\nAbrí el corazón.\nLo puse frente a ti.\nCon sus miedos.\nCon sus ilusiones.\nCon sus dudas.\nCon sus esperanzas."
    },
    {
        "pageNumber": 403,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y, aunque eso siempre da un poco de vértigo, también se siente increíblemente liberador.\nPorque amar también es eso.\nAceptar que alguien vea las partes más vulnerables de ti y, aun así, decidir confiar.\n\nY, si estoy haciendo todo esto, es porque creo que tú vales ese acto de confianza.\nPorque desde que llegaste me enseñaste, sin decirlo directamente, que todavía existen personas con las que uno puede sentirse seguro siendo exactamente quien es.\nY, créeme...\nEse tipo de personas aparecen muy pocas veces en la vida."
    },
    {
        "pageNumber": 404,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Por eso quiero cuidar esta historia.\nNo con miedo a perderla.\nSino con la ilusión inmensa de verla crecer.\nPorque algunas historias nacen para ser un recuerdo bonito.\nY otras nacen con la esperanza silenciosa de convertirse, algún día, en el lugar donde dos personas decidan quedarse.\n\nY, si algún día llegamos a ese punto, quiero que nunca olvidemos algo.\nNo fuimos dos personas que se encontraron teniendo la vida resuelta."
    },
    {
        "pageNumber": 405,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Nos encontramos mientras seguíamos aprendiendo.\nMientras todavía había cosas por sanar.\nMientras aún existían preguntas sin respuesta.\nMientras seguíamos intentando entender muchas partes de nosotros mismos.\nY eso me parece mucho más bonito.\n\nPorque significa que no llegamos al final de un camino.\nNos encontramos justo cuando ambos seguíamos construyéndolo."
    },
    {
        "pageNumber": 406,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Hay una diferencia enorme entre alguien que aparece para distraerte de la vida y alguien que aparece para caminarla contigo.\nTú, desde el principio, me hiciste sentir lo segundo.\nNunca sentí que necesitara me escapar de mi realidad cuando estaba contigo.\nAl contrario.\nSentía que quería vivirla aún más.\nPorque ahora existía la posibilidad de compartirla."
    },
    {
        "pageNumber": 407,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y eso cambia completamente el sentido de las cosas.\nLas buenas noticias ya no son solamente buenas noticias.\nSe convierten en algo que quiero contarte.\nLos días difíciles ya no parecen una carga tan pesada.\nPorque existe alguien cuya presencia logra hacerlos un poco más ligeros.\nLas metas dejan de sentirse únicamente personales.\nPorque también nace la ilusión de que alguien celebre contigo cuando lleguen.\n\nNunca había pensado que el amor pudiera transformar tantas cosas sin hacer ruido.\nY, sin embargo, eso fue exactamente lo que pasó."
    },
    {
        "pageNumber": 408,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Hay veces en las que me pregunto qué pensará el destino de todo esto.\nY enseguida me río un poco.\nPorque nunca he sido una persona que crea demasiado en esas cosas.\nPero, sea casualidad, suerte o simplemente una coincidencia inmensa, agradezco que nuestros caminos se hayan cruzado.\nPorque, si no hubiera ocurrido, probablemente seguiría viviendo exactamente igual."
    },
    {
        "pageNumber": 409,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y eso es lo que más me impresiona.\nNo siento que tú hayas llegado únicamente para añadir algo bonito a mi vida.\nSiento que cambiaste la manera en la que vivo esa misma vida.\nY esa diferencia es enorme.\n\nHay personas que dejan recuerdos.\nTú estás dejando una forma distinta de mirar el mundo.\n\nHay algo que siempre voy a admirar.\nLa capacidad que tienen algunas personas para convertirse en calma.\nNo porque tengan respuestas para todo.\nNi porque nunca se equivoquen.\nSimplemente porque su presencia transmite una paz difícil de explicar.\nEsa paz la encontré contigo."
    },
    {
        "pageNumber": 410,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y quiero que sepas que nunca la doy por hecha.\nLa valoro muchísimo.\nPorque sé que no es fácil encontrar a alguien con quien puedas bajar la guardia sin sentir miedo.\nCon quien puedas guardar silencio sin sentir presión.\nCon quien puedas ser tú sin preguntarte todo el tiempo si eso será suficiente.\nGracias por hacerme sentir así.\n\nNo sé si alguna vez dimensionarás lo importante que ha sido eso para mí.\nPero necesitaba dejarlo escrito."
    },
    {
        "pageNumber": 411,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Hay una pequeña costumbre que me gustaría tener contigo algún día.\nPreguntarnos, de vez en cuando:\n\"¿Cómo está tu corazón?\"\nNo \"¿Cómo estuvo tu día?\"\nNo \"¿Cómo te fue?\"\nSino esa otra pregunta.\nPorque el corazón cambia constantemente.\nHay días donde está lleno de ilusión.\nOtros donde carga preocupaciones.\nAlgunos donde simplemente necesita descansar."
    },
    {
        "pageNumber": 412,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y creo que pocas personas se detienen realmente a preguntar eso.\nYo quisiera hacerlo.\nQuisiera que siempre sintieras que, más allá de todo lo demás, me importa cómo estás tú por dentro.\nPorque eso eres tú.\nNo solamente tus logros.\nNo solamente tus responsabilidades.\nNo solamente lo que haces.\nSino lo que sientes.\nY nunca quisiera olvidar esa diferencia."
    },
    {
        "pageNumber": 413,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Mientras escribo estas páginas siento que, poco a poco, la carta empieza a acercarse a su final.\nY me provoca una sensación extraña.\nNo de tristeza.\nMás bien de nostalgia anticipada.\nComo cuando sabes que una conversación muy bonita está terminando y quisieras encontrar una excusa para seguir hablando un rato más."
    },
    {
        "pageNumber": 414,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Así me siento.\nPorque, aunque llevo muchísimas páginas hablándote del mismo sentimiento, tengo la impresión de que apenas estoy empezando.\nSupongo que el cariño funciona así.\nNunca termina de explicarse.\nSiempre encuentra una razón nueva para seguir hablando.\nSiempre descubre un recuerdo más.\nUna emoción más.\nUn detalle que todavía no había mencionado.\nY eso hace que despedirse de esta carta resulte un poquito difícil.\nPorque siento que, en cuanto escriba el último punto, todavía me quedarán miles de palabras esperando turno.\n\nPero también pienso algo.\nQuizá está bien que ocurra así."
    },
    {
        "pageNumber": 415,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Porque significa que esta carta no será el final de todo lo que quiero decirte.\nSerá apenas el comienzo.\n\nMe gusta imaginar que, con el paso de los años, escribiré otras cartas.\nTal vez no tan largas.\nO quizá incluso más.\nQuién sabe.\nPero me gusta pensar que nunca dejaré de encontrar razones para escribirte.\nPorque cuando alguien realmente inspira, las palabras siempre encuentran el camino de regreso."
    },
    {
        "pageNumber": 416,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Hay una escena que me hace mucha ilusión imaginar.\nNo importa cuántos años hayan pasado.\nTe veo leyendo esta carta otra vez.\nTal vez ya esté un poco doblada.\nQuizá algunas hojas tengan marcas del tiempo.\nPuede que incluso encontremos alguna esquina arrugada de tantas veces que volvió a abrirse.\n\nY entonces tú sonríes.\nNo porque todas las palabras sean perfectas.\nSino porque recuerdas exactamente cómo nos sentíamos cuando fueron escritas."
    },
    {
        "pageNumber": 417,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Creo que ese sería uno de los regalos más bonitos que podría dejarte.\nNo solamente una carta.\nSino una fotografía de todo lo que vivía mi corazón en este momento de mi vida.\nPara que, si algún día la memoria empieza a borrar pequeños detalles, estas páginas puedan recordarnos quiénes éramos.\nQué soñábamos.\nQué sentíamos.\nQué esperábamos construir.\n\nPorque el tiempo cambia muchas cosas.\nPero también puede conservar algunas, si uno decide escribirlas antes de que se escapen."
    },
    {
        "pageNumber": 418,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y eso es exactamente lo que intenté hacer aquí.\nGuardar este instante.\nAntes de que el tiempo siguiera me avanzando.\nAntes de que nosotros cambiáramos.\nAntes de que la vida nos sorprendiera con nuevas historias.\nQuise detener este momento entre estas páginas.\nPara que, sin importar cuándo vuelvas a leerlas, siempre exista un lugar donde este \"nosotros\" permanezca exactamente como hoy.\n\nY, sinceramente...\nNo se me ocurre un lugar mejor para guardar una parte de mi corazón que entre las manos de la mujer que logró enseñarme que el amor, cuando es verdadero, no hace más ruido que el de un corazón encontrando por fin un lugar donde descansar."
    },
    {
        "pageNumber": 419,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y, si algún día llegamos a ese punto, quiero que nunca olvidemos algo.\nNo fuimos dos personas que se encontraron teniendo la vida resuelta.\nNos encontramos mientras seguíamos aprendiendo.\nMientras todavía había cosas por sanar.\nMientras aún existían preguntas sin respuesta.\nMientras seguíamos intentando entender muchas partes de nosotros mismos.\n\nY eso me parece mucho más bonito.\nPorque significa que no llegamos al final de un camino.\nNos encontramos justo cuando ambos seguíamos construyéndolo."
    },
    {
        "pageNumber": 420,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Hay una diferencia enorme entre alguien que aparece para distraerte de la vida y alguien que aparece para caminarla contigo.\nTú, desde el principio, me hiciste sentir lo segundo.\nNunca sentí que necesitara escapar de mi realidad cuando estaba contigo.\nAl contrario.\nSentía que quería vivirla aún más.\nPorque ahora existía la posibilidad de compartirla.\n\nY eso cambia completamente el sentido de las cosas.\nLas buenas noticias ya no son solamente buenas noticias.\nSe convierten en algo que quiero contarte."
    },
    {
        "pageNumber": 421,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Los días difíciles ya no parecen una carga tan pesada.\nPorque existe alguien cuya presencia logra hacerlos un poco más ligeros.\nLas metas dejan de sentirse únicamente personales.\nPorque también nace la ilusión de que alguien celebre contigo cuando lleguen.\n\nNunca había pensado que el amor pudiera transformar tantas cosas sin hacer ruido.\nY, sin embargo, eso fue exactamente lo que pasó.\n\nHay veces en las que me pregunto qué pensará el destino de todo esto.\nY enseguida me río un poco.\nPorque nunca he sido una persona que crea demasiado en esas cosas.\nPero, sea casualidad, suerte o simplemente una coincidencia inmensa, agradezco que nuestros caminos se hayan cruzado.\nPorque, si no hubiera ocurrido, probablemente seguiría viviendo exactamente igual."
    },
    {
        "pageNumber": 422,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y eso es lo que más me impresiona.\nNo siento que tú hayas llegado únicamente para añadir algo bonito a mi vida.\nSiento que cambiaste la manera en la que vivo esa misma vida.\nY esa diferencia es enorme.\n\nHay personas que dejan recuerdos.\nTú estás dejando una forma distinta de mirar el mundo.\n\nHay algo que siempre voy a admirar.\nLa capacidad que tienen algunas personas para convertirse en calma.\nNo porque tengan respuestas para todo.\nNi porque nunca se equivoquen.\nSimplemente porque su presencia transmite una paz difícil de explicar.\nEsa paz la encontré contigo."
    },
    {
        "pageNumber": 423,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y quiero que sepas que nunca la doy por hecha.\nLa valoro muchísimo.\nPorque sé que no es fácil encontrar a alguien con quien puedas bajar la guardia sin sentir miedo.\nCon quien puedas guardar silencio sin sentir presión."
    },
    {
        "pageNumber": 424,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Con quien puedas ser tú sin preguntarte todo el tiempo si eso será suficiente.\nGracias por hacerme sentir así.\n\nNo sé si alguna vez dimensionarás lo importante que ha sido eso para mí.\nPero necesitaba dejarlo escrito.\n\nHay una pequeña costumbre que me gustaría tener contigo algún día.\nPreguntarnos, de vez en cuando:\n\"¿Cómo está tu corazón?\"\nNo \"¿Cómo estuvo tu día?\"\nNo \"¿Cómo te fue?\"\nSino esa otra pregunta."
    },
    {
        "pageNumber": 425,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Porque el corazón cambia constantemente.\nHay días donde está lleno de ilusión.\nOtros donde carga preocupaciones.\nAlgunos donde simplemente necesita descansar.\nY creo que pocas personas se detienen realmente a preguntar eso.\nYo quisiera hacerlo.\nQuisiera que siempre sintieras que, más allá de todo lo demás, me importa cómo estás tú por dentro."
    },
    {
        "pageNumber": 426,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Porque eso eres tú.\nNo solamente tus logros.\nNo solamente tus responsabilidades.\nNo solamente lo que haces.\nSino lo que sientes.\nY nunca quisiera olvidar esa diferencia.\n\nMientras escribo estas páginas siento que, poco a poco, la carta empieza a acercarse a su final.\nY me provoca una sensación extraña.\nNo de tristeza.\nMás bien de nostalgia anticipada.\nComo cuando sabes que una conversación muy bonita está terminando y quisieras encontrar una excusa para seguir hablando un rato más."
    },
    {
        "pageNumber": 427,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Así me siento.\nPorque, aunque llevo muchísimas páginas hablándote del mismo sentimiento, tengo la impresión de que apenas estoy empezando.\n\nSupongo que el cariño funciona así.\nNunca termina de explicarse.\nSiempre encuentra una razón nueva para seguir hablando.\nSiempre descubre un recuerdo más.\nUna emoción más.\nUn detalle que todavía no había mencionado.\nY eso hace que despedirse de esta carta resulte un poquito difícil.\nPorque siento que, en cuanto escriba el último punto, todavía me quedarán miles de palabras esperando turno."
    },
    {
        "pageNumber": 428,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Pero también pienso algo.\nQuizá está bien que ocurra así.\nPorque significa que esta carta no será el final de todo lo que quiero decirte.\nSerá apenas el comienzo.\n\nMe gusta imaginar que, con el paso de los años, escribiré otras cartas.\nTal vez no tan largas.\nO quizá incluso más.\nQuién sabe.\nPero me gusta pensar que nunca dejaré de encontrar razones para escribirte.\nPorque cuando alguien realmente inspira, las palabras siempre encuentran el camino de regreso."
    },
    {
        "pageNumber": 429,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Hay una escena que me hace mucha ilusión imaginar.\nNo importa cuántos años hayan pasado.\nTe veo leyendo esta carta otra vez.\nTal vez ya esté un poco doblada.\nQuizá algunas hojas tengan marcas del tiempo.\nPuede que incluso encontremos alguna esquina arrugada de tantas veces que volvió a abrirse.\n\nY entonces tú sonríes."
    },
    {
        "pageNumber": 430,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "No porque todas las palabras sean perfectas.\nSino porque recuerdas exactamente cómo nos sentíamos cuando fueron escritas.\n\nCreo que ese sería uno de los regalos más bonitos que podría dejarte.\nNo solamente una carta.\nSino una fotografía de todo lo que vivía mi corazón en este momento de mi vida.\nPara que, si algún día la memoria empieza a borrar pequeños detalles, estas páginas puedan recordarnos quiénes éramos.\nQué soñábamos.\nQué sentíamos.\nQué esperábamos construir.\n\nPorque el tiempo cambia muchas cosas.\nPero también puede conservar algunas, si uno decide escribirlas antes de que se escapen."
    },
    {
        "pageNumber": 431,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y eso es exactamente lo que intenté hacer aquí.\nGuardar este instante.\nAntes de que el tiempo siguiera avanzando.\nAntes de que nosotros cambiáramos.\nAntes de que la vida nos sorprendiera con nuevas historias.\nQuise detener este momento entre estas páginas.\nPara que, sin importar cuándo vuelvas a leerlas, siempre exista un lugar donde este \"nosotros\" permanezca exactamente como hoy.\n\nY, sinceramente...\nNo se me ocurre un lugar mejor para guardar una parte de mi corazón que entre las manos de la mujer que logró enseñarme que el amor, cuando es verdadero, no hace más ruido que el de un corazón encontrando por fin un lugar donde descansar."
    },
    {
        "pageNumber": 432,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y, después de todo lo que he escrito, me doy cuenta de que esta carta nunca tuvo la intención de impresionarte.\nNunca quise llenar páginas solo por llenarlas.\nNunca busqué escribir las frases más bonitas.\nLo único que quería era dejar una parte de mí contigo."
    },
    {
        "pageNumber": 433,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Algo que pudiera quedarse incluso cuando yo no estuviera a tu lado.\nAlgo que, si algún día tienes una noche difícil, puedas abrir al azar y encontrar entre estas páginas una razón para sonreír.\n\nPorque, aunque el tiempo cambie muchas cosas, me gusta pensar que las palabras sinceras tienen una forma muy especial de quedarse viviendo dentro de las personas."
    },
    {
        "pageNumber": 434,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Quizá algún día esta carta ya no sea nueva.\nLas hojas estarán un poco dobladas.\nTal vez el papel tenga pequeñas marcas de tantas veces que fue abierto.\nQuizá alguna esquina esté desgastada.\nY, sinceramente, espero que así sea.\nPorque significará que volvió a tus manos más de una vez.\nQue, en algún momento, decidiste regresar a estas páginas para reencontrarte con la persona que era yo cuando las escribí."
    },
    {
        "pageNumber": 435,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y eso me hace feliz.\nPorque estas hojas no guardan únicamente palabras.\nGuardan una versión muy específica de mí.\nLa de un hombre que decidió dejar el orgullo a un lado para hablar desde el corazón.\nLa de alguien que, por primera vez en mucho tiempo, sintió que no tenía sentido esconder lo que sentía.\nLa de alguien que encontró en ti una paz que nunca imaginó encontrar.\nY esa versión de mí siempre va a existir aquí, entre cada línea.\n\nHay algo que quiero pedirte.\nNo es una promesa.\nNo es una obligación.\nEs solo un deseo."
    },
    {
        "pageNumber": 436,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Si algún día vuelves a leer esta carta dentro de muchos años, no la leas pensando en si escribía bonito o no.\nLéela intentando recordar cómo nos sentíamos.\nPorque eso fue lo único importante mientras la escribía."
    },
    {
        "pageNumber": 437,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Cada palabra nació de un momento real.\nDe una emoción verdadera.\nDe una ilusión sincera.\nNo intenté parecer alguien más.\nNo intenté sonar perfecto.\nSolo quise sonar como yo.\nPorque entendí que el amor no necesita discursos impecables.\nNecesita verdad.\nY toda esta carta, desde la primera letra hasta la última, está hecha únicamente de eso.\nVerdad."
    },
    {
        "pageNumber": 438,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Hay una última imagen que quiero dejarte antes de terminar.\nImagina un reloj de arena.\nCada grano cae lentamente.\nUno por uno.\nEs imposible detenerlo.\nAsí pasa la vida.\nAsí pasan los días.\nLas semanas.\nLos años.\n\nNo podemos hacer que el tiempo espere.\nPero sí podemos decidir con quién queremos compartirlo mientras pasa.\nY si hoy me preguntaran con quién quisiera ver caer cada uno de esos granos de arena, mi respuesta tendría tu nombre."
    },
    {
        "pageNumber": 439,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Porque entendí que el tiempo no vale por la cantidad que tenemos.\nVale por las personas con quienes decidimos vivirlo.\nY, si la vida me regalara la oportunidad, elegiría compartir muchísimos de mis días contigo.\n\nNo porque crea que seríamos una historia perfecta.\nLas historias perfectas no existen.\nHabrá diferencias."
    },
    {
        "pageNumber": 440,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Habrá momentos difíciles.\nHabrá días donde alguno de los dos no tenga la mejor versión de sí mismo.\nY aun así...\nSi al final del día seguimos eligiendo sentarnos uno al lado del otro, hablar, escucharnos, abrazarnos y recordar por qué empezamos todo esto, entonces creo que tendremos algo mucho más valioso que una historia perfecta.\nTendremos una historia real.\nY, para mí, eso siempre será mucho más hermoso."
    },
    {
        "pageNumber": 441,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Quiero que sepas que, mientras escribía estas páginas, hubo momentos en los que sonreí sin darme cuenta.\nOtros en los que me quedé varios minutos mirando el mismo punto, pensando cómo explicar una emoción que parecía demasiado grande para cualquier palabra.\nHubo instantes en los que escribí muy rápido porque las ideas salían solas.\nY otros en los que preferí detenerme un momento para asegurarme de que cada frase sonara exactamente como la sentía."
    },
    {
        "pageNumber": 442,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Porque esta carta nunca fue un ejercicio de escritura.\nFue una conversación contigo.\nSolo que una conversación donde tú todavía no podías responder.\nY, curiosamente, eso hizo que sintiera la necesidad de contarte absolutamente todo.\nHasta lo que normalmente callo.\nHasta lo que muchas veces ni siquiera sé explicar.\nPorque, cuando alguien se vuelve tan importante, ya no quieres que adivine lo que sientes.\nQuieres que lo sepa.\nCon claridad.\nSin dudas.\nSin tener que me imaginarlo."
    },
    {
        "pageNumber": 443,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Si después de leer todo esto hubiera una sola idea que me gustaría que permaneciera contigo, sería esta.\nGracias."
    },
    {
        "pageNumber": 444,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Gracias por aparecer cuando menos lo esperaba.\nGracias por enseñarme que todavía era posible sentir esta tranquilidad.\nGracias por demostrarme que el cariño más bonito no siempre es el que hace más ruido, sino el que permanece incluso en los días más simples.\nGracias por regalarme conversaciones que hicieron mis días más ligeros.\nGracias por las sonrisas que nunca supiste que provocaste.\nGracias por cada abrazo que convirtió el caos en silencio.\nGracias por existir de la manera en que existes.\n\nY, sobre todo...\nGracias por dejarme conocerte.\nPorque, aunque muchas veces pienso que fui yo quien tuvo la suerte de encontrarte, también espero que algún día puedas sentir que encontrarme valió la pena."
    },
    {
        "pageNumber": 445,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "No sé qué nos espera más adelante.\nSería muy fácil escribir que sé exactamente cómo será nuestro futuro.\nPero la verdad es que no lo sé.\nNadie lo sabe.\nLa vida tiene una forma muy curiosa de sorprendernos.\nY, precisamente por eso, no quiero hacer promesas imposibles.\nPrefiero hacer algo mucho más sincero."
    },
    {
        "pageNumber": 446,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Prometer que, mientras nuestros caminos sigan caminando en la misma dirección, voy a cuidar esto con todo lo que soy.\nVoy a elegir el diálogo antes que el orgullo.\nLa paciencia antes que el enojo.\nLa comprensión antes que las suposiciones.\nLos abrazos antes que la distancia.\nY el amor antes que el miedo.\n\nPorque creo que eso es lo único que realmente está en nuestras manos.\nElegirnos.\nUna y otra vez.\n\nY ahora sí..."
    },
    {
        "pageNumber": 447,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Creo que ha llegado el momento de guardar silencio.\nNo porque ya no tenga nada que decir.\nAl contrario.\nSiento que todavía podría escribir cientos de páginas más.\nPero me gusta pensar que el resto de esta historia ya no tiene que escribirse con tinta.\nTiene que escribirse viviendo.\n\nCon nuevos recuerdos.\nCon nuevas risas.\nCon nuevos abrazos.\nCon nuevos días comunes que, sin darnos cuenta, algún día también se convertirán en nuestros recuerdos favoritos."
    },
    {
        "pageNumber": 448,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Así que cierro esta carta con el corazón mucho más ligero de como empezó.\nPorque todas estas páginas lograron algo que esperaba desde el principio.\nLlevarte, aunque fuera por un momento, exactamente al lugar donde nacen todos estos sentimientos.\n\nY si alguna vez dudas de cuánto significas para mí, no intentes recordar cada palabra de estas ciento veintiocho páginas.\nRecuerda solamente esto.\nDe todas las casualidades que pudieron ocurrir en mi vida, conocerte fue, sin duda, la más hermosa."
    },
    {
        "pageNumber": 449,
        "chapter": 7,
        "isChapterTitlePage": false,
        "content": "Y si volviera a empezar mi historia desde el principio, con la posibilidad de cambiar cualquier decisión que he tomado, habría muchas cosas que haría diferente.\nPero hay una que repetiría una y mil veces sin pensarlo.\nVolvería a me caminar exactamente hasta el instante en que nuestros caminos se cruzaron.\n\nPorque fue ahí donde, sin saberlo, empezó una de las partes más bonitas de mi vida.\n\nCon todo mi corazón,\nAndre. ❤️"
    }
];

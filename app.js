const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot');
const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');
const { NumerosALetras } = require('numero-a-letras');
require('numero-a-letras');

const flowMensajeVoz = addKeyword(EVENTS.VOICE_NOTE)
    .addAnswer(
        '*Disculpe los inconvenientes por el momento no puedo procesar audios, pero puedo ayudarl@ de otras maneras.* \n' +
        'Por favor, *elige una opción* para resolver tus dudas:\n\n' +
        '1. 📞 *Atención con el coordinador*\n' +
        '2. 🏡 *Ubicación*\n' +
        '3. 💰 *Inversión*\n' +
        '4. 📝 *Requisitos*\n' +
        '5. 📋 *Formularios*\n\n' +
        '*Visita nuestra web*: https://imb.edu.pe/ '
    );

var uno = 1;
const conUno = NumerosALetras(uno).toLowerCase();

var dos = 2;
const condos = NumerosALetras(dos).toLowerCase();

var tres = 3;
const contres = NumerosALetras(tres).toLowerCase() ;

var cuatro = 4;
const concuatro = NumerosALetras(cuatro).toLowerCase();

var cinco = 5;
const concinco =NumerosALetras(cinco).toLowerCase();


const keywordsRespuestas = [
    // Opciones del menú
    { keyword: ['Buenos dias', 'días', 'dia', 'Buenas tardes', 'hi','ola','tardes', 'buenas noches', 'noches', 'buenas', 'buen dia', 'buen', 'que tal', 'hola', 'como estas', 'info por favor', 'info porfavor', 'info', 'informacion', 'información', 'holas', 'hello', 'Vi esto en Facebook...', '¿Pueden brindarme más información?', 'Necesito información', 'Me puede brindar información','brindarme','brindar','informa','necesito'],
        respuesta: `*¡Buen día!* 👋 \nSoy El Asesor *IMB ONLINE* 📚\nEstoy aquí para asistirte *paso a paso. ¿Cómo Podemos Ayudarte Hoy?🤔*\n\nPor favor, *digite el número de la opción* a elegir:\n\n*1*. *Consulta con el Coordinador* 📞\n*2*. *Ubicación de Nuestro Instituto* 🌎\n*3*. *Información sobre Costos* 💰\n*4*. *Requisitos de Admisión* 📝\n*5*. *Acceso a Formularios* 📋\n\n *Nuestra web*: https://imb.edu.pe/`
    },

    { keyword: ['Cómo son las clases', 'Que modalidad es?', 'Es presencial o remoto?','presencial','remoto','desde'],
     respuesta: '👋 Hola, el *Instituto Manuel Banda Online* es de modalidad a distancia *(100% virtual) orientada para adultos que trabajan.*'
    },
    
    { keyword: ['menu', 'menus','seleccionar','opciones','opcion','menú'],  
        respuesta: '*¡Buen día!* 👋 \n*Le presento Nuestro menú de información*📖📚\n\nPor favor, *digite el número de la opción* a elegir:\n\n*1*. *Atención con el coordinador* 📞\n*2*. *Ubicación* 🌎\n*3*. *Costos* 💰\n*4*. *Requisitos* 📝\n*5*. *Formularios* 📋\n\nEstoy aquí para *ayudarte* con cualquier duda, *¡No dudes en escribirme!* 😊🚀\n\n*Nuestra web*: https://imb.edu.pe/' },

    { keyword: ['Si cumplo', '!Si cumplo¡', 'si cumploo', 'si cumplooo', 'cumplo', 'claro, si cumplo','cumplir','sicum','si cumplo'], 
         respuesta: '*¡Genial!* 😄\n\n*Un coordinador le llamará 📞 en los próximos minutos para que le proporcione más información y los pasos para su inscripción.* 📝'
    },
    { keyword: ['ok, gracias', 'ok gracias', 'ok entiendo', 'ok, entiendo','gracias','gracia','vale, gracias', 'vale, entiendo','entendido','entiend'], 
         respuesta: '*¡Perfecto!* 😊 Si tienes más preguntas o necesitas ayuda, estoy aquí para *ayudarte* en lo que necesites. 🚀'
    },

];

const flows = keywordsRespuestas.map(({ keyword, respuesta }) =>
    addKeyword(keyword).addAnswer(respuesta)
);

const defaultResponse = addKeyword('.').addAnswer(['']);

const FlowMenu1 = addKeyword(uno.toString(), conUno,'uno','one', 'Atencion con el coordinador','llamar','atencion','comunicarme','llamarme','llamarlos','Asesoría','asesor').addAnswer(
    ['*¡Perfecto!*, El coordinador estará en contacto contigo en los próximos minutos para atenderte. *¡Gracias por tu interés!* 😊\n\n Si prefieres, puedes llamar ahora mismo al siguiente número: *924 230 874* 📞']
    );

const FlowMenu2 = addKeyword(dos.toString(), condos,'dos', 'Ubicación','ubicados','Ubicacion','donde estan','se encuentran','encuentro','ubicar','encuentran','direccion','dirección','Lugar','sitio','Campus','instalaciones','edificio','casa','calle','ruta','referencia','como llego','como llegar', '¿Dónde están ubicados?', 'Mandar ubicación', 'Mandenme su ubicación').addAnswer(
    ['📍 Estamos Ubicados en *Calle la Victoria 165, Guadalupe 13841, La Libertad.*']
    );

const FlowMenu3 = addKeyword(tres.toString(),contres,'tres', 'Costos','precio','pagar','cuanto','debo pagar','tarifas','pagos','pago','mensualidad','cuota','inversión','valor','gastos').addAnswer(
    ['*¡Hola!* 👋 Aquí te muestro la *Inversión* 📚:\n\n*Si eres Apto, pagarías lo siguiente*:\n📄 Inscripción: s/100\n\n📑 Informe de con validación CICLO I y CICLO II: s/100\n\n📚 *Matrícula del Ciclo III*: *s/* 150\n💵 *Costo del Ciclo III:* *s/* 600\n💰 *Total del Ciclo III*: *s/* 750 \n\n*Recuerda que puedes pagar el ciclo en un máximo de 4 cuotas mensuales de s/150*.\n\nSi tienes alguna pregunta o necesitas más información, *¡No dudes en escribirme!* 😊🚀\n\nOh también puedes visitar nuestra web y visualizar los costos:  https://imb.edu.pe/admision/']
    );

const FlowMenu4 = addKeyword(cuatro.toString(), concuatro,'cuatro', 'requisitos','requerimientos','pasos','procedimiento','condiciones','pasos').addAnswer(
    ['*¡Hola!* 👋 Aquí te muestro los *Requisitos* para tu admisión del Instituto *Manuel Banda Online*📚:\n\n🎓 **Requisitos para tu Admisión** 📋\n*1.* Ser mayor de 18 años 🎂\n*2.* Documento de identificación válido o vigente 📄\n*3.* Foto Personal Tipo Pasaporte 📷\n*4.* Certificado de estudios de secundaria 📚\n*5.* Experiencia laboral mínima de 2 años 💼\n\n Si *cumples* con estos requisitos y necesitas más información, Por Favor Escriba *Si cumplo* 😊🚀']
    );

const FlowMenu5 = addKeyword(cinco.toString(), concinco,'sinco','cinco', 'Formularios','registro','registrarme','inscripción','inscribirme','datos','admision','admisión','matrícula','matriculas','matricula','Matricular').addAnswer(
    ['*¡Hola!* 👋 Aquí te muestro los *Formularios* para tu admisión del Instituto *Manuel Banda Online*📚:\n\nEstos son los Formularios que debes completar📋:\n\n*OPCIÓN 1*\n\n📚 *Solicitud de Admisión a IMB Online*: https://forms.gle/pr6vrQT9uBZn3CmcA✍️📙\n\n *Ficha técnica de convalidación por competencias Ciclo I y II*: https://forms.gle/izroccZuJfZwS2F8A \n\n*OPCIÓN 2*\n\n *Convalidación de competencias laborales Ciclo I y Ciclo II*:\nDocumento para descargar en PDF y llenar:\nhttps://bit.ly/Drive-convalidacion-IMB 🏅📚']
    );

const FlowsMenus = [FlowMenu1, FlowMenu2, FlowMenu3, FlowMenu4, FlowMenu5,defaultResponse];

const FlowsMenu = keywordsRespuestas.map(({ keyword, respuesta }) =>
    addKeyword(keyword).addAnswer(respuesta)
).concat([
    // Flujos específicos para cada opción del menú
    addKeyword(uno.toString(), conUno, 'uno', 'one', 'Atencion con el coordinador', 'llamar', 'atencion', 'comunicarme', 'llamarme', 'llamarlos', 'Asesoría', 'asesor').addAnswer(
        ['*¡Perfecto!*, El coordinador estará en contacto contigo en los próximos minutos para atenderte. *¡Gracias por tu interés!* 😊\n\nSi prefieres, puedes llamar ahora mismo al siguiente número: *924 230 874* 📞']
    ),
    addKeyword(dos.toString(), condos, 'dos', 'Ubicación', 'ubicados', 'Ubicacion', 'donde estan', 'se encuentran', 'encuentro', 'ubicar', 'encuentran', 'direccion', 'dirección', 'Lugar', 'sitio', 'Campus', 'instalaciones', 'edificio', 'casa', 'calle', 'ruta', 'referencia', 'como llego', 'como llegar', '¿Dónde están ubicados?', 'Mandar ubicación', 'Mandenme su ubicación').addAnswer(
        ['📍 Estamos Ubicados en *Calle La Victoria 165, Guadalupe 13841, La Libertad.*']
    ),
    addKeyword(tres.toString(),contres,'tres', 'Costos','precio','pagar','cuanto','debo pagar','tarifas','pagos','pago','mensualidad','cuota','inversión','valor','gastos').addAnswer(
        ['*¡Hola!* 👋,Aquí te muestro los *Pagos* 📚:\n\n👏 *Si eres Apto:* \n📩 *Inscripción* : *S/100* \n✅ *Informe de convalidación PRIMER CICLO y SEGUNDO CICLO* : *S/100* \n📚 *Matrícula del Ciclo TERCER CICLO*: *S/* 150\n📚 *Mensualidad del Mes de Marzo:*  *S/150* \n\nSi tienes alguna pregunta o necesitas más información, *¡No dudes en escribirme!* 😊🚀\n\n*Oh también puedes visitar nuestra web y visualizar los costos:*  https://imb.edu.pe/admision/']
    ),
    addKeyword(cuatro.toString(), concuatro,'cuatro', 'requisitos','requerimientos','pasos','procedimiento','condiciones','pasos').addAnswer(
        ['*¡Hola!* 👋,Aquí te muestro los *Requisitos* para tu admisión del Instituto *Manuel Banda Online*📚:\n\n🎓 *Requisitos para tu Admisión* 📋\n*✅ Ser mayor de 18 años* 🎂\n*✅ Documento de identificación válido o vigente* 📑\n*✅ Foto Personal Tipo Pasaporte* 📷\n*✅ Certificado de estudios de secundaria* 📚\n*✅ Experiencia laboral mínima de 2 años* 💼\n\nSi *cumples* con estos requisitos y necesitas más información, Por Favor Escriba *Si cumplo* 😊🚀']
    ),
    addKeyword(cinco.toString(), concinco,'sinco','cinco', 'Formularios','registro','registrarme','inscripción','inscribirme','datos','admision','admisión','matrícula','matriculas','matricula','Matricular').addAnswer(
        ['*¡Hola!* 👋,Aquí te muestro los *Formularios* para tu admisión del Instituto *Manuel Banda Online*📚:\n\nEstos son los Formularios que debes completar📋:\n\n*OPCIÓN 1*\n\n📚 *Ficha de Inscripción a IMB Online*: https://docs.google.com/forms/d/e/1FAIpQLScdTYQwrOi1Hwi3b0axiVG8CXYSFM33S1vCKFUXAWJ2I9LQpg/viewform ✍️📙\n\n*Ficha técnica de convalidación por competencias Primer Y Segundo Ciclo*: https://forms.gle/izroccZuJfZwS2F8A \n\n*OPCIÓN 2*\n\n *Convalidación de competencias laborales Primer y Segundo Ciclo*:\nDocumento para descargar en PDF y llenar:\nhttps://bit.ly/Drive-convalidacion-IMB 🏅📚']
    ),
    // Flujos para respuestas predeterminadas
    addKeyword('.').addAnswer('*¡Hola!* 👋 , Por favor, *elige una opción*  del menú escribiendo el Número correspondiente o escribe *\'menu\'* para volver al *menú principal* y seleccionar otra opción.📩📚'), // Respuesta predeterminada si no coincide con ninguna palabra clave
]);


const main = async () => {
    const adapterDB = new MockAdapter();
    const adapterFlow = createFlow([flowMensajeVoz,...flows,...FlowsMenu]);
    const adapterProvider = createProvider(BaileysProvider);

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    });

    QRPortalWeb();
};

main().catch((error) => {
    console.error('Error en la función principal:', error);
});

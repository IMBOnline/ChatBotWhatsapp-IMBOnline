const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot');
const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');
const { NumerosALetras } = require('numero-a-letras');
require('numero-a-letras');

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

var seis = 6;
const conSeis =NumerosALetras(seis).toLowerCase();


const keywordsRespuestas = [
    // Opciones del menú
    { keyword: ['Buenos dias', 'días','estudi', 'dia', 'Buenas tardes', 'hi','ola','tardes', 'buenas noches', 'noches', 'buenas', 'buen dia', 'buen', 'que tal', 'hola', 'como estas', 'info por favor', 'info porfavor', 'info', 'informacion', 'información', 'holas', 'hello', 'Vi esto en Facebook...', '¿Pueden brindarme más información?', 'Necesito información', 'Me puede brindar información','brindarme','brindar','informa','necesito', '¿Dónde están ubicados?'],
        respuesta: `*¡Buen día!* 👋 \nSoy El Asesor *IMB ONLINE* 📚\nEstoy aquí para asistirte *paso a paso. ¿Cómo Podemos Ayudarte Hoy?🤔*\n\nPor favor, *digite el número de la opción* a elegir:\n\n*1*. *Consulta con el Coordinador* 📞\n*2*. *Ubicación de Nuestro Instituto* 🌎\n*3*. *Información sobre Costos* 💰\n*4*. *Requisitos de Admisión* 📝\n*5*. *Acceso a Formularios* 📋\n*6. Carreras Técnicas* 🗃️ 🚀 \n\n *Nuestra web*: https://imb.edu.pe/`
    },

    { keyword: ['Cómo son las clases', 'Que modalidad es?', 'Es presencial o remoto?','presencial','remoto','desde'],
     respuesta: '👋 Hola, el *Instituto Manuel Banda Online* es de modalidad a distancia *(100% virtual) orientada para adultos que trabajan.*'
    },
    
    { keyword: ['menu', 'menus','seleccionar','opciones','opcion','menú'],  
        respuesta: '*¡Buen día!* 👋 \n*Le presento Nuestro menú de información*📖📚\n\nPor favor, *digite el número de la opción* a elegir:\n\n*1*. *Consulta con el Coordinador* 📞\n*2*. *Ubicación de Nuestro Instituto* 🌎\n*3*. *Información sobre Costos* 💰\n*4*. *Requisitos de Admisión* 📝\n*5*. *Acceso a Formularios* 📋\n*6. Carreras Técnicas* 🗃️ 🚀 \n\n *Nuestra web*: https://imb.edu.pe/' },

    { keyword: ['Si cumplo', '!Si cumplo¡', 'si cumploo', 'si cumplooo', 'cumplo', 'claro, si cumplo','cumplir','sicum','si cumplo'], 
         respuesta: '*¡Genial!* 😄\n\n*Un coordinador le llamará 📞 en los próximos minutos para que le proporcione más información y los pasos para su inscripción.* 📝'
    },

    { keyword: ['ok, gracias', 'ok gracias', 'ok entiendo', 'ok, entiendo','gracias','gracia','vale, gracias', 'vale, entiendo','entendido','entiend'], 
         respuesta: '*¡Perfecto!* 😊 Si tienes más preguntas o necesitas ayuda, estoy aquí para *ayudarte* en lo que necesites. 🚀'
    },

    {
      keyword: ['Métodos de Pago','donde pago','depositar','deposito','depósito','pagar','donde pago','que numero','que cuenta','yapeo','cancelo','yape','bcp','banco'],
         respuesta: '✅ *CUENTAS AUTORIZADAS A DEPOSITAR* ✅\n\n🟪 *YAPE:* 🟪\n👤 *A NOMBRE:* " *WKMB* "\n💰 *NÚMERO:* +51 968686938\n\n🟦 *BCP:* 🟦\n👤 *A NOMBRE: " WKMB SRL* "\n💰 *CTA. AHORRO:* 300-9948336-0-43\n💰 *CCI:* 00230000994833604326\n\n🟥 *BANCO DE LA NACIÓN:* 🟥\n👤 *A NOMBRE:* " *WKMB SRL* "\n💰 *CTA. CORRIENTE:* 00-813-006456\n\n⚠️ *Luego de Realizar Cualquier Tipo de Pago, Por favor adjuntar una Captura o Archivo de Voucher Para que el Coordinador Pueda Confirmalo*✅'
    },

];

const flows = keywordsRespuestas.map(({ keyword, respuesta }) =>
    addKeyword(keyword).addAnswer(respuesta)
);

const FlowsMenu = keywordsRespuestas.map(({ keyword, respuesta }) =>
    addKeyword(keyword).addAnswer(respuesta)
).concat([
    // Flujos específicos para cada opción del menú
    addKeyword([uno.toString(), conUno, 'uno', 'one', 'Atencion con el coordinador', 'llamar', 'atencion', 'comunicarme', 'llamarme', 'llamarlos', 'Asesoría', 'asesor']).addAnswer(
        ['*¡Perfecto!*, El coordinador estará en contacto contigo en los próximos minutos para atenderte. *¡Gracias por tu interés!* 😊\n\nSi prefieres, puedes llamar ahora mismo al siguiente número: *924 230 874* 📞']
    ),
    addKeyword([dos.toString(), condos, 'dos', 'Ubicación', 'ubicados', 'Ubicacion', 'donde estan', 'se encuentran', 'encuentro', 'ubicar', 'encuentran', 'direccion', 'dirección', 'Lugar', 'sitio', 'Campus', 'instalaciones', 'edificio', 'casa', 'calle', 'ruta', 'referencia', 'como llego', 'como llegar', '¿Dónde están ubicados?', 'Mandar ubicación', 'Mandenme su ubicación']).addAnswer(
        ['📍 Estamos Ubicados en *Calle La Victoria 165, Guadalupe 13841, La Libertad.*']
    ),
    addKeyword([tres.toString(),contres,'tres', 'Costos','precio','pagar','cuanto','debo pagar','tarifas','pagos','pago','mensualidad','cuota','inversión','valor','gastos']).addAnswer(
        ['*¡Hola!* 👋,Aquí te muestro los *Pagos* 📚:\n\n👏 *Si eres Apto:* \n📩 *Inscripción* : *S/100* \n✅ *Informe de convalidación PRIMER CICLO y SEGUNDO CICLO* : *S/100* \n📚 *Matrícula del TERCER CICLO*: *S/* 150\n📚 *Mensualidad del Mes de Marzo:*  *S/150* \n\n✅Si deseas Saber los Métodos de Pago , digite *"Métodos de Pago"* 💳\n\nSi tienes alguna pregunta o necesitas más información, *¡No dudes en escribirme!* 😊🚀\n\n*Oh también puedes visitar nuestra web y visualizar los costos:*  https://imb.edu.pe/admision/']
    ),
    addKeyword([cuatro.toString(), concuatro,'cuatro', 'requisitos','requerimientos','pasos','procedimiento','condiciones','pasos']).addAnswer(
        ['*¡Hola!* 👋,Aquí te muestro los *Requisitos* para tu admisión del Instituto *Manuel Banda Online*📚:\n\n🎓 *Requisitos para tu Admisión* 📋\n*✅ Ser mayor de 18 años* 🎂\n*✅ Documento de identificación válido o vigente* 📑\n*✅ Foto Personal Tipo Pasaporte* 📷\n*✅ Certificado de estudios de secundaria* 📚\n*✅ Experiencia laboral mínima de 2 años* 💼\n\nSi *cumples* con estos requisitos y necesitas más información, Por Favor Escriba *Si cumplo* 😊🚀']
    ),
    addKeyword([cinco.toString(), concinco,'sinco','cinco', 'Formularios','registro','registrarme','inscripción','inscribirme','datos','admision','Inscripción','admisión','matrícula','matriculas','matricula','Matricular','inscri']).addAnswer(
        ['*¡Hola!* 👋,Aquí te muestro los *Formularios* para tu admisión del Instituto *Manuel Banda Online*📚:\n\nEstos son los Formularios que debes completar📋:\n\n*OPCIÓN 1*\n\n📚 *Ficha de Inscripción a IMB Online*: https://docs.google.com/forms/d/e/1FAIpQLScdTYQwrOi1Hwi3b0axiVG8CXYSFM33S1vCKFUXAWJ2I9LQpg/viewform ✍️📙\n\n📚 *Ficha técnica de convalidación por competencias Primer Y Segundo Ciclo*: https://forms.gle/izroccZuJfZwS2F8A \n\n*OPCIÓN 2*\n\n📚 *Convalidación de competencias laborales Primer y Segundo Ciclo*:\nDocumento para descargar en PDF y llenar:\nhttps://bit.ly/Drive-convalidacion-IMB 🏅📚']
    ),
    addKeyword([seis.toString(),conSeis,'carreras', 'carrera','carera','profesion','profesión','vocación','vocacion','plan de estudios','plan de','especialización','Especializacion','profesi','carrer', 'Cuales son las carreras', '¿Cuales son las carreras?']).addAnswer(
        ['*¡Hola!* 👋, Por Ahora La Única Carrera Profesional Técnica Online que Contamos Es *Administración de Empresas*📚\nSi Deseas Inscribirte Escribe *\'Inscripción\'* y te brindaré las *Fichas de Inscripción y Convalidación* 📖📚\n\nSi tienes alguna pregunta o necesitas más información, *¡No dudes en escribirme!* 😊🚀']
    ),
    // Flujos para respuestas predeterminadas
    addKeyword(['.']).addAnswer('*¡Hola!* 👋 , Por favor, escribe *\'menu\'* para mostrar el *menú principal* .📩📚'), // Respuesta predeterminada si no coincide con ninguna palabra clave
]);


const main = async () => {
    const adapterDB = new MockAdapter();
    const adapterFlow = createFlow([...flows,...FlowsMenu]);
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

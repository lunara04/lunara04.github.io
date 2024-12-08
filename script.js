// Datos de los tés
const teas = {
    manzanilla: {
        ingredients: "Manzanilla, flor seca, y extracto natural calmante.",
        story: `La manzanilla es reconocida por sus propiedades antiespasmódicas, antiinflamatorias y relajantes.
        1. Calma los cólicos menstruales al relajar los músculos del útero.
        2. Contiene flavonoides que reducen la inflamación y mejoran la circulación.
        3. Proporciona una sensación de bienestar general al aliviar el estrés y la ansiedad.`
    },
    menta: {
        ingredients: "Hojas frescas de menta, extracto de mentol y esencia natural.",
        story: `La menta combina su frescura natural con propiedades analgésicas para aliviar molestias.
        1. Alivia los dolores menstruales gracias a su efecto analgésico y antiinflamatorio.
        2. Relaja los músculos uterinos, disminuyendo los espasmos y cólicos.
        3. Su efecto refrescante reduce la hinchazón, brindando confort inmediato.`
    },
    yerbanis: {
        ingredients: "Semillas de anís, hojas secas de yerbanís y aceites esenciales.",
        story: `El yerbanís (Anís) es un remedio natural ideal para calmar molestias menstruales y digestivas.
        1. Relaja los músculos, ayudando a reducir calambres y cólicos uterinos.
        2. Alivia la hinchazón y facilita la digestión, promoviendo el bienestar general.
        3. Es utilizado tradicionalmente para aliviar gases y promover una sensación de calma.`
    },
    bugambilia: {
        ingredients: "Flores de bugambilia secas y extractos botánicos.",
        story: `La bugambilia es conocida por sus propiedades calmantes y relajantes en la medicina tradicional.
        1. Relaja los músculos, aliviando espasmos leves y molestias.
        2. Proporciona un alivio natural contra el dolor moderado.
        3. Contribuye a una sensación de calma y equilibrio emocional.`
    }
};

// Configuración para las imágenes
const images = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
    "img7.jpeg"
];

let currentTea = "manzanilla"; // Té inicial
let currentImageIndex = 0; // Índice inicial de imagen

// Función para mostrar un té específico
function showTea(type) {
    currentTea = type;
    currentImageIndex = 0;

    // Cambiar imagen inicial
    document.getElementById("tea-image").src = images[currentImageIndex];

    // Actualizar información del té
    document.getElementById("ingredients-text").textContent = teas[type].ingredients;
    document.getElementById("story-text").innerHTML = teas[type].story.replace(/\\n/g, "<br>");
}

// Cambiar a la imagen anterior
function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById("tea-image").src = images[currentImageIndex];
}

// Cambiar a la imagen siguiente
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("tea-image").src = images[currentImageIndex];
}

// Inicializar con el té de manzanilla
showTea("manzanilla");

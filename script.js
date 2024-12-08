// Datos de los tés
const teas = {
    manzanilla: {
        ingredients: "Manzanilla, yerbanís, menta, y bugambilia.",
        story: `Calma los cólicos gracias a sus propiedades antiespasmódicas, antiinflamatorias y relajantes.
        1. Relaja los músculos del útero.
        2. Reduce la inflamación y mejora la circulación.
        3. Proporciona bienestar general al aliviar el estrés.`
    },
    menta: {
        ingredients: "Manzanilla, yerbanís, menta, y bugambilia.",
        story: `Alivia el dolor y relaja los músculos uterinos con su acción refrescante y analgésica.
        1. Efecto antiinflamatorio para reducir molestias.
        2. Relajación de los músculos para disminuir espasmos.
        3. Sensación de frescura y alivio inmediato.`
    },
    yerbanis: {
        ingredients: "Manzanilla, yerbanís, menta, y bugambilia.",
        story: `Reduce los calambres y la hinchazón, promoviendo el bienestar general.
        1. Alivia cólicos uterinos y digestivos.
        2. Disminuye gases e hinchazón abdominal.
        3. Relaja los músculos, brindando calma.`
    },
    bugambilia: {
        ingredients: "Manzanilla, yerbanís, menta, y bugambilia.",
        story: `Relaja los músculos y alivia molestias leves, aportando una sensación de calma.
        1. Espasmos leves reducidos con alivio natural.
        2. Sensación de bienestar y equilibrio emocional.
        3. Tradicionalmente utilizada para relajar.`
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
    document.getElementById("story-text").innerHTML = teas[type].story.replace(/\n/g, "<br>");
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

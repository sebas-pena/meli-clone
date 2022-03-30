export const Description = () => {
	let description = `
XIAOMI - SMARTPHONE
POCO X3 GT



Certificado IP53. Protección contra el polvo y las salpicaduras.
Pantalla: 6,6" MULTITÁCTIL IPS LCD, 1080 x 2400 píxeles. Cristal Gorilla Glass Victus.
DUALSIM.
2G: COMPATIBLE CON CLARO, MOVISTAR Y ANTEL, (850 / 900 / 1800 / 1900).
3G: COMPATIBLE CON CLARO, MOVISTAR Y ANTEL, (850 / 900 / 1900 / 2100).
4G: COMPATIBLE CON CLARO, MOVISTAR Y ANTEL, (BANDAS: 1, 3, 5, 8, 40, 41).
5G: B261 (28 GHz). COMPATIBLE CON ANTEL.
Procesador: OCTA CORE (4 x 2,6 GHz, Cortex A78 / 4 x 2 GHz, Cortex A55).
Sistema Operativo: ANDROID 11.
Memoria RAM: 8 GB.
Memoria ROM: 256 GB.
Cámara Principal Imagen: TRIPLE: 64 MP, f/1.8, 26mm (wide), 1/1.97", 0.7µm, PDAF / 8 MP, f/2.2, 120? (ultrawide), 1/4.0", 1.12µm / 2 MP, f/2.4, (macro). Flash LED, HDR, Panorama.
Cámara Principal Video: 4K a 30fps, 1080p a 30/60/120fps.
Cámara Selfie Imagen: 16 MP, f/2.5, (wide), 1/3.06", 1.0µm.
Cámara Selfie Video: 1080p a 30fps, 720p a 120fps, 960fps.
Conectividad: WIFI 802,11 a/b/g/n/ac/ax, BLUETOOTH 5.2.
GPS.
NFC.
Sensores: Acelerómetro, Brújula, Espectro de Colores, Giroscopio, Huella Dactilar, Proximidad Virtual.
Puertos: INFRARROJO x 1, USB 2.0 C x 1.
Peso: 193 g APROX.
Dimensiones: 163 x 76 x 9 mm APROX.
Batería: LI-PO 5000 mAh (NO extraíble).
Color: NEGRO (STARGAZE BLACK).

Garantía: 1 año.
Contra Defecto de Fabricación.

*** DIGINET *** Mercado Líder Platinum

-------------------------------------------------------------------------------------
FACTURAMOS CON RUT - NUESTROS PRECIOS INCLUYEN IVA.
-------------------------------------------------------------------------------------
ENTREGAS:

* MERCADO ENVIOS : Envíos a todo el Uruguay! Enviamos tu compra hasta la puerta de tu casa.

* ENVIO POR AGENCIA: Podemos enviar tu compra por la agencia que prefieras. Selecciona "retiro en domicilio del vendedor" durante el proceso de compra y coordina con nosotros por mensajería de mercado libre. El DESPACHO EN AGENCIA ES GRATIS !

* RETIRO (PICK UP): Lunes a Viernes 10hs a 18hs / Sábado 11hs a 14hs.

-------------------------------------------------------------------------------------

GARANTIA:
Todos nuestros artículos cuentan con la garantía.

*** DIGINET ***
`

	description = description.replaceAll(/\n/g, "<br/>")

	// prettier-ignore

	return (
		<div className="product-description">
			<h2>Descripción</h2>
      
			<p dangerouslySetInnerHTML={{__html: description}}>
      </p>
        
		</div>
	)
}

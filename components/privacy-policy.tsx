import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Política de Privacidad - Connect and Close</title>
        <meta
          name="description"
          content="Política de privacidad de Connect and Close"
        />
      </Head>
      <main className="bg-gray-50 text-gray-800 px-6 py-12">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Política de Privacidad
          </h1>
          <p className="mb-6">
            <strong>Fecha de entrada en vigor:</strong> 30 de abril de 2025
          </p>

          {/* 1. Responsable */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            1. Responsable del Tratamiento de Datos
          </h2>
          <p>
            El responsable del tratamiento de los datos personales es{" "}
            <strong>Connect and Close</strong>, un emprendimiento independiente
            sin registro formal de empresa.
          </p>
          <p className="mb-4">
            <strong>Correo electrónico de contacto:</strong>{" "}
            <a
              href="mailto:contact@connectandclose.com"
              className="text-blue-600 hover:underline"
            >
              contact@connectandclose.com
            </a>
          </p>

          {/* 2. Datos que Recopilamos */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            2. Información que Recopilamos
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Nombre y apellidos</li>
            <li>Correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Información demográfica (edad, ubicación, etc.)</li>
            <li>Dirección IP y datos de navegación</li>
            <li>Datos proporcionados mediante formularios de Facebook Lead Ads</li>
            <li>Información recopilada a través de cookies</li>
          </ul>

          {/* 3. Lead Ads */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            3. Recolección de datos desde Facebook Lead Ads
          </h2>
          <p className="mb-4">
            Cuando interactúas con formularios de anuncios en Facebook
            (Facebook Lead Ads), podemos recibir directamente desde Meta tu
            información personal, incluyendo nombre, correo electrónico,
            número de teléfono y otros datos que hayas proporcionado.
          </p>
          <p className="mb-4">
            Esta información se utiliza exclusivamente para los fines descritos
            en esta política. Al enviar tus datos mediante un formulario de
            Facebook, aceptas que Connect and Close los trate conforme a esta
            política y a la{" "}
            <a
              href="https://www.facebook.com/policy.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              política de privacidad de Facebook
            </a>
            .
          </p>

          {/* 4. Finalidad */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            4. Finalidad del Tratamiento de Datos
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Enviar contenido gratuito, recursos o guías solicitadas</li>
            <li>Gestionar consultas y solicitudes de usuarios</li>
            <li>
              Enviar comunicaciones comerciales si has dado tu consentimiento
            </li>
            <li>
              Analizar comportamiento en el sitio web para mejorar la experiencia
            </li>
            <li>Cumplir con obligaciones legales</li>
          </ul>

          {/* 5. Cookies */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            5. Uso de Cookies y Tecnologías de Seguimiento
          </h2>
          <p className="mb-4">
            Usamos cookies y tecnologías similares para entender cómo navegas en
            nuestro sitio. Entre las herramientas utilizadas están:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Google Analytics:</strong> para analizar tráfico web.</li>
            <li><strong>Píxel de Facebook:</strong> para rastrear conversiones y segmentar audiencias.</li>
          </ul>
          <p className="mb-4">
            Puedes configurar tu navegador para bloquear cookies, aunque algunas
            funciones del sitio podrían no estar disponibles.
          </p>

          {/* 6. Terceros */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            6. Compartición de Datos con Terceros
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Con proveedores que nos ayudan con servicios (email, análisis, hosting)</li>
            <li>Por requerimientos legales</li>
            <li>Con tu consentimiento explícito</li>
          </ul>

          {/* 7. Derechos */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            7. Derechos de los Usuarios
          </h2>
          <p className="mb-4">Puedes ejercer los siguientes derechos:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Acceder a tus datos personales</li>
            <li>Rectificar datos incorrectos</li>
            <li>Solicitar la eliminación de tus datos</li>
            <li>Oponerte al tratamiento</li>
            <li>Solicitar limitación del uso de datos</li>
            <li>Retirar el consentimiento en cualquier momento</li>
          </ul>
          <p className="mb-4">
            Para ello, escríbenos a{" "}
            <a
              href="mailto:contact@connectandclose.com"
              className="text-blue-600 hover:underline"
            >
              contact@connectandclose.com
            </a>{" "}
            e incluye una copia de tu documento de identidad para verificar tu
            solicitud.
          </p>

          {/* 8. Seguridad */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            8. Medidas de Seguridad
          </h2>
          <p className="mb-4">
            Implementamos medidas técnicas y organizativas adecuadas para
            proteger tus datos contra pérdida, mal uso o acceso no autorizado.
          </p>

          {/* 9. Cambios */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            9. Cambios en esta Política
          </h2>
          <p className="mb-4">
            Nos reservamos el derecho de actualizar esta Política de Privacidad
            en cualquier momento. Publicaremos los cambios en esta página y, si
            son relevantes, lo notificaremos por email o dentro del sitio.
          </p>

          <p className="italic">Última actualización: 30 de abril de 2025</p>
        </div>
      </main>
    </>
  );
}

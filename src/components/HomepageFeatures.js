import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Integración con Woocommerce',
    Svg: require('../../static/img/woocommerce-logo-color-black.svg').default,
    description: (
      <>
        Contamos con las tarifas más bajas del mercado para que maximices tus ventas.
        ¡Garantizado! <a href="docs/Integración con Plataformas/woocommerce">Descarga nuestro plugin</a> y revisa nuestra documentación.
      </>
    ),
  },
  {
    title: 'Integración con Shopify',
    Svg: require('../../static/img/shopify_logo_whitebg.svg').default,
    description: (
      <>
        Disminuye riesgos en tus transacciones por fraudes generados en contracargos.  
        Paz mental, ventas seguras.
      </>
    ),
  },
  {
    title: 'Utiliza nuestra API',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Recibe el dinero de tus ventas exitosas en menos de 24 horas, seguro y directo.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
